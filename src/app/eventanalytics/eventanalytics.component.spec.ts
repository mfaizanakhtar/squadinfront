import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventanalyticsComponent } from './eventanalytics.component';

describe('EventanalyticsComponent', () => {
  let component: EventanalyticsComponent;
  let fixture: ComponentFixture<EventanalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventanalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventanalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
