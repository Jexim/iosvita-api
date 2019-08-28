"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.list = list;
exports.parseFromDocs = parseFromDocs;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _googleSpreadsheet = _interopRequireDefault(require("google-spreadsheet"));

var _models = _interopRequireDefault(require("../models"));

var _app = _interopRequireDefault(require("../../config/app"));

var doc = new _googleSpreadsheet["default"](_app["default"][process.env.NODE_ENV || "development"].googleSheetId);

function list() {
  return _list.apply(this, arguments);
}

function _list() {
  _list = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _models["default"].Dk.findAll();

          case 3:
            return _context.abrupt("return", _context.sent);

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            throw _context.t0;

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 6]]);
  }));
  return _list.apply(this, arguments);
}

function parseFromDocs() {
  return _parseFromDocs.apply(this, arguments);
}

function _parseFromDocs() {
  _parseFromDocs = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3() {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", new Promise(function (resolve, reject) {
              doc.getInfo(function (error, info) {
                if (error) return reject(error);
                var sheet = info.worksheets.find(function (item) {
                  return item.title === "DK";
                });
                sheet.getRows({},
                /*#__PURE__*/
                function () {
                  var _ref = (0, _asyncToGenerator2["default"])(
                  /*#__PURE__*/
                  _regenerator["default"].mark(function _callee2(error, rows) {
                    var createdDks, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, dkRow, newDk;

                    return _regenerator["default"].wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            if (error) reject(error);
                            createdDks = [];
                            _context2.prev = 2;
                            _context2.next = 5;
                            return _models["default"].Dk.destroy({
                              where: {}
                            });

                          case 5:
                            _iteratorNormalCompletion = true;
                            _didIteratorError = false;
                            _iteratorError = undefined;
                            _context2.prev = 8;
                            _iterator = rows[Symbol.iterator]();

                          case 10:
                            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                              _context2.next = 20;
                              break;
                            }

                            dkRow = _step.value;
                            newDk = {
                              id: dkRow.number,
                              title: dkRow.title
                            };
                            console.log(newDk);
                            _context2.next = 16;
                            return _models["default"].Dk.create(newDk);

                          case 16:
                            createdDks.push(newDk);

                          case 17:
                            _iteratorNormalCompletion = true;
                            _context2.next = 10;
                            break;

                          case 20:
                            _context2.next = 26;
                            break;

                          case 22:
                            _context2.prev = 22;
                            _context2.t0 = _context2["catch"](8);
                            _didIteratorError = true;
                            _iteratorError = _context2.t0;

                          case 26:
                            _context2.prev = 26;
                            _context2.prev = 27;

                            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                              _iterator["return"]();
                            }

                          case 29:
                            _context2.prev = 29;

                            if (!_didIteratorError) {
                              _context2.next = 32;
                              break;
                            }

                            throw _iteratorError;

                          case 32:
                            return _context2.finish(29);

                          case 33:
                            return _context2.finish(26);

                          case 34:
                            resolve(createdDks);
                            _context2.next = 40;
                            break;

                          case 37:
                            _context2.prev = 37;
                            _context2.t1 = _context2["catch"](2);
                            reject(_context2.t1);

                          case 40:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2, null, [[2, 37], [8, 22, 26, 34], [27,, 29, 33]]);
                  }));

                  return function (_x, _x2) {
                    return _ref.apply(this, arguments);
                  };
                }());
              });
            }));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _parseFromDocs.apply(this, arguments);
}
//# sourceMappingURL=dks.service.js.map