import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {ProductService} from '../../service/product.service'
import { Products } from '../models/product.model';
import * as  fromApp  from '../appstate'
import * as prodAction from  '../state/actions/product.action'
import { Update } from '@ngrx/entity';
import { Product } from '../product';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-edit-product-item',
  templateUrl: './edit-product-item.component.html',
  styleUrls: ['./edit-product-item.component.css']
})
export class EditProductItemComponent implements OnInit {

  constructor( private store: Store<fromApp.AppState>,private route: ActivatedRoute,private router: Router,private productService: ProductService) { }

  id = '';
  isEdit =  true;
  prodDet: Products ={} as Products ; //or  prodDet:<Products> Products ={} 
  ngOnInit(): void {
    this.route.data.subscribe((d) =>{
      this.isEdit = d['isEditMode'];
    });
    console.log('sridhar '+this.isEdit)

    if(this.isEdit)
    {
      this.route.params.subscribe((p) => {
        this.id = p['id'];
        // this.productService.getProductDetails(Number(this.id)).subscribe((d)=>
        // {
        //   this.prodDet = d;
        // })       
      });
      this.store.select(fromApp.getProdEntityState).pipe(take(1)).subscribe(data=>{
        if(this.id !='')
        {
          console.log('sridhar Test')
         this.prodDet = {...data[this.id]};
        }   
       })
  }
  else
  {
    this.prodDet = {} as Products
    this.route.params.subscribe((p) => {
      this.prodDet.id = p['id'];      
    });
    
  }}
  home()
  {
    this.router.navigate([this.id,'product']);
  }
  update()
  {
    // this.productService.updateProduct(this.prodDet).subscribe(
    //   (d)=>{
    //     //this.productService.mode = 'edit';
    //     //this.productService.onProductChange.next(this.prodDet);
    //     this.productService.onProductChange.next({action:"edit",data: this.prodDet});
    //     this.router.navigate(['product',this.id]);
    //   }
    // )
    console.log(this.prodDet)
    const up:Update<Product> ={
      id: +this.prodDet.id,
      changes:this.prodDet 
    };
    this.store.dispatch(prodAction.ProductEditInProgress({prod: this.prodDet}))
    this.router.navigate(['product',this.prodDet.id]);
    this.store.dispatch(prodAction.ProductSelected({id: String(this.prodDet.id)}))
    
    
  }
  AddProduct()
  {
   // console.log(this.prodDet)
    this.store.dispatch(prodAction.ProductAdd({prod: this.prodDet})) 
    this.router.navigate(['product',this.prodDet.id]); 
    this.store.dispatch(prodAction.ProductSelected({id: String(this.prodDet.id)}))
  }
}
