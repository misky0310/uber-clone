import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';

const app=express();
app.use(cors());

app.listen(process.env.PORT,() => {
    console.log(`Server started on port ${process.env.PORT}`);
})

app.get('/', (req,res) => {
    return res.json("Hello world")
})