import mongoose from "mongoose"

const biodataSchema = new mongoose.Schema({

name:String,
dob:String,
age:Number,
gender:String,
religion:String,
contact:String,
fatherName:String,
motherName:String,
education:String,
profession:String,
rashi:String,
nakshatra:String,
photo:String

})

export default mongoose.model("Biodata", biodataSchema)