module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

exports.delBasePath = delBasePath;

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return Object.assign({
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  }, namedParameterizedRoute ? {
    namedRegex: `^${namedParameterizedRoute}(?:/)?$`
  } : {});
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./src/components/Layout/Footer/index.js":
/*!***********************************************!*\
  !*** ./src/components/Layout/Footer/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./src/components/Layout/Footer/style.jsx");
var _jsxFileName = "C:\\Users\\GBM\\Desktop\\ermire\\src\\components\\Layout\\Footer\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Footer = () => {
  return __jsx("footer", {
    className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}` + " " + "col-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}` + " " + "footer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}` + " " + "social",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, "Social:"), __jsx("a", {
    href: "",
    className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 28
    }
  }, "Facebook")), __jsx("a", {
    href: "",
    className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 28
    }
  }, "LinkedIn")), __jsx("a", {
    href: "",
    className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 28
    }
  }, "Telegram"))), __jsx("div", {
    className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}` + " " + "copy",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, "\xA92020 vikinar\u2122")), __jsx("div", {
    className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}` + " " + "col-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: _style__WEBPACK_IMPORTED_MODULE_2__["default"].__hash,
    __self: undefined
  }, _style__WEBPACK_IMPORTED_MODULE_2__["default"]));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/Layout/Footer/style.jsx":
/*!************************************************!*\
  !*** ./src/components/Layout/Footer/style.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const style = new String("footer.jsx-1542018637{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:fixed;bottom:4rem;height:10rem;z-index:2;width:100%;}footer.jsx-1542018637 .footer.jsx-1542018637{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}footer.jsx-1542018637 .social.jsx-1542018637{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}footer.jsx-1542018637 .social.jsx-1542018637 p.jsx-1542018637{font-weight:600;}footer.jsx-1542018637 .social.jsx-1542018637 a.jsx-1542018637{margin-left:1rem;-webkit-text-decoration:none;text-decoration:none;color:darkblue;}footer.jsx-1542018637 .social.jsx-1542018637 a.jsx-1542018637:before{content:'/';margin:0 .5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcR0JNXFxEZXNrdG9wXFxlcm1pcmVcXHNyY1xcY29tcG9uZW50c1xcTGF5b3V0XFxGb290ZXJcXHN0eWxlLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFaUIsQUFFZ0IsQUFPRSxBQUtBLEFBR0ssQUFFQyxBQUlILFlBQ0csSUFQQSxDQUdJLFVBSUgsd0NBSEgsT0FsQkosQUFPaUIsQUFLWCxRQU1ELE9BakJSLFlBQ0MsYUFDSCxVQUNDLFdBQUMsZ0NBUVUsc0JBSlQsV0FDUSw2RkFBQyIsImZpbGUiOiJDOlxcVXNlcnNcXEdCTVxcRGVza3RvcFxcZXJtaXJlXFxzcmNcXGNvbXBvbmVudHNcXExheW91dFxcRm9vdGVyXFxzdHlsZS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xyXG5cclxuY29uc3Qgc3R5bGUgPSBjc3NgXHJcbiAgZm9vdGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDsgXHJcbiAgICBib3R0b206IDRyZW07IFxyXG4gICAgaGVpZ2h0OiAxMHJlbTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIFxyXG4gICAgLmZvb3RlcntcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnNvY2lhbHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGNvbG9yOiBkYXJrYmx1ZTtcclxuICAgICAgICAgIDpiZWZvcmV7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcvJztcclxuICAgICAgICAgICAgbWFyZ2luOiAwIC41cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0eWxlXHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\GBM\\\\Desktop\\\\ermire\\\\src\\\\components\\\\Layout\\\\Footer\\\\style.jsx */");
style.__hash = "1542018637";
/* harmony default export */ __webpack_exports__["default"] = (style);

/***/ }),

/***/ "./src/components/Layout/Header/index.js":
/*!***********************************************!*\
  !*** ./src/components/Layout/Header/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./src/components/Layout/Header/style.jsx");
var _jsxFileName = "C:\\Users\\GBM\\Desktop\\ermire\\src\\components\\Layout\\Header\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var Logo = function Logo(props) {
  return __jsx("svg", props, __jsx("title", null, "e-logo"), __jsx("rect", {
    className: "cls",
    x: "665.47",
    y: "353.41",
    width: "27.85",
    height: "113.09",
    rx: "13.93",
    transform: "rotate(135 537.857 136.982)"
  }), __jsx("rect", {
    className: "cls",
    x: "586.18",
    y: "347.03",
    width: "27.85",
    height: "156.66",
    rx: "13.93",
    transform: "rotate(45 824.468 -282.264)"
  }), __jsx("rect", {
    className: "cls",
    x: "613.59",
    y: "335.07",
    width: "27.85",
    height: "238.3",
    rx: "13.93",
    transform: "rotate(135 485.974 181.246)"
  }), __jsx("rect", {
    className: "cls",
    x: "509.04",
    y: "335.07",
    width: "27.85",
    height: "238.3",
    rx: "13.93",
    transform: "rotate(135 381.423 181.246)"
  }), __jsx("circle", {
    className: "cls",
    cx: "303.04",
    cy: "102.34",
    r: "14.18"
  }));
};

Logo.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-20 -10 350 200"
};


const Header = (props, ref) => {
  const logo = 'logo';
  return __jsx("section", {
    className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}` + " " + "header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}` + " " + "w-1/12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }), __jsx("section", {
    className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}` + " " + 'flex',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}` + " " + "logo-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, __jsx(Logo, {
    className: logo,
    width: "100",
    height: "100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}` + " " + 'header__container--inner',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }, __jsx("h1", {
    className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 25
    }
  }, "ERMIRE"), __jsx("p", {
    className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}` + " " + 'logo-desc',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 25
    }
  }, "vikinar\u2122")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: _style__WEBPACK_IMPORTED_MODULE_2__["default"].__hash,
    __self: undefined
  }, _style__WEBPACK_IMPORTED_MODULE_2__["default"]), __jsx("div", {
    className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}` + " " + "w-1/12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Layout/Header/style.jsx":
/*!************************************************!*\
  !*** ./src/components/Layout/Header/style.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const style = new String(".header.jsx-2970140065{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;top:4rem;height:10rem;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:100%;background:transparent;color:darkblue;-webkit-transition:ease-out .5s;transition:ease-out .5s;position:fixed;z-index:2;}.header.jsx-2970140065 .flex.jsx-2970140065{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;}.header__container--inner.jsx-2970140065{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex-basis:content;-ms-flex-preferred-size:content;flex-basis:content;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:1rem;}.header__container--inner.jsx-2970140065 h1.jsx-2970140065{margin:0;font-size:1.8rem;font-weight:600;}.header__container--inner.jsx-2970140065 p.jsx-2970140065{margin:0;}.logo-container.jsx-2970140065{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcR0JNXFxEZXNrdG9wXFxlcm1pcmVcXHNyY1xcY29tcG9uZW50c1xcTGF5b3V0XFxIZWFkZXJcXHN0eWxlLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFaUIsQUFFZ0IsQUFXUyxBQUtQLEFBT0YsQUFJQSxBQUdBLFNBTlEsQUFHUCxpQkFGTSxnQkFBQyxnQ0F4QlosQUFnQmUsQUFjTSxTQTdCakIsYUFDaUIsTUFTRSxrREFNWCxxQ0FhVSxzQkEzQnBCLE1BU1UsS0FSRSxRQWNGLGVBYk4sZUFDUyxrREFPWCxNQU5FLEtBTUQsRUFNVyxRQVhmLFVBQUMsaUZBWUcsWUFBQyIsImZpbGUiOiJDOlxcVXNlcnNcXEdCTVxcRGVza3RvcFxcZXJtaXJlXFxzcmNcXGNvbXBvbmVudHNcXExheW91dFxcSGVhZGVyXFxzdHlsZS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xyXG5cclxuY29uc3Qgc3R5bGUgPSBjc3NgXHJcbiAgICAgICAgICAuaGVhZGVye1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICB0b3A6IDRyZW07XHJcbiAgICAgICAgICAgIGhlaWdodDogMTByZW07XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQgOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgY29sb3I6IGRhcmtibHVlO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBlYXNlLW91dCAuNXM7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgLmZsZXh7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgJl9fY29udGFpbmVye1xyXG4gICAgICAgICAgICAgICYtLWlubmVye1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICBmbGV4LWJhc2lzOiBjb250ZW50O1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAxcmVtOyBcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgIGgxe1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAubG9nby1jb250YWluZXJ7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3R5bGVcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\GBM\\\\Desktop\\\\ermire\\\\src\\\\components\\\\Layout\\\\Header\\\\style.jsx */");
style.__hash = "2970140065";
/* harmony default export */ __webpack_exports__["default"] = (style);

/***/ }),

/***/ "./src/components/Layout/index.js":
/*!****************************************!*\
  !*** ./src/components/Layout/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-messenger-customer-chat */ "react-messenger-customer-chat");
/* harmony import */ var react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/styles */ "./src/styles/styles.js");
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Navigation */ "./src/components/Navigation/index.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ "./src/components/Layout/style.jsx");
/* harmony import */ var next_page_transitions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-page-transitions */ "next-page-transitions");
/* harmony import */ var next_page_transitions__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_page_transitions__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Header */ "./src/components/Layout/Header/index.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Footer */ "./src/components/Layout/Footer/index.js");
var _jsxFileName = "C:\\Users\\GBM\\Desktop\\ermire\\src\\components\\Layout\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const TIMEOUT = 1000;





