"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _models = _interopRequireDefault(require("./models"));

var _users = _interopRequireDefault(require("./routes/users.routes"));

var _products = _interopRequireDefault(require("./routes/products.routes"));

var _categories = _interopRequireDefault(require("./routes/categories.routes"));

var _parsers = _interopRequireDefault(require("./routes/parsers.routes"));

var _dks = _interopRequireDefault(require("./routes/dks.routes"));

var _purchases = _interopRequireDefault(require("./routes/purchases.routes"));

var app = (0, _express["default"])();
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
var port = process.env.PORT || 8000;
app.use("/users", _users["default"]);
app.use("/products", _products["default"]);
app.use("/categories", _categories["default"]);
app.use("/dks", _dks["default"]);
app.use("/parsers", _parsers["default"]);
app.use("/purchases", _purchases["default"]);
app.get("*", function (req, res) {
  return res.status(200).send({
    message: "Welcome to this API."
  });
});
console.log(_models["default"].sequelize.config);

_models["default"].sequelize.sync().then(function () {
  return app.listen(port, function () {
    return console.log("Server is running on PORT ".concat(port));
  });
})["catch"](function (error) {
  throw error;
});

var _default = app;
exports["default"] = _default;
//# sourceMappingURL=index.js.map