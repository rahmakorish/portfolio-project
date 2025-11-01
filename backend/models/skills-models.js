const express = require('express');
// import { Skills } from './app/src/app/layout/skills/skills';
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
    },
    }
)
//create data model
const skillData = mongoose.model('skill Data', skillDataSchema)


module.exports= router;
