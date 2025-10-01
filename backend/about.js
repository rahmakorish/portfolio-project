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


const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, 'uploads/')
    },
    filename:(req,file,cb)=>{
        cb(null, Date.now()+'-'+file.originalname)
    }
})
const upload = multer({storage:storage})

//create data model
const aboutData = mongoose.model('about Data', aboutDataSchema)
//get data 
router.get('/', async(req,res)=>{
    // container = data model name.find()
    const about = await aboutData.find()
        res.status(200).json(about)
    })

//create data at first time
router.post('/', upload.single('img'), async (req,res)=>{
    const {name, aboutText, role}= req.body;
    const imgURL= req.file?`/uploads/${req.file.filename}`:null;
    try{
    const myabout = await aboutData.create({name, role ,aboutText,imgURL})
        res.status(200).json(myabout)
    }
    catch(err){
        res.status(500).json({error : err.message})
    }
})
//update data 
router.put('/',async (req,res)=>{
    //params from URL
    //text from sent request (body:raw:json)
   const {name, aboutText, role}= req.body;
    const imgURL= req.file?`/uploads/${req.file.filename}`:null;
    try{
    const myabout = await aboutData.create({name, role ,aboutText,imgURL})
        res.status(200).json(myabout)
    }
    catch(err){
        res.status(500).json({error : err.message})
    }
})
//delete 
router.delete('/:id',async (req,res)=>{
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
})
module.exports= router;

