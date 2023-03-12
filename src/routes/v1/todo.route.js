const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const todoValidation = require('../../validations/todo.validation');
const todoController = require('../../controllers/todo.controller');

const router = express.Router();

router
  .route('/')
  .get(auth('listTodos'), todoController.getTodos)
  .post(auth('createTodo'), validate(todoValidation.createTodo), todoController.createTodo)
  .patch(auth('updateTodo'), validate(todoValidation.updateTodo), todoController.updateTodo)
  .delete(auth('deleteTodo'), validate(todoValidation.deleteTodo), todoController.deleteTodo);

module.exports = router;
