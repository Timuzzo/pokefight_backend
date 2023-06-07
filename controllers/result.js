const Result = require('../schemas/Result');

const createResult = async (req, res) =>{
    try {
        const {winner, loser, turns} = req.body;
        const result = await Result.create({ winner, loser, turns});
        res.status(201).json({data: result, msg: "Result successfully created"})
    } catch (error) {
        res.status(500).json({ error });
    }
};

const getAllResults = async (req, res) => {
    try {
        const results = await Result.find();
        if(!results.length){
            res.status(200).json( {msg: "No results in the database"});
        }else{
            res.status(200).json({data: results});
        }
    } catch (error) {
        res.status(500).json({error});
    }
};

module.exports = {createResult, getAllResults}