const Layout = ({
  children
}) => {
  return __jsx("section", {
    className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_5__["layout"].__hash}` + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["659418330", [TIMEOUT, TIMEOUT, TIMEOUT, TIMEOUT, TIMEOUT, TIMEOUT]]]) + " " + 'Layout',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }), __jsx(next_page_transitions__WEBPACK_IMPORTED_MODULE_6__["PageTransition"], {
    timeout: TIMEOUT,
    classNames: "page-transition",
    loadingDelay: 100,
    loadingTimeout: {
      enter: TIMEOUT,
      exit: 0
    },
    loadingClassNames: "loading-indicator",
    style: {
      width: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, children), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }), __jsx(_Navigation__WEBPACK_IMPORTED_MODULE_4__["Navigation"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: _style__WEBPACK_IMPORTED_MODULE_5__["layout"].__hash,
    __self: undefined
  }, _style__WEBPACK_IMPORTED_MODULE_5__["layout"]), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: _styles_styles__WEBPACK_IMPORTED_MODULE_3__["default"].__hash,
    __self: undefined
  }, _styles_styles__WEBPACK_IMPORTED_MODULE_3__["default"]), __jsx(react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_2___default.a, {
    pageId: "648952291831850",
    appId: "823244408197472",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "659418330",
    dynamic: [TIMEOUT, TIMEOUT, TIMEOUT, TIMEOUT, TIMEOUT, TIMEOUT],
    __self: undefined
  }, `.page-transition-enter{width:100%;opacity:0;-webkit-transform:translate3d(0,20px,0) scale(0.9);-ms-transform:translate3d(0,20px,0) scale(0.9);transform:translate3d(0,20px,0) scale(0.9);-webkit-transition:opacity ${TIMEOUT}ms,-webkit-transform ${TIMEOUT}ms !important;-webkit-transition:opacity ${TIMEOUT}ms,transform ${TIMEOUT}ms !important;transition:opacity ${TIMEOUT}ms,transform ${TIMEOUT}ms !important;}.page-transition-enter-active{opacity:1;-webkit-transform:translate3d(0,0,0) scale(1);-ms-transform:translate3d(0,0,0) scale(1);transform:translate3d(0,0,0) scale(1);-webkit-transition:opacity ${TIMEOUT}ms,-webkit-transform ${TIMEOUT}ms !important;-webkit-transition:opacity ${TIMEOUT}ms,transform ${TIMEOUT}ms !important;transition:opacity ${TIMEOUT}ms,transform ${TIMEOUT}ms !important;}.page-transition-exit{opacity:1;}.page-transition-enter-done{width:100%;}.page-transition-exit-active{opacity:0;-webkit-transition:opacity ${TIMEOUT}ms;transition:opacity ${TIMEOUT}ms;}.loading-indicator-appear,.loading-indicator-enter{opacity:0;}.loading-indicator-appear-active,.loading-indicator-enter-active{opacity:1;-webkit-transition:opacity ${TIMEOUT}ms;transition:opacity ${TIMEOUT}ms;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcR0JNXFxEZXNrdG9wXFxlcm1pcmVcXHNyY1xcY29tcG9uZW50c1xcTGF5b3V0XFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQytCLEFBRWMsQUFNRCxBQUtBLEFBR0MsQUFHRCxBQUtBLEFBSUEsVUFuQjhCLEFBSTdCLEFBT3VDLEFBSXZDLEFBS3VDLENBMUJ4QyxBQWFFLFVBWmlDLGlHQWdCTSxBQVNBLGtCQW5Cb0QsMEJBTEEsZ1RBS0MsMEJBTEEiLCJmaWxlIjoiQzpcXFVzZXJzXFxHQk1cXERlc2t0b3BcXGVybWlyZVxcc3JjXFxjb21wb25lbnRzXFxMYXlvdXRcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlUmVmfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IE1lc3NlbmdlckN1c3RvbWVyQ2hhdCBmcm9tICdyZWFjdC1tZXNzZW5nZXItY3VzdG9tZXItY2hhdCdcclxuXHJcbmltcG9ydCBzdHlsZSBmcm9tICcuLi8uLi9zdHlsZXMvc3R5bGVzJ1xyXG5pbXBvcnQge05hdmlnYXRpb259IGZyb20gJy4uL05hdmlnYXRpb24nXHJcbmltcG9ydCB7bGF5b3V0fSBmcm9tICcuL3N0eWxlJ1xyXG5pbXBvcnQge1BhZ2VUcmFuc2l0aW9ufSBmcm9tIFwibmV4dC1wYWdlLXRyYW5zaXRpb25zXCI7XHJcbmNvbnN0IFRJTUVPVVQgPSAxMDAwXHJcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgTWFpbiBmcm9tIFwiLi9IZWFkZXJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3RlcidcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcclxuXHJcbmNvbnN0IExheW91dCA9ICh7Y2hpbGRyZW59KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nTGF5b3V0Jz5cclxuICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICA8UGFnZVRyYW5zaXRpb25cclxuICAgICAgICAgICAgICAgIHRpbWVvdXQ9e1RJTUVPVVR9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWVzPVwicGFnZS10cmFuc2l0aW9uXCJcclxuICAgICAgICAgICAgICAgIGxvYWRpbmdEZWxheT17MTAwfVxyXG4gICAgICAgICAgICAgICAgbG9hZGluZ1RpbWVvdXQ9e3tcclxuICAgICAgICAgICAgICAgICAgICBlbnRlcjogVElNRU9VVCxcclxuICAgICAgICAgICAgICAgICAgICBleGl0OiAwLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGxvYWRpbmdDbGFzc05hbWVzPVwibG9hZGluZy1pbmRpY2F0b3JcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGUgPSB7e3dpZHRoOiAnMTAwJSd9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvUGFnZVRyYW5zaXRpb24+XHJcbiAgICAgICAgICAgIDxGb290ZXIvPlxyXG4gICAgICAgICAgICA8TmF2aWdhdGlvbi8+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2xheW91dH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57c3R5bGV9PC9zdHlsZT5cclxuICAgICAgICAgICAgPE1lc3NlbmdlckN1c3RvbWVyQ2hhdFxyXG4gICAgICAgICAgICAgICAgcGFnZUlkPVwiNjQ4OTUyMjkxODMxODUwXCJcclxuICAgICAgICAgICAgICAgIGFwcElkPVwiODIzMjQ0NDA4MTk3NDcyXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAucGFnZS10cmFuc2l0aW9uLWVudGVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDIwcHgsIDApIHNjYWxlKC45KTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgJHtUSU1FT1VUfW1zLCB0cmFuc2Zvcm0gJHtUSU1FT1VUfW1zICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wYWdlLXRyYW5zaXRpb24tZW50ZXItYWN0aXZlIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApIHNjYWxlKDEpO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAke1RJTUVPVVR9bXMsIHRyYW5zZm9ybSAke1RJTUVPVVR9bXMgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBhZ2UtdHJhbnNpdGlvbi1leGl0IHtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5wYWdlLXRyYW5zaXRpb24tZW50ZXItZG9uZXtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wYWdlLXRyYW5zaXRpb24tZXhpdC1hY3RpdmUge1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgJHtUSU1FT1VUfW1zO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubG9hZGluZy1pbmRpY2F0b3ItYXBwZWFyLFxyXG4gICAgICAgIC5sb2FkaW5nLWluZGljYXRvci1lbnRlciB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubG9hZGluZy1pbmRpY2F0b3ItYXBwZWFyLWFjdGl2ZSxcclxuICAgICAgICAubG9hZGluZy1pbmRpY2F0b3ItZW50ZXItYWN0aXZlIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5ICR7VElNRU9VVH1tcztcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcclxuIl19 */
/*@ sourceURL=C:\\Users\\GBM\\Desktop\\ermire\\src\\components\\Layout\\index.js */`));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/components/Layout/style.jsx":
/*!*****************************************!*\
  !*** ./src/components/Layout/style.jsx ***!
  \*****************************************/
/*! exports provided: layout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layout", function() { return layout; });
const sky = 'sky';
const layout = new String(".Layout.jsx-1352786242{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background:#fff;width:100%;overflow-x:hidden;-webkit-transition:ease .5s;transition:ease .5s;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcR0JNXFxEZXNrdG9wXFxlcm1pcmVcXHNyY1xcY29tcG9uZW50c1xcTGF5b3V0XFxzdHlsZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSXlCLEFBRWdCLDBFQUNHLGdCQUNMLFdBQ08sa0JBQ0UsZ0RBQUMiLCJmaWxlIjoiQzpcXFVzZXJzXFxHQk1cXERlc2t0b3BcXGVybWlyZVxcc3JjXFxjb21wb25lbnRzXFxMYXlvdXRcXHN0eWxlLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnXHJcblxyXG5jb25zdCBza3kgPSAnc2t5J1xyXG5cclxuZXhwb3J0IGNvbnN0IGxheW91dCA9IGNzc2BcclxuICAuTGF5b3V0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IGVhc2UgLjVzO1xyXG4gICB9XHJcbiAgIFxyXG5gXHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\GBM\\\\Desktop\\\\ermire\\\\src\\\\components\\\\Layout\\\\style.jsx */");
layout.__hash = "1352786242";

/***/ }),

/***/ "./src/components/Navigation/index.js":
/*!********************************************!*\
  !*** ./src/components/Navigation/index.js ***!
  \********************************************/
/*! exports provided: Navigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navigation", function() { return Navigation; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ "./src/components/Navigation/style.jsx");
var _jsxFileName = "C:\\Users\\GBM\\Desktop\\ermire\\src\\components\\Navigation\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Hover = function Hover(props) {
  return __jsx("svg", props, __jsx("defs", null, __jsx("style", null, ".cls-1", `{`, "fill:url(#linear-gradient)", `}`, ".cls-2", `{`, "fill:url(#linear-gradient-2)", `}`, ".cls-3", `{`, "fill:url(#linear-gradient-3)", `}`, ".cls-4", `{`, "fill:url(#linear-gradient-4)", `}`, ".cls-5", `{`, "fill:#f1bbbb", `}`, ".cls-6", `{`, "fill:#3a3f67", `}`, ".cls-7", `{`, "fill:url(#linear-gradient-5)", `}`, ".cls-8", `{`, "fill:#02a5b7", `}`, ".cls-9", `{`, "fill:#4ac4d0", `}`, ".cls-10", `{`, "fill:#018390", `}`, ".cls-11", `{`, "fill:#f5ead7", `}`, ".cls-12", `{`, "fill:#eab22b", `}`, ".cls-13", `{`, "fill:#e03c4b", `}`, ".cls-14", `{`, "fill:url(#linear-gradient-6)", `}`, ".cls-15", `{`, "fill:#f8d3d2", `}`, ".cls-16", `{`, "fill:url(#linear-gradient-7)", `}`, ".cls-17", `{`, "fill:#ee5450", `}`, ".cls-18", `{`, "fill:url(#linear-gradient-8)", `}`, ".cls-19", `{`, "fill:url(#linear-gradient-9)", `}`, ".cls-20", `{`, "fill:url(#linear-gradient-10)", `}`, ".cls-21", `{`, "fill:#e98081", `}`, ".cls-22", `{`, "fill:url(#linear-gradient-11)", `}`, ".cls-23", `{`, "fill:url(#linear-gradient-12)", `}`, ".cls-24", `{`, "fill:#dae2e5", `}`, ".cls-25", `{`, "fill:url(#linear-gradient-13)", `}`, ".cls-26", `{`, "fill:url(#linear-gradient-14)", `}`, ".cls-27", `{`, "fill:url(#linear-gradient-15)", `}`, ".cls-28", `{`, "fill:url(#linear-gradient-16)", `}`, ".cls-29", `{`, "fill:url(#linear-gradient-17)", `}`, ".cls-30", `{`, "fill:url(#linear-gradient-18)", `}`), __jsx("linearGradient", {
    id: "linear-gradient",
    x1: "559.79",
    y1: "630.03",
    x2: "509.16",
    y2: "221.05",
    gradientUnits: "userSpaceOnUse"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#dae2e5"
  }), __jsx("stop", {
    offset: ".99",
    stopColor: "#fff"
  })), __jsx("linearGradient", {
    id: "linear-gradient-2",
    x1: "1119.5",
    y1: "1048.04",
    x2: "1137.2",
    y2: "638.24",
    gradientUnits: "userSpaceOnUse"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#cfd8dd"
  }), __jsx("stop", {
    offset: ".99",
    stopColor: "#9fd8dd"
  })), __jsx("linearGradient", {
    id: "linear-gradient-3",
    x1: "396.28",
    y1: "1175.09",
    x2: "315.82",
    y2: "525.25",
    gradientUnits: "userSpaceOnUse"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#cfd8dd"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#dca2a5"
  })), __jsx("linearGradient", {
    id: "linear-gradient-4",
    x1: "246.38",
    y1: "1200.31",
    x2: "1230.38",
    y2: "1200.31",
    xlinkHref: "#linear-gradient-2"
  }), __jsx("linearGradient", {
    id: "linear-gradient-5",
    x1: "703.37",
    y1: "805.53",
    x2: "743.6",
    y2: "789.03",
    gradientUnits: "userSpaceOnUse"
  }, __jsx("stop", {
    offset: ".12",
    stopColor: "#ef9b9a"
  }), __jsx("stop", {
    offset: ".44",
    stopColor: "#f0a3a3"
  }), __jsx("stop", {
    offset: ".95",
    stopColor: "#f1baba"
  }), __jsx("stop", {
    offset: ".97",
    stopColor: "#f1bbbb"
  })), __jsx("linearGradient", {
    id: "linear-gradient-6",
    x1: "572.71",
    y1: "507.85",
    x2: "824.44",
    y2: "507.85",
    xlinkHref: "#linear-gradient-5"
  }), __jsx("linearGradient", {
    id: "linear-gradient-7",
    x1: "575.45",
    y1: "911.44",
    x2: "620.73",
    y2: "911.44",
    gradientUnits: "userSpaceOnUse"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#f0adb3"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#f8d3d2"
  })), __jsx("linearGradient", {
    id: "linear-gradient-8",
    x1: "705.38",
    y1: "528.19",
    x2: "690.93",
    y2: "497.25",
    xlinkHref: "#linear-gradient-7"
  }), __jsx("linearGradient", {
    id: "linear-gradient-9",
    x1: "568.63",
    y1: "488.17",
    x2: "588.75",
    y2: "491.78",
    gradientTransform: "rotate(2.81 569.74 491.492)",
    xlinkHref: "#linear-gradient-7"
  }), __jsx("linearGradient", {
    id: "linear-gradient-10",
    x1: "561.55",
    y1: "375.87",
    x2: "602.6",
    y2: "375.87",
    xlinkHref: "#linear-gradient-7"
  }), __jsx("linearGradient", {
    id: "linear-gradient-11",
    x1: "538.1",
    y1: "311.57",
    x2: "611.68",
    y2: "361.25",
    gradientTransform: "rotate(-6.27 591.207 349.74)",
    xlinkHref: "#linear-gradient-7"
  }), __jsx("linearGradient", {
    id: "linear-gradient-12",
    x1: "770.27",
    y1: "392.32",
    x2: "774.91",
    y2: "392.32",
    xlinkHref: "#linear-gradient"
  }), __jsx("linearGradient", {
    id: "linear-gradient-13",
    x1: "469.58",
    y1: "755.6",
    x2: "536.63",
    y2: "750.96",
    gradientUnits: "userSpaceOnUse"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#ee5450"
  }), __jsx("stop", {
    offset: ".98",
    stopColor: "#be3935"
  })), __jsx("linearGradient", {
    id: "linear-gradient-14",
    x1: "662.84",
    y1: "747.52",
    x2: "615.39",
    y2: "808.38",
    xlinkHref: "#linear-gradient-13"
  }), __jsx("linearGradient", {
    id: "linear-gradient-15",
    x1: "518.92",
    y1: "770.67",
    x2: "599.79",
    y2: "770.67",
    xlinkHref: "#linear-gradient-13"
  }), __jsx("linearGradient", {
    id: "linear-gradient-16",
    x1: "611.96",
    y1: "343.28",
    x2: "620.94",
    y2: "396.08",
    xlinkHref: "#linear-gradient-7"
  }), __jsx("linearGradient", {
    id: "linear-gradient-17",
    x1: "569.48",
    y1: "344.95",
    x2: "576.69",
    y2: "307.24",
    xlinkHref: "#linear-gradient-7"
  }), __jsx("linearGradient", {
    id: "linear-gradient-18",
    x1: "676.5",
    y1: "319.96",
    x2: "676.5",
    y2: "319.96",
    xlinkHref: "#linear-gradient-7"
  })), __jsx("path", {
    className: "cls-1",
    d: "M920.81 393.17c-8.18-12.52-26.26-13.29-40.86-10.1s-29.69 9-44 4.76c-24.61-7.24-36.76-41.06-62.38-42.34-20.6-1-36.59 20.43-57.2 21.39-12.72.6-24.53-6.91-33.38-16.07s-15.66-20.12-24.44-29.34c-28-29.44-76.46-36.84-112-17.11-19.95 11.07-35.71 29.44-57.15 37.23-50.66 18.41-108.4-29.09-158.55-9.4C301 343.9 284.12 375.94 256.42 392c-29.47 17.09-68.32 14.47-95.17 35.44-13.08 10.22-21.51 31.17-9.69 42.82 6.3 6.22 16 7.24 24.87 6.88 42.54-1.73 85-26.66 125.59-13.7 23.56 7.52 41.43 26.64 63.25 38.29a109.84 109.84 0 0 0 90.3 5.42c20.1-7.81 38.48-21.77 60-23.06 33-2 59.08 25.59 87.93 41.68 52.6 29.33 124.63 17.83 165.5-26.43 13.22-14.33 23.78-31.87 40.68-41.56 28.27-16.21 66-5.87 94.49-21.7 15.04-8.38 26.07-28.48 16.64-42.91z",
    transform: "translate(-145.91 -255.25)"
  }), __jsx("path", {
    className: "cls-2",
    d: "M1333.11 982.9c14.83 17.57 5.42 45.82-11.71 61.15s-39.85 22.63-59.28 34.9-36.82 33.64-32.26 56.17a890.32 890.32 0 0 0-203.59 1.89 186.37 186.37 0 0 0-62.43-92.37c-15.54-12.32-33.35-22.42-45.3-38.24a71.79 71.79 0 0 1 31.65-110.32c-14.19-23.27-28.89-48.18-28.51-75.44s22.71-56.06 49.75-52.58c-14.48-25-15.51-57.31-2.65-83.2s39.22-44.58 67.9-48.15c-10.34-33.4 3.85-72.83 33.11-92s71.08-16.34 97.53 6.52 35.27 63.84 20.57 95.56c26.26-.53 52.34 13.52 66.35 35.73s15.45 51.8 3.66 75.27c-4.85 9.67-11.73 18.26-16 28.19s-5.58 22.19.63 31c11.73 16.72 37.94 9.49 57.21 16.24 22.23 7.79 32.39 38.66 19.12 58.12-6 8.84-15.36 14.74-23.26 22s-14.81 17.18-13.34 27.78c1.55 11.25 11.9 19.07 22.07 24.12s21.45 8.98 28.78 17.66z",
    transform: "translate(-145.91 -255.25)"
  }), __jsx("path", {
    className: "cls-3",
    d: "M234.67 931.68C220.29 947.83 207.7 967 206 988.6s10.75 45.34 31.76 50.45c19.71 4.79 40-7.31 60.16-5.39 12 1.15 22.93 7.14 34.12 11.66 54.5 22 116.72 8.91 171.8-11.54 10.21-3.79 20.63-8 28.41-15.63s12.37-19.51 8.46-29.68c-3.54-9.21-12.87-14.76-22-18.61s-18.81-6.94-25.85-13.86-10-19.31-3.26-26.5 19.32-5.56 26.89-12c8.4-7.14 6.51-21.51-1-29.54s-18.8-11.26-29.52-13.86-22-5.13-30.38-12.27-12.64-20.57-6-29.4c5.29-7.05 16.26-10 18-18.68 1.88-9.6-9.46-16.37-19.12-17.95s-21-2-26.69-9.94c-4.74-6.71-3-16.19 1.06-23.31s10.25-12.85 14.81-19.69c16.36-24.55 7.79-60.74-15.33-79.06s-56.83-19.73-83.84-7.89c-17.53 7.69-34.13 23.42-33.16 42.54s19.45 36.84 13.37 55.14c-8.15 24.55-50.3 21.24-59.93 45.25-7.76 19.16 11.46 38.1 15.3 58.4 2.71 14.35-2.67 29.18-10.8 41.31s-18.88 22.22-28.59 33.13z",
    transform: "translate(-145.91 -255.25)"
  }), __jsx("path", {
    className: "cls-4",
    d: "M1223.49 1183.41H253.27a6.89 6.89 0 0 0-6.89 6.89v.14a6.89 6.89 0 0 0 6.89 6.89H574.8v.2a19.68 19.68 0 0 0 19.68 19.68h176.91a19.68 19.68 0 0 0 19.68-19.68v-.2h432.42a6.88 6.88 0 0 0 6.89-6.89v-.14a6.88 6.88 0 0 0-6.89-6.89z",
    transform: "translate(-145.91 -255.25)"
  }), __jsx("path", {
    className: "cls-5",
    d: "M679.67 680.14s123.09 112.78 132 137.53c0 0 7.57 11-6.19 28.2s-130.7 100.89-138.65 124c0 0 2.94 41.09 13.93 61.89 10.49 19.88-9.65 17.59-15.73 13.15-6.62-4.82-22.3-20.11-23.44-38.37s-24.13-19.3-26-29.79 2.52-16.8 8.55-22.24 23.23-10.94 37-28.13 43.33-73.58 97-94.21c0 0-132-55.71-156.78-89.4s49.43-79.77 78.31-62.63z",
    transform: "translate(-145.91 -255.25)"
  }), __jsx("path", {
    className: "cls-6",
    d: "M631.53 950s-6 20.24 10.2 43.38 25.66 27.63 30.39 24 5.17 4.1 9.18 11.75c5.68 10.83 2.6 19.49-3.72 19.95s-21.73-7.82-29.8-19.95-32.24-41.68-34.3-53.12C611.38 964.32 621 953 631.53 950z",
    transform: "translate(-145.91 -255.25)"
  }), __jsx("path", {
    className: "cls-6",
    d: "M628.69 984.59l-.77-11a101 101 0 0 0 40.62-.09l.19 11.32a194.85 194.85 0 0 1-40.04-.23z",
    transform: "translate(-145.91 -255.25)"
  }), __jsx("path", {
    className: "cls-7",
    d: "M744.2 761.09c-3.1-7.61-10.53-12.42-17.53-16.73-4-2.48-8.29-5-13-5.16-6.6-.18-12.3 4.37-17 9a150.48 150.48 0 0 0-29.92 41.2l110.15 49.47a93.6 93.6 0 0 1-30.38-62.49c-.4-5.18-.37-10.5-2.32-15.29z",
    transform: "translate(-145.91 -255.25)"
  }), __jsx("path", {
    className: "cls-8",
    d: "M492.4 851.4q6.44-5.94 13-11.74a197.49 197.49 0 0 0-116.52-37.82c-105.36 0-191.52 82.14-198 185.87H208c6.43-94.29 84.93-168.78 180.85-168.78A180.43 180.43 0 0 1 492.4 851.4z",
    transform: "translate(-145.91 -255.25)"
  }), __jsx("path", {
    className: "cls-9",
    d: "M389.38 841.16a165.07 165.07 0 1 0 165.06 165.07 165.06 165.06 0 0 0-165.06-165.07zm0 323.42a158.36 158.36 0 1 1 158.35-158.35 158.35 158.35 0 0 1-158.35 158.35z",
    transform: "translate(-145.91 -255.25)"
  }), __jsx("path", {
    className: "cls-6",
    d: "M389.38 816.86c-104.59 0-189.38 84.78-189.38 189.37s84.78 189.36 189.37 189.36 189.37-84.78 189.37-189.36S494 816.86 389.38 816.86zm0 362.42a173.06 173.06 0 1 1 173-173 173.05 173.05 0 0 1-173 173z",
    transform: "translate(-145.91 -255.25)"
  }), __jsx("circle", {
    className: "cls-9",
    cx: "382.86",
    cy: "1006.23",
    r: "25.98",
    transform: "rotate(-76.57 148.155 970.997)"
  }), __jsx("path", {
    className: "cls-10",
    d: "M638.91 1034.39h-.76v-11.27h.76a158.84 158.84 0 0 0 120.3-55l158.71-183.78 8.52 7.36-158.71 183.74a170.1 170.1 0 0 1-128.82 58.95z",
    transform: "translate(-145.91 -255.25)"
  }), __jsx("path", {
    className: "cls-9",
    transform: "rotate(-9.27 -1275.203 1698.25)",
    d: "M370.95 848.53h1.69v154.42h-1.69z"
  }), __jsx("path", {
    className: "cls-9",
    transform: "rotate(-80.71 182.858 883.983)",
    d: "M328.8 924.9h154.42v1.69H328.8z"
  }), __jsx("path", {
    className: "cls-9",
    transform: "rotate(-9.27 -1240.989 1861.992)",
    d: "M405.16 1012.21h1.69v154.42h-1.69z"
  }), __jsx("path", {
    className: "cls-9",
    transform: "rotate(-80.71 148.639 1047.655)",
    d: "M294.58 1088.57H449v1.69H294.58z"
  }), __jsx("path", {
    className: "cls-9",
    transform: "rotate(-9.27 -1339.972 1797.29)",
    d: "M229.85 1023.84h154.42v1.69H229.85z"
  }), __jsx("path", {
    className: "cls-9",
    transform: "rotate(-80.73 83.926 948.656)",
    d: "M306.22 913.26h1.69v154.42h-1.69z"
  }), __jsx("path", {
    className: "cls-9",
    transform: "rotate(-9.29 -1172.97 1760.778)",
    d: "M393.53 989.63h154.42v1.69H393.53z"
  }), __jsx("path", {
    className: "cls-9",
    transform: "rotate(-80.73 247.606 982.876)",
    d: "M469.89 947.48h1.69v154.42h-1.69z"
  }), __jsx("path", {
    className: "cls-9",
    transform: "rotate(-54.27 -3.003 976.574)",
    d: "M318.09 884.6h1.69v154.42h-1.69z"
  }), __jsx("path", {
    className: "cls-9",
    transform: "rotate(-35.73 -125.832 1036.285)",
    d: "M342.28 860.4h1.69v154.42h-1.69z"
  }), __jsx("path", {
    className: "cls-9",
    transform: "rotate(-54.27 136.929 1068.121)",
    d: "M458.02 976.14h1.69v154.42h-1.69z"
  }), __jsx("path", {
    className: "cls-9",
    transform: "rotate(-35.73 -34.296 1176.206)",
    d: "M433.83 1000.33h1.69v154.42h-1.69z"
  }), __jsx("path", {
    className: "cls-9",
    transform: "rotate(-54.3 21.353 1092.231)",
    d: "M265.92 1076.7h154.42v1.69H265.92z"
  }), __jsx("path", {
    className: "cls-9",
    transform: "rotate(-35.75 -149.732 1151.968)",
    d: "M241.72 1052.51h154.42v1.69H241.72z"
  }), __jsx("path", {
    className: "cls-9",
    transform: "rotate(-54.3 112.872 952.263)",
    d: "M357.46 936.77h154.42v1.69H357.46z"
  }), __jsx("path", {
    className: "cls-9",
    transform: "rotate(-35.75 -9.794 1060.428)",
    d: "M381.65 960.96h154.42v1.69H381.65z"
  }), __jsx("path", {
    className: "cls-9",
    transform: "rotate(-65.47 39.837 962.07)",
    d: "M310.53 899.05h1.69v154.42h-1.69z"
  }), __jsx("path", {
    className: "cls-9",
    transform: "rotate(-46.92 -36.618 988.31)",
    d: "M329.57 870.62h1.69v154.42h-1.69z"
  }), __jsx("path", {
    className: "cls-9",
    transform: "rotate(-65.46 194.97 1024.835)",
    d: "M465.57 961.69h1.69v154.42h-1.69z"
  }), __jsx("path", {
    className: "cls-9",
    transform: "rotate(-46.92 80.345 1107.814)",
    d: "M446.54 990.12h1.69v154.42h-1.69z"
  }), __jsx("path", {
    className: "cls-9",
    transform: "rotate(-65.45 86.075 1071.056)",
    d: "M280.37 1084.25h154.42v1.69H280.37z"
  }), __jsx("path", {
    className: "cls-9",
    transform: "rotate(-46.9 -38.047 1106.603)",
    d: "M251.94 1065.22h154.42v1.69H251.94z"
  }), __jsx("path", {
    className: "cls-9",
    transform: "rotate(-65.46 148.64 915.909)",
    d: "M343.01 929.22h154.42v1.69H343.01z"
  }), __jsx("path", {
    className: "cls-9",
    transform: "rotate(-46.9 81.454 989.641)",
    d: "M371.44 948.25h154.42v1.69H371.44z"
  }), __jsx("path", {
    className: "cls-9",
    transform: "rotate(-19.11 -519.955 1344.164)",
    d: "M233.98 1037.58H388.4v1.69H233.98z"
  }), __jsx("path", {
    className: "cls-9",
    transform: "rotate(-.56 -25883.26 15805.06)",
    d: "M228.13 1003.87h154.42v1.69H228.13z"
  }), __jsx("path", {
    className: "cls-9",
    transform: "rotate(-19.11 -364.548 1282.506)",
    d: "M389.4 975.89h154.42v1.69H389.4z"
  }), __jsx("path", {
    className: "cls-9",
    transform: "rotate(-.56 -25716.514 15810.99)",
    d: "M395.25 1009.6h154.42v1.69H395.25z"
  }), __jsx("path", {
    className: "cls-9",
    transform: "rotate(-19.12 -411.101 1390.641)",
    d: "M418.9 1008.08h1.69v154.42h-1.69z"
  }), __jsx("path", {
    className: "cls-9",
    transform: "rotate(-.57 -25343.6 15631.54)",
    d: "M385.19 1013.93h1.69v154.42h-1.69z"
  }), __jsx("path", {
    className: "cls-9",
    transform: "rotate(-19.12 -472.793 1235.234)",
    d: "M357.21 852.66h1.69v154.42h-1.69z"
  }), __jsx("path", {
    className: "cls-9",
    transform: "rotate(-.57 -25337.744 15464.705)",
    d: "M390.92 846.81h1.69v154.42h-1.69z"
  }), __jsx("path", {
    className: "cls-11",
    d: "M628.09 924.75h5.5v3.54h7.33a5.88 5.88 0 0 0 5.88-5.88v-.8a5.88 5.88 0 0 0-5.88-5.88h-7.33V919H608v-3.22h-6.52a5.88 5.88 0 0 0-5.88 5.88v.8a5.88 5.88 0 0 0 5.88 5.88H608v-3.54h10l23.59 81.74h10.06z",
    transform: "translate(-145.91 -255.25)"
  }), __jsx("path", {
    className: "cls-8",
    d: "M701.08 1002.23a4.05 4.05 0 0 1-.85-2.19 4 4 0 0 1 .51-2.28 4.77 4.77 0 0 0 .55-3.41l-.09-.45-.06-.33a5.08 5.08 0 0 0-1.68-3 4.06 4.06 0 0 1-1.3-1.95 4 4 0 0 1 0-2.34 5.28 5.28 0 0 0-.28-3.45l-.17-.42-.13-.31a5.9 5.9 0 0 0-.93-1.5 6.32 6.32 0 0 0-1.44-1 4 4 0 0 1-1.67-1.62 4.93 4.93 0 0 1-.55-2.27 5.73 5.73 0 0 0-1-3.31l-.26-.38-.19-.27a5.31 5.31 0 0 0-2.91-1.9 3.91 3.91 0 0 1-2-1.23 4.27 4.27 0 0 1-1.1-2 5.9 5.9 0 0 0-1.7-3l-.36-.28-.26-.21a5.8 5.8 0 0 0-3.25-1.21 5.14 5.14 0 0 1-2.21-.72 3.93 3.93 0 0 1-1.52-1.77 4.84 4.84 0 0 0-2.36-2.54l-.41-.2-.29-.15a5.69 5.69 0 0 0-3.42-.52 4 4 0 0 1-2.34-.14 4.07 4.07 0 0 1-1.86-1.42 5 5 0 0 0-2.89-1.9l-.45-.11-.32-.08a4.79 4.79 0 0 0-3.45.31 4 4 0 0 1-2.31.36 4.4 4.4 0 0 1-2.13-1 5.68 5.68 0 0 0-3.25-1.17H650a4.82 4.82 0 0 0-3.28 1.13 4 4 0 0 1-2.17.84 4.33 4.33 0 0 1-2.26-.49 5.46 5.46 0 0 0-3.24-.64l-.42.05h-.31a5.37 5.37 0 0 0-3 1.42 3.71 3.71 0 0 1-4.25.53 5.36 5.36 0 0 0-3.23-.65h-.74a5.37 5.37 0 0 0-3 1.42 3.61 3.61 0 0 1-2 .94 3.7 3.7 0 0 1-2.21-.41 5.36 5.36 0 0 0-3.23-.65l-.43.06h-.31a5.37 5.37 0 0 0-3 1.42 3.66 3.66 0 0 1-2 .95 3.73 3.73 0 0 1-2.2-.42 5.48 5.48 0 0 0-3.24-.65l-.43.06h-.31a5.42 5.42 0 0 0-3 1.41 3.66 3.66 0 0 1-2 1 3.75 3.75 0 0 1-2.21-.42 5.4 5.4 0 0 0-3.24-.64h-.73a5.42 5.42 0 0 0-3 1.41 3.67 3.67 0 0 1-4.25.53 5.38 5.38 0 0 0-3.24-.64l-.42.05h-.31a5.42 5.42 0 0 0-3 1.41 3.66 3.66 0 0 1-2 1 3.62 3.62 0 0 1-2.21-.42 5.38 5.38 0 0 0-3.24-.64l-.42.05h-.31a5.42 5.42 0 0 0-3 1.41 3.66 3.66 0 0 1-2 1 3.62 3.62 0 0 1-2.21-.42 5.36 5.36 0 0 0-3.23-.64l-.43.05h-.31a5.37 5.37 0 0 0-3 1.42 3.71 3.71 0 0 1-2 .94 3.63 3.63 0 0 1-2.21-.42 5.35 5.35 0 0 0-3.23-.64h-.74a5.37 5.37 0 0 0-3 1.42 3.68 3.68 0 0 1-2 .94 3.63 3.63 0 0 1-2.21-.42 5.42 5.42 0 0 0-3.23-.64h-.74a5.37 5.37 0 0 0-3 1.42 3.7 3.7 0 0 1-4.24.53 5.4 5.4 0 0 0-3.24-.65l-.43.06h-.3a5.43 5.43 0 0 0-3 1.42 3.58 3.58 0 0 1-2 .94 3.67 3.67 0 0 1-2.21-.41 5.4 5.4 0 0 0-3.24-.65l-.42.06h-.31a5.44 5.44 0 0 0-3 1.42 3.72 3.72 0 0 1-2 1 3.76 3.76 0 0 1-2.21-.42 5.46 5.46 0 0 0-3.24-.65l-.42.06h-.31a5.42 5.42 0 0 0-3 1.41 3.67 3.67 0 0 1-4.25.53 5.38 5.38 0 0 0-3.24-.64l-.42.05h-.31a5.42 5.42 0 0 0-3 1.41 3.67 3.67 0 0 1-4.25.53 5.36 5.36 0 0 0-3.23-.64l-.43.05h-.31a5.42 5.42 0 0 0-3 1.41 3.67 3.67 0 0 1-4.25.53 5.35 5.35 0 0 0-3.23-.64l-.43.05h-.31a5.37 5.37 0 0 0-3 1.42 3.69 3.69 0 0 1-4.25.52 5.35 5.35 0 0 0-3.23-.64h-.74a5.37 5.37 0 0 0-3 1.42 3.65 3.65 0 0 1-2 .94 3.59 3.59 0 0 1-2.2-.42 5.47 5.47 0 0 0-3.24-.64H448a5.37 5.37 0 0 0-3 1.42 3.71 3.71 0 0 1-2 .94 3.67 3.67 0 0 1-2.21-.41 5.4 5.4 0 0 0-3.24-.65h-.73a5.37 5.37 0 0 0-3 1.42 3.64 3.64 0 0 1-2 .94 3.69 3.69 0 0 1-2.21-.41 5.39 5.39 0 0 0-3.24-.65l-.42.06h-.31a5.37 5.37 0 0 0-3 1.42 3.64 3.64 0 0 1-2 .94 3.69 3.69 0 0 1-2.21-.41 5.46 5.46 0 0 0-3.24-.65l-.42.06h-.31a5.35 5.35 0 0 0-3 1.41 3.72 3.72 0 0 1-2 1 3.76 3.76 0 0 1-2.21-.42 5.35 5.35 0 0 0-3.23-.64l-.43.05h-.31a5.42 5.42 0 0 0-3 1.41 3.63 3.63 0 0 1-2 1 3.7 3.7 0 0 1-2.21-.42 5.35 5.35 0 0 0-3.23-.64l-.43.05h-.31a5.42 5.42 0 0 0-3 1.41 3.67 3.67 0 0 1-4.25.53 5.35 5.35 0 0 0-3.23-.64l-.43.05.83 6.67h.43a5.37 5.37 0 0 0 3-1.42 3.61 3.61 0 0 1 2-.94 3.7 3.7 0 0 1 2.21.41 5.36 5.36 0 0 0 3.23.65h.74a5.44 5.44 0 0 0 3-1.42 3.66 3.66 0 0 1 2-.95 3.73 3.73 0 0 1 2.2.42 5.48 5.48 0 0 0 3.24.65h.31l.42-.06a5.35 5.35 0 0 0 3-1.41 3.67 3.67 0 0 1 4.25-.53 5.4 5.4 0 0 0 3.24.64h.31l.42-.06a5.42 5.42 0 0 0 3-1.41 3.67 3.67 0 0 1 4.25-.53 5.38 5.38 0 0 0 3.24.64h.31l.42-.05a5.42 5.42 0 0 0 3-1.41 3.66 3.66 0 0 1 2-1 3.62 3.62 0 0 1 2.21.42 5.38 5.38 0 0 0 3.24.64h.31l.42-.05a5.37 5.37 0 0 0 3-1.42 3.71 3.71 0 0 1 2-.94 3.62 3.62 0 0 1 2.21.42 5.35 5.35 0 0 0 3.23.64h.74a5.37 5.37 0 0 0 3-1.42 3.68 3.68 0 0 1 2-.94 3.63 3.63 0 0 1 2.21.42 5.42 5.42 0 0 0 3.23.64h.74a5.37 5.37 0 0 0 3-1.42 3.7 3.7 0 0 1 4.24-.53 5.4 5.4 0 0 0 3.24.65h.74a5.43 5.43 0 0 0 3-1.42 3.58 3.58 0 0 1 2-.94 3.65 3.65 0 0 1 2.2.41 5.4 5.4 0 0 0 3.24.65h.73a5.37 5.37 0 0 0 3-1.42 3.71 3.71 0 0 1 4.25-.53 5.39 5.39 0 0 0 3.24.65h.73a5.44 5.44 0 0 0 3-1.42 3.72 3.72 0 0 1 2-.95 3.76 3.76 0 0 1 2.21.42 5.46 5.46 0 0 0 3.24.65h.31l.42-.06a5.42 5.42 0 0 0 3-1.41 3.67 3.67 0 0 1 4.25-.53 5.36 5.36 0 0 0 3.23.64h.31l.43-.06a5.42 5.42 0 0 0 3-1.41 3.66 3.66 0 0 1 2-1 3.62 3.62 0 0 1 2.21.42 5.35 5.35 0 0 0 3.23.64h.31l.43-.05a5.42 5.42 0 0 0 3-1.41 3.67 3.67 0 0 1 4.25-.53 5.35 5.35 0 0 0 3.23.64h.74a5.37 5.37 0 0 0 3-1.42 3.65 3.65 0 0 1 2-.94 3.59 3.59 0 0 1 2.2.42 5.4 5.4 0 0 0 3.24.64h.74a5.43 5.43 0 0 0 3-1.42 3.65 3.65 0 0 1 2-.94 3.6 3.6 0 0 1 2.21.42 5.47 5.47 0 0 0 3.24.64h.73a5.37 5.37 0 0 0 3-1.42 3.71 3.71 0 0 1 2-.94 3.67 3.67 0 0 1 2.21.41 5.39 5.39 0 0 0 3.24.65h.73a5.37 5.37 0 0 0 3-1.42 3.64 3.64 0 0 1 2-.94 3.69 3.69 0 0 1 2.21.41 5.39 5.39 0 0 0 3.24.65h.73a5.37 5.37 0 0 0 3-1.42 3.64 3.64 0 0 1 2-.94 3.69 3.69 0 0 1 2.21.41 5.44 5.44 0 0 0 3.23.65h.31l.43-.06a5.35 5.35 0 0 0 3-1.41 3.72 3.72 0 0 1 2-1 3.78 3.78 0 0 1 2.21.42 5.35 5.35 0 0 0 3.23.64h.31l.43-.06a5.42 5.42 0 0 0 3-1.41 3.6 3.6 0 0 1 2-1 3.7 3.7 0 0 1 2.21.42 5.35 5.35 0 0 0 3.23.64h.31l.43-.06a5.42 5.42 0 0 0 3-1.41 3.65 3.65 0 0 1 4.24-.53 5.4 5.4 0 0 0 3.24.64h.73a5.42 5.42 0 0 0 3-1.41 3.66 3.66 0 0 1 2-1 3.6 3.6 0 0 1 2.21.42 5.4 5.4 0 0 0 3.24.64h.73a5.37 5.37 0 0 0 3-1.42 3.17 3.17 0 0 1 2-.86 3.37 3.37 0 0 1 2.1.54 6.34 6.34 0 0 0 3 1h.69a5 5 0 0 0 3-.93 3.14 3.14 0 0 1 2.1-.4 3.37 3.37 0 0 1 1.93 1 6.2 6.2 0 0 0 2.67 1.64l.28.08.38.09a6 6 0 0 0 3.13-.19 3.39 3.39 0 0 1 3.83 1.42 5.09 5.09 0 0 0 2.21 2.24l.26.13.35.18a6.21 6.21 0 0 0 3.07.56 3.45 3.45 0 0 1 2.12.51 2.83 2.83 0 0 1 1.28 1.75 5 5 0 0 0 1.69 2.63l.23.18.31.24a4.9 4.9 0 0 0 2.84 1.28 3.22 3.22 0 0 1 2 .95 3.45 3.45 0 0 1 .82 2 5.42 5.42 0 0 0 1.08 2.92l.16.24.23.33a5 5 0 0 0 2.53 1.84 2.84 2.84 0 0 1 1.64 1.41 3.34 3.34 0 0 1 .38 2.13 5.16 5.16 0 0 0 0 1.57 4.66 4.66 0 0 0 .34 1.53l.11.27.16.37a5.55 5.55 0 0 0 2.08 2.36 3.27 3.27 0 0 1 1.24 1.75 3.35 3.35 0 0 1-.07 2.15 5.7 5.7 0 0 0-.42 3.11l.05.29.08.39a6.38 6.38 0 0 0 1.45 2.77 3.39 3.39 0 0 1 .84 2 3.31 3.31 0 0 1-.53 2.09 6 6 0 0 0-1.07 3v.69a5.55 5.55 0 0 0 .9 3 3.29 3.29 0 0 1 .39 2.11 3.34 3.34 0 0 1-1 1.93 4.15 4.15 0 0 0-.52.59 4.19 4.19 0 0 0-.5.63 4.51 4.51 0 0 0-.65 1.43l-.07.28-.1.39a6.25 6.25 0 0 0 .16 3.12 3.34 3.34 0 0 1-.07 2.16 3.26 3.26 0 0 1-1.36 1.66 5.1 5.1 0 0 0-2.26 2.19l-.13.26-.18.36a6.28 6.28 0 0 0-.58 3.06 3.42 3.42 0 0 1-.54 2.1 3.31 3.31 0 0 1-.74.83 3.46 3.46 0 0 1-1 .45 5 5 0 0 0-2.66 1.66l-.18.22-.25.32a5.24 5.24 0 0 0-1.29 2.83 3.51 3.51 0 0 1-1 2 3.32 3.32 0 0 1-2 .8 4.92 4.92 0 0 0-2.92 1.07l-.24.16-.33.22a4.92 4.92 0 0 0-1.88 2.49A2.85 2.85 0 0 1 673 1046a3.44 3.44 0 0 1-2.14.35 6 6 0 0 0-3.1.34l-.27.11-.37.14a5.09 5.09 0 0 0-2.38 2.06 3 3 0 0 1-1.76 1.24 3.35 3.35 0 0 1-2.15-.12 6.47 6.47 0 0 0-1.53-.38 4.37 4.37 0 0 0-1.57 0h-.29l-.39.07a5.51 5.51 0 0 0-2.78 1.47 3.38 3.38 0 0 1-4.08.21 4.66 4.66 0 0 0-.68-.4 6.1 6.1 0 0 0-.72-.37 4.75 4.75 0 0 0-1.53-.36h-.69a5.8 5.8 0 0 0-3.07.83 3.7 3.7 0 0 1-4.26-.48 5.31 5.31 0 0 0-3-1.38h-.74a5.38 5.38 0 0 0-3.23.68 3.68 3.68 0 0 1-4.25-.48 5.34 5.34 0 0 0-3-1.38h-.73a5.46 5.46 0 0 0-3.23.69 3.68 3.68 0 0 1-4.25-.48 5.34 5.34 0 0 0-3-1.38h-.74a5.34 5.34 0 0 0-3.22.69 3.7 3.7 0 0 1-4.26-.48 5.31 5.31 0 0 0-3-1.38h-.74a5.45 5.45 0 0 0-3.23.68 3.6 3.6 0 0 1-2.2.45 3.69 3.69 0 0 1-2-.92 5.34 5.34 0 0 0-3-1.38h-.73a5.45 5.45 0 0 0-3.23.68 3.62 3.62 0 0 1-2.21.45 3.69 3.69 0 0 1-2-.92 5.42 5.42 0 0 0-3-1.39h-.74a5.45 5.45 0 0 0-3.23.68 3.73 3.73 0 0 1-2.2.45 3.66 3.66 0 0 1-2.05-.93 5.44 5.44 0 0 0-3-1.38h-.74a5.38 5.38 0 0 0-3.23.68 3.67 3.67 0 0 1-2.2.44 3.56 3.56 0 0 1-2-.92 5.47 5.47 0 0 0-3-1.38h-.73a5.38 5.38 0 0 0-3.23.68 3.7 3.7 0 0 1-4.26-.48 5.41 5.41 0 0 0-3-1.38h-.73a5.39 5.39 0 0 0-3.24.68 3.68 3.68 0 0 1-4.25-.48 5.44 5.44 0 0 0-3-1.38h-.74a5.38 5.38 0 0 0-3.23.68 3.67 3.67 0 0 1-2.2.44 3.62 3.62 0 0 1-2-.92 5.44 5.44 0 0 0-3-1.38h-.3l-.43-.05a5.38 5.38 0 0 0-3.23.68 3.7 3.7 0 0 1-4.26-.48 5.41 5.41 0 0 0-3-1.38h-.31l-.42-.05a5.41 5.41 0 0 0-3.24.68 3.68 3.68 0 0 1-4.25-.48 5.37 5.37 0 0 0-3-1.38h-.74a5.38 5.38 0 0 0-3.23.68 3.68 3.68 0 0 1-2.21.44 3.62 3.62 0 0 1-2-.92 5.31 5.31 0 0 0-3-1.38h-.74a5.38 5.38 0 0 0-3.23.68 3.7 3.7 0 0 1-4.26-.48 5.28 5.28 0 0 0-3-1.38h-.73a5.41 5.41 0 0 0-3.24.68 3.68 3.68 0 0 1-4.25-.48 5.31 5.31 0 0 0-3-1.38h-.74a5.38 5.38 0 0 0-3.23.69 3.68 3.68 0 0 1-4.25-.48 5.31 5.31 0 0 0-3-1.38h-.74a5.45 5.45 0 0 0-3.23.68 3.63 3.63 0 0 1-2.21.45 3.72 3.72 0 0 1-2.05-.92 5.28 5.28 0 0 0-3-1.38H445a5.48 5.48 0 0 0-3.24.68 3.66 3.66 0 0 1-4.25-.47 5.39 5.39 0 0 0-3-1.39h-.74a5.45 5.45 0 0 0-3.23.68 3.76 3.76 0 0 1-2.21.45 3.63 3.63 0 0 1-2-.93 5.44 5.44 0 0 0-3-1.38h-.74a5.45 5.45 0 0 0-3.23.68 3.7 3.7 0 0 1-2.21.44 3.59 3.59 0 0 1-2.05-.92 5.41 5.41 0 0 0-3-1.38h-.73a5.41 5.41 0 0 0-3.24.68 3.67 3.67 0 0 1-2.2.44 3.62 3.62 0 0 1-2-.92 5.41 5.41 0 0 0-3-1.38h-.73a5.39 5.39 0 0 0-3.24.68 3.68 3.68 0 0 1-2.21.44 3.62 3.62 0 0 1-2-.92 5.44 5.44 0 0 0-3-1.38h-.74a5.38 5.38 0 0 0-3.23.68 3.7 3.7 0 0 1-2.21.44 3.65 3.65 0 0 1-2-.92 5.38 5.38 0 0 0-3-1.38h-.31l-.33-.07a5.56 5.56 0 0 0-2.79.4 2.58 2.58 0 0 1-2-.08 2.52 2.52 0 0 1-1.34-1.51 5.54 5.54 0 0 0-1.48-2.42l-.19-.16-.25-.25a5.41 5.41 0 0 0-2.51-1.32 2.59 2.59 0 0 1-1.59-1.25 2.54 2.54 0 0 1-.2-2 5.51 5.51 0 0 0 .21-2.82l-.06-.25-.06-.34a4.22 4.22 0 0 0-.44-1.31 5.38 5.38 0 0 0-.82-1.23 2.93 2.93 0 0 1-.6-2 2.58 2.58 0 0 1 1-1.76 5.68 5.68 0 0 0 1.78-2.2l.1-.23.14-.32a5.49 5.49 0 0 0 .42-2.8 2.54 2.54 0 0 1 2.47-2.78 5.64 5.64 0 0 0 2.73-.75l.22-.13.3-.18a5.47 5.47 0 0 0 2-2 2.7 2.7 0 0 1 1.64-1.2 3.14 3.14 0 0 1 2.05.36 5.36 5.36 0 0 0 3.23.65h.31l-.83-6.67h-.31a5.37 5.37 0 0 0-3 1.42 4.55 4.55 0 0 1-2.18 1 5.42 5.42 0 0 1-2.47 0 5.17 5.17 0 0 0-3.72.55l-.44.26-.32.19a5.11 5.11 0 0 0-2.28 3 5.67 5.67 0 0 1-3.2 3.59 5.22 5.22 0 0 0-2.7 2.62l-.21.47-.14.34a5.16 5.16 0 0 0-.11 3.76 5.56 5.56 0 0 1 .29 2.45 4.76 4.76 0 0 1-.8 2.31 6 6 0 0 0-.69 1.73 5.85 5.85 0 0 0 0 2s.08.5.09.5l.08.36a5.23 5.23 0 0 0 2.05 3.15 5.74 5.74 0 0 1 1.65 1.84 5.64 5.64 0 0 1 .68 2.38 5.33 5.33 0 0 0 1.58 3.42s.35.36.36.35l.28.24a5.18 5.18 0 0 0 3.14-.45 5.82 5.82 0 0 1 2.41.54 5.46 5.46 0 0 1 1.94 1.53 5.27 5.27 0 0 0 3.3 1.84l.51.09h.31a5.38 5.38 0 0 0 3.23-.68 3.7 3.7 0 0 1 4.26.48 5.25 5.25 0 0 0 3 1.38h.73a5.41 5.41 0 0 0 3.24-.68 3.68 3.68 0 0 1 4.25.48 5.31 5.31 0 0 0 3 1.38h.74a5.45 5.45 0 0 0 3.23-.68 3.63 3.63 0 0 1 2.21-.45 3.72 3.72 0 0 1 2.05.92 5.25 5.25 0 0 0 3 1.38h.73a5.48 5.48 0 0 0 3.24-.68 3.6 3.6 0 0 1 2.2-.45 3.69 3.69 0 0 1 2.05.92 5.31 5.31 0 0 0 3 1.38h.74a5.45 5.45 0 0 0 3.23-.68 3.78 3.78 0 0 1 2.21-.45 3.6 3.6 0 0 1 2 .93 5.44 5.44 0 0 0 3 1.38h.73a5.48 5.48 0 0 0 3.24-.68 3.67 3.67 0 0 1 2.2-.44 3.56 3.56 0 0 1 2.05.92 5.44 5.44 0 0 0 3 1.38h.74a5.38 5.38 0 0 0 3.23-.68 3.68 3.68 0 0 1 2.21-.44 3.62 3.62 0 0 1 2 .92 5.47 5.47 0 0 0 3 1.38h.73a5.41 5.41 0 0 0 3.24-.68 3.67 3.67 0 0 1 2.2-.44 3.62 3.62 0 0 1 2.05.92 5.44 5.44 0 0 0 3 1.38h.74a5.38 5.38 0 0 0 3.23-.68 3.68 3.68 0 0 1 2.21-.44 3.62 3.62 0 0 1 2 .92 5.47 5.47 0 0 0 3 1.38h.73a5.41 5.41 0 0 0 3.24-.68 3.68 3.68 0 0 1 4.25.48 5.37 5.37 0 0 0 3 1.38h.74a5.38 5.38 0 0 0 3.23-.68 3.68 3.68 0 0 1 2.21-.44 3.62 3.62 0 0 1 2 .92 5.34 5.34 0 0 0 3 1.38h.73a5.36 5.36 0 0 0 3.23-.68 3.7 3.7 0 0 1 4.26.48 5.31 5.31 0 0 0 3 1.38h.74a5.46 5.46 0 0 0 3.23-.69 3.68 3.68 0 0 1 4.25.48 5.34 5.34 0 0 0 3 1.38h.73a5.43 5.43 0 0 0 3.23-.68 3.63 3.63 0 0 1 2.21-.45 3.72 3.72 0 0 1 2 .92 5.31 5.31 0 0 0 3 1.38h.74a5.45 5.45 0 0 0 3.23-.68 3.6 3.6 0 0 1 2.2-.45 3.69 3.69 0 0 1 2 .92 5.42 5.42 0 0 0 3 1.39h.73a5.43 5.43 0 0 0 3.23-.68 3.78 3.78 0 0 1 2.21-.45 3.66 3.66 0 0 1 2.05.93 5.44 5.44 0 0 0 3 1.38h.74a5.38 5.38 0 0 0 3.23-.68 3.67 3.67 0 0 1 2.2-.44 3.62 3.62 0 0 1 2 .92 5.47 5.47 0 0 0 3 1.38l.42.05h.31a5.36 5.36 0 0 0 3.23-.68 3.7 3.7 0 0 1 2.21-.44 3.65 3.65 0 0 1 2 .92 5.44 5.44 0 0 0 3 1.38l.43.05h.31a5.38 5.38 0 0 0 3.23-.68 3.67 3.67 0 0 1 2.2-.44 3.62 3.62 0 0 1 2.05.92 5.47 5.47 0 0 0 3 1.38l.42.05h.31a5.36 5.36 0 0 0 3.23-.68 3.7 3.7 0 0 1 4.26.48 5.37 5.37 0 0 0 3 1.38l.43.05h.31a5.38 5.38 0 0 0 3.23-.68 3.67 3.67 0 0 1 2.2-.44 3.62 3.62 0 0 1 2 .92 5.34 5.34 0 0 0 3 1.38h.73a5.36 5.36 0 0 0 3.23-.68 3.7 3.7 0 0 1 4.26.48 5.31 5.31 0 0 0 3 1.38h.74a5.46 5.46 0 0 0 3.23-.69 3.67 3.67 0 0 1 2.2-.44 3.72 3.72 0 0 1 2.05.92 5.34 5.34 0 0 0 3 1.38h.73a5.43 5.43 0 0 0 3.23-.68 3.62 3.62 0 0 1 2.21-.45 3.75 3.75 0 0 1 2.05.92 5.09 5.09 0 0 0 3.16 1.27h.79a5.73 5.73 0 0 0 1.76-.17 5.57 5.57 0 0 0 .81-.29 6.45 6.45 0 0 0 .76-.47 4 4 0 0 1 4.47-.24 5.33 5.33 0 0 0 3.41.54l.46-.08.33-.05a5.58 5.58 0 0 0 1.67-.56 5.25 5.25 0 0 0 1.35-1.14 4 4 0 0 1 2-1.26 4.74 4.74 0 0 1 2.34 0 5.77 5.77 0 0 0 3.45-.24l.43-.17.31-.13a5 5 0 0 0 2.54-2.37 3.93 3.93 0 0 1 1.64-1.64 5.06 5.06 0 0 1 2.26-.56 5.75 5.75 0 0 0 3.33-1l.38-.26.28-.18a6 6 0 0 0 1.91-2.92 4.08 4.08 0 0 1 1.25-2 4 4 0 0 1 2-1.09 5.45 5.45 0 0 0 3.05-1.67l.29-.36.21-.26a5.85 5.85 0 0 0 1.26-3.23 3.85 3.85 0 0 1 .23-1.11 4.31 4.31 0 0 1 .49-1.1 4 4 0 0 1 1.78-1.5 4.8 4.8 0 0 0 2.56-2.34l.21-.41.15-.3a5.73 5.73 0 0 0 .55-3.41 4.08 4.08 0 0 1 .15-2.34 4 4 0 0 1 1.43-1.85 4.88 4.88 0 0 0 1.92-2.88l.11-.44.09-.33a5.54 5.54 0 0 0 .16-1.76 4.05 4.05 0 0 0-.12-.85 4.6 4.6 0 0 0-.32-.83 4.07 4.07 0 0 1-.36-2.32 4.13 4.13 0 0 1 1-2.12 5.22 5.22 0 0 0 1.19-3.24v-.79a5 5 0 0 0-.66-1.4z",
    transform: "translate(-145.91 -255.25)"
  }), __jsx("path", {
    className: "cls-10",
    d: "M662 1025.18l-277.4-13.85a5.57 5.57 0 0 1-3.81-9.36l.08-.08c.48-.51 47.83-51.61 94.9-102 27.65-29.63 49.79-53.24 65.81-70.17 15-15.81 22.91-24.2 27.48-28.64l-20.41-56.58 10.59-3.83zm-264.61-24.49l248.27 12.39-72.37-200.31c-24.94 25.56-112.13 119.11-175.95 187.92z",
    transform: "translate(-145.91 -255.25)"
  }), __jsx("path", {
    className: "cls-10",
    d: "M563.2 817.24a4.51 4.51 0 0 1-1.3-.2l-74.28-22.34H279.88a4.51 4.51 0 0 1 0-9h208.4a4.75 4.75 0 0 1 1.3.19l74.91 22.53a4.51 4.51 0 0 1-1.29 8.83z",
    transform: "translate(-145.91 -255.25)"
  }), __jsx("path", {
    className: "cls-12",
    d: "M599.6 724.59c5 .24 10.8.9 13.52 5.11s.76 10.18-3 13.5-8.87 4.62-13.75 5.84c-26.72 6.65-55.75 13.15-81.05 2.27-5.32-2.31-10.43-5.43-13.44-10.31s-3.26-11.79.64-16c4.13-4.45 11-4.49 17.1-4.2l34.47 1.63z",
    transform: "translate(-145.91 -255.25)"
  }), __jsx("path", {
    className: "cls-10",
    d: "M385.4 1014.75a4.51 4.51 0 0 1-4.36-3.36l-57.83-220a4.51 4.51 0 0 1 8.72-2.29l57.83 220.05a4.52 4.52 0 0 1-4.36 5.65z",
    transform: "translate(-145.91 -255.25)"
  }), __jsx("path", {
    className: "cls-6",
    d: "M656.71 955.93a49 49 0 1 0 38.44 57.66 49 49 0 0 0-38.44-57.66zm19.22 51.76c-.23 1.63-1.81 2.31-2.9 1.39 0 0-.87-.7-1.75-1.32s-1.76-1.17-1.76-1.17a1.79 1.79 0 0 1-.9-1.52v-.82c0-.52-.07-1.27-.1-2.16a23.37 23.37 0 0 0-1.64-6.32 21.12 21.12 0 0 0-3.49-5.53l-.82-.91c-.24-.27-.49-.46-.68-.65l-.6-.55a1.76 1.76 0 0 1-.5-1.68s.22-1 .38-2.12c.09-.55.14-1.07.17-1.47v-.67a1.69 1.69 0 0 1 1-1.48 2 2 0 0 1 1-.13 2.25 2.25 0 0 1 1 .44l1 .79c.66.52 1.53 1.33 2.55 2.33a29 29 0 0 1 5.77 8.65 28.08 28.08 0 0 1 2.31 10.15 26.85 26.85 0 0 1-.04 4.75zm-30-45.51l1.27-.06 3.36.15a16.81 16.81 0 0 1 2.23.24l2.48.37c.85.15 1.71.41 2.6.62a22.79 22.79 0 0 1 2.65.76 37.48 37.48 0 0 1 5.05 2c.77.39 1.55.72 2.24 1.12l1.92 1.17a24.39 24.39 0 0 1 2.77 1.9l1 .77a1.92 1.92 0 0 1 .81 1.8 1.7 1.7 0 0 1-1.12 1.41s-1 .35-2 .78-2 .91-2 .91a1.76 1.76 0 0 1-1.84-.14 7.21 7.21 0 0 0-.71-.52l-2-1.21a35.27 35.27 0 0 0-6.47-2.9 13 13 0 0 0-1.85-.53l-1.81-.46c-1.18-.26-2.31-.36-3.27-.53a19.38 19.38 0 0 0-2.33-.16h-.89a1.94 1.94 0 0 1-.9-.31 1.83 1.83 0 0 1-.66-.69s-.49-.94-1.05-1.87-1.15-1.86-1.15-1.86a1.82 1.82 0 0 1 1.68-2.76zm.21 13.26a26.85 26.85 0 0 1 4.75.19c1.63.24 2.31 1.82 1.39 2.91 0 0-.7.87-1.32 1.74s-1.17 1.77-1.17 1.77a1.79 1.79 0 0 1-1.53.9h-.81c-.53 0-1.27.07-2.16.1a22.56 22.56 0 0 0-6.32 1.64 20.86 20.86 0 0 0-5.53 3.49l-.91.81c-.27.25-.47.5-.65.69l-.55.6a1.79 1.79 0 0 1-1.69.5s-1-.23-2.11-.38c-.55-.09-1.07-.14-1.47-.17l-.68-.05a1.7 1.7 0 0 1-1.47-1 2 2 0 0 1-.13-1 2.26 2.26 0 0 1 .44-1l.79-1c.52-.65 1.33-1.52 2.33-2.54a29 29 0 0 1 8.65-5.78 28.29 28.29 0 0 1 10.16-2.42zm-29 47.27s-.57.9-1.12 1.86-1 1.92-1 1.92a1.81 1.81 0 0 1-3.22-.06l-.65-1.09-.75-1.26c-.25-.5-.52-1.08-.82-1.7l-1-2-.86-2.36-.45-1.24c-.14-.43-.23-.87-.35-1.31l-.69-2.68a43.21 43.21 0 0 1-.81-10.14 27.7 27.7 0 0 1 .25-3.35c.12-.8.18-1.26.18-1.26a1.79 1.79 0 0 1 2.91-1.34s.86.71 1.73 1.36 1.76 1.26 1.76 1.26a1.73 1.73 0 0 1 .75 1.68l-.15 3.22c0 1 .11 2.1.16 3.31s.36 2.47.56 3.74c.35 1.24.59 2.52 1 3.66s.75 2.22 1.17 3.09l1 2.12a4.59 4.59 0 0 0 .42.78 1.75 1.75 0 0 1-.06 1.79zm.73-36.35a1.83 1.83 0 0 1-1.67.83h-2.13c-1.13 0-2.16.08-2.16.08a1.85 1.85 0 0 1-1.6-2.84 10.68 10.68 0 0 1 .62-1.11c.43-.69 1-1.67 1.77-2.86s1.75-2.45 2.91-3.75l1.82-2c.6-.69 1.34-1.25 2-1.89a43.44 43.44 0 0 1 4.27-3.37c1.44-1 2.85-1.77 4.06-2.46l3-1.45a6.54 6.54 0 0 1 .87-.36l.31-.11a1.83 1.83 0 0 1 2.63 1.88s-.18 1.09-.32 2.16-.22 2.12-.22 2.12a1.91 1.91 0 0 1-1 1.56l-.8.38a15.09 15.09 0 0 0-2.07 1.1 27.46 27.46 0 0 0-2.78 1.78l-1.5 1.11c-.52.37-1 .85-1.46 1.26s-1 .85-1.43 1.3l-1.26 1.38a22.93 22.93 0 0 0-2.09 2.56l-.8 1.05-.53.87zm1 14.31c.24-1.63 1.82-2.31 2.91-1.4 0 0 .86.71 1.74 1.33s1.77 1.17 1.77 1.17a1.79 1.79 0 0 1 .9 1.52v.82c0 .52.06 1.26.1 2.16a22.65 22.65 0 0 0 1.64 6.32 21 21 0 0 0 3.49 5.53l.81.91c.25.27.5.46.68.64l.61.56a1.8 1.8 0 0 1 .5 1.68s-.23 1-.39 2.12c-.08.54-.13 1.07-.17 1.47v.67a1.65 1.65 0 0 1-1 1.47 1.88 1.88 0 0 1-1 .14 2.29 2.29 0 0 1-1-.45l-1.05-.79c-.65-.51-1.52-1.32-2.54-2.32a29.18 29.18 0 0 1-5.78-8.65 28.34 28.34 0 0 1-2.31-10.16 26.78 26.78 0 0 1 .06-4.74zm30 45.51l-1.27.06-3.36-.15a16.76 16.76 0 0 1-2.22-.25l-2.48-.36c-.86-.15-1.72-.41-2.6-.62a23 23 0 0 1-2.66-.76 39.27 39.27 0 0 1-5-2c-.78-.39-1.56-.72-2.24-1.12l-1.92-1.17a24.39 24.39 0 0 1-2.77-1.9l-1-.77a1.9 1.9 0 0 1-.8-1.81 1.67 1.67 0 0 1 1.12-1.4s1-.35 2-.78 2-.91 2-.91a1.76 1.76 0 0 1 1.84.13 7.16 7.16 0 0 0 .72.53l2 1.21a34.84 34.84 0 0 0 6.46 2.9 13.84 13.84 0 0 0 1.85.53l1.81.46c1.19.25 2.32.36 3.28.52a19.62 19.62 0 0 0 2.33.17h.88a1.84 1.84 0 0 1 .91.31 1.81 1.81 0 0 1 .65.69s.5.93 1.05 1.87 1.15 1.86 1.15 1.86a1.81 1.81 0 0 1-1.77 2.76zm-.21-13.27a26.78 26.78 0 0 1-4.74-.19c-1.63-.23-2.31-1.81-1.4-2.9 0 0 .71-.87 1.32-1.75s1.18-1.76 1.18-1.76a1.79 1.79 0 0 1 1.52-.9h.82c.52 0 1.26-.07 2.16-.1a23 23 0 0 0 6.32-1.64 21.29 21.29 0 0 0 5.53-3.49l.91-.81c.27-.25.46-.5.64-.69l.56-.6a1.75 1.75 0 0 1 1.68-.5s1 .22 2.12.38c.54.09 1.07.14 1.47.17l.67.05a1.66 1.66 0 0 1 1.47 1 1.9 1.9 0 0 1 .14 1 2.27 2.27 0 0 1-.45 1l-.79 1c-.51.66-1.33 1.53-2.32 2.55a29.11 29.11 0 0 1-8.66 5.78 28 28 0 0 1-10.19 2.4zm35.89-9a9.43 9.43 0 0 1-.63 1.1c-.42.7-1 1.68-1.76 2.87s-1.76 2.45-2.92 3.75l-1.81 2c-.6.69-1.34 1.25-2 1.89a42.19 42.19 0 0 1-4.26 3.37c-1.45 1-2.86 1.77-4.06 2.46l-3 1.44a8.38 8.38 0 0 1-.87.37l-.31.11a1.83 1.83 0 0 1-2.63-1.89s.18-1.08.31-2.15.22-2.12.22-2.12a2 2 0 0 1 1-1.56l.81-.38a15.63 15.63 0 0 0 2.06-1.1 25 25 0 0 0 2.78-1.79l1.51-1.1c.52-.37 1-.85 1.45-1.27s1-.85 1.43-1.29l1.26-1.38a22.72 22.72 0 0 0 2.09-2.56l.8-1.05.53-.87.46-.76a1.86 1.86 0 0 1 1.68-.83h2.12c1.12 0 2.17-.08 2.17-.08a1.85 1.85 0 0 1 1.53 2.85zm4.87-18.2a27.7 27.7 0 0 1-.25 3.35l-.19 1.26a1.79 1.79 0 0 1-2.9 1.34s-.86-.71-1.74-1.36-1.75-1.26-1.75-1.26a1.71 1.71 0 0 1-.76-1.66l.14-3.23c0-1-.11-2.09-.16-3.3s-.36-2.47-.56-3.75c-.35-1.24-.59-2.51-1-3.65s-.75-2.22-1.18-3.09-.76-1.61-1-2.12a4.24 4.24 0 0 0-.41-.78 1.75 1.75 0 0 1 0-1.84s.58-.91 1.13-1.86 1-1.92 1-1.92a1.8 1.8 0 0 1 3.21.06l.66 1.09c.2.35.46.77.75 1.25l.82 1.71 1 2c.27.75.56 1.54.85 2.36.15.4.3.82.45 1.24s.24.87.36 1.31c.23.88.46 1.78.69 2.68a43.13 43.13 0 0 1 .8 10.2z",
    transform: "translate(-145.91 -255.25)"
  }), __jsx("path", {
    className: "cls-13",
    d: "M495.79 794z",
    transform: "translate(-145.91 -255.25)"
  }), __jsx("path", {
    className: "cls-9",
    d: "M1018.54 841.16a165.07 165.07 0 1 0 165.07 165.07 165.06 165.06 0 0 0-165.07-165.07zm0 323.42a158.36 158.36 0 1 1 158.35-158.35 158.36 158.36 0 0 1-158.35 158.35z",
    transform: "translate(-145.91 -255.25)"
  }), __jsx("path", {
    className: "cls-6",
    d: "M1018.54 816.86c-104.58 0-189.37 84.78-189.37 189.37s84.79 189.36 189.37 189.36 189.37-84.78 189.37-189.36-84.78-189.37-189.37-189.37zm0 362.42a173.06 173.06 0 1 1 173-173 173.05 173.05 0 0 1-173 173z",
    transform: "translate(-145.91 -255.25)"
  }), __jsx("path", {
    className: "cls-8",
    d: "M1118.32 851.4q6.43-5.94 13-11.74a197.51 197.51 0 0 0-116.52-37.82c-105.36 0-191.52 82.14-198 185.87h17.13c6.43-94.29 84.93-168.78 180.85-168.78a180.45 180.45 0 0 1 103.54 32.47z",
    transform: "translate(-145.91 -255.25)"
  }), __jsx("circle", {
    className: "cls-9",
    cx: "1018.54",
    cy: "1006.23",
    r: "25.98",
    transform: "rotate(-80.02 793.462 965.512)"
  }), __jsx("path", {
    className: "cls-10",
    d: "M1014.73 1010.37C983 981.22 934 832.24 931.93 825.91l10.7-3.51c.5 1.53 50.19 152.5 79.73 179.68z",
    transform: "translate(-145.91 -255.25)"
  }), __jsx("path", {
    className: "cls-9",
    d: "M997.55 805.22h-40.83a19.31 19.31 0 0 1-19.31-19.3v-88.66h110.89v57.21a50.75 50.75 0 0 1-50.75 50.75z",
    transform: "translate(-145.91 -255.25)"
  }), __jsx("path", {
    className: "cls-10",
    transform: "rotate(-22.23 187.91 998.946)",
    d: "M904.96 692h11.27v126.56h-11.27z"
  }), __jsx("path", {
    className: "cls-14",
    d: "M595.75 408.11s-31.27-6.13-21 29.46 70.66 102.12 82 113 116.05 37.65 116.05 37.65a33.32 33.32 0 0 0 6.19 16c5.67 7.74 45.38 1.55 45.38 1.55s1-16-14.44-28.36-30.93-7.81-41.21-14-90.25-43.32-90.25-43.32-61.24-120.81-82.72-111.98z",
    transform: "translate(-145.91 -255.25)"
  }), __jsx("path", {
    className: "cls-12",
    d: "M905.47 688.47a20.13 20.13 0 0 1-4.22-.49l1.69-7.8c2.44.52 3.39.26 3.61.18.17-.4.93-3.05-3.43-13.38-3.38-8-8.64-18-14.72-29.61q-1.64-3.11-3.31-6.32c-15.79-30.22-41.87-30.78-43.73-30.78h-36.54v-8h36.42c1.26 0 32.54-.13 50.92 35.07 1.12 2.13 2.22 4.24 3.31 6.3 15.61 29.76 22.88 44.39 17.41 51.58-1.64 2.17-4.12 3.25-7.41 3.25z",
    transform: "translate(-145.91 -255.25)"
  }), __jsx("path", {
    className: "cls-6",
    d: "M820.14 601.2a34.55 34.55 0 0 1 3.21-10.62l-5.54-1.3q-1.38 5.22-2.77 10.42z",
    transform: "translate(-145.91 -255.25)"
  }), __jsx("path", {
    className: "cls-6",
    d: "M815.9 596.74l5.64.18a20 20 0 0 0-5.12 12.56c-14.27 0-29.64.26-41.11 8.75a2.66 2.66 0 1 1-1.26 5.16c-1.32-1.94-.88-4.68.48-6.59a14.82 14.82 0 0 1 5.55-4.23 63.17 63.17 0 0 1 32-6.79z",
    transform: "translate(-145.91 -255.25)"
  }), __jsx("rect", {
    className: "cls-10",
    x: "619.59",
    y: "335.91",
    width: "51.82",
    height: "10.51",
    rx: "2.63"
  }), __jsx("path", {
    className: "cls-10",
    transform: "rotate(-5.84 -1665.507 2057.142)",
    d: "M899.04 751.9h22.15v6.01h-22.15z"
  }), __jsx("path", {
    className: "cls-9",
    transform: "rotate(-9.27 -644.616 1698.283)",
    d: "M1001.37 848.53h1.69v154.42h-1.69z"
  }), __jsx("path", {
    className: "cls-9",
    transform: "rotate(-80.71 813.282 883.977)",
    d: "M959.22 924.9h154.42v1.69H959.22z"
  }), __jsx("path", {
    className: "cls-9",
    transform: "rotate(-9.27 -610.396 1861.964)",
    d: "M1035.58 1012.21h1.69v154.42h-1.69z"
  }), __jsx("path", {
    className: "cls-9",
    transform: "rotate(-80.71 779.058 1047.655)",
    d: "M925.01 1088.57h154.42v1.69H925.01z"
  }), __jsx("path", {
    className: "cls-9",
    transform: "rotate(-9.29 -705.857 1795.324)",
    d: "M860.27 1023.84h154.42v1.69H860.27z"
  }), __jsx("path", {
    className: "cls-9",
    transform: "rotate(-80.73 714.334 948.674)",
    d: "M936.64 913.26h1.69v154.42h-1.69z"
  }), __jsx("path", {
    className: "cls-9",
    transform: "rotate(-9.29 -542.548 1760.77)",
    d: "M1023.95 989.63h154.42v1.69h-154.42z"
  }), __jsx("path", {
    className: "cls-9",
    transform: "rotate(-80.73 878.014 982.894)",
    d: "M1100.32 947.48h1.69v154.42h-1.69z"
  }), __jsx("path", {
    className: "cls-9",
    transform: "rotate(-54.27 627.448 976.56)",
    d: "M948.51 884.6h1.69v154.42h-1.69z"
  }), __jsx("path", {
    className: "cls-9",
    transform: "rotate(-35.73 504.556 1036.307)",
    d: "M972.71 860.4h1.69v154.42h-1.69z"
  }), __jsx("path", {
    className: "cls-9",
    transform: "rotate(-54.27 767.38 1068.107)",
    d: "M1088.44 976.14h1.69v154.42h-1.69z"
  }), __jsx("path", {
    className: "cls-9",
    transform: "rotate(-35.73 596.092 1176.228)",
    d: "M1064.25 1000.33h1.69v154.42h-1.69z"
  }), __jsx("path", {
    className: "cls-9",
    transform: "rotate(-54.28 651.595 1092.24)",
    d: "M896.34 1076.7h154.42v1.69H896.34z"
  }), __jsx("path", {
    className: "cls-9",
    transform: "rotate(-35.72 480.34 1152.164)",
    d: "M872.15 1052.51h154.42v1.69H872.15z"
  }), __jsx("path", {
    className: "cls-9",
    transform: "rotate(-54.28 743.198 952.322)",
    d: "M987.89 936.77h154.42v1.69H987.89z"
  }), __jsx("path", {
    className: "cls-9",
    transform: "rotate(-35.72 620.286 1060.607)",
    d: "M1012.08 960.96h154.42v1.69h-154.42z"
  }), __jsx("path", {
    className: "cls-9",
    transform: "rotate(-65.47 670.217 962.098)",
    d: "M940.96 899.05h1.69v154.42h-1.69z"
  }), __jsx("path", {
    className: "cls-9",
    transform: "rotate(-46.92 593.79 988.307)",
    d: "M960 870.62h1.69v154.42H960z"
  }), __jsx("path", {
    className: "cls-9",
    transform: "rotate(-65.46 825.434 1024.807)",
    d: "M1096 961.69h1.69v154.42H1096z"
  }), __jsx("path", {
    className: "cls-9",
    transform: "rotate(-46.92 710.765 1107.815)",
    d: "M1076.96 990.12h1.69v154.42h-1.69z"
  }), __jsx("path", {
    className: "cls-9",
    transform: "rotate(-65.47 716.462 1070.948)",
    d: "M910.79 1084.25h154.42v1.69H910.79z"
  }), __jsx("path", {
    className: "cls-9",
    transform: "rotate(-46.9 592.358 1106.61)",
    d: "M882.36 1065.22h154.42v1.69H882.36z"
  }), __jsx("path", {
    className: "cls-9",
    transform: "rotate(-65.47 779.183 915.928)",
    d: "M973.43 929.22h154.42v1.69H973.43z"
  }), __jsx("path", {
    className: "cls-9",
    transform: "rotate(-46.9 711.859 989.649)",
    d: "M1001.86 948.25h154.42v1.69h-154.42z"
  }), __jsx("path", {
    className: "cls-9",
    transform: "matrix(.94 -.33 .33 .94 -434.39 110.98)",
    d: "M864.4 1037.58h154.42v1.69H864.4z"
  }), __jsx("path", {
    className: "cls-9",
    transform: "rotate(-.6 -23516.7 14805.554)",
    d: "M858.55 1003.87h154.42v1.69H858.55z"
  }), __jsx("path", {
    className: "cls-9",
    transform: "rotate(-19.11 265.628 1282.347)",
    d: "M1019.82 975.89h154.42v1.69h-154.42z"
  }), __jsx("path", {
    className: "cls-9",
    transform: "rotate(-.6 -23350.568 14811.199)",
    d: "M1025.67 1009.6h154.42v1.69h-154.42z"
  }), __jsx("path", {
    className: "cls-9",
    transform: "rotate(-19.12 219.184 1390.672)",
    d: "M1049.32 1008.08h1.69v154.42h-1.69z"
  }), __jsx("path", {
    className: "cls-9",
    transform: "rotate(-.57 -24712.331 15631.664)",
    d: "M1015.61 1013.93h1.69v154.42h-1.69z"
  }), __jsx("path", {
    className: "cls-9",
    transform: "rotate(-19.12 157.492 1235.265)",
    d: "M987.63 852.66h1.69v154.42h-1.69z"
  }), __jsx("path", {
    className: "cls-9",
    transform: "rotate(-.57 -24706.47 15463.824)",
    d: "M1021.34 846.81h1.69v154.42h-1.69z"
  }), __jsx("path", {
    className: "cls-6",
    d: "M894.3 696.92c3.6-3.94 10.26-2.06 15.12-4.27a8.72 8.72 0 0 0 5-6.26 7.5 7.5 0 0 0-2.93-7.32c-3.3-2.29-7.83-1.27-11.52.32a68.25 68.25 0 0 0-16.29 10.46c-3.34 2.76-6.79 6.22-6.84 10.55a7.91 7.91 0 0 0 4.82 7.28 7.45 7.45 0 0 0 8.37-2.2c1.97-2.48 2.11-6.19 4.27-8.56z",
    transform: "translate(-145.91 -255.25)"
  }), __jsx("path", {
    className: "cls-10",
    d: "M929.91 839c.62 1.26 1.43 2.67 2.75 2.87a4.1 4.1 0 0 0 2.53-.75l14.64-8.1c1.57-.87 3.3-1.95 3.72-3.78a6.77 6.77 0 0 0-.51-3.67 89.66 89.66 0 0 0-6.9-15.34 37 37 0 0 0-16.78 5.93c-2 1.31-4 3-4.7 5.31-.87 2.74.14 5.73 1.21 8.39q1.88 4.67 4.04 9.14z",
    transform: "translate(-145.91 -255.25)"
  }), __jsx("path", {
    className: "cls-9",
    d: "M764.58 518.99h32.67v7.89h-32.67z"
  }), __jsx("path", {
    className: "cls-10",
    d: "M655.9 949.11H627v-11.26h28.9a89.28 89.28 0 0 0 55.93-19.78c32.25-26.07 79.21-64 119.79-96.59 23-18.48 41.18-33 54-43.15 24.23-19.22 24.23-19.22 26.82-19.22v11.26a5.26 5.26 0 0 0 2.68-.7c-5 3.1-78.3 61.85-196.19 157.16a100.52 100.52 0 0 1-63.03 22.28z",
    transform: "translate(-145.91 -255.25)"
  }), __jsx("path", {
    className: "cls-12",
    d: "M870.73 690.43a48.24 48.24 0 0 1-45.39-32l-14.62-40.93a15.39 15.39 0 0 0-14.46-10.19h-49.81v-7.89h49.81a23.3 23.3 0 0 1 21.89 15.43l14.62 40.93a40.33 40.33 0 0 0 38 26.76h.39l32.12-.31a3.89 3.89 0 0 1 3.94 3.86v.08a3.91 3.91 0 0 1-3.86 3.94l-32.12.32z",
    transform: "translate(-145.91 -255.25)"
  }), __jsx("rect", {
    className: "cls-10",
    x: "595.28",
    y: "342.4",
    width: "51.82",
    height: "10.51",
    rx: "2.63"
  }), __jsx("path", {
    className: "cls-6",
    d: "M794.65 605.83a34.17 34.17 0 0 1 3.21-10.62l-5.54-1.29q-1.4 5.21-2.78 10.41z",
    transform: "translate(-145.91 -255.25)"
  }), __jsx("path", {
    className: "cls-6",
    d: "M790.41 601.37l5.63.18a20.11 20.11 0 0 0-5.11 12.56c-14.27 0-29.64.26-41.11 8.75a2.66 2.66 0 1 1-1.26 5.17c-1.32-1.94-.88-4.68.48-6.6a14.76 14.76 0 0 1 5.54-4.22 63.11 63.11 0 0 1 32-6.8zM688.28 1079.06H681v3.22h-7.4l-20.88-72.34a4.77 4.77 0 0 0-4.59-3.45H648a4.78 4.78 0 0 0-4.6 6.11l20.11 69.68h-8.15v-3.22h-6.52a5.87 5.87 0 0 0-5.88 5.87v.81a5.88 5.88 0 0 0 5.88 5.88h6.52v-3.54H681v3.54h7.33a5.88 5.88 0 0 0 5.88-5.88v-.81a5.87 5.87 0 0 0-5.93-5.87z",
    transform: "translate(-145.91 -255.25)"
  }), __jsx("path", {
    className: "cls-15",
    d: "M701.42 1181c-13.15-5.11-31.81-13.15-40.75-29.66-8.59-29.22-23.69-176.51-13.87-228.95 10.86-58-9.77-111.61-13.89-156.31S618.47 652 617.09 644.38s-85.27-13.75-92.83 1.38c0 0-22.7 42.63 4.12 78.39 0 0 31.64 119.66 57.77 179.48 0 0 4 33.5 2.34 56s1.52 60.57 13.34 85.86c10.36 22.16 25.63 95.41 29.44 113.92a107 107 0 0 1-1.93 12.57c-1.62 7.58-2.56 8-2.11 10.7 1 6.09 6.52 6.59 10.49 14.64a61.11 61.11 0 0 1 3.54 8.19c.83 2.63.47 2.68 2 2.47 2.41-.35 14.44.68 21-1.72s23.38-1.38 31.29-.69 25.49-1.36 28.19-7.91-8.2-11.15-22.32-16.66z",
    transform: "translate(-145.91 -255.25)"
  }), __jsx("path", {
    className: "cls-16",
    d: "M618.79 864q-2.06-23.55-4.1-47.09a283 283 0 0 0-38.28 27.3l-1 15.49a175.75 175.75 0 0 1 15 57c2.64 29.84-2.3 60.69 6.4 89.36-1.18-27.74 15.41-52.9 21.21-80 4.35-20.38 2.57-41.43.77-62.06z",
    transform: "translate(-145.91 -255.25)"
  }), __jsx("path", {
    className: "cls-17",
    d: "M754.62 748.91S635.49 632.23 625.86 599s-93.35 10.29-93.35 10.29c-11.89 11.16-27.53 30.08-30.45 55.25-1.25 10.71 0 20.78 1.12 29.45a185.81 185.81 0 0 0 10.75 43 118.28 118.28 0 0 0-23.76 3.52 119.52 119.52 0 0 0-36.06 16s22.69 21.47 42.63 30.25c13.51 5.94 14.3 15.48 23.74 25.64 12.64 13.59 24.44 26.66 33.27 43.1 8.58 15.95 28.37 14.92 44.4 12.63 22.54-3.22 41.3-7.12 55.76-26.33 9.36-12.44 17.52-27 31.51-33.79 7.18-3.5 15.27-4.62 22.77-7.35 14.37-5.25 18.76-18.69 26.63-30.58 1.63-2.5 15.42-25.3 19.8-21.17z",
    transform: "translate(-145.91 -255.25)"
  }), __jsx("path", {
    className: "cls-6",
    d: "M516.16 618c6.28-7.11 8.3-19 17.38-21.72 8-2.43 16.16 4.1 24.44 3.3 5.33-.51 9.85-4 14-7.26l34.5-27.18c13.85-10.91 29.08-24.73 28-42.32-1-16-15.87-30.79-10.81-46 5.64-17 32-20.39 36.38-37.74 3.24-12.91-7.81-24.58-11.93-37.24-3.51-10.79-1.86-22.5-.18-33.73q4.41-29.46 8.83-58.94c1.85-12.41 2.89-27.2-6.65-35.36-5-4.3-14.87-7.88-35.58-13.95-9.59-2.82-14.48-4.23-19.12-4.5-14.94-.86-26.57 5-31.23 7.44-28.94 15-23.49 38.58-51.07 59-24.12 17.84-39.57 8.2-51.55 26.2-10.46 15.79-10.77 41.42.51 52.22 5.68 5.45 10.08 5.35 19.71 12.75 6.21 4.77 11.42 12.1 10.39 19.86-1.21 9.15-10.1 14.85-17 21-14.88 13.17-22.76 36.87-11.58 53.31 6.4 9.36 18.2 15.86 19.4 27.14.93 8.78-5.3 17-5 25.84.43 12.54 13.83 23.46 10.1 35.45-2.63 8.43-12.63 12.16-21.46 12.42s-17.83-1.73-26.41.41-16.6 10.8-13.64 19.12c6.07-8.78 18.23-11.15 28.81-9.71s20.54 5.84 31.06 7.68 22.64.51 29.7-7.49z",
    transform: "translate(-145.91 -255.25)"
  }), __jsx("path", {
    className: "cls-17",
    d: "M626.94 430.88c-20.34-15.64-14.67-22-26.06-28.19-18.06-9.79-28.11 4.21-79.32 8.31-18.34 1.47-26.17.41-30.63 6.57-6.67 9.21 1.29 24.31 11.44 46.27 25.13 54.38 38 82 37.09 109.21-.43 12.82-4 31.57-19.46 54.12 18-2.47 37.2-4.56 57.38-6.07 20.74-1.56 40.5-2.36 59.16-2.58-16.42-26.88-16.73-46-14.09-58.31 4.06-19 15.3-23 29.53-56.7 9.49-22.44 14-34.77 8.85-45.81-6.2-13.24-22.31-17.91-33.89-26.82z",
    transform: "translate(-145.91 -255.25)"
  }), __jsx("path", {
    className: "cls-18",
    d: "M836.64 471.66c-2.15-4.85-8.3-24-8.3-24s-8.61-1.86-18.64-3.8c-19.24-3.74-22.32-4.87-27.16-4.38-5.41.55-14.82 3-25.49 14.68l-122.42 56.09-98-100.4s-12.89-15.47-25.27-5.15a27.52 27.52 0 0 0-8.18 11.3c-7.32 18.41 8.44 39.49 14.37 47.45 10.79 14.48 16.15 14.23 35.24 31.3 19.46 17.4 27.42 29.75 57 56 6.36 5.65 16.3 14.22 27.85 12.69 6.12-.82 10.17-4.13 14.78-7.73 11.31-8.83 24.19-15.59 35.2-24.79 15.67-13.08 40.84-32.63 75.67-59.12 13.4 3 29.52-5.05 31.83-5.05 2.46 0 25.82-8.69 28.9-3.58s11.37 16.61 12.91 17.12 1.86-3.77-.29-8.63z",
    transform: "translate(-145.91 -255.25)"
  }), __jsx("path", {
    className: "cls-19",
    d: "M550 470.53c-2.17 1.84-4.43 3.91-5 6.69-.71 3.43 1.36 6.77 3.39 9.63a247.13 247.13 0 0 0 42.21 45.84 46.25 46.25 0 0 1 3.44-42c1.83-2.89 4.09-6 3.57-9.37a12.42 12.42 0 0 0-2.65-5.21l-18.82-25.86q-13.5 9.55-26.14 20.28z",
    transform: "translate(-145.91 -255.25)"
  }), __jsx("path", {
    className: "cls-15",
    d: "M563 343.64c-1.89 10.49-7.5 32-26 44.69a52.16 52.16 0 0 1-6.66 3.87c-2.74.8-23.24 7-22.75 13.95a4.43 4.43 0 0 0 1.35 2.75c7.93 8.43 30.73-7.43 81.79 30.24s34.2 3 18.83-10.91-13-18.83-15.53-29.74 8.59-37 8.59-37z",
    transform: "translate(-145.91 -255.25)"
  }), __jsx("path", {
    className: "cls-20",
    d: "M602.6 361.48L563 343.64l-1.12 1.66c-2.52 27.57 12.38 49.25 33.92 62.81-.61-2.91-.9-5.92-1.74-9.62-2.53-10.9 8.54-37.01 8.54-37.01z",
    transform: "translate(-145.91 -255.25)"
  }), __jsx("path", {
    className: "cls-21",
    d: "M508.61 400c-4.66 2.63-13.7 7.76-17.93 17.33-3.36 7.58-2.33 14.62-1.1 21.33C492.13 452.55 501 460 502 473.61c1.37 19.25-16.51 24.06 2.75 28.88s30.94-15.82 45.38-6.19 22.7-13.07 26.82-20.63 20.63-7.57 19.26-22.69c-1.15-12.64 6.33-8 9.23-10.94.1-.1 1.43-1.69 1.08-2.82-1-3.19-14.35 1.74-28.2-.66-17.83-3.07-29.64-17.09-35.7-24.29-5.7-6.77-9.35-10.29-8.92-14.87.61-6.46 7.63-10.38 6.7-11.7-.81-1.15-6.27 1.64-16.36 5.95C511.48 399 512.3 398 508.61 400z",
    transform: "translate(-145.91 -255.25)"
  }), __jsx("path", {
    className: "cls-15",
    d: "M634.08 376.43zM640.61 305c-4.7-13.2-16.69-16.91-28.92-23.13-9.48-4.82-12.21-6.81-22.58-4.6-12.86 2.74-24.94 10.89-30.58 22.91-5.29 11.27-4.65 33.79 2 44.21a28.09 28.09 0 0 1 4.11 4.38 28.77 28.77 0 0 1 4.94 10.35 123.36 123.36 0 0 0 10.15 14.64c5.1 6.3 8.79 9.57 13 12.08 2.49 1.49 3.77 2.17 5.34 2.35 5.58.66 11.1-5.46 15.6-10.64 1.45-1.66 2.51-2.83 3.6-3.92 2.62-2.63 3.78-3.29 5.72-5.24a35.83 35.83 0 0 0 4.71-5.92c3.73-5.64 6.15-12.14 6.06-14.8a14.32 14.32 0 0 1 .27-3.47 11.66 11.66 0 0 1 .36-1.41c1.21-3.61 3.91-4.43 5.4-7.1 3.63-6.54 3.55-15.49 3-22.76a33.53 33.53 0 0 0-2.18-7.93z",
    transform: "translate(-145.91 -255.25)"
  }), __jsx("path", {
    className: "cls-22",
    d: "M583.68 354.81c-2.31-1.76-3.07-4.93-2.95-7.83a18.17 18.17 0 0 1 8.79-14.7c-1.18 5.81 1.13 11.72 3.72 17.06S598.8 360.09 599 366a11.59 11.59 0 0 0-7.45-8.62c-2.61-.9-5.65-.88-7.87-2.57z",
    transform: "translate(-145.91 -255.25)"
  }), __jsx("path", {
    className: "cls-6",
    d: "M574.35 310.3c1.72.33 3 2.34 3.55 3.27a17.06 17.06 0 0 1 2.19 5.19c1.1 5.53-.44 11.57-1 14.9-1.18 6.82-.07 12.24 1 17.36 2.69 13.06 10.45 22.06 10.91 21.81s-4.38-6.78-7.29-18c-1-3.95-4.13-17.72 1.83-28.09a17.92 17.92 0 0 1 6-6.44c3.26-2 6.1-2 8.47-2.41 6.63-1.06 11.51-4.64 19.51-13 4.25-4.47 8-9.48 13-13.06s11.78-5.53 17.41-3c-6.93-12.9-21.48-19.83-35.81-22.55-16.07-3-33.21-1.51-47.86 5.76-18.49 9.19-25.51 25.89-30.45 36.49-13.6 29.17-9.84 57.25-7.19 70.05a161 161 0 0 0 17.71 28.29c14.35 18.37 31 31.32 32.55 29.86 1.36-1.26-10.61-11.66-18.52-32.25-7.36-19.17-8.31-39.7-1.19-43.59 3.13-1.72 8.43-.54 9.9-3.71.52-1.12.8-3.26 1.15-6.45a48.13 48.13 0 0 0 .31-6.85 20.16 20.16 0 0 0-.39-4.48 12.81 12.81 0 0 0-1.41-3.63 12.67 12.67 0 0 0-1.75-2.26c-2.24-2.39-3.44-9.64-.54-15.84 1.47-3.15 4.9-7.95 7.91-7.37z",
    transform: "translate(-145.91 -255.25)"
  }), __jsx("path", {
    className: "cls-6",
    d: "M630.83 286.36a7 7 0 0 1 1.45 4.93 30.62 30.62 0 0 1-.94 5.18 44.67 44.67 0 0 0 3.74 29.53c2 4 5.24 8.08 9.72 8.55-.09-5.61 1.16-11.15 2.37-16.63s2.39-11.05 2.13-16.65-2.12-11.35-6.17-15.23-10.56-5.45-15.5-2.78z",
    transform: "translate(-145.91 -255.25)"
  }), __jsx("path", {
    className: "cls-6",
    d: "M633.3 319.92c-.15 5.14 3.34 9.79 7.58 12.68s9.24 4.44 14 6.39 9.52 4.53 12.41 8.78 3.29 10.56-.32 14.22a7.94 7.94 0 0 0 4.9-4.9 13.86 13.86 0 0 0 .43-7.09c-1.24-7.35-6-13.56-11.06-19.08s-10.48-10.87-13.58-17.64-3.29-15.55 1.8-21a37.84 37.84 0 0 0-12.84 36.5zM651.16 345.69c-6.79 5.77-9 15.6-7.63 24.39s5.89 16.77 10.73 24.24 10.15 14.75 13.5 23 4.54 17.82 1 26c6-8.9 4.38-21.05 0-30.88s-11.13-18.5-15.23-28.44a59.66 59.66 0 0 1-2.37-38.31z",
    transform: "translate(-145.91 -255.25)"
  }), __jsx("path", {
    className: "cls-6",
    d: "M673.1 340.46c-1.89-4.54-5.13-8.37-8.48-12s-6.9-7.06-9.6-11.18-4.51-9-3.94-13.9c-3.44 3.4-3.07 9.27-.65 13.46s6.41 7.18 10 10.41c4.49 4 8.57 8.6 11.11 14.05s3.44 11.85 1.52 17.54a24.16 24.16 0 0 0 .04-18.38z",
    transform: "translate(-145.91 -255.25)"
  }), __jsx("path", {
    className: "cls-17",
    d: "M770.4 387.16a18.92 18.92 0 0 0-9.13 6.93 51.67 51.67 0 0 0 10.73 5.26q-.8-6.11-1.6-12.19z",
    transform: "translate(-145.91 -255.25)"
  }), __jsx("path", {
    className: "cls-12",
    d: "M841.25 434.14a135.12 135.12 0 0 0-17.91-30c-5.52-7-11.82-13.48-19.45-18.05s-16.72-7.11-25.52-5.79c-3.62.54-7.35 1.87-9.56 4.79-2.82 3.73-2.35 9.17-.1 13.27 2.06 3.75 5.34 6.64 8.66 9.38a11.3 11.3 0 0 0 .69 1.61 10.24 10.24 0 0 0 4.53 4.35 37.65 37.65 0 0 0 12.69 24.3c12.12 10.25 31.06 11.39 44.32 2.66a5.31 5.31 0 0 0 2.27-2.35c.52-1.31-.05-2.84-.62-4.17z",
    transform: "translate(-145.91 -255.25)"
  }), __jsx("path", {
    className: "cls-12",
    d: "M822 434a68.12 68.12 0 0 0 23.46 42.29c.15-1.7.3-3.4.44-5.09a78.18 78.18 0 0 1 22.47 20.32c.55-14.91-7.77-28.58-16.33-40.79q-7-10-14.54-19.66a18.93 18.93 0 0 0-4.24-4.37 6.67 6.67 0 0 0-5.79-1z",
    transform: "translate(-145.91 -255.25)"
  }), __jsx("path", {
    className: "cls-12",
    d: "M826.09 444.31a31.73 31.73 0 0 0-5.39-13.93 19.19 19.19 0 0 0 4.78 2.67 42.06 42.06 0 0 0-5.75-12.84 23.49 23.49 0 0 0 9.07 4.86c-1.42-3.91-5.19-6.36-8.45-8.93s-6.49-6.15-6.05-10.29a51.32 51.32 0 0 0-10.44-7.2l-7-.3a47.95 47.95 0 0 0 3.6 59.75 71.12 71.12 0 0 0-1.44-17.39c2.35 7.31 5.7 14.12 11.19 19.39a102.11 102.11 0 0 0-3-16.61 93 93 0 0 0 7.69 15.56c.75 1.21 2.09 2.58 3.36 1.92 1.07-.56 1-2.09.79-3.28-.3-1.49-.69-3-1.12-4.41.34.45.67.9 1 1.34.84 1.06 2 2.2 3.3 2a2.67 2.67 0 0 0 2-2.59 7.58 7.58 0 0 0-.91-3.36 154.47 154.47 0 0 0-9.48-17.78c3.3 4.69 7.16 9.01 12.25 11.42z",
    transform: "translate(-145.91 -255.25)"
  }), __jsx("path", {
    className: "cls-17",
    d: "M819.41 446.52a.51.51 0 0 1-.36-.15 55.32 55.32 0 0 1-7.78-9.76l1 2.7c.92 2.42 1.13 5.34-1 6.29s-4.17-1.18-5.34-3.49l-4.54-9v.47A3.91 3.91 0 0 1 799 437a3.13 3.13 0 0 1-2.56-.23 6 6 0 0 1-2.76-3.75 21.06 21.06 0 0 1-.41-2.33 9.75 9.75 0 0 0-1.11-4 .5.5 0 0 1 .16-.69.49.49 0 0 1 .69.16 10.59 10.59 0 0 1 1.25 4.35 20.18 20.18 0 0 0 .39 2.22 5.06 5.06 0 0 0 2.26 3.12 2.13 2.13 0 0 0 1.75.17 3 3 0 0 0 1.69-2.55 9.66 9.66 0 0 0-.57-3.54.5.5 0 0 1 .93-.36l6.1 12.1c.91 1.81 2.52 3.7 4 3s1.21-3.13.48-5l-4-10.47a.5.5 0 0 1 .93-.37A54 54 0 0 0 819.09 445a17.06 17.06 0 0 0-.51-7.35 10.18 10.18 0 0 1-2.91-5.76.5.5 0 0 1 .89-.37 17.68 17.68 0 0 1 2.9 5.6 8.94 8.94 0 0 0 1.72 1.28 19 19 0 0 0-8.91-17.62 2.46 2.46 0 0 1-1.09-.63.49.49 0 0 1-.06-.65.5.5 0 0 1 .63-.15c.31.16.61.32.91.5a2.17 2.17 0 0 0 1.11-.09 3.22 3.22 0 0 0 2.13-2.32c.36-2.09-1-4.19-2.13-5.59A38 38 0 0 0 800.35 401a.5.5 0 0 1-.23-.67.49.49 0 0 1 .66-.23 39.24 39.24 0 0 1 13.78 11.14c1.2 1.55 2.76 3.9 2.32 6.38a4.21 4.21 0 0 1-2.8 3.1h-.07a20 20 0 0 1 8.08 18.5.47.47 0 0 1-.25.37.48.48 0 0 1-.45 0 9.85 9.85 0 0 1-1.51-.87 17.65 17.65 0 0 1 0 7.38.5.5 0 0 1-.34.38z",
    transform: "translate(-145.91 -255.25)"
  }), __jsx("path", {
    className: "cls-23",
    d: "M774.91 392.32a2.32 2.32 0 1 1-2.32-2.32 2.32 2.32 0 0 1 2.32 2.32z",
    transform: "translate(-145.91 -255.25)"
  }), __jsx("circle", {
    className: "cls-24",
    cx: "276.74",
    cy: "300.94",
    r: "23.72"
  }), __jsx("path", {
    className: "cls-25",
    d: "M518.45 714a168.16 168.16 0 0 1-37.84 51.57 347 347 0 0 1 41.14 24.62 117.25 117.25 0 0 0-3.3-76.19z",
    transform: "translate(-145.91 -255.25)"
  }), __jsx("path", {
    className: "cls-26",
    d: "M651.63 826.27c4.41-12 17.3-18.39 29.47-22.19s25.38-6.44 34.79-15c-40.14-22.13-67.73-61-93.91-98.68a368.21 368.21 0 0 1 29.65 135.87z",
    transform: "translate(-145.91 -255.25)"
  }), __jsx("path", {
    className: "cls-27",
    d: "M559.91 751.52c5.24 17.82 7.7 36.35 12.74 54.23s13.08 35.6 27.14 47.73c-6.47 8.84-19.68 10.19-29.94 6.32-16.48-6.21-27.13-22.85-31.34-39.95s-3.11-35-2.92-52.6c.32-30.11-2.39-61.26-16.67-87.77a181.37 181.37 0 0 1 40.99 72.04z",
    transform: "translate(-145.91 -255.25)"
  }), __jsx("rect", {
    className: "cls-8",
    x: "802.66",
    y: "451.04",
    width: "3.94",
    height: "87.64",
    rx: "1.95"
  }), __jsx("rect", {
    className: "cls-8",
    x: "821.86",
    y: "451.04",
    width: "3.94",
    height: "87.64",
    rx: "1.95"
  }), __jsx("rect", {
    className: "cls-8",
    x: "841.07",
    y: "451.04",
    width: "3.94",
    height: "87.64",
    rx: "1.95"
  }), __jsx("rect", {
    className: "cls-8",
    x: "860.27",
    y: "451.04",
    width: "3.94",
    height: "87.64",
    rx: "1.95"
  }), __jsx("rect", {
    className: "cls-8",
    x: "879.47",
    y: "451.04",
    width: "3.94",
    height: "81.87",
    rx: "1.95"
  }), __jsx("rect", {
    className: "cls-8",
    x: "788.65",
    y: "512.09",
    width: "115.99",
    height: "3.94",
    rx: "1.95"
  }), __jsx("rect", {
    className: "cls-8",
    x: "788.65",
    y: "492.89",
    width: "115.99",
    height: "3.94",
    rx: "1.95"
  }), __jsx("rect", {
    className: "cls-8",
    x: "788.65",
    y: "473.69",
    width: "115.99",
    height: "3.94",
    rx: "1.95"
  }), __jsx("rect", {
    className: "cls-8",
    x: "788.65",
    y: "454.49",
    width: "115.99",
    height: "3.94",
    rx: "1.95"
  }), __jsx("path", {
    className: "cls-6",
    d: "M625.85 1179.09a1.45 1.45 0 0 1 2.49-.47c3.36 4 13 12.39 35.07 14.22 29.22 2.4 39.05-2.14 39.33-8.3s5.46-1.87 13.92 1.07 18.81 10.26 15 15.61-23.85 7.66-38.87 6.06-46.22 3.8-56.71-2.14a21.84 21.84 0 0 1-10.23-26.05z",
    transform: "translate(-145.91 -255.25)"
  }), __jsx("path", {
    className: "cls-6",
    d: "M647.79 1197.42l-9.32-6.7a104.68 104.68 0 0 0 26.87-32.45l9.15 7.35a201.46 201.46 0 0 1-26.7 31.8z",
    transform: "translate(-145.91 -255.25)"
  }), __jsx("path", {
    className: "cls-28",
    d: "M612.9 380.62a35.22 35.22 0 0 0 5-5.19c1.41-1.65 1.4-1.8 4.34-5.55.89-1.13 2.14-2.7 3.68-4.62 3.9-4.87 5-5.8 6-8.36a30.57 30.57 0 0 0 .9-2.94 39.76 39.76 0 0 0 1-5.25c.41-3.17.17-4 .35-5a9.3 9.3 0 0 1 .24-.9c.62-1.9 2.92-4.2 3.18-4.46a6.6 6.6 0 0 0-6.26-1.85 8.18 8.18 0 0 0-3.5 1.7c-1.69 1.31-2.47 2.88-3.5 5a24.52 24.52 0 0 0-1.72 4.53c-.15.59-.3 1.4-.6 3-.33 1.83-.58 3.16-.8 4.87-.08.69-.25 2-.35 3.67-.28 4.44-.45 6.66-.37 8.06 0 .92.13 1.66-.36 2.23-.77.91-2.47.8-3.48.54a6.17 6.17 0 0 1-2.07-1.08 25.72 25.72 0 0 0-4.65-2.55 13 13 0 0 0-1.07 3c-.35 1.58-.14 2.09-.39 3-.57 2.09-3.09 2.27-4.12 4-.52.86-.52 5.29-3.23 8 0 0-2.45 3.36-8.37 1.37a24.66 24.66 0 0 0 5.34 2.35c2 .62 3.75 1.11 5.79.6a6 6 0 0 0 2.22-1c.9-.66.95-1.14 2.27-2.76a28.05 28.05 0 0 1 2.06-2.25 29.49 29.49 0 0 1 2.47-2.16z",
    transform: "translate(-145.91 -255.25)"
  }), __jsx("path", {
    className: "cls-29",
    d: "M572.87 323.51a2.14 2.14 0 0 0-.94-1.77 9 9 0 0 1-1.59-1.34 3 3 0 0 1 1.06-4.16 4.17 4.17 0 0 1 4.55.64 7.25 7.25 0 0 1 2.26 4.21 4.24 4.24 0 0 1-.67 3.73 8.86 8.86 0 0 1-1.8 1.21 5.82 5.82 0 0 0-2.31 6.45 5.13 5.13 0 0 0-5 1.09 6.68 6.68 0 0 1 2.47-8.13c.81-.5 1.85-.98 1.97-1.93z",
    transform: "translate(-145.91 -255.25)"
  }));
};

Hover.defaultProps = {
  id: "Layer_1",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1194.57 961.96"
};
const Navigation = () => {
  const routes = [{
    route: '/',
    title: 'Home'
  }, {
    route: '/about',
    title: 'About'
  }, {
    route: '/services',
    title: 'Services'
  }, {
    route: './hub',
    title: 'Hub'
  }, {
    route: '/academy',
    title: 'Academy'
  }, {
    route: '/contact',
    title: 'Contacts'
  }];
  const {
    0: menuState,
    1: setMenuState
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('hide');

  const showMenuBg = () => {
    setMenuState('show');
  };

  const hideMenuBg = () => {
    setMenuState('hide');
  };

  return __jsx("nav", {
    className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_3__["style"].__hash}` + " " + 'nav nav-mobile',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_3__["style"].__hash}` + " " + `menu-bg menu-bg--${menuState}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx("section", {
    className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_3__["style"].__hash}` + " " + `nav__hover nav__hover--${menuState}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, __jsx(Hover, {
    width: '100%',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }))), __jsx("ul", {
    className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_3__["style"].__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, routes.map((item, index) => __jsx("li", {
    "data-route": item.title,
    className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_3__["style"].__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: item.route,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 25
    }
  }, __jsx("a", {
    "data-route": item.title,
    onMouseOver: showMenuBg,
    onMouseOut: hideMenuBg,
    key: index,
    className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_3__["style"].__hash}` + " " + "link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 29
    }
  }, item.title))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: _style__WEBPACK_IMPORTED_MODULE_3__["style"].__hash,
    __self: undefined
  }, _style__WEBPACK_IMPORTED_MODULE_3__["style"]));
};

/***/ }),

/***/ "./src/components/Navigation/style.jsx":
/*!*********************************************!*\
  !*** ./src/components/Navigation/style.jsx ***!
  \*********************************************/
/*! exports provided: style */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "style", function() { return style; });
const hover = 'hover';
const style = new String(`.nav.jsx-2597719756{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:-webkit-sticky;position:sticky;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;top:0;right:0;border-bottom:darkblue;z-index:1;height:100vh;border-left:solid 1px darkblue;width:calc(100vw/18);min-width:calc(100vw/18);-webkit-transition:cubic-bezier(0.2,0.5,0.75,1.8);transition:cubic-bezier(0.2,0.5,0.75,1.8);}.nav__hover{width:45%;-webkit-transition:cubic-bezier(0.2,0.5,0.75,1);transition:cubic-bezier(0.2,0.5,0.75,1);-webkit-backface-visibility:hidden;backface-visibility:hidden;will-change:transform;}@-webkit-keyframes ${hover}-jsx-2597719756{from{opacity:0;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}to{opacity:1;-webkit-transform:translateX(0%);-ms-transform:translateX(0%);transform:translateX(0%);}}@keyframes ${hover}-jsx-2597719756{from{opacity:0;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}to{opacity:1;-webkit-transform:translateX(0%);-ms-transform:translateX(0%);transform:translateX(0%);}}.nav__hover--show{will-change:transform;-webkit-animation:hover-jsx-2597719756 .5s .5s both ease-out;animation:hover-jsx-2597719756 .5s .5s both ease-out;}.nav.jsx-2597719756 ul.jsx-2597719756{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;list-style:none;padding:0;margin:0;}.nav.jsx-2597719756 ul.jsx-2597719756 li.jsx-2597719756{-webkit-text-decoration:none;text-decoration:none;color:#111;font-size:1.6rem;text-align:center;outline:none;-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);-webkit-writing-mode:vertical-lr;-ms-writing-mode:tb;writing-mode:vertical-lr;-webkit-transition:all .5s;transition:all .5s;}.menu-bg.jsx-2597719756{position:absolute;width:100vw;height:100vh;top:0;right:0;background:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.menu-bg--show.jsx-2597719756{opacity:1;-webkit-transition:all 0.5s cubic-bezier(0.6,0.4,0.5,1);transition:all 0.5s cubic-bezier(0.6,0.4,0.5,1);-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);}.menu-bg--hide.jsx-2597719756{opacity:0;-webkit-transition:all 0.5s cubic-bezier(0.6,0.4,0.5,1);transition:all 0.5s cubic-bezier(0.6,0.4,0.5,1);-webkit-transform:translateX(100%);-ms-transform:translateX(100%);transform:translateX(100%);}.link.jsx-2597719756{-webkit-backface-visibility:hidden;backface-visibility:hidden;padding:2rem 4.5rem;color:darkblue;-webkit-text-decoration:none;text-decoration:none;display:block;margin:0 auto;-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-transition:all 0.5s cubic-bezier(0.6,0,0.5,1);transition:all 0.5s cubic-bezier(0.6,0,0.5,1);overflow:hidden;font-size:1.8rem;}.link.jsx-2597719756:hover{padding-right:14rem;color:transparent;-webkit-transition:all .5s;transition:all .5s;}.link.jsx-2597719756::after{content:attr(data-route);position:absolute;display:block;font-weight:bold;color:darkblue;word-break:keep-all;top:0;right:70%;bottom:0;text-align:right;font-size:10rem;-webkit-writing-mode:horizontal-tb;-ms-writing-mode:lr;writing-mode:horizontal-tb;-webkit-transform-origin:revert;-ms-transform-origin:revert;transform-origin:revert;-webkit-transform:translateX(-100%) rotate(180deg);-ms-transform:translateX(-100%) rotate(180deg);transform:translateX(-100%) rotate(180deg);text-transform:uppercase;will-change:transform;-webkit-transition:all ease-out 1s;transition:all ease-out 1s;-webkit-backface-visibility:hidden;backface-visibility:hidden;opacity:0;}.link.jsx-2597719756:hover.jsx-2597719756::after{will-change:transform;-webkit-transform:translate(100%) rotate(180deg);-ms-transform:translate(100%) rotate(180deg);transform:translate(100%) rotate(180deg);opacity:1;-webkit-transition:all 0.75s cubic-bezier(0.6,0.4,0.5,1);transition:all 0.75s cubic-bezier(0.6,0.4,0.5,1);}.link.jsx-2597719756:hover.menu-bg{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcR0JNXFxEZXNrdG9wXFxlcm1pcmVcXHNyY1xcY29tcG9uZW50c1xcTmF2aWdhdGlvblxcc3R5bGUuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUl3QixBQUVnQixBQWVILEFBT0UsQUFHQSxBQUlVLEFBSVQsQUFTUSxBQVVILEFBU04sQUFJQSxBQUtlLEFBV0wsQUFJSyxBQW9CSCxBQUtFLFVBOUZpQixBQU9kLEFBR0YsQUFvQzBCLEFBSUEsUUFiekMsRUE2QlEsRUFwRGtCLEFBNEVLLEdBcEJ2QixLQWhDUCxRQTZCUSxLQTVCZixBQWdDVSxNQS9CUixDQWJHLE9BY0ssQUErQkcsSUE1Q0YsQ0EyQkcsV0FiUCxDQXpERyxBQWlDTSxBQXVETCxJQTVDQyxJQTJCSCxFQVdPLEFBMkJLLEtBcEJMLE9BNUNULENBcEJlLEFBK0NQLENBeERNLEtBTUcsTUF3QkwsQUE0Q2pCLEtBekZlLEFBNkRHLEFBSUcsQ0F5QmpCLFVBQ0QsU0FDUSxFQWhFb0IsV0E2QnBCLEFBZUwsSUFxQkksQ0E1REssS0F3RVgsR0F6RlUsQ0F5RFIsTUFxQmUsQUFZeUIsUUFoQzlCLE9BMURELGNBOEJFLEVBZUUsU0FJRyxNQWhFWCwyQkF3REMsU0FzQ00sRUE3RFAsUUF5QzhCLGNBK0JNLENBM0RwQyxnQ0E3Q2IsTUFDRSxRQUNlLEFBMkNILGFBaUR5QixVQTNGbkMsQ0E4Qk0sU0E3QkgsTUFzRUcsQ0F4Q04sTUE3QnFCLElBOEJ0QixLQXdDUSxJQXhDUCxhQXdDUSxLQXJFRyxxQkFDSSx5QkFDb0IsK0JBdUZsQix5QkFDSCxzQkFDSyxjQXpGaUIsZ0RBMEZqQiw4REFDakIsVUFBQyIsImZpbGUiOiJDOlxcVXNlcnNcXEdCTVxcRGVza3RvcFxcZXJtaXJlXFxzcmNcXGNvbXBvbmVudHNcXE5hdmlnYXRpb25cXHN0eWxlLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnXHJcblxyXG5jb25zdCBob3ZlciA9ICdob3ZlcidcclxuXHJcbmV4cG9ydCBjb25zdCBzdHlsZSA9IGNzc2BcclxuLm5hdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiBkYXJrYmx1ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCBkYXJrYmx1ZTtcclxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3LzE4KTtcclxuICAgIG1pbi13aWR0aDogY2FsYygxMDB2dy8xOCk7XHJcbiAgICB0cmFuc2l0aW9uOiBjdWJpYy1iZXppZXIoMC4yLCAwLjUsIDAuNzUsIDEuOCk7XHJcbn1cclxuXHJcbiAgICA6Z2xvYmFsKC5uYXZfX2hvdmVyKXtcclxuICAgIHdpZHRoOiA0NSU7XHJcbiAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjdWJpYy1iZXppZXIoMC4yLCAwLjUsIDAuNzUsIDEpO1xyXG4gICAgICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcclxuICAgICAgICAgICAgIEBrZXlmcmFtZXMgJHtob3Zlcn17XHJcbiAgICAgICAgICAgICAgZnJvbXsgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgICAgICAgICB9IHRvIHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9ICBcclxuICAgIFxyXG4gICAgOmdsb2JhbCgubmF2X19ob3Zlci0tc2hvdyl7XHJcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xyXG4gICAgICBhbmltYXRpb246IGhvdmVyIC41cyAuNXMgYm90aCBlYXNlLW91dDtcclxuICAgIH1cclxuXHJcbi5uYXYgdWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLm5hdiB1bCBsaXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjMTExO1xyXG4gICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgIHdyaXRpbmctbW9kZTogdmVydGljYWwtbHI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xyXG59XHJcblxyXG4ubWVudS1iZ3tcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIFxyXG4gICYtLXNob3d7XHJcbiAgb3BhY2l0eTogMTtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjVzIGN1YmljLWJlemllcigwLjYsMC40LDAuNSwxKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgfVxyXG4gICYtLWhpZGV7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjVzIGN1YmljLWJlemllcigwLjYsMC40LDAuNSwxKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICB9XHJcbn1cclxuXHJcbi5saW5rIHtcclxuICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICBwYWRkaW5nOiAycmVtIDQuNXJlbTtcclxuICAgICAgY29sb3I6IGRhcmtibHVlO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjVzIGN1YmljLWJlemllcigwLjYsIDAsIDAuNSwgMSk7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE0cmVtO1xyXG4gICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogYXR0cihkYXRhLXJvdXRlKTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6IGRhcmtibHVlO1xyXG4gICAgICAgIHdvcmQtYnJlYWs6IGtlZXAtYWxsO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICByaWdodDogNzAlO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBmb250LXNpemU6IDEwcmVtO1xyXG4gICAgICAgIHdyaXRpbmctbW9kZTogaG9yaXpvbnRhbC10YjtcclxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByZXZlcnQ7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKSByb3RhdGUoMTgwZGVnKTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIGVhc2Utb3V0IDFzO1xyXG4gICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwJSkgcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC43NXMgY3ViaWMtYmV6aWVyKDAuNiwwLjQsMC41LDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAmLm1lbnUtYmd7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCl7XHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuYDtcclxuIl19 */
/*@ sourceURL=C:\\Users\\GBM\\Desktop\\ermire\\src\\components\\Navigation\\style.jsx */`);
style.__hash = "2597719756";

/***/ }),

/***/ "./src/containers/About/index.js":
/*!***************************************!*\
  !*** ./src/containers/About/index.js ***!
  \***************************************/
/*! exports provided: About */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "About", function() { return About; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout */ "./src/components/Layout/index.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ "./src/containers/About/style.js");
var _jsxFileName = "C:\\Users\\GBM\\Desktop\\ermire\\src\\containers\\About\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 // import {connect} from 'react-redux'




const About = () => __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }
}, __jsx("section", {
  className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_4__["default"].__hash}` + " " + "about text-blue-900",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }
}), __jsx("div", {
  className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_4__["default"].__hash}` + " " + "container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }
}, __jsx("h1", {
  className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_4__["default"].__hash}` + " " + 'text-xs mt-6',
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 13
  }
}, "About")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: _style__WEBPACK_IMPORTED_MODULE_4__["default"].__hash,
  __self: undefined
}, _style__WEBPACK_IMPORTED_MODULE_4__["default"])));

