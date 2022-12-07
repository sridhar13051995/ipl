import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdetComponent } from './productdet.component';

describe('ProductdetComponent', () => {
  let component: ProductdetComponent;
  let fixture: ComponentFixture<ProductdetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductdetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductdetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
