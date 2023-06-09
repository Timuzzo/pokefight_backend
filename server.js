const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./dbconnect");
const pokeRoutes = require("./routes/poke");
const resultRoutes = require("./routes/result");
const fighterRoutes = require("./routes/fighter");

const PORT = process.env.PORT || 8000;

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/poke", pokeRoutes);
app.use("/results", resultRoutes);
app.use("/fighters", fighterRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

app.listen(PORT, console.log(`My port is ${PORT}`));
