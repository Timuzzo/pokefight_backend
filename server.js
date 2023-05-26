const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`My port is ${PORT}`));