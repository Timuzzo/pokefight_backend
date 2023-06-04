const express = require('express');
const {createResult, getAllResults} = require('../controllers/result');

const api = express.Router();

api.route('/').get(getAllResults).post(createResult);

module.exports = api;