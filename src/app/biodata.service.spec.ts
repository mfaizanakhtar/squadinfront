import { TestBed } from '@angular/core/testing';

import { BiodataService } from './biodata.service';

describe('BiodataService', () => {
  let service: BiodataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BiodataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
