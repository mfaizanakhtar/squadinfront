import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadEquipmentComponent } from './upload-equipment.component';

describe('UploadEquipmentComponent', () => {
  let component: UploadEquipmentComponent;
  let fixture: ComponentFixture<UploadEquipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadEquipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
