
          window.__NEXT_REGISTER_PAGE('/admin', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 737:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(541);

exports.default = function (mapStateToProps, mapDispatchToProps) {
  return (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps);
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\projects\\med\\hocs\\data.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\projects\\med\\hocs\\data.js"); } } })();

/***/ }),

/***/ 755:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _layout = __webpack_require__(898);

var _layout2 = _interopRequireDefault(_layout);

var _page = __webpack_require__(907);

var _page2 = _interopRequireDefault(_page);

var _admin = __webpack_require__(895);

var _admin2 = _interopRequireDefault(_admin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\projects\\med\\pages\\admin.js?entry';
exports.default = (0, _page2.default)(function () {
  return _react2.default.createElement(_layout2.default, { title: 'Admin', page: 'admin', hideSide: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement('div', { className: 'container', __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement(_admin2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  })));
});

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\projects\\med\\pages\\admin.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\projects\\med\\pages\\admin.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/admin")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 887:
/***/ (function(module, exports) {

;

(function () {
  "use strict";

  var __styledJsxDefaultExport = new String(".root{padding:4px;display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.section{-webkit-box-flex:1;-ms-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;padding:8px}h3{margin:4px 0}@media (max-width:550px){.root{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlc1xcRmlsdGVycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLEFBRWUsQUFFTyxBQUVOLEFBR21CLGFBUEcsQ0FJckIsTUFGdUIsV0FLNkIsQ0FMWCxFQUZHLHFCQUFnQixNQU93QixPQUw1QixhQUFDLElBSzJELGdEQVB6Qix3QkFPMEIsS0FQTSw4QkFBaUMsMkJBQWlDLGlGQUFzQixvQkFBc0IsNERBQUMiLCJmaWxlIjoic3R5bGVzXFxGaWx0ZXJzLnNjc3MiLCJzb3VyY2VSb290IjoiQzovcHJvamVjdHMvbWVkIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi5yb290IHtcXG4gIHBhZGRpbmc6IDRweDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7IH1cXG5cXG4uc2VjdGlvbiB7XFxuICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgICAgIC1tcy1mbGV4OiAxO1xcbiAgICAgICAgICBmbGV4OiAxO1xcbiAgcGFkZGluZzogOHB4OyB9XFxuXFxuaDMge1xcbiAgbWFyZ2luOiA0cHggMDsgfVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NTBweCkge1xcbiAgLnJvb3Qge1xcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XFxuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdzsgfSB9XFxuXCIiXX0= */\n/*@ sourceURL=styles\\Filters.scss */");

  __styledJsxDefaultExport.__hash = "13717196036";
  __styledJsxDefaultExport.__scoped = ".root[data-jsx-ext~=\"23717196036\"]{padding:4px;display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.section[data-jsx-ext~=\"23717196036\"]{-webkit-box-flex:1;-ms-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;padding:8px}h3[data-jsx-ext~=\"23717196036\"]{margin:4px 0}@media (max-width:550px){.root[data-jsx-ext~=\"23717196036\"]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlc1xcRmlsdGVycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLEFBRWUsQUFFTyxBQUVOLEFBR21CLGFBUEcsQ0FJckIsTUFGdUIsV0FLNkIsQ0FMWCxFQUZHLHFCQUFnQixNQU93QixPQUw1QixhQUFDLElBSzJELGdEQVB6Qix3QkFPMEIsS0FQTSw4QkFBaUMsMkJBQWlDLGlGQUFzQixvQkFBc0IsNERBQUMiLCJmaWxlIjoic3R5bGVzXFxGaWx0ZXJzLnNjc3MiLCJzb3VyY2VSb290IjoiQzovcHJvamVjdHMvbWVkIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi5yb290IHtcXG4gIHBhZGRpbmc6IDRweDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7IH1cXG5cXG4uc2VjdGlvbiB7XFxuICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgICAgIC1tcy1mbGV4OiAxO1xcbiAgICAgICAgICBmbGV4OiAxO1xcbiAgcGFkZGluZzogOHB4OyB9XFxuXFxuaDMge1xcbiAgbWFyZ2luOiA0cHggMDsgfVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NTBweCkge1xcbiAgLnJvb3Qge1xcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XFxuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdzsgfSB9XFxuXCIiXX0= */\n/*@ sourceURL=styles\\Filters.scss */";
  __styledJsxDefaultExport.__scopedHash = "23717196036";
  module.exports = __styledJsxDefaultExport;
})();

/***/ }),

/***/ 888:
/***/ (function(module, exports) {

;

(function () {
  "use strict";

  var __styledJsxDefaultExport = new String(".root{display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:8px 8px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlc1xcYWRtaW4uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxBQUV1QixxQkFBdUIscUJBQWdCLDhFQUFrQixnQkFBQyIsImZpbGUiOiJzdHlsZXNcXGFkbWluLnNjc3MiLCJzb3VyY2VSb290IjoiQzovcHJvamVjdHMvbWVkIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi5yb290IHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiA4cHggOHB4OyB9XFxuXCIiXX0= */\n/*@ sourceURL=styles\\admin.scss */");

  __styledJsxDefaultExport.__hash = "1789345821";
  __styledJsxDefaultExport.__scoped = ".root[data-jsx-ext~=\"2789345821\"]{display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:8px 8px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlc1xcYWRtaW4uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxBQUV1QixxQkFBdUIscUJBQWdCLDhFQUFrQixnQkFBQyIsImZpbGUiOiJzdHlsZXNcXGFkbWluLnNjc3MiLCJzb3VyY2VSb290IjoiQzovcHJvamVjdHMvbWVkIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi5yb290IHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiA4cHggOHB4OyB9XFxuXCIiXX0= */\n/*@ sourceURL=styles\\admin.scss */";
  __styledJsxDefaultExport.__scopedHash = "2789345821";
  module.exports = __styledJsxDefaultExport;
})();

/***/ }),

/***/ 889:
/***/ (function(module, exports) {

;

(function () {
  "use strict";

  var __styledJsxDefaultExport = new String("@import url(\"https://fonts.googleapis.com/css?family=Roboto\");@import url(\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\");.react-tabs__tab-list{border-bottom:1px solid #aaa;margin:0 0 10px;padding:0}.react-tabs__tab{display:inline-block;border:1px solid transparent;border-bottom:none;bottom:-1px;position:relative;list-style:none;padding:6px 12px;cursor:pointer}.react-tabs__tab--selected{background:#fff;border-color:#aaa;color:black;border-radius:5px 5px 0 0}.react-tabs__tab:focus{-webkit-box-shadow:0 0 5px #0188fe;box-shadow:0 0 5px #0188fe;border-color:#0188fe;outline:none}.react-tabs__tab:focus:after{content:\"\";position:absolute;height:5px;left:-4px;right:-4px;bottom:-5px;background:#fff}.react-tabs__tab-panel{display:none}.react-tabs__tab-panel--selected{display:block}.react-tabs__tab-panel--disabled{color:GrayText;cursor:default}body{font-family:\"Roboto\";margin:0;background-color:#f2f2f2}*:focus{outline-width:0}.container{width:100%}button,input[type=\"submit\"]{border:none;color:white;cursor:pointer;padding:8px;background-color:gray}input[type=\"text\"],input[type=\"password\"],input[type=\"email\"]{padding:4px 8px;width:150px}table{border-collapse:collapse;table-layout:fixed;width:100%}table td{word-wrap:break-word}th,td{border-bottom:1px solid #ccc;-webkit-text-align:left;text-align:left}tr:hover{background-color:#ddd}.griddle-settings{padding:8px;border:1px solid #aaa;margin-bottom:8px}.griddle-settings-toggle{margin-bottom:8px}.input-range__slider{background:#ccc;border:1px solid #777;height:1rem;width:0.5rem;margin-left:-0.25rem;margin-top:-0.65rem;top:50%;cursor:pointer;outline:none;position:absolute;display:block}.input-range__slider:active{background:#aaa}.input-range--disabled .input-range__slider{background:#eee;border:1px solid #ccc}.input-range__slider-container{-webkit-transition:left 0.05s ease-out;-webkit-transition:left 0.05s ease-out;transition:left 0.05s ease-out}.input-range__label{color:#333;font-size:0.8rem;-webkit-transform:translateZ(0);-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);white-space:nowrap}.input-range__label--min,.input-range__label--max{display:none}.input-range__label--min{left:0}.input-range__label--max{right:0}.input-range__label--value{position:absolute;top:-1.8rem}.input-range__label-container{left:-50%;position:relative}.input-range__label--max .input-range__label-container{left:50%}.input-range__track{background:#ccc;cursor:pointer;display:block;height:0.3rem;position:relative;-webkit-transition:left 0.05s ease-out, width 0.05s ease-out;-webkit-transition:left 0.05s ease-out, width 0.05s ease-out;transition:left 0.05s ease-out, width 0.05s ease-out}.input-range--disabled .input-range__track{background:#eee}.input-range__track--background{left:8px;margin-top:-0.15rem;position:absolute;right:10px;top:50%}.input-range__track--active{background:#ea1c28}.green .input-range__track--active{background:#87c436}.input-range{height:1rem;position:relative;width:100%;margin:24px 0 14px 0}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlc1xcZ2xvYmFsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsQUFDOEQsQUFBMkYsQUFDekgsQUFDUixBQUNILEFBQ21CLEFBQ3RCLEFBQ0YsQUFDRyxBQUNDLEFBQ0ksQUFDTCxBQUNMLEFBRUMsQUFHSSxBQUNTLEFBQ0osQUFFUSxBQUNQLEFBQ1YsQUFDTSxBQUNGLEFBQ0EsQUFDQSxBQUN1QixBQUM1QixBQUVFLEFBQ04sQUFDQyxBQUNVLEFBQ1IsQUFDRCxBQUNPLEFBQ0EsQUFDUCxBQUNVLEFBQ0EsQUFDUCxRQVZKLENBQ0MsQ0FHQyxBQUdzQixDQUpELENBN0JTLEFBTTVCLEFBaUJtQixDQWZKLEFBU1UsQUFtQkosQ0FuQ25CLEFBd0JBLENBdkJHLENBQ29CLENBTEksQUFPeEIsQUFNYyxBQVFVLEFBQ3hCLEFBQ3dCLEFBVVAsQUFDakIsRUFkRSxBQVVjLENBTWIsQUFDQSxFQXRDaUMsQUFPcEIsQUFTWCxDQUdDLEdBUnNCLEFBSUUsSUFoQkMsQUFlaEIsQUFJZ0IsQUFRa0IsQUFNbEMsQ0E3QjBCLEFBaUNMLENBOUJmLEFBQ3VCLEFBd0IzQixBQVFhLENBTEksR0FqQ08sQUFDbUIsQUFrQm5CLElBRUYsQUFFZCxBQUMrQixFQWRiLENBUmUsQ0FvQ0osRUF4QlYsQ0FoQkEsQ0FtQ08sQ0FqQ3FCLENBbUN0QixFQXBDUSxDQXNCSCxDQW5CcUIsQ0FRUixBQVMxQixHQXJCRyxBQVFBLEFBUUEsSUFxQmdCLENBVnVCLEFBUVosQ0FoQ2MsRUFDUyxBQW9DeEMsQ0FqQndCLElBY2pCLENBcENXLEFBa0J6QyxJQWpCeUMsRUFVSixDQVJpRCxHQStCa0IsR0FsQzFDLENBRVUsR0FvQkYsT0FuQmlCLElBRGQsSUFGUSxNQXNCQSxFQUd4RCxPQUgwRSxFQXRCRSxjQXNCYyxJQXRCSSxLQWtDeUMsS0FaeEIsQ0FJOUQsS0ExQjhDLGFBc0JpQyxFQUk5RSxhQUorRSw2RUFZTyIsImZpbGUiOiJzdHlsZXNcXGdsb2JhbC5zY3NzIiwic291cmNlUm9vdCI6IkM6L3Byb2plY3RzL21lZCIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90b1xcXCIpO1xcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcXFwiKTtcXG4ucmVhY3QtdGFic19fdGFiLWxpc3Qge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhYWE7XFxuICBtYXJnaW46IDAgMCAxMHB4O1xcbiAgcGFkZGluZzogMDsgfVxcbi5yZWFjdC10YWJzX190YWIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgYm90dG9tOiAtMXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDZweCAxMnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuLnJlYWN0LXRhYnNfX3RhYi0tc2VsZWN0ZWQge1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBib3JkZXItY29sb3I6ICNhYWE7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7IH1cXG4ucmVhY3QtdGFic19fdGFiOmZvY3VzIHtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgNXB4ICMwMTg4ZmU7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDVweCAjMDE4OGZlO1xcbiAgICBib3JkZXItY29sb3I6ICMwMTg4ZmU7XFxuICAgIG91dGxpbmU6IG5vbmU7IH1cXG4ucmVhY3QtdGFic19fdGFiOmZvY3VzOmFmdGVyIHtcXG4gICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgaGVpZ2h0OiA1cHg7XFxuICAgICAgbGVmdDogLTRweDtcXG4gICAgICByaWdodDogLTRweDtcXG4gICAgICBib3R0b206IC01cHg7XFxuICAgICAgYmFja2dyb3VuZDogI2ZmZjsgfVxcbi5yZWFjdC10YWJzX190YWItcGFuZWwge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcbi5yZWFjdC10YWJzX190YWItcGFuZWwtLXNlbGVjdGVkIHtcXG4gICAgZGlzcGxheTogYmxvY2s7IH1cXG4ucmVhY3QtdGFic19fdGFiLXBhbmVsLS1kaXNhYmxlZCB7XFxuICAgIGNvbG9yOiBHcmF5VGV4dDtcXG4gICAgY3Vyc29yOiBkZWZhdWx0OyB9XFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCI7XFxuICBtYXJnaW46IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyOyB9XFxuKjpmb2N1cyB7XFxuICBvdXRsaW5lLXdpZHRoOiAwOyB9XFxuLmNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTsgfVxcbmJ1dHRvbixcXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5OyB9XFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInBhc3N3b3JkXFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwiZW1haWxcXFwiXSB7XFxuICBwYWRkaW5nOiA0cHggOHB4O1xcbiAgd2lkdGg6IDE1MHB4OyB9XFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTsgfVxcbnRhYmxlIHRkIHtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDsgfVxcbnRoLFxcbnRkIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xcbiAgdGV4dC1hbGlnbjogbGVmdDsgfVxcbnRyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7IH1cXG4uZ3JpZGRsZS1zZXR0aW5ncyB7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4OyB9XFxuLmdyaWRkbGUtc2V0dGluZ3MtdG9nZ2xlIHtcXG4gIG1hcmdpbi1ib3R0b206IDhweDsgfVxcbi5pbnB1dC1yYW5nZV9fc2xpZGVyIHtcXG4gIGJhY2tncm91bmQ6ICNjY2M7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNzc3O1xcbiAgaGVpZ2h0OiAxcmVtO1xcbiAgd2lkdGg6IDAuNXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAtMC4yNXJlbTtcXG4gIG1hcmdpbi10b3A6IC0wLjY1cmVtO1xcbiAgdG9wOiA1MCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogYmxvY2s7IH1cXG4uaW5wdXQtcmFuZ2VfX3NsaWRlcjphY3RpdmUge1xcbiAgYmFja2dyb3VuZDogI2FhYTsgfVxcbi5pbnB1dC1yYW5nZS0tZGlzYWJsZWQgLmlucHV0LXJhbmdlX19zbGlkZXIge1xcbiAgYmFja2dyb3VuZDogI2VlZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7IH1cXG4uaW5wdXQtcmFuZ2VfX3NsaWRlci1jb250YWluZXIge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBsZWZ0IDAuMDVzIGVhc2Utb3V0O1xcbiAgdHJhbnNpdGlvbjogbGVmdCAwLjA1cyBlYXNlLW91dDsgfVxcbi5pbnB1dC1yYW5nZV9fbGFiZWwge1xcbiAgY29sb3I6ICMzMzM7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XFxuLmlucHV0LXJhbmdlX19sYWJlbC0tbWluLFxcbi5pbnB1dC1yYW5nZV9fbGFiZWwtLW1heCB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuLmlucHV0LXJhbmdlX19sYWJlbC0tbWluIHtcXG4gIGxlZnQ6IDA7IH1cXG4uaW5wdXQtcmFuZ2VfX2xhYmVsLS1tYXgge1xcbiAgcmlnaHQ6IDA7IH1cXG4uaW5wdXQtcmFuZ2VfX2xhYmVsLS12YWx1ZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0xLjhyZW07IH1cXG4uaW5wdXQtcmFuZ2VfX2xhYmVsLWNvbnRhaW5lciB7XFxuICBsZWZ0OiAtNTAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuLmlucHV0LXJhbmdlX19sYWJlbC0tbWF4IC5pbnB1dC1yYW5nZV9fbGFiZWwtY29udGFpbmVyIHtcXG4gIGxlZnQ6IDUwJTsgfVxcbi5pbnB1dC1yYW5nZV9fdHJhY2sge1xcbiAgYmFja2dyb3VuZDogI2NjYztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAwLjNyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGxlZnQgMC4wNXMgZWFzZS1vdXQsIHdpZHRoIDAuMDVzIGVhc2Utb3V0O1xcbiAgdHJhbnNpdGlvbjogbGVmdCAwLjA1cyBlYXNlLW91dCwgd2lkdGggMC4wNXMgZWFzZS1vdXQ7IH1cXG4uaW5wdXQtcmFuZ2UtLWRpc2FibGVkIC5pbnB1dC1yYW5nZV9fdHJhY2sge1xcbiAgYmFja2dyb3VuZDogI2VlZTsgfVxcbi5pbnB1dC1yYW5nZV9fdHJhY2stLWJhY2tncm91bmQge1xcbiAgbGVmdDogOHB4O1xcbiAgbWFyZ2luLXRvcDogLTAuMTVyZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMTBweDtcXG4gIHRvcDogNTAlOyB9XFxuLmlucHV0LXJhbmdlX190cmFjay0tYWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6ICNlYTFjMjg7IH1cXG4uZ3JlZW4gLmlucHV0LXJhbmdlX190cmFjay0tYWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6ICM4N2M0MzY7IH1cXG4uaW5wdXQtcmFuZ2Uge1xcbiAgaGVpZ2h0OiAxcmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDI0cHggMCAxNHB4IDA7IH1cXG5cIiJdfQ== */\n/*@ sourceURL=styles\\global.scss */");

  __styledJsxDefaultExport.__hash = "12950881250";
  __styledJsxDefaultExport.__scoped = "@import url(\"https://fonts.googleapis.com/css?family=Roboto\");@import url(\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\");.react-tabs__tab-list[data-jsx-ext~=\"22950881250\"]{border-bottom:1px solid #aaa;margin:0 0 10px;padding:0}.react-tabs__tab[data-jsx-ext~=\"22950881250\"]{display:inline-block;border:1px solid transparent;border-bottom:none;bottom:-1px;position:relative;list-style:none;padding:6px 12px;cursor:pointer}.react-tabs__tab--selected[data-jsx-ext~=\"22950881250\"]{background:#fff;border-color:#aaa;color:black;border-radius:5px 5px 0 0}.react-tabs__tab[data-jsx-ext~=\"22950881250\"]:focus{-webkit-box-shadow:0 0 5px #0188fe;box-shadow:0 0 5px #0188fe;border-color:#0188fe;outline:none}.react-tabs__tab[data-jsx-ext~=\"22950881250\"]:focus[data-jsx-ext~=\"22950881250\"]:after{content:\"\";position:absolute;height:5px;left:-4px;right:-4px;bottom:-5px;background:#fff}.react-tabs__tab-panel[data-jsx-ext~=\"22950881250\"]{display:none}.react-tabs__tab-panel--selected[data-jsx-ext~=\"22950881250\"]{display:block}.react-tabs__tab-panel--disabled[data-jsx-ext~=\"22950881250\"]{color:GrayText;cursor:default}body[data-jsx-ext~=\"22950881250\"]{font-family:\"Roboto\";margin:0;background-color:#f2f2f2}*[data-jsx-ext~=\"22950881250\"]:focus{outline-width:0}.container[data-jsx-ext~=\"22950881250\"]{width:100%}button[data-jsx-ext~=\"22950881250\"],input[type=\"submit\"][data-jsx-ext~=\"22950881250\"]{border:none;color:white;cursor:pointer;padding:8px;background-color:gray}input[type=\"text\"][data-jsx-ext~=\"22950881250\"],input[type=\"password\"][data-jsx-ext~=\"22950881250\"],input[type=\"email\"][data-jsx-ext~=\"22950881250\"]{padding:4px 8px;width:150px}table[data-jsx-ext~=\"22950881250\"]{border-collapse:collapse;table-layout:fixed;width:100%}table[data-jsx-ext~=\"22950881250\"] td[data-jsx-ext~=\"22950881250\"]{word-wrap:break-word}th[data-jsx-ext~=\"22950881250\"],td[data-jsx-ext~=\"22950881250\"]{border-bottom:1px solid #ccc;-webkit-text-align:left;text-align:left}tr[data-jsx-ext~=\"22950881250\"]:hover{background-color:#ddd}.griddle-settings[data-jsx-ext~=\"22950881250\"]{padding:8px;border:1px solid #aaa;margin-bottom:8px}.griddle-settings-toggle[data-jsx-ext~=\"22950881250\"]{margin-bottom:8px}.input-range__slider[data-jsx-ext~=\"22950881250\"]{background:#ccc;border:1px solid #777;height:1rem;width:0.5rem;margin-left:-0.25rem;margin-top:-0.65rem;top:50%;cursor:pointer;outline:none;position:absolute;display:block}.input-range__slider[data-jsx-ext~=\"22950881250\"]:active{background:#aaa}.input-range--disabled[data-jsx-ext~=\"22950881250\"] .input-range__slider[data-jsx-ext~=\"22950881250\"]{background:#eee;border:1px solid #ccc}.input-range__slider-container[data-jsx-ext~=\"22950881250\"]{-webkit-transition:left 0.05s ease-out;-webkit-transition:left 0.05s ease-out;transition:left 0.05s ease-out}.input-range__label[data-jsx-ext~=\"22950881250\"]{color:#333;font-size:0.8rem;-webkit-transform:translateZ(0);-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);white-space:nowrap}.input-range__label--min[data-jsx-ext~=\"22950881250\"],.input-range__label--max[data-jsx-ext~=\"22950881250\"]{display:none}.input-range__label--min[data-jsx-ext~=\"22950881250\"]{left:0}.input-range__label--max[data-jsx-ext~=\"22950881250\"]{right:0}.input-range__label--value[data-jsx-ext~=\"22950881250\"]{position:absolute;top:-1.8rem}.input-range__label-container[data-jsx-ext~=\"22950881250\"]{left:-50%;position:relative}.input-range__label--max[data-jsx-ext~=\"22950881250\"] .input-range__label-container[data-jsx-ext~=\"22950881250\"]{left:50%}.input-range__track[data-jsx-ext~=\"22950881250\"]{background:#ccc;cursor:pointer;display:block;height:0.3rem;position:relative;-webkit-transition:left 0.05s ease-out, width 0.05s ease-out;-webkit-transition:left 0.05s ease-out, width 0.05s ease-out;transition:left 0.05s ease-out, width 0.05s ease-out}.input-range--disabled[data-jsx-ext~=\"22950881250\"] .input-range__track[data-jsx-ext~=\"22950881250\"]{background:#eee}.input-range__track--background[data-jsx-ext~=\"22950881250\"]{left:8px;margin-top:-0.15rem;position:absolute;right:10px;top:50%}.input-range__track--active[data-jsx-ext~=\"22950881250\"]{background:#ea1c28}.green[data-jsx-ext~=\"22950881250\"] .input-range__track--active[data-jsx-ext~=\"22950881250\"]{background:#87c436}.input-range[data-jsx-ext~=\"22950881250\"]{height:1rem;position:relative;width:100%;margin:24px 0 14px 0}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlc1xcZ2xvYmFsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsQUFDOEQsQUFBMkYsQUFDekgsQUFDUixBQUNILEFBQ21CLEFBQ3RCLEFBQ0YsQUFDRyxBQUNDLEFBQ0ksQUFDTCxBQUNMLEFBRUMsQUFHSSxBQUNTLEFBQ0osQUFFUSxBQUNQLEFBQ1YsQUFDTSxBQUNGLEFBQ0EsQUFDQSxBQUN1QixBQUM1QixBQUVFLEFBQ04sQUFDQyxBQUNVLEFBQ1IsQUFDRCxBQUNPLEFBQ0EsQUFDUCxBQUNVLEFBQ0EsQUFDUCxRQVZKLENBQ0MsQ0FHQyxBQUdzQixDQUpELENBN0JTLEFBTTVCLEFBaUJtQixDQWZKLEFBU1UsQUFtQkosQ0FuQ25CLEFBd0JBLENBdkJHLENBQ29CLENBTEksQUFPeEIsQUFNYyxBQVFVLEFBQ3hCLEFBQ3dCLEFBVVAsQUFDakIsRUFkRSxBQVVjLENBTWIsQUFDQSxFQXRDaUMsQUFPcEIsQUFTWCxDQUdDLEdBUnNCLEFBSUUsSUFoQkMsQUFlaEIsQUFJZ0IsQUFRa0IsQUFNbEMsQ0E3QjBCLEFBaUNMLENBOUJmLEFBQ3VCLEFBd0IzQixBQVFhLENBTEksR0FqQ08sQUFDbUIsQUFrQm5CLElBRUYsQUFFZCxBQUMrQixFQWRiLENBUmUsQ0FvQ0osRUF4QlYsQ0FoQkEsQ0FtQ08sQ0FqQ3FCLENBbUN0QixFQXBDUSxDQXNCSCxDQW5CcUIsQ0FRUixBQVMxQixHQXJCRyxBQVFBLEFBUUEsSUFxQmdCLENBVnVCLEFBUVosQ0FoQ2MsRUFDUyxBQW9DeEMsQ0FqQndCLElBY2pCLENBcENXLEFBa0J6QyxJQWpCeUMsRUFVSixDQVJpRCxHQStCa0IsR0FsQzFDLENBRVUsR0FvQkYsT0FuQmlCLElBRGQsSUFGUSxNQXNCQSxFQUd4RCxPQUgwRSxFQXRCRSxjQXNCYyxJQXRCSSxLQWtDeUMsS0FaeEIsQ0FJOUQsS0ExQjhDLGFBc0JpQyxFQUk5RSxhQUorRSw2RUFZTyIsImZpbGUiOiJzdHlsZXNcXGdsb2JhbC5zY3NzIiwic291cmNlUm9vdCI6IkM6L3Byb2plY3RzL21lZCIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90b1xcXCIpO1xcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcXFwiKTtcXG4ucmVhY3QtdGFic19fdGFiLWxpc3Qge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhYWE7XFxuICBtYXJnaW46IDAgMCAxMHB4O1xcbiAgcGFkZGluZzogMDsgfVxcbi5yZWFjdC10YWJzX190YWIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgYm90dG9tOiAtMXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDZweCAxMnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuLnJlYWN0LXRhYnNfX3RhYi0tc2VsZWN0ZWQge1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBib3JkZXItY29sb3I6ICNhYWE7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7IH1cXG4ucmVhY3QtdGFic19fdGFiOmZvY3VzIHtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgNXB4ICMwMTg4ZmU7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDVweCAjMDE4OGZlO1xcbiAgICBib3JkZXItY29sb3I6ICMwMTg4ZmU7XFxuICAgIG91dGxpbmU6IG5vbmU7IH1cXG4ucmVhY3QtdGFic19fdGFiOmZvY3VzOmFmdGVyIHtcXG4gICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgaGVpZ2h0OiA1cHg7XFxuICAgICAgbGVmdDogLTRweDtcXG4gICAgICByaWdodDogLTRweDtcXG4gICAgICBib3R0b206IC01cHg7XFxuICAgICAgYmFja2dyb3VuZDogI2ZmZjsgfVxcbi5yZWFjdC10YWJzX190YWItcGFuZWwge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcbi5yZWFjdC10YWJzX190YWItcGFuZWwtLXNlbGVjdGVkIHtcXG4gICAgZGlzcGxheTogYmxvY2s7IH1cXG4ucmVhY3QtdGFic19fdGFiLXBhbmVsLS1kaXNhYmxlZCB7XFxuICAgIGNvbG9yOiBHcmF5VGV4dDtcXG4gICAgY3Vyc29yOiBkZWZhdWx0OyB9XFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCI7XFxuICBtYXJnaW46IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyOyB9XFxuKjpmb2N1cyB7XFxuICBvdXRsaW5lLXdpZHRoOiAwOyB9XFxuLmNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTsgfVxcbmJ1dHRvbixcXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5OyB9XFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcInBhc3N3b3JkXFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwiZW1haWxcXFwiXSB7XFxuICBwYWRkaW5nOiA0cHggOHB4O1xcbiAgd2lkdGg6IDE1MHB4OyB9XFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTsgfVxcbnRhYmxlIHRkIHtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDsgfVxcbnRoLFxcbnRkIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xcbiAgdGV4dC1hbGlnbjogbGVmdDsgfVxcbnRyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7IH1cXG4uZ3JpZGRsZS1zZXR0aW5ncyB7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4OyB9XFxuLmdyaWRkbGUtc2V0dGluZ3MtdG9nZ2xlIHtcXG4gIG1hcmdpbi1ib3R0b206IDhweDsgfVxcbi5pbnB1dC1yYW5nZV9fc2xpZGVyIHtcXG4gIGJhY2tncm91bmQ6ICNjY2M7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNzc3O1xcbiAgaGVpZ2h0OiAxcmVtO1xcbiAgd2lkdGg6IDAuNXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAtMC4yNXJlbTtcXG4gIG1hcmdpbi10b3A6IC0wLjY1cmVtO1xcbiAgdG9wOiA1MCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogYmxvY2s7IH1cXG4uaW5wdXQtcmFuZ2VfX3NsaWRlcjphY3RpdmUge1xcbiAgYmFja2dyb3VuZDogI2FhYTsgfVxcbi5pbnB1dC1yYW5nZS0tZGlzYWJsZWQgLmlucHV0LXJhbmdlX19zbGlkZXIge1xcbiAgYmFja2dyb3VuZDogI2VlZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7IH1cXG4uaW5wdXQtcmFuZ2VfX3NsaWRlci1jb250YWluZXIge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBsZWZ0IDAuMDVzIGVhc2Utb3V0O1xcbiAgdHJhbnNpdGlvbjogbGVmdCAwLjA1cyBlYXNlLW91dDsgfVxcbi5pbnB1dC1yYW5nZV9fbGFiZWwge1xcbiAgY29sb3I6ICMzMzM7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XFxuLmlucHV0LXJhbmdlX19sYWJlbC0tbWluLFxcbi5pbnB1dC1yYW5nZV9fbGFiZWwtLW1heCB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuLmlucHV0LXJhbmdlX19sYWJlbC0tbWluIHtcXG4gIGxlZnQ6IDA7IH1cXG4uaW5wdXQtcmFuZ2VfX2xhYmVsLS1tYXgge1xcbiAgcmlnaHQ6IDA7IH1cXG4uaW5wdXQtcmFuZ2VfX2xhYmVsLS12YWx1ZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0xLjhyZW07IH1cXG4uaW5wdXQtcmFuZ2VfX2xhYmVsLWNvbnRhaW5lciB7XFxuICBsZWZ0OiAtNTAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuLmlucHV0LXJhbmdlX19sYWJlbC0tbWF4IC5pbnB1dC1yYW5nZV9fbGFiZWwtY29udGFpbmVyIHtcXG4gIGxlZnQ6IDUwJTsgfVxcbi5pbnB1dC1yYW5nZV9fdHJhY2sge1xcbiAgYmFja2dyb3VuZDogI2NjYztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAwLjNyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGxlZnQgMC4wNXMgZWFzZS1vdXQsIHdpZHRoIDAuMDVzIGVhc2Utb3V0O1xcbiAgdHJhbnNpdGlvbjogbGVmdCAwLjA1cyBlYXNlLW91dCwgd2lkdGggMC4wNXMgZWFzZS1vdXQ7IH1cXG4uaW5wdXQtcmFuZ2UtLWRpc2FibGVkIC5pbnB1dC1yYW5nZV9fdHJhY2sge1xcbiAgYmFja2dyb3VuZDogI2VlZTsgfVxcbi5pbnB1dC1yYW5nZV9fdHJhY2stLWJhY2tncm91bmQge1xcbiAgbGVmdDogOHB4O1xcbiAgbWFyZ2luLXRvcDogLTAuMTVyZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMTBweDtcXG4gIHRvcDogNTAlOyB9XFxuLmlucHV0LXJhbmdlX190cmFjay0tYWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6ICNlYTFjMjg7IH1cXG4uZ3JlZW4gLmlucHV0LXJhbmdlX190cmFjay0tYWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6ICM4N2M0MzY7IH1cXG4uaW5wdXQtcmFuZ2Uge1xcbiAgaGVpZ2h0OiAxcmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDI0cHggMCAxNHB4IDA7IH1cXG5cIiJdfQ== */\n/*@ sourceURL=styles\\global.scss */";
  __styledJsxDefaultExport.__scopedHash = "22950881250";
  module.exports = __styledJsxDefaultExport;
})();

/***/ }),

/***/ 890:
/***/ (function(module, exports) {

;

(function () {
  "use strict";

  var __styledJsxDefaultExport = new String(".root{display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:100%}.menu{width:100%;position:fixed;top:0;z-index:100}.side{overflow:hidden;background-color:white;height:100%;width:200px;min-width:200px;position:fixed;left:0;margin-top:83px;border-style:solid;border-color:#e6e6e6;z-index:100;-webkit-box-sizing:border-box;box-sizing:border-box}.content{margin-top:83px;margin-left:200px;width:100%}.content.withoutside{margin-left:0}@media (max-width:550px){.root{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.menu{position:inherit;height:auto}.side{width:100%;margin-top:0;position:inherit}.content{width:100%;height:100%;margin-top:0;margin-left:0}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlc1xcbGF5b3V0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsQUFFdUIsQUFFVCxBQUVLLEFBRUEsQUFFRixBQUdnQixBQUNYLEFBQ04sQUFDQSxZQVpnQixBQVdFLEFBQ0QsR0FOZixFQUoyQixBQUVMLENBTUQsR0FaTyxJQWNLLENBREssRUFYZixDQVMwQixFQUMzQixJQVZnQixDQUlGLEdBUWdCLEVBVlYsQ0FKRSxFQWFMLElBWEEsQUFJRixNQUZvQixBQVVKLEtBSCtCLFFBUFIsaUJBQWtCLEVBT3lCLGNBUGYsUUFBbUIsWUFKakUsS0FJdUYsT0FKeEUsYUFBQyxBQUkrRixzQkFBZSxBQU9oRSxhQVBpRywrQkFBaUMsdUJBQUMiLCJmaWxlIjoic3R5bGVzXFxsYXlvdXQuc2NzcyIsInNvdXJjZVJvb3QiOiJDOi9wcm9qZWN0cy9tZWQiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiLnJvb3Qge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTsgfVxcblxcbi5tZW51IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgei1pbmRleDogMTAwOyB9XFxuXFxuLnNpZGUge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgbWluLXdpZHRoOiAyMDBweDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICBtYXJnaW4tdG9wOiA4M3B4O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogI2U2ZTZlNjtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblxcbi5jb250ZW50IHtcXG4gIG1hcmdpbi10b3A6IDgzcHg7XFxuICBtYXJnaW4tbGVmdDogMjAwcHg7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi5jb250ZW50LndpdGhvdXRzaWRlIHtcXG4gIG1hcmdpbi1sZWZ0OiAwOyB9XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDU1MHB4KSB7XFxuICAucm9vdCB7XFxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgLm1lbnUge1xcbiAgICBwb3NpdGlvbjogaW5oZXJpdDtcXG4gICAgaGVpZ2h0OiBhdXRvOyB9XFxuICAuc2lkZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBwb3NpdGlvbjogaW5oZXJpdDsgfVxcbiAgLmNvbnRlbnQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBtYXJnaW4tbGVmdDogMDsgfSB9XFxuXCIiXX0= */\n/*@ sourceURL=styles\\layout.scss */");

  __styledJsxDefaultExport.__hash = "12630681715";
  __styledJsxDefaultExport.__scoped = ".root[data-jsx-ext~=\"22630681715\"]{display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:100%}.menu[data-jsx-ext~=\"22630681715\"]{width:100%;position:fixed;top:0;z-index:100}.side[data-jsx-ext~=\"22630681715\"]{overflow:hidden;background-color:white;height:100%;width:200px;min-width:200px;position:fixed;left:0;margin-top:83px;border-style:solid;border-color:#e6e6e6;z-index:100;-webkit-box-sizing:border-box;box-sizing:border-box}.content[data-jsx-ext~=\"22630681715\"]{margin-top:83px;margin-left:200px;width:100%}.content.withoutside[data-jsx-ext~=\"22630681715\"]{margin-left:0}@media (max-width:550px){.root[data-jsx-ext~=\"22630681715\"]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.menu[data-jsx-ext~=\"22630681715\"]{position:inherit;height:auto}.side[data-jsx-ext~=\"22630681715\"]{width:100%;margin-top:0;position:inherit}.content[data-jsx-ext~=\"22630681715\"]{width:100%;height:100%;margin-top:0;margin-left:0}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlc1xcbGF5b3V0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsQUFFdUIsQUFFVCxBQUVLLEFBRUEsQUFFRixBQUdnQixBQUNYLEFBQ04sQUFDQSxZQVpnQixBQVdFLEFBQ0QsR0FOZixFQUoyQixBQUVMLENBTUQsR0FaTyxJQWNLLENBREssRUFYZixDQVMwQixFQUMzQixJQVZnQixDQUlGLEdBUWdCLEVBVlYsQ0FKRSxFQWFMLElBWEEsQUFJRixNQUZvQixBQVVKLEtBSCtCLFFBUFIsaUJBQWtCLEVBT3lCLGNBUGYsUUFBbUIsWUFKakUsS0FJdUYsT0FKeEUsYUFBQyxBQUkrRixzQkFBZSxBQU9oRSxhQVBpRywrQkFBaUMsdUJBQUMiLCJmaWxlIjoic3R5bGVzXFxsYXlvdXQuc2NzcyIsInNvdXJjZVJvb3QiOiJDOi9wcm9qZWN0cy9tZWQiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiLnJvb3Qge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTsgfVxcblxcbi5tZW51IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgei1pbmRleDogMTAwOyB9XFxuXFxuLnNpZGUge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgbWluLXdpZHRoOiAyMDBweDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICBtYXJnaW4tdG9wOiA4M3B4O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogI2U2ZTZlNjtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblxcbi5jb250ZW50IHtcXG4gIG1hcmdpbi10b3A6IDgzcHg7XFxuICBtYXJnaW4tbGVmdDogMjAwcHg7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi5jb250ZW50LndpdGhvdXRzaWRlIHtcXG4gIG1hcmdpbi1sZWZ0OiAwOyB9XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDU1MHB4KSB7XFxuICAucm9vdCB7XFxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgLm1lbnUge1xcbiAgICBwb3NpdGlvbjogaW5oZXJpdDtcXG4gICAgaGVpZ2h0OiBhdXRvOyB9XFxuICAuc2lkZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBwb3NpdGlvbjogaW5oZXJpdDsgfVxcbiAgLmNvbnRlbnQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBtYXJnaW4tbGVmdDogMDsgfSB9XFxuXCIiXX0= */\n/*@ sourceURL=styles\\layout.scss */";
  __styledJsxDefaultExport.__scopedHash = "22630681715";
  module.exports = __styledJsxDefaultExport;
})();

/***/ }),

/***/ 891:
/***/ (function(module, exports) {

;

(function () {
  "use strict";

  var __styledJsxDefaultExport = new String(".root{display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-ms-flex-pack:justify;-webkit-box-pack:space-between;-webkit-justify-content:space-between;-ms-flex-pack:space-between;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;min-height:83px;background:white}.search{-webkit-box-flex:1;-ms-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;max-width:250px;height:36px;display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.logo-section{height:100%;padding:4px;cursor:pointer}.logo{height:75px}.logo img{max-width:100%;max-height:100%}.nav{display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:8px;height:36px}.logincontainer{-ms-flex-item-align:end;-webkit-align-self:flex-end;-ms-flex-item-align:flex-end;align-self:flex-end;display:none;position:relative}.logincontainer.show{display:inherit}.loginform{position:absolute;right:0;top:0}button{width:100%;height:100%;padding:0 8px;border:none;background-color:#ea1c28}@media (max-width:550px){.logo{-webkit-box-flex:1;-ms-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;width:100%}.nav{margin-left:auto}.search{-webkit-box-flex:1;-ms-flex:1 0 100%;-webkit-flex:1 0 100%;-ms-flex:1 0 100%;flex:1 0 100%;width:100%;max-width:100%;-webkit-box-ordinal-group:2;-moz-box-ordinal-group:2;-ms-flex-order:2;-webkit-order:2}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlc1xcbWVudWJhci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLEFBRXVCLEFBRUQsQUFFUCxBQUVBLEFBRUcsQUFFSyxBQUVJLEFBRVIsQUFFRSxBQUVQLEFBR1UsQUFDRixBQUNFLFlBTEssQ0FkQyxBQUVkLEdBRXFCLENBTWpCLENBUUcsQ0FOUyxDQWRRLEFBbUJJLEFBRU8sQ0F2QkwsQUFVQSxJQUVRLEFBTVIsQ0FkRSxFQVlQLElBZGlCLEFBbUJNLENBYjFCLEVBUUksSUFPb0MsQ0FMakIsRUFsQkMsQUFJYixBQU1hLFdBUTJCLGVBaEJaLEFBbUJHLFdBSFUsQ0FHVCxLQW5CVyxXQXFCRSxFQXJCcUIsT0FVN0MsR0FXNEMsV0FyQndCLEFBVS9DLENBWlAsQUFVTSxJQWF5RCxjQVh2RCxFQVpjLEFBRWdELE1BUW5DLE9BYTBELGdCQWI1QixVQWFrRCxrQkFBcUIsR0F2QnRGLGNBdUJ1RixJQXJCbEUsUUFGUSx1QkFBeUMsaUJBVXhDLGFBQWUsYUFBQyx3RkFWb0QsMEJBQTZCLHVCQUE4QixpR0FBYyxZQUFtQixpQkFBb0Isa0JBQUMiLCJmaWxlIjoic3R5bGVzXFxtZW51YmFyLnNjc3MiLCJzb3VyY2VSb290IjoiQzovcHJvamVjdHMvbWVkIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi5yb290IHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogODNweDtcXG4gIGJhY2tncm91bmQ6IHdoaXRlOyB9XFxuXFxuLnNlYXJjaCB7XFxuICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgICAgIC1tcy1mbGV4OiAxO1xcbiAgICAgICAgICBmbGV4OiAxO1xcbiAgbWF4LXdpZHRoOiAyNTBweDtcXG4gIGhlaWdodDogMzZweDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuXFxuLmxvZ28tc2VjdGlvbiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiA0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4ubG9nbyB7XFxuICBoZWlnaHQ6IDc1cHg7IH1cXG5cXG4ubG9nbyBpbWcge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgbWF4LWhlaWdodDogMTAwJTsgfVxcblxcbi5uYXYge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBoZWlnaHQ6IDM2cHg7IH1cXG5cXG4ubG9naW5jb250YWluZXIge1xcbiAgLW1zLWZsZXgtaXRlbS1hbGlnbjogZW5kO1xcbiAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcblxcbi5sb2dpbmNvbnRhaW5lci5zaG93IHtcXG4gIGRpc3BsYXk6IGluaGVyaXQ7IH1cXG5cXG4ubG9naW5mb3JtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwOyB9XFxuXFxuYnV0dG9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMCA4cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWExYzI4OyB9XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDU1MHB4KSB7XFxuICAubG9nbyB7XFxuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAgICAgICAtbXMtZmxleDogMTtcXG4gICAgICAgICAgICBmbGV4OiAxO1xcbiAgICB3aWR0aDogMTAwJTsgfVxcbiAgLm5hdiB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvOyB9XFxuICAuc2VhcmNoIHtcXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMTtcXG4gICAgICAgIC1tcy1mbGV4OiAxIDAgMTAwJTtcXG4gICAgICAgICAgICBmbGV4OiAxIDAgMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMjtcXG4gICAgLW1vei1ib3gtb3JkaW5hbC1ncm91cDogMjtcXG4gICAgLW1zLWZsZXgtb3JkZXI6IDI7XFxuICAgIC13ZWJraXQtb3JkZXI6IDI7IH0gfVxcblwiIl19 */\n/*@ sourceURL=styles\\menubar.scss */");

  __styledJsxDefaultExport.__hash = "11942859237";
  __styledJsxDefaultExport.__scoped = ".root[data-jsx-ext~=\"21942859237\"]{display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-ms-flex-pack:justify;-webkit-box-pack:space-between;-webkit-justify-content:space-between;-ms-flex-pack:space-between;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;min-height:83px;background:white}.search[data-jsx-ext~=\"21942859237\"]{-webkit-box-flex:1;-ms-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;max-width:250px;height:36px;display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.logo-section[data-jsx-ext~=\"21942859237\"]{height:100%;padding:4px;cursor:pointer}.logo[data-jsx-ext~=\"21942859237\"]{height:75px}.logo[data-jsx-ext~=\"21942859237\"] img[data-jsx-ext~=\"21942859237\"]{max-width:100%;max-height:100%}.nav[data-jsx-ext~=\"21942859237\"]{display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:8px;height:36px}.logincontainer[data-jsx-ext~=\"21942859237\"]{-ms-flex-item-align:end;-webkit-align-self:flex-end;-ms-flex-item-align:flex-end;align-self:flex-end;display:none;position:relative}.logincontainer.show[data-jsx-ext~=\"21942859237\"]{display:inherit}.loginform[data-jsx-ext~=\"21942859237\"]{position:absolute;right:0;top:0}button[data-jsx-ext~=\"21942859237\"]{width:100%;height:100%;padding:0 8px;border:none;background-color:#ea1c28}@media (max-width:550px){.logo[data-jsx-ext~=\"21942859237\"]{-webkit-box-flex:1;-ms-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;width:100%}.nav[data-jsx-ext~=\"21942859237\"]{margin-left:auto}.search[data-jsx-ext~=\"21942859237\"]{-webkit-box-flex:1;-ms-flex:1 0 100%;-webkit-flex:1 0 100%;-ms-flex:1 0 100%;flex:1 0 100%;width:100%;max-width:100%;-webkit-box-ordinal-group:2;-moz-box-ordinal-group:2;-ms-flex-order:2;-webkit-order:2}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlc1xcbWVudWJhci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLEFBRXVCLEFBRUQsQUFFUCxBQUVBLEFBRUcsQUFFSyxBQUVJLEFBRVIsQUFFRSxBQUVQLEFBR1UsQUFDRixBQUNFLFlBTEssQ0FkQyxBQUVkLEdBRXFCLENBTWpCLENBUUcsQ0FOUyxDQWRRLEFBbUJJLEFBRU8sQ0F2QkwsQUFVQSxJQUVRLEFBTVIsQ0FkRSxFQVlQLElBZGlCLEFBbUJNLENBYjFCLEVBUUksSUFPb0MsQ0FMakIsRUFsQkMsQUFJYixBQU1hLFdBUTJCLGVBaEJaLEFBbUJHLFdBSFUsQ0FHVCxLQW5CVyxXQXFCRSxFQXJCcUIsT0FVN0MsR0FXNEMsV0FyQndCLEFBVS9DLENBWlAsQUFVTSxJQWF5RCxjQVh2RCxFQVpjLEFBRWdELE1BUW5DLE9BYTBELGdCQWI1QixVQWFrRCxrQkFBcUIsR0F2QnRGLGNBdUJ1RixJQXJCbEUsUUFGUSx1QkFBeUMsaUJBVXhDLGFBQWUsYUFBQyx3RkFWb0QsMEJBQTZCLHVCQUE4QixpR0FBYyxZQUFtQixpQkFBb0Isa0JBQUMiLCJmaWxlIjoic3R5bGVzXFxtZW51YmFyLnNjc3MiLCJzb3VyY2VSb290IjoiQzovcHJvamVjdHMvbWVkIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi5yb290IHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogODNweDtcXG4gIGJhY2tncm91bmQ6IHdoaXRlOyB9XFxuXFxuLnNlYXJjaCB7XFxuICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgICAgIC1tcy1mbGV4OiAxO1xcbiAgICAgICAgICBmbGV4OiAxO1xcbiAgbWF4LXdpZHRoOiAyNTBweDtcXG4gIGhlaWdodDogMzZweDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuXFxuLmxvZ28tc2VjdGlvbiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiA0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4ubG9nbyB7XFxuICBoZWlnaHQ6IDc1cHg7IH1cXG5cXG4ubG9nbyBpbWcge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgbWF4LWhlaWdodDogMTAwJTsgfVxcblxcbi5uYXYge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBoZWlnaHQ6IDM2cHg7IH1cXG5cXG4ubG9naW5jb250YWluZXIge1xcbiAgLW1zLWZsZXgtaXRlbS1hbGlnbjogZW5kO1xcbiAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcblxcbi5sb2dpbmNvbnRhaW5lci5zaG93IHtcXG4gIGRpc3BsYXk6IGluaGVyaXQ7IH1cXG5cXG4ubG9naW5mb3JtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwOyB9XFxuXFxuYnV0dG9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMCA4cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWExYzI4OyB9XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDU1MHB4KSB7XFxuICAubG9nbyB7XFxuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAgICAgICAtbXMtZmxleDogMTtcXG4gICAgICAgICAgICBmbGV4OiAxO1xcbiAgICB3aWR0aDogMTAwJTsgfVxcbiAgLm5hdiB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvOyB9XFxuICAuc2VhcmNoIHtcXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMTtcXG4gICAgICAgIC1tcy1mbGV4OiAxIDAgMTAwJTtcXG4gICAgICAgICAgICBmbGV4OiAxIDAgMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMjtcXG4gICAgLW1vei1ib3gtb3JkaW5hbC1ncm91cDogMjtcXG4gICAgLW1zLWZsZXgtb3JkZXI6IDI7XFxuICAgIC13ZWJraXQtb3JkZXI6IDI7IH0gfVxcblwiIl19 */\n/*@ sourceURL=styles\\menubar.scss */";
  __styledJsxDefaultExport.__scopedHash = "21942859237";
  module.exports = __styledJsxDefaultExport;
})();

/***/ }),

/***/ 892:
/***/ (function(module, exports) {

;

(function () {
  "use strict";

  var __styledJsxDefaultExport = new String(".root{display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:stretch;-ms-flex-pack:stretch;-webkit-box-pack:stretch;-webkit-justify-content:stretch;-ms-flex-pack:stretch;justify-content:stretch;height:100%;width:100%}form{-webkit-box-flex:1;-ms-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:stretch;-ms-flex-pack:stretch;-webkit-box-pack:stretch;-webkit-justify-content:stretch;-ms-flex-pack:stretch;justify-content:stretch;border:solid 2px #e6e6e6;-webkit-box-sizing:border-box;box-sizing:border-box;height:100%;width:100%}button{width:30px;height:100%;background-color:#ea1c28}input{min-width:calc(100% - 16px);padding:0 8px;border:none}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlc1xcc2VhcmNoYmFyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsQUFFdUIsQUFFRCxBQUVSLEFBRWlCLFlBRkYsUUFGVyxDQUZNLElBSVcsSUFFVCxHQUpVLFVBRkksRUFNQyxPQUZMLE1BRU0sV0FKaUIscUJBQXVCLHFCQUFnQixVQUY5QiwwQkFBNkIsdUJBQW1DLG1CQUVOLDBCQUE2Qix1QkFBbUMsdUNBRjNDLGFBQWMsWUFBQywyQ0FFd0QsMEJBQWlDLCtCQUFpQyx1QkFBZSxhQUFjLFlBQUMiLCJmaWxlIjoic3R5bGVzXFxzZWFyY2hiYXIuc2NzcyIsInNvdXJjZVJvb3QiOiJDOi9wcm9qZWN0cy9tZWQiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiLnJvb3Qge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1wYWNrOiBzdHJldGNoO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IHN0cmV0Y2g7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuZm9ybSB7XFxuICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgICAgIC1tcy1mbGV4OiAxO1xcbiAgICAgICAgICBmbGV4OiAxO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1wYWNrOiBzdHJldGNoO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IHN0cmV0Y2g7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcXG4gIGJvcmRlcjogc29saWQgMnB4ICNlNmU2ZTY7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbmJ1dHRvbiB7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYTFjMjg7IH1cXG5cXG5pbnB1dCB7XFxuICBtaW4td2lkdGg6IGNhbGMoMTAwJSAtIDE2cHgpO1xcbiAgcGFkZGluZzogMCA4cHg7XFxuICBib3JkZXI6IG5vbmU7IH1cXG5cIiJdfQ== */\n/*@ sourceURL=styles\\searchbar.scss */");

  __styledJsxDefaultExport.__hash = "1533084385";
  __styledJsxDefaultExport.__scoped = ".root[data-jsx-ext~=\"2533084385\"]{display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:stretch;-ms-flex-pack:stretch;-webkit-box-pack:stretch;-webkit-justify-content:stretch;-ms-flex-pack:stretch;justify-content:stretch;height:100%;width:100%}form[data-jsx-ext~=\"2533084385\"]{-webkit-box-flex:1;-ms-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:stretch;-ms-flex-pack:stretch;-webkit-box-pack:stretch;-webkit-justify-content:stretch;-ms-flex-pack:stretch;justify-content:stretch;border:solid 2px #e6e6e6;-webkit-box-sizing:border-box;box-sizing:border-box;height:100%;width:100%}button[data-jsx-ext~=\"2533084385\"]{width:30px;height:100%;background-color:#ea1c28}input[data-jsx-ext~=\"2533084385\"]{min-width:calc(100% - 16px);padding:0 8px;border:none}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlc1xcc2VhcmNoYmFyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsQUFFdUIsQUFFRCxBQUVSLEFBRWlCLFlBRkYsUUFGVyxDQUZNLElBSVcsSUFFVCxHQUpVLFVBRkksRUFNQyxPQUZMLE1BRU0sV0FKaUIscUJBQXVCLHFCQUFnQixVQUY5QiwwQkFBNkIsdUJBQW1DLG1CQUVOLDBCQUE2Qix1QkFBbUMsdUNBRjNDLGFBQWMsWUFBQywyQ0FFd0QsMEJBQWlDLCtCQUFpQyx1QkFBZSxhQUFjLFlBQUMiLCJmaWxlIjoic3R5bGVzXFxzZWFyY2hiYXIuc2NzcyIsInNvdXJjZVJvb3QiOiJDOi9wcm9qZWN0cy9tZWQiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiLnJvb3Qge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1wYWNrOiBzdHJldGNoO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IHN0cmV0Y2g7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuZm9ybSB7XFxuICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgICAgIC1tcy1mbGV4OiAxO1xcbiAgICAgICAgICBmbGV4OiAxO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1wYWNrOiBzdHJldGNoO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IHN0cmV0Y2g7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcXG4gIGJvcmRlcjogc29saWQgMnB4ICNlNmU2ZTY7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbmJ1dHRvbiB7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYTFjMjg7IH1cXG5cXG5pbnB1dCB7XFxuICBtaW4td2lkdGg6IGNhbGMoMTAwJSAtIDE2cHgpO1xcbiAgcGFkZGluZzogMCA4cHg7XFxuICBib3JkZXI6IG5vbmU7IH1cXG5cIiJdfQ== */\n/*@ sourceURL=styles\\searchbar.scss */";
  __styledJsxDefaultExport.__scopedHash = "2533084385";
  module.exports = __styledJsxDefaultExport;
})();

/***/ }),

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

/***/ }),

