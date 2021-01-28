import axios from 'axios';
import { Account } from './account';

class AccountService {
    private URI: string;
    constructor() {
        this.URI = 'https://localhost:3000/accounts';
    }
    addAccount(account: Account): Promise<Account> {
        return axios.post(this.URI, account, {withCredentials: true}).then(result => result.data).catch(err => err);
    }
}

export default new AccountService();



