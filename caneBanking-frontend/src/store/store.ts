import { applyMiddleware, createStore, Store } from "redux";
import thunk from "redux-thunk";
import { Check } from "../check/check";
import { Account } from '../account/account';
import { Application } from '../application/application';
import { User } from "../user/user";
import { AppAction } from "./actions";
import reducer from "./reducer";
import { Transaction } from "../transaction/transaction";


export interface UserState {
    user: User;
    loginUser: User;
    locale?: string;
}
export interface CheckState {
    checks: Check[];
    check: Check;
    account: Account;
    accounts: Account[];
}
export interface ApplicationState {
    application: Application;
}

export interface TransactionState {
    transaction: Transaction;
}

export interface CaneBankingState extends UserState, CheckState, ApplicationState, TransactionState {
    transaction: any;
    application: any;
}
// <> is generics: Generic arguments allow us to define the type of a thing at runtime instead of when we write it,
// creating a reusable object.
const store: Store<CaneBankingState, AppAction> = createStore(reducer, applyMiddleware(thunk));

export default store;