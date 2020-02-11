var cors = require('cors');
const express = require('express');
const routes = require('./routes');

require('../database');

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });




app.use(express.json());
app.use(routes);


app.listen(3333);

module.exports = app;