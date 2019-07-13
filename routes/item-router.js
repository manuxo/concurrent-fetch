const express = require('express');
const Model = require('../models/model');
const itemRepo = new Model('items');
let itemRouter = express.Router();
itemRouter.get('/',(req,res) => {
    itemRepo.findAll().then(value => {
        res.status(200).send(value);
    }).catch(reason => {
        res.status(400).send(reason);
        console.log(reason);
    });
});
itemRouter.get('/:id',(req,res) => {
    const id = parseInt(req.params.id);
    itemRepo.findById(id).then(value => {
        res.status(200).send(value);
    }).catch(reason => {
        res.status(400).send(reason);
        console.log(reason);
    });
});
itemRouter.post('/',(req,res) => {
    const data = req.body;
    itemRepo.Add(data).then(value => {
        res.status(201).send(value);
    }).catch(reason => {
        res.status(400).send(reason);
        console.log(reason);
    });
});
itemRouter.put('/:id',(req,res) => {
    const data = req.body;
    const id = parseInt(req.params.id);
    itemRepo.Update(id,data).then(value => {
        res.status(201).send(value);
    }).catch(reason => {
        res.status(400).send(reason);
        console.log(reason);
    })
});
module.exports = itemRouter;