import express from "express";
import {login} from "../controllers/authController.js";
const router=express.Router()
router.post('/login',login)
router.get('/test',(req,res)=>{
    console.log("auth test")
    res.send("auh test")
})
export default router;