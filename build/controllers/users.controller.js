"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signUp = signUp;
exports.signIn = signIn;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _validator = _interopRequireDefault(require("validator"));

var UsersService = _interopRequireWildcard(require("../services/users.service"));

var _response = _interopRequireDefault(require("../utils/response.utils"));

var responseUtils = new _response["default"]();

function signUp(_x, _x2) {
  return _signUp.apply(this, arguments);
}

function _signUp() {
  _signUp = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res) {
    var newUser, createdUser;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            newUser = req.body;

            if (!(!newUser.email || !newUser.password)) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", responseUtils.setError(400, "Email or password can not be empty").send(res));

          case 3:
            if (_validator["default"].isEmail(newUser.email)) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", responseUtils.setError(400, "Email is not valid").send(res));

          case 5:
            _context.prev = 5;
            _context.next = 8;
            return UsersService.create(newUser);

          case 8:
            createdUser = _context.sent;
            delete createdUser.dataValues.password;
            return _context.abrupt("return", responseUtils.setSuccess(201, createdUser, "User created").send(res));

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](5);
            return _context.abrupt("return", responseUtils.setError(400, _context.t0.message).send(res));

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[5, 13]]);
  }));
  return _signUp.apply(this, arguments);
}

function signIn(_x3, _x4) {
  return _signIn.apply(this, arguments);
}

function _signIn() {
  _signIn = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(req, res) {
    var token;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(!req.body.email || !req.body.password)) {
              _context2.next = 2;
              break;
            }

            return _context2.abrupt("return", responseUtils.setError(400, "Email or password can not be empty").send(res));

          case 2:
            _context2.prev = 2;
            _context2.next = 5;
            return UsersService.authentication({
              email: req.body.email,
              password: req.body.password
            });

          case 5:
            token = _context2.sent;
            return _context2.abrupt("return", responseUtils.setSuccess(200, {
              token: token
            }, "User auth success").send(res));

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](2);
            return _context2.abrupt("return", responseUtils.setError(400, _context2.t0.message).send(res));

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 9]]);
  }));
  return _signIn.apply(this, arguments);
}
//# sourceMappingURL=users.controller.js.map