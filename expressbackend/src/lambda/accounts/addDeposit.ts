import { Client } from 'pg';

export async function handler(event: any) {
    const client = new Client();
    console.log('event', event);
    const account = JSON.parse(event.body);
    console.log('account', account);
    client.connect();
    const query = `update accounts set balance = $1 where account_id = $2`;
    const values = [account.balance, account.account_id];
    let response = await client.query(query, values);
    console.log('the response', response);
    if (response) {
        client.end();
        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT"
            }
        };
    } else {
        client.end();
        return {
            statusCode: 400,
            headers: {
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT"
            }
        };
    }
}