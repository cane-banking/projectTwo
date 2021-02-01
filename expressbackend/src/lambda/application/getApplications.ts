import {Client} from 'pg';

export async function handler(){
    const client = new Client();
    client.connect();
    const q = `select * from applications`;
    let res = await client.query(q);
    if(res) {
        return {statusCode: 200, headers:{
            "Access-Control-Allow-Headers" : "Content-Type",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        }, body: JSON.stringify(res.rows)};

        }else {
            return {statusCode: 404, body: JSON.stringify({})};
    }
}



