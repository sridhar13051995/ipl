import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { Product } from '../../product';
import * as ProdAction from '../actions/product.action';

export interface ProductState extends EntityState<Product>{
    selectedProduct: string;
    loaded: boolean;
}

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>({

});

const initialState: ProductState = adapter.getInitialState({
    selectedProduct: "1",
    loaded:false
});

const productReducer = createReducer(
    initialState,
    on(ProdAction.ProductAdded,(state, p ) =>{
        return adapter.addOne(p.prod,state)
    }),
    on(ProdAction.ProductEdit,(state, p ) =>{
        return adapter.updateOne(p.prod,state)
    }),
    on(ProdAction.ProductSelected,(state, {id} ) =>{
        return {...state,selectedProduct:String(id)}
    }),
    on(ProdAction.ProductDeleted,(state, {prod} ) =>{
        return adapter.removeOne(prod.id,state)
    }),
    on(ProdAction.LoadProductSucess,(state, p ) =>{
        return adapter.addMany(p.prod,{...state,loaded:true})
    })
    
);


export function prodReducer(state: ProductState, action :Action){
    return productReducer(state,action)
}


export const {
    selectAll,
    selectEntities,
    selectIds,
    selectTotal
  
  } = adapter.getSelectors();
