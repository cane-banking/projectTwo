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

<<<<<<< HEAD
export function register(customer_id: string, username: string, firstname: string,lastname: string,password:string, email: string) {
    userService.addUser(new User(customer_id,username,firstname,lastname, password, 'customer', email)).then((res) => {
=======
/* export function register(username: string, firstname: string,lastname: string,password:string, email: string) {
    userService.addUser(new User(customer_id, username,firstname,lastname, password, 'customer', email)).then((res) => {
>>>>>>> dcfdc75d16b8a25991ce87be76a642e7c1e4bd46
        logger.trace(res);
        //callback();
    }).catch((err) => {
        logger.error(err);
        console.log('Error, this probably means that the username is already taken.')
        //callback();
    });
} */

export function updateUser(user: User) {
    userService.updateUser(user).then((success) => {
        logger.info('user updated successfully');
    }).catch((error) => {
        logger.warn('user not updated');
    });
}