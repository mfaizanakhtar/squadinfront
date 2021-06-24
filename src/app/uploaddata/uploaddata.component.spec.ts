import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploaddataComponent } from './uploaddata.component';

describe('UploaddataComponent', () => {
  let component: UploaddataComponent;
  let fixture: ComponentFixture<UploaddataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploaddataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploaddataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
