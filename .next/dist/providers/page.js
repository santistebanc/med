'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _ooth = require('./ooth');

var _ooth2 = _interopRequireDefault(_ooth);

var _next = require('./next');

var _next2 = _interopRequireDefault(_next);

var _recompose = require('recompose');

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _store = require('../redux/store.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _recompose.compose)((0, _nextReduxWrapper2.default)(_store.makeStore, function (state) {
    return (0, _extends3.default)({}, state);
}), _ooth2.default, _next2.default);