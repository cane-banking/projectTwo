import axios from 'axios';

class DeclineService{
    private URI: string;
    constructor(){
        this.URI = 'https://cefrvzcure.execute-api.us-west-2.amazonaws.com/default/declineApp';
    }

    updateApplication(id: string): Promise<null>{
        return axios.put(this.URI, id).then(result => null);
    }
}

export default new DeclineService();
