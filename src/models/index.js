const Sequelize = require('sequelize');
const mysql = require('mysql');
const config = require('../config/config');

const sequelize = new Sequelize(config.mysql.name, config.mysql.username, config.mysql.password, {
  host: config.mysql.host,
  dialect: mysql,
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});

const db = {};

db.sequelize = sequelize;
db.todos = require('./todo.model')(sequelize);
db.tokens = require('./token.model')(sequelize);

module.exports = db;
