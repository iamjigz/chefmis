import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Meal } from '../../models/meal';
import { MealsService } from '../../services/meals.service';

@Component({
  selector: 'app-meal-detail',
  templateUrl: './meal-detail.component.html',
  styleUrls: ['./meal-detail.component.scss']
})
export class MealDetailComponent implements OnInit {
  loading$: Observable<boolean>;
  meals$: Observable<Meal[]>;
  noResults$: Observable<boolean>;

  constructor(private meals: MealsService) { }

  ngOnInit() {
    this.loading$ = this.meals.loading$;
    this.noResults$ = this.meals.noResults$;
    this.meals$ = this.meals.meals$;
  }

}
