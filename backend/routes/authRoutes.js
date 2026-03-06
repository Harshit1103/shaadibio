import express from "express"
import User from "../models/User.js"

const router = express.Router()

router.post("/register", async (req,res)=>{

const {email,password} = req.body

const existingUser = await User.findOne({email})

if(existingUser){
    return res.status(400).json({message:"User exists"})
}

const user = new User({email,password})

await user.save()

res.json({message:"User registered"})

})

router.post("/login", async (req,res)=>{

const {email,password} = req.body

const user = await User.findOne({email,password})

if(!user){
    return res.status(400).json({message:"Invalid credentials"})
}

res.json({message:"Login success", user})

})

export default router