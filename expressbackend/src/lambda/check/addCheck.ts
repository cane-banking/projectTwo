import { Client } from 'pg';

export async function handler(event: any) {
    const client = new Client();
    const check = JSON.parse(event.body);
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