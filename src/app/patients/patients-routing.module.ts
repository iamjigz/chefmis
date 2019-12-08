import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientsPageComponent } from './components/patients-page/patients-page.component';
import { PatientFormComponent } from './components/patient-form/patient-form.component';
import { PatientsListComponent } from './components/patients-list/patients-list.component';

const routes: Routes = [
  { path: 'patients', component: PatientsPageComponent },
  { path: 'patientform', component: PatientFormComponent },
  { path: 'patientlist', component: PatientsListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule { }
