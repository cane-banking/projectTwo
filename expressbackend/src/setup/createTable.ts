import * as AWS from 'aws-sdk';
import userService from '../user/user.service';


// Set the region
AWS.config.update({ region: 'us-west-2' });

// Create a DynamoDB service object
const ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

const removeUsers = {
    TableName: 'users'
}


const userSchema = {
    AttributeDefinitions: [
        {
            AttributeName: 'username',
            AttributeType: 'S'
        }
    ],
    KeySchema: [
        {
            AttributeName: 'username',
            KeyType: 'HASH'
        }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 5,
        WriteCapacityUnits: 5
    },
    TableName: 'users',
    StreamSpecification: {
        StreamEnabled: false
    }
};


ddb.deleteTable(removeUsers, function (err, data) {
    if (err) {
        console.error('Unable to delete table. Error JSON:', JSON.stringify(err, null, 2));
    } else {
        console.log('Deleted table. Table description JSON:', JSON.stringify(data, null, 2));
    }
    setTimeout(()=>{
        ddb.createTable(userSchema, (err, data) => {
            if (err) {
                // log the error
                console.log('Error', err);
            } else {
                // celebrate, I guess
                console.log('Table Created', data);
                setTimeout(()=>{
                    populateUserTable();
                }, 10000);
            }
        });
    }, 5000);
});

function populateUserTable() {
    userService.addUser({username: 'cassandra', firstname:'cassandra',lastname: 'terry',password: 'pass',role: 'customer'}).then(()=>{});
    userService.addUser({username: 'asad', firstname:'asad',lastname: 'nazir',password: 'pass',role: 'customer'}).then(()=>{});
    userService.addUser({username: 'nilam', firstname:'nilam',lastname: 'patel',password: 'pass',role: 'customer'}).then(()=>{});
    userService.addUser({username: 'emily', firstname:'emily',lastname: 'smith',password: 'pass',role: 'employee'}).then(()=>{});
    userService.addUser({username: 'richard', firstname:'richard',lastname: 'orr',password: 'pass',role: 'employee'}).then(()=>{});
}


