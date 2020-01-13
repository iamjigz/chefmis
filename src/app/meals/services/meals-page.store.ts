import { MealsPage } from '../states/meals-page';
import { StoreService } from 'src/app/core/services/store.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MealsPageStore extends StoreService<MealsPage> {
  protected store = 'meals-page';

  constructor() {
    super({
      loading: true,
      meals: [],
    });
  }
}
