import {Client} from 'pg';

interface MyEvent {
    body: string;
}

export const handler = async (event: MyEvent) => {
    let customer = JSON.parse(event.body);
    const client = new Client();
    await client.connect();
    const query = `insert into customer (
                                   customer_id,
                                   firstname,
                                   lastname) values ($1, $2, $3)`;
    const values = [
                    customer.customer_id,
                    customer.firstname,
                    customer.lastname ];
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