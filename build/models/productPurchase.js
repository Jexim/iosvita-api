"use strict";

module.exports = function (sequelize, DataTypes) {
  var ProductPurchase = sequelize.define("ProductsPurchases", {
    count: DataTypes.INTEGER
  }, {});

  ProductPurchase.associate = function (models) {// associations can be defined here
  };

  return ProductPurchase;
};
//# sourceMappingURL=productPurchase.js.map