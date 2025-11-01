const express = require('express')
const router = express.Router();
const {getAboutData, deleteAboutData, updateAboutData, createAboutData} = require('../controllers/about-controller')

router.get('/gatabout', getAboutData)
router.post('/cretae', createAboutData)
router.put('/',updateAboutData)
router.delete('/:id',deleteAboutData)


module.exports= router;

