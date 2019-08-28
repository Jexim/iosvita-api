"use strict";

module.exports = function (sequelize, DataTypes) {
  var Product = sequelize.define("Product", {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    description: {
      allowNull: true,
      type: DataTypes.TEXT
    },
    image: DataTypes.STRING
  }, {});

  Product.associate = function (models) {
    // associations can be defined here
    Product.belongsTo(models["Category"]);
    Product.belongsTo(models["Dk"]);
    Product.belongsToMany(models["Purchase"], {
      through: "ProductsPurchases"
    });
  };

  return Product;
};
//# sourceMappingURL=product.js.map