"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AWS = __importStar(require("aws-sdk"));
var user_service_1 = __importDefault(require("../user/user.service"));
// Set the region
AWS.config.update({ region: 'us-west-2' });
// Create a DynamoDB service object
var ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });
var removeUsers = {
    TableName: 'users'
};
var userSchema = {
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
    }
    else {
        console.log('Deleted table. Table description JSON:', JSON.stringify(data, null, 2));
    }
    setTimeout(function () {
        ddb.createTable(userSchema, function (err, data) {
            if (err) {
                // log the error
                console.log('Error', err);
            }
            else {
                // celebrate, I guess
                console.log('Table Created', data);
                setTimeout(function () {
                    populateUserTable();
                }, 10000);
            }
        });
    }, 5000);
});
function populateUserTable() {
    user_service_1.default.addUser({ username: 'cassandra', firstname: 'cassandra', lastname: 'terry', password: 'pass', role: 'customer' }).then(function () { });
    user_service_1.default.addUser({ username: 'asad', firstname: 'asad', lastname: 'nazir', password: 'pass', role: 'customer' }).then(function () { });
    user_service_1.default.addUser({ username: 'nilam', firstname: 'nilam', lastname: 'patel', password: 'pass', role: 'customer' }).then(function () { });
    user_service_1.default.addUser({ username: 'emily', firstname: 'emily', lastname: 'smith', password: 'pass', role: 'employee' }).then(function () { });
    user_service_1.default.addUser({ username: 'richard', firstname: 'richard', lastname: 'orr', password: 'pass', role: 'employee' }).then(function () { });
}
