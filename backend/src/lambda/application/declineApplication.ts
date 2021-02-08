import {Client} from 'pg';

interface MyEvent {
    body: string;
}

export async function handler(event: MyEvent){
    let app_id = event.body;
    const client = new Client();
    await client.connect();
    const query = `UPDATE applications SET applicationstatus = 'declined' WHERE application_id = $1`;
    const values = [app_id];
    let res = await client.query(query, values);
    if(res) {
        client.end();
        return {statusCode: 200, headers:{
            "Access-Control-Allow-Headers" : "Content-Type",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "PUT, OPTIONS"
        }};
    }else {
        client.end();
        return {statusCode: 404, headers:{
            "Access-Control-Allow-Headers" : "Content-Type",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "PUT, OPTIONS"
        }};
    }
}