const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  const todo = sequelize.define('todo', {
    content: {
      type: Sequelize.STRING,
    },
    userId: {
      type: Sequelize.INTEGER,
    },
    isChecked: {
      type: Sequelize.BOOLEAN,
    },
  });
  return todo;
};
