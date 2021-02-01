import axios from 'axios';
import { User } from './user';

class SignUpService {
    private URI: string;
    constructor() {
        // URL of the express server
        this.URI = 'https://blpj920ejg.execute-api.us-west-2.amazonaws.com/default/signup';
    }


    addUser(u: User): Promise<User> {
        return axios.post(this.URI, u).then(result => result.data).catch(err => err);
    }
}

export default new SignUpService();