-- import dotenv from 'dotenv';

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
);


CREATE TABLE accounts(
	account_id UUID,
	account_type text not NULL,
	balance int,
	CONSTRAINT "pk_accounts" PRIMARY KEY  ("account_id")
);


CREATE TABLE transactions(
	transaction_id SERIAL,
	time_stamp TIMESTAMPTZ,
	vendor text not null,
	transaction_amt int not null
);