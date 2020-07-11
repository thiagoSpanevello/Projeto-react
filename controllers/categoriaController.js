
const Categoria = require('../models/Categoria');
exports.pegar = (req, res, next)=>{
    Categoria.find((erro, response) =>{
        if(erro) return res.send(erro)
        if(response) {
            res.send(response);
        }
    })
}

exports.CatSpessific = (req, res, next) =>{
    let _id = req.params.id;
    console.log(_id);
    Categoria.find({_id}, (error, categoria) =>{
        if(error) return next(error)
        if(categoria){
            res.send(categoria)
        }
    })
}

exports.salvar = (req, res, next) =>{
    let u = req.body;
    console.log(u);
        Categoria.create(u, (error, categoria) => {
            console.log('criou a categoria' + categoria);
            res.json(categoria)
        })
}