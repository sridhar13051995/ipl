import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';
import { catchError, delay, map } from 'rxjs/operators';
import { ProductCheckOut, ProductPlaced, UserData } from 'src/app/product';
import { Products } from '../app/models/product.model'

@Injectable({
  providedIn: 'root',
})

export class ProductService {
  public loggedIn: boolean = false;
  public userid=0
  mode: string = ''
  onProductChange = new Subject()
  public prodList = [];
  public api_URL: string = 'http://localhost:3000/t-shirts'
  public checkout_api: string ='http://localhost:3000/checkout'
  public api_URLPlaced: string = 'http://localhost:3000/orders'
  public api_user: string = 'http://localhost:3000/userdata'
  
  constructor(private http: HttpClient) {

  }
  public getProductAsc() {
    return this.http.get<Products[]>(this.api_URL + "?_sort=id&_order=asc");
  }

  public getProductDetails(id: number) {
    return this.http.get<Products>(this.api_URL + "/" + id);
  }
  public getProducts() {
    return this.http.get<Products[]>(this.api_URL)
  }

  public getUsers() {
    return this.http.get<UserData[]>(this.api_user)
  }

  public getProductsPlaced() {
    return this.http.get<ProductPlaced[]>(this.api_URLPlaced)
  }
  
  public getProductsCheckOut() {
    this.http.get<ProductCheckOut[]>("http://localhost:3000/checkout").pipe(map(
      data=> data.filter(i => i.userid == this.userid)
    )).subscribe(data=>{
      console.log("sridhar nnnnnn",this.userid)
      console.log(data)
    })
    return this.http.get<ProductCheckOut[]>("http://localhost:3000/checkout").pipe(map(
      data=> data.filter(i => i.userid == this.userid)
    ))
  }

  public isauthenticated() {
    return this.loggedIn;
  }

  public getButtonText() {
    if (this.loggedIn) {
      return "logout";
    }
    else {
      return "login";
    }
  }

  public loginOrLogOut() {
    this.loggedIn = !this.loggedIn;
  }

  updateProduct(proditem) {
    console.log(this.api_URL + "/" + proditem.id, proditem);
    return this.http.put(this.api_URL + "/" + proditem.id, proditem)
  }

  addProduct(proditem) {
    return this.http.post<Products>(this.api_URL, proditem)
  }

  addUser(userdata) {
    return this.http.post<UserData>(this.api_user, userdata)
  }

  addProductplaced(proditem) {
    return this.http.post<Products>(this.api_URL, proditem)
  }

  addCheckOutProduct(proditem) {
    return this.http.post<ProductCheckOut>(this.checkout_api, proditem)
  }

  deleteProduct(proditem) {
    return this.http.delete(this.api_URL + "/" + proditem.id).pipe(
      map((Response: any) => (<Products>proditem))
    )
  }

  deleteProductChk(proditem) {
    return this.http.delete(this.checkout_api + "/" + proditem.id).pipe(
      map((Response: any) => (<ProductCheckOut>proditem))
    )
  }

  deleteProductChkMul(proditem) {
    proditem.forEach(element => {
      this.http.delete(this.checkout_api + "/" + element.id).subscribe(data=>console.log("deleted"+data))
    });
    return of(proditem)    
  }

  addPlacedProdMul(proditem) {
    let arrayData = [];
    proditem.forEach(element => {
      this.http.post<ProductPlaced>(this.api_URLPlaced, element).subscribe(data =>
        {
            arrayData.push(data)
        })
    });
    return of(arrayData)    
  }
}