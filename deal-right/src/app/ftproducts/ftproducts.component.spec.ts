import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtproductsComponent } from './ftproducts.component';

describe('FtproductsComponent', () => {
  let component: FtproductsComponent;
  let fixture: ComponentFixture<FtproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
