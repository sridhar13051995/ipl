import {createAction, props} from '@ngrx/store'
import {ProductPlaced} from '../../product'

export const ProductPlacedAdded = createAction(
    '[Product] Placed is added',
    props<{prod: ProductPlaced}>()
)

export const ProductPlacedAddedMany = createAction(
    '[Product] Placed is added Many',
    props<{prod: ProductPlaced[]}>()
)

export const ProductPlacedAddMany = createAction(
    '[Product] Placed is add Many',
    props<{prod: ProductPlaced[]}>()
)

export const LoadProductPlaced = createAction(
    '[Product] Load Product Placed'
)

export const LoadProductPlacedSucess = createAction(
    '[Product] Load Product Placed Success',
    props<{prod: ProductPlaced[]}>()

)

