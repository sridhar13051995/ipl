import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Update } from '@ngrx/entity';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as  fromApp  from '../appstate'
import { Product } from '../product';

import * as prodAction from  '../state/actions/product.action'

@Component({
  selector: 'app-prod-s',
  templateUrl: './prod-s.component.html',
  styleUrls: ['./prod-s.component.css']
})
export class ProdSComponent implements OnInit {

  prodForm: FormGroup;
  allProducts:Observable<Product[]>;
  constructor(private fb: FormBuilder, private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.allProducts = this.store.select(fromApp.getProdState)
    this.prodForm = this.fb.group({
      id:["1"],
      name:['sridhar'],
    })
  }

  addData()
  {
    this.store.dispatch(prodAction.ProductAdded({prod: this.prodForm.value}))
  }

  editData()
  {
    const up:Update<Product> ={
      id: +this.prodForm.value.id,
      changes:this.prodForm.value 
    };
    this.store.dispatch(prodAction.ProductEdit({prod: up}))

  }
  deleteData(){
    //this.store.dispatch(prodAction.ProductDeleted({id: this.prodForm.value.id}))
  }

}
