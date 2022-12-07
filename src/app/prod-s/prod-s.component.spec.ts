import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdSComponent } from './prod-s.component';

describe('ProdSComponent', () => {
  let component: ProdSComponent;
  let fixture: ComponentFixture<ProdSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
