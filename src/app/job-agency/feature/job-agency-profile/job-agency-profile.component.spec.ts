import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAgencyProfileComponent } from './job-agency-profile.component';

describe('JobAgencyProfileComponent', () => {
  let component: JobAgencyProfileComponent;
  let fixture: ComponentFixture<JobAgencyProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobAgencyProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobAgencyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
