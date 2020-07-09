const mongoose = require('mongoose');
    Schema = mongoose.Schema


let PrestadorModel = new Schema({
    nome: {type: String, required: true},
    email: {type: String, required: true},
    cnpj: {type: String, required: true},
    senha: {type: String, required: true},
    rules:{type: Array},
    tipoServicos:{type: Array, required: true}

}, {collection: 'usuarios'})

module.exports = mongoose.model('prestador', PrestadorModel)