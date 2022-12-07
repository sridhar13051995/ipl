import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuardService } from './authguard.service';
import { CartComponent } from './cart/cart.component';
import { EditProductItemComponent } from './edit-product-item/edit-product-item.component';
import { Error401Component } from './error401/error401.component';
import { Error404Component } from './error404/error404.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrdersplacedComponent } from './ordersplaced/ordersplaced.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ProductdetComponent } from './productdet/productdet.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: AboutComponent },
  { path: 'productsList', component: ProductdetComponent },
  { path: 'cart', component: CartComponent ,canActivate: [AuthGuardService]},
  { path: 'orders', component: OrdersplacedComponent,canActivate: [AuthGuardService] },
  { path: 'product-list', component: ProductListComponent ,canActivate: [AuthGuardService]},  
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {
    path: 'product',
    canActivate: [AuthGuardService],
    component: ProductComponent,
    children: [
      
      { path: ':id/addproduct', data:{isEditMode: false},component: EditProductItemComponent },
      { path: ':id', component: ProductItemComponent },
      { path: ':id/edit', data:{isEditMode: true} ,component: EditProductItemComponent },
      
      
    ],
  },
  {path: '404' , component: Error404Component},
  {path: '401' , component: Error401Component}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
