import {Action } from '@ngrx/store'
import { UserData } from 'src/app/product'
export enum ActionTypes{
    LOGGED_IN = '[User] LOGGED_IN',
    LOGGED_OUT='[User] LOGGED_OUT',
    SAVE_USER='[User] SAVE_USER'
}

export class LoggedIn implements Action {
    readonly type = ActionTypes.LOGGED_IN
}

export class LoggedOut implements Action {
    readonly  type = ActionTypes.LOGGED_OUT
}

export class SaveUserData implements Action {
    readonly  type = ActionTypes.SAVE_USER

    constructor(public payload : UserData){}
}

export type UserAction = LoggedIn | LoggedOut | SaveUserData