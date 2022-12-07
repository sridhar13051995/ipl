import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import {ProductService} from '../../../service/product.service'
import * as ProductAction from '../actions/prod.placed.action'
 
@Injectable()
export class ProductPlacedEffects {
 
  loadPlaced$ = createEffect(() => this.actions$.pipe(
    ofType('[Product] Load Product Placed'),
    mergeMap(() => this.productService.getProductsPlaced()
      .pipe(
        map(products => ProductAction.LoadProductPlacedSucess({prod:products})),
        catchError(() => EMPTY)
      ))
    )
  );

  ProductAdd$ = createEffect(() => this.actions$.pipe(
    ofType('[Product] Placed is add Many'),
    switchMap((data:any) => this.productService.addPlacedProdMul(data.prod)
      .pipe(
        map(products => ProductAction.ProductPlacedAddedMany({prod:products})),
        catchError(() => EMPTY)
      ))
    )
  );

//   ProductDelete$ = createEffect(() => this.actions$.pipe(
//     ofType('[Product] is going to delete'),
//     switchMap((data:any) => this.productService.deleteProduct(data.prod)
//       .pipe(
//         map(products => ProductAction.ProductDeleted({prod: products}),
//         catchError(() => EMPTY)
//       ))
//     )
//   ));

//   ProductEdit$ = createEffect(() => this.actions$.pipe(
//     ofType('[Product] edited start'),
//     switchMap((data:any) => this.productService.updateProduct(data.prod)
//       .pipe(
//         map((product:any) => ProductAction.ProductEdit({prod:{id: Number(product.id),changes:product}}),
//         catchError(() => EMPTY)
//       ))
//     )
//   ));


  
  
 
  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}
}