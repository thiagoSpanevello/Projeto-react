const express = require('express'),
    router = express.Router(),
    catCtrl = require('../controllers/categoriaController'),
    permit = require('../middlewares/permission')


    router.get('/',  catCtrl.pegar)
    router.get('/:id', catCtrl.CatSpessific)
   router.post('/cat/cad', permit('adm'), catCtrl.salvar)

module.exports = router;