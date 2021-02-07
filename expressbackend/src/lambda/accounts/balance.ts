import { Client } from 'pg';

export async function handler(event: any) {
    const client = new Client();
    const user = JSON.parse(event.body);
    client.connect()
    const query ='select balance from accounts where customer_id = $1;'
    const values =[user.customer_id]

    let response;
    try{
        response=await client.query(query, values);
    }catch(error){
        console.log(error);
    }
    client.end;
    return response?.rows;
}


