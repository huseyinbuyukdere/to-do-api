const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  const todo = sequelize.define('todo', {
    content: {
      type: Sequelize.STRING,
    },
    userId: {
      type: Sequelize.INTEGER,
    },
    createdDate: {
      type: Sequelize.DATE,
    },
    updatedDate: {
      type: Sequelize.BOOLEAN,
    },
  });
  return todo;
};
