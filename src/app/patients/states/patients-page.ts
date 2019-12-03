import { Patient } from '../models/patient';

export interface PatientsPage {
  loading: boolean;
  patients: Patient[];
  formStatus: string;
}
