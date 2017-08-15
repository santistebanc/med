'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

exports.default = function (mapStateToProps, mapDispatchToProps) {
  return (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps);
};