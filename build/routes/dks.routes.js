"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var DksController = _interopRequireWildcard(require("../controllers/dks.controller"));

var router = (0, _express.Router)();
router.get("/", DksController.dksList);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=dks.routes.js.map