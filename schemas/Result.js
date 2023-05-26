const mongoose = require('mongoose')

const resultSchema = new mongoose.Schema({
    winner: {
        type: String,
        required: true
    },
    loser: {
        type: String,
        required: true
    },
    turns: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("Result", resultSchema)