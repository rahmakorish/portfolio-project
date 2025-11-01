//configure env
const dotenv = require('dotenv')
dotenv.config()
const express = require('express');
const app = express();
const port = process.env.PORT
const path = require('path');
//DB connection:
const connectDB = require('./config/DB.config')
connectDB()

const mongoose = require('mongoose');
const corsMiddleWare = require('./middlewares/cors.middleware');
app.use(corsMiddleWare)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.json());


const aboutRoute = require('./controllers/about-controller')
const skillsRoute = require('./controllers/skills-controller')
const projectsRoute = require('./projects')
const contactRoute = require('./contact')

app.use(express.json())
//routes
app.use('/about',aboutRoute)
app.use('/skills',skillsRoute)
app.use('/projects',projectsRoute)
app.use('/contact',contactRoute)



app.listen(port,()=>{
    console.log(`server started successfully at ${port}`)
})

