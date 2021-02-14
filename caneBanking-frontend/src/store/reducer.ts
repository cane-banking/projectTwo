import * as Actions from './actions';
import { User } from './../user/user';
import { CaneBankingState } from './store';
import { Check } from '../check/check';
import { Account } from '../account/account';
import { Application } from '../application/application';
import { Transaction } from '../transaction/transaction';

export const initialState: CaneBankingState = {
    user: new User(),
    loginUser: new User(),
    checks: [],
    check: new Check(),
    applications: [],
    account: new Account(),
    accounts: [],
    application: new Application(),
    transaction: new Transaction(),
    transactions: [],
    fromAccount: new Account(),
    toAccount: new Account(),
    transferAmount: 0,
    id: '',
    selection: ''
}

const reducer = (state: CaneBankingState = initialState, action: Actions.AppAction): CaneBankingState => {

    const newState = {...state};

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
            return newState;
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
            return newState;
        case Actions.AccountActions.ChangeId:
            newState.id = action.payload;
            return newState;
        case Actions.ApplicationActions.ChangeApplication:
            newState.application = action.payload as Application;
            return newState;
        case Actions.TransactionActions.GetTransactions:
            newState.transactions = action.payload as Transaction[];
            return newState;
        case Actions.TransactionActions.TransferSelection:
            newState.selection = action.payload;
            return newState;
        case Actions.TransactionActions.NewTransferAmount:
            newState.transferAmount = action.payload;
            return newState;
        case Actions.ApplicationActions.GetApplications:
            newState.applications = action.payload as Application[];
            return newState;
        case Actions.AccountActions.ChangeFromAccount:
            let getFromAccount = newState.accounts.filter((account) => account.account_id === action.payload) as Account[];
            newState.fromAccount = getFromAccount[0];
            return newState;
        case Actions.AccountActions.ChangeToAccount:
            let getToAccount = newState.accounts.filter((account) => account.account_id === action.payload) as Account[];
            newState.toAccount = getToAccount[0];
            return newState;
        default:
            return state;
    }
}

export default reducer;