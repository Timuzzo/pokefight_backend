const mongoose = require('mongoose')

const fighterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    wins: {
        type: Number,
        required: true
    },
    loses: {
        type: Number,
        required: true
    },
})

module.exports = mongoose.model("Fighter", fighterSchema)
