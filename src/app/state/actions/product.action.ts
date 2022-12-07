import { Update } from '@ngrx/entity'
import {createAction, props} from '@ngrx/store'
import {Product} from '../../product'

export const ProductAdded = createAction(
    '[Product] is added',
    props<{prod: Product}>()
)

export const ProductAdd = createAction(
    '[Product] is add',
    props<{prod: Product}>()
)

export const LoadProduct = createAction(
    '[Product] Load Product'
)

export const LoadProductSucess = createAction(
    '[Product] Load Product Success',
    props<{prod: Product[]}>()

)

export const ProductEditInProgress = createAction(
    '[Product] edited start',
    props<{prod: Product}>()
)


export const ProductEdit = createAction(
    '[Product] is edited',
    props<{prod: Update<Product>}>()
)


export const ProductDeleted = createAction(
    '[Product] is deleted',
    props<{prod: Product}>()
)

export const ProductDeletedStart = createAction(
    '[Product] is going to delete',
    props<{prod: Product}>()
)

export const ProductSelected = createAction(
    '[Product] is selected',
    props<{id: string}>()
)