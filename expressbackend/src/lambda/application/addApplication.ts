import {Client} from 'pg';

interface MyEvent {
    body: string;
}

export const handler = async (event: MyEvent) => {
    let application = JSON.parse(event.body);
    const client = new Client();
    await client.connect();
    const query = `insert into applications (
                                   application_id,
                                   socialsecurity,
                                   firstname,
                                   lastname,
                                   accounttype,
                                   applicationdate,
                                   address,
                                   dateofbirth,
                                   applicationstatus,
                                   customer_id) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`;
    const values = [
                    application.application_id,
                    application.socialsecurity,
                    application.firstname,
                    application.lastname,
                    application.accounttype,
                    application.applicationdate,
                    application.address,
                    application.dateofbirth,
                    application.applicationstatus,
                    application.customer_id ];
    let response = await client.query(query, values);
    //try{
    //    response = await client.query(query, values);
    //} catch (error) {
    //    console.log(error);
    //}
    //console.log(response);
    //client.end();
    //return response;
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