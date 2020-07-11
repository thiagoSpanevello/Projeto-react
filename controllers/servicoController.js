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
exports.aceitar = (req, res, next) =>{
    let serv = req.body
    console.log("id do servico pra aceitar");
    console.log(serv);
        servico.findOneAndUpdate({_id: serv.id }, { datahora_acc: new Date}, (error, Servico) =>{
            if(error) return next(error)
            console.log(Servico);
            if (Servico) {
                res.send(Servico)
            }
        })

}

exports.servico_andamento = (req, res, next) =>{
    let id = res.locals.usuario._id;
    servico.find({ prestador_id: id , datahora_acc: {$exists: true}, datahora_fim: {$exists: false}}, (error, Servico) =>{
        if(error) return next(error)
        if(Servico){
            res.send(Servico)
        }
    })
}

exports.finalizar = (req, res, next) =>{
    let serv = req.body
    console.log("id do servico pra finalizar");
    console.log(serv);
        servico.findOneAndUpdate({_id: serv.id }, { datahora_fim: new Date, valor: serv.valor}, (error, Servico) =>{
            if(error) return next(error)
            console.log(Servico);
            if (Servico) {
                res.send(Servico)
            }
        })

}



exports.recusar = (req, res, next) =>{
    let serv = req.body
    console.log("id do servico pra recusar");
    console.log(serv);
        servico.findOneAndUpdate({_id: serv.id }, { datahora_denied: new Date, datahora_fim: new Date, valor: 0}, (error, Servico) =>{
            if(error) return next(error)
            console.log(Servico);
            if (Servico) {
                res.send(Servico)
            }
        })

}

exports.listar = (req, res, next) =>{
        let id = res.locals.usuario._id;
        console.log(id);
        servico.find({ prestador_id: id , datahora_acc: null, datahora_denied: null}, (error, Servico) =>{
            if(error) return next(error)
            if(Servico){
                res.send(Servico)
            }
        })
}

exports.listar_usu = (req, res, next) =>{
    let id = res.locals.usuario._id;
    console.log(id);
    servico.find({ usuario_id: id , datahora_acc: {$exists: true}, datahora_fim: {$exists: true}, avaliacao: {$exists: false}}, (error, Servico) =>{
        if(error) return next(error)
        if(Servico){
            res.send(Servico)
        }
    })
}


exports.avaliar = (req, res, next) =>{
    let serv = req.body
    console.log('oq vem do front');
    console.log(serv.id);
    console.log(serv.valor);
    let val = serv.valor;
    servico.findOneAndUpdate({ _id: serv.id , datahora_fim: {$exists: true} }, {avaliacao: val}, (error, Servico) =>{
        if(error) return next(error)
        if(Servico){
            res.send(Servico)
        }
    })
}
