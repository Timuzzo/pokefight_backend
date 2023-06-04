const express = require('express');
const {
    updateFighter, 
    getAllFighters, 
    getOneFighter, 
    createFighter
} = require('../controllers/fighter');

const api = express.Router();

api.route('/').get(getAllFighters).post(createFighter);
api.route('/:id').get(getOneFighter).put(updateFighter);

module.exports = api;