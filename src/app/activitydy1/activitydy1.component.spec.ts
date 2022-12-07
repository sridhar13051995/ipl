import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Activitydy1Component } from './activitydy1.component';

describe('Activitydy1Component', () => {
  let component: Activitydy1Component;
  let fixture: ComponentFixture<Activitydy1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Activitydy1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Activitydy1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
