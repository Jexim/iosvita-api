"use strict";
module.exports = (sequelize, DataTypes) => {
  const Purchase = sequelize.define(
    "Purchase",
    {
      title: DataTypes.STRING
    },
    {}
  );
  Purchase.associate = function(models) {
    // associations can be defined here
    Purchase.belongsToMany(models["Product"], { through: "ProductsPurchases" });
    Purchase.belongsTo(models["User"]);
  };
  return Purchase;
};
