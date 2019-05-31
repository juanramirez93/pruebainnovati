const express = require('express');
const routerData = express.Router();

const PersonDB = require('../model/Person');
var SendEmail = require('../send_email');

routerData.get('/data', async (req, res) => {
    const people = await PersonDB.find();
    res.json(people);
});

routerData.post('/data', async (req, res) => {
    const person = new PersonDB(req.body);
    await person.save();
    SendEmail.sendEmail(person, req, res);
    res.json({
        status: "Saved"
    })
});

routerData.put('/data/:id', async (req, res) => {
    await PersonDB.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        status: 'Updated'
    })
});

routerData.delete('/data/:id', async (req, res) => {
    await PersonDB.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Removed'
    })
});
//email route
routerData.post('/email/:id', async (req, res) => {
    SendEmail.sendEmail(await PersonDB.findById(req.params.id), req, res);
});

module.exports = routerData;