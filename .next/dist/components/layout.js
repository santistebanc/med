'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _menubar = require('./menubar.js');

var _menubar2 = _interopRequireDefault(_menubar);

var _global = require('../styles/global.scss');

var _global2 = _interopRequireDefault(_global);

var _layout = require('../styles/layout.scss');

var _layout2 = _interopRequireDefault(_layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\projects\\med\\components\\layout.js';
// import Filters from './filters.js'


var menubarheight = 83;
var sidewidth = 200;

exports.default = function (props) {
    return _react2.default.createElement('div', { className: 'root', 'data-jsx-ext': _layout2.default.__scopedHash,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }, _react2.default.createElement(_head2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }, _react2.default.createElement('title', {
        'data-jsx-ext': _layout2.default.__scopedHash,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }, props.title), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width,initial-scale=1', 'data-jsx-ext': _layout2.default.__scopedHash,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }), _react2.default.createElement('link', { rel: 'shortcut icon', href: '/static/favicon.ico', type: 'image/x-icon', 'data-jsx-ext': _layout2.default.__scopedHash,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    })), _react2.default.createElement('div', { className: 'menu', 'data-jsx-ext': _layout2.default.__scopedHash,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 20
        }
    }, _react2.default.createElement(_menubar2.default, { user: props.user, __source: {
            fileName: _jsxFileName,
            lineNumber: 21
        }
    })), _react2.default.createElement('div', { className: "content" + (props.hideSide ? " withoutside" : ""), 'data-jsx-ext': _layout2.default.__scopedHash,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 28
        }
    }, props.children), _react2.default.createElement(_style2.default, {
        styleId: _global2.default.__hash,
        css: _global2.default
    }), _react2.default.createElement(_style2.default, {
        styleId: _layout2.default.__scopedHash,
        css: _layout2.default.__scoped
    }));
};