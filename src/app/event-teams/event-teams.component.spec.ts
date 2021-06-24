import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventTeamsComponent } from './event-teams.component';

describe('EventTeamsComponent', () => {
  let component: EventTeamsComponent;
  let fixture: ComponentFixture<EventTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
