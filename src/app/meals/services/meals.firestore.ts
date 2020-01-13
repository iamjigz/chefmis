import { Injectable } from '@angular/core';
import { FirestoreService } from 'src/app/core/services/firestore.service';
import { Meal } from '../models/meal';

@Injectable({
  providedIn: 'root'
})
export class MealFirestore extends FirestoreService<Meal> {

  protected basePath = 'meal';

}
