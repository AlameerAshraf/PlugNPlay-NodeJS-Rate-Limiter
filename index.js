
import express from 'express';
import redis from 'redis';
import 'dotenv/config';

const app = express();
const port = process.env.PORT;



const client = redis.createClient({
    host: '127.0.0.1', //redis the name of the servise in docker compose 
    port: '6379',
});

await client.connect();

client.set("user" , 23);

let res = await client.get("user");

console.log("we" ,res)

console.log(client);

app.listen(port, () => {
    console.log("Rate Limiter Server is Up and Running on  " + port);
});