import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgEquipmentComponent } from './msg-equipment.component';

describe('MsgEquipmentComponent', () => {
  let component: MsgEquipmentComponent;
  let fixture: ComponentFixture<MsgEquipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsgEquipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
