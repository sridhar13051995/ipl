
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import {  OnDestroy} from '@angular/core';
import { ProductService } from '../../service/product.service'
import {  Router } from '@angular/router';
import {Observable, Subscription} from 'rxjs'
import * as  fromApp  from '../appstate'
import { UserData, ProductPlaced } from '../product';
import * as prodAction from  '../state/actions/prod.placed.action'
import { map } from 'rxjs/operators';
import * as prodMainAction from  '../state/actions/product.action'


@Component({
  selector: 'app-ordersplaced',
  templateUrl: './ordersplaced.component.html',
  styleUrls: ['./ordersplaced.component.css']
})
export class OrdersplacedComponent implements OnInit {
  userData: UserData ={} as UserData;
  hasData: boolean = false;
  allProducts:Observable<ProductPlaced[]>;
    constructor(private store: Store<fromApp.AppState>,private productService: ProductService, private router: Router, private route: ActivatedRoute) { }
  id= "";
  
    
    ngOnInit(): void {
      this.hasData=false;
      this.store.select(fromApp.getUserData).subscribe(data =>{
        this.userData =data;
      })
      this.store.select(fromApp.loadedData).subscribe(data =>{
        if(data == false)
        {
          this.store.dispatch(prodMainAction.LoadProduct())
        }
      }
      )
      this.store.dispatch(prodAction.LoadProductPlaced())
      
      
      this.allProducts = this.store.select(fromApp.getCompleteDataOrders).pipe(map(data=> data.allData)).pipe(map(data=> data.filter(d=> d.userid==this.userData.id) ));

      this.allProducts.subscribe(data => 
        {
          this.hasData = data.length > 0;
        })
  
      
    }
    datas(id)
    {
      // alert('clicked')
      this.store.dispatch(prodMainAction.ProductSelected({id: id}))
      this.router.navigate(['productsList']);
    }

}

