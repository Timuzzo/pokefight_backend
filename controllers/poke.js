const Poke = require('../schemas/Poke');

//get all Pokes
const getAllPokes = async (req, res) => {
    try {
        const pokes = await Poke.find();
        if(!pokes.length){
            res.status(200).json( {msg: "No pokemons in DB"});
        }else{
            res.status(200).json({data: pokes});
        }
    } catch (error) {
        res.status(500).json({error});
    }
};
// get one Poke
const getOnePoke = async (req, res) => {
    try {
        const {name} = req.params;
        const poke = await Poke.findOne({name});
        if (!poke) {
            res.status(404).json({msg: "No pokemon found"})
        } else {
            res.status(200).json({data: poke})
        };
    } catch (error) {
        res.status(500).json({
            error
        })
    }
}

module.exports = {getOnePoke, getAllPokes}