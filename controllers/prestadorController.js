const prestador = require('../models/Usuario'),
    bcrypt = require('bcrypt'),
    servicos = require('../models/Servico');

exports.salvar = (req, res, next) => {
    let u = req.body

    console.log(u);
    

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(u.senha, salt, (err, hash) => {
            if (err) return reject(err)
            u.senha = hash

            prestador.create(u, (error, prestador) => {
                console.log('criou o prestador');
                res.json(prestador)
            })
        });
    });

}

exports.listar = (req, res, next) =>{
    let tipoServicos = decodeURI(req.query.cat);
    console.log(tipoServicos);

    let servicos_array = [];

    servicos.aggregate([  { 
        $group : 
        { 
            _id : "$prestador_id", 
            media: {$avg: '$avaliacao'} } }  ], (error, response) =>{
        if(error) return next(error)
        if(response){
            console.log('RESPOSTA DA PRIMEIRA BUSCA');
            console.log(response);
            for (let index = 0; index < response.length; index++) {
                servicos_array.push(response[index]);
                
            }
                
            
        }
    })

    prestador.find({ tipoServicos }, (error, prestadores) =>{
        if(error) return next(error)
        if(prestadores){
            let obj = {
                'prestadores': prestadores,
                'dados': servicos_array
            }
            console.log(obj);
            res.send(obj)
        }
    }).sort({servicos_array: -1})
}