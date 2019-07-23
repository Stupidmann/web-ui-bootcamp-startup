/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/5.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/5.js":
/*!******************!*\
  !*** ./src/5.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logger.js */ \"./src/Logger.js\");\n/* harmony import */ var _Movie_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Movie.js */ \"./src/Movie.js\");\n/* harmony import */ var _Actor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Actor.js */ \"./src/Actor.js\");\n/* harmony import */ var _Social_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Social.js */ \"./src/Social.js\");\n/* harmony import */ var _EventEmitter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EventEmitter.js */ \"./src/EventEmitter.js\");\n\n\n\n\n\nvar caca = new _Movie_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"caquitas 2\", 1895, 85);\ncaca = Object.assign(caca, _Social_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\ncaca.share(\"bruno\");\n\n//# sourceURL=webpack:///./src/5.js?");

/***/ }),

/***/ "./src/Actor.js":
/*!**********************!*\
  !*** ./src/Actor.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Actor = function Actor(name, age) {\n  _classCallCheck(this, Actor);\n\n  this.name = name;\n  this.age = age;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Actor);\n\n//# sourceURL=webpack:///./src/Actor.js?");

/***/ }),

/***/ "./src/EventEmitter.js":
/*!*****************************!*\
  !*** ./src/EventEmitter.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar EventEmiter =\n/*#__PURE__*/\nfunction () {\n  function EventEmiter() {\n    _classCallCheck(this, EventEmiter);\n\n    this.events = {};\n  }\n\n  _createClass(EventEmiter, [{\n    key: \"on\",\n    value: function on(eventName, callback) {\n      if (this.events[eventName]) {\n        this.events[eventName].push(callback);\n      } else {\n        this.events[eventName] = [callback];\n      }\n    }\n  }, {\n    key: \"emit\",\n    value: function emit(eventName) {\n      this.events[eventName].forEach(function (callback) {\n        return callback(\"The \".concat(eventName, \" has been emited\"));\n      });\n    }\n  }, {\n    key: \"off\",\n    value: function off(eventName, callback) {\n      var newEvents = this.events[eventName].filter(function (c) {\n        return c !== callback;\n      });\n      this.events[eventName] = newEvents;\n    }\n  }]);\n\n  return EventEmiter;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventEmiter);\n\n//# sourceURL=webpack:///./src/EventEmitter.js?");

/***/ }),

/***/ "./src/Logger.js":
/*!***********************!*\
  !*** ./src/Logger.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Logger =\n/*#__PURE__*/\nfunction () {\n  function Logger() {\n    _classCallCheck(this, Logger);\n  }\n\n  _createClass(Logger, [{\n    key: \"log\",\n    value: function log(info) {\n      console.log(info);\n    }\n  }]);\n\n  return Logger;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Logger);\n\n//# sourceURL=webpack:///./src/Logger.js?");

/***/ }),

/***/ "./src/Movie.js":
/*!**********************!*\
  !*** ./src/Movie.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar Movie =\n/*#__PURE__*/\nfunction (_EventEmiter) {\n  _inherits(Movie, _EventEmiter);\n\n  function Movie(title, year, duration) {\n    var _this;\n\n    _classCallCheck(this, Movie);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Movie).call(this));\n    _this.title = title;\n    _this.year = year;\n    _this.duration = duration;\n    _this.cast = [];\n    return _this;\n  }\n\n  _createClass(Movie, [{\n    key: \"play\",\n    value: function play() {\n      this.emit(\"play\");\n    }\n  }, {\n    key: \"pause\",\n    value: function pause() {\n      this.emit(\"pause\");\n    }\n  }, {\n    key: \"resume\",\n    value: function resume() {\n      this.emit(\"resume\");\n    }\n  }, {\n    key: \"addCast\",\n    value: function addCast(cast) {\n      this.cast = cast;\n      console.log(\"cast added \" + this.cast.name);\n\n      for (var i = 0; i < cast.length; i++) {\n        this.cast = cast;\n        console.log(\"cast added \" + this.cast[i].name);\n      }\n    }\n  }]);\n\n  return Movie;\n}(EventEmiter);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Movie);\n\n//# sourceURL=webpack:///./src/Movie.js?");

/***/ }),

/***/ "./src/Social.js":
/*!***********************!*\
  !*** ./src/Social.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Social = {\n  share: function share(friendName) {\n    console.log(\"\".concat(friendName, \" shares \").concat(this.title, \" with you\"));\n  },\n  like: function like(friendName) {\n    console.log(\"\".concat(friendName, \" likes \").concat(this.title));\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Social);\n\n//# sourceURL=webpack:///./src/Social.js?");

/***/ })

/******/ });