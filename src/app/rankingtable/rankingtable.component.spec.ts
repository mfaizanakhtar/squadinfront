import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingtableComponent } from './rankingtable.component';

describe('RankingtableComponent', () => {
  let component: RankingtableComponent;
  let fixture: ComponentFixture<RankingtableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingtableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
