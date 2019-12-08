import { Patient } from '../../models/patient';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PatientsService } from '../../services/patients.service';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.scss']
})
export class PatientsListComponent implements OnInit {
  loading$: Observable<boolean>;
  patients$: Observable<Patient[]>;
  noResults$: Observable<boolean>;

  constructor(
    private patients: PatientsService
  ) { }

  ngOnInit() {
    this.loading$ = this.patients.loading$;
    this.noResults$ = this.patients.noResults$;
    this.patients$ = this.patients.patients$;
  }

  update(patient: Patient) {
  }

  delete(patient: Patient) {
    this.patients.delete(patient.id);
  }

}
