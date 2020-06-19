const express = require('express'),
    router = express.Router(),
    prestCtrl = require('../controllers/prestadorController')

    router.get('/home/prestadores', prestCtrl.listar)
    module.exports = router;


    module.exports = router;