const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  const user = sequelize.define('user', {
    name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    role: {
      type: Sequelize.STRING,
      defaultValue: 'User',
    },
  });
  return user;
};
