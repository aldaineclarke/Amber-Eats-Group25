import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealsCatalogueComponent } from './meals-catalogue.component';

describe('MealsCatalogueComponent', () => {
  let component: MealsCatalogueComponent;
  let fixture: ComponentFixture<MealsCatalogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealsCatalogueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealsCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
