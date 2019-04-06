import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtocartModalComponent } from './addtocart-modal.component';

describe('AddtocartModalComponent', () => {
  let component: AddtocartModalComponent;
  let fixture: ComponentFixture<AddtocartModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtocartModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtocartModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
