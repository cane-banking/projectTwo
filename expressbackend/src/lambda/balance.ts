import { Client } from 'pg';

export async function handler(event: any) {
    const client = new Client();
    const user = JSON.parse(event.body);
    client.connect()
    const query ='select balance from accounts where customer_id = $1;'
    const values =[user.customer_id]

    // let res = await client.query(query,values);
    // console.log(res.rows)
    //     if(res) {
    //         return {statusCode: 200, headers:{
    //             "Access-Control-Allow-Headers" : "Content-Type",
    //             "Content-Type": "application/json",
    //             "Access-Control-Allow-Origin": "*",
    //             "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
    //         }, body: JSON.stringify(res.rows)}

    //         }else {
    //             return {statusCode: 404, body: JSON.stringify({})};
    //     }
       



    let response;
    try{
        response=await client.query(query, values);
        console.log(response.rows);
    }catch(error){
        console.log(error);
    }
    console.log(response);
    client.end;
    return response?.rows;
}

    
    