const { Schema, model } = require("mongoose");

const wandSchema = new Schema ({
    wood: String,
    length: Number,
    core: String,
})

const Wand = model('Wand', wandSchema)

module.exports = Wand