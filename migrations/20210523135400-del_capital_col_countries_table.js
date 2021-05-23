'use strict';

let tableModel = { schema: 'app', tableName: 'countries' };

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(tableModel, 'Capital')

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(tableModel, 'Capital', { allowNull: true, type: Sequelize.STRING });
  }
};
