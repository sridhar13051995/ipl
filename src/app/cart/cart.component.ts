import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as  fromApp  from '../appstate'
import { ProductCheckOut, ProductPlaced, UserData } from '../product';
import * as prodAction from  '../state/actions/productcheckout.action'
import * as prodplacedAction from  '../state/actions/prod.placed.action'
import { DatePipe } from '@angular/common';
import { elementAt, map } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [DatePipe]
})
export class CartComponent implements OnInit {
  myDate: string="";
  cartData:number =0;
  userData: UserData ={} as UserData;
  placeddata = [];
  placedSucess: boolean =false;
  allCartProducts:Observable<ProductCheckOut[]>;
  allCartDataProducts:Observable<ProductPlaced>;
  total:number =0;
  constructor(private router: Router,private store: Store<fromApp.AppState>,private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.store.select(fromApp.totalcheckouts).subscribe(
      d=>{
        this.cartData = d;
      }
    )
    this.store.select(fromApp.getUserData).subscribe(data =>{
      this.userData =data;
    })
    this.allCartProducts=this.store.select(fromApp.getProdChkState).pipe(map(data=> data.filter(d=> d.userid == this.userData.id )));
    this.allCartProducts.subscribe(data =>
      {
        this.total = 0 ;
        data.forEach(data =>{
          this.total = Number(data.price) + Number(this.total);
        })
        if(this.total > 0)
        {
          this.total = this.total + 50;
        }
      })
  }
  remove(id:ProductCheckOut){
    this.store.dispatch(prodAction.ProductChkDeletedStart({prod: id}))
  }

  proceedCheckout()
  {
    this.myDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd')
    var deliverydate = new Date(new Date().setDate(new Date().getDate() + 10)).toString();
    deliverydate = this.datePipe.transform(deliverydate, 'yyyy-MM-dd')
    this.allCartProducts.subscribe(data=>{
        this.store.dispatch(prodAction.ProductChkDeletedMulStart({prod: data})) 
        var datanew: ProductPlaced;
        var dattt = {
          orderdate : this.myDate,
          deliverydate :deliverydate,
         status : "Order Placed",
          address : "Chennai"
        }
        data.forEach(dataob=>
        {
          const newdata= {...dataob,...dattt}
          newdata.id=0
          this.placeddata.push(newdata);
        })      
        
    })
    
    this.store.dispatch(prodplacedAction.ProductPlacedAddMany({prod: this.placeddata}))
    this.placedSucess = true;

 
  }

  ordersList(){
    this.router.navigate(['orders']);
  }
}
