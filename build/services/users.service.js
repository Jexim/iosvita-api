"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = create;
exports.authentication = authentication;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _models = _interopRequireDefault(require("../models"));

var _app = _interopRequireDefault(require("../../config/app"));

var saltRounds = 10;
var seecret = _app["default"][process.env.NODE_ENV || "development"].seecret;

function create(_x) {
  return _create.apply(this, arguments);
}

function _create() {
  _create = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(newUser) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            newUser.password = _bcrypt["default"].hashSync(newUser.password, saltRounds);
            _context.next = 4;
            return _models["default"].User.create(newUser);

          case 4:
            return _context.abrupt("return", _context.sent);

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            throw _context.t0;

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _create.apply(this, arguments);
}

function authentication(_x2) {
  return _authentication.apply(this, arguments);
}

function _authentication() {
  _authentication = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(_ref) {
    var email, password, user, token;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            email = _ref.email, password = _ref.password;
            _context2.prev = 1;
            _context2.next = 4;
            return _models["default"].User.findOne({
              where: {
                email: email
              }
            });

          case 4:
            user = _context2.sent;

            if (!(user && _bcrypt["default"].compareSync(password, user.dataValues.password))) {
              _context2.next = 10;
              break;
            }

            token = _jsonwebtoken["default"].sign({
              id: user.dataValues.id
            }, seecret, {
              expiresIn: "1d"
            });
            return _context2.abrupt("return", token);

          case 10:
            throw new Error("Invalid email or password");

          case 11:
            _context2.next = 16;
            break;

          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](1);
            throw _context2.t0;

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 13]]);
  }));
  return _authentication.apply(this, arguments);
}
//# sourceMappingURL=users.service.js.map