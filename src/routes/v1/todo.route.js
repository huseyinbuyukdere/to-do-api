const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const todoValidation = require('../../validations/todo.validation');
const todoController = require('../../controllers/todo.controller');

const router = express.Router();

router
  .route('/')
  .get(auth('listTodos'), todoController.getTodos)
  .post(auth('createTodo'), validate(todoValidation.createTodo), todoController.createTodo);

router
  .route('/:id')
  .patch(auth('updateTodo'), validate(todoValidation.updateTodo), todoController.updateTodo)
  .delete(auth('deleteTodo'), validate(todoValidation.deleteTodo), todoController.deleteTodo);

module.exports = router;

/**
 * @swagger
 * /todo:
 *   get:
 *     summary: Returns todos of user
 *     tags: [todo]
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *                properties:
 *                   content:
 *                      type: string
 *                   userId:
 *                      type: integer
 *                   createdDate:
 *                      type: date
 *                   updatedDate:
 *                      type: date
 */

/**
 * @swagger
 * /todo:
 *   post:
 *     summary: Creates todo
 *     tags: [todo]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *             schema:
 *                type: object
 *                properties:
 *                   content:
 *                      type: string
 *     responses:
 *       "201":
 *         description: CREATED
 */

/**
 * @swagger
 * /todo/{id}:
 *   patch:
 *     summary: Updates todo
 *     parameters:
 *     - in: path
 *       name: id
 *       schema:
 *          type: string
 *       required: true
 *     tags: [todo]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *             schema:
 *                type: object
 *                properties:
 *                   isChecked:
 *                      type: boolean
 *                   content:
 *                      type: string
 *
 *     responses:
 *       "200":
 *         description: OK
 */

/**
 * @swagger
 * /todo/{id}:
 *   delete:
 *     summary: Deletes todo
 *     parameters:
 *     - in: path
 *       name: id
 *       schema:
 *          type: string
 *       required: true
 *     tags: [todo]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *             schema:
 *                type: object
 *                properties:
 *                   isChecked:
 *                      type: boolean
 *                   content:
 *                      type: string
 *
 *     responses:
 *       "200":
 *         description: OK
 */
