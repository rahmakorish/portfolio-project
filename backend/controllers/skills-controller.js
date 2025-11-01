const express= require('express')
const skillData = require('../models/skills-models')

//create new skill
exports.creatSkill = async (req,res)=>{
    const {skill, skillDetails}= req.body;
    try{
    const myskills = await skillData.create({skill, skillDetails})
        res.status(200).json(myskills)
    }
    catch(err){
        res.status(500).json({error : err.message})
    }
}

//update skill
exports.updateSkills= async (req,res)=>{
    const {skillid} = req.params
    const {newskill, newskillDetails}= req.body;
    try{
    const myupdatedskills = await skillData.findByIdAndUpdate(skillid,{skill:newskill, skillDetails:newskillDetails},{new:true})
        res.status(200).json(myupdatedskills)
    }
    catch(err){
        res.status(500).json({error : err.message})
    }
}
//retrive skill
exports.getSkills= async(req,res)=>{
    try{
        const skills = await skillData.find()
        res.status(200).json(skills)
    }
    catch(err){
        res.status(500).json({error:err.message})
    }
}
//change delete to hide********
//delete
exports.hideSkill = async(req,res)=>{
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
}