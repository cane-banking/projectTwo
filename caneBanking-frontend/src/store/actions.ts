import { Check } from '../check/check';
import {User} from './../user/user';
import { Application } from '../accounts/application';
import {Accounts} from "../accounts/Balance/account";
import Balance from '../accounts/Balance/Balance.component';

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

export enum BalanceActions {
    checkBalance = 'CHECK_BALANCE'
}

export enum ApplicationActions {
    ChangeApplication = 'CHANGE_APPLICATION'
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

export interface ApplicationAction<A> extends AppAction {
    type: ApplicationActions;
    payload: A;
}

export interface BalanceAction<T> extends AppAction{
    type: string;
    payload:T;
}

export function checkBalance(accounts:Accounts):BalanceAction<Accounts>{
    const action : BalanceAction<Accounts>={
        type: BalanceActions.checkBalance,
        payload: accounts
    }
    return action;
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

export function ChangeApplication(application: Application) : ApplicationAction<Application> {
    const action: ApplicationAction<Application> = {
        type: ApplicationActions.ChangeApplication,
        payload: application
    }
    return action;
}

