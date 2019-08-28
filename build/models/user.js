'use strict';

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});

  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models["Purchase"]);
  };

  return User;
};
//# sourceMappingURL=user.js.map