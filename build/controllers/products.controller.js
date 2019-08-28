"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productsList = productsList;
exports.createProduct = createProduct;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var ProductsService = _interopRequireWildcard(require("../services/products.service"));

var _response = _interopRequireDefault(require("../utils/response.utils"));

var responseUtils = new _response["default"]();

function productsList(_x, _x2) {
  return _productsList.apply(this, arguments);
}

function _productsList() {
  _productsList = (0, _asyncToGenerator2["default"])(
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
            return ProductsService.list({
              limit: limit,
              offset: offset
            });

          case 5:
            _context.t1 = _context.sent;
            _context.t2 = res;
            return _context.abrupt("return", _context.t0.setSuccess.call(_context.t0, 201, _context.t1).send(_context.t2));

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
  return _productsList.apply(this, arguments);
}

function createProduct(_x3, _x4) {
  return _createProduct.apply(this, arguments);
}

function _createProduct() {
  _createProduct = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(req, res) {
    var newProduct, createdProduct;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            newProduct = req.body;

            if (newProduct.title) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt("return", responseUtils.setError(400, "Title can not be empty").send(res));

          case 3:
            if (newProduct.price) {
              _context2.next = 5;
              break;
            }

            return _context2.abrupt("return", responseUtils.setError(400, "Price can not be empty").send(res));

          case 5:
            _context2.prev = 5;
            _context2.next = 8;
            return ProductsService.create(newProduct);

          case 8:
            createdProduct = _context2.sent;
            return _context2.abrupt("return", responseUtils.setSuccess(201, createdProduct, "Product created").send(res));

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](5);
            return _context2.abrupt("return", responseUtils.setError(400, _context2.t0.message).send(res));

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[5, 12]]);
  }));
  return _createProduct.apply(this, arguments);
}
//# sourceMappingURL=products.controller.js.map