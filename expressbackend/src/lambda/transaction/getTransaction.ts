import {Client} from 'pg';

interface MyEvent {
    body: string;
}

export const handler = async (event: MyEvent) => {
    let user = JSON.parse(event.body);
    const client = new Client();
    await client.connect();
    const query = `select * from transactions where customer_id = $1`;
    const values = [user.customer_id ];
    let response;
    try{
        response = await client.query(query, values);
    } catch (error) {
        console.log(error);
    }
    console.log(response);
    client.end();
    return response;

} 

