import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import * as  fromApp  from '../appstate'
import * as prodCheckAction from  '../state/actions/productcheckout.action'
import * as prodAction from  '../state/actions/product.action'

import { Observable } from 'rxjs';
import { Product, ProductCheckOut, UserData } from '../product';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-productdet',
  templateUrl: './productdet.component.html',
  styleUrls: ['./productdet.component.css']
})
export class ProductdetComponent implements OnInit {
  prodDet: Product ={} as Product;
  userData: UserData ={} as UserData;
  loading: boolean =false
  message: string=''
  disablecart: boolean = false;
  incart: boolean = false;
  qty: number = 1;
  choice: string;
  authenticate: boolean = false;
  allProducts:Observable<Product[]>;
  allProductsMapped:Observable<Product[]>;
  
  constructor(private router: Router,private store: Store<fromApp.AppState>,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loading=true;
    this.qty=1;

    this.store.select(appState => appState['user'].isAuthenticated).subscribe(data=>
      {
        this.authenticate = data;
      }
      
    )

    this.store.select(fromApp.getUserData).subscribe(data =>{
      this.userData =data;
    })
    
    
    this.store.select(fromApp.loadedData).subscribe(data =>{
      if(data == false)
      {
        this.store.dispatch(prodAction.LoadProduct())
      }
    })
    
    this.disablecart = false;
    
    this.choice="M";
    this.allProducts = this.store.select(fromApp.getCompleteData).pipe(map(data=> data.allData)
    );

    this.store.select(fromApp.selectData).subscribe(data=>{      
      this.prodDet = data.selectItem   
    })

    this.allProductsMapped =  this.allProducts.pipe(map(data => data.filter(i=> i.id != this.prodDet.id )))

    

    this.store.select(fromApp.selectDataCheckOut).subscribe(data=>{       
      if(data. selectItem)
      {
        if(data.selectItem.userid == this.userData.id)
        {
          this.incart = true 
          this.message="Added in Cart Please Proceed Check out";
          this.loading =false
        }
        else
        {
          this.incart = false 
        }
        
      }
      else
        this.incart = false 
    })

    this.store.select(fromApp.selectProdCheckOutEntities).subscribe(data =>
      {
        console.log("sridhar Data For ",data)
      })

    this.loading=false;

    
  }
  AddToCart()
  {
    if(this.authenticate)
    {
      if(this.qty > 0)
      {
      this.loading = true;
      //this.disablecart = true;
      this.incart=true;
      this.message = "Adding in Cart";
      let data: ProductCheckOut = {} as ProductCheckOut;
      data.userid = this.userData.id;
      data.prodid = this.prodDet.id;
      data.size = this.choice;
      data.name = this.prodDet.name;
      data.category = this.prodDet.category;
      data.image = this.prodDet.image;
      data.description = this.prodDet.description;
      data.qty = this.qty
      data.price=String(Number(this.prodDet.price) * Number(this.qty))
      this.store.dispatch(prodCheckAction.ProductCheckoutAddProgress({prod: data}))
      }
      else
      {
        alert("Please Select Quantity")
      }
    }
    else
    {
      alert("Please login to Purchase")
    }

    
     
  }
  minus()
  {
    if(this.qty>0)
    {
      this.qty--;
    }
  }
  plus()
  {
    this.qty++;
  }
  datas(id)
  {
    //alert('clicked')
    this.store.dispatch(prodAction.ProductSelected({id: id}))
    this.router.navigate(['productsList']);
  }



}
