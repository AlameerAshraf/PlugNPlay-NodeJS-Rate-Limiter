
import express from 'express';
import redis from 'redis';
import 'dotenv/config';

const app = express();
const port = process.env.PORT;



// const client = redis.createClient({
//     host: 'localhost',
//     port: '6479',
// });

// await client.connect();

// client.set("user" , 23);

// let res = await client.get("user");

// console.log("we" ,res)

// console.log(client);

app.listen(port, () => {
    console.log("Rate Limiter Server is Up and Running on  " + port);
});