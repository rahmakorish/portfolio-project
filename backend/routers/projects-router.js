const express = require('express')
const router = express.Router()
const {getAllProjects, createNewProject,updateProject,hideProject}= require('../controllers/projects-controller')
router.get('/',getAllProjects)
router.post('/create', createNewProject)
router.put('/:projectid',updateProject)
// router.delete('/:projectid',)

module.exports= router;
