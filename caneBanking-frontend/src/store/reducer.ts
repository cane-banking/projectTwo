import * as Actions from './actions';
import { User } from './../user/user';
import { CaneBankingState } from './store';
import { Check } from '../check/check';
import { Account } from '../account/account';
import { Application } from '../application/application';
import { Transaction } from '../transaction/transaction';

// We need to define the initial state of the application and that
// state should include everything that the application might keep track of.

export const initialState: CaneBankingState = {
    user: new User(),
    loginUser: new User(),
    checks: [],
    check: new Check(),
    applications: [],
    account: new Account(),
    accounts: [],
    application: new Application(),
    transactions: [],
    transaction: new Transaction(),
    fromAccount: new Account(),
    toAccount: new Account(),
    transferAmount: 0
}

// Make sure that the reducer has a default argument of the inital state or it will not work.
const reducer = (state: CaneBankingState = initialState, action: Actions.AppAction): CaneBankingState => {
    //console.log(action);
    // We want to call setState. (redux will do that when we return a new state object from the reducer)
    const newState = {...state}; // If we return this, it will re render the application. (call setState)

    switch (action.type) {
        case Actions.UserActions.GetUser:
            newState.user = action.payload as User;
            newState.loginUser = new User();
            return newState;
        case Actions.UserActions.LoginChange:
            newState.loginUser = action.payload as User;
            return newState;
        case Actions.UserActions.ChangeLocale:
            newState.locale = action.payload as string;
            return newState;
        case Actions.UserActions.ChangeUser:
            newState.user = action.payload as User;
        case Actions.CheckActions.ChangeCheck:
            newState.check = action.payload as Check;
            return newState;
        case Actions.AccountActions.NewAccount:
            newState.account = action.payload as Account;
            return newState;
        case Actions.AccountActions.ChangeAccount:
            let getAccount = newState.accounts.filter((account) => account.account_id === action.payload) as Account[];
            newState.account = getAccount[0];
            return newState;
        case Actions.AccountActions.GetAccounts:
            newState.accounts = action.payload as Account[];
        case Actions.ApplicationActions.ChangeApplication:
            newState.application = action.payload as Application;
            return newState;
        case Actions.TransactionActions.GetTransaction:
            newState.transaction = action.payload as Transaction;
            return newState;
        case Actions.TransactionActions.NewTransferAmount:
            newState.transferAmount = action.payload;
            return newState;
        case Actions.ApplicationActions.GetApplications:
            newState.applications = action.payload as Application[];
            return newState;
        case Actions.AccountActions.ChangeFromAccount:
            let getFromAccount = newState.accounts.filter((account) => account.account_id === action.payload) as Account[];
            newState.account = getFromAccount[0];
            return newState;
        case Actions.AccountActions.ChangeToAccount:
            let getToAccount = newState.accounts.filter((account) => account.account_id === action.payload) as Account[];
            newState.account = getToAccount[0];
            return newState;
        default:
            return state;
    }
}

export default reducer;