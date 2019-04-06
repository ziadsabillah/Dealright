import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustBadgesComponent } from './trust-badges.component';

describe('TrustBadgesComponent', () => {
  let component: TrustBadgesComponent;
  let fixture: ComponentFixture<TrustBadgesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrustBadgesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrustBadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
