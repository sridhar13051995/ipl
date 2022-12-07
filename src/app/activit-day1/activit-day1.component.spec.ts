import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitDay1Component } from './activit-day1.component';

describe('ActivitDay1Component', () => {
  let component: ActivitDay1Component;
  let fixture: ComponentFixture<ActivitDay1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitDay1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitDay1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
