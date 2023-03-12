const allRoles = {
  user: ['createTodo', 'updateTodo', 'deleteTodo', 'listTodos'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
