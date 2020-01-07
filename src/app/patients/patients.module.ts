import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { MaterialModule } from './../core/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { PatientsPageComponent } from './components/patients-page/patients-page.component';
import { PatientFormComponent } from './components/patient-form/patient-form.component';
import { PatientsListComponent } from './components/patients-list/patients-list.component';
import { PatientTableComponent } from './components/patient-table/patient-table.component';
import { DialogBoxComponent } from './components/patient-table/dialog-box/dialog-box.component';


@NgModule({
  declarations: [PatientsPageComponent, PatientFormComponent, PatientsListComponent, PatientTableComponent, DialogBoxComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    PatientsRoutingModule,
  ],
  exports: [PatientsPageComponent, PatientsListComponent],
  entryComponents: [DialogBoxComponent]
})
export class PatientsModule { }
