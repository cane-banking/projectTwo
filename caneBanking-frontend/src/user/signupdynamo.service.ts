import axios from 'axios';
import { User } from './user';

class SignUpDynamoService {
    private URI: string;
    constructor() {
        // URL of the express server
        this.URI = ' https://4th6fev0eh.execute-api.us-west-2.amazonaws.com/default/signupdynamo';
    }


    addUser(u: User): Promise<User> {
        return axios.post(this.URI, u).then(result => result.data).catch(err => err);
    }
}

export default new SignUpDynamoService();