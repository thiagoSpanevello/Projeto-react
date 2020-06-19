const servico = require('../models/Servico');

exports.salvar = (req, res, next) => {
    let u = req.body

    console.log(u);
            u.usuario_id = res.locals.usuario._id;
            u.datahora_req = new Date();
            console.log(u.datahora_req);
            console.log(u.usuario_id);
            servico.create(u, (error, servico) => {
                res.json(servico)
            });
}

exports.listar = (req, res, next) =>{
        let id = res.locals.usuario._id;
        console.log(id);
        servico.find({ prestador_id: id }, (error, Servico) =>{
            if(error) return next(error)
            console.log(Servico);
            if(Servico){
                res.send(Servico)
            }
        })
}