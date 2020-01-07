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
    'department',
    'bedNo',
    'dietType',
    'dateDischarged',
    'action'
  ];
  dataSource: MatTableDataSource<Patient>;
  expandedRow: Patient | null;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private patients: PatientsService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.loading$ = this.patients.loading$;
    this.noResults$ = this.patients.noResults$;
    this.patients$ = this.patients.patients$;
    this.patients$.subscribe((patientData: Patient[]) => {
      this.dataSource = new MatTableDataSource(patientData);
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

  dischargePatient(patient: Patient) {
    if (patient.status === 'admitted') {
      const update = patient;
      update.status = 'discharged';
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
