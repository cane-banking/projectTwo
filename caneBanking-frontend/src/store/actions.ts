import { Check } from '../check/check';
import {User} from './../user/user';
import { Account } from '../accounts/account';

export enum UserActions {
    GetUser = 'GET_USER',
    LoginChange = 'CHANGE_LOGIN',
    ChangeLocale = 'CHANGE_LOCALE',
    ChangeUser = 'CHANGE_USER'
}

export enum CheckActions {
    AddCheck = 'ADD_CHECK',
    ChangeCheck = 'CHANGE_CHECK'
}

export enum AccountActions {
    ChangeAccount = 'CHANGE_ACCOUNT'
}

export interface AppAction {
    type: string;
    payload: any;
}

export interface UserAction<P> extends AppAction {
    type: UserActions;
    payload: P;
}

export interface CheckAction<C> extends AppAction {
    type: CheckActions;
    payload: C;
}

export interface AccountAction<A> extends AppAction {
    type: AccountActions;
    payload: A;
}

export function getUser(user: User): UserAction<User> {
    const action: UserAction<User> = {
        type: UserActions.GetUser,
        payload: user
    }
    return action;
}

export function loginAction(user: User): UserAction<User> {
    const action: UserAction<User> = {
        type: UserActions.LoginChange,
        payload: user
    }
    return action;
}

export function changeUser(user: User): UserAction<User> {
    const action: UserAction<User> = {
        type: UserActions.ChangeUser,
        payload: user
    }
    return action;
}

export function changeLocale(locale: string): UserAction<string> {
    const action: UserAction<string> = {
        type: UserActions.ChangeLocale,
        payload: locale
    }
    return action;
}

export function addCheck(check: Check) : CheckAction<Check> {
    const action: CheckAction<Check> = {
        type: CheckActions.AddCheck,
        payload: check
    }
    return action;
}

export function changeCheck(check: Check) : CheckAction<Check> {
    const action: CheckAction<Check> = {
        type: CheckActions.ChangeCheck,
        payload: check
    }
    return action;
}

export function changeAccount(account: Account) : AccountAction<Account> {
    const action: AccountAction<Account> = {
        type: AccountActions.ChangeAccount,
        payload: account
    }
    return action;
}