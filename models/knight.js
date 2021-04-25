const Knight = require('./schemas/knight')


const colslist = "id, email, login, name, last_name, state";
const editist = ["name", "rank", "level", "money", "xp", "teachingBonus"];

module.exports = {

    // retourne tout les chevaliers
    get: async function () {
        return  Knight.find()
    },


    // retourne le chevalier qui correspond à l'id
    getOne: async function (id) {
        return Knight.findOne({ _id: id })
    },


    // crée le chevalier
    create: async function (data) {
        // data.knight_list.forEach(element =>
        //     console.log(element)
        // );
        console.log(data)
        const knight = new Knight({
            name: data.name,
            level: data.level,
            exp: data.exp,
            Knight_class: data.Knight_class,
            affinityOff: data.affinityOff,
            affinityDef: data.affinityDef,
            affinitySupp: data.affinitySupp,
            strength: data.strength,
            agility: data.agility,
            constitution: data.constitution,
            mana: data.mana,
            mastery: data.mastery,
            state: data.state,
            pos: data.pos
        })
        await knight.save()
        return(knight)
    },


    // modifie le chevalier
    update: async function (id, data) {
        const knight = await Knight.findOne({ _id: id })

        if (data.name) {
            knight.name = data.name
        }
        if (data.level) {
            knight.level = data.level
        }
        if (data.exp) {
            knight.exp = data.exp
        }
        if (data.Knight_class) {
            knight.Knight_class = data.Knight_class
        }
        if (data.affinityOff) {
            knight.affinityOff = data.affinityOff
        }
        if (data.affinityDef) {
            knight.affinityDef = data.affinityDef
        }
        if (data.affinitySupp) {
            knight.affinitySupp = data.affinitySupp
        }
        if (data.strength) {
            knight.strength = data.strength
        }
        if (data.agility) {
            knight.agility = data.agility
        }
        if (data.constitution) {
            knight.constitution = data.constitution
        }
        if (data.mana) {
            knight.mana = data.mana
        }
        if (data.mastery) {
            knight.mastery = data.mastery
        }
        if (data.state) {
            knight.state = data.state
        }
        if (data.pos) {
            knight.pos = data.pos
        }

        await knight.save()
        return(knight)
    },


    // supprime le chevalier
    delete: async function (id) {
        await Knight.deleteOne({ _id: id })
    },

    deleteAll: async function () {
        await Knight.remove({})
    },



}
