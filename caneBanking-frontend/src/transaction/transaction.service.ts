import axios from 'axios';
import { Transaction } from './transaction';

class TransactionService {
    private URI: string;
    constructor() {
        this.URI = 'https://vhgq60pbhb.execute-api.us-west-2.amazonaws.com/default/getTransaction';        
    }
    getTransactions(accountId: string): Promise<Transaction []> {
        console.log('accountId', accountId);
        return axios.get(this.URI, {params: {accountId: accountId }}).then(result => result.data).catch(err => {console.log(err)});
    }
}

export default new TransactionService();




        




