express = require('express')
const router = express.Router()

const Wand = require('../models/Wand')

//find all
router.get('/', async (req,res) => {
    Wand.find({}).then(allWands => {
        res.json(allWands)
    }).catch(err => res.json({status: 400, err: err}))
})

//find one
router.get('/wood/:wood', async (req,res) => {
    Wand.findOne({wood: req.params.wood}).then(wand =>{
        res.json(wand)
    }).catch(err => res.json({status: 400, err: err}))
})

//add one
router.post('/', async (req,res) =>{
    const wand = req.body
    
    Wand.create(wand).then(() => {
        // console.log(wand.firstName)
        Wand.find({}).then(allWands => {
            res.json(allWands)
        }).catch(err => res.json({status: 400, err: err}))
    }).catch(err => res.json({status: 400, err: err}))
})

//update one
router.put('/id/:id', async (req,res) => {
    Wand.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(() =>{
        Wand.find({}).then(allWands => {
            res.json(allWands)
        }).catch(err => res.json({status: 400, err: err}))
    }).catch(err => res.json({status: 400, err: err}))
})

//delete one
router.delete('/id/:id', (req,res) =>{
    Wand.findOneAndDelete({_id: req.params.id}).then(() => {
        Wand.find({}).then(allWands =>{
            res.json(allWands)
        }).catch(err => res.json({status: 400, err: err}))
    }).catch(err => res.json({status: 400, err: err}))
})

module.exports = router;