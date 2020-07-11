const express = require('express'),
    router = express.Router(),
    catCtrl = require('../controllers/categoriaController'),
    permit = require('../middlewares/permission')


    router.get('/', permit('usuario'), catCtrl.pegar)
    router.get('/:id', permit('usuario'), catCtrl.CatSpessific)
   router.post('/cat/cad', permit('adm'), catCtrl.salvar)

module.exports = router;