import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, switchMap, concatMap } from 'rxjs/operators';
import {ProductService} from '../../../service/product.service'
import * as ProductCheckAction from '../actions/productcheckout.action'
 
@Injectable()
export class ProductCheckOutEffects {
 
  loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType('[Product] Load Product checkout'),
    mergeMap(() => this.productService.getProductsCheckOut()
      .pipe(
        map(products => ProductCheckAction.LoadProductcheckoutSucess({prod:products})),
        catchError(() => EMPTY)
      ))
    )
  );

  ProductCheckOutAdd$ = createEffect(() => this.actions$.pipe(
    ofType('[Product] ProductCheckoutAddProgress'),
    concatMap((data:any) => this.productService.addCheckOutProduct(data.prod)
      .pipe(
        map(products => ProductCheckAction.ProductCheckOutAdded({prod:products})),
        catchError(() => EMPTY)
      ))
    )
  ); 

  ProductDelete$ = createEffect(() => this.actions$.pipe(
    ofType('[Product] ProductChkDeletedStart is going to delete'),
    concatMap((data:any) => this.productService.deleteProductChk(data.prod)
      .pipe(
        map(products => ProductCheckAction.ProductchkDeleted({prod: products}),
        catchError(() => EMPTY)
      ))
    )
  ));

  ProductDeleteMul$ = createEffect(() => this.actions$.pipe(
    ofType('[Product] ProductChkDeletedMulStart is going to delete'),
    concatMap((data:any) => this.productService.deleteProductChkMul(data.prod)
      .pipe(
        map(products => ProductCheckAction.ProductchkDeletedMany({prod: products}),
        catchError(() => EMPTY)
      ))
    )
  ));


 
  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}
}