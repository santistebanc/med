'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SearchBar = require('../styles/SearchBar.scss');

var _SearchBar2 = _interopRequireDefault(_SearchBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\projects\\med\\components\\searchbar.js';


var _class = function (_Component) {
  (0, _inherits3.default)(_class, _Component);

  function _class() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, _class);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = _class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call.apply(_ref, [this].concat(args))), _this), _this.state = { value: '' }, _this.handleInput = function (e) {
      _this.setState({ value: e.target.value });
      _this.props.onChange(e.target.value);
    }, _this.handleSearch = function (e) {
      e.preventDefault();
      _this.props.onRequestSearch(_this.props.value || _this.state.value);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(_class, [{
    key: 'render',
    value: function render() {
      var value = this.props.value || this.state.value;
      return _react2.default.createElement('div', { className: "root", 'data-jsx-ext': _SearchBar2.default.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement('form', { onSubmit: this.handleSearch, 'data-jsx-ext': _SearchBar2.default.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react2.default.createElement('input', { type: 'text', placeholder: 'Buscar', value: value, onChange: this.handleInput, 'data-jsx-ext': _SearchBar2.default.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      })), _react2.default.createElement('button', {
        'data-jsx-ext': _SearchBar2.default.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement('i', { className: 'fa fa-search', 'data-jsx-ext': _SearchBar2.default.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      })), _react2.default.createElement(_style2.default, {
        styleId: _SearchBar2.default.__scopedHash,
        css: _SearchBar2.default.__scoped
      }));
    }
  }]);

  return _class;
}(_react.Component);

exports.default = _class;