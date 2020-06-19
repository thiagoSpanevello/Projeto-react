const express = require('express'),
    router = express.Router(),
    catCtrl = require('../controllers/categoriaController'),
    permit = require('../middlewares/permission')


    router.get('/', catCtrl.pegar)
    router.get('/:id', catCtrl.CatSpessific)
   router.post('/', permit('adm'), catCtrl.salvar)

module.exports = router;