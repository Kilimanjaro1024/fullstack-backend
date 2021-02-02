const Wand = require('../models/Wand')
const Student = require('../models/Student')
const mongoose = require('./connection')

Student.find({}).remove(() => {
    Wand.find({}).remove(() => {
      let harry = Student.create({
        firstName: 'harry',
        lastName: 'potter',
        year: 7,
        house: "gryffindor"
      }).then(student => {
        Promise.all([
          Wand.create({
            wood: 'holly',
            length: 11,
            core: "pheonix feather"
          }).then(wand => {
            student.wands.push(wand)
          }),
          Wand.create({
            wood: 'elder',
            length: 15,
            core: "thestral tail-hair"
          }).then(wand => {
            student.wands.push(wand)
          })
        ]).then(() => {
          student.save()
        })
      })
    })
  })