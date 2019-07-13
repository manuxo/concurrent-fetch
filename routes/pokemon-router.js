const express = require('express');
const Model = require('../models/model');
const pokemon = new Model('pokemons');
let pokemonRouter = express.Router();
pokemonRouter.get('/',(req,res) => {
    pokemon.findAll().then(value => {
        res.status(200).send(value);
    }).catch(reason => {
        res.status(400).send(reason);
        console.log(reason);
    });
});
pokemonRouter.get('/:id',(req,res) => {
    const id = parseInt(req.params.id);
    pokemon.findById(id).then(value => {
        res.status(200).send(value);
    }).catch(reason => {
        res.status(400).send(reason);
        console.log(reason);
    });
});
pokemonRouter.post('/',(req,res) => {
    const data = req.body;
    pokemon.Add(data).then(value => {
        res.status(201).send(value);
    }).catch(reason => {
        res.status(400).send(reason);
        console.log(reason);
    });
});
pokemonRouter.put('/:id',(req,res) => {
    const data = req.body;
    const id = parseInt(req.params.id);
    pokemon.Update(id,data).then(value => {
        res.status(201).send(value);
    }).catch(reason => {
        res.status(400).send(reason);
        console.log(reason);
    })
});
module.exports = pokemonRouter;