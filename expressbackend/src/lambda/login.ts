import * as AWS from 'aws-sdk';


let docClient = new AWS.DynamoDB.DocumentClient({
    region: 'us-west-2',
    endpoint: 'http://dynamodb.us-west-2.amazonaws.com'
});

//handler

export const handler = async (event: any): Promise<any> => {
    const user = await getUserByName(event.username);
    console.log('ive been hit yikes');
    if (user && user.password === event.password) {
        return {statusCode: 200, body: JSON.stringify(user), header: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }};
    } else {
        return {statusCode: 404, body: JSON.stringify({})};
    }
}


//service to talk to database
async function getUserByName(username: string): Promise<User | null> {
    const params = {
        TableName: 'users',
        Key: {
            'username': username
        }
    };
    return await docClient.get(params).promise().then((data) => {
        if (data && data.Item) {
            //logger.debug(`data.Item: ${JSON.stringify(data.Item)}`);
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
    };
}