import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { MaterialModule } from './../core/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { PatientsPageComponent } from './components/patients-page/patients-page.component';
import { PatientsListComponent } from './components/patients-list/patients-list.component';
import { PatientFormComponent } from './components/patient-form/patient-form.component';


@NgModule({
  declarations: [PatientsPageComponent, PatientsListComponent, PatientFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    PatientsRoutingModule,
  ],
  exports: [PatientsPageComponent, PatientsListComponent]
})
export class PatientsModule { }
