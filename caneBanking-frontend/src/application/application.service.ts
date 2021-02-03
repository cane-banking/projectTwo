import axios from 'axios';
import { Application } from './application';

class ApplicationService {
    private URI: string;
    constructor() {
        this.URI = 'https://q2shpf1y0e.execute-api.us-west-2.amazonaws.com/default/addApplication';
        
    }
    addApplication(application: Application): Promise<Application> {
        return axios.post(this.URI, application).then(result => result.data).catch(err => err);
    }
}

export default new ApplicationService();



