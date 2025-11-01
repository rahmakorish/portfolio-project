const express = require('express')
const router = express.Router()
const {hideSkill, updateSkills,getSkills,creatSkill} = require('../controllers/skills-controller')

router.post('/', creatSkill)
router.put('/:skillid',updateSkills)
router.get('/',getSkills)

router.delete('/:id',hideSkill)

module.exports= router;
