const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { todoService } = require('../services');

const createTodo = catchAsync(async (req, res) => {
  const todo = await todoService.createTodo(req.body);
  res.status(httpStatus.CREATED).send(todo);
});

const getTodos = catchAsync(async (req, res) => {
  const todos = await todoService.getTodos();
  res.send(todos);
});

const updateTodo = catchAsync(async (req, res) => {
  const todo = await todoService.updateTodoById(req.params.userId, req.body);
  res.send(todo);
});

const deleteTodo = catchAsync(async (req, res) => {
  await todoService.deleteTodoById(req.params.userId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
};
