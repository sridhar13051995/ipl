import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState} from '../appstate'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private store: Store<AppState>) {}
  public isAuthenticated$: Observable<any>;
  public appContext$: Observable<any>;
  ngOnInit(): void {
  this.store.select('user').subscribe(data =>{
    console.log('data', data)
    console.log('sridhar', data.isAuthenticated)
  }
    )

    this.isAuthenticated$ = this.store.select(state => state.user.isAuthenticated)
    this.appContext$ = this.store.select(state => state.user)
      
  }
  navigate()
  {
    this.router.navigate(['products']);
  }

  gtar() {
    this.router.navigate(['about']);
  }

  assign(){
    this.store.dispatch(
      {
        type:'LOGGED_IN',
        payload:{
          username:'sridhar'
        }
      }
    )
  }

  getData()
  {
    this.store.subscribe((data)=>
    {
      console.log(data['user']);
    })
  }
}
