'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ooth = require('./ooth');

var _ooth2 = _interopRequireDefault(_ooth);

var _next = require('./next');

var _next2 = _interopRequireDefault(_next);

var _recompose = require('recompose');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _recompose.compose)(_ooth2.default, _next2.default);