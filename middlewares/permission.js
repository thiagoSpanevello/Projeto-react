module.exports =  permit = (...allowed)=>{
     

    return (req, res, next) => {
        let {usuario} =  res.locals;
        if (usuario) {
            console.log(usuario.rules);

            for (let i = 0; i < usuario.rules.length; i++){
                const rule = usuario.rules[i];
                if(allowed.indexOf(rule) >= 0){
                    return next()
                }
            }
        }
            res.status(403).send('sem permissão')
    }
}