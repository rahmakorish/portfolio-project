const express = require('express')
const router = express.Router();
const {getAboutData, deleteAboutData, updateAboutData, createAboutData} = require('../controllers/about-controller')
const upload = require('../middlewares/uploads-middleware')
router.get('/',  getAboutData)
router.post('/create', upload.single('imgURL'),createAboutData)
router.put('/', upload.single('imgURL'), updateAboutData)
router.delete('/:id',deleteAboutData)


module.exports= router;

