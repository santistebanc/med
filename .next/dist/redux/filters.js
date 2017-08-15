'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initial = {
  durationFilter: { min: 0, max: 180 },
  priceFilter: { min: 0, max: 100 }
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial;
  var action = arguments[1];

  switch (action.type) {
    case 'CHANGE_DURATION_FILTER':
      return (0, _extends3.default)({}, state, { durationFilter: (0, _extends3.default)({}, action.payload) });
    case 'CHANGE_PRICE_FILTER':
      return (0, _extends3.default)({}, state, { priceFilter: (0, _extends3.default)({}, action.payload) });
    default:
      return state;
  }
};