/***/ 896:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactInputRange = __webpack_require__(738);

var _reactInputRange2 = _interopRequireDefault(_reactInputRange);

var _recompose = __webpack_require__(549);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\projects\\med\\components\\duration-slider.js';

exports.default = function (_ref) {
  var value = _ref.value,
      _onChange = _ref.onChange;
  return _react2.default.createElement('div', { style: { position: 'relative' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement('span', { style: { position: 'absolute', top: -18, left: 0, color: '#333', fontSize: '0.8em' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, getLabel(value.min)), _react2.default.createElement('span', { style: { position: 'absolute', top: -18, right: 0, color: '#333', fontSize: '0.8em' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, getLabel(value.max)), _react2.default.createElement(_reactInputRange2.default, { maxValue: 32, minValue: 0,
    value: { min: toSteps(value.min), max: toSteps(value.max) },
    onChange: function onChange(range) {
      _onChange({ max: toSeconds(range.max), min: toSeconds(range.min) });
    }, formatLabel: function formatLabel(val) {
      return '';
    }, __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }));
};

var toSeconds = function toSeconds(value) {
  return value < 10 ? value : value < 20 ? 10 + (value - 10) * 5 : 60 + (parseInt(value) - 20) * 10;
};
var toSteps = function toSteps(seconds) {
  return seconds < 10 ? seconds : seconds < 60 ? 10 + (seconds - 10) / 5 : parseInt((seconds - 60) / 10 + 20);
};
var getLabel = function getLabel(val) {
  var minut = parseInt(val / 60);
  var sec = parseInt(val % 60);
  return minut + ':' + (sec < 10 ? "0" + sec : sec);
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\projects\\med\\components\\duration-slider.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\projects\\med\\components\\duration-slider.js"); } } })();

/***/ }),

/***/ 897:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(559);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _durationSlider = __webpack_require__(896);

var _durationSlider2 = _interopRequireDefault(_durationSlider);

var _priceSlider = __webpack_require__(900);

var _priceSlider2 = _interopRequireDefault(_priceSlider);

var _data = __webpack_require__(737);

var _data2 = _interopRequireDefault(_data);

var _Filters = __webpack_require__(887);

var _Filters2 = _interopRequireDefault(_Filters);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\projects\\med\\components\\filters.js';


var mapStateToProps = function mapStateToProps(_ref) {
  var _ref$filters = _ref.filters,
      durationFilter = _ref$filters.durationFilter,
      priceFilter = _ref$filters.priceFilter;
  return { durationFilter: durationFilter, priceFilter: priceFilter };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    changeDuration: function changeDuration(min, max) {
      return dispatch({ type: 'CHANGE_DURATION_FILTER', payload: { min: min, max: max } });
    },
    changePrice: function changePrice(min, max) {
      return dispatch({ type: 'CHANGE_PRICE_FILTER', payload: { min: min, max: max } });
    }
  };
};

exports.default = (0, _data2.default)(mapStateToProps, mapDispatchToProps)(function (_ref2) {
  var durationFilter = _ref2.durationFilter,
      priceFilter = _ref2.priceFilter,
      changeDuration = _ref2.changeDuration,
      changePrice = _ref2.changePrice;
  return _react2.default.createElement('div', { className: 'root', 'data-jsx-ext': _Filters2.default.__scopedHash,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement('div', { className: 'section', 'data-jsx-ext': _Filters2.default.__scopedHash,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, _react2.default.createElement('h3', {
    'data-jsx-ext': _Filters2.default.__scopedHash,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, 'Duraci\xF3n'), _react2.default.createElement(_durationSlider2.default, { value: durationFilter, onChange: function onChange(_ref3) {
      var max = _ref3.max,
          min = _ref3.min;
      changeDuration(min, max);
    }, __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  })), _react2.default.createElement('div', { className: 'section', 'data-jsx-ext': _Filters2.default.__scopedHash,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, _react2.default.createElement('h3', {
    'data-jsx-ext': _Filters2.default.__scopedHash,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, 'Precio'), _react2.default.createElement(_priceSlider2.default, { value: priceFilter, onChange: function onChange(_ref4) {
      var max = _ref4.max,
          min = _ref4.min;
      changePrice(min, max);
    }, __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  })), _react2.default.createElement('div', { className: 'section', 'data-jsx-ext': _Filters2.default.__scopedHash,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, _react2.default.createElement('h3', {
    'data-jsx-ext': _Filters2.default.__scopedHash,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, 'Categoria'), _react2.default.createElement('div', {
    'data-jsx-ext': _Filters2.default.__scopedHash,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, 'Tag1(numero)'), _react2.default.createElement('div', {
    'data-jsx-ext': _Filters2.default.__scopedHash,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, 'Tag2(numero)'), _react2.default.createElement('div', {
    'data-jsx-ext': _Filters2.default.__scopedHash,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, 'Tag3(numero)'), _react2.default.createElement('div', {
    'data-jsx-ext': _Filters2.default.__scopedHash,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, 'Tag4(numero)'), _react2.default.createElement('div', {
    'data-jsx-ext': _Filters2.default.__scopedHash,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, 'Ver m\xE1s +')), _react2.default.createElement(_style2.default, {
    styleId: _Filters2.default.__scopedHash,
    css: _Filters2.default.__scoped
  }));
});

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\projects\\med\\components\\filters.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\projects\\med\\components\\filters.js"); } } })();

/***/ }),

/***/ 898:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = __webpack_require__(559);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(902);

var _head2 = _interopRequireDefault(_head);

var _filters = __webpack_require__(897);

var _filters2 = _interopRequireDefault(_filters);

var _menubar = __webpack_require__(899);

var _menubar2 = _interopRequireDefault(_menubar);

var _global = __webpack_require__(889);

var _global2 = _interopRequireDefault(_global);

var _layout = __webpack_require__(890);

var _layout2 = _interopRequireDefault(_layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\projects\\med\\components\\layout.js';
exports.default = (0, _head2.default)(function (_ref) {
    var title = _ref.title,
        Head = _ref.Head,
        hideSide = _ref.hideSide,
        children = _ref.children;
    return _react2.default.createElement('div', { className: 'root', 'data-jsx-ext': _layout2.default.__scopedHash,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }, _react2.default.createElement(Head, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }, _react2.default.createElement('title', {
        'data-jsx-ext': _layout2.default.__scopedHash,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }, title), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width,initial-scale=1', 'data-jsx-ext': _layout2.default.__scopedHash,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }), _react2.default.createElement('link', { rel: 'shortcut icon', href: '/static/favicon.ico', type: 'image/x-icon', 'data-jsx-ext': _layout2.default.__scopedHash,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    })), _react2.default.createElement('div', { className: 'menu', 'data-jsx-ext': _layout2.default.__scopedHash,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }, _react2.default.createElement(_menubar2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    })), !hideSide && _react2.default.createElement('div', { className: 'side', 'data-jsx-ext': _layout2.default.__scopedHash,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 18
        }
    }, _react2.default.createElement(_filters2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 19
        }
    })), _react2.default.createElement('div', { className: "content" + (hideSide ? " withoutside" : ""), 'data-jsx-ext': _layout2.default.__scopedHash,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 21
        }
    }, children), _react2.default.createElement(_style2.default, {
        styleId: _global2.default.__hash,
        css: _global2.default
    }), _react2.default.createElement(_style2.default, {
        styleId: _layout2.default.__scopedHash,
        css: _layout2.default.__scoped
    }));
});

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\projects\\med\\components\\layout.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\projects\\med\\components\\layout.js"); } } })();

/***/ }),

/***/ 899:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(559);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _recompose = __webpack_require__(549);

var _oothClientReact = __webpack_require__(586);

var _searchbar = __webpack_require__(901);

var _searchbar2 = _interopRequireDefault(_searchbar);

var _router = __webpack_require__(904);

var _router2 = _interopRequireDefault(_router);

var _link = __webpack_require__(903);

var _link2 = _interopRequireDefault(_link);

var _menubar = __webpack_require__(891);

var _menubar2 = _interopRequireDefault(_menubar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\projects\\med\\components\\menubar.js';
exports.default = (0, _recompose.compose)(_router2.default, _link2.default, _oothClientReact.withUser)(function (_ref) {
  var Router = _ref.Router,
      Link = _ref.Link,
      user = _ref.user;
  return _react2.default.createElement('div', { className: 'root', 'data-jsx-ext': _menubar2.default.__scopedHash,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement('div', { className: 'logo-section', 'data-jsx-ext': _menubar2.default.__scopedHash,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement(Link, { prefetch: true, href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, _react2.default.createElement('div', { className: 'logo', 'data-jsx-ext': _menubar2.default.__scopedHash,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement('img', { src: '/static/MexicoEnDronLogo.png', 'data-jsx-ext': _menubar2.default.__scopedHash,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  })))), _react2.default.createElement('div', { className: 'search', 'data-jsx-ext': _menubar2.default.__scopedHash,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, _react2.default.createElement(_searchbar2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  })), _react2.default.createElement('div', { className: 'nav', 'data-jsx-ext': _menubar2.default.__scopedHash,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, _react2.default.createElement('button', { onClick: function onClick() {
      Router.push(user ? '/logout' : '/login');
    }, 'data-jsx-ext': _menubar2.default.__scopedHash,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, user ? "Cerrar Sesión" : "Iniciar Sesión")), _react2.default.createElement(_style2.default, {
    styleId: _menubar2.default.__scopedHash,
    css: _menubar2.default.__scoped
  }));
});

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\projects\\med\\components\\menubar.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\projects\\med\\components\\menubar.js"); } } })();

/***/ }),

/***/ 900:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactInputRange = __webpack_require__(738);

var _reactInputRange2 = _interopRequireDefault(_reactInputRange);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\projects\\med\\components\\price-slider.js';

exports.default = function (_ref) {
  var value = _ref.value,
      _onChange = _ref.onChange;
  return _react2.default.createElement('div', { className: "green", style: { position: 'relative' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement('span', { style: { position: 'absolute', top: -18, left: 0, color: '#333', fontSize: '0.8em' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, value.min + ' MXN'), _react2.default.createElement('span', { style: { position: 'absolute', top: -18, right: 0, color: '#333', fontSize: '0.8em' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, value.max + ' MXN'), _react2.default.createElement(_reactInputRange2.default, { maxValue: 20, minValue: 0,
    value: { min: toSteps(value.min), max: toSteps(value.max) },
    onChange: function onChange(range) {
      _onChange({ max: toMoney(range.max), min: toMoney(range.min) });
    }, formatLabel: function formatLabel(val) {
      return '';
    }, __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }));
};

var toMoney = function toMoney(value) {
  return value * 5;
};
var toSteps = function toSteps(money) {
  return money / 5;
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\projects\\med\\components\\price-slider.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\projects\\med\\components\\price-slider.js"); } } })();

/***/ }),

/***/ 901:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(559);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _recompose = __webpack_require__(549);

var _searchbar = __webpack_require__(892);

var _searchbar2 = _interopRequireDefault(_searchbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\projects\\med\\components\\searchbar.js',
    _this = undefined;

exports.default = (0, _recompose.withState)('value', 'changeValue', '')(function (_ref) {
  var value = _ref.value,
      changeValue = _ref.changeValue,
      onRequestSearch = _ref.onRequestSearch,
      _onChange = _ref.onChange;
  return _react2.default.createElement('div', { className: "root", 'data-jsx-ext': _searchbar2.default.__scopedHash,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('form', { onSubmit: function onSubmit(e) {
      e.preventDefault();
      onRequestSearch(value);
    }, 'data-jsx-ext': _searchbar2.default.__scopedHash,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement('input', { type: 'text', placeholder: 'Buscar', value: value, onChange: function onChange(e) {
      changeValue(_this.value);
      _onChange(_this.value);
    }, 'data-jsx-ext': _searchbar2.default.__scopedHash,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  })), _react2.default.createElement('button', {
    'data-jsx-ext': _searchbar2.default.__scopedHash,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement('i', { className: 'fa fa-search', 'data-jsx-ext': _searchbar2.default.__scopedHash,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  })), _react2.default.createElement(_style2.default, {
    styleId: _searchbar2.default.__scopedHash,
    css: _searchbar2.default.__scoped
  }));
});

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\projects\\med\\components\\searchbar.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\projects\\med\\components\\searchbar.js"); } } })();

/***/ }),

/***/ 902:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _propTypes = __webpack_require__(84);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__(549);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _recompose.getContext)({
    Head: _propTypes2.default.func
});

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\projects\\med\\hocs\\head.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\projects\\med\\hocs\\head.js"); } } })();

/***/ }),

/***/ 903:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _propTypes = __webpack_require__(84);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__(549);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _recompose.getContext)({
    Link: _propTypes2.default.func
});

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\projects\\med\\hocs\\link.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\projects\\med\\hocs\\link.js"); } } })();

/***/ }),

/***/ 904:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _propTypes = __webpack_require__(84);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__(549);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _recompose.getContext)({
    Router: _propTypes2.default.object
});

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\projects\\med\\hocs\\router.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\projects\\med\\hocs\\router.js"); } } })();

/***/ }),

/***/ 905:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(83);

var _index2 = _interopRequireDefault(_index);

var _link = __webpack_require__(886);

var _link2 = _interopRequireDefault(_link);

var _head = __webpack_require__(194);

var _head2 = _interopRequireDefault(_head);

var _composeNext = __webpack_require__(595);

var _next = __webpack_require__(976);

var _next2 = _interopRequireDefault(_next);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _next2.default)(_index2.default, _link2.default, _head2.default);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\projects\\med\\providers\\next.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\projects\\med\\providers\\next.js"); } } })();

/***/ }),

/***/ 906:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _oothClient = __webpack_require__(894);

var _oothClient2 = _interopRequireDefault(_oothClient);

var _oothClientReactNext = __webpack_require__(893);

var _oothClientReactNext2 = _interopRequireDefault(_oothClientReactNext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var oothClient = new _oothClient2.default({
    oothUrl: '/auth'
});

exports.default = (0, _oothClientReactNext2.default)(oothClient);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\projects\\med\\providers\\ooth.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\projects\\med\\providers\\ooth.js"); } } })();

/***/ }),

/***/ 907:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(95);

var _extends3 = _interopRequireDefault(_extends2);

var _ooth = __webpack_require__(906);

var _ooth2 = _interopRequireDefault(_ooth);

var _next = __webpack_require__(905);

var _next2 = _interopRequireDefault(_next);

var _recompose = __webpack_require__(549);

var _nextReduxWrapper = __webpack_require__(885);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _store = __webpack_require__(912);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _recompose.compose)((0, _nextReduxWrapper2.default)(_store.makeStore, function (state) {
    return (0, _extends3.default)({}, state);
}), _ooth2.default, _next2.default);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\projects\\med\\providers\\page.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\projects\\med\\providers\\page.js"); } } })();

/***/ }),

/***/ 908:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteVideo = exports.createVideo = exports.getVideos = exports.getS3Videos = exports.getUsers = exports.getData = undefined;

var _regenerator = __webpack_require__(64);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(63);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _graphqlRequest = __webpack_require__(758);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined;

var getData = exports.getData = function getData(collection) {
  return function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(dispatch) {
      var query, response;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch({ type: 'FETCHING_USERS' });
              query = '{ users {local {email, password, verificationToken}}}';
              _context.next = 4;
              return (0, _graphqlRequest.request)('/graphql', query);

            case 4:
              response = _context.sent;

              dispatch({ type: 'READY_USERS', payload: response.users });
              return _context.abrupt('return', response);

            case 7:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

var getUsers = exports.getUsers = function getUsers() {
  return function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(dispatch) {
      var query, response;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              dispatch({ type: 'FETCHING_USERS' });
              query = '{ users {local {email, password, verificationToken}}}';
              _context2.next = 4;
              return (0, _graphqlRequest.request)('/graphql', query);

            case 4:
              response = _context2.sent;

              dispatch({ type: 'READY_USERS', payload: response.users });
              return _context2.abrupt('return', response);

            case 7:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var getS3Videos = exports.getS3Videos = function getS3Videos() {
  return function () {
    var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(dispatch) {
      var query, response;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              dispatch({ type: 'FETCHING_S3VIDEOS' });
              query = '{s3videos{thumbpath, fullpath, posterpath, tags}}';
              _context3.next = 4;
              return (0, _graphqlRequest.request)('/graphql', query);

            case 4:
              response = _context3.sent;

              dispatch({ type: 'READY_S3VIDEOS', payload: response.s3videos });
              return _context3.abrupt('return', response);

            case 7:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this);
    }));

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
};

var getVideos = exports.getVideos = function getVideos() {
  return function () {
    var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(dispatch) {
      var query, response;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              dispatch({ type: 'FETCHING_VIDEOS' });
              query = '{videos{_id, title, thumbpath, fullpath, posterpath, tags, createdById, dateCreated}}';
              _context4.next = 4;
              return (0, _graphqlRequest.request)('/graphql', query);

            case 4:
              response = _context4.sent;

              dispatch({ type: 'READY_VIDEOS', payload: response.videos });
              return _context4.abrupt('return', response);

            case 7:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, _this);
    }));

    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  }();
};

var createVideo = exports.createVideo = function createVideo(video, pos) {
  return function () {
    var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(dispatch) {
      var client, query, response;
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              dispatch({ type: 'FETCHING_CREATE_VIDEO' });
              client = new _graphqlRequest.GraphQLClient('/graphql', {
                credentials: 'include',
                mode: 'cors'
              });
              query = 'mutation addVideo($video: VideoInput) {\n    createVideo(video: $video) {\n      _id\n      title\n      thumbpath\n      fullpath\n      posterpath\n      tags\n      createdById\n      dateCreated\n    }\n  }';
              _context5.prev = 3;

              console.log({ video: video });
              _context5.next = 7;
              return client.request(query, { video: video });

            case 7:
              response = _context5.sent;

              console.log(response.createVideo);
              dispatch({ type: 'READY_CREATE_VIDEO', payload: response.createVideo, pos: pos });
              return _context5.abrupt('return', response);

            case 13:
              _context5.prev = 13;
              _context5.t0 = _context5['catch'](3);

              dispatch({ type: 'ERROR_CREATE_VIDEO', payload: _context5.t0 });
              return _context5.abrupt('return', _context5.t0);

            case 17:
              ;

            case 18:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, _this, [[3, 13]]);
    }));

    return function (_x5) {
      return _ref5.apply(this, arguments);
    };
  }();
};

