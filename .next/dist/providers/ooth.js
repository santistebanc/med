'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _oothClient = require('ooth-client');

var _oothClient2 = _interopRequireDefault(_oothClient);

var _oothClientReactNext = require('ooth-client-react-next');

var _oothClientReactNext2 = _interopRequireDefault(_oothClientReactNext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var oothClient = new _oothClient2.default({
    oothUrl: '/auth'
});

exports.default = (0, _oothClientReactNext2.default)(oothClient);