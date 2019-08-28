"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.categoriesList = categoriesList;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var CategoriesService = _interopRequireWildcard(require("../services/categories.service"));

var _response = _interopRequireDefault(require("../utils/response.utils"));

var responseUtils = new _response["default"]();

function categoriesList(_x, _x2) {
  return _categoriesList.apply(this, arguments);
}

function _categoriesList() {
  _categoriesList = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.t0 = responseUtils;
            _context.next = 4;
            return CategoriesService.list();

          case 4:
            _context.t1 = _context.sent;
            _context.t2 = res;
            return _context.abrupt("return", _context.t0.setSuccess.call(_context.t0, 200, _context.t1).send(_context.t2));

          case 9:
            _context.prev = 9;
            _context.t3 = _context["catch"](0);
            return _context.abrupt("return", responseUtils.setError(400, _context.t3.message).send(res));

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));
  return _categoriesList.apply(this, arguments);
}
//# sourceMappingURL=categories.controller.js.map