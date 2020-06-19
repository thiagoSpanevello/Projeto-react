const prestador = require('../models/Usuario'),
    bcrypt = require('bcrypt')

exports.salvar = (req, res, next) => {
    let u = req.body

    console.log(u);
    

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(u.senha, salt, (err, hash) => {
            if (err) return reject(err)
            u.senha = hash

            prestador.create(u, (error, prestador) => {
                res.json(prestador)
            })
        });
    });

}

exports.listar = (req, res, next) =>{
    let tipoServicos = decodeURI(req.query.cat);
    console.log(tipoServicos);
    prestador.find({ tipoServicos }, (error, prestadores) =>{
        if(error) return next(error)
        console.log(prestadores);
        if(prestadores){
            res.send(prestadores)
        }
    }).sort({avaliacao: -1})
}