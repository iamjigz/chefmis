import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PatientsPageComponent } from './components/patients-page/patients-page.component';
import { PatientsListComponent } from './components/patients-list/patients-list.component';
import { PatientsFormComponent } from './components/patients-form/patients-form.component';


@NgModule({
  declarations: [PatientsPageComponent, PatientsListComponent, PatientsFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PatientsRoutingModule
  ]
})
export class PatientsModule { }
