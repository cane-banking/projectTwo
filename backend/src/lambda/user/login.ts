import * as AWS from 'aws-sdk';


let docClient = new AWS.DynamoDB.DocumentClient({
    region: 'us-west-2',
    endpoint: 'http://dynamodb.us-west-2.amazonaws.com'
});


export const handler = async (event: any): Promise<any> => {
    const user = await getUserByName(event.body.username);
    console.log('ive been hit yikes');
    if (user && user.password === event.body.password) {
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

async function getUserByName(username: string): Promise<User | null> {
    const params = {
        TableName: 'users',
        Key: {
            'username': username
        }
    };
    return await docClient.get(params).promise().then((data) => {
        if (data && data.Item) {
            return data.Item as User;
        } else {
            return null;
        }
    })
}

export class User {
    public role: string = 'customer';
    constructor(public username: string, public firstname: string,public lastname: string,public password: string, role: string, public email: string ) {
        if (role) {
            this.role = role;
        }
    }
}