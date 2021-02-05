import { applyMiddleware, createStore, Store } from "redux";
import thunk from "redux-thunk";
import { Check } from "../check/check";
import { Application } from '../application/application';
import { User } from "../user/user";
import { AppAction } from "./actions";
import reducer from "./reducer";
import { Transaction } from "../transaction/transaction";

import { Account } from "../account/account";

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
    applications: Application[];
    application: Application;
}

export interface TransactionState {
    transaction: Transaction;
    transactions: Transaction[];
}

export interface CaneBankingState extends UserState, CheckState, ApplicationState, TransactionState {

}

const store: Store<CaneBankingState, AppAction> = createStore(reducer, applyMiddleware(thunk));

export default store;