"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.purchasesList = purchasesList;
exports.createPurchase = createPurchase;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var PurchasesService = _interopRequireWildcard(require("../services/purchases.service"));

var _response = _interopRequireDefault(require("../utils/response.utils"));

var responseUtils = new _response["default"]();

function purchasesList(_x, _x2) {
  return _purchasesList.apply(this, arguments);
}

function _purchasesList() {
  _purchasesList = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res) {
    var _req$body, limit, offset;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, limit = _req$body.limit, offset = _req$body.offset;
            _context.t0 = responseUtils;
            _context.next = 5;
            return PurchasesService.list({
              limit: limit,
              offset: offset
            });

          case 5:
            _context.t1 = _context.sent;
            _context.t2 = res;
            return _context.abrupt("return", _context.t0.setSuccess.call(_context.t0, 200, _context.t1).send(_context.t2));

          case 10:
            _context.prev = 10;
            _context.t3 = _context["catch"](0);
            return _context.abrupt("return", responseUtils.setError(400, _context.t3.message).send(res));

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));
  return _purchasesList.apply(this, arguments);
}

function createPurchase(_x3, _x4) {
  return _createPurchase.apply(this, arguments);
}

function _createPurchase() {
  _createPurchase = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(req, res) {
    var newPurchase, createdPurchase;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            newPurchase = req.body;
            console.log(!newPurchase.products || !newPurchase.products.length);

            if (!(!newPurchase.products || !newPurchase.products.length)) {
              _context2.next = 4;
              break;
            }

            return _context2.abrupt("return", responseUtils.setError(400, "Purchase can not have products").send(res));

          case 4:
            _context2.prev = 4;
            _context2.next = 7;
            return PurchasesService.create(newPurchase);

          case 7:
            createdPurchase = _context2.sent;
            return _context2.abrupt("return", responseUtils.setSuccess(201, createdPurchase, "Purchase created").send(res));

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](4);
            return _context2.abrupt("return", responseUtils.setError(400, _context2.t0.message).send(res));

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[4, 11]]);
  }));
  return _createPurchase.apply(this, arguments);
}
//# sourceMappingURL=purchases.controller.js.map