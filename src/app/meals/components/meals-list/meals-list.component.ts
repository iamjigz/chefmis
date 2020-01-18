import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, Validators, FormGroup, FormGroupDirective, FormArray } from '@angular/forms';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';

import * as _moment from 'moment';
import { default as _rollupMoment, Moment } from 'moment';

import { MealsService } from '../../services/meals.service';
import { Meal } from '../../models/meal';

const moment = _moment;

@Component({
  selector: 'app-meals-list',
  templateUrl: './meals-list.component.html',
  styleUrls: ['./meals-list.component.scss']
})
export class MealsListComponent implements OnInit {
  loading$: Observable<boolean>;
  meals: Meal[];
  noResults$: Observable<boolean>;
  mealForm: FormGroup;
  diets = [];

  constructor(private fb: FormBuilder, public meal: MealsService) {
    this.diets = this.meal.DIETS;
  }

  ngOnInit() {
    this.loading$ = this.meal.loading$;
    this.noResults$ = this.meal.noResults$;
    this.meal.meals$.subscribe(data => this.meals = data);
    this.mealForm = this.fb.group({
      date: [moment(), Validators.required],
      diet: [''],
    });
  }

  async submit(formGroup: FormGroup, formDirective: FormGroupDirective) {
    const date = this.mealForm.get('date').value;
    const day = moment(date).format('dddd');
    const diet = this.mealForm.get('diet').value;
    const formattedDate = moment(date).format('MMM YYYY');
    await this.meal.query(formattedDate, day, diet).subscribe(data => this.meals = data);
  }
}
