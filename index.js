
import express from 'express';
import redis from 'redis';
import morgan from 'morgan';
import { createProxyMiddleware } from 'http-proxy-middleware';
import 'dotenv/config';

const app = express();
// app.use(morgan('dev'));

const port = process.env.PORT;
const algorithm = process.env.ALGORITHM;
const mainUrlSegment = process.env.BASE_URL_SEGMENT;
const serverUrl = process.env.SERVER_URL;

console.log(mainUrlSegment)

app.use(mainUrlSegment, createProxyMiddleware({
    target: serverUrl,
    changeOrigin: true,
    pathRewrite: {
        [`^${mainUrlSegment}`]: '',
    },
 }));

// const client = redis.createClient({
//     host: '127.0.0.1', //redis the name of the servise in docker compose 
//     port: '6379',
// });

// await client.connect();

// client.set("user" , 23);

// let res = await client.get("user");

// console.log("we" ,res)

// console.log(client);

app.listen(port, () => {
    console.log("Rate Limiter Server is Up and Running on  " + port);
});