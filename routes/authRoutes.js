const express = require('express'),
    router = express.Router(),
    authCtrl = require('../controllers/authController'),
    usuCtrl = require('../controllers/usuarioController'),
    PrestCtrl = require('../controllers/prestadorController'),
    catCtrl = require('../controllers/categoriaController')

    router.post('/cad/prest', PrestCtrl.salvar)
    module.exports = router;

    router.get('/cad/prest/listCat', catCtrl.pegar)
    module.exports = router;

    router.post('/cad/usu', usuCtrl.salvar)
    module.exports = router;

    router.post('/login', authCtrl.login)
    module.exports = router;