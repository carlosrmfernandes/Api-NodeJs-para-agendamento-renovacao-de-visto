const express= require('express');
const mongoose = require('mongoose');
const routes = require('./routes')
const cors = require('cors')
const path = require('path')
const app = express();

mongoose.connect('mongodb+srv://root:root@cluster0-ocgl7.mongodb.net/siarve?retryWrites=true&w=majority',{
useNewUrlParser:true,
useUnifiedTopology:true,
})
// req.query = Acessar query params (para filtro)
// req.params = Acessar route params (para adicao e delecao)
// req.body = Acessar corpo da requisicao

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname,'..','uploads')));
app.use(routes); 
app.use(require('./middlewares/mongoose-validation-error-handler'))

app.listen(3030); 