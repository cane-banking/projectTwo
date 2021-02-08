import {Client} from 'pg';

interface MyEvent {
    body: string;
}

export const handler = async (event: MyEvent) => {
    let account = JSON.parse(event.body);
    const client = new Client();
    await client.connect();
    const q = `insert into accounts (
                                   account_id,
                                   account_type,
                                   balance,
                                   customer_id) values ($1, $2, $3, $4)`;
    const values = [
                    account.account_id,
                    account.account_type,
                    account.balance,
                    account.customer_id ];
    let res = await client.query(q, values);
    if (res) {
        client.end();
        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Headers" : "Content-Type",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT"
            } 
        };
    }else{
        client.end();
        return {statusCode: 404, headers:{
            "Access-Control-Allow-Headers" : "Content-Type",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "PUT, OPTIONS"
           }
        };
    }
} 