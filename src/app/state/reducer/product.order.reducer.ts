import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { ProductPlaced } from '../../product';
import * as ProdAction from '../actions/prod.placed.action';

export interface ProductPlacedState extends EntityState<ProductPlaced>{
    selectedProduct: string;
    loaded: boolean;
}

export const adapter: EntityAdapter<ProductPlaced> = createEntityAdapter<ProductPlaced>({

});

const initialState: ProductPlacedState = adapter.getInitialState({
    selectedProduct: "1",
    loaded:false
});

const productplacedReducer = createReducer(
    initialState,
    on(ProdAction.ProductPlacedAdded,(state, p ) =>{
        return adapter.addOne(p.prod,state)
    }), 
    on(ProdAction.ProductPlacedAddedMany,(state, p ) =>{

        return adapter.addMany(p.prod,{...state,loaded:true})
    }),   
    on(ProdAction.LoadProductPlacedSucess,(state, p ) =>{
        return adapter.addMany(p.prod,{...state,loaded:true})
    })
    
);



export function prodplacedReducer(state: ProductPlacedState, action :Action){
    return productplacedReducer(state,action)
}


export const {
    selectAll,
    selectEntities,
    selectIds,
    selectTotal
  
  } = adapter.getSelectors();
