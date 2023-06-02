const mongoose = require('mongoose')

const pokeSchema = new mongoose.Schema({
    name: {
        type: String
    },
    id: {
        type: Number
    },
    pictureArt: {
        type: String
    },
    pictureAnimFront: {
        type: String
    },
    pictureAnimBack: {
        type: String
    },
    type1: {
        type: String
    },
    type2: {
        type: String
    },
    height: {
        type: Number
    },
    weight: {
        type: Number
    },
    attack1: {
        type: String
    },
    attack2: {
        type: String
    },
    happiness: {
        type: String
    },
    habitat: {
        type: String
    },
    text1: {
        type: String
    },
    text2: {
        type: String
    },
    text3: {
        type: String
    },
    evolvesFrom: {
        type: String
    }
})

module.exports = mongoose.model("Poke", pokeSchema)