webpackHotUpdate(5,{

/***/ 895:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(95);

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = __webpack_require__(97);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getPrototypeOf = __webpack_require__(36);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(39);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(38);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(559);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _data = __webpack_require__(737);

var _data2 = _interopRequireDefault(_data);

var _admin = __webpack_require__(888);

var _admin2 = _interopRequireDefault(_admin);

var _griddleReact = __webpack_require__(798);

var _griddleReact2 = _interopRequireDefault(_griddleReact);

var _actions = __webpack_require__(908);

var _oothClientReact = __webpack_require__(586);

var _recompose = __webpack_require__(549);

var _reactTabs = __webpack_require__(942);

var _moment = __webpack_require__(540);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\projects\\med\\components\\admin.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\projects\\med\\components\\admin.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS45MzUwOTcyMGVjMTVhZGFlNmJjNC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hZG1pbi5qcz80ZDc0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHdpdGhEYXRhIGZyb20gJy4uL2hvY3MvZGF0YSdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvYWRtaW4uc2NzcydcclxuaW1wb3J0IEdyaWRkbGUsIHsgcGx1Z2lucywgUm93RGVmaW5pdGlvbiwgQ29sdW1uRGVmaW5pdGlvbiB9IGZyb20gJ2dyaWRkbGUtcmVhY3QnO1xyXG5pbXBvcnQgeyBnZXRVc2VycywgZ2V0UzNWaWRlb3MsIGdldFZpZGVvcywgY3JlYXRlVmlkZW8sIGRlbGV0ZVZpZGVvIH0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucydcclxuaW1wb3J0IHsgd2l0aFVzZXIgfSBmcm9tICdvb3RoLWNsaWVudC1yZWFjdCdcclxuaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gJ3JlY29tcG9zZSdcclxuaW1wb3J0IHsgVGFiLCBUYWJzLCBUYWJMaXN0LCBUYWJQYW5lbCB9IGZyb20gJ3JlYWN0LXRhYnMnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IHZpZGVvcywgczN2aWRlb3MsIHVzZXJzIH0pID0+ICh7IHZpZGVvcywgczN2aWRlb3MsIHVzZXJzIH0pXHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgZmV0Y2hVc2VyczogKCkgPT4ge1xyXG4gICAgcmV0dXJuIGRpc3BhdGNoKGdldFVzZXJzKCkpXHJcbiAgfSxcclxuICBmZXRjaFMzVmlkZW9zOiAoKSA9PiB7XHJcbiAgICByZXR1cm4gZGlzcGF0Y2goZ2V0UzNWaWRlb3MoKSlcclxuICB9LFxyXG4gIGZldGNoVmlkZW9zOiAoKSA9PiB7XHJcbiAgICByZXR1cm4gZGlzcGF0Y2goZ2V0VmlkZW9zKCkpXHJcbiAgfSxcclxuICBhZGRWaWRlbzogKHZpZGVvLCBwb3MpID0+IHtcclxuICAgIHJldHVybiBkaXNwYXRjaChjcmVhdGVWaWRlbyh2aWRlbywgcG9zKSlcclxuICB9LFxyXG4gIHJlbW92ZVZpZGVvOiAoX2lkKSA9PiB7XHJcbiAgICByZXR1cm4gZGlzcGF0Y2goZGVsZXRlVmlkZW8oX2lkKSlcclxuICB9XHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxyXG4gIHdpdGhVc2VyLFxyXG4gIHdpdGhEYXRhKG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKSxcclxuKVxyXG4gIChjbGFzcyBBZG1pbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0ZSA9IHsgdGFiSW5kZXg6IDAsIHZpZGVvczogdGhpcy5wcm9wcy52aWRlb3MubGlzdCB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgIGlmICh0aGlzLnByb3BzLnVzZXIpIHtcclxuICAgICAgICB0aGlzLnByb3BzLmZldGNoVXNlcnMoKTtcclxuICAgICAgICB0aGlzLnJlZnJlc2hWaWRlb3MoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVmcmVzaFZpZGVvcygpIHtcclxuICAgICAgdGhpcy5wcm9wcy5mZXRjaFMzVmlkZW9zKCk7XHJcbiAgICAgIHRoaXMucHJvcHMuZmV0Y2hWaWRlb3MoKTtcclxuICAgIH1cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwibmV3IHZpZGVvcyBcIiwgbmV4dFByb3BzLnZpZGVvcylcclxuICAgICAgaWYgKG5leHRQcm9wcy5zM3ZpZGVvcyAmJiAhbmV4dFByb3BzLnMzdmlkZW9zLmxvYWRpbmcgJiYgbmV4dFByb3BzLnZpZGVvcyAmJiAhbmV4dFByb3BzLnZpZGVvcy5sb2FkaW5nKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJuZXcgdmlkZW9zIGluc2lkZVwiKVxyXG4gICAgICAgIGNvbnN0IHVuaW9uID0gWy4uLm5leHRQcm9wcy52aWRlb3MubGlzdF07XHJcbiAgICAgICAgbmV4dFByb3BzLnMzdmlkZW9zLmxpc3QuZm9yRWFjaCh2ID0+IHtcclxuICAgICAgICAgIGNvbnN0IGlkeCA9IHVuaW9uLmZpbmRJbmRleCh1ID0+IHUudGh1bWJwYXRoID09IHYudGh1bWJwYXRoKVxyXG4gICAgICAgICAgaWYgKGlkeCA9PSAtMSkge1xyXG4gICAgICAgICAgICBjb25zdCB2aWQgPSB7IC4uLnYgfTtcclxuICAgICAgICAgICAgdmlkLm5vdGluREIgPSB0cnVlO1xyXG4gICAgICAgICAgICB1bmlvbi51bnNoaWZ0KHZpZClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2aWRlb3M6IHVuaW9uIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgICAgIHshdGhpcy5wcm9wcy51c2VyID8gPHA+VGllbmVzIHF1ZSB0ZW5lciBwcml2aWxlZ2lvcyBkZSBhZG1pbmlzdHJhZG9yIHBhcmEgYWNjZXNhciBlc3RhIHDDoWdpbmE8L3A+IDpcclxuICAgICAgICAgICAgPFRhYnMgc2VsZWN0ZWRJbmRleD17dGhpcy5zdGF0ZS50YWJJbmRleH0gb25TZWxlY3Q9e3RhYkluZGV4ID0+IHRoaXMuc2V0U3RhdGUoeyB0YWJJbmRleCB9KX0+XHJcbiAgICAgICAgICAgICAgPFRhYkxpc3Q+XHJcbiAgICAgICAgICAgICAgICA8VGFiPlVzZXJzPC9UYWI+XHJcbiAgICAgICAgICAgICAgICA8VGFiPlZpZGVvczwvVGFiPlxyXG4gICAgICAgICAgICAgIDwvVGFiTGlzdD5cclxuXHJcbiAgICAgICAgICAgICAgPFRhYlBhbmVsPlxyXG4gICAgICAgICAgICAgICAgPGgzPlVzZXJzPC9oMz5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnVzZXJzLmxvYWRpbmcgPyA8ZGl2PkxvYWRpbmcuLi48L2Rpdj4gOlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4geyB0aGlzLnByb3BzLmZldGNoVXNlcnMoKSB9fT5VcGRhdGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZGRsZSBkYXRhPXt0aGlzLnByb3BzLnVzZXJzLmxpc3QubWFwKHUgPT4gdS5sb2NhbCl9IHBsdWdpbnM9e1twbHVnaW5zLkxvY2FsUGx1Z2luXX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFJvd0RlZmluaXRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2x1bW5EZWZpbml0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJDb3JyZW8gRWxlY3Ryw7NuaWNvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvUm93RGVmaW5pdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRkbGU+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICAgICAgICAgIDxUYWJQYW5lbD5cclxuICAgICAgICAgICAgICAgIDxoMz5WaWRlb3M8L2gzPlxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUudmlkZW9zLmxvYWRpbmcgJiYgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7IHRoaXMucmVmcmVzaFZpZGVvcygpIH19PlVwZGF0ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZGRsZSBkYXRhPXt0aGlzLnN0YXRlLnZpZGVvc30gcGx1Z2lucz17W3BsdWdpbnMuTG9jYWxQbHVnaW5dfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvd0RlZmluaXRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q29sdW1uRGVmaW5pdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBvc3RlcnBhdGhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlBvc3RlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUNvbXBvbmVudD17KHsgdmFsdWUgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IHN0eWxlPXt7IGhlaWdodDogMTAwIH19IHRpdGxlPXt2YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXt2YWx1ZX0gdGFyZ2V0PVwiX2JsYW5rXCI+PGltZyBzdHlsZT17eyBtYXhXaWR0aDogXCIxMDAlXCIsIG1heEhlaWdodDogXCIxMDAlXCIsIGRpc3BsYXk6IFwiYmxvY2tcIiB9fSBzcmM9e3ZhbHVlfSAvPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q29sdW1uRGVmaW5pdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cIl9pZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiSWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDb2x1bW5EZWZpbml0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q29sdW1uRGVmaW5pdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImRhdGVDcmVhdGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJEYXRlU2F2ZWRUb0RCXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ29tcG9uZW50PXsoeyBncmlkZGxlS2V5LCB2YWx1ZSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bW9tZW50KG5ldyBEYXRlKHBhcnNlSW50KHZhbHVlKSkpLmZvcm1hdChcIkRELU1NTS1ZWVlZLCBoaDptbTpzc1wiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q29sdW1uRGVmaW5pdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRhZ3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlRhZ3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDb2x1bW5EZWZpbml0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYWN0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQWN0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUNvbXBvbmVudD17KHsgZ3JpZGRsZUtleSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS52aWRlb3NbZ3JpZGRsZUtleV0ubm90aW5EQiAmJiA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuc3RhdGUudmlkZW9zW2dyaWRkbGVLZXldLm5vdGluREI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWRkVmlkZW8odGhpcy5zdGF0ZS52aWRlb3NbZ3JpZGRsZUtleV0sIGdyaWRkbGVLZXkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5BZGQgdG8gREI8L2J1dHRvbj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IXRoaXMuc3RhdGUudmlkZW9zW2dyaWRkbGVLZXldLm5vdGluREIgJiYgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucmVtb3ZlVmlkZW8odGhpcy5zdGF0ZS52aWRlb3NbZ3JpZGRsZUtleV0uX2lkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+RGVsZXRlPC9idXR0b24+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1Jvd0RlZmluaXRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZGRsZT4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIDxzdHlsZSBqc3g+e3N0eWxlc308L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgfVxyXG4gIClcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2FkbWluLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQWRBO0FBQ0E7QUFpQkE7QUFDQTtBQUFBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUxBO0FBQ0E7O0FBREE7QUFRQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBWkE7QUFBQTtBQUFBO0FBY0E7QUFBQTtBQUNBO0FBZkE7QUFBQTtBQUFBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFoQ0E7QUFBQTtBQUFBO0FBaUNBO0FBQ0E7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBR0E7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFBQTs7QUFGQTtBQVFBO0FBUkE7QUFDQTs7QUFPQTtBQUNBO0FBREE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUVBO0FBRkE7O0FBTEE7O0FBQUE7QUFTQTtBQVRBO0FBQ0E7QUFVQTtBQUFBOztBQUZBO0FBSUE7QUFKQTtBQUNBO0FBS0E7QUFBQTs7QUFGQTtBQUlBO0FBSkE7QUFDQTtBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFKQTs7QUFBQTtBQVNBO0FBVEE7QUFDQTtBQVVBO0FBQUE7O0FBRkE7QUFJQTtBQUpBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBQ0E7QUFGQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBREE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFUQTs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQTdEQTtBQW9GQTtBQXBGQTtBQW5DQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=