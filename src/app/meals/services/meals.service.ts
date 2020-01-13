import { MealsPageStore } from './meals-page.store';
import { MealFirestore } from './meals.firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Meal } from '../models/meal';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MealsService {
  public DIETS = [
    'Routine Diet/Full Diet',
    'Soft Diet',
    'Liquid Diet',
    'Low Salt Low Fat',
    'Diabetic Diet',
    'Renal Diet',
    'Renal-Diabetic Diet',
    'EHCF Diet (Except High-Colored Food)',
  ];
  public DAYS = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
  ];


  constructor(
    private firestore: MealFirestore,
    private store: MealsPageStore) {
    this.firestore.collection$().pipe(
      tap(meals => {
        this.store.patch({
          loading: false,
          meals,
        }, `meals collection subscription`);
      })
    ).subscribe();
  }

  get meals$(): Observable<Meal[]> {
    return this.store.state$.pipe(map(state => state.loading
      ? []
      : state.meals));
  }

  get loading$(): Observable<boolean> {
    return this.store.state$.pipe(map(state => state.loading));
  }

  get noResults$(): Observable<boolean> {
    return this.store.state$.pipe(
      map(state => {
        return !state.loading
          && state.meals
          && state.meals.length === 0;
      })
    );
  }

  get formStatus$(): Observable<string> {
    return this.store.state$.pipe(map(state => state.formStatus));
  }

  create(meal: Meal) {
    this.store.patch({
      loading: true,
      meals: [],
      formStatus: 'Saving...'
    }, 'meal create');
    return this.firestore.create(meal).then(_ => {
      this.store.patch({
        formStatus: 'Saved!'
      }, 'meal create SUCCESS');
      setTimeout(() => this.store.patch({
        formStatus: ''
      }, 'meal create timeout reset formStatus'), 2000);
    }).catch(err => {
      this.store.patch({
        loading: false,
        formStatus: 'An error ocurred'
      }, 'meal create ERROR');
    });
  }

  update(meal: Meal): any {
    this.store.patch({ loading: true, meals: [] }, 'meal update');
    return this.firestore.update(meal.ref, meal).catch(err => {
      this.store.patch({
        loading: false,
        formStatus: 'An error ocurred'
      }, 'meal update ERROR');
    });
  }

  delete(id: string): any {
    this.store.patch({ loading: true, meals: [] }, 'meal delete');
    return this.firestore.delete(id).catch(err => {
      this.store.patch({
        loading: false,
        formStatus: 'An error ocurred'
      }, 'meal delete ERROR');
    });
  }
}

