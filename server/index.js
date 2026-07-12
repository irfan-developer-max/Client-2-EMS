import dotenv from "dotenv";
dotenv.config();
import express from 'express';
import cors from 'cors';
import userRouter from "./routes/auth.js";
import connectDB from './db/db.js';
const app=express();
app.use(cors());
app.use(express.json());
connectDB()
app.use('/api/auth',userRouter);

app.get('/',(req,res)=>{
    res.send("Hello World");
});
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})