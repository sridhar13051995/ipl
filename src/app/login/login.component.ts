import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ProductService } from 'src/service/product.service';
import { UserData } from '../product';
import * as fromAppState  from '../appstate';
import * as actionData from '../state/actions/user.actions'
import * as ProductCheckAction from '../state/actions/productcheckout.action'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData: UserData = {} as UserData;
  showerror: boolean = false  
  constructor(private store: Store<fromAppState.AppState>,private userService: ProductService,private router: Router) { }

  ngOnInit(): void {
    this.showerror = false;
  }

  register(){
    this.router.navigate(['register']);
  }

  login(){
    this.userService.getUsers().subscribe(data=>
      {
        if(data.length > 0)
        {
          console.log('data', data)
          let dataob = data.filter(data => data.name.trim().toLowerCase() == this.userData.name.toLowerCase() && data.password.toString().trim() == this.userData.password )
          console.log('dataob', dataob)
          if(dataob.length > 0)
          {
            this.store.dispatch(new actionData.SaveUserData(dataob[0]))
            this.userService.loggedIn = true;
            this.userService.userid = dataob[0].id;
            this.router.navigate(['products']);
            this.store.dispatch(ProductCheckAction.LoadProductcheckout())  
          }
          else
          {
            this.userService.loggedIn = false;
            this.showerror = true;
          }
        }
      })
  }

}



