"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateUser = validateUser;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _response = _interopRequireDefault(require("../utils/response.utils"));

var _app = _interopRequireDefault(require("../../config/app"));

var responseUtils = new _response["default"]();

function validateUser(_x, _x2, _x3) {
  return _validateUser.apply(this, arguments);
}

function _validateUser() {
  _validateUser = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res, next) {
    var seecret;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            seecret = _app["default"][process.env.NODE_ENV || "development"].seecret;

            _jsonwebtoken["default"].verify(req.headers["x-access-token"], seecret, function (err, decoded) {
              if (err) {
                return responseUtils.setError(400, err.message).send(res);
              } else {
                // add user id to request
                req.body.UserId = decoded.id;
                next();
              }
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _validateUser.apply(this, arguments);
}
//# sourceMappingURL=users.middleware.js.map