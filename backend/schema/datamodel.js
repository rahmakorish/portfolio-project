const mongoose = require('mongoose');
//create connection with data collction
mongoose.connect('mongodb://localhost:27017/portofolioData').
then(()=>
console.log('MongoDBconnected'))
.catch((err)=>console.log(`error: ${err}`));

//create schema for data
const portofolioDataSchema = new mongoose.Schema(
    {
    name:{
        type:String,
        required:true,
        unique:true,

    },
    email:{
        type:String,
        required:true,
        unique:true,
        match:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    },
    phone:Number,
    Github:{
        type:String,
        required:true,
        unique:true,
        
    },
    linkedin:{
        type:String,
        required:true,
        unique:true,
    },
    aboutText:{
        type:String,
        required:true,
    },
    }
)
//create data model
const portofolioData = mongoose.model('contact Data', portofolioDataSchema)

module.exports = mongoose.model('portofolioData', portofolioDataSchema);
