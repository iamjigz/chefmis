import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../core/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { MealsRoutingModule } from './meals-routing.module';
import { MealsPageComponent } from './components/meals-page/meals-page.component';
import { MealsListComponent } from './components/meals-list/meals-list.component';
import { MealsFormComponent } from './components/meals-form/meals-form.component';


@NgModule({
  declarations: [MealsPageComponent, MealsListComponent, MealsFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    MealsRoutingModule
  ]
})
export class MealsModule { }
