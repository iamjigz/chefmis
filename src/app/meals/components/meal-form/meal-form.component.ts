import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormGroupDirective, FormArray } from '@angular/forms';

import { MealsService } from '../../services/meals.service';

@Component({
  selector: 'app-meal-form',
  templateUrl: './meal-form.component.html',
  styleUrls: ['./meal-form.component.scss']
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
      diet: ['', Validators.required],
      set: ['', Validators.required],
      day: ['', Validators.required],
      meals: this.fb.array([this.createMeal()])
    });

    this.meals = this.mealForm.get('meals') as FormArray;
  }

  createMeal(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      ingredients: ['', Validators.required],
    });
  }

  addMeal() {
    this.meals = this.mealForm.get('meals') as FormArray;
    this.meals.push(this.createMeal());
  }

  getMealFormGroup(index): FormGroup {
    this.meals = this.mealForm.get('meals') as FormArray;
    const formGroup = this.meals.controls[index] as FormGroup;
    return formGroup;
  }

  async submit(formGroup: FormGroup, formDirective: FormGroupDirective) {
    console.log(this.mealForm.value);
    // this.mealForm.disable();
    // await this.meal.create({ ...this.mealForm.value });
    // this.resetForm(formGroup, formDirective);
    // this.mealForm.enable();
  }

  resetForm(formGroup: FormGroup, formDirective: FormGroupDirective): void {
    formDirective.resetForm();
    formGroup.reset();
  }

}
