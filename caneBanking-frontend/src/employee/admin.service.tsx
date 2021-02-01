import axios from 'axios';
import { Application } from '../accounts/application';
import { Apps } from './app';

class AdminService{
    private URI: string;
    constructor(){
        this.URI = ' https://wwvrdqbav8.execute-api.us-west-2.amazonaws.com/default/getApplications';
    }

    getApplications(): Promise<Application[]>{
        return axios.get(this.URI).then(result => result.data);
    }

    /* deleteApplication(id: number): Promise<null> {
        console.log(id);
        return axios.delete(this.URI+'/'+id).then(result => null)
    } */
}

export default new AdminService();
