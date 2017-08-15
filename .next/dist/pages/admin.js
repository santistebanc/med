'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _layout = require('../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _page = require('../providers/page');

var _page2 = _interopRequireDefault(_page);

var _admin = require('../components/admin');

var _admin2 = _interopRequireDefault(_admin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\projects\\med\\pages\\admin.js?entry';
exports.default = (0, _page2.default)(function () {
  return _react2.default.createElement(_layout2.default, { title: 'Admin', page: 'admin', hideSide: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement('div', { className: 'container', __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement(_admin2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  })));
});