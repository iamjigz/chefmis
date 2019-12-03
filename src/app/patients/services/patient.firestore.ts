import { Injectable } from '@angular/core';
import { FirestoreService } from 'src/app/core/services/firestore.service';
import { Patient } from '../models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientFirestore extends FirestoreService<Patient> {
  protected basePath = 'patients';
}
