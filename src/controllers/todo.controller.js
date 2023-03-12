const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { todoService } = require('../services');

const createTodo = catchAsync(async (req, res) => {
  const todo = await todoService.createTodo({
    ...req.body,
    userId: req.user.id,
    isChecked: false,
  });
  res.status(httpStatus.CREATED).send(todo);
});

const getTodos = catchAsync(async (req, res) => {
  const todos = await todoService.getTodosByUserId(req.user.id);
  res.send(todos);
});

const updateTodo = catchAsync(async (req, res) => {
  const todo = await todoService.getTodoById(req.params.id);
  if (!todo || todo.dataValues.userId !== req.user.id) {
    res.status(httpStatus.BAD_REQUEST).send();
    return;
  }

  await todoService.updateTodoById(req.params.id, req.body);
  res.send();
});

const deleteTodo = catchAsync(async (req, res) => {
  const todo = await todoService.getTodoById(req.params.id);
  if (!todo || todo.dataValues.userId !== req.user.id) {
    res.status(httpStatus.BAD_REQUEST).send();
    return;
  }
  await todoService.deleteTodoById(req.params.id);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
};
