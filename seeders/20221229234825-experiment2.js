'use strict';
const moment = require('moment');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('experiments', [{
      key: 'button_color',
      value: '#00FF00',
      createdAt: moment().toDate(),
      updatedAt: moment().toDate()
    }], {});
  },

  async down(queryInterface, Sequelize) {
  }
};
