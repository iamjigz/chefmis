import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormGroupDirective } from '@angular/forms';

import { PatientsService } from '../../services/patients.service';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.scss']
})
export class PatientFormComponent {
  wards = [];
  diets = [];
  patientForm = this.fb.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    dateAdmitted: [new Date(), Validators.required],
    ward: [null, Validators.required],
    bedNo: [null, Validators.required],
    diet: ['', Validators.required],
    isAdmitted: [true, Validators.required],
    remarks: ['None', Validators.required],
  });

  constructor(private fb: FormBuilder, public patient: PatientsService) {
    this.wards = this.patient.WARDS;
    this.diets = this.patient.DIETS;
  }

  async submit(formGroup: FormGroup, formDirective: FormGroupDirective) {
    this.patientForm.disable();
    await this.patient.create({ ...this.patientForm.value });
    this.resetForm(formGroup, formDirective);
    this.patientForm.enable();
  }

  resetForm(formGroup: FormGroup, formDirective: FormGroupDirective): void {
    formDirective.resetForm();
    formGroup.reset();
  }
}
