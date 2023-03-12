const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  const token = sequelize.define('token', {
    token: {
      type: Sequelize.STRING,
    },
    user: {
      type: Sequelize.INTEGER,
    },
    type: {
      type: Sequelize.STRING,
    },
    expires: {
      type: Sequelize.DATE,
    },
    createdDate: {
      type: Sequelize.DATE,
    },
  });
  return token;
};
