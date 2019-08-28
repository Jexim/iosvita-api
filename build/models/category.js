"use strict";

module.exports = function (sequelize, DataTypes) {
  var Category = sequelize.define("Category", {
    title: DataTypes.STRING
  }, {});

  Category.associate = function (models) {
    // associations can be defined here
    Category.hasMany(models["Product"]);
    Category.hasOne(models["Category"], {
      as: "Parent"
    });
  };

  return Category;
};
//# sourceMappingURL=category.js.map