/***/ }),

/***/ "./src/containers/About/style.js":
/*!***************************************!*\
  !*** ./src/containers/About/style.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const style = new String(".about.jsx-3105159841{width:100%;padding:0;margin:0;}.container.jsx-3105159841{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:100vh;width:100%;background:transparent;-webkit-transition:ease-out .5s;transition:ease-out .5s;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcR0JNXFxEZXNrdG9wXFxlcm1pcmVcXHNyY1xcY29udGFpbmVyc1xcQWJvdXRcXHN0eWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVpQixBQUVjLEFBS08sV0FKUixPQUtHLEdBSkosU0FBQyw4REFLWSw4RUFDUSxtSEFDakIsYUFDRixXQUNZLHVCQUNDLHdEQUFDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcR0JNXFxEZXNrdG9wXFxlcm1pcmVcXHNyY1xcY29udGFpbmVyc1xcQWJvdXRcXHN0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tIFwic3R5bGVkLWpzeC9jc3NcIjtcclxuXHJcbmNvbnN0IHN0eWxlID0gY3NzYFxyXG4gIC5hYm91dHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhaW5lcntcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kIDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGVhc2Utb3V0IC41cztcclxuICB9XHJcbmBcclxuZXhwb3J0IGRlZmF1bHQgc3R5bGVcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\GBM\\\\Desktop\\\\ermire\\\\src\\\\containers\\\\About\\\\style.js */");
