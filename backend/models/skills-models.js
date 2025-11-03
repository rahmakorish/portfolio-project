const express = require('express');
const router = express.Router();
const multer = require('multer');
const mongoose = require('mongoose')
// create schema for data
const skillDataSchema = new mongoose.Schema(
    {
    skill:{
        type:String,
        required:true,
        unique:true,
    },
    skillDetails:{
        type:String,
        required:true,
    },isHidden:{
        type:Boolean,
        default:false
    }
    }
)
//create data model
const skillData = mongoose.model('skillData', skillDataSchema)


