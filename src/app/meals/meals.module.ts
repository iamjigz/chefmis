import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../core/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { MealsRoutingModule } from './meals-routing.module';
import { MealsPageComponent } from './components/meals-page/meals-page.component';
import { MealDetailComponent } from './components/meal-detail/meal-detail.component';
import { MealFormComponent } from './components/meal-form/meal-form.component';


@NgModule({
  declarations: [MealsPageComponent, MealDetailComponent, MealFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    MealsRoutingModule
  ]
})
export class MealsModule { }