style.__hash = "3105159841";
/* harmony default export */ __webpack_exports__["default"] = (style);

/***/ }),

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _containers_About__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../containers/About */ "./src/containers/About/index.js");

/* harmony default export */ __webpack_exports__["default"] = (_containers_About__WEBPACK_IMPORTED_MODULE_0__["About"]);

/***/ }),

/***/ "./src/styles/styles.js":
/*!******************************!*\
  !*** ./src/styles/styles.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const logo = 'logo';
const style = new String(`@font-face{font-family:"canada-type-gibson";src:url("https://use.typekit.net/af/0d8f4c/00000000000000003b9b3882/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"),url("https://use.typekit.net/af/0d8f4c/00000000000000003b9b3882/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"),url("https://use.typekit.net/af/0d8f4c/00000000000000003b9b3882/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");font-display:swap;font-style:normal;font-weight:700;}@font-face{font-family:"canada-type-gibson";src:url("https://use.typekit.net/af/0618db/00000000000000003b9b3883/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff2"),url("https://use.typekit.net/af/0618db/00000000000000003b9b3883/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff"),url("https://use.typekit.net/af/0618db/00000000000000003b9b3883/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("opentype");font-display:swap;font-style:italic;font-weight:700;}@font-face{font-family:"canada-type-gibson";src:url("https://use.typekit.net/af/b67c91/00000000000000003b9b387d/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff2"),url("https://use.typekit.net/af/b67c91/00000000000000003b9b387d/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff"),url("https://use.typekit.net/af/b67c91/00000000000000003b9b387d/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("opentype");font-display:swap;font-style:italic;font-weight:400;}@font-face{font-family:"canada-type-gibson";src:url("https://use.typekit.net/af/7557c8/00000000000000003b9b3878/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n2&v=3") format("woff2"),url("https://use.typekit.net/af/7557c8/00000000000000003b9b3878/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n2&v=3") format("woff"),url("https://use.typekit.net/af/7557c8/00000000000000003b9b3878/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n2&v=3") format("opentype");font-display:swap;font-style:normal;font-weight:200;}@font-face{font-family:"canada-type-gibson";src:url("https://use.typekit.net/af/7f7817/00000000000000003b9b3879/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i2&v=3") format("woff2"),url("https://use.typekit.net/af/7f7817/00000000000000003b9b3879/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i2&v=3") format("woff"),url("https://use.typekit.net/af/7f7817/00000000000000003b9b3879/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i2&v=3") format("opentype");font-display:swap;font-style:italic;font-weight:200;}@font-face{font-family:"canada-type-gibson";src:url("https://use.typekit.net/af/ef2129/00000000000000003b9b387c/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/ef2129/00000000000000003b9b387c/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/ef2129/00000000000000003b9b387c/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");font-display:swap;font-style:normal;font-weight:400;}@font-face{font-family:"canada-type-gibson";src:url("https://use.typekit.net/af/403911/00000000000000003b9b3880/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3") format("woff2"),url("https://use.typekit.net/af/403911/00000000000000003b9b3880/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3") format("woff"),url("https://use.typekit.net/af/403911/00000000000000003b9b3880/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3") format("opentype");font-display:swap;font-style:normal;font-weight:600;}@font-face{font-family:"canada-type-gibson";src:url("https://use.typekit.net/af/28537c/00000000000000003b9b3881/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i6&v=3") format("woff2"),url("https://use.typekit.net/af/28537c/00000000000000003b9b3881/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i6&v=3") format("woff"),url("https://use.typekit.net/af/28537c/00000000000000003b9b3881/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i6&v=3") format("opentype");font-display:swap;font-style:italic;font-weight:600;}@font-face{font-family:"canada-type-gibson";src:url("https://use.typekit.net/af/e18217/00000000000000003b9b3876/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n1&v=3") format("woff2"),url("https://use.typekit.net/af/e18217/00000000000000003b9b3876/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n1&v=3") format("woff"),url("https://use.typekit.net/af/e18217/00000000000000003b9b3876/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n1&v=3") format("opentype");font-display:swap;font-style:normal;font-weight:100;}@font-face{font-family:"canada-type-gibson";src:url("https://use.typekit.net/af/97a068/00000000000000003b9b3877/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i1&v=3") format("woff2"),url("https://use.typekit.net/af/97a068/00000000000000003b9b3877/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i1&v=3") format("woff"),url("https://use.typekit.net/af/97a068/00000000000000003b9b3877/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i1&v=3") format("opentype");font-display:swap;font-style:italic;font-weight:100;}@font-face{font-family:"canada-type-gibson";src:url("https://use.typekit.net/af/aa1d64/00000000000000003b9b387a/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("woff2"),url("https://use.typekit.net/af/aa1d64/00000000000000003b9b387a/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("woff"),url("https://use.typekit.net/af/aa1d64/00000000000000003b9b387a/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("opentype");font-display:swap;font-style:normal;font-weight:300;}@font-face{font-family:"canada-type-gibson";src:url("https://use.typekit.net/af/32c9ba/00000000000000003b9b3f02/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i3&v=3") format("woff2"),url("https://use.typekit.net/af/32c9ba/00000000000000003b9b3f02/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i3&v=3") format("woff"),url("https://use.typekit.net/af/32c9ba/00000000000000003b9b3f02/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i3&v=3") format("opentype");font-display:swap;font-style:italic;font-weight:300;}@font-face{font-family:"canada-type-gibson";src:url("https://use.typekit.net/af/aee0aa/00000000000000003b9b3f03/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("woff2"),url("https://use.typekit.net/af/aee0aa/00000000000000003b9b3f03/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("woff"),url("https://use.typekit.net/af/aee0aa/00000000000000003b9b3f03/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("opentype");font-display:swap;font-style:normal;font-weight:500;}@font-face{font-family:"canada-type-gibson";src:url("https://use.typekit.net/af/5fead8/00000000000000003b9b387f/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i5&v=3") format("woff2"),url("https://use.typekit.net/af/5fead8/00000000000000003b9b387f/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i5&v=3") format("woff"),url("https://use.typekit.net/af/5fead8/00000000000000003b9b387f/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i5&v=3") format("opentype");font-display:swap;font-style:italic;font-weight:500;}@font-face{font-family:"canada-type-gibson";src:url("https://use.typekit.net/af/fd8f97/00000000000000003b9b3884/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3") format("woff2"),url("https://use.typekit.net/af/fd8f97/00000000000000003b9b3884/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3") format("woff"),url("https://use.typekit.net/af/fd8f97/00000000000000003b9b3884/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3") format("opentype");font-display:swap;font-style:normal;font-weight:900;}@font-face{font-family:"canada-type-gibson";src:url("https://use.typekit.net/af/3513a1/00000000000000003b9b3885/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i9&v=3") format("woff2"),url("https://use.typekit.net/af/3513a1/00000000000000003b9b3885/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i9&v=3") format("woff"),url("https://use.typekit.net/af/3513a1/00000000000000003b9b3885/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i9&v=3") format("opentype");font-display:swap;font-style:italic;font-weight:900;}*.jsx-1187539045,html,body{margin:0;padding:0;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:'canada-type-gibson',Monospaced,sans-serif;font-weight:400;box-sizing:border-box;-webkit-transition:all .5s ease-out;transition:all .5s ease-out;}*.jsx-1187539045,*.jsx-1187539045::after,*.jsx-1187539045::before{margin:0;padding:0;box-sizing:inherit;-webkit-transition:all .5s ease-out;transition:all .5s ease-out;}html{font-size:62.5%;-webkit-scroll-behavior:smooth;-moz-scroll-behavior:smooth;-ms-scroll-behavior:smooth;scroll-behavior:smooth;}body{font-size:1.6rem;}.col-1{width:calc(100vw/12);width:calc(100vw/12);}.logo{fill:darkblue;stroke:darkblue;stroke-width:4px;stroke-linejoin:round;-webkit-animation:logo-jsx-1187539045 1.5s 1s backwards cubic-bezier(0.3,0,0.75,1);animation:logo-jsx-1187539045 1.5s 1s backwards cubic-bezier(0.3,0,0.75,1);-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;}@-webkit-keyframes ${logo}-jsx-1187539045{0%{fill:transparent;stroke-dasharray:600;stroke-dashoffset:600px;}80%{fill:transparent;stroke-dasharray:600;}100%{fill:darkblue;stroke-dashoffset:0;stroke:darkblue;}}@keyframes ${logo}-jsx-1187539045{0%{fill:transparent;stroke-dasharray:600;stroke-dashoffset:600px;}80%{fill:transparent;stroke-dasharray:600;}100%{fill:darkblue;stroke-dashoffset:0;stroke:darkblue;}}.tk-canada-type-gibson.jsx-1187539045{font-family:"canada-type-gibson",sans-serif;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcR0JNXFxEZXNrdG9wXFxlcm1pcmVcXHNyY1xcc3R5bGVzXFxzdHlsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR1EsQUFJWSxBQWFBLEFBTU8sQUFJQyxBQUdJLEFBSVAsQUFVSyxBQUlBLEFBR0gsQUFLaUIsQUFPQSxBQU9BLEFBT0EsQUFPQSxBQU9BLEFBT0EsQUFPQSxBQU9BLEFBT0EsQUFPQSxBQU9BLEFBT0EsQUFPQSxBQU9BLEFBT0EsQUFPWSxTQW5LbkMsQUFhQSxLQWlCTSxBQWlCTSxFQTVCQyxDQUdMLEFBa0JLLEFBSUEsRUEzQ0ksQUFhUixFQVlFLFNBS0osR0FxQnFmLEFBT0EsQUFPQSxBQU9BLEFBT0EsQUFPQSxBQU9BLEFBT0EsQUFPQSxBQU9BLEFBT0EsQUFPQSxBQU9BLEFBT0EsQUFPQSxBQU9BLENBN0dwZixJQWpDVSxBQTBCRixBQUdGLElBbEJGLEVBeUl3QixFQWhLN0IsQ0E2QkssR0FnQkgsWUFQUSxPQVJvQyxpQ0FsQmxDLHVCQUlMLE1BZmlDLHVEQUN6QyxnQkFDTSxzQkFDTSxHQTJCRCw2REEzQkUsQ0E0QlIscUdBQUMsK0pBa0JKLEFBT0EsQUFPQSxBQU9BLEFBT0EsQUFPQSxBQU9BLEFBT0EsQUFPQSxBQU9BLEFBT0EsQUFPQSxBQU9BLEFBT0EsQUFPQSxBQU9BLGtCQXhHQSxBQU9BLEFBT0EsQUFPQSxBQU9BLEFBT0EsQUFPQSxBQU9BLEFBT0EsQUFPQSxBQU9BLEFBT0EsQUFPQSxBQU9BLEFBT0EsQUFPQSxrQkF4R0YsQUFPQSxBQU9BLEFBT0EsQUFPQSxBQU9BLEFBT0EsQUFPQSxBQU9BLEFBT0EsQUFPQSxBQU9BLEFBT0EsQUFPQSxBQU9BLEFBT0EsZ0JBekdDLEFBT0EsQUFPQSxBQU9BLEFBT0EsQUFPQSxBQU9BLEFBT0EsQUFPQSxBQU9BLEFBT0EsQUFPQSxBQU9BLEFBT0EsQUFPQSxBQU9BIiwiZmlsZSI6IkM6XFxVc2Vyc1xcR0JNXFxEZXNrdG9wXFxlcm1pcmVcXHNyY1xcc3R5bGVzXFxzdHlsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xyXG5jb25zdCBsb2dvID0gJ2xvZ28nXHJcbiAgICBjb25zdCBzdHlsZSA9IGNzc1xyXG4gICAgICAgIGBcclxuICAgICosXHJcbiAgICA6Z2xvYmFsKGh0bWwpLCBcclxuICAgIDpnbG9iYWwoYm9keSkge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTsgLyogaU9TIFNhZmFyaSAqL1xyXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnY2FuYWRhLXR5cGUtZ2lic29uJywgTW9ub3NwYWNlZCwgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLW91dDtcclxuICAgIH1cclxuXHJcblxyXG4qLFxyXG4qOjphZnRlcixcclxuKjo6YmVmb3JlIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xyXG4gIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbjpnbG9iYWwoaHRtbCkge1xyXG4gIGZvbnQtc2l6ZTogNjIuNSU7XHJcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbn1cclxuXHJcbjpnbG9iYWwoYm9keSkge1xyXG4gZm9udC1zaXplOiAxLjZyZW07XHJcbn1cclxuXHJcbiAgICA6Z2xvYmFsKC5jb2wtMSl7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3LzEyKTtcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwdncvMTIpO1xyXG4gICAgfVxyXG5cclxuICAgIDpnbG9iYWwoaDEpe1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAgICAgIDpnbG9iYWwoLmxvZ28pe1xyXG4gICAgICAgICAgICBmaWxsOiBkYXJrYmx1ZTtcclxuICAgICAgICAgICAgc3Ryb2tlOiBkYXJrYmx1ZTtcclxuICAgICAgICAgICAgc3Ryb2tlLXdpZHRoOiA0cHg7XHJcbiAgICAgICAgICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogbG9nbyAxLjVzIDFzIGJhY2t3YXJkcyBjdWJpYy1iZXppZXIoMC4zLCAwLCAwLjc1LCAxKTtcclxuICAgICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIEBrZXlmcmFtZXMgJHtsb2dvfSB7XHJcbiAgICAgICAgMCV7XHJcbiAgICAgICAgICAgIGZpbGw6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBzdHJva2UtZGFzaGFycmF5OiA2MDA7XHJcbiAgICAgICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiA2MDBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDgwJXtcclxuICAgICAgICAgICAgZmlsbDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDYwMDtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAxMDAle1xyXG4gICAgICAgICAgICBmaWxsOiBkYXJrYmx1ZTtcclxuICAgICAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XHJcbiAgICAgICAgICAgIHN0cm9rZTogZGFya2JsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiY2FuYWRhLXR5cGUtZ2lic29uXCI7XHJcbiAgICAgICAgc3JjOiB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi8wZDhmNGMvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODgyLzI3L2w/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW43JnY9M1wiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvMGQ4ZjRjLzAwMDAwMDAwMDAwMDAwMDAzYjliMzg4Mi8yNy9kP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uNyZ2PTNcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvMGQ4ZjRjLzAwMDAwMDAwMDAwMDAwMDAzYjliMzg4Mi8yNy9hP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uNyZ2PTNcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XHJcbiAgICAgICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgfVxyXG5cclxuICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcImNhbmFkYS10eXBlLWdpYnNvblwiO1xyXG4gICAgICAgIHNyYzogdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvMDYxOGRiLzAwMDAwMDAwMDAwMDAwMDAzYjliMzg4My8yNy9sP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1pNyZ2PTNcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzA2MThkYi8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4ODMvMjcvZD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9aTcmdj0zXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzA2MThkYi8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4ODMvMjcvYT9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9aTcmdj0zXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xyXG4gICAgICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIH1cclxuXHJcbiAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJjYW5hZGEtdHlwZS1naWJzb25cIjtcclxuICAgICAgICBzcmM6IHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmL2I2N2M5MS8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4N2QvMjcvbD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9aTQmdj0zXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi9iNjdjOTEvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODdkLzI3L2Q/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPWk0JnY9M1wiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi9iNjdjOTEvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODdkLzI3L2E/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPWk0JnY9M1wiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcclxuICAgICAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB9XHJcblxyXG4gICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiY2FuYWRhLXR5cGUtZ2lic29uXCI7XHJcbiAgICAgICAgc3JjOiB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi83NTU3YzgvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODc4LzI3L2w/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW4yJnY9M1wiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvNzU1N2M4LzAwMDAwMDAwMDAwMDAwMDAzYjliMzg3OC8yNy9kP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uMiZ2PTNcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvNzU1N2M4LzAwMDAwMDAwMDAwMDAwMDAzYjliMzg3OC8yNy9hP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uMiZ2PTNcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XHJcbiAgICAgICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgfVxyXG5cclxuICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcImNhbmFkYS10eXBlLWdpYnNvblwiO1xyXG4gICAgICAgIHNyYzogdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvN2Y3ODE3LzAwMDAwMDAwMDAwMDAwMDAzYjliMzg3OS8yNy9sP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1pMiZ2PTNcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzdmNzgxNy8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4NzkvMjcvZD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9aTImdj0zXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzdmNzgxNy8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4NzkvMjcvYT9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9aTImdj0zXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xyXG4gICAgICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIH1cclxuXHJcbiAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJjYW5hZGEtdHlwZS1naWJzb25cIjtcclxuICAgICAgICBzcmM6IHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmL2VmMjEyOS8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4N2MvMjcvbD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjQmdj0zXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi9lZjIxMjkvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODdjLzI3L2Q/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW40JnY9M1wiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi9lZjIxMjkvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODdjLzI3L2E/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW40JnY9M1wiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcclxuICAgICAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB9XHJcblxyXG4gICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiY2FuYWRhLXR5cGUtZ2lic29uXCI7XHJcbiAgICAgICAgc3JjOiB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi80MDM5MTEvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODgwLzI3L2w/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW42JnY9M1wiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvNDAzOTExLzAwMDAwMDAwMDAwMDAwMDAzYjliMzg4MC8yNy9kP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uNiZ2PTNcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvNDAzOTExLzAwMDAwMDAwMDAwMDAwMDAzYjliMzg4MC8yNy9hP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uNiZ2PTNcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XHJcbiAgICAgICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG5cclxuICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcImNhbmFkYS10eXBlLWdpYnNvblwiO1xyXG4gICAgICAgIHNyYzogdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvMjg1MzdjLzAwMDAwMDAwMDAwMDAwMDAzYjliMzg4MS8yNy9sP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1pNiZ2PTNcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzI4NTM3Yy8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4ODEvMjcvZD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9aTYmdj0zXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzI4NTM3Yy8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4ODEvMjcvYT9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9aTYmdj0zXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xyXG4gICAgICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuXHJcbiAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJjYW5hZGEtdHlwZS1naWJzb25cIjtcclxuICAgICAgICBzcmM6IHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmL2UxODIxNy8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4NzYvMjcvbD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjEmdj0zXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi9lMTgyMTcvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODc2LzI3L2Q/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW4xJnY9M1wiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi9lMTgyMTcvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODc2LzI3L2E/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW4xJnY9M1wiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcclxuICAgICAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICB9XHJcblxyXG4gICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiY2FuYWRhLXR5cGUtZ2lic29uXCI7XHJcbiAgICAgICAgc3JjOiB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi85N2EwNjgvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODc3LzI3L2w/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPWkxJnY9M1wiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvOTdhMDY4LzAwMDAwMDAwMDAwMDAwMDAzYjliMzg3Ny8yNy9kP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1pMSZ2PTNcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvOTdhMDY4LzAwMDAwMDAwMDAwMDAwMDAzYjliMzg3Ny8yNy9hP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1pMSZ2PTNcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XHJcbiAgICAgICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgfVxyXG5cclxuICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcImNhbmFkYS10eXBlLWdpYnNvblwiO1xyXG4gICAgICAgIHNyYzogdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvYWExZDY0LzAwMDAwMDAwMDAwMDAwMDAzYjliMzg3YS8yNy9sP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uMyZ2PTNcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmL2FhMWQ2NC8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4N2EvMjcvZD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjMmdj0zXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmL2FhMWQ2NC8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4N2EvMjcvYT9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjMmdj0zXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xyXG4gICAgICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIH1cclxuXHJcbiAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJjYW5hZGEtdHlwZS1naWJzb25cIjtcclxuICAgICAgICBzcmM6IHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzMyYzliYS8wMDAwMDAwMDAwMDAwMDAwM2I5YjNmMDIvMjcvbD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9aTMmdj0zXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi8zMmM5YmEvMDAwMDAwMDAwMDAwMDAwMDNiOWIzZjAyLzI3L2Q/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPWkzJnY9M1wiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi8zMmM5YmEvMDAwMDAwMDAwMDAwMDAwMDNiOWIzZjAyLzI3L2E/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPWkzJnY9M1wiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcclxuICAgICAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB9XHJcblxyXG4gICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiY2FuYWRhLXR5cGUtZ2lic29uXCI7XHJcbiAgICAgICAgc3JjOiB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi9hZWUwYWEvMDAwMDAwMDAwMDAwMDAwMDNiOWIzZjAzLzI3L2w/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW41JnY9M1wiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvYWVlMGFhLzAwMDAwMDAwMDAwMDAwMDAzYjliM2YwMy8yNy9kP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uNSZ2PTNcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvYWVlMGFhLzAwMDAwMDAwMDAwMDAwMDAzYjliM2YwMy8yNy9hP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uNSZ2PTNcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XHJcbiAgICAgICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG5cclxuICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcImNhbmFkYS10eXBlLWdpYnNvblwiO1xyXG4gICAgICAgIHNyYzogdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvNWZlYWQ4LzAwMDAwMDAwMDAwMDAwMDAzYjliMzg3Zi8yNy9sP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1pNSZ2PTNcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzVmZWFkOC8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4N2YvMjcvZD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9aTUmdj0zXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzVmZWFkOC8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4N2YvMjcvYT9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9aTUmdj0zXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xyXG4gICAgICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuXHJcbiAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJjYW5hZGEtdHlwZS1naWJzb25cIjtcclxuICAgICAgICBzcmM6IHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmL2ZkOGY5Ny8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4ODQvMjcvbD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjkmdj0zXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi9mZDhmOTcvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODg0LzI3L2Q/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW45JnY9M1wiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi9mZDhmOTcvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODg0LzI3L2E/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW45JnY9M1wiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcclxuICAgICAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICB9XHJcblxyXG4gICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiY2FuYWRhLXR5cGUtZ2lic29uXCI7XHJcbiAgICAgICAgc3JjOiB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi8zNTEzYTEvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODg1LzI3L2w/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPWk5JnY9M1wiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvMzUxM2ExLzAwMDAwMDAwMDAwMDAwMDAzYjliMzg4NS8yNy9kP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1pOSZ2PTNcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvMzUxM2ExLzAwMDAwMDAwMDAwMDAwMDAzYjliMzg4NS8yNy9hP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1pOSZ2PTNcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XHJcbiAgICAgICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgfVxyXG5cclxuICAgIC50ay1jYW5hZGEtdHlwZS1naWJzb24ge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcImNhbmFkYS10eXBlLWdpYnNvblwiLCBzYW5zLXNlcmlmO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3R5bGVcclxuIl19 */
/*@ sourceURL=C:\\Users\\GBM\\Desktop\\ermire\\src\\styles\\styles.js */`);
style.__hash = "1187539045";
/* harmony default export */ __webpack_exports__["default"] = (style);

/***/ }),

/***/ 3:
/*!**********************************!*\
  !*** multi ./src/pages/about.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\GBM\Desktop\ermire\src\pages\about.js */"./src/pages/about.js");


/***/ }),

/***/ "next-page-transitions":
/*!****************************************!*\
  !*** external "next-page-transitions" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-page-transitions");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-messenger-customer-chat":
/*!************************************************!*\
  !*** external "react-messenger-customer-chat" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-messenger-customer-chat");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvbWl0dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dC9Gb290ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0Zvb3Rlci9zdHlsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0hlYWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvSGVhZGVyL3N0eWxlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L3N0eWxlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05hdmlnYXRpb24vc3R5bGUuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL0Fib3V0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL0Fib3V0L3N0eWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9hYm91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXBhZ2UtdHJhbnNpdGlvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlcy1leGFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1tZXNzZW5nZXItY3VzdG9tZXItY2hhdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVybFwiIl0sIm5hbWVzIjpbIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJleHBvcnRzIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJfcmVhY3QiLCJfdXJsIiwiX3V0aWxzIiwiX3JvdXRlciIsIl9yb3V0ZXIyIiwiaXNMb2NhbCIsImhyZWYiLCJ1cmwiLCJwYXJzZSIsIm9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwiaG9zdCIsInByb3RvY29sIiwibWVtb2l6ZWRGb3JtYXRVcmwiLCJmb3JtYXRGdW5jIiwibGFzdEhyZWYiLCJsYXN0QXMiLCJsYXN0UmVzdWx0IiwiYXMiLCJyZXN1bHQiLCJmb3JtYXRVcmwiLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsIm9ic2VydmVyIiwibGlzdGVuZXJzIiwiTWFwIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwiZ2V0T2JzZXJ2ZXIiLCJ1bmRlZmluZWQiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiaGFzIiwidGFyZ2V0IiwiY2IiLCJnZXQiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwidW5vYnNlcnZlIiwiZGVsZXRlIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsImVsIiwib2JzZXJ2ZSIsInNldCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsIkxpbmsiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwicCIsImNsZWFuVXBMaXN0ZW5lcnMiLCJmb3JtYXRVcmxzIiwiYXNIcmVmIiwiYWRkQmFzZVBhdGgiLCJsaW5rQ2xpY2tlZCIsImUiLCJub2RlTmFtZSIsImN1cnJlbnRUYXJnZXQiLCJtZXRhS2V5IiwiY3RybEtleSIsInNoaWZ0S2V5IiwibmF0aXZlRXZlbnQiLCJ3aGljaCIsInBhdGhuYW1lIiwibG9jYXRpb24iLCJyZXNvbHZlIiwicHJldmVudERlZmF1bHQiLCJzY3JvbGwiLCJpbmRleE9mIiwicmVwbGFjZSIsInNoYWxsb3ciLCJ0aGVuIiwic3VjY2VzcyIsInNjcm9sbFRvIiwiZG9jdW1lbnQiLCJib2R5IiwiZm9jdXMiLCJwcmVmZXRjaCIsIndhcm4iLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImdldFBhdGhzIiwicGFyc2VkSHJlZiIsInBhcnNlZEFzIiwicmVzb2x2ZWRIcmVmIiwiaGFuZGxlUmVmIiwicmVmIiwidGFnTmFtZSIsImlzUHJlZmV0Y2hlZCIsImpvaW4iLCJvcHRpb25zIiwicGF0aHMiLCJjYXRjaCIsInJlbmRlciIsImNoaWxkcmVuIiwiY3JlYXRlRWxlbWVudCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY3VycmVudCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5Iiwib25DbGljayIsImRlZmF1bHRQcmV2ZW50ZWQiLCJwYXNzSHJlZiIsInR5cGUiLCJwcm9jZXNzIiwiY2xvbmVFbGVtZW50IiwiZXhlY09uY2UiLCJQcm9wVHlwZXMiLCJleGFjdCIsInByb3BUeXBlcyIsIm9uZU9mVHlwZSIsInN0cmluZyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJib29sIiwiZWxlbWVudCIsInByb3BOYW1lIiwidmFsdWUiLCJfZGVmYXVsdCIsInVzZVJvdXRlciIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsImNyZWF0ZVJvdXRlciIsIndpdGhSb3V0ZXIiLCJSb3V0ZXIiLCJOZXh0Um91dGVyIiwiX3JvdXRlckNvbnRleHQiLCJfd2l0aFJvdXRlciIsInNpbmdsZXRvblJvdXRlciIsInJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV2ZW50cyIsImZpZWxkIiwiZ2V0Um91dGVyIiwiYXJndW1lbnRzIiwiZXZlbnQiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJFcnJvciIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiX2xlbiIsImxlbmd0aCIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJpbnN0YW5jZSIsInByb3BlcnR5IiwiYXNzaWduIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJuYW1lIiwiZGlzcGxheU5hbWUiLCJtaXR0IiwiYWxsIiwiY3JlYXRlIiwiaGFuZGxlciIsInB1c2giLCJvZmYiLCJzcGxpY2UiLCJlbWl0IiwiZXZ0cyIsInNsaWNlIiwibWFwIiwiX19pbXBvcnREZWZhdWx0IiwibW9kIiwidXJsXzEiLCJtaXR0XzEiLCJ1dGlsc18xIiwiaXNfZHluYW1pY18xIiwicm91dGVfbWF0Y2hlcl8xIiwicm91dGVfcmVnZXhfMSIsImJhc2VQYXRoIiwicGF0aCIsImRlbEJhc2VQYXRoIiwic3Vic3RyIiwidG9Sb3V0ZSIsInByZXBhcmVSb3V0ZSIsImZldGNoTmV4dERhdGEiLCJxdWVyeSIsImlzU2VydmVyUmVuZGVyIiwiYXR0ZW1wdHMiLCJnZXRSZXNwb25zZSIsImZldGNoIiwiX19ORVhUX0RBVEFfXyIsImJ1aWxkSWQiLCJjcmVkZW50aWFscyIsInJlcyIsIm9rIiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJjb2RlIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwic2RjIiwib25Qb3BTdGF0ZSIsInN0YXRlIiwiY2hhbmdlU3RhdGUiLCJnZXRVUkwiLCJpc1NzciIsImFzUGF0aCIsIl9icHMiLCJfZ2V0U3RhdGljRGF0YSIsIlByb21pc2UiLCJfZ2V0U2VydmVyRGF0YSIsInJvdXRlIiwiY29tcG9uZW50cyIsIl9fTl9TU0ciLCJfX05fU1NQIiwiaXNEeW5hbWljUm91dGUiLCJhdXRvRXhwb3J0Iiwic3ViIiwiY2xjIiwiX3dyYXBBcHAiLCJfcmV3cml0ZVVybEZvck5leHRFeHBvcnQiLCJ1cGRhdGUiLCJuZXdEYXRhIiwibm90aWZ5IiwicmVsb2FkIiwiYmFjayIsImhpc3RvcnkiLCJjaGFuZ2UiLCJtZXRob2QiLCJfYXMiLCJyZWplY3QiLCJfaCIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwiYWJvcnRDb21wb25lbnRMb2FkIiwib25seUFIYXNoQ2hhbmdlIiwic2Nyb2xsVG9IYXNoIiwidXJsSXNOZXciLCJhc1BhdGhuYW1lIiwicm91dGVSZWdleCIsImdldFJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwiZ2V0Um91dGVNYXRjaGVyIiwibWlzc2luZ1BhcmFtcyIsImtleXMiLCJncm91cHMiLCJmaWx0ZXIiLCJwYXJhbSIsImdldFJvdXRlSW5mbyIsInJvdXRlSW5mbyIsImNhbmNlbGxlZCIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsImNhY2hlZFJvdXRlSW5mbyIsImhhbmRsZUVycm9yIiwibG9hZEVycm9yRmFpbCIsImZldGNoQ29tcG9uZW50IiwicGFnZSIsImdpcEVyciIsImlzVmFsaWRFbGVtZW50VHlwZSIsIl9nZXREYXRhIiwiYmVmb3JlUG9wU3RhdGUiLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic3BsaXQiLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwiaGFzaCIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJwcmVmZXRjaERhdGEiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImZuIiwiY3R4IiwiQXBwVHJlZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJURVNUX1JPVVRFIiwidGVzdCIsInJlIiwiZXhlYyIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsIl8iLCJwYXJhbXMiLCJzbHVnTmFtZSIsImciLCJtIiwicG9zIiwicmVwZWF0IiwiZXNjYXBlUmVnZXgiLCJzdHIiLCJub3JtYWxpemVkUm91dGUiLCJlc2NhcGVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwiJDEiLCJpc0NhdGNoQWxsIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJrZXkiLCJSZWdFeHAiLCJuYW1lZFJlZ2V4IiwidXNlZCIsImhvc3RuYW1lIiwicG9ydCIsImdldERpc3BsYXlOYW1lIiwiaXNSZXNTZW50IiwiZmluaXNoZWQiLCJoZWFkZXJzU2VudCIsIl9hIiwicHJvdG90eXBlIiwicGFnZVByb3BzIiwidXJsT2JqZWN0S2V5cyIsImZvcm1hdCIsIlNQIiwibWVhc3VyZSIsIkZvb3RlciIsInN0eWxlIiwiTG9nbyIsIkhlYWRlciIsImxvZ28iLCJUSU1FT1VUIiwiTGF5b3V0IiwiZW50ZXIiLCJleGl0Iiwid2lkdGgiLCJza3kiLCJsYXlvdXQiLCJIb3ZlciIsIk5hdmlnYXRpb24iLCJyb3V0ZXMiLCJ0aXRsZSIsIm1lbnVTdGF0ZSIsInNldE1lbnVTdGF0ZSIsInVzZVN0YXRlIiwic2hvd01lbnVCZyIsImhpZGVNZW51QmciLCJpdGVtIiwiaW5kZXgiLCJob3ZlciIsIkFib3V0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsSzs7Ozs7O0FBRW5CLE1BQU1DLFVBQVUsR0FBRyxNQUFNO0FBQzVCLFFBQU1DLE1BQU0sR0FBRyxDQUNYO0FBQ0k3SCxTQUFLLEVBQUUsR0FEWDtBQUVJOEgsU0FBSyxFQUFFO0FBRlgsR0FEVyxFQUtYO0FBQ0k5SCxTQUFLLEVBQUUsUUFEWDtBQUVJOEgsU0FBSyxFQUFFO0FBRlgsR0FMVyxFQVNYO0FBQ0k5SCxTQUFLLEVBQUUsV0FEWDtBQUVJOEgsU0FBSyxFQUFFO0FBRlgsR0FUVyxFQWFYO0FBQ0k5SCxTQUFLLEVBQUUsT0FEWDtBQUVJOEgsU0FBSyxFQUFFO0FBRlgsR0FiVyxFQWlCWDtBQUNJOUgsU0FBSyxFQUFFLFVBRFg7QUFF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QUMvTUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsZ0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGFib3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3VybD1yZXF1aXJlKFwidXJsXCIpO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi91dGlsc1wiKTt2YXIgX3JvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3JvdXRlclwiKSk7dmFyIF9yb3V0ZXIyPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKTtmdW5jdGlvbiBpc0xvY2FsKGhyZWYpe3ZhciB1cmw9KDAsX3VybC5wYXJzZSkoaHJlZixmYWxzZSx0cnVlKTt2YXIgb3JpZ2luPSgwLF91cmwucGFyc2UpKCgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKSxmYWxzZSx0cnVlKTtyZXR1cm4hdXJsLmhvc3R8fHVybC5wcm90b2NvbD09PW9yaWdpbi5wcm90b2NvbCYmdXJsLmhvc3Q9PT1vcmlnaW4uaG9zdDt9ZnVuY3Rpb24gbWVtb2l6ZWRGb3JtYXRVcmwoZm9ybWF0RnVuYyl7dmFyIGxhc3RIcmVmPW51bGw7dmFyIGxhc3RBcz1udWxsO3ZhciBsYXN0UmVzdWx0PW51bGw7cmV0dXJuKGhyZWYsYXMpPT57aWYobGFzdFJlc3VsdCYmaHJlZj09PWxhc3RIcmVmJiZhcz09PWxhc3RBcyl7cmV0dXJuIGxhc3RSZXN1bHQ7fXZhciByZXN1bHQ9Zm9ybWF0RnVuYyhocmVmLGFzKTtsYXN0SHJlZj1ocmVmO2xhc3RBcz1hcztsYXN0UmVzdWx0PXJlc3VsdDtyZXR1cm4gcmVzdWx0O307fWZ1bmN0aW9uIGZvcm1hdFVybCh1cmwpe3JldHVybiB1cmwmJnR5cGVvZiB1cmw9PT0nb2JqZWN0Jz8oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHVybCk6dXJsO312YXIgb2JzZXJ2ZXI7dmFyIGxpc3RlbmVycz1uZXcgTWFwKCk7dmFyIEludGVyc2VjdGlvbk9ic2VydmVyPXR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz93aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXI6bnVsbDt2YXIgcHJlZmV0Y2hlZD17fTtmdW5jdGlvbiBnZXRPYnNlcnZlcigpey8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG5pZihvYnNlcnZlcil7cmV0dXJuIG9ic2VydmVyO30vLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbmlmKCFJbnRlcnNlY3Rpb25PYnNlcnZlcil7cmV0dXJuIHVuZGVmaW5lZDt9cmV0dXJuIG9ic2VydmVyPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzPT57ZW50cmllcy5mb3JFYWNoKGVudHJ5PT57aWYoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSl7cmV0dXJuO312YXIgY2I9bGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpO2lmKGVudHJ5LmlzSW50ZXJzZWN0aW5nfHxlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbz4wKXtvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldCk7Y2IoKTt9fSk7fSx7cm9vdE1hcmdpbjonMjAwcHgnfSk7fXZhciBsaXN0ZW5Ub0ludGVyc2VjdGlvbnM9KGVsLGNiKT0+e3ZhciBvYnNlcnZlcj1nZXRPYnNlcnZlcigpO2lmKCFvYnNlcnZlcil7cmV0dXJuKCk9Pnt9O31vYnNlcnZlci5vYnNlcnZlKGVsKTtsaXN0ZW5lcnMuc2V0KGVsLGNiKTtyZXR1cm4oKT0+e3RyeXtvYnNlcnZlci51bm9ic2VydmUoZWwpO31jYXRjaChlcnIpe2NvbnNvbGUuZXJyb3IoZXJyKTt9bGlzdGVuZXJzLmRlbGV0ZShlbCk7fTt9O2NsYXNzIExpbmsgZXh0ZW5kcyBfcmVhY3QuQ29tcG9uZW50e2NvbnN0cnVjdG9yKHByb3BzKXtzdXBlcihwcm9wcyk7dGhpcy5wPXZvaWQgMDt0aGlzLmNsZWFuVXBMaXN0ZW5lcnM9KCk9Pnt9O3RoaXMuZm9ybWF0VXJscz1tZW1vaXplZEZvcm1hdFVybCgoaHJlZixhc0hyZWYpPT57cmV0dXJue2hyZWY6KDAsX3JvdXRlcjIuYWRkQmFzZVBhdGgpKGZvcm1hdFVybChocmVmKSksYXM6YXNIcmVmPygwLF9yb3V0ZXIyLmFkZEJhc2VQYXRoKShmb3JtYXRVcmwoYXNIcmVmKSk6YXNIcmVmfTt9KTt0aGlzLmxpbmtDbGlja2VkPWU9Pnt2YXJ7bm9kZU5hbWUsdGFyZ2V0fT1lLmN1cnJlbnRUYXJnZXQ7aWYobm9kZU5hbWU9PT0nQScmJih0YXJnZXQmJnRhcmdldCE9PSdfc2VsZid8fGUubWV0YUtleXx8ZS5jdHJsS2V5fHxlLnNoaWZ0S2V5fHxlLm5hdGl2ZUV2ZW50JiZlLm5hdGl2ZUV2ZW50LndoaWNoPT09Mikpey8vIGlnbm9yZSBjbGljayBmb3IgbmV3IHRhYiAvIG5ldyB3aW5kb3cgYmVoYXZpb3JcbnJldHVybjt9dmFye2hyZWYsYXN9PXRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsdGhpcy5wcm9wcy5hcyk7aWYoIWlzTG9jYWwoaHJlZikpey8vIGlnbm9yZSBjbGljayBpZiBpdCdzIG91dHNpZGUgb3VyIHNjb3BlIChlLmcuIGh0dHBzOi8vZ29vZ2xlLmNvbSlcbnJldHVybjt9dmFye3BhdGhuYW1lfT13aW5kb3cubG9jYXRpb247aHJlZj0oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLGhyZWYpO2FzPWFzPygwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUsYXMpOmhyZWY7ZS5wcmV2ZW50RGVmYXVsdCgpOy8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xudmFye3Njcm9sbH09dGhpcy5wcm9wcztpZihzY3JvbGw9PW51bGwpe3Njcm9sbD1hcy5pbmRleE9mKCcjJyk8MDt9Ly8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG5fcm91dGVyLmRlZmF1bHRbdGhpcy5wcm9wcy5yZXBsYWNlPydyZXBsYWNlJzoncHVzaCddKGhyZWYsYXMse3NoYWxsb3c6dGhpcy5wcm9wcy5zaGFsbG93fSkudGhlbihzdWNjZXNzPT57aWYoIXN1Y2Nlc3MpcmV0dXJuO2lmKHNjcm9sbCl7d2luZG93LnNjcm9sbFRvKDAsMCk7ZG9jdW1lbnQuYm9keS5mb2N1cygpO319KTt9O2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZihwcm9wcy5wcmVmZXRjaCl7Y29uc29sZS53YXJuKCdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnKTt9fXRoaXMucD1wcm9wcy5wcmVmZXRjaCE9PWZhbHNlO31jb21wb25lbnRXaWxsVW5tb3VudCgpe3RoaXMuY2xlYW5VcExpc3RlbmVycygpO31nZXRQYXRocygpe3ZhcntwYXRobmFtZX09d2luZG93LmxvY2F0aW9uO3ZhcntocmVmOnBhcnNlZEhyZWYsYXM6cGFyc2VkQXN9PXRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsdGhpcy5wcm9wcy5hcyk7dmFyIHJlc29sdmVkSHJlZj0oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLHBhcnNlZEhyZWYpO3JldHVybltyZXNvbHZlZEhyZWYscGFyc2VkQXM/KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxwYXJzZWRBcyk6cmVzb2x2ZWRIcmVmXTt9aGFuZGxlUmVmKHJlZil7aWYodGhpcy5wJiZJbnRlcnNlY3Rpb25PYnNlcnZlciYmcmVmJiZyZWYudGFnTmFtZSl7dGhpcy5jbGVhblVwTGlzdGVuZXJzKCk7dmFyIGlzUHJlZmV0Y2hlZD1wcmVmZXRjaGVkW3RoaXMuZ2V0UGF0aHMoKS5qb2luKC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4nJScpXTtpZighaXNQcmVmZXRjaGVkKXt0aGlzLmNsZWFuVXBMaXN0ZW5lcnM9bGlzdGVuVG9JbnRlcnNlY3Rpb25zKHJlZiwoKT0+e3RoaXMucHJlZmV0Y2goKTt9KTt9fX0vLyBUaGUgZnVuY3Rpb24gaXMgbWVtb2l6ZWQgc28gdGhhdCBubyBleHRyYSBsaWZlY3ljbGVzIGFyZSBuZWVkZWRcbi8vIGFzIHBlciBodHRwczovL3JlYWN0anMub3JnL2Jsb2cvMjAxOC8wNi8wNy95b3UtcHJvYmFibHktZG9udC1uZWVkLWRlcml2ZWQtc3RhdGUuaHRtbFxucHJlZmV0Y2gob3B0aW9ucyl7aWYoIXRoaXMucHx8dHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnKXJldHVybjsvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG52YXIgcGF0aHM9dGhpcy5nZXRQYXRocygpOy8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbi8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG5fcm91dGVyLmRlZmF1bHQucHJlZmV0Y2gocGF0aHNbLyogaHJlZiAqLzBdLHBhdGhzWy8qIGFzUGF0aCAqLzFdLG9wdGlvbnMpLmNhdGNoKGVycj0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXsvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG50aHJvdyBlcnI7fX0pO3ByZWZldGNoZWRbcGF0aHMuam9pbigvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuJyUnKV09dHJ1ZTt9cmVuZGVyKCl7dmFye2NoaWxkcmVufT10aGlzLnByb3BzO3ZhcntocmVmLGFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpOy8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuaWYodHlwZW9mIGNoaWxkcmVuPT09J3N0cmluZycpe2NoaWxkcmVuPS8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLG51bGwsY2hpbGRyZW4pO30vLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbnZhciBjaGlsZD1fcmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7dmFyIHByb3BzPXtyZWY6ZWw9Pnt0aGlzLmhhbmRsZVJlZihlbCk7aWYoY2hpbGQmJnR5cGVvZiBjaGlsZD09PSdvYmplY3QnJiZjaGlsZC5yZWYpe2lmKHR5cGVvZiBjaGlsZC5yZWY9PT0nZnVuY3Rpb24nKWNoaWxkLnJlZihlbCk7ZWxzZSBpZih0eXBlb2YgY2hpbGQucmVmPT09J29iamVjdCcpe2NoaWxkLnJlZi5jdXJyZW50PWVsO319fSxvbk1vdXNlRW50ZXI6ZT0+e2lmKGNoaWxkLnByb3BzJiZ0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpO310aGlzLnByZWZldGNoKHtwcmlvcml0eTp0cnVlfSk7fSxvbkNsaWNrOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2s9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO31pZighZS5kZWZhdWx0UHJldmVudGVkKXt0aGlzLmxpbmtDbGlja2VkKGUpO319fTsvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbi8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuaWYodGhpcy5wcm9wcy5wYXNzSHJlZnx8Y2hpbGQudHlwZT09PSdhJyYmISgnaHJlZidpbiBjaGlsZC5wcm9wcykpe3Byb3BzLmhyZWY9YXN8fGhyZWY7fS8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbi8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseS5cbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpe3ZhciByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydD1yZXF1aXJlKCcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKS5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtpZihwcm9wcy5ocmVmJiZ0eXBlb2YgX19ORVhUX0RBVEFfXyE9PSd1bmRlZmluZWQnJiZfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpe3Byb3BzLmhyZWY9cmV3cml0ZVVybEZvck5leHRFeHBvcnQocHJvcHMuaHJlZik7fX1yZXR1cm4gX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLHByb3BzKTt9fWlmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7dmFyIHdhcm49KDAsX3V0aWxzLmV4ZWNPbmNlKShjb25zb2xlLmVycm9yKTsvLyBUaGlzIG1vZHVsZSBnZXRzIHJlbW92ZWQgYnkgd2VicGFjay5JZ25vcmVQbHVnaW5cbnZhciBQcm9wVHlwZXM9cmVxdWlyZSgncHJvcC10eXBlcycpO3ZhciBleGFjdD1yZXF1aXJlKCdwcm9wLXR5cGVzLWV4YWN0Jyk7Ly8gQHRzLWlnbm9yZSB0aGUgcHJvcGVydHkgaXMgc3VwcG9ydGVkLCB3aGVuIGRlY2xhcmluZyBpdCBvbiB0aGUgY2xhc3MgaXQgb3V0cHV0cyBhbiBleHRyYSBiaXQgb2YgY29kZSB3aGljaCBpcyBub3QgbmVlZGVkLlxuTGluay5wcm9wVHlwZXM9ZXhhY3Qoe2hyZWY6UHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZyxQcm9wVHlwZXMub2JqZWN0XSkuaXNSZXF1aXJlZCxhczpQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLFByb3BUeXBlcy5vYmplY3RdKSxwcmVmZXRjaDpQcm9wVHlwZXMuYm9vbCxyZXBsYWNlOlByb3BUeXBlcy5ib29sLHNoYWxsb3c6UHJvcFR5cGVzLmJvb2wscGFzc0hyZWY6UHJvcFR5cGVzLmJvb2wsc2Nyb2xsOlByb3BUeXBlcy5ib29sLGNoaWxkcmVuOlByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LChwcm9wcyxwcm9wTmFtZSk9Pnt2YXIgdmFsdWU9cHJvcHNbcHJvcE5hbWVdO2lmKHR5cGVvZiB2YWx1ZT09PSdzdHJpbmcnKXt3YXJuKFwiV2FybmluZzogWW91J3JlIHVzaW5nIGEgc3RyaW5nIGRpcmVjdGx5IGluc2lkZSA8TGluaz4uIFRoaXMgdXNhZ2UgaGFzIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIGFkZCBhbiA8YT4gdGFnIGFzIGNoaWxkIG9mIDxMaW5rPlwiKTt9cmV0dXJuIG51bGw7fV0pLmlzUmVxdWlyZWR9KTt9dmFyIF9kZWZhdWx0PUxpbms7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZVJvdXRlcj11c2VSb3V0ZXI7ZXhwb3J0cy5tYWtlUHVibGljUm91dGVySW5zdGFuY2U9bWFrZVB1YmxpY1JvdXRlckluc3RhbmNlO2V4cG9ydHMuY3JlYXRlUm91dGVyPWV4cG9ydHMud2l0aFJvdXRlcj1leHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyMj1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIikpO2V4cG9ydHMuUm91dGVyPV9yb3V0ZXIyLmRlZmF1bHQ7ZXhwb3J0cy5OZXh0Um91dGVyPV9yb3V0ZXIyLk5leHRSb3V0ZXI7dmFyIF9yb3V0ZXJDb250ZXh0PXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHRcIik7dmFyIF93aXRoUm91dGVyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO2V4cG9ydHMud2l0aFJvdXRlcj1fd2l0aFJvdXRlci5kZWZhdWx0Oy8qIGdsb2JhbCB3aW5kb3cgKi92YXIgc2luZ2xldG9uUm91dGVyPXtyb3V0ZXI6bnVsbCwvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxucmVhZHlDYWxsYmFja3M6W10scmVhZHkoY2Ipe2lmKHRoaXMucm91dGVyKXJldHVybiBjYigpO2lmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7dGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTt9fX07Ly8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxudmFyIHVybFByb3BlcnR5RmllbGRzPVsncGF0aG5hbWUnLCdyb3V0ZScsJ3F1ZXJ5JywnYXNQYXRoJywnY29tcG9uZW50cycsJ2lzRmFsbGJhY2snLCdiYXNlUGF0aCddO3ZhciByb3V0ZXJFdmVudHM9Wydyb3V0ZUNoYW5nZVN0YXJ0JywnYmVmb3JlSGlzdG9yeUNoYW5nZScsJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCdyb3V0ZUNoYW5nZUVycm9yJywnaGFzaENoYW5nZVN0YXJ0JywnaGFzaENoYW5nZUNvbXBsZXRlJ107dmFyIGNvcmVNZXRob2RGaWVsZHM9WydwdXNoJywncmVwbGFjZScsJ3JlbG9hZCcsJ2JhY2snLCdwcmVmZXRjaCcsJ2JlZm9yZVBvcFN0YXRlJ107Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwnZXZlbnRzJyx7Z2V0KCl7cmV0dXJuIF9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO319KTt1cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbi8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4vLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlcixmaWVsZCx7Z2V0KCl7dmFyIHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXTt9fSk7fSk7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbjtzaW5nbGV0b25Sb3V0ZXJbZmllbGRdPWZ1bmN0aW9uKCl7dmFyIHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmd1bWVudHMpO307fSk7cm91dGVyRXZlbnRzLmZvckVhY2goZXZlbnQ9PntzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9Pntfcm91dGVyMi5kZWZhdWx0LmV2ZW50cy5vbihldmVudCxmdW5jdGlvbigpe3ZhciBldmVudEZpZWxkPVwib25cIitldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStldmVudC5zdWJzdHJpbmcoMSk7dmFyIF9zaW5nbGV0b25Sb3V0ZXI9c2luZ2xldG9uUm91dGVyO2lmKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pe3RyeXtfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3VtZW50cyk7fWNhdGNoKGVycil7Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbmNvbnNvbGUuZXJyb3IoXCJFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogXCIrZXZlbnRGaWVsZCk7Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbmNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UrXCJcXG5cIitlcnIuc3RhY2spO319fSk7fSk7fSk7ZnVuY3Rpb24gZ2V0Um91dGVyKCl7aWYoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpe3ZhciBtZXNzYWdlPSdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJysnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fS8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxudmFyIF9kZWZhdWx0PXNpbmdsZXRvblJvdXRlcjsvLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O2Z1bmN0aW9uIHVzZVJvdXRlcigpe3JldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO30vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxudmFyIGNyZWF0ZVJvdXRlcj1mdW5jdGlvbiBjcmVhdGVSb3V0ZXIoKXtmb3IodmFyIF9sZW49YXJndW1lbnRzLmxlbmd0aCxhcmdzPW5ldyBBcnJheShfbGVuKSxfa2V5PTA7X2tleTxfbGVuO19rZXkrKyl7YXJnc1tfa2V5XT1hcmd1bWVudHNbX2tleV07fXNpbmdsZXRvblJvdXRlci5yb3V0ZXI9bmV3IF9yb3V0ZXIyLmRlZmF1bHQoLi4uYXJncyk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goY2I9PmNiKCkpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcz1bXTtyZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Oy8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydHMuY3JlYXRlUm91dGVyPWNyZWF0ZVJvdXRlcjtmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKXt2YXIgX3JvdXRlcj1yb3V0ZXI7dmFyIGluc3RhbmNlPXt9O2Zvcih2YXIgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe2lmKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XT09PSdvYmplY3QnKXtpbnN0YW5jZVtwcm9wZXJ0eV09T2JqZWN0LmFzc2lnbih7fSxfcm91dGVyW3Byb3BlcnR5XSk7Ly8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbmNvbnRpbnVlO31pbnN0YW5jZVtwcm9wZXJ0eV09X3JvdXRlcltwcm9wZXJ0eV07fS8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbmluc3RhbmNlLmV2ZW50cz1fcm91dGVyMi5kZWZhdWx0LmV2ZW50cztjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PntpbnN0YW5jZVtmaWVsZF09ZnVuY3Rpb24oKXtyZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJndW1lbnRzKTt9O30pO3JldHVybiBpbnN0YW5jZTt9IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD13aXRoUm91dGVyO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyPXJlcXVpcmUoXCIuL3JvdXRlclwiKTtmdW5jdGlvbiB3aXRoUm91dGVyKENvbXBvc2VkQ29tcG9uZW50KXtmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wcyl7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsT2JqZWN0LmFzc2lnbih7cm91dGVyOigwLF9yb3V0ZXIudXNlUm91dGVyKSgpfSxwcm9wcykpO31XaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuO1dpdGhSb3V0ZXJXcmFwcGVyLm9yaWdHZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQub3JpZ0dldEluaXRpYWxQcm9wcztpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dmFyIG5hbWU9Q29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvc2VkQ29tcG9uZW50Lm5hbWV8fCdVbmtub3duJztXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZT1cIndpdGhSb3V0ZXIoXCIrbmFtZStcIilcIjt9cmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyO30iLCJcInVzZSBzdHJpY3RcIjtcbi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gbWl0dCgpIHtcbiAgICBjb25zdCBhbGwgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHJldHVybiB7XG4gICAgICAgIG9uKHR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIChhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKTtcbiAgICAgICAgfSxcbiAgICAgICAgb2ZmKHR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgICAgICAgICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlbWl0KHR5cGUsIC4uLmV2dHMpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIChhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlciguLi5ldnRzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgIH07XG59XG5leHBvcnRzLmRlZmF1bHQgPSBtaXR0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB1cmxfMSA9IHJlcXVpcmUoXCJ1cmxcIik7XG5jb25zdCBtaXR0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL21pdHRcIikpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNvbnN0IGlzX2R5bmFtaWNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL2lzLWR5bmFtaWNcIik7XG5jb25zdCByb3V0ZV9tYXRjaGVyXzEgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO1xuY29uc3Qgcm91dGVfcmVnZXhfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO1xuY29uc3QgYmFzZVBhdGggPSBwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIHx8ICcnO1xuZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCkge1xuICAgIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpICE9PSAwID8gYmFzZVBhdGggKyBwYXRoIDogcGF0aDtcbn1cbmV4cG9ydHMuYWRkQmFzZVBhdGggPSBhZGRCYXNlUGF0aDtcbmZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSA9PT0gMFxuICAgICAgICA/IHBhdGguc3Vic3RyKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG4gICAgICAgIDogcGF0aDtcbn1cbmV4cG9ydHMuZGVsQmFzZVBhdGggPSBkZWxCYXNlUGF0aDtcbmZ1bmN0aW9uIHRvUm91dGUocGF0aCkge1xuICAgIHJldHVybiBwYXRoLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nO1xufVxuY29uc3QgcHJlcGFyZVJvdXRlID0gKHBhdGgpID0+IHRvUm91dGUoIXBhdGggfHwgcGF0aCA9PT0gJy8nID8gJy9pbmRleCcgOiBwYXRoKTtcbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEocGF0aG5hbWUsIHF1ZXJ5LCBpc1NlcnZlclJlbmRlciwgY2IpIHtcbiAgICBsZXQgYXR0ZW1wdHMgPSBpc1NlcnZlclJlbmRlciA/IDMgOiAxO1xuICAgIGZ1bmN0aW9uIGdldFJlc3BvbnNlKCkge1xuICAgICAgICByZXR1cm4gZmV0Y2godXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgoXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIF9fTkVYVF9EQVRBX19cbiAgICAgICAgICAgIGAvX25leHQvZGF0YS8ke19fTkVYVF9EQVRBX18uYnVpbGRJZH0ke2RlbEJhc2VQYXRoKHBhdGhuYW1lKX0uanNvbmApLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgIH0pLCB7XG4gICAgICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgICAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgICAgIGlmICgtLWF0dGVtcHRzID4gMCAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0UmVzcG9uc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHJldHVybiBjYiA/IGNiKGRhdGEpIDogZGF0YTtcbiAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgICAgLy8gbG9vcC5cbiAgICAgICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgICAgICAgO1xuICAgICAgICAgICAgZXJyLmNvZGUgPSAnUEFHRV9MT0FEX0VSUk9SJztcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG59XG5jbGFzcyBSb3V0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHBhdGhuYW1lLCBxdWVyeSwgYXMsIHsgaW5pdGlhbFByb3BzLCBwYWdlTG9hZGVyLCBBcHAsIHdyYXBBcHAsIENvbXBvbmVudCwgZXJyLCBzdWJzY3JpcHRpb24sIGlzRmFsbGJhY2ssIH0pIHtcbiAgICAgICAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgICAgICAgdGhpcy5zZGMgPSB7fTtcbiAgICAgICAgdGhpcy5vblBvcFN0YXRlID0gKGUpID0+IHtcbiAgICAgICAgICAgIGlmICghZS5zdGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgICAgICAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgICAgICAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAgICAgICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgICAgICAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgICAgICAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLCB1dGlsc18xLmdldFVSTCgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAgICAgICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICAgICAgaWYgKGUuc3RhdGUgJiZcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3NyICYmXG4gICAgICAgICAgICAgICAgZS5zdGF0ZS5hcyA9PT0gdGhpcy5hc1BhdGggJiZcbiAgICAgICAgICAgICAgICB1cmxfMS5wYXJzZShlLnN0YXRlLnVybCkucGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgICAgICAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgICAgICAgICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKGUuc3RhdGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBlLnN0YXRlO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGFzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ2Bwb3BzdGF0ZWAgZXZlbnQgdHJpZ2dlcmVkIGJ1dCBgZXZlbnQuc3RhdGVgIGRpZCBub3QgaGF2ZSBgdXJsYCBvciBgYXNgIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9wb3BzdGF0ZS1zdGF0ZS1lbXB0eScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fZ2V0U3RhdGljRGF0YSA9IChhc1BhdGgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHVybF8xLnBhcnNlKGFzUGF0aCkucGF0aG5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbcGF0aG5hbWVdXG4gICAgICAgICAgICAgICAgPyBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbcGF0aG5hbWVdKVxuICAgICAgICAgICAgICAgIDogZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgbnVsbCwgdGhpcy5pc1NzciwgZGF0YSA9PiAodGhpcy5zZGNbcGF0aG5hbWVdID0gZGF0YSkpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9nZXRTZXJ2ZXJEYXRhID0gKGFzUGF0aCkgPT4ge1xuICAgICAgICAgICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB1cmxfMS5wYXJzZShhc1BhdGgsIHRydWUpO1xuICAgICAgICAgICAgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGF0aG5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIGZldGNoTmV4dERhdGEocGF0aG5hbWUsIHF1ZXJ5LCB0aGlzLmlzU3NyKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgICAgIHRoaXMucm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IHt9O1xuICAgICAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICAgICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0geyBDb21wb25lbnQ6IEFwcCB9O1xuICAgICAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgICAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgICAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHM7XG4gICAgICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXI7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgICAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgICAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICAgICAgICBpc19keW5hbWljXzEuaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXM7XG4gICAgICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aDtcbiAgICAgICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb247XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHA7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAgICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICAgICAgdGhpcy5pc1NzciA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2s7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgICAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICAgICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgICAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLCBhcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEBkZXByZWNhdGVkIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGV2ZW4gdGhvdWdoIGl0J3MgYSBwcml2YXRlIG1ldGhvZC5cbiAgICBzdGF0aWMgX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAgICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtcbiAgICAgICAgICAgIHJldHVybiByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGUocm91dGUsIG1vZCkge1xuICAgICAgICBjb25zdCBDb21wb25lbnQgPSBtb2QuZGVmYXVsdCB8fCBtb2Q7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHVwZGF0ZSB1bmF2YWlsYWJsZSByb3V0ZTogJHtyb3V0ZX1gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdEYXRhID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBkYXRhKSwgeyBDb21wb25lbnQsIF9fTl9TU0c6IG1vZC5fX05fU1NHLCBfX05fU1NQOiBtb2QuX19OX1NTUCB9KTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IG5ld0RhdGE7XG4gICAgICAgIC8vIHBhZ2VzL19hcHAuanMgdXBkYXRlZFxuICAgICAgICBpZiAocm91dGUgPT09ICcvX2FwcCcpIHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJvdXRlID09PSB0aGlzLnJvdXRlKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeShuZXdEYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZWxvYWQoKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAgICovXG4gICAgYmFjaygpIHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgICAqL1xuICAgIHB1c2godXJsLCBhcyA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAgICovXG4gICAgcmVwbGFjZSh1cmwsIGFzID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgY2hhbmdlKG1ldGhvZCwgX3VybCwgX2FzLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3NyID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICAgICAgICBpZiAodXRpbHNfMS5TVCkge1xuICAgICAgICAgICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAgICAgICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgICAgICAgICBsZXQgdXJsID0gdHlwZW9mIF91cmwgPT09ICdvYmplY3QnID8gdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbihfdXJsKSA6IF91cmw7XG4gICAgICAgICAgICBsZXQgYXMgPSB0eXBlb2YgX2FzID09PSAnb2JqZWN0JyA/IHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oX2FzKSA6IF9hcztcbiAgICAgICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKHVybCk7XG4gICAgICAgICAgICBhcyA9IGFkZEJhc2VQYXRoKGFzKTtcbiAgICAgICAgICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAgICAgICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseSBmb3IgdGhlIFNTUiBwYWdlLlxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgICAgICAgICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICAgICAgICAgICAgaWYgKF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCkge1xuICAgICAgICAgICAgICAgICAgICBhcyA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KGFzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZChhcyk7XG4gICAgICAgICAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgICAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuICAgICAgICAgICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgICAgICAgICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgICAgICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoYXMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goYXMpO1xuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnksIHByb3RvY29sIH0gPSB1cmxfMS5wYXJzZSh1cmwsIHRydWUpO1xuICAgICAgICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAgICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgICAgICAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgICAgICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgICAgICAgaWYgKCF0aGlzLnVybElzTmV3KGFzKSkge1xuICAgICAgICAgICAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zO1xuICAgICAgICAgICAgaWYgKGlzX2R5bmFtaWNfMS5pc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSB1cmxfMS5wYXJzZShhcyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9IHJvdXRlX3JlZ2V4XzEuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IHJvdXRlX21hdGNoZXJfMS5nZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKHBhcmFtID0+ICFxdWVyeVtwYXJhbV0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGAgZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IoYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcyk7XG4gICAgICAgICAgICAvLyBJZiBzaGFsbG93IGlzIHRydWUgYW5kIHRoZSByb3V0ZSBleGlzdHMgaW4gdGhlIHJvdXRlciBjYWNoZSB3ZSByZXVzZSB0aGUgcHJldmlvdXMgcmVzdWx0XG4gICAgICAgICAgICB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgc2hhbGxvdykudGhlbihyb3V0ZUluZm8gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IgJiYgZXJyb3IuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhcHBDb21wID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVJbmZvKTtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGFzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH0sIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCB1dGlsc18xLmdldFVSTCgpICE9PSBhcykge1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXSh7XG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICAgICAnJywgYXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgc2hhbGxvdyA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV07XG4gICAgICAgIC8vIElmIHRoZXJlIGlzIGEgc2hhbGxvdyByb3V0ZSB0cmFuc2l0aW9uIHBvc3NpYmxlXG4gICAgICAgIC8vIElmIHRoZSByb3V0ZSBpcyBhbHJlYWR5IHJlbmRlcmVkIG9uIHRoZSBzY3JlZW4uXG4gICAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhbmRsZUVycm9yID0gKGVyciwgbG9hZEVycm9yRmFpbCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIuY29kZSA9PT0gJ1BBR0VfTE9BRF9FUlJPUicgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgICAgICAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgICAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAgICAgICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcbiAgICAgICAgICAgICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICAgICAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgICAgICAgICAgICAgICAvLyBTbywgd2UgbmVlZCB0byBtYXJrIGl0IGFzIGEgY2FuY2VsbGVkIGVycm9yIGFuZCBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgICAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJylcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQgfSA9IHJlcztcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0geyBDb21wb25lbnQsIGVyciB9O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHByb3BzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZ2lwRXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBoYW5kbGVFcnJvcihlcnIsIHRydWUpKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChjYWNoZWRSb3V0ZUluZm8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihyZXMgPT4gcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgICAgfSksIHJlamVjdCk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocm91dGVJbmZvKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2V0RGF0YSgoKSA9PiBfX05fU1NHXG4gICAgICAgICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGFzKVxuICAgICAgICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoYXMpXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgICAgIH0pKS50aGVuKHByb3BzID0+IHtcbiAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChoYW5kbGVFcnJvcik7XG4gICAgfVxuICAgIHNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgZGF0YSkge1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcbiAgICAgICAgdGhpcy5ub3RpZnkoZGF0YSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVQb3BTdGF0ZShjYikge1xuICAgICAgICB0aGlzLl9icHMgPSBjYjtcbiAgICB9XG4gICAgb25seUFIYXNoQ2hhbmdlKGFzKSB7XG4gICAgICAgIGlmICghdGhpcy5hc1BhdGgpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKTtcbiAgICAgICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAgICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAgICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICAgICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2g7XG4gICAgfVxuICAgIHNjcm9sbFRvSGFzaChhcykge1xuICAgICAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgICAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgICAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7XG4gICAgICAgIGlmIChpZEVsKSB7XG4gICAgICAgICAgICBpZEVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgICAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtcbiAgICAgICAgaWYgKG5hbWVFbCkge1xuICAgICAgICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXJsSXNOZXcoYXNQYXRoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICAgKi9cbiAgICBwcmVmZXRjaCh1cmwsIGFzUGF0aCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lLCBwcm90b2NvbCB9ID0gdXJsXzEucGFyc2UodXJsKTtcbiAgICAgICAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByb3V0ZSA9IGRlbEJhc2VQYXRoKHRvUm91dGUocGF0aG5hbWUpKTtcbiAgICAgICAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKHVybCwgZGVsQmFzZVBhdGgoYXNQYXRoKSksXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgICAgICAgICAgXSkudGhlbigoKSA9PiByZXNvbHZlKCksIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZSkge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICByb3V0ZSA9IGRlbEJhc2VQYXRoKHJvdXRlKTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKTtcbiAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO1xuICAgICAgICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdDtcbiAgICB9XG4gICAgX2dldERhdGEoZm4pIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNsYyA9IGNhbmNlbDtcbiAgICAgICAgcmV0dXJuIGZuKCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO1xuICAgICAgICAgICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KSB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXTtcbiAgICAgICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwKTtcbiAgICAgICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlO1xuICAgICAgICByZXR1cm4gdXRpbHNfMS5sb2FkR2V0SW5pdGlhbFByb3BzKEFwcCwge1xuICAgICAgICAgICAgQXBwVHJlZSxcbiAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgICAgICAgIGN0eCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFib3J0Q29tcG9uZW50TG9hZChhcykge1xuICAgICAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgICAgICAgIGNvbnN0IGUgPSBuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpO1xuICAgICAgICAgICAgZS5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZSwgYXMpO1xuICAgICAgICAgICAgdGhpcy5jbGMoKTtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBub3RpZnkoZGF0YSkge1xuICAgICAgICB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50KTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBSb3V0ZXI7XG5Sb3V0ZXIuZXZlbnRzID0gbWl0dF8xLmRlZmF1bHQoKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvO1xuZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGUpIHtcbiAgICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKTtcbn1cbmV4cG9ydHMuaXNEeW5hbWljUm91dGUgPSBpc0R5bmFtaWNSb3V0ZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpIHtcbiAgICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXg7XG4gICAgcmV0dXJuIChwYXRobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbSkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChfKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKCdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJyk7XG4gICAgICAgICAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCc7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBwYXJhbXMgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV07XG4gICAgICAgICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc107XG4gICAgICAgICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgICAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoZW50cnkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICAgICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBkZWNvZGUobSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgIH07XG59XG5leHBvcnRzLmdldFJvdXRlTWF0Y2hlciA9IGdldFJvdXRlTWF0Y2hlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJyk7XG59XG5mdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZSkge1xuICAgIC8vIEVzY2FwZSBhbGwgY2hhcmFjdGVycyB0aGF0IGNvdWxkIGJlIGNvbnNpZGVyZWQgUmVnRXhcbiAgICBjb25zdCBlc2NhcGVkUm91dGUgPSBlc2NhcGVSZWdleChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpO1xuICAgIGNvbnN0IGdyb3VwcyA9IHt9O1xuICAgIGxldCBncm91cEluZGV4ID0gMTtcbiAgICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZSgvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLCAoXywgJDEpID0+IHtcbiAgICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKTtcbiAgICAgICAgZ3JvdXBzWyQxXG4gICAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgICAgLnJlcGxhY2UoL15cXC57M30vLCAnJylcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgICBdID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0OiBpc0NhdGNoQWxsIH07XG4gICAgICAgIHJldHVybiBpc0NhdGNoQWxsID8gJy8oLis/KScgOiAnLyhbXi9dKz8pJztcbiAgICB9KTtcbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGU7XG4gICAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gICAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZSgvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLCAoXywgJDEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSk7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSAkMVxuICAgICAgICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpO1xuICAgICAgICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGxcbiAgICAgICAgICAgICAgICA/IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT4uKz8pYFxuICAgICAgICAgICAgICAgIDogYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9PlteL10rPylgO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oeyByZTogbmV3IFJlZ0V4cCgnXicgKyBwYXJhbWV0ZXJpemVkUm91dGUgKyAnKD86Lyk/JCcsICdpJyksIGdyb3VwcyB9LCAobmFtZWRQYXJhbWV0ZXJpemVkUm91dGVcbiAgICAgICAgPyB7XG4gICAgICAgICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgICAgIH1cbiAgICAgICAgOiB7fSkpO1xufVxuZXhwb3J0cy5nZXRSb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdXJsXzEgPSByZXF1aXJlKFwidXJsXCIpO1xuLyoqXG4gKiBVdGlsc1xuICovXG5mdW5jdGlvbiBleGVjT25jZShmbikge1xuICAgIGxldCB1c2VkID0gZmFsc2U7XG4gICAgbGV0IHJlc3VsdDtcbiAgICByZXR1cm4gKCguLi5hcmdzKSA9PiB7XG4gICAgICAgIGlmICghdXNlZCkge1xuICAgICAgICAgICAgdXNlZCA9IHRydWU7XG4gICAgICAgICAgICByZXN1bHQgPSBmbiguLi5hcmdzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xufVxuZXhwb3J0cy5leGVjT25jZSA9IGV4ZWNPbmNlO1xuZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gICAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gO1xufVxuZXhwb3J0cy5nZXRMb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luO1xuZnVuY3Rpb24gZ2V0VVJMKCkge1xuICAgIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uO1xuICAgIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpO1xufVxuZXhwb3J0cy5nZXRVUkwgPSBnZXRVUkw7XG5mdW5jdGlvbiBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpIHtcbiAgICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICAgICAgPyBDb21wb25lbnRcbiAgICAgICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nO1xufVxuZXhwb3J0cy5nZXREaXNwbGF5TmFtZSA9IGdldERpc3BsYXlOYW1lO1xuZnVuY3Rpb24gaXNSZXNTZW50KHJlcykge1xuICAgIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50O1xufVxuZXhwb3J0cy5pc1Jlc1NlbnQgPSBpc1Jlc1NlbnQ7XG5hc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzKEFwcCwgY3R4KSB7XG4gICAgdmFyIF9hO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmICgoX2EgPSBBcHAucHJvdG90eXBlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKTtcbiAgICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XG4gICAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgICAgICByZXR1cm4gcHJvcHM7XG4gICAgfVxuICAgIGlmICghcHJvcHMpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7Z2V0RGlzcGxheU5hbWUoQXBwKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BzO1xufVxuZXhwb3J0cy5sb2FkR2V0SW5pdGlhbFByb3BzID0gbG9hZEdldEluaXRpYWxQcm9wcztcbmV4cG9ydHMudXJsT2JqZWN0S2V5cyA9IFtcbiAgICAnYXV0aCcsXG4gICAgJ2hhc2gnLFxuICAgICdob3N0JyxcbiAgICAnaG9zdG5hbWUnLFxuICAgICdocmVmJyxcbiAgICAncGF0aCcsXG4gICAgJ3BhdGhuYW1lJyxcbiAgICAncG9ydCcsXG4gICAgJ3Byb3RvY29sJyxcbiAgICAncXVlcnknLFxuICAgICdzZWFyY2gnLFxuICAgICdzbGFzaGVzJyxcbl07XG5mdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmwsIG9wdGlvbnMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV4cG9ydHMudXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdXJsXzEuZm9ybWF0KHVybCwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmZvcm1hdFdpdGhWYWxpZGF0aW9uID0gZm9ybWF0V2l0aFZhbGlkYXRpb247XG5leHBvcnRzLlNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJztcbmV4cG9ydHMuU1QgPSBleHBvcnRzLlNQICYmXG4gICAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJztcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImltcG9ydCBzdHlsZSBmcm9tICcuL3N0eWxlJ1xyXG5cclxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsXCI+XHJcbiAgICAgICAgICAgICAgICA8cD5Tb2NpYWw6PC9wPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPjxzcGFuPkZhY2Vib29rPC9zcGFuPjwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj48c3Bhbj5MaW5rZWRJbjwvc3Bhbj48L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+PHNwYW4+VGVsZWdyYW08L3NwYW4+PC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3B5XCI+JmNvcHk7MjAyMCB2aWtpbmFy4oSiPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e3N0eWxlfTwvc3R5bGU+XHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlclxyXG4iLCJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xyXG5cclxuY29uc3Qgc3R5bGUgPSBjc3NgXHJcbiAgZm9vdGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDsgXHJcbiAgICBib3R0b206IDRyZW07IFxyXG4gICAgaGVpZ2h0OiAxMHJlbTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIFxyXG4gICAgLmZvb3RlcntcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnNvY2lhbHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGNvbG9yOiBkYXJrYmx1ZTtcclxuICAgICAgICAgIDpiZWZvcmV7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcvJztcclxuICAgICAgICAgICAgbWFyZ2luOiAwIC41cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0eWxlXHJcbiIsImltcG9ydCBSZWFjdCwge3VzZVJlZiwgdXNlTGF5b3V0RWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtSZWFjdENvbXBvbmVudCBhcyBMb2dvfSBmcm9tICcuLi8uLi8uLi8uLi9zdGF0aWMvbGF5b3V0L2UtbG9nby5zdmcnXHJcbmltcG9ydCBzdHlsZSBmcm9tICcuL3N0eWxlJ1xyXG5cclxuY29uc3QgSGVhZGVyID0gKHByb3BzLCByZWYpID0+IHtcclxuICAgIGNvbnN0IGxvZ28gPSAnbG9nbydcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzEyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nZmxleCc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ28tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExvZ28gY2xhc3NOYW1lPXtsb2dvfSB3aWR0aD0nMTAwJyBoZWlnaHQ9JzEwMCcvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXJfX2NvbnRhaW5lci0taW5uZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFUk1JUkVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdsb2dvLWRlc2MnPnZpa2luYXLihKI8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntzdHlsZX08L3N0eWxlPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8xMlwiPjwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXHJcbiIsImltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnXHJcblxyXG5jb25zdCBzdHlsZSA9IGNzc2BcclxuICAgICAgICAgIC5oZWFkZXJ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIHRvcDogNHJlbTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMHJlbTtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZCA6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBjb2xvcjogZGFya2JsdWU7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGVhc2Utb3V0IC41cztcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgICAuZmxleHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAmX19jb250YWluZXJ7XHJcbiAgICAgICAgICAgICAgJi0taW5uZXJ7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgIGZsZXgtYmFzaXM6IGNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBtYXJnaW46IDFyZW07IFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgaDF7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5sb2dvLWNvbnRhaW5lcntcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdHlsZVxyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VSZWZ9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTWVzc2VuZ2VyQ3VzdG9tZXJDaGF0IGZyb20gJ3JlYWN0LW1lc3Nlbmdlci1jdXN0b21lci1jaGF0J1xyXG5cclxuaW1wb3J0IHN0eWxlIGZyb20gJy4uLy4uL3N0eWxlcy9zdHlsZXMnXHJcbmltcG9ydCB7TmF2aWdhdGlvbn0gZnJvbSAnLi4vTmF2aWdhdGlvbidcclxuaW1wb3J0IHtsYXlvdXR9IGZyb20gJy4vc3R5bGUnXHJcbmltcG9ydCB7UGFnZVRyYW5zaXRpb259IGZyb20gXCJuZXh0LXBhZ2UtdHJhbnNpdGlvbnNcIjtcclxuY29uc3QgVElNRU9VVCA9IDEwMDBcclxuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBNYWluIGZyb20gXCIuL0hlYWRlclwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJ1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHtjaGlsZHJlbn0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdMYXlvdXQnPlxyXG4gICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgIDxQYWdlVHJhbnNpdGlvblxyXG4gICAgICAgICAgICAgICAgdGltZW91dD17VElNRU9VVH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZXM9XCJwYWdlLXRyYW5zaXRpb25cIlxyXG4gICAgICAgICAgICAgICAgbG9hZGluZ0RlbGF5PXsxMDB9XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nVGltZW91dD17e1xyXG4gICAgICAgICAgICAgICAgICAgIGVudGVyOiBUSU1FT1VULFxyXG4gICAgICAgICAgICAgICAgICAgIGV4aXQ6IDAsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgbG9hZGluZ0NsYXNzTmFtZXM9XCJsb2FkaW5nLWluZGljYXRvclwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZSA9IHt7d2lkdGg6ICcxMDAlJ319XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9QYWdlVHJhbnNpdGlvbj5cclxuICAgICAgICAgICAgPEZvb3Rlci8+XHJcbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uLz5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57bGF5b3V0fTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntzdHlsZX08L3N0eWxlPlxyXG4gICAgICAgICAgICA8TWVzc2VuZ2VyQ3VzdG9tZXJDaGF0XHJcbiAgICAgICAgICAgICAgICBwYWdlSWQ9XCI2NDg5NTIyOTE4MzE4NTBcIlxyXG4gICAgICAgICAgICAgICAgYXBwSWQ9XCI4MjMyNDQ0MDgxOTc0NzJcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgIC5wYWdlLXRyYW5zaXRpb24tZW50ZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMjBweCwgMCkgc2NhbGUoLjkpO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAke1RJTUVPVVR9bXMsIHRyYW5zZm9ybSAke1RJTUVPVVR9bXMgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBhZ2UtdHJhbnNpdGlvbi1lbnRlci1hY3RpdmUge1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgc2NhbGUoMSk7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5ICR7VElNRU9VVH1tcywgdHJhbnNmb3JtICR7VElNRU9VVH1tcyAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucGFnZS10cmFuc2l0aW9uLWV4aXQge1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnBhZ2UtdHJhbnNpdGlvbi1lbnRlci1kb25le1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCVcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBhZ2UtdHJhbnNpdGlvbi1leGl0LWFjdGl2ZSB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAke1RJTUVPVVR9bXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sb2FkaW5nLWluZGljYXRvci1hcHBlYXIsXHJcbiAgICAgICAgLmxvYWRpbmctaW5kaWNhdG9yLWVudGVyIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sb2FkaW5nLWluZGljYXRvci1hcHBlYXItYWN0aXZlLFxyXG4gICAgICAgIC5sb2FkaW5nLWluZGljYXRvci1lbnRlci1hY3RpdmUge1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgJHtUSU1FT1VUfW1zO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dFxyXG4iLCJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xyXG5cclxuY29uc3Qgc2t5ID0gJ3NreSdcclxuXHJcbmV4cG9ydCBjb25zdCBsYXlvdXQgPSBjc3NgXHJcbiAgLkxheW91dHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uOiBlYXNlIC41cztcclxuICAgfVxyXG4gICBcclxuYFxyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHtzdHlsZX0gZnJvbSAnLi9zdHlsZSdcclxuaW1wb3J0IHtSZWFjdENvbXBvbmVudCBhcyBIb3Zlcn0gZnJvbSAnLi9ob3Zlci5zdmcnXHJcblxyXG5leHBvcnQgY29uc3QgTmF2aWdhdGlvbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlcyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJvdXRlOiAnLycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnSG9tZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcm91dGU6ICcvYWJvdXQnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0Fib3V0J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByb3V0ZTogJy9zZXJ2aWNlcycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnU2VydmljZXMnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJvdXRlOiAnLi9odWInLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0h1YidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcm91dGU6ICcvYWNhZGVteScsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnQWNhZGVteSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcm91dGU6ICcvY29udGFjdCcsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnQ29udGFjdHMnXHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG5cclxuICAgIGNvbnN0IFttZW51U3RhdGUsIHNldE1lbnVTdGF0ZV0gPSB1c2VTdGF0ZSgnaGlkZScpXHJcblxyXG4gICAgY29uc3Qgc2hvd01lbnVCZyA9ICgpID0+e1xyXG4gICAgICAgIHNldE1lbnVTdGF0ZSgnc2hvdycpXHJcbiAgICB9XHJcbiAgICBjb25zdCBoaWRlTWVudUJnID0gKCkgPT57XHJcbiAgICAgICAgc2V0TWVudVN0YXRlKCdoaWRlJylcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPSduYXYgbmF2LW1vYmlsZSc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbWVudS1iZyBtZW51LWJnLS0ke21lbnVTdGF0ZX1gfT5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17YG5hdl9faG92ZXIgbmF2X19ob3Zlci0tJHttZW51U3RhdGV9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhvdmVyIHdpZHRoPXsnMTAwJSd9Lz5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHtyb3V0ZXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBkYXRhLXJvdXRlPXtpdGVtLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZiA9IHtpdGVtLnJvdXRlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGRhdGEtcm91dGU9e2l0ZW0udGl0bGV9ICBvbk1vdXNlT3Zlcj17c2hvd01lbnVCZ30gb25Nb3VzZU91dD17aGlkZU1lbnVCZ30gY2xhc3NOYW1lPVwibGlua1wiICBrZXkgPSB7aW5kZXh9PntpdGVtLnRpdGxlfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57c3R5bGV9PC9zdHlsZT5cclxuICAgICAgICA8L25hdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbiIsImltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnXHJcblxyXG5jb25zdCBob3ZlciA9ICdob3ZlcidcclxuXHJcbmV4cG9ydCBjb25zdCBzdHlsZSA9IGNzc2BcclxuLm5hdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiBkYXJrYmx1ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCBkYXJrYmx1ZTtcclxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3LzE4KTtcclxuICAgIG1pbi13aWR0aDogY2FsYygxMDB2dy8xOCk7XHJcbiAgICB0cmFuc2l0aW9uOiBjdWJpYy1iZXppZXIoMC4yLCAwLjUsIDAuNzUsIDEuOCk7XHJcbn1cclxuXHJcbiAgICA6Z2xvYmFsKC5uYXZfX2hvdmVyKXtcclxuICAgIHdpZHRoOiA0NSU7XHJcbiAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjdWJpYy1iZXppZXIoMC4yLCAwLjUsIDAuNzUsIDEpO1xyXG4gICAgICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcclxuICAgICAgICAgICAgIEBrZXlmcmFtZXMgJHtob3Zlcn17XHJcbiAgICAgICAgICAgICAgZnJvbXsgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgICAgICAgICB9IHRvIHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9ICBcclxuICAgIFxyXG4gICAgOmdsb2JhbCgubmF2X19ob3Zlci0tc2hvdyl7XHJcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xyXG4gICAgICBhbmltYXRpb246IGhvdmVyIC41cyAuNXMgYm90aCBlYXNlLW91dDtcclxuICAgIH1cclxuXHJcbi5uYXYgdWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLm5hdiB1bCBsaXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjMTExO1xyXG4gICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgIHdyaXRpbmctbW9kZTogdmVydGljYWwtbHI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xyXG59XHJcblxyXG4ubWVudS1iZ3tcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIFxyXG4gICYtLXNob3d7XHJcbiAgb3BhY2l0eTogMTtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjVzIGN1YmljLWJlemllcigwLjYsMC40LDAuNSwxKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgfVxyXG4gICYtLWhpZGV7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjVzIGN1YmljLWJlemllcigwLjYsMC40LDAuNSwxKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICB9XHJcbn1cclxuXHJcbi5saW5rIHtcclxuICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICBwYWRkaW5nOiAycmVtIDQuNXJlbTtcclxuICAgICAgY29sb3I6IGRhcmtibHVlO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjVzIGN1YmljLWJlemllcigwLjYsIDAsIDAuNSwgMSk7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE0cmVtO1xyXG4gICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogYXR0cihkYXRhLXJvdXRlKTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6IGRhcmtibHVlO1xyXG4gICAgICAgIHdvcmQtYnJlYWs6IGtlZXAtYWxsO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICByaWdodDogNzAlO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBmb250LXNpemU6IDEwcmVtO1xyXG4gICAgICAgIHdyaXRpbmctbW9kZTogaG9yaXpvbnRhbC10YjtcclxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByZXZlcnQ7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKSByb3RhdGUoMTgwZGVnKTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIGVhc2Utb3V0IDFzO1xyXG4gICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwJSkgcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC43NXMgY3ViaWMtYmV6aWVyKDAuNiwwLjQsMC41LDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAmLm1lbnUtYmd7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCl7XHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG4vLyBpbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IHN0eWxlIGZyb20gJy4vc3R5bGUnXHJcblxyXG5leHBvcnQgY29uc3QgQWJvdXQgPSAoKSA9PiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYWJvdXQgdGV4dC1ibHVlLTkwMFwiPlxyXG4gICAgPEhlYWQ+XHJcblxyXG4gICAgPC9IZWFkPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQteHMgbXQtNic+QWJvdXQ8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+IHtzdHlsZX08L3N0eWxlPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICAgPC9MYXlvdXQ+XHJcbilcclxuIiwiaW1wb3J0IGNzcyBmcm9tIFwic3R5bGVkLWpzeC9jc3NcIjtcclxuXHJcbmNvbnN0IHN0eWxlID0gY3NzYFxyXG4gIC5hYm91dHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhaW5lcntcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kIDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGVhc2Utb3V0IC41cztcclxuICB9XHJcbmBcclxuZXhwb3J0IGRlZmF1bHQgc3R5bGVcclxuIiwiaW1wb3J0IHsgQWJvdXQgfSBmcm9tICcuLi9jb250YWluZXJzL0Fib3V0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWJvdXRcclxuIiwiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2NzcydcclxuY29uc3QgbG9nbyA9ICdsb2dvJ1xyXG4gICAgY29uc3Qgc3R5bGUgPSBjc3NcclxuICAgICAgICBgXHJcbiAgICAqLFxyXG4gICAgOmdsb2JhbChodG1sKSwgXHJcbiAgICA6Z2xvYmFsKGJvZHkpIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7IC8qIGlPUyBTYWZhcmkgKi9cclxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICBmb250LWZhbWlseTogJ2NhbmFkYS10eXBlLWdpYnNvbicsIE1vbm9zcGFjZWQsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1vdXQ7XHJcbiAgICB9XHJcblxyXG5cclxuKixcclxuKjo6YWZ0ZXIsXHJcbio6OmJlZm9yZSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogaW5oZXJpdDtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2Utb3V0O1xyXG59XHJcblxyXG46Z2xvYmFsKGh0bWwpIHtcclxuICBmb250LXNpemU6IDYyLjUlO1xyXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG59XHJcblxyXG46Z2xvYmFsKGJvZHkpIHtcclxuIGZvbnQtc2l6ZTogMS42cmVtO1xyXG59XHJcblxyXG4gICAgOmdsb2JhbCguY29sLTEpe1xyXG4gICAgICB3aWR0aDogY2FsYygxMDB2dy8xMik7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3LzEyKTtcclxuICAgIH1cclxuXHJcbiAgICA6Z2xvYmFsKGgxKXtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgICAgICA6Z2xvYmFsKC5sb2dvKXtcclxuICAgICAgICAgICAgZmlsbDogZGFya2JsdWU7XHJcbiAgICAgICAgICAgIHN0cm9rZTogZGFya2JsdWU7XHJcbiAgICAgICAgICAgIHN0cm9rZS13aWR0aDogNHB4O1xyXG4gICAgICAgICAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xyXG4gICAgICAgICAgICBhbmltYXRpb246IGxvZ28gMS41cyAxcyBiYWNrd2FyZHMgY3ViaWMtYmV6aWVyKDAuMywgMCwgMC43NSwgMSk7XHJcbiAgICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBAa2V5ZnJhbWVzICR7bG9nb30ge1xyXG4gICAgICAgIDAle1xyXG4gICAgICAgICAgICBmaWxsOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogNjAwO1xyXG4gICAgICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogNjAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA4MCV7XHJcbiAgICAgICAgICAgIGZpbGw6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBzdHJva2UtZGFzaGFycmF5OiA2MDA7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgMTAwJXtcclxuICAgICAgICAgICAgZmlsbDogZGFya2JsdWU7XHJcbiAgICAgICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xyXG4gICAgICAgICAgICBzdHJva2U6IGRhcmtibHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcImNhbmFkYS10eXBlLWdpYnNvblwiO1xyXG4gICAgICAgIHNyYzogdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvMGQ4ZjRjLzAwMDAwMDAwMDAwMDAwMDAzYjliMzg4Mi8yNy9sP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uNyZ2PTNcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzBkOGY0Yy8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4ODIvMjcvZD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjcmdj0zXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzBkOGY0Yy8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4ODIvMjcvYT9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjcmdj0zXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xyXG4gICAgICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIH1cclxuXHJcbiAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJjYW5hZGEtdHlwZS1naWJzb25cIjtcclxuICAgICAgICBzcmM6IHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzA2MThkYi8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4ODMvMjcvbD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9aTcmdj0zXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi8wNjE4ZGIvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODgzLzI3L2Q/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPWk3JnY9M1wiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi8wNjE4ZGIvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODgzLzI3L2E/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPWk3JnY9M1wiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcclxuICAgICAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB9XHJcblxyXG4gICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiY2FuYWRhLXR5cGUtZ2lic29uXCI7XHJcbiAgICAgICAgc3JjOiB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi9iNjdjOTEvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODdkLzI3L2w/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPWk0JnY9M1wiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvYjY3YzkxLzAwMDAwMDAwMDAwMDAwMDAzYjliMzg3ZC8yNy9kP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1pNCZ2PTNcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvYjY3YzkxLzAwMDAwMDAwMDAwMDAwMDAzYjliMzg3ZC8yNy9hP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1pNCZ2PTNcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XHJcbiAgICAgICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG5cclxuICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcImNhbmFkYS10eXBlLWdpYnNvblwiO1xyXG4gICAgICAgIHNyYzogdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvNzU1N2M4LzAwMDAwMDAwMDAwMDAwMDAzYjliMzg3OC8yNy9sP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uMiZ2PTNcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzc1NTdjOC8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4NzgvMjcvZD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjImdj0zXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzc1NTdjOC8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4NzgvMjcvYT9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjImdj0zXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xyXG4gICAgICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIH1cclxuXHJcbiAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJjYW5hZGEtdHlwZS1naWJzb25cIjtcclxuICAgICAgICBzcmM6IHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzdmNzgxNy8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4NzkvMjcvbD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9aTImdj0zXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi83Zjc4MTcvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODc5LzI3L2Q/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPWkyJnY9M1wiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi83Zjc4MTcvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODc5LzI3L2E/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPWkyJnY9M1wiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcclxuICAgICAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICB9XHJcblxyXG4gICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiY2FuYWRhLXR5cGUtZ2lic29uXCI7XHJcbiAgICAgICAgc3JjOiB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi9lZjIxMjkvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODdjLzI3L2w/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW40JnY9M1wiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvZWYyMTI5LzAwMDAwMDAwMDAwMDAwMDAzYjliMzg3Yy8yNy9kP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uNCZ2PTNcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvZWYyMTI5LzAwMDAwMDAwMDAwMDAwMDAzYjliMzg3Yy8yNy9hP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uNCZ2PTNcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XHJcbiAgICAgICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG5cclxuICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcImNhbmFkYS10eXBlLWdpYnNvblwiO1xyXG4gICAgICAgIHNyYzogdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvNDAzOTExLzAwMDAwMDAwMDAwMDAwMDAzYjliMzg4MC8yNy9sP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uNiZ2PTNcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzQwMzkxMS8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4ODAvMjcvZD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjYmdj0zXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzQwMzkxMS8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4ODAvMjcvYT9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjYmdj0zXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xyXG4gICAgICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuXHJcbiAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJjYW5hZGEtdHlwZS1naWJzb25cIjtcclxuICAgICAgICBzcmM6IHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzI4NTM3Yy8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4ODEvMjcvbD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9aTYmdj0zXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi8yODUzN2MvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODgxLzI3L2Q/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPWk2JnY9M1wiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi8yODUzN2MvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODgxLzI3L2E/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPWk2JnY9M1wiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcclxuICAgICAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcblxyXG4gICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiY2FuYWRhLXR5cGUtZ2lic29uXCI7XHJcbiAgICAgICAgc3JjOiB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi9lMTgyMTcvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODc2LzI3L2w/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW4xJnY9M1wiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvZTE4MjE3LzAwMDAwMDAwMDAwMDAwMDAzYjliMzg3Ni8yNy9kP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uMSZ2PTNcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvZTE4MjE3LzAwMDAwMDAwMDAwMDAwMDAzYjliMzg3Ni8yNy9hP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uMSZ2PTNcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XHJcbiAgICAgICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgfVxyXG5cclxuICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcImNhbmFkYS10eXBlLWdpYnNvblwiO1xyXG4gICAgICAgIHNyYzogdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvOTdhMDY4LzAwMDAwMDAwMDAwMDAwMDAzYjliMzg3Ny8yNy9sP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1pMSZ2PTNcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzk3YTA2OC8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4NzcvMjcvZD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9aTEmdj0zXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzk3YTA2OC8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4NzcvMjcvYT9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9aTEmdj0zXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xyXG4gICAgICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIH1cclxuXHJcbiAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJjYW5hZGEtdHlwZS1naWJzb25cIjtcclxuICAgICAgICBzcmM6IHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmL2FhMWQ2NC8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4N2EvMjcvbD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjMmdj0zXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi9hYTFkNjQvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODdhLzI3L2Q/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW4zJnY9M1wiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi9hYTFkNjQvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODdhLzI3L2E/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW4zJnY9M1wiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcclxuICAgICAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB9XHJcblxyXG4gICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiY2FuYWRhLXR5cGUtZ2lic29uXCI7XHJcbiAgICAgICAgc3JjOiB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi8zMmM5YmEvMDAwMDAwMDAwMDAwMDAwMDNiOWIzZjAyLzI3L2w/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPWkzJnY9M1wiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvMzJjOWJhLzAwMDAwMDAwMDAwMDAwMDAzYjliM2YwMi8yNy9kP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1pMyZ2PTNcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvMzJjOWJhLzAwMDAwMDAwMDAwMDAwMDAzYjliM2YwMi8yNy9hP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1pMyZ2PTNcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XHJcbiAgICAgICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgfVxyXG5cclxuICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcImNhbmFkYS10eXBlLWdpYnNvblwiO1xyXG4gICAgICAgIHNyYzogdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvYWVlMGFhLzAwMDAwMDAwMDAwMDAwMDAzYjliM2YwMy8yNy9sP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uNSZ2PTNcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmL2FlZTBhYS8wMDAwMDAwMDAwMDAwMDAwM2I5YjNmMDMvMjcvZD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjUmdj0zXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmL2FlZTBhYS8wMDAwMDAwMDAwMDAwMDAwM2I5YjNmMDMvMjcvYT9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjUmdj0zXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xyXG4gICAgICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuXHJcbiAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJjYW5hZGEtdHlwZS1naWJzb25cIjtcclxuICAgICAgICBzcmM6IHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzVmZWFkOC8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4N2YvMjcvbD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9aTUmdj0zXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi81ZmVhZDgvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODdmLzI3L2Q/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPWk1JnY9M1wiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi81ZmVhZDgvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODdmLzI3L2E/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPWk1JnY9M1wiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcclxuICAgICAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcblxyXG4gICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiY2FuYWRhLXR5cGUtZ2lic29uXCI7XHJcbiAgICAgICAgc3JjOiB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi9mZDhmOTcvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODg0LzI3L2w/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW45JnY9M1wiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvZmQ4Zjk3LzAwMDAwMDAwMDAwMDAwMDAzYjliMzg4NC8yNy9kP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uOSZ2PTNcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvZmQ4Zjk3LzAwMDAwMDAwMDAwMDAwMDAzYjliMzg4NC8yNy9hP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uOSZ2PTNcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XHJcbiAgICAgICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgfVxyXG5cclxuICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcImNhbmFkYS10eXBlLWdpYnNvblwiO1xyXG4gICAgICAgIHNyYzogdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvMzUxM2ExLzAwMDAwMDAwMDAwMDAwMDAzYjliMzg4NS8yNy9sP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1pOSZ2PTNcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzM1MTNhMS8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4ODUvMjcvZD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9aTkmdj0zXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzM1MTNhMS8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4ODUvMjcvYT9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9aTkmdj0zXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xyXG4gICAgICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIH1cclxuXHJcbiAgICAudGstY2FuYWRhLXR5cGUtZ2lic29uIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJjYW5hZGEtdHlwZS1naWJzb25cIiwgc2Fucy1zZXJpZjtcclxuICAgIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0eWxlXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcGFnZS10cmFuc2l0aW9uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzLWV4YWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW1lc3Nlbmdlci1jdXN0b21lci1jaGF0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc3R5bGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=