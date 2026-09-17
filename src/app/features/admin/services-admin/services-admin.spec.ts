import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesAdmin } from './services-admin';

describe('ServicesAdmin', () => {
  let component: ServicesAdmin;
  let fixture: ComponentFixture<ServicesAdmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesAdmin],
    }).compileComponents();

    fixture = TestBed.createComponent(ServicesAdmin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
