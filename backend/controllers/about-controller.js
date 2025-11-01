const express = require('express');
const aboutData = require('../models/about-model') 

//get data 
exports.getAboutData =  async(req,res)=>{
    const about = await aboutData.find()
        res.status(200).json(about)
}

//create data at first time
exports.createAboutData =async (req,res)=>{
    const {name, aboutText, role}= req.body;
    const imgURL= req.file?`/uploads/${req.file.filename}`:null;
    try{
    const myabout = await aboutData.create({name, role ,aboutText,imgURL})
        res.status(200).json(myabout)
    }
    catch(err){
        res.status(500).json({error : err.message})
    }
}
//update data 
exports.updateAboutData =async (req,res)=>{
    const {id} = req.params; // Assuming the ID is passed as a URL parameter
    const {name, aboutText, role}= req.body;
    const imgURL= req.file?`/uploads/${req.file.filename}`:null;

    try{
        const updatedAbout = await aboutData.findByIdAndUpdate(
            id,
            { name, role, aboutText, imgURL },
            { new: true, runValidators: true } // Return the updated document and run schema validators
        );

        if (!updatedAbout) {
            return res.status(404).json({ message: 'About data not found' });
        }
        res.status(200).json(updatedAbout);
    }
    catch(err){
        res.status(500).json({error : err.message});
    }
}
//delete 
exports.deleteAboutData =async (req,res)=>{
    const {id} = req.params;
    try{
    const deletedText = await aboutData.findByIdAndDelete(id)

        if(deletedText){
        res.status(201).json(deletedText)

        }
        else{
            res.status(404).json('text not found')
        }
    }
    catch(err){
        res.status(500).json({error : err.message})
    }
}
