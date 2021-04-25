mongoose = require("mongoose")

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
    Knight_class: Knight_class,
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


const Player = mongoose.Schema({
    name: String,
    rank: Number,
    level: Number,
    money: Number,
    xp: Number,
    teachingBonus: Number,
    Knight_list: {type: [Knight]}

})

module.exports = mongoose.model("player", Player)

