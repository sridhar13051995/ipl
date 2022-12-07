import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ArticleComponent } from './article/article.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductComponent } from './product/product.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { EditProductItemComponent } from './edit-product-item/edit-product-item.component';
import { Error404Component } from './error404/error404.component';
import { Error401Component } from './error401/error401.component';
import { AuthGuardService } from './authguard.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';
import { Activity1Component } from './activity1/activity1.component';
import { ActivitDay1Component } from './activit-day1/activit-day1.component';
import { Activitydy1Component } from './activitydy1/activitydy1.component';
import { Activitydy1formComponent } from './activitydy1form/activitydy1form.component';
import { Activitydy1listComponent } from './activitydy1list/activitydy1list.component';
import { FormArrayComponent } from './form-array/form-array.component';
import {StoreModule} from '@ngrx/store'
import { reducers} from './appstate'
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { ProdSComponent } from './prod-s/prod-s.component';
import {ProductEffects} from '../app/state/effects/product.effects'
import {ProductCheckOutEffects} from  '../app/state/effects/productCheckout.effect'
import { EffectsModule } from '@ngrx/effects';
import { ProductdetComponent } from './productdet/productdet.component';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';
import { OrdersplacedComponent } from './ordersplaced/ordersplaced.component';
import {ProductPlacedEffects} from  '../app/state/effects/product.placed.effects'
import { NgxLoadingModule } from 'ngx-loading';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    HomeComponent,
    AboutComponent,
    ArticleComponent,
    ProductComponent,
    ProductItemComponent,
    EditProductItemComponent,
    Error404Component,
    Error401Component,
    ProductListComponent,
    Activity1Component,
    ActivitDay1Component,
    Activitydy1Component,
    Activitydy1formComponent,
    Activitydy1listComponent,
    FormArrayComponent,
    ProdSComponent,
    ProductdetComponent,
    CartComponent,
    OrdersComponent,
    OrdersplacedComponent,
    RegisterComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    NgxLoadingModule.forRoot({}),
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ProductEffects,ProductCheckOutEffects,ProductPlacedEffects]),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly:environment.production})
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
