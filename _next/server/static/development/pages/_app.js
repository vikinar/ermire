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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


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

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/nprogress/nprogress.css":
/*!**********************************************!*\
  !*** ./node_modules/nprogress/nprogress.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



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

/***/ "./src/components/Loaders/index.js":
/*!*****************************************!*\
  !*** ./src/components/Loaders/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\GBM\\Desktop\\ermire\\src\\components\\Loaders\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Loader = () => __jsx("div", {
  className: "jsx-1358570369" + " " + "loader",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }
}, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1358570369",
  __self: undefined
}, ".loader.jsx-1358570369{border:8px solid #f3f3f3;border-top:8px solid #3498db;border-radius:50%;width:40px;height:40px;-webkit-animation:spin-jsx-1358570369 2s linear infinite;animation:spin-jsx-1358570369 2s linear infinite;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);position:fixed;}@-webkit-keyframes spin-jsx-1358570369{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes spin-jsx-1358570369{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcR0JNXFxEZXNrdG9wXFxlcm1pcmVcXHNyY1xcY29tcG9uZW50c1xcTG9hZGVyc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSW9CLEFBRTRCLEFBZUEsQUFFRSx5QkFmRSw2QkFFWCxrQkFDUCxTQVVlLEVBVGQsSUFXZ0IsUUFWTSwwR0FDMUIsUUFDQyxTQUN1Qix5R0FDakIsZUFBQyIsImZpbGUiOiJDOlxcVXNlcnNcXEdCTVxcRGVza3RvcFxcZXJtaXJlXFxzcmNcXGNvbXBvbmVudHNcXExvYWRlcnNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgTG9hZGVyID0gKCkgPT4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXJcIj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC5sb2FkZXIge1xyXG4gICAgICAgIGJvcmRlcjogOHB4IHNvbGlkICNmM2YzZjM7IC8qIExpZ2h0IGdyZXkgKi9cclxuICAgICAgICBib3JkZXItdG9wOiA4cHggc29saWQgIzM0OThkYjsgLyogQmx1ZSAqL1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICB9XHJcbiAgICAgIEBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgICAgICAgMCUge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkZXJcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\GBM\\\\Desktop\\\\ermire\\\\src\\\\components\\\\Loaders\\\\index.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Loader);

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

/***/ "./src/init/rootReducer.js":
/*!*********************************!*\
  !*** ./src/init/rootReducer.js ***!
  \*********************************/
/*! exports provided: rootReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootReducer", function() { return rootReducer; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);

const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({});

/***/ }),

/***/ "./src/init/store.js":
/*!***************************!*\
  !*** ./src/init/store.js ***!
  \***************************/
/*! exports provided: makeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeStore", function() { return makeStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _rootReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rootReducer */ "./src/init/rootReducer.js");



const makeStore = initialState => {
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_rootReducer__WEBPACK_IMPORTED_MODULE_2__["rootReducer"], Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a));
  return store;
};

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _init_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../init/store */ "./src/init/store.js");
/* harmony import */ var _styles_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/styles */ "./src/styles/styles.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! nprogress/nprogress.css */ "./node_modules/nprogress/nprogress.css");
/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/styles.scss */ "./src/styles/styles.scss");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_Loaders__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Loaders */ "./src/components/Loaders/index.js");
var _jsxFileName = "C:\\Users\\GBM\\Desktop\\ermire\\src\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









 //nprogress module

 //styles of nprogress

 //Binding events.

next_router__WEBPACK_IMPORTED_MODULE_8___default.a.events.on('routeChangeStart', () => nprogress__WEBPACK_IMPORTED_MODULE_9___default.a.start());
next_router__WEBPACK_IMPORTED_MODULE_8___default.a.events.on('routeChangeComplete', () => nprogress__WEBPACK_IMPORTED_MODULE_9___default.a.done());
next_router__WEBPACK_IMPORTED_MODULE_8___default.a.events.on('routeChangeError', () => nprogress__WEBPACK_IMPORTED_MODULE_9___default.a.done());

const TIMEOUT = 200;
/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4___default()(_init_store__WEBPACK_IMPORTED_MODULE_5__["makeStore"])(class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_3___default.a {
  static async getInitialProps({
    Component,
    ctx
  }) {
    return {
      pageProps: _objectSpread({}, Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
    };
  }

  render() {
    const {
      Component,
      pageProps,
      store
    } = this.props;
    return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
      store: store,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }
    }, __jsx(Component, _extends({}, pageProps, {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3052829698", [TIMEOUT, TIMEOUT, TIMEOUT, TIMEOUT]]]) + " " + (pageProps && pageProps.className != null && pageProps.className || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 21
      }
    })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: _styles_styles__WEBPACK_IMPORTED_MODULE_6__["default"].__hash,
      __self: this
    }, _styles_styles__WEBPACK_IMPORTED_MODULE_6__["default"]), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3052829698",
      dynamic: [TIMEOUT, TIMEOUT, TIMEOUT, TIMEOUT],
      __self: this
    }, `.page-transition-enter{opacity:0;-webkit-transform:translate3d(0,20px,0) scale(0.9);-ms-transform:translate3d(0,20px,0) scale(0.9);transform:translate3d(0,20px,0) scale(0.9);}.page-transition-enter-active{opacity:1;-webkit-transform:translate3d(0,0,0) scale(1);-ms-transform:translate3d(0,0,0) scale(1);transform:translate3d(0,0,0) scale(1);-webkit-transition:opacity ${TIMEOUT}ms,-webkit-transform ${TIMEOUT}ms;-webkit-transition:opacity ${TIMEOUT}ms,transform ${TIMEOUT}ms;transition:opacity ${TIMEOUT}ms,transform ${TIMEOUT}ms;}.page-transition-exit{opacity:1;}.page-transition-exit-active{opacity:0;-webkit-transition:opacity ${TIMEOUT}ms;transition:opacity ${TIMEOUT}ms;}.loading-indicator-appear,.loading-indicator-enter{opacity:0;}.loading-indicator-appear-active,.loading-indicator-enter-active{opacity:1;-webkit-transition:opacity ${TIMEOUT}ms;transition:opacity ${TIMEOUT}ms;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcR0JNXFxEZXNrdG9wXFxlcm1pcmVcXHNyY1xccGFnZXNcXF9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkN1QyxBQUVhLEFBSUEsQUFLQSxBQUdBLEFBS0EsQUFJQSxVQXBCbUMsQUFJTCxBQUk3QixBQUl1QyxBQUl2QyxBQUt1Qyw0R0FUQyxBQVNBLGtCQWhCeUMsZUFMOUMsMFJBSytDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcR0JNXFxEZXNrdG9wXFxlcm1pcmVcXHNyY1xccGFnZXNcXF9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcbmltcG9ydCBBcHAsIHtDb250YWluZXJ9IGZyb20gXCJuZXh0L2FwcFwiXHJcbmltcG9ydCB3aXRoUmVkdXggZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiXHJcbmltcG9ydCB7bWFrZVN0b3JlfSBmcm9tIFwiLi4vaW5pdC9zdG9yZVwiXHJcbmltcG9ydCBzdHlsZSBmcm9tICcuLi9zdHlsZXMvc3R5bGVzJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnOyAvL25wcm9ncmVzcyBtb2R1bGVcclxuaW1wb3J0ICducHJvZ3Jlc3MvbnByb2dyZXNzLmNzcyc7IC8vc3R5bGVzIG9mIG5wcm9ncmVzc1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9zdHlsZXMuc2NzcydcclxuXHJcblxyXG4vL0JpbmRpbmcgZXZlbnRzLlxyXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0JywgKCkgPT4gTlByb2dyZXNzLnN0YXJ0KCkpOyBSb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgKCkgPT4gTlByb2dyZXNzLmRvbmUoKSk7IFJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlRXJyb3InLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpKTtcclxuXHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Mb2FkZXJzJ1xyXG5cclxuY29uc3QgVElNRU9VVCA9IDIwMFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KG1ha2VTdG9yZSkoY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xyXG5cclxuXHJcblxyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7Q29tcG9uZW50LCBjdHh9KSB7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHBhZ2VQcm9wczoge1xyXG4gICAgICAgICAgICAgICAgLy8gQ2FsbCBwYWdlLWxldmVsIGdldEluaXRpYWxQcm9wc1xyXG4gICAgICAgICAgICAgICAgLi4uKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMgPyBhd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCkgOiB7fSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7Q29tcG9uZW50LCBwYWdlUHJvcHMsIHN0b3JlfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntzdHlsZX08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgLnBhZ2UtdHJhbnNpdGlvbi1lbnRlciB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyMHB4LCAwKSBzY2FsZSguOSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wYWdlLXRyYW5zaXRpb24tZW50ZXItYWN0aXZlIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApIHNjYWxlKDEpO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAke1RJTUVPVVR9bXMsIHRyYW5zZm9ybSAke1RJTUVPVVR9bXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wYWdlLXRyYW5zaXRpb24tZXhpdCB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucGFnZS10cmFuc2l0aW9uLWV4aXQtYWN0aXZlIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5ICR7VElNRU9VVH1tcztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxvYWRpbmctaW5kaWNhdG9yLWFwcGVhcixcclxuICAgICAgICAubG9hZGluZy1pbmRpY2F0b3ItZW50ZXIge1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxvYWRpbmctaW5kaWNhdG9yLWFwcGVhci1hY3RpdmUsXHJcbiAgICAgICAgLmxvYWRpbmctaW5kaWNhdG9yLWVudGVyLWFjdGl2ZSB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAke1RJTUVPVVR9bXM7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8L1Byb3ZpZGVyPlxyXG5cclxuXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn0pO1xyXG4iXX0= */
/*@ sourceURL=C:\\Users\\GBM\\Desktop\\ermire\\src\\pages\\_app.js */`));
  }

}));

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

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./src/pages/_app.js");


/***/ }),

