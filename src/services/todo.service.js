const { todos: Todos } = require('../models');

/**
 * Create a todo
 * @param {Object}
 * @returns {Promise<Todo>}
 */
const createTodo = async (todoBody) => {
  return Todos.create(todoBody);
};

/**
 * @param {integer} id
 * @returns {Promise<QueryResult>}
 */
const getTodoById = async (id) => {
  const todo = await Todos.findOne({
    where: {
      id,
    },
  });
  return todo;
};

/**
 * @param {integer} userId
 * @returns {Promise<QueryResult>}
 */
const getTodosByUserId = async (userId) => {
  const todos = await Todos.findAll({
    where: {
      userId,
    },
  });
  return todos;
};

/**
 * Update todo by id
 * @param {integer} todoId
 * @param {Object} updateBody
 * @returns {Promise<Todo>}
 */
const updateTodoById = async (todoId, updateBody) => {
  return Todos.update(updateBody, {
    where: { id: todoId },
  });
};

/**
 * Delete todo by id
 * @param {integer} todoId
 * @returns {Promise<Todo>}
 */
const deleteTodoById = async (todoId) => {
  return Todos.destroy({
    where: { id: todoId },
  });
};

module.exports = {
  createTodo,
  getTodoById,
  getTodosByUserId,
  updateTodoById,
  deleteTodoById,
};
