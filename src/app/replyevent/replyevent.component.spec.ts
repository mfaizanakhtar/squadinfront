import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplyeventComponent } from './replyevent.component';

describe('ReplyeventComponent', () => {
  let component: ReplyeventComponent;
  let fixture: ComponentFixture<ReplyeventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplyeventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplyeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
