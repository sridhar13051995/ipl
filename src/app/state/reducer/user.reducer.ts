
import { UserData } from 'src/app/product'
import * as actions from '../actions/user.actions'
export interface UserState{
    isAuthenticated: boolean;
    checkData:string
    userLoginData: UserData
}
const initialState: UserState = {
    isAuthenticated : false,
    checkData:"sridhar",
    userLoginData: {} as UserData
}
export function UserReducer(state = initialState,action:actions.UserAction): UserState
{
   switch (action.type)
   {
        case  actions.ActionTypes.LOGGED_IN:
            return {...state,isAuthenticated  :true}
        case actions.ActionTypes.LOGGED_OUT:
            return initialState
        case actions.ActionTypes.SAVE_USER:
            return {...state,
                ...state.userLoginData,
                userLoginData:action.payload ,
                isAuthenticated  :true}
        default:
            return state
   }
}