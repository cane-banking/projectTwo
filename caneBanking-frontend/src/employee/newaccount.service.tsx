import axios from 'axios';
import { Account } from '../account/account';

class SignUpService {
    private URI: string;
    constructor() {
        this.URI = 'https://r87dt7cl8f.execute-api.us-west-2.amazonaws.com/default/addAccount';
    }

    addAccount(a: Account): Promise<Account> {
        return axios.post(this.URI, a).then(result => result.data).catch(err => err);
    }
}

export default new SignUpService();