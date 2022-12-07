import * as fromUser from './state/reducer/user.reducer'
import * as fromProd from './state/reducer/product.reducer'
import * as fromProdCheck from './state/reducer/prodcutcheckout.reducer'
import * as fromProdPlaced from './state/reducer/product.order.reducer'
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store'
import { ProductCheckOut } from './product'


export interface AppState{
    user: fromUser.UserState;
    prod: fromProd.ProductState;
    prodcheckout: fromProdCheck.ProductcheckoutState;
    productplaced: fromProdPlaced.ProductPlacedState;
}

export const reducers: ActionReducerMap<AppState>  ={
    user : fromUser.UserReducer,
    prod: fromProd.prodReducer,
    prodcheckout: fromProdCheck.prodcheckOutReducer,
    productplaced: fromProdPlaced.prodplacedReducer
}


//Feature for States 
const _getUserState = createFeatureSelector<fromUser.UserState>('user');
const _getProdState = createFeatureSelector<fromProd.ProductState>('prod')
const _getProdCheckOut = createFeatureSelector<fromProdCheck.ProductcheckoutState>('prodcheckout')
const _getProdPlaced = createFeatureSelector<fromProdPlaced.ProductPlacedState>('productplaced')

//Getting data from feature user 
export const getUserState = createSelector(_getUserState,(d)=> d.isAuthenticated)


export const getUserData = createSelector(_getUserState,(d)=> d.userLoginData)

//Getting data from feature Product 
//All Data
export const getProdState = createSelector(_getProdState, fromProd.selectAll)

export const getProdPlacedState = createSelector(_getProdPlaced, fromProdPlaced.selectAll)

//All as Entity
export const getProdEntityState = createSelector(_getProdState, fromProd.selectEntities)
//Select Total -> Add 1 using props selector
const total = createSelector(_getProdState, fromProd.selectTotal)
export const totalPlusOne = createSelector(total,(total,props) => total + props.Add)

//select product selected 
const getprodId = (state: fromProd.ProductState) => state.selectedProduct;
const selectSelectedTransaction = createSelector(_getProdState, getprodId);

 const loaded = (state: fromProd.ProductState) => state.loaded;
 export const loadedData = createSelector(_getProdState, loaded);

//  const loadedAddToCart = (state: fromProdCheck.ProductcheckoutState) => state.loading;
//  export const loadedDataCheckOut = createSelector(_getProdCheckOut, loadedAddToCart);

 

 const loadedplaced = (state: fromProdPlaced.ProductPlacedState) => state.loaded;
 export const loadedplacedData = createSelector(_getProdPlaced, loadedplaced);


 export const totalcheckouts = createSelector(_getProdCheckOut, fromProdCheck.selectTotal)
 


export const selectAgentsAsEntities = createSelector(
    _getProdState,
    fromProd.selectEntities
);

export const selectProdCheckOutEntities = createSelector(
    _getProdCheckOut,
    fromProdCheck.selectAll
);

export const selectProdCheckOutEntitiesNew = createSelector(
    _getProdCheckOut,
    fromProdCheck.selectEntities
);

export const getProdChkState = createSelector(_getProdCheckOut, fromProdCheck.selectAll)


export const getCompleteData = createSelector(
    getProdState,
    (allData) => ({
        allData         
    })
);

export const getCompleteDataOrders = createSelector(
    getProdPlacedState,
    (allData) => ({
        allData         
    })
);


export const selectDataCheckOut = createSelector(
    selectProdCheckOutEntitiesNew,selectSelectedTransaction,
    (entities, selectItem) => ({
        entities,
        selectItem: selectItem !== null ? entities[selectItem] : null       
    })
);


export const selectData = createSelector(
    selectAgentsAsEntities,selectSelectedTransaction,
    (entities, selectItem) => ({
        entities,
        selectItem: selectItem !== null ? entities[selectItem] : null       
    })
);



