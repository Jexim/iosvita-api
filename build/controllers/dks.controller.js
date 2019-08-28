"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dksList = dksList;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var DksService = _interopRequireWildcard(require("../services/dks.service"));

var _response = _interopRequireDefault(require("../utils/response.utils"));

var responseUtils = new _response["default"]();

function dksList(_x, _x2) {
  return _dksList.apply(this, arguments);
}

function _dksList() {
  _dksList = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.t0 = responseUtils;
            _context.next = 4;
            return DksService.list();

          case 4:
            _context.t1 = _context.sent;
            _context.t2 = res;
            return _context.abrupt("return", _context.t0.setSuccess.call(_context.t0, 201, _context.t1).send(_context.t2));

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
  return _dksList.apply(this, arguments);
}
//# sourceMappingURL=dks.controller.js.map