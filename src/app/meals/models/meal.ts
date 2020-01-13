export interface Meal {
  ref?: string;
  diet: string;
  set: string;
  day: string;
  breakfast: Menu[];
  lunch: Menu[];
  supper: Menu[];
}

export interface Menu {
  name: string;
  ingredients: string[];
}
