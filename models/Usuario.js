const mongoose = require('mongoose');
    Schema = mongoose.Schema


let UsuarioModel = new Schema({
    nome: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    senha: {type: String, required: true},
    rules:{type: Array},

}, {collection: 'usuarios'})

module.exports = mongoose.model('Usuario', UsuarioModel)