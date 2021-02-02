expres = require('express')
const router = express.Router()

const Student = require('../models/Wand')

router.get('/', async (req,res) => {
    Student.find({}).then(allStudents =>{
        res.json(allStudents)
    }).catch(err => res.json({status: 400, err: err}))
})

module.exports = router;