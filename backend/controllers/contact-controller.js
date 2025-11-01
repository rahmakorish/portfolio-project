const express = require('express');
const contactData = require('../models/contact-model')

exports.getContactMsg =async(req,res)=>{
    const myContactdata = await contactData.find();
    res.status(200).json(myContactdata)
}

//insert multiple data at once
exports.createContactMsg =async (req,res)=>{
    const {email,phone,Github,linkedin}= req.body;
    try{
    const myContact = await contactData.create({email,phone,Github,linkedin})
        res.status(200).json(myContact)
    }
    catch(err){
        res.status(500).json({error : err.message})
    }
}
