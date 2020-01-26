var express = require('express');
var app = express();
 
app.use(express.json());

app.use('/', (request,response) => {
    response.json({home:'Start do projeto do Monitor de Atividades'});
});

app.listen(8080);

module.exports = app;