import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationsAdmin } from './applications-admin';

describe('ApplicationsAdmin', () => {
  let component: ApplicationsAdmin;
  let fixture: ComponentFixture<ApplicationsAdmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicationsAdmin],
    }).compileComponents();

    fixture = TestBed.createComponent(ApplicationsAdmin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
