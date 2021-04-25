const mongoose = require("mongoose")

const Knight_class = mongoose.Schema({
    label: {type: String, default: "Ecuyer"},
    speciality: {type: Number, default: 1},
    modifierAttack: {type: Number, default: 1},
    modifierDefense: {type: Number, default: 1},
    modifierSpeciality: {type: String, default: 1},
})


const Knight = mongoose.Schema({
    name: String,
    level: Number,
    exp: Number,
    Knight_class: {type: Knight_class, default:{}},
    affinityOff: Number,
    affinityDef: Number,
    affinitySupp: Number,
    strength: Number,
    agility: Number,
    constitution: Number,
    mana: Number,
    mastery: Number,
    state: String,
    pos: String,
})

module.exports = mongoose.model("Knight", Knight)

