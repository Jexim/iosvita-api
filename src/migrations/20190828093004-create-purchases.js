"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.createTable("Purchases", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        title: Sequelize.STRING,
        comment: Sequelize.TEXT,
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        UserId: {
          allowNull: false,
          type: Sequelize.INTEGER,
          secondaryKey: true,
          references: {
            model: 'Users',
            key: 'id',
          }
        }
      })
    ]);
  },
  down: queryInterface => {
    return Promise.all([queryInterface.dropTable("Purchases")]);
  }
};
