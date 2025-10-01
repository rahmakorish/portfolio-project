const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const cors = require('cors');
const multer= require('multer')
const path = require('path')
///create connection with data collction
mongoose.connect('mongodb://localhost:27017/portofolioData').
then(()=>
console.log('MongoDBconnected'))
.catch((err)=>console.log(`error: ${err}`));


const aboutRoute = require('./about')
const skillsRoute = require('./skills')
const projectsRoute = require('./projects')
const contactRoute = require('./contact')

app.use(express.json())
// Middleware
app.use(cors()); 
// for future imgs uploads
app.use('/uploads',express.static(path.join(__dirname,'uploads')))
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, 'uploads')
    },
    filename:(req,file,cd)=>{
        cb(null, Date.now()+'-'+file.originalname)
    }
})
const upload = multer({storage})
// app.post('/api/upload', upload.single('aboutimg'),(req,res)=>{
//     res.send('upload success')
// })
//routes
app.use('/about',aboutRoute)
app.use('/skills',skillsRoute)
app.use('/projects',projectsRoute)
app.use('/contact',contactRoute)


app.use((req,res)=>{
    res.send(`<h1>hellooooo</h1>`)
})

app.listen(port,()=>{
    console.log(`server started successfully at ${port}`)
})

