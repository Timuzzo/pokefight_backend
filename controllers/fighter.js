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
        const {id} = req.params;
        const fighter = await Fighter.findById(id);
        if (!fighter) {
            res.status(404).json({msg: "No fighter found"})
        } else {
            res.status(200).json({data: fighter})
        };
    } catch (error) {
        res.status(500).json({
            error
        })
    }
}


//update one fighter
const updateFighter = async (req, res) => {
    try {
        const {id} = req.params;
        const {name, wins, loses} = req.body;
        const fighter = await Fighter.findByIdAndUpdate(id, 
        {
            name, 
            wins, 
            loses
        }, 
        {
            new: true
        }
        );
    if (!fighter) {
        res.status(404).json({msg: "Fighter can't be found "})
    } else {
        res.status(200).json({data: fighter, msg: "Fighter updated successfully"})
    }
    } catch (error) {
        res.status(500).json({
            error
        })
    }
}

module.exports = {updateFighter, getAllFighters, getOneFighter, createFighter}