import { TestBed } from '@angular/core/testing';

import { RepondeventService } from './repondevent.service';

describe('RepondeventService', () => {
  let service: RepondeventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepondeventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
