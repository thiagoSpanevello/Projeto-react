const express = require('express'),
      router = express.Router(),
      servControll = require('../controllers/servicoController')


      router.post('/salvar', servControll.salvar)
      router.get('/listar', servControll.listar)

module.exports = router;