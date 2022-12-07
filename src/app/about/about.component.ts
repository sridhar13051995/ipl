import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import {  OnDestroy} from '@angular/core';
import { ProductService } from '../../service/product.service'
import {  Router } from '@angular/router';
import {Observable, Subscription} from 'rxjs'
import * as  fromApp  from '../appstate'
import { Product } from '../product';
import * as prodAction from  '../state/actions/product.action'
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  allProducts:Observable<Product[]>;
  constructor(private store: Store<fromApp.AppState>,private productService: ProductService, private router: Router, private route: ActivatedRoute) { }
id= "";

  
  ngOnInit(): void {
    this.store.select(fromApp.loadedData).subscribe(data =>{
      if(data == false)
      {
        this.store.dispatch(prodAction.LoadProduct())
      }
    }
    )
    
    this.allProducts = this.store.select(fromApp.getCompleteData).pipe(map(data=> data.allData));

    
  }
  datas(id)
  {
    //alert('clicked')
    this.store.dispatch(prodAction.ProductSelected({id: id}))
    this.router.navigate(['productsList']);
  }

}
