import { Check } from '../check/check';
import {User} from './../user/user';
import { Account } from '../account/account';
import { Application } from '../application/application';
import { Transaction } from '../transaction/transaction';

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
    ChangeAccount = 'CHANGE_ACCOUNT',
    GetAccounts = 'GET_ACCOUNTS'
}

export enum ApplicationActions {
    ChangeApplication = 'CHANGE_APPLICATION'
}

export enum TransactionActions {
    GetTransaction = 'GET_TRANSACTION',
    AddTransaction='ADD_TRANSACTION'
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

export interface ApplicationAction<A> extends AppAction {
    type: ApplicationActions;
    payload: A;
}

export interface TransactionAction<T> extends AppAction {
    type: TransactionActions;
    payload: T;
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

export function changeAccount(account_id: string) : AccountAction<string> {
    const action: AccountAction<string> = {
        type: AccountActions.ChangeAccount,
        payload: account_id
    }
    return action;
}

export function getAccounts(accounts: Account[]) : AccountAction<Account[]> {
    const action: AccountAction<Account[]> = {
        type: AccountActions.GetAccounts,
        payload: accounts
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

export function getTransaction(transaction: Transaction): TransactionAction<Transaction> {
    const action: TransactionAction<Transaction> = {
        type: TransactionActions.GetTransaction,
        payload: transaction
    }
    return action;
}

export function addTransaction(transaction:Transaction):TransactionAction<Transaction>{
    const action : TransactionAction<Transaction> = {
        type: TransactionActions.AddTransaction,
        payload: transaction
    }
    return action;
}
