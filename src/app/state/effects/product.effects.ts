import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { ProductService } from '../../../service/product.service';
import * as ProductAction from '../actions/product.action';
 
@Injectable()
export class ProductEffects {
 
  loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType('[Product] Load Product'),
    mergeMap(() => this.productService.getProducts()
      .pipe(
        map(products => ProductAction.LoadProductSucess({prod:products})),
        catchError(() => EMPTY)
      ))
    )
  );

  ProductAdd$ = createEffect(() => this.actions$.pipe(
    ofType('[Product] is add'),
    switchMap((data:any) => this.productService.addProduct(data.prod)
      .pipe(
        map(products => ProductAction.ProductAdded({prod:products})),
        catchError(() => EMPTY)
      ))
    )
  );

  ProductDelete$ = createEffect(() => this.actions$.pipe(
    ofType('[Product] is going to delete'),
    switchMap((data:any) => this.productService.deleteProduct(data.prod)
      .pipe(
        map(products => ProductAction.ProductDeleted({prod: products}),
        catchError(() => EMPTY)
      ))
    )
  ));

  ProductEdit$ = createEffect(() => this.actions$.pipe(
    ofType('[Product] edited start'),
    switchMap((data:any) => this.productService.updateProduct(data.prod)
      .pipe(
        map((product:any) => ProductAction.ProductEdit({prod:{id: Number(product.id),changes:product}}),
        catchError(() => EMPTY)
      ))
    )
  ));


  
  
 
  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}
}