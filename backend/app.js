//configure env
const dotenv = require('dotenv')
dotenv.config()
const express = require('express');
const app = express();
const port = process.env.PORT
const path = require('path');
//DB connection:
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/portofolioData').
then(()=>
console.log('MongoDBconnected'))
.catch((err)=>console.log(`error: ${err}`));
// const mongoose = require('mongoose');
const corsMiddleWare = require('./middlewares/cors.middleware');
app.use(corsMiddleWare)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.json());


const aboutRoute = require('./routers/about-router')
const skillsRoute = require('./routers/skills-router')
const projectsRoute = require('./routers/projects-router')
const contactRoute = require('./routers/contact-router')

app.use(express.json())
//routes
app.use('/about',aboutRoute)
app.use('/skills',skillsRoute)
app.use('/projects',projectsRoute)
app.use('/contact',contactRoute)



app.listen(port,()=>{
    console.log(`server started successfully at ${port}`)
})

