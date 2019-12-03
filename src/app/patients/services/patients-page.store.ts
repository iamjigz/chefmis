import { PatientsPage } from '../states/patients-page';
import { StoreService } from 'src/app/core/services/store.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientsPageStore extends StoreService<PatientsPage> {
  protected store = 'patients-page';

  constructor() {
    super({
      loading: true,
      patients: [],
    });
  }
}
