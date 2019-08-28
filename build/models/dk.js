'use strict';

module.exports = function (sequelize, DataTypes) {
  var Dk = sequelize.define('Dk', {
    title: DataTypes.STRING
  }, {});

  Dk.associate = function (models) {
    // associations can be defined here
    Dk.hasMany(models["Product"]);
  };

  return Dk;
};
//# sourceMappingURL=dk.js.map