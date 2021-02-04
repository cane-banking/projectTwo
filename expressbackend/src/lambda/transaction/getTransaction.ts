import {Client} from 'pg';

interface MyEvent {
    body: string;
}

export const handler = async (event: any) => {
    let accountId = event.queryStringParameters.account_id;
    const client = new Client();
    await client.connect();
    const query = `select * from transactions where account_id = $1`;
    const values = [accountId] ;
    let response;

    //put headers. look at our branches for an example
    try{
        response = await client.query(query, values);
    } catch (error) {
        console.log(error);
    }
    console.log(response);
    client.end();
    return response;

} 

