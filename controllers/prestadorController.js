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

exports.listar = (req, res, next) => {
    let tipoServicos = decodeURI(req.query.cat);
    console.log(tipoServicos);


    let listaFinal = [];
    prestador.find({ tipoServicos }, async (error, prestadores) => {
        if (error) return next(error)
        if (prestadores) {
            for (let index = 0; index < prestadores.length; index++) {
                const prestador = prestadores[index];
                let media = await servicos.aggregate([
                    {
                        '$match': {
                            'prestador_id': prestador._id
                        }
                    },
                    {
                        $group:
                        {
                            _id: "$prestador_id",
                            media: { $avg: '$avaliacao' }
                        }
                    },
            { "$sort":
                {
                    "media": -1
                    }
                }
                ])
                let prest = {
                    'prestador': prestador,
                    'media': media
                }
                 listaFinal.push(prest)
            }
            res.send(listaFinal)
        }
    })
}