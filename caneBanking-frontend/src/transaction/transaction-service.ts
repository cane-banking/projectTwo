import axios from 'axios';
import { Transaction } from './transaction';

class TransactionService {
    private URI: string;
    constructor() {
        this.URI = 'https://vhgq60pbhb.execute-api.us-west-2.amazonaws.com/default/getTransaction';
    }
    getTransaction(): Promise<Transaction> {
        return axios.get(this.URI).then(result => result.data).catch(err => err);
    }
}

export default new TransactionService();




        




