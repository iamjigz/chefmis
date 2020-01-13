import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import * as firebase from 'firebase';

import { Patient } from '../../models/patient';
import { PatientsService } from '../../services/patients.service';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { MatSlideToggleChange } from '@angular/material';

@Component({
  selector: 'app-patient-table',
  templateUrl: './patient-table.component.html',
  styleUrls: ['./patient-table.component.scss']
})
export class PatientTableComponent implements OnInit {
  loading$: Observable<boolean>;
  patients$: Observable<Patient[]>;
  noResults$: Observable<boolean>;
  displayedColumns: string[] = [
    'dateAdmitted',
    'firstName',
    'lastName',
    'ward',
    'bedNo',
    'diet',
    'dateDischarged',
    'action'
  ];
  patientList: Patient[];
  admitted: Patient[];
  dataSource: MatTableDataSource<Patient>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private patients: PatientsService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.loading$ = this.patients.loading$;
    this.noResults$ = this.patients.noResults$;
    this.patients$ = this.patients.patients$;
    this.patients$.subscribe((patientData: Patient[]) => {
      this.patientList = patientData;
      this.admitted = this.patientList.filter(patient => patient.isAdmitted);
      this.dataSource = new MatTableDataSource(this.admitted);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  togglePatients(changeEvent: MatSlideToggleChange) {
    return this.dataSource.data = changeEvent.checked ? this.patientList : this.admitted;
  }

  dischargePatient(patient: Patient) {
    if (patient.isAdmitted === true) {
      const update = patient;
      update.isAdmitted = false;
      update.dateDischarged = firebase.firestore.Timestamp.now();
      this.update(update);
    }
  }

  update(patient: Patient) {
    return this.patients.update(patient);
  }

  delete(patient: Patient) {
    return this.patients.delete(patient.ref);
  }

  openDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: 'auto',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event === 'Update') {
        this.update(result.data);
      } else if (result.event === 'Discharge') {
        this.dischargePatient(result.data);
      } else if (result.event === 'Delete') {
        this.delete(result.data);
      }
    });
  }
}
