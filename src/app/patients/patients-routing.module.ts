import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientsPageComponent } from './components/patients-page/patients-page.component';
import { PatientTableComponent } from './components/patient-table/patient-table.component';

const routes: Routes = [
  { path: 'patients', component: PatientsPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule { }
