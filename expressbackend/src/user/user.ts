import logger from '../log';
import userService from './user.service';

export class User {
    public role: string = 'customer';
    constructor(public customer_id: string, public username: string, public firstname: string,public lastname: string,public password: string, role: string, public email: string ) {
        if (role) {
            this.role = role;
        }
    };
}

export async function login(username: string, password: string): Promise<User|null> {
    logger.debug(`${username +' '+ password}`);
    return await userService.getUserByName(username).then((user)=> {
        if (user && user.password === password) {
            return user
        } else {
            return null;
        }
    })
}

export function updateUser(user: User) {
    userService.updateUser(user).then((success) => {
        logger.info('user updated successfully');
    }).catch((error) => {
        logger.warn('user not updated');
    });
}