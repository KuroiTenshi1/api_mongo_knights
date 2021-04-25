const express = require('express')
const mongoose = require("mongoose")

// Connect to MongoDB database
try {
    mongoose
        .connect("mongodb://root:example@localhost:27017/knightschool?authSource=admin", {useNewUrlParser: true})
        .then(() => {
            const app = express()

            app.listen(5000, () => {
                console.log("Server has started!")
            })
        })
}catch (e) {
    console.log(e)
}

// Models
const Knight = require('./models/knight')
const Player = require('./models/player')

const app = express();
const port = 3001;

app.use(express.json())


// CRUD Knights
app.get('/knights', async (req, res) => {
    try {
        res.send(await Knight.get())
    } catch (err) {
        console.error("Get /knights ", err, "\n")
        if (err.statusCode)
            res.status(err.statusCode);
        res.json({ "name ": err.name, "message": err.message, "error": err.stack });
    }
})
app.get('/knights/:id', async (req, res) => {
    const id = req.params.id
    try {
        res.send(await Knight.getOne(id))
    } catch (err) {
        console.error("Get /knights/:id ", err, "\n")
        if (err.statusCode)
            res.status(err.statusCode);
        res.json({ "name ": err.name, "message": err.message, "error": err.stack });
    }
})
app.post('/knights', async (req, res) => {
    const data = req.body;
    try {
        res.send(await Knight.create(data));
    } catch (err) {
        console.error("Get /knights ", err, "\n")
        if (err.statusCode)
            res.status(err.statusCode);
        res.json({ "name ": err.name, "message": err.message, "error": err.stack });
    }
})
app.put('/knights/:id', async (req, res) => {
    const id = req.params.id
    const data = req.params;
    try {
        res.send(await Knight.update(id, data));
    } catch (err) {
        console.error("Put /knights/:id ", err, "\n")
        if (err.statusCode)
            res.status(err.statusCode);
        else
            res.status(404)
        res.json({ "name ": err.name, "message": err.message, "error": err.stack });
    }
})
app.delete('/knights/:id', async (req, res) => {
    const id = req.params.id
    try {
        await Knight.delete(id)
        res.status(204).send()
    } catch (err) {
        console.error("Delete /knights/:id", err, "\n")
        if (err.statusCode)
            res.status(err.statusCode);
        res.json({ "name ": err.name, "message": err.message, "error": err.stack });
    }
})
app.delete('/knights', async (req, res) => {
    try {
        await Knight.deleteAll()
        res.status(204).send()
    } catch (err) {
        console.error("Delete /players/", err, "\n")
        if (err.statusCode)
            res.status(err.statusCode);
        res.json({ "name ": err.name, "message": err.message, "error": err.stack });
    }
})






// CRUD Players
app.get('/players', async (req, res) => {
    try {
        res.send(await Player.get())
    } catch (err) {
        console.error("Get /players ", err, "\n")
        if (err.statusCode)
            res.status(err.statusCode);
        res.json({ "name ": err.name, "message": err.message, "error": err.stack });
    }
})
app.get('/players/:id', async (req, res) => {
    const id = req.params.id
    try {
        res.send(await Player.getOne(id))
    } catch (err) {
        console.error("Get /players/:id ", err, "\n")
        if (err.statusCode)
            res.status(err.statusCode);
        res.json({ "name ": err.name, "message": err.message, "error": err.stack });
    }
})
app.post('/players', async (req, res) => {
    const data = req.body;
    // console.log("req = "+req)
    // console.log("data = "+data)
    try {
        // await Player.create(data);
        res.send(await Player.create(data));
        // res.send(req);
    } catch (err) {
        console.error("Get /players ", err, "\n")
        if (err.statusCode)
            res.status(err.statusCode);
        res.json({ "name": err.name, "message": err.message, "error": err.stack });
    }
})
app.put('/players/:id/', async (req, res) => {
    const id = req.params.id
    const data = req.params;
    try {
        res.send(await Player.update(id, data));
    } catch (err) {
        console.error("Put /players/:id ", err, "\n")
        if (err.statusCode)
            res.status(err.statusCode);
        else
            res.status(404)
        res.json({ "name ": err.name, "message": err.message, "error": err.stack });
    }
})
app.put('/players/:id_player/knights/:id_knights', async (req, res) => {
    const id_player = req.params.id_player
    const id_knights = req.params.id_knights
    try {
        res.send(await Player.addKnight(id_player, id_knights));
    } catch (err) {
        console.error("Put /players/:id_player/knights/:id_knights ", err, "\n")
        if (err.statusCode)
            res.status(err.statusCode);
        else
            res.status(404)
        res.json({ "name ": err.name, "message": err.message, "error": err.stack });
    }
})
app.delete('/players/:id', async (req, res) => {
    try {
        await Player.delete(req.params.id)
        res.status(204).send()
    } catch (err) {
        console.error("Delete /players/:id", err, "\n")
        if (err.statusCode)
            res.status(err.statusCode);
        res.json({ "name ": err.name, "message": err.message, "error": err.stack });
    }
})
app.delete('/players/:id_player/knights/:id_knights', async (req, res) => {
    const id_player = req.params.id_player
    const id_knights = req.params.id_knights
    try {
        await Player.removeKnight(id_player, id_knights)
        res.status(204).send()
    } catch (err) {
        console.error("Delete /players/:id", err, "\n")
        if (err.statusCode)
            res.status(err.statusCode);
        res.json({ "name ": err.name, "message": err.message, "error": err.stack });
    }
})
app.delete('/players', async (req, res) => {
    try {
        await Player.deleteAll(req.params.id)
        res.status(204).send()
    } catch (err) {
        console.error("Delete /players/:id", err, "\n")
        if (err.statusCode)
            res.status(err.statusCode);
        res.json({ "name ": err.name, "message": err.message, "error": err.stack });
    }
})






app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})

