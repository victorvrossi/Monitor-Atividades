const express = require('express');
const ProjetoController = require('../controller/ProjetoController');

const routes = express.Router();
routes.get('/', (request,response) => {
    response.json({home:'Start do projeto do Monitor de Atividades'});
});

routes.post('/projeto', ProjetoController.store);

module.exports = routes;