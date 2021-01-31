import { Client } from 'pg';

export async function handler(event: any) {
    const client = new Client();
    const customerId = JSON.parse(event.body);
    client.connect();
    const query = `select * from accounts where customer_id = $1`;
    const values = [customerId];
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