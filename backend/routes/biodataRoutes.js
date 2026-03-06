import express from "express"
import Biodata from "../models/Biodata.js"

const router = express.Router()

router.post("/save", async (req,res)=>{

const biodata = new Biodata(req.body)

await biodata.save()

res.json({message:"Biodata saved"})

})

router.get("/", async (req,res)=>{

const data = await Biodata.find()

res.json(data)

})

export default router