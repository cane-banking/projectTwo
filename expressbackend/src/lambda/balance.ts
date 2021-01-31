import { Client } from 'pg';

export async function handler(event: any) {
    const client = new Client();
    const accounts = JSON.parse(event.body);
    client.connect()
    const query =`select balance from accounts where account_id = $1::accounts.account_id and account_type =$2::accounts.account_type`
    const values =[ accounts.account_id, accounts.account_type]

    let response;
    try{
        response=await client.query(query, values);
    }catch(error){
        console.log(error);
    }
    console.log(response);
    client.end;
    return response;
}



// .then(() => console.log ('Connected to pg'))
//     .then(()=> client.query ("select balance from accounts where account_id =$1" , ['9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb8c']) )
//     .then((result => console.table(result.rows)))
//     .catch(e => console.log(e))
//     .finally(()=>client.end())
    
    