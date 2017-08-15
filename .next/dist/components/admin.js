'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _data = require('../hocs/data');

var _data2 = _interopRequireDefault(_data);

var _admin = require('../styles/admin.scss');

var _admin2 = _interopRequireDefault(_admin);

var _griddleReact = require('griddle-react');

var _griddleReact2 = _interopRequireDefault(_griddleReact);

var _actions = require('../redux/actions');

var _oothClientReact = require('ooth-client-react');

var _recompose = require('recompose');

var _reactTabs = require('react-tabs');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\projects\\med\\components\\admin.js';


var mapStateToProps = function mapStateToProps(_ref) {
  var videos = _ref.videos,
      s3videos = _ref.s3videos,
      users = _ref.users;
  return { videos: videos, s3videos: s3videos, users: users };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchUsers: function fetchUsers() {
      return dispatch((0, _actions.getUsers)());
    },
    fetchS3Videos: function fetchS3Videos() {
      return dispatch((0, _actions.getS3Videos)());
    },
    fetchVideos: function fetchVideos() {
      return dispatch((0, _actions.getVideos)());
    },
    addVideo: function addVideo(video, pos) {
      return dispatch((0, _actions.createVideo)(video, pos));
    },
    removeVideo: function removeVideo(_id) {
      return dispatch((0, _actions.deleteVideo)(_id));
    }
  };
};