var deleteVideo = exports.deleteVideo = function deleteVideo(_id) {
  return function () {
    var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6(dispatch) {
      var client, query, response;
      return _regenerator2.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              dispatch({ type: 'FETCHING_DELETE_VIDEO' });
              client = new _graphqlRequest.GraphQLClient('/graphql', {
                credentials: 'include',
                mode: 'cors'
              });
              query = 'mutation removeVideo($_id: ID!) {\n    deleteVideo(_id: $_id) {\n      _id\n    }\n  }';
              _context6.prev = 3;
              _context6.next = 6;
              return client.request(query, { _id: _id });

            case 6:
              response = _context6.sent;

              dispatch({ type: 'READY_DELETE_VIDEO', payload: response.deleteVideo });
              return _context6.abrupt('return', response);

            case 11:
              _context6.prev = 11;
              _context6.t0 = _context6['catch'](3);

              dispatch({ type: 'ERROR_DELETE_VIDEO', payload: _context6.t0 });
              return _context6.abrupt('return', _context6.t0);

            case 15:
              ;

            case 16:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, _this, [[3, 11]]);
    }));

    return function (_x6) {
      return _ref6.apply(this, arguments);
    };
  }();
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\projects\\med\\redux\\actions.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\projects\\med\\redux\\actions.js"); } } })();

