import axios from 'axios';
import { User } from '../../user/user';
import {Accounts} from './account';

class BalanceService {
    private URI: string;
    constructor() {
        // URL of the express server
        this.URI = ' https://8jtsbvmz43.execute-api.us-west-2.amazonaws.com/default/checkBalance';
    }
    
    chkBalance(account: Accounts): Promise<Accounts> {
        return axios.get(this.URI).then(result => result.data).catch(err => err);
    }    
}

export default new BalanceService();