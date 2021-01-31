import axios from 'axios';
import { Account } from './account';

class AccountService {
    private URI: string;
    constructor() {
        this.URI = 'https://iam0m98c5d.execute-api.us-west-2.amazonaws.com/default/accounts';
    }
    addAccount(account: Account): Promise<Account> {
        return axios.post(this.URI, account).then(result => result.data).catch(err => err);
    }
    getAccountsByCustomer(customerId: string): Promise<Account []> {
        return axios.get(this.URI+'/'+customerId).then(result => result.data).catch((err) => {console.error(err)});
    }
}

export default new AccountService();



