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
        // match:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    },
    message:String,
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
module.exports = mongoose.model('contact Data', contactDataSchema)

