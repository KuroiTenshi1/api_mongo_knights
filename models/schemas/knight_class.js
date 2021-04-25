mongoose = require("mongoose")

const Knight_class = mongoose.Schema({
    label: String,
    speciality: String,
    modifierAttack: Number,
    modifierDefense: Number,
    modifierSpeciality: String,
})

module.exports = mongoose.model("knight_class", Knight_class)

