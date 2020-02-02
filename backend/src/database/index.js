const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const Projetos = require('../model/Projetos');

const connection = new Sequelize(dbConfig);

Projetos.init(connection);

module.exports = connection;