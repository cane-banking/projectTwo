import axios from 'axios';
import { Transaction } from './transaction';

class AddTransactionService {
    private URI: string;
    constructor() {
        this.URI = 'https://4wzil0x67c.execute-api.us-west-2.amazonaws.com/default/addTransaction';
    }

    addTransaction(transaction:Transaction): Promise<Transaction> {
        return axios.post(this.URI, transaction).then(result => result.data).catch(err => err);
    }
}

export default new AddTransactionService();









