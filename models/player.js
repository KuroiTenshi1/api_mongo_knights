const Player = require('./schemas/player')
const Knight = require('./knight')


module.exports = {

    // retourne tout les players
    get: async function () {
        return Player.find()
    },


    // retourne le player qui correspond à l'id
    getOne: async function (id) {
        return Player.findOne({_id: id})
    },


    // crée un player avec les données en parametre 
    create: async function (data) {
        console.log(data)
        const player = new Player({
            name: data.name,
            rank: data.rank,
            level: data.level,
            money: data.money,
            xp: data.xp,
            teachingBonus: data.teachingBonus,

        })
        await player.save()
        return (player)
    },


    // modifie le player corespondant à son id avec les données data
    update: async function (id, data) {
        const player = await Player.findOne({_id: id})

        if (data.name) {
            player.name = data.name
        }
        if (data.rank) {
            player.rank = data.rank
        }
        if (data.level) {
            player.level = data.level
        }
        if (data.money) {
            player.money = data.money
        }
        if (data.xp) {
            player.xp = data.xp
        }
        if (data.teachingBonus) {
            player.teachingBonus = data.teachingBonus
        }
        if (data.Knight_list) {
            player.Knight_list = data.Knight_list
        }

        await player.save()
        return (player)
    },


    addKnight: async function (id_player, id_knight) {
        const player = await Player.findOne({_id: id_player})
        const knight = await Knight.getOne(id_knight)

        console.log(knight)
        player.Knight_list.push(knight)

        await player.save()
        return (player)
    },

    removeKnight: async function (id_player, id_knight) {
        Player.updateOne(
            { _id: id_player },
            {
                $pull: {
                    Knight_list: { _id : id_knight }
                }
            },
            { safe: true }
        );
    },


    // met l'etat "inactif" à le player correspondant à l'id
    delete: async function (id) {
        Player.deleteOne({_id: id})
    },

    deleteAll: async function () {
        Player.remove({}, (err, removed) => {

        })
    },


}