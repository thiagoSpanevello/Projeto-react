const mongoose = require('mongoose');
    Schema = mongoose.Schema


let ServicoModel = new Schema({
    usuario_id: {type: String, required: true},
    prestador_id: {type: String, required: true},
    local: {type: String, required: true},
    descricao:{type: String, required: true},
    datahora_req:{type: Date, required: true}


}, {collection: 'servicos'})

module.exports = mongoose.model('Servico', ServicoModel)