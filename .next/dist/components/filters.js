'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _durationSlider = require('./duration-slider.js');

var _durationSlider2 = _interopRequireDefault(_durationSlider);

var _priceSlider = require('./price-slider.js');

var _priceSlider2 = _interopRequireDefault(_priceSlider);

var _data = require('../hocs/data');

var _data2 = _interopRequireDefault(_data);

var _Filters = require('../styles/Filters.scss');

var _Filters2 = _interopRequireDefault(_Filters);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\projects\\med\\components\\filters.js';


var mapStateToProps = function mapStateToProps(_ref) {
  var _ref$filters = _ref.filters,
      durationFilter = _ref$filters.durationFilter,
      priceFilter = _ref$filters.priceFilter;
  return { durationFilter: durationFilter, priceFilter: priceFilter };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    changeDuration: function changeDuration(min, max) {
      return dispatch({ type: 'CHANGE_DURATION_FILTER', payload: { min: min, max: max } });
    },
    changePrice: function changePrice(min, max) {
      return dispatch({ type: 'CHANGE_PRICE_FILTER', payload: { min: min, max: max } });
    }
  };
};

exports.default = (0, _data2.default)(mapStateToProps, mapDispatchToProps)(function (_ref2) {
  var durationFilter = _ref2.durationFilter,
      priceFilter = _ref2.priceFilter,
      changeDuration = _ref2.changeDuration,
      changePrice = _ref2.changePrice;
  return _react2.default.createElement('div', { className: 'root', 'data-jsx-ext': _Filters2.default.__scopedHash,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement('div', { className: 'section', 'data-jsx-ext': _Filters2.default.__scopedHash,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, _react2.default.createElement('h3', {
    'data-jsx-ext': _Filters2.default.__scopedHash,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, 'Duraci\xF3n'), _react2.default.createElement(_durationSlider2.default, { value: durationFilter, onChange: function onChange(_ref3) {
      var max = _ref3.max,
          min = _ref3.min;
      changeDuration(min, max);
    }, __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  })), _react2.default.createElement('div', { className: 'section', 'data-jsx-ext': _Filters2.default.__scopedHash,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, _react2.default.createElement('h3', {
    'data-jsx-ext': _Filters2.default.__scopedHash,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, 'Precio'), _react2.default.createElement(_priceSlider2.default, { value: priceFilter, onChange: function onChange(_ref4) {
      var max = _ref4.max,
          min = _ref4.min;
      changePrice(min, max);
    }, __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  })), _react2.default.createElement('div', { className: 'section', 'data-jsx-ext': _Filters2.default.__scopedHash,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, _react2.default.createElement('h3', {
    'data-jsx-ext': _Filters2.default.__scopedHash,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, 'Categoria'), _react2.default.createElement('div', {
    'data-jsx-ext': _Filters2.default.__scopedHash,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, 'Tag1(numero)'), _react2.default.createElement('div', {
    'data-jsx-ext': _Filters2.default.__scopedHash,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, 'Tag2(numero)'), _react2.default.createElement('div', {
    'data-jsx-ext': _Filters2.default.__scopedHash,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, 'Tag3(numero)'), _react2.default.createElement('div', {
    'data-jsx-ext': _Filters2.default.__scopedHash,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, 'Tag4(numero)'), _react2.default.createElement('div', {
    'data-jsx-ext': _Filters2.default.__scopedHash,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, 'Ver m\xE1s +')), _react2.default.createElement(_style2.default, {
    styleId: _Filters2.default.__scopedHash,
    css: _Filters2.default.__scoped
  }));
});