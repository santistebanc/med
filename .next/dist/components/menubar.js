'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _oothClientReact = require('ooth-client-react');

var _searchbar = require('./searchbar.js');

var _searchbar2 = _interopRequireDefault(_searchbar);

var _router = require('../hocs/router');

var _router2 = _interopRequireDefault(_router);

var _link = require('../hocs/link');

var _link2 = _interopRequireDefault(_link);

var _menubar = require('../styles/menubar.scss');

var _menubar2 = _interopRequireDefault(_menubar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\projects\\med\\components\\menubar.js';
exports.default = (0, _recompose.compose)(_router2.default, _link2.default, _oothClientReact.withUser)(function (_ref) {
  var Router = _ref.Router,
      Link = _ref.Link,
      user = _ref.user;
  return _react2.default.createElement('div', { className: 'root', 'data-jsx-ext': _menubar2.default.__scopedHash,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement('div', { className: 'logo-section', 'data-jsx-ext': _menubar2.default.__scopedHash,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement(Link, { prefetch: true, href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, _react2.default.createElement('div', { className: 'logo', 'data-jsx-ext': _menubar2.default.__scopedHash,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement('img', { src: '/static/MexicoEnDronLogo.png', 'data-jsx-ext': _menubar2.default.__scopedHash,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  })))), _react2.default.createElement('div', { className: 'search', 'data-jsx-ext': _menubar2.default.__scopedHash,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, _react2.default.createElement(_searchbar2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  })), _react2.default.createElement('div', { className: 'nav', 'data-jsx-ext': _menubar2.default.__scopedHash,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, _react2.default.createElement('button', { onClick: function onClick() {
      Router.push(user ? '/logout' : '/login');
    }, 'data-jsx-ext': _menubar2.default.__scopedHash,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, user ? "Cerrar Sesión" : "Iniciar Sesión")), _react2.default.createElement(_style2.default, {
    styleId: _menubar2.default.__scopedHash,
    css: _menubar2.default.__scoped
  }));
});