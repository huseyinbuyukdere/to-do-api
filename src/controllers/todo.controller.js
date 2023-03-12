const httpStatus = require('http-status');
const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');
const { userService } = require('../services');

const createTodo = catchAsync(async (req, res) => {
  const user = await userService.createTodo(req.body);
  res.status(httpStatus.CREATED).send(user);
});

const getTodos = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await userService.queryTodos(filter, options);
  res.send(result);
});

const updateTodo = catchAsync(async (req, res) => {
  const user = await userService.updateTodoById(req.params.userId, req.body);
  res.send(user);
});

const deleteTodo = catchAsync(async (req, res) => {
  await userService.deleteTodoById(req.params.userId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
};
