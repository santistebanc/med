'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactInputRange = require('react-input-range');

var _reactInputRange2 = _interopRequireDefault(_reactInputRange);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\projects\\med\\components\\price-slider.js';

exports.default = function (_ref) {
  var value = _ref.value,
      _onChange = _ref.onChange;
  return _react2.default.createElement('div', { className: "green", style: { position: 'relative' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement('span', { style: { position: 'absolute', top: -18, left: 0, color: '#333', fontSize: '0.8em' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, value.min + ' MXN'), _react2.default.createElement('span', { style: { position: 'absolute', top: -18, right: 0, color: '#333', fontSize: '0.8em' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, value.max + ' MXN'), _react2.default.createElement(_reactInputRange2.default, { maxValue: 20, minValue: 0,
    value: { min: toSteps(value.min), max: toSteps(value.max) },
    onChange: function onChange(range) {
      _onChange({ max: toMoney(range.max), min: toMoney(range.min) });
    }, formatLabel: function formatLabel(val) {
      return '';
    }, __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }));
};

var toMoney = function toMoney(value) {
  return value * 5;
};
var toSteps = function toSteps(money) {
  return money / 5;
};