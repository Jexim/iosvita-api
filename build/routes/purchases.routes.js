"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var PurchasesController = _interopRequireWildcard(require("../controllers/purchases.controller"));

var UsersMiddleware = _interopRequireWildcard(require("../middlewares/users.middleware"));

var router = (0, _express.Router)();
router.get("/", UsersMiddleware.validateUser, PurchasesController.purchasesList);
router.post("/", UsersMiddleware.validateUser, PurchasesController.createPurchase);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=purchases.routes.js.map