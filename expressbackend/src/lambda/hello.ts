// handler - the entry point for the lambda
export const handler = async (event: User): Promise<string> => {
    console.log('Hello World');
    let res = {money: 50};
    if(event.username === 'bill' && event.password === 'pass')
        return JSON.stringify(event);
    return '401';
}

interface User {
    username: string;
    password: string;
}