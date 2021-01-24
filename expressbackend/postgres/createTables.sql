import dotenv from 'dotenv';
dotenv.config();

drop table accounts ;
drop table customer;
drop table transactions;
drop table applications ;
drop table checks;

CREATE TABLE customer(
	customer_id SERIAL,
	firstName text UNIQUE NOT NULL,
	lastName text NOT null,
	CONSTRAINT "pk_customer" PRIMARY KEY  ("customer_id")
)


CREATE TABLE accounts(
	account_id UUID,
	account_type text not NULL,
	balance int,
	customer_id int,
	CONSTRAINT "pk_accounts" PRIMARY KEY  ("account_id")	
)


CREATE TABLE transactions(
	transaction_id SERIAL,
	time_stamp TIMESTAMPTZ,
	vendor text not null,
	transaction_amt int not null,
	account_id UUID,
	customer_id int
)


create table applications(
application_id UUID ,
socialSecurity int not null,
firstName text,
lastName text,
accountType text,
applcationDate timestamp,
email text,
address text,
dateofBirth date,
applicationStatus text,
customer_id int
)

create table checks (
check_id uuid,
customer_id int,
account_id UUID,
check_date date,
firstName text,
lastName text,
amount int

)


ALTER TABLE "accounts" ADD CONSTRAINT "fk_cust_cust_id"
    FOREIGN KEY ("customer_id") REFERENCES "customer" ("customer_id");
   

ALTER TABLE "transactions" ADD CONSTRAINT "fk_accounts_account_id"
    FOREIGN KEY ("account_id") REFERENCES "accounts" ("account_id");   

   
ALTER TABLE "transactions" ADD CONSTRAINT "fk_cust_cust_id"
    FOREIGN KEY ("customer_id") REFERENCES "customer" ("customer_id");

    
ALTER TABLE applications ADD CONSTRAINT "fk_cust_cust_id"
    FOREIGN KEY ("customer_id") REFERENCES "customer" ("customer_id");
   
ALTER TABLE checks ADD CONSTRAINT "fk_cust_cust_id"
    FOREIGN KEY ("customer_id") REFERENCES "customer" ("customer_id");   
   
ALTER TABLE checks  ADD CONSTRAINT "fk_accounts_account_id"
    FOREIGN KEY ("account_id") REFERENCES "accounts" ("account_id");   
   
   
   
   
   
   
   
   
   
   
   