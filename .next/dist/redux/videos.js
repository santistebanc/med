'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initial = { loading: false, list: [] };
var newlist = [];
var idx = 0;

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial;
  var action = arguments[1];

  switch (action.type) {
    case 'FETCHING_VIDEOS':
      return (0, _extends3.default)({}, state, { loading: true });
    case 'READY_VIDEOS':
      return (0, _extends3.default)({}, state, { loading: false, list: action.payload });
    case 'FETCHING_CREATE_VIDEO':
      return (0, _extends3.default)({}, state, { loading: true });
    case 'READY_CREATE_VIDEO':
      newlist = [].concat((0, _toConsumableArray3.default)(state.list));
      if (action.pos < newlist.length) newlist.splice(action.pos, 0, action.payload);else newlist.unshift(action.payload);
      return (0, _extends3.default)({}, state, { loading: false, list: newlist });
    case 'ERROR_CREATE_VIDEO':
      return (0, _extends3.default)({}, state, { loading: false });
    case 'FETCHING_DELETE_VIDEO':
      return (0, _extends3.default)({}, state, { loading: true });
    case 'READY_DELETE_VIDEO':
      newlist = [].concat((0, _toConsumableArray3.default)(state.list));
      idx = newlist.findIndex(function (v) {
        return v._id == action.payload._id;
      });
      if (idx > -1) newlist.splice(idx, 1);
      return (0, _extends3.default)({}, state, { loading: false, list: newlist });
    case 'ERROR_DELETE_VIDEO':
      return (0, _extends3.default)({}, state, { loading: false });
    default:
      return state;
  }
};