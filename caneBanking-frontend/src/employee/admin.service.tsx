import axios from 'axios';
import { Application } from '../accounts/application';

class AdminService{
    private URI: string;
    constructor(){
        this.URI = 'http://localhost:3000/applications';
    }

    getApplications(): Promise<Application[]>{
        return axios.get(this.URI).then(result => result.data);
    }

    deleteApplication(id: number): Promise<null> {
        console.log(id);
        return axios.delete(this.URI+'/'+id).then(result => null)
    }
}

export default new AdminService();
