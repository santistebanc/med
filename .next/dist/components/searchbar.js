'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _searchbar = require('../styles/searchbar.scss');

var _searchbar2 = _interopRequireDefault(_searchbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\projects\\med\\components\\searchbar.js',
    _this = undefined;

exports.default = (0, _recompose.withState)('value', 'changeValue', '')(function (_ref) {
  var value = _ref.value,
      changeValue = _ref.changeValue,
      onRequestSearch = _ref.onRequestSearch,
      _onChange = _ref.onChange;
  return _react2.default.createElement('div', { className: "root", 'data-jsx-ext': _searchbar2.default.__scopedHash,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('form', { onSubmit: function onSubmit(e) {
      e.preventDefault();
      onRequestSearch(value);
    }, 'data-jsx-ext': _searchbar2.default.__scopedHash,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement('input', { type: 'text', placeholder: 'Buscar', value: value, onChange: function onChange(e) {
      changeValue(_this.value);
      _onChange(_this.value);
    }, 'data-jsx-ext': _searchbar2.default.__scopedHash,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  })), _react2.default.createElement('button', {
    'data-jsx-ext': _searchbar2.default.__scopedHash,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement('i', { className: 'fa fa-search', 'data-jsx-ext': _searchbar2.default.__scopedHash,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  })), _react2.default.createElement(_style2.default, {
    styleId: _searchbar2.default.__scopedHash,
    css: _searchbar2.default.__scoped
  }));
});