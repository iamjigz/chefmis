import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormGroupDirective } from '@angular/forms';

import { PatientsService } from '../../services/patients.service';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.scss']
})
export class PatientFormComponent {
  patientForm = this.fb.group({
    id: [null, Validators.required],
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    dateAdmitted: [new Date(), Validators.required],
    department: [null, Validators.required],
    bedNo: [null, Validators.required],
    dietType: ['', Validators.required],
    status: ['admitted', Validators.required],
    remarks: ['None', Validators.required],
  });

  hasUnitNumber = false;

  deptList = [
    'Pay',
    'Philhealth',
    'Pedia',
    'OB',
    'Surgery',
    'Medicine'
  ];

  dietTypes = [
    'Routine Diet/Full Diet',
    'Soft Diet',
    'Liquid Diet',
    'Low Salt Low Fat',
    'Diabetic Diet',
    'Renal Diet',
    'Renal-Diabetic Diet',
    'EHCF Diet (Except High-Colored Food)',
    'Others'
  ];

  constructor(private fb: FormBuilder, public patient: PatientsService) { }

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
