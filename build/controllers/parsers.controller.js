"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseProductsFromDocs = parseProductsFromDocs;
exports.parseDksFromDocs = parseDksFromDocs;
exports.parseCategoriesFromDocs = parseCategoriesFromDocs;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var ProductsService = _interopRequireWildcard(require("../services/products.service"));

var DksService = _interopRequireWildcard(require("../services/dks.service"));

var CategoriesService = _interopRequireWildcard(require("../services/categories.service"));

var _response = _interopRequireDefault(require("../utils/response.utils"));

var responseUtils = new _response["default"]();

function parseProductsFromDocs(_x, _x2) {
  return _parseProductsFromDocs.apply(this, arguments);
}

function _parseProductsFromDocs() {
  _parseProductsFromDocs = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res) {
    var parsedProducts;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return ProductsService.parseFromDocs();

          case 3:
            parsedProducts = _context.sent;
            return _context.abrupt("return", responseUtils.setSuccess(200, parsedProducts, "Product parsed").send(res));

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", responseUtils.setError(400, _context.t0.message).send(res));

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _parseProductsFromDocs.apply(this, arguments);
}

function parseDksFromDocs(_x3, _x4) {
  return _parseDksFromDocs.apply(this, arguments);
}

function _parseDksFromDocs() {
  _parseDksFromDocs = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(req, res) {
    var parsedDks;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return DksService.parseFromDocs();

          case 3:
            parsedDks = _context2.sent;
            return _context2.abrupt("return", responseUtils.setSuccess(200, parsedDks, "DK's parsed").send(res));

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", responseUtils.setError(400, _context2.t0.message).send(res));

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return _parseDksFromDocs.apply(this, arguments);
}

function parseCategoriesFromDocs(_x5, _x6) {
  return _parseCategoriesFromDocs.apply(this, arguments);
}

function _parseCategoriesFromDocs() {
  _parseCategoriesFromDocs = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(req, res) {
    var parsedCategories;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return CategoriesService.parseFromDocs();

          case 3:
            parsedCategories = _context3.sent;
            return _context3.abrupt("return", responseUtils.setSuccess(200, parsedCategories, "Categories parsed").send(res));

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", responseUtils.setError(400, _context3.t0.message).send(res));

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return _parseCategoriesFromDocs.apply(this, arguments);
}
//# sourceMappingURL=parsers.controller.js.map