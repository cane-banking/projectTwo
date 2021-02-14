import { Check } from '../check/check';
import {User} from './../user/user';
import { Transaction } from '../transaction/transaction';
import { Account } from '../account/account';
import { Application } from '../application/application';

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
    GetAccounts = 'GET_ACCOUNTS',
    NewAccount ='NEW_ACCOUNT',
    ChangeToAccount = 'CHANGE_TO_ACCOUNT',
    ChangeFromAccount = 'CHANGE_FROM_ACCOUNT',
    ChangeId = 'CHANGE_ID'
}

export enum ApplicationActions {
    ChangeApplication = 'CHANGE_APPLICATION',
    GetApplications = 'GET_APPLICATIONS'
}

export enum TransactionActions {
    GetTransactions = 'GET_TRANSACTIONS',
    AddTransaction='ADD_TRANSACTION',
    NewTransferAmount='NEW_TRANSFER_AMOUNT',
    TransferSelection= 'GET_TRANSFER_SELECTION'
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

export interface AccountAction<A> extends AppAction{
    type: AccountActions;
    payload: A;
}

export interface ApplicationAction extends AppAction {
    type: ApplicationActions;
    payload: Application | Application[];
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

export function changeCheck(check: Check) : CheckAction<Check> {
    const action: CheckAction<Check> = {
        type: CheckActions.ChangeCheck,
        payload: check
    }
    return action;
}
export function getApplications(applications: Application[]): ApplicationAction{
    const action: ApplicationAction = {
        type: ApplicationActions.GetApplications,
        payload: applications
    }
    return action;
}

export function changeApplication(application: Application) : ApplicationAction {
    const action: ApplicationAction = {
        type: ApplicationActions.ChangeApplication,
        payload: application
    }
    return action;
}

export function newAccount(account: Account) : AccountAction<Account>{
    const action: AccountAction<Account> = {
        type: AccountActions.NewAccount,
        payload: account
    }
    return action
}

export function changeAccount(account_id: string) : AccountAction<string> {
    const action: AccountAction<string> = {
        type: AccountActions.ChangeAccount,
        payload: account_id
    }
    return action;
}

export function getAccounts(accounts: Account[]) : AccountAction<Account[]>{
    const action: AccountAction<Account[]> = {
        type: AccountActions.GetAccounts,
        payload: accounts
    }
    return action;
}

export function changeFromAccount(account_id: string) : AccountAction<string> {
    const action: AccountAction<string> = {
        type: AccountActions.ChangeFromAccount,
        payload: account_id
    }
    return action;
}

export function changeToAccount(account_id: string) : AccountAction<string> {
    const action: AccountAction<string> = {
        type: AccountActions.ChangeToAccount,
        payload: account_id
    }
    return action;
}

export function changeTransferAmount(amount: number)  {
    const action = {
        type: TransactionActions.NewTransferAmount,
        payload: amount
    }
    return action;
}

export function changeAccountId(accountId: string)  {
    const action = {
        type: AccountActions.ChangeId,
        payload: accountId
    }
    return action;
}

export function getTransferSelection(selection: string)  {
    const action = {
        type: TransactionActions.TransferSelection,
        payload: selection
    }
    return action;
}

export function getTransaction(transactions: Transaction[]): TransactionAction<Transaction[]> {
    const action: TransactionAction<Transaction[]> = {
        type: TransactionActions.GetTransactions,
        payload: transactions
    }
    return action;
}

