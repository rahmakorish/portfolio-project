const express = require('express')
const projectData = require('../models/projects-model')

//create single project
exports.createNewProject = async (req,res)=>{
    const {name, description, githubLink,deployment}= req.body;
    try{
    const myProjects = await projectData.create({name, description, githubLink,deployment})
        res.status(201).json(myProjects)
    }
    catch(err){
        res.status(500).json({error : err.message})
    }
}


//retrive all projects
exports.getAllProjects = async(req,res)=>{
        const myProjects = await projectData.find();
        res.status(200).json(myProjects)

}


//update specific project
exports.updateProject =async(req,res)=>{
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
}

//change delete to hide *******
//delete specific project
exports.hideProject =async(req,res)=>{
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
}

