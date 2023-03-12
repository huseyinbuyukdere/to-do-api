const Joi = require('joi');

const createTodo = {
  body: Joi.object().keys({
    content: Joi.string().required(),
  }),
};

const updateTodo = {
  params: Joi.object().keys({
    id: Joi.number().required(),
  }),
  body: Joi.object()
    .keys({
      isChecked: Joi.boolean(),
      content: Joi.string(),
    })
    .min(1),
};

const deleteTodo = {
  params: Joi.object().keys({
    id: Joi.number().required(),
  }),
};

module.exports = {
  createTodo,
  updateTodo,
  deleteTodo,
};
