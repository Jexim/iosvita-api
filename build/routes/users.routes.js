"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var UsersController = _interopRequireWildcard(require("../controllers/users.controller"));

var router = (0, _express.Router)();
router.post("/signup", UsersController.signUp);
router.post("/signin", UsersController.signIn);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=users.routes.js.map