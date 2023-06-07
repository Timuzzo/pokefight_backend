const Fighter = require('../schemas/Fighter');

//create new fighter
const createFighter = async (req, res) =>{
    try {
        const {name, wins, loses} = req.body;
        const fighter = await Fighter.create({ name, wins, loses});
        res.status(201).json({data: fighter, msg: "Fighter successfully created"})
    } catch (error) {
        res.status(500).json({ error });
    }
};

//get all Fighters
const getAllFighters = async (req, res) => {
    try {
        const fighters = await Fighter.find();
        if(!fighters.length){ //if empty array still truthy value, therefore .length
            res.status(200).json( {msg: "No fighters in DB"});
        }else{
            res.status(200).json({data: fighters});
        }
    } catch (error) {
        res.status(500).json({error});
    }
};
// get one Fighter
const getOneFighter = async (req, res) => {
    try {
        const {name} = req.params;
        const fighter = await Fighter.findOne({name});
        if (!fighter) {
            res.status(200).json(null)
        } else {
            res.status(200).json({data: fighter})
        };
    } catch (error) {
        res.status(500).json({
            error
        })
    }
}

//update one winner fighter
const updateFighterWinner = async (req, res) => {
    try {
        const {name} = req.params;
        const {wins} = req.body;
        const fighter = await Fighter.findOneAndUpdate({name}, 
        {
            $inc:{wins: 1}
        }, 
        {
            new: true
        }
        );
    if (!fighter) {
        res.status(404).json({msg: "Fighter can't be found "})
    } else {
        res.status(200).json({data: fighter, msg: "Fighter winner updated successfully"})
    }
    } catch (error) {
        res.status(500).json({
            error
        })
    }
}

//update one loser fighter
const updateFighterLoser = async (req, res) => {
    try {
        const {name} = req.params;
        const {loses} = req.body;
        const fighter = await Fighter.findOneAndUpdate({name}, 
        {
            $inc:{loses: 1}
        }, 
        {
            new: true
        }
        );
    if (!fighter) {
        res.status(404).json({msg: "Fighter can't be found "})
    } else {
        res.status(200).json({data: fighter, msg: "Fighter loser updated successfully"})
    }
    } catch (error) {
        res.status(500).json({
            error
        })
    }
}

module.exports = {updateFighterWinner, updateFighterLoser, getAllFighters, getOneFighter, createFighter}