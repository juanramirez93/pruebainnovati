const mongoose = require('mongoose');

const { Schema } = mongoose;

const Person = new Schema({
    name: String,
    phone: String,
    email: String,
    company: String
});

module.exports = mongoose.model('Person', Person);
