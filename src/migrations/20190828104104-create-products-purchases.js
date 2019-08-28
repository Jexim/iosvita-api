"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("ProductsPurchases", {
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      ProductId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: "Products", // name of Source model
          key: "id"
        }
      },
      PurchaseId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: "Purchases", // name of Source model
          key: "id"
        }
      },
      count: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable("ProductsPurchases");
  }
};
