"use strict";
module.exports = (sequelize, DataTypes) => {
  const ProductPurchase = sequelize.define(
    "ProductsPurchases",
    {
      count: DataTypes.INTEGER
    },
    {}
  );
  ProductPurchase.associate = function(models) {
    // associations can be defined here
    ProductPurchase.hasOne(models["Product"]);
    ProductPurchase.hasOne(models["Purchase"]);
  };
  return ProductPurchase;
};
