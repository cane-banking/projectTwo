export class Apps {
    rows: App[] = [];
}

export interface App {
    application_id: string;
    socialsecurity: string;
    firstname: string;
    lastname: string;
    accounttype: string;
    applicationdate: string;
    address: string;
    dateofbirth: string;
    applicationstatus: string;
    customer_id: string;
} 