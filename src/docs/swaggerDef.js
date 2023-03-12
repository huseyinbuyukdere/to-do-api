const { version } = require('../../package.json');
const config = require('../config/config');

const swaggerDef = {
  openapi: '3.0.0',
  info: {
    title: 'To Do Api',
    version,
    license: {
      name: 'MIT',
      url: 'https://github.com/huseyinbuyukdere/to-do-api',
    },
  },
  servers: [
    {
      url: `http://localhost:${config.port}/v1`,
    },
  ],
  security: [
    {
      bearerAuth: [],
    },
  ],
};

module.exports = swaggerDef;
