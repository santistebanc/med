'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactInputRange = require('react-input-range');

var _reactInputRange2 = _interopRequireDefault(_reactInputRange);

var _recompose = require('recompose');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\projects\\med\\components\\duration-slider.js';

exports.default = function (_ref) {
  var value = _ref.value,
      _onChange = _ref.onChange;
  return _react2.default.createElement('div', { style: { position: 'relative' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement('span', { style: { position: 'absolute', top: -18, left: 0, color: '#333', fontSize: '0.8em' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, getLabel(value.min)), _react2.default.createElement('span', { style: { position: 'absolute', top: -18, right: 0, color: '#333', fontSize: '0.8em' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, getLabel(value.max)), _react2.default.createElement(_reactInputRange2.default, { maxValue: 32, minValue: 0,
    value: { min: toSteps(value.min), max: toSteps(value.max) },
    onChange: function onChange(range) {
      _onChange({ max: toSeconds(range.max), min: toSeconds(range.min) });
    }, formatLabel: function formatLabel(val) {
      return '';
    }, __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }));
};

var toSeconds = function toSeconds(value) {
  return value < 10 ? value : value < 20 ? 10 + (value - 10) * 5 : 60 + (parseInt(value) - 20) * 10;
};
var toSteps = function toSteps(seconds) {
  return seconds < 10 ? seconds : seconds < 60 ? 10 + (seconds - 10) / 5 : parseInt((seconds - 60) / 10 + 20);
};
var getLabel = function getLabel(val) {
  var minut = parseInt(val / 60);
  var sec = parseInt(val % 60);
  return minut + ':' + (sec < 10 ? "0" + sec : sec);
};