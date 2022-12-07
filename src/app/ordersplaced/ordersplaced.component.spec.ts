import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersplacedComponent } from './ordersplaced.component';

describe('OrdersplacedComponent', () => {
  let component: OrdersplacedComponent;
  let fixture: ComponentFixture<OrdersplacedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersplacedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersplacedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
