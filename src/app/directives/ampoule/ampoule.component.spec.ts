import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmpouleComponent } from './ampoule.component';

describe('AmpouleComponent', () => {
  let component: AmpouleComponent;
  let fixture: ComponentFixture<AmpouleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AmpouleComponent]
    });
    fixture = TestBed.createComponent(AmpouleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
