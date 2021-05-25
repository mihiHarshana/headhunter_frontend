import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAgencyHomeComponent } from './job-agency-home.component';

describe('JobAgencyHomeComponent', () => {
  let component: JobAgencyHomeComponent;
  let fixture: ComponentFixture<JobAgencyHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobAgencyHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobAgencyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
