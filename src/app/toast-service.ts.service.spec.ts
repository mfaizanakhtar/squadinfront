import { TestBed } from '@angular/core/testing';

import { ToastService.TsService } from './toast-service.ts.service';

describe('ToastService.TsService', () => {
  let service: ToastService.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastService.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
