const express = require('express')
const router = express.Router()

const Student = require('../models/Student')

//get all
router.get('/', async (req,res) => {
    Student.find({}).populate("wands").then(allStudents =>{
        res.json(allStudents)
    }).catch(err => res.json({status: 400, err: err}))
})

//get one
router.get('/name/:name', async (req,res) => {
    Student.findOne({firstName: req.params.name}).populate("wands").then(student =>{
        res.json(student)
    }).catch(err => res.json({status: 400, err: err}))
})

//make one
router.post('/', async (req,res) =>{
    const student = req.body
    
    Student.create(student).then(() => {
        // console.log(student.firstName)
        Student.find({}).populate("wands").then(allStudents => {
            res.json(allStudents)
        }).catch(err => res.json({status: 400, err: err}))
    }).catch(err => res.json({status: 400, err: err}))
})

//update one
router.put('/id/:id', async (req,res) => {
    Student.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(() =>{
        Student.find({}).populate("wands").then(allStudents => {
            res.json(allStudents)
        }).catch(err => res.json({status: 400, err: err}))
    }).catch(err => res.json({status: 400, err: err}))
})

//delete one
router.delete('/id/:id', (req,res) =>{
    Student.findOneAndDelete({_id: req.params.id}).then(() => {
        Student.find({}).populate("wands").then(allStudents =>{
            res.json(allStudents)
        }).catch(err => res.json({status: 400, err: err}))
    }).catch(err => res.json({status: 400, err: err}))
})

module.exports = router;