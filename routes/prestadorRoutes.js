const express = require('express'),
    router = express.Router(),
    prestCtrl = require('../controllers/prestadorController'),
    permit = require('../middlewares/permission')

    router.get('/home/prestadores', permit('usuario'), prestCtrl.listar)
    module.exports = router;


    module.exports = router;