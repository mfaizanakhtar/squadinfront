import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamcreateComponent } from './teamcreate.component';

describe('TeamcreateComponent', () => {
  let component: TeamcreateComponent;
  let fixture: ComponentFixture<TeamcreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamcreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
