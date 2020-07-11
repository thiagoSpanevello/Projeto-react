const mongoose = require('mongoose');
    Schema = mongoose.Schema


let CategoriaModel = new Schema({
    tipo: {type: String, required: true, unique: true},

}, {collection: 'categorias'})

module.exports = mongoose.model('Categorias', CategoriaModel)