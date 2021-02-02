expres = require('express')
const router = express.Router()

const Wand = require('../models/Wand')

router.get('/', async (req,res) => {
    Wand.find({}).then(allWands)
})

module.exports = router;