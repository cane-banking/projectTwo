import axios from 'axios';
import { Application } from './application';

class ApplicationService {
    private URI: string;
    constructor() {
        this.URI = 'https://4ysnnx02ei.execute-api.us-west-2.amazonaws.com/default/accounts';
    }
    addApplication(application: Application): Promise<Application> {
        return axios.post(this.URI, application).then(result => result.data).catch(err => err);
    }
}

export default new ApplicationService();


