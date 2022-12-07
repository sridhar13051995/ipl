import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Activitydy1formComponent } from './activitydy1form.component';

describe('Activitydy1formComponent', () => {
  let component: Activitydy1formComponent;
  let fixture: ComponentFixture<Activitydy1formComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Activitydy1formComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Activitydy1formComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