exports.default = (0, _recompose.compose)(_oothClientReact.withUser, (0, _data2.default)(mapStateToProps, mapDispatchToProps))(function (_Component) {
  (0, _inherits3.default)(Admin, _Component);

  function Admin() {
    var _ref2;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Admin);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref2 = Admin.__proto__ || (0, _getPrototypeOf2.default)(Admin)).call.apply(_ref2, [this].concat(args))), _this), _this.state = { tabIndex: 0, videos: _this.props.videos.list }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Admin, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.user) {
        this.props.fetchUsers();
        this.refreshVideos();
      }
    }
  }, {
    key: 'refreshVideos',
    value: function refreshVideos() {
      this.props.fetchS3Videos();
      this.props.fetchVideos();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      console.log("new videos ", nextProps.videos);
      if (nextProps.s3videos && !nextProps.s3videos.loading && nextProps.videos && !nextProps.videos.loading) {
        console.log("new videos inside");
        var union = [].concat((0, _toConsumableArray3.default)(nextProps.videos.list));
        nextProps.s3videos.list.forEach(function (v) {
          var idx = union.findIndex(function (u) {
            return u.thumbpath == v.thumbpath;
          });
          if (idx == -1) {
            var vid = (0, _extends3.default)({}, v);
            vid.notinDB = true;
            union.unshift(vid);
          }
        });
        this.setState({ videos: union });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('div', { className: 'root', 'data-jsx-ext': _admin2.default.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, !this.props.user ? _react2.default.createElement('p', {
        'data-jsx-ext': _admin2.default.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, 'Tienes que tener privilegios de administrador para accesar esta p\xE1gina') : _react2.default.createElement(_reactTabs.Tabs, { selectedIndex: this.state.tabIndex, onSelect: function onSelect(tabIndex) {
          return _this2.setState({ tabIndex: tabIndex });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement(_reactTabs.TabList, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react2.default.createElement(_reactTabs.Tab, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, 'Users'), _react2.default.createElement(_reactTabs.Tab, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, 'Videos')), _react2.default.createElement(_reactTabs.TabPanel, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement('h3', {
        'data-jsx-ext': _admin2.default.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, 'Users'), this.props.users.loading ? _react2.default.createElement('div', {
        'data-jsx-ext': _admin2.default.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, 'Loading...') : _react2.default.createElement('div', {
        'data-jsx-ext': _admin2.default.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement('button', { onClick: function onClick() {
          _this2.props.fetchUsers();
        }, 'data-jsx-ext': _admin2.default.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, 'Update'), _react2.default.createElement(_griddleReact2.default, { data: this.props.users.list.map(function (u) {
          return u.local;
        }), plugins: [_griddleReact.plugins.LocalPlugin], __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement(_griddleReact.RowDefinition, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, _react2.default.createElement(_griddleReact.ColumnDefinition, {
        id: 'email',
        title: 'Correo Electr\xF3nico',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }))))), _react2.default.createElement(_reactTabs.TabPanel, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react2.default.createElement('h3', {
        'data-jsx-ext': _admin2.default.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, 'Videos'), this.state.videos.loading && _react2.default.createElement('div', {
        'data-jsx-ext': _admin2.default.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, 'Loading...'), _react2.default.createElement('div', {
        'data-jsx-ext': _admin2.default.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, _react2.default.createElement('button', { onClick: function onClick() {
          _this2.refreshVideos();
        }, 'data-jsx-ext': _admin2.default.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, 'Update'), _react2.default.createElement(_griddleReact2.default, { data: this.state.videos, plugins: [_griddleReact.plugins.LocalPlugin], __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, _react2.default.createElement(_griddleReact.RowDefinition, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, _react2.default.createElement(_griddleReact.ColumnDefinition, {
        id: 'posterpath',
        title: 'Poster',
        customComponent: function customComponent(_ref3) {
          var value = _ref3.value;

          return _react2.default.createElement('div', { style: { height: 100 }, title: value, 'data-jsx-ext': _admin2.default.__scopedHash,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 100
            }
          }, _react2.default.createElement('a', { href: value, target: '_blank', 'data-jsx-ext': _admin2.default.__scopedHash,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 101
            }
          }, _react2.default.createElement('img', { style: { maxWidth: "100%", maxHeight: "100%", display: "block" }, src: value, 'data-jsx-ext': _admin2.default.__scopedHash,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 101
            }
          })));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }), _react2.default.createElement(_griddleReact.ColumnDefinition, {
        id: '_id',
        title: 'Id',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }), _react2.default.createElement(_griddleReact.ColumnDefinition, {
        id: 'title',
        title: 'Title',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }), _react2.default.createElement(_griddleReact.ColumnDefinition, {
        id: 'dateCreated',
        title: 'DateSavedToDB',
        customComponent: function customComponent(_ref4) {
          var griddleKey = _ref4.griddleKey,
              value = _ref4.value;

          return _react2.default.createElement('div', {
            'data-jsx-ext': _admin2.default.__scopedHash,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 117
            }
          }, (0, _moment2.default)(new Date(parseInt(value))).format("DD-MMM-YYYY, hh:mm:ss"));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }), _react2.default.createElement(_griddleReact.ColumnDefinition, {
        id: 'tags',
        title: 'Tags',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }), _react2.default.createElement(_griddleReact.ColumnDefinition, {
        id: 'actions',
        title: 'Actions',
        customComponent: function customComponent(_ref5) {
          var griddleKey = _ref5.griddleKey;

          return _react2.default.createElement('div', {
            'data-jsx-ext': _admin2.default.__scopedHash,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 130
            }
          }, _this2.state.videos[griddleKey].notinDB && _react2.default.createElement('button', { onClick: function onClick() {
              delete _this2.state.videos[griddleKey].notinDB;
              _this2.props.addVideo(_this2.state.videos[griddleKey], griddleKey);
            }, 'data-jsx-ext': _admin2.default.__scopedHash,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 131
            }
          }, 'Add to DB'), !_this2.state.videos[griddleKey].notinDB && _react2.default.createElement('button', { onClick: function onClick() {
              _this2.props.removeVideo(_this2.state.videos[griddleKey]._id);
            }, 'data-jsx-ext': _admin2.default.__scopedHash,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 135
            }
          }, 'Delete'));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }))), ' '))), _react2.default.createElement(_style2.default, {
        styleId: _admin2.default.__scopedHash,
        css: _admin2.default.__scoped
      }));
    }
  }]);

  return Admin;
}(_react.Component));