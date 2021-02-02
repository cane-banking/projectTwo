import { Client } from 'pg';

export async function handler(event: any) {
    const client = new Client();
    const check = event.queryStringParameters.check;
    client.connect();
    const query = `insert into checks (check_id,
                                   customer_id,
                                   account_id,
                                   check_date,
                                   firstname,
                                   lastname,
                                   amount) values ($1, $2, $3, $4, $5, $6, $7)`;
    const values = [check.check_id,
                    check.customer_id,
                    check.account_id,
                    check.check_date,
                    check.firstname,
                    check.lastname,
                    check.amount ];
    let response = await client.query(query, values);
    if (response) {

        return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT"
        }
    };
}
    console.log(response);
    client.end();
    return response;
}