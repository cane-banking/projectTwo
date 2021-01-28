import * as AWS from 'aws-sdk';
import logger from '../log';


let docClient = new AWS.DynamoDB.DocumentClient({
    region: 'us-west-2',
    endpoint: 'http://dynamodb.us-west-2.amazonaws.com'
});

export const handler = async (event: any): Promise<any> => {
    let user = JSON.parse(event.body);
    console.log(user);
    let resp = await addUser(user);
    console.log
    if (resp) {
        return {statusCode: 200,  headers: {
            "Access-Control-Allow-Headers" : "Content-Type",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        }, body: JSON.stringify(user)};
    } else {
        return {statusCode: 404, body: JSON.stringify({})};
    }
}



    async function addUser(user: User): Promise<boolean> {
        // object to be sent to AWS.
        const params = {
            // TableName - the name of the table we are sending it to
            TableName: 'users',
            // Item - the object we are sending
            Item: user,
            ConditionExpression: '#username <> :username',
            ExpressionAttributeNames: {
                '#username': 'username'

            },
            ExpressionAttributeValues: {
                ':username': user.username

            }
        };

        return await docClient.put(params).promise().then(() => {
            logger.info('Successfully created item');
            return true;
        }).catch((error) => {
            logger.error(error);
            return false;
        });
    }


export class User {
    public role: string = 'customer';
    constructor(public username: string, public firstname: string,public lastname: string,public password: string, role: string, public email: string ) {
        if (role) {
            this.role = role;
        }
    };
}