require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');


authVerify = require('./middlewares/authVerify')
authRoutes = require('./routes/authRoutes')
usuarioRoutes = require('./routes/usuarioRoutes')
categoriaRoutes = require('./routes/categoriaRoutes')
prestadorRoutes = require('./routes/prestadorRoutes')
servicoRoutes = require('./routes/servicoRoutes')


db = require('./services/DataBase');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(authRoutes)//rotas publicas
app.use(authVerify)//verify de token
// a partir daqui são as rotas com verificação
app.use('/usuario', usuarioRoutes)//rotas do usuario
app.use('/categoria', categoriaRoutes)
app.use(prestadorRoutes)
app.use('/servico', servicoRoutes)


const port = process.env.SERVER_PORT || 5000;
app.listen(port, () =>{
    console.log(`app rodando porta ${port}`);
    
})