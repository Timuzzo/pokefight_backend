const express = require('express');
const {
    updateFighter, 
    getAllFighters, 
    getOneFighter, 
    createFighter
} = require('../controllers/fighter');

const api = express.Router();


// discuss with team /wrt the endpoint
api.route('/').get(getAllFighters).post(createFighter);
api.route('/:id').get(getOneFighter).put(updateFighter);

module.exports = api;