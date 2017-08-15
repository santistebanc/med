'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteVideo = exports.createVideo = exports.getVideos = exports.getS3Videos = exports.getUsers = exports.getData = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _graphqlRequest = require('graphql-request');

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