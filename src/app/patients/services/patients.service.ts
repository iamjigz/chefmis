import { PatientsPageStore } from './patients-page.store';
import { PatientFirestore } from './patient.firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  constructor(
    private firestore: PatientFirestore,
    private store: PatientsPageStore
  ) {
    this.firestore.collection$().pipe(
      tap(patients => {
        this.store.patch({
          loading: false,
          patients,
        }, `patients collection subscription`);
      })
    ).subscribe();
  }

  get patients$(): Observable<Patient[]> {
    return this.store.state$.pipe(map(state => state.loading
      ? []
      : state.patients));
  }

  get loading$(): Observable<boolean> {
    return this.store.state$.pipe(map(state => state.loading));
  }

  get noResults$(): Observable<boolean> {
    return this.store.state$.pipe(
      map(state => {
        return !state.loading
          && state.patients
          && state.patients.length === 0;
      })
    );
  }

  get formStatus$(): Observable<string> {
    return this.store.state$.pipe(map(state => state.formStatus));
  }

  create(patient: Patient) {
    this.store.patch({
      loading: true,
      patients: [],
      formStatus: 'Saving...'
    }, 'patient create');
    return this.firestore.create(patient).then(_ => {
      this.store.patch({
        formStatus: 'Saved!'
      }, 'patient create SUCCESS');
      setTimeout(() => this.store.patch({
        formStatus: ''
      }, 'patient create timeout reset formStatus'), 2000);
    }).catch(err => {
      this.store.patch({
        loading: false,
        formStatus: 'An error ocurred'
      }, 'patient create ERROR');
    });
  }

  delete(id: string): any {
    this.store.patch({ loading: true, patients: [] }, 'patient delete');
    return this.firestore.delete(id).catch(err => {
      this.store.patch({
        loading: false,
        formStatus: 'An error ocurred'
      }, 'patient delete ERROR');
    });
  }
}
