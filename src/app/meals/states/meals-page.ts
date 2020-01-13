import { Meal } from '../models/meal';

export interface MealsPage {
  loading: boolean;
  meals: Meal[];
  formStatus: string;
}
