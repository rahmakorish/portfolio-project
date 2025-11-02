const express = require('express');
const contactData = require('../models/contact-model')

exports.getContactMsg =async(req,res)=>{
    const myContactdata = await contactData.find();
    res.status(200).json(myContactdata)
}

//insert multiple data at once
exports.createContactMsg =async (req,res)=>{
    const {name, email, message}= req.body;
    try{
    const contactMsg = await contactData.create({name, email,  message})
        res.status(200).json(contactMsg)
    }
    catch(err){
        res.status(500).json({error : err.message})
    }
}
