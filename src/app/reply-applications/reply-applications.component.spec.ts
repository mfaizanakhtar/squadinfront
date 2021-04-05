import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplyApplicationsComponent } from './reply-applications.component';

describe('ReplyApplicationsComponent', () => {
  let component: ReplyApplicationsComponent;
  let fixture: ComponentFixture<ReplyApplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplyApplicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplyApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
