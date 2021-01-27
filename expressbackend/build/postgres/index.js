"use strict";
// import { Pool, PoolClient } from 'pg';
// // We shouldn't use Client because it creates a connection not in the pool.
// // We'll probably have to use client in AWS Lambda, though.
// import { getPositionOfLineAndCharacter } from 'typescript';
// // Creating a connection pool of pg Clients
// // new Pool() will retrieve environment variables
// const pool = new Pool();
// async function login() {
//             // This opens me up to SQL Injection (malicious sql code from the user)
//             const q = `select * from diner where username=$1::text and password=$2::text`;
//             // const args = [user, pass];
//             //const res = await pool.query(q, args);
//             // console.log(res.rows);
//             quit();
// }
// async function loginInjection() {
//             // This opens me up to SQL Injection (malicious sql code from the user)
//             // const q = `select * from diner where username='${user}' and password='${pass}'`;
//             console.log(q);
//             const res = await pool.query(q);
//             console.log(res.rows);
//             quit();
// }
// function firstTry() {
//     // pool.connect(): check out a client from the pool.
//     pool.connect().then(async (cli: PoolClient) => {
//         // with access to a checked out client, we can do iterative queries.
//         // This also allows me to open a transaction and do more complex queries (and rollback or commit)
//         const res = await cli.query('select * from diner');
//         //console.log(err, res);
//         console.log(res.rows);
//         const res2 = await cli.query('select * from diner where username = $1::text', ['tyler']);
//         console.log(res2.rows);
//         // We should release the client back to the pool once we're done with it.
//         cli.release();
//         quit();
//     });
// }
// //firstTry();
// //loginInjection();
// //login();
// function quit() {
//     // The app is closing, shut down the connections.
//     pool.end();
//     process.exit();
// }
