import axios from 'axios';
import { User } from './user';

class UserService {
    private URI: string;
    constructor() {
        // URL of the express server
        this.URI = 'http://34.219.142.203:3000/users';
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
}

export default new UserService();