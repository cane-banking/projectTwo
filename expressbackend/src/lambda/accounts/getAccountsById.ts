import { Client } from 'pg';

export async function handler(event: any) {
    const client = new Client();
    const customerId = event.queryStringParameters.customerId;
    client.connect();
    const query = `select * from accounts where customer_id = $1`;
    const values = [customerId];
    let response = await client.query(query, values);
    console.log('the response', response.rows);
        if (response) {
            return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Headers" : "Content-Type",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
            },
            body: JSON.stringify(response.rows)
        };
    }
    console.log(response);
    client.end();
    return response;
}