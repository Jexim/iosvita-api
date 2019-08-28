"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.list = list;
exports.create = create;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _googleSpreadsheet = _interopRequireDefault(require("google-spreadsheet"));

var _models = _interopRequireDefault(require("../models"));

var _app = _interopRequireDefault(require("../../config/app"));

var doc = new _googleSpreadsheet["default"](_app["default"][process.env.NODE_ENV || "development"].googleSheetId);

function list(_x) {
  return _list.apply(this, arguments);
}

function _list() {
  _list = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(_ref) {
    var limit, offset;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            limit = _ref.limit, offset = _ref.offset;
            _context.prev = 1;
            _context.next = 4;
            return _models["default"].Purchase.findAndCountAll({
              limit: limit,
              offset: offset
            });

          case 4:
            return _context.abrupt("return", _context.sent);

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](1);
            throw _context.t0;

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 7]]);
  }));
  return _list.apply(this, arguments);
}

function create(_x2) {
  return _create.apply(this, arguments);
}

function _create() {
  _create = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(purchaseData) {
    var readyPurchase, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, productRow;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _models["default"].Purchase.create(purchaseData);

          case 3:
            readyPurchase = _context2.sent;
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context2.prev = 7;

            for (_iterator = purchaseData.products[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              productRow = _step.value;
              readyPurchase.addProduct(productRow.id, {
                through: {
                  count: productRow.count
                }
              });
            }

            _context2.next = 15;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](7);
            _didIteratorError = true;
            _iteratorError = _context2.t0;

          case 15:
            _context2.prev = 15;
            _context2.prev = 16;

            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }

          case 18:
            _context2.prev = 18;

            if (!_didIteratorError) {
              _context2.next = 21;
              break;
            }

            throw _iteratorError;

          case 21:
            return _context2.finish(18);

          case 22:
            return _context2.finish(15);

          case 23:
            return _context2.abrupt("return", readyPurchase);

          case 26:
            _context2.prev = 26;
            _context2.t1 = _context2["catch"](0);
            throw _context2.t1;

          case 29:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 26], [7, 11, 15, 23], [16,, 18, 22]]);
  }));
  return _create.apply(this, arguments);
}
//# sourceMappingURL=purchases.service.js.map