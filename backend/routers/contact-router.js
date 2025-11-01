const express = require('express')
const router = express.Router()
const{getContactMsg, createContactMsg}= require('../controllers/contact-controller')

router.get('/get',getContactMsg)
router.post('/send', createContactMsg)

module.exports= router;
