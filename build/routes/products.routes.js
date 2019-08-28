"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var ProductsController = _interopRequireWildcard(require("../controllers/products.controller"));

var UsersMiddleware = _interopRequireWildcard(require("../middlewares/users.middleware"));

var router = (0, _express.Router)();
router.get("/", ProductsController.productsList);
router.post("/", UsersMiddleware.validateUser, ProductsController.createProduct);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=products.routes.js.map