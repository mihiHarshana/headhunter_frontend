import { TestBed } from '@angular/core/testing';

import { JobAgencyService } from './job-agency.service';

describe('JobAgencyService', () => {
  let service: JobAgencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobAgencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
