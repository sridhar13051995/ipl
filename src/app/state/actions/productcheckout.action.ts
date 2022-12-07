import {createAction, props} from '@ngrx/store'
import {Product, ProductCheckOut} from '../../product'

export const LoadProductcheckout = createAction(
    '[Product] Load Product checkout'
)

export const LoadProductcheckoutSucess = createAction(
    '[Product] Load Product checkout Success',
    props<{prod: ProductCheckOut[]}>()

)
export const Reset = createAction(
    '[Product] Load Product checkout Success'    

)

export const ProductCheckOutAdded = createAction(
    '[Product] ProductCheckOutAdded',
    props<{prod: ProductCheckOut}>()
)

export const ProductCheckoutAddProgress = createAction(
    '[Product] ProductCheckoutAddProgress',
    props<{prod: ProductCheckOut}>()
)

export const ProductchkDeleted = createAction(
    '[Product] ProductchkDeleted is deleted',
    props<{prod: ProductCheckOut}>()
)

export const ProductchkDeletedMany = createAction(
    '[Product] ProductchkDeleted Many is deleted',
    props<{prod: ProductCheckOut[]}>()
)

export const ProductChkDeletedStart = createAction(
    '[Product] ProductChkDeletedStart is going to delete',
    props<{prod: ProductCheckOut}>()
)

export const ProductChkDeletedMulStart = createAction(
    '[Product] ProductChkDeletedMulStart is going to delete',
    props<{prod: ProductCheckOut[]}>()
)