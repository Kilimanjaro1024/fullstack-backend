const { Schema, model } = require("mongoose");



const studentSchema = new Schema ({
    firstName: String,
    lastName: String,
    year: Number,
    house: String,
    wands: [{
        type: Schema.Types.ObjectId,
        ref: "Wand"
    }] 
})

const Student = model('Student', studentSchema)

module.exports = Student