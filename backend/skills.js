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

//create new skill
router.post('/',async (req,res)=>{
    const {skill, skillDetails}= req.body;
    try{
    const myskills = await skillData.create({skill, skillDetails})
        res.status(200).json(myskills)
    }
    catch(err){
        res.status(500).json({error : err.message})
    }
})

//update skill
router.put('/:skillid',async (req,res)=>{
    const {skillid} = req.params
    const {newskill, newskillDetails}= req.body;
    try{
    const myupdatedskills = await skillData.findByIdAndUpdate(skillid,{skill:newskill, skillDetails:newskillDetails},{new:true})
        res.status(200).json(myupdatedskills)
    }
    catch(err){
        res.status(500).json({error : err.message})
    }
})
//retrive skill
router.get('/', async(req,res)=>{
    try{
        const skills = await skillData.find()
        res.status(200).json(skills)
    }
    catch(err){
        res.status(500).json({error:err.message})
    }
})

//delete
router.delete('/:id', async(req,res)=>{
    const {id} = req.params;
    try{
        const deletedskill = await skillData.findByIdAndDelete({id})
    if(deletedskill){
            res.status(201).json(deletedskill)

            }
            else{
                res.status(404).json('skill not found')
            }   
        }
    catch(err){
        res.status(500).json({error:err.message})
    }
})

module.exports= router;
