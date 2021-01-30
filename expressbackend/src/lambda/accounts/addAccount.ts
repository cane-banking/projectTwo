import {Client} from 'pg';

export async function handler(event: any) {
    const client = new Client();
    const account = JSON.parse(event.body);
    client.connect();
    const query = `insert into accounts (account_id,account_type,balance,customer_id) values ($1,$2,$3,$4)`;
    const values = [account.account_id, account.account_type,account.balance,account.customer_id];

    let response;
    try{
        response = await client.query(query,values);
    } catch (error) {
        console.log(error);
    }
    console.log(response);
    client.end();
    return response;    
}