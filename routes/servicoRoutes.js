const express = require('express'),
      router = express.Router(),
      servControll = require('../controllers/servicoController'),
      permit = require('../middlewares/permission')


      router.post('/salvar', servControll.salvar)
      router.get('/listar',  servControll.listar)
      router.get('/servico_fim',  servControll.listar_usu)
      router.get('/servico_andamento',  servControll.servico_andamento)
      router.patch('/finalizar',  servControll.finalizar)
      router.patch('/aceitar',  servControll.aceitar)
      router.patch('/recusar',  servControll.recusar)
      router.patch('/avaliar',  servControll.avaliar)

module.exports = router;