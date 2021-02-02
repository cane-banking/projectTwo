import axios from 'axios';
import { Check } from './check';

class CheckService {
    private URI: string;
    constructor() {
        this.URI = 'https://bt264b7vn5.execute-api.us-west-2.amazonaws.com/default/check';
    }
    getCheck(): Promise<Check> {
        return axios.get(this.URI, {withCredentials: true}).then(result=>{
            console.log(result);
            return result.data
        });
    }
    addCheck(check: Check): Promise<Check> {
        return axios.post(this.URI, {params: {check: check}}).then(result => result.data).catch(err => err);
    }
}

export default new CheckService();