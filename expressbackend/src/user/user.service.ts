import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import dynamo from '../dynamo/dynamo';
import logger from '../log';
import { User } from './user';

class UserService {
    private doc: DocumentClient;
    constructor() {
        this.doc = dynamo;
    }

    async getUsers(): Promise<User[]> {
        const params = {
            TableName: 'users'
        };
        return await this.doc.scan(params).promise().then((data) => {
            return data.Items as User[];
        })
    }

    async getUserByName(username: string): Promise<User | null> {

        const params = {
            TableName: 'users',
            Key: {
                'username': username
            }
        };
        return await this.doc.get(params).promise().then((data) => {
            if (data && data.Item) {
                logger.debug(`data.Item: ${JSON.stringify(data.Item)}`);
                return data.Item as User;
            } else {
                return null;
            }
        })
    }

    async addUser(user: User): Promise<boolean> {

        const params = {

            TableName: 'users',
            Item: user,
            ConditionExpression: '#username <> :username',
            ExpressionAttributeNames: {
                '#username': 'username'
            },
            ExpressionAttributeValues: {
                ':username': user.username
            }
        };
        return await this.doc.put(params).promise().then(() => {
            logger.info('Successfully created item');
            return true;
        }).catch((error) => {
            logger.error(error);
            return false;
        });
    }

    async updateUser(user: User) {
        const params = {
            TableName: 'users',
            Key: {
                'username': user.username
            },
            UpdateExpression: 'set password = :p, role = :r',
            ExpressionAttributeValues: {
                ':p': user.password,
                ':r': user.role
            },
            ReturnValues: 'UPDATED_NEW'
        };
        return await this.doc.update(params).promise().then((data) => {
            logger.debug(data);
            return true;
        }).catch(error => {
            logger.error(error);
            return false;
        });
    }
}

const userService = new UserService();
export default userService;
