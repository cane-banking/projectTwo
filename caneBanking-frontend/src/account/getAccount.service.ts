import axios from 'axios';
import { Account } from './account';

class GetAccountService {
    private URI: string;
    constructor() {
        this.URI = 'https://pj3y07ruxg.execute-api.us-west-2.amazonaws.com/default/getAccount';
    }
    getAccount(accountId: string): Promise<Account[]> {
        console.log('accountId', accountId);
        return axios.get(this.URI,{params: {accountId: accountId}}).then(result => result.data).catch((err) => {console.error(err)});
    }
}

export default new GetAccountService();