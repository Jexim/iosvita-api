"use strict";

module.exports = function (sequelize, DataTypes) {
  var Purchase = sequelize.define("Purchase", {
    comment: DataTypes.TEXT
  }, {});

  Purchase.associate = function (models) {
    // associations can be defined here
    Purchase.belongsToMany(models["Product"], {
      through: "ProductsPurchases"
    });
    Purchase.belongsTo(models["User"]);
  };

  return Purchase;
};
//# sourceMappingURL=purchase.js.map