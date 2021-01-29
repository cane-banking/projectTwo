import * as AWS from 'aws-sdk';
import {Client} from 'pg';

let docClient = new AWS.DynamoDB.DocumentClient({
    region: 'us-west-2',
    endpoint: 'http://dynamodb.us-west-2.amazonaws.com'
});

interface MyEvent {
    body: string;
}

export const handler = async (event: MyEvent): Promise<any> => {
    let user: User = JSON.parse(event.body) as User;
    let resp = await addUser(user);
    addCustomerPg(user);
    console.log
    if (resp) {
        return {statusCode: 204, headers: {
            "Access-Control-Allow-Headers" : "Content-Type",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        }, body: JSON.stringify(user)};
    } else {
        return {statusCode: 400};
    }
}

async function addCustomerPg(customer: any){
    const client = new Client();
    await client.connect();

    let response = await client.query(`insert into customer (
                                   customer_id,
                                   firstname,
                                   lastname) values ($1, $2, $3)`);
    const values = [
                    customer.customer_id,
                    customer.firstname,
                    customer.lastname ];
    if(response){
        return {
            statusCode: 204,
            
        }
    }

}



    async function addUser(user: User): Promise<boolean> {
        // object to be sent to AWS.
        const params = {
            // TableName - the name of the table we are sending it to
            TableName: 'users',
            // Item - the object we are sending
            Item: user,
            ConditionExpression: '#customer_id <> :customer_id',
            ExpressionAttributeNames: {
                '#customer_id': 'customer_id'

            },
            ExpressionAttributeValues: {
                ':customer_id': user.customer_id

            }
        };

        return await docClient.put(params).promise().then(() => {
            return true;
        }).catch((error) => {
            return false;
        });
    }


export class User {
    public role: string = 'customer';
    constructor(public customer_id: string, public username: string, public firstname: string,public lastname: string,public password: string, role: string, public email: string ) {
        if (role) {
            this.role = role;
        }
    };
}