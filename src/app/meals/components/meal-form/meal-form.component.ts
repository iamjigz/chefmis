import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormGroupDirective, FormArray } from '@angular/forms';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';

import * as _moment from 'moment';
import { default as _rollupMoment, Moment } from 'moment';

import { MealsService } from '../../services/meals.service';

const moment = _moment;

export const DATE_FORMAT = {
  parse: {
    dateInput: 'MMM YYYY',
  },
  display: {
    dateInput: 'MMM YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMM YYYY',
  },
};

@Component({
  selector: 'app-meal-form',
  templateUrl: './meal-form.component.html',
  styleUrls: ['./meal-form.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    { provide: MAT_DATE_FORMATS, useValue: DATE_FORMAT },
  ]
})
export class MealFormComponent implements OnInit {
  diets = [];
  days = [];
  mealForm: FormGroup;
  meals: FormArray;

  constructor(private fb: FormBuilder, public meal: MealsService) {
    this.diets = this.meal.DIETS;
    this.days = this.meal.DAYS;
  }

  ngOnInit() {
    this.mealForm = this.fb.group({
      date: [moment(), Validators.required],
      diet: ['', Validators.required],
      set: ['', Validators.required],
      day: ['', Validators.required],
      meals: this.fb.array([this.createMeal()])
    });

    this.meals = this.mealForm.get('meals') as FormArray;
  }

  yearHandler(normalizedYear: Moment) {
    const date = this.mealForm.get('date').value;
    date.year(normalizedYear.year());
    this.mealForm.get('date').setValue(date);
  }

  monthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
    const date = this.mealForm.get('date').value;
    date.month(normalizedMonth.month());
    this.mealForm.get('date').setValue(date);
    datepicker.close();
  }


  createMeal(): FormGroup {
    return this.fb.group({
      mealTime: ['', Validators.required],
      name: ['', Validators.required],
      ingredients: [''],
      nutrients: ['']
    });
  }

  addMeal() {
    this.meals = this.mealForm.get('meals') as FormArray;
    this.meals.push(this.createMeal());
  }

  removeMeal(index) {
    return this.meals.removeAt(index);
  }


  async submit(formGroup: FormGroup, formDirective: FormGroupDirective) {
    const date = this.mealForm.get('date').value;
    const formattedDate = moment(date).format('MMM YYYY');
    this.mealForm.get('date').setValue(formattedDate);

    this.mealForm.disable();
    await this.meal.create({ ...this.mealForm.value });
    this.resetForm(formGroup, formDirective);
    this.mealForm.enable();
  }

  resetForm(formGroup: FormGroup, formDirective: FormGroupDirective): void {
    formDirective.resetForm();
    formGroup.reset();
  }

}
