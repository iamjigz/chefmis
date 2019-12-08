import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Patient } from './../../models/patient';

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
    dietType: ['routine', Validators.required],
    status: ['admitted', Validators.required],
    remarks: ['None', Validators.required],
  });

  hasUnitNumber = false;

  deptList = [
    'Nutrition',
    'Dietary',
    'Surgery',
    'Cardiology',
    'Emergency'
  ];

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    alert('Thanks!');
  }
}
