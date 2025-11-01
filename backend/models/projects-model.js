const express = require('express');
// import mongoose from './node_modules/mongoose/types/index.d';
const router = express.Router();
const multer = require('multer');
const mongoose = require('mongoose')
// create schema for data
const projectDataSchema = new mongoose.Schema(
    {
    name:{
        type:String,
        required:true,
        unique:true,
    },
    description:{
        type:String,
        required:true,
    },
    githubLink:{
        type:String,
        required:true,
        // match: [/^https:\/\/(www\.)?github\.com\/[A-Za-z0-9_-]+\/[A-Za-z0-9_.-]+$/, 'Please enter a valid GitHub repository URL']
    },
    deployment:{
        type:String,
        required:true
    },
    imgURL:String,
    isHidden:Boolean
    }
)
//create data model
module.exports = mongoose.model('projectData', projectDataSchema)
