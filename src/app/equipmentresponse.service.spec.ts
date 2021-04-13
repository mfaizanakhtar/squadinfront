import { TestBed } from '@angular/core/testing';

import { EquipmentresponseService } from './equipmentresponse.service';

describe('EquipmentresponseService', () => {
  let service: EquipmentresponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquipmentresponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
