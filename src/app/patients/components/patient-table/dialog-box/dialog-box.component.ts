import { Component, Inject, Optional } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormGroupDirective, Form } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Patient } from '../../../models/patient';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent {
  action: string;
  localData: any;
  patientForm = this.fb.group({
    ref: [null, Validators.required],
    id: [null, Validators.required],
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    dateAdmitted: [new Date(), Validators.required],
    dateDischarged: [new Date(), Validators.required],
    department: [null, Validators.required],
    bedNo: [null, Validators.required],
    dietType: ['', Validators.required],
    status: ['admitted', Validators.required],
    remarks: ['None', Validators.required],
    action: [null, Validators.required]
  });

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

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Patient
  ) {
    this.localData = { ...data };
    this.patientForm.setValue({ ...data, dateDischarged: data.dateDischarged ? data.dateDischarged : new Date() });
    this.parseTimestamp(this.localData);
    this.action = this.localData.action;
  }

  parseTimestamp(data) {
    this.patientForm.patchValue({
      dateAdmitted: data.dateAdmitted.toDate(),
      dateDischarged: data.dateDischarged ? data.dateDischarged : new Date()
    });
  }

  doAction() {
    this.dialogRef.close({ event: this.action, data: this.patientForm.value });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }
}
