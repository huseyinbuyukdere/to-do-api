const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  const token = sequelize.define('token', {
    token: {
      type: Sequelize.STRING,
    },
    userId: {
      type: Sequelize.INTEGER,
    },
    type: {
      type: Sequelize.STRING,
    },
    expires: {
      type: Sequelize.DATE,
    },
  });
  return token;
};
