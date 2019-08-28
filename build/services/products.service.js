"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = create;
exports.list = list;
exports.parseFromDocs = parseFromDocs;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _googleSpreadsheet = _interopRequireDefault(require("google-spreadsheet"));

var _models = _interopRequireDefault(require("../models"));

var _app = _interopRequireDefault(require("../config/app"));

var doc = new _googleSpreadsheet["default"](_app["default"][process.env.NODE_ENV || "development"].googleSheetId);

function create(_x) {
  return _create.apply(this, arguments);
}

function _create() {
  _create = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(newProduct) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _models["default"].Product.create(newProduct);

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
  return _create.apply(this, arguments);
}

function list(_x2) {
  return _list.apply(this, arguments);
}

function _list() {
  _list = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(_ref) {
    var limit, offset;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            limit = _ref.limit, offset = _ref.offset;
            _context2.prev = 1;
            _context2.next = 4;
            return _models["default"].Product.findAndCountAll({
              offset: offset,
              limit: limit
            });

          case 4:
            return _context2.abrupt("return", _context2.sent);

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](1);
            throw _context2.t0;

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 7]]);
  }));
  return _list.apply(this, arguments);
}

function parseFromDocs() {
  return _parseFromDocs.apply(this, arguments);
}

function _parseFromDocs() {
  _parseFromDocs = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee4() {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt("return", new Promise(function (resolve, reject) {
              doc.getInfo(function (error, info) {
                if (error) return reject(error);
                var sheet = info.worksheets.find(function (item) {
                  return item.title === "Products";
                });
                sheet.getRows({},
                /*#__PURE__*/
                function () {
                  var _ref2 = (0, _asyncToGenerator2["default"])(
                  /*#__PURE__*/
                  _regenerator["default"].mark(function _callee3(error, rows) {
                    var createdProducts, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, productRow, category, newProduct;

                    return _regenerator["default"].wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            if (error) reject(error);
                            _context3.next = 3;
                            return _models["default"].Product.destroy({
                              where: {}
                            });

                          case 3:
                            createdProducts = [];
                            _context3.prev = 4;
                            _iteratorNormalCompletion = true;
                            _didIteratorError = false;
                            _iteratorError = undefined;
                            _context3.prev = 8;
                            _iterator = rows[Symbol.iterator]();

                          case 10:
                            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                              _context3.next = 25;
                              break;
                            }

                            productRow = _step.value;
                            _context3.next = 14;
                            return _models["default"].Category.findOne({
                              where: {
                                title: productRow["category"]
                              }
                            });

                          case 14:
                            category = _context3.sent;
                            newProduct = {
                              title: productRow.title,
                              price: +productRow.price,
                              description: productRow.description,
                              CategoryId: category ? category.id : undefined,
                              DkId: productRow.dk
                            };
                            console.log(_models["default"].Product);
                            _context3.t0 = createdProducts;
                            _context3.next = 20;
                            return _models["default"].Product.create(newProduct);

                          case 20:
                            _context3.t1 = _context3.sent;

                            _context3.t0.push.call(_context3.t0, _context3.t1);

                          case 22:
                            _iteratorNormalCompletion = true;
                            _context3.next = 10;
                            break;

                          case 25:
                            _context3.next = 31;
                            break;

                          case 27:
                            _context3.prev = 27;
                            _context3.t2 = _context3["catch"](8);
                            _didIteratorError = true;
                            _iteratorError = _context3.t2;

                          case 31:
                            _context3.prev = 31;
                            _context3.prev = 32;

                            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                              _iterator["return"]();
                            }

                          case 34:
                            _context3.prev = 34;

                            if (!_didIteratorError) {
                              _context3.next = 37;
                              break;
                            }

                            throw _iteratorError;

                          case 37:
                            return _context3.finish(34);

                          case 38:
                            return _context3.finish(31);

                          case 39:
                            resolve(createdProducts);
                            _context3.next = 45;
                            break;

                          case 42:
                            _context3.prev = 42;
                            _context3.t3 = _context3["catch"](4);
                            reject(_context3.t3);

                          case 45:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3, null, [[4, 42], [8, 27, 31, 39], [32,, 34, 38]]);
                  }));

                  return function (_x3, _x4) {
                    return _ref2.apply(this, arguments);
                  };
                }());
              });
            }));

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _parseFromDocs.apply(this, arguments);
}
//# sourceMappingURL=products.service.js.map