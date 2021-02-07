import axios from 'axios';
import { User } from './user';

class UserService {
    private URI: string;
    private URI2: string;
    constructor() {
        this.URI = 'https://h2zckpset2.execute-api.us-west-2.amazonaws.com/default/login';
        this.URI2 = 'https://wto81ob5ob.execute-api.us-west-2.amazonaws.com/default/signup';
    }
    getLogin(): Promise<User> {
        return axios.get(this.URI).then(result=>{
            console.log(result);
            return result.data
        });
    }

    login(user: User): Promise<User> {
        console.log(user);
        return axios.post(this.URI, user).then(result => result.data).catch(err => err);
    }
    logout(): Promise<null> {
        return axios.delete(this.URI).then(result => null);
    }

    addUser(u: User): Promise<User> {
        return axios.post(this.URI2, u).then(result => result.data).catch(err => err);
    }
}

export default new UserService();