'use strict';
const usersData = require('../constant/user')

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', usersData);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', {}, null)
  }
};
