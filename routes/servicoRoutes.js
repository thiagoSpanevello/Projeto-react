const express = require('express'),
      router = express.Router(),
      servControll = require('../controllers/servicoController'),
      permit = require('../middlewares/permission')


      router.post('/salvar',permit('usuario'), servControll.salvar)
      router.get('/listar', permit('prestador'),  servControll.listar)
      router.get('/servico_fim',    permit('usuario') , servControll.listar_usu)
      router.get('/servico_andamento', permit('prestador'), servControll.servico_andamento)
      router.patch('/finalizar',  servControll.finalizar)
      router.patch('/aceitar', permit('prestador'), servControll.aceitar)
      router.patch('/recusar', permit('prestador'),servControll.recusar)
      router.patch('/avaliar', permit('usuario'),servControll.avaliar)

module.exports = router;