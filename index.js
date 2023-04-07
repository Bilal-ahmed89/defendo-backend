import express from 'express'
import { connectDB } from './config/db.js';
import cors from 'cors'
import bodyParser from 'body-parser'


const app = express()

connectDB();

app.use(cors())

app.use(bodyParser.json())








const port = 7000;

app.listen(port, ()=>{
    console.log(`The server is listening at port ${port}`);
})

