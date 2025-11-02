const express = require('express');
const mongoose = require('mongoose');

// create schema for data
const contactDataSchema = new mongoose.Schema(
        {
    name: String,
    email:{
        type:String,
        required:true,
        unique:true,
    },
    message:String,
    }
)
//create data model
module.exports = mongoose.model('contact Data', contactDataSchema)

