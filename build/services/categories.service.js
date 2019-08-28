"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.list = list;
exports.parseFromDocs = parseFromDocs;
exports.createCategory = createCategory;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _googleSpreadsheet = _interopRequireDefault(require("google-spreadsheet"));

var _models = _interopRequireDefault(require("../models"));

var _app = _interopRequireDefault(require("../config/app"));

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
            return _models["default"].Category.findAll();

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
                  return item.title === "Categories";
                });
                sheet.getRows({},
                /*#__PURE__*/
                function () {
                  var _ref = (0, _asyncToGenerator2["default"])(
                  /*#__PURE__*/
                  _regenerator["default"].mark(function _callee2(error, rows) {
                    var categoriesTree, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, topCategory;

                    return _regenerator["default"].wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            if (error) reject(error);
                            categoriesTree = unflatten(rows.map(function (item) {
                              return {
                                title: item["title"],
                                parent: item["parent"]
                              };
                            }));
                            _context2.prev = 2;
                            _context2.next = 5;
                            return _models["default"].Category.destroy({
                              where: {}
                            });

                          case 5:
                            _iteratorNormalCompletion = true;
                            _didIteratorError = false;
                            _iteratorError = undefined;
                            _context2.prev = 8;
                            _iterator = categoriesTree[Symbol.iterator]();

                          case 10:
                            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                              _context2.next = 17;
                              break;
                            }

                            topCategory = _step.value;
                            _context2.next = 14;
                            return createCategory(topCategory);

                          case 14:
                            _iteratorNormalCompletion = true;
                            _context2.next = 10;
                            break;

                          case 17:
                            _context2.next = 23;
                            break;

                          case 19:
                            _context2.prev = 19;
                            _context2.t0 = _context2["catch"](8);
                            _didIteratorError = true;
                            _iteratorError = _context2.t0;

                          case 23:
                            _context2.prev = 23;
                            _context2.prev = 24;

                            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                              _iterator["return"]();
                            }

                          case 26:
                            _context2.prev = 26;

                            if (!_didIteratorError) {
                              _context2.next = 29;
                              break;
                            }

                            throw _iteratorError;

                          case 29:
                            return _context2.finish(26);

                          case 30:
                            return _context2.finish(23);

                          case 31:
                            resolve(categoriesTree);
                            _context2.next = 37;
                            break;

                          case 34:
                            _context2.prev = 34;
                            _context2.t1 = _context2["catch"](2);
                            reject(_context2.t1);

                          case 37:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2, null, [[2, 34], [8, 19, 23, 31], [24,, 26, 30]]);
                  }));

                  return function (_x3, _x4) {
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

function createCategory(_x, _x2) {
  return _createCategory.apply(this, arguments);
}

function _createCategory() {
  _createCategory = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee4(categoryParseObject, parentCategory) {
    var newCategory, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, childCategory;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _models["default"].Category.create({
              title: categoryParseObject.title,
              ParentId: parentCategory ? parentCategory.id : undefined
            });

          case 3:
            newCategory = _context4.sent;

            if (!categoryParseObject.children.length) {
              _context4.next = 31;
              break;
            }

            _iteratorNormalCompletion2 = true;
            _didIteratorError2 = false;
            _iteratorError2 = undefined;
            _context4.prev = 8;
            _iterator2 = categoryParseObject.children[Symbol.iterator]();

          case 10:
            if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
              _context4.next = 17;
              break;
            }

            childCategory = _step2.value;
            _context4.next = 14;
            return createCategory(childCategory, newCategory);

          case 14:
            _iteratorNormalCompletion2 = true;
            _context4.next = 10;
            break;

          case 17:
            _context4.next = 23;
            break;

          case 19:
            _context4.prev = 19;
            _context4.t0 = _context4["catch"](8);
            _didIteratorError2 = true;
            _iteratorError2 = _context4.t0;

          case 23:
            _context4.prev = 23;
            _context4.prev = 24;

            if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
              _iterator2["return"]();
            }

          case 26:
            _context4.prev = 26;

            if (!_didIteratorError2) {
              _context4.next = 29;
              break;
            }

            throw _iteratorError2;

          case 29:
            return _context4.finish(26);

          case 30:
            return _context4.finish(23);

          case 31:
            _context4.next = 36;
            break;

          case 33:
            _context4.prev = 33;
            _context4.t1 = _context4["catch"](0);
            throw _context4.t1;

          case 36:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 33], [8, 19, 23, 31], [24,, 26, 30]]);
  }));
  return _createCategory.apply(this, arguments);
}

function unflatten(arr) {
  var tree = [],
      mappedArr = {},
      arrElem,
      mappedElem;

  for (var i = 0, len = arr.length; i < len; i++) {
    arrElem = arr[i];
    mappedArr[arrElem.title] = arrElem;
    mappedArr[arrElem.title]["children"] = [];
  }

  for (var title in mappedArr) {
    if (mappedArr.hasOwnProperty(title)) {
      mappedElem = mappedArr[title];

      if (mappedElem.parent) {
        mappedArr[mappedElem["parent"]]["children"].push(mappedElem);
      } else {
        tree.push(mappedElem);
      }
    }
  }

  return tree;
}
//# sourceMappingURL=categories.service.js.map