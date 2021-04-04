import { TestBed } from '@angular/core/testing';

import { RespondactivityService } from './respondactivity.service';

describe('RespondactivityService', () => {
  let service: RespondactivityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RespondactivityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
