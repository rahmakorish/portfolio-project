const express = require('express');
const router = express.Router();
// const multer = require('multer');
const mongoose = require('mongoose');

// create schema for data
const contactDataSchema = new mongoose.Schema(
        {
    name: String,
    email:{
        type:String,
        required:true,
        unique:true,
        match:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    },
    message:string,
    phone:String,
    Github:{
        type:String,
        required:true,
        unique:true,
        match:/^https?:\/\/(?:www\.)?github\.com\/([A-Za-z0-9-]+)\/?$/
    },
    linkedin:{
        type:String,
        required:true,
        unique:true,
        match:/^https?:\/\/(?:www\.)?linkedin\.com\/(?:in|pub)\/[A-Za-z0-9\-\._%]+\/?(?:\?.*)?$/
    },
    }
)
//create data model
module.exports = mongoose.model('contactData', contactDataSchema)
//CRUD
//create & retrive
// //retrive data 
// router.get('/', async(req,res)=>{
//     const myContactdata = await contactData.find();
//     res.status(200).json(myContactdata)
// })
// //insert multiple data at once
// router.post('/',async (req,res)=>{
//     const {email,phone,Github,linkedin}= req.body;
//     try{
//     const myContact = await contactData.create({email,phone,Github,linkedin})
//         res.status(200).json(myContact)
//     }
//     catch(err){
//         res.status(500).json({error : err.message})
//     }
// })
// //update contact info 
// router.put('/',async (req,res)=>{
//     const{email, phone,Github, linkedin}= req.body
//     try{
//     const updatedContact = await contactData.findOneAndUpdate({}, {email:email, phone:phone, Github:Github, linkedin:linkedin},{new:true})
    
//     res.status(200).json(updatedContact)
//     }
//     catch(err){
//         res.status(500).json({error : err.message})
//     }
// })

// module.exports= router;
