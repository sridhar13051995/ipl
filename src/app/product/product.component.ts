import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service'
import { ActivatedRoute, Router } from '@angular/router';
import {Observable, Subscription} from 'rxjs'
import { Store } from '@ngrx/store';
import * as  fromApp  from '../appstate'
import { Product } from '../product';
import * as prodAction from  '../state/actions/product.action'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit, OnDestroy {
  prodList: any = [];
  loading: boolean = false;
  itemChange = new Subscription();
  allProducts:Observable<Product[]>;
  addid = '1'

  constructor(private store: Store<fromApp.AppState>,private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.itemChange = this.productService.onProductChange.subscribe((data) => {
    //   this.updateData(data);
    // })
    // this.loadData();
    this.store.dispatch(prodAction.LoadProduct())
    this.allProducts = this.store.select(fromApp.getProdState)
    // this.allProducts.subscribe(d=>{
    //     this.addid = String(d.length+1);
    //     this.loading = false;
    // })

    this.store.select(fromApp.totalPlusOne,{Add:1}).subscribe(
      d=>{
        this.addid = String(d);   
      }
    )
  }

  ngOnDestroy(): void {
    //this.itemChange.unsubscribe();
  }
  datas(id)
  {
    this.store.dispatch(prodAction.ProductSelected({id: id}))
  }
  // loadData() {
  //   this.productService.getProducts().subscribe((d) => {
  //     this.loading = false;
  //     this.prodList = d;
  //   })
  // }


  // updateData(input: any) {
  //   switch (input.action) {
  //     case 'edit':
  //       this.prodList[this.prodList.findIndex((d) => d.id == input.data.id)] = input.data;
  //       break;
  //     case 'add':
  //       this.prodList.push(input.data);
  //       break;
  //     case 'delete':
  //       this.prodList.splice(this.prodList.findIndex((d) => d.id == input.data.id), 1);
  //       break;
  //   }
  // }

  Add() {
    this.productService.mode = 'add';
    this.router.navigate([this.addid,'addproduct'], { relativeTo: this.route });
  }
}
