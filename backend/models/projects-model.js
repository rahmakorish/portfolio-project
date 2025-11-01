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
    imgURL:String
    }
)
//create data model
const projectData = mongoose.model('project Data', projectDataSchema)

//create single project
router.post('/',async (req,res)=>{
    const {name, description, githubLink,deployment}= req.body;
    try{
    const myProjects = await projectData.create({name, description, githubLink,deployment})
        res.status(201).json(myProjects)
    }
    catch(err){
        res.status(500).json({error : err.message})
    }
}
)

//retrive all projects
router.get('/',async(req,res)=>{
        const myProjects = await projectData.find();
        res.status(200).json(myProjects)

})


//update specific project
router.put('/:projectid', async(req,res)=>{
    const {projectid} = req.params;
    const{name, description, githubLink, deployment}= req.body;
    try{
        const updatedProject = await projectData.findByIdAndUpdate(projectid,{name:name, description:description, 
            githubLink:githubLink, deployment:deployment}, {new:true})
        res.status(200).json(updatedProject)
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
})


//delete specific project
router.delete('/:projectid', async(req,res)=>{
    const {projectid}= req.params;
    try{
            const deletedProject = await projectData.findByIdAndDelete(projectid)
        if(deletedProject){
            res.status(200).json(deletedProject)
        }
        else{
            res.status(404).json('project with this id doesn\'t exist')
        }
    }
    catch(err){
        res.status(500).json({error: err.message})
    }

})


module.exports= router;
