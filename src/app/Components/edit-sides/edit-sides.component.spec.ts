import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSidesComponent } from './edit-sides.component';

describe('EditSidesComponent', () => {
  let component: EditSidesComponent;
  let fixture: ComponentFixture<EditSidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSidesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
