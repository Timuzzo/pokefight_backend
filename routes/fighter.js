const express = require('express');
const {
    updateFighterLoser,
    updateFighterWinner,
    getAllFighters, 
    getOneFighter, 
    createFighter
} = require('../controllers/fighter');

const api = express.Router();

api.route('/').get(getAllFighters).post(createFighter);
api.route('/:name').get(getOneFighter)
api.route('/winner/:name').put(updateFighterWinner)
api.route('/loser/:name').put(updateFighterLoser)

module.exports = api;