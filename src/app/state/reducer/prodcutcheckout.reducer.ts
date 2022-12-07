import {ProductCheckOut} from '../../product'
import {EntityAdapter,EntityState,createEntityAdapter} from '@ngrx/entity'
import {Action, createReducer, on} from '@ngrx/store'
import * as ProdCheckoutAction from '../actions/productcheckout.action'

export interface ProductcheckoutState extends EntityState<ProductCheckOut>{
    
}

export const adapter: EntityAdapter<ProductCheckOut> = createEntityAdapter<ProductCheckOut>({
    selectId: (prodCheck: ProductCheckOut) => prodCheck.prodid,
  });

const initialState: ProductcheckoutState = adapter.getInitialState({
});

const productReducer = createReducer(
    initialState, 
    on(ProdCheckoutAction.Reset,(state) =>{
        return initialState
     }),   
    on(ProdCheckoutAction.LoadProductcheckoutSucess,(state, p ) =>{
        return adapter.addMany(p.prod,state)
     })
    ,
    on(ProdCheckoutAction.ProductCheckOutAdded,(state, p ) =>{
        return adapter.addOne(p.prod,state)
    }),
    on(ProdCheckoutAction.ProductchkDeleted,(state, {prod} ) =>{
        return adapter.removeOne(prod.prodid,state)
    }),
    on(ProdCheckoutAction.ProductchkDeletedMany,(state, {prod} ) =>{
        let dataArr =[];
        prod.forEach(data=>{
            dataArr.push(data.prodid)
        })
        return adapter.removeMany(dataArr,state)
    })
    
);


export function prodcheckOutReducer(state: ProductcheckoutState, action :Action){
    return productReducer(state,action)
}


export const {
    selectAll,
    selectEntities,
    selectIds,
    selectTotal
  
  } = adapter.getSelectors();
