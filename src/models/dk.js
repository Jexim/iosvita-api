'use strict';
module.exports = (sequelize, DataTypes) => {
  const Dk = sequelize.define('Dk', {
    title: DataTypes.STRING
  }, {});
  Dk.associate = function(models) {
    // associations can be defined here
    Dk.hasMany(models["Product"]);
  };
  return Dk;
};