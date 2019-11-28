const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const EstudanteControllers = require('./controllers/EstudanteControllers')
const FuncionarioControllers = require('./controllers/FuncionarioControllers')
const AgendamentoControllers = require('./controllers/AgendamentoControllers')
const AtendimentoControllers = require('./controllers/AtendimentoControllers')
const LevantarDocControllers = require('./controllers/LevantarDocControllers')
const LoginControllers = require('./controllers/LoginControllers')

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/estudante', upload.single('img'), EstudanteControllers.store)
routes.get('/estudante/:id', EstudanteControllers.show)
routes.get('/estudante_all', EstudanteControllers.index)
routes.put('/editar_estudante/:id', upload.single('img'), EstudanteControllers.update)
routes.delete('/apagar_estudante/:id', EstudanteControllers.delete)


routes.post('/funcionario', upload.single('img'), FuncionarioControllers.store)
routes.get('/funcionario/:id', FuncionarioControllers.show)
routes.get('/funcionario_all', FuncionarioControllers.index)
routes.put('/editar_funcionario/:id', upload.single('img'), FuncionarioControllers.update)
routes.delete('/apagar_funcionario/:id', FuncionarioControllers.delete)


routes.post('/agendar', AgendamentoControllers.store)
routes.get('/agendar/:id', AgendamentoControllers.show)
routes.get('/agendar_all', AgendamentoControllers.index)
routes.put('/editar_agendar/:id', AgendamentoControllers.update)
routes.delete('/apagar_agendar/:id', AgendamentoControllers.delete)

routes.post('/atendimento', upload.single('doc'), AtendimentoControllers.store)
routes.get('/atendimento/:id', AtendimentoControllers.show)
routes.get('/atendimento_all', AtendimentoControllers.index)
routes.put('/editar_atendimento/:id', upload.single('doc'), AtendimentoControllers.update)
routes.delete('/apagar_atendimento/:id', AtendimentoControllers.delete)

routes.post('/levantar_doc', LevantarDocControllers.store)
routes.get('/levantar_doc/:id', LevantarDocControllers.show)
routes.get('/levantar_doc_all', LevantarDocControllers.index)
routes.put('/editar_levantar_doc/:id', LevantarDocControllers.update)
routes.delete('/apagar_levantar_doc/:id', LevantarDocControllers.delete)

routes.post('/funcionario_login', LoginControllers.login)

module.exports = routes;
