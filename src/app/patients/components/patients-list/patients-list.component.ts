import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Patient } from '../../models/patient';
import { PatientsService } from '../../services/patients.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.scss']
})
export class PatientsListComponent implements OnInit {
  loading$: Observable<boolean>;
  patients$: Observable<Patient[]>;
  noResults$: Observable<boolean>;

  constructor(private patients: PatientsService) { }

  ngOnInit() {
    this.loading$ = this.patients.loading$;
    this.noResults$ = this.patients.noResults$;
    this.patients$ = this.patients.patients$;
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
    this.patients.delete(patient.ref);
  }

}
