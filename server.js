const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const connectDB = require ('./dbconnect')
const pokeRoutes = require("./routes/Poke")

const PORT = process.env.PORT || 8000;

connectDB()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/poke", pokeRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to my API")
})

app.listen(PORT, console.log(`My port is ${PORT}`));