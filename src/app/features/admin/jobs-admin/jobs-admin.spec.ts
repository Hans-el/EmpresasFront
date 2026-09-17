import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsAdmin } from './jobs-admin';

describe('JobsAdmin', () => {
  let component: JobsAdmin;
  let fixture: ComponentFixture<JobsAdmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobsAdmin],
    }).compileComponents();

    fixture = TestBed.createComponent(JobsAdmin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
