'use strict';

module.exports = function (sequelize, DataTypes) {
  var Order = sequelize.define('Order', {
    title: DataTypes.STRING
  }, {});

  Order.associate = function (models) {// associations can be defined here
  };

  return Order;
};
//# sourceMappingURL=order.js.map