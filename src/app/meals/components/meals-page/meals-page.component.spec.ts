import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealsPageComponent } from './meals-page.component';

describe('MealsPageComponent', () => {
  let component: MealsPageComponent;
  let fixture: ComponentFixture<MealsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
