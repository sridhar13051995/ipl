import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as  fromApp  from './appstate'
import {ProductService} from '../service/product.service'
import * as fromAppState  from './appstate';
import * as actionData from './state/actions/user.actions'
import * as ProductCheckAction from '../app/state/actions/productcheckout.action'
import { UserData } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  activeId: string = "1";
  userData: UserData ={} as UserData;
  userName: string = "Guest"
  buttonText: string = "login";
  isAuthenticated$ : Observable<boolean>;
  cartData:number=0
  hideadmin: boolean=false

  

  constructor(private store: Store<fromAppState.AppState>,private productService: ProductService,private router: Router) {

  }

  ngOnInit(): void {
    this.store.select(fromApp.getUserData).subscribe(data =>{
      this.userData =data;
    })
    this.hideadmin = false;
    this.store.dispatch(ProductCheckAction.LoadProductcheckout())    
    //this.isAuthenticated$ = this.store.pipe(map(d=> d['user'].isAuthenticated))
    this.isAuthenticated$ = this.store.select(appState => appState['user'].isAuthenticated)

    this.store.select(fromApp.getUserData).subscribe(data=>
          {
            if(data.name == undefined)
            {
              this.userName = "Guest"
            }
            else{
              this.userName = data.name
            }
            if(data.type=="admin")
            {
              this.hideadmin = true;
            }
            else
            {
              this.hideadmin = false;
            }
          })    
    this.isAuthenticated$.subscribe(data => {
     
      this.buttonText = data ? "Logout" : "Login";
    } )

    this.store.select(fromApp.totalcheckouts).subscribe(
      d=>{
        this.cartData = d;
      }
    )

  }
  

  loginorOut()
  {
    if(this.buttonText =="Logout")
    {
      this.store.dispatch(new actionData.LoggedOut())
      this.productService.userid=0
      this.productService.loggedIn = false;
      this.router.navigate(['login']);
      this.store.dispatch(ProductCheckAction.LoadProductcheckout())  
    }
    else
    {
      this.router.navigate(['login']);
    }   
    
  }
   
}
