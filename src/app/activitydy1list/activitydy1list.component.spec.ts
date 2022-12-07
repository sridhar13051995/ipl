import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Activitydy1listComponent } from './activitydy1list.component';

describe('Activitydy1listComponent', () => {
  let component: Activitydy1listComponent;
  let fixture: ComponentFixture<Activitydy1listComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Activitydy1listComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Activitydy1listComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
