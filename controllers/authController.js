const Usuario = require('../models/Usuario'),
    bcrypt = require('bcrypt'),
    jwt = require('jsonwebtoken')

exports.login = (req, res, next) => {
    let { email, senha } = req.body;
    console.log(email, senha);

    if (!email || !senha) return res.status(401).send('Informe email/senha')


    //BUSCA USUARIO
    Usuario.findOne({ email }, (error, usuario) => {
        if (error) return next(error)
        if (!usuario) return res.status(401).send('usuario ou senha invalidos')
        


        // VERIFICA HASH SENHA
        bcrypt.compare(senha, usuario.senha, (err, match) => {
            if (!match) return res.status(401).send('Informe email/senha')

            //GERAR TOKEN
            const token = jwt.sign({
                usuario: {
                    _id: usuario._id,
                    rules: usuario.rules
                }
            }, process.env.SECRET_JWT, { expiresIn: '1d' });
            
            res.send({
                usuario: {
                    nome: usuario.nome,
                    email: usuario.email,
                    rules: usuario.rules

                },
                token
            })
            console.log('resposta ao front');
            console.log(usuario, token);
            

        });

    })
}