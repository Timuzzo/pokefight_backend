const mongoose = require('mongoose')

const fighterSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    wins: {
        type: Number,
    },
    loses: {
        type: Number,
    },
})

module.exports = mongoose.model("Fighter", fighterSchema)