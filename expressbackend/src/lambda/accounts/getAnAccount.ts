import {Client} from 'pg';


export const handler = async (event: any) => {
    const accountId = event.queryStringParameters.accountId;
    console.log('accountId',accountId);
    const client = new Client();
    await client.connect();
    const query = `select * from accounts where account_id = $1`;
    const values = [accountId] ;
    let response = await client.query(query, values);
    if (response) {
        client.end();
        return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT"
        }, body: JSON.stringify(response.rows)
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