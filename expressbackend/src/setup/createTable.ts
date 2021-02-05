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
    userService.addUser({customer_id: '1234', username: 'cassandra', firstname:'Cassandra',lastname: 'Terry',password: 'pass',role: 'customer', email: 'cterry@gmail.com'}).then(()=>{});
    userService.addUser({customer_id: '5678', username: 'asad', firstname:'Asad',lastname: 'Nazir',password: 'pass',role: 'customer', email: 'anazir@gmail.com'}).then(()=>{});
    userService.addUser({customer_id: '9012', username: 'nilam', firstname:'Nilam',lastname: 'Patel',password: 'pass',role: 'customer', email: 'npatel@gmail.com'}).then(()=>{});
    userService.addUser({customer_id: '3456', username: 'emily', firstname:'Emily',lastname: 'Smith',password: 'pass',role: 'employee', email: 'esmith@gmail.com'}).then(()=>{});
    userService.addUser({customer_id: '7890', username: 'richard', firstname:'Richard',lastname: 'Orr',password: 'pass',role: 'employee', email: 'rorr@gmail.com'}).then(()=>{});
}


