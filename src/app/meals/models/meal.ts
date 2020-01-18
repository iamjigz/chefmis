export interface Meal {
  ref?: string;
  date: string;
  diet: string;
  set: string;
  day: string;
  meals: Menu[];
}

export interface Menu {
  id: number | string;
  mealTime: string;
  name: string;
  ingredients: string | string[];
  nutrients: string | string[];
}