/***/ "next-page-transitions":
/*!****************************************!*\
  !*** external "next-page-transitions" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-page-transitions");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nprogress");

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

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvYXBwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL21pdHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0Zvb3Rlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvRm9vdGVyL3N0eWxlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvSGVhZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dC9IZWFkZXIvc3R5bGUuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvc3R5bGUuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xvYWRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uL3N0eWxlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5pdC9yb290UmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5pdC9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXBhZ2UtdHJhbnNpdGlvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5wcm9ncmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzLWV4YWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LW1lc3Nlbmdlci1jdXN0b21lci1jaGF0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVybFwiIl0sIm5hbWVzIjpbIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJleHBvcnRzIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJfcmVhY3QiLCJfdXJsIiwiX3V0aWxzIiwiX3JvdXRlciIsIl9yb3V0ZXIyIiwiaXNMb2NhbCIsImhyZWYiLCJ1cmwiLCJwYXJzZSIsIm9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwiaG9zdCIsInByb3RvY29sIiwibWVtb2l6ZWRGb3JtYXRVcmwiLCJmb3JtYXRGdW5jIiwibGFzdEhyZWYiLCJsYXN0QXMiLCJsYXN0UmVzdWx0IiwiYXMiLCJyZXN1bHQiLCJmb3JtYXRVcmwiLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsIm9ic2VydmVyIiwibGlzdGVuZXJzIiwiTWFwIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwiZ2V0T2JzZXJ2ZXIiLCJ1bmRlZmluZWQiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiaGFzIiwidGFyZ2V0IiwiY2IiLCJnZXQiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwidW5vYnNlcnZlIiwiZGVsZXRlIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsImVsIiwib2JzZXJ2ZSIsInNldCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsIkxpbmsiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwicCIsImNsZWFuVXBMaXN0ZW5lcnMiLCJmb3JtYXRVcmxzIiwiYXNIcmVmIiwiYWRkQmFzZVBhdGgiLCJsaW5rQ2xpY2tlZCIsImUiLCJub2RlTmFtZSIsImN1cnJlbnRUYXJnZXQiLCJtZXRhS2V5IiwiY3RybEtleSIsInNoaWZ0S2V5IiwibmF0aXZlRXZlbnQiLCJ3aGljaCIsInBhdGhuYW1lIiwibG9jYXRpb24iLCJyZXNvbHZlIiwicHJldmVudERlZmF1bHQiLCJzY3JvbGwiLCJpbmRleE9mIiwicmVwbGFjZSIsInNoYWxsb3ciLCJ0aGVuIiwic3VjY2VzcyIsInNjcm9sbFRvIiwiZG9jdW1lbnQiLCJib2R5IiwiZm9jdXMiLCJwcmVmZXRjaCIsIndhcm4iLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImdldFBhdGhzIiwicGFyc2VkSHJlZiIsInBhcnNlZEFzIiwicmVzb2x2ZWRIcmVmIiwiaGFuZGxlUmVmIiwicmVmIiwidGFnTmFtZSIsImlzUHJlZmV0Y2hlZCIsImpvaW4iLCJvcHRpb25zIiwicGF0aHMiLCJjYXRjaCIsInJlbmRlciIsImNoaWxkcmVuIiwiY3JlYXRlRWxlbWVudCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY3VycmVudCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5Iiwib25DbGljayIsImRlZmF1bHRQcmV2ZW50ZWQiLCJwYXNzSHJlZiIsInR5cGUiLCJwcm9jZXNzIiwiY2xvbmVFbGVtZW50IiwiZXhlY09uY2UiLCJQcm9wVHlwZXMiLCJleGFjdCIsInByb3BUeXBlcyIsIm9uZU9mVHlwZSIsInN0cmluZyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJib29sIiwiZWxlbWVudCIsInByb3BOYW1lIiwidmFsdWUiLCJfZGVmYXVsdCIsInVzZVJvdXRlciIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsImNyZWF0ZVJvdXRlciIsIndpdGhSb3V0ZXIiLCJSb3V0ZXIiLCJOZXh0Um91dGVyIiwiX3JvdXRlckNvbnRleHQiLCJfd2l0aFJvdXRlciIsInNpbmdsZXRvblJvdXRlciIsInJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV2ZW50cyIsImZpZWxkIiwiZ2V0Um91dGVyIiwiYXJndW1lbnRzIiwiZXZlbnQiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJFcnJvciIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiX2xlbiIsImxlbmd0aCIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJpbnN0YW5jZSIsInByb3BlcnR5IiwiYXNzaWduIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJuYW1lIiwiZGlzcGxheU5hbWUiLCJtaXR0IiwiYWxsIiwiY3JlYXRlIiwiaGFuZGxlciIsInB1c2giLCJvZmYiLCJzcGxpY2UiLCJlbWl0IiwiZXZ0cyIsInNsaWNlIiwibWFwIiwiX19pbXBvcnREZWZhdWx0IiwibW9kIiwidXJsXzEiLCJtaXR0XzEiLCJ1dGlsc18xIiwiaXNfZHluYW1pY18xIiwicm91dGVfbWF0Y2hlcl8xIiwicm91dGVfcmVnZXhfMSIsImJhc2VQYXRoIiwicGF0aCIsImRlbEJhc2VQYXRoIiwic3Vic3RyIiwidG9Sb3V0ZSIsInByZXBhcmVSb3V0ZSIsImZldGNoTmV4dERhdGEiLCJxdWVyeSIsImlzU2VydmVyUmVuZGVyIiwiYXR0ZW1wdHMiLCJnZXRSZXNwb25zZSIsImZldGNoIiwiX19ORVhUX0RBVEFfXyIsImJ1aWxkSWQiLCJjcmVkZW50aWFscyIsInJlcyIsIm9rIiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJjb2RlIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwic2RjIiwib25Qb3BTdGF0ZSIsInN0YXRlIiwiY2hhbmdlU3RhdGUiLCJnZXRVUkwiLCJpc1NzciIsImFzUGF0aCIsIl9icHMiLCJfZ2V0U3RhdGljRGF0YSIsIlByb21pc2UiLCJfZ2V0U2VydmVyRGF0YSIsInJvdXRlIiwiY29tcG9uZW50cyIsIl9fTl9TU0ciLCJfX05fU1NQIiwiaXNEeW5hbWljUm91dGUiLCJhdXRvRXhwb3J0Iiwic3ViIiwiY2xjIiwiX3dyYXBBcHAiLCJfcmV3cml0ZVVybEZvck5leHRFeHBvcnQiLCJ1cGRhdGUiLCJuZXdEYXRhIiwibm90aWZ5IiwicmVsb2FkIiwiYmFjayIsImhpc3RvcnkiLCJjaGFuZ2UiLCJtZXRob2QiLCJfYXMiLCJyZWplY3QiLCJfaCIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwiYWJvcnRDb21wb25lbnRMb2FkIiwib25seUFIYXNoQ2hhbmdlIiwic2Nyb2xsVG9IYXNoIiwidXJsSXNOZXciLCJhc1BhdGhuYW1lIiwicm91dGVSZWdleCIsImdldFJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwiZ2V0Um91dGVNYXRjaGVyIiwibWlzc2luZ1BhcmFtcyIsImtleXMiLCJncm91cHMiLCJmaWx0ZXIiLCJwYXJhbSIsImdldFJvdXRlSW5mbyIsInJvdXRlSW5mbyIsImNhbmNlbGxlZCIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsImNhY2hlZFJvdXRlSW5mbyIsImhhbmRsZUVycm9yIiwibG9hZEVycm9yRmFpbCIsImZldGNoQ29tcG9uZW50IiwicGFnZSIsImdpcEVyciIsImlzVmFsaWRFbGVtZW50VHlwZSIsIl9nZXREYXRhIiwiYmVmb3JlUG9wU3RhdGUiLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic3BsaXQiLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwiaGFzaCIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJwcmVmZXRjaERhdGEiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImZuIiwiY3R4IiwiQXBwVHJlZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJURVNUX1JPVVRFIiwidGVzdCIsInJlIiwiZXhlYyIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsIl8iLCJwYXJhbXMiLCJzbHVnTmFtZSIsImciLCJtIiwicG9zIiwicmVwZWF0IiwiZXNjYXBlUmVnZXgiLCJzdHIiLCJub3JtYWxpemVkUm91dGUiLCJlc2NhcGVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwiJDEiLCJpc0NhdGNoQWxsIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJrZXkiLCJSZWdFeHAiLCJuYW1lZFJlZ2V4IiwidXNlZCIsImhvc3RuYW1lIiwicG9ydCIsImdldERpc3BsYXlOYW1lIiwiaXNSZXNTZW50IiwiZmluaXNoZWQiLCJoZWFkZXJzU2VudCIsIl9hIiwicHJvdG90eXBlIiwicGFnZVByb3BzIiwidXJsT2JqZWN0S2V5cyIsImZvcm1hdCIsIlNQIiwibWVhc3VyZSIsIkNvbnRhaW5lciIsImNyZWF0ZVVybCIsIkFwcEluaXRpYWxQcm9wcyIsImFwcEdldEluaXRpYWxQcm9wcyIsIl9yZWYiLCJjb21wb25lbnREaWRDYXRjaCIsIl9lcnJvckluZm8iLCJ3YXJuQ29udGFpbmVyIiwid2FyblVybCIsInB1c2hUbyIsInB1c2hSb3V0ZSIsInB1c2hVcmwiLCJyZXBsYWNlVG8iLCJyZXBsYWNlUm91dGUiLCJyZXBsYWNlVXJsIiwiRm9vdGVyIiwic3R5bGUiLCJMb2dvIiwiSGVhZGVyIiwibG9nbyIsIlRJTUVPVVQiLCJMYXlvdXQiLCJlbnRlciIsImV4aXQiLCJ3aWR0aCIsInNreSIsImxheW91dCIsIkxvYWRlciIsIkhvdmVyIiwiTmF2aWdhdGlvbiIsInJvdXRlcyIsInRpdGxlIiwibWVudVN0YXRlIiwic2V0TWVudVN0YXRlIiwidXNlU3RhdGUiLCJzaG93TWVudUJnIiwiaGlkZU1lbnVCZyIsIml0ZW0iLCJpbmRleCIsImhvdmVyIiwicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJtYWtlU3RvcmUiLCJpbml0aWFsU3RhdGUiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwidGh1bmsiLCJOUHJvZ3Jlc3MiLCJzdGFydCIsImRvbmUiLCJ3aXRoUmVkdXgiLCJNeUFwcCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLHdFOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7O0FDTkEsY0FBYyxtQkFBTyxDQUFDLDBFQUFtQjs7QUFFekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUM7Ozs7Ozs7Ozs7O0FDdERBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5Qjs7Ozs7Ozs7Ozs7QUNoQkEsaUJBQWlCLG1CQUFPLENBQUMsaUVBQW1COzs7Ozs7Ozs7Ozs7O0FDQS9COztBQUFBLElBQUlBLHNCQUFzQixHQUFDQyxtQkFBTyxDQUFDLG9IQUFELENBQWxDOztBQUFtRixJQUFJQyx1QkFBdUIsR0FBQ0QsbUJBQU8sQ0FBQyxzSEFBRCxDQUFuQzs7QUFBcUZFLE9BQU8sQ0FBQ0MsVUFBUixHQUFtQixJQUFuQjtBQUF3QkQsT0FBTyxDQUFDRSxPQUFSLEdBQWdCLEtBQUssQ0FBckI7O0FBQXVCLElBQUlDLE1BQU0sR0FBQ0osdUJBQXVCLENBQUNELG1CQUFPLENBQUMsb0JBQUQsQ0FBUixDQUFsQzs7QUFBcUQsSUFBSU0sSUFBSSxHQUFDTixtQkFBTyxDQUFDLGdCQUFELENBQWhCOztBQUF3QixJQUFJTyxNQUFNLEdBQUNQLG1CQUFPLENBQUMsMERBQUQsQ0FBbEI7O0FBQStDLElBQUlRLE9BQU8sR0FBQ1Qsc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsMkRBQUQsQ0FBUixDQUFsQzs7QUFBd0QsSUFBSVMsUUFBUSxHQUFDVCxtQkFBTyxDQUFDLG1HQUFELENBQXBCOztBQUF5RCxTQUFTVSxPQUFULENBQWlCQyxJQUFqQixFQUFzQjtBQUFDLE1BQUlDLEdBQUcsR0FBQyxDQUFDLEdBQUVOLElBQUksQ0FBQ08sS0FBUixFQUFlRixJQUFmLEVBQW9CLEtBQXBCLEVBQTBCLElBQTFCLENBQVI7QUFBd0MsTUFBSUcsTUFBTSxHQUFDLENBQUMsR0FBRVIsSUFBSSxDQUFDTyxLQUFSLEVBQWUsQ0FBQyxHQUFFTixNQUFNLENBQUNRLGlCQUFWLEdBQWYsRUFBOEMsS0FBOUMsRUFBb0QsSUFBcEQsQ0FBWDtBQUFxRSxTQUFNLENBQUNILEdBQUcsQ0FBQ0ksSUFBTCxJQUFXSixHQUFHLENBQUNLLFFBQUosS0FBZUgsTUFBTSxDQUFDRyxRQUF0QixJQUFnQ0wsR0FBRyxDQUFDSSxJQUFKLEtBQVdGLE1BQU0sQ0FBQ0UsSUFBbkU7QUFBeUU7O0FBQUEsU0FBU0UsaUJBQVQsQ0FBMkJDLFVBQTNCLEVBQXNDO0FBQUMsTUFBSUMsUUFBUSxHQUFDLElBQWI7QUFBa0IsTUFBSUMsTUFBTSxHQUFDLElBQVg7QUFBZ0IsTUFBSUMsVUFBVSxHQUFDLElBQWY7QUFBb0IsU0FBTSxDQUFDWCxJQUFELEVBQU1ZLEVBQU4sS0FBVztBQUFDLFFBQUdELFVBQVUsSUFBRVgsSUFBSSxLQUFHUyxRQUFuQixJQUE2QkcsRUFBRSxLQUFHRixNQUFyQyxFQUE0QztBQUFDLGFBQU9DLFVBQVA7QUFBbUI7O0FBQUEsUUFBSUUsTUFBTSxHQUFDTCxVQUFVLENBQUNSLElBQUQsRUFBTVksRUFBTixDQUFyQjtBQUErQkgsWUFBUSxHQUFDVCxJQUFUO0FBQWNVLFVBQU0sR0FBQ0UsRUFBUDtBQUFVRCxjQUFVLEdBQUNFLE1BQVg7QUFBa0IsV0FBT0EsTUFBUDtBQUFlLEdBQTFLO0FBQTRLOztBQUFBLFNBQVNDLFNBQVQsQ0FBbUJiLEdBQW5CLEVBQXVCO0FBQUMsU0FBT0EsR0FBRyxJQUFFLE9BQU9BLEdBQVAsS0FBYSxRQUFsQixHQUEyQixDQUFDLEdBQUVMLE1BQU0sQ0FBQ21CLG9CQUFWLEVBQWdDZCxHQUFoQyxDQUEzQixHQUFnRUEsR0FBdkU7QUFBNEU7O0FBQUEsSUFBSWUsUUFBSjtBQUFhLElBQUlDLFNBQVMsR0FBQyxJQUFJQyxHQUFKLEVBQWQ7QUFBd0IsSUFBSUMsb0JBQW9CLEdBQUMsUUFBNEJDLFNBQTVCLEdBQXdELElBQWpGO0FBQXNGLElBQUlDLFVBQVUsR0FBQyxFQUFmOztBQUFrQixTQUFTQyxXQUFULEdBQXNCO0FBQUM7QUFDL3FDLE1BQUdOLFFBQUgsRUFBWTtBQUFDLFdBQU9BLFFBQVA7QUFBaUIsR0FEZ3BDLENBQ2hwQzs7O0FBQzlCLE1BQUcsQ0FBQ0csb0JBQUosRUFBeUI7QUFBQyxXQUFPSSxTQUFQO0FBQWtCOztBQUFBLFNBQU9QLFFBQVEsR0FBQyxJQUFJRyxvQkFBSixDQUF5QkssT0FBTyxJQUFFO0FBQUNBLFdBQU8sQ0FBQ0MsT0FBUixDQUFnQkMsS0FBSyxJQUFFO0FBQUMsVUFBRyxDQUFDVCxTQUFTLENBQUNVLEdBQVYsQ0FBY0QsS0FBSyxDQUFDRSxNQUFwQixDQUFKLEVBQWdDO0FBQUM7QUFBUTs7QUFBQSxVQUFJQyxFQUFFLEdBQUNaLFNBQVMsQ0FBQ2EsR0FBVixDQUFjSixLQUFLLENBQUNFLE1BQXBCLENBQVA7O0FBQW1DLFVBQUdGLEtBQUssQ0FBQ0ssY0FBTixJQUFzQkwsS0FBSyxDQUFDTSxpQkFBTixHQUF3QixDQUFqRCxFQUFtRDtBQUFDaEIsZ0JBQVEsQ0FBQ2lCLFNBQVQsQ0FBbUJQLEtBQUssQ0FBQ0UsTUFBekI7QUFBaUNYLGlCQUFTLENBQUNpQixNQUFWLENBQWlCUixLQUFLLENBQUNFLE1BQXZCO0FBQStCQyxVQUFFO0FBQUk7QUFBQyxLQUEvTjtBQUFrTyxHQUFyUSxFQUFzUTtBQUFDTSxjQUFVLEVBQUM7QUFBWixHQUF0USxDQUFoQjtBQUE2Uzs7QUFBQSxJQUFJQyxxQkFBcUIsR0FBQyxDQUFDQyxFQUFELEVBQUlSLEVBQUosS0FBUztBQUFDLE1BQUliLFFBQVEsR0FBQ00sV0FBVyxFQUF4Qjs7QUFBMkIsTUFBRyxDQUFDTixRQUFKLEVBQWE7QUFBQyxXQUFNLE1BQUksQ0FBRSxDQUFaO0FBQWM7O0FBQUFBLFVBQVEsQ0FBQ3NCLE9BQVQsQ0FBaUJELEVBQWpCO0FBQXFCcEIsV0FBUyxDQUFDc0IsR0FBVixDQUFjRixFQUFkLEVBQWlCUixFQUFqQjtBQUFxQixTQUFNLE1BQUk7QUFBQyxRQUFHO0FBQUNiLGNBQVEsQ0FBQ2lCLFNBQVQsQ0FBbUJJLEVBQW5CO0FBQXdCLEtBQTVCLENBQTRCLE9BQU1HLEdBQU4sRUFBVTtBQUFDQyxhQUFPLENBQUNDLEtBQVIsQ0FBY0YsR0FBZDtBQUFvQjs7QUFBQXZCLGFBQVMsQ0FBQ2lCLE1BQVYsQ0FBaUJHLEVBQWpCO0FBQXNCLEdBQTVGO0FBQThGLENBQW5POztBQUFvTyxNQUFNTSxJQUFOLFNBQW1CakQsTUFBTSxDQUFDa0QsU0FBMUIsQ0FBbUM7QUFBQ0MsYUFBVyxDQUFDQyxLQUFELEVBQU87QUFBQyxVQUFNQSxLQUFOO0FBQWEsU0FBS0MsQ0FBTCxHQUFPLEtBQUssQ0FBWjs7QUFBYyxTQUFLQyxnQkFBTCxHQUFzQixNQUFJLENBQUUsQ0FBNUI7O0FBQTZCLFNBQUtDLFVBQUwsR0FBZ0IxQyxpQkFBaUIsQ0FBQyxDQUFDUCxJQUFELEVBQU1rRCxNQUFOLEtBQWU7QUFBQyxhQUFNO0FBQUNsRCxZQUFJLEVBQUMsQ0FBQyxHQUFFRixRQUFRLENBQUNxRCxXQUFaLEVBQXlCckMsU0FBUyxDQUFDZCxJQUFELENBQWxDLENBQU47QUFBZ0RZLFVBQUUsRUFBQ3NDLE1BQU0sR0FBQyxDQUFDLEdBQUVwRCxRQUFRLENBQUNxRCxXQUFaLEVBQXlCckMsU0FBUyxDQUFDb0MsTUFBRCxDQUFsQyxDQUFELEdBQTZDQTtBQUF0RyxPQUFOO0FBQXFILEtBQXRJLENBQWpDOztBQUF5SyxTQUFLRSxXQUFMLEdBQWlCQyxDQUFDLElBQUU7QUFBQyxVQUFHO0FBQUNDLGdCQUFEO0FBQVUxQjtBQUFWLFVBQWtCeUIsQ0FBQyxDQUFDRSxhQUF2Qjs7QUFBcUMsVUFBR0QsUUFBUSxLQUFHLEdBQVgsS0FBaUIxQixNQUFNLElBQUVBLE1BQU0sS0FBRyxPQUFqQixJQUEwQnlCLENBQUMsQ0FBQ0csT0FBNUIsSUFBcUNILENBQUMsQ0FBQ0ksT0FBdkMsSUFBZ0RKLENBQUMsQ0FBQ0ssUUFBbEQsSUFBNERMLENBQUMsQ0FBQ00sV0FBRixJQUFlTixDQUFDLENBQUNNLFdBQUYsQ0FBY0MsS0FBZCxLQUFzQixDQUFsSCxDQUFILEVBQXdIO0FBQUM7QUFDeGdDO0FBQVE7O0FBQUEsVUFBRztBQUFDNUQsWUFBRDtBQUFNWTtBQUFOLFVBQVUsS0FBS3FDLFVBQUwsQ0FBZ0IsS0FBS0gsS0FBTCxDQUFXOUMsSUFBM0IsRUFBZ0MsS0FBSzhDLEtBQUwsQ0FBV2xDLEVBQTNDLENBQWI7O0FBQTRELFVBQUcsQ0FBQ2IsT0FBTyxDQUFDQyxJQUFELENBQVgsRUFBa0I7QUFBQztBQUN2RjtBQUFROztBQUFBLFVBQUc7QUFBQzZEO0FBQUQsVUFBV3pDLE1BQU0sQ0FBQzBDLFFBQXJCO0FBQThCOUQsVUFBSSxHQUFDLENBQUMsR0FBRUwsSUFBSSxDQUFDb0UsT0FBUixFQUFpQkYsUUFBakIsRUFBMEI3RCxJQUExQixDQUFMO0FBQXFDWSxRQUFFLEdBQUNBLEVBQUUsR0FBQyxDQUFDLEdBQUVqQixJQUFJLENBQUNvRSxPQUFSLEVBQWlCRixRQUFqQixFQUEwQmpELEVBQTFCLENBQUQsR0FBK0JaLElBQXBDO0FBQXlDcUQsT0FBQyxDQUFDVyxjQUFGLEdBRnF2QixDQUVsdUI7O0FBQ3ZJLFVBQUc7QUFBQ0M7QUFBRCxVQUFTLEtBQUtuQixLQUFqQjs7QUFBdUIsVUFBR21CLE1BQU0sSUFBRSxJQUFYLEVBQWdCO0FBQUNBLGNBQU0sR0FBQ3JELEVBQUUsQ0FBQ3NELE9BQUgsQ0FBVyxHQUFYLElBQWdCLENBQXZCO0FBQTBCLE9BSHV5QixDQUd2eUI7OztBQUNsRXJFLGFBQU8sQ0FBQ0osT0FBUixDQUFnQixLQUFLcUQsS0FBTCxDQUFXcUIsT0FBWCxHQUFtQixTQUFuQixHQUE2QixNQUE3QyxFQUFxRG5FLElBQXJELEVBQTBEWSxFQUExRCxFQUE2RDtBQUFDd0QsZUFBTyxFQUFDLEtBQUt0QixLQUFMLENBQVdzQjtBQUFwQixPQUE3RCxFQUEyRkMsSUFBM0YsQ0FBZ0dDLE9BQU8sSUFBRTtBQUFDLFlBQUcsQ0FBQ0EsT0FBSixFQUFZOztBQUFPLFlBQUdMLE1BQUgsRUFBVTtBQUFDN0MsZ0JBQU0sQ0FBQ21ELFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBa0IsQ0FBbEI7QUFBcUJDLGtCQUFRLENBQUNDLElBQVQsQ0FBY0MsS0FBZDtBQUF1QjtBQUFDLE9BQXJMO0FBQXdMLEtBSjZwQjs7QUFJNXBCLGNBQXVDO0FBQUMsVUFBRzVCLEtBQUssQ0FBQzZCLFFBQVQsRUFBa0I7QUFBQ2xDLGVBQU8sQ0FBQ21DLElBQVIsQ0FBYSxpS0FBYjtBQUFpTDtBQUFDOztBQUFBLFNBQUs3QixDQUFMLEdBQU9ELEtBQUssQ0FBQzZCLFFBQU4sS0FBaUIsS0FBeEI7QUFBK0I7O0FBQUFFLHNCQUFvQixHQUFFO0FBQUMsU0FBSzdCLGdCQUFMO0FBQXlCOztBQUFBOEIsVUFBUSxHQUFFO0FBQUMsUUFBRztBQUFDakI7QUFBRCxRQUFXekMsTUFBTSxDQUFDMEMsUUFBckI7QUFBOEIsUUFBRztBQUFDOUQsVUFBSSxFQUFDK0UsVUFBTjtBQUFpQm5FLFFBQUUsRUFBQ29FO0FBQXBCLFFBQThCLEtBQUsvQixVQUFMLENBQWdCLEtBQUtILEtBQUwsQ0FBVzlDLElBQTNCLEVBQWdDLEtBQUs4QyxLQUFMLENBQVdsQyxFQUEzQyxDQUFqQztBQUFnRixRQUFJcUUsWUFBWSxHQUFDLENBQUMsR0FBRXRGLElBQUksQ0FBQ29FLE9BQVIsRUFBaUJGLFFBQWpCLEVBQTBCa0IsVUFBMUIsQ0FBakI7QUFBdUQsV0FBTSxDQUFDRSxZQUFELEVBQWNELFFBQVEsR0FBQyxDQUFDLEdBQUVyRixJQUFJLENBQUNvRSxPQUFSLEVBQWlCRixRQUFqQixFQUEwQm1CLFFBQTFCLENBQUQsR0FBcUNDLFlBQTNELENBQU47QUFBZ0Y7O0FBQUFDLFdBQVMsQ0FBQ0MsR0FBRCxFQUFLO0FBQUMsUUFBRyxLQUFLcEMsQ0FBTCxJQUFRNUIsb0JBQVIsSUFBOEJnRSxHQUE5QixJQUFtQ0EsR0FBRyxDQUFDQyxPQUExQyxFQUFrRDtBQUFDLFdBQUtwQyxnQkFBTDtBQUF3QixVQUFJcUMsWUFBWSxHQUFDaEUsVUFBVSxDQUFDLEtBQUt5RCxRQUFMLEdBQWdCUSxJQUFoQixFQUFxQjtBQUNoNEIsU0FEMjJCLENBQUQsQ0FBM0I7O0FBQ3owQixVQUFHLENBQUNELFlBQUosRUFBaUI7QUFBQyxhQUFLckMsZ0JBQUwsR0FBc0JaLHFCQUFxQixDQUFDK0MsR0FBRCxFQUFLLE1BQUk7QUFBQyxlQUFLUixRQUFMO0FBQWlCLFNBQTNCLENBQTNDO0FBQXlFO0FBQUM7QUFBQyxHQUw2ZixDQUs3ZjtBQUNuRzs7O0FBQ0FBLFVBQVEsQ0FBQ1ksT0FBRCxFQUFTO0FBQUMsUUFBRyxDQUFDLEtBQUt4QyxDQUFOLFFBQUgsRUFBd0MsT0FBekMsQ0FBZ0Q7O0FBQ2pFLFFBQUl5QyxLQUFLLEdBQUMsS0FBS1YsUUFBTCxFQUFWLENBRGlCLENBQ1M7QUFDMUI7QUFDQTs7QUFDQWpGLFdBQU8sQ0FBQ0osT0FBUixDQUFnQmtGLFFBQWhCLENBQXlCYSxLQUFLO0FBQUM7QUFBVSxLQUFYLENBQTlCLEVBQTRDQSxLQUFLO0FBQUM7QUFBWSxLQUFiLENBQWpELEVBQWlFRCxPQUFqRSxFQUEwRUUsS0FBMUUsQ0FBZ0ZqRCxHQUFHLElBQUU7QUFBQyxnQkFBdUM7QUFBQztBQUM5SCxjQUFNQSxHQUFOO0FBQVc7QUFBQyxLQURaOztBQUNjbkIsY0FBVSxDQUFDbUUsS0FBSyxDQUFDRixJQUFOLEVBQVc7QUFDcEMsT0FEeUIsQ0FBRCxDQUFWLEdBQ1IsSUFEUTtBQUNGOztBQUFBSSxRQUFNLEdBQUU7QUFBQyxRQUFHO0FBQUNDO0FBQUQsUUFBVyxLQUFLN0MsS0FBbkI7QUFBeUIsUUFBRztBQUFDOUMsVUFBRDtBQUFNWTtBQUFOLFFBQVUsS0FBS3FDLFVBQUwsQ0FBZ0IsS0FBS0gsS0FBTCxDQUFXOUMsSUFBM0IsRUFBZ0MsS0FBSzhDLEtBQUwsQ0FBV2xDLEVBQTNDLENBQWIsQ0FBMUIsQ0FBc0Y7O0FBQzFHLFFBQUcsT0FBTytFLFFBQVAsS0FBa0IsUUFBckIsRUFBOEI7QUFBQ0EsY0FBUSxHQUFDLGFBQWFqRyxNQUFNLENBQUNELE9BQVAsQ0FBZW1HLGFBQWYsQ0FBNkIsR0FBN0IsRUFBaUMsSUFBakMsRUFBc0NELFFBQXRDLENBQXRCO0FBQXVFLEtBRGxGLENBQ2tGOzs7QUFDdEcsUUFBSUUsS0FBSyxHQUFDbkcsTUFBTSxDQUFDb0csUUFBUCxDQUFnQkMsSUFBaEIsQ0FBcUJKLFFBQXJCLENBQVY7O0FBQXlDLFFBQUk3QyxLQUFLLEdBQUM7QUFBQ3FDLFNBQUcsRUFBQzlDLEVBQUUsSUFBRTtBQUFDLGFBQUs2QyxTQUFMLENBQWU3QyxFQUFmOztBQUFtQixZQUFHd0QsS0FBSyxJQUFFLE9BQU9BLEtBQVAsS0FBZSxRQUF0QixJQUFnQ0EsS0FBSyxDQUFDVixHQUF6QyxFQUE2QztBQUFDLGNBQUcsT0FBT1UsS0FBSyxDQUFDVixHQUFiLEtBQW1CLFVBQXRCLEVBQWlDVSxLQUFLLENBQUNWLEdBQU4sQ0FBVTlDLEVBQVYsRUFBakMsS0FBb0QsSUFBRyxPQUFPd0QsS0FBSyxDQUFDVixHQUFiLEtBQW1CLFFBQXRCLEVBQStCO0FBQUNVLGlCQUFLLENBQUNWLEdBQU4sQ0FBVWEsT0FBVixHQUFrQjNELEVBQWxCO0FBQXNCO0FBQUM7QUFBQyxPQUF2TDtBQUF3TDRELGtCQUFZLEVBQUM1QyxDQUFDLElBQUU7QUFBQyxZQUFHd0MsS0FBSyxDQUFDL0MsS0FBTixJQUFhLE9BQU8rQyxLQUFLLENBQUMvQyxLQUFOLENBQVltRCxZQUFuQixLQUFrQyxVQUFsRCxFQUE2RDtBQUFDSixlQUFLLENBQUMvQyxLQUFOLENBQVltRCxZQUFaLENBQXlCNUMsQ0FBekI7QUFBNkI7O0FBQUEsYUFBS3NCLFFBQUwsQ0FBYztBQUFDdUIsa0JBQVEsRUFBQztBQUFWLFNBQWQ7QUFBZ0MsT0FBcFU7QUFBcVVDLGFBQU8sRUFBQzlDLENBQUMsSUFBRTtBQUFDLFlBQUd3QyxLQUFLLENBQUMvQyxLQUFOLElBQWEsT0FBTytDLEtBQUssQ0FBQy9DLEtBQU4sQ0FBWXFELE9BQW5CLEtBQTZCLFVBQTdDLEVBQXdEO0FBQUNOLGVBQUssQ0FBQy9DLEtBQU4sQ0FBWXFELE9BQVosQ0FBb0I5QyxDQUFwQjtBQUF3Qjs7QUFBQSxZQUFHLENBQUNBLENBQUMsQ0FBQytDLGdCQUFOLEVBQXVCO0FBQUMsZUFBS2hELFdBQUwsQ0FBaUJDLENBQWpCO0FBQXFCO0FBQUM7QUFBaGQsS0FBVixDQUZyQixDQUVpZjtBQUNyZ0I7O0FBQ0EsUUFBRyxLQUFLUCxLQUFMLENBQVd1RCxRQUFYLElBQXFCUixLQUFLLENBQUNTLElBQU4sS0FBYSxHQUFiLElBQWtCLEVBQUUsVUFBU1QsS0FBSyxDQUFDL0MsS0FBakIsQ0FBMUMsRUFBa0U7QUFBQ0EsV0FBSyxDQUFDOUMsSUFBTixHQUFXWSxFQUFFLElBQUVaLElBQWY7QUFBcUIsS0FKcEUsQ0FJb0U7QUFDeEY7OztBQUNBLFFBQUd1RyxLQUFILEVBQTRDLGdDQUErTzs7QUFBQSxXQUFPN0csTUFBTSxDQUFDRCxPQUFQLENBQWUrRyxZQUFmLENBQTRCWCxLQUE1QixFQUFrQy9DLEtBQWxDLENBQVA7QUFBaUQ7O0FBbkJvUjs7QUFtQm5SLFVBQXdDO0FBQUMsTUFBSThCLElBQUksR0FBQyxDQUFDLEdBQUVoRixNQUFNLENBQUM2RyxRQUFWLEVBQW9CaEUsT0FBTyxDQUFDQyxLQUE1QixDQUFULENBQUQsQ0FBNkM7O0FBQ2xhLE1BQUlnRSxTQUFTLEdBQUNySCxtQkFBTyxDQUFDLDhCQUFELENBQXJCOztBQUFvQyxNQUFJc0gsS0FBSyxHQUFDdEgsbUJBQU8sQ0FBQywwQ0FBRCxDQUFqQixDQURpVixDQUMzUzs7O0FBQzFFc0QsTUFBSSxDQUFDaUUsU0FBTCxHQUFlRCxLQUFLLENBQUM7QUFBQzNHLFFBQUksRUFBQzBHLFNBQVMsQ0FBQ0csU0FBVixDQUFvQixDQUFDSCxTQUFTLENBQUNJLE1BQVgsRUFBa0JKLFNBQVMsQ0FBQ0ssTUFBNUIsQ0FBcEIsRUFBeURDLFVBQS9EO0FBQTBFcEcsTUFBRSxFQUFDOEYsU0FBUyxDQUFDRyxTQUFWLENBQW9CLENBQUNILFNBQVMsQ0FBQ0ksTUFBWCxFQUFrQkosU0FBUyxDQUFDSyxNQUE1QixDQUFwQixDQUE3RTtBQUFzSXBDLFlBQVEsRUFBQytCLFNBQVMsQ0FBQ08sSUFBeko7QUFBOEo5QyxXQUFPLEVBQUN1QyxTQUFTLENBQUNPLElBQWhMO0FBQXFMN0MsV0FBTyxFQUFDc0MsU0FBUyxDQUFDTyxJQUF2TTtBQUE0TVosWUFBUSxFQUFDSyxTQUFTLENBQUNPLElBQS9OO0FBQW9PaEQsVUFBTSxFQUFDeUMsU0FBUyxDQUFDTyxJQUFyUDtBQUEwUHRCLFlBQVEsRUFBQ2UsU0FBUyxDQUFDRyxTQUFWLENBQW9CLENBQUNILFNBQVMsQ0FBQ1EsT0FBWCxFQUFtQixDQUFDcEUsS0FBRCxFQUFPcUUsUUFBUCxLQUFrQjtBQUFDLFVBQUlDLEtBQUssR0FBQ3RFLEtBQUssQ0FBQ3FFLFFBQUQsQ0FBZjs7QUFBMEIsVUFBRyxPQUFPQyxLQUFQLEtBQWUsUUFBbEIsRUFBMkI7QUFBQ3hDLFlBQUksQ0FBQyxpSUFBRCxDQUFKO0FBQXlJOztBQUFBLGFBQU8sSUFBUDtBQUFhLEtBQWxQLENBQXBCLEVBQXlRb0M7QUFBNWdCLEdBQUQsQ0FBcEI7QUFBK2lCOztBQUFBLElBQUlLLFFBQVEsR0FBQzFFLElBQWI7QUFBa0JwRCxPQUFPLENBQUNFLE9BQVIsR0FBZ0I0SCxRQUFoQixDOzs7Ozs7Ozs7Ozs7QUN2QnBqQjs7QUFBQSxJQUFJL0gsdUJBQXVCLEdBQUNELG1CQUFPLENBQUMsc0hBQUQsQ0FBbkM7O0FBQXFGLElBQUlELHNCQUFzQixHQUFDQyxtQkFBTyxDQUFDLG9IQUFELENBQWxDOztBQUFtRkUsT0FBTyxDQUFDQyxVQUFSLEdBQW1CLElBQW5CO0FBQXdCRCxPQUFPLENBQUMrSCxTQUFSLEdBQWtCQSxTQUFsQjtBQUE0Qi9ILE9BQU8sQ0FBQ2dJLHdCQUFSLEdBQWlDQSx3QkFBakM7QUFBMERoSSxPQUFPLENBQUNpSSxZQUFSLEdBQXFCakksT0FBTyxDQUFDa0ksVUFBUixHQUFtQmxJLE9BQU8sQ0FBQ0UsT0FBUixHQUFnQixLQUFLLENBQTdEOztBQUErRCxJQUFJQyxNQUFNLEdBQUNOLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLG9CQUFELENBQVIsQ0FBakM7O0FBQW9ELElBQUlTLFFBQVEsR0FBQ1IsdUJBQXVCLENBQUNELG1CQUFPLENBQUMsbUdBQUQsQ0FBUixDQUFwQzs7QUFBa0ZFLE9BQU8sQ0FBQ21JLE1BQVIsR0FBZTVILFFBQVEsQ0FBQ0wsT0FBeEI7QUFBZ0NGLE9BQU8sQ0FBQ29JLFVBQVIsR0FBbUI3SCxRQUFRLENBQUM2SCxVQUE1Qjs7QUFBdUMsSUFBSUMsY0FBYyxHQUFDdkksbUJBQU8sQ0FBQyw0RUFBRCxDQUExQjs7QUFBZ0UsSUFBSXdJLFdBQVcsR0FBQ3pJLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLHFFQUFELENBQVIsQ0FBdEM7O0FBQWlFRSxPQUFPLENBQUNrSSxVQUFSLEdBQW1CSSxXQUFXLENBQUNwSSxPQUEvQjtBQUF1Qzs7QUFBbUIsSUFBSXFJLGVBQWUsR0FBQztBQUFDQyxRQUFNLEVBQUMsSUFBUjtBQUFhO0FBQzN3QkMsZ0JBQWMsRUFBQyxFQUQrdUI7O0FBQzV1QkMsT0FBSyxDQUFDcEcsRUFBRCxFQUFJO0FBQUMsUUFBRyxLQUFLa0csTUFBUixFQUFlLE9BQU9sRyxFQUFFLEVBQVQ7O0FBQVksZUFBK0IsRUFBK0I7QUFBQzs7QUFEd29CLENBQXBCLEMsQ0FDbG5COztBQUN4SCxJQUFJcUcsaUJBQWlCLEdBQUMsQ0FBQyxVQUFELEVBQVksT0FBWixFQUFvQixPQUFwQixFQUE0QixRQUE1QixFQUFxQyxZQUFyQyxFQUFrRCxZQUFsRCxFQUErRCxVQUEvRCxDQUF0QjtBQUFpRyxJQUFJQyxZQUFZLEdBQUMsQ0FBQyxrQkFBRCxFQUFvQixxQkFBcEIsRUFBMEMscUJBQTFDLEVBQWdFLGtCQUFoRSxFQUFtRixpQkFBbkYsRUFBcUcsb0JBQXJHLENBQWpCO0FBQTRJLElBQUlDLGdCQUFnQixHQUFDLENBQUMsTUFBRCxFQUFRLFNBQVIsRUFBa0IsUUFBbEIsRUFBMkIsTUFBM0IsRUFBa0MsVUFBbEMsRUFBNkMsZ0JBQTdDLENBQXJCLEMsQ0FBb0Y7O0FBQ2pVQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JSLGVBQXRCLEVBQXNDLFFBQXRDLEVBQStDO0FBQUNoRyxLQUFHLEdBQUU7QUFBQyxXQUFPaEMsUUFBUSxDQUFDTCxPQUFULENBQWlCOEksTUFBeEI7QUFBZ0M7O0FBQXZDLENBQS9DO0FBQXlGTCxpQkFBaUIsQ0FBQ3pHLE9BQWxCLENBQTBCK0csS0FBSyxJQUFFO0FBQUM7QUFDM0g7QUFDQTtBQUNBO0FBQ0FILFFBQU0sQ0FBQ0MsY0FBUCxDQUFzQlIsZUFBdEIsRUFBc0NVLEtBQXRDLEVBQTRDO0FBQUMxRyxPQUFHLEdBQUU7QUFBQyxVQUFJaUcsTUFBTSxHQUFDVSxTQUFTLEVBQXBCO0FBQXVCLGFBQU9WLE1BQU0sQ0FBQ1MsS0FBRCxDQUFiO0FBQXNCOztBQUFwRCxHQUE1QztBQUFvRyxDQUpYO0FBSWFKLGdCQUFnQixDQUFDM0csT0FBakIsQ0FBeUIrRyxLQUFLLElBQUU7QUFBQztBQUN2STs7QUFBQ1YsaUJBQWUsQ0FBQ1UsS0FBRCxDQUFmLEdBQXVCLFlBQVU7QUFBQyxRQUFJVCxNQUFNLEdBQUNVLFNBQVMsRUFBcEI7QUFBdUIsV0FBT1YsTUFBTSxDQUFDUyxLQUFELENBQU4sQ0FBYyxHQUFHRSxTQUFqQixDQUFQO0FBQW9DLEdBQTdGO0FBQStGLENBRE07QUFDSlAsWUFBWSxDQUFDMUcsT0FBYixDQUFxQmtILEtBQUssSUFBRTtBQUFDYixpQkFBZSxDQUFDRyxLQUFoQixDQUFzQixNQUFJO0FBQUNuSSxZQUFRLENBQUNMLE9BQVQsQ0FBaUI4SSxNQUFqQixDQUF3QkssRUFBeEIsQ0FBMkJELEtBQTNCLEVBQWlDLFlBQVU7QUFBQyxVQUFJRSxVQUFVLEdBQUMsT0FBS0YsS0FBSyxDQUFDRyxNQUFOLENBQWEsQ0FBYixFQUFnQkMsV0FBaEIsRUFBTCxHQUFtQ0osS0FBSyxDQUFDSyxTQUFOLENBQWdCLENBQWhCLENBQWxEO0FBQXFFLFVBQUlDLGdCQUFnQixHQUFDbkIsZUFBckI7O0FBQXFDLFVBQUdtQixnQkFBZ0IsQ0FBQ0osVUFBRCxDQUFuQixFQUFnQztBQUFDLFlBQUc7QUFBQ0ksMEJBQWdCLENBQUNKLFVBQUQsQ0FBaEIsQ0FBNkIsR0FBR0gsU0FBaEM7QUFBNEMsU0FBaEQsQ0FBZ0QsT0FBTWxHLEdBQU4sRUFBVTtBQUFDO0FBQzVZQyxpQkFBTyxDQUFDQyxLQUFSLENBQWMsMENBQXdDbUcsVUFBdEQsRUFEMlksQ0FDelU7O0FBQ2xFcEcsaUJBQU8sQ0FBQ0MsS0FBUixDQUFjRixHQUFHLENBQUMwRyxPQUFKLEdBQVksSUFBWixHQUFpQjFHLEdBQUcsQ0FBQzJHLEtBQW5DO0FBQTJDO0FBQUM7QUFBQyxLQUY2RztBQUUxRyxHQUYrRTtBQUU1RSxDQUYrQzs7QUFFN0MsU0FBU1YsU0FBVCxHQUFvQjtBQUFDLE1BQUcsQ0FBQ1gsZUFBZSxDQUFDQyxNQUFwQixFQUEyQjtBQUFDLFFBQUltQixPQUFPLEdBQUMsZ0NBQThCLHlFQUExQztBQUFvSCxVQUFNLElBQUlFLEtBQUosQ0FBVUYsT0FBVixDQUFOO0FBQTBCOztBQUFBLFNBQU9wQixlQUFlLENBQUNDLE1BQXZCO0FBQStCLEMsQ0FBQTs7O0FBQ25SLElBQUlWLFFBQVEsR0FBQ1MsZUFBYixDLENBQTZCOztBQUM3QnZJLE9BQU8sQ0FBQ0UsT0FBUixHQUFnQjRILFFBQWhCOztBQUF5QixTQUFTQyxTQUFULEdBQW9CO0FBQUMsU0FBTzVILE1BQU0sQ0FBQ0QsT0FBUCxDQUFlNEosVUFBZixDQUEwQnpCLGNBQWMsQ0FBQzBCLGFBQXpDLENBQVA7QUFBZ0UsQyxDQUFBO0FBQzlHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLElBQUk5QixZQUFZLEdBQUMsU0FBU0EsWUFBVCxHQUF1QjtBQUFDLE9BQUksSUFBSStCLElBQUksR0FBQ2IsU0FBUyxDQUFDYyxNQUFuQixFQUEwQkMsSUFBSSxHQUFDLElBQUlDLEtBQUosQ0FBVUgsSUFBVixDQUEvQixFQUErQ0ksSUFBSSxHQUFDLENBQXhELEVBQTBEQSxJQUFJLEdBQUNKLElBQS9ELEVBQW9FSSxJQUFJLEVBQXhFLEVBQTJFO0FBQUNGLFFBQUksQ0FBQ0UsSUFBRCxDQUFKLEdBQVdqQixTQUFTLENBQUNpQixJQUFELENBQXBCO0FBQTRCOztBQUFBN0IsaUJBQWUsQ0FBQ0MsTUFBaEIsR0FBdUIsSUFBSWpJLFFBQVEsQ0FBQ0wsT0FBYixDQUFxQixHQUFHZ0ssSUFBeEIsQ0FBdkI7QUFBcUQzQixpQkFBZSxDQUFDRSxjQUFoQixDQUErQnZHLE9BQS9CLENBQXVDSSxFQUFFLElBQUVBLEVBQUUsRUFBN0M7QUFBaURpRyxpQkFBZSxDQUFDRSxjQUFoQixHQUErQixFQUEvQjtBQUFrQyxTQUFPRixlQUFlLENBQUNDLE1BQXZCO0FBQStCLENBQXhULEMsQ0FBeVQ7OztBQUN6VHhJLE9BQU8sQ0FBQ2lJLFlBQVIsR0FBcUJBLFlBQXJCOztBQUFrQyxTQUFTRCx3QkFBVCxDQUFrQ1EsTUFBbEMsRUFBeUM7QUFBQyxNQUFJbEksT0FBTyxHQUFDa0ksTUFBWjtBQUFtQixNQUFJNkIsUUFBUSxHQUFDLEVBQWI7O0FBQWdCLE9BQUksSUFBSUMsUUFBUixJQUFvQjNCLGlCQUFwQixFQUFzQztBQUFDLFFBQUcsT0FBT3JJLE9BQU8sQ0FBQ2dLLFFBQUQsQ0FBZCxLQUEyQixRQUE5QixFQUF1QztBQUFDRCxjQUFRLENBQUNDLFFBQUQsQ0FBUixHQUFtQnhCLE1BQU0sQ0FBQ3lCLE1BQVAsQ0FBYyxFQUFkLEVBQWlCakssT0FBTyxDQUFDZ0ssUUFBRCxDQUF4QixDQUFuQixDQUFELENBQXdEOztBQUNyUDtBQUFVOztBQUFBRCxZQUFRLENBQUNDLFFBQUQsQ0FBUixHQUFtQmhLLE9BQU8sQ0FBQ2dLLFFBQUQsQ0FBMUI7QUFBc0MsR0FEMkIsQ0FDM0I7OztBQUNoREQsVUFBUSxDQUFDckIsTUFBVCxHQUFnQnpJLFFBQVEsQ0FBQ0wsT0FBVCxDQUFpQjhJLE1BQWpDO0FBQXdDSCxrQkFBZ0IsQ0FBQzNHLE9BQWpCLENBQXlCK0csS0FBSyxJQUFFO0FBQUNvQixZQUFRLENBQUNwQixLQUFELENBQVIsR0FBZ0IsWUFBVTtBQUFDLGFBQU8zSSxPQUFPLENBQUMySSxLQUFELENBQVAsQ0FBZSxHQUFHRSxTQUFsQixDQUFQO0FBQXFDLEtBQWhFO0FBQWtFLEdBQW5HO0FBQXFHLFNBQU9rQixRQUFQO0FBQWlCLEM7Ozs7Ozs7Ozs7OztBQ3JCako7O0FBQUEsSUFBSXhLLHNCQUFzQixHQUFDQyxtQkFBTyxDQUFDLG9IQUFELENBQWxDOztBQUFtRkUsT0FBTyxDQUFDQyxVQUFSLEdBQW1CLElBQW5CO0FBQXdCRCxPQUFPLENBQUNFLE9BQVIsR0FBZ0JnSSxVQUFoQjs7QUFBMkIsSUFBSS9ILE1BQU0sR0FBQ04sc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsb0JBQUQsQ0FBUixDQUFqQzs7QUFBb0QsSUFBSVEsT0FBTyxHQUFDUixtQkFBTyxDQUFDLDJEQUFELENBQW5COztBQUFnQyxTQUFTb0ksVUFBVCxDQUFvQnNDLGlCQUFwQixFQUFzQztBQUFDLFdBQVNDLGlCQUFULENBQTJCbEgsS0FBM0IsRUFBaUM7QUFBQyxXQUFNLGFBQWFwRCxNQUFNLENBQUNELE9BQVAsQ0FBZW1HLGFBQWYsQ0FBNkJtRSxpQkFBN0IsRUFBK0MxQixNQUFNLENBQUN5QixNQUFQLENBQWM7QUFBQy9CLFlBQU0sRUFBQyxDQUFDLEdBQUVsSSxPQUFPLENBQUN5SCxTQUFYO0FBQVIsS0FBZCxFQUErQ3hFLEtBQS9DLENBQS9DLENBQW5CO0FBQTBIOztBQUFBa0gsbUJBQWlCLENBQUNDLGVBQWxCLEdBQWtDRixpQkFBaUIsQ0FBQ0UsZUFBcEQsQ0FBbUU7QUFBbkU7QUFDemFELG1CQUFpQixDQUFDRSxtQkFBbEIsR0FBc0NILGlCQUFpQixDQUFDRyxtQkFBeEQ7O0FBQTRFLFlBQXVDO0FBQUMsUUFBSUMsSUFBSSxHQUFDSixpQkFBaUIsQ0FBQ0ssV0FBbEIsSUFBK0JMLGlCQUFpQixDQUFDSSxJQUFqRCxJQUF1RCxTQUFoRTtBQUEwRUgscUJBQWlCLENBQUNJLFdBQWxCLEdBQThCLGdCQUFjRCxJQUFkLEdBQW1CLEdBQWpEO0FBQXNEOztBQUFBLFNBQU9ILGlCQUFQO0FBQTBCLEM7Ozs7Ozs7Ozs7OztBQ0RsUTtBQUNiOzs7Ozs7Ozs7Ozs7QUFXQTNCLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQi9JLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0FBQUU2SCxPQUFLLEVBQUU7QUFBVCxDQUE3Qzs7QUFDQSxTQUFTaUQsSUFBVCxHQUFnQjtBQUNaLFFBQU1DLEdBQUcsR0FBR2pDLE1BQU0sQ0FBQ2tDLE1BQVAsQ0FBYyxJQUFkLENBQVo7QUFDQSxTQUFPO0FBQ0gzQixNQUFFLENBQUN0QyxJQUFELEVBQU9rRSxPQUFQLEVBQWdCO0FBQ2Q7QUFDQSxPQUFDRixHQUFHLENBQUNoRSxJQUFELENBQUgsS0FBY2dFLEdBQUcsQ0FBQ2hFLElBQUQsQ0FBSCxHQUFZLEVBQTFCLENBQUQsRUFBZ0NtRSxJQUFoQyxDQUFxQ0QsT0FBckM7QUFDSCxLQUpFOztBQUtIRSxPQUFHLENBQUNwRSxJQUFELEVBQU9rRSxPQUFQLEVBQWdCO0FBQ2YsVUFBSUYsR0FBRyxDQUFDaEUsSUFBRCxDQUFQLEVBQWU7QUFDWDtBQUNBZ0UsV0FBRyxDQUFDaEUsSUFBRCxDQUFILENBQVVxRSxNQUFWLENBQWlCTCxHQUFHLENBQUNoRSxJQUFELENBQUgsQ0FBVXBDLE9BQVYsQ0FBa0JzRyxPQUFsQixNQUErQixDQUFoRCxFQUFtRCxDQUFuRDtBQUNIO0FBQ0osS0FWRTs7QUFXSEksUUFBSSxDQUFDdEUsSUFBRCxFQUFPLEdBQUd1RSxJQUFWLEVBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxPQUFDUCxHQUFHLENBQUNoRSxJQUFELENBQUgsSUFBYSxFQUFkLEVBQWtCd0UsS0FBbEIsR0FBMEJDLEdBQTFCLENBQStCUCxPQUFELElBQWE7QUFDdkNBLGVBQU8sQ0FBQyxHQUFHSyxJQUFKLENBQVA7QUFDSCxPQUZEO0FBR0g7O0FBakJFLEdBQVA7QUFtQkg7O0FBQ0R0TCxPQUFPLENBQUNFLE9BQVIsR0FBa0I0SyxJQUFsQixDOzs7Ozs7Ozs7Ozs7QUNuQ2E7O0FBQ2IsSUFBSVcsZUFBZSxHQUFJLFFBQVEsS0FBS0EsZUFBZCxJQUFrQyxVQUFVQyxHQUFWLEVBQWU7QUFDbkUsU0FBUUEsR0FBRyxJQUFJQSxHQUFHLENBQUN6TCxVQUFaLEdBQTBCeUwsR0FBMUIsR0FBZ0M7QUFBRSxlQUFXQTtBQUFiLEdBQXZDO0FBQ0gsQ0FGRDs7QUFHQTVDLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQi9JLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0FBQUU2SCxPQUFLLEVBQUU7QUFBVCxDQUE3Qzs7QUFDQSxNQUFNOEQsS0FBSyxHQUFHN0wsbUJBQU8sQ0FBQyxnQkFBRCxDQUFyQjs7QUFDQSxNQUFNOEwsTUFBTSxHQUFHSCxlQUFlLENBQUMzTCxtQkFBTyxDQUFDLGlFQUFELENBQVIsQ0FBOUI7O0FBQ0EsTUFBTStMLE9BQU8sR0FBRy9MLG1CQUFPLENBQUMsbUVBQUQsQ0FBdkI7O0FBQ0EsTUFBTWdNLFlBQVksR0FBR2hNLG1CQUFPLENBQUMsK0ZBQUQsQ0FBNUI7O0FBQ0EsTUFBTWlNLGVBQWUsR0FBR2pNLG1CQUFPLENBQUMscUdBQUQsQ0FBL0I7O0FBQ0EsTUFBTWtNLGFBQWEsR0FBR2xNLG1CQUFPLENBQUMsaUdBQUQsQ0FBN0I7O0FBQ0EsTUFBTW1NLFFBQVEsR0FBR2pGLE1BQUEsSUFBc0MsRUFBdkQ7O0FBQ0EsU0FBU3BELFdBQVQsQ0FBcUJzSSxJQUFyQixFQUEyQjtBQUN2QixTQUFPQSxJQUFJLENBQUN2SCxPQUFMLENBQWFzSCxRQUFiLE1BQTJCLENBQTNCLEdBQStCQSxRQUFRLEdBQUdDLElBQTFDLEdBQWlEQSxJQUF4RDtBQUNIOztBQUNEbE0sT0FBTyxDQUFDNEQsV0FBUixHQUFzQkEsV0FBdEI7O0FBQ0EsU0FBU3VJLFdBQVQsQ0FBcUJELElBQXJCLEVBQTJCO0FBQ3ZCLFNBQU9BLElBQUksQ0FBQ3ZILE9BQUwsQ0FBYXNILFFBQWIsTUFBMkIsQ0FBM0IsR0FDREMsSUFBSSxDQUFDRSxNQUFMLENBQVlILFFBQVEsQ0FBQ2hDLE1BQXJCLEtBQWdDLEdBRC9CLEdBRURpQyxJQUZOO0FBR0g7O0FBQ0RsTSxPQUFPLENBQUNtTSxXQUFSLEdBQXNCQSxXQUF0Qjs7QUFDQSxTQUFTRSxPQUFULENBQWlCSCxJQUFqQixFQUF1QjtBQUNuQixTQUFPQSxJQUFJLENBQUN0SCxPQUFMLENBQWEsS0FBYixFQUFvQixFQUFwQixLQUEyQixHQUFsQztBQUNIOztBQUNELE1BQU0wSCxZQUFZLEdBQUlKLElBQUQsSUFBVUcsT0FBTyxDQUFDLENBQUNILElBQUQsSUFBU0EsSUFBSSxLQUFLLEdBQWxCLEdBQXdCLFFBQXhCLEdBQW1DQSxJQUFwQyxDQUF0Qzs7QUFDQSxTQUFTSyxhQUFULENBQXVCakksUUFBdkIsRUFBaUNrSSxLQUFqQyxFQUF3Q0MsY0FBeEMsRUFBd0RuSyxFQUF4RCxFQUE0RDtBQUN4RCxNQUFJb0ssUUFBUSxHQUFHRCxjQUFjLEdBQUcsQ0FBSCxHQUFPLENBQXBDOztBQUNBLFdBQVNFLFdBQVQsR0FBdUI7QUFDbkIsV0FBT0MsS0FBSyxDQUFDZixPQUFPLENBQUNySyxvQkFBUixDQUE2QjtBQUN0QzhDLGNBQVEsRUFBRVYsV0FBVyxFQUNyQjtBQUNDLHFCQUFjaUosYUFBYSxDQUFDQyxPQUFRLEdBQUVYLFdBQVcsQ0FBQzdILFFBQUQsQ0FBVyxPQUZ4QyxDQURpQjtBQUl0Q2tJO0FBSnNDLEtBQTdCLENBQUQsRUFLUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQU8saUJBQVcsRUFBRTtBQVpiLEtBTFEsQ0FBTCxDQWtCSmpJLElBbEJJLENBa0JDa0ksR0FBRyxJQUFJO0FBQ1gsVUFBSSxDQUFDQSxHQUFHLENBQUNDLEVBQVQsRUFBYTtBQUNULFlBQUksRUFBRVAsUUFBRixHQUFhLENBQWIsSUFBa0JNLEdBQUcsQ0FBQ0UsTUFBSixJQUFjLEdBQXBDLEVBQXlDO0FBQ3JDLGlCQUFPUCxXQUFXLEVBQWxCO0FBQ0g7O0FBQ0QsY0FBTSxJQUFJOUMsS0FBSixDQUFXLDZCQUFYLENBQU47QUFDSDs7QUFDRCxhQUFPbUQsR0FBRyxDQUFDRyxJQUFKLEVBQVA7QUFDSCxLQTFCTSxDQUFQO0FBMkJIOztBQUNELFNBQU9SLFdBQVcsR0FDYjdILElBREUsQ0FDR3NJLElBQUksSUFBSTtBQUNkLFdBQU85SyxFQUFFLEdBQUdBLEVBQUUsQ0FBQzhLLElBQUQsQ0FBTCxHQUFjQSxJQUF2QjtBQUNILEdBSE0sRUFJRmxILEtBSkUsQ0FJS2pELEdBQUQsSUFBUztBQUNoQjtBQUNBO0FBQ0E7QUFDQSxRQUFJLENBQUN3SixjQUFMLEVBQXFCO0FBQ2pCO0FBQ0F4SixTQUFHLENBQUNvSyxJQUFKLEdBQVcsaUJBQVg7QUFDSDs7QUFDRCxVQUFNcEssR0FBTjtBQUNILEdBYk0sQ0FBUDtBQWNIOztBQUNELE1BQU1rRixNQUFOLENBQWE7QUFDVDdFLGFBQVcsQ0FBQ2dCLFFBQUQsRUFBV2tJLEtBQVgsRUFBa0JuTCxFQUFsQixFQUFzQjtBQUFFaU0sZ0JBQUY7QUFBZ0JDLGNBQWhCO0FBQTRCQyxPQUE1QjtBQUFpQ0MsV0FBakM7QUFBMENwSyxhQUExQztBQUFxREosT0FBckQ7QUFBMER5SyxnQkFBMUQ7QUFBd0VDO0FBQXhFLEdBQXRCLEVBQTZHO0FBQ3BIO0FBQ0EsU0FBS0MsR0FBTCxHQUFXLEVBQVg7O0FBQ0EsU0FBS0MsVUFBTCxHQUFtQi9KLENBQUQsSUFBTztBQUNyQixVQUFJLENBQUNBLENBQUMsQ0FBQ2dLLEtBQVAsRUFBYztBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQU07QUFBRXhKLGtCQUFGO0FBQVlrSTtBQUFaLFlBQXNCLElBQTVCO0FBQ0EsYUFBS3VCLFdBQUwsQ0FBaUIsY0FBakIsRUFBaUNsQyxPQUFPLENBQUNySyxvQkFBUixDQUE2QjtBQUFFOEMsa0JBQUY7QUFBWWtJO0FBQVosU0FBN0IsQ0FBakMsRUFBb0ZYLE9BQU8sQ0FBQ21DLE1BQVIsRUFBcEY7QUFDQTtBQUNILE9BZG9CLENBZXJCO0FBQ0E7OztBQUNBLFVBQUlsSyxDQUFDLENBQUNnSyxLQUFGLElBQ0EsS0FBS0csS0FETCxJQUVBbkssQ0FBQyxDQUFDZ0ssS0FBRixDQUFRek0sRUFBUixLQUFlLEtBQUs2TSxNQUZwQixJQUdBdkMsS0FBSyxDQUFDaEwsS0FBTixDQUFZbUQsQ0FBQyxDQUFDZ0ssS0FBRixDQUFRcE4sR0FBcEIsRUFBeUI0RCxRQUF6QixLQUFzQyxLQUFLQSxRQUgvQyxFQUd5RDtBQUNyRDtBQUNILE9BdEJvQixDQXVCckI7QUFDQTs7O0FBQ0EsVUFBSSxLQUFLNkosSUFBTCxJQUFhLENBQUMsS0FBS0EsSUFBTCxDQUFVckssQ0FBQyxDQUFDZ0ssS0FBWixDQUFsQixFQUFzQztBQUNsQztBQUNIOztBQUNELFlBQU07QUFBRXBOLFdBQUY7QUFBT1csVUFBUDtBQUFXMkU7QUFBWCxVQUF1QmxDLENBQUMsQ0FBQ2dLLEtBQS9COztBQUNBLGdCQUEyQztBQUN2QyxZQUFJLE9BQU9wTixHQUFQLEtBQWUsV0FBZixJQUE4QixPQUFPVyxFQUFQLEtBQWMsV0FBaEQsRUFBNkQ7QUFDekQ2QixpQkFBTyxDQUFDbUMsSUFBUixDQUFhLDBIQUFiO0FBQ0g7QUFDSjs7QUFDRCxXQUFLVCxPQUFMLENBQWFsRSxHQUFiLEVBQWtCVyxFQUFsQixFQUFzQjJFLE9BQXRCO0FBQ0gsS0FuQ0Q7O0FBb0NBLFNBQUtvSSxjQUFMLEdBQXVCRixNQUFELElBQVk7QUFDOUIsWUFBTTVKLFFBQVEsR0FBR2dJLFlBQVksQ0FBQ1gsS0FBSyxDQUFDaEwsS0FBTixDQUFZdU4sTUFBWixFQUFvQjVKLFFBQXJCLENBQTdCO0FBQ0EsYUFBTyxTQUNEK0osU0FEQyxHQUVEOUIsYUFBYSxDQUFDakksUUFBRCxFQUFXLElBQVgsRUFBaUIsS0FBSzJKLEtBQXRCLEVBQTZCYixJQUFJLElBQUssS0FBS1EsR0FBTCxDQUFTdEosUUFBVCxJQUFxQjhJLElBQTNELENBRm5CO0FBR0gsS0FMRDs7QUFNQSxTQUFLa0IsY0FBTCxHQUF1QkosTUFBRCxJQUFZO0FBQzlCLFVBQUk7QUFBRTVKLGdCQUFGO0FBQVlrSTtBQUFaLFVBQXNCYixLQUFLLENBQUNoTCxLQUFOLENBQVl1TixNQUFaLEVBQW9CLElBQXBCLENBQTFCO0FBQ0E1SixjQUFRLEdBQUdnSSxZQUFZLENBQUNoSSxRQUFELENBQXZCO0FBQ0EsYUFBT2lJLGFBQWEsQ0FBQ2pJLFFBQUQsRUFBV2tJLEtBQVgsRUFBa0IsS0FBS3lCLEtBQXZCLENBQXBCO0FBQ0gsS0FKRCxDQTdDb0gsQ0FrRHBIOzs7QUFDQSxTQUFLTSxLQUFMLEdBQWFsQyxPQUFPLENBQUMvSCxRQUFELENBQXBCLENBbkRvSCxDQW9EcEg7O0FBQ0EsU0FBS2tLLFVBQUwsR0FBa0IsRUFBbEIsQ0FyRG9ILENBc0RwSDtBQUNBO0FBQ0E7O0FBQ0EsUUFBSWxLLFFBQVEsS0FBSyxTQUFqQixFQUE0QjtBQUN4QixXQUFLa0ssVUFBTCxDQUFnQixLQUFLRCxLQUFyQixJQUE4QjtBQUMxQmxMLGlCQUQwQjtBQUUxQkUsYUFBSyxFQUFFK0osWUFGbUI7QUFHMUJySyxXQUgwQjtBQUkxQndMLGVBQU8sRUFBRW5CLFlBQVksSUFBSUEsWUFBWSxDQUFDbUIsT0FKWjtBQUsxQkMsZUFBTyxFQUFFcEIsWUFBWSxJQUFJQSxZQUFZLENBQUNvQjtBQUxaLE9BQTlCO0FBT0g7O0FBQ0QsU0FBS0YsVUFBTCxDQUFnQixPQUFoQixJQUEyQjtBQUFFbkwsZUFBUyxFQUFFbUs7QUFBYixLQUEzQixDQWxFb0gsQ0FtRXBIO0FBQ0E7O0FBQ0EsU0FBS3hFLE1BQUwsR0FBY2IsTUFBTSxDQUFDYSxNQUFyQjtBQUNBLFNBQUt1RSxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFNBQUtqSixRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtrSSxLQUFMLEdBQWFBLEtBQWIsQ0F4RW9ILENBeUVwSDtBQUNBOztBQUNBLFNBQUswQixNQUFMLEdBQ0k7QUFDQXBDLGdCQUFZLENBQUM2QyxjQUFiLENBQTRCckssUUFBNUIsS0FBeUN1SSxhQUFhLENBQUMrQixVQUF2RCxHQUFvRXRLLFFBQXBFLEdBQStFakQsRUFGbkY7QUFHQSxTQUFLNEssUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLNEMsR0FBTCxHQUFXbkIsWUFBWDtBQUNBLFNBQUtvQixHQUFMLEdBQVcsSUFBWDtBQUNBLFNBQUtDLFFBQUwsR0FBZ0J0QixPQUFoQixDQWpGb0gsQ0FrRnBIO0FBQ0E7O0FBQ0EsU0FBS1EsS0FBTCxHQUFhLElBQWI7QUFDQSxTQUFLTixVQUFMLEdBQWtCQSxVQUFsQjs7QUFDQSxlQUFtQyxFQVNsQztBQUNKLEdBakdRLENBa0dUOzs7QUFDQSxTQUFPcUIsd0JBQVAsQ0FBZ0N0TyxHQUFoQyxFQUFxQztBQUNqQyxRQUFJc0csS0FBSixFQUE4QyxFQUE5QyxNQUtLO0FBQ0QsYUFBT3RHLEdBQVA7QUFDSDtBQUNKOztBQUNEdU8sUUFBTSxDQUFDVixLQUFELEVBQVE3QyxHQUFSLEVBQWE7QUFDZixVQUFNckksU0FBUyxHQUFHcUksR0FBRyxDQUFDeEwsT0FBSixJQUFld0wsR0FBakM7QUFDQSxVQUFNMEIsSUFBSSxHQUFHLEtBQUtvQixVQUFMLENBQWdCRCxLQUFoQixDQUFiOztBQUNBLFFBQUksQ0FBQ25CLElBQUwsRUFBVztBQUNQLFlBQU0sSUFBSXZELEtBQUosQ0FBVyxvQ0FBbUMwRSxLQUFNLEVBQXBELENBQU47QUFDSDs7QUFDRCxVQUFNVyxPQUFPLEdBQUdwRyxNQUFNLENBQUN5QixNQUFQLENBQWN6QixNQUFNLENBQUN5QixNQUFQLENBQWMsRUFBZCxFQUFrQjZDLElBQWxCLENBQWQsRUFBdUM7QUFBRS9KLGVBQUY7QUFBYW9MLGFBQU8sRUFBRS9DLEdBQUcsQ0FBQytDLE9BQTFCO0FBQW1DQyxhQUFPLEVBQUVoRCxHQUFHLENBQUNnRDtBQUFoRCxLQUF2QyxDQUFoQjtBQUNBLFNBQUtGLFVBQUwsQ0FBZ0JELEtBQWhCLElBQXlCVyxPQUF6QixDQVBlLENBUWY7O0FBQ0EsUUFBSVgsS0FBSyxLQUFLLE9BQWQsRUFBdUI7QUFDbkIsV0FBS1ksTUFBTCxDQUFZLEtBQUtYLFVBQUwsQ0FBZ0IsS0FBS0QsS0FBckIsQ0FBWjtBQUNBO0FBQ0g7O0FBQ0QsUUFBSUEsS0FBSyxLQUFLLEtBQUtBLEtBQW5CLEVBQTBCO0FBQ3RCLFdBQUtZLE1BQUwsQ0FBWUQsT0FBWjtBQUNIO0FBQ0o7O0FBQ0RFLFFBQU0sR0FBRztBQUNMdk4sVUFBTSxDQUFDMEMsUUFBUCxDQUFnQjZLLE1BQWhCO0FBQ0g7QUFDRDs7Ozs7QUFHQUMsTUFBSSxHQUFHO0FBQ0h4TixVQUFNLENBQUN5TixPQUFQLENBQWVELElBQWY7QUFDSDtBQUNEOzs7Ozs7OztBQU1BbkUsTUFBSSxDQUFDeEssR0FBRCxFQUFNVyxFQUFFLEdBQUdYLEdBQVgsRUFBZ0JzRixPQUFPLEdBQUcsRUFBMUIsRUFBOEI7QUFDOUIsV0FBTyxLQUFLdUosTUFBTCxDQUFZLFdBQVosRUFBeUI3TyxHQUF6QixFQUE4QlcsRUFBOUIsRUFBa0MyRSxPQUFsQyxDQUFQO0FBQ0g7QUFDRDs7Ozs7Ozs7QUFNQXBCLFNBQU8sQ0FBQ2xFLEdBQUQsRUFBTVcsRUFBRSxHQUFHWCxHQUFYLEVBQWdCc0YsT0FBTyxHQUFHLEVBQTFCLEVBQThCO0FBQ2pDLFdBQU8sS0FBS3VKLE1BQUwsQ0FBWSxjQUFaLEVBQTRCN08sR0FBNUIsRUFBaUNXLEVBQWpDLEVBQXFDMkUsT0FBckMsQ0FBUDtBQUNIOztBQUNEdUosUUFBTSxDQUFDQyxNQUFELEVBQVNwUCxJQUFULEVBQWVxUCxHQUFmLEVBQW9CekosT0FBcEIsRUFBNkI7QUFDL0IsV0FBTyxJQUFJcUksT0FBSixDQUFZLENBQUM3SixPQUFELEVBQVVrTCxNQUFWLEtBQXFCO0FBQ3BDLFVBQUksQ0FBQzFKLE9BQU8sQ0FBQzJKLEVBQWIsRUFBaUI7QUFDYixhQUFLMUIsS0FBTCxHQUFhLEtBQWI7QUFDSCxPQUhtQyxDQUlwQzs7O0FBQ0EsVUFBSXBDLE9BQU8sQ0FBQytELEVBQVosRUFBZ0I7QUFDWkMsbUJBQVcsQ0FBQ0MsSUFBWixDQUFpQixhQUFqQjtBQUNILE9BUG1DLENBUXBDO0FBQ0E7OztBQUNBLFVBQUlwUCxHQUFHLEdBQUcsT0FBT04sSUFBUCxLQUFnQixRQUFoQixHQUEyQnlMLE9BQU8sQ0FBQ3JLLG9CQUFSLENBQTZCcEIsSUFBN0IsQ0FBM0IsR0FBZ0VBLElBQTFFO0FBQ0EsVUFBSWlCLEVBQUUsR0FBRyxPQUFPb08sR0FBUCxLQUFlLFFBQWYsR0FBMEI1RCxPQUFPLENBQUNySyxvQkFBUixDQUE2QmlPLEdBQTdCLENBQTFCLEdBQThEQSxHQUF2RTtBQUNBL08sU0FBRyxHQUFHa0QsV0FBVyxDQUFDbEQsR0FBRCxDQUFqQjtBQUNBVyxRQUFFLEdBQUd1QyxXQUFXLENBQUN2QyxFQUFELENBQWhCLENBYm9DLENBY3BDO0FBQ0E7O0FBQ0EsVUFBSTJGLEtBQUosRUFBOEMsRUFPN0M7O0FBQ0QsV0FBSytJLGtCQUFMLENBQXdCMU8sRUFBeEIsRUF4Qm9DLENBeUJwQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFVBQUksQ0FBQzJFLE9BQU8sQ0FBQzJKLEVBQVQsSUFBZSxLQUFLSyxlQUFMLENBQXFCM08sRUFBckIsQ0FBbkIsRUFBNkM7QUFDekMsYUFBSzZNLE1BQUwsR0FBYzdNLEVBQWQ7QUFDQThHLGNBQU0sQ0FBQ2EsTUFBUCxDQUFjcUMsSUFBZCxDQUFtQixpQkFBbkIsRUFBc0NoSyxFQUF0QztBQUNBLGFBQUswTSxXQUFMLENBQWlCeUIsTUFBakIsRUFBeUI5TyxHQUF6QixFQUE4QlcsRUFBOUIsRUFBa0MyRSxPQUFsQztBQUNBLGFBQUtpSyxZQUFMLENBQWtCNU8sRUFBbEI7QUFDQThHLGNBQU0sQ0FBQ2EsTUFBUCxDQUFjcUMsSUFBZCxDQUFtQixvQkFBbkIsRUFBeUNoSyxFQUF6QztBQUNBLGVBQU9tRCxPQUFPLENBQUMsSUFBRCxDQUFkO0FBQ0g7O0FBQ0QsWUFBTTtBQUFFRixnQkFBRjtBQUFZa0ksYUFBWjtBQUFtQnpMO0FBQW5CLFVBQWdDNEssS0FBSyxDQUFDaEwsS0FBTixDQUFZRCxHQUFaLEVBQWlCLElBQWpCLENBQXRDOztBQUNBLFVBQUksQ0FBQzRELFFBQUQsSUFBYXZELFFBQWpCLEVBQTJCO0FBQ3ZCLGtCQUEyQztBQUN2QyxnQkFBTSxJQUFJOEksS0FBSixDQUFXLGtDQUFpQ25KLEdBQUksa0RBQWhELENBQU47QUFDSDs7QUFDRCxlQUFPOEQsT0FBTyxDQUFDLEtBQUQsQ0FBZDtBQUNILE9BNUNtQyxDQTZDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsVUFBSSxDQUFDLEtBQUswTCxRQUFMLENBQWM3TyxFQUFkLENBQUwsRUFBd0I7QUFDcEJtTyxjQUFNLEdBQUcsY0FBVDtBQUNIOztBQUNELFlBQU1qQixLQUFLLEdBQUdsQyxPQUFPLENBQUMvSCxRQUFELENBQXJCO0FBQ0EsWUFBTTtBQUFFTyxlQUFPLEdBQUc7QUFBWixVQUFzQm1CLE9BQTVCOztBQUNBLFVBQUk4RixZQUFZLENBQUM2QyxjQUFiLENBQTRCSixLQUE1QixDQUFKLEVBQXdDO0FBQ3BDLGNBQU07QUFBRWpLLGtCQUFRLEVBQUU2TDtBQUFaLFlBQTJCeEUsS0FBSyxDQUFDaEwsS0FBTixDQUFZVSxFQUFaLENBQWpDO0FBQ0EsY0FBTStPLFVBQVUsR0FBR3BFLGFBQWEsQ0FBQ3FFLGFBQWQsQ0FBNEI5QixLQUE1QixDQUFuQjtBQUNBLGNBQU0rQixVQUFVLEdBQUd2RSxlQUFlLENBQUN3RSxlQUFoQixDQUFnQ0gsVUFBaEMsRUFBNENELFVBQTVDLENBQW5COztBQUNBLFlBQUksQ0FBQ0csVUFBTCxFQUFpQjtBQUNiLGdCQUFNRSxhQUFhLEdBQUcxSCxNQUFNLENBQUMySCxJQUFQLENBQVlMLFVBQVUsQ0FBQ00sTUFBdkIsRUFBK0JDLE1BQS9CLENBQXNDQyxLQUFLLElBQUksQ0FBQ3BFLEtBQUssQ0FBQ29FLEtBQUQsQ0FBckQsQ0FBdEI7O0FBQ0EsY0FBSUosYUFBYSxDQUFDdkcsTUFBZCxHQUF1QixDQUEzQixFQUE4QjtBQUMxQixzQkFBMkM7QUFDdkMvRyxxQkFBTyxDQUFDbUMsSUFBUixDQUFjLDZEQUFELEdBQ1IsZUFBY21MLGFBQWEsQ0FBQ3pLLElBQWQsQ0FBbUIsSUFBbkIsQ0FBeUIsOEJBRDVDO0FBRUg7O0FBQ0QsbUJBQU8ySixNQUFNLENBQUMsSUFBSTdGLEtBQUosQ0FBVyw4QkFBNkJzRyxVQUFXLDhDQUE2QzVCLEtBQU0sS0FBNUYsR0FDbkIsNkRBRFMsQ0FBRCxDQUFiO0FBRUg7QUFDSixTQVZELE1BV0s7QUFDRDtBQUNBekYsZ0JBQU0sQ0FBQ3lCLE1BQVAsQ0FBY2lDLEtBQWQsRUFBcUI4RCxVQUFyQjtBQUNIO0FBQ0o7O0FBQ0RuSSxZQUFNLENBQUNhLE1BQVAsQ0FBY3FDLElBQWQsQ0FBbUIsa0JBQW5CLEVBQXVDaEssRUFBdkMsRUEzRW9DLENBNEVwQzs7QUFDQSxXQUFLd1AsWUFBTCxDQUFrQnRDLEtBQWxCLEVBQXlCakssUUFBekIsRUFBbUNrSSxLQUFuQyxFQUEwQ25MLEVBQTFDLEVBQThDd0QsT0FBOUMsRUFBdURDLElBQXZELENBQTREZ00sU0FBUyxJQUFJO0FBQ3JFLGNBQU07QUFBRTNOO0FBQUYsWUFBWTJOLFNBQWxCOztBQUNBLFlBQUkzTixLQUFLLElBQUlBLEtBQUssQ0FBQzROLFNBQW5CLEVBQThCO0FBQzFCLGlCQUFPdk0sT0FBTyxDQUFDLEtBQUQsQ0FBZDtBQUNIOztBQUNEMkQsY0FBTSxDQUFDYSxNQUFQLENBQWNxQyxJQUFkLENBQW1CLHFCQUFuQixFQUEwQ2hLLEVBQTFDO0FBQ0EsYUFBSzBNLFdBQUwsQ0FBaUJ5QixNQUFqQixFQUF5QjlPLEdBQXpCLEVBQThCVyxFQUE5QixFQUFrQzJFLE9BQWxDOztBQUNBLGtCQUEyQztBQUN2QyxnQkFBTWdMLE9BQU8sR0FBRyxLQUFLeEMsVUFBTCxDQUFnQixPQUFoQixFQUF5Qm5MLFNBQXpDO0FBQ0F4QixnQkFBTSxDQUFDb1AsSUFBUCxDQUFZQyxhQUFaLEdBQ0lGLE9BQU8sQ0FBQ3RHLGVBQVIsS0FBNEJzRyxPQUFPLENBQUNyRyxtQkFBcEMsSUFDSSxDQUFDbUcsU0FBUyxDQUFDek4sU0FBVixDQUFvQnFILGVBRjdCO0FBR0g7O0FBQ0QsYUFBSzFILEdBQUwsQ0FBU3VMLEtBQVQsRUFBZ0JqSyxRQUFoQixFQUEwQmtJLEtBQTFCLEVBQWlDbkwsRUFBakMsRUFBcUN5UCxTQUFyQzs7QUFDQSxZQUFJM04sS0FBSixFQUFXO0FBQ1BnRixnQkFBTSxDQUFDYSxNQUFQLENBQWNxQyxJQUFkLENBQW1CLGtCQUFuQixFQUF1Q2xJLEtBQXZDLEVBQThDOUIsRUFBOUM7QUFDQSxnQkFBTThCLEtBQU47QUFDSDs7QUFDRGdGLGNBQU0sQ0FBQ2EsTUFBUCxDQUFjcUMsSUFBZCxDQUFtQixxQkFBbkIsRUFBMENoSyxFQUExQztBQUNBLGVBQU9tRCxPQUFPLENBQUMsSUFBRCxDQUFkO0FBQ0gsT0FwQkQsRUFvQkdrTCxNQXBCSDtBQXFCSCxLQWxHTSxDQUFQO0FBbUdIOztBQUNEM0IsYUFBVyxDQUFDeUIsTUFBRCxFQUFTOU8sR0FBVCxFQUFjVyxFQUFkLEVBQWtCMkUsT0FBTyxHQUFHLEVBQTVCLEVBQWdDO0FBQ3ZDLGNBQTJDO0FBQ3ZDLFVBQUksT0FBT25FLE1BQU0sQ0FBQ3lOLE9BQWQsS0FBMEIsV0FBOUIsRUFBMkM7QUFDdkNwTSxlQUFPLENBQUNDLEtBQVIsQ0FBZSwyQ0FBZjtBQUNBO0FBQ0g7O0FBQ0QsVUFBSSxPQUFPdEIsTUFBTSxDQUFDeU4sT0FBUCxDQUFlRSxNQUFmLENBQVAsS0FBa0MsV0FBdEMsRUFBbUQ7QUFDL0N0TSxlQUFPLENBQUNDLEtBQVIsQ0FBZSwyQkFBMEJxTSxNQUFPLG1CQUFoRDtBQUNBO0FBQ0g7QUFDSjs7QUFDRCxRQUFJQSxNQUFNLEtBQUssV0FBWCxJQUEwQjNELE9BQU8sQ0FBQ21DLE1BQVIsT0FBcUIzTSxFQUFuRCxFQUF1RDtBQUNuRFEsWUFBTSxDQUFDeU4sT0FBUCxDQUFlRSxNQUFmLEVBQXVCO0FBQ25COU8sV0FEbUI7QUFFbkJXLFVBRm1CO0FBR25CMkU7QUFIbUIsT0FBdkIsRUFLQTtBQUNBO0FBQ0E7QUFDQSxRQVJBLEVBUUkzRSxFQVJKO0FBU0g7QUFDSjs7QUFDRHdQLGNBQVksQ0FBQ3RDLEtBQUQsRUFBUWpLLFFBQVIsRUFBa0JrSSxLQUFsQixFQUF5Qm5MLEVBQXpCLEVBQTZCd0QsT0FBTyxHQUFHLEtBQXZDLEVBQThDO0FBQ3RELFVBQU1zTSxlQUFlLEdBQUcsS0FBSzNDLFVBQUwsQ0FBZ0JELEtBQWhCLENBQXhCLENBRHNELENBRXREO0FBQ0E7O0FBQ0EsUUFBSTFKLE9BQU8sSUFBSXNNLGVBQVgsSUFBOEIsS0FBSzVDLEtBQUwsS0FBZUEsS0FBakQsRUFBd0Q7QUFDcEQsYUFBT0YsT0FBTyxDQUFDN0osT0FBUixDQUFnQjJNLGVBQWhCLENBQVA7QUFDSDs7QUFDRCxVQUFNQyxXQUFXLEdBQUcsQ0FBQ25PLEdBQUQsRUFBTW9PLGFBQU4sS0FBd0I7QUFDeEMsYUFBTyxJQUFJaEQsT0FBSixDQUFZN0osT0FBTyxJQUFJO0FBQzFCLFlBQUl2QixHQUFHLENBQUNvSyxJQUFKLEtBQWEsaUJBQWIsSUFBa0NnRSxhQUF0QyxFQUFxRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0F4UCxnQkFBTSxDQUFDMEMsUUFBUCxDQUFnQjlELElBQWhCLEdBQXVCWSxFQUF2QixDQU5pRCxDQU9qRDtBQUNBOztBQUNBNEIsYUFBRyxDQUFDOE4sU0FBSixHQUFnQixJQUFoQixDQVRpRCxDQVVqRDs7QUFDQSxpQkFBT3ZNLE9BQU8sQ0FBQztBQUFFckIsaUJBQUssRUFBRUY7QUFBVCxXQUFELENBQWQ7QUFDSDs7QUFDRCxZQUFJQSxHQUFHLENBQUM4TixTQUFSLEVBQW1CO0FBQ2Y7QUFDQSxpQkFBT3ZNLE9BQU8sQ0FBQztBQUFFckIsaUJBQUssRUFBRUY7QUFBVCxXQUFELENBQWQ7QUFDSDs7QUFDRHVCLGVBQU8sQ0FBQyxLQUFLOE0sY0FBTCxDQUFvQixTQUFwQixFQUNIeE0sSUFERyxDQUNFa0ksR0FBRyxJQUFJO0FBQ2IsZ0JBQU07QUFBRXVFLGdCQUFJLEVBQUVsTztBQUFSLGNBQXNCMkosR0FBNUI7QUFDQSxnQkFBTThELFNBQVMsR0FBRztBQUFFek4scUJBQUY7QUFBYUo7QUFBYixXQUFsQjtBQUNBLGlCQUFPLElBQUlvTCxPQUFKLENBQVk3SixPQUFPLElBQUk7QUFDMUIsaUJBQUtrRyxlQUFMLENBQXFCckgsU0FBckIsRUFBZ0M7QUFDNUJKLGlCQUQ0QjtBQUU1QnFCLHNCQUY0QjtBQUc1QmtJO0FBSDRCLGFBQWhDLEVBSUcxSCxJQUpILENBSVF2QixLQUFLLElBQUk7QUFDYnVOLHVCQUFTLENBQUN2TixLQUFWLEdBQWtCQSxLQUFsQjtBQUNBdU4sdUJBQVMsQ0FBQzNOLEtBQVYsR0FBa0JGLEdBQWxCO0FBQ0F1QixxQkFBTyxDQUFDc00sU0FBRCxDQUFQO0FBQ0gsYUFSRCxFQVFHVSxNQUFNLElBQUk7QUFDVHRPLHFCQUFPLENBQUNDLEtBQVIsQ0FBYyx5Q0FBZCxFQUF5RHFPLE1BQXpEO0FBQ0FWLHVCQUFTLENBQUMzTixLQUFWLEdBQWtCRixHQUFsQjtBQUNBNk4sdUJBQVMsQ0FBQ3ZOLEtBQVYsR0FBa0IsRUFBbEI7QUFDQWlCLHFCQUFPLENBQUNzTSxTQUFELENBQVA7QUFDSCxhQWJEO0FBY0gsV0FmTSxDQUFQO0FBZ0JILFNBcEJPLEVBcUJINUssS0FyQkcsQ0FxQkdqRCxHQUFHLElBQUltTyxXQUFXLENBQUNuTyxHQUFELEVBQU0sSUFBTixDQXJCckIsQ0FBRCxDQUFQO0FBc0JILE9BeENNLENBQVA7QUF5Q0gsS0ExQ0Q7O0FBMkNBLFdBQU8sSUFBSW9MLE9BQUosQ0FBWSxDQUFDN0osT0FBRCxFQUFVa0wsTUFBVixLQUFxQjtBQUNwQyxVQUFJeUIsZUFBSixFQUFxQjtBQUNqQixlQUFPM00sT0FBTyxDQUFDMk0sZUFBRCxDQUFkO0FBQ0g7O0FBQ0QsV0FBS0csY0FBTCxDQUFvQi9DLEtBQXBCLEVBQTJCekosSUFBM0IsQ0FBZ0NrSSxHQUFHLElBQUl4SSxPQUFPLENBQUM7QUFDM0NuQixpQkFBUyxFQUFFMkosR0FBRyxDQUFDdUUsSUFENEI7QUFFM0M5QyxlQUFPLEVBQUV6QixHQUFHLENBQUN0QixHQUFKLENBQVErQyxPQUYwQjtBQUczQ0MsZUFBTyxFQUFFMUIsR0FBRyxDQUFDdEIsR0FBSixDQUFRZ0Q7QUFIMEIsT0FBRCxDQUE5QyxFQUlJZ0IsTUFKSjtBQUtILEtBVE0sRUFVRjVLLElBVkUsQ0FVSWdNLFNBQUQsSUFBZTtBQUNyQixZQUFNO0FBQUV6TixpQkFBRjtBQUFhb0wsZUFBYjtBQUFzQkM7QUFBdEIsVUFBa0NvQyxTQUF4Qzs7QUFDQSxnQkFBMkM7QUFDdkMsY0FBTTtBQUFFVztBQUFGLFlBQXlCM1IsbUJBQU8sQ0FBQywwQkFBRCxDQUF0Qzs7QUFDQSxZQUFJLENBQUMyUixrQkFBa0IsQ0FBQ3BPLFNBQUQsQ0FBdkIsRUFBb0M7QUFDaEMsZ0JBQU0sSUFBSXdHLEtBQUosQ0FBVyx5REFBd0R2RixRQUFTLEdBQTVFLENBQU47QUFDSDtBQUNKOztBQUNELGFBQU8sS0FBS29OLFFBQUwsQ0FBYyxNQUFNakQsT0FBTyxHQUM1QixLQUFLTCxjQUFMLENBQW9CL00sRUFBcEIsQ0FENEIsR0FFNUJxTixPQUFPLEdBQ0gsS0FBS0osY0FBTCxDQUFvQmpOLEVBQXBCLENBREcsR0FFSCxLQUFLcUosZUFBTCxDQUFxQnJILFNBQXJCLEVBQ0Y7QUFDQTtBQUNJaUIsZ0JBREo7QUFFSWtJLGFBRko7QUFHSTBCLGNBQU0sRUFBRTdNO0FBSFosT0FGRSxDQUpILEVBVUt5RCxJQVZMLENBVVV2QixLQUFLLElBQUk7QUFDdEJ1TixpQkFBUyxDQUFDdk4sS0FBVixHQUFrQkEsS0FBbEI7QUFDQSxhQUFLaUwsVUFBTCxDQUFnQkQsS0FBaEIsSUFBeUJ1QyxTQUF6QjtBQUNBLGVBQU9BLFNBQVA7QUFDSCxPQWRNLENBQVA7QUFlSCxLQWpDTSxFQWtDRjVLLEtBbENFLENBa0NJa0wsV0FsQ0osQ0FBUDtBQW1DSDs7QUFDRHBPLEtBQUcsQ0FBQ3VMLEtBQUQsRUFBUWpLLFFBQVIsRUFBa0JrSSxLQUFsQixFQUF5Qm5MLEVBQXpCLEVBQTZCK0wsSUFBN0IsRUFBbUM7QUFDbEMsU0FBS08sVUFBTCxHQUFrQixLQUFsQjtBQUNBLFNBQUtZLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtqSyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtrSSxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLMEIsTUFBTCxHQUFjN00sRUFBZDtBQUNBLFNBQUs4TixNQUFMLENBQVkvQixJQUFaO0FBQ0g7QUFDRDs7Ozs7O0FBSUF1RSxnQkFBYyxDQUFDclAsRUFBRCxFQUFLO0FBQ2YsU0FBSzZMLElBQUwsR0FBWTdMLEVBQVo7QUFDSDs7QUFDRDBOLGlCQUFlLENBQUMzTyxFQUFELEVBQUs7QUFDaEIsUUFBSSxDQUFDLEtBQUs2TSxNQUFWLEVBQ0ksT0FBTyxLQUFQO0FBQ0osVUFBTSxDQUFDMEQsWUFBRCxFQUFlQyxPQUFmLElBQTBCLEtBQUszRCxNQUFMLENBQVk0RCxLQUFaLENBQWtCLEdBQWxCLENBQWhDO0FBQ0EsVUFBTSxDQUFDQyxZQUFELEVBQWVDLE9BQWYsSUFBMEIzUSxFQUFFLENBQUN5USxLQUFILENBQVMsR0FBVCxDQUFoQyxDQUpnQixDQUtoQjs7QUFDQSxRQUFJRSxPQUFPLElBQUlKLFlBQVksS0FBS0csWUFBNUIsSUFBNENGLE9BQU8sS0FBS0csT0FBNUQsRUFBcUU7QUFDakUsYUFBTyxJQUFQO0FBQ0gsS0FSZSxDQVNoQjs7O0FBQ0EsUUFBSUosWUFBWSxLQUFLRyxZQUFyQixFQUFtQztBQUMvQixhQUFPLEtBQVA7QUFDSCxLQVplLENBYWhCO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxXQUFPRixPQUFPLEtBQUtHLE9BQW5CO0FBQ0g7O0FBQ0QvQixjQUFZLENBQUM1TyxFQUFELEVBQUs7QUFDYixVQUFNLEdBQUc0USxJQUFILElBQVc1USxFQUFFLENBQUN5USxLQUFILENBQVMsR0FBVCxDQUFqQixDQURhLENBRWI7O0FBQ0EsUUFBSUcsSUFBSSxLQUFLLEVBQWIsRUFBaUI7QUFDYnBRLFlBQU0sQ0FBQ21ELFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkI7QUFDQTtBQUNILEtBTlksQ0FPYjs7O0FBQ0EsVUFBTWtOLElBQUksR0FBR2pOLFFBQVEsQ0FBQ2tOLGNBQVQsQ0FBd0JGLElBQXhCLENBQWI7O0FBQ0EsUUFBSUMsSUFBSixFQUFVO0FBQ05BLFVBQUksQ0FBQ0UsY0FBTDtBQUNBO0FBQ0gsS0FaWSxDQWFiO0FBQ0E7OztBQUNBLFVBQU1DLE1BQU0sR0FBR3BOLFFBQVEsQ0FBQ3FOLGlCQUFULENBQTJCTCxJQUEzQixFQUFpQyxDQUFqQyxDQUFmOztBQUNBLFFBQUlJLE1BQUosRUFBWTtBQUNSQSxZQUFNLENBQUNELGNBQVA7QUFDSDtBQUNKOztBQUNEbEMsVUFBUSxDQUFDaEMsTUFBRCxFQUFTO0FBQ2IsV0FBTyxLQUFLQSxNQUFMLEtBQWdCQSxNQUF2QjtBQUNIO0FBQ0Q7Ozs7Ozs7O0FBTUE5SSxVQUFRLENBQUMxRSxHQUFELEVBQU13TixNQUFNLEdBQUd4TixHQUFmLEVBQW9Cc0YsT0FBTyxHQUFHLEVBQTlCLEVBQWtDO0FBQ3RDLFdBQU8sSUFBSXFJLE9BQUosQ0FBWSxDQUFDN0osT0FBRCxFQUFVa0wsTUFBVixLQUFxQjtBQUNwQyxZQUFNO0FBQUVwTCxnQkFBRjtBQUFZdkQ7QUFBWixVQUF5QjRLLEtBQUssQ0FBQ2hMLEtBQU4sQ0FBWUQsR0FBWixDQUEvQjs7QUFDQSxVQUFJLENBQUM0RCxRQUFELElBQWF2RCxRQUFqQixFQUEyQjtBQUN2QixrQkFBMkM7QUFDdkMsZ0JBQU0sSUFBSThJLEtBQUosQ0FBVyxrQ0FBaUNuSixHQUFJLGtEQUFoRCxDQUFOO0FBQ0g7O0FBQ0Q7QUFDSCxPQVBtQyxDQVFwQzs7O0FBQ0EsZ0JBQTJDO0FBQ3ZDO0FBQ0g7O0FBQ0QsWUFBTTZOLEtBQUssR0FBR3BDLFdBQVcsQ0FBQ0UsT0FBTyxDQUFDL0gsUUFBRCxDQUFSLENBQXpCO0FBQ0ErSixhQUFPLENBQUN0RCxHQUFSLENBQVksQ0FDUixLQUFLd0MsVUFBTCxDQUFnQmdGLFlBQWhCLENBQTZCN1IsR0FBN0IsRUFBa0N5TCxXQUFXLENBQUMrQixNQUFELENBQTdDLENBRFEsRUFFUixLQUFLWCxVQUFMLENBQWdCdkgsT0FBTyxDQUFDVyxRQUFSLEdBQW1CLFVBQW5CLEdBQWdDLFVBQWhELEVBQTRENEgsS0FBNUQsQ0FGUSxDQUFaLEVBR0d6SixJQUhILENBR1EsTUFBTU4sT0FBTyxFQUhyQixFQUd5QmtMLE1BSHpCO0FBSUgsS0FqQk0sQ0FBUDtBQWtCSDs7QUFDRCxRQUFNNEIsY0FBTixDQUFxQi9DLEtBQXJCLEVBQTRCO0FBQ3hCLFFBQUl3QyxTQUFTLEdBQUcsS0FBaEI7O0FBQ0EsVUFBTXlCLE1BQU0sR0FBSSxLQUFLMUQsR0FBTCxHQUFXLE1BQU07QUFDN0JpQyxlQUFTLEdBQUcsSUFBWjtBQUNILEtBRkQ7O0FBR0F4QyxTQUFLLEdBQUdwQyxXQUFXLENBQUNvQyxLQUFELENBQW5CO0FBQ0EsVUFBTWtFLGVBQWUsR0FBRyxNQUFNLEtBQUtsRixVQUFMLENBQWdCbUYsUUFBaEIsQ0FBeUJuRSxLQUF6QixDQUE5Qjs7QUFDQSxRQUFJd0MsU0FBSixFQUFlO0FBQ1gsWUFBTTVOLEtBQUssR0FBRyxJQUFJMEcsS0FBSixDQUFXLHdDQUF1QzBFLEtBQU0sR0FBeEQsQ0FBZDtBQUNBcEwsV0FBSyxDQUFDNE4sU0FBTixHQUFrQixJQUFsQjtBQUNBLFlBQU01TixLQUFOO0FBQ0g7O0FBQ0QsUUFBSXFQLE1BQU0sS0FBSyxLQUFLMUQsR0FBcEIsRUFBeUI7QUFDckIsV0FBS0EsR0FBTCxHQUFXLElBQVg7QUFDSDs7QUFDRCxXQUFPMkQsZUFBUDtBQUNIOztBQUNEZixVQUFRLENBQUNpQixFQUFELEVBQUs7QUFDVCxRQUFJNUIsU0FBUyxHQUFHLEtBQWhCOztBQUNBLFVBQU15QixNQUFNLEdBQUcsTUFBTTtBQUNqQnpCLGVBQVMsR0FBRyxJQUFaO0FBQ0gsS0FGRDs7QUFHQSxTQUFLakMsR0FBTCxHQUFXMEQsTUFBWDtBQUNBLFdBQU9HLEVBQUUsR0FBRzdOLElBQUwsQ0FBVXNJLElBQUksSUFBSTtBQUNyQixVQUFJb0YsTUFBTSxLQUFLLEtBQUsxRCxHQUFwQixFQUF5QjtBQUNyQixhQUFLQSxHQUFMLEdBQVcsSUFBWDtBQUNIOztBQUNELFVBQUlpQyxTQUFKLEVBQWU7QUFDWCxjQUFNOU4sR0FBRyxHQUFHLElBQUk0RyxLQUFKLENBQVUsaUNBQVYsQ0FBWjtBQUNBNUcsV0FBRyxDQUFDOE4sU0FBSixHQUFnQixJQUFoQjtBQUNBLGNBQU05TixHQUFOO0FBQ0g7O0FBQ0QsYUFBT21LLElBQVA7QUFDSCxLQVZNLENBQVA7QUFXSDs7QUFDRDFDLGlCQUFlLENBQUNySCxTQUFELEVBQVl1UCxHQUFaLEVBQWlCO0FBQzVCLFVBQU07QUFBRXZQLGVBQVMsRUFBRW1LO0FBQWIsUUFBcUIsS0FBS2dCLFVBQUwsQ0FBZ0IsT0FBaEIsQ0FBM0I7O0FBQ0EsVUFBTXFFLE9BQU8sR0FBRyxLQUFLOUQsUUFBTCxDQUFjdkIsR0FBZCxDQUFoQjs7QUFDQW9GLE9BQUcsQ0FBQ0MsT0FBSixHQUFjQSxPQUFkO0FBQ0EsV0FBT2hILE9BQU8sQ0FBQ2lILG1CQUFSLENBQTRCdEYsR0FBNUIsRUFBaUM7QUFDcENxRixhQURvQztBQUVwQ3hQLGVBRm9DO0FBR3BDbUYsWUFBTSxFQUFFLElBSDRCO0FBSXBDb0s7QUFKb0MsS0FBakMsQ0FBUDtBQU1IOztBQUNEN0Msb0JBQWtCLENBQUMxTyxFQUFELEVBQUs7QUFDbkIsUUFBSSxLQUFLeU4sR0FBVCxFQUFjO0FBQ1YsWUFBTWhMLENBQUMsR0FBRyxJQUFJK0YsS0FBSixDQUFVLGlCQUFWLENBQVY7QUFDQS9GLE9BQUMsQ0FBQ2lOLFNBQUYsR0FBYyxJQUFkO0FBQ0E1SSxZQUFNLENBQUNhLE1BQVAsQ0FBY3FDLElBQWQsQ0FBbUIsa0JBQW5CLEVBQXVDdkgsQ0FBdkMsRUFBMEN6QyxFQUExQztBQUNBLFdBQUt5TixHQUFMO0FBQ0EsV0FBS0EsR0FBTCxHQUFXLElBQVg7QUFDSDtBQUNKOztBQUNESyxRQUFNLENBQUMvQixJQUFELEVBQU87QUFDVCxTQUFLeUIsR0FBTCxDQUFTekIsSUFBVCxFQUFlLEtBQUtvQixVQUFMLENBQWdCLE9BQWhCLEVBQXlCbkwsU0FBeEM7QUFDSDs7QUF2ZlE7O0FBeWZickQsT0FBTyxDQUFDRSxPQUFSLEdBQWtCaUksTUFBbEI7QUFDQUEsTUFBTSxDQUFDYSxNQUFQLEdBQWdCNEMsTUFBTSxDQUFDMUwsT0FBUCxFQUFoQixDOzs7Ozs7Ozs7Ozs7QUNsa0JhOztBQUNiNEksTUFBTSxDQUFDQyxjQUFQLENBQXNCL0ksT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFBRTZILE9BQUssRUFBRTtBQUFULENBQTdDLEUsQ0FDQTs7QUFDQSxNQUFNa0wsVUFBVSxHQUFHLHNCQUFuQjs7QUFDQSxTQUFTcEUsY0FBVCxDQUF3QkosS0FBeEIsRUFBK0I7QUFDM0IsU0FBT3dFLFVBQVUsQ0FBQ0MsSUFBWCxDQUFnQnpFLEtBQWhCLENBQVA7QUFDSDs7QUFDRHZPLE9BQU8sQ0FBQzJPLGNBQVIsR0FBeUJBLGNBQXpCLEM7Ozs7Ozs7Ozs7OztBQ1BhOztBQUNiN0YsTUFBTSxDQUFDQyxjQUFQLENBQXNCL0ksT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFBRTZILE9BQUssRUFBRTtBQUFULENBQTdDOztBQUNBLFNBQVMwSSxlQUFULENBQXlCSCxVQUF6QixFQUFxQztBQUNqQyxRQUFNO0FBQUU2QyxNQUFGO0FBQU12QztBQUFOLE1BQWlCTixVQUF2QjtBQUNBLFNBQVE5TCxRQUFELElBQWM7QUFDakIsVUFBTWdNLFVBQVUsR0FBRzJDLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRNU8sUUFBUixDQUFuQjs7QUFDQSxRQUFJLENBQUNnTSxVQUFMLEVBQWlCO0FBQ2IsYUFBTyxLQUFQO0FBQ0g7O0FBQ0QsVUFBTTZDLE1BQU0sR0FBSXZDLEtBQUQsSUFBVztBQUN0QixVQUFJO0FBQ0EsZUFBT3dDLGtCQUFrQixDQUFDeEMsS0FBRCxDQUF6QjtBQUNILE9BRkQsQ0FHQSxPQUFPeUMsQ0FBUCxFQUFVO0FBQ04sY0FBTXBRLEdBQUcsR0FBRyxJQUFJNEcsS0FBSixDQUFVLHdCQUFWLENBQVo7QUFDQTVHLFdBQUcsQ0FBQ29LLElBQUosR0FBVyxlQUFYO0FBQ0EsY0FBTXBLLEdBQU47QUFDSDtBQUNKLEtBVEQ7O0FBVUEsVUFBTXFRLE1BQU0sR0FBRyxFQUFmO0FBQ0F4SyxVQUFNLENBQUMySCxJQUFQLENBQVlDLE1BQVosRUFBb0J4TyxPQUFwQixDQUE2QnFSLFFBQUQsSUFBYztBQUN0QyxZQUFNQyxDQUFDLEdBQUc5QyxNQUFNLENBQUM2QyxRQUFELENBQWhCO0FBQ0EsWUFBTUUsQ0FBQyxHQUFHbkQsVUFBVSxDQUFDa0QsQ0FBQyxDQUFDRSxHQUFILENBQXBCOztBQUNBLFVBQUlELENBQUMsS0FBS3pSLFNBQVYsRUFBcUI7QUFDakJzUixjQUFNLENBQUNDLFFBQUQsQ0FBTixHQUFtQixDQUFDRSxDQUFDLENBQUM5TyxPQUFGLENBQVUsR0FBVixDQUFELEdBQ2I4TyxDQUFDLENBQUMzQixLQUFGLENBQVEsR0FBUixFQUFhdEcsR0FBYixDQUFpQnJKLEtBQUssSUFBSWdSLE1BQU0sQ0FBQ2hSLEtBQUQsQ0FBaEMsQ0FEYSxHQUVicVIsQ0FBQyxDQUFDRyxNQUFGLEdBQ0ksQ0FBQ1IsTUFBTSxDQUFDTSxDQUFELENBQVAsQ0FESixHQUVJTixNQUFNLENBQUNNLENBQUQsQ0FKaEI7QUFLSDtBQUNKLEtBVkQ7QUFXQSxXQUFPSCxNQUFQO0FBQ0gsR0E1QkQ7QUE2Qkg7O0FBQ0R0VCxPQUFPLENBQUN1USxlQUFSLEdBQTBCQSxlQUExQixDOzs7Ozs7Ozs7Ozs7QUNsQ2E7O0FBQ2J6SCxNQUFNLENBQUNDLGNBQVAsQ0FBc0IvSSxPQUF0QixFQUErQixZQUEvQixFQUE2QztBQUFFNkgsT0FBSyxFQUFFO0FBQVQsQ0FBN0MsRSxDQUNBO0FBQ0E7O0FBQ0EsU0FBUytMLFdBQVQsQ0FBcUJDLEdBQXJCLEVBQTBCO0FBQ3RCLFNBQU9BLEdBQUcsQ0FBQ2pQLE9BQUosQ0FBWSxzQkFBWixFQUFvQyxNQUFwQyxDQUFQO0FBQ0g7O0FBQ0QsU0FBU3lMLGFBQVQsQ0FBdUJ5RCxlQUF2QixFQUF3QztBQUNwQztBQUNBLFFBQU1DLFlBQVksR0FBR0gsV0FBVyxDQUFDRSxlQUFlLENBQUNsUCxPQUFoQixDQUF3QixLQUF4QixFQUErQixFQUEvQixLQUFzQyxHQUF2QyxDQUFoQztBQUNBLFFBQU04TCxNQUFNLEdBQUcsRUFBZjtBQUNBLE1BQUlzRCxVQUFVLEdBQUcsQ0FBakI7QUFDQSxRQUFNQyxrQkFBa0IsR0FBR0YsWUFBWSxDQUFDblAsT0FBYixDQUFxQiw2QkFBckIsRUFBb0QsQ0FBQ3lPLENBQUQsRUFBSWEsRUFBSixLQUFXO0FBQ3RGLFVBQU1DLFVBQVUsR0FBRyxhQUFhbkIsSUFBYixDQUFrQmtCLEVBQWxCLENBQW5CO0FBQ0F4RCxVQUFNLENBQUN3RCxFQUFFLENBQ0w7QUFESyxLQUVKdFAsT0FGRSxDQUVNLDBCQUZOLEVBRWtDLElBRmxDLEVBR0ZBLE9BSEUsQ0FHTSxRQUhOLEVBR2dCLEVBSGhCLENBQUQsQ0FJTjtBQUpNLEtBQU4sR0FLSTtBQUFFOE8sU0FBRyxFQUFFTSxVQUFVLEVBQWpCO0FBQXFCTCxZQUFNLEVBQUVRO0FBQTdCLEtBTEo7QUFNQSxXQUFPQSxVQUFVLEdBQUcsUUFBSCxHQUFjLFdBQS9CO0FBQ0gsR0FUMEIsQ0FBM0I7QUFVQSxNQUFJQyx1QkFBSixDQWZvQyxDQWdCcEM7QUFDQTs7QUFDQSxZQUFtQztBQUMvQkEsMkJBQXVCLEdBQUdMLFlBQVksQ0FBQ25QLE9BQWIsQ0FBcUIsNkJBQXJCLEVBQW9ELENBQUN5TyxDQUFELEVBQUlhLEVBQUosS0FBVztBQUNyRixZQUFNQyxVQUFVLEdBQUcsYUFBYW5CLElBQWIsQ0FBa0JrQixFQUFsQixDQUFuQjtBQUNBLFlBQU1HLEdBQUcsR0FBR0gsRUFBRSxDQUNWO0FBRFUsT0FFVHRQLE9BRk8sQ0FFQywwQkFGRCxFQUU2QixJQUY3QixFQUdQQSxPQUhPLENBR0MsUUFIRCxFQUdXLEVBSFgsQ0FBWjtBQUlBLGFBQU91UCxVQUFVLEdBQ1YsT0FBTVAsV0FBVyxDQUFDUyxHQUFELENBQU0sT0FEYixHQUVWLE9BQU1ULFdBQVcsQ0FBQ1MsR0FBRCxDQUFNLFVBRjlCO0FBR0gsS0FUeUIsQ0FBMUI7QUFVSDs7QUFDRCxTQUFPdkwsTUFBTSxDQUFDeUIsTUFBUCxDQUFjO0FBQUUwSSxNQUFFLEVBQUUsSUFBSXFCLE1BQUosQ0FBVyxNQUFNTCxrQkFBTixHQUEyQixTQUF0QyxFQUFpRCxHQUFqRCxDQUFOO0FBQTZEdkQ7QUFBN0QsR0FBZCxFQUFzRjBELHVCQUF1QixHQUM5RztBQUNFRyxjQUFVLEVBQUcsSUFBR0gsdUJBQXdCO0FBRDFDLEdBRDhHLEdBSTlHLEVBSkMsQ0FBUDtBQUtIOztBQUNEcFUsT0FBTyxDQUFDcVEsYUFBUixHQUF3QkEsYUFBeEIsQzs7Ozs7Ozs7Ozs7O0FDM0NhOztBQUNidkgsTUFBTSxDQUFDQyxjQUFQLENBQXNCL0ksT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFBRTZILE9BQUssRUFBRTtBQUFULENBQTdDOztBQUNBLE1BQU04RCxLQUFLLEdBQUc3TCxtQkFBTyxDQUFDLGdCQUFELENBQXJCO0FBQ0E7Ozs7O0FBR0EsU0FBU29ILFFBQVQsQ0FBa0J5TCxFQUFsQixFQUFzQjtBQUNsQixNQUFJNkIsSUFBSSxHQUFHLEtBQVg7QUFDQSxNQUFJbFQsTUFBSjtBQUNBLFNBQVEsQ0FBQyxHQUFHNEksSUFBSixLQUFhO0FBQ2pCLFFBQUksQ0FBQ3NLLElBQUwsRUFBVztBQUNQQSxVQUFJLEdBQUcsSUFBUDtBQUNBbFQsWUFBTSxHQUFHcVIsRUFBRSxDQUFDLEdBQUd6SSxJQUFKLENBQVg7QUFDSDs7QUFDRCxXQUFPNUksTUFBUDtBQUNILEdBTkQ7QUFPSDs7QUFDRHRCLE9BQU8sQ0FBQ2tILFFBQVIsR0FBbUJBLFFBQW5COztBQUNBLFNBQVNyRyxpQkFBVCxHQUE2QjtBQUN6QixRQUFNO0FBQUVFLFlBQUY7QUFBWTBULFlBQVo7QUFBc0JDO0FBQXRCLE1BQStCN1MsTUFBTSxDQUFDMEMsUUFBNUM7QUFDQSxTQUFRLEdBQUV4RCxRQUFTLEtBQUkwVCxRQUFTLEdBQUVDLElBQUksR0FBRyxNQUFNQSxJQUFULEdBQWdCLEVBQUcsRUFBekQ7QUFDSDs7QUFDRDFVLE9BQU8sQ0FBQ2EsaUJBQVIsR0FBNEJBLGlCQUE1Qjs7QUFDQSxTQUFTbU4sTUFBVCxHQUFrQjtBQUNkLFFBQU07QUFBRXZOO0FBQUYsTUFBV29CLE1BQU0sQ0FBQzBDLFFBQXhCO0FBQ0EsUUFBTTNELE1BQU0sR0FBR0MsaUJBQWlCLEVBQWhDO0FBQ0EsU0FBT0osSUFBSSxDQUFDZ0osU0FBTCxDQUFlN0ksTUFBTSxDQUFDcUosTUFBdEIsQ0FBUDtBQUNIOztBQUNEakssT0FBTyxDQUFDZ08sTUFBUixHQUFpQkEsTUFBakI7O0FBQ0EsU0FBUzJHLGNBQVQsQ0FBd0J0UixTQUF4QixFQUFtQztBQUMvQixTQUFPLE9BQU9BLFNBQVAsS0FBcUIsUUFBckIsR0FDREEsU0FEQyxHQUVEQSxTQUFTLENBQUN3SCxXQUFWLElBQXlCeEgsU0FBUyxDQUFDdUgsSUFBbkMsSUFBMkMsU0FGakQ7QUFHSDs7QUFDRDVLLE9BQU8sQ0FBQzJVLGNBQVIsR0FBeUJBLGNBQXpCOztBQUNBLFNBQVNDLFNBQVQsQ0FBbUI1SCxHQUFuQixFQUF3QjtBQUNwQixTQUFPQSxHQUFHLENBQUM2SCxRQUFKLElBQWdCN0gsR0FBRyxDQUFDOEgsV0FBM0I7QUFDSDs7QUFDRDlVLE9BQU8sQ0FBQzRVLFNBQVIsR0FBb0JBLFNBQXBCOztBQUNBLGVBQWU5QixtQkFBZixDQUFtQ3RGLEdBQW5DLEVBQXdDb0YsR0FBeEMsRUFBNkM7QUFDekMsTUFBSW1DLEVBQUo7O0FBQ0EsWUFBMkM7QUFDdkMsUUFBSSxDQUFDQSxFQUFFLEdBQUd2SCxHQUFHLENBQUN3SCxTQUFWLE1BQXlCLElBQXpCLElBQWlDRCxFQUFFLEtBQUssS0FBSyxDQUE3QyxHQUFpRCxLQUFLLENBQXRELEdBQTBEQSxFQUFFLENBQUNySyxlQUFqRSxFQUFrRjtBQUM5RSxZQUFNZixPQUFPLEdBQUksSUFBR2dMLGNBQWMsQ0FBQ25ILEdBQUQsQ0FBTSx3SkFBeEM7QUFDQSxZQUFNLElBQUkzRCxLQUFKLENBQVVGLE9BQVYsQ0FBTjtBQUNIO0FBQ0osR0FQd0MsQ0FRekM7OztBQUNBLFFBQU1xRCxHQUFHLEdBQUc0RixHQUFHLENBQUM1RixHQUFKLElBQVk0RixHQUFHLENBQUNBLEdBQUosSUFBV0EsR0FBRyxDQUFDQSxHQUFKLENBQVE1RixHQUEzQzs7QUFDQSxNQUFJLENBQUNRLEdBQUcsQ0FBQzlDLGVBQVQsRUFBMEI7QUFDdEIsUUFBSWtJLEdBQUcsQ0FBQ0EsR0FBSixJQUFXQSxHQUFHLENBQUN2UCxTQUFuQixFQUE4QjtBQUMxQjtBQUNBLGFBQU87QUFDSDRSLGlCQUFTLEVBQUUsTUFBTW5DLG1CQUFtQixDQUFDRixHQUFHLENBQUN2UCxTQUFMLEVBQWdCdVAsR0FBRyxDQUFDQSxHQUFwQjtBQURqQyxPQUFQO0FBR0g7O0FBQ0QsV0FBTyxFQUFQO0FBQ0g7O0FBQ0QsUUFBTXJQLEtBQUssR0FBRyxNQUFNaUssR0FBRyxDQUFDOUMsZUFBSixDQUFvQmtJLEdBQXBCLENBQXBCOztBQUNBLE1BQUk1RixHQUFHLElBQUk0SCxTQUFTLENBQUM1SCxHQUFELENBQXBCLEVBQTJCO0FBQ3ZCLFdBQU96SixLQUFQO0FBQ0g7O0FBQ0QsTUFBSSxDQUFDQSxLQUFMLEVBQVk7QUFDUixVQUFNb0csT0FBTyxHQUFJLElBQUdnTCxjQUFjLENBQUNuSCxHQUFELENBQU0sK0RBQThEakssS0FBTSxZQUE1RztBQUNBLFVBQU0sSUFBSXNHLEtBQUosQ0FBVUYsT0FBVixDQUFOO0FBQ0g7O0FBQ0QsWUFBMkM7QUFDdkMsUUFBSWIsTUFBTSxDQUFDMkgsSUFBUCxDQUFZbE4sS0FBWixFQUFtQjBHLE1BQW5CLEtBQThCLENBQTlCLElBQW1DLENBQUMySSxHQUFHLENBQUNBLEdBQTVDLEVBQWlEO0FBQzdDMVAsYUFBTyxDQUFDbUMsSUFBUixDQUFjLEdBQUVzUCxjQUFjLENBQUNuSCxHQUFELENBQU0sNEtBQXBDO0FBQ0g7QUFDSjs7QUFDRCxTQUFPakssS0FBUDtBQUNIOztBQUNEdkQsT0FBTyxDQUFDOFMsbUJBQVIsR0FBOEJBLG1CQUE5QjtBQUNBOVMsT0FBTyxDQUFDa1YsYUFBUixHQUF3QixDQUNwQixNQURvQixFQUVwQixNQUZvQixFQUdwQixNQUhvQixFQUlwQixVQUpvQixFQUtwQixNQUxvQixFQU1wQixNQU5vQixFQU9wQixVQVBvQixFQVFwQixNQVJvQixFQVNwQixVQVRvQixFQVVwQixPQVZvQixFQVdwQixRQVhvQixFQVlwQixTQVpvQixDQUF4Qjs7QUFjQSxTQUFTMVQsb0JBQVQsQ0FBOEJkLEdBQTlCLEVBQW1Dc0YsT0FBbkMsRUFBNEM7QUFDeEMsWUFBNEM7QUFDeEMsUUFBSXRGLEdBQUcsS0FBSyxJQUFSLElBQWdCLE9BQU9BLEdBQVAsS0FBZSxRQUFuQyxFQUE2QztBQUN6Q29JLFlBQU0sQ0FBQzJILElBQVAsQ0FBWS9QLEdBQVosRUFBaUJ3QixPQUFqQixDQUF5Qm1TLEdBQUcsSUFBSTtBQUM1QixZQUFJclUsT0FBTyxDQUFDa1YsYUFBUixDQUFzQnZRLE9BQXRCLENBQThCMFAsR0FBOUIsTUFBdUMsQ0FBQyxDQUE1QyxFQUErQztBQUMzQ25SLGlCQUFPLENBQUNtQyxJQUFSLENBQWMscURBQW9EZ1AsR0FBSSxFQUF0RTtBQUNIO0FBQ0osT0FKRDtBQUtIO0FBQ0o7O0FBQ0QsU0FBTzFJLEtBQUssQ0FBQ3dKLE1BQU4sQ0FBYXpVLEdBQWIsRUFBa0JzRixPQUFsQixDQUFQO0FBQ0g7O0FBQ0RoRyxPQUFPLENBQUN3QixvQkFBUixHQUErQkEsb0JBQS9CO0FBQ0F4QixPQUFPLENBQUNvVixFQUFSLEdBQWEsT0FBT3ZGLFdBQVAsS0FBdUIsV0FBcEM7QUFDQTdQLE9BQU8sQ0FBQzRQLEVBQVIsR0FBYTVQLE9BQU8sQ0FBQ29WLEVBQVIsSUFDVCxPQUFPdkYsV0FBVyxDQUFDQyxJQUFuQixLQUE0QixVQURuQixJQUVULE9BQU9ELFdBQVcsQ0FBQ3dGLE9BQW5CLEtBQStCLFVBRm5DLEM7Ozs7Ozs7Ozs7OztBQ3RHYTs7QUFBQSxJQUFJeFYsc0JBQXNCLEdBQUNDLG1CQUFPLENBQUMsb0hBQUQsQ0FBbEM7O0FBQW1GRSxPQUFPLENBQUNDLFVBQVIsR0FBbUIsSUFBbkI7QUFBd0JELE9BQU8sQ0FBQ3NWLFNBQVIsR0FBa0JBLFNBQWxCO0FBQTRCdFYsT0FBTyxDQUFDdVYsU0FBUixHQUFrQkEsU0FBbEI7QUFBNEJ2VixPQUFPLENBQUNFLE9BQVIsR0FBZ0IsS0FBSyxDQUFyQjs7QUFBdUIsSUFBSUMsTUFBTSxHQUFDTixzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyxvQkFBRCxDQUFSLENBQWpDOztBQUFvRCxJQUFJTyxNQUFNLEdBQUNQLG1CQUFPLENBQUMsMERBQUQsQ0FBbEI7O0FBQStDRSxPQUFPLENBQUN3VixlQUFSLEdBQXdCblYsTUFBTSxDQUFDbVYsZUFBL0I7QUFBK0M7Ozs7O0FBR3RWLGVBQWVDLGtCQUFmLENBQWtDQyxJQUFsQyxFQUF1QztBQUFDLE1BQUc7QUFBQ3JTLGFBQUQ7QUFBV3VQO0FBQVgsTUFBZ0I4QyxJQUFuQjtBQUF3QixNQUFJVCxTQUFTLEdBQUMsTUFBSyxDQUFDLEdBQUU1VSxNQUFNLENBQUN5UyxtQkFBVixFQUErQnpQLFNBQS9CLEVBQXlDdVAsR0FBekMsQ0FBbkI7QUFBaUUsU0FBTTtBQUFDcUM7QUFBRCxHQUFOO0FBQW1COztBQUFBLE1BQU16SCxHQUFOLFNBQWtCck4sTUFBTSxDQUFDRCxPQUFQLENBQWVtRCxTQUFqQyxDQUEwQztBQUFDO0FBQ2xNO0FBQ0E7QUFDQXNTLG1CQUFpQixDQUFDeFMsS0FBRCxFQUFPeVMsVUFBUCxFQUFrQjtBQUFDLFVBQU16UyxLQUFOO0FBQWE7O0FBQUFnRCxRQUFNLEdBQUU7QUFBQyxRQUFHO0FBQUNxQyxZQUFEO0FBQVFuRixlQUFSO0FBQWtCNFIsZUFBbEI7QUFBNEJ4RyxhQUE1QjtBQUFvQ0M7QUFBcEMsUUFBNkMsS0FBS25MLEtBQXJEO0FBQTJELFdBQU0sYUFBYXBELE1BQU0sQ0FBQ0QsT0FBUCxDQUFlbUcsYUFBZixDQUE2QmhELFNBQTdCLEVBQXVDeUYsTUFBTSxDQUFDeUIsTUFBUCxDQUFjLEVBQWQsRUFBaUIwSyxTQUFqQixFQUEyQjtBQUMxTTtBQUNBLE1BQUV4RyxPQUFPLElBQUVDLE9BQVgsSUFBb0I7QUFBQ2hPLFNBQUcsRUFBQzZVLFNBQVMsQ0FBQy9NLE1BQUQ7QUFBZCxLQUFwQixHQUE0QyxFQUZtSSxDQUF2QyxDQUFuQjtBQUVuRTs7QUFMK0k7O0FBSzlJeEksT0FBTyxDQUFDRSxPQUFSLEdBQWdCc04sR0FBaEI7QUFBb0JBLEdBQUcsQ0FBQzdDLG1CQUFKLEdBQXdCOEssa0JBQXhCO0FBQTJDakksR0FBRyxDQUFDOUMsZUFBSixHQUFvQitLLGtCQUFwQjtBQUF1QyxJQUFJSSxhQUFKO0FBQWtCLElBQUlDLE9BQUo7O0FBQVksVUFBdUM7QUFBQ0QsZUFBYSxHQUFDLENBQUMsR0FBRXhWLE1BQU0sQ0FBQzZHLFFBQVYsRUFBb0IsTUFBSTtBQUFDaEUsV0FBTyxDQUFDbUMsSUFBUixDQUFhLG9JQUFiO0FBQW9KLEdBQTdLLENBQWQ7QUFBNkx5USxTQUFPLEdBQUMsQ0FBQyxHQUFFelYsTUFBTSxDQUFDNkcsUUFBVixFQUFvQixNQUFJO0FBQUNoRSxXQUFPLENBQUNDLEtBQVIsQ0FBYyx1RkFBZDtBQUF3RyxHQUFqSSxDQUFSO0FBQTRJLEMsQ0FBQTs7O0FBQ3hpQixTQUFTbVMsU0FBVCxDQUFtQjlSLENBQW5CLEVBQXFCO0FBQUMsWUFBdUNxUyxhQUFhO0FBQUcsU0FBT3JTLENBQUMsQ0FBQzRDLFFBQVQ7QUFBbUI7O0FBQUEsU0FBU21QLFNBQVQsQ0FBbUIvTSxNQUFuQixFQUEwQjtBQUFDO0FBQzNILE1BQUc7QUFBQ2xFLFlBQUQ7QUFBVTRKLFVBQVY7QUFBaUIxQjtBQUFqQixNQUF3QmhFLE1BQTNCO0FBQWtDLFNBQU07QUFBQyxRQUFJZ0UsS0FBSixHQUFXO0FBQUMsZ0JBQXVDc0osT0FBTztBQUFHLGFBQU90SixLQUFQO0FBQWMsS0FBNUU7O0FBQTZFLFFBQUlsSSxRQUFKLEdBQWM7QUFBQyxnQkFBdUN3UixPQUFPO0FBQUcsYUFBT3hSLFFBQVA7QUFBaUIsS0FBOUo7O0FBQStKLFFBQUk0SixNQUFKLEdBQVk7QUFBQyxnQkFBdUM0SCxPQUFPO0FBQUcsYUFBTzVILE1BQVA7QUFBZSxLQUE1Tzs7QUFBNk9tQixRQUFJLEVBQUMsTUFBSTtBQUFDLGdCQUF1Q3lHLE9BQU87QUFBR3ROLFlBQU0sQ0FBQzZHLElBQVA7QUFBZSxLQUF2VDtBQUF3VG5FLFFBQUksRUFBQyxDQUFDeEssR0FBRCxFQUFLVyxFQUFMLEtBQVU7QUFBQyxnQkFBdUN5VSxPQUFPO0FBQUcsYUFBT3ROLE1BQU0sQ0FBQzBDLElBQVAsQ0FBWXhLLEdBQVosRUFBZ0JXLEVBQWhCLENBQVA7QUFBNEIsS0FBclo7QUFBc1owVSxVQUFNLEVBQUMsQ0FBQ3RWLElBQUQsRUFBTVksRUFBTixLQUFXO0FBQUMsZ0JBQXVDeVUsT0FBTztBQUFHLFVBQUlFLFNBQVMsR0FBQzNVLEVBQUUsR0FBQ1osSUFBRCxHQUFNLEVBQXRCO0FBQXlCLFVBQUl3VixPQUFPLEdBQUM1VSxFQUFFLElBQUVaLElBQWhCO0FBQXFCLGFBQU8rSCxNQUFNLENBQUMwQyxJQUFQLENBQVk4SyxTQUFaLEVBQXNCQyxPQUF0QixDQUFQO0FBQXVDLEtBQS9pQjtBQUFnakJyUixXQUFPLEVBQUMsQ0FBQ2xFLEdBQUQsRUFBS1csRUFBTCxLQUFVO0FBQUMsZ0JBQXVDeVUsT0FBTztBQUFHLGFBQU90TixNQUFNLENBQUM1RCxPQUFQLENBQWVsRSxHQUFmLEVBQW1CVyxFQUFuQixDQUFQO0FBQStCLEtBQW5wQjtBQUFvcEI2VSxhQUFTLEVBQUMsQ0FBQ3pWLElBQUQsRUFBTVksRUFBTixLQUFXO0FBQUMsZ0JBQXVDeVUsT0FBTztBQUFHLFVBQUlLLFlBQVksR0FBQzlVLEVBQUUsR0FBQ1osSUFBRCxHQUFNLEVBQXpCO0FBQTRCLFVBQUkyVixVQUFVLEdBQUMvVSxFQUFFLElBQUVaLElBQW5CO0FBQXdCLGFBQU8rSCxNQUFNLENBQUM1RCxPQUFQLENBQWV1UixZQUFmLEVBQTRCQyxVQUE1QixDQUFQO0FBQWdEO0FBQS96QixHQUFOO0FBQXcwQixDOzs7Ozs7Ozs7OztBQ1YxMkIsaUJBQWlCLG1CQUFPLENBQUMsbUVBQW9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTdDOztBQUVBLE1BQU1DLE1BQU0sR0FBRyxNQUFNO0FBQ2pCLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQSxzRkFBZSxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQUEsc0ZBQWUsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBQSxzRkFBZSxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixFQUVJO0FBQUcsUUFBSSxFQUFDLEVBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFYLENBRkosRUFHSTtBQUFHLFFBQUksRUFBQyxFQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBWCxDQUhKLEVBSUk7QUFBRyxRQUFJLEVBQUMsRUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQVgsQ0FKSixDQURBLEVBT0E7QUFBQSxzRkFBZSxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBUEEsQ0FGSixFQVdJO0FBQUEsc0ZBQWUsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEo7QUFBQTtBQUFBO0FBQUEscURBREo7QUFnQkgsQ0FqQkQ7O0FBbUJlQSxxRUFBZixFOzs7Ozs7Ozs7Ozs7QUNuQkE7QUFBQSxNQUFNQyxLQUFLLHlyRkFBWDs7QUFtQ2VBLG9FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDQTs7SUFDMEJDLEksWUFBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsSTs7OztBQUMxQjs7QUFFQSxNQUFNQyxNQUFNLEdBQUcsQ0FBQ2pULEtBQUQsRUFBUXFDLEdBQVIsS0FBZ0I7QUFDM0IsUUFBTTZRLElBQUksR0FBRyxNQUFiO0FBQ0EsU0FDSTtBQUFBLHNGQUFtQixRQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQSxzRkFBZSxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQUEsc0ZBQW1CLE1BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBLHNGQUFlLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLElBQUQ7QUFBTSxhQUFTLEVBQUVBLElBQWpCO0FBQXVCLFNBQUssRUFBQyxLQUE3QjtBQUFtQyxVQUFNLEVBQUMsS0FBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBQSxzRkFBZSwwQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosRUFJSTtBQUFBLHNGQUFhLFdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKSixDQUZKLENBREosQ0FGSjtBQUFBO0FBQUE7QUFBQSxzREFjSTtBQUFBLHNGQUFlLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWRKLENBREo7QUFrQkgsQ0FwQkQ7O0FBc0JlRCxxRUFBZixFOzs7Ozs7Ozs7Ozs7QUN4QkE7QUFBQSxNQUFNRixLQUFLLG9pSUFBWDs7QUFnRGVBLG9FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTUksT0FBTyxHQUFHLElBQWhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUMsTUFBTSxHQUFHLENBQUM7QUFBQ3ZRO0FBQUQsQ0FBRCxLQUFnQjtBQUMzQixTQUNJO0FBQUEscUtBNEJ3QnNRLE9BNUJ4QixFQTRCZ0RBLE9BNUJoRCxFQWlDd0JBLE9BakN4QixFQWlDZ0RBLE9BakNoRCxFQTRDd0JBLE9BNUN4QixFQXFEd0JBLE9BckR4QixhQUFtQixRQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSSxNQUFDLG9FQUFEO0FBQ0ksV0FBTyxFQUFFQSxPQURiO0FBRUksY0FBVSxFQUFDLGlCQUZmO0FBR0ksZ0JBQVksRUFBRSxHQUhsQjtBQUlJLGtCQUFjLEVBQUU7QUFDWkUsV0FBSyxFQUFFRixPQURLO0FBRVpHLFVBQUksRUFBRTtBQUZNLEtBSnBCO0FBUUkscUJBQWlCLEVBQUMsbUJBUnRCO0FBU0ksU0FBSyxFQUFJO0FBQUNDLFdBQUssRUFBRTtBQUFSLEtBVGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVdLMVEsUUFYTCxDQUZKLEVBZUksTUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZkosRUFnQkksTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhEQW1CSSxNQUFDLG9FQUFEO0FBQ0ksVUFBTSxFQUFDLGlCQURYO0FBRUksU0FBSyxFQUFDLGlCQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFuQko7QUFBQTtBQUFBLGNBNEJ3QnNRLE9BNUJ4QixFQTRCZ0RBLE9BNUJoRCxFQWlDd0JBLE9BakN4QixFQWlDZ0RBLE9BakNoRCxFQTRDd0JBLE9BNUN4QixFQXFEd0JBLE9BckR4QjtBQUFBO0FBQUEsNE5BNEJ3QkEsT0E1QnhCLHdCQTRCZ0RBLE9BNUJoRCw0Q0E0QndCQSxPQTVCeEIsZ0JBNEJnREEsT0E1QmhELG9DQTRCd0JBLE9BNUJ4QixnQkE0QmdEQSxPQTVCaEQsbU5BaUN3QkEsT0FqQ3hCLHdCQWlDZ0RBLE9BakNoRCw0Q0FpQ3dCQSxPQWpDeEIsZ0JBaUNnREEsT0FqQ2hELG9DQWlDd0JBLE9BakN4QixnQkFpQ2dEQSxPQWpDaEQsNkpBNEN3QkEsT0E1Q3hCLHlCQTRDd0JBLE9BNUN4QiwyS0FxRHdCQSxPQXJEeEIseUJBcUR3QkEsT0FyRHhCOztvRkFBQSxFQURKO0FBMkRILENBNUREOztBQThEZUMscUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDekVBO0FBQUE7QUFBQSxNQUFNSSxHQUFHLEdBQUcsS0FBWjtBQUVPLE1BQU1DLE1BQU0sdWlDQUFaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKUDs7QUFFQSxNQUFNQyxNQUFNLEdBQUcsTUFDWDtBQUFBLHNDQUFlLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnMEVBREo7O0FBMkJlQSxxRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBOztJQUMwQkMsSyxZQUFBQSxLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxLOzs7Ozs7QUFFbkIsTUFBTUMsVUFBVSxHQUFHLE1BQU07QUFDNUIsUUFBTUMsTUFBTSxHQUFHLENBQ1g7QUFDSTdJLFNBQUssRUFBRSxHQURYO0FBRUk4SSxTQUFLLEVBQUU7QUFGWCxHQURXLEVBS1g7QUFDSTlJLFNBQUssRUFBRSxRQURYO0FBRUk4SSxTQUFLLEVBQUU7QUFGWCxHQUxXLEVBU1g7QUFDSTlJLFNBQUssRUFBRSxXQURYO0FBRUk4SSxTQUFLLEVBQUU7QUFGWCxHQVRXLEVBYVg7QUFDSTlJLFNBQUssRUFBRSxPQURYO0FBRUk4SSxTQUFLLEVBQUU7QUFGWCxHQWJXLEVBaUJYO0FBQ0k5SSxTQUFLLEVBQUUsVUFEWDtBQUVJOEksU0FBSyxFQUFFO0FBRlgsR0FqQlcsRUFxQlg7QUFDSTlJLFNBQUssRUFBRSxVQURYO0FBRUk4SSxTQUFLLEVBQUU7QUFGWCxHQXJCVyxDQUFmO0FBMkJBLFFBQU07QUFBQSxPQUFDQyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QkMsc0RBQVEsQ0FBQyxNQUFELENBQTFDOztBQUVBLFFBQU1DLFVBQVUsR0FBRyxNQUFLO0FBQ3BCRixnQkFBWSxDQUFDLE1BQUQsQ0FBWjtBQUNILEdBRkQ7O0FBR0EsUUFBTUcsVUFBVSxHQUFHLE1BQUs7QUFDcEJILGdCQUFZLENBQUMsTUFBRCxDQUFaO0FBQ0gsR0FGRDs7QUFJQSxTQUNJO0FBQUEsb0ZBQWUsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUEsb0ZBQWlCLG9CQUFtQkQsU0FBVSxFQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQSxvRkFBcUIsMEJBQXlCQSxTQUFVLEVBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLEtBQUQ7QUFBTyxTQUFLLEVBQUUsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixDQURKLEVBTUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tGLE1BQU0sQ0FBQzVMLEdBQVAsQ0FBVyxDQUFDbU0sSUFBRCxFQUFPQyxLQUFQLEtBQ1I7QUFBSSxrQkFBWUQsSUFBSSxDQUFDTixLQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFJTSxJQUFJLENBQUNwSixLQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxrQkFBWW9KLElBQUksQ0FBQ04sS0FBcEI7QUFBNEIsZUFBVyxFQUFFSSxVQUF6QztBQUFxRCxjQUFVLEVBQUVDLFVBQWpFO0FBQStGLE9BQUcsRUFBSUUsS0FBdEc7QUFBQSxvRkFBdUYsTUFBdkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE4R0QsSUFBSSxDQUFDTixLQUFuSCxDQURKLENBREosQ0FESCxDQURMLENBTko7QUFBQTtBQUFBO0FBQUEsbURBREo7QUFtQkgsQ0F4RE0sQzs7Ozs7Ozs7Ozs7O0FDSFA7QUFBQTtBQUFBLE1BQU1RLEtBQUssR0FBRyxPQUFkO0FBRU8sTUFBTXZCLEtBQUssbXhCQXNCUXVCLEtBdEJSLGlQQXNCUUEsS0F0QlI7O3lGQUFBLENBQVg7Ozs7Ozs7Ozs7Ozs7QUNKUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTUMsV0FBVyxHQUFHQyw2REFBZSxDQUFDLEVBQUQsQ0FBbkMsQzs7Ozs7Ozs7Ozs7O0FDRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFTyxNQUFNQyxTQUFTLEdBQUlDLFlBQUQsSUFBa0I7QUFDdkMsUUFBTUMsS0FBSyxHQUFHQyx5REFBVyxDQUNyQkwsd0RBRHFCLEVBRXJCTSw2REFBZSxDQUFDQyxrREFBRCxDQUZNLENBQXpCO0FBS0EsU0FBT0gsS0FBUDtBQUNILENBUE0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBQ21DOztDQUNEOztDQUlsQzs7QUFDQS9QLGtEQUFNLENBQUNhLE1BQVAsQ0FBY0ssRUFBZCxDQUFpQixrQkFBakIsRUFBcUMsTUFBTWlQLGdEQUFTLENBQUNDLEtBQVYsRUFBM0M7QUFBK0RwUSxrREFBTSxDQUFDYSxNQUFQLENBQWNLLEVBQWQsQ0FBaUIscUJBQWpCLEVBQXdDLE1BQU1pUCxnREFBUyxDQUFDRSxJQUFWLEVBQTlDO0FBQWlFclEsa0RBQU0sQ0FBQ2EsTUFBUCxDQUFjSyxFQUFkLENBQWlCLGtCQUFqQixFQUFxQyxNQUFNaVAsZ0RBQVMsQ0FBQ0UsSUFBVixFQUEzQztBQUVoSTtBQUVBLE1BQU05QixPQUFPLEdBQUcsR0FBaEI7QUFFZStCLHdIQUFTLENBQUNULHFEQUFELENBQVQsQ0FBcUIsTUFBTVUsS0FBTixTQUFvQmxMLCtDQUFwQixDQUF3QjtBQUl4RCxlQUFhOUMsZUFBYixDQUE2QjtBQUFDckgsYUFBRDtBQUFZdVA7QUFBWixHQUE3QixFQUErQztBQUUzQyxXQUFPO0FBQ0hxQyxlQUFTLG9CQUVENVIsU0FBUyxDQUFDcUgsZUFBVixHQUE0QixNQUFNckgsU0FBUyxDQUFDcUgsZUFBVixDQUEwQmtJLEdBQTFCLENBQWxDLEdBQW1FLEVBRmxFO0FBRE4sS0FBUDtBQU9IOztBQUVEek0sUUFBTSxHQUFHO0FBQ0wsVUFBTTtBQUFDOUMsZUFBRDtBQUFZNFIsZUFBWjtBQUF1QmlEO0FBQXZCLFFBQWdDLEtBQUszVSxLQUEzQztBQUNBLFdBQ1EsTUFBQyxvREFBRDtBQUFVLFdBQUssRUFBRTJVLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FHSSxNQUFDLFNBQUQsZUFBZWpELFNBQWY7QUFBQSxrR0FVWXlCLE9BVlosRUFVb0NBLE9BVnBDLEVBaUJZQSxPQWpCWixFQTBCWUEsT0ExQlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFhZ0JBLE9BYmhCLEVBYXdDQSxPQWJ4QyxFQW9CZ0JBLE9BcEJoQixFQTZCZ0JBLE9BN0JoQjtBQUFBO0FBQUEsMFhBYWdCQSxPQWJoQix3QkFhd0NBLE9BYnhDLGlDQWFnQkEsT0FiaEIsZ0JBYXdDQSxPQWJ4Qyx5QkFhZ0JBLE9BYmhCLGdCQWF3Q0EsT0FieEMsMEdBb0JnQkEsT0FwQmhCLHlCQW9CZ0JBLE9BcEJoQiwyS0E2QmdCQSxPQTdCaEIseUJBNkJnQkEsT0E3QmhCOztzRUFBQSxFQURSO0FBcUNIOztBQXREdUQsQ0FBN0MsQ0FBZixFOzs7Ozs7Ozs7Ozs7QUNuQkE7QUFBQSxNQUFNRCxJQUFJLEdBQUcsTUFBYjtBQUNJLE1BQU1ILEtBQUssa3JWQXFETUcsSUFyRE4sb01BcURNQSxJQXJETjs7eUVBQUEsQ0FBWDs7QUE2TVdILG9FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvTUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsZ0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2FwcCcpXG4iLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF91cmw9cmVxdWlyZShcInVybFwiKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvdXRpbHNcIik7dmFyIF9yb3V0ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9yb3V0ZXJcIikpO3ZhciBfcm91dGVyMj1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIik7ZnVuY3Rpb24gaXNMb2NhbChocmVmKXt2YXIgdXJsPSgwLF91cmwucGFyc2UpKGhyZWYsZmFsc2UsdHJ1ZSk7dmFyIG9yaWdpbj0oMCxfdXJsLnBhcnNlKSgoMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCksZmFsc2UsdHJ1ZSk7cmV0dXJuIXVybC5ob3N0fHx1cmwucHJvdG9jb2w9PT1vcmlnaW4ucHJvdG9jb2wmJnVybC5ob3N0PT09b3JpZ2luLmhvc3Q7fWZ1bmN0aW9uIG1lbW9pemVkRm9ybWF0VXJsKGZvcm1hdEZ1bmMpe3ZhciBsYXN0SHJlZj1udWxsO3ZhciBsYXN0QXM9bnVsbDt2YXIgbGFzdFJlc3VsdD1udWxsO3JldHVybihocmVmLGFzKT0+e2lmKGxhc3RSZXN1bHQmJmhyZWY9PT1sYXN0SHJlZiYmYXM9PT1sYXN0QXMpe3JldHVybiBsYXN0UmVzdWx0O312YXIgcmVzdWx0PWZvcm1hdEZ1bmMoaHJlZixhcyk7bGFzdEhyZWY9aHJlZjtsYXN0QXM9YXM7bGFzdFJlc3VsdD1yZXN1bHQ7cmV0dXJuIHJlc3VsdDt9O31mdW5jdGlvbiBmb3JtYXRVcmwodXJsKXtyZXR1cm4gdXJsJiZ0eXBlb2YgdXJsPT09J29iamVjdCc/KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh1cmwpOnVybDt9dmFyIG9ic2VydmVyO3ZhciBsaXN0ZW5lcnM9bmV3IE1hcCgpO3ZhciBJbnRlcnNlY3Rpb25PYnNlcnZlcj10eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCc/d2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyOm51bGw7dmFyIHByZWZldGNoZWQ9e307ZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKXsvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuaWYob2JzZXJ2ZXIpe3JldHVybiBvYnNlcnZlcjt9Ly8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG5pZighSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpe3JldHVybiB1bmRlZmluZWQ7fXJldHVybiBvYnNlcnZlcj1uZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcz0+e2VudHJpZXMuZm9yRWFjaChlbnRyeT0+e2lmKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpe3JldHVybjt9dmFyIGNiPWxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KTtpZihlbnRyeS5pc0ludGVyc2VjdGluZ3x8ZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8+MCl7b2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7bGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpO2NiKCk7fX0pO30se3Jvb3RNYXJnaW46JzIwMHB4J30pO312YXIgbGlzdGVuVG9JbnRlcnNlY3Rpb25zPShlbCxjYik9Pnt2YXIgb2JzZXJ2ZXI9Z2V0T2JzZXJ2ZXIoKTtpZighb2JzZXJ2ZXIpe3JldHVybigpPT57fTt9b2JzZXJ2ZXIub2JzZXJ2ZShlbCk7bGlzdGVuZXJzLnNldChlbCxjYik7cmV0dXJuKCk9Pnt0cnl7b2JzZXJ2ZXIudW5vYnNlcnZlKGVsKTt9Y2F0Y2goZXJyKXtjb25zb2xlLmVycm9yKGVycik7fWxpc3RlbmVycy5kZWxldGUoZWwpO307fTtjbGFzcyBMaW5rIGV4dGVuZHMgX3JlYWN0LkNvbXBvbmVudHtjb25zdHJ1Y3Rvcihwcm9wcyl7c3VwZXIocHJvcHMpO3RoaXMucD12b2lkIDA7dGhpcy5jbGVhblVwTGlzdGVuZXJzPSgpPT57fTt0aGlzLmZvcm1hdFVybHM9bWVtb2l6ZWRGb3JtYXRVcmwoKGhyZWYsYXNIcmVmKT0+e3JldHVybntocmVmOigwLF9yb3V0ZXIyLmFkZEJhc2VQYXRoKShmb3JtYXRVcmwoaHJlZikpLGFzOmFzSHJlZj8oMCxfcm91dGVyMi5hZGRCYXNlUGF0aCkoZm9ybWF0VXJsKGFzSHJlZikpOmFzSHJlZn07fSk7dGhpcy5saW5rQ2xpY2tlZD1lPT57dmFye25vZGVOYW1lLHRhcmdldH09ZS5jdXJyZW50VGFyZ2V0O2lmKG5vZGVOYW1lPT09J0EnJiYodGFyZ2V0JiZ0YXJnZXQhPT0nX3NlbGYnfHxlLm1ldGFLZXl8fGUuY3RybEtleXx8ZS5zaGlmdEtleXx8ZS5uYXRpdmVFdmVudCYmZS5uYXRpdmVFdmVudC53aGljaD09PTIpKXsvLyBpZ25vcmUgY2xpY2sgZm9yIG5ldyB0YWIgLyBuZXcgd2luZG93IGJlaGF2aW9yXG5yZXR1cm47fXZhcntocmVmLGFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpO2lmKCFpc0xvY2FsKGhyZWYpKXsvLyBpZ25vcmUgY2xpY2sgaWYgaXQncyBvdXRzaWRlIG91ciBzY29wZSAoZS5nLiBodHRwczovL2dvb2dsZS5jb20pXG5yZXR1cm47fXZhcntwYXRobmFtZX09d2luZG93LmxvY2F0aW9uO2hyZWY9KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxocmVmKTthcz1hcz8oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLGFzKTpocmVmO2UucHJldmVudERlZmF1bHQoKTsvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbnZhcntzY3JvbGx9PXRoaXMucHJvcHM7aWYoc2Nyb2xsPT1udWxsKXtzY3JvbGw9YXMuaW5kZXhPZignIycpPDA7fS8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuX3JvdXRlci5kZWZhdWx0W3RoaXMucHJvcHMucmVwbGFjZT8ncmVwbGFjZSc6J3B1c2gnXShocmVmLGFzLHtzaGFsbG93OnRoaXMucHJvcHMuc2hhbGxvd30pLnRoZW4oc3VjY2Vzcz0+e2lmKCFzdWNjZXNzKXJldHVybjtpZihzY3JvbGwpe3dpbmRvdy5zY3JvbGxUbygwLDApO2RvY3VtZW50LmJvZHkuZm9jdXMoKTt9fSk7fTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYocHJvcHMucHJlZmV0Y2gpe2NvbnNvbGUud2FybignTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7fX10aGlzLnA9cHJvcHMucHJlZmV0Y2ghPT1mYWxzZTt9Y29tcG9uZW50V2lsbFVubW91bnQoKXt0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKTt9Z2V0UGF0aHMoKXt2YXJ7cGF0aG5hbWV9PXdpbmRvdy5sb2NhdGlvbjt2YXJ7aHJlZjpwYXJzZWRIcmVmLGFzOnBhcnNlZEFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpO3ZhciByZXNvbHZlZEhyZWY9KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxwYXJzZWRIcmVmKTtyZXR1cm5bcmVzb2x2ZWRIcmVmLHBhcnNlZEFzPygwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUscGFyc2VkQXMpOnJlc29sdmVkSHJlZl07fWhhbmRsZVJlZihyZWYpe2lmKHRoaXMucCYmSW50ZXJzZWN0aW9uT2JzZXJ2ZXImJnJlZiYmcmVmLnRhZ05hbWUpe3RoaXMuY2xlYW5VcExpc3RlbmVycygpO3ZhciBpc1ByZWZldGNoZWQ9cHJlZmV0Y2hlZFt0aGlzLmdldFBhdGhzKCkuam9pbigvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuJyUnKV07aWYoIWlzUHJlZmV0Y2hlZCl7dGhpcy5jbGVhblVwTGlzdGVuZXJzPWxpc3RlblRvSW50ZXJzZWN0aW9ucyhyZWYsKCk9Pnt0aGlzLnByZWZldGNoKCk7fSk7fX19Ly8gVGhlIGZ1bmN0aW9uIGlzIG1lbW9pemVkIHNvIHRoYXQgbm8gZXh0cmEgbGlmZWN5Y2xlcyBhcmUgbmVlZGVkXG4vLyBhcyBwZXIgaHR0cHM6Ly9yZWFjdGpzLm9yZy9ibG9nLzIwMTgvMDYvMDcveW91LXByb2JhYmx5LWRvbnQtbmVlZC1kZXJpdmVkLXN0YXRlLmh0bWxcbnByZWZldGNoKG9wdGlvbnMpe2lmKCF0aGlzLnB8fHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJylyZXR1cm47Ly8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxudmFyIHBhdGhzPXRoaXMuZ2V0UGF0aHMoKTsvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4vLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3Rcbi8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuX3JvdXRlci5kZWZhdWx0LnByZWZldGNoKHBhdGhzWy8qIGhyZWYgKi8wXSxwYXRoc1svKiBhc1BhdGggKi8xXSxvcHRpb25zKS5jYXRjaChlcnI9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Ly8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xudGhyb3cgZXJyO319KTtwcmVmZXRjaGVkW3BhdGhzLmpvaW4oLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiclJyldPXRydWU7fXJlbmRlcigpe3ZhcntjaGlsZHJlbn09dGhpcy5wcm9wczt2YXJ7aHJlZixhc309dGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZix0aGlzLnByb3BzLmFzKTsvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbmlmKHR5cGVvZiBjaGlsZHJlbj09PSdzdHJpbmcnKXtjaGlsZHJlbj0vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIixudWxsLGNoaWxkcmVuKTt9Ly8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG52YXIgY2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO3ZhciBwcm9wcz17cmVmOmVsPT57dGhpcy5oYW5kbGVSZWYoZWwpO2lmKGNoaWxkJiZ0eXBlb2YgY2hpbGQ9PT0nb2JqZWN0JyYmY2hpbGQucmVmKXtpZih0eXBlb2YgY2hpbGQucmVmPT09J2Z1bmN0aW9uJyljaGlsZC5yZWYoZWwpO2Vsc2UgaWYodHlwZW9mIGNoaWxkLnJlZj09PSdvYmplY3QnKXtjaGlsZC5yZWYuY3VycmVudD1lbDt9fX0sb25Nb3VzZUVudGVyOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcj09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKTt9dGhpcy5wcmVmZXRjaCh7cHJpb3JpdHk6dHJ1ZX0pO30sb25DbGljazplPT57aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25DbGljayhlKTt9aWYoIWUuZGVmYXVsdFByZXZlbnRlZCl7dGhpcy5saW5rQ2xpY2tlZChlKTt9fX07Ly8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4vLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbmlmKHRoaXMucHJvcHMucGFzc0hyZWZ8fGNoaWxkLnR5cGU9PT0nYScmJiEoJ2hyZWYnaW4gY2hpbGQucHJvcHMpKXtwcm9wcy5ocmVmPWFzfHxocmVmO30vLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4vLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkuXG5pZihwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKXt2YXIgcmV3cml0ZVVybEZvck5leHRFeHBvcnQ9cmVxdWlyZSgnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JykucmV3cml0ZVVybEZvck5leHRFeHBvcnQ7aWYocHJvcHMuaHJlZiYmdHlwZW9mIF9fTkVYVF9EQVRBX18hPT0ndW5kZWZpbmVkJyYmX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0KXtwcm9wcy5ocmVmPXJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHByb3BzLmhyZWYpO319cmV0dXJuIF9yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCxwcm9wcyk7fX1pZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe3ZhciB3YXJuPSgwLF91dGlscy5leGVjT25jZSkoY29uc29sZS5lcnJvcik7Ly8gVGhpcyBtb2R1bGUgZ2V0cyByZW1vdmVkIGJ5IHdlYnBhY2suSWdub3JlUGx1Z2luXG52YXIgUHJvcFR5cGVzPXJlcXVpcmUoJ3Byb3AtdHlwZXMnKTt2YXIgZXhhY3Q9cmVxdWlyZSgncHJvcC10eXBlcy1leGFjdCcpOy8vIEB0cy1pZ25vcmUgdGhlIHByb3BlcnR5IGlzIHN1cHBvcnRlZCwgd2hlbiBkZWNsYXJpbmcgaXQgb24gdGhlIGNsYXNzIGl0IG91dHB1dHMgYW4gZXh0cmEgYml0IG9mIGNvZGUgd2hpY2ggaXMgbm90IG5lZWRlZC5cbkxpbmsucHJvcFR5cGVzPWV4YWN0KHtocmVmOlByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsUHJvcFR5cGVzLm9iamVjdF0pLmlzUmVxdWlyZWQsYXM6UHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZyxQcm9wVHlwZXMub2JqZWN0XSkscHJlZmV0Y2g6UHJvcFR5cGVzLmJvb2wscmVwbGFjZTpQcm9wVHlwZXMuYm9vbCxzaGFsbG93OlByb3BUeXBlcy5ib29sLHBhc3NIcmVmOlByb3BUeXBlcy5ib29sLHNjcm9sbDpQcm9wVHlwZXMuYm9vbCxjaGlsZHJlbjpQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwocHJvcHMscHJvcE5hbWUpPT57dmFyIHZhbHVlPXByb3BzW3Byb3BOYW1lXTtpZih0eXBlb2YgdmFsdWU9PT0nc3RyaW5nJyl7d2FybihcIldhcm5pbmc6IFlvdSdyZSB1c2luZyBhIHN0cmluZyBkaXJlY3RseSBpbnNpZGUgPExpbms+LiBUaGlzIHVzYWdlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFBsZWFzZSBhZGQgYW4gPGE+IHRhZyBhcyBjaGlsZCBvZiA8TGluaz5cIik7fXJldHVybiBudWxsO31dKS5pc1JlcXVpcmVkfSk7fXZhciBfZGVmYXVsdD1MaW5rO2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VSb3V0ZXI9dXNlUm91dGVyO2V4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlPW1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtleHBvcnRzLmNyZWF0ZVJvdXRlcj1leHBvcnRzLndpdGhSb3V0ZXI9ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcjI9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtleHBvcnRzLlJvdXRlcj1fcm91dGVyMi5kZWZhdWx0O2V4cG9ydHMuTmV4dFJvdXRlcj1fcm91dGVyMi5OZXh0Um91dGVyO3ZhciBfcm91dGVyQ29udGV4dD1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0XCIpO3ZhciBfd2l0aFJvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dpdGgtcm91dGVyXCIpKTtleHBvcnRzLndpdGhSb3V0ZXI9X3dpdGhSb3V0ZXIuZGVmYXVsdDsvKiBnbG9iYWwgd2luZG93ICovdmFyIHNpbmdsZXRvblJvdXRlcj17cm91dGVyOm51bGwsLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbnJlYWR5Q2FsbGJhY2tzOltdLHJlYWR5KGNiKXtpZih0aGlzLnJvdXRlcilyZXR1cm4gY2IoKTtpZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpe3RoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7fX19Oy8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbnZhciB1cmxQcm9wZXJ0eUZpZWxkcz1bJ3BhdGhuYW1lJywncm91dGUnLCdxdWVyeScsJ2FzUGF0aCcsJ2NvbXBvbmVudHMnLCdpc0ZhbGxiYWNrJywnYmFzZVBhdGgnXTt2YXIgcm91dGVyRXZlbnRzPVsncm91dGVDaGFuZ2VTdGFydCcsJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywncm91dGVDaGFuZ2VFcnJvcicsJ2hhc2hDaGFuZ2VTdGFydCcsJ2hhc2hDaGFuZ2VDb21wbGV0ZSddO3ZhciBjb3JlTWV0aG9kRmllbGRzPVsncHVzaCcsJ3JlcGxhY2UnLCdyZWxvYWQnLCdiYWNrJywncHJlZmV0Y2gnLCdiZWZvcmVQb3BTdGF0ZSddOy8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsJ2V2ZW50cycse2dldCgpe3JldHVybiBfcm91dGVyMi5kZWZhdWx0LmV2ZW50czt9fSk7dXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4vLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbi8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsZmllbGQse2dldCgpe3ZhciByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF07fX0pO30pO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG47c2luZ2xldG9uUm91dGVyW2ZpZWxkXT1mdW5jdGlvbigpe3ZhciByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJndW1lbnRzKTt9O30pO3JvdXRlckV2ZW50cy5mb3JFYWNoKGV2ZW50PT57c2luZ2xldG9uUm91dGVyLnJlYWR5KCgpPT57X3JvdXRlcjIuZGVmYXVsdC5ldmVudHMub24oZXZlbnQsZnVuY3Rpb24oKXt2YXIgZXZlbnRGaWVsZD1cIm9uXCIrZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrZXZlbnQuc3Vic3RyaW5nKDEpO3ZhciBfc2luZ2xldG9uUm91dGVyPXNpbmdsZXRvblJvdXRlcjtpZihfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKXt0cnl7X3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmd1bWVudHMpO31jYXRjaChlcnIpey8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG5jb25zb2xlLmVycm9yKFwiRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6IFwiK2V2ZW50RmllbGQpOy8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG5jb25zb2xlLmVycm9yKGVyci5tZXNzYWdlK1wiXFxuXCIrZXJyLnN0YWNrKTt9fX0pO30pO30pO2Z1bmN0aW9uIGdldFJvdXRlcigpe2lmKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKXt2YXIgbWVzc2FnZT0nTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicrJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJzt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fXJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO30vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbnZhciBfZGVmYXVsdD1zaW5nbGV0b25Sb3V0ZXI7Ly8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtmdW5jdGlvbiB1c2VSb3V0ZXIoKXtyZXR1cm4gX3JlYWN0LmRlZmF1bHQudXNlQ29udGV4dChfcm91dGVyQ29udGV4dC5Sb3V0ZXJDb250ZXh0KTt9Ly8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbnZhciBjcmVhdGVSb3V0ZXI9ZnVuY3Rpb24gY3JlYXRlUm91dGVyKCl7Zm9yKHZhciBfbGVuPWFyZ3VtZW50cy5sZW5ndGgsYXJncz1uZXcgQXJyYXkoX2xlbiksX2tleT0wO19rZXk8X2xlbjtfa2V5Kyspe2FyZ3NbX2tleV09YXJndW1lbnRzW19rZXldO31zaW5nbGV0b25Sb3V0ZXIucm91dGVyPW5ldyBfcm91dGVyMi5kZWZhdWx0KC4uLmFyZ3MpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKGNiPT5jYigpKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3M9W107cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fTsvLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnRzLmNyZWF0ZVJvdXRlcj1jcmVhdGVSb3V0ZXI7ZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcil7dmFyIF9yb3V0ZXI9cm91dGVyO3ZhciBpbnN0YW5jZT17fTtmb3IodmFyIHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtpZih0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV09PT0nb2JqZWN0Jyl7aW5zdGFuY2VbcHJvcGVydHldPU9iamVjdC5hc3NpZ24oe30sX3JvdXRlcltwcm9wZXJ0eV0pOy8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG5jb250aW51ZTt9aW5zdGFuY2VbcHJvcGVydHldPV9yb3V0ZXJbcHJvcGVydHldO30vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5pbnN0YW5jZS5ldmVudHM9X3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57aW5zdGFuY2VbZmllbGRdPWZ1bmN0aW9uKCl7cmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3VtZW50cyk7fTt9KTtyZXR1cm4gaW5zdGFuY2U7fSIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9d2l0aFJvdXRlcjt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7ZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCl7ZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpe3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LE9iamVjdC5hc3NpZ24oe3JvdXRlcjooMCxfcm91dGVyLnVzZVJvdXRlcikoKX0scHJvcHMpKTt9V2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcy8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbjtXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3ZhciBuYW1lPUNvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lfHxDb21wb3NlZENvbXBvbmVudC5uYW1lfHwnVW5rbm93bic7V2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWU9XCJ3aXRoUm91dGVyKFwiK25hbWUrXCIpXCI7fXJldHVybiBXaXRoUm91dGVyV3JhcHBlcjt9IiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIG1pdHQoKSB7XG4gICAgY29uc3QgYWxsID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBvbih0eXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICA7XG4gICAgICAgICAgICAoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcik7XG4gICAgICAgIH0sXG4gICAgICAgIG9mZih0eXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgICAgICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZW1pdCh0eXBlLCAuLi5ldnRzKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICAoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIoLi4uZXZ0cyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9O1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gbWl0dDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdXJsXzEgPSByZXF1aXJlKFwidXJsXCIpO1xuY29uc3QgbWl0dF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jb25zdCBpc19keW5hbWljXzEgPSByZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO1xuY29uc3Qgcm91dGVfbWF0Y2hlcl8xID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtbWF0Y2hlclwiKTtcbmNvbnN0IHJvdXRlX3JlZ2V4XzEgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1yZWdleFwiKTtcbmNvbnN0IGJhc2VQYXRoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCB8fCAnJztcbmZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSAhPT0gMCA/IGJhc2VQYXRoICsgcGF0aCA6IHBhdGg7XG59XG5leHBvcnRzLmFkZEJhc2VQYXRoID0gYWRkQmFzZVBhdGg7XG5mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgPT09IDBcbiAgICAgICAgPyBwYXRoLnN1YnN0cihiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xuICAgICAgICA6IHBhdGg7XG59XG5leHBvcnRzLmRlbEJhc2VQYXRoID0gZGVsQmFzZVBhdGg7XG5mdW5jdGlvbiB0b1JvdXRlKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJztcbn1cbmNvbnN0IHByZXBhcmVSb3V0ZSA9IChwYXRoKSA9PiB0b1JvdXRlKCFwYXRoIHx8IHBhdGggPT09ICcvJyA/ICcvaW5kZXgnIDogcGF0aCk7XG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgaXNTZXJ2ZXJSZW5kZXIsIGNiKSB7XG4gICAgbGV0IGF0dGVtcHRzID0gaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMTtcbiAgICBmdW5jdGlvbiBnZXRSZXNwb25zZSgpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKFxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBfX05FWFRfREFUQV9fXG4gICAgICAgICAgICBgL19uZXh0L2RhdGEvJHtfX05FWFRfREFUQV9fLmJ1aWxkSWR9JHtkZWxCYXNlUGF0aChwYXRobmFtZSl9Lmpzb25gKSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9KSwge1xuICAgICAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgICAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgICAgICAvLyA+IG9wdGlvbi5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgICAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgICAgICBpZiAoLS1hdHRlbXB0cyA+IDAgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldFJlc3BvbnNlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICByZXR1cm4gY2IgPyBjYihkYXRhKSA6IGRhdGE7XG4gICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgICAgIC8vIGxvb3AuXG4gICAgICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGVyci5jb2RlID0gJ1BBR0VfTE9BRF9FUlJPUic7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xufVxuY2xhc3MgUm91dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihwYXRobmFtZSwgcXVlcnksIGFzLCB7IGluaXRpYWxQcm9wcywgcGFnZUxvYWRlciwgQXBwLCB3cmFwQXBwLCBDb21wb25lbnQsIGVyciwgc3Vic2NyaXB0aW9uLCBpc0ZhbGxiYWNrLCB9KSB7XG4gICAgICAgIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gICAgICAgIHRoaXMuc2RjID0ge307XG4gICAgICAgIHRoaXMub25Qb3BTdGF0ZSA9IChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWUuc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgICAgICAgICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgICAgICAgICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgICAgICAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgICAgICAgICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgICAgICAgICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAgICAgICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSwgdXRpbHNfMS5nZXRVUkwoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgICAgICAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICAgICAgICAgIGlmIChlLnN0YXRlICYmXG4gICAgICAgICAgICAgICAgdGhpcy5pc1NzciAmJlxuICAgICAgICAgICAgICAgIGUuc3RhdGUuYXMgPT09IHRoaXMuYXNQYXRoICYmXG4gICAgICAgICAgICAgICAgdXJsXzEucGFyc2UoZS5zdGF0ZS51cmwpLnBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgICAgICAgICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICAgICAgICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhlLnN0YXRlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gZS5zdGF0ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB1cmwgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBhcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdgcG9wc3RhdGVgIGV2ZW50IHRyaWdnZXJlZCBidXQgYGV2ZW50LnN0YXRlYCBkaWQgbm90IGhhdmUgYHVybGAgb3IgYGFzYCBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvcG9wc3RhdGUtc3RhdGUtZW1wdHknKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlcGxhY2UodXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2dldFN0YXRpY0RhdGEgPSAoYXNQYXRoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZSh1cmxfMS5wYXJzZShhc1BhdGgpLnBhdGhuYW1lKTtcbiAgICAgICAgICAgIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW3BhdGhuYW1lXVxuICAgICAgICAgICAgICAgID8gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW3BhdGhuYW1lXSlcbiAgICAgICAgICAgICAgICA6IGZldGNoTmV4dERhdGEocGF0aG5hbWUsIG51bGwsIHRoaXMuaXNTc3IsIGRhdGEgPT4gKHRoaXMuc2RjW3BhdGhuYW1lXSA9IGRhdGEpKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fZ2V0U2VydmVyRGF0YSA9IChhc1BhdGgpID0+IHtcbiAgICAgICAgICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdXJsXzEucGFyc2UoYXNQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgICAgIHJldHVybiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgdGhpcy5pc1Nzcik7XG4gICAgICAgIH07XG4gICAgICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgICAgICB0aGlzLnJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSk7XG4gICAgICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSB7fTtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgICAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgICAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHsgQ29tcG9uZW50OiBBcHAgfTtcbiAgICAgICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAgICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICAgICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzO1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAgICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICAgICAgdGhpcy5hc1BhdGggPVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgICAgICAgaXNfZHluYW1pY18xLmlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzO1xuICAgICAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGg7XG4gICAgICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwO1xuICAgICAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgICAgIHRoaXMuaXNTc3IgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrO1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAgICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAgICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSwgYXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBAZGVwcmVjYXRlZCBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBldmVuIHRob3VnaCBpdCdzIGEgcHJpdmF0ZSBtZXRob2QuXG4gICAgc3RhdGljIF9yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgICAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnQ7XG4gICAgICAgICAgICByZXR1cm4gcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB1cmw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlKHJvdXRlLCBtb2QpIHtcbiAgICAgICAgY29uc3QgQ29tcG9uZW50ID0gbW9kLmRlZmF1bHQgfHwgbW9kO1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXTtcbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCB1cGRhdGUgdW5hdmFpbGFibGUgcm91dGU6ICR7cm91dGV9YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZGF0YSksIHsgQ29tcG9uZW50LCBfX05fU1NHOiBtb2QuX19OX1NTRywgX19OX1NTUDogbW9kLl9fTl9TU1AgfSk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSBuZXdEYXRhO1xuICAgICAgICAvLyBwYWdlcy9fYXBwLmpzIHVwZGF0ZWRcbiAgICAgICAgaWYgKHJvdXRlID09PSAnL19hcHAnKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyb3V0ZSA9PT0gdGhpcy5yb3V0ZSkge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnkobmV3RGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVsb2FkKCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgICAqL1xuICAgIGJhY2soKSB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICAgKi9cbiAgICBwdXNoKHVybCwgYXMgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgICAqL1xuICAgIHJlcGxhY2UodXJsLCBhcyA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGNoYW5nZShtZXRob2QsIF91cmwsIF9hcywgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgICAgICAgICAgaWYgKHV0aWxzXzEuU1QpIHtcbiAgICAgICAgICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gICAgICAgICAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgICAgICAgICAgbGV0IHVybCA9IHR5cGVvZiBfdXJsID09PSAnb2JqZWN0JyA/IHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oX3VybCkgOiBfdXJsO1xuICAgICAgICAgICAgbGV0IGFzID0gdHlwZW9mIF9hcyA9PT0gJ29iamVjdCcgPyB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKF9hcykgOiBfYXM7XG4gICAgICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aCh1cmwpO1xuICAgICAgICAgICAgYXMgPSBhZGRCYXNlUGF0aChhcyk7XG4gICAgICAgICAgICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gICAgICAgICAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkgZm9yIHRoZSBTU1IgcGFnZS5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAgICAgICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnQ7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgICAgICAgICAgIGlmIChfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgYXMgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChhcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQoYXMpO1xuICAgICAgICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbiAgICAgICAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgICAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgICAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGFzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGFzKTtcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5LCBwcm90b2NvbCB9ID0gdXJsXzEucGFyc2UodXJsLCB0cnVlKTtcbiAgICAgICAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgICAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgICAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgICAgICAgIGlmICghdGhpcy51cmxJc05ldyhhcykpIHtcbiAgICAgICAgICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSk7XG4gICAgICAgICAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9ucztcbiAgICAgICAgICAgIGlmIChpc19keW5hbWljXzEuaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogYXNQYXRobmFtZSB9ID0gdXJsXzEucGFyc2UoYXMpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSByb3V0ZV9yZWdleF8xLmdldFJvdXRlUmVnZXgocm91dGUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByb3V0ZV9tYXRjaGVyXzEuZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO1xuICAgICAgICAgICAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihwYXJhbSA9PiAhcXVlcnlbcGFyYW1dKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QobmV3IEVycm9yKGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2ApKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpO1xuICAgICAgICAgICAgLy8gSWYgc2hhbGxvdyBpcyB0cnVlIGFuZCB0aGUgcm91dGUgZXhpc3RzIGluIHRoZSByb3V0ZXIgY2FjaGUgd2UgcmV1c2UgdGhlIHByZXZpb3VzIHJlc3VsdFxuICAgICAgICAgICAgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cpLnRoZW4ocm91dGVJbmZvID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGVycm9yIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXBwQ29tcCA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQ7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFyb3V0ZUluZm8uQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlSW5mbyk7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBhcyk7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9LCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgdXRpbHNfMS5nZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oe1xuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBhcyxcbiAgICAgICAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAgICAgJycsIGFzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICAvLyBJZiB0aGVyZSBpcyBhIHNoYWxsb3cgcm91dGUgdHJhbnNpdGlvbiBwb3NzaWJsZVxuICAgICAgICAvLyBJZiB0aGUgcm91dGUgaXMgYWxyZWFkeSByZW5kZXJlZCBvbiB0aGUgc2NyZWVuLlxuICAgICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY2FjaGVkUm91dGVJbmZvKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoYW5kbGVFcnJvciA9IChlcnIsIGxvYWRFcnJvckZhaWwpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyLmNvZGUgPT09ICdQQUdFX0xPQURfRVJST1InIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgICAgICAgICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAgICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgICAgICAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG4gICAgICAgICAgICAgICAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgICAgICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgICAgICAgICAgICAgICAgLy8gU28sIHdlIG5lZWQgdG8gbWFyayBpdCBhcyBhIGNhbmNlbGxlZCBlcnJvciBhbmQgc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICAgICAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50IH0gPSByZXM7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IHsgQ29tcG9uZW50LCBlcnIgfTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihwcm9wcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGdpcEVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gaGFuZGxlRXJyb3IoZXJyLCB0cnVlKSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FjaGVkUm91dGVJbmZvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoY2FjaGVkUm91dGVJbmZvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4ocmVzID0+IHJlc29sdmUoe1xuICAgICAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICAgIH0pLCByZWplY3QpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJvdXRlSW5mbykgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dldERhdGEoKCkgPT4gX19OX1NTR1xuICAgICAgICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShhcylcbiAgICAgICAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGFzKVxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgXG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgICAgICB9KSkudGhlbihwcm9wcyA9PiB7XG4gICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgICAgICByZXR1cm4gcm91dGVJbmZvO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goaGFuZGxlRXJyb3IpO1xuICAgIH1cbiAgICBzZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIGRhdGEpIHtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgIHRoaXMubm90aWZ5KGRhdGEpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAgICovXG4gICAgYmVmb3JlUG9wU3RhdGUoY2IpIHtcbiAgICAgICAgdGhpcy5fYnBzID0gY2I7XG4gICAgfVxuICAgIG9ubHlBSGFzaENoYW5nZShhcykge1xuICAgICAgICBpZiAoIXRoaXMuYXNQYXRoKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7XG4gICAgICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgICAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgICAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoO1xuICAgIH1cbiAgICBzY3JvbGxUb0hhc2goYXMpIHtcbiAgICAgICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICAgICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICAgICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO1xuICAgICAgICBpZiAoaWRFbCkge1xuICAgICAgICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgICAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICAgICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF07XG4gICAgICAgIGlmIChuYW1lRWwpIHtcbiAgICAgICAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVybElzTmV3KGFzUGF0aCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAgICovXG4gICAgcHJlZmV0Y2godXJsLCBhc1BhdGggPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSwgcHJvdG9jb2wgfSA9IHVybF8xLnBhcnNlKHVybCk7XG4gICAgICAgICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm91dGUgPSBkZWxCYXNlUGF0aCh0b1JvdXRlKHBhdGhuYW1lKSk7XG4gICAgICAgICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YSh1cmwsIGRlbEJhc2VQYXRoKGFzUGF0aCkpLFxuICAgICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICAgICAgICAgIF0pLnRoZW4oKCkgPT4gcmVzb2x2ZSgpLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGUpIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgcm91dGUgPSBkZWxCYXNlUGF0aChyb3V0ZSk7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7XG4gICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgKTtcbiAgICAgICAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnRSZXN1bHQ7XG4gICAgfVxuICAgIF9nZXREYXRhKGZuKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jbGMgPSBjYW5jZWw7XG4gICAgICAgIHJldHVybiBmbigpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKTtcbiAgICAgICAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eCkge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107XG4gICAgICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCk7XG4gICAgICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZTtcbiAgICAgICAgcmV0dXJuIHV0aWxzXzEubG9hZEdldEluaXRpYWxQcm9wcyhBcHAsIHtcbiAgICAgICAgICAgIEFwcFRyZWUsXG4gICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICAgICAgICBjdHgsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhYm9ydENvbXBvbmVudExvYWQoYXMpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICAgICAgICBjb25zdCBlID0gbmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKTtcbiAgICAgICAgICAgIGUuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGUsIGFzKTtcbiAgICAgICAgICAgIHRoaXMuY2xjKCk7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbm90aWZ5KGRhdGEpIHtcbiAgICAgICAgdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gUm91dGVyO1xuUm91dGVyLmV2ZW50cyA9IG1pdHRfMS5kZWZhdWx0KCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpLztcbmZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlKSB7XG4gICAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSk7XG59XG5leHBvcnRzLmlzRHluYW1pY1JvdXRlID0gaXNEeW5hbWljUm91dGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KSB7XG4gICAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4O1xuICAgIHJldHVybiAocGF0aG5hbWUpID0+IHtcbiAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZWNvZGUgPSAocGFyYW0pID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoXykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcignZmFpbGVkIHRvIGRlY29kZSBwYXJhbScpO1xuICAgICAgICAgICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcGFyYW1zID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdO1xuICAgICAgICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdO1xuICAgICAgICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICAgICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKGVudHJ5ID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogZGVjb2RlKG0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICB9O1xufVxuZXhwb3J0cy5nZXRSb3V0ZU1hdGNoZXIgPSBnZXRSb3V0ZU1hdGNoZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpO1xufVxuZnVuY3Rpb24gZ2V0Um91dGVSZWdleChub3JtYWxpemVkUm91dGUpIHtcbiAgICAvLyBFc2NhcGUgYWxsIGNoYXJhY3RlcnMgdGhhdCBjb3VsZCBiZSBjb25zaWRlcmVkIFJlZ0V4XG4gICAgY29uc3QgZXNjYXBlZFJvdXRlID0gZXNjYXBlUmVnZXgobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKTtcbiAgICBjb25zdCBncm91cHMgPSB7fTtcbiAgICBsZXQgZ3JvdXBJbmRleCA9IDE7XG4gICAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZywgKF8sICQxKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSk7XG4gICAgICAgIGdyb3Vwc1skMVxuICAgICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgICAgXSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdDogaXNDYXRjaEFsbCB9O1xuICAgICAgICByZXR1cm4gaXNDYXRjaEFsbCA/ICcvKC4rPyknIDogJy8oW14vXSs/KSc7XG4gICAgfSk7XG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlO1xuICAgIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAgIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZywgKF8sICQxKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpO1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gJDFcbiAgICAgICAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXlxcLnszfS8sICcnKTtcbiAgICAgICAgICAgIHJldHVybiBpc0NhdGNoQWxsXG4gICAgICAgICAgICAgICAgPyBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+Lis/KWBcbiAgICAgICAgICAgICAgICA6IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT5bXi9dKz8pYDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHsgcmU6IG5ldyBSZWdFeHAoJ14nICsgcGFyYW1ldGVyaXplZFJvdXRlICsgJyg/Oi8pPyQnLCAnaScpLCBncm91cHMgfSwgKG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlXG4gICAgICAgID8ge1xuICAgICAgICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgICAgICB9XG4gICAgICAgIDoge30pKTtcbn1cbmV4cG9ydHMuZ2V0Um91dGVSZWdleCA9IGdldFJvdXRlUmVnZXg7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHVybF8xID0gcmVxdWlyZShcInVybFwiKTtcbi8qKlxuICogVXRpbHNcbiAqL1xuZnVuY3Rpb24gZXhlY09uY2UoZm4pIHtcbiAgICBsZXQgdXNlZCA9IGZhbHNlO1xuICAgIGxldCByZXN1bHQ7XG4gICAgcmV0dXJuICgoLi4uYXJncykgPT4ge1xuICAgICAgICBpZiAoIXVzZWQpIHtcbiAgICAgICAgICAgIHVzZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbn1cbmV4cG9ydHMuZXhlY09uY2UgPSBleGVjT25jZTtcbmZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICAgIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb247XG4gICAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YDtcbn1cbmV4cG9ydHMuZ2V0TG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbjtcbmZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTtcbn1cbmV4cG9ydHMuZ2V0VVJMID0gZ2V0VVJMO1xuZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgICAgID8gQ29tcG9uZW50XG4gICAgICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJztcbn1cbmV4cG9ydHMuZ2V0RGlzcGxheU5hbWUgPSBnZXREaXNwbGF5TmFtZTtcbmZ1bmN0aW9uIGlzUmVzU2VudChyZXMpIHtcbiAgICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudDtcbn1cbmV4cG9ydHMuaXNSZXNTZW50ID0gaXNSZXNTZW50O1xuYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wcyhBcHAsIGN0eCkge1xuICAgIHZhciBfYTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoKF9hID0gQXBwLnByb3RvdHlwZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmdldEluaXRpYWxQcm9wcykge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYDtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gICAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcyk7XG4gICAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpO1xuICAgIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICAgICAgcmV0dXJuIHByb3BzO1xuICAgIH1cbiAgICBpZiAoIXByb3BzKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYDtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGAke2dldERpc3BsYXlOYW1lKEFwcCl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2ApO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wcztcbn1cbmV4cG9ydHMubG9hZEdldEluaXRpYWxQcm9wcyA9IGxvYWRHZXRJbml0aWFsUHJvcHM7XG5leHBvcnRzLnVybE9iamVjdEtleXMgPSBbXG4gICAgJ2F1dGgnLFxuICAgICdoYXNoJyxcbiAgICAnaG9zdCcsXG4gICAgJ2hvc3RuYW1lJyxcbiAgICAnaHJlZicsXG4gICAgJ3BhdGgnLFxuICAgICdwYXRobmFtZScsXG4gICAgJ3BvcnQnLFxuICAgICdwcm90b2NvbCcsXG4gICAgJ3F1ZXJ5JyxcbiAgICAnc2VhcmNoJyxcbiAgICAnc2xhc2hlcycsXG5dO1xuZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsLCBvcHRpb25zKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChleHBvcnRzLnVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVybF8xLmZvcm1hdCh1cmwsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5mb3JtYXRXaXRoVmFsaWRhdGlvbiA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uO1xuZXhwb3J0cy5TUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCc7XG5leHBvcnRzLlNUID0gZXhwb3J0cy5TUCAmJlxuICAgIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gICAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbic7XG4iLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5Db250YWluZXI9Q29udGFpbmVyO2V4cG9ydHMuY3JlYXRlVXJsPWNyZWF0ZVVybDtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi91dGlsc1wiKTtleHBvcnRzLkFwcEluaXRpYWxQcm9wcz1fdXRpbHMuQXBwSW5pdGlhbFByb3BzOy8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi9hc3luYyBmdW5jdGlvbiBhcHBHZXRJbml0aWFsUHJvcHMoX3JlZil7dmFye0NvbXBvbmVudCxjdHh9PV9yZWY7dmFyIHBhZ2VQcm9wcz1hd2FpdCgwLF91dGlscy5sb2FkR2V0SW5pdGlhbFByb3BzKShDb21wb25lbnQsY3R4KTtyZXR1cm57cGFnZVByb3BzfTt9Y2xhc3MgQXBwIGV4dGVuZHMgX3JlYWN0LmRlZmF1bHQuQ29tcG9uZW50ey8vIEtlcHQgaGVyZSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG4vLyBXaGVuIHNvbWVvbmUgZW5kZWQgQXBwIHRoZXkgY291bGQgY2FsbCBgc3VwZXIuY29tcG9uZW50RGlkQ2F0Y2hgLlxuLy8gQGRlcHJlY2F0ZWQgVGhpcyBtZXRob2QgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gRXJyb3JzIGFyZSBjYXVnaHQgYXQgdGhlIHRvcCBsZXZlbFxuY29tcG9uZW50RGlkQ2F0Y2goZXJyb3IsX2Vycm9ySW5mbyl7dGhyb3cgZXJyb3I7fXJlbmRlcigpe3Zhcntyb3V0ZXIsQ29tcG9uZW50LHBhZ2VQcm9wcyxfX05fU1NHLF9fTl9TU1B9PXRoaXMucHJvcHM7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LE9iamVjdC5hc3NpZ24oe30scGFnZVByb3BzLC8vIHdlIGRvbid0IGFkZCB0aGUgbGVnYWN5IFVSTCBwcm9wIGlmIGl0J3MgdXNpbmcgbm9uLWxlZ2FjeVxuLy8gbWV0aG9kcyBsaWtlIGdldFN0YXRpY1Byb3BzIGFuZCBnZXRTZXJ2ZXJTaWRlUHJvcHNcbiEoX19OX1NTR3x8X19OX1NTUCk/e3VybDpjcmVhdGVVcmwocm91dGVyKX06e30pKTt9fWV4cG9ydHMuZGVmYXVsdD1BcHA7QXBwLm9yaWdHZXRJbml0aWFsUHJvcHM9YXBwR2V0SW5pdGlhbFByb3BzO0FwcC5nZXRJbml0aWFsUHJvcHM9YXBwR2V0SW5pdGlhbFByb3BzO3ZhciB3YXJuQ29udGFpbmVyO3ZhciB3YXJuVXJsO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt3YXJuQ29udGFpbmVyPSgwLF91dGlscy5leGVjT25jZSkoKCk9Pntjb25zb2xlLndhcm4oXCJXYXJuaW5nOiB0aGUgYENvbnRhaW5lcmAgaW4gYF9hcHBgIGhhcyBiZWVuIGRlcHJlY2F0ZWQgYW5kIHNob3VsZCBiZSByZW1vdmVkLiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvYXBwLWNvbnRhaW5lci1kZXByZWNhdGVkXCIpO30pO3dhcm5Vcmw9KDAsX3V0aWxzLmV4ZWNPbmNlKSgoKT0+e2NvbnNvbGUuZXJyb3IoXCJXYXJuaW5nOiB0aGUgJ3VybCcgcHJvcGVydHkgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL3VybC1kZXByZWNhdGVkXCIpO30pO30vLyBAZGVwcmVjYXRlZCBub29wIGZvciBub3cgdW50aWwgcmVtb3ZhbFxuZnVuY3Rpb24gQ29udGFpbmVyKHApe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5Db250YWluZXIoKTtyZXR1cm4gcC5jaGlsZHJlbjt9ZnVuY3Rpb24gY3JlYXRlVXJsKHJvdXRlcil7Ly8gVGhpcyBpcyB0byBtYWtlIHN1cmUgd2UgZG9uJ3QgcmVmZXJlbmNlcyB0aGUgcm91dGVyIG9iamVjdCBhdCBjYWxsIHRpbWVcbnZhcntwYXRobmFtZSxhc1BhdGgscXVlcnl9PXJvdXRlcjtyZXR1cm57Z2V0IHF1ZXJ5KCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3JldHVybiBxdWVyeTt9LGdldCBwYXRobmFtZSgpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTtyZXR1cm4gcGF0aG5hbWU7fSxnZXQgYXNQYXRoKCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3JldHVybiBhc1BhdGg7fSxiYWNrOigpPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3JvdXRlci5iYWNrKCk7fSxwdXNoOih1cmwsYXMpPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3JldHVybiByb3V0ZXIucHVzaCh1cmwsYXMpO30scHVzaFRvOihocmVmLGFzKT0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTt2YXIgcHVzaFJvdXRlPWFzP2hyZWY6Jyc7dmFyIHB1c2hVcmw9YXN8fGhyZWY7cmV0dXJuIHJvdXRlci5wdXNoKHB1c2hSb3V0ZSxwdXNoVXJsKTt9LHJlcGxhY2U6KHVybCxhcyk9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7cmV0dXJuIHJvdXRlci5yZXBsYWNlKHVybCxhcyk7fSxyZXBsYWNlVG86KGhyZWYsYXMpPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3ZhciByZXBsYWNlUm91dGU9YXM/aHJlZjonJzt2YXIgcmVwbGFjZVVybD1hc3x8aHJlZjtyZXR1cm4gcm91dGVyLnJlcGxhY2UocmVwbGFjZVJvdXRlLHJlcGxhY2VVcmwpO319O30iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJpbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZSdcclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvb3Rlcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMVwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbFwiPlxyXG4gICAgICAgICAgICAgICAgPHA+U29jaWFsOjwvcD5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj48c3Bhbj5GYWNlYm9vazwvc3Bhbj48L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+PHNwYW4+TGlua2VkSW48L3NwYW4+PC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPjxzcGFuPlRlbGVncmFtPC9zcGFuPjwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29weVwiPiZjb3B5OzIwMjAgdmlraW5hcuKEojwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMVwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntzdHlsZX08L3N0eWxlPlxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXJcclxuIiwiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2NzcydcclxuXHJcbmNvbnN0IHN0eWxlID0gY3NzYFxyXG4gIGZvb3RlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7IFxyXG4gICAgYm90dG9tOiA0cmVtOyBcclxuICAgIGhlaWdodDogMTByZW07XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBcclxuICAgIC5mb290ZXJ7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zb2NpYWx7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhe1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBjb2xvcjogZGFya2JsdWU7XHJcbiAgICAgICAgICA6YmVmb3Jle1xyXG4gICAgICAgICAgICBjb250ZW50OiAnLyc7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAuNXJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdHlsZVxyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VSZWYsIHVzZUxheW91dEVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7UmVhY3RDb21wb25lbnQgYXMgTG9nb30gZnJvbSAnLi4vLi4vLi4vLi4vc3RhdGljL2xheW91dC9lLWxvZ28uc3ZnJ1xyXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZSdcclxuXHJcbmNvbnN0IEhlYWRlciA9IChwcm9wcywgcmVmKSA9PiB7XHJcbiAgICBjb25zdCBsb2dvID0gJ2xvZ28nXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8xMlwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2ZsZXgnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMb2dvIGNsYXNzTmFtZT17bG9nb30gd2lkdGg9JzEwMCcgaGVpZ2h0PScxMDAnLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naGVhZGVyX19jb250YWluZXItLWlubmVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRVJNSVJFXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbG9nby1kZXNjJz52aWtpbmFy4oSiPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57c3R5bGV9PC9zdHlsZT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMTJcIj48L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxyXG4iLCJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xyXG5cclxuY29uc3Qgc3R5bGUgPSBjc3NgXHJcbiAgICAgICAgICAuaGVhZGVye1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICB0b3A6IDRyZW07XHJcbiAgICAgICAgICAgIGhlaWdodDogMTByZW07XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQgOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgY29sb3I6IGRhcmtibHVlO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBlYXNlLW91dCAuNXM7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgLmZsZXh7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgJl9fY29udGFpbmVye1xyXG4gICAgICAgICAgICAgICYtLWlubmVye1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICBmbGV4LWJhc2lzOiBjb250ZW50O1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAxcmVtOyBcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgIGgxe1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAubG9nby1jb250YWluZXJ7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3R5bGVcclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlUmVmfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IE1lc3NlbmdlckN1c3RvbWVyQ2hhdCBmcm9tICdyZWFjdC1tZXNzZW5nZXItY3VzdG9tZXItY2hhdCdcclxuXHJcbmltcG9ydCBzdHlsZSBmcm9tICcuLi8uLi9zdHlsZXMvc3R5bGVzJ1xyXG5pbXBvcnQge05hdmlnYXRpb259IGZyb20gJy4uL05hdmlnYXRpb24nXHJcbmltcG9ydCB7bGF5b3V0fSBmcm9tICcuL3N0eWxlJ1xyXG5pbXBvcnQge1BhZ2VUcmFuc2l0aW9ufSBmcm9tIFwibmV4dC1wYWdlLXRyYW5zaXRpb25zXCI7XHJcbmNvbnN0IFRJTUVPVVQgPSAxMDAwXHJcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgTWFpbiBmcm9tIFwiLi9IZWFkZXJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3RlcidcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcclxuXHJcbmNvbnN0IExheW91dCA9ICh7Y2hpbGRyZW59KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nTGF5b3V0Jz5cclxuICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICA8UGFnZVRyYW5zaXRpb25cclxuICAgICAgICAgICAgICAgIHRpbWVvdXQ9e1RJTUVPVVR9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWVzPVwicGFnZS10cmFuc2l0aW9uXCJcclxuICAgICAgICAgICAgICAgIGxvYWRpbmdEZWxheT17MTAwfVxyXG4gICAgICAgICAgICAgICAgbG9hZGluZ1RpbWVvdXQ9e3tcclxuICAgICAgICAgICAgICAgICAgICBlbnRlcjogVElNRU9VVCxcclxuICAgICAgICAgICAgICAgICAgICBleGl0OiAwLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGxvYWRpbmdDbGFzc05hbWVzPVwibG9hZGluZy1pbmRpY2F0b3JcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGUgPSB7e3dpZHRoOiAnMTAwJSd9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvUGFnZVRyYW5zaXRpb24+XHJcbiAgICAgICAgICAgIDxGb290ZXIvPlxyXG4gICAgICAgICAgICA8TmF2aWdhdGlvbi8+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2xheW91dH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57c3R5bGV9PC9zdHlsZT5cclxuICAgICAgICAgICAgPE1lc3NlbmdlckN1c3RvbWVyQ2hhdFxyXG4gICAgICAgICAgICAgICAgcGFnZUlkPVwiNjQ4OTUyMjkxODMxODUwXCJcclxuICAgICAgICAgICAgICAgIGFwcElkPVwiODIzMjQ0NDA4MTk3NDcyXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAucGFnZS10cmFuc2l0aW9uLWVudGVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDIwcHgsIDApIHNjYWxlKC45KTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgJHtUSU1FT1VUfW1zLCB0cmFuc2Zvcm0gJHtUSU1FT1VUfW1zICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wYWdlLXRyYW5zaXRpb24tZW50ZXItYWN0aXZlIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApIHNjYWxlKDEpO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAke1RJTUVPVVR9bXMsIHRyYW5zZm9ybSAke1RJTUVPVVR9bXMgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBhZ2UtdHJhbnNpdGlvbi1leGl0IHtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5wYWdlLXRyYW5zaXRpb24tZW50ZXItZG9uZXtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wYWdlLXRyYW5zaXRpb24tZXhpdC1hY3RpdmUge1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgJHtUSU1FT1VUfW1zO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubG9hZGluZy1pbmRpY2F0b3ItYXBwZWFyLFxyXG4gICAgICAgIC5sb2FkaW5nLWluZGljYXRvci1lbnRlciB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubG9hZGluZy1pbmRpY2F0b3ItYXBwZWFyLWFjdGl2ZSxcclxuICAgICAgICAubG9hZGluZy1pbmRpY2F0b3ItZW50ZXItYWN0aXZlIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5ICR7VElNRU9VVH1tcztcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcclxuIiwiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2NzcydcclxuXHJcbmNvbnN0IHNreSA9ICdza3knXHJcblxyXG5leHBvcnQgY29uc3QgbGF5b3V0ID0gY3NzYFxyXG4gIC5MYXlvdXR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjogZWFzZSAuNXM7XHJcbiAgIH1cclxuICAgXHJcbmBcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgTG9hZGVyID0gKCkgPT4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXJcIj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC5sb2FkZXIge1xyXG4gICAgICAgIGJvcmRlcjogOHB4IHNvbGlkICNmM2YzZjM7IC8qIExpZ2h0IGdyZXkgKi9cclxuICAgICAgICBib3JkZXItdG9wOiA4cHggc29saWQgIzM0OThkYjsgLyogQmx1ZSAqL1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICB9XHJcbiAgICAgIEBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgICAgICAgMCUge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkZXJcclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7c3R5bGV9IGZyb20gJy4vc3R5bGUnXHJcbmltcG9ydCB7UmVhY3RDb21wb25lbnQgYXMgSG92ZXJ9IGZyb20gJy4vaG92ZXIuc3ZnJ1xyXG5cclxuZXhwb3J0IGNvbnN0IE5hdmlnYXRpb24gPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByb3V0ZTogJy8nLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0hvbWUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJvdXRlOiAnL2Fib3V0JyxcclxuICAgICAgICAgICAgdGl0bGU6ICdBYm91dCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcm91dGU6ICcvc2VydmljZXMnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1NlcnZpY2VzJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByb3V0ZTogJy4vaHViJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdIdWInXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJvdXRlOiAnL2FjYWRlbXknLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0FjYWRlbXknXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJvdXRlOiAnL2NvbnRhY3QnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0NvbnRhY3RzJ1xyXG4gICAgICAgIH1cclxuICAgIF1cclxuXHJcbiAgICBjb25zdCBbbWVudVN0YXRlLCBzZXRNZW51U3RhdGVdID0gdXNlU3RhdGUoJ2hpZGUnKVxyXG5cclxuICAgIGNvbnN0IHNob3dNZW51QmcgPSAoKSA9PntcclxuICAgICAgICBzZXRNZW51U3RhdGUoJ3Nob3cnKVxyXG4gICAgfVxyXG4gICAgY29uc3QgaGlkZU1lbnVCZyA9ICgpID0+e1xyXG4gICAgICAgIHNldE1lbnVTdGF0ZSgnaGlkZScpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT0nbmF2IG5hdi1tb2JpbGUnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG1lbnUtYmcgbWVudS1iZy0tJHttZW51U3RhdGV9YH0+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2BuYXZfX2hvdmVyIG5hdl9faG92ZXItLSR7bWVudVN0YXRlfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxIb3ZlciB3aWR0aD17JzEwMCUnfS8+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICB7cm91dGVzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8bGkgZGF0YS1yb3V0ZT17aXRlbS50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWYgPSB7aXRlbS5yb3V0ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBkYXRhLXJvdXRlPXtpdGVtLnRpdGxlfSAgb25Nb3VzZU92ZXI9e3Nob3dNZW51Qmd9IG9uTW91c2VPdXQ9e2hpZGVNZW51Qmd9IGNsYXNzTmFtZT1cImxpbmtcIiAga2V5ID0ge2luZGV4fT57aXRlbS50aXRsZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e3N0eWxlfTwvc3R5bGU+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG4iLCJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xyXG5cclxuY29uc3QgaG92ZXIgPSAnaG92ZXInXHJcblxyXG5leHBvcnQgY29uc3Qgc3R5bGUgPSBjc3NgXHJcbi5uYXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogZGFya2JsdWU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggZGFya2JsdWU7XHJcbiAgICB3aWR0aDogY2FsYygxMDB2dy8xOCk7XHJcbiAgICBtaW4td2lkdGg6IGNhbGMoMTAwdncvMTgpO1xyXG4gICAgdHJhbnNpdGlvbjogY3ViaWMtYmV6aWVyKDAuMiwgMC41LCAwLjc1LCAxLjgpO1xyXG59XHJcblxyXG4gICAgOmdsb2JhbCgubmF2X19ob3Zlcil7XHJcbiAgICB3aWR0aDogNDUlO1xyXG4gICAgICAgICAgICAgdHJhbnNpdGlvbjogY3ViaWMtYmV6aWVyKDAuMiwgMC41LCAwLjc1LCAxKTtcclxuICAgICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XHJcbiAgICAgICAgICAgICBAa2V5ZnJhbWVzICR7aG92ZXJ9e1xyXG4gICAgICAgICAgICAgIGZyb217ICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgICAgICAgfSB0byB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSAgXHJcbiAgICBcclxuICAgIDpnbG9iYWwoLm5hdl9faG92ZXItLXNob3cpe1xyXG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcclxuICAgICAgYW5pbWF0aW9uOiBob3ZlciAuNXMgLjVzIGJvdGggZWFzZS1vdXQ7XHJcbiAgICB9XHJcblxyXG4ubmF2IHVsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5uYXYgdWwgbGl7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzExMTtcclxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC41cztcclxufVxyXG5cclxuLm1lbnUtYmd7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBcclxuICAmLS1zaG93e1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC41cyBjdWJpYy1iZXppZXIoMC42LDAuNCwwLjUsMSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gIH1cclxuICAmLS1oaWRle1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC41cyBjdWJpYy1iZXppZXIoMC42LDAuNCwwLjUsMSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgfVxyXG59XHJcblxyXG4ubGluayB7XHJcbiAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgcGFkZGluZzogMnJlbSA0LjVyZW07XHJcbiAgICAgIGNvbG9yOiBkYXJrYmx1ZTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIC41cyBjdWJpYy1iZXppZXIoMC42LCAwLCAwLjUsIDEpO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgIFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNHJlbTtcclxuICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cztcclxuICAgICAgfVxyXG5cclxuICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1yb3V0ZSk7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiBkYXJrYmx1ZTtcclxuICAgICAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDcwJTtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHJlbTtcclxuICAgICAgICB3cml0aW5nLW1vZGU6IGhvcml6b250YWwtdGI7XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmV2ZXJ0O1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSkgcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLW91dCAxcztcclxuICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMCUpIHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNzVzIGN1YmljLWJlemllcigwLjYsMC40LDAuNSwxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgJi5tZW51LWJne1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpe1xyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbmA7XHJcbiIsImltcG9ydCB7Y29tYmluZVJlZHVjZXJzfSBmcm9tIFwicmVkdXhcIlxyXG5cclxuZXhwb3J0IGNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuXHJcbn0pO1xyXG4iLCJpbXBvcnQge2FwcGx5TWlkZGxld2FyZSwgY29tcG9zZSwgY3JlYXRlU3RvcmV9IGZyb20gXCJyZWR1eFwiXHJcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuaydcclxuaW1wb3J0IHtyb290UmVkdWNlcn0gZnJvbSBcIi4vcm9vdFJlZHVjZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBtYWtlU3RvcmUgPSAoaW5pdGlhbFN0YXRlKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxyXG4gICAgICAgIHJvb3RSZWR1Y2VyLFxyXG4gICAgICAgIGFwcGx5TWlkZGxld2FyZSh0aHVuaylcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHN0b3JlO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcbmltcG9ydCBBcHAsIHtDb250YWluZXJ9IGZyb20gXCJuZXh0L2FwcFwiXHJcbmltcG9ydCB3aXRoUmVkdXggZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiXHJcbmltcG9ydCB7bWFrZVN0b3JlfSBmcm9tIFwiLi4vaW5pdC9zdG9yZVwiXHJcbmltcG9ydCBzdHlsZSBmcm9tICcuLi9zdHlsZXMvc3R5bGVzJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnOyAvL25wcm9ncmVzcyBtb2R1bGVcclxuaW1wb3J0ICducHJvZ3Jlc3MvbnByb2dyZXNzLmNzcyc7IC8vc3R5bGVzIG9mIG5wcm9ncmVzc1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9zdHlsZXMuc2NzcydcclxuXHJcblxyXG4vL0JpbmRpbmcgZXZlbnRzLlxyXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0JywgKCkgPT4gTlByb2dyZXNzLnN0YXJ0KCkpOyBSb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgKCkgPT4gTlByb2dyZXNzLmRvbmUoKSk7IFJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlRXJyb3InLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpKTtcclxuXHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Mb2FkZXJzJ1xyXG5cclxuY29uc3QgVElNRU9VVCA9IDIwMFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KG1ha2VTdG9yZSkoY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xyXG5cclxuXHJcblxyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7Q29tcG9uZW50LCBjdHh9KSB7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHBhZ2VQcm9wczoge1xyXG4gICAgICAgICAgICAgICAgLy8gQ2FsbCBwYWdlLWxldmVsIGdldEluaXRpYWxQcm9wc1xyXG4gICAgICAgICAgICAgICAgLi4uKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMgPyBhd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCkgOiB7fSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7Q29tcG9uZW50LCBwYWdlUHJvcHMsIHN0b3JlfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntzdHlsZX08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgLnBhZ2UtdHJhbnNpdGlvbi1lbnRlciB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyMHB4LCAwKSBzY2FsZSguOSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wYWdlLXRyYW5zaXRpb24tZW50ZXItYWN0aXZlIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApIHNjYWxlKDEpO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAke1RJTUVPVVR9bXMsIHRyYW5zZm9ybSAke1RJTUVPVVR9bXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wYWdlLXRyYW5zaXRpb24tZXhpdCB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucGFnZS10cmFuc2l0aW9uLWV4aXQtYWN0aXZlIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5ICR7VElNRU9VVH1tcztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxvYWRpbmctaW5kaWNhdG9yLWFwcGVhcixcclxuICAgICAgICAubG9hZGluZy1pbmRpY2F0b3ItZW50ZXIge1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxvYWRpbmctaW5kaWNhdG9yLWFwcGVhci1hY3RpdmUsXHJcbiAgICAgICAgLmxvYWRpbmctaW5kaWNhdG9yLWVudGVyLWFjdGl2ZSB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAke1RJTUVPVVR9bXM7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8L1Byb3ZpZGVyPlxyXG5cclxuXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn0pO1xyXG4iLCJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xyXG5jb25zdCBsb2dvID0gJ2xvZ28nXHJcbiAgICBjb25zdCBzdHlsZSA9IGNzc1xyXG4gICAgICAgIGBcclxuICAgICosXHJcbiAgICA6Z2xvYmFsKGh0bWwpLCBcclxuICAgIDpnbG9iYWwoYm9keSkge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTsgLyogaU9TIFNhZmFyaSAqL1xyXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnY2FuYWRhLXR5cGUtZ2lic29uJywgTW9ub3NwYWNlZCwgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLW91dDtcclxuICAgIH1cclxuXHJcblxyXG4qLFxyXG4qOjphZnRlcixcclxuKjo6YmVmb3JlIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xyXG4gIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbjpnbG9iYWwoaHRtbCkge1xyXG4gIGZvbnQtc2l6ZTogNjIuNSU7XHJcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbn1cclxuXHJcbjpnbG9iYWwoYm9keSkge1xyXG4gZm9udC1zaXplOiAxLjZyZW07XHJcbn1cclxuXHJcbiAgICA6Z2xvYmFsKC5jb2wtMSl7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3LzEyKTtcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwdncvMTIpO1xyXG4gICAgfVxyXG5cclxuICAgIDpnbG9iYWwoaDEpe1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAgICAgIDpnbG9iYWwoLmxvZ28pe1xyXG4gICAgICAgICAgICBmaWxsOiBkYXJrYmx1ZTtcclxuICAgICAgICAgICAgc3Ryb2tlOiBkYXJrYmx1ZTtcclxuICAgICAgICAgICAgc3Ryb2tlLXdpZHRoOiA0cHg7XHJcbiAgICAgICAgICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogbG9nbyAxLjVzIDFzIGJhY2t3YXJkcyBjdWJpYy1iZXppZXIoMC4zLCAwLCAwLjc1LCAxKTtcclxuICAgICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIEBrZXlmcmFtZXMgJHtsb2dvfSB7XHJcbiAgICAgICAgMCV7XHJcbiAgICAgICAgICAgIGZpbGw6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBzdHJva2UtZGFzaGFycmF5OiA2MDA7XHJcbiAgICAgICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiA2MDBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDgwJXtcclxuICAgICAgICAgICAgZmlsbDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDYwMDtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAxMDAle1xyXG4gICAgICAgICAgICBmaWxsOiBkYXJrYmx1ZTtcclxuICAgICAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XHJcbiAgICAgICAgICAgIHN0cm9rZTogZGFya2JsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiY2FuYWRhLXR5cGUtZ2lic29uXCI7XHJcbiAgICAgICAgc3JjOiB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi8wZDhmNGMvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODgyLzI3L2w/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW43JnY9M1wiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvMGQ4ZjRjLzAwMDAwMDAwMDAwMDAwMDAzYjliMzg4Mi8yNy9kP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uNyZ2PTNcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvMGQ4ZjRjLzAwMDAwMDAwMDAwMDAwMDAzYjliMzg4Mi8yNy9hP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uNyZ2PTNcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XHJcbiAgICAgICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgfVxyXG5cclxuICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcImNhbmFkYS10eXBlLWdpYnNvblwiO1xyXG4gICAgICAgIHNyYzogdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvMDYxOGRiLzAwMDAwMDAwMDAwMDAwMDAzYjliMzg4My8yNy9sP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1pNyZ2PTNcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzA2MThkYi8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4ODMvMjcvZD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9aTcmdj0zXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzA2MThkYi8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4ODMvMjcvYT9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9aTcmdj0zXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xyXG4gICAgICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIH1cclxuXHJcbiAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJjYW5hZGEtdHlwZS1naWJzb25cIjtcclxuICAgICAgICBzcmM6IHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmL2I2N2M5MS8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4N2QvMjcvbD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9aTQmdj0zXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi9iNjdjOTEvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODdkLzI3L2Q/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPWk0JnY9M1wiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi9iNjdjOTEvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODdkLzI3L2E/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPWk0JnY9M1wiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcclxuICAgICAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB9XHJcblxyXG4gICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiY2FuYWRhLXR5cGUtZ2lic29uXCI7XHJcbiAgICAgICAgc3JjOiB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi83NTU3YzgvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODc4LzI3L2w/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW4yJnY9M1wiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvNzU1N2M4LzAwMDAwMDAwMDAwMDAwMDAzYjliMzg3OC8yNy9kP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uMiZ2PTNcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvNzU1N2M4LzAwMDAwMDAwMDAwMDAwMDAzYjliMzg3OC8yNy9hP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uMiZ2PTNcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XHJcbiAgICAgICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgfVxyXG5cclxuICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcImNhbmFkYS10eXBlLWdpYnNvblwiO1xyXG4gICAgICAgIHNyYzogdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvN2Y3ODE3LzAwMDAwMDAwMDAwMDAwMDAzYjliMzg3OS8yNy9sP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1pMiZ2PTNcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzdmNzgxNy8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4NzkvMjcvZD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9aTImdj0zXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzdmNzgxNy8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4NzkvMjcvYT9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9aTImdj0zXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xyXG4gICAgICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIH1cclxuXHJcbiAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJjYW5hZGEtdHlwZS1naWJzb25cIjtcclxuICAgICAgICBzcmM6IHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmL2VmMjEyOS8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4N2MvMjcvbD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjQmdj0zXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi9lZjIxMjkvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODdjLzI3L2Q/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW40JnY9M1wiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi9lZjIxMjkvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODdjLzI3L2E/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW40JnY9M1wiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcclxuICAgICAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB9XHJcblxyXG4gICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiY2FuYWRhLXR5cGUtZ2lic29uXCI7XHJcbiAgICAgICAgc3JjOiB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi80MDM5MTEvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODgwLzI3L2w/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW42JnY9M1wiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvNDAzOTExLzAwMDAwMDAwMDAwMDAwMDAzYjliMzg4MC8yNy9kP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uNiZ2PTNcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvNDAzOTExLzAwMDAwMDAwMDAwMDAwMDAzYjliMzg4MC8yNy9hP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uNiZ2PTNcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XHJcbiAgICAgICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG5cclxuICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcImNhbmFkYS10eXBlLWdpYnNvblwiO1xyXG4gICAgICAgIHNyYzogdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvMjg1MzdjLzAwMDAwMDAwMDAwMDAwMDAzYjliMzg4MS8yNy9sP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1pNiZ2PTNcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzI4NTM3Yy8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4ODEvMjcvZD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9aTYmdj0zXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzI4NTM3Yy8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4ODEvMjcvYT9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9aTYmdj0zXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xyXG4gICAgICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuXHJcbiAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJjYW5hZGEtdHlwZS1naWJzb25cIjtcclxuICAgICAgICBzcmM6IHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmL2UxODIxNy8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4NzYvMjcvbD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjEmdj0zXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi9lMTgyMTcvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODc2LzI3L2Q/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW4xJnY9M1wiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi9lMTgyMTcvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODc2LzI3L2E/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW4xJnY9M1wiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcclxuICAgICAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICB9XHJcblxyXG4gICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiY2FuYWRhLXR5cGUtZ2lic29uXCI7XHJcbiAgICAgICAgc3JjOiB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi85N2EwNjgvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODc3LzI3L2w/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPWkxJnY9M1wiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvOTdhMDY4LzAwMDAwMDAwMDAwMDAwMDAzYjliMzg3Ny8yNy9kP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1pMSZ2PTNcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvOTdhMDY4LzAwMDAwMDAwMDAwMDAwMDAzYjliMzg3Ny8yNy9hP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1pMSZ2PTNcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XHJcbiAgICAgICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgfVxyXG5cclxuICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcImNhbmFkYS10eXBlLWdpYnNvblwiO1xyXG4gICAgICAgIHNyYzogdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvYWExZDY0LzAwMDAwMDAwMDAwMDAwMDAzYjliMzg3YS8yNy9sP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uMyZ2PTNcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmL2FhMWQ2NC8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4N2EvMjcvZD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjMmdj0zXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmL2FhMWQ2NC8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4N2EvMjcvYT9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjMmdj0zXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xyXG4gICAgICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIH1cclxuXHJcbiAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJjYW5hZGEtdHlwZS1naWJzb25cIjtcclxuICAgICAgICBzcmM6IHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzMyYzliYS8wMDAwMDAwMDAwMDAwMDAwM2I5YjNmMDIvMjcvbD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9aTMmdj0zXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi8zMmM5YmEvMDAwMDAwMDAwMDAwMDAwMDNiOWIzZjAyLzI3L2Q/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPWkzJnY9M1wiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi8zMmM5YmEvMDAwMDAwMDAwMDAwMDAwMDNiOWIzZjAyLzI3L2E/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPWkzJnY9M1wiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcclxuICAgICAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB9XHJcblxyXG4gICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiY2FuYWRhLXR5cGUtZ2lic29uXCI7XHJcbiAgICAgICAgc3JjOiB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi9hZWUwYWEvMDAwMDAwMDAwMDAwMDAwMDNiOWIzZjAzLzI3L2w/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW41JnY9M1wiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvYWVlMGFhLzAwMDAwMDAwMDAwMDAwMDAzYjliM2YwMy8yNy9kP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uNSZ2PTNcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvYWVlMGFhLzAwMDAwMDAwMDAwMDAwMDAzYjliM2YwMy8yNy9hP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uNSZ2PTNcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XHJcbiAgICAgICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG5cclxuICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcImNhbmFkYS10eXBlLWdpYnNvblwiO1xyXG4gICAgICAgIHNyYzogdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvNWZlYWQ4LzAwMDAwMDAwMDAwMDAwMDAzYjliMzg3Zi8yNy9sP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1pNSZ2PTNcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzVmZWFkOC8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4N2YvMjcvZD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9aTUmdj0zXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzVmZWFkOC8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4N2YvMjcvYT9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9aTUmdj0zXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xyXG4gICAgICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuXHJcbiAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJjYW5hZGEtdHlwZS1naWJzb25cIjtcclxuICAgICAgICBzcmM6IHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmL2ZkOGY5Ny8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4ODQvMjcvbD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjkmdj0zXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi9mZDhmOTcvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODg0LzI3L2Q/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW45JnY9M1wiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi9mZDhmOTcvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODg0LzI3L2E/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW45JnY9M1wiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcclxuICAgICAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICB9XHJcblxyXG4gICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiY2FuYWRhLXR5cGUtZ2lic29uXCI7XHJcbiAgICAgICAgc3JjOiB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi8zNTEzYTEvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODg1LzI3L2w/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPWk5JnY9M1wiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvMzUxM2ExLzAwMDAwMDAwMDAwMDAwMDAzYjliMzg4NS8yNy9kP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1pOSZ2PTNcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvMzUxM2ExLzAwMDAwMDAwMDAwMDAwMDAzYjliMzg4NS8yNy9hP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1pOSZ2PTNcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XHJcbiAgICAgICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgfVxyXG5cclxuICAgIC50ay1jYW5hZGEtdHlwZS1naWJzb24ge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcImNhbmFkYS10eXBlLWdpYnNvblwiLCBzYW5zLXNlcmlmO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3R5bGVcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1wYWdlLXRyYW5zaXRpb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJucHJvZ3Jlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzLWV4YWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW1lc3Nlbmdlci1jdXN0b21lci1jaGF0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXRodW5rXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc3R5bGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=