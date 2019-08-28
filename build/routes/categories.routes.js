"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var CategoriesController = _interopRequireWildcard(require("../controllers/categories.controller"));

var router = (0, _express.Router)();
router.get("/", CategoriesController.categoriesList);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=categories.routes.js.map