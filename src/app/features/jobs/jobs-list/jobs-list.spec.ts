import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsList } from './jobs-list';

describe('JobsList', () => {
  let component: JobsList;
  let fixture: ComponentFixture<JobsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobsList],
    }).compileComponents();

    fixture = TestBed.createComponent(JobsList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
