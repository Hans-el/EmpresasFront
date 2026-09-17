import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesList } from './services-list';

describe('ServicesList', () => {
  let component: ServicesList;
  let fixture: ComponentFixture<ServicesList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesList],
    }).compileComponents();

    fixture = TestBed.createComponent(ServicesList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
