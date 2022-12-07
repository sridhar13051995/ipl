import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {ProductService} from '../../service/product.service'
import * as  fromApp  from '../appstate'
import { Product } from '../product';
import * as prodAction from  '../state/actions/product.action'

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  constructor(private store: Store<fromApp.AppState>,private route: ActivatedRoute, private router: Router, private productService: ProductService) {}

  id = '';
  addid=''
  topid=''
  prodDet: any =[];
  allProducts:Observable<Product[]>;
  //userDataInput: {firstName:string,experience: string,type: string} = {firstName:null,experience: null,type: "Please Select Employee Type"}; 
  ngOnInit(): void {
    this.store.select(fromApp.totalPlusOne,{Add:1}).subscribe(
      d=>{
        this.addid = String(d);   
      }
    )

    this.allProducts = this.store.select(fromApp.getProdState)
    this.allProducts.subscribe(data =>{
      if(data[0] == null)
      {
        this.topid = null;
        
      }
      else
      {
        this.topid = String(data[0]?.id);
      }
    })
    
    this.route.params.subscribe((p) => {
      this.id = p['id'];
      // this.productService.getProductDetails(Number(this.id)).subscribe((d)=>
      // {
      //     this.prodDet = d;
      // })
      //this.prodDet = this.store.select(fromApp.getEntityById(this.id))
      // this.prodDet.subscribe(d=>
      //   {
      //     console.log(d)
      //   })
      // this.store.select(fromApp.selectById(this.id)).subscribe(
      //   a => console.log(a)
      // );
      
        this.store.select(fromApp.selectData).subscribe(data=>{       
          
          console.log('sridhar Testing', data )
          this.prodDet = data.selectItem
            
        })
    });
  }

  edit() {   
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
  delete()
  {

  //   this.productService.deleteProduct(this.prodDet).subscribe(
  //     (d)=>{
  //       //this.productService.mode = 'delete';
  //       this.productService.onProductChange.next({action:"delete",data: this.prodDet});
  //       this.productService.getProductAsc().subscribe((d) =>
  //       {
  //         if(d.length>0)
  //         this.router.navigate(['product',d[0].id]);
  //         else 
  //         this.router.navigate(['product']);
  //       })
  //     }
  //   )
  
  console.log('Delete', this.prodDet.id)
  this.store.dispatch(prodAction.ProductDeletedStart({prod: this.prodDet}))
          if(this.topid =='' || this.topid == null || this.topid == 'undefined'  )
          {
            this.router.navigate(['product']);
            this.store.dispatch(prodAction.ProductSelected({id: null}))
           
          }
          else 
           { 
            this.router.navigate(['product',this.topid]);
           this.store.dispatch(prodAction.ProductSelected({id: this.topid}))
            }
   }
}
