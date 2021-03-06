/*
 * ********************************************************************************************************************
 *  Backendless SDK for JavaScript. Version: 4.4.3-rt.13
 *
 *  Copyright 2012-2017 BACKENDLESS.COM. All Rights Reserved.
 *
 *  NOTICE: All information contained herein is, and remains the property of Backendless.com and its suppliers,
 *  if any. The intellectual and technical concepts contained herein are proprietary to Backendless.com and its
 *  suppliers and may be covered by U.S. and Foreign Patents, patents in process, and are protected by trade secret
 *  or copyright law. Dissemination of this information or reproduction of this material is strictly forbidden
 *  unless prior written permission is obtained from Backendless.com.
 * ********************************************************************************************************************
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Backendless"] = factory();
	else
		root["Backendless"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 45);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _async = __webpack_require__(3);

var _async2 = _interopRequireDefault(_async);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Utils = {
  isObject: function isObject(obj) {
    return obj === Object(obj);
  },


  isArray: Array.isArray || function (obj) {
    return Object.prototype.toString.call(obj).slice(8, -1) === 'Array';
  },

  isString: function isString(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1) === 'String';
  },
  isNumber: function isNumber(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1) === 'Number';
  },
  isFunction: function isFunction(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1) === 'Function';
  },
  isBoolean: function isBoolean(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1) === 'Boolean';
  },
  isDate: function isDate(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1) === 'Date';
  },


  isBrowser: isBrowser(),

  castArray: function castArray(value) {
    if (Utils.isArray(value)) {
      return value;
    }

    return [value];
  },
  isEmpty: function isEmpty(obj) {
    if (obj === null || obj === undefined) {
      return true;
    }

    if (Utils.isArray(obj) || Utils.isString(obj)) {
      return obj.length === 0;
    }

    for (var key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] !== undefined && obj[key] !== null) {
        return false;
      }
    }

    return true;
  },
  toQueryParams: function toQueryParams(params) {
    params = params || {};
    var result = [];

    for (var key in params) {
      if (params.hasOwnProperty(key)) {
        result.push(key + '=' + encodeURIComponent(params[key]));
      }
    }

    return result.join('&');
  },
  tryParseJSON: function tryParseJSON(s) {
    try {
      return typeof s === 'string' ? JSON.parse(s) : s;
    } catch (e) {
      return s;
    }
  },
  getClassName: function getClassName(obj) {
    if (obj.prototype && obj.prototype.___class) {
      return obj.prototype.___class;
    }

    if (Utils.isFunction(obj) && obj.name) {
      return obj.name;
    }

    var instStringified = Utils.isFunction(obj) ? obj.toString() : obj.constructor.toString();
    var results = instStringified.match(/function\s+(\w+)/);

    return results && results.length > 1 ? results[1] : '';
  },
  encodeArrayToUriComponent: function encodeArrayToUriComponent(arr) {
    return arr.map(function (item) {
      return encodeURIComponent(item);
    }).join(',');
  },
  deepExtend: function deepExtend(destination, source) {
    //TODO: refactor it
    for (var property in source) {
      if (source[property] !== undefined && source.hasOwnProperty(property)) {
        destination[property] = destination[property] || {};
        destination[property] = classWrapper(source[property]);

        if (destination[property] && destination[property].hasOwnProperty(property) && destination[property][property] && destination[property][property].hasOwnProperty('__originSubID')) {

          destination[property][property] = classWrapper(destination[property]);
        }
      }
    }

    return destination;
  },
  extractResponder: function extractResponder(args) {
    for (var i = 0; i < args.length; i++) {
      if (args[i] instanceof _async2.default) {
        return args[i];
      }
    }
  },
  wrapAsync: function wrapAsync(asyncHandler, parser, context) {
    //TODO: should we remove it?
    if (asyncHandler instanceof _async2.default && !parser) {
      return asyncHandler;
    }

    var success = function success(data) {
      if (parser) {
        data = parser.call(context, data);
      }

      asyncHandler.success(data);
    };

    var error = function error(data) {
      asyncHandler.fault(data);
    };

    return new _async2.default(success, error);
  },
  promisified: function promisified(method) {
    return function () {
      Utils.checkPromiseSupport();

      var args = [].slice.call(arguments);
      var context = this;
      var fn = typeof method === 'function' ? method : context[method];

      return new Promise(function (resolve, reject) {
        args.push(new _async2.default(resolve, reject, context));
        fn.apply(context, args);
      });
    };
  },
  synchronized: function synchronized(method) {
    return function () {
      // eslint-disable-next-line no-console
      console.warn('Using of sync methods is an outdated approach. Please use async methods.');

      var context = this;
      var fn = typeof method === 'function' ? method : context[method];

      return fn.apply(context, arguments);
    };
  },
  checkPromiseSupport: function checkPromiseSupport() {
    if (typeof Promise === 'undefined') {
      throw new Error('This browser doesn\'t support Promise API. Please use polyfill.\n' + 'More info is in the Backendless JS-SDK docs: https://backendless.com/docs/js/doc.html#sync-and-async-calls');
    }
  },
  mirrorKeys: function mirrorKeys(obj) {
    var mirroredObject = {};

    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        mirroredObject[key] = key;
      }
    }

    return mirroredObject;
  },
  uuid: function uuid() {
    var chr4 = function chr4() {
      return Math.random().toString(16).slice(-4).toUpperCase();
    };
    var chr8 = function chr8() {
      return '' + chr4() + chr4();
    };
    var chr12 = function chr12() {
      return '' + chr4() + chr4() + chr4();
    };

    return chr8() + '-' + chr4() + '-' + chr4() + '-' + chr4() + '-' + chr12();
  }
};

function isBrowser() {
  return (typeof self === 'undefined' ? 'undefined' : _typeof(self)) === 'object' && self.self === self && (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window === self;
}

function classWrapper(obj) {
  //TODO: refactor it
  var wrapper = function wrapper(obj) {
    var wrapperName = null;
    var Wrapper = null;

    for (var property in obj) {
      if (obj.hasOwnProperty(property)) {
        if (property === '___class') {
          wrapperName = obj[property];
          break;
        }
      }
    }

    if (wrapperName) {
      try {
        Wrapper = eval(wrapperName);
        obj = Utils.deepExtend(new Wrapper(), obj);
      } catch (e) {}
    }

    return obj;
  };

  if (Utils.isObject(obj) && obj != null) {
    if (Utils.isArray(obj)) {
      for (var i = obj.length; i--;) {
        obj[i] = wrapper(obj[i]);
      }
    } else {
      obj = wrapper(obj);
    }
  }

  return obj;
}

exports.default = Utils;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _localVars = __webpack_require__(6);

var _localVars2 = _interopRequireDefault(_localVars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Urls = {
  root: function root() {
    return _localVars2.default.appPath;
  },

  blServices: function blServices() {
    return Urls.root() + '/services';
  },
  blServiceMethod: function blServiceMethod(name, method) {
    return Urls.blServices() + '/' + name + '/' + method;
  },

  blEvent: function blEvent(eventName) {
    return Urls.root() + '/servercode/events/' + eventName;
  },

  logging: function logging() {
    return Urls.root() + '/log';
  },

  cache: function cache() {
    return Urls.root() + '/cache';
  },
  cacheItem: function cacheItem(key) {
    return Urls.cache() + '/' + key;
  },
  cacheItemExpireIn: function cacheItemExpireIn(key) {
    return Urls.cacheItem(key) + '/expireIn';
  },
  cacheItemExpireAt: function cacheItemExpireAt(key) {
    return Urls.cacheItem(key) + '/expireAt';
  },
  cacheItemCheck: function cacheItemCheck(key) {
    return Urls.cacheItem(key) + '/check';
  },

  counters: function counters() {
    return Urls.root() + '/counters';
  },
  counter: function counter(name) {
    return Urls.counters() + '/' + name;
  },
  counterAddAndGet: function counterAddAndGet(name) {
    return Urls.counter(name) + '/incrementby/get';
  },
  counterGetAndAdd: function counterGetAndAdd(name) {
    return Urls.counter(name) + '/get/incrementby';
  },
  counterIncrementAndGet: function counterIncrementAndGet(name) {
    return Urls.counter(name) + '/increment/get';
  },
  counterDecrementAndGet: function counterDecrementAndGet(name) {
    return Urls.counter(name) + '/decrement/get';
  },
  counterGetAndDecrement: function counterGetAndDecrement(name) {
    return Urls.counter(name) + '/get/decrement';
  },
  counterGetAndIncrement: function counterGetAndIncrement(name) {
    return Urls.counter(name) + '/get/increment';
  },
  counterCompareAndSet: function counterCompareAndSet(name) {
    return Urls.counter(name) + '/get/compareandset';
  },
  counterReset: function counterReset(name) {
    return Urls.counter(name) + '/reset';
  },

  data: function data() {
    return Urls.root() + '/data';
  },
  dataTable: function dataTable(tableName) {
    return Urls.data() + '/' + tableName;
  },
  dataTableObject: function dataTableObject(tableName, objectId) {
    return Urls.dataTable(tableName) + '/' + objectId;
  },
  dataTableObjectRelation: function dataTableObjectRelation(tableName, objectId, columnName) {
    return Urls.dataTableObject(tableName, objectId) + '/' + columnName;
  },
  dataTableCount: function dataTableCount(tableName) {
    return Urls.dataTable(tableName) + '/count';
  },
  dataTableProps: function dataTableProps(tableName) {
    return Urls.dataTable(tableName) + '/properties';
  },
  dataBulkTable: function dataBulkTable(tableName) {
    return Urls.data() + '/bulk/' + tableName;
  },
  dataObjectPermission: function dataObjectPermission(tableName, permissionType, objectId) {
    return Urls.dataTable(tableName) + '/permissions/' + permissionType + '/' + encodeURIComponent(objectId);
  },

  messaging: function messaging() {
    return Urls.root() + '/messaging';
  },
  messagingPush: function messagingPush() {
    return Urls.messaging() + '/push';
  },
  messagingPushWithTemplate: function messagingPushWithTemplate(templateName) {
    return Urls.messagingPush() + '/' + templateName;
  },
  messagingEmail: function messagingEmail() {
    return Urls.messaging() + '/email';
  },
  messagingChannel: function messagingChannel(channel) {
    return Urls.messaging() + '/' + channel;
  },
  messagingMessage: function messagingMessage(messageId) {
    return Urls.messaging() + '/' + messageId;
  },
  messagingRegistrations: function messagingRegistrations() {
    return Urls.messaging() + '/registrations';
  },
  messagingRegistrationDevice: function messagingRegistrationDevice(deviceId) {
    return Urls.messagingRegistrations() + '/' + deviceId;
  },

  geo: function geo() {
    return Urls.root() + '/geo';
  },
  geoRelative: function geoRelative() {
    return Urls.geo() + '/relative';
  },
  geoPoints: function geoPoints() {
    return Urls.geo() + '/points';
  },
  geoPoint: function geoPoint(pointId) {
    return Urls.geoPoints() + '/' + pointId;
  },
  geoPointMetaData: function geoPointMetaData(pointId) {
    return Urls.geoPoint(pointId) + '/metadata';
  },
  geoCategories: function geoCategories() {
    return Urls.geo() + '/categories';
  },
  geoCategory: function geoCategory(name) {
    return Urls.geoCategories() + '/' + name;
  },
  geoClusters: function geoClusters() {
    return Urls.geo() + '/clusters';
  },
  geoClusterPoints: function geoClusterPoints(clusterId) {
    return Urls.geoClusters() + '/' + clusterId + '/points';
  },
  geoCount: function geoCount() {
    return Urls.geo() + '/count';
  },
  geoFences: function geoFences(geoFence) {
    return Urls.geo() + '/fences' + (geoFence ? '?geoFence=' + geoFence : '');
  },
  geoFence: function geoFence(action, geoFenceName) {
    return Urls.geo() + '/fence/' + action + '?geoFence=' + geoFenceName;
  },

  commerce: function commerce() {
    return Urls.root() + '/commerce/googleplay';
  },
  commerceValidate: function commerceValidate(name, productId, token) {
    return Urls.commerce() + '/validate/' + name + '/inapp/' + productId + '/purchases/' + token;
  },
  commerceSubCancel: function commerceSubCancel(name, subId, token) {
    return Urls.commerce() + '/' + name + '/subscription/' + subId + '/purchases/' + token + '/cancel';
  },
  commerceSubStatus: function commerceSubStatus(name, subId, token) {
    return Urls.commerce() + '/' + name + '/subscription/' + subId + '/purchases/' + token;
  },

  files: function files() {
    return Urls.root() + '/files';
  },
  filePath: function filePath(path) {
    return Urls.files() + '/' + path;
  },
  fileCopy: function fileCopy() {
    return Urls.files() + '/copy';
  },
  fileMove: function fileMove() {
    return Urls.files() + '/move';
  },
  fileRename: function fileRename() {
    return Urls.files() + '/rename';
  },
  filePermissions: function filePermissions() {
    return Urls.files() + '/permissions';
  },
  filePermission: function filePermission(type, url) {
    return Urls.filePermissions() + '/' + type + '/' + encodeURIComponent(url);
  },

  users: function users() {
    return Urls.root() + '/users';
  },
  userObject: function userObject(objectId) {
    return Urls.users() + '/' + objectId;
  },
  userRegister: function userRegister() {
    return Urls.users() + '/register';
  },
  userLogin: function userLogin() {
    return Urls.users() + '/login';
  },
  userLogout: function userLogout() {
    return Urls.users() + '/logout';
  },
  userRoles: function userRoles() {
    return Urls.users() + '/userroles';
  },
  userRoleOperation: function userRoleOperation(operation) {
    return Urls.users() + '/' + operation;
  },
  userClassProps: function userClassProps() {
    return Urls.users() + '/userclassprops';
  },
  userRestorePassword: function userRestorePassword(email) {
    return Urls.users() + '/restorepassword/' + encodeURIComponent(email);
  },
  userTokenCheck: function userTokenCheck(token) {
    return Urls.users() + '/isvalidusertoken/' + token;
  },
  userResendConfirmation: function userResendConfirmation(email) {
    return Urls.users() + '/resendconfirmation/' + email;
  },
  userSocial: function userSocial() {
    return Urls.users() + '/social';
  },
  userSocialOAuth: function userSocialOAuth(socialType) {
    return Urls.userSocial() + '/oauth/' + socialType.toLowerCase() + '/request_url';
  },
  userSocialLogin: function userSocialLogin(socialType) {
    return Urls.userSocial() + '/' + socialType.toLowerCase() + '/sdk/login';
  }
}; /* eslint-disable max-len */

exports.default = Urls;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _request = __webpack_require__(49);

var Methods = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH'
};

var Request = {
  Methods: Methods,

  send: _request.sendRequest,
  get: function get(config) {
    return (0, _request.sendRequest)(_extends({}, config, { method: Methods.GET }));
  },
  post: function post(config) {
    return (0, _request.sendRequest)(_extends({}, config, { method: Methods.POST }));
  },
  put: function put(config) {
    return (0, _request.sendRequest)(_extends({}, config, { method: Methods.PUT }));
  },
  delete: function _delete(config) {
    return (0, _request.sendRequest)(_extends({}, config, { method: Methods.DELETE }));
  }
};

exports.default = Request;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Async = function Async(successCallback, faultCallback, context) {
  var _this = this;

  _classCallCheck(this, Async);

  if (!(faultCallback instanceof Function)) {
    context = faultCallback;
    faultCallback = undefined;
  }

  this.successCallback = successCallback;
  this.faultCallback = faultCallback;
  this.context = context;

  //TODO: move it to prototypes
  this.success = function (data) {
    if (_this.successCallback) {
      _this.successCallback.call(_this.context, data);
    }
  };

  //TODO: move it to prototypes
  this.fault = function (data) {
    if (_this.faultCallback) {
      _this.faultCallback.call(_this.context, data);
    }
  };
};

exports.default = Async;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _deprecated = __webpack_require__(48);

Object.keys(_deprecated).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _deprecated[key];
    }
  });
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loggedInUser = exports.getCurrentUser = undefined;
exports.setLocalCurrentUser = setLocalCurrentUser;
exports.getLocalCurrentUser = getLocalCurrentUser;
exports.getCurrentUserToken = getCurrentUserToken;
exports.isValidLogin = isValidLogin;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _user = __webpack_require__(8);

var _user2 = _interopRequireDefault(_user);

var _data = __webpack_require__(26);

var _data2 = _interopRequireDefault(_data);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _async = __webpack_require__(3);

var _async2 = _interopRequireDefault(_async);

var _localCache = __webpack_require__(10);

var _localCache2 = _interopRequireDefault(_localCache);

var _rt = __webpack_require__(9);

var _utils3 = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var currentUser = null;

function setLocalCurrentUser(user) {
  currentUser = user || null;

  (0, _rt.updateRTUserTokenIfNeeded)();
}

function getLocalCurrentUser() {
  return currentUser;
}

function getCurrentUserToken() {
  if (currentUser && currentUser['user-token']) {
    return currentUser['user-token'] || null;
  }

  return _localCache2.default.get('user-token') || null;
}

var getCurrentUser = exports.getCurrentUser = function getCurrentUser(asyncHandler) {
  if (currentUser) {
    var userFromResponse = (0, _utils3.getUserFromResponse)(currentUser);

    return asyncHandler ? asyncHandler.success(userFromResponse) : userFromResponse;
  }

  var stayLoggedIn = _localCache2.default.get('stayLoggedIn');
  var currentUserId = stayLoggedIn && _localCache2.default.get('current-user-id');

  if (currentUserId) {
    return _data2.default.of(_user2.default).findById(currentUserId, asyncHandler);
  }

  return asyncHandler ? asyncHandler.success(null) : null;
};

function isValidLogin() /** async */{
  var userToken = _localCache2.default.get('user-token');
  var responder = _utils2.default.extractResponder(arguments);
  var isAsync = !!responder;

  if (userToken) {
    if (!isAsync) {
      try {
        var result = _request2.default.get({
          url: _urls2.default.userTokenCheck(userToken)
        });
        return !!result;
      } catch (e) {
        return false;
      }
    }

    return _request2.default.get({
      url: _urls2.default.userTokenCheck(userToken),
      isAsync: isAsync,
      asyncHandler: responder
    });
  }

  if (!isAsync) {
    return !!getCurrentUser();
  }

  getCurrentUser(new _async2.default(function (user) {
    return responder.success(!!user);
  }, function () {
    return responder.success(false);
  }));
}

var loggedInUser = exports.loggedInUser = function loggedInUser() {
  return _localCache2.default.get('current-user-id');
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var LocalVars = {
  debugMode: true,
  serverURL: 'https://api.backendless.com',
  XMLHttpRequest: typeof XMLHttpRequest !== 'undefined' ? XMLHttpRequest : undefined,
  applicationId: null,
  secretKey: null,
  appPath: null,
  ServerCode: null
};

exports.default = LocalVars;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GeoPoint = function GeoPoint(args) {
  _classCallCheck(this, GeoPoint);

  args = args || {};

  this.___class = 'GeoPoint';
  this.categories = args.categories;
  this.latitude = args.latitude;
  this.longitude = args.longitude;
  this.metadata = args.metadata;
  this.objectId = args.objectId;
  this.distance = args.distance;
};

exports.default = GeoPoint;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function () {
  _createClass(User, null, [{
    key: 'className',
    get: function get() {
      return 'Users';
    }
  }]);

  function User(user) {
    var _this = this;

    _classCallCheck(this, User);

    user = user || {};

    Object.keys(user).map(function (userProp) {
      _this[userProp] = user[userProp];
    });

    //TODO: must be moved
    this.___class = User.className;
  }

  return User;
}();

//TODO: must be removed


exports.default = User;
User.prototype.___class = User.className;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateRTUserTokenIfNeeded = exports.initRTClient = exports.setRTDebugMode = exports.disallowInBusinessLogic = exports.checkUsesInBusinessLogic = exports.RTClient = exports.RTScopeConnector = exports.RTListeners = undefined;

var _backendlessRtClient = __webpack_require__(55);

var _backendlessRtClient2 = _interopRequireDefault(_backendlessRtClient);

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _localVars = __webpack_require__(6);

var _localVars2 = _interopRequireDefault(_localVars);

var _currentUser = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rtClient = null;
var rtClientId = _utils2.default.uuid();

var RTListeners = exports.RTListeners = _backendlessRtClient2.default.Listeners;
var RTScopeConnector = exports.RTScopeConnector = _backendlessRtClient2.default.ScopeConnector;

var RTClient = exports.RTClient = {

  get subscriptions() {
    return rtClient.subscriptions;
  },

  get methods() {
    return rtClient.methods;
  }
};

var checkUsesInBusinessLogic = exports.checkUsesInBusinessLogic = function checkUsesInBusinessLogic(target) {
  if (_localVars2.default.ServerCode) {
    // temporarily disable this limitation
    // throw new Error(`"${target}" is not supported inside Business Logic.`)
  }
};

var disallowInBusinessLogic = exports.disallowInBusinessLogic = function disallowInBusinessLogic(target) {
  return function (object, method, description) {
    var native = description.value;

    description.value = function () {
      checkUsesInBusinessLogic(target);

      return native.apply(this, arguments);
    };

    return description;
  };
};

var setRTDebugMode = exports.setRTDebugMode = function setRTDebugMode(debugMode) {
  if (rtClient) {
    rtClient.setConfig({ debugMode: debugMode });
  }
};

var initRTClient = exports.initRTClient = function initRTClient() {
  if (rtClient) {
    rtClient.terminate();
  }

  rtClient = new _backendlessRtClient2.default({
    appId: _localVars2.default.applicationId,
    lookupPath: _localVars2.default.appPath + '/rt/lookup',
    debugMode: _localVars2.default.debugMode,
    connectQuery: function connectQuery() {
      return {
        apiKey: _localVars2.default.secretKey,
        userToken: (0, _currentUser.getCurrentUserToken)(),
        clientId: rtClientId
      };
    }
  });
};

var updateRTUserTokenIfNeeded = exports.updateRTUserTokenIfNeeded = function updateRTUserTokenIfNeeded() {
  if (rtClient.session) {
    rtClient.methods.setUserToken({ userToken: (0, _currentUser.getCurrentUserToken)() });
  }
};

var ensureRTClient = function ensureRTClient(method) {
  return function () {
    if (rtClient) {
      var _rtClient;

      (_rtClient = rtClient)[method].apply(_rtClient, arguments);
    }
  };
};

var RT = {
  connect: ensureRTClient('connect'),
  disconnect: ensureRTClient('disconnect'),

  addConnectEventListener: ensureRTClient('addConnectEventListener'),
  removeConnectEventListener: ensureRTClient('removeConnectEventListener'),

  addConnectErrorEventListener: ensureRTClient('addConnectErrorEventListener'),
  removeConnectErrorEventListener: ensureRTClient('removeConnectErrorEventListener'),

  addDisconnectEventListener: ensureRTClient('addDisconnectEventListener'),
  removeDisconnectEventListener: ensureRTClient('removeDisconnectEventListener'),

  addReconnectAttemptEventListener: ensureRTClient('addReconnectAttemptEventListener'),
  removeReconnectAttemptEventListener: ensureRTClient('removeReconnectAttemptEventListener'),

  removeConnectionListeners: ensureRTClient('removeConnectionListeners')
};

exports.default = RT;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//TODO: refactor me

function setCache() {
  var store = {};
  var storage = {};

  store.enabled = false;

  store.exists = function (key) {
    return store.get(key) !== undefined;
  };

  store.set = function (key, value) {
    return storage[key] = store.serialize(value);
  };

  store.get = function (key) {
    var result = storage[key];

    return result && store.deserialize(result);
  };

  store.remove = function (key) {
    return delete storage[key];
  };

  store.clear = function () {
    storage = {};
  };

  store.flushExpired = function () {};

  store.getCachePolicy = function () /** key */{};

  store.getAll = function () {
    var result = {};

    for (var prop in storage) {
      if (storage.hasOwnProperty(prop)) {
        result[prop] = storage[prop];
      }
    }

    return result;
  };

  store.serialize = function (value) {
    return JSON.stringify(value);
  };

  store.deserialize = function (value) {
    if (typeof value !== 'string') {
      return undefined;
    }
    try {
      return JSON.parse(value);
    } catch (e) {
      return value || undefined;
    }
  };

  function isLocalStorageSupported() {
    try {
      if (_utils2.default.isBrowser && window.localStorage) {
        localStorage.setItem('localStorageTest', true);
        localStorage.removeItem('localStorageTest');
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  }

  if (isLocalStorageSupported()) {
    return extendToLocalStorageCache(store);
  }

  return store;
}

function extendToLocalStorageCache(store) {
  var storage = window.localStorage;

  var createBndlsStorage = function createBndlsStorage() {
    if (!storage.getItem('Backendless')) {
      storage.setItem('Backendless', store.serialize({}));
    }
  };

  var expired = function expired(obj) {
    var result = false;

    if (obj && Object.prototype.toString.call(obj).slice(8, -1) === 'Object') {
      if ('cachePolicy' in obj && 'timeToLive' in obj.cachePolicy && obj.cachePolicy.timeToLive !== -1 && 'created' in obj.cachePolicy) {

        result = new Date().getTime() - obj['cachePolicy']['created'] > obj['cachePolicy']['timeToLive'];
      }
    }

    return result;
  };

  var addTimestamp = function addTimestamp(obj) {
    if (obj && Object.prototype.toString.call(obj).slice(8, -1) === 'Object') {
      if ('cachePolicy' in obj && 'timeToLive' in obj['cachePolicy']) {
        obj['cachePolicy']['created'] = new Date().getTime();
      }
    }
  };

  createBndlsStorage();

  store.enabled = true;

  store.exists = function (key) {
    return store.get(key) !== undefined;
  };

  store.set = function (key, val) {
    if (val === undefined) {
      return store.remove(key);
    }

    createBndlsStorage();

    var backendlessObj = store.deserialize(storage.getItem('Backendless'));

    addTimestamp(val);

    backendlessObj[key] = val;

    try {
      storage.setItem('Backendless', store.serialize(backendlessObj));
    } catch (e) {
      backendlessObj = {};
      backendlessObj[key] = val;
      storage.setItem('Backendless', store.serialize(backendlessObj));
    }

    return val;
  };

  store.get = function (key) {
    createBndlsStorage();

    var backendlessObj = store.deserialize(storage.getItem('Backendless'));
    var obj = backendlessObj[key];
    var result = obj;

    if (expired(obj)) {
      delete backendlessObj[key];
      storage.setItem('Backendless', store.serialize(backendlessObj));
      result = undefined;
    }

    if (result && result['cachePolicy']) {
      delete result['cachePolicy'];
    }

    return result;
  };

  store.remove = function (key) {
    var result = void 0;

    createBndlsStorage();

    key = key.replace(/([^A-Za-z0-9-])/g, '');

    var backendlessObj = store.deserialize(storage.getItem('Backendless'));

    if (backendlessObj.hasOwnProperty(key)) {
      result = delete backendlessObj[key];
    }

    storage.setItem('Backendless', store.serialize(backendlessObj));

    return result;
  };

  store.clear = function () {
    storage.setItem('Backendless', store.serialize({}));
  };

  store.getAll = function () {
    createBndlsStorage();

    var backendlessObj = store.deserialize(storage.getItem('Backendless'));
    var ret = {};

    for (var prop in backendlessObj) {
      if (backendlessObj.hasOwnProperty(prop)) {
        ret[prop] = backendlessObj[prop];
        if (ret[prop] !== null && ret[prop].hasOwnProperty('cachePolicy')) {
          delete ret[prop]['cachePolicy'];
        }
      }
    }

    return ret;
  };

  store.flushExpired = function () {
    createBndlsStorage();

    var backendlessObj = store.deserialize(storage.getItem('Backendless'));
    var obj = void 0;

    for (var prop in backendlessObj) {
      if (backendlessObj.hasOwnProperty(prop)) {
        obj = backendlessObj[prop];
        if (expired(obj)) {
          delete backendlessObj[prop];
          storage.setItem('Backendless', store.serialize(backendlessObj));
        }
      }
    }
  };

  store.getCachePolicy = function (key) {
    createBndlsStorage();

    var backendlessObj = store.deserialize(storage.getItem('Backendless'));
    var obj = backendlessObj[key];

    return obj ? obj['cachePolicy'] : undefined;
  };

  return store;
}

var LocalCache = setCache();

if (LocalCache.enabled) {
  LocalCache.flushExpired();
}

exports.default = LocalCache;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.parseFindResponse = parseFindResponse;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _utils3 = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isObject(item) {
  return (typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object' && item !== null;
}

function parseCircularDependencies(obj) {
  var result = new obj.constructor();
  var subIds = {};
  var postAssign = [];
  var iteratedItems = [];

  function ensureCircularDep(source, target, prop) {
    if (subIds[source[prop].__originSubID]) {
      target[prop] = subIds[source[prop].__originSubID];
    } else {
      postAssign.push([target, prop, source[prop].__originSubID]);
    }
  }

  function processModel(source, target, prop) {
    var Model = source[prop].constructor;

    target[prop] = new Model();

    if (source[prop].__subID) {
      subIds[source[prop].__subID] = target[prop];
      delete source[prop].__subID;
    }
  }

  function buildCircularDeps(source, target) {
    if (iteratedItems.indexOf(source) === -1) {
      iteratedItems.push(source);

      for (var prop in source) {
        if (source.hasOwnProperty(prop)) {
          if (Array.isArray(source[prop])) {
            buildCircularDeps(source[prop], target[prop] = []);
          } else if (isObject(source[prop])) {
            if (source[prop].__originSubID) {
              ensureCircularDep(source, target, prop);
            } else {
              processModel(source, target, prop);

              buildCircularDeps(source[prop], target[prop]);
            }
          } else {
            target[prop] = source[prop];
          }
        }
      }
    }
  }

  buildCircularDeps(obj, result);

  postAssign.forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 3),
        target = _ref2[0],
        prop = _ref2[1],
        __originSubID = _ref2[2];

    return target[prop] = subIds[__originSubID];
  });

  return result;
}

function parseFindResponse(response, Model) {
  var sanitizeResponseItem = function sanitizeResponseItem(resp) {
    Model = _utils2.default.isFunction(Model) ? Model : (0, _utils3.resolveModelClassFromString)(resp.___class);

    return _utils2.default.deepExtend(new Model(), resp.fields || resp);
  };

  var result = _utils2.default.isArray(response) ? response.map(sanitizeResponseItem) : sanitizeResponseItem(response);

  return parseCircularDependencies(result);
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrapAsync = exports.getUserFromResponse = exports.parseResponse = undefined;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _async = __webpack_require__(3);

var _async2 = _interopRequireDefault(_async);

var _localCache = __webpack_require__(10);

var _localCache2 = _interopRequireDefault(_localCache);

var _user = __webpack_require__(8);

var _user2 = _interopRequireDefault(_user);

var _currentUser = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var parseResponse = exports.parseResponse = function parseResponse(data, stayLoggedIn) {
  var user = new _user2.default();
  _utils2.default.deepExtend(user, data);

  if (stayLoggedIn) {
    _localCache2.default.set('stayLoggedIn', stayLoggedIn);
  }

  return user;
};

var getUserFromResponse = exports.getUserFromResponse = function getUserFromResponse(user) {
  _localCache2.default.set('current-user-id', user.objectId);

  var userToken = user['user-token'];

  if (userToken && _localCache2.default.get('stayLoggedIn')) {
    _localCache2.default.set('user-token', userToken);
  }

  return new _user2.default(user);
};

var wrapAsync = exports.wrapAsync = function wrapAsync(asyncHandler, stayLoggedIn) {
  var success = function success(data) {
    (0, _currentUser.setLocalCurrentUser)(parseResponse(_utils2.default.tryParseJSON(data), stayLoggedIn));

    asyncHandler.success(getUserFromResponse((0, _currentUser.getLocalCurrentUser)()));
  };

  var error = function error(data) {
    asyncHandler.fault(data);
  };

  return new _async2.default(success, error);
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GeoCluster = function GeoCluster(args) {
  _classCallCheck(this, GeoCluster);

  args = args || {};

  this.categories = args.categories;
  this.latitude = args.latitude;
  this.longitude = args.longitude;
  this.metadata = args.metadata;
  this.objectId = args.objectId;
  this.totalPoints = args.totalPoints;
  this.geoQuery = args.geoQuery;
  this.distance = args.distance;
};

exports.default = GeoCluster;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GeoQuery = function () {
  function GeoQuery(args) {
    _classCallCheck(this, GeoQuery);

    args = args || {};

    this.searchRectangle = args.searchRectangle || undefined;
    this.categories = args.categories || [];
    this.includeMetadata = args.includeMetadata || true;
    this.metadata = args.metadata || undefined;
    this.condition = args.condition || undefined;
    this.relativeFindMetadata = args.relativeFindMetadata || undefined;
    this.relativeFindPercentThreshold = args.relativeFindPercentThreshold || undefined;
    this.pageSize = args.pageSize || undefined;
    this.latitude = args.latitude || undefined;
    this.longitude = args.longitude || undefined;
    this.radius = args.radius || undefined;
    this.units = args.units || undefined;
    this.degreePerPixel = args.degreePerPixel || undefined;
    this.clusterGridSize = args.clusterGridSize || undefined;
  }

  _createClass(GeoQuery, [{
    key: 'addCategory',
    value: function addCategory(category) {
      this.categories = this.categories || [];
      this.categories.push(category);
    }
  }, {
    key: 'setClusteringParams',
    value: function setClusteringParams(westLongitude, eastLongitude, mapWidth, clusterGridSize) {
      clusterGridSize = clusterGridSize || 0;

      var parsedWestLongitude = parseFloat(westLongitude);
      var parsedEastLongitude = parseFloat(eastLongitude);
      var parsedMapWidth = parseInt(mapWidth);
      var parsedClusterGridSize = parseInt(clusterGridSize);

      if (!isFinite(parsedWestLongitude) || parsedWestLongitude < -180 || parsedWestLongitude > 180) {
        throw new Error('The westLongitude value must be a number in the range between -180 and 180');
      }

      if (!isFinite(parsedEastLongitude) || parsedEastLongitude < -180 || parsedEastLongitude > 180) {
        throw new Error('The eastLongitude value must be a number in the range between -180 and 180');
      }

      if (!isFinite(parsedMapWidth) || parsedMapWidth < 1) {
        throw new Error('The mapWidth value must be a number greater or equal to 1');
      }

      if (!isFinite(parsedClusterGridSize) || parsedClusterGridSize < 0) {
        throw new Error('The clusterGridSize value must be a number greater or equal to 0');
      }

      var longDiff = parsedEastLongitude - parsedWestLongitude;

      if (longDiff < 0) {
        longDiff += 360;
      }

      this.degreePerPixel = longDiff / parsedMapWidth;
      this.clusterGridSize = parsedClusterGridSize || null;
    }
  }]);

  return GeoQuery;
}();

exports.default = GeoQuery;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var currentDevice = null;

var Device = {
  required: function required() {
    if (!currentDevice) {
      throw new Error('Device is not defined. Please, run the Backendless.setupDevice');
    }

    return currentDevice;
  },
  get: function get() {
    return currentDevice;
  },
  setup: function setup(deviceProps) {
    if (!deviceProps || !deviceProps.uuid || !deviceProps.platform || !deviceProps.version) {
      throw new Error('Device properties object must consist of fields "uuid", "platform" and "version".');
    }

    currentDevice = {
      uuid: deviceProps.uuid,
      platform: deviceProps.platform.toUpperCase(),
      version: deviceProps.version
    };
  }
};

exports.default = Device;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _async = __webpack_require__(3);

var _async2 = _interopRequireDefault(_async);

var _logger = __webpack_require__(64);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lastFlushListeners = void 0;

function flush(asyncHandler) {
  if (LoggingCollector.pool.length) {
    if (LoggingCollector.flushInterval) {
      clearTimeout(LoggingCollector.flushInterval);
    }

    var listeners = void 0;

    var cb = function cb(method) {
      return function () {
        var _arguments = arguments;

        listeners.forEach(function (callbacks) {
          callbacks[method].apply(null, _arguments);
        });

        if (listeners === lastFlushListeners) {
          lastFlushListeners = null;
        }
      };
    };

    if (asyncHandler) {
      listeners = lastFlushListeners = lastFlushListeners ? lastFlushListeners.splice(0) : [];
      listeners.push(asyncHandler);
    }

    _request2.default.put({
      isAsync: !!asyncHandler,
      asyncHandler: asyncHandler && new _async2.default(cb('success'), cb('fault')),
      url: _urls2.default.logging(),
      data: LoggingCollector.pool
    });

    LoggingCollector.pool = [];
  } else if (asyncHandler) {
    if (lastFlushListeners) {
      lastFlushListeners.push(asyncHandler);
    } else {
      setTimeout(asyncHandler.success, 0);
    }
  }
}

var LoggingCollector = {
  reset: function reset() {
    LoggingCollector.loggers = {};
    LoggingCollector.pool = [];
    LoggingCollector.numOfMessages = 10;
    LoggingCollector.timeFrequency = 1;
  },
  getLogger: function getLogger(loggerName) {
    if (!_utils2.default.isString(loggerName)) {
      throw new Error("Invalid 'loggerName' value. LoggerName must be a string value");
    }

    return LoggingCollector.loggers[loggerName] = LoggingCollector.loggers[loggerName] || new _logger2.default(loggerName);
  },
  push: function push(logger, logLevel, message, exception) {
    var messageObj = {
      logger: logger,
      message: message,
      exception: exception,
      'log-level': logLevel,
      timestamp: Date.now()
    };

    LoggingCollector.pool.push(messageObj);

    LoggingCollector.checkMessagesLen();
  },
  checkMessagesLen: function checkMessagesLen() {
    if (LoggingCollector.pool.length >= LoggingCollector.numOfMessages) {
      LoggingCollector.sendRequest();
    }
  },


  flush: _utils2.default.promisified(flush),
  flushSync: _utils2.default.synchronized(flush),

  sendRequest: function sendRequest() {
    LoggingCollector.flushInterval = setTimeout(function () {
      return LoggingCollector.flush();
    }, LoggingCollector.timeFrequency * 1000);
  },
  setLogReportingPolicy: function setLogReportingPolicy(numOfMessages, timeFrequency) {
    LoggingCollector.numOfMessages = numOfMessages;
    LoggingCollector.timeFrequency = timeFrequency;

    //TODO: check when set new timeFrequency
    LoggingCollector.checkMessagesLen();
  }
};

LoggingCollector.reset();

exports.default = LoggingCollector;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _query = __webpack_require__(29);

var _query2 = _interopRequireDefault(_query);

var _pagingQueryBuilder = __webpack_require__(30);

var _pagingQueryBuilder2 = _interopRequireDefault(_pagingQueryBuilder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DataQueryBuilder = function () {
  _createClass(DataQueryBuilder, null, [{
    key: 'create',
    value: function create() {
      return new DataQueryBuilder();
    }
  }]);

  function DataQueryBuilder() {
    _classCallCheck(this, DataQueryBuilder);

    this._query = new _query2.default();
    this._paging = new _pagingQueryBuilder2.default();
  }

  _createClass(DataQueryBuilder, [{
    key: 'setPageSize',
    value: function setPageSize(pageSize) {
      this._paging.setPageSize(pageSize);

      return this;
    }
  }, {
    key: 'setOffset',
    value: function setOffset(offset) {
      this._paging.setOffset(offset);

      return this;
    }
  }, {
    key: 'prepareNextPage',
    value: function prepareNextPage() {
      this._paging.prepareNextPage();

      return this;
    }
  }, {
    key: 'preparePreviousPage',
    value: function preparePreviousPage() {
      this._paging.preparePreviousPage();

      return this;
    }
  }, {
    key: 'getProperties',
    value: function getProperties() {
      return this._query.properties;
    }
  }, {
    key: 'setProperties',
    value: function setProperties(properties) {
      this._query.properties = _utils2.default.castArray(properties);

      return this;
    }
  }, {
    key: 'addProperty',
    value: function addProperty(property) {
      this._query.addProperty(property);

      return this;
    }
  }, {
    key: 'getWhereClause',
    value: function getWhereClause() {
      return this._query.condition;
    }
  }, {
    key: 'setWhereClause',
    value: function setWhereClause(whereClause) {
      this._query.condition = whereClause;

      return this;
    }
  }, {
    key: 'getHavingClause',
    value: function getHavingClause() {
      return this._query.havingClause;
    }
  }, {
    key: 'setHavingClause',
    value: function setHavingClause(havingClause) {
      this._query.havingClause = havingClause;

      return this;
    }
  }, {
    key: 'getSortBy',
    value: function getSortBy() {
      return this._query.getOption('sortBy');
    }
  }, {
    key: 'setSortBy',
    value: function setSortBy(sortBy) {
      this._query.setOption('sortBy', _utils2.default.castArray(sortBy));

      return this;
    }
  }, {
    key: 'getGroupBy',
    value: function getGroupBy() {
      return this._query.getOption('groupBy');
    }
  }, {
    key: 'setGroupBy',
    value: function setGroupBy(groupBy) {
      this._query.setOption('groupBy', _utils2.default.castArray(groupBy));

      return this;
    }
  }, {
    key: 'getRelated',
    value: function getRelated() {
      return this._query.getOption('relations');
    }
  }, {
    key: 'setRelated',
    value: function setRelated(relations) {
      this._query.setOption('relations', _utils2.default.castArray(relations));

      return this;
    }
  }, {
    key: 'getRelationsDepth',
    value: function getRelationsDepth() {
      return this._query.getOption('relationsDepth');
    }
  }, {
    key: 'setRelationsDepth',
    value: function setRelationsDepth(relationsDepth) {
      this._query.setOption('relationsDepth', relationsDepth);

      return this;
    }
  }, {
    key: 'build',
    value: function build() {
      this._query.setOptions(this._paging.build());

      return this._query;
    }
  }]);

  return DataQueryBuilder;
}();

exports.default = DataQueryBuilder;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateStringArgument = validateStringArgument;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validateStringArgument(label, value) {
  if (!value || !_utils2.default.isString(value)) {
    throw new Error(label + ' must be provided and must be not an empty STRING!');
  }
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginSocial = loginSocial;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _async = __webpack_require__(3);

var _async2 = _interopRequireDefault(_async);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _localVars = __webpack_require__(6);

var _localVars2 = _interopRequireDefault(_localVars);

var _utils3 = __webpack_require__(12);

var _container = __webpack_require__(98);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loginSocial(socialType, fieldsMapping, permissions, container, stayLoggedIn, asyncHandler) {
  var socialContainer = new _container.SocialContainer(socialType, container);

  asyncHandler = _utils2.default.extractResponder(arguments);
  asyncHandler = (0, _utils3.wrapAsync)(asyncHandler, stayLoggedIn);

  addWindowEventListener('message', window, function (e) {
    if (e.origin === _localVars2.default.serverURL) {
      var result = JSON.parse(e.data);

      if (result.fault) {
        asyncHandler.fault(result.fault);
      } else {
        asyncHandler.success(result);
      }

      removeWindowEventListener('message', window);
      socialContainer.closeContainer();
    }
  });

  var interimCallback = new _async2.default(function (r) {
    socialContainer.doAuthorizationActivity(r);
  }, function (e) {
    socialContainer.closeContainer();
    asyncHandler.fault(e);
  });

  var request = {};
  request.fieldsMapping = fieldsMapping || {};
  request.permissions = permissions || [];

  _request2.default.post({
    url: _urls2.default.userSocialOAuth(socialType),
    isAsync: true,
    asyncHandler: interimCallback,
    data: request
  });
}

function addWindowEventListener(event, elem, func) {
  if (elem.addEventListener) {
    elem.addEventListener(event, func, false);
  } else if (elem.attachEvent) {
    elem.attachEvent('on' + event, func);
  } else {
    elem[event] = func;
  }
}

function removeWindowEventListener(event, elem) {
  if (elem.removeEventListener) {
    elem.removeEventListener(event, null, false);
  } else if (elem.detachEvent) {
    elem.detachEvent('on' + event, null);
  }

  elem[event] = null;
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(35);

//TODO: refactor me
var GeoUtils = {

  calculateDistance: function calculateDistance(lat1, lon1, lat2, lon2) {
    var deltaLon = (lon1 - lon2) * Math.PI / 180;

    lat1 = lat1 * Math.PI / 180;
    lat2 = lat2 * Math.PI / 180;

    var lat1Sin = Math.sin(lat1);
    var lat1Cos = Math.cos(lat1);
    var lat2Sin = Math.sin(lat2);
    var lat2Cos = Math.cos(lat2);

    return _constants.EARTH_RADIUS * Math.acos(lat1Sin * lat2Sin + lat1Cos * lat2Cos * Math.cos(deltaLon));
  },

  updateDegree: function updateDegree(degree) {
    degree += 180;

    while (degree < 0) {
      degree += 360;
    }

    return degree === 0 ? 180 : degree % 360 - 180;
  },

  countLittleRadius: function countLittleRadius(latitude) {
    var h = Math.abs(latitude) / 180 * _constants.EARTH_RADIUS;
    var diameter = 2 * _constants.EARTH_RADIUS;
    var l_2 = (Math.pow(diameter, 2) - diameter * Math.sqrt(Math.pow(diameter, 2) - 4 * Math.pow(h, 2))) / 2;

    return diameter / 2 - Math.sqrt(l_2 - Math.pow(h, 2));
  },

  isPointInCircle: function isPointInCircle(currentPosition, center, radius) {
    var lat1 = currentPosition.latitude;
    var lon1 = currentPosition.longitude;
    var lat2 = center.latitude;
    var lon2 = center.longitude;

    return GeoUtils.calculateDistance(lat1, lon1, lat2, lon2) <= radius;
  },

  isMobileDevice: function isMobileDevice() {
    var check = false;
    (function (a) {
      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
        // eslint-disable-line max-len
        check = true;
      }
    })(navigator.userAgent || navigator.vendor || window.opera);

    return check;
  },

  isPointInRectangular: function isPointInRectangular(currentPosition, nwPoint, sePoint) {
    if (currentPosition.latitude > nwPoint.latitude || currentPosition.latitude < sePoint.latitude) {
      return false;
    }

    if (nwPoint.longitude > sePoint.longitude) {
      return currentPosition.longitude >= nwPoint.longitude || currentPosition.longitude <= sePoint.longitude;
    } else {
      return currentPosition.longitude >= nwPoint.longitude && currentPosition.longitude <= sePoint.longitude;
    }
  },

  getPointPosition: function getPointPosition(point, first, second) {
    var delta = second.longitude - first.longitude;

    if (delta < 0 && delta > -180 || delta > 180) {
      var tmp = first;
      first = second;
      second = tmp;
    }

    if (point.latitude < first.latitude === point.latitude < second.latitude) {
      return 'NO_INTERSECT';
    }

    var x = point.longitude - first.longitude;

    if (x < 0 && x > -180 || x > 180) {
      x = (x - 360) % 360;
    }

    var x2 = (second.longitude - first.longitude + 360) % 360;
    var result = x2 * (point.latitude - first.latitude) / (second.latitude - first.latitude) - x;

    if (result > 0) {
      return 'INTERSECT';
    }

    return 'NO_INTERSECT';
  },

  isPointInShape: function isPointInShape(point, shape) {
    var count = 0;

    function getIndex(i, shape) {
      return (i + 1) % shape.length;
    }

    for (var i = 0; i < shape.length; i++) {
      var position = GeoUtils.getPointPosition(point, shape[i], shape[getIndex(i, shape)]);
      switch (position) {
        case 'INTERSECT':
          {
            count++;
            break;
          }
        case 'ON_LINE':
        case 'NO_INTERSECT':
        default:
          break;
      }
    }

    return count % 2 === 1;
  },

  isPointInFence: function isPointInFence(geoPoint, geoFence) {
    return GeoUtils.isPointInRectangular(geoPoint, geoFence.nwPoint, geoFence.sePoint) || geoFence.type === 'CIRCLE' && GeoUtils.isPointInCircle(geoPoint, geoFence.nodes[0], GeoUtils.calculateDistance(geoFence.nodes[0].latitude, geoFence.nodes[0].longitude, geoFence.nodes[1].latitude, geoFence.nodes[1].longitude)) || geoFence.type === 'SHAPE' && GeoUtils.isPointInShape(geoPoint, geoFence.nodes);
  },

  getOutRectangleNodes: function getOutRectangleNodes(geoPoints) {
    var nwLat = geoPoints[0].latitude;
    var nwLon = geoPoints[0].longitude;
    var seLat = geoPoints[0].latitude;
    var seLon = geoPoints[0].longitude;
    var minLon = 0,
        maxLon = 0,
        lon = 0;

    for (var i = 1; i < geoPoints.length; i++) {
      if (geoPoints[i].latitude > nwLat) {
        nwLat = geoPoints[i].latitude;
      }

      if (geoPoints[i].latitude < seLat) {
        seLat = geoPoints[i].latitude;
      }

      var deltaLon = geoPoints[i].latitude - geoPoints[i - 1].latitude;

      if (deltaLon < 0 && deltaLon > -180 || deltaLon > 270) {
        if (deltaLon > 270) {
          deltaLon -= 360;
        }

        lon += deltaLon;

        if (lon < minLon) {
          minLon = lon;
        }
      } else if (deltaLon > 0 && deltaLon <= 180 || deltaLon <= -270) {
        if (deltaLon <= -270) {
          deltaLon += 360;
        }

        lon += deltaLon;

        if (lon > maxLon) {
          maxLon = lon;
        }
      }
    }

    nwLon += minLon;
    seLon += maxLon;

    if (seLon - nwLon >= 360) {
      seLon = 180;
      nwLon = -180;
    } else {
      seLon = GeoUtils.updateDegree(seLon);
      nwLon = GeoUtils.updateDegree(nwLon);
    }

    return [nwLat, nwLon, seLat, seLon];
  },

  getOutRectangleCircle: function getOutRectangleCircle(center, bounded) {
    var radius = GeoUtils.calculateDistance(center.latitude, center.longitude, bounded.latitude, bounded.longitude);
    var boundLat = center.latitude + 180 * radius / (Math.PI * _constants.EARTH_RADIUS) * (center.latitude > 0 ? 1 : -1);
    var littleRadius = GeoUtils.countLittleRadius(boundLat);
    var westLong = void 0,
        eastLong = void 0,
        northLat = void 0,
        southLat = void 0;

    if (littleRadius > radius) {
      westLong = center.longitude - 180 * radius / littleRadius;
      eastLong = 2 * center.longitude - westLong;
      westLong = GeoUtils.updateDegree(westLong);
      eastLong = eastLong % 360 === 180 ? 180 : GeoUtils.updateDegree(eastLong);
    } else {
      westLong = -180;
      eastLong = 180;
    }

    if (center.latitude > 0) {
      northLat = boundLat;
      southLat = 2 * center.latitude - boundLat;
    } else {
      southLat = boundLat;
      northLat = 2 * center.latitude - boundLat;
    }

    return [Math.min(northLat, 90), westLong, Math.max(southLat, -90), eastLong];
  },

  getOutRectangle: function getOutRectangle() {
    return arguments.length === 1 ? GeoUtils.getOutRectangleNodes(arguments[1]) : GeoUtils.getOutRectangleCircle(arguments[0], arguments[1]);
  }

};

exports.default = GeoUtils;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var tracker = null;

var GeoTracker = function () {
  _createClass(GeoTracker, null, [{
    key: "get",
    value: function get() {
      return tracker = tracker || new GeoTracker();
    }
  }, {
    key: "reset",
    value: function reset() {
      tracker = null;
    }
  }]);

  function GeoTracker() {
    _classCallCheck(this, GeoTracker);

    this.monitoringId = null;
    this._timers = {};
    this._trackedFences = [];
    this._lastResults = {};
  }

  return GeoTracker;
}();

exports.default = GeoTracker;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//TODO: refactor me
var FindHelpers = {
  searchRectangle: function searchRectangle(arg) {
    var rect = ['nwlat=' + arg[0], 'nwlon=' + arg[1], 'selat=' + arg[2], 'selon=' + arg[3]];
    return rect.join('&');
  },

  latitude: function latitude(arg) {
    return 'lat=' + arg;
  },

  longitude: function longitude(arg) {
    return 'lon=' + arg;
  },

  metadata: function metadata(arg) {
    return 'metadata=' + JSON.stringify(arg);
  },

  units: function units(arg) {
    return 'units=' + arg;
  },

  radius: function radius(arg) {
    return 'r=' + arg;
  },

  categories: function categories(arg) {
    arg = _utils2.default.isString(arg) ? [arg] : arg;

    return 'categories=' + _utils2.default.encodeArrayToUriComponent(arg);
  },

  includeMetadata: function includeMetadata(arg) {
    return 'includemetadata=' + arg;
  },

  pageSize: function pageSize(arg) {
    if (arg < 1) {
      throw new Error('PageSize can not be less then 1');
    }

    return 'pagesize=' + arg;
  },

  offset: function offset(arg) {
    if (arg < 0) {
      throw new Error('Offset can not be less then 0');
    }

    return 'offset=' + arg;
  },

  relativeFindPercentThreshold: function relativeFindPercentThreshold(arg) {
    if (arg <= 0) {
      throw new Error('Threshold can not be less then or equal 0');
    }

    return 'relativeFindPercentThreshold=' + arg;
  },

  relativeFindMetadata: function relativeFindMetadata(arg) {
    return 'relativeFindMetadata=' + encodeURIComponent(JSON.stringify(arg));
  },

  condition: function condition(arg) {
    return 'whereClause=' + encodeURIComponent(arg);
  },

  degreePerPixel: function degreePerPixel(arg) {
    return 'dpp=' + arg;
  },

  clusterGridSize: function clusterGridSize(arg) {
    return 'clustergridsize=' + arg;
  },

  geoFence: function geoFence(arg) {
    return 'geoFence=' + arg;
  }
};

exports.default = FindHelpers;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.loadItems = loadItems;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _cluster = __webpack_require__(13);

var _cluster2 = _interopRequireDefault(_cluster);

var _point = __webpack_require__(7);

var _point2 = _interopRequireDefault(_point);

var _queryValidator = __webpack_require__(38);

var _queryParams = __webpack_require__(39);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//TODO: refactor me

function loadItems(query, asyncHandler) {
  (0, _queryValidator.validateQueryObject)(query);

  var url = query.url + (query.searchRectangle ? '/rect' : '/points') + '?' + (0, _queryParams.toQueryParams)(query);

  if (asyncHandler) {
    asyncHandler = _utils2.default.wrapAsync(asyncHandler, function (resp) {
      return responseParser(resp, query);
    });
  }

  var result = _request2.default.get({
    url: url,
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });

  if (asyncHandler) {
    return result;
  }

  return responseParser(result, query);
}

function responseParser(resp, geoQuery) {
  return resp.map(function (geoObject) {
    var GeoItem = geoObject.hasOwnProperty('totalPoints') ? _cluster2.default : _point2.default;

    return new GeoItem(_extends({}, geoObject, { geoQuery: geoQuery }));
  });
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var FilesUtils = {
  ensureSlashInPath: function ensureSlashInPath(path) {
    if (!/^\//.test(path)) {
      return '/' + path;
    }

    return path;
  }
};

exports.default = FilesUtils;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["BackendlessRequest"] = factory();
	else
		root["BackendlessRequest"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Casts `value` as an array if it's not one.
 * Equvivalent to lodash/castArray
 */
var castArray = exports.castArray = function castArray(value) {
  return Array.isArray(value) ? value : [value];
};

var isObject = exports.isObject = function isObject(value) {
  return null != value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object';
};

var isFormData = exports.isFormData = function isFormData(value) {
  return value && value.constructor && value.constructor.toString().trim().indexOf('function FormData') === 0;
};

var isStream = exports.isStream = function isStream(value) {
  var stream = __webpack_require__(5);

  return value instanceof stream.Stream;
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

throw new Error('This Backendless JS SDK assembly is not intended for Node.js environment. You should use "lib" folder modules instead. For any questions please contact as at http://support.backendless.com/')

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _cache = __webpack_require__(3);

var _cache2 = _interopRequireDefault(_cache);

var _qs = __webpack_require__(4);

var qs = _interopRequireWildcard(_qs);

var _utils = __webpack_require__(0);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CONTENT_TYPE_HEADER = 'Content-Type';
var CACHE_FLUSH_INTERVAL = 60000; //60 sec

var cache = new _cache2.default(CACHE_FLUSH_INTERVAL);

var ResponseError = function (_Error) {
  _inherits(ResponseError, _Error);

  function ResponseError(error, status, headers) {
    _classCallCheck(this, ResponseError);

    var _this = _possibleConstructorReturn(this, (ResponseError.__proto__ || Object.getPrototypeOf(ResponseError)).call(this));

    _this.status = status;
    _this.headers = headers;
    _this.message = error.message || error;
    _this.code = error.code;
    return _this;
  }

  return ResponseError;
}(Error);

function parseError(res) {
  if (res.status === 502) {
    return 'No connection with server';
  }

  return res.body || 'Status Code ' + res.status + ' (' + res.statusText + ')';
}

function parseBody(res) {
  try {
    return _extends({}, res, { body: JSON.parse(res.body) });
  } catch (e) {
    return res;
  }
}

function parseHeaders(headersString) {
  var parsed = {};

  if (!headersString) {
    return parsed;
  }

  headersString.split('\n').forEach(function (line) {
    var i = line.indexOf(':');
    var key = line.substr(0, i).trim();
    var val = line.substr(i + 1).trim();

    if (key) {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
}

var sendXmlHttpRequest = function sendXmlHttpRequest(path, method, headers, body) {
  return new Promise(function sendRequest(resolve, reject) {
    var request = new Request.XMLHttpRequest();

    request.open(method.toUpperCase(), path, true);

    request.onload = function handleLoadEvent() {
      var headers = parseHeaders(request.getAllResponseHeaders());
      var _request = request,
          status = _request.status,
          statusText = _request.statusText,
          response = _request.response,
          responseText = _request.responseText;

      var body = response || responseText;

      resolve({ status: status, statusText: statusText, headers: headers, body: body });

      request = null;
    };

    request.onerror = function handleErrorEvent() {
      reject(new Error('Network Error'));

      request = null;
    };

    request.ontimeout = function handleTimeout() {
      reject(new Error('Connection aborted due to timeout'));

      request = null;
    };

    Object.keys(headers).forEach(function (key) {
      request.setRequestHeader(key, headers[key]);
    });

    request.send(body);
  });
};

var sendNodeAPIRequest = function sendNodeAPIRequest(path, method, headers, body, encoding) {
  return new Promise(function (resolve, reject) {
    var u = __webpack_require__(6).parse(path);
    var form = (0, _utils.isFormData)(body) && body;

    var https = u.protocol === 'https:';
    var options = {
      host: u.hostname,
      port: u.port || (https ? 443 : 80),
      method: method,
      path: u.path,
      headers: headers
    };

    var _send = function _send() {
      var Buffer = __webpack_require__(1).Buffer;
      var httpClient = __webpack_require__(https ? 7 : 8);

      var req = httpClient.request(options, function (res) {
        var strings = [];
        var buffers = [];
        var bufferLength = 0;
        var body = '';

        var status = res.statusCode,
            statusText = res.statusMessage,
            headers = res.headers;


        res.on('data', function (chunk) {
          if (!Buffer.isBuffer(chunk)) {
            strings.push(chunk);
          } else if (chunk.length) {
            bufferLength += chunk.length;
            buffers.push(chunk);
          }
        });

        res.on('end', function () {
          if (bufferLength) {
            body = Buffer.concat(buffers, bufferLength);

            if (encoding != null) {
              body = body.toString(encoding);
            }
          } else if (strings.length) {
            body = strings.join();
          }

          resolve({ status: status, statusText: statusText, headers: headers, body: body });
        });

        res.on('error', reject);
      });

      req.on('error', reject);

      if (body) {
        if ((0, _utils.isStream)(body)) {
          body.pipe(req);
          return;
        }

        req.write(body);
      }

      req.end();
    };

    if (form) {
      _extends(options.headers, form.getHeaders());

      form.getLength(function (err, length) {
        if (!err && !isNaN(length)) {
          options.headers['content-length'] = length;
        }

        _send();
      });
    } else {
      if (body && !options.headers['content-length']) {
        var Buffer = __webpack_require__(1).Buffer;
        options.headers['content-length'] = Buffer.byteLength(body);
      }

      _send();
    }
  });
};

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  var responseError = new ResponseError(parseError(response), response.status, response.headers);

  return Promise.reject(responseError);
}

var Request = function () {
  function Request(path, method, body) {
    _classCallCheck(this, Request);

    this.method = method;
    this.path = path;
    this.body = body;
    this.tags = undefined;
    this.unwrap = true;
    this.cacheTTL = 0;
    this.headers = {};
    this.queryParams = {};
    this.encoding = 'utf8';
  }

  /**
   * Sets a header
   *
   * @param {String|Object} key or map of headers
   * @param {String} [value]
   * @returns {Request}
   */


  _createClass(Request, [{
    key: 'set',
    value: function set(key, value) {
      if ((0, _utils.isObject)(key)) {
        for (var headerName in key) {
          this.set(headerName, key[headerName]);
        }
      } else if (typeof value !== 'undefined') {
        this.headers[key] = value;
      }

      return this;
    }

    /**
     * Which kind of tags this request affects.
     * Used for cache validation.
     * Non GET requests with defined tags, will clean all related to these tags caches
     *
     * @param {Array.<String>} tags
     * @returns {Request}
     */

  }, {
    key: 'cacheTags',
    value: function cacheTags() {
      for (var _len = arguments.length, tags = Array(_len), _key = 0; _key < _len; _key++) {
        tags[_key] = arguments[_key];
      }

      this.tags = tags;

      return this;
    }

    /**
     * @param {String} queryParams
     * @returns {Request}
     */

  }, {
    key: 'query',
    value: function query(queryParams) {
      _extends(this.queryParams, queryParams);

      return this;
    }
  }, {
    key: 'form',
    value: function form(_form) {
      var _this2 = this;

      if (_form) {
        var _FormData = module.exports.FormData;

        if (_form instanceof _FormData) {
          this.body = _form;
        } else {
          (function () {
            var formData = new _FormData();

            var _loop = function _loop(formKey) {
              if (formKey) {
                (0, _utils.castArray)(_form[formKey]).forEach(function (formValue) {
                  if (formValue && formValue.hasOwnProperty('value') && formValue.hasOwnProperty('options')) {
                    formData.append(formKey, formValue.value, formValue.options);
                  } else {
                    formData.append(formKey, formValue);
                  }
                });
              }
            };

            for (var formKey in _form) {
              _loop(formKey);
            }

            _this2.body = formData;
          })();
        }
      }

      return this;
    }

    /**
     * Should we cache or use cached result
     *
     * @param {Number} ttl Time to live for cached response. 15 seconds by default
     * @returns {Request}
     */

  }, {
    key: 'useCache',
    value: function useCache() {
      var ttl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 15000;

      this.cacheTTL = ttl;

      return this;
    }

    /**
     * Reset cache if passed TRUE and tags has been specified before
     *
     * @param {Boolean} reset - flag to reset cache or not
     * @returns {Request}
     */

  }, {
    key: 'resetCache',
    value: function resetCache(reset) {
      if (reset && this.tags) {
        cache.deleteByTags(this.tags);
      }

      return this;
    }

    /**
     * Shortcut for req.set('Content-Type', value)
     *
     * @param {String} contentType
     * @returns {Request}
     */

  }, {
    key: 'type',
    value: function type(contentType) {
      this.set(CONTENT_TYPE_HEADER, contentType);

      return this;
    }

    /**
     * Should we unwrap the response and return only body. true by default
     * @param {Boolean} unwrap
     * @returns {Request}
     */

  }, {
    key: 'unwrapBody',
    value: function unwrapBody(unwrap) {
      this.unwrap = unwrap;

      return this;
    }

    /**
     * set encoding to response
     * works only for Node js
     *
     * @param {String} encoding
     * @returns {Request}
     */

  }, {
    key: 'setEncoding',
    value: function setEncoding(encoding) {
      this.encoding = encoding;

      return this;
    }

    /**
     * Sends the requst
     *
     * @param {Object} body
     * @returns {Promise}
     */

  }, {
    key: 'send',
    value: function send(body) {
      var _this3 = this;

      var path = this.path;
      var queryString = qs.stringify(this.queryParams);

      if (queryString) {
        path += '?' + queryString;
      }

      if (this.cacheTTL) {
        var cached = cache.get(path);

        if (cached !== undefined) {
          return Promise.resolve(cached);
        }
      }

      var type = this.headers[CONTENT_TYPE_HEADER];

      if (!type && (0, _utils.isObject)(body) && !(0, _utils.isFormData)(body)) {
        this.type('application/json');
      }

      if (body) {
        var isJSON = this.headers[CONTENT_TYPE_HEADER] === 'application/json';

        body = isJSON && typeof body !== 'string' ? JSON.stringify(body) : body;
      }

      var unwrapBody = function unwrapBody(res) {
        return _this3.unwrap ? res.body : res;
      };

      /**
       * Caches the response if required
       */
      var cacheResponse = function cacheResponse(res) {
        if (_this3.cacheTTL) {
          cache.set(path, res, _this3.tags, _this3.cacheTTL);
        }

        return res;
      };

      /**
       * Deletes all relevant to req.cacheTags keys from the cache if this request method is not GET
       */
      var flushCache = function flushCache(res) {
        if (_this3.tags && _this3.method !== 'get') {
          cache.deleteByTags(_this3.tags);
        }

        return res;
      };

      if (Request.verbose) {
        console.log(this.method.toUpperCase(), decodeURIComponent(path), body, this.headers);
      }

      return Request.send(path, this.method.toUpperCase(), this.headers, body, this.encoding).then(parseBody).then(checkStatus).then(unwrapBody).then(cacheResponse).then(flushCache);
    }

    /**
     * If you are too lazy to use method 'send', don't use it and stay cool :)
     *
     * @param {Function} successHandler
     * @param {Function} errorHandler
     * @returns {Promise}
     */

  }, {
    key: 'then',
    value: function then(successHandler, errorHandler) {
      this.promise = this.promise || this.send(this.body);

      return this.promise.then(successHandler, errorHandler);
    }

    /**
     * @param {Function} errorHandler
     * @returns {Promise}
     */

  }, {
    key: 'catch',
    value: function _catch(errorHandler) {
      this.promise = this.promise || this.send(this.body);

      return this.promise.catch(errorHandler);
    }
  }]);

  return Request;
}();

Object.defineProperty(Request, 'FormData', {
  get: function get() {
    return typeof FormData !== 'undefined' ? FormData : __webpack_require__(9);
  }
});

Request.XMLHttpRequest = typeof XMLHttpRequest !== 'undefined' ? XMLHttpRequest : undefined;

Request.send = function (path, method, headers, body, encoding) {
  var sender = typeof Request.XMLHttpRequest !== 'undefined' ? sendXmlHttpRequest : sendNodeAPIRequest;

  return sender(path, method, headers, body, encoding);
};

Request.verbose = false;
Request.methods = ['get', 'post', 'put', 'patch', 'delete'];

Request.methods.forEach(function (method) {
  Request[method] = function (path, body) {
    return new Request(path, method, body);
  };
});

module.exports = Request;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DEFAULT_TTL = 30000; // 30 sec

/**
 * @typedef {Object} CacheItem
 * @property {*} value
 * @property {Array.<RegExp|String>} tags
 * @property {Number} ttl
 */

/**
 * @param {*} value
 * @param {Array.<RegExp|String>}tags
 * @param {Number} ttl
 * @returns {CacheItem}
 */
var cacheItem = function cacheItem(value, tags, ttl) {
  return { value: value, tags: tags, ttl: ttl };
};

var currentTime = function currentTime() {
  return new Date().getTime();
};

/**
 * Returns true if tag A matches tag B :
 *  - if they are non-strictly equal
 *  - if one of them is Regexp matching the opposite
 *
 * @param {String|RegExp} a
 * @param {String|RegExp} b
 * @returns {Boolean}
 */
var tagsMatches = function tagsMatches(a, b) {
  var result = a == b; // eslint-disable-line

  if (!result && a instanceof RegExp) {
    result = a.test(b);
  }

  if (!result && b instanceof RegExp) {
    result = b.test(a);
  }

  return result;
};

/**
 * Returns true if any of A tags matches any of B tags
 *
 * @param {Array.<String|RegExp>} a
 * @param {Array.<String|RegExp>} b
 * @returns {Boolean}
 */
var tagsContainMatches = function tagsContainMatches(a, b) {
  return !!a.find(function (aTag) {
    return b.find(function (bTag) {
      return tagsMatches(aTag, bTag);
    });
  });
};

/**
 * A Cache with TTL and optional tags for the keys
 * Makes it possible to assign multiple tags for a key and delete keys by tags
 * Optionally it starts flushing timer which cleans all outdated keys
 */

var Cache = function () {

  /**
   * @param {Number?} flushInterval
   */
  function Cache(flushInterval) {
    _classCallCheck(this, Cache);

    this.flushInterval = flushInterval;

    /**
     * @type {Map.<String, CacheItem>}
     */
    this.map = new Map();
  }

  /**
   * @param {String} key
   * @returns {*}
   */


  _createClass(Cache, [{
    key: "get",
    value: function get(key) {
      var cacheItem = this.map.get(key);

      if (cacheItem) {
        if (cacheItem.ttl > currentTime()) {
          return cacheItem.value;
        } else {
          this.map.delete(key);
        }
      }
    }

    /**
     * @param {String} key
     * @param {*} value
     * @param {Array.<RegExp|String>=} tags
     * @param {Number=} ttl
     */

  }, {
    key: "set",
    value: function set(key, value, tags) {
      var ttl = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : DEFAULT_TTL;

      this.map.set(key, cacheItem(value, tags, currentTime() + ttl));

      if (this.flushInterval && !this.flushTimer) {
        this.flushTimer = setInterval(this.flush.bind(this), this.flushInterval);

        if (this.flushTimer.unref) {
          this.flushTimer.unref();
        }
      }
    }

    /**
     * @param {String} key
     */

  }, {
    key: "delete",
    value: function _delete(key) {
      this.map.delete(key);
    }

    /**
     * @param {Array.<String>} tags
     */

  }, {
    key: "deleteByTags",
    value: function deleteByTags(tags) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.map[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _step$value = _slicedToArray(_step.value, 2),
              key = _step$value[0],
              value = _step$value[1];

          if (value.tags && tagsContainMatches(tags, value.tags)) {
            this.delete(key);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }

    /**
     * Deletes all outdated keys
     */

  }, {
    key: "flush",
    value: function flush() {
      var now = currentTime();

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.map[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _step2$value = _slicedToArray(_step2.value, 2),
              key = _step2$value[0],
              value = _step2$value[1];

          if (value.ttl < now) {
            this.delete(key);
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }]);

  return Cache;
}();

exports.default = Cache;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringify = undefined;

var _utils = __webpack_require__(0);

/**
 * Produces a URL query string from a given obj by iterating through the object's "own properties".
 * @param {Object} obj
 * @returns {string}
 */
var stringify = exports.stringify = function stringify(obj) {
  var tokens = [];

  Object.keys(obj).forEach(function (key) {
    var value = obj[key];

    if (value !== undefined) {
      (0, _utils.castArray)(value).forEach(function (value) {
        tokens.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
      });
    }
  });

  return tokens.join('&');
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

throw new Error('This Backendless JS SDK assembly is not intended for Node.js environment. You should use "lib" folder modules instead. For any questions please contact as at http://support.backendless.com/')

/***/ }),
/* 6 */
/***/ (function(module, exports) {

throw new Error('This Backendless JS SDK assembly is not intended for Node.js environment. You should use "lib" folder modules instead. For any questions please contact as at http://support.backendless.com/')

/***/ }),
/* 7 */
/***/ (function(module, exports) {

throw new Error('This Backendless JS SDK assembly is not intended for Node.js environment. You should use "lib" folder modules instead. For any questions please contact as at http://support.backendless.com/')

/***/ }),
/* 8 */
/***/ (function(module, exports) {

throw new Error('This Backendless JS SDK assembly is not intended for Node.js environment. You should use "lib" folder modules instead. For any questions please contact as at http://support.backendless.com/')

/***/ }),
/* 9 */
/***/ (function(module, exports) {

throw new Error('This Backendless JS SDK assembly is not intended for Node.js environment. You should use "lib" folder modules instead. For any questions please contact as at http://support.backendless.com/')

/***/ })
/******/ ]);
});
//# sourceMappingURL=backendless-request.js.map

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dec, _dec2, _dec3, _desc, _value, _obj, _init;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _decorators = __webpack_require__(4);

var _permissions = __webpack_require__(50);

var _permissions2 = _interopRequireDefault(_permissions);

var _store = __webpack_require__(53);

var _store2 = _interopRequireDefault(_store);

var _queryBuilder = __webpack_require__(17);

var _queryBuilder2 = _interopRequireDefault(_queryBuilder);

var _loadRelationsQueryBuilder = __webpack_require__(28);

var _loadRelationsQueryBuilder2 = _interopRequireDefault(_loadRelationsQueryBuilder);

var _describe = __webpack_require__(62);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var Data = (_dec = (0, _decorators.deprecated)('Backendless.Data', 'Backendless.Data.describe'), _dec2 = (0, _decorators.deprecated)('Backendless.Data', 'Backendless.Data.of(<ClassName>).save'), _dec3 = (0, _decorators.deprecated)('Backendless.Data', 'Backendless.Data.of(<ClassName>).save'), (_obj = {
  Permissions: _permissions2.default,
  QueryBuilder: _queryBuilder2.default,
  LoadRelationsQueryBuilder: _loadRelationsQueryBuilder2.default,

  of: function of(model) {
    return new _store2.default(model);
  },

  describeSync: _utils2.default.synchronized(_describe.describe),
  describe: _utils2.default.promisified(_describe.describe),

  save: function save(className, obj) {
    return this.of(className).save(obj);
  },
  saveSync: function saveSync(className, obj, asyncHandler) {
    return this.of(className).saveSync(obj, asyncHandler);
  }
}, (_applyDecoratedDescriptor(_obj, 'describeSync', [_dec], (_init = Object.getOwnPropertyDescriptor(_obj, 'describeSync'), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'save', [_dec2], Object.getOwnPropertyDescriptor(_obj, 'save'), _obj), _applyDecoratedDescriptor(_obj, 'saveSync', [_dec3], Object.getOwnPropertyDescriptor(_obj, 'saveSync'), _obj)), _obj));

exports.default = Data;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolveModelClassFromString = resolveModelClassFromString;

var _user = __webpack_require__(8);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function resolveModelClassFromString(className) {
  if (className === _user2.default.className) {
    return _user2.default;
  }

  return function () {};
}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _query = __webpack_require__(29);

var _query2 = _interopRequireDefault(_query);

var _pagingQueryBuilder = __webpack_require__(30);

var _pagingQueryBuilder2 = _interopRequireDefault(_pagingQueryBuilder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LoadRelationsQueryBuilder = function () {
  _createClass(LoadRelationsQueryBuilder, null, [{
    key: 'create',
    value: function create() {
      return new LoadRelationsQueryBuilder();
    }
  }, {
    key: 'of',
    value: function of(RelationModel) {
      return new LoadRelationsQueryBuilder(RelationModel);
    }
  }]);

  function LoadRelationsQueryBuilder(RelationModel) {
    _classCallCheck(this, LoadRelationsQueryBuilder);

    this._query = new _query2.default();
    this._query.relationModel = RelationModel;

    this._paging = new _pagingQueryBuilder2.default();
  }

  _createClass(LoadRelationsQueryBuilder, [{
    key: 'setRelationName',
    value: function setRelationName(relationName) {
      this._query.setOption('relationName', relationName);

      return this;
    }
  }, {
    key: 'setPageSize',
    value: function setPageSize(pageSize) {
      this._paging.setPageSize(pageSize);

      return this;
    }
  }, {
    key: 'setOffset',
    value: function setOffset(offset) {
      this._paging.setOffset(offset);

      return this;
    }
  }, {
    key: 'prepareNextPage',
    value: function prepareNextPage() {
      this._paging.prepareNextPage();

      return this;
    }
  }, {
    key: 'preparePreviousPage',
    value: function preparePreviousPage() {
      this._paging.preparePreviousPage();

      return this;
    }
  }, {
    key: 'setWhereClause',
    value: function setWhereClause(whereClause) {
      this._query.condition = whereClause;

      return this;
    }
  }, {
    key: 'build',
    value: function build() {
      this._query.setOptions(this._paging.build());

      return this._query;
    }
  }]);

  return LoadRelationsQueryBuilder;
}();

exports.default = LoadRelationsQueryBuilder;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DataQuery = function () {
  function DataQuery(args) {
    _classCallCheck(this, DataQuery);

    args = args || {};

    this.properties = args.properties || [];
    this.condition = args.condition || null;
    this.havingClause = args.havingClause || null;
    this.options = args.options || null;
    this.url = args.url || null;
  }

  _createClass(DataQuery, [{
    key: "addProperty",
    value: function addProperty(prop) {
      this.properties = this.properties || [];
      this.properties.push(prop);
    }
  }, {
    key: "setOption",
    value: function setOption(name, value) {
      this.options = this.options || {};

      this.options[name] = value;
    }
  }, {
    key: "setOptions",
    value: function setOptions(options) {
      for (var key in options) {
        if (options.hasOwnProperty(key)) {
          this.setOption(key, options[key]);
        }
      }
    }
  }, {
    key: "getOption",
    value: function getOption(name) {
      return this.options && this.options[name];
    }
  }]);

  return DataQuery;
}();

exports.default = DataQuery;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PAGING_DEFAULTS = {
  pageSize: 10,
  offset: 0
};

var DataPagingQueryBuilder = function () {
  function DataPagingQueryBuilder() {
    _classCallCheck(this, DataPagingQueryBuilder);

    this.offset = PAGING_DEFAULTS.offset;
    this.pageSize = PAGING_DEFAULTS.pageSize;
  }

  _createClass(DataPagingQueryBuilder, [{
    key: 'setPageSize',
    value: function setPageSize(pageSize) {
      if (pageSize <= 0) {
        return 'Page size must be a positive value.';
      }

      this.pageSize = pageSize;

      return this;
    }
  }, {
    key: 'setOffset',
    value: function setOffset(offset) {
      if (offset < 0) {
        throw new Error('Offset cannot have a negative value.');
      }

      this.offset = offset;

      return this;
    }
  }, {
    key: 'prepareNextPage',
    value: function prepareNextPage() {
      this.setOffset(this.offset + this.pageSize);

      return this;
    }
  }, {
    key: 'preparePreviousPage',
    value: function preparePreviousPage() {
      var newOffset = this.offset > this.pageSize ? this.offset - this.pageSize : 0;

      this.setOffset(newOffset);

      return this;
    }
  }, {
    key: 'build',
    value: function build() {
      return {
        pageSize: this.pageSize,
        offset: this.offset
      };
    }
  }]);

  return DataPagingQueryBuilder;
}();

exports.default = DataPagingQueryBuilder;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractQueryOptions = extractQueryOptions;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//TODO: refactor me
//TODO: does make sense to move this logic into QueryBuilder?

function extractQueryOptions(options) {
  var params = [];

  if (typeof options.pageSize !== 'undefined') {
    if (options.pageSize < 1) {
      throw new Error('PageSize can not be less then 1');
    }

    params.push('pageSize=' + encodeURIComponent(options.pageSize));
  }

  if (typeof options.offset !== 'undefined') {
    if (options.offset < 0) {
      throw new Error('Offset can not be less then 0');
    }

    params.push('offset=' + encodeURIComponent(options.offset));
  }

  if (options.sortBy) {
    if (_utils2.default.isString(options.sortBy)) {
      params.push('sortBy=' + encodeURIComponent(options.sortBy));
    } else if (_utils2.default.isArray(options.sortBy)) {
      params.push('sortBy=' + _utils2.default.encodeArrayToUriComponent(options.sortBy));
    }
  }

  if (options.groupBy) {
    if (_utils2.default.isString(options.groupBy)) {
      params.push('groupBy=' + encodeURIComponent(options.groupBy));
    } else if (_utils2.default.isArray(options.groupBy)) {
      params.push('groupBy=' + _utils2.default.encodeArrayToUriComponent(options.groupBy));
    }
  }

  if (_utils2.default.isNumber(options.relationsDepth)) {
    params.push('relationsDepth=' + options.relationsDepth);
  }

  if (options.relations) {
    if (_utils2.default.isArray(options.relations)) {
      var loadRelations = options.relations.length ? _utils2.default.encodeArrayToUriComponent(options.relations) : '*';
      params.push('loadRelations=' + loadRelations);
    }
  }

  return params.join('&');
}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _incrementAndGet = __webpack_require__(67);

Object.keys(_incrementAndGet).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _incrementAndGet[key];
    }
  });
});

var _decrementAndGet = __webpack_require__(68);

Object.keys(_decrementAndGet).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _decrementAndGet[key];
    }
  });
});

var _get = __webpack_require__(69);

Object.keys(_get).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _get[key];
    }
  });
});

var _getAndIncrement = __webpack_require__(70);

Object.keys(_getAndIncrement).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _getAndIncrement[key];
    }
  });
});

var _getAndDecrement = __webpack_require__(71);

Object.keys(_getAndDecrement).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _getAndDecrement[key];
    }
  });
});

var _getAndAdd = __webpack_require__(72);

Object.keys(_getAndAdd).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _getAndAdd[key];
    }
  });
});

var _addAndGet = __webpack_require__(73);

Object.keys(_addAndGet).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _addAndGet[key];
    }
  });
});

var _compareAndSet = __webpack_require__(74);

Object.keys(_compareAndSet).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _compareAndSet[key];
    }
  });
});

var _reset = __webpack_require__(75);

Object.keys(_reset).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _reset[key];
    }
  });
});

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Classes = {};

var Parsers = exports.Parsers = {
  set: function set(className, Class) {
    Classes[className] = Class;
  },
  get: function get(className) {
    return Classes[className];
  }
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendSocialLoginRequest = undefined;

var _async = __webpack_require__(3);

var _async2 = _interopRequireDefault(_async);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _localCache = __webpack_require__(10);

var _localCache2 = _interopRequireDefault(_localCache);

var _currentUser = __webpack_require__(5);

var _utils = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sendSocialLoginRequest = exports.sendSocialLoginRequest = function sendSocialLoginRequest(accessToken, socialType, fieldsMapping, stayLoggedIn, asyncHandler) {
  if (!accessToken) {
    return asyncHandler.fault('"accessToken" is missing.');
  }

  var interimCallback = new _async2.default(function (r) {
    (0, _currentUser.setLocalCurrentUser)((0, _utils.parseResponse)(r));
    _localCache2.default.set('stayLoggedIn', !!stayLoggedIn);
    asyncHandler.success((0, _utils.getUserFromResponse)((0, _currentUser.getLocalCurrentUser)()));
  }, function (e) {
    asyncHandler.fault(e);
  });

  _request2.default.post({
    url: _urls2.default.userSocialLogin(socialType),
    isAsync: true,
    asyncHandler: interimCallback,
    data: {
      accessToken: accessToken,
      fieldsMapping: fieldsMapping
    }
  });
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var EARTH_RADIUS = exports.EARTH_RADIUS = 6378100.0;

var UNITS = exports.UNITS = {
  METERS: 'METERS',
  KILOMETERS: 'KILOMETERS',
  MILES: 'MILES',
  YARDS: 'YARDS',
  FEET: 'FEET'
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _tracker = __webpack_require__(21);

var _tracker2 = _interopRequireDefault(_tracker);

var _fenceActions = __webpack_require__(37);

var _fenceActions2 = _interopRequireDefault(_fenceActions);

var _startMonitoring = __webpack_require__(106);

var _stopMonitoring = __webpack_require__(107);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GeoTrackerMonitor = {
  reset: function reset() {
    _tracker2.default.reset();
  },


  runOnEnterAction: _utils2.default.promisified(_fenceActions2.default.enter),
  runOnEnterActionSync: _utils2.default.synchronized(_fenceActions2.default.enter),

  runOnStayAction: _utils2.default.promisified(_fenceActions2.default.stay),
  runOnStayActionSync: _utils2.default.synchronized(_fenceActions2.default.stay),

  runOnExitAction: _utils2.default.promisified(_fenceActions2.default.exist),
  runOnExitActionSync: _utils2.default.synchronized(_fenceActions2.default.exist),

  startGeofenceMonitoringWithInAppCallback: _utils2.default.promisified(_startMonitoring.startMonitoring),
  startGeofenceMonitoringWithInAppCallbackSync: _utils2.default.synchronized(_startMonitoring.startMonitoring),

  startGeofenceMonitoringWithRemoteCallback: _utils2.default.promisified(_startMonitoring.startMonitoring),
  startGeofenceMonitoringWithRemoteCallbackSync: _utils2.default.synchronized(_startMonitoring.startMonitoring),

  stopGeofenceMonitoring: _stopMonitoring.stopMonitoring
};

exports.default = GeoTrackerMonitor;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _async = __webpack_require__(3);

var _async2 = _interopRequireDefault(_async);

var _point = __webpack_require__(7);

var _point2 = _interopRequireDefault(_point);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//TODO: refactor me

function runFenceAction(action, geoFenceName, geoPoint, asyncHandler) {
  if (geoPoint instanceof _async2.default) {
    asyncHandler = geoPoint;
    geoPoint = undefined;
  }

  if (!_utils2.default.isString(geoFenceName)) {
    throw new Error("Invalid value for parameter 'geoFenceName'. Geo Fence Name must be a String");
  }

  if (geoPoint && !(geoPoint instanceof _point2.default) && !geoPoint.objectId) {
    throw new Error('Method argument must be a valid instance of GeoPoint persisted on the server');
  }

  return _request2.default.post({
    url: _urls2.default.geoFence(action, geoFenceName),
    isAsync: !!asyncHandler,
    data: geoPoint,
    asyncHandler: asyncHandler
  });
}

var runOnStayAction = function runOnStayAction(geoFenceName, geoPoint, asyncHandler) {
  return runFenceAction('onstay', geoFenceName, geoPoint, asyncHandler);
};

var runOnExitAction = function runOnExitAction(geoFenceName, geoPoint, asyncHandler) {
  return runFenceAction('onexit', geoFenceName, geoPoint, asyncHandler);
};

var runOnEnterAction = function runOnEnterAction(geoFenceName, geoPoint, asyncHandler) {
  return runFenceAction('onenter', geoFenceName, geoPoint, asyncHandler);
};

var GeoFenceActions = {
  run: runFenceAction,

  enter: runOnEnterAction,
  stay: runOnStayAction,
  exist: runOnExitAction
};

exports.default = GeoFenceActions;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateQueryObject = validateQueryObject;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//TODO: refactor me

function validateQueryObject(query) {
  if (query.geoFence !== undefined && !_utils2.default.isString(query.geoFence)) {
    throw new Error('Invalid value for argument "geoFenceName". Geo Fence Name must be a String');
  }

  if (query.searchRectangle && query.radius) {
    throw new Error('Inconsistent geo query. Query should not contain both rectangle and radius search parameters.');
  }

  if (query.radius && (query.latitude === undefined || query.longitude === undefined)) {
    throw new Error('Latitude and longitude should be provided to search in radius');
  }

  if ((query.relativeFindMetadata || query.relativeFindPercentThreshold) && !(query.relativeFindMetadata && query.relativeFindPercentThreshold)) {
    throw new Error('Inconsistent geo query. ' + 'Query should contain both relativeFindPercentThreshold and relativeFindMetadata or none of them');
  }
}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toQueryParams = toQueryParams;

var _findHelpers = __webpack_require__(22);

var _findHelpers2 = _interopRequireDefault(_findHelpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//TODO: refactor me

function toQueryParams(query) {
  var params = [];

  if (query.units) {
    params.push('units=' + query.units);
  }

  for (var prop in query) {
    if (query.hasOwnProperty(prop) && _findHelpers2.default.hasOwnProperty(prop) && query[prop] != null) {
      params.push(_findHelpers2.default[prop](query[prop]));
    }
  }

  return params.join('&');
}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _desc, _value, _obj, _init, _init2, _init3, _init4, _init5, _init6, _init7;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _decorators = __webpack_require__(4);

var _channel = __webpack_require__(119);

var _channel2 = _interopRequireDefault(_channel);

var _helpers = __webpack_require__(120);

var _methods = __webpack_require__(123);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var Messaging = (_dec = (0, _decorators.deprecated)('Backendless.Messaging', 'Backendless.Messaging.publish'), _dec2 = (0, _decorators.deprecated)('Backendless.Messaging', 'Backendless.Messaging.sendEmail'), _dec3 = (0, _decorators.deprecated)('Backendless.Messaging', 'Backendless.Messaging.cancel'), _dec4 = (0, _decorators.deprecated)('Backendless.Messaging', 'Backendless.Messaging.registerDevice'), _dec5 = (0, _decorators.deprecated)('Backendless.Messaging', 'Backendless.Messaging.getRegistrations'), _dec6 = (0, _decorators.deprecated)('Backendless.Messaging', 'Backendless.Messaging.unregisterDevice'), _dec7 = (0, _decorators.deprecated)('Backendless.Messaging', 'Backendless.Messaging.getMessageStatus'), (_obj = {

  Bodyparts: _helpers.Bodyparts,
  PublishOptions: _helpers.PublishOptions,
  DeliveryOptions: _helpers.DeliveryOptions,
  PublishOptionsHeaders: _helpers.PublishOptionsHeaders,

  /** @deprecated */
  SubscriptionOptions: _helpers.SubscriptionOptions,

  subscribe: function subscribe(channelName) {
    if (!channelName || typeof channelName !== 'string') {
      throw new Error('"channelName" must be non empty string');
    }

    if (channelName.indexOf('/') >= 0) {
      throw new Error('"channelName" can not contains slash chars');
    }

    return new _channel2.default({ name: channelName.trim() });
  },

  publishSync: _utils2.default.synchronized(_methods.publish),
  publish: _utils2.default.promisified(_methods.publish),

  push: _utils2.default.promisified(_methods.push),

  pushWithTemplate: _utils2.default.promisified(_methods.pushWithTemplate),

  sendEmailSync: _utils2.default.synchronized(_methods.sendEmail),
  sendEmail: _utils2.default.promisified(_methods.sendEmail),

  cancelSync: _utils2.default.synchronized(_methods.cancel),
  cancel: _utils2.default.promisified(_methods.cancel),

  registerDeviceSync: _utils2.default.synchronized(_methods.registerDevice),
  registerDevice: _utils2.default.promisified(_methods.registerDevice),

  getRegistrationsSync: _utils2.default.synchronized(_methods.getRegistrations),
  getRegistrations: _utils2.default.promisified(_methods.getRegistrations),

  unregisterDeviceSync: _utils2.default.synchronized(_methods.unregisterDevice),
  unregisterDevice: _utils2.default.promisified(_methods.unregisterDevice),

  getMessageStatusSync: _utils2.default.synchronized(_methods.getMessageStatus),
  getMessageStatus: _utils2.default.promisified(_methods.getMessageStatus)

}, (_applyDecoratedDescriptor(_obj, 'publishSync', [_dec], (_init = Object.getOwnPropertyDescriptor(_obj, 'publishSync'), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'sendEmailSync', [_dec2], (_init2 = Object.getOwnPropertyDescriptor(_obj, 'sendEmailSync'), _init2 = _init2 ? _init2.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init2;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'cancelSync', [_dec3], (_init3 = Object.getOwnPropertyDescriptor(_obj, 'cancelSync'), _init3 = _init3 ? _init3.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init3;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'registerDeviceSync', [_dec4], (_init4 = Object.getOwnPropertyDescriptor(_obj, 'registerDeviceSync'), _init4 = _init4 ? _init4.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init4;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'getRegistrationsSync', [_dec5], (_init5 = Object.getOwnPropertyDescriptor(_obj, 'getRegistrationsSync'), _init5 = _init5 ? _init5.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init5;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'unregisterDeviceSync', [_dec6], (_init6 = Object.getOwnPropertyDescriptor(_obj, 'unregisterDeviceSync'), _init6 = _init6 ? _init6.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init6;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'getMessageStatusSync', [_dec7], (_init7 = Object.getOwnPropertyDescriptor(_obj, 'getMessageStatusSync'), _init7 = _init7 ? _init7.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init7;
  }
}), _obj)), _obj));

exports.default = Messaging;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PublishOptions = function PublishOptions(args) {
  _classCallCheck(this, PublishOptions);

  args = args || {};

  this.publisherId = args.publisherId || undefined;
  this.headers = args.headers || undefined;
  this.subtopic = args.subtopic || undefined;
};

exports.default = PublishOptions;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DeliveryOptions = function DeliveryOptions(args) {
  _classCallCheck(this, DeliveryOptions);

  args = args || {};

  this.publishPolicy = args.publishPolicy || undefined;
  this.pushBroadcast = args.pushBroadcast || undefined;
  this.pushSinglecast = args.pushSinglecast || undefined;
  this.publishAt = args.publishAt || undefined;
  this.repeatEvery = args.repeatEvery || undefined;
  this.repeatExpiresAt = args.repeatExpiresAt || undefined;
};

exports.default = DeliveryOptions;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bodyparts = function Bodyparts(args) {
  _classCallCheck(this, Bodyparts);

  args = args || {};

  this.textmessage = args && args.textmessage;
  this.htmlmessage = args && args.htmlmessage;
};

exports.default = Bodyparts;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendFile = undefined;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sanitizeFileName = function sanitizeFileName(fileName) {
  return encodeURIComponent(fileName).replace(/'/g, '%27').replace(/"/g, '%22');
};

var sendFile = exports.sendFile = function sendFile(options) {
  var url = _urls2.default.filePath(options.path) + '/' + sanitizeFileName(options.fileName);
  var query = {};

  if (_utils2.default.isBoolean(options.overwrite)) {
    query.overwrite = options.overwrite;
  }

  return _request2.default.post({
    url: url,
    query: query,
    form: { file: options.file },
    asyncHandler: options.asyncHandler
  });
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _backendlessRequest = __webpack_require__(25);

var _backendlessRequest2 = _interopRequireDefault(_backendlessRequest);

var _logging = __webpack_require__(47);

var _logging2 = _interopRequireDefault(_logging);

var _counters = __webpack_require__(65);

var _counters2 = _interopRequireDefault(_counters);

var _cache = __webpack_require__(76);

var _cache2 = _interopRequireDefault(_cache);

var _commerce = __webpack_require__(83);

var _commerce2 = _interopRequireDefault(_commerce);

var _users = __webpack_require__(87);

var _users2 = _interopRequireDefault(_users);

var _user = __webpack_require__(8);

var _user2 = _interopRequireDefault(_user);

var _customServices = __webpack_require__(101);

var _customServices2 = _interopRequireDefault(_customServices);

var _events = __webpack_require__(103);

var _events2 = _interopRequireDefault(_events);

var _geo = __webpack_require__(105);

var _geo2 = _interopRequireDefault(_geo);

var _data = __webpack_require__(26);

var _data2 = _interopRequireDefault(_data);

var _messaging = __webpack_require__(40);

var _messaging2 = _interopRequireDefault(_messaging);

var _device = __webpack_require__(15);

var _device2 = _interopRequireDefault(_device);

var _files = __webpack_require__(133);

var _files2 = _interopRequireDefault(_files);

var _rt = __webpack_require__(9);

var _rt2 = _interopRequireDefault(_rt);

var _rso = __webpack_require__(147);

var _rso2 = _interopRequireDefault(_rso);

var _localCache = __webpack_require__(10);

var _localCache2 = _interopRequireDefault(_localCache);

var _localVars = __webpack_require__(6);

var _localVars2 = _interopRequireDefault(_localVars);

var _initApp = __webpack_require__(148);

var _userAgent = __webpack_require__(149);

var _currentUser = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var root = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) === 'object' && self.self === self && self || (typeof global === 'undefined' ? 'undefined' : _typeof(global)) === 'object' && global.global === global && global;

var previousBackendless = root && root.Backendless;

var Backendless = {

  get debugMode() {
    return _localVars2.default.debugMode;
  },

  set debugMode(debugMode) {
    _localVars2.default.debugMode = !!debugMode;

    (0, _rt.setRTDebugMode)(_localVars2.default.debugMode);
  },

  get serverURL() {
    return _localVars2.default.serverURL;
  },

  set serverURL(serverURL) {
    _localVars2.default.serverURL = serverURL;
  },

  get XMLHttpRequest() {
    return _localVars2.default.XMLHttpRequest;
  },

  set XMLHttpRequest(XMLHttpRequest) {
    _localVars2.default.XMLHttpRequest = XMLHttpRequest;
  },

  get applicationId() {
    return _localVars2.default.applicationId;
  },

  get secretKey() {
    return _localVars2.default.secretKey;
  },

  get appPath() {
    return _localVars2.default.appPath;
  },

  get ServerCode() {
    return _localVars2.default.ServerCode;
  },

  set ServerCode(ServerCode) {
    _localVars2.default.ServerCode = ServerCode;
  },

  initApp: _initApp.initApp,

  getCurrentUserToken: _currentUser.getCurrentUserToken,

  setupDevice: _device2.default.setup,

  browser: (0, _userAgent.getUserAgent)(),

  Request: _backendlessRequest2.default,

  noConflict: function noConflict() {
    if (root) {
      root.Backendless = previousBackendless;
    }

    return Backendless;
  },


  ///-------------------------------------///
  ///-------------- SERVICES -------------///

  Logging: _logging2.default,
  Counters: _counters2.default,
  Cache: _cache2.default,
  Commerce: _commerce2.default,
  Users: _users2.default,
  User: _user2.default,
  CustomServices: _customServices2.default,
  Events: _events2.default,
  Geo: _geo2.default,
  Data: _data2.default,
  Messaging: _messaging2.default,
  Files: _files2.default,
  RT: _rt2.default,
  SharedObject: _rso2.default,

  ///-------------- SERVICES -------------///
  ///-------------------------------------///

  ///-------------------------------------///
  ///--------BACKWARD COMPATIBILITY-------///

  //TODO: do we need to remove it?
  UserService: _users2.default,
  GeoQuery: _geo2.default.Query,
  GeoPoint: _geo2.default.Point,
  GeoCluster: _geo2.default.Cluster,
  Persistence: _data2.default,
  DataQueryBuilder: _data2.default.QueryBuilder,
  LoadRelationsQueryBuilder: _data2.default.LoadRelationsQueryBuilder,
  Bodyparts: _messaging2.default.Bodyparts,
  PublishOptions: _messaging2.default.PublishOptions,
  DeliveryOptions: _messaging2.default.DeliveryOptions,
  PublishOptionsHeaders: _messaging2.default.PublishOptionsHeaders,

  LocalCache: _localCache2.default,

  /** @deprecated */
  SubscriptionOptions: _messaging2.default.SubscriptionOptions

  ///--------BACKWARD COMPATIBILITY-------///
  ///-------------------------------------///
};

if (root) {
  root.Backendless = Backendless;
}

exports.default = Backendless;


module.exports = Backendless;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(46)))

/***/ }),
/* 46 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dec, _desc, _value, _obj, _init;

var _decorators = __webpack_require__(4);

var _collector = __webpack_require__(16);

var _collector2 = _interopRequireDefault(_collector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var Logging = (_dec = (0, _decorators.deprecated)('Backendless.Logging', 'Backendless.Logging.flush'), (_obj = {

  getLogger: _collector2.default.getLogger,

  flushSync: _collector2.default.flushSync,
  flush: _collector2.default.flush,

  setLogReportingPolicy: _collector2.default.setLogReportingPolicy
}, (_applyDecoratedDescriptor(_obj, 'flushSync', [_dec], (_init = Object.getOwnPropertyDescriptor(_obj, 'flushSync'), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _obj)), _obj));

exports.default = Logging;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var deprecated = exports.deprecated = function deprecated(namespace, alternative) {
  return function (target, prop, descriptor) {
    var value = target[prop];

    descriptor.initializer = function () {
      return function () {
        var mainMessage = '"' + namespace + '.' + prop + '" is deprecated and will be removed in the nearest release.';
        var helpMessage = 'Please use "' + alternative + '" instead of.';

        // eslint-disable-next-line no-console
        console.warn(mainMessage + ' ' + (alternative ? helpMessage : ''));

        return value.apply(this, arguments);
      };
    };

    return descriptor;
  };
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendRequest = undefined;

var _backendlessRequest = __webpack_require__(25);

var _backendlessRequest2 = _interopRequireDefault(_backendlessRequest);

var _localVars = __webpack_require__(6);

var _localVars2 = _interopRequireDefault(_localVars);

var _currentUser = __webpack_require__(5);

var _requestForBrowser = __webpack_require__(63);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sendRequest = exports.sendRequest = function sendRequest(config) {
  //--TODO remove this checking when we get rid of all sync methods
  if (config.isAsync === false || !config.asyncHandler) {
    if (_localVars2.default.XMLHttpRequest) {
      // eslint-disable-next-line no-console
      console.warn('The sync methods of the Backendless API are deprecated and will be removed in the nearest future.\n' + 'Please, use async methods instead.');

      return (0, _requestForBrowser.ajaxForBrowser)(config);
    }

    throw new Error('Using the sync methods of the Backendless API in Node.js are disallowed.\n' + 'Use the async methods instead.');
  }
  //---------------------------------------------------------------

  _backendlessRequest2.default.XMLHttpRequest = _localVars2.default.XMLHttpRequest;

  var url = config.url;
  var method = (config.method || 'GET').toLowerCase();
  var headers = config.headers || {};
  var onError = config.asyncHandler.fault || function (error) {
    throw error;
  };
  var onSuccess = config.asyncHandler.success || function (result) {
    return result;
  };

  var userToken = (0, _currentUser.getCurrentUserToken)();

  if (userToken) {
    headers['user-token'] = userToken;
  }

  return _backendlessRequest2.default[method](url, config.data).set(headers).query(config.query).form(config.form).then(onSuccess, onError);
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _persmission = __webpack_require__(51);

var _persmission2 = _interopRequireDefault(_persmission);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DataPermissions = {
  FIND: new _persmission2.default('FIND'),
  REMOVE: new _persmission2.default('REMOVE'),
  UPDATE: new _persmission2.default('UPDATE')
};

exports.default = DataPermissions;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _desc, _value, _obj, _init, _init2, _init3, _init4, _init5, _init6;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _decorators = __webpack_require__(4);

var _sendRequest = __webpack_require__(52);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PermissionTypes = {
  GRANT: 'GRANT',
  DENY: 'DENY'
};

function grantUser(userId, object, asyncHandler) {
  return (0, _sendRequest.sendRequest)(this.permission, PermissionTypes.GRANT, object, { userId: userId }, asyncHandler);
}

function grantRole(roleName, object, asyncHandler) {
  return (0, _sendRequest.sendRequest)(this.permission, PermissionTypes.GRANT, object, { roleName: roleName }, asyncHandler);
}

function grant(object, asyncHandler) {
  return (0, _sendRequest.sendRequest)(this.permission, PermissionTypes.GRANT, object, { userId: '*' }, asyncHandler);
}

function denyUser(userId, object, asyncHandler) {
  return (0, _sendRequest.sendRequest)(this.permission, PermissionTypes.DENY, object, { userId: userId }, asyncHandler);
}

function denyRole(roleName, object, asyncHandler) {
  return (0, _sendRequest.sendRequest)(this.permission, PermissionTypes.DENY, object, { roleName: roleName }, asyncHandler);
}

function deny(object, asyncHandler) {
  return (0, _sendRequest.sendRequest)(this.permission, PermissionTypes.DENY, object, { userId: '*' }, asyncHandler);
}

var DataPermission = function DataPermission(permission) {
  _classCallCheck(this, DataPermission);

  this.permission = permission;
};

//TODO: will be removed when remove sync methods


var namespaceLabel = 'Backendless.Data.Permissions.{FIND|REMOVE|UPDATE}';

_extends(DataPermission.prototype, (_dec = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.grantUser'), _dec2 = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.grantRole'), _dec3 = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.grant'), _dec4 = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.denyUser'), _dec5 = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.denyRole'), _dec6 = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.deny'), (_obj = {
  grantUserSync: _utils2.default.synchronized(grantUser),
  grantUser: _utils2.default.promisified(grantUser),

  grantRoleSync: _utils2.default.synchronized(grantRole),
  grantRole: _utils2.default.promisified(grantRole),

  grantSync: _utils2.default.synchronized(grant),
  grant: _utils2.default.promisified(grant),

  denyUserSync: _utils2.default.synchronized(denyUser),
  denyUser: _utils2.default.promisified(denyUser),

  denyRoleSync: _utils2.default.synchronized(denyRole),
  denyRole: _utils2.default.promisified(denyRole),

  denySync: _utils2.default.synchronized(deny),
  deny: _utils2.default.promisified(deny)

}, (_applyDecoratedDescriptor(_obj, 'grantUserSync', [_dec], (_init = Object.getOwnPropertyDescriptor(_obj, 'grantUserSync'), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'grantRoleSync', [_dec2], (_init2 = Object.getOwnPropertyDescriptor(_obj, 'grantRoleSync'), _init2 = _init2 ? _init2.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init2;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'grantSync', [_dec3], (_init3 = Object.getOwnPropertyDescriptor(_obj, 'grantSync'), _init3 = _init3 ? _init3.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init3;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'denyUserSync', [_dec4], (_init4 = Object.getOwnPropertyDescriptor(_obj, 'denyUserSync'), _init4 = _init4 ? _init4.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init4;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'denyRoleSync', [_dec5], (_init5 = Object.getOwnPropertyDescriptor(_obj, 'denyRoleSync'), _init5 = _init5 ? _init5.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init5;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'denySync', [_dec6], (_init6 = Object.getOwnPropertyDescriptor(_obj, 'denySync'), _init6 = _init6 ? _init6.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init6;
  }
}), _obj)), _obj)));

exports.default = DataPermission;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendRequest = sendRequest;

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sendRequest(permission, type, object, options, asyncHandler) {
  var userId = options.userId,
      roleName = options.roleName;


  if (!object.___class || !object.objectId) {
    throw new Error('"dataObject.___class" and "dataObject.objectId" need to be specified');
  }

  var data = {
    permission: permission
  };

  if (userId) {
    data.user = userId;
  } else if (roleName) {
    data.role = roleName;
  }

  return _request2.default.put({
    url: _urls2.default.dataObjectPermission(object.___class, type, object.objectId),
    data: data,
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _desc, _value, _obj, _init, _init2, _init3, _init4, _init5, _init6, _init7, _init8, _init9, _init10, _init11, _init12, _init13, _init14;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _decorators = __webpack_require__(4);

var _utils3 = __webpack_require__(27);

var _rtStore = __webpack_require__(54);

var _rtStore2 = _interopRequireDefault(_rtStore);

var _relations = __webpack_require__(56);

var _bulk = __webpack_require__(57);

var _find = __webpack_require__(58);

var _save = __webpack_require__(59);

var _remove = __webpack_require__(60);

var _count = __webpack_require__(61);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//TODO: will be removed when remove sync methods
var namespaceLabel = 'Backendless.Data.of(<ClassName>)';

var DataStore = function () {
  function DataStore(model) {
    _classCallCheck(this, DataStore);

    if (_utils2.default.isString(model)) {
      this.className = model;
      this.model = (0, _utils3.resolveModelClassFromString)(this.className);
    } else {
      this.className = _utils2.default.getClassName(model);
      this.model = model;
    }

    if (!this.className) {
      throw new Error('Class name should be specified');
    }
  }

  _createClass(DataStore, [{
    key: 'rt',
    value: function rt() {
      return this.eventHandler = this.eventHandler || new _rtStore2.default(this);
    }
  }]);

  return DataStore;
}();

_extends(DataStore.prototype, (_dec = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.save'), _dec2 = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.remove'), _dec3 = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.find'), _dec4 = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.findById'), _dec5 = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.loadRelations'), _dec6 = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.findFirst'), _dec7 = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.findLast'), _dec8 = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.getObjectCount'), _dec9 = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.setRelation'), _dec10 = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.addRelation'), _dec11 = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.deleteRelation'), _dec12 = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.bulkCreate'), _dec13 = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.bulkUpdate'), _dec14 = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.bulkDelete'), (_obj = {
  saveSync: _utils2.default.synchronized(_save.save),
  save: _utils2.default.promisified(_save.save),

  removeSync: _utils2.default.synchronized(_remove.remove),
  remove: _utils2.default.promisified(_remove.remove),

  findSync: _utils2.default.synchronized(_find.find),
  find: _utils2.default.promisified(_find.find),

  findByIdSync: _utils2.default.synchronized(_find.findById),
  findById: _utils2.default.promisified(_find.findById),

  loadRelationsSync: _utils2.default.synchronized(_relations.loadRelations),
  loadRelations: _utils2.default.promisified(_relations.loadRelations),

  findFirstSync: _utils2.default.synchronized(_find.findFirst),
  findFirst: _utils2.default.promisified(_find.findFirst),

  findLastSync: _utils2.default.synchronized(_find.findLast),
  findLast: _utils2.default.promisified(_find.findLast),

  getObjectCountSync: _utils2.default.synchronized(_count.getObjectCount),
  getObjectCount: _utils2.default.promisified(_count.getObjectCount),

  setRelationSync: _utils2.default.synchronized(_relations.setRelation),
  setRelation: _utils2.default.promisified(_relations.setRelation),

  addRelationSync: _utils2.default.synchronized(_relations.addRelation),
  addRelation: _utils2.default.promisified(_relations.addRelation),

  deleteRelationSync: _utils2.default.synchronized(_relations.deleteRelation),
  deleteRelation: _utils2.default.promisified(_relations.deleteRelation),

  bulkCreateSync: _utils2.default.synchronized(_bulk.bulkCreate),
  bulkCreate: _utils2.default.promisified(_bulk.bulkCreate),

  bulkUpdateSync: _utils2.default.synchronized(_bulk.bulkUpdate),
  bulkUpdate: _utils2.default.promisified(_bulk.bulkUpdate),

  bulkDeleteSync: _utils2.default.synchronized(_bulk.bulkDelete),
  bulkDelete: _utils2.default.promisified(_bulk.bulkDelete)

}, (_applyDecoratedDescriptor(_obj, 'saveSync', [_dec], (_init = Object.getOwnPropertyDescriptor(_obj, 'saveSync'), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'removeSync', [_dec2], (_init2 = Object.getOwnPropertyDescriptor(_obj, 'removeSync'), _init2 = _init2 ? _init2.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init2;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'findSync', [_dec3], (_init3 = Object.getOwnPropertyDescriptor(_obj, 'findSync'), _init3 = _init3 ? _init3.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init3;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'findByIdSync', [_dec4], (_init4 = Object.getOwnPropertyDescriptor(_obj, 'findByIdSync'), _init4 = _init4 ? _init4.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init4;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'loadRelationsSync', [_dec5], (_init5 = Object.getOwnPropertyDescriptor(_obj, 'loadRelationsSync'), _init5 = _init5 ? _init5.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init5;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'findFirstSync', [_dec6], (_init6 = Object.getOwnPropertyDescriptor(_obj, 'findFirstSync'), _init6 = _init6 ? _init6.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init6;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'findLastSync', [_dec7], (_init7 = Object.getOwnPropertyDescriptor(_obj, 'findLastSync'), _init7 = _init7 ? _init7.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init7;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'getObjectCountSync', [_dec8], (_init8 = Object.getOwnPropertyDescriptor(_obj, 'getObjectCountSync'), _init8 = _init8 ? _init8.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init8;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'setRelationSync', [_dec9], (_init9 = Object.getOwnPropertyDescriptor(_obj, 'setRelationSync'), _init9 = _init9 ? _init9.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init9;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'addRelationSync', [_dec10], (_init10 = Object.getOwnPropertyDescriptor(_obj, 'addRelationSync'), _init10 = _init10 ? _init10.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init10;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'deleteRelationSync', [_dec11], (_init11 = Object.getOwnPropertyDescriptor(_obj, 'deleteRelationSync'), _init11 = _init11 ? _init11.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init11;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'bulkCreateSync', [_dec12], (_init12 = Object.getOwnPropertyDescriptor(_obj, 'bulkCreateSync'), _init12 = _init12 ? _init12.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init12;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'bulkUpdateSync', [_dec13], (_init13 = Object.getOwnPropertyDescriptor(_obj, 'bulkUpdateSync'), _init13 = _init13 ? _init13.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init13;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'bulkDeleteSync', [_dec14], (_init14 = Object.getOwnPropertyDescriptor(_obj, 'bulkDeleteSync'), _init14 = _init14 ? _init14.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init14;
  }
}), _obj)), _obj)));

exports.default = DataStore;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rt = __webpack_require__(9);

var _parse = __webpack_require__(11);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChangesTypes = {
  CREATED: 'created',
  UPDATED: 'updated',
  DELETED: 'deleted',

  BULK_CREATED: 'bulk-created',
  BULK_UPDATED: 'bulk-updated',
  BULK_DELETED: 'bulk-deleted'
};

var SingleChangesTypes = [ChangesTypes.CREATED, ChangesTypes.UPDATED, ChangesTypes.DELETED];

var EventHandler = function (_RTListeners) {
  _inherits(EventHandler, _RTListeners);

  function EventHandler(dataStore) {
    _classCallCheck(this, EventHandler);

    var _this = _possibleConstructorReturn(this, (EventHandler.__proto__ || Object.getPrototypeOf(EventHandler)).call(this));

    _this.parseObjectToInstance = function (object) {
      //TODO: "parseFindResponse" method must be moved to dataStore
      return (0, _parse.parseFindResponse)(object, _this.dataStore.model);
    };

    _this.dataStore = dataStore;
    return _this;
  }

  _createClass(EventHandler, [{
    key: 'getSubscriptionOptions',
    value: function getSubscriptionOptions() {
      return {
        tableName: this.dataStore.className
      };
    }
  }, {
    key: 'addCreateListener',
    value: function addCreateListener(whereClause, callback, onError) {
      this.addChangesListener(ChangesTypes.CREATED, whereClause, callback, onError);
    }
  }, {
    key: 'removeCreateListeners',
    value: function removeCreateListeners(whereClause, callback) {
      this.removeChangesListeners(ChangesTypes.CREATED, whereClause, callback);
    }
  }, {
    key: 'removeCreateListener',
    value: function removeCreateListener(callback) {
      if (!callback) {
        throw new Error('Listener Function must be passed.');
      }

      this.removeCreateListeners(undefined, callback);
    }
  }, {
    key: 'addUpdateListener',
    value: function addUpdateListener(whereClause, callback, onError) {
      this.addChangesListener(ChangesTypes.UPDATED, whereClause, callback, onError);
    }
  }, {
    key: 'removeUpdateListeners',
    value: function removeUpdateListeners(whereClause, callback) {
      this.removeChangesListeners(ChangesTypes.UPDATED, whereClause, callback);
    }
  }, {
    key: 'removeUpdateListener',
    value: function removeUpdateListener(callback) {
      if (!callback) {
        throw new Error('Listener Function must be passed.');
      }

      this.removeUpdateListeners(undefined, callback);
    }
  }, {
    key: 'addDeleteListener',
    value: function addDeleteListener(whereClause, callback, onError) {
      this.addChangesListener(ChangesTypes.DELETED, whereClause, callback, onError);
    }
  }, {
    key: 'removeDeleteListeners',
    value: function removeDeleteListeners(whereClause, callback) {
      this.removeChangesListeners(ChangesTypes.DELETED, whereClause, callback);
    }
  }, {
    key: 'removeDeleteListener',
    value: function removeDeleteListener(callback) {
      if (!callback) {
        throw new Error('Listener Function must be passed.');
      }

      this.removeDeleteListeners(undefined, callback);
    }
  }, {
    key: 'addBulkCreateListener',
    value: function addBulkCreateListener(whereClause, callback, onError) {
      this.addChangesListener(ChangesTypes.BULK_CREATED, whereClause, callback, onError);
    }
  }, {
    key: 'removeBulkCreateListeners',
    value: function removeBulkCreateListeners() {
      this.removeChangesListeners(ChangesTypes.BULK_CREATED);
    }
  }, {
    key: 'removeBulkCreateListener',
    value: function removeBulkCreateListener(callback) {
      if (!callback) {
        throw new Error('Listener Function must be passed.');
      }

      this.removeChangesListeners(ChangesTypes.BULK_CREATED, undefined, callback);
    }
  }, {
    key: 'addBulkUpdateListener',
    value: function addBulkUpdateListener(whereClause, callback, onError) {
      this.addChangesListener(ChangesTypes.BULK_UPDATED, whereClause, callback, onError);
    }
  }, {
    key: 'removeBulkUpdateListeners',
    value: function removeBulkUpdateListeners(whereClause, callback) {
      this.removeChangesListeners(ChangesTypes.BULK_UPDATED, whereClause, callback);
    }
  }, {
    key: 'removeBulkUpdateListener',
    value: function removeBulkUpdateListener(callback) {
      if (!callback) {
        throw new Error('Listener Function must be passed.');
      }

      this.removeBulkUpdateListeners(undefined, callback);
    }
  }, {
    key: 'addBulkDeleteListener',
    value: function addBulkDeleteListener(whereClause, callback, onError) {
      this.addChangesListener(ChangesTypes.BULK_DELETED, whereClause, callback, onError);
    }
  }, {
    key: 'removeBulkDeleteListeners',
    value: function removeBulkDeleteListeners(whereClause, callback) {
      this.removeChangesListeners(ChangesTypes.BULK_DELETED, whereClause, callback);
    }
  }, {
    key: 'removeBulkDeleteListener',
    value: function removeBulkDeleteListener(callback) {
      if (!callback) {
        throw new Error('Listener Function must be passed.');
      }

      this.removeBulkDeleteListeners(undefined, callback);
    }
  }, {
    key: 'addChangesListener',
    value: function addChangesListener(event, whereClause, callback, onError) {
      (0, _rt.checkUsesInBusinessLogic)('Subscribe on Data changes');

      if (typeof whereClause === 'function') {
        onError = callback;
        callback = whereClause;
        whereClause = undefined;
      }

      if (typeof callback !== 'function') {
        throw new Error('"callback" must be function.');
      }

      this.addSubscription(event, _rt.RTClient.subscriptions.onObjectsChanges, {
        callback: callback,
        onError: onError,
        parser: SingleChangesTypes.includes(event) ? this.parseObjectToInstance : undefined,
        params: {
          event: event,
          whereClause: whereClause
        }
      });
    }
  }, {
    key: 'removeChangesListeners',
    value: function removeChangesListeners(event, whereClause, callback) {
      if (typeof whereClause === 'function') {
        callback = whereClause;
        whereClause = undefined;
      }

      var matcher = function matcher(subscription) {
        var params = subscription.params;

        if (params.event !== event) {
          return false;
        }

        if (whereClause) {
          return params.whereClause === whereClause;
        }

        if (callback) {
          return subscription.callback === callback;
        }

        return true;
      };

      this.stopSubscription(event, { matcher: matcher });
    }
  }]);

  return EventHandler;
}(_rt.RTListeners);

exports.default = EventHandler;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * ********************************************************************************************************************
 *  Backendless RT Client for JavaScript. Version: 0.0.15
 *
 *  Copyright 2012-2018 BACKENDLESS.COM. All Rights Reserved.
 *
 *  NOTICE: All information contained herein is, and remains the property of Backendless.com and its suppliers,
 *  if any. The intellectual and technical concepts contained herein are proprietary to Backendless.com and its
 *  suppliers and may be covered by U.S. and Foreign Patents, patents in process, and are protected by trade secret
 *  or copyright law. Dissemination of this information or reproduction of this material is strictly forbidden
 *  unless prior written permission is obtained from Backendless.com.
 * ********************************************************************************************************************
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["BackendlessRTClient"] = factory();
	else
		root["BackendlessRTClient"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var NativeSocketEvents = exports.NativeSocketEvents = {
  CONNECTING: 'connecting',
  CONNECT: 'connect',
  CONNECT_ERROR: 'connect_error',
  CONNECT_TIMEOUT: 'connect_timeout',
  DISCONNECT: 'disconnect',
  RECONNECT: 'reconnect',
  RECONNECT_ATTEMPT: 'reconnect_attempt',
  RECONNECTING: 'reconnecting',
  RECONNECT_ERROR: 'reconnect_error',
  RECONNECT_FAILED: 'reconnect_failed',
  ERROR: 'error',
  PING: 'ping',
  PONG: 'pong'
};

var RTSocketEvents = exports.RTSocketEvents = {
  SUB_ON: 'SUB_ON',
  SUB_OFF: 'SUB_OFF',
  SUB_RES: 'SUB_RES',

  MET_REQ: 'MET_REQ',
  MET_RES: 'MET_RES'
};

var RTSubscriptionTypes = exports.RTSubscriptionTypes = {
  OBJECTS_CHANGES: 'OBJECTS_CHANGES',

  PUB_SUB_CONNECT: 'PUB_SUB_CONNECT',
  PUB_SUB_MESSAGES: 'PUB_SUB_MESSAGES',
  PUB_SUB_COMMANDS: 'PUB_SUB_COMMANDS',
  PUB_SUB_USERS: 'PUB_SUB_USERS',

  RSO_CONNECT: 'RSO_CONNECT',
  RSO_CHANGES: 'RSO_CHANGES',
  RSO_CLEARED: 'RSO_CLEARED',
  RSO_COMMANDS: 'RSO_COMMANDS',
  RSO_INVOKE: 'RSO_INVOKE',
  RSO_USERS: 'RSO_USERS',

  //-----------------------------------------//
  //----------- FOR CONSOLE ONLY ------------//

  LOGGING_MESSAGES: 'LOGGING_MESSAGES'

  //----------- FOR CONSOLE ONLY ------------//
  //-----------------------------------------//
};

var RTMethodTypes = exports.RTMethodTypes = {
  SET_USER_TOKEN: 'SET_USER_TOKEN',

  RSO_GET: 'RSO_GET',
  RSO_SET: 'RSO_SET',
  RSO_CLEAR: 'RSO_CLEAR',
  RSO_COMMAND: 'RSO_COMMAND',
  RSO_INVOKE: 'RSO_INVOKE',

  PUB_SUB_COMMAND: 'PUB_SUB_COMMAND'
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

var Utils = {
  generateUID: function generateUID() {
    //TODO: find a better solution for generate UID
    var hash = '';

    for (var i = 0; i < 8; i++) {
      hash += CHARS.charAt(Math.floor(Math.random() * CHARS.length));
    }

    return hash + Date.now();
  }
};

exports.default = Utils;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RTListeners = function () {
  function RTListeners() {
    _classCallCheck(this, RTListeners);

    this.subscriptions = {};
    this.simpleListeners = {};
  }

  _createClass(RTListeners, [{
    key: "addSubscription",
    value: function addSubscription(type, subscriberFn, _ref) {
      var _this = this;

      var callback = _ref.callback,
          onError = _ref.onError,
          parser = _ref.parser,
          params = _ref.params;

      var subscriptionsStack = this.subscriptions[type] = this.subscriptions[type] || [];

      var subscription = subscriberFn(_extends({}, params, this.getSubscriptionOptions()), {
        parser: parser,
        onData: callback,
        onError: onError,
        onStop: function onStop() {
          _this.subscriptions[type] = subscriptionsStack.filter(function (s) {
            return s.subscription !== subscription;
          });
        }
      });

      var subscriptionStore = {
        callback: callback,
        params: params,
        subscription: subscription,
        stop: function stop() {
          return subscription.stop();
        }
      };

      subscriptionsStack.push(subscriptionStore);

      return subscriptionStore;
    }
  }, {
    key: "getSubscriptionOptions",
    value: function getSubscriptionOptions() {
      return {};
    }
  }, {
    key: "stopSubscription",
    value: function stopSubscription(type, _ref2) {
      var callback = _ref2.callback,
          matcher = _ref2.matcher;

      var subscriptionsStack = this.subscriptions[type] = this.subscriptions[type] || [];

      if (matcher) {
        subscriptionsStack.forEach(function (subscriptionStore) {
          if (matcher(subscriptionStore)) {
            subscriptionStore.subscription.stop();
          }
        });
      } else {
        subscriptionsStack.forEach(function (subscriptionStore) {
          if (!callback || subscriptionStore.callback === callback) {
            subscriptionStore.subscription.stop();
          }
        });
      }
    }
  }, {
    key: "addSimpleListener",
    value: function addSimpleListener(type, callback) {
      var listenersStack = this.simpleListeners[type] = this.simpleListeners[type] || [];

      listenersStack.push(callback);
    }
  }, {
    key: "removeSimpleListener",
    value: function removeSimpleListener(type, callback) {
      if (this.simpleListeners[type]) {
        this.simpleListeners[type] = callback ? this.simpleListeners[type].filter(function (cb) {
          return cb !== callback;
        }) : [];
      }
    }
  }, {
    key: "runSimpleListeners",
    value: function runSimpleListeners(type) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (this.simpleListeners[type]) {
        this.simpleListeners[type].forEach(function (callback) {
          return callback.apply(undefined, args);
        });
      }
    }
  }, {
    key: "removeAllListeners",
    value: function removeAllListeners() {
      var _this2 = this;

      Object.keys(this.subscriptions).forEach(function (listenerType) {
        _this2.subscriptions[listenerType].forEach(function (_ref3) {
          var subscription = _ref3.subscription;
          return subscription.stop();
        });
      });

      this.simpleListeners = {};
    }
  }]);

  return RTListeners;
}();

exports.default = RTListeners;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RTScopeConnector = exports.RTListeners = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _client = __webpack_require__(5);

var _client2 = _interopRequireDefault(_client);

var _listeners = __webpack_require__(2);

var _listeners2 = _interopRequireDefault(_listeners);

var _scopeConnector = __webpack_require__(13);

var _scopeConnector2 = _interopRequireDefault(_scopeConnector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var root = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) === 'object' && self.self === self && self || (typeof global === 'undefined' ? 'undefined' : _typeof(global)) === 'object' && global.global === global && global;

_client2.default.Listeners = _listeners2.default;
_client2.default.ScopeConnector = _scopeConnector2.default;

if (root) {
  root.BackendlessRTClient = _client2.default;
}

module.exports = _client2.default;

exports.default = _client2.default;
var RTListeners = exports.RTListeners = _listeners2.default;
var RTScopeConnector = exports.RTScopeConnector = _scopeConnector2.default;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(0);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _config = __webpack_require__(6);

var _config2 = _interopRequireDefault(_config);

var _subscriptions = __webpack_require__(7);

var _subscriptions2 = _interopRequireDefault(_subscriptions);

var _methods = __webpack_require__(8);

var _methods2 = _interopRequireDefault(_methods);

var _session = __webpack_require__(9);

var _session2 = _interopRequireDefault(_session);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CONNECTION_MANAGE_EVENTS = [_constants.NativeSocketEvents.CONNECTING, _constants.NativeSocketEvents.CONNECT, _constants.NativeSocketEvents.CONNECT_ERROR, _constants.NativeSocketEvents.DISCONNECT, _constants.NativeSocketEvents.RECONNECT_ATTEMPT];

var RTClient = function () {
  function RTClient(config) {
    var _this = this;

    _classCallCheck(this, RTClient);

    this.connectOnMethod = function (method) {
      return function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        if (_this.connectible) {
          var rtSocketPromise = _this.provideConnection();

          if (_this.connected) {
            rtSocketPromise.then(function (rtSocket) {
              return rtSocket[method].apply(rtSocket, args);
            });
          }
        }
      };
    };

    this.on = this.connectOnMethod('on');
    this.emit = this.connectOnMethod('emit');

    this.onSessionDisconnect = function () {
      _this.subscriptions.stop();
      _this.methods.stop();

      delete _this.session;

      _this.provideConnection();
    };

    this.emitSocketEventListeners = function (event) {
      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      if (_this.socketEvents[event]) {
        _this.socketEvents[event].forEach(function (callback) {
          return callback.apply(undefined, args);
        });
      }
    };

    this.addConnectingEventListener = function (callback) {
      return _this.addSocketEventListener(_constants.NativeSocketEvents.CONNECTING, callback);
    };

    this.removeConnectingEventListener = function (callback) {
      return _this.removeSocketEventListener(_constants.NativeSocketEvents.CONNECTING, callback);
    };

    this.addConnectEventListener = function (callback) {
      return _this.addSocketEventListener(_constants.NativeSocketEvents.CONNECT, callback);
    };

    this.removeConnectEventListener = function (callback) {
      return _this.removeSocketEventListener(_constants.NativeSocketEvents.CONNECT, callback);
    };

    this.addConnectErrorEventListener = function (callback) {
      return _this.addSocketEventListener(_constants.NativeSocketEvents.CONNECT_ERROR, callback);
    };

    this.removeConnectErrorEventListener = function (callback) {
      return _this.removeSocketEventListener(_constants.NativeSocketEvents.CONNECT_ERROR, callback);
    };

    this.addDisconnectEventListener = function (callback) {
      return _this.addSocketEventListener(_constants.NativeSocketEvents.DISCONNECT, callback);
    };

    this.removeDisconnectEventListener = function (callback) {
      return _this.removeSocketEventListener(_constants.NativeSocketEvents.DISCONNECT, callback);
    };

    this.addReconnectAttemptEventListener = function (callback) {
      return _this.addSocketEventListener(_constants.NativeSocketEvents.RECONNECT_ATTEMPT, callback);
    };

    this.removeReconnectAttemptEventListener = function (callback) {
      return _this.removeSocketEventListener(_constants.NativeSocketEvents.RECONNECT_ATTEMPT, callback);
    };

    this.removeConnectionListeners = function () {
      CONNECTION_MANAGE_EVENTS.forEach(function (event) {
        return _this.removeSocketEventListener(event);
      });
    };

    this.config = new _config2.default(config);

    this.socketEvents = {};

    var socketContext = {
      onMessage: this.on.bind(this),
      emitMessage: this.emit.bind(this)
    };

    this.subscriptions = new _subscriptions2.default(socketContext);
    this.methods = new _methods2.default(socketContext);

    this.connectible = true;
    this.connected = false;
  }

  _createClass(RTClient, [{
    key: 'setConfig',
    value: function setConfig(config) {
      this.config.set(config);

      if (this.session) {
        this.disconnect('Re-config socket connection');

        this.connect();
      }
    }
  }, {
    key: 'provideConnection',
    value: function provideConnection() {
      var _this2 = this;

      if (!this.session) {
        this.session = new _session2.default(this.config, this.emitSocketEventListeners, this.onSessionDisconnect);
        this.session.getSocket().then(function () {
          _this2.connected = true;

          _this2.methods.initialize();

          _this2.subscriptions.initialize();
          _this2.subscriptions.restore();
        });
      }

      return this.session.getSocket();
    }
  }, {
    key: 'connect',
    value: function connect() {
      this.connectible = true;

      this.provideConnection();
    }
  }, {
    key: 'disconnect',
    value: function disconnect(reason) {
      if (this.session) {
        this.subscriptions.stop();
        this.methods.stop();

        this.session.terminate();

        delete this.session;

        this.emitSocketEventListeners(_constants.NativeSocketEvents.DISCONNECT, reason || 'disconnected by client');
      }

      this.connectible = false;
      this.connected = false;
    }
  }, {
    key: 'terminate',
    value: function terminate(reason) {
      this.socketEvents = {};

      this.subscriptions.reset();
      this.methods.reset();

      this.disconnect(reason || 'Terminated by client');
    }
  }, {
    key: 'addSocketEventListener',
    value: function addSocketEventListener(event, callback) {
      this.socketEvents[event] = this.socketEvents[event] || [];
      this.socketEvents[event].push(callback);

      return this;
    }
  }, {
    key: 'removeSocketEventListener',
    value: function removeSocketEventListener(event, callback) {
      if (this.socketEvents[event]) {
        this.socketEvents[event] = callback ? this.socketEvents[event].filter(function (cb) {
          return cb !== callback;
        }) : [];

        if (!this.socketEvents[event].length) {
          delete this.socketEvents[event];
        }
      }

      return this;
    }
  }]);

  return RTClient;
}();

exports.default = RTClient;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var isUndefined = function isUndefined(value) {
  return typeof value === 'undefined';
};
var isString = function isString(value) {
  return typeof value === 'string';
};
var isFunction = function isFunction(value) {
  return typeof value === 'function';
};
var isObject = function isObject(value) {
  return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value !== null;
};

var RTConfig = function () {
  function RTConfig(config) {
    _classCallCheck(this, RTConfig);

    this.appId = null;
    this.lookupPath = null;
    this.lookupHeaders = {};
    this.debugMode = false;
    this.connectQuery = {};

    this.set(config);
  }

  _createClass(RTConfig, [{
    key: 'set',
    value: function set(config) {
      if (!config) {
        return;
      }

      if (!isUndefined(config.appId)) {
        if (!isString(config.appId)) {
          throw new Error('"appId" must be String.');
        }

        this.appId = config.appId;
      }

      if (!isUndefined(config.lookupPath)) {
        if (!isString(config.lookupPath)) {
          throw new Error('"lookupPath" must be String.');
        }

        this.lookupPath = config.lookupPath;
      }

      if (!isUndefined(config.lookupHeaders)) {
        if (!isObject(config.lookupHeaders)) {
          throw new Error('"lookupHeaders" must be Object.');
        }

        this.lookupHeaders = config.lookupHeaders;
      }

      if (!isUndefined(config.debugMode)) {
        this.debugMode = !!config.debugMode;
      }

      if (!isUndefined(config.connectQuery)) {
        if (isFunction(config.connectQuery)) {
          this.getConnectQuery = config.connectQuery;
        } else if (isObject(config.connectQuery)) {
          this.connectQuery = config.connectQuery;
        } else {
          throw new Error('"connectQuery" must be Function or Object.');
        }
      }
    }
  }, {
    key: 'getConnectQuery',
    value: function getConnectQuery() {
      return this.connectQuery;
    }
  }]);

  return RTConfig;
}();

exports.default = RTConfig;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(0);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var subscription = function subscription(type) {
  return function (options, callbacks) {
    return this.subscribe(type, options, callbacks);
  };
};

var RTSubscriptions = function () {
  function RTSubscriptions(_ref) {
    var onMessage = _ref.onMessage,
        emitMessage = _ref.emitMessage;

    _classCallCheck(this, RTSubscriptions);

    this.onObjectsChanges = subscription(_constants.RTSubscriptionTypes.OBJECTS_CHANGES).bind(this);
    this.connectToPubSub = subscription(_constants.RTSubscriptionTypes.PUB_SUB_CONNECT).bind(this);
    this.onPubSubMessage = subscription(_constants.RTSubscriptionTypes.PUB_SUB_MESSAGES).bind(this);
    this.onPubSubCommand = subscription(_constants.RTSubscriptionTypes.PUB_SUB_COMMANDS).bind(this);
    this.onPubSubUserStatus = subscription(_constants.RTSubscriptionTypes.PUB_SUB_USERS).bind(this);
    this.connectToRSO = subscription(_constants.RTSubscriptionTypes.RSO_CONNECT).bind(this);
    this.onRSOChanges = subscription(_constants.RTSubscriptionTypes.RSO_CHANGES).bind(this);
    this.onRSOClear = subscription(_constants.RTSubscriptionTypes.RSO_CLEARED).bind(this);
    this.onRSOCommand = subscription(_constants.RTSubscriptionTypes.RSO_COMMANDS).bind(this);
    this.onRSOInvoke = subscription(_constants.RTSubscriptionTypes.RSO_INVOKE).bind(this);
    this.onRSOUserStatus = subscription(_constants.RTSubscriptionTypes.RSO_USERS).bind(this);
    this.onLoggingMessages = subscription(_constants.RTSubscriptionTypes.LOGGING_MESSAGES).bind(this);

    this.onMessage = onMessage;
    this.emitMessage = emitMessage;

    this.subscriptions = {};
  }

  _createClass(RTSubscriptions, [{
    key: 'initialize',
    value: function initialize() {
      var _this = this;

      this.onMessage(_constants.RTSocketEvents.SUB_RES, function (data) {
        return _this.onSubscriptionResponse(data);
      });
    }
  }, {
    key: 'stop',
    value: function stop() {
      var _this2 = this;

      Object.keys(this.subscriptions).forEach(function (subscriptionId) {
        _this2.subscriptions[subscriptionId].ready = false;
      });
    }
  }, {
    key: 'reset',
    value: function reset() {
      var _this3 = this;

      Object.keys(this.subscriptions).forEach(function (subscriptionId) {
        return _this3.stopSubscription(subscriptionId);
      });
    }
  }, {
    key: 'restore',
    value: function restore() {
      var _this4 = this;

      Object.keys(this.subscriptions).forEach(function (subscriptionId) {
        _this4.startSubscription(subscriptionId);
      });
    }
  }, {
    key: 'hasActivity',
    value: function hasActivity() {
      return !!Object.keys(this.subscriptions).length;
    }
  }, {
    key: 'subscribe',
    value: function subscribe(name, options, _ref2) {
      var _this5 = this;

      var parser = _ref2.parser,
          onData = _ref2.onData,
          onError = _ref2.onError,
          onStop = _ref2.onStop,
          onReady = _ref2.onReady;

      var subscriptionId = _utils2.default.generateUID();

      this.subscriptions[subscriptionId] = {
        data: { id: subscriptionId, name: name, options: options },
        ready: false,
        parser: parser,
        onData: onData,
        onError: onError,
        onStop: onStop,
        onReady: onReady
      };

      this.startSubscription(subscriptionId);

      return {
        isReady: function isReady() {
          return !!_this5.subscriptions[subscriptionId] && _this5.subscriptions[subscriptionId].ready;
        },

        stop: function stop() {
          if (_this5.subscriptions[subscriptionId]) {
            _this5.offSubscription(subscriptionId);
          }
        }
      };
    }
  }, {
    key: 'startSubscription',
    value: function startSubscription(subscriptionId) {
      var subscription = this.subscriptions[subscriptionId];

      this.emitMessage(_constants.RTSocketEvents.SUB_ON, subscription.data);
    }
  }, {
    key: 'stopSubscription',
    value: function stopSubscription(subscriptionId) {
      var subscription = this.subscriptions[subscriptionId];

      if (subscription) {
        if (subscription.onStop) {
          subscription.onStop();
        }

        delete this.subscriptions[subscriptionId];
      }
    }
  }, {
    key: 'offSubscription',
    value: function offSubscription(subscriptionId) {
      var subscription = this.subscriptions[subscriptionId];

      if (subscription) {
        this.emitMessage(_constants.RTSocketEvents.SUB_OFF, { id: subscriptionId });

        this.stopSubscription(subscriptionId);
      }
    }
  }, {
    key: 'onSubscriptionResponse',

    /***** LOGGING SUBSCRIPTIONS ****** **/
    /***************************************** **/

    /** CONSOLE's SUBSCRIPTIONS **************************************************** **/
    /******************************************************************************* **/
    /******************************************************************************* **/
    value: function onSubscriptionResponse(_ref3) {
      var id = _ref3.id,
          data = _ref3.data,
          error = _ref3.error;

      var subscription = this.subscriptions[id];

      if (subscription) {
        if (error) {

          if (subscription.onError) {
            subscription.onError(error);
          }

          this.stopSubscription(id);
        } else {
          if (!subscription.ready) {
            subscription.ready = true;

            if (subscription.onReady) {
              subscription.onReady();
            }
          }

          if (subscription.onData) {
            if (typeof subscription.parser === 'function') {
              data = subscription.parser(data);
            }

            subscription.onData(data);
          }
        }
      }
    }

    /******************************************************************************* **/
    /******************************************************************************* **/
    /** COMMON SUBSCRIPTIONS ******************************************************** **/

    /***************************************** **/
    /***** DATA SUBSCRIPTIONS **************** **/
    /** */
    /***** DATA SUBSCRIPTIONS **************** **/
    /***************************************** **/

    /***************************************** **/
    /***** PUB_SUB SUBSCRIPTIONS ************* **/
    /** */
    /** */
    /** */
    /** */
    /***** PUB_SUB SUBSCRIPTIONS ************* **/
    /***************************************** **/

    /***************************************** **/
    /***** RSO SUBSCRIPTIONS ***************** **/
    /** */
    /** */
    /** */
    /** */
    /** */
    /** */
    /***** RSO SUBSCRIPTIONS ***************** **/
    /***************************************** **/

    /** COMMON SUBSCRIPTIONS ******************************************************** **/
    /******************************************************************************* **/
    /******************************************************************************* **/

    /******************************************************************************* **/
    /******************************************************************************* **/
    /** CONSOLE's SUBSCRIPTIONS **************************************************** **/

    /***************************************** **/
    /***** LOGGING SUBSCRIPTIONS ****** **/
    /** */
  }]);

  return RTSubscriptions;
}();

exports.default = RTSubscriptions;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(0);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var method = function method(type) {
  return function (data) {
    return this.send(type, data);
  };
};

var RTMethods = function () {
  function RTMethods(_ref) {
    var _this = this;

    var onMessage = _ref.onMessage,
        emitMessage = _ref.emitMessage;

    _classCallCheck(this, RTMethods);

    this.onResponse = function (_ref2) {
      var id = _ref2.id,
          error = _ref2.error,
          result = _ref2.result;

      if (_this.invocations[id]) {
        var invocation = _this.invocations[id];

        if (error) {
          invocation.reject(error);
        } else {
          invocation.resolve(result);
        }

        delete _this.invocations[id];
      }
    };

    this.setUserToken = method(_constants.RTMethodTypes.SET_USER_TOKEN).bind(this);
    this.sendPubSubCommand = method(_constants.RTMethodTypes.PUB_SUB_COMMAND).bind(this);
    this.getRSO = method(_constants.RTMethodTypes.RSO_GET).bind(this);
    this.setRSO = method(_constants.RTMethodTypes.RSO_SET).bind(this);
    this.clearRSO = method(_constants.RTMethodTypes.RSO_CLEAR).bind(this);
    this.sendRSOCommand = method(_constants.RTMethodTypes.RSO_COMMAND).bind(this);
    this.invokeRSOMethod = method(_constants.RTMethodTypes.RSO_INVOKE).bind(this);

    this.onMessage = onMessage;
    this.emitMessage = emitMessage;

    this.invocations = {};
  }

  _createClass(RTMethods, [{
    key: 'initialize',
    value: function initialize() {
      this.onMessage(_constants.RTSocketEvents.MET_RES, this.onResponse);
    }
  }, {
    key: 'stop',
    value: function stop() {}
  }, {
    key: 'reset',
    value: function reset() {
      this.invocations = {};
    }
  }, {
    key: 'hasActivity',
    value: function hasActivity() {
      return !!Object.keys(this.invocations).length;
    }
  }, {
    key: 'send',


    //----------- RSO METHODS ---------//
    //---------------------------------//
    value: function send(name, options) {
      var _this2 = this;

      var methodId = _utils2.default.generateUID();
      var methodData = { id: methodId, name: name, options: options };

      this.emitMessage(_constants.RTSocketEvents.MET_REQ, methodData);

      return new Promise(function (resolve, reject) {
        _this2.invocations[methodId] = { resolve: resolve, reject: reject };
      });
    }

    //---------------------------------//
    //----------- AUTH METHODS --------//

    //----------- AUTH METHODS --------//
    //---------------------------------//

    //---------------------------------//
    //-------- PUB_SUB METHODS --------//

    //-------- PUB_SUB METHODS --------//
    //---------------------------------//

    //---------------------------------//
    //----------- RSO METHODS ---------//

  }]);

  return RTMethods;
}();

exports.default = RTMethods;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(0);

var _socket = __webpack_require__(10);

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var INCREASE_RECONNECTION_TIMEOUT_STEP = 10;
var INITIAL_RECONNECTION_TIMEOUT = 200;
var MAX_RECONNECTION_TIMEOUT = 60 * 1000; // a minute

var wait = function wait(milliseconds) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, milliseconds);
  });
};

var RTSession = function () {
  function RTSession(config, dispatch, onDisconnect) {
    _classCallCheck(this, RTSession);

    this.config = config;
    this.dispatch = dispatch;
    this.onDisconnect = onDisconnect;

    this.connectAttempt = 0;

    this.socketPromise = this.connect();
  }

  _createClass(RTSession, [{
    key: 'terminate',
    value: function terminate() {
      if (!this.terminated) {
        this.terminated = true;

        this.dispatch = function () {
          //if sessions has been terminated don't need to dispatch any events
        };

        this.socketPromise.then(function (rtSocket) {
          if (rtSocket) {
            rtSocket.close();
          }
        });
      }
    }
  }, {
    key: 'getSocket',
    value: function getSocket() {
      var _this = this;

      return this.socketPromise.then(function (rtSocket) {
        if (_this.terminated) {
          return new Promise(function () {
            //return unresolvable promise for preventing errors
            //this connection session has been terminated and a new one will be created if it necessary
          });
        }

        return rtSocket;
      });
    }
  }, {
    key: 'connect',
    value: function connect() {
      var _this2 = this;

      if (this.terminated) {
        return;
      }

      this.connectAttempt = this.connectAttempt + 1;

      var nextReconnectionTimeout = this.getNextReconnectionTimeout();

      this.onConnecting();

      if (this.connectAttempt > 1) {
        this.onReconnectAttempt(this.connectAttempt - 1, nextReconnectionTimeout);
      }

      return _socket2.default.connect(this.config, this.onSocketDisconnect.bind(this)).then(function (rtSocket) {
        _this2.connectAttempt = 0;

        _this2.onConnect();

        return rtSocket;
      }).catch(function (error) {
        _this2.onConnectError(error);

        if (!_this2.terminated) {
          // wait for 400|800|1600|...|MAX_RECONNECTION_TIMEOUT milliseconds
          return wait(nextReconnectionTimeout).then(function () {
            return _this2.connect();
          });
        }
      });
    }
  }, {
    key: 'getNextReconnectionTimeout',
    value: function getNextReconnectionTimeout() {
      var factor = Math.ceil(this.connectAttempt / INCREASE_RECONNECTION_TIMEOUT_STEP);
      var timeout = INITIAL_RECONNECTION_TIMEOUT * Math.pow(2, factor);

      return Math.min(timeout, MAX_RECONNECTION_TIMEOUT);
    }
  }, {
    key: 'onSocketDisconnect',
    value: function onSocketDisconnect(reason) {
      this.dispatch(_constants.NativeSocketEvents.DISCONNECT, reason);

      if (!this.terminated) {
        this.terminate();

        this.onDisconnect();
      }
    }
  }, {
    key: 'onConnecting',
    value: function onConnecting() {
      this.dispatch(_constants.NativeSocketEvents.CONNECTING);
    }
  }, {
    key: 'onConnect',
    value: function onConnect() {
      this.dispatch(_constants.NativeSocketEvents.CONNECT);
    }
  }, {
    key: 'onConnectError',
    value: function onConnectError(error) {
      this.dispatch(_constants.NativeSocketEvents.CONNECT_ERROR, error && error.message || error);
    }
  }, {
    key: 'onReconnectAttempt',
    value: function onReconnectAttempt(attempt, timeout) {
      this.dispatch(_constants.NativeSocketEvents.RECONNECT_ATTEMPT, attempt, timeout);
    }
  }]);

  return RTSession;
}();

exports.default = RTSession;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _socket = __webpack_require__(11);

var _socket2 = _interopRequireDefault(_socket);

var _backendlessRequest = __webpack_require__(12);

var _backendlessRequest2 = _interopRequireDefault(_backendlessRequest);

var _constants = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RTSocket = function () {
  _createClass(RTSocket, null, [{
    key: 'connect',
    value: function connect(config, onDisconnect) {
      if (!config.lookupPath) {
        throw new Error('config.lookupPath is not configured');
      }

      return _backendlessRequest2.default.get(config.lookupPath).set(config.lookupHeaders).then(function (rtServerHost) {
        return new Promise(function (resolve, reject) {
          var rtSocket = new RTSocket(config, rtServerHost);

          rtSocket.on(_constants.NativeSocketEvents.CONNECT, onConnect);
          rtSocket.on(_constants.NativeSocketEvents.CONNECT_ERROR, onError);
          rtSocket.on(_constants.NativeSocketEvents.CONNECT_TIMEOUT, onError);
          rtSocket.on(_constants.NativeSocketEvents.ERROR, onError);

          rtSocket.connect();

          function onConnect() {
            resolve(rtSocket);
          }

          function onError(error) {
            rtSocket.close();

            reject(error);
          }
        });
      }).then(function (rtSocket) {
        rtSocket.on(_constants.NativeSocketEvents.DISCONNECT, onDisconnect);

        return rtSocket;
      });
    }
  }]);

  function RTSocket(config, host) {
    _classCallCheck(this, RTSocket);

    this.config = config;

    this.events = {};

    if (!config.appId) {
      throw new Error('config.appId is not configured');
    }

    this.ioSocket = (0, _socket2.default)(host + '/' + this.config.appId, {
      forceNew: true,
      autoConnect: false,
      reconnection: false,
      path: '/' + this.config.appId,
      query: this.config.getConnectQuery()
    });
  }

  _createClass(RTSocket, [{
    key: 'connect',
    value: function connect() {
      this.ioSocket.connect();
    }
  }, {
    key: 'close',
    value: function close() {
      this.events = {};
      this.ioSocket.off();
      this.ioSocket.close();
    }
  }, {
    key: 'on',
    value: function on(event, callback) {
      var _this = this;

      if (!this.events[event]) {
        this.ioSocket.on(event, function (data) {
          return _this.onEvent(event, data);
        });
      }

      this.events[event] = this.events[event] || [];
      this.events[event].push(callback);
    }
  }, {
    key: 'off',
    value: function off(event, callback) {
      this.events[event] = callback ? this.events[event].filter(function (f) {
        return f !== callback;
      }) : [];

      if (!this.events[event].length) {
        delete this.events[event];
      }

      if (!this.events[event]) {
        this.ioSocket.off(event);
      }
    }
  }, {
    key: 'onEvent',
    value: function onEvent(event, data) {
      if (this.config.debugMode) {
        logMessage('FROM SERVER', event, data);
      }

      if (this.events[event]) {
        this.events[event].forEach(function (callback) {
          return callback(data);
        });
      }
    }
  }, {
    key: 'emit',
    value: function emit(event, data) {
      if (this.config.debugMode) {
        logMessage('TO SERVER', event, data);
      }

      this.ioSocket.emit(event, data);
    }
  }]);

  return RTSocket;
}();

exports.default = RTSocket;


function logMessage(type, event, data) {
  console.log('[' + type + '] - [event: ' + event + '] - arguments: ' + JSON.stringify(data) + ' ');
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.io=e():t.io=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function r(t,e){"object"===("undefined"==typeof t?"undefined":o(t))&&(e=t,t=void 0),e=e||{};var n,r=i(t),s=r.source,u=r.id,h=r.path,f=p[u]&&h in p[u].nsps,l=e.forceNew||e["force new connection"]||!1===e.multiplex||f;return l?(c("ignoring socket cache for %s",s),n=a(s,e)):(p[u]||(c("new io instance for %s",s),p[u]=a(s,e)),n=p[u]),r.query&&!e.query&&(e.query=r.query),n.socket(r.path,e)}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=n(1),s=n(7),a=n(13),c=n(3)("socket.io-client");t.exports=e=r;var p=e.managers={};e.protocol=s.protocol,e.connect=r,e.Manager=n(13),e.Socket=n(37)},function(t,e,n){(function(e){"use strict";function r(t,n){var r=t;n=n||e.location,null==t&&(t=n.protocol+"//"+n.host),"string"==typeof t&&("/"===t.charAt(0)&&(t="/"===t.charAt(1)?n.protocol+t:n.host+t),/^(https?|wss?):\/\//.test(t)||(i("protocol-less url %s",t),t="undefined"!=typeof n?n.protocol+"//"+t:"https://"+t),i("parse %s",t),r=o(t)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/";var s=r.host.indexOf(":")!==-1,a=s?"["+r.host+"]":r.host;return r.id=r.protocol+"://"+a+":"+r.port,r.href=r.protocol+"://"+a+(n&&n.port===r.port?"":":"+r.port),r}var o=n(2),i=n(3)("socket.io-client:url");t.exports=r}).call(e,function(){return this}())},function(t,e){var n=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,r=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];t.exports=function(t){var e=t,o=t.indexOf("["),i=t.indexOf("]");o!=-1&&i!=-1&&(t=t.substring(0,o)+t.substring(o,i).replace(/:/g,";")+t.substring(i,t.length));for(var s=n.exec(t||""),a={},c=14;c--;)a[r[c]]=s[c]||"";return o!=-1&&i!=-1&&(a.source=e,a.host=a.host.substring(1,a.host.length-1).replace(/;/g,":"),a.authority=a.authority.replace("[","").replace("]","").replace(/;/g,":"),a.ipv6uri=!0),a}},function(t,e,n){(function(r){function o(){return!("undefined"==typeof window||!window.process||"renderer"!==window.process.type)||("undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))}function i(t){var n=this.useColors;if(t[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+t[0]+(n?"%c ":" ")+"+"+e.humanize(this.diff),n){var r="color: "+this.color;t.splice(1,0,r,"color: inherit");var o=0,i=0;t[0].replace(/%[a-zA-Z%]/g,function(t){"%%"!==t&&(o++,"%c"===t&&(i=o))}),t.splice(i,0,r)}}function s(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function a(t){try{null==t?e.storage.removeItem("debug"):e.storage.debug=t}catch(n){}}function c(){var t;try{t=e.storage.debug}catch(n){}return!t&&"undefined"!=typeof r&&"env"in r&&(t=r.env.DEBUG),t}function p(){try{return window.localStorage}catch(t){}}e=t.exports=n(5),e.log=s,e.formatArgs=i,e.save=a,e.load=c,e.useColors=o,e.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:p(),e.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],e.formatters.j=function(t){try{return JSON.stringify(t)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},e.enable(c())}).call(e,n(4))},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(t){if(u===setTimeout)return setTimeout(t,0);if((u===n||!u)&&setTimeout)return u=setTimeout,setTimeout(t,0);try{return u(t,0)}catch(e){try{return u.call(null,t,0)}catch(e){return u.call(this,t,0)}}}function i(t){if(h===clearTimeout)return clearTimeout(t);if((h===r||!h)&&clearTimeout)return h=clearTimeout,clearTimeout(t);try{return h(t)}catch(e){try{return h.call(null,t)}catch(e){return h.call(this,t)}}}function s(){y&&l&&(y=!1,l.length?d=l.concat(d):m=-1,d.length&&a())}function a(){if(!y){var t=o(s);y=!0;for(var e=d.length;e;){for(l=d,d=[];++m<e;)l&&l[m].run();m=-1,e=d.length}l=null,y=!1,i(t)}}function c(t,e){this.fun=t,this.array=e}function p(){}var u,h,f=t.exports={};!function(){try{u="function"==typeof setTimeout?setTimeout:n}catch(t){u=n}try{h="function"==typeof clearTimeout?clearTimeout:r}catch(t){h=r}}();var l,d=[],y=!1,m=-1;f.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];d.push(new c(t,e)),1!==d.length||y||o(a)},c.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=p,f.addListener=p,f.once=p,f.off=p,f.removeListener=p,f.removeAllListeners=p,f.emit=p,f.prependListener=p,f.prependOnceListener=p,f.listeners=function(t){return[]},f.binding=function(t){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(t){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},function(t,e,n){function r(t){var n,r=0;for(n in t)r=(r<<5)-r+t.charCodeAt(n),r|=0;return e.colors[Math.abs(r)%e.colors.length]}function o(t){function n(){if(n.enabled){var t=n,r=+new Date,o=r-(p||r);t.diff=o,t.prev=p,t.curr=r,p=r;for(var i=new Array(arguments.length),s=0;s<i.length;s++)i[s]=arguments[s];i[0]=e.coerce(i[0]),"string"!=typeof i[0]&&i.unshift("%O");var a=0;i[0]=i[0].replace(/%([a-zA-Z%])/g,function(n,r){if("%%"===n)return n;a++;var o=e.formatters[r];if("function"==typeof o){var s=i[a];n=o.call(t,s),i.splice(a,1),a--}return n}),e.formatArgs.call(t,i);var c=n.log||e.log||console.log.bind(console);c.apply(t,i)}}return n.namespace=t,n.enabled=e.enabled(t),n.useColors=e.useColors(),n.color=r(t),"function"==typeof e.init&&e.init(n),n}function i(t){e.save(t),e.names=[],e.skips=[];for(var n=("string"==typeof t?t:"").split(/[\s,]+/),r=n.length,o=0;o<r;o++)n[o]&&(t=n[o].replace(/\*/g,".*?"),"-"===t[0]?e.skips.push(new RegExp("^"+t.substr(1)+"$")):e.names.push(new RegExp("^"+t+"$")))}function s(){e.enable("")}function a(t){var n,r;for(n=0,r=e.skips.length;n<r;n++)if(e.skips[n].test(t))return!1;for(n=0,r=e.names.length;n<r;n++)if(e.names[n].test(t))return!0;return!1}function c(t){return t instanceof Error?t.stack||t.message:t}e=t.exports=o.debug=o["default"]=o,e.coerce=c,e.disable=s,e.enable=i,e.enabled=a,e.humanize=n(6),e.names=[],e.skips=[],e.formatters={};var p},function(t,e){function n(t){if(t=String(t),!(t.length>100)){var e=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);if(e){var n=parseFloat(e[1]),r=(e[2]||"ms").toLowerCase();switch(r){case"years":case"year":case"yrs":case"yr":case"y":return n*u;case"days":case"day":case"d":return n*p;case"hours":case"hour":case"hrs":case"hr":case"h":return n*c;case"minutes":case"minute":case"mins":case"min":case"m":return n*a;case"seconds":case"second":case"secs":case"sec":case"s":return n*s;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n;default:return}}}}function r(t){return t>=p?Math.round(t/p)+"d":t>=c?Math.round(t/c)+"h":t>=a?Math.round(t/a)+"m":t>=s?Math.round(t/s)+"s":t+"ms"}function o(t){return i(t,p,"day")||i(t,c,"hour")||i(t,a,"minute")||i(t,s,"second")||t+" ms"}function i(t,e,n){if(!(t<e))return t<1.5*e?Math.floor(t/e)+" "+n:Math.ceil(t/e)+" "+n+"s"}var s=1e3,a=60*s,c=60*a,p=24*c,u=365.25*p;t.exports=function(t,e){e=e||{};var i=typeof t;if("string"===i&&t.length>0)return n(t);if("number"===i&&isNaN(t)===!1)return e["long"]?o(t):r(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))}},function(t,e,n){function r(){}function o(t){var n=""+t.type;return e.BINARY_EVENT!==t.type&&e.BINARY_ACK!==t.type||(n+=t.attachments+"-"),t.nsp&&"/"!==t.nsp&&(n+=t.nsp+","),null!=t.id&&(n+=t.id),null!=t.data&&(n+=JSON.stringify(t.data)),h("encoded %j as %s",t,n),n}function i(t,e){function n(t){var n=d.deconstructPacket(t),r=o(n.packet),i=n.buffers;i.unshift(r),e(i)}d.removeBlobs(t,n)}function s(){this.reconstructor=null}function a(t){var n=0,r={type:Number(t.charAt(0))};if(null==e.types[r.type])return u();if(e.BINARY_EVENT===r.type||e.BINARY_ACK===r.type){for(var o="";"-"!==t.charAt(++n)&&(o+=t.charAt(n),n!=t.length););if(o!=Number(o)||"-"!==t.charAt(n))throw new Error("Illegal attachments");r.attachments=Number(o)}if("/"===t.charAt(n+1))for(r.nsp="";++n;){var i=t.charAt(n);if(","===i)break;if(r.nsp+=i,n===t.length)break}else r.nsp="/";var s=t.charAt(n+1);if(""!==s&&Number(s)==s){for(r.id="";++n;){var i=t.charAt(n);if(null==i||Number(i)!=i){--n;break}if(r.id+=t.charAt(n),n===t.length)break}r.id=Number(r.id)}return t.charAt(++n)&&(r=c(r,t.substr(n))),h("decoded %s as %j",t,r),r}function c(t,e){try{t.data=JSON.parse(e)}catch(n){return u()}return t}function p(t){this.reconPack=t,this.buffers=[]}function u(){return{type:e.ERROR,data:"parser error"}}var h=n(3)("socket.io-parser"),f=n(8),l=n(9),d=n(11),y=n(12);e.protocol=4,e.types=["CONNECT","DISCONNECT","EVENT","ACK","ERROR","BINARY_EVENT","BINARY_ACK"],e.CONNECT=0,e.DISCONNECT=1,e.EVENT=2,e.ACK=3,e.ERROR=4,e.BINARY_EVENT=5,e.BINARY_ACK=6,e.Encoder=r,e.Decoder=s,r.prototype.encode=function(t,n){if(t.type!==e.EVENT&&t.type!==e.ACK||!l(t.data)||(t.type=t.type===e.EVENT?e.BINARY_EVENT:e.BINARY_ACK),h("encoding packet %j",t),e.BINARY_EVENT===t.type||e.BINARY_ACK===t.type)i(t,n);else{var r=o(t);n([r])}},f(s.prototype),s.prototype.add=function(t){var n;if("string"==typeof t)n=a(t),e.BINARY_EVENT===n.type||e.BINARY_ACK===n.type?(this.reconstructor=new p(n),0===this.reconstructor.reconPack.attachments&&this.emit("decoded",n)):this.emit("decoded",n);else{if(!y(t)&&!t.base64)throw new Error("Unknown type: "+t);if(!this.reconstructor)throw new Error("got binary data when not reconstructing a packet");n=this.reconstructor.takeBinaryData(t),n&&(this.reconstructor=null,this.emit("decoded",n))}},s.prototype.destroy=function(){this.reconstructor&&this.reconstructor.finishedReconstruction()},p.prototype.takeBinaryData=function(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){var e=d.reconstructPacket(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null},p.prototype.finishedReconstruction=function(){this.reconPack=null,this.buffers=[]}},function(t,e,n){function r(t){if(t)return o(t)}function o(t){for(var e in r.prototype)t[e]=r.prototype[e];return t}t.exports=r,r.prototype.on=r.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},r.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this},r.prototype.off=r.prototype.removeListener=r.prototype.removeAllListeners=r.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n=this._callbacks["$"+t];if(!n)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var r,o=0;o<n.length;o++)if(r=n[o],r===e||r.fn===e){n.splice(o,1);break}return this},r.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),n=this._callbacks["$"+t];if(n){n=n.slice(0);for(var r=0,o=n.length;r<o;++r)n[r].apply(this,e)}return this},r.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},r.prototype.hasListeners=function(t){return!!this.listeners(t).length}},function(t,e,n){(function(e){function r(t){if(!t||"object"!=typeof t)return!1;if(o(t)){for(var n=0,i=t.length;n<i;n++)if(r(t[n]))return!0;return!1}if("function"==typeof e.Buffer&&e.Buffer.isBuffer&&e.Buffer.isBuffer(t)||"function"==typeof e.ArrayBuffer&&t instanceof ArrayBuffer||s&&t instanceof Blob||a&&t instanceof File)return!0;if(t.toJSON&&"function"==typeof t.toJSON&&1===arguments.length)return r(t.toJSON(),!0);for(var c in t)if(Object.prototype.hasOwnProperty.call(t,c)&&r(t[c]))return!0;return!1}var o=n(10),i=Object.prototype.toString,s="function"==typeof e.Blob||"[object BlobConstructor]"===i.call(e.Blob),a="function"==typeof e.File||"[object FileConstructor]"===i.call(e.File);t.exports=r}).call(e,function(){return this}())},function(t,e){var n={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==n.call(t)}},function(t,e,n){(function(t){function r(t,e){if(!t)return t;if(s(t)){var n={_placeholder:!0,num:e.length};return e.push(t),n}if(i(t)){for(var o=new Array(t.length),a=0;a<t.length;a++)o[a]=r(t[a],e);return o}if("object"==typeof t&&!(t instanceof Date)){var o={};for(var c in t)o[c]=r(t[c],e);return o}return t}function o(t,e){if(!t)return t;if(t&&t._placeholder)return e[t.num];if(i(t))for(var n=0;n<t.length;n++)t[n]=o(t[n],e);else if("object"==typeof t)for(var r in t)t[r]=o(t[r],e);return t}var i=n(10),s=n(12),a=Object.prototype.toString,c="function"==typeof t.Blob||"[object BlobConstructor]"===a.call(t.Blob),p="function"==typeof t.File||"[object FileConstructor]"===a.call(t.File);e.deconstructPacket=function(t){var e=[],n=t.data,o=t;return o.data=r(n,e),o.attachments=e.length,{packet:o,buffers:e}},e.reconstructPacket=function(t,e){return t.data=o(t.data,e),t.attachments=void 0,t},e.removeBlobs=function(t,e){function n(t,a,u){if(!t)return t;if(c&&t instanceof Blob||p&&t instanceof File){r++;var h=new FileReader;h.onload=function(){u?u[a]=this.result:o=this.result,--r||e(o)},h.readAsArrayBuffer(t)}else if(i(t))for(var f=0;f<t.length;f++)n(t[f],f,t);else if("object"==typeof t&&!s(t))for(var l in t)n(t[l],l,t)}var r=0,o=t;n(o),r||e(o)}}).call(e,function(){return this}())},function(t,e){(function(e){function n(t){return e.Buffer&&e.Buffer.isBuffer(t)||e.ArrayBuffer&&t instanceof ArrayBuffer}t.exports=n}).call(e,function(){return this}())},function(t,e,n){"use strict";function r(t,e){if(!(this instanceof r))return new r(t,e);t&&"object"===("undefined"==typeof t?"undefined":o(t))&&(e=t,t=void 0),e=e||{},e.path=e.path||"/socket.io",this.nsps={},this.subs=[],this.opts=e,this.reconnection(e.reconnection!==!1),this.reconnectionAttempts(e.reconnectionAttempts||1/0),this.reconnectionDelay(e.reconnectionDelay||1e3),this.reconnectionDelayMax(e.reconnectionDelayMax||5e3),this.randomizationFactor(e.randomizationFactor||.5),this.backoff=new l({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(null==e.timeout?2e4:e.timeout),this.readyState="closed",this.uri=t,this.connecting=[],this.lastPing=null,this.encoding=!1,this.packetBuffer=[];var n=e.parser||c;this.encoder=new n.Encoder,this.decoder=new n.Decoder,this.autoConnect=e.autoConnect!==!1,this.autoConnect&&this.open()}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=n(14),s=n(37),a=n(8),c=n(7),p=n(39),u=n(40),h=n(3)("socket.io-client:manager"),f=n(36),l=n(41),d=Object.prototype.hasOwnProperty;t.exports=r,r.prototype.emitAll=function(){this.emit.apply(this,arguments);for(var t in this.nsps)d.call(this.nsps,t)&&this.nsps[t].emit.apply(this.nsps[t],arguments)},r.prototype.updateSocketIds=function(){for(var t in this.nsps)d.call(this.nsps,t)&&(this.nsps[t].id=this.generateId(t))},r.prototype.generateId=function(t){return("/"===t?"":t+"#")+this.engine.id},a(r.prototype),r.prototype.reconnection=function(t){return arguments.length?(this._reconnection=!!t,this):this._reconnection},r.prototype.reconnectionAttempts=function(t){return arguments.length?(this._reconnectionAttempts=t,this):this._reconnectionAttempts},r.prototype.reconnectionDelay=function(t){return arguments.length?(this._reconnectionDelay=t,this.backoff&&this.backoff.setMin(t),this):this._reconnectionDelay},r.prototype.randomizationFactor=function(t){return arguments.length?(this._randomizationFactor=t,this.backoff&&this.backoff.setJitter(t),this):this._randomizationFactor},r.prototype.reconnectionDelayMax=function(t){return arguments.length?(this._reconnectionDelayMax=t,this.backoff&&this.backoff.setMax(t),this):this._reconnectionDelayMax},r.prototype.timeout=function(t){return arguments.length?(this._timeout=t,this):this._timeout},r.prototype.maybeReconnectOnOpen=function(){!this.reconnecting&&this._reconnection&&0===this.backoff.attempts&&this.reconnect()},r.prototype.open=r.prototype.connect=function(t,e){if(h("readyState %s",this.readyState),~this.readyState.indexOf("open"))return this;h("opening %s",this.uri),this.engine=i(this.uri,this.opts);var n=this.engine,r=this;this.readyState="opening",this.skipReconnect=!1;var o=p(n,"open",function(){r.onopen(),t&&t()}),s=p(n,"error",function(e){if(h("connect_error"),r.cleanup(),r.readyState="closed",r.emitAll("connect_error",e),t){var n=new Error("Connection error");n.data=e,t(n)}else r.maybeReconnectOnOpen()});if(!1!==this._timeout){var a=this._timeout;h("connect attempt will timeout after %d",a);var c=setTimeout(function(){h("connect attempt timed out after %d",a),o.destroy(),n.close(),n.emit("error","timeout"),r.emitAll("connect_timeout",a)},a);this.subs.push({destroy:function(){clearTimeout(c)}})}return this.subs.push(o),this.subs.push(s),this},r.prototype.onopen=function(){h("open"),this.cleanup(),this.readyState="open",this.emit("open");var t=this.engine;this.subs.push(p(t,"data",u(this,"ondata"))),this.subs.push(p(t,"ping",u(this,"onping"))),this.subs.push(p(t,"pong",u(this,"onpong"))),this.subs.push(p(t,"error",u(this,"onerror"))),this.subs.push(p(t,"close",u(this,"onclose"))),this.subs.push(p(this.decoder,"decoded",u(this,"ondecoded")))},r.prototype.onping=function(){this.lastPing=new Date,this.emitAll("ping")},r.prototype.onpong=function(){this.emitAll("pong",new Date-this.lastPing)},r.prototype.ondata=function(t){this.decoder.add(t)},r.prototype.ondecoded=function(t){this.emit("packet",t)},r.prototype.onerror=function(t){h("error",t),this.emitAll("error",t)},r.prototype.socket=function(t,e){function n(){~f(o.connecting,r)||o.connecting.push(r)}var r=this.nsps[t];if(!r){r=new s(this,t,e),this.nsps[t]=r;var o=this;r.on("connecting",n),r.on("connect",function(){r.id=o.generateId(t)}),this.autoConnect&&n()}return r},r.prototype.destroy=function(t){var e=f(this.connecting,t);~e&&this.connecting.splice(e,1),this.connecting.length||this.close()},r.prototype.packet=function(t){h("writing packet %j",t);var e=this;t.query&&0===t.type&&(t.nsp+="?"+t.query),e.encoding?e.packetBuffer.push(t):(e.encoding=!0,this.encoder.encode(t,function(n){for(var r=0;r<n.length;r++)e.engine.write(n[r],t.options);e.encoding=!1,e.processPacketQueue()}))},r.prototype.processPacketQueue=function(){if(this.packetBuffer.length>0&&!this.encoding){var t=this.packetBuffer.shift();this.packet(t)}},r.prototype.cleanup=function(){h("cleanup");for(var t=this.subs.length,e=0;e<t;e++){var n=this.subs.shift();n.destroy()}this.packetBuffer=[],this.encoding=!1,this.lastPing=null,this.decoder.destroy()},r.prototype.close=r.prototype.disconnect=function(){h("disconnect"),this.skipReconnect=!0,this.reconnecting=!1,"opening"===this.readyState&&this.cleanup(),this.backoff.reset(),this.readyState="closed",this.engine&&this.engine.close()},r.prototype.onclose=function(t){h("onclose"),this.cleanup(),this.backoff.reset(),this.readyState="closed",this.emit("close",t),this._reconnection&&!this.skipReconnect&&this.reconnect()},r.prototype.reconnect=function(){if(this.reconnecting||this.skipReconnect)return this;var t=this;if(this.backoff.attempts>=this._reconnectionAttempts)h("reconnect failed"),this.backoff.reset(),this.emitAll("reconnect_failed"),this.reconnecting=!1;else{var e=this.backoff.duration();h("will wait %dms before reconnect attempt",e),this.reconnecting=!0;var n=setTimeout(function(){t.skipReconnect||(h("attempting reconnect"),t.emitAll("reconnect_attempt",t.backoff.attempts),t.emitAll("reconnecting",t.backoff.attempts),t.skipReconnect||t.open(function(e){e?(h("reconnect attempt error"),t.reconnecting=!1,t.reconnect(),t.emitAll("reconnect_error",e.data)):(h("reconnect success"),t.onreconnect())}))},e);this.subs.push({destroy:function(){clearTimeout(n)}})}},r.prototype.onreconnect=function(){var t=this.backoff.attempts;this.reconnecting=!1,this.backoff.reset(),this.updateSocketIds(),this.emitAll("reconnect",t)}},function(t,e,n){t.exports=n(15),t.exports.parser=n(22)},function(t,e,n){(function(e){function r(t,n){if(!(this instanceof r))return new r(t,n);n=n||{},t&&"object"==typeof t&&(n=t,t=null),t?(t=u(t),n.hostname=t.host,n.secure="https"===t.protocol||"wss"===t.protocol,n.port=t.port,t.query&&(n.query=t.query)):n.host&&(n.hostname=u(n.host).host),this.secure=null!=n.secure?n.secure:e.location&&"https:"===location.protocol,n.hostname&&!n.port&&(n.port=this.secure?"443":"80"),this.agent=n.agent||!1,this.hostname=n.hostname||(e.location?location.hostname:"localhost"),this.port=n.port||(e.location&&location.port?location.port:this.secure?443:80),this.query=n.query||{},"string"==typeof this.query&&(this.query=h.decode(this.query)),this.upgrade=!1!==n.upgrade,this.path=(n.path||"/engine.io").replace(/\/$/,"")+"/",this.forceJSONP=!!n.forceJSONP,this.jsonp=!1!==n.jsonp,this.forceBase64=!!n.forceBase64,this.enablesXDR=!!n.enablesXDR,this.timestampParam=n.timestampParam||"t",this.timestampRequests=n.timestampRequests,this.transports=n.transports||["polling","websocket"],this.transportOptions=n.transportOptions||{},this.readyState="",this.writeBuffer=[],this.prevBufferLen=0,this.policyPort=n.policyPort||843,this.rememberUpgrade=n.rememberUpgrade||!1,this.binaryType=null,this.onlyBinaryUpgrades=n.onlyBinaryUpgrades,this.perMessageDeflate=!1!==n.perMessageDeflate&&(n.perMessageDeflate||{}),!0===this.perMessageDeflate&&(this.perMessageDeflate={}),this.perMessageDeflate&&null==this.perMessageDeflate.threshold&&(this.perMessageDeflate.threshold=1024),this.pfx=n.pfx||null,this.key=n.key||null,this.passphrase=n.passphrase||null,this.cert=n.cert||null,this.ca=n.ca||null,this.ciphers=n.ciphers||null,this.rejectUnauthorized=void 0===n.rejectUnauthorized||n.rejectUnauthorized,this.forceNode=!!n.forceNode;var o="object"==typeof e&&e;o.global===o&&(n.extraHeaders&&Object.keys(n.extraHeaders).length>0&&(this.extraHeaders=n.extraHeaders),n.localAddress&&(this.localAddress=n.localAddress)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingIntervalTimer=null,this.pingTimeoutTimer=null,this.open()}function o(t){var e={};for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}var i=n(16),s=n(8),a=n(3)("engine.io-client:socket"),c=n(36),p=n(22),u=n(2),h=n(30);t.exports=r,r.priorWebsocketSuccess=!1,s(r.prototype),r.protocol=p.protocol,r.Socket=r,r.Transport=n(21),r.transports=n(16),r.parser=n(22),r.prototype.createTransport=function(t){a('creating transport "%s"',t);var e=o(this.query);e.EIO=p.protocol,e.transport=t;var n=this.transportOptions[t]||{};this.id&&(e.sid=this.id);var r=new i[t]({query:e,socket:this,agent:n.agent||this.agent,hostname:n.hostname||this.hostname,port:n.port||this.port,secure:n.secure||this.secure,path:n.path||this.path,forceJSONP:n.forceJSONP||this.forceJSONP,jsonp:n.jsonp||this.jsonp,forceBase64:n.forceBase64||this.forceBase64,enablesXDR:n.enablesXDR||this.enablesXDR,timestampRequests:n.timestampRequests||this.timestampRequests,timestampParam:n.timestampParam||this.timestampParam,policyPort:n.policyPort||this.policyPort,pfx:n.pfx||this.pfx,key:n.key||this.key,passphrase:n.passphrase||this.passphrase,cert:n.cert||this.cert,ca:n.ca||this.ca,ciphers:n.ciphers||this.ciphers,rejectUnauthorized:n.rejectUnauthorized||this.rejectUnauthorized,perMessageDeflate:n.perMessageDeflate||this.perMessageDeflate,extraHeaders:n.extraHeaders||this.extraHeaders,forceNode:n.forceNode||this.forceNode,localAddress:n.localAddress||this.localAddress,requestTimeout:n.requestTimeout||this.requestTimeout,protocols:n.protocols||void 0});return r},r.prototype.open=function(){var t;if(this.rememberUpgrade&&r.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1)t="websocket";else{if(0===this.transports.length){var e=this;return void setTimeout(function(){e.emit("error","No transports available")},0)}t=this.transports[0]}this.readyState="opening";try{t=this.createTransport(t)}catch(n){return this.transports.shift(),void this.open()}t.open(),this.setTransport(t)},r.prototype.setTransport=function(t){a("setting transport %s",t.name);var e=this;this.transport&&(a("clearing existing transport %s",this.transport.name),this.transport.removeAllListeners()),this.transport=t,t.on("drain",function(){e.onDrain()}).on("packet",function(t){e.onPacket(t)}).on("error",function(t){e.onError(t)}).on("close",function(){e.onClose("transport close")})},r.prototype.probe=function(t){function e(){if(f.onlyBinaryUpgrades){var e=!this.supportsBinary&&f.transport.supportsBinary;h=h||e}h||(a('probe transport "%s" opened',t),u.send([{type:"ping",data:"probe"}]),u.once("packet",function(e){if(!h)if("pong"===e.type&&"probe"===e.data){if(a('probe transport "%s" pong',t),f.upgrading=!0,f.emit("upgrading",u),!u)return;r.priorWebsocketSuccess="websocket"===u.name,a('pausing current transport "%s"',f.transport.name),f.transport.pause(function(){h||"closed"!==f.readyState&&(a("changing transport and sending upgrade packet"),p(),f.setTransport(u),u.send([{type:"upgrade"}]),f.emit("upgrade",u),u=null,f.upgrading=!1,f.flush())})}else{a('probe transport "%s" failed',t);var n=new Error("probe error");n.transport=u.name,f.emit("upgradeError",n)}}))}function n(){h||(h=!0,p(),u.close(),u=null)}function o(e){var r=new Error("probe error: "+e);r.transport=u.name,n(),a('probe transport "%s" failed because of error: %s',t,e),f.emit("upgradeError",r)}function i(){o("transport closed")}function s(){o("socket closed")}function c(t){u&&t.name!==u.name&&(a('"%s" works - aborting "%s"',t.name,u.name),n())}function p(){u.removeListener("open",e),u.removeListener("error",o),u.removeListener("close",i),f.removeListener("close",s),f.removeListener("upgrading",c)}a('probing transport "%s"',t);var u=this.createTransport(t,{probe:1}),h=!1,f=this;r.priorWebsocketSuccess=!1,u.once("open",e),u.once("error",o),u.once("close",i),this.once("close",s),this.once("upgrading",c),u.open()},r.prototype.onOpen=function(){if(a("socket open"),this.readyState="open",r.priorWebsocketSuccess="websocket"===this.transport.name,this.emit("open"),this.flush(),"open"===this.readyState&&this.upgrade&&this.transport.pause){a("starting upgrade probes");for(var t=0,e=this.upgrades.length;t<e;t++)this.probe(this.upgrades[t])}},r.prototype.onPacket=function(t){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState)switch(a('socket receive: type "%s", data "%s"',t.type,t.data),this.emit("packet",t),this.emit("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"pong":this.setPing(),this.emit("pong");break;case"error":var e=new Error("server error");e.code=t.data,this.onError(e);break;case"message":this.emit("data",t.data),this.emit("message",t.data)}else a('packet received with socket readyState "%s"',this.readyState)},r.prototype.onHandshake=function(t){this.emit("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this.upgrades=this.filterUpgrades(t.upgrades),this.pingInterval=t.pingInterval,this.pingTimeout=t.pingTimeout,this.onOpen(),"closed"!==this.readyState&&(this.setPing(),this.removeListener("heartbeat",this.onHeartbeat),this.on("heartbeat",this.onHeartbeat))},r.prototype.onHeartbeat=function(t){clearTimeout(this.pingTimeoutTimer);var e=this;e.pingTimeoutTimer=setTimeout(function(){"closed"!==e.readyState&&e.onClose("ping timeout")},t||e.pingInterval+e.pingTimeout)},r.prototype.setPing=function(){var t=this;clearTimeout(t.pingIntervalTimer),t.pingIntervalTimer=setTimeout(function(){a("writing ping packet - expecting pong within %sms",t.pingTimeout),t.ping(),t.onHeartbeat(t.pingTimeout)},t.pingInterval)},r.prototype.ping=function(){var t=this;this.sendPacket("ping",function(){t.emit("ping")})},r.prototype.onDrain=function(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,0===this.writeBuffer.length?this.emit("drain"):this.flush()},r.prototype.flush=function(){"closed"!==this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length&&(a("flushing %d packets in socket",this.writeBuffer.length),this.transport.send(this.writeBuffer),this.prevBufferLen=this.writeBuffer.length,this.emit("flush"))},r.prototype.write=r.prototype.send=function(t,e,n){return this.sendPacket("message",t,e,n),this},r.prototype.sendPacket=function(t,e,n,r){if("function"==typeof e&&(r=e,e=void 0),"function"==typeof n&&(r=n,n=null),"closing"!==this.readyState&&"closed"!==this.readyState){n=n||{},n.compress=!1!==n.compress;var o={type:t,data:e,options:n};this.emit("packetCreate",o),this.writeBuffer.push(o),r&&this.once("flush",r),this.flush()}},r.prototype.close=function(){function t(){r.onClose("forced close"),a("socket closing - telling transport to close"),r.transport.close()}function e(){r.removeListener("upgrade",e),r.removeListener("upgradeError",e),t()}function n(){r.once("upgrade",e),r.once("upgradeError",e)}if("opening"===this.readyState||"open"===this.readyState){this.readyState="closing";var r=this;this.writeBuffer.length?this.once("drain",function(){this.upgrading?n():t()}):this.upgrading?n():t()}return this},r.prototype.onError=function(t){a("socket error %j",t),r.priorWebsocketSuccess=!1,this.emit("error",t),this.onClose("transport error",t)},r.prototype.onClose=function(t,e){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState){a('socket close with reason: "%s"',t);var n=this;clearTimeout(this.pingIntervalTimer),clearTimeout(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),this.readyState="closed",this.id=null,this.emit("close",t,e),n.writeBuffer=[],n.prevBufferLen=0}},r.prototype.filterUpgrades=function(t){for(var e=[],n=0,r=t.length;n<r;n++)~c(this.transports,t[n])&&e.push(t[n]);return e}}).call(e,function(){return this}())},function(t,e,n){(function(t){function r(e){var n,r=!1,a=!1,c=!1!==e.jsonp;if(t.location){var p="https:"===location.protocol,u=location.port;u||(u=p?443:80),r=e.hostname!==location.hostname||u!==e.port,a=e.secure!==p}if(e.xdomain=r,e.xscheme=a,n=new o(e),"open"in n&&!e.forceJSONP)return new i(e);if(!c)throw new Error("JSONP disabled");return new s(e)}var o=n(17),i=n(19),s=n(33),a=n(34);e.polling=r,e.websocket=a}).call(e,function(){return this}())},function(t,e,n){(function(e){var r=n(18);t.exports=function(t){var n=t.xdomain,o=t.xscheme,i=t.enablesXDR;try{if("undefined"!=typeof XMLHttpRequest&&(!n||r))return new XMLHttpRequest}catch(s){}try{if("undefined"!=typeof XDomainRequest&&!o&&i)return new XDomainRequest}catch(s){}if(!n)try{return new(e[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP");
}catch(s){}}}).call(e,function(){return this}())},function(t,e){try{t.exports="undefined"!=typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest}catch(n){t.exports=!1}},function(t,e,n){(function(e){function r(){}function o(t){if(c.call(this,t),this.requestTimeout=t.requestTimeout,this.extraHeaders=t.extraHeaders,e.location){var n="https:"===location.protocol,r=location.port;r||(r=n?443:80),this.xd=t.hostname!==e.location.hostname||r!==t.port,this.xs=t.secure!==n}}function i(t){this.method=t.method||"GET",this.uri=t.uri,this.xd=!!t.xd,this.xs=!!t.xs,this.async=!1!==t.async,this.data=void 0!==t.data?t.data:null,this.agent=t.agent,this.isBinary=t.isBinary,this.supportsBinary=t.supportsBinary,this.enablesXDR=t.enablesXDR,this.requestTimeout=t.requestTimeout,this.pfx=t.pfx,this.key=t.key,this.passphrase=t.passphrase,this.cert=t.cert,this.ca=t.ca,this.ciphers=t.ciphers,this.rejectUnauthorized=t.rejectUnauthorized,this.extraHeaders=t.extraHeaders,this.create()}function s(){for(var t in i.requests)i.requests.hasOwnProperty(t)&&i.requests[t].abort()}var a=n(17),c=n(20),p=n(8),u=n(31),h=n(3)("engine.io-client:polling-xhr");t.exports=o,t.exports.Request=i,u(o,c),o.prototype.supportsBinary=!0,o.prototype.request=function(t){return t=t||{},t.uri=this.uri(),t.xd=this.xd,t.xs=this.xs,t.agent=this.agent||!1,t.supportsBinary=this.supportsBinary,t.enablesXDR=this.enablesXDR,t.pfx=this.pfx,t.key=this.key,t.passphrase=this.passphrase,t.cert=this.cert,t.ca=this.ca,t.ciphers=this.ciphers,t.rejectUnauthorized=this.rejectUnauthorized,t.requestTimeout=this.requestTimeout,t.extraHeaders=this.extraHeaders,new i(t)},o.prototype.doWrite=function(t,e){var n="string"!=typeof t&&void 0!==t,r=this.request({method:"POST",data:t,isBinary:n}),o=this;r.on("success",e),r.on("error",function(t){o.onError("xhr post error",t)}),this.sendXhr=r},o.prototype.doPoll=function(){h("xhr poll");var t=this.request(),e=this;t.on("data",function(t){e.onData(t)}),t.on("error",function(t){e.onError("xhr poll error",t)}),this.pollXhr=t},p(i.prototype),i.prototype.create=function(){var t={agent:this.agent,xdomain:this.xd,xscheme:this.xs,enablesXDR:this.enablesXDR};t.pfx=this.pfx,t.key=this.key,t.passphrase=this.passphrase,t.cert=this.cert,t.ca=this.ca,t.ciphers=this.ciphers,t.rejectUnauthorized=this.rejectUnauthorized;var n=this.xhr=new a(t),r=this;try{h("xhr open %s: %s",this.method,this.uri),n.open(this.method,this.uri,this.async);try{if(this.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(var o in this.extraHeaders)this.extraHeaders.hasOwnProperty(o)&&n.setRequestHeader(o,this.extraHeaders[o])}}catch(s){}if("POST"===this.method)try{this.isBinary?n.setRequestHeader("Content-type","application/octet-stream"):n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch(s){}try{n.setRequestHeader("Accept","*/*")}catch(s){}"withCredentials"in n&&(n.withCredentials=!0),this.requestTimeout&&(n.timeout=this.requestTimeout),this.hasXDR()?(n.onload=function(){r.onLoad()},n.onerror=function(){r.onError(n.responseText)}):n.onreadystatechange=function(){if(2===n.readyState){var t;try{t=n.getResponseHeader("Content-Type")}catch(e){}"application/octet-stream"===t&&(n.responseType="arraybuffer")}4===n.readyState&&(200===n.status||1223===n.status?r.onLoad():setTimeout(function(){r.onError(n.status)},0))},h("xhr data %s",this.data),n.send(this.data)}catch(s){return void setTimeout(function(){r.onError(s)},0)}e.document&&(this.index=i.requestsCount++,i.requests[this.index]=this)},i.prototype.onSuccess=function(){this.emit("success"),this.cleanup()},i.prototype.onData=function(t){this.emit("data",t),this.onSuccess()},i.prototype.onError=function(t){this.emit("error",t),this.cleanup(!0)},i.prototype.cleanup=function(t){if("undefined"!=typeof this.xhr&&null!==this.xhr){if(this.hasXDR()?this.xhr.onload=this.xhr.onerror=r:this.xhr.onreadystatechange=r,t)try{this.xhr.abort()}catch(n){}e.document&&delete i.requests[this.index],this.xhr=null}},i.prototype.onLoad=function(){var t;try{var e;try{e=this.xhr.getResponseHeader("Content-Type")}catch(n){}t="application/octet-stream"===e?this.xhr.response||this.xhr.responseText:this.xhr.responseText}catch(n){this.onError(n)}null!=t&&this.onData(t)},i.prototype.hasXDR=function(){return"undefined"!=typeof e.XDomainRequest&&!this.xs&&this.enablesXDR},i.prototype.abort=function(){this.cleanup()},i.requestsCount=0,i.requests={},e.document&&(e.attachEvent?e.attachEvent("onunload",s):e.addEventListener&&e.addEventListener("beforeunload",s,!1))}).call(e,function(){return this}())},function(t,e,n){function r(t){var e=t&&t.forceBase64;u&&!e||(this.supportsBinary=!1),o.call(this,t)}var o=n(21),i=n(30),s=n(22),a=n(31),c=n(32),p=n(3)("engine.io-client:polling");t.exports=r;var u=function(){var t=n(17),e=new t({xdomain:!1});return null!=e.responseType}();a(r,o),r.prototype.name="polling",r.prototype.doOpen=function(){this.poll()},r.prototype.pause=function(t){function e(){p("paused"),n.readyState="paused",t()}var n=this;if(this.readyState="pausing",this.polling||!this.writable){var r=0;this.polling&&(p("we are currently polling - waiting to pause"),r++,this.once("pollComplete",function(){p("pre-pause polling complete"),--r||e()})),this.writable||(p("we are currently writing - waiting to pause"),r++,this.once("drain",function(){p("pre-pause writing complete"),--r||e()}))}else e()},r.prototype.poll=function(){p("polling"),this.polling=!0,this.doPoll(),this.emit("poll")},r.prototype.onData=function(t){var e=this;p("polling got data %s",t);var n=function(t,n,r){return"opening"===e.readyState&&e.onOpen(),"close"===t.type?(e.onClose(),!1):void e.onPacket(t)};s.decodePayload(t,this.socket.binaryType,n),"closed"!==this.readyState&&(this.polling=!1,this.emit("pollComplete"),"open"===this.readyState?this.poll():p('ignoring poll - transport state "%s"',this.readyState))},r.prototype.doClose=function(){function t(){p("writing close packet"),e.write([{type:"close"}])}var e=this;"open"===this.readyState?(p("transport open - closing"),t()):(p("transport not open - deferring close"),this.once("open",t))},r.prototype.write=function(t){var e=this;this.writable=!1;var n=function(){e.writable=!0,e.emit("drain")};s.encodePayload(t,this.supportsBinary,function(t){e.doWrite(t,n)})},r.prototype.uri=function(){var t=this.query||{},e=this.secure?"https":"http",n="";!1!==this.timestampRequests&&(t[this.timestampParam]=c()),this.supportsBinary||t.sid||(t.b64=1),t=i.encode(t),this.port&&("https"===e&&443!==Number(this.port)||"http"===e&&80!==Number(this.port))&&(n=":"+this.port),t.length&&(t="?"+t);var r=this.hostname.indexOf(":")!==-1;return e+"://"+(r?"["+this.hostname+"]":this.hostname)+n+this.path+t}},function(t,e,n){function r(t){this.path=t.path,this.hostname=t.hostname,this.port=t.port,this.secure=t.secure,this.query=t.query,this.timestampParam=t.timestampParam,this.timestampRequests=t.timestampRequests,this.readyState="",this.agent=t.agent||!1,this.socket=t.socket,this.enablesXDR=t.enablesXDR,this.pfx=t.pfx,this.key=t.key,this.passphrase=t.passphrase,this.cert=t.cert,this.ca=t.ca,this.ciphers=t.ciphers,this.rejectUnauthorized=t.rejectUnauthorized,this.forceNode=t.forceNode,this.extraHeaders=t.extraHeaders,this.localAddress=t.localAddress}var o=n(22),i=n(8);t.exports=r,i(r.prototype),r.prototype.onError=function(t,e){var n=new Error(t);return n.type="TransportError",n.description=e,this.emit("error",n),this},r.prototype.open=function(){return"closed"!==this.readyState&&""!==this.readyState||(this.readyState="opening",this.doOpen()),this},r.prototype.close=function(){return"opening"!==this.readyState&&"open"!==this.readyState||(this.doClose(),this.onClose()),this},r.prototype.send=function(t){if("open"!==this.readyState)throw new Error("Transport not open");this.write(t)},r.prototype.onOpen=function(){this.readyState="open",this.writable=!0,this.emit("open")},r.prototype.onData=function(t){var e=o.decodePacket(t,this.socket.binaryType);this.onPacket(e)},r.prototype.onPacket=function(t){this.emit("packet",t)},r.prototype.onClose=function(){this.readyState="closed",this.emit("close")}},function(t,e,n){(function(t){function r(t,n){var r="b"+e.packets[t.type]+t.data.data;return n(r)}function o(t,n,r){if(!n)return e.encodeBase64Packet(t,r);var o=t.data,i=new Uint8Array(o),s=new Uint8Array(1+o.byteLength);s[0]=v[t.type];for(var a=0;a<i.length;a++)s[a+1]=i[a];return r(s.buffer)}function i(t,n,r){if(!n)return e.encodeBase64Packet(t,r);var o=new FileReader;return o.onload=function(){t.data=o.result,e.encodePacket(t,n,!0,r)},o.readAsArrayBuffer(t.data)}function s(t,n,r){if(!n)return e.encodeBase64Packet(t,r);if(g)return i(t,n,r);var o=new Uint8Array(1);o[0]=v[t.type];var s=new k([o.buffer,t.data]);return r(s)}function a(t){try{t=d.decode(t,{strict:!1})}catch(e){return!1}return t}function c(t,e,n){for(var r=new Array(t.length),o=l(t.length,n),i=function(t,n,o){e(n,function(e,n){r[t]=n,o(e,r)})},s=0;s<t.length;s++)i(s,t[s],o)}var p,u=n(23),h=n(9),f=n(24),l=n(25),d=n(26);t&&t.ArrayBuffer&&(p=n(28));var y="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),m="undefined"!=typeof navigator&&/PhantomJS/i.test(navigator.userAgent),g=y||m;e.protocol=3;var v=e.packets={open:0,close:1,ping:2,pong:3,message:4,upgrade:5,noop:6},b=u(v),w={type:"error",data:"parser error"},k=n(29);e.encodePacket=function(e,n,i,a){"function"==typeof n&&(a=n,n=!1),"function"==typeof i&&(a=i,i=null);var c=void 0===e.data?void 0:e.data.buffer||e.data;if(t.ArrayBuffer&&c instanceof ArrayBuffer)return o(e,n,a);if(k&&c instanceof t.Blob)return s(e,n,a);if(c&&c.base64)return r(e,a);var p=v[e.type];return void 0!==e.data&&(p+=i?d.encode(String(e.data),{strict:!1}):String(e.data)),a(""+p)},e.encodeBase64Packet=function(n,r){var o="b"+e.packets[n.type];if(k&&n.data instanceof t.Blob){var i=new FileReader;return i.onload=function(){var t=i.result.split(",")[1];r(o+t)},i.readAsDataURL(n.data)}var s;try{s=String.fromCharCode.apply(null,new Uint8Array(n.data))}catch(a){for(var c=new Uint8Array(n.data),p=new Array(c.length),u=0;u<c.length;u++)p[u]=c[u];s=String.fromCharCode.apply(null,p)}return o+=t.btoa(s),r(o)},e.decodePacket=function(t,n,r){if(void 0===t)return w;if("string"==typeof t){if("b"===t.charAt(0))return e.decodeBase64Packet(t.substr(1),n);if(r&&(t=a(t),t===!1))return w;var o=t.charAt(0);return Number(o)==o&&b[o]?t.length>1?{type:b[o],data:t.substring(1)}:{type:b[o]}:w}var i=new Uint8Array(t),o=i[0],s=f(t,1);return k&&"blob"===n&&(s=new k([s])),{type:b[o],data:s}},e.decodeBase64Packet=function(t,e){var n=b[t.charAt(0)];if(!p)return{type:n,data:{base64:!0,data:t.substr(1)}};var r=p.decode(t.substr(1));return"blob"===e&&k&&(r=new k([r])),{type:n,data:r}},e.encodePayload=function(t,n,r){function o(t){return t.length+":"+t}function i(t,r){e.encodePacket(t,!!s&&n,!1,function(t){r(null,o(t))})}"function"==typeof n&&(r=n,n=null);var s=h(t);return n&&s?k&&!g?e.encodePayloadAsBlob(t,r):e.encodePayloadAsArrayBuffer(t,r):t.length?void c(t,i,function(t,e){return r(e.join(""))}):r("0:")},e.decodePayload=function(t,n,r){if("string"!=typeof t)return e.decodePayloadAsBinary(t,n,r);"function"==typeof n&&(r=n,n=null);var o;if(""===t)return r(w,0,1);for(var i,s,a="",c=0,p=t.length;c<p;c++){var u=t.charAt(c);if(":"===u){if(""===a||a!=(i=Number(a)))return r(w,0,1);if(s=t.substr(c+1,i),a!=s.length)return r(w,0,1);if(s.length){if(o=e.decodePacket(s,n,!1),w.type===o.type&&w.data===o.data)return r(w,0,1);var h=r(o,c+i,p);if(!1===h)return}c+=i,a=""}else a+=u}return""!==a?r(w,0,1):void 0},e.encodePayloadAsArrayBuffer=function(t,n){function r(t,n){e.encodePacket(t,!0,!0,function(t){return n(null,t)})}return t.length?void c(t,r,function(t,e){var r=e.reduce(function(t,e){var n;return n="string"==typeof e?e.length:e.byteLength,t+n.toString().length+n+2},0),o=new Uint8Array(r),i=0;return e.forEach(function(t){var e="string"==typeof t,n=t;if(e){for(var r=new Uint8Array(t.length),s=0;s<t.length;s++)r[s]=t.charCodeAt(s);n=r.buffer}e?o[i++]=0:o[i++]=1;for(var a=n.byteLength.toString(),s=0;s<a.length;s++)o[i++]=parseInt(a[s]);o[i++]=255;for(var r=new Uint8Array(n),s=0;s<r.length;s++)o[i++]=r[s]}),n(o.buffer)}):n(new ArrayBuffer(0))},e.encodePayloadAsBlob=function(t,n){function r(t,n){e.encodePacket(t,!0,!0,function(t){var e=new Uint8Array(1);if(e[0]=1,"string"==typeof t){for(var r=new Uint8Array(t.length),o=0;o<t.length;o++)r[o]=t.charCodeAt(o);t=r.buffer,e[0]=0}for(var i=t instanceof ArrayBuffer?t.byteLength:t.size,s=i.toString(),a=new Uint8Array(s.length+1),o=0;o<s.length;o++)a[o]=parseInt(s[o]);if(a[s.length]=255,k){var c=new k([e.buffer,a.buffer,t]);n(null,c)}})}c(t,r,function(t,e){return n(new k(e))})},e.decodePayloadAsBinary=function(t,n,r){"function"==typeof n&&(r=n,n=null);for(var o=t,i=[];o.byteLength>0;){for(var s=new Uint8Array(o),a=0===s[0],c="",p=1;255!==s[p];p++){if(c.length>310)return r(w,0,1);c+=s[p]}o=f(o,2+c.length),c=parseInt(c);var u=f(o,0,c);if(a)try{u=String.fromCharCode.apply(null,new Uint8Array(u))}catch(h){var l=new Uint8Array(u);u="";for(var p=0;p<l.length;p++)u+=String.fromCharCode(l[p])}i.push(u),o=f(o,c)}var d=i.length;i.forEach(function(t,o){r(e.decodePacket(t,n,!0),o,d)})}}).call(e,function(){return this}())},function(t,e){t.exports=Object.keys||function(t){var e=[],n=Object.prototype.hasOwnProperty;for(var r in t)n.call(t,r)&&e.push(r);return e}},function(t,e){t.exports=function(t,e,n){var r=t.byteLength;if(e=e||0,n=n||r,t.slice)return t.slice(e,n);if(e<0&&(e+=r),n<0&&(n+=r),n>r&&(n=r),e>=r||e>=n||0===r)return new ArrayBuffer(0);for(var o=new Uint8Array(t),i=new Uint8Array(n-e),s=e,a=0;s<n;s++,a++)i[a]=o[s];return i.buffer}},function(t,e){function n(t,e,n){function o(t,r){if(o.count<=0)throw new Error("after called too many times");--o.count,t?(i=!0,e(t),e=n):0!==o.count||i||e(null,r)}var i=!1;return n=n||r,o.count=t,0===t?e():o}function r(){}t.exports=n},function(t,e,n){var r;(function(t,o){!function(i){function s(t){for(var e,n,r=[],o=0,i=t.length;o<i;)e=t.charCodeAt(o++),e>=55296&&e<=56319&&o<i?(n=t.charCodeAt(o++),56320==(64512&n)?r.push(((1023&e)<<10)+(1023&n)+65536):(r.push(e),o--)):r.push(e);return r}function a(t){for(var e,n=t.length,r=-1,o="";++r<n;)e=t[r],e>65535&&(e-=65536,o+=w(e>>>10&1023|55296),e=56320|1023&e),o+=w(e);return o}function c(t,e){if(t>=55296&&t<=57343){if(e)throw Error("Lone surrogate U+"+t.toString(16).toUpperCase()+" is not a scalar value");return!1}return!0}function p(t,e){return w(t>>e&63|128)}function u(t,e){if(0==(4294967168&t))return w(t);var n="";return 0==(4294965248&t)?n=w(t>>6&31|192):0==(4294901760&t)?(c(t,e)||(t=65533),n=w(t>>12&15|224),n+=p(t,6)):0==(4292870144&t)&&(n=w(t>>18&7|240),n+=p(t,12),n+=p(t,6)),n+=w(63&t|128)}function h(t,e){e=e||{};for(var n,r=!1!==e.strict,o=s(t),i=o.length,a=-1,c="";++a<i;)n=o[a],c+=u(n,r);return c}function f(){if(b>=v)throw Error("Invalid byte index");var t=255&g[b];if(b++,128==(192&t))return 63&t;throw Error("Invalid continuation byte")}function l(t){var e,n,r,o,i;if(b>v)throw Error("Invalid byte index");if(b==v)return!1;if(e=255&g[b],b++,0==(128&e))return e;if(192==(224&e)){if(n=f(),i=(31&e)<<6|n,i>=128)return i;throw Error("Invalid continuation byte")}if(224==(240&e)){if(n=f(),r=f(),i=(15&e)<<12|n<<6|r,i>=2048)return c(i,t)?i:65533;throw Error("Invalid continuation byte")}if(240==(248&e)&&(n=f(),r=f(),o=f(),i=(7&e)<<18|n<<12|r<<6|o,i>=65536&&i<=1114111))return i;throw Error("Invalid UTF-8 detected")}function d(t,e){e=e||{};var n=!1!==e.strict;g=s(t),v=g.length,b=0;for(var r,o=[];(r=l(n))!==!1;)o.push(r);return a(o)}var y="object"==typeof e&&e,m=("object"==typeof t&&t&&t.exports==y&&t,"object"==typeof o&&o);m.global!==m&&m.window!==m||(i=m);var g,v,b,w=String.fromCharCode,k={version:"2.1.2",encode:h,decode:d};r=function(){return k}.call(e,n,e,t),!(void 0!==r&&(t.exports=r))}(this)}).call(e,n(27)(t),function(){return this}())},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children=[],t.webpackPolyfill=1),t}},function(t,e){!function(){"use strict";for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n=new Uint8Array(256),r=0;r<t.length;r++)n[t.charCodeAt(r)]=r;e.encode=function(e){var n,r=new Uint8Array(e),o=r.length,i="";for(n=0;n<o;n+=3)i+=t[r[n]>>2],i+=t[(3&r[n])<<4|r[n+1]>>4],i+=t[(15&r[n+1])<<2|r[n+2]>>6],i+=t[63&r[n+2]];return o%3===2?i=i.substring(0,i.length-1)+"=":o%3===1&&(i=i.substring(0,i.length-2)+"=="),i},e.decode=function(t){var e,r,o,i,s,a=.75*t.length,c=t.length,p=0;"="===t[t.length-1]&&(a--,"="===t[t.length-2]&&a--);var u=new ArrayBuffer(a),h=new Uint8Array(u);for(e=0;e<c;e+=4)r=n[t.charCodeAt(e)],o=n[t.charCodeAt(e+1)],i=n[t.charCodeAt(e+2)],s=n[t.charCodeAt(e+3)],h[p++]=r<<2|o>>4,h[p++]=(15&o)<<4|i>>2,h[p++]=(3&i)<<6|63&s;return u}}()},function(t,e){(function(e){function n(t){for(var e=0;e<t.length;e++){var n=t[e];if(n.buffer instanceof ArrayBuffer){var r=n.buffer;if(n.byteLength!==r.byteLength){var o=new Uint8Array(n.byteLength);o.set(new Uint8Array(r,n.byteOffset,n.byteLength)),r=o.buffer}t[e]=r}}}function r(t,e){e=e||{};var r=new i;n(t);for(var o=0;o<t.length;o++)r.append(t[o]);return e.type?r.getBlob(e.type):r.getBlob()}function o(t,e){return n(t),new Blob(t,e||{})}var i=e.BlobBuilder||e.WebKitBlobBuilder||e.MSBlobBuilder||e.MozBlobBuilder,s=function(){try{var t=new Blob(["hi"]);return 2===t.size}catch(e){return!1}}(),a=s&&function(){try{var t=new Blob([new Uint8Array([1,2])]);return 2===t.size}catch(e){return!1}}(),c=i&&i.prototype.append&&i.prototype.getBlob;t.exports=function(){return s?a?e.Blob:o:c?r:void 0}()}).call(e,function(){return this}())},function(t,e){e.encode=function(t){var e="";for(var n in t)t.hasOwnProperty(n)&&(e.length&&(e+="&"),e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e},e.decode=function(t){for(var e={},n=t.split("&"),r=0,o=n.length;r<o;r++){var i=n[r].split("=");e[decodeURIComponent(i[0])]=decodeURIComponent(i[1])}return e}},function(t,e){t.exports=function(t,e){var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},function(t,e){"use strict";function n(t){var e="";do e=s[t%a]+e,t=Math.floor(t/a);while(t>0);return e}function r(t){var e=0;for(u=0;u<t.length;u++)e=e*a+c[t.charAt(u)];return e}function o(){var t=n(+new Date);return t!==i?(p=0,i=t):t+"."+n(p++)}for(var i,s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),a=64,c={},p=0,u=0;u<a;u++)c[s[u]]=u;o.encode=n,o.decode=r,t.exports=o},function(t,e,n){(function(e){function r(){}function o(t){i.call(this,t),this.query=this.query||{},a||(e.___eio||(e.___eio=[]),a=e.___eio),this.index=a.length;var n=this;a.push(function(t){n.onData(t)}),this.query.j=this.index,e.document&&e.addEventListener&&e.addEventListener("beforeunload",function(){n.script&&(n.script.onerror=r)},!1)}var i=n(20),s=n(31);t.exports=o;var a,c=/\n/g,p=/\\n/g;s(o,i),o.prototype.supportsBinary=!1,o.prototype.doClose=function(){this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),this.form&&(this.form.parentNode.removeChild(this.form),this.form=null,this.iframe=null),i.prototype.doClose.call(this)},o.prototype.doPoll=function(){var t=this,e=document.createElement("script");this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),e.async=!0,e.src=this.uri(),e.onerror=function(e){t.onError("jsonp poll error",e)};var n=document.getElementsByTagName("script")[0];n?n.parentNode.insertBefore(e,n):(document.head||document.body).appendChild(e),this.script=e;var r="undefined"!=typeof navigator&&/gecko/i.test(navigator.userAgent);r&&setTimeout(function(){var t=document.createElement("iframe");document.body.appendChild(t),document.body.removeChild(t)},100)},o.prototype.doWrite=function(t,e){function n(){r(),e()}function r(){if(o.iframe)try{o.form.removeChild(o.iframe)}catch(t){o.onError("jsonp polling iframe removal error",t)}try{var e='<iframe src="javascript:0" name="'+o.iframeId+'">';i=document.createElement(e)}catch(t){i=document.createElement("iframe"),i.name=o.iframeId,i.src="javascript:0"}i.id=o.iframeId,o.form.appendChild(i),o.iframe=i}var o=this;if(!this.form){var i,s=document.createElement("form"),a=document.createElement("textarea"),u=this.iframeId="eio_iframe_"+this.index;s.className="socketio",s.style.position="absolute",s.style.top="-1000px",s.style.left="-1000px",s.target=u,s.method="POST",s.setAttribute("accept-charset","utf-8"),a.name="d",s.appendChild(a),document.body.appendChild(s),this.form=s,this.area=a}this.form.action=this.uri(),r(),t=t.replace(p,"\\\n"),this.area.value=t.replace(c,"\\n");try{this.form.submit()}catch(h){}this.iframe.attachEvent?this.iframe.onreadystatechange=function(){"complete"===o.iframe.readyState&&n()}:this.iframe.onload=n}}).call(e,function(){return this}())},function(t,e,n){(function(e){function r(t){var e=t&&t.forceBase64;e&&(this.supportsBinary=!1),this.perMessageDeflate=t.perMessageDeflate,this.usingBrowserWebSocket=h&&!t.forceNode,this.protocols=t.protocols,this.usingBrowserWebSocket||(l=o),i.call(this,t)}var o,i=n(21),s=n(22),a=n(30),c=n(31),p=n(32),u=n(3)("engine.io-client:websocket"),h=e.WebSocket||e.MozWebSocket;if("undefined"==typeof window)try{o=n(35)}catch(f){}var l=h;l||"undefined"!=typeof window||(l=o),t.exports=r,c(r,i),r.prototype.name="websocket",r.prototype.supportsBinary=!0,r.prototype.doOpen=function(){if(this.check()){var t=this.uri(),e=this.protocols,n={agent:this.agent,perMessageDeflate:this.perMessageDeflate};n.pfx=this.pfx,n.key=this.key,n.passphrase=this.passphrase,n.cert=this.cert,n.ca=this.ca,n.ciphers=this.ciphers,n.rejectUnauthorized=this.rejectUnauthorized,this.extraHeaders&&(n.headers=this.extraHeaders),this.localAddress&&(n.localAddress=this.localAddress);try{this.ws=this.usingBrowserWebSocket?e?new l(t,e):new l(t):new l(t,e,n)}catch(r){return this.emit("error",r)}void 0===this.ws.binaryType&&(this.supportsBinary=!1),this.ws.supports&&this.ws.supports.binary?(this.supportsBinary=!0,this.ws.binaryType="nodebuffer"):this.ws.binaryType="arraybuffer",this.addEventListeners()}},r.prototype.addEventListeners=function(){var t=this;this.ws.onopen=function(){t.onOpen()},this.ws.onclose=function(){t.onClose()},this.ws.onmessage=function(e){t.onData(e.data)},this.ws.onerror=function(e){t.onError("websocket error",e)}},r.prototype.write=function(t){function n(){r.emit("flush"),setTimeout(function(){r.writable=!0,r.emit("drain")},0)}var r=this;this.writable=!1;for(var o=t.length,i=0,a=o;i<a;i++)!function(t){s.encodePacket(t,r.supportsBinary,function(i){if(!r.usingBrowserWebSocket){var s={};if(t.options&&(s.compress=t.options.compress),r.perMessageDeflate){var a="string"==typeof i?e.Buffer.byteLength(i):i.length;a<r.perMessageDeflate.threshold&&(s.compress=!1)}}try{r.usingBrowserWebSocket?r.ws.send(i):r.ws.send(i,s)}catch(c){u("websocket closed before onclose event")}--o||n()})}(t[i])},r.prototype.onClose=function(){i.prototype.onClose.call(this)},r.prototype.doClose=function(){"undefined"!=typeof this.ws&&this.ws.close()},r.prototype.uri=function(){var t=this.query||{},e=this.secure?"wss":"ws",n="";this.port&&("wss"===e&&443!==Number(this.port)||"ws"===e&&80!==Number(this.port))&&(n=":"+this.port),this.timestampRequests&&(t[this.timestampParam]=p()),this.supportsBinary||(t.b64=1),t=a.encode(t),t.length&&(t="?"+t);var r=this.hostname.indexOf(":")!==-1;return e+"://"+(r?"["+this.hostname+"]":this.hostname)+n+this.path+t},r.prototype.check=function(){return!(!l||"__initialize"in l&&this.name===r.prototype.name)}}).call(e,function(){return this}())},function(t,e){},function(t,e){var n=[].indexOf;t.exports=function(t,e){if(n)return t.indexOf(e);for(var r=0;r<t.length;++r)if(t[r]===e)return r;return-1}},function(t,e,n){"use strict";function r(t,e,n){this.io=t,this.nsp=e,this.json=this,this.ids=0,this.acks={},this.receiveBuffer=[],this.sendBuffer=[],this.connected=!1,this.disconnected=!0,n&&n.query&&(this.query=n.query),this.io.autoConnect&&this.open()}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=n(7),s=n(8),a=n(38),c=n(39),p=n(40),u=n(3)("socket.io-client:socket"),h=n(30);t.exports=e=r;var f={connect:1,connect_error:1,connect_timeout:1,connecting:1,disconnect:1,error:1,reconnect:1,reconnect_attempt:1,reconnect_failed:1,reconnect_error:1,reconnecting:1,ping:1,pong:1},l=s.prototype.emit;s(r.prototype),r.prototype.subEvents=function(){if(!this.subs){var t=this.io;this.subs=[c(t,"open",p(this,"onopen")),c(t,"packet",p(this,"onpacket")),c(t,"close",p(this,"onclose"))]}},r.prototype.open=r.prototype.connect=function(){return this.connected?this:(this.subEvents(),this.io.open(),"open"===this.io.readyState&&this.onopen(),this.emit("connecting"),this)},r.prototype.send=function(){var t=a(arguments);return t.unshift("message"),this.emit.apply(this,t),this},r.prototype.emit=function(t){if(f.hasOwnProperty(t))return l.apply(this,arguments),this;var e=a(arguments),n={type:i.EVENT,data:e};return n.options={},n.options.compress=!this.flags||!1!==this.flags.compress,"function"==typeof e[e.length-1]&&(u("emitting packet with ack id %d",this.ids),this.acks[this.ids]=e.pop(),n.id=this.ids++),this.connected?this.packet(n):this.sendBuffer.push(n),delete this.flags,this},r.prototype.packet=function(t){t.nsp=this.nsp,this.io.packet(t)},r.prototype.onopen=function(){if(u("transport is open - connecting"),"/"!==this.nsp)if(this.query){var t="object"===o(this.query)?h.encode(this.query):this.query;u("sending connect packet with query %s",t),this.packet({type:i.CONNECT,query:t})}else this.packet({type:i.CONNECT})},r.prototype.onclose=function(t){u("close (%s)",t),this.connected=!1,this.disconnected=!0,delete this.id,this.emit("disconnect",t)},r.prototype.onpacket=function(t){if(t.nsp===this.nsp)switch(t.type){case i.CONNECT:this.onconnect();break;case i.EVENT:this.onevent(t);break;case i.BINARY_EVENT:this.onevent(t);break;case i.ACK:this.onack(t);break;case i.BINARY_ACK:this.onack(t);break;case i.DISCONNECT:this.ondisconnect();break;case i.ERROR:this.emit("error",t.data)}},r.prototype.onevent=function(t){var e=t.data||[];u("emitting event %j",e),null!=t.id&&(u("attaching ack callback to event"),e.push(this.ack(t.id))),this.connected?l.apply(this,e):this.receiveBuffer.push(e)},r.prototype.ack=function(t){var e=this,n=!1;return function(){if(!n){n=!0;var r=a(arguments);u("sending ack %j",r),e.packet({type:i.ACK,id:t,data:r})}}},r.prototype.onack=function(t){var e=this.acks[t.id];"function"==typeof e?(u("calling ack %s with %j",t.id,t.data),e.apply(this,t.data),delete this.acks[t.id]):u("bad ack %s",t.id)},r.prototype.onconnect=function(){this.connected=!0,this.disconnected=!1,this.emit("connect"),this.emitBuffered()},r.prototype.emitBuffered=function(){var t;for(t=0;t<this.receiveBuffer.length;t++)l.apply(this,this.receiveBuffer[t]);for(this.receiveBuffer=[],t=0;t<this.sendBuffer.length;t++)this.packet(this.sendBuffer[t]);this.sendBuffer=[]},r.prototype.ondisconnect=function(){u("server disconnect (%s)",this.nsp),this.destroy(),this.onclose("io server disconnect")},r.prototype.destroy=function(){if(this.subs){for(var t=0;t<this.subs.length;t++)this.subs[t].destroy();this.subs=null}this.io.destroy(this)},r.prototype.close=r.prototype.disconnect=function(){return this.connected&&(u("performing disconnect (%s)",this.nsp),this.packet({type:i.DISCONNECT})),this.destroy(),this.connected&&this.onclose("io client disconnect"),this},r.prototype.compress=function(t){return this.flags=this.flags||{},this.flags.compress=t,this}},function(t,e){function n(t,e){var n=[];e=e||0;for(var r=e||0;r<t.length;r++)n[r-e]=t[r];return n}t.exports=n},function(t,e){"use strict";function n(t,e,n){return t.on(e,n),{destroy:function(){t.removeListener(e,n)}}}t.exports=n},function(t,e){var n=[].slice;t.exports=function(t,e){if("string"==typeof e&&(e=t[e]),"function"!=typeof e)throw new Error("bind() requires a function");var r=n.call(arguments,2);return function(){return e.apply(t,r.concat(n.call(arguments)))}}},function(t,e){function n(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}t.exports=n,n.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),n=Math.floor(e*this.jitter*t);t=0==(1&Math.floor(10*e))?t-n:t+n}return 0|Math.min(t,this.max)},n.prototype.reset=function(){this.attempts=0},n.prototype.setMin=function(t){this.ms=t},n.prototype.setMax=function(t){this.max=t},n.prototype.setJitter=function(t){this.jitter=t}}])});
//# sourceMappingURL=socket.io.js.map

/***/ }),
/* 12 */
/***/ (function(module, exports) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(true)
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	else if(typeof exports === 'object')
		exports["BackendlessRequest"] = factory();
	else
		root["BackendlessRequest"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Casts `value` as an array if it's not one.
 * Equvivalent to lodash/castArray
 */
var castArray = exports.castArray = function castArray(value) {
  return Array.isArray(value) ? value : [value];
};

var isObject = exports.isObject = function isObject(value) {
  return null != value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object';
};

var isFormData = exports.isFormData = function isFormData(value) {
  return value && value.constructor && value.constructor.toString().trim().indexOf('function FormData') === 0;
};

var isStream = exports.isStream = function isStream(value) {
  var stream = __webpack_require__(5);

  return value instanceof stream.Stream;
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

throw new Error('This Backendless JS SDK assembly is not intended for Node.js environment. You should use "lib" folder modules instead. For any questions please contact as at http://support.backendless.com/')

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _cache = __webpack_require__(3);

var _cache2 = _interopRequireDefault(_cache);

var _qs = __webpack_require__(4);

var qs = _interopRequireWildcard(_qs);

var _utils = __webpack_require__(0);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CONTENT_TYPE_HEADER = 'Content-Type';
var CACHE_FLUSH_INTERVAL = 60000; //60 sec

var cache = new _cache2.default(CACHE_FLUSH_INTERVAL);

var ResponseError = function (_Error) {
  _inherits(ResponseError, _Error);

  function ResponseError(error, status, headers) {
    _classCallCheck(this, ResponseError);

    var _this = _possibleConstructorReturn(this, (ResponseError.__proto__ || Object.getPrototypeOf(ResponseError)).call(this));

    _this.status = status;
    _this.headers = headers;
    _this.message = error.message || error;
    _this.code = error.code;
    return _this;
  }

  return ResponseError;
}(Error);

function parseError(res) {
  if (res.status === 502) {
    return 'No connection with server';
  }

  return res.body || 'Status Code ' + res.status + ' (' + res.statusText + ')';
}

function parseBody(res) {
  try {
    return _extends({}, res, { body: JSON.parse(res.body) });
  } catch (e) {
    return res;
  }
}

function parseHeaders(headersString) {
  var parsed = {};

  if (!headersString) {
    return parsed;
  }

  headersString.split('\n').forEach(function (line) {
    var i = line.indexOf(':');
    var key = line.substr(0, i).trim();
    var val = line.substr(i + 1).trim();

    if (key) {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
}

var sendXmlHttpRequest = function sendXmlHttpRequest(path, method, headers, body) {
  return new Promise(function sendRequest(resolve, reject) {
    var request = new Request.XMLHttpRequest();

    request.open(method.toUpperCase(), path, true);

    request.onload = function handleLoadEvent() {
      var headers = parseHeaders(request.getAllResponseHeaders());
      var _request = request,
          status = _request.status,
          statusText = _request.statusText,
          response = _request.response,
          responseText = _request.responseText;

      var body = response || responseText;

      resolve({ status: status, statusText: statusText, headers: headers, body: body });

      request = null;
    };

    request.onerror = function handleErrorEvent() {
      reject(new Error('Network Error'));

      request = null;
    };

    request.ontimeout = function handleTimeout() {
      reject(new Error('Connection aborted due to timeout'));

      request = null;
    };

    Object.keys(headers).forEach(function (key) {
      request.setRequestHeader(key, headers[key]);
    });

    request.send(body);
  });
};

var sendNodeAPIRequest = function sendNodeAPIRequest(path, method, headers, body, encoding) {
  return new Promise(function (resolve, reject) {
    var u = __webpack_require__(6).parse(path);
    var form = (0, _utils.isFormData)(body) && body;

    var https = u.protocol === 'https:';
    var options = {
      host: u.hostname,
      port: u.port || (https ? 443 : 80),
      method: method,
      path: u.path,
      headers: headers
    };

    var _send = function _send() {
      var Buffer = __webpack_require__(1).Buffer;
      var httpClient = __webpack_require__(https ? 7 : 8);

      var req = httpClient.request(options, function (res) {
        var strings = [];
        var buffers = [];
        var bufferLength = 0;
        var body = '';

        var status = res.statusCode,
            statusText = res.statusMessage,
            headers = res.headers;


        res.on('data', function (chunk) {
          if (!Buffer.isBuffer(chunk)) {
            strings.push(chunk);
          } else if (chunk.length) {
            bufferLength += chunk.length;
            buffers.push(chunk);
          }
        });

        res.on('end', function () {
          if (bufferLength) {
            body = Buffer.concat(buffers, bufferLength);

            if (encoding != null) {
              body = body.toString(encoding);
            }
          } else if (strings.length) {
            body = strings.join();
          }

          resolve({ status: status, statusText: statusText, headers: headers, body: body });
        });

        res.on('error', reject);
      });

      req.on('error', reject);

      if (body) {
        if ((0, _utils.isStream)(body)) {
          body.pipe(req);
          return;
        }

        req.write(body);
      }

      req.end();
    };

    if (form) {
      _extends(options.headers, form.getHeaders());

      form.getLength(function (err, length) {
        if (!err && !isNaN(length)) {
          options.headers['content-length'] = length;
        }

        _send();
      });
    } else {
      if (body && !options.headers['content-length']) {
        var Buffer = __webpack_require__(1).Buffer;
        options.headers['content-length'] = Buffer.byteLength(body);
      }

      _send();
    }
  });
};

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  var responseError = new ResponseError(parseError(response), response.status, response.headers);

  return Promise.reject(responseError);
}

var Request = function () {
  function Request(path, method, body) {
    _classCallCheck(this, Request);

    this.method = method;
    this.path = path;
    this.body = body;
    this.tags = undefined;
    this.unwrap = true;
    this.cacheTTL = 0;
    this.headers = {};
    this.queryParams = {};
    this.encoding = 'utf8';
  }

  /**
   * Sets a header
   *
   * @param {String|Object} key or map of headers
   * @param {String} [value]
   * @returns {Request}
   */


  _createClass(Request, [{
    key: 'set',
    value: function set(key, value) {
      if ((0, _utils.isObject)(key)) {
        for (var headerName in key) {
          this.set(headerName, key[headerName]);
        }
      } else if (typeof value !== 'undefined') {
        this.headers[key] = value;
      }

      return this;
    }

    /**
     * Which kind of tags this request affects.
     * Used for cache validation.
     * Non GET requests with defined tags, will clean all related to these tags caches
     *
     * @param {Array.<String>} tags
     * @returns {Request}
     */

  }, {
    key: 'cacheTags',
    value: function cacheTags() {
      for (var _len = arguments.length, tags = Array(_len), _key = 0; _key < _len; _key++) {
        tags[_key] = arguments[_key];
      }

      this.tags = tags;

      return this;
    }

    /**
     * @param {String} queryParams
     * @returns {Request}
     */

  }, {
    key: 'query',
    value: function query(queryParams) {
      _extends(this.queryParams, queryParams);

      return this;
    }
  }, {
    key: 'form',
    value: function form(_form) {
      var _this2 = this;

      if (_form) {
        var _FormData = module.exports.FormData;

        if (_form instanceof _FormData) {
          this.body = _form;
        } else {
          (function () {
            var formData = new _FormData();

            var _loop = function _loop(formKey) {
              if (formKey) {
                (0, _utils.castArray)(_form[formKey]).forEach(function (formValue) {
                  if (formValue && formValue.hasOwnProperty('value') && formValue.hasOwnProperty('options')) {
                    formData.append(formKey, formValue.value, formValue.options);
                  } else {
                    formData.append(formKey, formValue);
                  }
                });
              }
            };

            for (var formKey in _form) {
              _loop(formKey);
            }

            _this2.body = formData;
          })();
        }
      }

      return this;
    }

    /**
     * Should we cache or use cached result
     *
     * @param {Number} ttl Time to live for cached response. 15 seconds by default
     * @returns {Request}
     */

  }, {
    key: 'useCache',
    value: function useCache() {
      var ttl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 15000;

      this.cacheTTL = ttl;

      return this;
    }

    /**
     * Reset cache if passed TRUE and tags has been specified before
     *
     * @param {Boolean} reset - flag to reset cache or not
     * @returns {Request}
     */

  }, {
    key: 'resetCache',
    value: function resetCache(reset) {
      if (reset && this.tags) {
        cache.deleteByTags(this.tags);
      }

      return this;
    }

    /**
     * Shortcut for req.set('Content-Type', value)
     *
     * @param {String} contentType
     * @returns {Request}
     */

  }, {
    key: 'type',
    value: function type(contentType) {
      this.set(CONTENT_TYPE_HEADER, contentType);

      return this;
    }

    /**
     * Should we unwrap the response and return only body. true by default
     * @param {Boolean} unwrap
     * @returns {Request}
     */

  }, {
    key: 'unwrapBody',
    value: function unwrapBody(unwrap) {
      this.unwrap = unwrap;

      return this;
    }

    /**
     * set encoding to response
     * works only for Node js
     *
     * @param {String} encoding
     * @returns {Request}
     */

  }, {
    key: 'setEncoding',
    value: function setEncoding(encoding) {
      this.encoding = encoding;

      return this;
    }

    /**
     * Sends the requst
     *
     * @param {Object} body
     * @returns {Promise}
     */

  }, {
    key: 'send',
    value: function send(body) {
      var _this3 = this;

      var path = this.path;
      var queryString = qs.stringify(this.queryParams);

      if (queryString) {
        path += '?' + queryString;
      }

      if (this.cacheTTL) {
        var cached = cache.get(path);

        if (cached !== undefined) {
          return Promise.resolve(cached);
        }
      }

      var type = this.headers[CONTENT_TYPE_HEADER];

      if (!type && (0, _utils.isObject)(body) && !(0, _utils.isFormData)(body)) {
        this.type('application/json');
      }

      if (body) {
        var isJSON = this.headers[CONTENT_TYPE_HEADER] === 'application/json';

        body = isJSON && typeof body !== 'string' ? JSON.stringify(body) : body;
      }

      var unwrapBody = function unwrapBody(res) {
        return _this3.unwrap ? res.body : res;
      };

      /**
       * Caches the response if required
       */
      var cacheResponse = function cacheResponse(res) {
        if (_this3.cacheTTL) {
          cache.set(path, res, _this3.tags, _this3.cacheTTL);
        }

        return res;
      };

      /**
       * Deletes all relevant to req.cacheTags keys from the cache if this request method is not GET
       */
      var flushCache = function flushCache(res) {
        if (_this3.tags && _this3.method !== 'get') {
          cache.deleteByTags(_this3.tags);
        }

        return res;
      };

      if (Request.verbose) {
        console.log(this.method.toUpperCase(), decodeURIComponent(path), body, this.headers);
      }

      return Request.send(path, this.method.toUpperCase(), this.headers, body, this.encoding).then(parseBody).then(checkStatus).then(unwrapBody).then(cacheResponse).then(flushCache);
    }

    /**
     * If you are too lazy to use method 'send', don't use it and stay cool :)
     *
     * @param {Function} successHandler
     * @param {Function} errorHandler
     * @returns {Promise}
     */

  }, {
    key: 'then',
    value: function then(successHandler, errorHandler) {
      this.promise = this.promise || this.send(this.body);

      return this.promise.then(successHandler, errorHandler);
    }

    /**
     * @param {Function} errorHandler
     * @returns {Promise}
     */

  }, {
    key: 'catch',
    value: function _catch(errorHandler) {
      this.promise = this.promise || this.send(this.body);

      return this.promise.catch(errorHandler);
    }
  }]);

  return Request;
}();

Object.defineProperty(Request, 'FormData', {
  get: function get() {
    return typeof FormData !== 'undefined' ? FormData : __webpack_require__(9);
  }
});

Request.XMLHttpRequest = typeof XMLHttpRequest !== 'undefined' ? XMLHttpRequest : undefined;

Request.send = function (path, method, headers, body, encoding) {
  var sender = typeof Request.XMLHttpRequest !== 'undefined' ? sendXmlHttpRequest : sendNodeAPIRequest;

  return sender(path, method, headers, body, encoding);
};

Request.verbose = false;
Request.methods = ['get', 'post', 'put', 'patch', 'delete'];

Request.methods.forEach(function (method) {
  Request[method] = function (path, body) {
    return new Request(path, method, body);
  };
});

module.exports = Request;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DEFAULT_TTL = 30000; // 30 sec

/**
 * @typedef {Object} CacheItem
 * @property {*} value
 * @property {Array.<RegExp|String>} tags
 * @property {Number} ttl
 */

/**
 * @param {*} value
 * @param {Array.<RegExp|String>}tags
 * @param {Number} ttl
 * @returns {CacheItem}
 */
var cacheItem = function cacheItem(value, tags, ttl) {
  return { value: value, tags: tags, ttl: ttl };
};

var currentTime = function currentTime() {
  return new Date().getTime();
};

/**
 * Returns true if tag A matches tag B :
 *  - if they are non-strictly equal
 *  - if one of them is Regexp matching the opposite
 *
 * @param {String|RegExp} a
 * @param {String|RegExp} b
 * @returns {Boolean}
 */
var tagsMatches = function tagsMatches(a, b) {
  var result = a == b; // eslint-disable-line

  if (!result && a instanceof RegExp) {
    result = a.test(b);
  }

  if (!result && b instanceof RegExp) {
    result = b.test(a);
  }

  return result;
};

/**
 * Returns true if any of A tags matches any of B tags
 *
 * @param {Array.<String|RegExp>} a
 * @param {Array.<String|RegExp>} b
 * @returns {Boolean}
 */
var tagsContainMatches = function tagsContainMatches(a, b) {
  return !!a.find(function (aTag) {
    return b.find(function (bTag) {
      return tagsMatches(aTag, bTag);
    });
  });
};

/**
 * A Cache with TTL and optional tags for the keys
 * Makes it possible to assign multiple tags for a key and delete keys by tags
 * Optionally it starts flushing timer which cleans all outdated keys
 */

var Cache = function () {

  /**
   * @param {Number?} flushInterval
   */
  function Cache(flushInterval) {
    _classCallCheck(this, Cache);

    this.flushInterval = flushInterval;

    /**
     * @type {Map.<String, CacheItem>}
     */
    this.map = new Map();
  }

  /**
   * @param {String} key
   * @returns {*}
   */


  _createClass(Cache, [{
    key: "get",
    value: function get(key) {
      var cacheItem = this.map.get(key);

      if (cacheItem) {
        if (cacheItem.ttl > currentTime()) {
          return cacheItem.value;
        } else {
          this.map.delete(key);
        }
      }
    }

    /**
     * @param {String} key
     * @param {*} value
     * @param {Array.<RegExp|String>=} tags
     * @param {Number=} ttl
     */

  }, {
    key: "set",
    value: function set(key, value, tags) {
      var ttl = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : DEFAULT_TTL;

      this.map.set(key, cacheItem(value, tags, currentTime() + ttl));

      if (this.flushInterval && !this.flushTimer) {
        this.flushTimer = setInterval(this.flush.bind(this), this.flushInterval);

        if (this.flushTimer.unref) {
          this.flushTimer.unref();
        }
      }
    }

    /**
     * @param {String} key
     */

  }, {
    key: "delete",
    value: function _delete(key) {
      this.map.delete(key);
    }

    /**
     * @param {Array.<String>} tags
     */

  }, {
    key: "deleteByTags",
    value: function deleteByTags(tags) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.map[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _step$value = _slicedToArray(_step.value, 2),
              key = _step$value[0],
              value = _step$value[1];

          if (value.tags && tagsContainMatches(tags, value.tags)) {
            this.delete(key);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }

    /**
     * Deletes all outdated keys
     */

  }, {
    key: "flush",
    value: function flush() {
      var now = currentTime();

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.map[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _step2$value = _slicedToArray(_step2.value, 2),
              key = _step2$value[0],
              value = _step2$value[1];

          if (value.ttl < now) {
            this.delete(key);
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }]);

  return Cache;
}();

exports.default = Cache;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringify = undefined;

var _utils = __webpack_require__(0);

/**
 * Produces a URL query string from a given obj by iterating through the object's "own properties".
 * @param {Object} obj
 * @returns {string}
 */
var stringify = exports.stringify = function stringify(obj) {
  var tokens = [];

  Object.keys(obj).forEach(function (key) {
    var value = obj[key];

    if (value !== undefined) {
      (0, _utils.castArray)(value).forEach(function (value) {
        tokens.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
      });
    }
  });

  return tokens.join('&');
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

throw new Error('This Backendless JS SDK assembly is not intended for Node.js environment. You should use "lib" folder modules instead. For any questions please contact as at http://support.backendless.com/')

/***/ }),
/* 6 */
/***/ (function(module, exports) {

throw new Error('This Backendless JS SDK assembly is not intended for Node.js environment. You should use "lib" folder modules instead. For any questions please contact as at http://support.backendless.com/')

/***/ }),
/* 7 */
/***/ (function(module, exports) {

throw new Error('This Backendless JS SDK assembly is not intended for Node.js environment. You should use "lib" folder modules instead. For any questions please contact as at http://support.backendless.com/')

/***/ }),
/* 8 */
/***/ (function(module, exports) {

throw new Error('This Backendless JS SDK assembly is not intended for Node.js environment. You should use "lib" folder modules instead. For any questions please contact as at http://support.backendless.com/')

/***/ }),
/* 9 */
/***/ (function(module, exports) {

throw new Error('This Backendless JS SDK assembly is not intended for Node.js environment. You should use "lib" folder modules instead. For any questions please contact as at http://support.backendless.com/')

/***/ })
/******/ ]);
});
//# sourceMappingURL=backendless-request.js.map

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _desc, _value, _class, _class2, _temp;

var _listeners = __webpack_require__(2);

var _listeners2 = _interopRequireDefault(_listeners);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var ListenerTypes = {
  CONNECT: 'CONNECT',
  ERROR: 'ERROR',
  COMMAND: 'COMMAND',
  USER_STATUS: 'USER_STATUS'
};

var RTScopeConnector = (_dec = connectionRequired(), _dec2 = connectionRequired(), _dec3 = connectionRequired(), _dec4 = connectionRequired(), _dec5 = connectionRequired(true), (_class = (_temp = _class2 = function (_RTListeners) {
  _inherits(RTScopeConnector, _RTListeners);

  _createClass(RTScopeConnector, [{
    key: 'connectSubscriber',


    /**
     * @abstract getter, must be overridden in an inherited class
     * must returns a function for adding subscriptions to CONNECT to connection scope
     * For ex.: RTProvider.subscriptions.connectToRSO
     **/
    get: function get() {
      return null;
    }

    /**
     * @abstract getter, must be overridden in an inherited class
     *
     * must returns a function for adding subscriptions to listening COMMANDS in connection scope
     * For ex.: RTProvider.subscriptions.onRSOCommand
     **/


    /**
     * @static
     * @function
     * @decorator
     * @param {Boolean} [returnPromise] - if passed to TRUE the method returns a Promise
     *                                    and will be resolved when the instance is connected to scope
     *                                    and method return any result
     *
     * decorate instance's methods of the Class
     * puts the method's execution to pool and run it immediately after connected to Connection Scope.
     * if the instance is already connected to the scope the method will be executed immediately
     **/

  }, {
    key: 'commandSubscriber',
    get: function get() {
      return null;
    }

    /**
     * @abstract getter, must be overridden in an inherited class
     *
     * must returns a function for adding subscriptions to listening changes of USER_STATUS in connection scope
     * For ex.: RTProvider.subscriptions.onRSOUserStatus
     **/

  }, {
    key: 'usersSubscriber',
    get: function get() {
      return null;
    }

    /**
     * @abstract getter, must be overridden in an inherited class
     *
     * must returns a function for sending COMMAND into connection scope
     * For ex.: RTProvider.methods.sendRSOCommand
     **/

  }, {
    key: 'commandSender',
    get: function get() {
      return null;
    }
  }]);

  function RTScopeConnector(options) {
    _classCallCheck(this, RTScopeConnector);

    var _this = _possibleConstructorReturn(this, (RTScopeConnector.__proto__ || Object.getPrototypeOf(RTScopeConnector)).call(this));

    _this.options = options;

    _this.waitConnection = [];

    _this.connect();
    return _this;
  }

  /**
   * @public method
   *
   * connect to connection scope, if you already connected the method do nothing
   **/


  _createClass(RTScopeConnector, [{
    key: 'connect',
    value: function connect() {
      var _this2 = this;

      if (!this.isConnected()) {
        this.connection = this.connectSubscriber(this.getScopeOptions(), {
          onError: function onError(error) {
            return _this2.onError(error);
          },
          onReady: function onReady() {
            return _this2.onConnect();
          },
          onStop: function onStop() {
            return _this2.onDisconnect();
          }
        });
      }
    }

    /**
     * @public method
     *
     * disconnect from connection scope, if you already disconnect the method do nothing
     **/

  }, {
    key: 'disconnect',
    value: function disconnect() {
      if (this.isConnected()) {
        this.connection.stop();
      }
    }

    /**
     * @public method
     *
     * returns TRUE if you connected to connection scope otherwise returns FALSE
     **/

  }, {
    key: 'isConnected',
    value: function isConnected() {
      return !!this.connection && this.connection.isReady();
    }

    /**
     * @private method
     **/

  }, {
    key: 'getSubscriptionOptions',
    value: function getSubscriptionOptions() {
      return this.getScopeOptions();
    }

    /**
     * @private method
     **/

  }, {
    key: 'getScopeOptions',
    value: function getScopeOptions() {
      return this.options;
    }

    /**
     * @private method
     **/

  }, {
    key: 'onConnect',
    value: function onConnect() {
      this.waitConnection.forEach(function (operation) {
        return operation();
      });
      this.waitConnection = [];

      this.runSimpleListeners(ListenerTypes.CONNECT);
    }

    /**
     * @private method
     **/

  }, {
    key: 'onError',
    value: function onError(error) {
      this.runSimpleListeners(ListenerTypes.ERROR, error);
    }

    /**
     * @private method
     **/

  }, {
    key: 'onDisconnect',
    value: function onDisconnect() {
      this.connection = null;
    }

    /**
     * @public method
     **/

  }, {
    key: 'removeAllListeners',
    value: function removeAllListeners() {
      this.waitConnection = [];

      _get(RTScopeConnector.prototype.__proto__ || Object.getPrototypeOf(RTScopeConnector.prototype), 'removeAllListeners', this).call(this);

      return this;
    }

    /**
     * @public method
     **/

  }, {
    key: 'addConnectListener',
    value: function addConnectListener(callback, onError) {
      this.addSimpleListener(ListenerTypes.CONNECT, callback);

      if (onError) {
        this.addSimpleListener(ListenerTypes.ERROR, onError);
      }

      return this;
    }

    /**
     * @public method
     **/

  }, {
    key: 'removeConnectListeners',
    value: function removeConnectListeners(callback, onError) {
      this.removeSimpleListener(ListenerTypes.CONNECT, callback);

      if (onError) {
        this.removeSimpleListener(ListenerTypes.ERROR, onError);
      }

      return this;
    }

    /**
     * @public method
     **/

  }, {
    key: 'addCommandListener',
    value: function addCommandListener(callback, onError) {
      this.addSubscription(ListenerTypes.COMMAND, this.commandSubscriber, { callback: callback, onError: onError });

      return this;
    }

    /**
     * @public method
     **/

  }, {
    key: 'removeCommandListeners',
    value: function removeCommandListeners(callback) {
      this.stopSubscription(ListenerTypes.COMMAND, { callback: callback });

      return this;
    }

    /**
     * @public method
     **/

  }, {
    key: 'addUserStatusListener',
    value: function addUserStatusListener(callback, onError) {
      this.addSubscription(ListenerTypes.USER_STATUS, this.usersSubscriber, { callback: callback, onError: onError });

      return this;
    }

    /**
     * @public method
     **/

  }, {
    key: 'removeUserStatusListeners',
    value: function removeUserStatusListeners(callback) {
      this.stopSubscription(ListenerTypes.USER_STATUS, { callback: callback });

      return this;
    }

    /**
     * @public method
     **/

  }, {
    key: 'send',
    value: function send(type, data) {
      return this.commandSender(_extends({}, this.getScopeOptions(), { type: type, data: data }));
    }
  }]);

  return RTScopeConnector;
}(_listeners2.default), _class2.connectionRequired = connectionRequired, _temp), (_applyDecoratedDescriptor(_class.prototype, 'addCommandListener', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'addCommandListener'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'removeCommandListeners', [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'removeCommandListeners'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'addUserStatusListener', [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, 'addUserStatusListener'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'removeUserStatusListeners', [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, 'removeUserStatusListeners'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'send', [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, 'send'), _class.prototype)), _class));
exports.default = RTScopeConnector;


function connectionRequired(returnPromise) {
  return function (target, key, descriptor) {
    var decorated = descriptor.value;

    descriptor.value = function () {
      var _this3 = this,
          _arguments = arguments;

      var run = function run() {
        return decorated.apply(_this3, _arguments);
      };

      if (this.isConnected()) {
        return run();
      }

      if (returnPromise) {
        return new Promise(function (resolve, reject) {
          return _this3.waitConnection.push(function () {
            return run().then(resolve, reject);
          });
        });
      }

      this.waitConnection.push(run);

      return this;
    };

    return descriptor;
  };
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=backendless-rt-client.js.map

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadRelations = loadRelations;
exports.setRelation = setRelation;
exports.addRelation = addRelation;
exports.deleteRelation = deleteRelation;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _loadRelationsQueryBuilder = __webpack_require__(28);

var _loadRelationsQueryBuilder2 = _interopRequireDefault(_loadRelationsQueryBuilder);

var _extractQueryOptions = __webpack_require__(31);

var _parse = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//TODO: refactor me

function collectRelationObject(parent, columnName, children) {
  var relation = {
    columnName: columnName
  };

  if (_utils2.default.isString(parent)) {
    relation.parentId = parent;
  } else if (_utils2.default.isObject(parent)) {
    relation.parentId = parent.objectId;
  }

  if (_utils2.default.isString(children)) {
    relation.whereClause = children;
  } else if (_utils2.default.isArray(children)) {
    relation.childrenIds = children.map(function (child) {
      return _utils2.default.isObject(child) ? child.objectId : child;
    });
  }

  return relation;
}

function manageRelation(method, className, parent, columnName, children, asyncHandler) {
  var relation = collectRelationObject(parent, columnName, children);
  var responder = asyncHandler;

  if (!relation.parentId) {
    throw new Error('Invalid value for the "parent" argument. ' + 'The argument is required and must contain only string or object values.');
  }

  if (!relation.columnName) {
    throw new Error('Invalid value for the "columnName" argument. ' + 'The argument is required and must contain only string values.');
  }

  if (!relation.whereClause && !relation.childrenIds) {
    throw new Error('Invalid value for the third argument. ' + 'The argument is required and must contain string values if it sets whereClause ' + 'or array if it sets childObjects.');
  }

  return _request2.default.send({
    method: method,
    url: buildRelationUrl(className, relation),
    isAsync: !!responder,
    asyncHandler: responder,
    data: relation.childrenIds
  });
}

function buildRelationUrl(className, relation) {
  var url = _urls2.default.dataTableObjectRelation(className, relation.parentId, relation.columnName);

  if (relation.whereClause) {
    url += '?' + _utils2.default.toQueryParams({ whereClause: relation.whereClause });
  }

  return url;
}

function loadRelations(parentObjectId, queryBuilder, asyncHandler) {
  if (!parentObjectId || !_utils2.default.isString(parentObjectId)) {
    throw new Error('The parentObjectId is required argument and must be a nonempty string');
  }

  if (!(queryBuilder instanceof _loadRelationsQueryBuilder2.default)) {
    throw new Error('Invalid queryBuilder object.' + 'The queryBuilder is required and must be instance of the Backendless.LoadRelationsQueryBuilder');
  }

  var dataQuery = queryBuilder.build();

  var relationName = dataQuery.options && dataQuery.options.relationName;

  if (!relationName || !_utils2.default.isString(relationName)) {
    throw new Error('The options relationName is required and must contain string value');
  }

  var options = void 0;
  var query = [];

  if (dataQuery.options) {
    options = (0, _extractQueryOptions.extractQueryOptions)(dataQuery.options);
  }

  if (options) {
    query.push(options);
  }

  if (dataQuery.condition) {
    query.push('where=' + encodeURIComponent(dataQuery.condition));
  }

  if (dataQuery.havingClause) {
    query.push('having=' + encodeURIComponent(dataQuery.havingClause));
  }

  var url = _urls2.default.dataTableObjectRelation(this.className, parentObjectId, relationName);

  if (asyncHandler) {
    asyncHandler = _utils2.default.wrapAsync(asyncHandler, function (resp) {
      return (0, _parse.parseFindResponse)(resp, dataQuery.relationModel);
    });
  }

  if (query.length) {
    url += '?' + query.join('&');
  }

  var result = _request2.default.get({
    url: url,
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });

  if (asyncHandler) {
    return result;
  }

  return (0, _parse.parseFindResponse)(result, dataQuery.relationModel);
}

function setRelation(parent, columnName, children, asyncHandler) {
  return manageRelation('POST', this.className, parent, columnName, children, asyncHandler);
}

function addRelation(parent, columnName, children, asyncHandler) {
  return manageRelation('PUT', this.className, parent, columnName, children, asyncHandler);
}

function deleteRelation(parent, columnName, children, asyncHandler) {
  return manageRelation('DELETE', this.className, parent, columnName, children, asyncHandler);
}

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bulkCreate = bulkCreate;
exports.bulkUpdate = bulkUpdate;
exports.bulkDelete = bulkDelete;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _async = __webpack_require__(3);

var _async2 = _interopRequireDefault(_async);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function bulkCreate(objects, asyncHandler) {
  var MSG_ERROR = 'Invalid bulkCreate argument. ' + 'The first argument must contain only array of objects.';

  if (!_utils2.default.isArray(objects)) {
    throw new Error(MSG_ERROR);
  }

  objects.forEach(function (obj) {
    if (!_utils2.default.isObject(obj) || Array.isArray(obj)) {
      throw new Error(MSG_ERROR);
    }
  });

  return _request2.default.post({
    url: _urls2.default.dataBulkTable(this.className),
    data: objects,
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

function bulkUpdate(where, changes, asyncHandler) {
  if (!where || !_utils2.default.isString(where)) {
    throw new Error('Invalid bulkUpdate argument. The first argument must be "whereClause" string.');
  }

  if (!_utils2.default.isObject(changes) || Array.isArray(changes) || changes instanceof _async2.default) {
    throw new Error('Invalid bulkUpdate argument. The second argument must be object.');
  }

  return _request2.default.put({
    url: _urls2.default.dataBulkTable(this.className),
    query: { where: where },
    data: changes,
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

function bulkDelete(where, asyncHandler) {
  if (!_utils2.default.isArray(where) && !_utils2.default.isString(where)) {
    throw new Error('Invalid bulkDelete argument. ' + 'The first argument must contain array of objects or array of id or "whereClause" string.');
  }

  where = _utils2.default.isString(where) ? where : objectsToWhereClause(where);

  return _request2.default.delete({
    url: _urls2.default.dataBulkTable(this.className),
    query: { where: where },
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

function objectsToWhereClause(objects) {
  var objectIds = objects.map(function (obj) {
    if (!obj || !_utils2.default.isString(obj) && !obj.objectId) {
      throw new Error('Can not transform "objects" to "whereClause". ' + 'Item must be a string or an object with property "objectId" as string.');
    }

    return '\'' + (_utils2.default.isString(obj) ? obj : obj.objectId) + '\'';
  });

  return 'objectId in (' + objectIds.join(',') + ')';
}

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findUtil = findUtil;
exports.find = find;
exports.findById = findById;
exports.findFirst = findFirst;
exports.findLast = findLast;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _async = __webpack_require__(3);

var _async2 = _interopRequireDefault(_async);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _queryBuilder = __webpack_require__(17);

var _queryBuilder2 = _interopRequireDefault(_queryBuilder);

var _parse = __webpack_require__(11);

var _extractQueryOptions = __webpack_require__(31);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//TODO: refactor me

function findUtil(className, Model, dataQuery, asyncHandler) {
  dataQuery = dataQuery || {};

  var query = [];

  if (asyncHandler) {
    asyncHandler = _utils2.default.wrapAsync(asyncHandler, function (resp) {
      return (0, _parse.parseFindResponse)(resp, Model);
    });
  }

  if (dataQuery.options) {
    query.push((0, _extractQueryOptions.extractQueryOptions)(dataQuery.options));
  }

  if (dataQuery.condition) {
    query.push('where=' + encodeURIComponent(dataQuery.condition));
  }

  if (dataQuery.havingClause) {
    query.push('having=' + encodeURIComponent(dataQuery.havingClause));
  }

  if (dataQuery.properties && dataQuery.properties.length) {
    query.push('props=' + _utils2.default.encodeArrayToUriComponent(dataQuery.properties));
  }

  var url = _urls2.default.dataTable(className);

  if (dataQuery.url) {
    url += '/' + dataQuery.url;
  }

  if (query.length) {
    url += '?' + query.join('&');
  }

  var result = _request2.default.get({
    url: url,
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler,
    cachePolicy: dataQuery.cachePolicy
  });

  if (asyncHandler) {
    return result;
  }

  return (0, _parse.parseFindResponse)(result, Model);
}

function find(queryBuilder, asyncHandler) {
  //TODO: add an ability to get object as QueryBuilder

  if (queryBuilder instanceof _async2.default) {
    asyncHandler = queryBuilder;
    queryBuilder = undefined;
  }

  if (queryBuilder && !(queryBuilder instanceof _queryBuilder2.default)) {
    throw new Error('The first argument should be instance of Backendless.DataQueryBuilder');
  }

  var dataQuery = queryBuilder ? queryBuilder.build() : {};

  return findUtil(this.className, this.model, dataQuery, asyncHandler);
}

function findById() {
  var _this = this;

  var argsObj = void 0;
  var responder = _utils2.default.extractResponder(arguments);

  if (_utils2.default.isString(arguments[0])) {
    argsObj = !(arguments[1] instanceof _async2.default) ? arguments[1] || {} : {};
    argsObj.url = arguments[0];

    if (!argsObj.url) {
      throw new Error('missing argument "object ID" for method findById()');
    }

    return findUtil(this.className, this.model, argsObj, responder);
  } else if (_utils2.default.isObject(arguments[0])) {
    argsObj = arguments[0];
    var url = _urls2.default.dataTable(this.className);
    var isAsync = !!responder;
    var send = '/pk?';

    for (var key in argsObj) {
      send += key + '=' + argsObj[key] + '&';
    }

    if (responder) {
      responder = _utils2.default.wrapAsync(responder, function (resp) {
        return (0, _parse.parseFindResponse)(resp, _this.model);
      });
    }

    var result = void 0;

    if (_utils2.default.getClassName(arguments[0]) === 'Object') {
      result = _request2.default.get({
        url: url + send.replace(/&$/, ''),
        isAsync: isAsync,
        asyncHandler: responder
      });
    } else {
      result = _request2.default.put({
        url: url,
        data: argsObj,
        isAsync: isAsync,
        asyncHandler: responder
      });
    }

    return isAsync ? result : (0, _parse.parseFindResponse)(result, this.model);
  }
}

function findFirst(dataQuery, asyncHandler) {
  if (dataQuery instanceof _async2.default) {
    asyncHandler = dataQuery;
    dataQuery = {};
  }

  dataQuery.url = 'first';

  return findUtil(this.className, this.model, dataQuery, asyncHandler);
}

function findLast(dataQuery, asyncHandler) {
  if (dataQuery instanceof _async2.default) {
    asyncHandler = dataQuery;
    dataQuery = {};
  }

  dataQuery.url = 'last';

  return findUtil(this.className, this.model, dataQuery, asyncHandler);
}

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.replCircDeps = replCircDeps;
exports.save = save;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _parse = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var genID = function genID() {
  //TODO: refactor me
  var b = '';

  for (var a = b; a++ < 36; b += a * 51 && 52 ? (a ^ 15 ? 8 ^ Math.random() * (a ^ 20 ? 16 : 4) : 4).toString(16) : '-') {}

  return b;
};

function replCircDeps(object) {
  var objMap = [object];
  var pos = void 0;

  var _replCircDepsHelper = function _replCircDepsHelper(obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop) && _typeof(obj[prop]) === 'object' && obj[prop] != null) {
        if ((pos = objMap.indexOf(obj[prop])) !== -1) {
          objMap[pos]['__subID'] = objMap[pos]['__subID'] || genID();
          obj[prop] = { '__originSubID': objMap[pos]['__subID'] };
        } else if (_utils2.default.isDate(obj[prop])) {
          obj[prop] = obj[prop].getTime();
        } else {
          objMap.push(obj[prop]);
          _replCircDepsHelper(obj[prop]);
        }
      }
    }
  };

  _replCircDepsHelper(object);
}

function save(obj, asyncHandler) {
  var _this = this;

  replCircDeps(obj);

  var objRef = obj;

  if (asyncHandler) {
    asyncHandler = _utils2.default.wrapAsync(asyncHandler, function (resp) {
      return (0, _parse.parseFindResponse)(resp, _this.model);
    });
  }

  var result = _request2.default.put({
    url: _urls2.default.dataTable(this.className),
    data: obj,
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });

  if (asyncHandler) {
    return result;
  }

  return _utils2.default.deepExtend(objRef, (0, _parse.parseFindResponse)(result, this.model));
}

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = remove;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _parse = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function remove(object, asyncHandler) {
  if (!_utils2.default.isObject(object) && !_utils2.default.isString(object)) {
    throw new Error('Invalid value for the "value" argument. The argument must contain only string or object values');
  }

  var result = _request2.default.delete({
    url: _urls2.default.dataTableObject(this.className, object.objectId || object),
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });

  if (asyncHandler) {
    return result;
  }

  return (0, _parse.parseFindResponse)(result, this.model);
}

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getObjectCount = getObjectCount;

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _async = __webpack_require__(3);

var _async2 = _interopRequireDefault(_async);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _queryBuilder = __webpack_require__(17);

var _queryBuilder2 = _interopRequireDefault(_queryBuilder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getObjectCount(condition, asyncHandler) {
  if (condition instanceof _async2.default) {
    asyncHandler = condition;
    condition = undefined;
  }

  if (condition instanceof _queryBuilder2.default) {
    condition = condition.build().condition || undefined;
  }

  return _request2.default.get({
    url: _urls2.default.dataTableCount(this.className),
    query: { where: condition },
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.describe = describe;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function describe(className, asyncHandler) {
  className = _utils2.default.isString(className) ? className : _utils2.default.getClassName(className);

  return _request2.default.get({
    url: _urls2.default.dataTableProps(className),
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ajaxForBrowser = ajaxForBrowser;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _localVars = __webpack_require__(6);

var _localVars2 = _interopRequireDefault(_localVars);

var _currentUser = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var parseResponse = function parseResponse(xhr) {
  var result = true;

  if (xhr.responseText) {
    result = _utils2.default.tryParseJSON(xhr.responseText);
  }

  return result;
};

var badResponse = function badResponse(xhr) {
  var result = {};

  try {
    result = JSON.parse(xhr.responseText);
  } catch (e) {
    result.message = xhr.responseText;
  }

  result.statusCode = xhr.status;
  result.message = result.message || 'unknown error occurred';

  return result;
};

var sendRequest = function sendRequest(config) {
  var xhr = new _localVars2.default.XMLHttpRequest();
  var query = _utils2.default.toQueryParams(config.query);
  var url = config.url + (query ? '?' + query : '');

  xhr.open(config.method, url, false);

  var userToken = (0, _currentUser.getCurrentUserToken)();

  if (userToken) {
    xhr.setRequestHeader('user-token', userToken);
  }

  if (config.form) {
    var formData = new FormData();

    for (var key in config.form) {
      var value = config.form[key];

      if (value) {
        formData.append(key, value);
      }
    }

    config.data = formData;
  } else {
    var contentType = config.data ? 'application/json' : 'application/x-www-form-urlencoded';

    if (contentType === 'application/json' && config.data && typeof config.data !== 'string') {
      config.data = JSON.stringify(config.data);
    }

    xhr.setRequestHeader('Content-Type', contentType);
  }

  xhr.send(config.data);

  if (xhr.status >= 200 && xhr.status < 300) {
    return parseResponse(xhr);
  }

  throw badResponse(xhr);
};

function ajaxForBrowser(config) {
  config.method = config.method || 'GET';
  config.isAsync = typeof config.isAsync === 'boolean' ? config.isAsync : false;

  try {
    return sendRequest(config);
  } catch (error) {
    throw error;
  }
}

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _collector = __webpack_require__(16);

var _collector2 = _interopRequireDefault(_collector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Logger = function () {
  function Logger(name) {
    _classCallCheck(this, Logger);

    this.name = name;
  }

  _createClass(Logger, [{
    key: 'debug',
    value: function debug(message) {
      return _collector2.default.push(this.name, 'DEBUG', message);
    }
  }, {
    key: 'info',
    value: function info(message) {
      return _collector2.default.push(this.name, 'INFO', message);
    }
  }, {
    key: 'warn',
    value: function warn(message, exception) {
      return _collector2.default.push(this.name, 'WARN', message, exception);
    }
  }, {
    key: 'error',
    value: function error(message, exception) {
      return _collector2.default.push(this.name, 'ERROR', message, exception);
    }
  }, {
    key: 'fatal',
    value: function fatal(message, exception) {
      return _collector2.default.push(this.name, 'FATAL', message, exception);
    }
  }, {
    key: 'trace',
    value: function trace(message) {
      return _collector2.default.push(this.name, 'TRACE', message);
    }
  }]);

  return Logger;
}();

exports.default = Logger;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _desc, _value, _obj, _init, _init2, _init3, _init4, _init5, _init6, _init7, _init8, _init9;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _decorators = __webpack_require__(4);

var _counter = __webpack_require__(66);

var _counter2 = _interopRequireDefault(_counter);

var _methods = __webpack_require__(32);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var Counters = (_dec = (0, _decorators.deprecated)('Backendless.Counters', 'Backendless.Counters.incrementAndGet'), _dec2 = (0, _decorators.deprecated)('Backendless.Counters', 'Backendless.Counters.getAndIncrement'), _dec3 = (0, _decorators.deprecated)('Backendless.Counters', 'Backendless.Counters.decrementAndGet'), _dec4 = (0, _decorators.deprecated)('Backendless.Counters', 'Backendless.Counters.getAndDecrement'), _dec5 = (0, _decorators.deprecated)('Backendless.Counters', 'Backendless.Counters.reset'), _dec6 = (0, _decorators.deprecated)('Backendless.Counters', 'Backendless.Counters.get'), _dec7 = (0, _decorators.deprecated)('Backendless.Counters', 'Backendless.Counters.addAndGet'), _dec8 = (0, _decorators.deprecated)('Backendless.Counters', 'Backendless.Counters.getAndAdd'), _dec9 = (0, _decorators.deprecated)('Backendless.Counters', 'Backendless.Counters.compareAndSet'), (_obj = {
  of: function of(name) {
    return new _counter2.default(name);
  },

  incrementAndGetSync: _utils2.default.synchronized(_methods.incrementAndGet),
  incrementAndGet: _utils2.default.promisified(_methods.incrementAndGet),

  getAndIncrementSync: _utils2.default.synchronized(_methods.getAndIncrement),
  getAndIncrement: _utils2.default.promisified(_methods.getAndIncrement),

  decrementAndGetSync: _utils2.default.synchronized(_methods.decrementAndGet),
  decrementAndGet: _utils2.default.promisified(_methods.decrementAndGet),

  getAndDecrementSync: _utils2.default.synchronized(_methods.getAndDecrement),
  getAndDecrement: _utils2.default.promisified(_methods.getAndDecrement),

  resetSync: _utils2.default.synchronized(_methods.reset),
  reset: _utils2.default.promisified(_methods.reset),

  getSync: _utils2.default.synchronized(_methods.get),
  get: _utils2.default.promisified(_methods.get),

  addAndGetSync: _utils2.default.synchronized(_methods.addAndGet),
  addAndGet: _utils2.default.promisified(_methods.addAndGet),

  getAndAddSync: _utils2.default.synchronized(_methods.getAndAdd),
  getAndAdd: _utils2.default.promisified(_methods.getAndAdd),

  compareAndSetSync: _utils2.default.synchronized(_methods.compareAndSet),
  compareAndSet: _utils2.default.promisified(_methods.compareAndSet)
}, (_applyDecoratedDescriptor(_obj, 'incrementAndGetSync', [_dec], (_init = Object.getOwnPropertyDescriptor(_obj, 'incrementAndGetSync'), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'getAndIncrementSync', [_dec2], (_init2 = Object.getOwnPropertyDescriptor(_obj, 'getAndIncrementSync'), _init2 = _init2 ? _init2.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init2;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'decrementAndGetSync', [_dec3], (_init3 = Object.getOwnPropertyDescriptor(_obj, 'decrementAndGetSync'), _init3 = _init3 ? _init3.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init3;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'getAndDecrementSync', [_dec4], (_init4 = Object.getOwnPropertyDescriptor(_obj, 'getAndDecrementSync'), _init4 = _init4 ? _init4.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init4;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'resetSync', [_dec5], (_init5 = Object.getOwnPropertyDescriptor(_obj, 'resetSync'), _init5 = _init5 ? _init5.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init5;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'getSync', [_dec6], (_init6 = Object.getOwnPropertyDescriptor(_obj, 'getSync'), _init6 = _init6 ? _init6.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init6;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'addAndGetSync', [_dec7], (_init7 = Object.getOwnPropertyDescriptor(_obj, 'addAndGetSync'), _init7 = _init7 ? _init7.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init7;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'getAndAddSync', [_dec8], (_init8 = Object.getOwnPropertyDescriptor(_obj, 'getAndAddSync'), _init8 = _init8 ? _init8.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init8;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'compareAndSetSync', [_dec9], (_init9 = Object.getOwnPropertyDescriptor(_obj, 'compareAndSetSync'), _init9 = _init9 ? _init9.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init9;
  }
}), _obj)), _obj));

exports.default = Counters;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _desc, _value, _obj, _init, _init2, _init3, _init4, _init5, _init6, _init7, _init8, _init9;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _decorators = __webpack_require__(4);

var _methods = __webpack_require__(32);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Counter = function Counter(name) {
  _classCallCheck(this, Counter);

  if (!name || !_utils2.default.isString(name)) {
    throw new Error('Counter Name must be non empty String');
  }

  this.name = name;
};

exports.default = Counter;


var withCounterName = function withCounterName(method) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return method.apply(undefined, [this.name].concat(args));
  };
};

//TODO: will be removed when remove sync methods
var namespaceLabel = 'Backendless.Counter.of(<CounterName>)';

_extends(Counter.prototype, (_dec = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.incrementAndGet'), _dec2 = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.getAndIncrement'), _dec3 = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.decrementAndGet'), _dec4 = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.getAndDecrement'), _dec5 = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.reset'), _dec6 = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.get'), _dec7 = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.addAndGet'), _dec8 = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.getAndAdd'), _dec9 = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.compareAndSet'), (_obj = {
  incrementAndGetSync: _utils2.default.synchronized(withCounterName(_methods.incrementAndGet)),
  incrementAndGet: _utils2.default.promisified(withCounterName(_methods.incrementAndGet)),

  getAndIncrementSync: _utils2.default.synchronized(withCounterName(_methods.getAndIncrement)),
  getAndIncrement: _utils2.default.promisified(withCounterName(_methods.getAndIncrement)),

  decrementAndGetSync: _utils2.default.synchronized(withCounterName(_methods.decrementAndGet)),
  decrementAndGet: _utils2.default.promisified(withCounterName(_methods.decrementAndGet)),

  getAndDecrementSync: _utils2.default.synchronized(withCounterName(_methods.getAndDecrement)),
  getAndDecrement: _utils2.default.promisified(withCounterName(_methods.getAndDecrement)),

  resetSync: _utils2.default.synchronized(withCounterName(_methods.reset)),
  reset: _utils2.default.promisified(withCounterName(_methods.reset)),

  getSync: _utils2.default.synchronized(withCounterName(_methods.get)),
  get: _utils2.default.promisified(withCounterName(_methods.get)),

  addAndGetSync: _utils2.default.synchronized(withCounterName(_methods.addAndGet)),
  addAndGet: _utils2.default.promisified(withCounterName(_methods.addAndGet)),

  getAndAddSync: _utils2.default.synchronized(withCounterName(_methods.getAndAdd)),
  getAndAdd: _utils2.default.promisified(withCounterName(_methods.getAndAdd)),

  compareAndSetSync: _utils2.default.synchronized(withCounterName(_methods.compareAndSet)),
  compareAndSet: _utils2.default.promisified(withCounterName(_methods.compareAndSet))

}, (_applyDecoratedDescriptor(_obj, 'incrementAndGetSync', [_dec], (_init = Object.getOwnPropertyDescriptor(_obj, 'incrementAndGetSync'), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'getAndIncrementSync', [_dec2], (_init2 = Object.getOwnPropertyDescriptor(_obj, 'getAndIncrementSync'), _init2 = _init2 ? _init2.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init2;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'decrementAndGetSync', [_dec3], (_init3 = Object.getOwnPropertyDescriptor(_obj, 'decrementAndGetSync'), _init3 = _init3 ? _init3.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init3;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'getAndDecrementSync', [_dec4], (_init4 = Object.getOwnPropertyDescriptor(_obj, 'getAndDecrementSync'), _init4 = _init4 ? _init4.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init4;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'resetSync', [_dec5], (_init5 = Object.getOwnPropertyDescriptor(_obj, 'resetSync'), _init5 = _init5 ? _init5.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init5;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'getSync', [_dec6], (_init6 = Object.getOwnPropertyDescriptor(_obj, 'getSync'), _init6 = _init6 ? _init6.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init6;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'addAndGetSync', [_dec7], (_init7 = Object.getOwnPropertyDescriptor(_obj, 'addAndGetSync'), _init7 = _init7 ? _init7.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init7;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'getAndAddSync', [_dec8], (_init8 = Object.getOwnPropertyDescriptor(_obj, 'getAndAddSync'), _init8 = _init8 ? _init8.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init8;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'compareAndSetSync', [_dec9], (_init9 = Object.getOwnPropertyDescriptor(_obj, 'compareAndSetSync'), _init9 = _init9 ? _init9.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init9;
  }
}), _obj)), _obj)));

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.incrementAndGet = incrementAndGet;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _index = __webpack_require__(2);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function incrementAndGet(counterName, asyncHandler) {
  if (!counterName || !_utils2.default.isString(counterName)) {
    throw new Error('Counter Name must be non empty String');
  }

  if (asyncHandler) {
    asyncHandler = _utils2.default.wrapAsync(asyncHandler);
  }

  return _index2.default.put({
    url: _urls2.default.counterIncrementAndGet(counterName),
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decrementAndGet = decrementAndGet;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _index = __webpack_require__(2);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function decrementAndGet(counterName, asyncHandler) {
  if (!counterName || !_utils2.default.isString(counterName)) {
    throw new Error('Counter Name must be non empty String');
  }

  if (asyncHandler) {
    asyncHandler = _utils2.default.wrapAsync(asyncHandler);
  }

  return _index2.default.put({
    url: _urls2.default.counterDecrementAndGet(counterName),
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = get;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _index = __webpack_require__(2);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function get(counterName, asyncHandler) {
  if (!counterName || !_utils2.default.isString(counterName)) {
    throw new Error('Counter Name must be non empty String');
  }

  if (asyncHandler) {
    asyncHandler = _utils2.default.wrapAsync(asyncHandler);
  }

  return _index2.default.get({
    url: _urls2.default.counter(counterName),
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAndIncrement = getAndIncrement;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _index = __webpack_require__(2);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getAndIncrement(counterName, asyncHandler) {
  if (!counterName || !_utils2.default.isString(counterName)) {
    throw new Error('Counter Name must be non empty String');
  }

  if (asyncHandler) {
    asyncHandler = _utils2.default.wrapAsync(asyncHandler);
  }

  return _index2.default.put({
    url: _urls2.default.counterGetAndIncrement(counterName),
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAndDecrement = getAndDecrement;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _index = __webpack_require__(2);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getAndDecrement(counterName, asyncHandler) {
  if (!counterName || !_utils2.default.isString(counterName)) {
    throw new Error('Counter Name must be non empty String');
  }

  if (asyncHandler) {
    asyncHandler = _utils2.default.wrapAsync(asyncHandler);
  }

  return _index2.default.put({
    url: _urls2.default.counterGetAndDecrement(counterName),
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAndAdd = getAndAdd;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _index = __webpack_require__(2);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getAndAdd(counterName, value, asyncHandler) {
  if (!counterName || !_utils2.default.isString(counterName)) {
    throw new Error('Counter Name must be non empty String');
  }

  if (!_utils2.default.isNumber(value)) {
    throw new Error('Counter "value" must be Number');
  }

  if (asyncHandler) {
    asyncHandler = _utils2.default.wrapAsync(asyncHandler);
  }

  return _index2.default.put({
    url: _urls2.default.counterGetAndAdd(counterName),
    query: { value: value },
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addAndGet = addAndGet;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _index = __webpack_require__(2);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addAndGet(counterName, value, asyncHandler) {
  if (!counterName || !_utils2.default.isString(counterName)) {
    throw new Error('Counter Name must be non empty String');
  }

  if (!_utils2.default.isNumber(value)) {
    throw new Error('Counter Value must number');
  }

  if (asyncHandler) {
    asyncHandler = _utils2.default.wrapAsync(asyncHandler);
  }

  return _index2.default.put({
    url: _urls2.default.counterAddAndGet(counterName),
    query: { value: value },
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compareAndSet = compareAndSet;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _index = __webpack_require__(2);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function compareAndSet(counterName, expected, updated, asyncHandler) {
  if (!counterName || !_utils2.default.isString(counterName)) {
    throw new Error('Counter Name must be non empty String');
  }

  if (!_utils2.default.isNumber(expected)) {
    throw new Error('Counter "expected" value must be Number');
  }

  if (!_utils2.default.isNumber(updated)) {
    throw new Error('Counter "updated" value must be Number');
  }

  if (asyncHandler) {
    asyncHandler = _utils2.default.wrapAsync(asyncHandler);
  }

  return _index2.default.put({
    url: _urls2.default.counterCompareAndSet(counterName),
    query: { expected: expected, updatedvalue: updated },
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reset = reset;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _index = __webpack_require__(2);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function reset(counterName, asyncHandler) {
  if (!counterName || !_utils2.default.isString(counterName)) {
    throw new Error('Counter Name must be non empty String');
  }

  if (asyncHandler) {
    asyncHandler = _utils2.default.wrapAsync(asyncHandler);
  }

  return _index2.default.put({
    url: _urls2.default.counterReset(counterName),
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _desc, _value, _obj, _init, _init2, _init3, _init4, _init5, _init6;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _decorators = __webpack_require__(4);

var _put = __webpack_require__(77);

var _get = __webpack_require__(78);

var _remove = __webpack_require__(79);

var _contains = __webpack_require__(80);

var _expireIn = __webpack_require__(81);

var _expireAt = __webpack_require__(82);

var _parsers = __webpack_require__(33);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var Cache = (_dec = (0, _decorators.deprecated)('Backendless.Cache', 'Backendless.Cache.put'), _dec2 = (0, _decorators.deprecated)('Backendless.Cache', 'Backendless.Cache.get'), _dec3 = (0, _decorators.deprecated)('Backendless.Cache', 'Backendless.Cache.remove'), _dec4 = (0, _decorators.deprecated)('Backendless.Cache', 'Backendless.Cache.contains'), _dec5 = (0, _decorators.deprecated)('Backendless.Cache', 'Backendless.Cache.expireIn'), _dec6 = (0, _decorators.deprecated)('Backendless.Cache', 'Backendless.Cache.expireAt'), (_obj = {
  putSync: _utils2.default.synchronized(_put.put),
  put: _utils2.default.promisified(_put.put),

  getSync: _utils2.default.synchronized(_get.get),
  get: _utils2.default.promisified(_get.get),

  removeSync: _utils2.default.synchronized(_remove.remove),
  remove: _utils2.default.promisified(_remove.remove),

  containsSync: _utils2.default.synchronized(_contains.contains),
  contains: _utils2.default.promisified(_contains.contains),

  expireInSync: _utils2.default.synchronized(_expireIn.expireIn),
  expireIn: _utils2.default.promisified(_expireIn.expireIn),

  expireAtSync: _utils2.default.synchronized(_expireAt.expireAt),
  expireAt: _utils2.default.promisified(_expireAt.expireAt),

  //TODO: do we need it?
  setObjectFactory: function setObjectFactory(objectName, factoryMethod) {
    _parsers.Parsers.set(objectName, factoryMethod);
  }
}, (_applyDecoratedDescriptor(_obj, 'putSync', [_dec], (_init = Object.getOwnPropertyDescriptor(_obj, 'putSync'), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'getSync', [_dec2], (_init2 = Object.getOwnPropertyDescriptor(_obj, 'getSync'), _init2 = _init2 ? _init2.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init2;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'removeSync', [_dec3], (_init3 = Object.getOwnPropertyDescriptor(_obj, 'removeSync'), _init3 = _init3 ? _init3.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init3;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'containsSync', [_dec4], (_init4 = Object.getOwnPropertyDescriptor(_obj, 'containsSync'), _init4 = _init4 ? _init4.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init4;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'expireInSync', [_dec5], (_init5 = Object.getOwnPropertyDescriptor(_obj, 'expireInSync'), _init5 = _init5 ? _init5.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init5;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'expireAtSync', [_dec6], (_init6 = Object.getOwnPropertyDescriptor(_obj, 'expireAtSync'), _init6 = _init6 ? _init6.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init6;
  }
}), _obj)), _obj));

exports.default = Cache;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.put = put;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _async = __webpack_require__(3);

var _async2 = _interopRequireDefault(_async);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function put(key, value, timeToLive, asyncHandler) {
  if (!key || !_utils2.default.isString(key)) {
    throw new Error('Cache Key must be non empty String');
  }

  if (timeToLive instanceof _async2.default) {
    asyncHandler = timeToLive;
    timeToLive = undefined;
  }

  if (timeToLive && !_utils2.default.isNumber(timeToLive)) {
    throw new Error('Cache timeToLive must be Number');
  }

  if (_utils2.default.isObject(value) && value.constructor !== Object) {
    value.___class = value.___class || _utils2.default.getClassName(value);
  }

  if (asyncHandler) {
    asyncHandler = _utils2.default.wrapAsync(asyncHandler);
  }

  return _request2.default.put({
    url: _urls2.default.cacheItem(key) + (timeToLive ? '?timeout=' + timeToLive : ''),
    headers: { 'Content-Type': 'application/json' },
    data: JSON.stringify(value),
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = get;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _parsers = __webpack_require__(33);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function parseResult(result) {
  var className = result && result.___class;

  if (className) {
    var Class = _parsers.Parsers.get(className);

    if (Class) {
      result = new Class(result);
    }
  }

  return result;
}

function get(key, asyncHandler) {
  if (!key || !_utils2.default.isString(key)) {
    throw new Error('Cache Key must be non empty String');
  }

  if (asyncHandler) {
    asyncHandler = _utils2.default.wrapAsync(asyncHandler, parseResult);
  }

  var result = _request2.default.get({
    url: _urls2.default.cacheItem(key),
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });

  if (asyncHandler) {
    return result;
  }

  return parseResult(result);
}

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = remove;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function remove(key, asyncHandler) {
  if (!key || !_utils2.default.isString(key)) {
    throw new Error('Cache Key must be non empty String');
  }

  if (asyncHandler) {
    asyncHandler = _utils2.default.wrapAsync(asyncHandler);
  }

  return _request2.default.delete({
    url: _urls2.default.cacheItem(key),
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.contains = contains;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function contains(key, asyncHandler) {
  if (!key || !_utils2.default.isString(key)) {
    throw new Error('Cache Key must be non empty String');
  }

  if (asyncHandler) {
    asyncHandler = _utils2.default.wrapAsync(asyncHandler);
  }

  return _request2.default.get({
    url: _urls2.default.cacheItemCheck(key),
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.expireIn = expireIn;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function expireIn(key, seconds, asyncHandler) {
  if (!key || !_utils2.default.isString(key)) {
    throw new Error('Cache Key must be non empty String');
  }

  if (!seconds) {
    throw new Error('Cache Expiration must be number of seconds');
  }

  if (asyncHandler) {
    asyncHandler = _utils2.default.wrapAsync(asyncHandler);
  }

  return _request2.default.put({
    url: _urls2.default.cacheItemExpireIn(key) + '?timeout=' + seconds,
    data: {},
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.expireAt = expireAt;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function expireAt(key, timestamp, asyncHandler) {
  if (!key || !_utils2.default.isString(key)) {
    throw new Error('Cache Key must be non empty String');
  }

  if (!timestamp) {
    throw new Error('Cache Expiration must be timestamp or instance of Date');
  }

  timestamp = _utils2.default.isDate(timestamp) ? timestamp.getTime() : timestamp;

  if (asyncHandler) {
    asyncHandler = _utils2.default.wrapAsync(asyncHandler);
  }

  return _request2.default.put({
    url: _urls2.default.cacheItemExpireAt(key) + '?timestamp=' + timestamp,
    data: {},
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dec, _dec2, _dec3, _desc, _value, _obj, _init, _init2, _init3;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _decorators = __webpack_require__(4);

var _validatePlayPurchase = __webpack_require__(84);

var _cancelPlaySubscription = __webpack_require__(85);

var _getPlaySubscriptionStatus = __webpack_require__(86);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var Commerce = (_dec = (0, _decorators.deprecated)('Backendless.Commerce', 'Backendless.Commerce.validatePlayPurchase'), _dec2 = (0, _decorators.deprecated)('Backendless.Commerce', 'Backendless.Commerce.cancelPlaySubscription'), _dec3 = (0, _decorators.deprecated)('Backendless.Commerce', 'Backendless.Commerce.getPlaySubscriptionStatus'), (_obj = {
  validatePlayPurchaseSync: _utils2.default.synchronized(_validatePlayPurchase.validatePlayPurchase),
  validatePlayPurchase: _utils2.default.promisified(_validatePlayPurchase.validatePlayPurchase),

  cancelPlaySubscriptionSync: _utils2.default.synchronized(_cancelPlaySubscription.cancelPlaySubscription),
  cancelPlaySubscription: _utils2.default.promisified(_cancelPlaySubscription.cancelPlaySubscription),

  getPlaySubscriptionStatusSync: _utils2.default.synchronized(_getPlaySubscriptionStatus.getPlaySubscriptionStatus),
  getPlaySubscriptionStatus: _utils2.default.promisified(_getPlaySubscriptionStatus.getPlaySubscriptionStatus)

}, (_applyDecoratedDescriptor(_obj, 'validatePlayPurchaseSync', [_dec], (_init = Object.getOwnPropertyDescriptor(_obj, 'validatePlayPurchaseSync'), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'cancelPlaySubscriptionSync', [_dec2], (_init2 = Object.getOwnPropertyDescriptor(_obj, 'cancelPlaySubscriptionSync'), _init2 = _init2 ? _init2.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init2;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'getPlaySubscriptionStatusSync', [_dec3], (_init3 = Object.getOwnPropertyDescriptor(_obj, 'getPlaySubscriptionStatusSync'), _init3 = _init3 ? _init3.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init3;
  }
}), _obj)), _obj));

exports.default = Commerce;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validatePlayPurchase = validatePlayPurchase;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _validateStringArgument = __webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validatePlayPurchase(packageName, productId, token, asyncHandler) {
  (0, _validateStringArgument.validateStringArgument)('Package Name', packageName);
  (0, _validateStringArgument.validateStringArgument)('Product Id', productId);
  (0, _validateStringArgument.validateStringArgument)('Token', token);

  if (asyncHandler) {
    asyncHandler = _utils2.default.wrapAsync(asyncHandler);
  }

  return _request2.default.get({
    url: _urls2.default.commerceValidate(packageName, productId, token),
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cancelPlaySubscription = cancelPlaySubscription;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _validateStringArgument = __webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cancelPlaySubscription(packageName, subscriptionId, token, asyncHandler) {
  (0, _validateStringArgument.validateStringArgument)('Package Name', packageName);
  (0, _validateStringArgument.validateStringArgument)('Subscription Id', subscriptionId);
  (0, _validateStringArgument.validateStringArgument)('Token', token);

  if (asyncHandler) {
    asyncHandler = _utils2.default.wrapAsync(asyncHandler);
  }

  return _request2.default.post({
    url: _urls2.default.commerceSubCancel(packageName, subscriptionId, token),
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPlaySubscriptionStatus = getPlaySubscriptionStatus;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _validateStringArgument = __webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getPlaySubscriptionStatus(packageName, subscriptionId, token, asyncHandler) {
  (0, _validateStringArgument.validateStringArgument)('Package Name', packageName);
  (0, _validateStringArgument.validateStringArgument)('Subscription Id', subscriptionId);
  (0, _validateStringArgument.validateStringArgument)('Token', token);

  if (asyncHandler) {
    asyncHandler = _utils2.default.wrapAsync(asyncHandler);
  }

  return _request2.default.get({
    url: _urls2.default.commerceSubStatus(packageName, subscriptionId, token),
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _desc, _value, _obj, _init, _init2, _init3, _init4, _init5, _init6, _init7, _init8, _init9, _init10, _init11, _init12, _init13, _init14, _init15;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _decorators = __webpack_require__(4);

var _register = __webpack_require__(88);

var _roles = __webpack_require__(89);

var _login = __webpack_require__(90);

var _logout = __webpack_require__(91);

var _update = __webpack_require__(92);

var _describeClass = __webpack_require__(93);

var _restorePassword = __webpack_require__(94);

var _currentUser = __webpack_require__(5);

var _emailConfirmation = __webpack_require__(95);

var _social = __webpack_require__(96);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var Users = (_dec = (0, _decorators.deprecated)('Backendless.Users', 'Backendless.Users.register'), _dec2 = (0, _decorators.deprecated)('Backendless.Users', 'Backendless.Users.getUserRoles'), _dec3 = (0, _decorators.deprecated)('Backendless.Users', 'Backendless.Users.assignRole'), _dec4 = (0, _decorators.deprecated)('Backendless.Users', 'Backendless.Users.unassignRole'), _dec5 = (0, _decorators.deprecated)('Backendless.Users', 'Backendless.Users.login'), _dec6 = (0, _decorators.deprecated)('Backendless.Users', 'Backendless.Users.describeUserClass'), _dec7 = (0, _decorators.deprecated)('Backendless.Users', 'Backendless.Users.restorePassword'), _dec8 = (0, _decorators.deprecated)('Backendless.Users', 'Backendless.Users.logout'), _dec9 = (0, _decorators.deprecated)('Backendless.Users', 'Backendless.Users.getCurrentUser'), _dec10 = (0, _decorators.deprecated)('Backendless.Users', 'Backendless.Users.update'), _dec11 = (0, _decorators.deprecated)('Backendless.Users', 'Backendless.Users.loginWithFacebook'), _dec12 = (0, _decorators.deprecated)('Backendless.Users', 'Backendless.Users.loginWithGooglePlus'), _dec13 = (0, _decorators.deprecated)('Backendless.Users', 'Backendless.Users.loginWithTwitter'), _dec14 = (0, _decorators.deprecated)('Backendless.Users', 'Backendless.Users.isValidLogin'), _dec15 = (0, _decorators.deprecated)('Backendless.Users', 'Backendless.Users.resendEmailConfirmation'), (_obj = {
  registerSync: _utils2.default.synchronized(_register.register),
  register: _utils2.default.promisified(_register.register),

  getUserRolesSync: _utils2.default.synchronized(_roles.getUserRoles),
  getUserRoles: _utils2.default.promisified(_roles.getUserRoles),

  assignRoleSync: _utils2.default.synchronized(_roles.assignRole),
  assignRole: _utils2.default.promisified(_roles.assignRole),

  unassignRoleSync: _utils2.default.synchronized(_roles.unassignRole),
  unassignRole: _utils2.default.promisified(_roles.unassignRole),

  loginSync: _utils2.default.synchronized(_login.login),
  login: _utils2.default.promisified(_login.login),

  describeUserClassSync: _utils2.default.synchronized(_describeClass.describeUserClass),
  describeUserClass: _utils2.default.promisified(_describeClass.describeUserClass),

  restorePasswordSync: _utils2.default.synchronized(_restorePassword.restorePassword),
  restorePassword: _utils2.default.promisified(_restorePassword.restorePassword),

  logoutSync: _utils2.default.synchronized(_logout.logout),
  logout: _utils2.default.promisified(_logout.logout),

  getCurrentUserSync: _utils2.default.synchronized(_currentUser.getCurrentUser),
  getCurrentUser: _utils2.default.promisified(_currentUser.getCurrentUser),

  updateSync: _utils2.default.synchronized(_update.update),
  update: _utils2.default.promisified(_update.update),

  loginWithFacebookSync: _utils2.default.synchronized(_social.loginWithFacebook),
  loginWithFacebook: _utils2.default.promisified(_social.loginWithFacebook),
  loginWithFacebookSdk: _social.loginWithFacebookSdk,

  loginWithGooglePlusSync: _utils2.default.synchronized(_social.loginWithGooglePlus),
  loginWithGooglePlus: _utils2.default.promisified(_social.loginWithGooglePlus),
  loginWithGooglePlusSdk: _social.loginWithGooglePlusSdk,

  loginWithTwitterSync: _utils2.default.synchronized(_social.loginWithTwitter),
  loginWithTwitter: _utils2.default.promisified(_social.loginWithTwitter),

  isValidLoginSync: _utils2.default.synchronized(_currentUser.isValidLogin),
  isValidLogin: _utils2.default.promisified(_currentUser.isValidLogin),

  resendEmailConfirmationSync: _utils2.default.synchronized(_emailConfirmation.resendEmailConfirmation),
  resendEmailConfirmation: _utils2.default.promisified(_emailConfirmation.resendEmailConfirmation),

  loggedInUser: _currentUser.loggedInUser

}, (_applyDecoratedDescriptor(_obj, 'registerSync', [_dec], (_init = Object.getOwnPropertyDescriptor(_obj, 'registerSync'), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'getUserRolesSync', [_dec2], (_init2 = Object.getOwnPropertyDescriptor(_obj, 'getUserRolesSync'), _init2 = _init2 ? _init2.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init2;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'assignRoleSync', [_dec3], (_init3 = Object.getOwnPropertyDescriptor(_obj, 'assignRoleSync'), _init3 = _init3 ? _init3.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init3;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'unassignRoleSync', [_dec4], (_init4 = Object.getOwnPropertyDescriptor(_obj, 'unassignRoleSync'), _init4 = _init4 ? _init4.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init4;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'loginSync', [_dec5], (_init5 = Object.getOwnPropertyDescriptor(_obj, 'loginSync'), _init5 = _init5 ? _init5.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init5;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'describeUserClassSync', [_dec6], (_init6 = Object.getOwnPropertyDescriptor(_obj, 'describeUserClassSync'), _init6 = _init6 ? _init6.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init6;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'restorePasswordSync', [_dec7], (_init7 = Object.getOwnPropertyDescriptor(_obj, 'restorePasswordSync'), _init7 = _init7 ? _init7.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init7;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'logoutSync', [_dec8], (_init8 = Object.getOwnPropertyDescriptor(_obj, 'logoutSync'), _init8 = _init8 ? _init8.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init8;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'getCurrentUserSync', [_dec9], (_init9 = Object.getOwnPropertyDescriptor(_obj, 'getCurrentUserSync'), _init9 = _init9 ? _init9.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init9;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'updateSync', [_dec10], (_init10 = Object.getOwnPropertyDescriptor(_obj, 'updateSync'), _init10 = _init10 ? _init10.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init10;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'loginWithFacebookSync', [_dec11], (_init11 = Object.getOwnPropertyDescriptor(_obj, 'loginWithFacebookSync'), _init11 = _init11 ? _init11.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init11;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'loginWithGooglePlusSync', [_dec12], (_init12 = Object.getOwnPropertyDescriptor(_obj, 'loginWithGooglePlusSync'), _init12 = _init12 ? _init12.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init12;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'loginWithTwitterSync', [_dec13], (_init13 = Object.getOwnPropertyDescriptor(_obj, 'loginWithTwitterSync'), _init13 = _init13 ? _init13.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init13;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'isValidLoginSync', [_dec14], (_init14 = Object.getOwnPropertyDescriptor(_obj, 'isValidLoginSync'), _init14 = _init14 ? _init14.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init14;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'resendEmailConfirmationSync', [_dec15], (_init15 = Object.getOwnPropertyDescriptor(_obj, 'resendEmailConfirmationSync'), _init15 = _init15 ? _init15.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init15;
  }
}), _obj)), _obj));

exports.default = Users;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.register = register;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _async = __webpack_require__(3);

var _async2 = _interopRequireDefault(_async);

var _user = __webpack_require__(8);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function register(user /** async */) {
  var responder = _utils2.default.extractResponder(arguments);

  var isAsync = !!responder;

  var result = _request2.default.post({
    url: _urls2.default.userRegister(),
    isAsync: isAsync,
    asyncHandler: responder && wrapAsync(responder),
    data: user
  });

  return isAsync ? result : parseResponse(result);
}

function parseResponse(data) {
  return _utils2.default.deepExtend(new _user2.default(), data);
}

function wrapAsync(asyncHandler) {
  var onSuccess = function onSuccess(data) {
    return asyncHandler.success(parseResponse(data));
  };
  var onError = function onError(error) {
    return asyncHandler.fault(error);
  };

  return new _async2.default(onSuccess, onError);
}

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unassignRole = exports.assignRole = undefined;
exports.getUserRoles = getUserRoles;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _utils3 = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function roleHelper(identity, rolename, asyncHandler, operation) {
  if (!identity) {
    throw new Error('User identity can not be empty');
  }

  if (!rolename) {
    throw new Error('Rolename can not be empty');
  }

  var responder = _utils2.default.extractResponder(arguments);

  return _request2.default.post({
    url: _urls2.default.userRoleOperation(operation),
    isAsync: !!responder,
    asyncHandler: responder,
    data: { user: identity, roleName: rolename }
  });
}

function getUserRoles() /** async */{
  var responder = _utils2.default.extractResponder(arguments);
  var isAsync = !!responder;

  var result = _request2.default.get({
    url: _urls2.default.userRoles(),
    isAsync: isAsync,
    asyncHandler: responder
  });

  return isAsync ? result : (0, _utils3.parseResponse)(result);
}

var assignRole = exports.assignRole = function assignRole(identity, rolename, asyncHandler) {
  return roleHelper(identity, rolename, asyncHandler, 'assignRole');
};

var unassignRole = exports.unassignRole = function unassignRole(identity, rolename, asyncHandler) {
  return roleHelper(identity, rolename, asyncHandler, 'unassignRole');
};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = login;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _localCache = __webpack_require__(10);

var _localCache2 = _interopRequireDefault(_localCache);

var _currentUser = __webpack_require__(5);

var _utils3 = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function login(login, password, stayLoggedIn) /** async */{
  if (!login) {
    throw new Error('Login can not be empty');
  }

  if (!password) {
    throw new Error('Password can not be empty');
  }

  stayLoggedIn = stayLoggedIn === true;

  _localCache2.default.remove('user-token');
  _localCache2.default.remove('current-user-id');
  _localCache2.default.set('stayLoggedIn', false);

  var responder = _utils2.default.extractResponder(arguments);
  var isAsync = !!responder;

  if (responder) {
    responder = (0, _utils3.wrapAsync)(responder, stayLoggedIn);
  }

  var data = {
    login: login,
    password: password
  };

  var result = _request2.default.post({
    url: _urls2.default.userLogin(),
    isAsync: isAsync,
    asyncHandler: responder,
    data: data
  });

  if (!isAsync && result) {
    (0, _currentUser.setLocalCurrentUser)((0, _utils3.parseResponse)(result, stayLoggedIn));

    result = (0, _utils3.getUserFromResponse)((0, _currentUser.getLocalCurrentUser)());
  }

  return result;
}

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logout = logout;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _localCache = __webpack_require__(10);

var _localCache2 = _interopRequireDefault(_localCache);

var _currentUser = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function logout() /** async */{
  var responder = _utils2.default.extractResponder(arguments);
  var isAsync = !!responder;
  var errorCallback = isAsync ? responder.fault : null;
  var successCallback = isAsync ? responder.success : null;
  var result = {};

  var logoutUser = function logoutUser() {
    _localCache2.default.remove('user-token');
    _localCache2.default.remove('current-user-id');
    _localCache2.default.remove('stayLoggedIn');
    (0, _currentUser.setLocalCurrentUser)(null);
  };

  var onLogoutSuccess = function onLogoutSuccess() {
    logoutUser();
    if (_utils2.default.isFunction(successCallback)) {
      successCallback();
    }
  };

  var onLogoutError = function onLogoutError(e) {
    if (_utils2.default.isObject(e) && [3064, 3091, 3090, 3023].indexOf(e.code) !== -1) {
      logoutUser();
    }
    if (_utils2.default.isFunction(errorCallback)) {
      errorCallback(e);
    }
  };

  if (responder) {
    responder.fault = onLogoutError;
    responder.success = onLogoutSuccess;
  }

  try {
    result = _request2.default.get({
      url: _urls2.default.userLogout(),
      isAsync: isAsync,
      asyncHandler: responder
    });
  } catch (e) {
    onLogoutError(e);
  }

  if (isAsync) {
    return result;
  } else {
    logoutUser();
  }
}

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.update = update;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _async = __webpack_require__(3);

var _async2 = _interopRequireDefault(_async);

var _user = __webpack_require__(8);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function update(user /** async */) {
  var responder = _utils2.default.extractResponder(arguments);

  var isAsync = !!responder;

  var result = _request2.default.put({
    url: _urls2.default.userObject(user.objectId),
    isAsync: isAsync,
    asyncHandler: responder && wrapAsync(responder),
    data: user
  });

  return isAsync ? result : parseResponse(result);
}

function parseResponse(data) {
  return _utils2.default.deepExtend(new _user2.default(), data);
}

function wrapAsync(asyncHandler) {
  //TODO: will be removed after remove all the "{methodName}Sync" methods

  var onSuccess = function onSuccess(data) {
    return asyncHandler.success(parseResponse(data));
  };
  var onError = function onError(error) {
    return asyncHandler.fault(error);
  };

  return new _async2.default(onSuccess, onError);
}

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.describeUserClass = describeUserClass;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function describeUserClass() /** async */{
  var responder = _utils2.default.extractResponder(arguments);
  var isAsync = !!responder;

  return _request2.default.get({
    url: _urls2.default.userClassProps(),
    isAsync: isAsync,
    asyncHandler: responder
  });
}

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.restorePassword = restorePassword;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function restorePassword(emailAddress /** async */) {
  if (!emailAddress) {
    throw new Error('emailAddress can not be empty');
  }

  var responder = _utils2.default.extractResponder(arguments);
  var isAsync = !!responder;

  return _request2.default.get({
    url: _urls2.default.userRestorePassword(emailAddress),
    isAsync: isAsync,
    asyncHandler: responder
  });
}

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resendEmailConfirmation = resendEmailConfirmation;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _async = __webpack_require__(3);

var _async2 = _interopRequireDefault(_async);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function resendEmailConfirmation(emailAddress /** async */) {
  if (!emailAddress || emailAddress instanceof _async2.default) {
    throw new Error('Email cannot be empty');
  }

  var responder = _utils2.default.extractResponder(arguments);
  var isAsync = !!responder;

  return _request2.default.post({
    url: _urls2.default.userResendConfirmation(emailAddress),
    isAsync: isAsync,
    asyncHandler: responder
  });
}

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _twitter = __webpack_require__(97);

Object.defineProperty(exports, 'loginWithTwitter', {
  enumerable: true,
  get: function get() {
    return _twitter.loginWithTwitter;
  }
});

var _facebook = __webpack_require__(99);

Object.defineProperty(exports, 'loginWithFacebook', {
  enumerable: true,
  get: function get() {
    return _facebook.loginWithFacebook;
  }
});
Object.defineProperty(exports, 'loginWithFacebookSdk', {
  enumerable: true,
  get: function get() {
    return _facebook.loginWithFacebookSdk;
  }
});

var _google = __webpack_require__(100);

Object.defineProperty(exports, 'loginWithGooglePlus', {
  enumerable: true,
  get: function get() {
    return _google.loginWithGooglePlus;
  }
});
Object.defineProperty(exports, 'loginWithGooglePlusSdk', {
  enumerable: true,
  get: function get() {
    return _google.loginWithGooglePlusSdk;
  }
});

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginWithTwitter = undefined;

var _login = __webpack_require__(19);

var loginWithTwitter = exports.loginWithTwitter = function loginWithTwitter(fieldsMapping, stayLoggedIn, asyncHandler) {
  return (0, _login.loginSocial)('Twitter', fieldsMapping, null, null, stayLoggedIn, asyncHandler);
};

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//TODO: refactor me
var SocialContainer = exports.SocialContainer = function () {
  function SocialContainer(socialType, container) {
    _classCallCheck(this, SocialContainer);

    this.socialType = socialType;
    this.container = container;

    if (container) {
      this.processContainer();
    } else {
      this.createContainer();
    }
  }

  _createClass(SocialContainer, [{
    key: 'processContainer',
    value: function processContainer() {
      var _this = this;

      var client = void 0;

      var container = this.container[0];

      var loadingMsg = document.createElement('div');
      loadingMsg.innerHTML = 'Loading...';

      container.appendChild(loadingMsg);
      container.style.cursor = 'wait';

      this.closeContainer = function () {
        container.style.cursor = 'default';
        container.removeChild(client);
      };

      this.removeLoading = function () {
        container.removeChild(loadingMsg);
      };

      this.doAuthorizationActivity = function (url) {
        _this.removeLoading();

        client = document.createElement('iframe');
        client.frameBorder = 0;
        client.width = container.style.width;
        client.height = container.style.height;
        client.id = 'SocialAuthFrame';
        client.setAttribute('src', url + '&amp;output=embed');
        container.appendChild(client);

        client.onload = function () {
          container.style.cursor = 'default';
        };
      };
    }
  }, {
    key: 'createContainer',
    value: function createContainer() {
      var container = window.open('', this.socialType + ' authorization', 'resizable=yes, scrollbars=yes, titlebar=yes, top=10, left=10');

      var body = container.document.getElementsByTagName('body')[0];
      body.innerHTML = 'Loading...';
      container.document.getElementsByTagName('html')[0].style.cursor = 'wait';

      this.closeContainer = function () {
        container.close();
      };

      this.removeLoading = function () {
        body.innerHTML = null;
      };

      this.doAuthorizationActivity = function (url) {
        container.location.href = url;
        container.onload = function () {
          container.document.getElementsByTagName('html')[0].style.cursor = 'default';
        };
      };
    }
  }]);

  return SocialContainer;
}();

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginWithFacebookSdk = exports.loginWithFacebook = undefined;

var _async = __webpack_require__(3);

var _async2 = _interopRequireDefault(_async);

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _login = __webpack_require__(19);

var _request = __webpack_require__(34);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loginWithFacebook = exports.loginWithFacebook = function loginWithFacebook(fieldsMapping, permissions, stayLoggedIn, asyncHandler) {
  console.warn('Method "loginWithFacebook" is deprecated. and will be removed in the nearest release.\n' + 'Use method "loginWithFacebookSdk" instead.');

  return (0, _login.loginSocial)('Facebook', fieldsMapping, permissions, null, stayLoggedIn, asyncHandler);
};

var loginWithFacebookSdk = exports.loginWithFacebookSdk = function loginWithFacebookSdk(accessToken, fieldsMapping, stayLoggedIn, options) {
  _utils2.default.checkPromiseSupport();

  if (typeof accessToken !== 'string') {
    options = stayLoggedIn;
    stayLoggedIn = fieldsMapping;
    fieldsMapping = accessToken;
    accessToken = null;
  }

  return new Promise(function (resolve, reject) {
    function loginRequest() {
      (0, _request.sendSocialLoginRequest)(accessToken, 'facebook', fieldsMapping, stayLoggedIn, new _async2.default(resolve, reject));
    }

    if (accessToken || !fieldsMapping) {
      return loginRequest();
    }

    console.warn('You must pass "accessToken" as the first argument into "loginWithFacebook(accessToken:String, fieldsMapping:Object, stayLoggedIn?:Boolean)" method');

    if (!FB) {
      return reject(new Error('Facebook SDK not found'));
    }

    FB.getLoginStatus(function (response) {
      if (response.status === 'connected') {
        loginRequest(accessToken = response.authResponse.accessToken);
      } else {
        FB.login(function (response) {
          return loginRequest(accessToken = response.authResponse.accessToken);
        }, options);
      }
    });
  });
};

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginWithGooglePlusSdk = exports.loginWithGooglePlus = undefined;

var _async = __webpack_require__(3);

var _async2 = _interopRequireDefault(_async);

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _login = __webpack_require__(19);

var _request = __webpack_require__(34);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loginWithGooglePlus = exports.loginWithGooglePlus = function loginWithGooglePlus(fieldsMapping, permissions, container, stayLoggedIn, asyncHandler) {
  console.warn('Method "loginWithGooglePlus" is deprecated. and will be removed in the nearest release.\n' + 'Use method "loginWithGooglePlusSdk" instead.');

  return (0, _login.loginSocial)('GooglePlus', fieldsMapping, permissions, container, stayLoggedIn, asyncHandler);
};

var loginWithGooglePlusSdk = exports.loginWithGooglePlusSdk = function loginWithGooglePlusSdk(accessToken, fieldsMapping, stayLoggedIn) {
  _utils2.default.checkPromiseSupport();

  if (typeof accessToken !== 'string') {
    stayLoggedIn = fieldsMapping;
    fieldsMapping = accessToken;
    accessToken = null;
  }

  return new Promise(function (resolve, reject) {
    function loginRequest() {
      (0, _request.sendSocialLoginRequest)(accessToken, 'googleplus', fieldsMapping, stayLoggedIn, new _async2.default(resolve, reject));
    }

    if (accessToken || !fieldsMapping) {
      return loginRequest();
    }

    console.warn('You must pass "accessToken" as the first argument into "loginWithGooglePlusSdk(accessToken:String, fieldsMapping:Object, stayLoggedIn?:Boolean)" method');

    if (!gapi) {
      return reject(new Error('Google Plus SDK not found'));
    }

    gapi.auth.authorize({
      client_id: fieldsMapping.client_id,
      scope: 'https://www.googleapis.com/auth/plus.login'
    }, function (_ref) {
      var access_token = _ref.access_token,
          error = _ref.error;

      if (error) {
        reject(error);
      } else {
        loginRequest(accessToken = access_token);
      }
    });
  });
};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dec, _desc, _value, _obj, _init;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _decorators = __webpack_require__(4);

var _invokeServiceMethod = __webpack_require__(102);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var CustomServices = (_dec = (0, _decorators.deprecated)('Backendless.CustomServices', 'Backendless.CustomServices.invoke'), (_obj = {
  invokeSync: _utils2.default.synchronized(_invokeServiceMethod.invokeServiceMethod),
  invoke: _utils2.default.promisified(_invokeServiceMethod.invokeServiceMethod)

}, (_applyDecoratedDescriptor(_obj, 'invokeSync', [_dec], (_init = Object.getOwnPropertyDescriptor(_obj, 'invokeSync'), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _obj)), _obj));

exports.default = CustomServices;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.invokeServiceMethod = invokeServiceMethod;

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _async = __webpack_require__(3);

var _async2 = _interopRequireDefault(_async);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function invokeServiceMethod(serviceName, method, parameters, asyncHandler) {
  if (parameters instanceof _async2.default) {
    asyncHandler = parameters;
    parameters = undefined;
  }

  return _request2.default.post({
    url: _urls2.default.blServiceMethod(serviceName, method),
    data: parameters,
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dec, _desc, _value, _obj, _init;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _decorators = __webpack_require__(4);

var _dispatchEvent = __webpack_require__(104);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var Events = (_dec = (0, _decorators.deprecated)('Backendless.Events', 'Backendless.Events.dispatch'), (_obj = {
  dispatchSync: _utils2.default.synchronized(_dispatchEvent.dispatchEvent),
  dispatch: _utils2.default.promisified(_dispatchEvent.dispatchEvent)

}, (_applyDecoratedDescriptor(_obj, 'dispatchSync', [_dec], (_init = Object.getOwnPropertyDescriptor(_obj, 'dispatchSync'), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _obj)), _obj));

exports.default = Events;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dispatchEvent = dispatchEvent;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _async = __webpack_require__(3);

var _async2 = _interopRequireDefault(_async);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function dispatchEvent(eventName, eventArgs, asyncHandler) {
  if (!eventName || !_utils2.default.isString(eventName)) {
    throw new Error('Event Name must be provided and must be not an empty STRING!');
  }

  if (eventArgs instanceof _async2.default) {
    asyncHandler = eventArgs;
    eventArgs = undefined;
  }

  if (!_utils2.default.isObject(eventArgs)) {
    eventArgs = {};
  }

  if (asyncHandler) {
    asyncHandler = _utils2.default.wrapAsync(asyncHandler);
  }

  return _request2.default.post({
    url: _urls2.default.blEvent(eventName),
    data: eventArgs,
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _desc, _value, _obj, _init, _init2, _init3, _init4, _init5, _init6, _init7, _init8, _init9, _init10, _init11, _init12, _init13, _init14, _init15, _init16;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _decorators = __webpack_require__(4);

var _constants = __webpack_require__(35);

var _utils3 = __webpack_require__(20);

var _utils4 = _interopRequireDefault(_utils3);

var _trackerMonitor = __webpack_require__(36);

var _trackerMonitor2 = _interopRequireDefault(_trackerMonitor);

var _cluster = __webpack_require__(13);

var _cluster2 = _interopRequireDefault(_cluster);

var _point = __webpack_require__(7);

var _point2 = _interopRequireDefault(_point);

var _query = __webpack_require__(14);

var _query2 = _interopRequireDefault(_query);

var _savePoint = __webpack_require__(108);

var _addCategory = __webpack_require__(109);

var _deleteCategory = __webpack_require__(110);

var _getCategories = __webpack_require__(111);

var _deletePoint = __webpack_require__(112);

var _getPointsCount = __webpack_require__(113);

var _getClusterPoints = __webpack_require__(114);

var _loadPoints = __webpack_require__(115);

var _loadMetadata = __webpack_require__(116);

var _relativeFind = __webpack_require__(117);

var _loadFencePoints = __webpack_require__(118);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var Geo = (_dec = (0, _decorators.deprecated)('Backendless.Geo', 'Backendless.Geo.savePoint'), _dec2 = (0, _decorators.deprecated)('Backendless.Geo', 'Backendless.Geo.find'), _dec3 = (0, _decorators.deprecated)('Backendless.Geo', 'Backendless.Geo.loadMetadata'), _dec4 = (0, _decorators.deprecated)('Backendless.Geo', 'Backendless.Geo.getClusterPoints'), _dec5 = (0, _decorators.deprecated)('Backendless.Geo', 'Backendless.Geo.relativeFind'), _dec6 = (0, _decorators.deprecated)('Backendless.Geo', 'Backendless.Geo.addCategory'), _dec7 = (0, _decorators.deprecated)('Backendless.Geo', 'Backendless.Geo.getCategories'), _dec8 = (0, _decorators.deprecated)('Backendless.Geo', 'Backendless.Geo.deleteCategory'), _dec9 = (0, _decorators.deprecated)('Backendless.Geo', 'Backendless.Geo.deletePoint'), _dec10 = (0, _decorators.deprecated)('Backendless.Geo', 'Backendless.Geo.getFencePoints'), _dec11 = (0, _decorators.deprecated)('Backendless.Geo', 'Backendless.Geo.getGeopointCount'), _dec12 = (0, _decorators.deprecated)('Backendless.Geo', 'Backendless.Geo.runOnEnterAction'), _dec13 = (0, _decorators.deprecated)('Backendless.Geo', 'Backendless.Geo.runOnStayAction'), _dec14 = (0, _decorators.deprecated)('Backendless.Geo', 'Backendless.Geo.runOnExitAction'), _dec15 = (0, _decorators.deprecated)('Backendless.Geo', 'Backendless.Geo.startGeofenceMonitoringWithInAppCallback'), _dec16 = (0, _decorators.deprecated)('Backendless.Geo', 'Backendless.Geo.startGeofenceMonitoringWithRemoteCallback'), (_obj = {

  EARTH_RADIUS: _constants.EARTH_RADIUS,
  UNITS: _constants.UNITS,

  Utils: _utils4.default,

  Cluster: _cluster2.default,
  Point: _point2.default,
  Query: _query2.default,

  /** @deprecated */
  addPoint: function addPoint() /** geopoint, async */{
    return this.savePoint.apply(this, arguments);
  },

  savePointSync: _utils2.default.synchronized(_savePoint.savePoint),
  savePoint: _utils2.default.promisified(_savePoint.savePoint),

  findSync: _utils2.default.synchronized(_loadPoints.loadPoints),
  find: _utils2.default.promisified(_loadPoints.loadPoints),

  loadMetadataSync: _utils2.default.synchronized(_loadMetadata.loadMetadata),
  loadMetadata: _utils2.default.promisified(_loadMetadata.loadMetadata),

  getClusterPointsSync: _utils2.default.synchronized(_getClusterPoints.getClusterPoints),
  getClusterPoints: _utils2.default.promisified(_getClusterPoints.getClusterPoints),

  relativeFindSync: _utils2.default.synchronized(_relativeFind.relativeFind),
  relativeFind: _utils2.default.promisified(_relativeFind.relativeFind),

  addCategorySync: _utils2.default.synchronized(_addCategory.addCategory),
  addCategory: _utils2.default.promisified(_addCategory.addCategory),

  getCategoriesSync: _utils2.default.synchronized(_getCategories.getCategories),
  getCategories: _utils2.default.promisified(_getCategories.getCategories),

  deleteCategorySync: _utils2.default.synchronized(_deleteCategory.deleteCategory),
  deleteCategory: _utils2.default.promisified(_deleteCategory.deleteCategory),

  deletePointSync: _utils2.default.synchronized(_deletePoint.deletePoint),
  deletePoint: _utils2.default.promisified(_deletePoint.deletePoint),

  getFencePointsSync: _utils2.default.synchronized(_loadFencePoints.loadFencePoints),
  getFencePoints: _utils2.default.promisified(_loadFencePoints.loadFencePoints),

  getGeopointCountSync: _utils2.default.synchronized(_getPointsCount.getGeopointCount),
  getGeopointCount: _utils2.default.promisified(_getPointsCount.getGeopointCount),

  runOnEnterActionSync: _trackerMonitor2.default.runOnEnterActionSync,
  runOnEnterAction: _trackerMonitor2.default.runOnEnterAction,

  runOnStayActionSync: _trackerMonitor2.default.runOnStayActionSync,
  runOnStayAction: _trackerMonitor2.default.runOnStayAction,

  runOnExitActionSync: _trackerMonitor2.default.runOnExitActionSync,
  runOnExitAction: _trackerMonitor2.default.runOnExitAction,

  startGeofenceMonitoringWithInAppCallbackSync: _trackerMonitor2.default.startGeofenceMonitoringWithInAppCallbackSync,
  startGeofenceMonitoringWithInAppCallback: _trackerMonitor2.default.startGeofenceMonitoringWithInAppCallback,

  startGeofenceMonitoringWithRemoteCallbackSync: _trackerMonitor2.default.startGeofenceMonitoringWithRemoteCallbackSync,
  startGeofenceMonitoringWithRemoteCallback: _trackerMonitor2.default.startGeofenceMonitoringWithRemoteCallback,

  stopGeofenceMonitoring: _trackerMonitor2.default.stopGeofenceMonitoring
}, (_applyDecoratedDescriptor(_obj, 'savePointSync', [_dec], (_init = Object.getOwnPropertyDescriptor(_obj, 'savePointSync'), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'findSync', [_dec2], (_init2 = Object.getOwnPropertyDescriptor(_obj, 'findSync'), _init2 = _init2 ? _init2.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init2;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'loadMetadataSync', [_dec3], (_init3 = Object.getOwnPropertyDescriptor(_obj, 'loadMetadataSync'), _init3 = _init3 ? _init3.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init3;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'getClusterPointsSync', [_dec4], (_init4 = Object.getOwnPropertyDescriptor(_obj, 'getClusterPointsSync'), _init4 = _init4 ? _init4.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init4;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'relativeFindSync', [_dec5], (_init5 = Object.getOwnPropertyDescriptor(_obj, 'relativeFindSync'), _init5 = _init5 ? _init5.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init5;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'addCategorySync', [_dec6], (_init6 = Object.getOwnPropertyDescriptor(_obj, 'addCategorySync'), _init6 = _init6 ? _init6.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init6;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'getCategoriesSync', [_dec7], (_init7 = Object.getOwnPropertyDescriptor(_obj, 'getCategoriesSync'), _init7 = _init7 ? _init7.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init7;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'deleteCategorySync', [_dec8], (_init8 = Object.getOwnPropertyDescriptor(_obj, 'deleteCategorySync'), _init8 = _init8 ? _init8.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init8;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'deletePointSync', [_dec9], (_init9 = Object.getOwnPropertyDescriptor(_obj, 'deletePointSync'), _init9 = _init9 ? _init9.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init9;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'getFencePointsSync', [_dec10], (_init10 = Object.getOwnPropertyDescriptor(_obj, 'getFencePointsSync'), _init10 = _init10 ? _init10.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init10;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'getGeopointCountSync', [_dec11], (_init11 = Object.getOwnPropertyDescriptor(_obj, 'getGeopointCountSync'), _init11 = _init11 ? _init11.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init11;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'runOnEnterActionSync', [_dec12], (_init12 = Object.getOwnPropertyDescriptor(_obj, 'runOnEnterActionSync'), _init12 = _init12 ? _init12.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init12;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'runOnStayActionSync', [_dec13], (_init13 = Object.getOwnPropertyDescriptor(_obj, 'runOnStayActionSync'), _init13 = _init13 ? _init13.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init13;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'runOnExitActionSync', [_dec14], (_init14 = Object.getOwnPropertyDescriptor(_obj, 'runOnExitActionSync'), _init14 = _init14 ? _init14.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init14;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'startGeofenceMonitoringWithInAppCallbackSync', [_dec15], (_init15 = Object.getOwnPropertyDescriptor(_obj, 'startGeofenceMonitoringWithInAppCallbackSync'), _init15 = _init15 ? _init15.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init15;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'startGeofenceMonitoringWithRemoteCallbackSync', [_dec16], (_init16 = Object.getOwnPropertyDescriptor(_obj, 'startGeofenceMonitoringWithRemoteCallbackSync'), _init16 = _init16 ? _init16.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init16;
  }
}), _obj)), _obj));

exports.default = Geo;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startMonitoring = startMonitoring;

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _point = __webpack_require__(7);

var _point2 = _interopRequireDefault(_point);

var _utils = __webpack_require__(20);

var _utils2 = _interopRequireDefault(_utils);

var _tracker = __webpack_require__(21);

var _tracker2 = _interopRequireDefault(_tracker);

var _fenceActions = __webpack_require__(37);

var _fenceActions2 = _interopRequireDefault(_fenceActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INTERVAL = 5000;

//TODO: refactor me

function getFences(geoFence) {
  return _request2.default.get({
    url: _urls2.default.geoFences(geoFence)
  });
}

function isDefiniteRect(nwPoint, sePoint) {
  return nwPoint != null && sePoint != null;
}

var TypesMapper = {
  'RECT': function RECT(fence) {
    fence.nwPoint = fence.nodes[0];
    fence.sePoint = fence.nodes[1];
  },
  'CIRCLE': function CIRCLE(fence) {
    var outRect = _utils2.default.getOutRectangle(fence.nodes[0], fence.nodes[1]);
    fence.nwPoint = {
      latitude: outRect[0],
      longitude: outRect[1]
    };
    fence.sePoint = {
      latitude: outRect[2],
      longitude: outRect[3]
    };
  },
  'SHAPE': function SHAPE(fence) {
    var outRect = _utils2.default.getOutRectangle(fence.nodes[0], fence.nodes[1]);
    fence.nwPoint = {
      latitude: outRect[0],
      longitude: outRect[1]
    };
    fence.sePoint = {
      latitude: outRect[2],
      longitude: outRect[3]
    };
  }
};

function checkPosition(geofenceName, coords, fences, geoPoint, GeoFenceCallback, lastResults, asyncHandler) {
  var tracker = _tracker2.default.get();

  for (var k = 0; k < tracker._trackedFences.length; k++) {
    var _trackedFences = tracker._trackedFences[k];

    var isInFence = isDefiniteRect(_trackedFences.nwPoint, _trackedFences.sePoint) && _utils2.default.isPointInFence(coords, _trackedFences);

    var rule = null;

    if (isInFence !== lastResults[tracker._trackedFences[k].geofenceName]) {
      if (lastResults[tracker._trackedFences[k].geofenceName]) {
        rule = 'onexit';
      } else {
        rule = 'onenter';
      }

      lastResults[tracker._trackedFences[k].geofenceName] = isInFence;
    }

    if (rule) {
      (function () {
        var duration = tracker._trackedFences[k].onStayDuration * 1000;

        var timeoutFuncInApp = function timeoutFuncInApp(savedK, savedCoords, duration) {
          var callBack = function callBack() {
            GeoFenceCallback['onstay'](tracker._trackedFences[savedK].geofenceName, tracker._trackedFences[savedK].objectId, savedCoords.latitude, savedCoords.longitude);
          };

          tracker._timers[tracker._trackedFences[savedK].geofenceName] = setTimeout(callBack, duration);
        };

        var timeoutFuncRemote = function timeoutFuncRemote(savedK, savedCoords, duration, geoPoint) {
          var callBack = function callBack() {
            _fenceActions2.default.run('onstay', tracker._trackedFences[savedK].geofenceName, geoPoint, asyncHandler);
          };

          tracker._timers[tracker._trackedFences[savedK].geofenceName] = setTimeout(callBack, duration);
        };

        if (GeoFenceCallback) {
          if (rule === 'onenter') {
            GeoFenceCallback[rule](tracker._trackedFences[k].geofenceName, tracker._trackedFences[k].objectId, coords.latitude, coords.longitude);

            if (duration > -1) {
              (function (k, coords, duration) {
                return timeoutFuncInApp(k, coords, duration);
              })(k, coords, duration);
            } else {
              GeoFenceCallback['onstay'](tracker._trackedFences[k].geofenceName, tracker._trackedFences[k].objectId, coords.latitude, coords.longitude);
            }
          } else {
            clearTimeout(tracker._timers[tracker._trackedFences[k].geofenceName]);
            GeoFenceCallback[rule](tracker._trackedFences[k].geofenceName, tracker._trackedFences[k].objectId, coords.latitude, coords.longitude);
          }
        } else if (geoPoint) {
          geoPoint.latitude = coords.latitude;
          geoPoint.longitude = coords.longitude;

          if (rule === 'onenter') {
            _fenceActions2.default.run(rule, tracker._trackedFences[k].geofenceName, geoPoint, asyncHandler);

            if (duration > -1) {
              (function (k, coords, duration, geoPoint) {
                return timeoutFuncRemote(k, coords, duration, geoPoint);
              })(k, coords, duration, geoPoint);
            } else {
              _fenceActions2.default.run('onstay', tracker._trackedFences[k].geofenceName, geoPoint, asyncHandler);
            }
          } else {
            clearTimeout(tracker._timers[tracker._trackedFences[k].geofenceName]);
            _fenceActions2.default.run(rule, tracker._trackedFences[k].geofenceName, geoPoint, asyncHandler);
          }
        }
      })();
    }
  }
}

function startMonitoring(geofenceName, secondParam, asyncHandler) {
  var tracker = _tracker2.default.get();

  var isGeoPoint = false;

  if (secondParam instanceof _point2.default) {
    isGeoPoint = true;
  }

  var fences = getFences(geofenceName);

  for (var ii = 0; ii < fences.length; ii++) {
    if (!_containsByPropName(tracker._trackedFences, fences[ii], 'geofenceName')) {
      TypesMapper[fences[ii].type](fences[ii]);
      tracker._lastResults[fences[ii].geofenceName] = false;
      tracker._trackedFences.push(fences[ii]);
    }
  }

  function _containsByPropName(collection, object, name) {
    var length = collection.length;
    var result = false;

    for (var i = 0; i < length; i++) {
      if (result = collection[i][name] === object[name]) {
        break;
      }
    }

    return result;
  }

  var getPosition = function getPosition(position) {
    var geoPoint = isGeoPoint ? secondParam : null;
    var callback = !isGeoPoint ? secondParam : null;

    checkPosition(geofenceName, position.coords, fences, geoPoint, callback, tracker._lastResults, asyncHandler);
  };

  function errorCallback(error) {
    throw new Error('Error during current position calculation. Error ' + error.message);
  }

  function getCurPos() {
    navigator.geolocation.getCurrentPosition(getPosition, errorCallback, {
      timeout: 5000,
      enableHighAccuracy: true
    });
  }

  if (!tracker.monitoringId) {
    if (fences.length) {
      tracker.monitoringId = !_utils2.default.isMobileDevice() ? setInterval(getCurPos, INTERVAL) : navigator.geolocation.watchPosition(getPosition, errorCallback, {
        timeout: INTERVAL,
        enableHighAccuracy: true
      });
    } else {
      throw new Error('Please, add some fences to start monitoring');
    }
  }
}

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stopMonitoring = stopMonitoring;

var _utils = __webpack_require__(20);

var _utils2 = _interopRequireDefault(_utils);

var _tracker = __webpack_require__(21);

var _tracker2 = _interopRequireDefault(_tracker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//TODO: refactor me
function stopMonitoring(geofenceName) {
  var tracker = _tracker2.default.get();

  if (geofenceName) {
    for (var i = 0; i < tracker._trackedFences.length; i++) {
      if (tracker._trackedFences[i].geofenceName === geofenceName) {
        tracker._trackedFences.splice(i, 1);
        delete tracker._lastResults[geofenceName];
      }
    }
  } else {
    tracker._lastResuls = {};
    tracker._trackedFences = [];
  }

  if (!tracker._trackedFences.length) {
    tracker.monitoringId = null;

    if (!_utils2.default.isMobileDevice()) {
      clearInterval(tracker.monitoringId);
    } else {
      navigator.geolocation.clearWatch(tracker.monitoringId);
    }
  }
}

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.savePoint = savePoint;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _point = __webpack_require__(7);

var _point2 = _interopRequireDefault(_point);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function savePoint(geoPoint, asyncHandler) {
  if (!_utils2.default.isNumber(geoPoint.latitude) || !_utils2.default.isNumber(geoPoint.longitude)) {
    throw new Error('Latitude or longitude not a number');
  }

  geoPoint.categories = _utils2.default.castArray(geoPoint.categories || ['Default']);

  if (asyncHandler) {
    asyncHandler = _utils2.default.wrapAsync(asyncHandler, parseResponse);
  }

  var result = _request2.default.send({
    method: geoPoint.objectId ? _request2.default.Methods.PATCH : _request2.default.Methods.POST,
    url: geoPoint.objectId ? _urls2.default.geoPoint(geoPoint.objectId) : _urls2.default.geoPoints(),
    data: geoPoint,
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });

  if (asyncHandler) {
    return result;
  }

  return parseResponse(result);
}

function parseResponse(resp) {
  var geoPoint = new _point2.default();

  geoPoint.categories = resp.geopoint.categories;
  geoPoint.latitude = resp.geopoint.latitude;
  geoPoint.longitude = resp.geopoint.longitude;
  geoPoint.metadata = resp.geopoint.metadata;
  geoPoint.objectId = resp.geopoint.objectId;

  return geoPoint;
}

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addCategory = addCategory;

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addCategory(name, asyncHandler) {
  if (!name) {
    throw new Error('Category name is required.');
  }

  var result = _request2.default.put({
    url: _urls2.default.geoCategory(name),
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });

  return typeof result.result === 'undefined' ? result : result.result;
}

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteCategory = deleteCategory;

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function deleteCategory(name, asyncHandler) {
  if (!name) {
    throw new Error('Category name is required.');
  }

  var result = {};

  try {
    result = _request2.default.delete({
      url: _urls2.default.geoCategory(name),
      isAsync: !!asyncHandler,
      asyncHandler: asyncHandler
    });
  } catch (e) {
    if (e.statusCode === 404) {
      result = false;
    } else {
      throw e;
    }
  }

  return typeof result.result === 'undefined' ? result : result.result;
}

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCategories = getCategories;

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getCategories(asyncHandler) {
  return _request2.default.get({
    url: _urls2.default.geoCategories(),
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deletePoint = deletePoint;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function deletePoint(point, asyncHandler) {
  if (!point || _utils2.default.isFunction(point)) {
    throw new Error('Point argument name is required, must be string (object Id), or point object');
  }

  var pointId = _utils2.default.isString(point) ? point : point.objectId;

  var result = {};

  try {
    result = _request2.default.delete({
      url: _urls2.default.geoPoint(pointId),
      isAsync: !!asyncHandler,
      asyncHandler: asyncHandler
    });
  } catch (e) {
    if (e.statusCode === 404) {
      result = false;
    } else {
      throw e;
    }
  }

  return typeof result.result === 'undefined' ? result : result.result;
}

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGeopointCount = getGeopointCount;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _queryValidator = __webpack_require__(38);

var _queryParams = __webpack_require__(39);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getGeopointCount(fenceName, query, asyncHandler) {
  if (_utils2.default.isObject(fenceName)) {
    asyncHandler = query;
    query = fenceName;
    fenceName = undefined;
  }

  if (!_utils2.default.isObject(query)) {
    throw new Error('Geo query must be specified');
  }

  if (fenceName) {
    query['geoFence'] = fenceName;
  }

  (0, _queryValidator.validateQueryObject)(query);

  var url = _urls2.default.geoCount() + '?' + (0, _queryParams.toQueryParams)(query);

  return _request2.default.get({
    url: url,
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClusterPoints = getClusterPoints;

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _async = __webpack_require__(3);

var _async2 = _interopRequireDefault(_async);

var _cluster = __webpack_require__(13);

var _cluster2 = _interopRequireDefault(_cluster);

var _point = __webpack_require__(7);

var _point2 = _interopRequireDefault(_point);

var _query = __webpack_require__(14);

var _query2 = _interopRequireDefault(_query);

var _findHelpers = __webpack_require__(22);

var _findHelpers2 = _interopRequireDefault(_findHelpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getClusterPoints(geoObject, asyncHandler) {
  if (!geoObject.objectId || !(geoObject instanceof _cluster2.default)) {
    throw new Error('Method argument must be a valid instance of GeoCluster persisted on the server');
  }

  if (!(geoObject.geoQuery instanceof _query2.default)) {
    throw new Error('Invalid GeoCluster object. ' + 'Make sure to obtain an instance of GeoCluster using the Backendless.Geo.find API');
  }

  var url = _urls2.default.geoClusterPoints(geoObject.objectId) + '?';

  var geoQuery = geoObject.geoQuery;

  for (var prop in geoQuery) {
    if (geoQuery.hasOwnProperty(prop) && _findHelpers2.default.hasOwnProperty(prop) && geoQuery[prop] != null) {
      url += '&' + _findHelpers2.default[prop](geoQuery[prop]);
    }
  }

  var responderOverride = function responderOverride(asyncHandler) {
    var success = function success(geoCollection) {
      for (var i = 0; i < geoCollection.length; i++) {
        geoCollection[i] = new _point2.default(geoCollection[i]);
      }

      asyncHandler.success(geoCollection);
    };

    var error = function error(data) {
      return asyncHandler.fault(data);
    };

    return new _async2.default(success, error);
  };

  asyncHandler = responderOverride(asyncHandler);

  return _request2.default.get({
    url: url,
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadPoints = loadPoints;

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _loadItems = __webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loadPoints(query, asyncHandler) {
  query.url = _urls2.default.geo();

  return (0, _loadItems.loadItems)(query, asyncHandler);
}

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadMetadata = loadMetadata;

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _cluster = __webpack_require__(13);

var _cluster2 = _interopRequireDefault(_cluster);

var _point = __webpack_require__(7);

var _point2 = _interopRequireDefault(_point);

var _query = __webpack_require__(14);

var _query2 = _interopRequireDefault(_query);

var _findHelpers = __webpack_require__(22);

var _findHelpers2 = _interopRequireDefault(_findHelpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//TODO: refactor me

function loadMetadata(geoObject, asyncHandler) {
  var isCluster = geoObject instanceof _cluster2.default;
  var isPoint = geoObject instanceof _point2.default;

  if (!geoObject.objectId || !isCluster && !isPoint) {
    throw new Error('Method argument must be a valid instance of GeoPoint or GeoCluster persisted on the server');
  }

  var url = _urls2.default.geoPointMetaData(geoObject.objectId);

  if (isCluster) {
    var geoQuery = geoObject.geoQuery;

    if (!(geoQuery instanceof _query2.default)) {
      throw new Error('Invalid GeoCluster object. ' + 'Make sure to obtain an instance of GeoCluster using the Backendless.Geo.find API');
    }

    url += '?';

    for (var prop in geoQuery) {
      if (geoQuery.hasOwnProperty(prop) && _findHelpers2.default.hasOwnProperty(prop) && geoQuery[prop] != null) {
        url += '&' + _findHelpers2.default[prop](geoQuery[prop]);
      }
    }
  }

  return _request2.default.get({
    url: url,
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.relativeFind = relativeFind;

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _loadItems = __webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//TODO: refactor me

function relativeFind(query, asyncHandler) {
  if (!(query.relativeFindMetadata && query.relativeFindPercentThreshold)) {
    throw new Error('Inconsistent geo query. ' + 'Query should contain both relativeFindPercentThreshold and relativeFindMetadata');
  }

  query.url = _urls2.default.geoRelative();

  return (0, _loadItems.loadItems)(query, asyncHandler);
}

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadFencePoints = loadFencePoints;

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _query = __webpack_require__(14);

var _query2 = _interopRequireDefault(_query);

var _loadItems = __webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loadFencePoints(geoFenceName, query, asyncHandler) {
  query = query || new _query2.default();

  query.geoFence = geoFenceName;
  query.url = _urls2.default.geo();

  return (0, _loadItems.loadItems)(query, asyncHandler);
}

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _dec2, _dec3, _dec4, _desc, _value, _class;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _rt = __webpack_require__(9);

var _index = __webpack_require__(40);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var ListenerTypes = _utils2.default.mirrorKeys({
  MESSAGE: null
});

var Channel = (_dec = (0, _rt.disallowInBusinessLogic)('MessagingChannel.addMessageListener'), _dec2 = _rt.RTScopeConnector.connectionRequired(), _dec3 = (0, _rt.disallowInBusinessLogic)('MessagingChannel.addCommandListener'), _dec4 = (0, _rt.disallowInBusinessLogic)('MessagingChannel.addUserStatusListener'), (_class = function (_RTScopeConnector) {
  _inherits(Channel, _RTScopeConnector);

  function Channel() {
    _classCallCheck(this, Channel);

    return _possibleConstructorReturn(this, (Channel.__proto__ || Object.getPrototypeOf(Channel)).apply(this, arguments));
  }

  _createClass(Channel, [{
    key: 'getScopeOptions',
    value: function getScopeOptions() {
      var name = this.options.name;


      return {
        channel: name
      };
    }
  }, {
    key: 'publish',
    value: function publish(message, publishOptions, deliveryTarget) {
      return _index2.default.publish(this.options.name, message, publishOptions, deliveryTarget);
    }
  }, {
    key: 'addMessageListener',
    value: function addMessageListener(selector, callback, onError) {
      if (typeof selector === 'function') {
        onError = callback;
        callback = selector;
        selector = undefined;
      }

      this.addSubscription(ListenerTypes.MESSAGE, _rt.RTClient.subscriptions.onPubSubMessage, {
        callback: callback,
        onError: onError,
        params: {
          selector: selector
        }
      });
    }
  }, {
    key: 'removeMessageListener',
    value: function removeMessageListener(selector, callback) {
      if (typeof selector === 'function') {
        callback = selector;
        selector = undefined;
      }

      if (selector && typeof selector !== 'string') {
        throw new Error('"selector" must be string');
      }

      if (typeof callback !== 'function') {
        throw new Error('"callback" must be function');
      }

      var matcher = function matcher(subscription) {
        var params = subscription.params;

        if (selector) {
          return params.selector === selector && params.callback === callback;
        }

        return subscription.callback === callback;
      };

      this.stopSubscription(ListenerTypes.MESSAGE, { matcher: matcher });
    }
  }, {
    key: 'removeMessageListeners',
    value: function removeMessageListeners(selector) {
      if (typeof selector !== 'string') {
        throw new Error('"selector" must be string');
      }

      var matcher = function matcher(subscription) {
        return subscription.params.selector === selector;
      };

      this.stopSubscription(ListenerTypes.MESSAGE, { matcher: matcher });
    }
  }, {
    key: 'removeAllMessageListeners',
    value: function removeAllMessageListeners() {
      this.stopSubscription(ListenerTypes.MESSAGE, {});
    }
  }, {
    key: 'addCommandListener',
    value: function addCommandListener() {
      return _get(Channel.prototype.__proto__ || Object.getPrototypeOf(Channel.prototype), 'addCommandListener', this).apply(this, arguments);
    }
  }, {
    key: 'addUserStatusListener',
    value: function addUserStatusListener() {
      return _get(Channel.prototype.__proto__ || Object.getPrototypeOf(Channel.prototype), 'addUserStatusListener', this).apply(this, arguments);
    }
  }, {
    key: 'join',
    value: function join() {
      _get(Channel.prototype.__proto__ || Object.getPrototypeOf(Channel.prototype), 'connect', this).call(this);
    }
  }, {
    key: 'leave',
    value: function leave() {
      _get(Channel.prototype.__proto__ || Object.getPrototypeOf(Channel.prototype), 'disconnect', this).call(this);
    }
  }, {
    key: 'isJoined',
    value: function isJoined() {
      return _get(Channel.prototype.__proto__ || Object.getPrototypeOf(Channel.prototype), 'isConnected', this).call(this);
    }
  }, {
    key: 'connectSubscriber',
    get: function get() {
      return _rt.RTClient.subscriptions.connectToPubSub;
    }
  }, {
    key: 'usersSubscriber',
    get: function get() {
      return _rt.RTClient.subscriptions.onPubSubUserStatus;
    }
  }, {
    key: 'commandSubscriber',
    get: function get() {
      return _rt.RTClient.subscriptions.onPubSubCommand;
    }
  }, {
    key: 'commandSender',
    get: function get() {
      return _rt.RTClient.methods.sendPubSubCommand;
    }
  }]);

  return Channel;
}(_rt.RTScopeConnector), (_applyDecoratedDescriptor(_class.prototype, 'addMessageListener', [_dec, _dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'addMessageListener'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'addCommandListener', [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, 'addCommandListener'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'addUserStatusListener', [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, 'addUserStatusListener'), _class.prototype)), _class));
exports.default = Channel;

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _publishOptionsHeader = __webpack_require__(121);

Object.defineProperty(exports, 'PublishOptionsHeaders', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_publishOptionsHeader).default;
  }
});

var _publishOptions = __webpack_require__(41);

Object.defineProperty(exports, 'PublishOptions', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_publishOptions).default;
  }
});

var _deliveryOptions = __webpack_require__(42);

Object.defineProperty(exports, 'DeliveryOptions', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_deliveryOptions).default;
  }
});

var _bodyParts = __webpack_require__(43);

Object.defineProperty(exports, 'Bodyparts', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_bodyParts).default;
  }
});

var _subscriptionsOptions = __webpack_require__(122);

Object.defineProperty(exports, 'SubscriptionOptions', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_subscriptionsOptions).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var PublishOptionsHeaders = {
  MESSAGE_TAG: 'message',
  IOS_ALERT_TAG: 'ios-alert',
  IOS_BADGE_TAG: 'ios-badge',
  IOS_SOUND_TAG: 'ios-sound',
  ANDROID_TICKER_TEXT_TAG: 'android-ticker-text',
  ANDROID_CONTENT_TITLE_TAG: 'android-content-title',
  ANDROID_CONTENT_TEXT_TAG: 'android-content-text',
  ANDROID_ACTION_TAG: 'android-action',
  WP_TYPE_TAG: 'wp-type',
  WP_TITLE_TAG: 'wp-title',
  WP_TOAST_SUBTITLE_TAG: 'wp-subtitle',
  WP_TOAST_PARAMETER_TAG: 'wp-parameter',
  WP_TILE_BACKGROUND_IMAGE: 'wp-backgroundImage',
  WP_TILE_COUNT: 'wp-count',
  WP_TILE_BACK_TITLE: 'wp-backTitle',
  WP_TILE_BACK_BACKGROUND_IMAGE: 'wp-backImage',
  WP_TILE_BACK_CONTENT: 'wp-backContent',
  WP_RAW_DATA: 'wp-raw'
};

exports.default = PublishOptionsHeaders;

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** @deprecated */
var SubscriptionOptions = function SubscriptionOptions(args) {
  _classCallCheck(this, SubscriptionOptions);

  console.warn('"SubscriptionOptions" is deprecated and nowhere used.');
  console.warn('"SubscriptionOptions" class will be removed in the nearest release.');

  args = args || {};

  this.subscriberId = args.subscriberId || undefined;
  this.subtopic = args.subtopic || undefined;
  this.selector = args.selector || undefined;
};

exports.default = SubscriptionOptions;

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _publish = __webpack_require__(124);

Object.keys(_publish).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _publish[key];
    }
  });
});

var _sendEmail = __webpack_require__(125);

Object.keys(_sendEmail).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _sendEmail[key];
    }
  });
});

var _push = __webpack_require__(126);

Object.keys(_push).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _push[key];
    }
  });
});

var _pushWithTemplate = __webpack_require__(127);

Object.keys(_pushWithTemplate).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _pushWithTemplate[key];
    }
  });
});

var _cancel = __webpack_require__(128);

Object.keys(_cancel).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _cancel[key];
    }
  });
});

var _registerDevice = __webpack_require__(129);

Object.keys(_registerDevice).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _registerDevice[key];
    }
  });
});

var _unregisterDevice = __webpack_require__(130);

Object.keys(_unregisterDevice).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _unregisterDevice[key];
    }
  });
});

var _getRegistration = __webpack_require__(131);

Object.keys(_getRegistration).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _getRegistration[key];
    }
  });
});

var _getMessageStatus = __webpack_require__(132);

Object.keys(_getMessageStatus).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _getMessageStatus[key];
    }
  });
});

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.publish = publish;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _async = __webpack_require__(3);

var _async2 = _interopRequireDefault(_async);

var _deliveryOptions = __webpack_require__(42);

var _deliveryOptions2 = _interopRequireDefault(_deliveryOptions);

var _publishOptions = __webpack_require__(41);

var _publishOptions2 = _interopRequireDefault(_publishOptions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function publish(channelName, message, publishOptions, deliveryTarget, asyncHandler) {
  if (publishOptions instanceof _async2.default) {
    asyncHandler = publishOptions;
    publishOptions = undefined;
    deliveryTarget = undefined;
  }

  if (deliveryTarget instanceof _async2.default) {
    asyncHandler = deliveryTarget;
    deliveryTarget = undefined;
  }

  var data = {
    message: message
  };

  if (publishOptions) {
    if (!(publishOptions instanceof _publishOptions2.default)) {
      throw new Error('Use PublishOption as publishOptions argument');
    }

    _utils2.default.deepExtend(data, publishOptions);
  }

  if (deliveryTarget) {
    if (!(deliveryTarget instanceof _deliveryOptions2.default)) {
      throw new Error('Use DeliveryOptions as deliveryTarget argument');
    }

    _utils2.default.deepExtend(data, deliveryTarget);
  }

  return _request2.default.post({
    url: _urls2.default.messagingChannel(channelName),
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler,
    data: data
  });
}

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendEmail = sendEmail;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _bodyParts = __webpack_require__(43);

var _bodyParts2 = _interopRequireDefault(_bodyParts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sendEmail(subject, bodyParts, recipients, attachments /**, async */) {
  var responder = _utils2.default.extractResponder(arguments);
  var isAsync = !!responder;
  var data = {};

  if (subject && !_utils2.default.isEmpty(subject) && _utils2.default.isString(subject)) {
    data.subject = subject;
  } else {
    throw new Error('Subject is required parameter and must be a nonempty string');
  }

  if (bodyParts instanceof _bodyParts2.default && !_utils2.default.isEmpty(bodyParts)) {
    data.bodyparts = bodyParts;
  } else {
    throw new Error('Use Bodyparts as bodyParts argument, must contain at least one property');
  }

  if (recipients && _utils2.default.isArray(recipients) && !_utils2.default.isEmpty(recipients)) {
    data.to = recipients;
  } else {
    throw new Error('Recipients is required parameter, must be a nonempty array');
  }

  if (attachments) {
    if (_utils2.default.isArray(attachments)) {
      if (!_utils2.default.isEmpty(attachments)) {
        data.attachment = attachments;
      }
    }
  }

  function responseMessageStatus(res) {
    return res.status;
  }

  return _request2.default.post({
    url: _urls2.default.messagingEmail(),
    isAsync: isAsync,
    asyncHandler: _utils2.default.wrapAsync(responder, responseMessageStatus),
    data: data
  });
}

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.push = push;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function push(data) {
  var responder = _utils2.default.extractResponder(arguments);
  var isAsync = !!responder;

  if (!data || !_utils2.default.isObject(data)) {
    throw new Error('Push Data must be object!');
  }

  return _request2.default.post({
    url: _urls2.default.messagingPush(),
    isAsync: isAsync,
    asyncHandler: responder,
    data: data
  });
}

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pushWithTemplate = pushWithTemplate;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function pushWithTemplate(templateName) {
  var responder = _utils2.default.extractResponder(arguments);
  var isAsync = !!responder;

  if (!templateName || !_utils2.default.isString(templateName)) {
    throw new Error('Push Template Name must be non empty string!');
  }

  return _request2.default.post({
    url: _urls2.default.messagingPushWithTemplate(templateName),
    isAsync: isAsync,
    asyncHandler: responder
  });
}

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cancel = cancel;

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _async = __webpack_require__(3);

var _async2 = _interopRequireDefault(_async);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cancel(messageId, asyncHandler) {
  return _request2.default.delete({
    url: _urls2.default.messagingMessage(messageId),
    isAsync: !!asyncHandler,
    asyncHandler: new _async2.default()
  });
}

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerDevice = registerDevice;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _device = __webpack_require__(15);

var _device2 = _interopRequireDefault(_device);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _async = __webpack_require__(3);

var _async2 = _interopRequireDefault(_async);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function registerDevice(deviceToken, channels, expiration, asyncHandler) {
  var device = _device2.default.required();

  if (expiration instanceof _async2.default) {
    asyncHandler = expiration;
    expiration = undefined;
  }

  var data = {
    deviceToken: deviceToken,
    deviceId: device.uuid,
    os: device.platform,
    osVersion: device.version
  };

  if (_utils2.default.isArray(channels)) {
    data.channels = channels;
  }

  if (_utils2.default.isNumber(expiration) || expiration instanceof Date) {
    data.expiration = expiration instanceof Date ? expiration.getTime() / 1000 : expiration;
  }

  return _request2.default.post({
    url: _urls2.default.messagingRegistrations(),
    data: data,
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unregisterDevice = unregisterDevice;

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _device = __webpack_require__(15);

var _device2 = _interopRequireDefault(_device);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function unregisterDevice(asyncHandler) {
  var device = _device2.default.required();

  return _request2.default.delete({
    url: _urls2.default.messagingRegistrationDevice(device.uuid),
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRegistrations = getRegistrations;

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _device = __webpack_require__(15);

var _device2 = _interopRequireDefault(_device);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getRegistrations(asyncHandler) {
  var device = _device2.default.required();

  return _request2.default.get({
    url: _urls2.default.messagingRegistrationDevice(device.uuid),
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMessageStatus = getMessageStatus;

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getMessageStatus(messageId, asyncHandler) {
  if (!messageId) {
    throw Error('Message ID is required.');
  }

  return _request2.default.get({
    url: _urls2.default.messagingMessage(messageId),
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _desc, _value, _obj, _init, _init2, _init3, _init4, _init5, _init6, _init7, _init8, _init9, _init10;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _decorators = __webpack_require__(4);

var _persmissions = __webpack_require__(134);

var _persmissions2 = _interopRequireDefault(_persmissions);

var _save = __webpack_require__(137);

var _upload = __webpack_require__(138);

var _listinig = __webpack_require__(139);

var _rename = __webpack_require__(140);

var _move = __webpack_require__(141);

var _remove = __webpack_require__(142);

var _copy = __webpack_require__(143);

var _exists = __webpack_require__(144);

var _removeDirectory = __webpack_require__(145);

var _count = __webpack_require__(146);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var Files = (_dec = (0, _decorators.deprecated)('Backendless.Files', 'Backendless.Files.saveFile'), _dec2 = (0, _decorators.deprecated)('Backendless.Files', 'Backendless.Files.upload'), _dec3 = (0, _decorators.deprecated)('Backendless.Files', 'Backendless.Files.listing'), _dec4 = (0, _decorators.deprecated)('Backendless.Files', 'Backendless.Files.renameFile'), _dec5 = (0, _decorators.deprecated)('Backendless.Files', 'Backendless.Files.moveFile'), _dec6 = (0, _decorators.deprecated)('Backendless.Files', 'Backendless.Files.copyFile'), _dec7 = (0, _decorators.deprecated)('Backendless.Files', 'Backendless.Files.remove'), _dec8 = (0, _decorators.deprecated)('Backendless.Files', 'Backendless.Files.exists'), _dec9 = (0, _decorators.deprecated)('Backendless.Files', 'Backendless.Files.removeDirectory'), _dec10 = (0, _decorators.deprecated)('Backendless.Files', 'Backendless.Files.getFileCount'), (_obj = {
  Permissions: _persmissions2.default,

  saveFileSync: _utils2.default.synchronized(_save.saveFile),
  saveFile: _utils2.default.promisified(_save.saveFile),

  uploadSync: _utils2.default.synchronized(_upload.upload),
  upload: _utils2.default.promisified(_upload.upload),

  listingSync: _utils2.default.synchronized(_listinig.listing),
  listing: _utils2.default.promisified(_listinig.listing),

  renameFileSync: _utils2.default.synchronized(_rename.renameFile),
  renameFile: _utils2.default.promisified(_rename.renameFile),

  moveFileSync: _utils2.default.synchronized(_move.moveFile),
  moveFile: _utils2.default.promisified(_move.moveFile),

  copyFileSync: _utils2.default.synchronized(_copy.copyFile),
  copyFile: _utils2.default.promisified(_copy.copyFile),

  removeSync: _utils2.default.synchronized(_remove.remove),
  remove: _utils2.default.promisified(_remove.remove),

  existsSync: _utils2.default.synchronized(_exists.exists),
  exists: _utils2.default.promisified(_exists.exists),

  removeDirectorySync: _utils2.default.synchronized(_removeDirectory.removeDirectory),
  removeDirectory: _utils2.default.promisified(_removeDirectory.removeDirectory),

  getFileCountSync: _utils2.default.synchronized(_count.getFileCount),
  getFileCount: _utils2.default.promisified(_count.getFileCount)

}, (_applyDecoratedDescriptor(_obj, 'saveFileSync', [_dec], (_init = Object.getOwnPropertyDescriptor(_obj, 'saveFileSync'), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'uploadSync', [_dec2], (_init2 = Object.getOwnPropertyDescriptor(_obj, 'uploadSync'), _init2 = _init2 ? _init2.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init2;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'listingSync', [_dec3], (_init3 = Object.getOwnPropertyDescriptor(_obj, 'listingSync'), _init3 = _init3 ? _init3.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init3;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'renameFileSync', [_dec4], (_init4 = Object.getOwnPropertyDescriptor(_obj, 'renameFileSync'), _init4 = _init4 ? _init4.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init4;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'moveFileSync', [_dec5], (_init5 = Object.getOwnPropertyDescriptor(_obj, 'moveFileSync'), _init5 = _init5 ? _init5.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init5;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'copyFileSync', [_dec6], (_init6 = Object.getOwnPropertyDescriptor(_obj, 'copyFileSync'), _init6 = _init6 ? _init6.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init6;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'removeSync', [_dec7], (_init7 = Object.getOwnPropertyDescriptor(_obj, 'removeSync'), _init7 = _init7 ? _init7.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init7;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'existsSync', [_dec8], (_init8 = Object.getOwnPropertyDescriptor(_obj, 'existsSync'), _init8 = _init8 ? _init8.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init8;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'removeDirectorySync', [_dec9], (_init9 = Object.getOwnPropertyDescriptor(_obj, 'removeDirectorySync'), _init9 = _init9 ? _init9.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init9;
  }
}), _obj), _applyDecoratedDescriptor(_obj, 'getFileCountSync', [_dec10], (_init10 = Object.getOwnPropertyDescriptor(_obj, 'getFileCountSync'), _init10 = _init10 ? _init10.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init10;
  }
}), _obj)), _obj));

exports.default = Files;

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _persmission = __webpack_require__(135);

var _persmission2 = _interopRequireDefault(_persmission);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FilePermissions = {
  READ: new _persmission2.default('READ'),
  DELETE: new _persmission2.default('DELETE'),
  WRITE: new _persmission2.default('WRITE')
};

exports.default = FilePermissions;

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _decorators = __webpack_require__(4);

var _sendRequest = __webpack_require__(136);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var PermissionTypes = {
  GRANT: 'GRANT',
  DENY: 'DENY'
};

function grantUser(userId, url, asyncHandler) {
  return (0, _sendRequest.sendRequest)(this.permission, PermissionTypes.GRANT, url, { userId: userId }, asyncHandler);
}

function grantRole(roleName, url, asyncHandler) {
  return (0, _sendRequest.sendRequest)(this.permission, PermissionTypes.GRANT, url, { roleName: roleName }, asyncHandler);
}

function grant(url, asyncHandler) {
  return (0, _sendRequest.sendRequest)(this.permission, PermissionTypes.GRANT, url, { userId: '*' }, asyncHandler);
}

function denyUser(userId, url, asyncHandler) {
  return (0, _sendRequest.sendRequest)(this.permission, PermissionTypes.DENY, url, { userId: userId }, asyncHandler);
}

function denyRole(roleName, url, asyncHandler) {
  return (0, _sendRequest.sendRequest)(this.permission, PermissionTypes.DENY, url, { roleName: roleName }, asyncHandler);
}

function deny(url, asyncHandler) {
  return (0, _sendRequest.sendRequest)(this.permission, PermissionTypes.DENY, url, { userId: '*' }, asyncHandler);
}

//TODO: will be removed when remove sync methods
var namespaceLabel = 'Backendless.Files.Permissions.{READ|DELETE|WRITE}';

var FilePermission = (_dec = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.grantUser'), _dec2 = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.grantRole'), _dec3 = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.grant'), _dec4 = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.denyUser'), _dec5 = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.denyRole'), _dec6 = (0, _decorators.deprecated)(namespaceLabel, namespaceLabel + '.deny'), (_class = function FilePermission(permission) {
  _classCallCheck(this, FilePermission);

  _initDefineProp(this, 'grantUserSync', _descriptor, this);

  this.grantUser = _utils2.default.promisified(grantUser);

  _initDefineProp(this, 'grantRoleSync', _descriptor2, this);

  this.grantRole = _utils2.default.promisified(grantRole);

  _initDefineProp(this, 'grantSync', _descriptor3, this);

  this.grant = _utils2.default.promisified(grant);

  _initDefineProp(this, 'denyUserSync', _descriptor4, this);

  this.denyUser = _utils2.default.promisified(denyUser);

  _initDefineProp(this, 'denyRoleSync', _descriptor5, this);

  this.denyRole = _utils2.default.promisified(denyRole);

  _initDefineProp(this, 'denySync', _descriptor6, this);

  this.deny = _utils2.default.promisified(deny);

  this.permission = permission;
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'grantUserSync', [_dec], {
  enumerable: true,
  initializer: function initializer() {
    return _utils2.default.synchronized(grantUser);
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'grantRoleSync', [_dec2], {
  enumerable: true,
  initializer: function initializer() {
    return _utils2.default.synchronized(grantRole);
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'grantSync', [_dec3], {
  enumerable: true,
  initializer: function initializer() {
    return _utils2.default.synchronized(grant);
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'denyUserSync', [_dec4], {
  enumerable: true,
  initializer: function initializer() {
    return _utils2.default.synchronized(denyUser);
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'denyRoleSync', [_dec5], {
  enumerable: true,
  initializer: function initializer() {
    return _utils2.default.synchronized(denyRole);
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, 'denySync', [_dec6], {
  enumerable: true,
  initializer: function initializer() {
    return _utils2.default.synchronized(deny);
  }
})), _class));
exports.default = FilePermission;

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendRequest = sendRequest;

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sendRequest(permission, type, path, options, asyncHandler) {
  var userId = options.userId,
      roleName = options.roleName;


  var data = {
    permission: permission
  };

  if (userId) {
    data.user = userId;
  } else if (roleName) {
    data.role = roleName;
  }

  return _request2.default.put({
    url: _urls2.default.filePermission(type, path),
    data: data,
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveFile = saveFile;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _async = __webpack_require__(3);

var _async2 = _interopRequireDefault(_async);

var _send = __webpack_require__(44);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MAX_CONTENT_SIZE = 2800000;

var toByteArray = function toByteArray(content) {
  if (typeof Blob !== 'undefined') {

    if (!Array.isArray(content)) {
      content = [content];
    }

    content = new Blob(content);
  } else if (typeof Buffer !== 'undefined') {
    var value = Buffer.from(content);

    content = {
      value: value,
      options: {
        filename: 'blob',
        knownLength: value.byteLength,
        contentType: 'application/octet-stream'
      }
    };
  }

  return content;
};

var getContentSize = function getContentSize(content) {
  if (content.size) {
    return content.size;
  }

  return content.options && content.options.knownLength;
};

/**
 * @param {String} path
 * @param {String} fileName
 * @param {String|Uint8Array} fileContent
 * @param {Boolean} overwrite
 * @param {Async} asyncHandler
 * @returns {Promise.<String>}
 */
function saveFile(path, fileName, fileContent, overwrite, asyncHandler) {
  if (!path || !_utils2.default.isString(path)) {
    throw new Error('Missing value for the "path" argument. The argument must contain a string value');
  }

  if (!fileName || !_utils2.default.isString(fileName)) {
    throw new Error('Missing value for the "fileName" argument. The argument must contain a string value');
  }

  if (overwrite instanceof _async2.default) {
    asyncHandler = overwrite;
    overwrite = undefined;
  }

  fileContent = toByteArray(fileContent);

  if (getContentSize(fileContent) > MAX_CONTENT_SIZE) {
    throw new Error('File Content size must be less than ' + MAX_CONTENT_SIZE + ' bytes');
  }

  return (0, _send.sendFile)({
    overwrite: overwrite,
    path: path,
    fileName: fileName,
    file: fileContent,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.upload = upload;

var _async = __webpack_require__(3);

var _async2 = _interopRequireDefault(_async);

var _send = __webpack_require__(44);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getFileName = function getFileName(file) {
  if (file.name) {
    return file.name;
  }

  if (file.path) {
    var path = file.path.split('/');
    return path[path.length - 1]; //last item of the file path
  }
};

/**
 * @param {File} file
 * @param {String} path
 * @param {Boolean} overwrite
 * @param {Async} asyncHandler
 * @returns {Promise.<String>}
 */
function upload(file, path, overwrite, asyncHandler) {
  var fileName = getFileName(file);

  if (!fileName) {
    throw new Error('Wrong type of the file source object. Can not get file name');
  }

  if (overwrite instanceof _async2.default) {
    asyncHandler = overwrite;
    overwrite = undefined;
  }

  return (0, _send.sendFile)({
    overwrite: overwrite,
    path: path,
    fileName: fileName,
    file: file,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listing = listing;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _async = __webpack_require__(3);

var _async2 = _interopRequireDefault(_async);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function listing(path, pattern, recursively, pagesize, offset, asyncHandler) {
  if (offset instanceof _async2.default) {
    asyncHandler = offset;
    offset = undefined;
  } else if (pagesize instanceof _async2.default) {
    asyncHandler = pagesize;
    pagesize = undefined;
    offset = undefined;
  } else if (recursively instanceof _async2.default) {
    asyncHandler = recursively;
    recursively = undefined;
    pagesize = undefined;
    offset = undefined;
  } else if (pattern instanceof _async2.default) {
    asyncHandler = pattern;
    pattern = undefined;
    recursively = undefined;
    pagesize = undefined;
    offset = undefined;
  }

  var query = {};

  if (_utils2.default.isString(pattern)) {
    query.pattern = pattern;
  }

  if (_utils2.default.isBoolean(recursively)) {
    query.sub = recursively;
  }

  if (_utils2.default.isNumber(pagesize)) {
    query.pagesize = pagesize;
  }

  if (_utils2.default.isNumber(offset)) {
    query.offset = offset;
  }

  return _request2.default.get({
    url: _urls2.default.filePath(path),
    query: query,
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renameFile = renameFile;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _utils3 = __webpack_require__(24);

var _utils4 = _interopRequireDefault(_utils3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renameFile(oldPathName, newName, asyncHandler) {
  if (!oldPathName || !_utils2.default.isString(oldPathName)) {
    throw new Error('Old File "path" must not be empty and must be String');
  }

  if (!newName || !_utils2.default.isString(newName)) {
    throw new Error('New File "path" must not be empty and must be String');
  }

  var parameters = {
    oldPathName: _utils4.default.ensureSlashInPath(oldPathName),
    newName: newName
  };

  return _request2.default.put({
    url: _urls2.default.fileRename(),
    data: parameters,
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.moveFile = moveFile;

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _utils = __webpack_require__(24);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function moveFile(sourcePath, targetPath, asyncHandler) {
  var parameters = {
    sourcePath: _utils2.default.ensureSlashInPath(sourcePath),
    targetPath: _utils2.default.ensureSlashInPath(targetPath)
  };

  return _request2.default.put({
    url: _urls2.default.fileMove(),
    data: parameters,
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = remove;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isRemoteUrl = function isRemoteUrl(url) {
  return url.startsWith('http://') || url.startsWith('https://');
};

function remove(path, asyncHandler) {
  if (!path || !_utils2.default.isString(path)) {
    throw new Error('File "path" must not be empty and must be String');
  }

  _request2.default.delete({
    url: isRemoteUrl(path) ? path : _urls2.default.filePath(path),
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.copyFile = copyFile;

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _utils = __webpack_require__(24);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function copyFile(sourcePath, targetPath, asyncHandler) {
  var parameters = {
    sourcePath: _utils2.default.ensureSlashInPath(sourcePath),
    targetPath: _utils2.default.ensureSlashInPath(targetPath)
  };

  return _request2.default.put({
    url: _urls2.default.fileCopy(),
    data: parameters,
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exists = exists;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function exists(path, asyncHandler) {
  if (!path || !_utils2.default.isString(path)) {
    throw new Error('Files "path" must not be empty and must be String');
  }

  return _request2.default.get({
    url: _urls2.default.filePath(path),
    query: { action: 'exists' },
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeDirectory = removeDirectory;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function removeDirectory(path, asyncHandler) {
  if (!path || !_utils2.default.isString(path)) {
    throw new Error('Directory "path" must not be empty and must be String');
  }

  _request2.default.delete({
    url: _urls2.default.filePath(path),
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFileCount = getFileCount;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _urls = __webpack_require__(1);

var _urls2 = _interopRequireDefault(_urls);

var _request = __webpack_require__(2);

var _request2 = _interopRequireDefault(_request);

var _async = __webpack_require__(3);

var _async2 = _interopRequireDefault(_async);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getFileCount(path, pattern, recursive, countDirectories, asyncHandler) {

  if (countDirectories instanceof _async2.default) {
    asyncHandler = countDirectories;
    countDirectories = undefined;
  } else if (recursive instanceof _async2.default) {
    asyncHandler = recursive;
    recursive = undefined;
    countDirectories = undefined;
  } else if (pattern instanceof _async2.default) {
    asyncHandler = pattern;
    pattern = undefined;
    recursive = undefined;
    countDirectories = undefined;
  }

  var query = {
    action: 'count',
    pattern: pattern !== undefined ? pattern : '*',
    recursive: !!recursive,
    countDirectories: !!countDirectories
  };

  if (!path || !_utils2.default.isString(path)) {
    throw new Error('Files "path" must not be empty and must be String');
  }

  if (!query.pattern || !_utils2.default.isString(query.pattern)) {
    throw new Error('Files "path" must not be empty and must be String');
  }

  return _request2.default.get({
    url: _urls2.default.filePath(path),
    query: query,
    isAsync: !!asyncHandler,
    asyncHandler: asyncHandler
  });
}

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _desc, _value, _class;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _rt = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var ListenerTypes = _utils2.default.mirrorKeys({
  CHANGES: null,
  CLEARED: null,
  INVOKE: null
});

var RemoteSharedObject = (_dec = (0, _rt.disallowInBusinessLogic)('SharedObject.addChangesListener'), _dec2 = _rt.RTScopeConnector.connectionRequired(), _dec3 = _rt.RTScopeConnector.connectionRequired(), _dec4 = (0, _rt.disallowInBusinessLogic)('SharedObject.addClearListener'), _dec5 = _rt.RTScopeConnector.connectionRequired(), _dec6 = _rt.RTScopeConnector.connectionRequired(), _dec7 = (0, _rt.disallowInBusinessLogic)('SharedObject.addCommandListener'), _dec8 = (0, _rt.disallowInBusinessLogic)('SharedObject.addUserStatusListener'), _dec9 = _rt.RTScopeConnector.connectionRequired(true), _dec10 = _rt.RTScopeConnector.connectionRequired(true), _dec11 = _rt.RTScopeConnector.connectionRequired(true), _dec12 = _rt.RTScopeConnector.connectionRequired(true), _dec13 = _rt.RTScopeConnector.connectionRequired(true), (_class = function (_RTScopeConnector) {
  _inherits(RemoteSharedObject, _RTScopeConnector);

  _createClass(RemoteSharedObject, [{
    key: 'connectSubscriber',
    get: function get() {
      return _rt.RTClient.subscriptions.connectToRSO;
    }
  }, {
    key: 'usersSubscriber',
    get: function get() {
      return _rt.RTClient.subscriptions.onRSOUserStatus;
    }
  }, {
    key: 'commandSubscriber',
    get: function get() {
      return _rt.RTClient.subscriptions.onRSOCommand;
    }
  }, {
    key: 'commandSender',
    get: function get() {
      return _rt.RTClient.methods.sendRSOCommand;
    }
  }], [{
    key: 'connect',
    value: function connect(name) {
      return new this({ name: name });
    }
  }]);

  function RemoteSharedObject(options) {
    _classCallCheck(this, RemoteSharedObject);

    var _this = _possibleConstructorReturn(this, (RemoteSharedObject.__proto__ || Object.getPrototypeOf(RemoteSharedObject)).call(this, options));

    _this.onInvoke = function (_ref) {
      var _this$invocationTarge;

      var method = _ref.method,
          args = _ref.args;

      checkInvocationTargetMethod(_this.invocationTarget, method);

      (_this$invocationTarge = _this.invocationTarget)[method].apply(_this$invocationTarge, _toConsumableArray(args));
    };

    _this.invocationTarget = null;
    return _this;
  }

  _createClass(RemoteSharedObject, [{
    key: 'setInvocationTarget',
    value: function setInvocationTarget(invocationTarget) {
      (0, _rt.checkUsesInBusinessLogic)('SharedObject.setInvocationTarget');

      this.invocationTarget = invocationTarget;
    }
  }, {
    key: 'subscribeOnRemoteInvokes',
    value: function subscribeOnRemoteInvokes() {
      var isAllowToSubscribeOnRemoteInvoke = false;

      try {
        (0, _rt.checkUsesInBusinessLogic)('Remote Invoke');

        isAllowToSubscribeOnRemoteInvoke = true;
      } catch (e) {
        // Remote Invoke is not supported in Business Logic
      }

      if (isAllowToSubscribeOnRemoteInvoke && !this.subscribedOnRemoteInvokes) {
        this.subscribedOnRemoteInvokes = true;

        this.addSubscription(ListenerTypes.INVOKE, _rt.RTClient.subscriptions.onRSOInvoke, {
          callback: this.onInvoke
        });
      }
    }
  }, {
    key: 'onConnect',
    value: function onConnect() {
      _get(RemoteSharedObject.prototype.__proto__ || Object.getPrototypeOf(RemoteSharedObject.prototype), 'onConnect', this).apply(this, arguments);

      this.subscribeOnRemoteInvokes();
    }
  }, {
    key: 'onDisconnect',
    value: function onDisconnect() {
      this.subscribedOnRemoteInvokes = false;
      this.stopSubscription(ListenerTypes.INVOKE, { callback: this.onInvoke });

      _get(RemoteSharedObject.prototype.__proto__ || Object.getPrototypeOf(RemoteSharedObject.prototype), 'onDisconnect', this).apply(this, arguments);
    }
  }, {
    key: 'addChangesListener',
    value: function addChangesListener(callback, onError) {
      this.addSubscription(ListenerTypes.CHANGES, _rt.RTClient.subscriptions.onRSOChanges, {
        callback: callback,
        onError: onError
      });
    }
  }, {
    key: 'removeChangesListeners',
    value: function removeChangesListeners(callback) {
      this.stopSubscription(ListenerTypes.CHANGES, { callback: callback });
    }
  }, {
    key: 'addClearListener',
    value: function addClearListener(callback, onError) {
      this.addSubscription(ListenerTypes.CLEARED, _rt.RTClient.subscriptions.onRSOClear, {
        callback: callback,
        onError: onError
      });
    }
  }, {
    key: 'removeClearListeners',
    value: function removeClearListeners(callback) {
      this.stopSubscription(ListenerTypes.CLEARED, { callback: callback });
    }
  }, {
    key: 'addCommandListener',
    value: function addCommandListener() {
      return _get(RemoteSharedObject.prototype.__proto__ || Object.getPrototypeOf(RemoteSharedObject.prototype), 'addCommandListener', this).apply(this, arguments);
    }
  }, {
    key: 'addUserStatusListener',
    value: function addUserStatusListener() {
      return _get(RemoteSharedObject.prototype.__proto__ || Object.getPrototypeOf(RemoteSharedObject.prototype), 'addUserStatusListener', this).apply(this, arguments);
    }
  }, {
    key: 'get',
    value: function get(key) {
      return _rt.RTClient.methods.getRSO(_extends({}, this.getScopeOptions(), { key: key }));
    }
  }, {
    key: 'set',
    value: function set(key, data) {
      return _rt.RTClient.methods.setRSO(_extends({}, this.getScopeOptions(), { key: key, data: data }));
    }
  }, {
    key: 'clear',
    value: function clear() {
      return _rt.RTClient.methods.clearRSO(this.getScopeOptions());
    }
  }, {
    key: 'invoke',
    value: function invoke(method) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return this.invokeOn.apply(this, [method, undefined].concat(args));
    }
  }, {
    key: 'invokeOn',
    value: function invokeOn(method, targets) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      var _this2 = this;

      return Promise.resolve().then(function () {
        return checkInvocationTargetMethod(_this2.invocationTarget, method);
      }).then(function () {
        return _rt.RTClient.methods.invokeRSOMethod(_extends({}, _this2.getScopeOptions(), { method: method, targets: targets, args: args }));
      });
    }
  }]);

  return RemoteSharedObject;
}(_rt.RTScopeConnector), (_applyDecoratedDescriptor(_class.prototype, 'addChangesListener', [_dec, _dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'addChangesListener'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'removeChangesListeners', [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, 'removeChangesListeners'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'addClearListener', [_dec4, _dec5], Object.getOwnPropertyDescriptor(_class.prototype, 'addClearListener'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'removeClearListeners', [_dec6], Object.getOwnPropertyDescriptor(_class.prototype, 'removeClearListeners'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'addCommandListener', [_dec7], Object.getOwnPropertyDescriptor(_class.prototype, 'addCommandListener'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'addUserStatusListener', [_dec8], Object.getOwnPropertyDescriptor(_class.prototype, 'addUserStatusListener'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'get', [_dec9], Object.getOwnPropertyDescriptor(_class.prototype, 'get'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'set', [_dec10], Object.getOwnPropertyDescriptor(_class.prototype, 'set'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'clear', [_dec11], Object.getOwnPropertyDescriptor(_class.prototype, 'clear'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'invoke', [_dec12], Object.getOwnPropertyDescriptor(_class.prototype, 'invoke'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'invokeOn', [_dec13], Object.getOwnPropertyDescriptor(_class.prototype, 'invokeOn'), _class.prototype)), _class));
exports.default = RemoteSharedObject;


function checkInvocationTargetMethod(invocationTarget, method) {
  if (!invocationTarget) {
    throw new Error('"invocationTarget" is not specified');
  }

  if (typeof invocationTarget[method] !== 'function') {
    throw new Error('Method "' + method + '" of invocationTarget is not function');
  }
}

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initApp = initApp;

var _localVars = __webpack_require__(6);

var _localVars2 = _interopRequireDefault(_localVars);

var _collector = __webpack_require__(16);

var _collector2 = _interopRequireDefault(_collector);

var _trackerMonitor = __webpack_require__(36);

var _trackerMonitor2 = _interopRequireDefault(_trackerMonitor);

var _rt = __webpack_require__(9);

var _currentUser = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function initApp(appId, secretKey) {
  _localVars2.default.applicationId = appId;
  _localVars2.default.secretKey = secretKey;
  _localVars2.default.appPath = [_localVars2.default.serverURL, appId, secretKey].join('/');

  (0, _rt.initRTClient)();

  _collector2.default.reset();
  _trackerMonitor2.default.reset();

  (0, _currentUser.setLocalCurrentUser)();
}

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserAgent = getUserAgent;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getUserAgent() {
  var ua = 'NodeJS';

  if (_utils2.default.isBrowser) {
    ua = navigator.userAgent ? navigator.userAgent.toLowerCase() : 'hybrid-app';
  }

  var match = /(chrome)[ \/]([\w.]+)/.exec(ua) || /(webkit)[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf('compatible') < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];

  var matched = {
    browser: match[1] || '',
    version: match[2] || '0'
  };

  var browser = {};

  if (matched.browser) {
    browser[matched.browser] = true;
    browser.version = matched.version;
  }

  return browser;
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=backendless.js.map