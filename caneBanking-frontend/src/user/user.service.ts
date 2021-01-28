import axios from 'axios';
import { User } from './user';

class UserService {
    private URI: string;
    private URI2: string;
    constructor() {
        // URL of the express server
        this.URI = 'https://h2zckpset2.execute-api.us-west-2.amazonaws.com/default/login';
        this.URI2 = 'http://localhost:3000/users';
    }
    getLogin(): Promise<User> {
        // withCredentials sends our cookies with the request.
        return axios.get(this.URI, {withCredentials: true}).then(result=>{
            console.log(result);
            return result.data
        });
    }

    login(user: User): Promise<User> {
        return axios.post(this.URI, user, {withCredentials: true}).then(result => result.data).catch(err => err);
    }
    logout(): Promise<null> {
        return axios.delete(this.URI, {withCredentials: true}).then(result => null);
    }

    addUser(u: User): Promise<User> {
        return axios.post(this.URI2, u, {withCredentials: true}).then(result => result.data).catch(err => err);
    }
}

export default new UserService();