import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSidesComponent } from './add-sides.component';

describe('AddSidesComponent', () => {
  let component: AddSidesComponent;
  let fixture: ComponentFixture<AddSidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSidesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