/***/ }),

/***/ 909:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(95);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\projects\\med\\redux\\filters.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\projects\\med\\redux\\filters.js"); } } })();

/***/ }),

/***/ 910:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(95);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\projects\\med\\redux\\roles.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\projects\\med\\redux\\roles.js"); } } })();

/***/ }),

/***/ 911:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(95);

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initial = { loading: false, list: [] };

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial;
  var action = arguments[1];

  switch (action.type) {
    case 'FETCHING_S3VIDEOS':
      return (0, _extends3.default)({}, state, { loading: true });
    case 'READY_S3VIDEOS':
      return (0, _extends3.default)({}, state, { loading: false, list: action.payload });
    default:
      return state;
  }
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\projects\\med\\redux\\s3videos.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\projects\\med\\redux\\s3videos.js"); } } })();

/***/ }),

/***/ 912:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeStore = undefined;

var _redux = __webpack_require__(571);

var _reduxDevtoolsExtension = __webpack_require__(970);

var _reduxThunk = __webpack_require__(971);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _filters = __webpack_require__(909);

var _filters2 = _interopRequireDefault(_filters);

var _users = __webpack_require__(913);

var _users2 = _interopRequireDefault(_users);

var _videos = __webpack_require__(914);

var _videos2 = _interopRequireDefault(_videos);

