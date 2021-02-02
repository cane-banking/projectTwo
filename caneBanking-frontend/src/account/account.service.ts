import axios from 'axios';
import { Account } from './account';

class AccountService {
    private URI: string;
    constructor() {
        this.URI = 'https://r62u0x8qt6.execute-api.us-west-2.amazonaws.com/default/accounts';
    }
    addDeposit(account: Account): Promise<Account> {
        return axios.put(this.URI,{params: {account: account}}).then(result => result.data).catch(err => err);
    }
    getAccountsByCustomer(customerId: string): Promise<Account []> {
        console.log('customerId', customerId);
        return axios.get(this.URI,{params: {customerId: customerId}}).then(result => result.data).catch((err) => {console.error(err)});
    }
}

export default new AccountService();



