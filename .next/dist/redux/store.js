'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeStore = undefined;

var _redux = require('redux');

var _reduxDevtoolsExtension = require('redux-devtools-extension');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _filters = require('./filters');

var _filters2 = _interopRequireDefault(_filters);

var _users = require('./users');

var _users2 = _interopRequireDefault(_users);

var _videos = require('./videos');

var _videos2 = _interopRequireDefault(_videos);

var _s3videos = require('./s3videos');

var _s3videos2 = _interopRequireDefault(_s3videos);

var _roles = require('./roles');

var _roles2 = _interopRequireDefault(_roles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = (0, _redux.combineReducers)({
  filters: _filters2.default,
  videos: _videos2.default,
  s3videos: _s3videos2.default,
  users: _users2.default,
  roles: _roles2.default
});

var makeStore = exports.makeStore = function makeStore(initialState) {
  return (0, _redux.createStore)(reducer, initialState, (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxThunk2.default)));
};