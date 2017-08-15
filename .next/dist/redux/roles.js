'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initial = { loading: false, list: [] };

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial;
  var action = arguments[1];

  switch (action.type) {
    case 'FETCHING_ROLES':
      return (0, _extends3.default)({}, state, { loading: true });
    case 'READY_ROLES':
      return (0, _extends3.default)({}, state, { loading: false, list: action.payload });
    default:
      return state;
  }
};