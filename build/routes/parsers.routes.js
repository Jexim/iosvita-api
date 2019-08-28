"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var ParcersController = _interopRequireWildcard(require("../controllers/parsers.controller"));

var UsersMiddleware = _interopRequireWildcard(require("../middlewares/users.middleware"));

var router = (0, _express.Router)();
router.get("/products", UsersMiddleware.validateUser, ParcersController.parseProductsFromDocs);
router.get("/categories", UsersMiddleware.validateUser, ParcersController.parseCategoriesFromDocs);
router.get("/dks", UsersMiddleware.validateUser, ParcersController.parseDksFromDocs);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=parsers.routes.js.map