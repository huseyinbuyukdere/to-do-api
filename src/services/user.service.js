const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { users: Users } = require('../models');

/**
 * Get user by email
 * @param {string} email
 * @returns {Promise<User>}
 */
const getUserByEmail = async (email) => {
  return Users.findOne({
    where: {
      email,
    },
  });
};

/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createUser = async (userBody) => {
  const result = await getUserByEmail(userBody.email);
  if (result !== null) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  return Users.create(userBody);
};

/**
 * Create a user
 * @param {integer} userId
 * @returns {Promise<User>}
 */
const getUserById = async (userId) => {
  return Users.findOne({
    where: {
      id: userId,
    },
  });
};

module.exports = {
  createUser,
  getUserByEmail,
  getUserById,
};
