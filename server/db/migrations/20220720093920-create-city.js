'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      foundationDate: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.TEXT
      },
      peopleAmmount: {
        type: Sequelize.INTEGER
      },
      square: {
        type: Sequelize.INTEGER
      },
      sunnyDays: {
        type: Sequelize.INTEGER
      },
      distanceFromMoscow: {
        type: Sequelize.INTEGER
      },
      distanceFromEquator: {
        type: Sequelize.INTEGER
      },
      distanceFromNorthToSouth: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Cities');
  }
};