var _s3videos = __webpack_require__(911);

var _s3videos2 = _interopRequireDefault(_s3videos);

var _roles = __webpack_require__(910);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\projects\\med\\redux\\store.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\projects\\med\\redux\\store.js"); } } })();

/***/ }),

/***/ 913:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(95);

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initial = { loading: false, list: [] };

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial;
  var action = arguments[1];

  switch (action.type) {
    case 'FETCHING_USERS':
      return (0, _extends3.default)({}, state, { loading: true });
    case 'READY_USERS':
      return (0, _extends3.default)({}, state, { loading: false, list: action.payload });
    default:
      return state;
  }
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\projects\\med\\redux\\users.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\projects\\med\\redux\\users.js"); } } })();

/***/ }),

/***/ 914:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(97);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = __webpack_require__(95);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\projects\\med\\redux\\videos.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\projects\\med\\redux\\videos.js"); } } })();

/***/ }),

/***/ 981:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(755);


/***/ })

},[981]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlc1xccGFnZXNcXGFkbWluLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vaG9jcy9kYXRhLmpzPzVmODM3MmYiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWRtaW4uanM/NWY4MzcyZiIsIndlYnBhY2s6Ly8vc3R5bGVzL0ZpbHRlcnMuc2Nzcz81ZjgzNzJmIiwid2VicGFjazovLy9zdHlsZXMvYWRtaW4uc2Nzcz81ZjgzNzJmIiwid2VicGFjazovLy9zdHlsZXMvZ2xvYmFsLnNjc3M/NWY4MzcyZiIsIndlYnBhY2s6Ly8vc3R5bGVzL2xheW91dC5zY3NzPzVmODM3MmYiLCJ3ZWJwYWNrOi8vL3N0eWxlcy9tZW51YmFyLnNjc3M/NWY4MzcyZiIsIndlYnBhY2s6Ly8vc3R5bGVzL3NlYXJjaGJhci5zY3NzPzVmODM3MmYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hZG1pbi5qcz81ZjgzNzJmIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZHVyYXRpb24tc2xpZGVyLmpzPzVmODM3MmYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9maWx0ZXJzLmpzPzVmODM3MmYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQuanM/NWY4MzcyZiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lbnViYXIuanM/NWY4MzcyZiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3ByaWNlLXNsaWRlci5qcz81ZjgzNzJmIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2VhcmNoYmFyLmpzPzVmODM3MmYiLCJ3ZWJwYWNrOi8vLy4vaG9jcy9oZWFkLmpzPzVmODM3MmYiLCJ3ZWJwYWNrOi8vLy4vaG9jcy9saW5rLmpzPzVmODM3MmYiLCJ3ZWJwYWNrOi8vLy4vaG9jcy9yb3V0ZXIuanM/NWY4MzcyZiIsIndlYnBhY2s6Ly8vLi9wcm92aWRlcnMvbmV4dC5qcz81ZjgzNzJmIiwid2VicGFjazovLy8uL3Byb3ZpZGVycy9vb3RoLmpzPzVmODM3MmYiLCJ3ZWJwYWNrOi8vLy4vcHJvdmlkZXJzL3BhZ2UuanM/NWY4MzcyZiIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zLmpzPzVmODM3MmYiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvZmlsdGVycy5qcz81ZjgzNzJmIiwid2VicGFjazovLy8uL3JlZHV4L3JvbGVzLmpzPzVmODM3MmYiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvczN2aWRlb3MuanM/NWY4MzcyZiIsIndlYnBhY2s6Ly8vLi9yZWR1eC9zdG9yZS5qcz81ZjgzNzJmIiwid2VicGFjazovLy8uL3JlZHV4L3VzZXJzLmpzPzVmODM3MmYiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvdmlkZW9zLmpzPzVmODM3MmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykgPT4gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcylcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ob2NzL2RhdGEuanMiLCJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xyXG5pbXBvcnQgd2l0aFBhZ2UgZnJvbSAnLi4vcHJvdmlkZXJzL3BhZ2UnXHJcbmltcG9ydCBBZG1pbiBmcm9tICcuLi9jb21wb25lbnRzL2FkbWluJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFBhZ2UoKCkgPT4gKFxyXG4gIDxMYXlvdXQgdGl0bGU9XCJBZG1pblwiIHBhZ2U9XCJhZG1pblwiIGhpZGVTaWRlPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPEFkbWluIC8+XHJcbiAgICA8L2Rpdj5cclxuICA8L0xheW91dD5cclxuKSlcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2FkbWluLmpzP2VudHJ5IiwibW9kdWxlLmV4cG9ydHMgPSBcIi5yb290IHtcXG4gIHBhZGRpbmc6IDRweDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7IH1cXG5cXG4uc2VjdGlvbiB7XFxuICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgICAgIC1tcy1mbGV4OiAxO1xcbiAgICAgICAgICBmbGV4OiAxO1xcbiAgcGFkZGluZzogOHB4OyB9XFxuXFxuaDMge1xcbiAgbWFyZ2luOiA0cHggMDsgfVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NTBweCkge1xcbiAgLnJvb3Qge1xcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XFxuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdzsgfSB9XFxuXCJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3R5bGVzL0ZpbHRlcnMuc2NzcyIsIm1vZHVsZS5leHBvcnRzID0gXCIucm9vdCB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogOHB4IDhweDsgfVxcblwiXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHN0eWxlcy9hZG1pbi5zY3NzIiwibW9kdWxlLmV4cG9ydHMgPSBcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvXFxcIik7XFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1xcXCIpO1xcbi5yZWFjdC10YWJzX190YWItbGlzdCB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2FhYTtcXG4gIG1hcmdpbjogMCAwIDEwcHg7XFxuICBwYWRkaW5nOiAwOyB9XFxuLnJlYWN0LXRhYnNfX3RhYiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICBib3R0b206IC0xcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogNnB4IDEycHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4ucmVhY3QtdGFic19fdGFiLS1zZWxlY3RlZCB7XFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgIGJvcmRlci1jb2xvcjogI2FhYTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDsgfVxcbi5yZWFjdC10YWJzX190YWI6Zm9jdXMge1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA1cHggIzAxODhmZTtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgNXB4ICMwMTg4ZmU7XFxuICAgIGJvcmRlci1jb2xvcjogIzAxODhmZTtcXG4gICAgb3V0bGluZTogbm9uZTsgfVxcbi5yZWFjdC10YWJzX190YWI6Zm9jdXM6YWZ0ZXIge1xcbiAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBoZWlnaHQ6IDVweDtcXG4gICAgICBsZWZ0OiAtNHB4O1xcbiAgICAgIHJpZ2h0OiAtNHB4O1xcbiAgICAgIGJvdHRvbTogLTVweDtcXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmOyB9XFxuLnJlYWN0LXRhYnNfX3RhYi1wYW5lbCB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuLnJlYWN0LXRhYnNfX3RhYi1wYW5lbC0tc2VsZWN0ZWQge1xcbiAgICBkaXNwbGF5OiBibG9jazsgfVxcbi5yZWFjdC10YWJzX190YWItcGFuZWwtLWRpc2FibGVkIHtcXG4gICAgY29sb3I6IEdyYXlUZXh0O1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7IH1cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXG4gIG1hcmdpbjogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7IH1cXG4qOmZvY3VzIHtcXG4gIG91dGxpbmUtd2lkdGg6IDA7IH1cXG4uY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuYnV0dG9uLFxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7IH1cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwicGFzc3dvcmRcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJlbWFpbFxcXCJdIHtcXG4gIHBhZGRpbmc6IDRweCA4cHg7XFxuICB3aWR0aDogMTUwcHg7IH1cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlOyB9XFxudGFibGUgdGQge1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkOyB9XFxudGgsXFxudGQge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XFxuICB0ZXh0LWFsaWduOiBsZWZ0OyB9XFxudHI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDsgfVxcbi5ncmlkZGxlLXNldHRpbmdzIHtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7IH1cXG4uZ3JpZGRsZS1zZXR0aW5ncy10b2dnbGUge1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4OyB9XFxuLmlucHV0LXJhbmdlX19zbGlkZXIge1xcbiAgYmFja2dyb3VuZDogI2NjYztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM3Nzc7XFxuICBoZWlnaHQ6IDFyZW07XFxuICB3aWR0aDogMC41cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IC0wLjI1cmVtO1xcbiAgbWFyZ2luLXRvcDogLTAuNjVyZW07XFxuICB0b3A6IDUwJTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBibG9jazsgfVxcbi5pbnB1dC1yYW5nZV9fc2xpZGVyOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiAjYWFhOyB9XFxuLmlucHV0LXJhbmdlLS1kaXNhYmxlZCAuaW5wdXQtcmFuZ2VfX3NsaWRlciB7XFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYzsgfVxcbi5pbnB1dC1yYW5nZV9fc2xpZGVyLWNvbnRhaW5lciB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGxlZnQgMC4wNXMgZWFzZS1vdXQ7XFxuICB0cmFuc2l0aW9uOiBsZWZ0IDAuMDVzIGVhc2Utb3V0OyB9XFxuLmlucHV0LXJhbmdlX19sYWJlbCB7XFxuICBjb2xvcjogIzMzMztcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cXG4uaW5wdXQtcmFuZ2VfX2xhYmVsLS1taW4sXFxuLmlucHV0LXJhbmdlX19sYWJlbC0tbWF4IHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG4uaW5wdXQtcmFuZ2VfX2xhYmVsLS1taW4ge1xcbiAgbGVmdDogMDsgfVxcbi5pbnB1dC1yYW5nZV9fbGFiZWwtLW1heCB7XFxuICByaWdodDogMDsgfVxcbi5pbnB1dC1yYW5nZV9fbGFiZWwtLXZhbHVlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTEuOHJlbTsgfVxcbi5pbnB1dC1yYW5nZV9fbGFiZWwtY29udGFpbmVyIHtcXG4gIGxlZnQ6IC01MCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4uaW5wdXQtcmFuZ2VfX2xhYmVsLS1tYXggLmlucHV0LXJhbmdlX19sYWJlbC1jb250YWluZXIge1xcbiAgbGVmdDogNTAlOyB9XFxuLmlucHV0LXJhbmdlX190cmFjayB7XFxuICBiYWNrZ3JvdW5kOiAjY2NjO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDAuM3JlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogbGVmdCAwLjA1cyBlYXNlLW91dCwgd2lkdGggMC4wNXMgZWFzZS1vdXQ7XFxuICB0cmFuc2l0aW9uOiBsZWZ0IDAuMDVzIGVhc2Utb3V0LCB3aWR0aCAwLjA1cyBlYXNlLW91dDsgfVxcbi5pbnB1dC1yYW5nZS0tZGlzYWJsZWQgLmlucHV0LXJhbmdlX190cmFjayB7XFxuICBiYWNrZ3JvdW5kOiAjZWVlOyB9XFxuLmlucHV0LXJhbmdlX190cmFjay0tYmFja2dyb3VuZCB7XFxuICBsZWZ0OiA4cHg7XFxuICBtYXJnaW4tdG9wOiAtMC4xNXJlbTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxMHB4O1xcbiAgdG9wOiA1MCU7IH1cXG4uaW5wdXQtcmFuZ2VfX3RyYWNrLS1hY3RpdmUge1xcbiAgYmFja2dyb3VuZDogI2VhMWMyODsgfVxcbi5ncmVlbiAuaW5wdXQtcmFuZ2VfX3RyYWNrLS1hY3RpdmUge1xcbiAgYmFja2dyb3VuZDogIzg3YzQzNjsgfVxcbi5pbnB1dC1yYW5nZSB7XFxuICBoZWlnaHQ6IDFyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMjRweCAwIDE0cHggMDsgfVxcblwiXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHN0eWxlcy9nbG9iYWwuc2NzcyIsIm1vZHVsZS5leHBvcnRzID0gXCIucm9vdCB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlOyB9XFxuXFxuLm1lbnUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICB6LWluZGV4OiAxMDA7IH1cXG5cXG4uc2lkZSB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMjAwcHg7XFxuICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogMDtcXG4gIG1hcmdpbi10b3A6IDgzcHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiAjZTZlNmU2O1xcbiAgei1pbmRleDogMTAwO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuXFxuLmNvbnRlbnQge1xcbiAgbWFyZ2luLXRvcDogODNweDtcXG4gIG1hcmdpbi1sZWZ0OiAyMDBweDtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLmNvbnRlbnQud2l0aG91dHNpZGUge1xcbiAgbWFyZ2luLWxlZnQ6IDA7IH1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTUwcHgpIHtcXG4gIC5yb290IHtcXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuICAubWVudSB7XFxuICAgIHBvc2l0aW9uOiBpbmhlcml0O1xcbiAgICBoZWlnaHQ6IGF1dG87IH1cXG4gIC5zaWRlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIHBvc2l0aW9uOiBpbmhlcml0OyB9XFxuICAuY29udGVudCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIG1hcmdpbi1sZWZ0OiAwOyB9IH1cXG5cIlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzdHlsZXMvbGF5b3V0LnNjc3MiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLnJvb3Qge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbXMtZmxleC13cmFwOiB3cmFwO1xcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiA4M3B4O1xcbiAgYmFja2dyb3VuZDogd2hpdGU7IH1cXG5cXG4uc2VhcmNoIHtcXG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAgICAgLW1zLWZsZXg6IDE7XFxuICAgICAgICAgIGZsZXg6IDE7XFxuICBtYXgtd2lkdGg6IDI1MHB4O1xcbiAgaGVpZ2h0OiAzNnB4O1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7IH1cXG5cXG4ubG9nby1zZWN0aW9uIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi5sb2dvIHtcXG4gIGhlaWdodDogNzVweDsgfVxcblxcbi5sb2dvIGltZyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiAxMDAlOyB9XFxuXFxuLm5hdiB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGhlaWdodDogMzZweDsgfVxcblxcbi5sb2dpbmNvbnRhaW5lciB7XFxuICAtbXMtZmxleC1pdGVtLWFsaWduOiBlbmQ7XFxuICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLmxvZ2luY29udGFpbmVyLnNob3cge1xcbiAgZGlzcGxheTogaW5oZXJpdDsgfVxcblxcbi5sb2dpbmZvcm0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7IH1cXG5cXG5idXR0b24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiAwIDhweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYTFjMjg7IH1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTUwcHgpIHtcXG4gIC5sb2dvIHtcXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMTtcXG4gICAgICAgIC1tcy1mbGV4OiAxO1xcbiAgICAgICAgICAgIGZsZXg6IDE7XFxuICAgIHdpZHRoOiAxMDAlOyB9XFxuICAubmF2IHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87IH1cXG4gIC5zZWFyY2gge1xcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgICAgICAgLW1zLWZsZXg6IDEgMCAxMDAlO1xcbiAgICAgICAgICAgIGZsZXg6IDEgMCAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAyO1xcbiAgICAtbW96LWJveC1vcmRpbmFsLWdyb3VwOiAyO1xcbiAgICAtbXMtZmxleC1vcmRlcjogMjtcXG4gICAgLXdlYmtpdC1vcmRlcjogMjsgfSB9XFxuXCJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3R5bGVzL21lbnViYXIuc2NzcyIsIm1vZHVsZS5leHBvcnRzID0gXCIucm9vdCB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IHN0cmV0Y2g7XFxuICAgICAgLW1zLWZsZXgtcGFjazogc3RyZXRjaDtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG5mb3JtIHtcXG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAgICAgLW1zLWZsZXg6IDE7XFxuICAgICAgICAgIGZsZXg6IDE7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IHN0cmV0Y2g7XFxuICAgICAgLW1zLWZsZXgtcGFjazogc3RyZXRjaDtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xcbiAgYm9yZGVyOiBzb2xpZCAycHggI2U2ZTZlNjtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuYnV0dG9uIHtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhMWMyODsgfVxcblxcbmlucHV0IHtcXG4gIG1pbi13aWR0aDogY2FsYygxMDAlIC0gMTZweCk7XFxuICBwYWRkaW5nOiAwIDhweDtcXG4gIGJvcmRlcjogbm9uZTsgfVxcblwiXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHN0eWxlcy9zZWFyY2hiYXIuc2NzcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHdpdGhEYXRhIGZyb20gJy4uL2hvY3MvZGF0YSdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvYWRtaW4uc2NzcydcclxuaW1wb3J0IEdyaWRkbGUsIHsgcGx1Z2lucywgUm93RGVmaW5pdGlvbiwgQ29sdW1uRGVmaW5pdGlvbiB9IGZyb20gJ2dyaWRkbGUtcmVhY3QnO1xyXG5pbXBvcnQgeyBnZXRVc2VycywgZ2V0UzNWaWRlb3MsIGdldFZpZGVvcywgY3JlYXRlVmlkZW8sIGRlbGV0ZVZpZGVvIH0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucydcclxuaW1wb3J0IHsgd2l0aFVzZXIgfSBmcm9tICdvb3RoLWNsaWVudC1yZWFjdCdcclxuaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gJ3JlY29tcG9zZSdcclxuaW1wb3J0IHsgVGFiLCBUYWJzLCBUYWJMaXN0LCBUYWJQYW5lbCB9IGZyb20gJ3JlYWN0LXRhYnMnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IHZpZGVvcywgczN2aWRlb3MsIHVzZXJzIH0pID0+ICh7IHZpZGVvcywgczN2aWRlb3MsIHVzZXJzIH0pXHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgZmV0Y2hVc2VyczogKCkgPT4ge1xyXG4gICAgcmV0dXJuIGRpc3BhdGNoKGdldFVzZXJzKCkpXHJcbiAgfSxcclxuICBmZXRjaFMzVmlkZW9zOiAoKSA9PiB7XHJcbiAgICByZXR1cm4gZGlzcGF0Y2goZ2V0UzNWaWRlb3MoKSlcclxuICB9LFxyXG4gIGZldGNoVmlkZW9zOiAoKSA9PiB7XHJcbiAgICByZXR1cm4gZGlzcGF0Y2goZ2V0VmlkZW9zKCkpXHJcbiAgfSxcclxuICBhZGRWaWRlbzogKHZpZGVvLCBwb3MpID0+IHtcclxuICAgIHJldHVybiBkaXNwYXRjaChjcmVhdGVWaWRlbyh2aWRlbywgcG9zKSlcclxuICB9LFxyXG4gIHJlbW92ZVZpZGVvOiAoX2lkKSA9PiB7XHJcbiAgICByZXR1cm4gZGlzcGF0Y2goZGVsZXRlVmlkZW8oX2lkKSlcclxuICB9XHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxyXG4gIHdpdGhVc2VyLFxyXG4gIHdpdGhEYXRhKG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKSxcclxuKVxyXG4gIChjbGFzcyBBZG1pbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0ZSA9IHsgdGFiSW5kZXg6IDAsIHZpZGVvczogdGhpcy5wcm9wcy52aWRlb3MubGlzdCB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgIGlmICh0aGlzLnByb3BzLnVzZXIpIHtcclxuICAgICAgICB0aGlzLnByb3BzLmZldGNoVXNlcnMoKTtcclxuICAgICAgICB0aGlzLnJlZnJlc2hWaWRlb3MoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVmcmVzaFZpZGVvcygpIHtcclxuICAgICAgdGhpcy5wcm9wcy5mZXRjaFMzVmlkZW9zKCk7XHJcbiAgICAgIHRoaXMucHJvcHMuZmV0Y2hWaWRlb3MoKTtcclxuICAgIH1cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwibmV3IHZpZGVvcyBcIiwgbmV4dFByb3BzLnZpZGVvcylcclxuICAgICAgaWYgKG5leHRQcm9wcy5zM3ZpZGVvcyAmJiAhbmV4dFByb3BzLnMzdmlkZW9zLmxvYWRpbmcgJiYgbmV4dFByb3BzLnZpZGVvcyAmJiAhbmV4dFByb3BzLnZpZGVvcy5sb2FkaW5nKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJuZXcgdmlkZW9zIGluc2lkZVwiKVxyXG4gICAgICAgIGNvbnN0IHVuaW9uID0gWy4uLm5leHRQcm9wcy52aWRlb3MubGlzdF07XHJcbiAgICAgICAgbmV4dFByb3BzLnMzdmlkZW9zLmxpc3QuZm9yRWFjaCh2ID0+IHtcclxuICAgICAgICAgIGNvbnN0IGlkeCA9IHVuaW9uLmZpbmRJbmRleCh1ID0+IHUudGh1bWJwYXRoID09IHYudGh1bWJwYXRoKVxyXG4gICAgICAgICAgaWYgKGlkeCA9PSAtMSkge1xyXG4gICAgICAgICAgICBjb25zdCB2aWQgPSB7IC4uLnYgfTtcclxuICAgICAgICAgICAgdmlkLm5vdGluREIgPSB0cnVlO1xyXG4gICAgICAgICAgICB1bmlvbi51bnNoaWZ0KHZpZClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2aWRlb3M6IHVuaW9uIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgICAgIHshdGhpcy5wcm9wcy51c2VyID8gPHA+VGllbmVzIHF1ZSB0ZW5lciBwcml2aWxlZ2lvcyBkZSBhZG1pbmlzdHJhZG9yIHBhcmEgYWNjZXNhciBlc3RhIHDDoWdpbmE8L3A+IDpcclxuICAgICAgICAgICAgPFRhYnMgc2VsZWN0ZWRJbmRleD17dGhpcy5zdGF0ZS50YWJJbmRleH0gb25TZWxlY3Q9e3RhYkluZGV4ID0+IHRoaXMuc2V0U3RhdGUoeyB0YWJJbmRleCB9KX0+XHJcbiAgICAgICAgICAgICAgPFRhYkxpc3Q+XHJcbiAgICAgICAgICAgICAgICA8VGFiPlVzZXJzPC9UYWI+XHJcbiAgICAgICAgICAgICAgICA8VGFiPlZpZGVvczwvVGFiPlxyXG4gICAgICAgICAgICAgIDwvVGFiTGlzdD5cclxuXHJcbiAgICAgICAgICAgICAgPFRhYlBhbmVsPlxyXG4gICAgICAgICAgICAgICAgPGgzPlVzZXJzPC9oMz5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnVzZXJzLmxvYWRpbmcgPyA8ZGl2PkxvYWRpbmcuLi48L2Rpdj4gOlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4geyB0aGlzLnByb3BzLmZldGNoVXNlcnMoKSB9fT5VcGRhdGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZGRsZSBkYXRhPXt0aGlzLnByb3BzLnVzZXJzLmxpc3QubWFwKHUgPT4gdS5sb2NhbCl9IHBsdWdpbnM9e1twbHVnaW5zLkxvY2FsUGx1Z2luXX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFJvd0RlZmluaXRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2x1bW5EZWZpbml0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJDb3JyZW8gRWxlY3Ryw7NuaWNvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvUm93RGVmaW5pdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRkbGU+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICAgICAgICAgIDxUYWJQYW5lbD5cclxuICAgICAgICAgICAgICAgIDxoMz5WaWRlb3M8L2gzPlxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUudmlkZW9zLmxvYWRpbmcgJiYgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7IHRoaXMucmVmcmVzaFZpZGVvcygpIH19PlVwZGF0ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZGRsZSBkYXRhPXt0aGlzLnN0YXRlLnZpZGVvc30gcGx1Z2lucz17W3BsdWdpbnMuTG9jYWxQbHVnaW5dfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvd0RlZmluaXRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q29sdW1uRGVmaW5pdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBvc3RlcnBhdGhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlBvc3RlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUNvbXBvbmVudD17KHsgdmFsdWUgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IHN0eWxlPXt7IGhlaWdodDogMTAwIH19IHRpdGxlPXt2YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXt2YWx1ZX0gdGFyZ2V0PVwiX2JsYW5rXCI+PGltZyBzdHlsZT17eyBtYXhXaWR0aDogXCIxMDAlXCIsIG1heEhlaWdodDogXCIxMDAlXCIsIGRpc3BsYXk6IFwiYmxvY2tcIiB9fSBzcmM9e3ZhbHVlfSAvPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q29sdW1uRGVmaW5pdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cIl9pZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiSWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDb2x1bW5EZWZpbml0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q29sdW1uRGVmaW5pdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImRhdGVDcmVhdGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJEYXRlU2F2ZWRUb0RCXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ29tcG9uZW50PXsoeyBncmlkZGxlS2V5LCB2YWx1ZSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bW9tZW50KG5ldyBEYXRlKHBhcnNlSW50KHZhbHVlKSkpLmZvcm1hdChcIkRELU1NTS1ZWVlZLCBoaDptbTpzc1wiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q29sdW1uRGVmaW5pdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRhZ3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlRhZ3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDb2x1bW5EZWZpbml0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYWN0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQWN0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUNvbXBvbmVudD17KHsgZ3JpZGRsZUtleSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS52aWRlb3NbZ3JpZGRsZUtleV0ubm90aW5EQiAmJiA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuc3RhdGUudmlkZW9zW2dyaWRkbGVLZXldLm5vdGluREI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWRkVmlkZW8odGhpcy5zdGF0ZS52aWRlb3NbZ3JpZGRsZUtleV0sIGdyaWRkbGVLZXkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5BZGQgdG8gREI8L2J1dHRvbj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IXRoaXMuc3RhdGUudmlkZW9zW2dyaWRkbGVLZXldLm5vdGluREIgJiYgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucmVtb3ZlVmlkZW8odGhpcy5zdGF0ZS52aWRlb3NbZ3JpZGRsZUtleV0uX2lkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+RGVsZXRlPC9idXR0b24+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1Jvd0RlZmluaXRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZGRsZT4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIDxzdHlsZSBqc3g+e3N0eWxlc308L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgfVxyXG4gIClcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2FkbWluLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSW5wdXRSYW5nZSBmcm9tICdyZWFjdC1pbnB1dC1yYW5nZSc7XHJcbmltcG9ydCB7IGNvbXBvc2UsIHdpdGhTdGF0ZSwgd2l0aFN0YXRlSGFuZGxlcnMgfSBmcm9tICdyZWNvbXBvc2UnXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoeyB2YWx1ZSwgb25DaGFuZ2UgfSkgPT4gKFxyXG4gIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XHJcbiAgICA8c3BhbiBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAtMTgsIGxlZnQ6IDAsIGNvbG9yOiAnIzMzMycsIGZvbnRTaXplOiAnMC44ZW0nIH19PntnZXRMYWJlbCh2YWx1ZS5taW4pfTwvc3Bhbj5cclxuICAgIDxzcGFuIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6IC0xOCwgcmlnaHQ6IDAsIGNvbG9yOiAnIzMzMycsIGZvbnRTaXplOiAnMC44ZW0nIH19PntnZXRMYWJlbCh2YWx1ZS5tYXgpfTwvc3Bhbj5cclxuICAgIDxJbnB1dFJhbmdlIG1heFZhbHVlPXszMn0gbWluVmFsdWU9ezB9XHJcbiAgICAgIHZhbHVlPXt7IG1pbjogdG9TdGVwcyh2YWx1ZS5taW4pLCBtYXg6IHRvU3RlcHModmFsdWUubWF4KSB9fVxyXG4gICAgICBvbkNoYW5nZT17KHJhbmdlKSA9PiB7IG9uQ2hhbmdlKHsgbWF4OiB0b1NlY29uZHMocmFuZ2UubWF4KSwgbWluOiB0b1NlY29uZHMocmFuZ2UubWluKSB9KSB9fSBmb3JtYXRMYWJlbD17dmFsID0+IGBgfSAvPlxyXG4gIDwvZGl2PlxyXG4pXHJcblxyXG5cclxuY29uc3QgdG9TZWNvbmRzID0gKHZhbHVlKSA9PiB2YWx1ZSA8IDEwID8gdmFsdWUgOiB2YWx1ZSA8IDIwID8gKDEwICsgKHZhbHVlIC0gMTApICogNSkgOiAoNjAgKyAocGFyc2VJbnQodmFsdWUpIC0gMjApICogMTApXHJcbmNvbnN0IHRvU3RlcHMgPSAoc2Vjb25kcykgPT4gc2Vjb25kcyA8IDEwID8gc2Vjb25kcyA6IHNlY29uZHMgPCA2MCA/ICgxMCArIChzZWNvbmRzIC0gMTApIC8gNSkgOiBwYXJzZUludCgoc2Vjb25kcyAtIDYwKSAvIDEwICsgMjApXHJcbmNvbnN0IGdldExhYmVsID0gKHZhbCkgPT4ge1xyXG4gIGNvbnN0IG1pbnV0ID0gcGFyc2VJbnQodmFsIC8gNjApXHJcbiAgY29uc3Qgc2VjID0gcGFyc2VJbnQodmFsICUgNjApXHJcbiAgcmV0dXJuIGAke21pbnV0fToke3NlYyA8IDEwID8gXCIwXCIgKyBzZWMgOiBzZWN9YFxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9kdXJhdGlvbi1zbGlkZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBEdXJhdGlvblNsaWRlciBmcm9tICcuL2R1cmF0aW9uLXNsaWRlci5qcydcclxuaW1wb3J0IFByaWNlU2xpZGVyIGZyb20gJy4vcHJpY2Utc2xpZGVyLmpzJ1xyXG5pbXBvcnQgd2l0aERhdGEgZnJvbSAnLi4vaG9jcy9kYXRhJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9GaWx0ZXJzLnNjc3MnXHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoeyBmaWx0ZXJzOiB7IGR1cmF0aW9uRmlsdGVyLCBwcmljZUZpbHRlciB9IH0pID0+ICh7IGR1cmF0aW9uRmlsdGVyLCBwcmljZUZpbHRlciB9KVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gIGNoYW5nZUR1cmF0aW9uOiAobWluLCBtYXgpID0+XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdDSEFOR0VfRFVSQVRJT05fRklMVEVSJywgcGF5bG9hZDogeyBtaW4sIG1heCB9IH0pLFxyXG4gIGNoYW5nZVByaWNlOiAobWluLCBtYXgpID0+XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdDSEFOR0VfUFJJQ0VfRklMVEVSJywgcGF5bG9hZDogeyBtaW4sIG1heCB9IH0pXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoRGF0YShtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoXHJcbiAgKHsgZHVyYXRpb25GaWx0ZXIsIHByaWNlRmlsdGVyLCBjaGFuZ2VEdXJhdGlvbiwgY2hhbmdlUHJpY2UgfSkgPT4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cclxuICAgICAgICA8aDM+RHVyYWNpw7NuPC9oMz5cclxuICAgICAgICA8RHVyYXRpb25TbGlkZXIgdmFsdWU9e2R1cmF0aW9uRmlsdGVyfSBvbkNoYW5nZT17KHsgbWF4LCBtaW4gfSkgPT4geyBjaGFuZ2VEdXJhdGlvbihtaW4sIG1heCkgfX0gLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cclxuICAgICAgICA8aDM+UHJlY2lvPC9oMz5cclxuICAgICAgICA8UHJpY2VTbGlkZXIgdmFsdWU9e3ByaWNlRmlsdGVyfSBvbkNoYW5nZT17KHsgbWF4LCBtaW4gfSkgPT4geyBjaGFuZ2VQcmljZShtaW4sIG1heCkgfX0gLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cclxuICAgICAgICA8aDM+Q2F0ZWdvcmlhPC9oMz5cclxuICAgICAgICA8ZGl2PlRhZzEobnVtZXJvKTwvZGl2PlxyXG4gICAgICAgIDxkaXY+VGFnMihudW1lcm8pPC9kaXY+XHJcbiAgICAgICAgPGRpdj5UYWczKG51bWVybyk8L2Rpdj5cclxuICAgICAgICA8ZGl2PlRhZzQobnVtZXJvKTwvZGl2PlxyXG4gICAgICAgIDxkaXY+VmVyIG3DoXMgKzwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e3N0eWxlc308L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKSlcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2ZpbHRlcnMuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB3aXRoSGVhZCBmcm9tICcuLi9ob2NzL2hlYWQnXHJcbmltcG9ydCBGaWx0ZXJzIGZyb20gJy4vZmlsdGVycy5qcydcclxuaW1wb3J0IE1lbnVCYXIgZnJvbSAnLi9tZW51YmFyLmpzJ1xyXG5pbXBvcnQgZ2xvYmFsc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9nbG9iYWwuc2NzcydcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvbGF5b3V0LnNjc3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoSGVhZCgoeyB0aXRsZSwgSGVhZCwgaGlkZVNpZGUsIGNoaWxkcmVuIH0pID0+IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCIgLz5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCIvc3RhdGljL2Zhdmljb24uaWNvXCIgdHlwZT1cImltYWdlL3gtaWNvblwiIC8+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxyXG4gICAgICAgICAgICA8TWVudUJhciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHshaGlkZVNpZGUgJiYgPGRpdiBjbGFzc05hbWU9XCJzaWRlXCI+XHJcbiAgICAgICAgICAgIDxGaWx0ZXJzIC8+XHJcbiAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImNvbnRlbnRcIiArIChoaWRlU2lkZSA/IFwiIHdpdGhvdXRzaWRlXCIgOiBcIlwiKX0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2dsb2JhbHN0eWxlc308L3N0eWxlPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e3N0eWxlc308L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbikpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9sYXlvdXQuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbXBvc2UgfSBmcm9tICdyZWNvbXBvc2UnXHJcbmltcG9ydCB7IHdpdGhVc2VyIH0gZnJvbSAnb290aC1jbGllbnQtcmVhY3QnXHJcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi9zZWFyY2hiYXIuanMnXHJcbmltcG9ydCB3aXRoUm91dGVyIGZyb20gJy4uL2hvY3Mvcm91dGVyJ1xyXG5pbXBvcnQgd2l0aExpbmsgZnJvbSAnLi4vaG9jcy9saW5rJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9tZW51YmFyLnNjc3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxyXG4gIHdpdGhSb3V0ZXIsXHJcbiAgd2l0aExpbmssXHJcbiAgd2l0aFVzZXJcclxuKSgoeyBSb3V0ZXIsIExpbmssIHVzZXIgfSkgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxyXG5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nby1zZWN0aW9uXCI+XHJcbiAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9Jy8nPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL01leGljb0VuRHJvbkxvZ28ucG5nXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hcIj5cclxuICAgICAgPFNlYXJjaEJhciAvPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXZcIj5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7IFJvdXRlci5wdXNoKHVzZXIgPyAnL2xvZ291dCcgOiAnL2xvZ2luJykgfX0+e3VzZXIgPyBcIkNlcnJhciBTZXNpw7NuXCIgOiBcIkluaWNpYXIgU2VzacOzblwifTwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgIDxzdHlsZSBqc3g+e3N0eWxlc308L3N0eWxlPiBcclxuICA8L2Rpdj5cclxuKSlcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21lbnViYXIuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBJbnB1dFJhbmdlIGZyb20gJ3JlYWN0LWlucHV0LXJhbmdlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICh7IHZhbHVlLCBvbkNoYW5nZSB9KSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9e1wiZ3JlZW5cIn0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XHJcbiAgICA8c3BhbiBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAtMTgsIGxlZnQ6IDAsIGNvbG9yOiAnIzMzMycsIGZvbnRTaXplOiAnMC44ZW0nIH19PntgJHt2YWx1ZS5taW59IE1YTmB9PC9zcGFuPlxyXG4gICAgPHNwYW4gc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogLTE4LCByaWdodDogMCwgY29sb3I6ICcjMzMzJywgZm9udFNpemU6ICcwLjhlbScgfX0+e2Ake3ZhbHVlLm1heH0gTVhOYH08L3NwYW4+XHJcbiAgICA8SW5wdXRSYW5nZSBtYXhWYWx1ZT17MjB9IG1pblZhbHVlPXswfVxyXG4gICAgICB2YWx1ZT17eyBtaW46IHRvU3RlcHModmFsdWUubWluKSwgbWF4OiB0b1N0ZXBzKHZhbHVlLm1heCkgfX1cclxuICAgICAgb25DaGFuZ2U9eyhyYW5nZSkgPT4geyBvbkNoYW5nZSh7IG1heDogdG9Nb25leShyYW5nZS5tYXgpLCBtaW46IHRvTW9uZXkocmFuZ2UubWluKSB9KSB9fSBmb3JtYXRMYWJlbD17dmFsID0+IGBgfSAvPlxyXG4gIDwvZGl2PlxyXG4pXHJcblxyXG5cclxuY29uc3QgdG9Nb25leSA9ICh2YWx1ZSkgPT4gdmFsdWUgKiA1XHJcbmNvbnN0IHRvU3RlcHMgPSAobW9uZXkpID0+IG1vbmV5IC8gNVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvcHJpY2Utc2xpZGVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB3aXRoU3RhdGUgfSBmcm9tICdyZWNvbXBvc2UnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3NlYXJjaGJhci5zY3NzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0YXRlKCd2YWx1ZScsICdjaGFuZ2VWYWx1ZScsICcnKShcclxuICAoeyB2YWx1ZSwgY2hhbmdlVmFsdWUsIG9uUmVxdWVzdFNlYXJjaCwgb25DaGFuZ2UgfSkgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPXtcInJvb3RcIn0+XHJcblxyXG4gICAgPGZvcm0gb25TdWJtaXQ9e2UgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgb25SZXF1ZXN0U2VhcmNoKHZhbHVlKVxyXG4gICAgfX0+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQnVzY2FyXCIgdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgY2hhbmdlVmFsdWUodGhpcy52YWx1ZSlcclxuICAgICAgICBvbkNoYW5nZSh0aGlzLnZhbHVlKVxyXG4gICAgICB9fSAvPlxyXG4gICAgPC9mb3JtPlxyXG4gICAgPGJ1dHRvbj48aSBjbGFzc05hbWU9J2ZhIGZhLXNlYXJjaCcgLz48L2J1dHRvbj5cclxuXHJcbiAgICA8c3R5bGUganN4PntzdHlsZXN9PC9zdHlsZT5cclxuICA8L2RpdiA+XHJcbikpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9zZWFyY2hiYXIuanMiLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCB7Z2V0Q29udGV4dH0gZnJvbSAncmVjb21wb3NlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0Q29udGV4dCh7XHJcbiAgICBIZWFkOiBQcm9wVHlwZXMuZnVuY1xyXG59KVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2hvY3MvaGVhZC5qcyIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IHtnZXRDb250ZXh0fSBmcm9tICdyZWNvbXBvc2UnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRDb250ZXh0KHtcclxuICAgIExpbms6IFByb3BUeXBlcy5mdW5jXHJcbn0pXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaG9jcy9saW5rLmpzIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQge2dldENvbnRleHR9IGZyb20gJ3JlY29tcG9zZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldENvbnRleHQoe1xyXG4gICAgUm91dGVyOiBQcm9wVHlwZXMub2JqZWN0XHJcbn0pXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaG9jcy9yb3V0ZXIuanMiLCJpbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHtjb21wb3NlSW5pdGlhbFByb3BzfSBmcm9tICdjb21wb3NlLW5leHQnXHJcbmltcG9ydCBwcm92aWRlTmV4dCBmcm9tICdzdGFhcnQvbGliL3Byb3ZpZGVycy9uZXh0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJvdmlkZU5leHQoUm91dGVyLCBMaW5rLCBIZWFkKVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb3ZpZGVycy9uZXh0LmpzIiwiaW1wb3J0IE9vdGhDbGllbnQgZnJvbSAnb290aC1jbGllbnQnXHJcbmltcG9ydCB3aXRoT290aE5leHQgZnJvbSAnb290aC1jbGllbnQtcmVhY3QtbmV4dCdcclxuXHJcblxyXG5jb25zdCBvb3RoQ2xpZW50ID0gbmV3IE9vdGhDbGllbnQoe1xyXG4gICAgb290aFVybDogJy9hdXRoJyxcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhPb3RoTmV4dChvb3RoQ2xpZW50KVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm92aWRlcnMvb290aC5qcyIsImltcG9ydCB3aXRoT290aE5leHQgZnJvbSAnLi9vb3RoJ1xyXG5pbXBvcnQgd2l0aE5leHQgZnJvbSAnLi9uZXh0J1xyXG5pbXBvcnQgeyBjb21wb3NlLCBzZXRTdGF0aWMgfSBmcm9tICdyZWNvbXBvc2UnXHJcbmltcG9ydCB3aXRoUmVkdXggZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiXHJcbmltcG9ydCB7IG1ha2VTdG9yZSB9IGZyb20gJy4uL3JlZHV4L3N0b3JlLmpzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcclxuICAgIHdpdGhSZWR1eChtYWtlU3RvcmUsIChzdGF0ZSkgPT4gKHsgLi4uc3RhdGUgfSkpLFxyXG4gICAgd2l0aE9vdGhOZXh0LFxyXG4gICAgd2l0aE5leHQsXHJcbilcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm92aWRlcnMvcGFnZS5qcyIsImltcG9ydCB7IHJlcXVlc3QsIEdyYXBoUUxDbGllbnQgfSBmcm9tICdncmFwaHFsLXJlcXVlc3QnXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RGF0YSA9IChjb2xsZWN0aW9uLCApID0+IHtcclxuICByZXR1cm4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnRkVUQ0hJTkdfVVNFUlMnIH0pO1xyXG4gICAgY29uc3QgcXVlcnkgPSBgeyB1c2VycyB7bG9jYWwge2VtYWlsLCBwYXNzd29yZCwgdmVyaWZpY2F0aW9uVG9rZW59fX1gXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3QoJy9ncmFwaHFsJywgcXVlcnkpXHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdSRUFEWV9VU0VSUycsIHBheWxvYWQ6IHJlc3BvbnNlLnVzZXJzIH0pXHJcbiAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlcnMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGFzeW5jIGRpc3BhdGNoID0+IHtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogJ0ZFVENISU5HX1VTRVJTJyB9KTtcclxuICAgIGNvbnN0IHF1ZXJ5ID0gYHsgdXNlcnMge2xvY2FsIHtlbWFpbCwgcGFzc3dvcmQsIHZlcmlmaWNhdGlvblRva2VufX19YFxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0KCcvZ3JhcGhxbCcsIHF1ZXJ5KVxyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnUkVBRFlfVVNFUlMnLCBwYXlsb2FkOiByZXNwb25zZS51c2VycyB9KVxyXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFMzVmlkZW9zID0gKCkgPT4ge1xyXG4gIHJldHVybiBhc3luYyBkaXNwYXRjaCA9PiB7XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdGRVRDSElOR19TM1ZJREVPUycgfSk7XHJcbiAgICBjb25zdCBxdWVyeSA9IGB7czN2aWRlb3N7dGh1bWJwYXRoLCBmdWxscGF0aCwgcG9zdGVycGF0aCwgdGFnc319YFxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0KCcvZ3JhcGhxbCcsIHF1ZXJ5KVxyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnUkVBRFlfUzNWSURFT1MnLCBwYXlsb2FkOiByZXNwb25zZS5zM3ZpZGVvcyB9KVxyXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFZpZGVvcyA9ICgpID0+IHtcclxuICByZXR1cm4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnRkVUQ0hJTkdfVklERU9TJyB9KTtcclxuICAgIGNvbnN0IHF1ZXJ5ID0gYHt2aWRlb3N7X2lkLCB0aXRsZSwgdGh1bWJwYXRoLCBmdWxscGF0aCwgcG9zdGVycGF0aCwgdGFncywgY3JlYXRlZEJ5SWQsIGRhdGVDcmVhdGVkfX1gXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3QoJy9ncmFwaHFsJywgcXVlcnkpXHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdSRUFEWV9WSURFT1MnLCBwYXlsb2FkOiByZXNwb25zZS52aWRlb3MgfSlcclxuICAgIHJldHVybiByZXNwb25zZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVWaWRlbyA9ICh2aWRlbywgcG9zKSA9PiB7XHJcbiAgcmV0dXJuIGFzeW5jIGRpc3BhdGNoID0+IHtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogJ0ZFVENISU5HX0NSRUFURV9WSURFTycgfSk7XHJcbiAgICBjb25zdCBjbGllbnQgPSBuZXcgR3JhcGhRTENsaWVudCgnL2dyYXBocWwnLCB7XHJcbiAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXHJcbiAgICAgIG1vZGU6ICdjb3JzJ1xyXG4gICAgfSlcclxuICAgIGNvbnN0IHF1ZXJ5ID0gYG11dGF0aW9uIGFkZFZpZGVvKCR2aWRlbzogVmlkZW9JbnB1dCkge1xyXG4gICAgY3JlYXRlVmlkZW8odmlkZW86ICR2aWRlbykge1xyXG4gICAgICBfaWRcclxuICAgICAgdGl0bGVcclxuICAgICAgdGh1bWJwYXRoXHJcbiAgICAgIGZ1bGxwYXRoXHJcbiAgICAgIHBvc3RlcnBhdGhcclxuICAgICAgdGFnc1xyXG4gICAgICBjcmVhdGVkQnlJZFxyXG4gICAgICBkYXRlQ3JlYXRlZFxyXG4gICAgfVxyXG4gIH1gXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zb2xlLmxvZyh7IHZpZGVvOiB2aWRlbyB9KVxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNsaWVudC5yZXF1ZXN0KHF1ZXJ5LCB7IHZpZGVvOiB2aWRlbyB9KVxyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5jcmVhdGVWaWRlbylcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnUkVBRFlfQ1JFQVRFX1ZJREVPJywgcGF5bG9hZDogcmVzcG9uc2UuY3JlYXRlVmlkZW8sIHBvczogcG9zIH0pXHJcbiAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ0VSUk9SX0NSRUFURV9WSURFTycsIHBheWxvYWQ6IGVycm9yIH0pXHJcbiAgICAgIHJldHVybiBlcnJvcjtcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlVmlkZW8gPSAoX2lkKSA9PiB7XHJcbiAgcmV0dXJuIGFzeW5jIGRpc3BhdGNoID0+IHtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogJ0ZFVENISU5HX0RFTEVURV9WSURFTycgfSk7XHJcbiAgICBjb25zdCBjbGllbnQgPSBuZXcgR3JhcGhRTENsaWVudCgnL2dyYXBocWwnLCB7XHJcbiAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXHJcbiAgICAgIG1vZGU6ICdjb3JzJ1xyXG4gICAgfSlcclxuICAgIGNvbnN0IHF1ZXJ5ID0gYG11dGF0aW9uIHJlbW92ZVZpZGVvKCRfaWQ6IElEISkge1xyXG4gICAgZGVsZXRlVmlkZW8oX2lkOiAkX2lkKSB7XHJcbiAgICAgIF9pZFxyXG4gICAgfVxyXG4gIH1gXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNsaWVudC5yZXF1ZXN0KHF1ZXJ5LCB7IF9pZCB9KVxyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6ICdSRUFEWV9ERUxFVEVfVklERU8nLCBwYXlsb2FkOiByZXNwb25zZS5kZWxldGVWaWRlbyB9KVxyXG4gICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6ICdFUlJPUl9ERUxFVEVfVklERU8nLCBwYXlsb2FkOiBlcnJvciB9KVxyXG4gICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICB9O1xyXG4gIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JlZHV4L2FjdGlvbnMuanMiLCJjb25zdCBpbml0aWFsID0ge1xyXG4gIGR1cmF0aW9uRmlsdGVyOiB7IG1pbjogMCwgbWF4OiAxODAgfSxcclxuICBwcmljZUZpbHRlcjogeyBtaW46IDAsIG1heDogMTAwIH0sXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGluaXRpYWwsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgJ0NIQU5HRV9EVVJBVElPTl9GSUxURVInOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZHVyYXRpb25GaWx0ZXI6IHsgLi4uYWN0aW9uLnBheWxvYWQgfSB9XHJcbiAgICBjYXNlICdDSEFOR0VfUFJJQ0VfRklMVEVSJzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHByaWNlRmlsdGVyOiB7IC4uLmFjdGlvbi5wYXlsb2FkIH0gfVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdXgvZmlsdGVycy5qcyIsImNvbnN0IGluaXRpYWwgPSB7IGxvYWRpbmc6IGZhbHNlLCBsaXN0OiBbXSB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBpbml0aWFsLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlICdGRVRDSElOR19ST0xFUyc6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiB0cnVlIH1cclxuICAgIGNhc2UgJ1JFQURZX1JPTEVTJzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IGZhbHNlLCBsaXN0OiBhY3Rpb24ucGF5bG9hZCB9XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWR1eC9yb2xlcy5qcyIsImNvbnN0IGluaXRpYWwgPSB7IGxvYWRpbmc6IGZhbHNlLCBsaXN0OiBbXSB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBpbml0aWFsLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlICdGRVRDSElOR19TM1ZJREVPUyc6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiB0cnVlIH1cclxuICAgIGNhc2UgJ1JFQURZX1MzVklERU9TJzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IGZhbHNlLCBsaXN0OiBhY3Rpb24ucGF5bG9hZCB9XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWR1eC9zM3ZpZGVvcy5qcyIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiXHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nXHJcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnXHJcbmltcG9ydCBmaWx0ZXJzIGZyb20gJy4vZmlsdGVycydcclxuaW1wb3J0IHVzZXJzIGZyb20gJy4vdXNlcnMnXHJcbmltcG9ydCB2aWRlb3MgZnJvbSAnLi92aWRlb3MnXHJcbmltcG9ydCBzM3ZpZGVvcyBmcm9tICcuL3MzdmlkZW9zJ1xyXG5pbXBvcnQgcm9sZXMgZnJvbSAnLi9yb2xlcydcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gIGZpbHRlcnMsXHJcbiAgdmlkZW9zLFxyXG4gIHMzdmlkZW9zLFxyXG4gIHVzZXJzLFxyXG4gIHJvbGVzLFxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBtYWtlU3RvcmUgPSAoaW5pdGlhbFN0YXRlKSA9PiB7XHJcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUodGh1bmtNaWRkbGV3YXJlKSkpXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWR1eC9zdG9yZS5qcyIsImNvbnN0IGluaXRpYWwgPSB7IGxvYWRpbmc6IGZhbHNlLCBsaXN0OiBbXSB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBpbml0aWFsLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlICdGRVRDSElOR19VU0VSUyc6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiB0cnVlIH1cclxuICAgIGNhc2UgJ1JFQURZX1VTRVJTJzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IGZhbHNlLCBsaXN0OiBhY3Rpb24ucGF5bG9hZCB9XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWR1eC91c2Vycy5qcyIsImNvbnN0IGluaXRpYWwgPSB7IGxvYWRpbmc6IGZhbHNlLCBsaXN0OiBbXSB9XHJcbmxldCBuZXdsaXN0ID0gW11cclxubGV0IGlkeCA9IDA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBpbml0aWFsLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlICdGRVRDSElOR19WSURFT1MnOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogdHJ1ZSB9XHJcbiAgICBjYXNlICdSRUFEWV9WSURFT1MnOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogZmFsc2UsIGxpc3Q6IGFjdGlvbi5wYXlsb2FkIH1cclxuICAgIGNhc2UgJ0ZFVENISU5HX0NSRUFURV9WSURFTyc6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiB0cnVlIH1cclxuICAgIGNhc2UgJ1JFQURZX0NSRUFURV9WSURFTyc6XHJcbiAgICAgIG5ld2xpc3QgPSBbLi4uc3RhdGUubGlzdF1cclxuICAgICAgaWYgKGFjdGlvbi5wb3MgPCBuZXdsaXN0Lmxlbmd0aClcclxuICAgICAgICBuZXdsaXN0LnNwbGljZShhY3Rpb24ucG9zLCAwLCBhY3Rpb24ucGF5bG9hZClcclxuICAgICAgZWxzZSBuZXdsaXN0LnVuc2hpZnQoYWN0aW9uLnBheWxvYWQpXHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiBmYWxzZSwgbGlzdDogbmV3bGlzdCB9XHJcbiAgICBjYXNlICdFUlJPUl9DUkVBVEVfVklERU8nOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogZmFsc2UgfVxyXG4gICAgY2FzZSAnRkVUQ0hJTkdfREVMRVRFX1ZJREVPJzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IHRydWUgfVxyXG4gICAgY2FzZSAnUkVBRFlfREVMRVRFX1ZJREVPJzpcclxuICAgICAgbmV3bGlzdCA9IFsuLi5zdGF0ZS5saXN0XVxyXG4gICAgICBpZHggPSBuZXdsaXN0LmZpbmRJbmRleCh2ID0+IHYuX2lkID09IGFjdGlvbi5wYXlsb2FkLl9pZClcclxuICAgICAgaWYgKGlkeCA+IC0xKSBuZXdsaXN0LnNwbGljZShpZHgsIDEpXHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiBmYWxzZSwgbGlzdDogbmV3bGlzdCB9XHJcbiAgICBjYXNlICdFUlJPUl9ERUxFVEVfVklERU8nOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogZmFsc2UgfVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdXgvdmlkZW9zLmpzIl0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7OztBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFkQTtBQUNBO0FBaUJBO0FBQ0E7QUFBQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFMQTtBQUNBOztBQURBO0FBUUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQVpBO0FBQUE7QUFBQTtBQWNBO0FBQUE7QUFDQTtBQWZBO0FBQUE7QUFBQTtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBaENBO0FBQUE7QUFBQTtBQWlDQTtBQUNBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUdBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQUE7O0FBRkE7QUFRQTtBQVJBO0FBQ0E7O0FBT0E7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFFQTtBQUZBOztBQUxBOztBQUFBO0FBU0E7QUFUQTtBQUNBO0FBVUE7QUFBQTs7QUFGQTtBQUlBO0FBSkE7QUFDQTtBQUtBO0FBQUE7O0FBRkE7QUFJQTtBQUpBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBSkE7O0FBQUE7QUFTQTtBQVRBO0FBQ0E7QUFVQTtBQUFBOztBQUZBO0FBSUE7QUFKQTtBQUNBO0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUNBO0FBRkE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQURBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEE7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUE3REE7QUFvRkE7QUFwRkE7QUFuQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBRUE7QUFDQTs7Ozs7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUZBO0FBRUE7QUFGQTtBQUFBO0FBQUE7QUFBQTs7QUFKQTtBQUNBO0FBVUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBSkE7QUFDQTtBQU1BO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7QUFFQTtBQUZBO0FBQUE7O0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUhBO0FBR0E7O0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUhBO0FBR0E7O0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFsQkE7QUFBQTtBQUFBO0FBRkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFFQTtBQUNBOzs7Ozs7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUVBO0FBRkE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUVBO0FBRkE7QUFBQTs7QUFFQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUVBO0FBRkE7QUFBQTs7QUFFQTtBQUNBO0FBREE7QUFBQTtBQVpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7QUFFQTtBQUZBO0FBQUE7O0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUtBO0FBTEE7QUFLQTs7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUdBO0FBSEE7QUFBQTs7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFmQTtBQUFBO0FBQUE7QUFMQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBOzs7QUFFQTtBQUNBOzs7Ozs7O0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFGQTtBQUVBO0FBRkE7QUFBQTtBQUFBO0FBQUE7O0FBSkE7QUFDQTtBQVVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7OztBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUlBO0FBQ0E7QUFIQTs7QUFBQTtBQUlBO0FBSkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTs7QUFBQTtBQUtBO0FBTEE7QUFLQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFYQTtBQUFBO0FBQUE7QUFGQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBOzs7QUFFQTtBQUNBOzs7O0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBOzs7QUFFQTtBQUNBOzs7O0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBOzs7QUFFQTtBQUNBOzs7O0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7Ozs7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUVBO0FBSUE7QUFIQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUNBOzs7QUFBQTtBQUFBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTs7Ozs7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFEQTtBQUFBO0FBR0E7QUFDQTtBQURBO0FBSEE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQU9BO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQURBO0FBQUE7QUFHQTtBQUNBO0FBREE7QUFIQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBTkE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBT0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBREE7QUFBQTtBQUdBO0FBQ0E7QUFEQTtBQUhBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFPQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFEQTtBQUFBO0FBR0E7QUFDQTtBQURBO0FBSEE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQU9BO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQURBO0FBSUE7QUFFQTtBQUhBO0FBSEE7QUFtQkE7QUFDQTtBQURBO0FBbkJBO0FBb0JBO0FBQ0E7QUFEQTtBQXBCQTtBQUNBO0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBeEJBO0FBQUE7QUF5QkE7QUFDQTtBQURBO0FBekJBO0FBQ0E7QUEwQkE7QUEzQkE7QUFDQTtBQURBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQTZCQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFEQTtBQUlBO0FBRUE7QUFIQTtBQUhBO0FBQUE7QUFBQTtBQVlBO0FBQ0E7QUFEQTtBQVpBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFmQTtBQUFBO0FBZ0JBO0FBQ0E7QUFEQTtBQWhCQTtBQUNBO0FBaUJBO0FBbEJBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFvQkE7QUFyQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0VBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUVBOztBQVRBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUVBOztBQVRBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUVBOztBQVRBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBUkE7QUFDQTtBQU9BO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBRUE7O0FBVEE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUdBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUVBOztBQTVCQTtBQUNBOzs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        