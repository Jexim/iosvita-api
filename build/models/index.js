"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = _interopRequireDefault(require("../../config/database"));

var basename = _path["default"].basename(__filename);

var env = process.env.NODE_ENV ? process.env.NODE_ENV : "development";
var config = _database["default"][env];
console.log(config);
console.log("this is the environment: ", env);
var db = {};
var sequelize;

if (config.environment === "production") {
  sequelize = new _sequelize["default"](process.env[config.use_env_variable], config);
  sequelize = new _sequelize["default"](process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
    dialectOption: {
      ssl: true,
      "native": true
    },
    logging: true
  });
} else {
  console.log('dsdsdsd');
  sequelize = new _sequelize["default"](config.database, config.username, config.password, config);
}

_fs["default"].readdirSync(__dirname).filter(function (file) {
  return file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js";
}).forEach(function (file) {
  var model = sequelize["import"](_path["default"].join(__dirname, file));
  db[model.name] = model;
});

Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
db.sequelize = sequelize;
db.Sequelize = _sequelize["default"];
var _default = db;
exports["default"] = _default;
//# sourceMappingURL=index.js.map