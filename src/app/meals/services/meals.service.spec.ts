import { TestBed } from '@angular/core/testing';

import { MealsService } from './meals.service';

describe('MealsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MealsService = TestBed.get(MealsService);
    expect(service).toBeTruthy();
  });
});
