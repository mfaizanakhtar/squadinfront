import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventapplicantsComponent } from './eventapplicants.component';

describe('EventapplicantsComponent', () => {
  let component: EventapplicantsComponent;
  let fixture: ComponentFixture<EventapplicantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventapplicantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventapplicantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
