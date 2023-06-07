const express = require('express');
const {
    getAllPokes, getOnePoke
} = require('../controllers/poke');

const api = express.Router();

api.route('/').get(getAllPokes);
api.route('/:name').get(getOnePoke);

module.exports = api;
