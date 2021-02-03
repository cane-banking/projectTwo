import axios from 'axios';
import { Application } from '../account/application';

class AdminService{
    private URI: string;
    constructor(){
        this.URI = ' https://wwvrdqbav8.execute-api.us-west-2.amazonaws.com/default/getApplications';
    }

    getApplications(): Promise<Application[]>{
        return axios.get(this.URI).then(result => result.data);
    }

}

export default new AdminService();
