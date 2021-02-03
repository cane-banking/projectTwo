import {Client} from 'pg';

export const handler = async (event: any) => {
    let accountId = event.queryStringParameters.account_id;
    const client = new Client();
    await client.connect();
    const query = `select * from transactions where account_id = $1`;
    const values = [accountId] ;
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

/*
    let response;

    //put headers. look at our branches for an example
    try{
        response = await client.query(query, values);
    } catch (error) {
        console.log(error);
    }
    console.log(response);
    client.end();
    return response;


*/

