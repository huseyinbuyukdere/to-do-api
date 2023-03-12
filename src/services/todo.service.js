const { db } = require('../models');

const Todos = db.todos;

/**
 * Create a todo
 * @param {Object}
 * @returns {Promise<Todo>}
 */
const createTodo = async (todoBody) => {
  return Todos.create(todoBody);
};

/**
 * @returns {Promise<QueryResult>}
 */
const getTodos = async () => {
  const todos = await Todos.findAll();
  return todos;
};

/**
 * Update todo by id
 * @param {ObjectId} todoId
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
 * @param {ObjectId} todoId
 * @returns {Promise<Todo>}
 */
const deleteTodoById = async (todoId) => {
  return Todos.destroy({
    where: { id: todoId },
  });
};

module.exports = {
  createTodo,
  getTodos,
  updateTodoById,
  deleteTodoById,
};
