import axios from 'axios';
import { Check } from './check';

class CheckService {
    private URI: string;
    constructor() {
        this.URI = 'https://localhost:3000/checks';
    }
    getCheck(): Promise<Check> {
        return axios.get(this.URI, {withCredentials: true}).then(result=>{
            console.log(result);
            return result.data
        });
    }
    addCheck(check: Check): Promise<Check> {
        return axios.post(this.URI, check, {withCredentials: true}).then(result => result.data).catch(err => err);
    }
}

export default new CheckService();