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

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _searchbar = require('./searchbar.js');

var _searchbar2 = _interopRequireDefault(_searchbar);

var _menubar = require('../styles/menubar.scss');

var _menubar2 = _interopRequireDefault(_menubar);

var _index = require('next\\dist\\lib\\router\\index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\projects\\med\\components\\menubar.js';


var _class = function (_Component) {
  (0, _inherits3.default)(_class, _Component);

  function _class() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, _class);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = _class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call.apply(_ref, [this].concat(args))), _this), _this.handleRequestSearch = function (query) {
      console.log("search ", query);
    }, _this.handleChangeSearch = function (algo) {
      //cada vez que el usuario cambia un caracter
    }, _this.handleLogin = function () {
      if (_this.props.user) {
        _index2.default.push('/logout');
      } else {
        _this.props.showSessionModal && _this.props.showSessionModal('login');
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(_class, [{
    key: 'render',
    value: function render() {
      console.log(this.props.user);
      return _react2.default.createElement('div', { className: 'root', 'data-jsx-ext': _menubar2.default.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement('div', { className: 'logo-section', 'data-jsx-ext': _menubar2.default.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement('div', { className: 'logo', 'data-jsx-ext': _menubar2.default.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement('img', { src: '/static/MexicoEnDronLogo.png', 'data-jsx-ext': _menubar2.default.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      })))), _react2.default.createElement('div', { className: 'search', 'data-jsx-ext': _menubar2.default.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement(_searchbar2.default, { onRequestSearch: this.handleRequestSearch, onChange: this.handleChangeSearch, __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      })), _react2.default.createElement('div', { className: 'nav', 'data-jsx-ext': _menubar2.default.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement('button', { onClick: this.handleLogin, 'data-jsx-ext': _menubar2.default.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, this.props.user ? "Cerrar Sesión" : "Iniciar Sesión")), _react2.default.createElement(_style2.default, {
        styleId: _menubar2.default.__scopedHash,
        css: _menubar2.default.__scoped
      }));
    }
  }]);

  return _class;
}(_react.Component);

exports.default = _class;