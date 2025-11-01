const express = require('express');
const router = express.Router();
const multer = require('multer');
const mongoose = require('mongoose');

// create schema for data
const aboutDataSchema = new mongoose.Schema(
        {
    name:{
        type:String,
        required:true,
        unique:true,

    },
    role:{
        type:String,
        required:true,
    }
    ,
    aboutText:{
        type:String,
        required:true,
    },
    imgURL:{
        type:String,
        required:true
    }
    }
)


module.exports = mongoose.model('About', aboutDataSchema)

