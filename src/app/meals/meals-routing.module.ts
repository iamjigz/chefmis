import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MealsPageComponent } from './components/meals-page/meals-page.component';

const routes: Routes = [
  { path: 'meals', component: MealsPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MealsRoutingModule { }
