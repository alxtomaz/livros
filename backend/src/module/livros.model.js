const mongoose = require('../config/mongo.js');
const {Schema}  = mongoose;

const livrosSchema = new Schema({
    titulo: String,
    num_paginas: Number,
    isbn: String,
    editora: String,
    id: String,
});

const livroModel = mongoose.model('livros', livrosSchema);

module.exports = livroModel;