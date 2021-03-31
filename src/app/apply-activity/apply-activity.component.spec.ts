import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyActivityComponent } from './apply-activity.component';

describe('ApplyActivityComponent', () => {
  let component: ApplyActivityComponent;
  let fixture: ComponentFixture<ApplyActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
