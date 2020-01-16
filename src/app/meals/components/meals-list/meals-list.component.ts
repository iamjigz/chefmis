import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Meal } from '../../models/meal';
import { MealsService } from '../../services/meals.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-meals-list',
  templateUrl: './meals-list.component.html',
  styleUrls: ['./meals-list.component.scss']
})
export class MealsListComponent implements OnInit {
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
