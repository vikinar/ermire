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

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

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


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

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


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

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

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

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

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
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
var _jsxFileName = "C:\\Users\\afmed\\Desktop\\ermire\\src\\components\\Layout\\Footer\\index.js";


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
const style = new String("footer.jsx-1542018637{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:fixed;bottom:4rem;height:10rem;z-index:2;width:100%;}footer.jsx-1542018637 .footer.jsx-1542018637{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}footer.jsx-1542018637 .social.jsx-1542018637{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}footer.jsx-1542018637 .social.jsx-1542018637 p.jsx-1542018637{font-weight:600;}footer.jsx-1542018637 .social.jsx-1542018637 a.jsx-1542018637{margin-left:1rem;-webkit-text-decoration:none;text-decoration:none;color:darkblue;}footer.jsx-1542018637 .social.jsx-1542018637 a.jsx-1542018637:before{content:'/';margin:0 .5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWZtZWRcXERlc2t0b3BcXGVybWlyZVxcc3JjXFxjb21wb25lbnRzXFxMYXlvdXRcXEZvb3Rlclxcc3R5bGUuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVpQixBQUVnQixBQU9FLEFBS0EsQUFHSyxBQUVDLEFBSUgsWUFDRyxJQVBBLENBR0ksVUFJSCx3Q0FISCxPQWxCSixBQU9pQixBQUtYLFFBTUQsT0FqQlIsWUFDQyxhQUNILFVBQ0MsV0FBQyxnQ0FRVSxzQkFKVCxXQUNRLDZGQUFDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcYWZtZWRcXERlc2t0b3BcXGVybWlyZVxcc3JjXFxjb21wb25lbnRzXFxMYXlvdXRcXEZvb3Rlclxcc3R5bGUuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2NzcydcclxuXHJcbmNvbnN0IHN0eWxlID0gY3NzYFxyXG4gIGZvb3RlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7IFxyXG4gICAgYm90dG9tOiA0cmVtOyBcclxuICAgIGhlaWdodDogMTByZW07XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBcclxuICAgIC5mb290ZXJ7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zb2NpYWx7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhe1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBjb2xvcjogZGFya2JsdWU7XHJcbiAgICAgICAgICA6YmVmb3Jle1xyXG4gICAgICAgICAgICBjb250ZW50OiAnLyc7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAuNXJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdHlsZVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\afmed\\\\Desktop\\\\ermire\\\\src\\\\components\\\\Layout\\\\Footer\\\\style.jsx */");
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
var _jsxFileName = "C:\\Users\\afmed\\Desktop\\ermire\\src\\components\\Layout\\Header\\index.js";

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
    className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}` + " " + "col-1",
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
    className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}` + " " + "col-1",
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
const style = new String(".header.jsx-2970140065{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;top:4rem;height:10rem;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:100%;background:transparent;color:darkblue;-webkit-transition:ease-out .5s;transition:ease-out .5s;position:fixed;z-index:2;}.header.jsx-2970140065 .flex.jsx-2970140065{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;}.header__container--inner.jsx-2970140065{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex-basis:content;-ms-flex-preferred-size:content;flex-basis:content;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:1rem;}.header__container--inner.jsx-2970140065 h1.jsx-2970140065{margin:0;font-size:1.8rem;font-weight:600;}.header__container--inner.jsx-2970140065 p.jsx-2970140065{margin:0;}.logo-container.jsx-2970140065{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWZtZWRcXERlc2t0b3BcXGVybWlyZVxcc3JjXFxjb21wb25lbnRzXFxMYXlvdXRcXEhlYWRlclxcc3R5bGUuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVpQixBQUVnQixBQVdTLEFBS1AsQUFPRixBQUlBLEFBR0EsU0FOUSxBQUdQLGlCQUZNLGdCQUFDLGdDQXhCWixBQWdCZSxBQWNNLFNBN0JqQixhQUNpQixNQVNFLGtEQU1YLHFDQWFVLHNCQTNCcEIsTUFTVSxLQVJFLFFBY0YsZUFiTixlQUNTLGtEQU9YLE1BTkUsS0FNRCxFQU1XLFFBWGYsVUFBQyxpRkFZRyxZQUFDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcYWZtZWRcXERlc2t0b3BcXGVybWlyZVxcc3JjXFxjb21wb25lbnRzXFxMYXlvdXRcXEhlYWRlclxcc3R5bGUuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2NzcydcclxuXHJcbmNvbnN0IHN0eWxlID0gY3NzYFxyXG4gICAgICAgICAgLmhlYWRlcntcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgdG9wOiA0cmVtO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwcmVtO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kIDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiBkYXJrYmx1ZTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogZWFzZS1vdXQgLjVzO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgIC5mbGV4e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICZfX2NvbnRhaW5lcntcclxuICAgICAgICAgICAgICAmLS1pbm5lcntcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgZmxleC1iYXNpczogY29udGVudDtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMXJlbTsgXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICBoMXtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmxvZ28tY29udGFpbmVye1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0eWxlXHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\afmed\\\\Desktop\\\\ermire\\\\src\\\\components\\\\Layout\\\\Header\\\\style.jsx */");
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
var _jsxFileName = "C:\\Users\\afmed\\Desktop\\ermire\\src\\components\\Layout\\index.js";

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
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
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
      lineNumber: 17,
      columnNumber: 13
    }
  }, children), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }), __jsx(_Navigation__WEBPACK_IMPORTED_MODULE_4__["Navigation"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
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
      lineNumber: 34,
      columnNumber: 13
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "659418330",
    dynamic: [TIMEOUT, TIMEOUT, TIMEOUT, TIMEOUT, TIMEOUT, TIMEOUT],
    __self: undefined
  }, `.page-transition-enter{width:100%;opacity:0;-webkit-transform:translate3d(0,20px,0) scale(0.9);-ms-transform:translate3d(0,20px,0) scale(0.9);transform:translate3d(0,20px,0) scale(0.9);-webkit-transition:opacity ${TIMEOUT}ms,-webkit-transform ${TIMEOUT}ms !important;-webkit-transition:opacity ${TIMEOUT}ms,transform ${TIMEOUT}ms !important;transition:opacity ${TIMEOUT}ms,transform ${TIMEOUT}ms !important;}.page-transition-enter-active{opacity:1;-webkit-transform:translate3d(0,0,0) scale(1);-ms-transform:translate3d(0,0,0) scale(1);transform:translate3d(0,0,0) scale(1);-webkit-transition:opacity ${TIMEOUT}ms,-webkit-transform ${TIMEOUT}ms !important;-webkit-transition:opacity ${TIMEOUT}ms,transform ${TIMEOUT}ms !important;transition:opacity ${TIMEOUT}ms,transform ${TIMEOUT}ms !important;}.page-transition-exit{opacity:1;}.page-transition-enter-done{width:100%;}.page-transition-exit-active{opacity:0;-webkit-transition:opacity ${TIMEOUT}ms;transition:opacity ${TIMEOUT}ms;}.loading-indicator-appear,.loading-indicator-enter{opacity:0;}.loading-indicator-appear-active,.loading-indicator-enter-active{opacity:1;-webkit-transition:opacity ${TIMEOUT}ms;transition:opacity ${TIMEOUT}ms;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWZtZWRcXERlc2t0b3BcXGVybWlyZVxcc3JjXFxjb21wb25lbnRzXFxMYXlvdXRcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFDK0IsQUFFYyxBQU1ELEFBS0EsQUFHQyxBQUdELEFBS0EsQUFJQSxVQW5COEIsQUFJN0IsQUFPdUMsQUFJdkMsQUFLdUMsQ0ExQnhDLEFBYUUsVUFaaUMsaUdBZ0JNLEFBU0Esa0JBbkJvRCwwQkFMQSxnVEFLQywwQkFMQSIsImZpbGUiOiJDOlxcVXNlcnNcXGFmbWVkXFxEZXNrdG9wXFxlcm1pcmVcXHNyY1xcY29tcG9uZW50c1xcTGF5b3V0XFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVJlZn0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBNZXNzZW5nZXJDdXN0b21lckNoYXQgZnJvbSAncmVhY3QtbWVzc2VuZ2VyLWN1c3RvbWVyLWNoYXQnXHJcblxyXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vLi4vc3R5bGVzL3N0eWxlcydcclxuaW1wb3J0IHtOYXZpZ2F0aW9ufSBmcm9tICcuLi9OYXZpZ2F0aW9uJ1xyXG5pbXBvcnQge2xheW91dH0gZnJvbSAnLi9zdHlsZSdcclxuaW1wb3J0IHtQYWdlVHJhbnNpdGlvbn0gZnJvbSBcIm5leHQtcGFnZS10cmFuc2l0aW9uc1wiO1xyXG5jb25zdCBUSU1FT1VUID0gMTAwMFxyXG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3RlcidcclxuXHJcbmNvbnN0IExheW91dCA9ICh7Y2hpbGRyZW59KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nTGF5b3V0Jz5cclxuICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICA8UGFnZVRyYW5zaXRpb25cclxuICAgICAgICAgICAgICAgIHRpbWVvdXQ9e1RJTUVPVVR9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWVzPVwicGFnZS10cmFuc2l0aW9uXCJcclxuICAgICAgICAgICAgICAgIGxvYWRpbmdEZWxheT17MTAwfVxyXG4gICAgICAgICAgICAgICAgbG9hZGluZ1RpbWVvdXQ9e3tcclxuICAgICAgICAgICAgICAgICAgICBlbnRlcjogVElNRU9VVCxcclxuICAgICAgICAgICAgICAgICAgICBleGl0OiAwLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGxvYWRpbmdDbGFzc05hbWVzPVwibG9hZGluZy1pbmRpY2F0b3JcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGUgPSB7e3dpZHRoOiAnMTAwJSd9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvUGFnZVRyYW5zaXRpb24+XHJcbiAgICAgICAgICAgIDxGb290ZXIvPlxyXG4gICAgICAgICAgICA8TmF2aWdhdGlvbi8+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2xheW91dH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57c3R5bGV9PC9zdHlsZT5cclxuICAgICAgICAgICAgPE1lc3NlbmdlckN1c3RvbWVyQ2hhdFxyXG4gICAgICAgICAgICAgICAgcGFnZUlkPVwiNjQ4OTUyMjkxODMxODUwXCJcclxuICAgICAgICAgICAgICAgIGFwcElkPVwiODIzMjQ0NDA4MTk3NDcyXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAucGFnZS10cmFuc2l0aW9uLWVudGVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDIwcHgsIDApIHNjYWxlKC45KTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgJHtUSU1FT1VUfW1zLCB0cmFuc2Zvcm0gJHtUSU1FT1VUfW1zICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wYWdlLXRyYW5zaXRpb24tZW50ZXItYWN0aXZlIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApIHNjYWxlKDEpO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAke1RJTUVPVVR9bXMsIHRyYW5zZm9ybSAke1RJTUVPVVR9bXMgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBhZ2UtdHJhbnNpdGlvbi1leGl0IHtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5wYWdlLXRyYW5zaXRpb24tZW50ZXItZG9uZXtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wYWdlLXRyYW5zaXRpb24tZXhpdC1hY3RpdmUge1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgJHtUSU1FT1VUfW1zO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubG9hZGluZy1pbmRpY2F0b3ItYXBwZWFyLFxyXG4gICAgICAgIC5sb2FkaW5nLWluZGljYXRvci1lbnRlciB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubG9hZGluZy1pbmRpY2F0b3ItYXBwZWFyLWFjdGl2ZSxcclxuICAgICAgICAubG9hZGluZy1pbmRpY2F0b3ItZW50ZXItYWN0aXZlIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5ICR7VElNRU9VVH1tcztcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcclxuIl19 */
/*@ sourceURL=C:\\Users\\afmed\\Desktop\\ermire\\src\\components\\Layout\\index.js */`));
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
const layout = new String(".Layout.jsx-1352786242{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background:#fff;width:100%;overflow-x:hidden;-webkit-transition:ease .5s;transition:ease .5s;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWZtZWRcXERlc2t0b3BcXGVybWlyZVxcc3JjXFxjb21wb25lbnRzXFxMYXlvdXRcXHN0eWxlLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJeUIsQUFFZ0IsMEVBQ0csZ0JBQ0wsV0FDTyxrQkFDRSxnREFBQyIsImZpbGUiOiJDOlxcVXNlcnNcXGFmbWVkXFxEZXNrdG9wXFxlcm1pcmVcXHNyY1xcY29tcG9uZW50c1xcTGF5b3V0XFxzdHlsZS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xyXG5cclxuY29uc3Qgc2t5ID0gJ3NreSdcclxuXHJcbmV4cG9ydCBjb25zdCBsYXlvdXQgPSBjc3NgXHJcbiAgLkxheW91dHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uOiBlYXNlIC41cztcclxuICAgfVxyXG4gICBcclxuYFxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\afmed\\\\Desktop\\\\ermire\\\\src\\\\components\\\\Layout\\\\style.jsx */");
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
var _jsxFileName = "C:\\Users\\afmed\\Desktop\\ermire\\src\\components\\Navigation\\index.js";

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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWZtZWRcXERlc2t0b3BcXGVybWlyZVxcc3JjXFxjb21wb25lbnRzXFxOYXZpZ2F0aW9uXFxzdHlsZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSXdCLEFBRWdCLEFBZUgsQUFPRSxBQUdBLEFBSVUsQUFJVCxBQVNRLEFBVUgsQUFTTixBQUlBLEFBS2UsQUFXTCxBQUlLLEFBb0JILEFBS0UsVUE5RmlCLEFBT2QsQUFHRixBQW9DMEIsQUFJQSxRQWJ6QyxFQTZCUSxFQXBEa0IsQUE0RUssR0FwQnZCLEtBaENQLFFBNkJRLEtBNUJmLEFBZ0NVLE1BL0JSLENBYkcsT0FjSyxBQStCRyxJQTVDRixDQTJCRyxXQWJQLENBekRHLEFBaUNNLEFBdURMLElBNUNDLElBMkJILEVBV08sQUEyQkssS0FwQkwsT0E1Q1QsQ0FwQmUsQUErQ1AsQ0F4RE0sS0FNRyxNQXdCTCxBQTRDakIsS0F6RmUsQUE2REcsQUFJRyxDQXlCakIsVUFDRCxTQUNRLEVBaEVvQixXQTZCcEIsQUFlTCxJQXFCSSxDQTVESyxLQXdFWCxHQXpGVSxDQXlEUixNQXFCZSxBQVl5QixRQWhDOUIsT0ExREQsY0E4QkUsRUFlRSxTQUlHLE1BaEVYLDJCQXdEQyxTQXNDTSxFQTdEUCxRQXlDOEIsY0ErQk0sQ0EzRHBDLGdDQTdDYixNQUNFLFFBQ2UsQUEyQ0gsYUFpRHlCLFVBM0ZuQyxDQThCTSxTQTdCSCxNQXNFRyxDQXhDTixNQTdCcUIsSUE4QnRCLEtBd0NRLElBeENQLGFBd0NRLEtBckVHLHFCQUNJLHlCQUNvQiwrQkF1RmxCLHlCQUNILHNCQUNLLGNBekZpQixnREEwRmpCLDhEQUNqQixVQUFDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcYWZtZWRcXERlc2t0b3BcXGVybWlyZVxcc3JjXFxjb21wb25lbnRzXFxOYXZpZ2F0aW9uXFxzdHlsZS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xyXG5cclxuY29uc3QgaG92ZXIgPSAnaG92ZXInXHJcblxyXG5leHBvcnQgY29uc3Qgc3R5bGUgPSBjc3NgXHJcbi5uYXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogZGFya2JsdWU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggZGFya2JsdWU7XHJcbiAgICB3aWR0aDogY2FsYygxMDB2dy8xOCk7XHJcbiAgICBtaW4td2lkdGg6IGNhbGMoMTAwdncvMTgpO1xyXG4gICAgdHJhbnNpdGlvbjogY3ViaWMtYmV6aWVyKDAuMiwgMC41LCAwLjc1LCAxLjgpO1xyXG59XHJcblxyXG4gICAgOmdsb2JhbCgubmF2X19ob3Zlcil7XHJcbiAgICB3aWR0aDogNDUlO1xyXG4gICAgICAgICAgICAgdHJhbnNpdGlvbjogY3ViaWMtYmV6aWVyKDAuMiwgMC41LCAwLjc1LCAxKTtcclxuICAgICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XHJcbiAgICAgICAgICAgICBAa2V5ZnJhbWVzICR7aG92ZXJ9e1xyXG4gICAgICAgICAgICAgIGZyb217ICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgICAgICAgfSB0byB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSAgXHJcbiAgICBcclxuICAgIDpnbG9iYWwoLm5hdl9faG92ZXItLXNob3cpe1xyXG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcclxuICAgICAgYW5pbWF0aW9uOiBob3ZlciAuNXMgLjVzIGJvdGggZWFzZS1vdXQ7XHJcbiAgICB9XHJcblxyXG4ubmF2IHVsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5uYXYgdWwgbGl7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzExMTtcclxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC41cztcclxufVxyXG5cclxuLm1lbnUtYmd7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBcclxuICAmLS1zaG93e1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC41cyBjdWJpYy1iZXppZXIoMC42LDAuNCwwLjUsMSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gIH1cclxuICAmLS1oaWRle1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC41cyBjdWJpYy1iZXppZXIoMC42LDAuNCwwLjUsMSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgfVxyXG59XHJcblxyXG4ubGluayB7XHJcbiAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgcGFkZGluZzogMnJlbSA0LjVyZW07XHJcbiAgICAgIGNvbG9yOiBkYXJrYmx1ZTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIC41cyBjdWJpYy1iZXppZXIoMC42LCAwLCAwLjUsIDEpO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgIFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNHJlbTtcclxuICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cztcclxuICAgICAgfVxyXG5cclxuICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1yb3V0ZSk7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiBkYXJrYmx1ZTtcclxuICAgICAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDcwJTtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHJlbTtcclxuICAgICAgICB3cml0aW5nLW1vZGU6IGhvcml6b250YWwtdGI7XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmV2ZXJ0O1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSkgcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLW91dCAxcztcclxuICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMCUpIHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNzVzIGN1YmljLWJlemllcigwLjYsMC40LDAuNSwxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgJi5tZW51LWJne1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpe1xyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbmA7XHJcbiJdfQ== */
/*@ sourceURL=C:\\Users\\afmed\\Desktop\\ermire\\src\\components\\Navigation\\style.jsx */`);
style.__hash = "2597719756";

/***/ }),

/***/ "./src/containers/HomePage/index.js":
/*!******************************************!*\
  !*** ./src/containers/HomePage/index.js ***!
  \******************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullpage/react-fullpage */ "@fullpage/react-fullpage");
/* harmony import */ var _fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "gsap");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style */ "./src/containers/HomePage/style.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Layout */ "./src/components/Layout/index.js");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-spring */ "react-spring");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\afmed\\Desktop\\ermire\\src\\containers\\HomePage\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


 // import {connect} from 'react-redux'

var Header = function Header(props) {
  return __jsx("svg", props, __jsx("defs", null, __jsx("style", null, ".bb6eee61-d372-49e6-8847-7a1517d6fc7d", `{`, "fill:#fff", `}`, ".a1fa6860-c17d-4696-81da-0f18109978d5,.a2af94c3-2aff-4d68-a1ca-872a71dd9b2f,.a63abffc-a63b-40d0-8386-076780d082bc,.b0441171-4433-4ce8-8fb1-4c342225298d,.b9b0683b-ee2d-4c9f-b3db-7f5a5920d597,.e523d60b-4074-4da4-8da0-01df9bfb20ee,.efbbbdf1-0c48-466c-b5d3-bc8f0ff2cb09,.f82282bf-93b4-4feb-bb32-fae6cca8505b,.fcb7b5c3-1104-4ecb-aed6-ce09f8fc6417", `{`, "fill:none;stroke-miterlimit:10", `}`, ".a2af94c3-2aff-4d68-a1ca-872a71dd9b2f", `{`, "stroke:#c37663;stroke-width:3px;stroke-linecap:round", `}`, ".b2b8150c-b442-4f91-a173-26675e11ef2c,.e523d60b-4074-4da4-8da0-01df9bfb20ee,.f82282bf-93b4-4feb-bb32-fae6cca8505b,.fcb7b5c3-1104-4ecb-aed6-ce09f8fc6417", `{`, "stroke-linecap:round", `}`, ".a1a04f8a-f5f7-415e-88d5-d45449d6d306", `{`, "fill:#93b7fd", `}`, ".b2b8150c-b442-4f91-a173-26675e11ef2c,.f2436745-c180-418a-877f-46bdce5e5ca7", `{`, "fill:#cf4e5c", `}`, ".b40f3836-3d80-42ed-bb5b-ca31ebf0158e", `{`, "fill:#ff7386", `}`, ".a1fa6860-c17d-4696-81da-0f18109978d5", `{`, "stroke:#cf4e5c;stroke-width:3.79px", `}`, ".b0c6fc44-7bbc-41fb-ac4c-feea258ce8da", `{`, "fill:#4649cf", `}`, ".b0441171-4433-4ce8-8fb1-4c342225298d,.b9b0683b-ee2d-4c9f-b3db-7f5a5920d597", `{`, "stroke:#fff", `}`, ".a63abffc-a63b-40d0-8386-076780d082bc,.b9b0683b-ee2d-4c9f-b3db-7f5a5920d597", `{`, "stroke-width:3.02px", `}`, ".a63abffc-a63b-40d0-8386-076780d082bc,.b2b8150c-b442-4f91-a173-26675e11ef2c,.efbbbdf1-0c48-466c-b5d3-bc8f0ff2cb09", `{`, "stroke:#ff7386", `}`, ".b0441171-4433-4ce8-8fb1-4c342225298d,.efbbbdf1-0c48-466c-b5d3-bc8f0ff2cb09", `{`, "stroke-width:3.69px", `}`, ".e523d60b-4074-4da4-8da0-01df9bfb20ee,.f82282bf-93b4-4feb-bb32-fae6cca8505b,.fcb7b5c3-1104-4ecb-aed6-ce09f8fc6417", `{`, "stroke:#4649cf", `}`, ".fcb7b5c3-1104-4ecb-aed6-ce09f8fc6417", `{`, "stroke-width:3.65px", `}`, ".e523d60b-4074-4da4-8da0-01df9bfb20ee", `{`, "stroke-width:3.73px", `}`, ".f82282bf-93b4-4feb-bb32-fae6cca8505b", `{`, "stroke-width:3.8px", `}`, ".b2b8150c-b442-4f91-a173-26675e11ef2c", `{`, "stroke-linejoin:round;stroke-width:4.83px", `}`, ".a90fe32b-13eb-40ab-84a7-88be7341f497", `{`, "fill:#b3c0e8", `}`, ".b0524114-e2c2-4886-b708-c0bd617bc37b", `{`, "fill:#d7dffd", `}`, ".a96d4bf4-10a5-405d-b279-e04fac5ae8b3", `{`, "fill:#f1f2f2", `}`, ".ff6c82eb-5276-466e-8902-d9769cf515b1", `{`, "fill:#00008b", `}`)), __jsx("g", {
    id: "poster-bg"
  }, __jsx("path", {
    className: "bb6eee61-d372-49e6-8847-7a1517d6fc7d",
    d: "M521.73 404.29h469.79v832.54H521.73z"
  }), __jsx("path", {
    className: "a2af94c3-2aff-4d68-a1ca-872a71dd9b2f",
    d: "M1189.54 1759.72c45.26-34.56 119.85-72.48 168-107.49 49-35.64 110.69-103.12 143.33-188.92M594.35 1011.48c-27.85 10.61-53 27.7-59.63 44.5-11.61 29.27-1.62 63.41 16.35 87.34",
    transform: "translate(-185.15 -239.17)"
  }), __jsx("path", {
    className: "a1a04f8a-f5f7-415e-88d5-d45449d6d306",
    d: "M199.27 298.13l-35.95-5.04 22.34-28.61 13.61 33.65z"
  }), __jsx("rect", {
    className: "f2436745-c180-418a-877f-46bdce5e5ca7",
    x: "1532.86",
    y: "1142.27",
    width: "196.36",
    height: "195.94",
    rx: "58.56",
    transform: "rotate(-61.8 1338.794 1275.357)"
  }), __jsx("rect", {
    className: "b40f3836-3d80-42ed-bb5b-ca31ebf0158e",
    x: "1524.85",
    y: "1143.42",
    width: "196.36",
    height: "195.94",
    rx: "58.56",
    transform: "rotate(-61.8 1330.786 1276.51)"
  }), __jsx("circle", {
    className: "a1fa6860-c17d-4696-81da-0f18109978d5",
    cx: "1437.87",
    cy: "1002.22",
    r: "49.57"
  }), __jsx("circle", {
    className: "f2436745-c180-418a-877f-46bdce5e5ca7",
    cx: "1623.03",
    cy: "1241.4",
    r: "42.89",
    transform: "rotate(-85.63 1401.336 1221.73)"
  }), __jsx("rect", {
    className: "a1a04f8a-f5f7-415e-88d5-d45449d6d306",
    x: "1409.97",
    y: "708.21",
    width: "199.06",
    height: "198.64",
    rx: "59.37",
    transform: "rotate(20.5 2078.304 176.026)"
  }), __jsx("rect", {
    className: "b0c6fc44-7bbc-41fb-ac4c-feea258ce8da",
    x: "1408.29",
    y: "700.53",
    width: "199.06",
    height: "198.64",
    rx: "59.37",
    transform: "rotate(20.5 2076.632 168.361)"
  }), __jsx("path", {
    className: "a1a04f8a-f5f7-415e-88d5-d45449d6d306",
    d: "M1446.4 838.93a16.45 16.45 0 1 1 21.16-9.65 16.46 16.46 0 0 1-21.16 9.65zM1498.05 849.46a8.22 8.22 0 0 1-4.82-10.58 43.9 43.9 0 0 0-25.71-56.43 8.22 8.22 0 0 1 5.76-15.4 60.31 60.31 0 0 1 35.36 77.59 8.24 8.24 0 0 1-10.59 4.82z",
    transform: "translate(-185.15 -239.17)"
  }), __jsx("path", {
    className: "a1a04f8a-f5f7-415e-88d5-d45449d6d306",
    d: "M1539.13 864.82a8.21 8.21 0 0 1-4.82-10.58 87.81 87.81 0 0 0-51.44-112.86 8.22 8.22 0 0 1 5.76-15.4 104.06 104.06 0 0 1 61.08 134 8.22 8.22 0 0 1-10.58 4.84z",
    transform: "translate(-185.15 -239.17)"
  }), __jsx("circle", {
    className: "b40f3836-3d80-42ed-bb5b-ca31ebf0158e",
    cx: "1611.96",
    cy: "1041.59",
    r: "12.73",
    transform: "rotate(-23.27 938.685 1371.646)"
  }), __jsx("circle", {
    className: "b9b0683b-ee2d-4c9f-b3db-7f5a5920d597",
    cx: "1426.81",
    cy: "802.42",
    r: "38.43"
  }), __jsx("circle", {
    className: "a63abffc-a63b-40d0-8386-076780d082bc",
    cx: "1426.81",
    cy: "802.42",
    r: "38.43"
  }), __jsx("circle", {
    className: "b40f3836-3d80-42ed-bb5b-ca31ebf0158e",
    cx: "1693.21",
    cy: "1587.73",
    r: "12.73",
    transform: "rotate(-45 1311.922 1691.644)"
  }), __jsx("circle", {
    className: "b9b0683b-ee2d-4c9f-b3db-7f5a5920d597",
    cx: "1508.05",
    cy: "1348.55",
    r: "38.43"
  }), __jsx("circle", {
    className: "a63abffc-a63b-40d0-8386-076780d082bc",
    cx: "1508.05",
    cy: "1348.55",
    r: "38.43"
  }), __jsx("circle", {
    className: "b40f3836-3d80-42ed-bb5b-ca31ebf0158e",
    cx: "601.9",
    cy: "1613.97",
    r: "15.52",
    transform: "rotate(-78.27 362.336 1608.147)"
  }), __jsx("circle", {
    className: "b0441171-4433-4ce8-8fb1-4c342225298d",
    cx: "416.74",
    cy: "1374.79",
    r: "46.85"
  }), __jsx("circle", {
    className: "efbbbdf1-0c48-466c-b5d3-bc8f0ff2cb09",
    cx: "416.74",
    cy: "1374.79",
    r: "46.85"
  }), __jsx("circle", {
    className: "b40f3836-3d80-42ed-bb5b-ca31ebf0158e",
    cx: "471.24",
    cy: "331.62",
    r: "15.52",
    transform: "rotate(-80.74 237.977 320.926)"
  }), __jsx("circle", {
    className: "b0441171-4433-4ce8-8fb1-4c342225298d",
    cx: "286.08",
    cy: "92.44",
    r: "46.85"
  }), __jsx("circle", {
    className: "efbbbdf1-0c48-466c-b5d3-bc8f0ff2cb09",
    cx: "286.08",
    cy: "92.44",
    r: "46.85"
  }), __jsx("circle", {
    className: "b40f3836-3d80-42ed-bb5b-ca31ebf0158e",
    cx: "1330.78",
    cy: "325.84",
    r: "15.52"
  }), __jsx("circle", {
    className: "b0441171-4433-4ce8-8fb1-4c342225298d",
    cx: "1330.78",
    cy: "325.84",
    r: "46.85"
  }), __jsx("circle", {
    className: "efbbbdf1-0c48-466c-b5d3-bc8f0ff2cb09",
    cx: "1330.78",
    cy: "325.84",
    r: "46.85"
  }), __jsx("circle", {
    className: "b40f3836-3d80-42ed-bb5b-ca31ebf0158e",
    cx: "518.09",
    cy: "945.75",
    r: "15.52",
    transform: "rotate(-80.74 284.814 935.039)"
  }), __jsx("circle", {
    className: "b0441171-4433-4ce8-8fb1-4c342225298d",
    cx: "332.94",
    cy: "706.58",
    r: "46.85"
  }), __jsx("circle", {
    className: "efbbbdf1-0c48-466c-b5d3-bc8f0ff2cb09",
    cx: "332.94",
    cy: "706.58",
    r: "46.85"
  }), __jsx("circle", {
    className: "b40f3836-3d80-42ed-bb5b-ca31ebf0158e",
    cx: "1151.74",
    cy: "287.87",
    r: "15.52",
    transform: "rotate(-45 770.462 391.784)"
  }), __jsx("circle", {
    className: "b0441171-4433-4ce8-8fb1-4c342225298d",
    cx: "966.59",
    cy: "48.7",
    r: "46.85"
  }), __jsx("circle", {
    className: "efbbbdf1-0c48-466c-b5d3-bc8f0ff2cb09",
    cx: "966.59",
    cy: "48.7",
    r: "46.85"
  }), __jsx("circle", {
    className: "b40f3836-3d80-42ed-bb5b-ca31ebf0158e",
    cx: "330.75",
    cy: "820.87",
    r: "12.96",
    transform: "rotate(-59.58 29.318 863.03)"
  }), __jsx("circle", {
    className: "b40f3836-3d80-42ed-bb5b-ca31ebf0158e",
    cx: "873.05",
    cy: "253.98",
    r: "12.96",
    transform: "rotate(-21.96 164.29 611.564)"
  }), __jsx("path", {
    className: "b0c6fc44-7bbc-41fb-ac4c-feea258ce8da",
    d: "M785.74 344.79a6.83 6.83 0 1 1-6.82-6.83 6.82 6.82 0 0 1 6.82 6.83z",
    transform: "translate(-185.15 -239.17)"
  }), __jsx("path", {
    className: "a1a04f8a-f5f7-415e-88d5-d45449d6d306",
    d: "M999.44 211.34l-17.64-32.15 36.67.8-19.03 31.35zM1615.05 612.31l-50.77 17.01 10.65-52.48 40.12 35.47z"
  }), __jsx("circle", {
    className: "b40f3836-3d80-42ed-bb5b-ca31ebf0158e",
    cx: "493.3",
    cy: "1253.93",
    r: "13.1",
    transform: "rotate(-10.17 -942.952 2175.204)"
  }), __jsx("path", {
    className: "b0c6fc44-7bbc-41fb-ac4c-feea258ce8da",
    d: "M647.79 506.51a6.83 6.83 0 1 1-6.83-6.83 6.82 6.82 0 0 1 6.83 6.83zM803.22 1783.67a6.83 6.83 0 1 1-6.82-6.83 6.82 6.82 0 0 1 6.82 6.83z",
    transform: "translate(-185.15 -239.17)"
  }), __jsx("path", {
    className: "a1a04f8a-f5f7-415e-88d5-d45449d6d306",
    d: "M1176.45 385.69l-33.6 28.46-7.85-43.33 41.45 14.87zM1367.03 1133.49l-33.6 28.46-7.85-43.33 41.45 14.87zM1348.3 108.24l-33.6 28.46-7.85-43.33 41.45 14.87z"
  }), __jsx("circle", {
    className: "b40f3836-3d80-42ed-bb5b-ca31ebf0158e",
    cx: "1562.79",
    cy: "1476",
    r: "15.68",
    transform: "rotate(-81.85 1332.333 1463.193)"
  }), __jsx("circle", {
    className: "b0c6fc44-7bbc-41fb-ac4c-feea258ce8da",
    cx: "1589.67",
    cy: "1140.29",
    r: "6.82"
  }), __jsx("path", {
    className: "b0c6fc44-7bbc-41fb-ac4c-feea258ce8da",
    d: "M1738.07 668.19a6.83 6.83 0 1 1-6.82-6.82 6.82 6.82 0 0 1 6.82 6.82z",
    transform: "translate(-185.15 -239.17)"
  }), __jsx("circle", {
    className: "b0c6fc44-7bbc-41fb-ac4c-feea258ce8da",
    cx: "1748.1",
    cy: "1135.01",
    r: "6.82",
    transform: "rotate(-22.96 1066.308 1471.117)"
  }), __jsx("path", {
    className: "b0c6fc44-7bbc-41fb-ac4c-feea258ce8da",
    d: "M1559 1695.18a6.83 6.83 0 1 1-6.83-6.82 6.83 6.83 0 0 1 6.83 6.82z",
    transform: "translate(-185.15 -239.17)"
  }), __jsx("circle", {
    className: "b0c6fc44-7bbc-41fb-ac4c-feea258ce8da",
    cx: "78.85",
    cy: "453.82",
    r: "6.82"
  }), __jsx("circle", {
    className: "b0c6fc44-7bbc-41fb-ac4c-feea258ce8da",
    cx: "360.36",
    cy: "131.08",
    r: "6.82"
  }), __jsx("path", {
    className: "a1a04f8a-f5f7-415e-88d5-d45449d6d306",
    d: "M414.47 46.23l-26.49 8.88 5.56-27.38 20.93 18.5zM579.04 1502.94l-50.78 17.01 10.66-52.48 40.12 35.47z"
  }), __jsx("circle", {
    className: "b40f3836-3d80-42ed-bb5b-ca31ebf0158e",
    cx: "1357.06",
    cy: "961.94",
    r: "16.18",
    transform: "rotate(-41.69 950.6 1085.53)"
  }), __jsx("circle", {
    className: "b0c6fc44-7bbc-41fb-ac4c-feea258ce8da",
    cx: "1165.08",
    cy: "528.98",
    r: "6.82"
  }), __jsx("path", {
    className: "b0c6fc44-7bbc-41fb-ac4c-feea258ce8da",
    d: "M1618.78 580.54a6.83 6.83 0 1 1-6.82-6.82 6.82 6.82 0 0 1 6.82 6.82z",
    transform: "translate(-185.15 -239.17)"
  }), __jsx("path", {
    className: "a1a04f8a-f5f7-415e-88d5-d45449d6d306",
    d: "M217.74 1114.01l-50.77 17.01 10.65-52.48 40.12 35.47z"
  }), __jsx("circle", {
    className: "b40f3836-3d80-42ed-bb5b-ca31ebf0158e",
    cx: "1295.91",
    cy: "545.12",
    r: "14.82",
    transform: "rotate(-78.83 1057.739 538.198)"
  }), __jsx("circle", {
    className: "b40f3836-3d80-42ed-bb5b-ca31ebf0158e",
    cx: "1450.9",
    cy: "1776.84",
    r: "14.82",
    transform: "rotate(-66.39 1175.614 1798.781)"
  }), __jsx("circle", {
    className: "b0c6fc44-7bbc-41fb-ac4c-feea258ce8da",
    cx: "252.8",
    cy: "1189.51",
    r: "6.82"
  }), __jsx("path", {
    className: "b0c6fc44-7bbc-41fb-ac4c-feea258ce8da",
    d: "M1450.9 1114.52a6.83 6.83 0 1 1-6.83-6.83 6.82 6.82 0 0 1 6.83 6.83z",
    transform: "translate(-185.15 -239.17)"
  }), __jsx("circle", {
    className: "b0c6fc44-7bbc-41fb-ac4c-feea258ce8da",
    cx: "1194.91",
    cy: "136.23",
    r: "6.82"
  }), __jsx("path", {
    className: "b0c6fc44-7bbc-41fb-ac4c-feea258ce8da",
    d: "M500.12 1056.72a6.82 6.82 0 1 1-6.82-6.83 6.82 6.82 0 0 1 6.82 6.83zM1482.4 978.12a6.83 6.83 0 1 1-6.83-6.83 6.82 6.82 0 0 1 6.83 6.83z",
    transform: "translate(-185.15 -239.17)"
  }), __jsx("path", {
    className: "a1a04f8a-f5f7-415e-88d5-d45449d6d306",
    d: "M155.68 711.06l-39.82 13.34 8.35-41.15 31.47 27.81zM265.88 1483.82l-39.82 13.34 8.36-41.15 31.46 27.81zM39.82 520.72L0 534.06l8.36-41.16 31.46 27.82z"
  }), __jsx("circle", {
    className: "b40f3836-3d80-42ed-bb5b-ca31ebf0158e",
    cx: "984.5",
    cy: "444.09",
    r: "11.06",
    transform: "rotate(-43.69 593.598 555.441)"
  }), __jsx("path", {
    className: "b40f3836-3d80-42ed-bb5b-ca31ebf0158e",
    d: "M388.22 403a11.05 11.05 0 1 1-13.44-8 11.06 11.06 0 0 1 13.44 8z",
    transform: "translate(-185.15 -239.17)"
  }), __jsx("circle", {
    className: "b0c6fc44-7bbc-41fb-ac4c-feea258ce8da",
    cx: "903.65",
    cy: "115.04",
    r: "6.82"
  }), __jsx("rect", {
    className: "a1a04f8a-f5f7-415e-88d5-d45449d6d306",
    x: "242.34",
    y: "1025.44",
    width: "204.93",
    height: "204.5",
    rx: "61.12",
    transform: "rotate(-133.23 200.478 1048.133)"
  }), __jsx("rect", {
    className: "b0c6fc44-7bbc-41fb-ac4c-feea258ce8da",
    x: "240.81",
    y: "1033.75",
    width: "204.93",
    height: "204.5",
    rx: "61.12",
    transform: "rotate(-133.23 198.955 1056.442)"
  }), __jsx("path", {
    className: "a1a04f8a-f5f7-415e-88d5-d45449d6d306",
    d: "M369 1087.76a27.11 27.11 0 0 0-45.41 27.34 27.11 27.11 0 1 0-13.21 52 26.46 26.46 0 0 0 4.27.11l58.27 1.61a1.3 1.3 0 0 0 1.34-1.26l2.07-60.43a27 27 0 0 0-7.32-19.37z",
    transform: "translate(-185.15 -239.17)"
  }), __jsx("path", {
    className: "fcb7b5c3-1104-4ecb-aed6-ce09f8fc6417",
    d: "M205.06 1326.55s37 25.22 52.58 61.31 13.25 82.26 28.25 111.78 41.79 50.49 58.48 49.32 30.39-9.21 34.84-18.63c6.24-13.23 3.75-32.74-10.3-39.86-16.09-8.14-32.77 8.59-35.85 18.26-4.85 15.23-.49 44.6 27.51 57.56s47.15 4.14 64 .71 49 1.85 65.67 32.08 7.19 54.08 7.19 54.08",
    transform: "translate(-185.15 -239.17)"
  }), __jsx("path", {
    className: "e523d60b-4074-4da4-8da0-01df9bfb20ee",
    d: "M1585.28 1598.5s-4.86-27.17 14-45.31 49.56-20 79.79-51.72 31.24-87.82 31.24-87.82",
    transform: "translate(-185.15 -239.17)"
  }), __jsx("path", {
    className: "f82282bf-93b4-4feb-bb32-fae6cca8505b",
    d: "M1250 406.46s21.51-7.86 43.55 2.38 82.3 106 125 115.24 57.77-21.06 54.73-34.64c-3.43-15.3-31.17-36.14-64.9-4.21s-13.37 79.95-13.37 79.95M865 1803.75s17.14-15.19 41.39-13.74 115.44 68.48 158.57 61.4 46-40.77 38.23-52.29c-8.8-13-42.25-22.2-61.93 19.86s16.86 79.3 16.86 79.3",
    transform: "translate(-185.15 -239.17)"
  }), __jsx("rect", {
    className: "f2436745-c180-418a-877f-46bdce5e5ca7",
    x: "368.96",
    y: "569.48",
    width: "190.52",
    height: "190.12",
    rx: "56.82",
    transform: "rotate(-122.03 305.408 596.24)"
  }), __jsx("rect", {
    className: "b40f3836-3d80-42ed-bb5b-ca31ebf0158e",
    x: "366.07",
    y: "576.79",
    width: "190.52",
    height: "190.12",
    rx: "56.82",
    transform: "rotate(-122.03 302.518 603.54)"
  }), __jsx("path", {
    className: "b2b8150c-b442-4f91-a173-26675e11ef2c",
    transform: "rotate(-32.03 -38.333 890.04)",
    d: "M415.75 652.16h110.2v69.82h-110.2z"
  }), __jsx("path", {
    className: "b2b8150c-b442-4f91-a173-26675e11ef2c",
    d: "M257.61 506.88l24.57-64.61 68.85 6.16-93.42 58.45zM220.47 447.52l24.58-64.6 68.84 6.15-93.42 58.45z"
  }), __jsx("path", {
    className: "b2b8150c-b442-4f91-a173-26675e11ef2c",
    d: "M220.47 447.52l24.58-64.6 68.84 6.15-93.42 58.45z"
  }), __jsx("path", {
    className: "b2b8150c-b442-4f91-a173-26675e11ef2c",
    d: "M313.89 389.07l-20.61 54.19-11.1-.99-3.96 10.42-57.75-5.17 93.42-58.45z"
  }), __jsx("path", {
    className: "a1a04f8a-f5f7-415e-88d5-d45449d6d306",
    d: "M701.9 166.53l-.28-56.04 151-36.09-150.72 92.13z"
  }), __jsx("path", {
    className: "a90fe32b-13eb-40ab-84a7-88be7341f497",
    d: "M850.51 75.22L701.9 166.53l32.63-37.01 115.98-54.3z"
  }), __jsx("path", {
    className: "b0c6fc44-7bbc-41fb-ac4c-feea258ce8da",
    d: "M852.62 74.4l-118.09 55.12 43.02 49.7L852.62 74.4zM701.62 110.49l-47.99-29.18 198.99-6.91-151 36.09z"
  }), __jsx("path", {
    className: "b0c6fc44-7bbc-41fb-ac4c-feea258ce8da",
    d: "M497.44 459.16a2 2 0 0 1-1.81-.5 58 58 0 0 1-4.3-4.47 2 2 0 0 1 3-2.61 57.67 57.67 0 0 0 4 4.17 2 2 0 0 1 .1 2.82 2 2 0 0 1-.99.59zM800.54 463.09c-1.73.39-3.49.75-5.24 1.1a2 2 0 1 1-.77-3.93c3.94-.77 7.91-1.68 11.73-2.69a2 2 0 0 1 2.45 1.43 2 2 0 0 1-1.43 2.44c-2.21.56-4.48 1.14-6.74 1.65zm-17.19 3h-.18c-4 .53-8.13.95-12.22 1.24a2 2 0 0 1-.29-4c4-.29 8.05-.7 12-1.22a2 2 0 0 1 .7 3.93zm35.51-8.09a2 2 0 0 1-1.08-3.85c3.82-1.3 7.6-2.74 11.23-4.28a2 2 0 1 1 1.56 3.68c-3.72 1.58-7.59 3.06-11.51 4.39zm-59.77 9.93a1.84 1.84 0 0 1-.41.05c-4.08.06-8.21 0-12.28-.18a2 2 0 0 1 .17-4c4 .18 8 .24 12 .18a2 2 0 0 1 .47 3.95zm82.13-19.47a2 2 0 0 1-1.37-3.72c3.58-1.87 7.06-3.9 10.36-6a2 2 0 1 1 2.17 3.36c-3.4 2.19-7 4.27-10.67 6.2a1.53 1.53 0 0 1-.49.12zm-106.43 18.37a1.94 1.94 0 0 1-.64 0c-4.09-.41-8.19-1-12.18-1.61a2 2 0 0 1 .64-3.95c3.92.64 7.94 1.17 11.95 1.58a2 2 0 0 1 .23 3.94zm126.85-31.57a2 2 0 0 1-1.68-3.53 115.45 115.45 0 0 0 9-7.87 2 2 0 0 1 2.78 2.87 119.55 119.55 0 0 1-9.3 8.14 2.05 2.05 0 0 1-.8.39zM636.75 484c-3.94.82-8 1.54-12.11 2.12a2 2 0 0 1-.57-4c4-.57 8-1.27 11.87-2.07a2 2 0 0 1 .84 3.91zm11.82-2.86a2 2 0 0 1-1-3.88c3.91-1.09 7.77-2.32 11.45-3.64a2 2 0 1 1 1.35 3.76c-3.77 1.36-7.72 2.62-11.73 3.73zm-35.89 6.33a1.26 1.26 0 0 1-.27 0c-4 .35-8.18.58-12.26.7a2 2 0 0 1-.12-4c4-.12 8.06-.35 12-.68a2 2 0 0 1 .61 3.94zm58.75-14.6a2 2 0 0 1-1.27-3.77c3.7-1.69 7.28-3.53 10.65-5.47a2 2 0 0 1 2 3.47c-3.48 2-7.17 3.9-11 5.64a2 2 0 0 1-.38.12zm39.36-9.95a2 2 0 0 1-.88 0c-4-.92-8-2-11.9-3.14a2 2 0 0 1-1.42-2c-1.11.88-2.25 1.75-3.4 2.59a2 2 0 1 1-2.36-3.23 95.66 95.66 0 0 0 9.18-7.59 2 2 0 0 1 2.74 2.92q-1.86 1.74-3.85 3.42a1.31 1.31 0 0 1 .27.06c3.76 1.14 7.68 2.17 11.63 3.08a2 2 0 0 1 1.5 2.39 2 2 0 0 1-1.51 1.49zm-122.42 25.24a2.73 2.73 0 0 1-.5 0c-4.08-.11-8.2-.34-12.25-.68a2 2 0 0 1 .33-4c4 .33 8 .55 12 .66a2 2 0 0 1 .39 4zm-24.23-2a1.93 1.93 0 0 1-.72 0c-4.1-.58-8.17-1.29-12.11-2.11a2 2 0 0 1 .81-3.91c3.86.79 7.85 1.49 11.86 2.06a2 2 0 0 1 .16 3.93zm123.38-30.28a2 2 0 0 1-1.16-.09c-3.9-1.51-7.71-3.17-11.3-4.93a2 2 0 0 1 1.75-3.59c3.5 1.71 7.2 3.32 11 4.79a2 2 0 0 1-.29 3.82zM710.09 444a2 2 0 0 1-2-3.2 79.55 79.55 0 0 0 6.74-9.75 2 2 0 1 1 3.45 2 83.35 83.35 0 0 1-7.08 10.23 2 2 0 0 1-1.11.72zm-169.76 37.17a1.92 1.92 0 0 1-1 0c-4.05-1.14-8-2.42-11.72-3.81a2 2 0 1 1 1.39-3.75c3.63 1.35 7.47 2.6 11.42 3.71a2 2 0 0 1-.11 3.88zm125.39-36.05a2 2 0 0 1-1.49-.25 103.58 103.58 0 0 1-10.14-7.12 2 2 0 0 1 2.49-3.13 98.72 98.72 0 0 0 9.76 6.85 2 2 0 0 1 .64 2.76 2 2 0 0 1-1.26.89zm-148.14 27.51a2 2 0 0 1-1.32-.15 99.47 99.47 0 0 1-10.79-6.13 2 2 0 1 1 2.2-3.34 94 94 0 0 0 10.33 5.87 2 2 0 0 1-.44 3.75zm204.74-49.49a2 2 0 0 1-1.17-.09 2 2 0 0 1-1.13-2.6 79.33 79.33 0 0 0 3.5-11.31 2 2 0 0 1 3.9.9 81.83 81.83 0 0 1-3.68 11.88 2 2 0 0 1-1.42 1.22zm-75.49 6.78a2 2 0 0 1-1.9-.58 72.25 72.25 0 0 1-7.75-9.78 2 2 0 1 1 3.34-2.2 68.74 68.74 0 0 0 7.33 9.24 2 2 0 0 1-1 3.32zm81-30.38a1.84 1.84 0 0 1-.62 0 2 2 0 0 1-1.81-2.16c.17-1.94.28-3.93.33-5.92s0-4-.06-6a2 2 0 1 1 4-.19c.1 2 .12 4.12.07 6.25s-.17 4.14-.35 6.17a2 2 0 0 1-1.59 1.85zm-94.18 10.14a2 2 0 0 1-2.28-1.2 56.38 56.38 0 0 1-2.88-9.05c-.22-1-.42-2-.59-3.06a2 2 0 0 1 4-.63c.15.93.34 1.88.55 2.81A53.14 53.14 0 0 0 635 407a2 2 0 0 1-1.1 2.6 1.73 1.73 0 0 1-.28.08zm92.83-34.32a2 2 0 0 1-2.38-1.5 47.14 47.14 0 0 0-4-10.93 2 2 0 1 1 3.55-1.84A51.14 51.14 0 0 1 728 373a2 2 0 0 1-1.49 2.4zM630 385.9a1.87 1.87 0 0 1-.67 0 2 2 0 0 1-1.75-2.22 43.39 43.39 0 0 1 3.31-12.25 2 2 0 1 1 3.67 1.59 39.53 39.53 0 0 0-3 11.13 2 2 0 0 1-1.56 1.75zm85.21-31.74a2 2 0 0 1-1.85-.53 35.88 35.88 0 0 0-9.31-6.69 2 2 0 1 1 1.79-3.58 39.48 39.48 0 0 1 10.34 7.44 2 2 0 0 1 0 2.83 2 2 0 0 1-.97.53zm-75.75 9.69a2 2 0 0 1-2-3.21 54.86 54.86 0 0 1 9-8.82 2 2 0 1 1 2.46 3.15 50.45 50.45 0 0 0-8.33 8.18 2 2 0 0 1-1.13.7zm54.41-20.53a2 2 0 0 1-.8 0 49.65 49.65 0 0 0-11.64-.66 2 2 0 0 1-.23-4 53.34 53.34 0 0 1 12.58.72 2 2 0 0 1 .09 3.92zm-35.46 5.57a2 2 0 0 1-1.32-3.74 64.06 64.06 0 0 1 11.72-4.44 2 2 0 1 1 1.05 3.86 60.37 60.37 0 0 0-11 4.16 1.62 1.62 0 0 1-.45.16zM879.14 418.19a2 2 0 0 1-2-3.22 98.29 98.29 0 0 0 3.61-4.65 2 2 0 0 1 3.23 2.36 106.05 106.05 0 0 1-3.75 4.83 2 2 0 0 1-1.09.68zM1726.67 1045.72a1.6 1.6 0 0 1-.19 1.49 46.46 46.46 0 0 1-3.08 3.88 1.59 1.59 0 0 1-2.4-2.09 46.14 46.14 0 0 0 2.87-3.62 1.59 1.59 0 0 1 2.22-.38 1.52 1.52 0 0 1 .58.72zM1697 805.41c.5 1.33 1 2.69 1.44 4a1.6 1.6 0 1 1-3 1c-1-3-2.19-6.07-3.4-9a1.62 1.62 0 0 1 .87-2.09 1.59 1.59 0 0 1 2.08.86c.71 1.76 1.39 3.5 2.01 5.23zm4.27 13.28a.58.58 0 0 1 0 .14c.85 3.12 1.63 6.33 2.3 9.53a1.59 1.59 0 1 1-3.12.66c-.66-3.14-1.43-6.29-2.26-9.35a1.59 1.59 0 0 1 3-1zM1691 791.47a1.59 1.59 0 0 1-2.92 1.27c-1.44-2.89-3-5.72-4.6-8.42a1.6 1.6 0 0 1 2.74-1.64c1.65 2.77 3.24 5.68 4.72 8.63zm14.33 46.23a3 3 0 0 1 .08.32c.48 3.22.88 6.49 1.18 9.73a1.6 1.6 0 0 1-3.18.3c-.29-3.18-.68-6.4-1.16-9.55a1.6 1.6 0 0 1 3.08-.8zM1681 774.81a1.6 1.6 0 0 1-2.8 1.48c-1.87-2.63-3.85-5.17-5.89-7.55a1.6 1.6 0 0 1 2.43-2.08c2.1 2.46 4.14 5.07 6.07 7.78a1.62 1.62 0 0 1 .19.37zm26.1 82.19a1.71 1.71 0 0 1 .1.51c.11 3.28.12 6.58 0 9.81a1.6 1.6 0 0 1-3.2-.08c.09-3.17.07-6.41 0-9.62a1.6 1.6 0 0 1 1.54-1.66 1.63 1.63 0 0 1 1.56 1.04zm-38.71-97a1.59 1.59 0 0 1-2.6 1.71 91.77 91.77 0 0 0-7.2-6.27 1.6 1.6 0 1 1 2-2.52 96.1 96.1 0 0 1 7.45 6.49 1.62 1.62 0 0 1 .35.66zm62.88 172.71c1.07 3 2.08 6.18 3 9.36a1.6 1.6 0 0 1-3.07.88c-.89-3.11-1.87-6.2-2.92-9.17a1.6 1.6 0 0 1 3-1.09zm-3.54-9a1.6 1.6 0 0 1-3 1.19c-1.28-3-2.67-5.89-4.12-8.67a1.6 1.6 0 0 1 2.84-1.47c1.48 2.84 2.9 5.83 4.22 8.88zm8.89 27.73a.83.83 0 0 1 .06.21c.71 3.17 1.34 6.4 1.88 9.63a1.6 1.6 0 0 1-3.16.52c-.52-3.17-1.14-6.34-1.83-9.45a1.59 1.59 0 0 1 3-.91zm-17.9-44.92a1.6 1.6 0 0 1-2.85 1.41c-1.74-2.75-3.58-5.38-5.48-7.84a1.6 1.6 0 1 1 2.53-2c2 2.53 3.86 5.25 5.65 8.08a2.1 2.1 0 0 1 .15.37zm-12.14-30.08a1.66 1.66 0 0 1 .1.7c-.3 3.3-.7 6.58-1.21 9.76a1.61 1.61 0 0 1-1.43 1.34c.82.78 1.63 1.59 2.42 2.41a1.59 1.59 0 0 1 0 2.26 1.61 1.61 0 0 1-2.26 0 76.59 76.59 0 0 0-7-6.45 1.6 1.6 0 0 1 2-2.48c1 .85 2.1 1.74 3.13 2.67a.86.86 0 0 1 0-.22c.49-3.1.89-6.31 1.17-9.53a1.6 1.6 0 0 1 3.09-.42zm33.22 94.16a2.23 2.23 0 0 1 .09.39c.35 3.24.62 6.53.79 9.77a1.6 1.6 0 0 1-3.19.16c-.17-3.17-.43-6.4-.78-9.59a1.6 1.6 0 0 1 3.09-.73zm1 19.4a1.69 1.69 0 0 1 .1.56c0 3.31-.14 6.61-.36 9.81a1.6 1.6 0 1 1-3.19-.21c.21-3.14.33-6.38.35-9.61a1.6 1.6 0 0 1 3.1-.55zm-37.31-94.38a1.63 1.63 0 0 1 .06.93c-.78 3.25-1.68 6.44-2.68 9.48a1.6 1.6 0 0 1-3-1c1-2.95 1.85-6.06 2.6-9.22a1.6 1.6 0 0 1 3-.19zm-11.78-16.59a1.63 1.63 0 0 1-.13 1.39 1.61 1.61 0 0 1-2.19.54 63.71 63.71 0 0 0-8.44-4.28 1.6 1.6 0 0 1 1.22-3 67.71 67.71 0 0 1 8.87 4.49 1.64 1.64 0 0 1 .69.88zm47.73 130.34a1.7 1.7 0 0 1 .09.78c-.47 3.33-1.06 6.59-1.75 9.69a1.6 1.6 0 1 1-3.12-.7c.67-3 1.25-6.19 1.7-9.43a1.6 1.6 0 0 1 3.08-.34zm-42.08-95.34a1.59 1.59 0 0 1 0 1.21 82.57 82.57 0 0 1-4.54 8.8 1.6 1.6 0 1 1-2.74-1.64 79 79 0 0 0 4.36-8.46 1.6 1.6 0 0 1 3 .09zm37.78 114.27a1.6 1.6 0 0 1 0 1.06 78 78 0 0 1-3.68 9.2 1.59 1.59 0 1 1-2.88-1.37 76.62 76.62 0 0 0 3.53-8.83 1.6 1.6 0 0 1 2-1 1.57 1.57 0 0 1 1.05.96zm-61.3-156.68a1.57 1.57 0 0 1 .06.94 1.6 1.6 0 0 1-1.93 1.17 62.77 62.77 0 0 0-9.34-1.55 1.6 1.6 0 0 1-1.44-1.74 1.59 1.59 0 0 1 1.73-1.44 66.7 66.7 0 0 1 9.81 1.62 1.6 1.6 0 0 1 1.13 1.02zm13.53 59a1.59 1.59 0 0 1-.26 1.56 57.67 57.67 0 0 1-6.9 7.2 1.6 1.6 0 0 1-2.1-2.41 54.81 54.81 0 0 0 6.52-6.8 1.6 1.6 0 0 1 2.25-.23 1.57 1.57 0 0 1 .51.71zm-32.79-60.8a2 2 0 0 1 .1.48 1.61 1.61 0 0 1-1.52 1.68c-1.56.07-3.14.2-4.72.37s-3.2.42-4.71.7a1.6 1.6 0 1 1-.59-3.15c1.59-.29 3.26-.53 4.95-.72s3.29-.32 4.91-.39a1.59 1.59 0 0 1 1.6 1.06zm18.2 73.44a1.61 1.61 0 0 1-.7 1.94 45.85 45.85 0 0 1-6.86 3.25c-.77.29-1.57.56-2.35.8a1.6 1.6 0 0 1-.93-3.06c.72-.22 1.45-.47 2.17-.73a42.82 42.82 0 0 0 6.37-3 1.6 1.6 0 0 1 2.18.58c.07.08.1.17.14.25zm-37.2-69.76a1.59 1.59 0 0 1-.93 2.05 38.06 38.06 0 0 0-8.22 4.32 1.6 1.6 0 0 1-1.84-2.61 41 41 0 0 1 8.92-4.69 1.58 1.58 0 0 1 2.06.92zm18.77 75.2a1.78 1.78 0 0 1 .1.52 1.61 1.61 0 0 1-1.57 1.63 35.06 35.06 0 0 1-10.06-1.3 1.6 1.6 0 0 1 .87-3.08 31.82 31.82 0 0 0 9.13 1.19 1.59 1.59 0 0 1 1.55 1.07zm-34.33-64a1.6 1.6 0 0 1-.22 1.53 28.16 28.16 0 0 0-4.29 8.09 1.6 1.6 0 0 1-3-1 31.69 31.69 0 0 1 4.76-9 1.6 1.6 0 0 1 2.77.41zm15.86 58.9a1.63 1.63 0 0 1-.13 1.39 1.6 1.6 0 0 1-2.19.54 43.33 43.33 0 0 1-8-6.16 1.6 1.6 0 1 1 2.23-2.29 40.4 40.4 0 0 0 7.37 5.71 1.72 1.72 0 0 1 .74.83zm-22.13-40.84a1.67 1.67 0 0 1 .1.63 38.77 38.77 0 0 0 .73 9.28 1.6 1.6 0 1 1-3.14.62 43 43 0 0 1-.79-10 1.6 1.6 0 0 1 3.1-.49zm8.24 27.46a1.6 1.6 0 0 1-2.82 1.45 51.27 51.27 0 0 1-4.78-8.8 1.6 1.6 0 0 1 2.94-1.24 48.09 48.09 0 0 0 4.49 8.25 1.8 1.8 0 0 1 .18.36zM1653 748.07a1.6 1.6 0 0 1-2.34 1.91c-1.34-.82-2.71-1.61-4.07-2.35a1.6 1.6 0 0 1 1.52-2.81c1.42.77 2.84 1.59 4.23 2.44a1.63 1.63 0 0 1 .66.81z",
    transform: "translate(-185.15 -239.17)"
  })), __jsx("g", {
    id: "aceb859d-fb3c-406c-a2de-2a6ae1bc6e5c",
    "'data-name'": "Phone and hand"
  }, __jsx("rect", {
    className: "b0524114-e2c2-4886-b708-c0bd617bc37b",
    x: "483.77",
    y: "257.9",
    width: "561.42",
    height: "1086.25",
    rx: "91.97"
  }), __jsx("path", {
    className: "bb6eee61-d372-49e6-8847-7a1517d6fc7d",
    d: "M529.48 369.48h470v863.08h-470z"
  }), __jsx("path", {
    className: "a96d4bf4-10a5-405d-b279-e04fac5ae8b3",
    d: "M529.48 369.48h470v863.08h-470z"
  }), __jsx("path", {
    className: "bb6eee61-d372-49e6-8847-7a1517d6fc7d",
    d: "M529.48 369.48h470v72.9h-470z"
  }), __jsx("path", {
    className: "a90fe32b-13eb-40ab-84a7-88be7341f497",
    d: "M949.63 1560.74a34.87 34.87 0 1 1 34.87-34.87 34.91 34.91 0 0 1-34.87 34.87zm0-62.92a28.05 28.05 0 1 0 28.06 28 28.08 28.08 0 0 0-28.06-28zM1054.93 565h-162a5.07 5.07 0 0 1-5.07-5.08 5.07 5.07 0 0 1 5.07-5.07h162a5.07 5.07 0 0 1 5.07 5.07 5.07 5.07 0 0 1-5.07 5.08zM867.44 565h-23.1a5.07 5.07 0 0 1-5.08-5.08 5.07 5.07 0 0 1 5.08-5.07h23.1a5.07 5.07 0 0 1 5.08 5.07 5.07 5.07 0 0 1-5.08 5.08z",
    transform: "translate(-185.15 -239.17)"
  })), __jsx("g", {
    id: "e24e36f8-108a-4063-a3e3-8078fc20b755",
    className: "chat"
  }, __jsx("g", {
    id: "e19c349d-f602-4dbb-bd7e-4a25eb582d83"
  }, __jsx("path", {
    className: "ff6c82eb-5276-466e-8902-d9769cf515b1",
    d: "M1240 1375.12l-19-70.89v-97.52a66.55 66.55 0 0 0-66.55-66.56H784.07a66.56 66.56 0 0 0-66.56 66.56v97.59a66.56 66.56 0 0 0 66.56 66.56h370.25l70.89 19a12 12 0 0 0 14.79-14.74z",
    transform: "translate(-185.15 -239.17)"
  }), __jsx("circle", {
    className: "bb6eee61-d372-49e6-8847-7a1517d6fc7d",
    cx: "954.25",
    cy: "978.22",
    r: "36.53"
  }), __jsx("path", {
    className: "bb6eee61-d372-49e6-8847-7a1517d6fc7d",
    d: "M984 1210.39h95.53a9.27 9.27 0 0 0 9.26-9.26 9.27 9.27 0 0 0-9.26-9.26H984a9.27 9.27 0 0 0-9.26 9.26 9.27 9.27 0 0 0 9.26 9.26z",
    transform: "translate(-185.15 -239.17)"
  }), __jsx("path", {
    className: "b0c6fc44-7bbc-41fb-ac4c-feea258ce8da",
    d: "M779.07 1246.92h300.48a9.27 9.27 0 0 0 9.26-9.26 9.27 9.27 0 0 0-9.26-9.26H779.07a9.26 9.26 0 0 0-9.26 9.26 9.26 9.26 0 0 0 9.26 9.26zM779.07 1283.45h401.57a9.25 9.25 0 0 0 9.25-9.26 9.25 9.25 0 0 0-9.25-9.25H779.07a9.25 9.25 0 0 0-9.26 9.25 9.25 9.25 0 0 0 9.26 9.26zM779.07 1320h401.57a9.25 9.25 0 0 0 9.25-9.25 9.25 9.25 0 0 0-9.25-9.26H779.07a9.25 9.25 0 0 0-9.26 9.26 9.25 9.25 0 0 0 9.26 9.25z",
    transform: "translate(-185.15 -239.17)"
  })), __jsx("g", {
    id: "a31b832d-1e0d-43ba-bec9-5cfdb815a07f"
  }, __jsx("path", {
    className: "ff6c82eb-5276-466e-8902-d9769cf515b1",
    d: "M1240 769.12l-19-70.89v-97.52a66.55 66.55 0 0 0-66.55-66.56H784.07a66.56 66.56 0 0 0-66.56 66.56v97.59a66.56 66.56 0 0 0 66.56 66.56h370.25l70.89 19a12 12 0 0 0 14.79-14.74z",
    transform: "translate(-185.15 -239.17)"
  }), __jsx("circle", {
    className: "bb6eee61-d372-49e6-8847-7a1517d6fc7d",
    cx: "954.25",
    cy: "372.22",
    r: "36.53"
  }), __jsx("rect", {
    className: "bb6eee61-d372-49e6-8847-7a1517d6fc7d",
    x: "974.76",
    y: "585.87",
    width: "114.04",
    height: "18.52",
    rx: "9.26",
    transform: "rotate(180 939.21 475.54)"
  }), __jsx("path", {
    className: "b0c6fc44-7bbc-41fb-ac4c-feea258ce8da",
    d: "M779.07 640.92h300.48a9.27 9.27 0 0 0 9.26-9.26 9.27 9.27 0 0 0-9.26-9.26H779.07a9.26 9.26 0 0 0-9.26 9.26 9.26 9.26 0 0 0 9.26 9.26zM779.07 677.45h401.57a9.25 9.25 0 0 0 9.25-9.26 9.26 9.26 0 0 0-9.25-9.26H779.07a9.26 9.26 0 0 0-9.26 9.26 9.25 9.25 0 0 0 9.26 9.26zM779.07 714h401.57a9.25 9.25 0 0 0 9.25-9.25 9.25 9.25 0 0 0-9.25-9.26H779.07a9.25 9.25 0 0 0-9.26 9.26 9.25 9.25 0 0 0 9.26 9.25z",
    transform: "translate(-185.15 -239.17)"
  })), __jsx("g", {
    id: "eaba0afd-ea5a-4b07-ba58-47cb2f088590"
  }, __jsx("path", {
    className: "b40f3836-3d80-42ed-bb5b-ca31ebf0158e",
    d: "M659.31 1072.12l19-70.89v-97.52a66.56 66.56 0 0 1 66.56-66.56h370.32a66.56 66.56 0 0 1 66.56 66.56v97.59a66.56 66.56 0 0 1-66.56 66.56H745l-70.9 19a12 12 0 0 1-14.79-14.74z",
    transform: "translate(-185.15 -239.17)"
  }), __jsx("circle", {
    className: "bb6eee61-d372-49e6-8847-7a1517d6fc7d",
    cx: "574.71",
    cy: "675.22",
    r: "36.53"
  }), __jsx("path", {
    className: "bb6eee61-d372-49e6-8847-7a1517d6fc7d",
    d: "M915.24 907.39h-95.52a9.26 9.26 0 0 1-9.26-9.26 9.26 9.26 0 0 1 9.26-9.26h95.52a9.26 9.26 0 0 1 9.26 9.26 9.26 9.26 0 0 1-9.26 9.26z",
    transform: "translate(-185.15 -239.17)"
  }), __jsx("path", {
    className: "f2436745-c180-418a-877f-46bdce5e5ca7",
    d: "M1120.2 943.92H819.72a9.26 9.26 0 0 1-9.26-9.26 9.26 9.26 0 0 1 9.26-9.26h300.48a9.27 9.27 0 0 1 9.26 9.26 9.27 9.27 0 0 1-9.26 9.26zM1120.2 980.45H718.63a9.25 9.25 0 0 1-9.26-9.26 9.25 9.25 0 0 1 9.26-9.25h401.57a9.26 9.26 0 0 1 9.26 9.25 9.26 9.26 0 0 1-9.26 9.26zM1120.2 1017H718.63a9.25 9.25 0 0 1-9.26-9.25 9.25 9.25 0 0 1 9.26-9.26h401.57a9.26 9.26 0 0 1 9.26 9.26 9.26 9.26 0 0 1-9.26 9.25z",
    transform: "translate(-185.15 -239.17)"
  }))));
};

Header.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1615.05 1661.01"
};

var HeaderBg = function HeaderBg(props) {
  return __jsx("svg", props, __jsx("defs", null, __jsx("style", null, ".a471b2c4-7435-4b86-902d-28bd29591ea4,.a518ff48-143a-4fb6-8f18-87339788deb5,.a9be1f25-49e1-4131-a718-c0d01d1d8f1b,.ae12c432-cb9c-4793-8c09-b69f7d34b2f0,.b7381220-ed65-46ee-a6a3-a79ebafa359a,.e186f018-8eb7-4afb-92a2-a04281efda77,.e41e7199-fac5-49c5-bb92-058a16d0439a,.ef0b24f9-d0bf-4b97-b0b3-efb5b5df1752,.f538569b-1bad-450d-bc30-8d70d396fc28", `{`, "fill:none;stroke-miterlimit:10", `}`, ".f538569b-1bad-450d-bc30-8d70d396fc28", `{`, "stroke:#c37663;stroke-width:3px", `}`, ".a518ff48-143a-4fb6-8f18-87339788deb5,.a9be1f25-49e1-4131-a718-c0d01d1d8f1b,.e41e7199-fac5-49c5-bb92-058a16d0439a,.f538569b-1bad-450d-bc30-8d70d396fc28,.fd94f594-5624-4448-ac69-65001bd81610", `{`, "stroke-linecap:round", `}`, ".bbfaca0b-47ca-4d7c-b33d-9bb0f171cd9a", `{`, "fill:#93b7fd", `}`, ".b6e651bd-a461-4bc8-90da-552e4e77deb9,.fd94f594-5624-4448-ac69-65001bd81610", `{`, "fill:#cf4e5c", `}`, ".e61552d9-7f32-4de4-ac4d-07b1c5cdae00", `{`, "fill:#ff7386", `}`, ".ef0b24f9-d0bf-4b97-b0b3-efb5b5df1752", `{`, "stroke:#cf4e5c;stroke-width:3.79px", `}`, ".af1e5619-26bb-4ac9-9f46-d7c2a927e79b", `{`, "fill:#4649cf", `}`, ".a471b2c4-7435-4b86-902d-28bd29591ea4,.e186f018-8eb7-4afb-92a2-a04281efda77", `{`, "stroke:#fff", `}`, ".a471b2c4-7435-4b86-902d-28bd29591ea4,.b7381220-ed65-46ee-a6a3-a79ebafa359a", `{`, "stroke-width:3.02px", `}`, ".ae12c432-cb9c-4793-8c09-b69f7d34b2f0,.b7381220-ed65-46ee-a6a3-a79ebafa359a,.fd94f594-5624-4448-ac69-65001bd81610", `{`, "stroke:#ff7386", `}`, ".ae12c432-cb9c-4793-8c09-b69f7d34b2f0,.e186f018-8eb7-4afb-92a2-a04281efda77", `{`, "stroke-width:3.69px", `}`, ".a518ff48-143a-4fb6-8f18-87339788deb5,.a9be1f25-49e1-4131-a718-c0d01d1d8f1b,.e41e7199-fac5-49c5-bb92-058a16d0439a", `{`, "stroke:#4649cf", `}`, ".e41e7199-fac5-49c5-bb92-058a16d0439a", `{`, "stroke-width:3.65px", `}`, ".a518ff48-143a-4fb6-8f18-87339788deb5", `{`, "stroke-width:3.73px", `}`, ".a9be1f25-49e1-4131-a718-c0d01d1d8f1b", `{`, "stroke-width:3.8px", `}`, ".fd94f594-5624-4448-ac69-65001bd81610", `{`, "stroke-linejoin:round;stroke-width:4.83px", `}`, ".bdadb1ab-3fc2-42ec-bf10-96b2eaefa4ea", `{`, "fill:#b3c0e8", `}`)), __jsx("path", {
    className: "f538569b-1bad-450d-bc30-8d70d396fc28",
    d: "M1189.54 1759.72c45.26-34.56 119.85-72.48 168-107.49 49-35.64 110.69-103.12 143.33-188.92M594.35 1011.48c-27.85 10.61-53 27.7-59.63 44.5-11.61 29.27-1.62 63.41 16.35 87.34",
    transform: "translate(-185.15 -239.17)"
  }), __jsx("path", {
    className: "bbfaca0b-47ca-4d7c-b33d-9bb0f171cd9a",
    d: "M199.27 298.13l-35.95-5.04 22.34-28.61 13.61 33.65z"
  }), __jsx("rect", {
    className: "b6e651bd-a461-4bc8-90da-552e4e77deb9",
    x: "1532.86",
    y: "1142.27",
    width: "196.36",
    height: "195.94",
    rx: "58.56",
    transform: "rotate(-61.8 1338.794 1275.357)"
  }), __jsx("rect", {
    className: "e61552d9-7f32-4de4-ac4d-07b1c5cdae00",
    x: "1524.85",
    y: "1143.42",
    width: "196.36",
    height: "195.94",
    rx: "58.56",
    transform: "rotate(-61.8 1330.786 1276.51)"
  }), __jsx("circle", {
    className: "ef0b24f9-d0bf-4b97-b0b3-efb5b5df1752",
    cx: "1437.87",
    cy: "1002.22",
    r: "49.57"
  }), __jsx("circle", {
    className: "b6e651bd-a461-4bc8-90da-552e4e77deb9",
    cx: "1623.03",
    cy: "1241.4",
    r: "42.89",
    transform: "rotate(-85.63 1401.336 1221.73)"
  }), __jsx("rect", {
    className: "bbfaca0b-47ca-4d7c-b33d-9bb0f171cd9a",
    x: "1409.97",
    y: "708.21",
    width: "199.06",
    height: "198.64",
    rx: "59.37",
    transform: "rotate(20.5 2078.304 176.026)"
  }), __jsx("rect", {
    className: "af1e5619-26bb-4ac9-9f46-d7c2a927e79b",
    x: "1408.29",
    y: "700.53",
    width: "199.06",
    height: "198.64",
    rx: "59.37",
    transform: "rotate(20.5 2076.632 168.361)"
  }), __jsx("path", {
    className: "bbfaca0b-47ca-4d7c-b33d-9bb0f171cd9a",
    d: "M1446.4 838.93a16.45 16.45 0 1 1 21.16-9.65 16.46 16.46 0 0 1-21.16 9.65zM1498.05 849.46a8.22 8.22 0 0 1-4.82-10.58 43.9 43.9 0 0 0-25.71-56.43 8.22 8.22 0 0 1 5.76-15.4 60.31 60.31 0 0 1 35.36 77.59 8.24 8.24 0 0 1-10.59 4.82z",
    transform: "translate(-185.15 -239.17)"
  }), __jsx("path", {
    className: "bbfaca0b-47ca-4d7c-b33d-9bb0f171cd9a",
    d: "M1539.13 864.82a8.21 8.21 0 0 1-4.82-10.58 87.81 87.81 0 0 0-51.44-112.86 8.22 8.22 0 0 1 5.76-15.4 104.06 104.06 0 0 1 61.08 134 8.22 8.22 0 0 1-10.58 4.84z",
    transform: "translate(-185.15 -239.17)"
  }), __jsx("circle", {
    className: "e61552d9-7f32-4de4-ac4d-07b1c5cdae00",
    cx: "1611.96",
    cy: "1041.59",
    r: "12.73",
    transform: "rotate(-23.27 938.685 1371.646)"
  }), __jsx("circle", {
    className: "a471b2c4-7435-4b86-902d-28bd29591ea4",
    cx: "1426.81",
    cy: "802.42",
    r: "38.43"
  }), __jsx("circle", {
    className: "b7381220-ed65-46ee-a6a3-a79ebafa359a",
    cx: "1426.81",
    cy: "802.42",
    r: "38.43"
  }), __jsx("circle", {
    className: "e61552d9-7f32-4de4-ac4d-07b1c5cdae00",
    cx: "1693.21",
    cy: "1587.73",
    r: "12.73",
    transform: "rotate(-45 1311.922 1691.644)"
  }), __jsx("circle", {
    className: "a471b2c4-7435-4b86-902d-28bd29591ea4",
    cx: "1508.05",
    cy: "1348.55",
    r: "38.43"
  }), __jsx("circle", {
    className: "b7381220-ed65-46ee-a6a3-a79ebafa359a",
    cx: "1508.05",
    cy: "1348.55",
    r: "38.43"
  }), __jsx("circle", {
    className: "e61552d9-7f32-4de4-ac4d-07b1c5cdae00",
    cx: "601.9",
    cy: "1613.97",
    r: "15.52",
    transform: "rotate(-78.27 362.336 1608.147)"
  }), __jsx("circle", {
    className: "e186f018-8eb7-4afb-92a2-a04281efda77",
    cx: "416.74",
    cy: "1374.79",
    r: "46.85"
  }), __jsx("circle", {
    className: "ae12c432-cb9c-4793-8c09-b69f7d34b2f0",
    cx: "416.74",
    cy: "1374.79",
    r: "46.85"
  }), __jsx("circle", {
    className: "e61552d9-7f32-4de4-ac4d-07b1c5cdae00",
    cx: "471.24",
    cy: "331.62",
    r: "15.52",
    transform: "rotate(-80.74 237.977 320.926)"
  }), __jsx("circle", {
    className: "e186f018-8eb7-4afb-92a2-a04281efda77",
    cx: "286.08",
    cy: "92.44",
    r: "46.85"
  }), __jsx("circle", {
    className: "ae12c432-cb9c-4793-8c09-b69f7d34b2f0",
    cx: "286.08",
    cy: "92.44",
    r: "46.85"
  }), __jsx("circle", {
    className: "e61552d9-7f32-4de4-ac4d-07b1c5cdae00",
    cx: "1330.78",
    cy: "325.84",
    r: "15.52"
  }), __jsx("circle", {
    className: "e186f018-8eb7-4afb-92a2-a04281efda77",
    cx: "1330.78",
    cy: "325.84",
    r: "46.85"
  }), __jsx("circle", {
    className: "ae12c432-cb9c-4793-8c09-b69f7d34b2f0",
    cx: "1330.78",
    cy: "325.84",
    r: "46.85"
  }), __jsx("circle", {
    className: "e61552d9-7f32-4de4-ac4d-07b1c5cdae00",
    cx: "518.09",
    cy: "945.75",
    r: "15.52",
    transform: "rotate(-80.74 284.814 935.039)"
  }), __jsx("circle", {
    className: "e186f018-8eb7-4afb-92a2-a04281efda77",
    cx: "332.94",
    cy: "706.58",
    r: "46.85"
  }), __jsx("circle", {
    className: "ae12c432-cb9c-4793-8c09-b69f7d34b2f0",
    cx: "332.94",
    cy: "706.58",
    r: "46.85"
  }), __jsx("circle", {
    className: "e61552d9-7f32-4de4-ac4d-07b1c5cdae00",
    cx: "1151.74",
    cy: "287.87",
    r: "15.52",
    transform: "rotate(-45 770.462 391.784)"
  }), __jsx("circle", {
    className: "e186f018-8eb7-4afb-92a2-a04281efda77",
    cx: "966.59",
    cy: "48.7",
    r: "46.85"
  }), __jsx("circle", {
    className: "ae12c432-cb9c-4793-8c09-b69f7d34b2f0",
    cx: "966.59",
    cy: "48.7",
    r: "46.85"
  }), __jsx("circle", {
    className: "e61552d9-7f32-4de4-ac4d-07b1c5cdae00",
    cx: "330.75",
    cy: "820.87",
    r: "12.96",
    transform: "rotate(-59.58 29.318 863.03)"
  }), __jsx("circle", {
    className: "e61552d9-7f32-4de4-ac4d-07b1c5cdae00",
    cx: "873.05",
    cy: "253.98",
    r: "12.96",
    transform: "rotate(-21.96 164.29 611.564)"
  }), __jsx("path", {
    className: "af1e5619-26bb-4ac9-9f46-d7c2a927e79b",
    d: "M785.74 344.79a6.83 6.83 0 1 1-6.82-6.83 6.82 6.82 0 0 1 6.82 6.83z",
    transform: "translate(-185.15 -239.17)"
  }), __jsx("path", {
    className: "bbfaca0b-47ca-4d7c-b33d-9bb0f171cd9a",
    d: "M999.44 211.34l-17.64-32.15 36.67.8-19.03 31.35zM1615.05 612.31l-50.77 17.01 10.65-52.48 40.12 35.47z"
  }), __jsx("circle", {
    className: "e61552d9-7f32-4de4-ac4d-07b1c5cdae00",
    cx: "493.3",
    cy: "1253.93",
    r: "13.1",
    transform: "rotate(-10.17 -942.952 2175.204)"
  }), __jsx("path", {
    className: "af1e5619-26bb-4ac9-9f46-d7c2a927e79b",
    d: "M647.79 506.51a6.83 6.83 0 1 1-6.83-6.83 6.82 6.82 0 0 1 6.83 6.83zM803.22 1783.67a6.83 6.83 0 1 1-6.82-6.83 6.82 6.82 0 0 1 6.82 6.83z",
    transform: "translate(-185.15 -239.17)"
  }), __jsx("path", {
    className: "bbfaca0b-47ca-4d7c-b33d-9bb0f171cd9a",
    d: "M1176.45 385.69l-33.6 28.46-7.85-43.33 41.45 14.87zM1367.03 1133.49l-33.6 28.46-7.85-43.33 41.45 14.87zM1348.3 108.24l-33.6 28.46-7.85-43.33 41.45 14.87z"
  }), __jsx("circle", {
    className: "e61552d9-7f32-4de4-ac4d-07b1c5cdae00",
    cx: "1562.79",
    cy: "1476",
    r: "15.68",
    transform: "rotate(-81.85 1332.333 1463.193)"
  }), __jsx("circle", {
    className: "af1e5619-26bb-4ac9-9f46-d7c2a927e79b",
    cx: "1589.67",
    cy: "1140.29",
    r: "6.82"
  }), __jsx("path", {
    className: "af1e5619-26bb-4ac9-9f46-d7c2a927e79b",
    d: "M1738.07 668.19a6.83 6.83 0 1 1-6.82-6.82 6.82 6.82 0 0 1 6.82 6.82z",
    transform: "translate(-185.15 -239.17)"
  }), __jsx("circle", {
    className: "af1e5619-26bb-4ac9-9f46-d7c2a927e79b",
    cx: "1748.1",
    cy: "1135.01",
    r: "6.82",
    transform: "rotate(-22.96 1066.308 1471.117)"
  }), __jsx("path", {
    className: "af1e5619-26bb-4ac9-9f46-d7c2a927e79b",
    d: "M1559 1695.18a6.83 6.83 0 1 1-6.83-6.82 6.83 6.83 0 0 1 6.83 6.82z",
    transform: "translate(-185.15 -239.17)"
  }), __jsx("circle", {
    className: "af1e5619-26bb-4ac9-9f46-d7c2a927e79b",
    cx: "78.85",
    cy: "453.82",
    r: "6.82"
  }), __jsx("circle", {
    className: "af1e5619-26bb-4ac9-9f46-d7c2a927e79b",
    cx: "360.36",
    cy: "131.08",
    r: "6.82"
  }), __jsx("path", {
    className: "bbfaca0b-47ca-4d7c-b33d-9bb0f171cd9a",
    d: "M414.47 46.23l-26.49 8.88 5.56-27.38 20.93 18.5zM579.04 1502.94l-50.78 17.01 10.66-52.48 40.12 35.47z"
  }), __jsx("circle", {
    className: "e61552d9-7f32-4de4-ac4d-07b1c5cdae00",
    cx: "1357.06",
    cy: "961.94",
    r: "16.18",
    transform: "rotate(-41.69 950.6 1085.53)"
  }), __jsx("circle", {
    className: "af1e5619-26bb-4ac9-9f46-d7c2a927e79b",
    cx: "1165.08",
    cy: "528.98",
    r: "6.82"
  }), __jsx("path", {
    className: "af1e5619-26bb-4ac9-9f46-d7c2a927e79b",
    d: "M1618.78 580.54a6.83 6.83 0 1 1-6.82-6.82 6.82 6.82 0 0 1 6.82 6.82z",
    transform: "translate(-185.15 -239.17)"
  }), __jsx("path", {
    className: "bbfaca0b-47ca-4d7c-b33d-9bb0f171cd9a",
    d: "M217.74 1114.01l-50.77 17.01 10.65-52.48 40.12 35.47z"
  }), __jsx("circle", {
    className: "e61552d9-7f32-4de4-ac4d-07b1c5cdae00",
    cx: "1295.91",
    cy: "545.12",
    r: "14.82",
    transform: "rotate(-78.83 1057.739 538.198)"
  }), __jsx("circle", {
    className: "e61552d9-7f32-4de4-ac4d-07b1c5cdae00",
    cx: "1450.9",
    cy: "1776.84",
    r: "14.82",
    transform: "rotate(-66.39 1175.614 1798.781)"
  }), __jsx("circle", {
    className: "af1e5619-26bb-4ac9-9f46-d7c2a927e79b",
    cx: "252.8",
    cy: "1189.51",
    r: "6.82"
  }), __jsx("path", {
    className: "af1e5619-26bb-4ac9-9f46-d7c2a927e79b",
    d: "M1450.9 1114.52a6.83 6.83 0 1 1-6.83-6.83 6.82 6.82 0 0 1 6.83 6.83z",
    transform: "translate(-185.15 -239.17)"
  }), __jsx("circle", {
    className: "af1e5619-26bb-4ac9-9f46-d7c2a927e79b",
    cx: "1194.91",
    cy: "136.23",
    r: "6.82"
  }), __jsx("path", {
    className: "af1e5619-26bb-4ac9-9f46-d7c2a927e79b",
    d: "M500.12 1056.72a6.82 6.82 0 1 1-6.82-6.83 6.82 6.82 0 0 1 6.82 6.83zM1482.4 978.12a6.83 6.83 0 1 1-6.83-6.83 6.82 6.82 0 0 1 6.83 6.83z",
    transform: "translate(-185.15 -239.17)"
  }), __jsx("path", {
    className: "bbfaca0b-47ca-4d7c-b33d-9bb0f171cd9a",
    d: "M155.68 711.06l-39.82 13.34 8.35-41.15 31.47 27.81zM265.88 1483.82l-39.82 13.34 8.36-41.15 31.46 27.81zM39.82 520.72L0 534.06l8.36-41.16 31.46 27.82z"
  }), __jsx("circle", {
    className: "e61552d9-7f32-4de4-ac4d-07b1c5cdae00",
    cx: "984.5",
    cy: "444.09",
    r: "11.06",
    transform: "rotate(-43.69 593.598 555.441)"
  }), __jsx("path", {
    className: "e61552d9-7f32-4de4-ac4d-07b1c5cdae00",
    d: "M388.22 403a11.05 11.05 0 1 1-13.44-8 11.06 11.06 0 0 1 13.44 8z",
    transform: "translate(-185.15 -239.17)"
  }), __jsx("circle", {
    className: "af1e5619-26bb-4ac9-9f46-d7c2a927e79b",
    cx: "903.65",
    cy: "115.04",
    r: "6.82"
  }), __jsx("rect", {
    className: "bbfaca0b-47ca-4d7c-b33d-9bb0f171cd9a",
    x: "242.34",
    y: "1025.44",
    width: "204.93",
    height: "204.5",
    rx: "61.12",
    transform: "rotate(-133.23 200.478 1048.133)"
  }), __jsx("rect", {
    className: "af1e5619-26bb-4ac9-9f46-d7c2a927e79b",
    x: "240.81",
    y: "1033.75",
    width: "204.93",
    height: "204.5",
    rx: "61.12",
    transform: "rotate(-133.23 198.955 1056.442)"
  }), __jsx("path", {
    className: "bbfaca0b-47ca-4d7c-b33d-9bb0f171cd9a",
    d: "M369 1087.76a27.11 27.11 0 0 0-45.41 27.34 27.11 27.11 0 1 0-13.21 52 26.46 26.46 0 0 0 4.27.11l58.27 1.61a1.3 1.3 0 0 0 1.34-1.26l2.07-60.43a27 27 0 0 0-7.32-19.37z",
    transform: "translate(-185.15 -239.17)"
  }), __jsx("path", {
    className: "e41e7199-fac5-49c5-bb92-058a16d0439a",
    d: "M205.06 1326.55s37 25.22 52.58 61.31 13.25 82.26 28.25 111.78 41.79 50.49 58.48 49.32 30.39-9.21 34.84-18.63c6.24-13.23 3.75-32.74-10.3-39.86-16.09-8.14-32.77 8.59-35.85 18.26-4.85 15.23-.49 44.6 27.51 57.56s47.15 4.14 64 .71 49 1.85 65.67 32.08 7.19 54.08 7.19 54.08",
    transform: "translate(-185.15 -239.17)"
  }), __jsx("path", {
    className: "a518ff48-143a-4fb6-8f18-87339788deb5",
    d: "M1585.28 1598.5s-4.86-27.17 14-45.31 49.56-20 79.79-51.72 31.24-87.82 31.24-87.82",
    transform: "translate(-185.15 -239.17)"
  }), __jsx("path", {
    className: "a9be1f25-49e1-4131-a718-c0d01d1d8f1b",
    d: "M1250 406.46s21.51-7.86 43.55 2.38 82.3 106 125 115.24 57.77-21.06 54.73-34.64c-3.43-15.3-31.17-36.14-64.9-4.21s-13.37 79.95-13.37 79.95M865 1803.75s17.14-15.19 41.39-13.74 115.44 68.48 158.57 61.4 46-40.77 38.23-52.29c-8.8-13-42.25-22.2-61.93 19.86s16.86 79.3 16.86 79.3",
    transform: "translate(-185.15 -239.17)"
  }), __jsx("rect", {
    className: "b6e651bd-a461-4bc8-90da-552e4e77deb9",
    x: "368.96",
    y: "569.48",
    width: "190.52",
    height: "190.12",
    rx: "56.82",
    transform: "rotate(-122.03 305.408 596.24)"
  }), __jsx("rect", {
    className: "e61552d9-7f32-4de4-ac4d-07b1c5cdae00",
    x: "366.07",
    y: "576.79",
    width: "190.52",
    height: "190.12",
    rx: "56.82",
    transform: "rotate(-122.03 302.518 603.54)"
  }), __jsx("path", {
    className: "fd94f594-5624-4448-ac69-65001bd81610",
    transform: "rotate(-32.03 -38.333 890.04)",
    d: "M415.75 652.16h110.2v69.82h-110.2z"
  }), __jsx("path", {
    className: "fd94f594-5624-4448-ac69-65001bd81610",
    d: "M257.61 506.88l24.57-64.61 68.85 6.16-93.42 58.45zM220.47 447.52l24.58-64.6 68.84 6.15-93.42 58.45z"
  }), __jsx("path", {
    className: "fd94f594-5624-4448-ac69-65001bd81610",
    d: "M220.47 447.52l24.58-64.6 68.84 6.15-93.42 58.45z"
  }), __jsx("path", {
    className: "fd94f594-5624-4448-ac69-65001bd81610",
    d: "M313.89 389.07l-20.61 54.19-11.1-.99-3.96 10.42-57.75-5.17 93.42-58.45z"
  }), __jsx("path", {
    className: "bbfaca0b-47ca-4d7c-b33d-9bb0f171cd9a",
    d: "M701.9 166.53l-.28-56.04 151-36.09-150.72 92.13z"
  }), __jsx("path", {
    className: "bdadb1ab-3fc2-42ec-bf10-96b2eaefa4ea",
    d: "M850.51 75.22L701.9 166.53l32.63-37.01 115.98-54.3z"
  }), __jsx("path", {
    className: "af1e5619-26bb-4ac9-9f46-d7c2a927e79b",
    d: "M852.62 74.4l-118.09 55.12 43.02 49.7L852.62 74.4zM701.62 110.49l-47.99-29.18 198.99-6.91-151 36.09z"
  }), __jsx("path", {
    className: "af1e5619-26bb-4ac9-9f46-d7c2a927e79b",
    d: "M497.44 459.16a2 2 0 0 1-1.81-.5 58 58 0 0 1-4.3-4.47 2 2 0 0 1 3-2.61 57.67 57.67 0 0 0 4 4.17 2 2 0 0 1 .1 2.82 2 2 0 0 1-.99.59zM800.54 463.09c-1.73.39-3.49.75-5.24 1.1a2 2 0 1 1-.77-3.93c3.94-.77 7.91-1.68 11.73-2.69a2 2 0 0 1 2.45 1.43 2 2 0 0 1-1.43 2.44c-2.21.56-4.48 1.14-6.74 1.65zm-17.19 3h-.18c-4 .53-8.13.95-12.22 1.24a2 2 0 0 1-.29-4c4-.29 8.05-.7 12-1.22a2 2 0 0 1 .7 3.93zm35.51-8.09a2 2 0 0 1-1.08-3.85c3.82-1.3 7.6-2.74 11.23-4.28a2 2 0 1 1 1.56 3.68c-3.72 1.58-7.59 3.06-11.51 4.39zm-59.77 9.93a1.84 1.84 0 0 1-.41.05c-4.08.06-8.21 0-12.28-.18a2 2 0 0 1 .17-4c4 .18 8 .24 12 .18a2 2 0 0 1 .47 3.95zm82.13-19.47a2 2 0 0 1-1.37-3.72c3.58-1.87 7.06-3.9 10.36-6a2 2 0 1 1 2.17 3.36c-3.4 2.19-7 4.27-10.67 6.2a1.53 1.53 0 0 1-.49.12zm-106.43 18.37a1.94 1.94 0 0 1-.64 0c-4.09-.41-8.19-1-12.18-1.61a2 2 0 0 1 .64-3.95c3.92.64 7.94 1.17 11.95 1.58a2 2 0 0 1 .23 3.94zm126.85-31.57a2 2 0 0 1-1.68-3.53 115.45 115.45 0 0 0 9-7.87 2 2 0 0 1 2.78 2.87 119.55 119.55 0 0 1-9.3 8.14 2.05 2.05 0 0 1-.8.39zM636.75 484c-3.94.82-8 1.54-12.11 2.12a2 2 0 0 1-.57-4c4-.57 8-1.27 11.87-2.07a2 2 0 0 1 .84 3.91zm11.82-2.86a2 2 0 0 1-1-3.88c3.91-1.09 7.77-2.32 11.45-3.64a2 2 0 1 1 1.35 3.76c-3.77 1.36-7.72 2.62-11.73 3.73zm-35.89 6.33a1.26 1.26 0 0 1-.27 0c-4 .35-8.18.58-12.26.7a2 2 0 0 1-.12-4c4-.12 8.06-.35 12-.68a2 2 0 0 1 .61 3.94zm58.75-14.6a2 2 0 0 1-1.27-3.77c3.7-1.69 7.28-3.53 10.65-5.47a2 2 0 0 1 2 3.47c-3.48 2-7.17 3.9-11 5.64a2 2 0 0 1-.38.12zm39.36-9.95a2 2 0 0 1-.88 0c-4-.92-8-2-11.9-3.14a2 2 0 0 1-1.42-2c-1.11.88-2.25 1.75-3.4 2.59a2 2 0 1 1-2.36-3.23 95.66 95.66 0 0 0 9.18-7.59 2 2 0 0 1 2.74 2.92q-1.86 1.74-3.85 3.42a1.31 1.31 0 0 1 .27.06c3.76 1.14 7.68 2.17 11.63 3.08a2 2 0 0 1 1.5 2.39 2 2 0 0 1-1.51 1.49zm-122.42 25.24a2.73 2.73 0 0 1-.5 0c-4.08-.11-8.2-.34-12.25-.68a2 2 0 0 1 .33-4c4 .33 8 .55 12 .66a2 2 0 0 1 .39 4zm-24.23-2a1.93 1.93 0 0 1-.72 0c-4.1-.58-8.17-1.29-12.11-2.11a2 2 0 0 1 .81-3.91c3.86.79 7.85 1.49 11.86 2.06a2 2 0 0 1 .16 3.93zm123.38-30.28a2 2 0 0 1-1.16-.09c-3.9-1.51-7.71-3.17-11.3-4.93a2 2 0 0 1 1.75-3.59c3.5 1.71 7.2 3.32 11 4.79a2 2 0 0 1-.29 3.82zM710.09 444a2 2 0 0 1-2-3.2 79.55 79.55 0 0 0 6.74-9.75 2 2 0 1 1 3.45 2 83.35 83.35 0 0 1-7.08 10.23 2 2 0 0 1-1.11.72zm-169.76 37.17a1.92 1.92 0 0 1-1 0c-4.05-1.14-8-2.42-11.72-3.81a2 2 0 1 1 1.39-3.75c3.63 1.35 7.47 2.6 11.42 3.71a2 2 0 0 1-.11 3.88zm125.39-36.05a2 2 0 0 1-1.49-.25 103.58 103.58 0 0 1-10.14-7.12 2 2 0 0 1 2.49-3.13 98.72 98.72 0 0 0 9.76 6.85 2 2 0 0 1 .64 2.76 2 2 0 0 1-1.26.89zm-148.14 27.51a2 2 0 0 1-1.32-.15 99.47 99.47 0 0 1-10.79-6.13 2 2 0 1 1 2.2-3.34 94 94 0 0 0 10.33 5.87 2 2 0 0 1-.44 3.75zm204.74-49.49a2 2 0 0 1-1.17-.09 2 2 0 0 1-1.13-2.6 79.33 79.33 0 0 0 3.5-11.31 2 2 0 0 1 3.9.9 81.83 81.83 0 0 1-3.68 11.88 2 2 0 0 1-1.42 1.22zm-75.49 6.78a2 2 0 0 1-1.9-.58 72.25 72.25 0 0 1-7.75-9.78 2 2 0 1 1 3.34-2.2 68.74 68.74 0 0 0 7.33 9.24 2 2 0 0 1-1 3.32zm81-30.38a1.84 1.84 0 0 1-.62 0 2 2 0 0 1-1.81-2.16c.17-1.94.28-3.93.33-5.92s0-4-.06-6a2 2 0 1 1 4-.19c.1 2 .12 4.12.07 6.25s-.17 4.14-.35 6.17a2 2 0 0 1-1.59 1.85zm-94.18 10.14a2 2 0 0 1-2.28-1.2 56.38 56.38 0 0 1-2.88-9.05c-.22-1-.42-2-.59-3.06a2 2 0 0 1 4-.63c.15.93.34 1.88.55 2.81A53.14 53.14 0 0 0 635 407a2 2 0 0 1-1.1 2.6 1.73 1.73 0 0 1-.28.08zm92.83-34.32a2 2 0 0 1-2.38-1.5 47.14 47.14 0 0 0-4-10.93 2 2 0 1 1 3.55-1.84A51.14 51.14 0 0 1 728 373a2 2 0 0 1-1.49 2.4zM630 385.9a1.87 1.87 0 0 1-.67 0 2 2 0 0 1-1.75-2.22 43.39 43.39 0 0 1 3.31-12.25 2 2 0 1 1 3.67 1.59 39.53 39.53 0 0 0-3 11.13 2 2 0 0 1-1.56 1.75zm85.21-31.74a2 2 0 0 1-1.85-.53 35.88 35.88 0 0 0-9.31-6.69 2 2 0 1 1 1.79-3.58 39.48 39.48 0 0 1 10.34 7.44 2 2 0 0 1 0 2.83 2 2 0 0 1-.97.53zm-75.75 9.69a2 2 0 0 1-2-3.21 54.86 54.86 0 0 1 9-8.82 2 2 0 1 1 2.46 3.15 50.45 50.45 0 0 0-8.33 8.18 2 2 0 0 1-1.13.7zm54.41-20.53a2 2 0 0 1-.8 0 49.65 49.65 0 0 0-11.64-.66 2 2 0 0 1-.23-4 53.34 53.34 0 0 1 12.58.72 2 2 0 0 1 .09 3.92zm-35.46 5.57a2 2 0 0 1-1.32-3.74 64.06 64.06 0 0 1 11.72-4.44 2 2 0 1 1 1.05 3.86 60.37 60.37 0 0 0-11 4.16 1.62 1.62 0 0 1-.45.16zM879.14 418.19a2 2 0 0 1-2-3.22 98.29 98.29 0 0 0 3.61-4.65 2 2 0 0 1 3.23 2.36 106.05 106.05 0 0 1-3.75 4.83 2 2 0 0 1-1.09.68zM1726.67 1045.72a1.6 1.6 0 0 1-.19 1.49 46.46 46.46 0 0 1-3.08 3.88 1.59 1.59 0 0 1-2.4-2.09 46.14 46.14 0 0 0 2.87-3.62 1.59 1.59 0 0 1 2.22-.38 1.52 1.52 0 0 1 .58.72zM1697 805.41c.5 1.33 1 2.69 1.44 4a1.6 1.6 0 1 1-3 1c-1-3-2.19-6.07-3.4-9a1.62 1.62 0 0 1 .87-2.09 1.59 1.59 0 0 1 2.08.86c.71 1.76 1.39 3.5 2.01 5.23zm4.27 13.28a.58.58 0 0 1 0 .14c.85 3.12 1.63 6.33 2.3 9.53a1.59 1.59 0 1 1-3.12.66c-.66-3.14-1.43-6.29-2.26-9.35a1.59 1.59 0 0 1 3-1zM1691 791.47a1.59 1.59 0 0 1-2.92 1.27c-1.44-2.89-3-5.72-4.6-8.42a1.6 1.6 0 0 1 2.74-1.64c1.65 2.77 3.24 5.68 4.72 8.63zm14.33 46.23a3 3 0 0 1 .08.32c.48 3.22.88 6.49 1.18 9.73a1.6 1.6 0 0 1-3.18.3c-.29-3.18-.68-6.4-1.16-9.55a1.6 1.6 0 0 1 3.08-.8zM1681 774.81a1.6 1.6 0 0 1-2.8 1.48c-1.87-2.63-3.85-5.17-5.89-7.55a1.6 1.6 0 0 1 2.43-2.08c2.1 2.46 4.14 5.07 6.07 7.78a1.62 1.62 0 0 1 .19.37zm26.1 82.19a1.71 1.71 0 0 1 .1.51c.11 3.28.12 6.58 0 9.81a1.6 1.6 0 0 1-3.2-.08c.09-3.17.07-6.41 0-9.62a1.6 1.6 0 0 1 1.54-1.66 1.63 1.63 0 0 1 1.56 1.04zm-38.71-97a1.59 1.59 0 0 1-2.6 1.71 91.77 91.77 0 0 0-7.2-6.27 1.6 1.6 0 1 1 2-2.52 96.1 96.1 0 0 1 7.45 6.49 1.62 1.62 0 0 1 .35.66zm62.88 172.71c1.07 3 2.08 6.18 3 9.36a1.6 1.6 0 0 1-3.07.88c-.89-3.11-1.87-6.2-2.92-9.17a1.6 1.6 0 0 1 3-1.09zm-3.54-9a1.6 1.6 0 0 1-3 1.19c-1.28-3-2.67-5.89-4.12-8.67a1.6 1.6 0 0 1 2.84-1.47c1.48 2.84 2.9 5.83 4.22 8.88zm8.89 27.73a.83.83 0 0 1 .06.21c.71 3.17 1.34 6.4 1.88 9.63a1.6 1.6 0 0 1-3.16.52c-.52-3.17-1.14-6.34-1.83-9.45a1.59 1.59 0 0 1 3-.91zm-17.9-44.92a1.6 1.6 0 0 1-2.85 1.41c-1.74-2.75-3.58-5.38-5.48-7.84a1.6 1.6 0 1 1 2.53-2c2 2.53 3.86 5.25 5.65 8.08a2.1 2.1 0 0 1 .15.37zm-12.14-30.08a1.66 1.66 0 0 1 .1.7c-.3 3.3-.7 6.58-1.21 9.76a1.61 1.61 0 0 1-1.43 1.34c.82.78 1.63 1.59 2.42 2.41a1.59 1.59 0 0 1 0 2.26 1.61 1.61 0 0 1-2.26 0 76.59 76.59 0 0 0-7-6.45 1.6 1.6 0 0 1 2-2.48c1 .85 2.1 1.74 3.13 2.67a.86.86 0 0 1 0-.22c.49-3.1.89-6.31 1.17-9.53a1.6 1.6 0 0 1 3.09-.42zm33.22 94.16a2.23 2.23 0 0 1 .09.39c.35 3.24.62 6.53.79 9.77a1.6 1.6 0 0 1-3.19.16c-.17-3.17-.43-6.4-.78-9.59a1.6 1.6 0 0 1 3.09-.73zm1 19.4a1.69 1.69 0 0 1 .1.56c0 3.31-.14 6.61-.36 9.81a1.6 1.6 0 1 1-3.19-.21c.21-3.14.33-6.38.35-9.61a1.6 1.6 0 0 1 3.1-.55zm-37.31-94.38a1.63 1.63 0 0 1 .06.93c-.78 3.25-1.68 6.44-2.68 9.48a1.6 1.6 0 0 1-3-1c1-2.95 1.85-6.06 2.6-9.22a1.6 1.6 0 0 1 3-.19zm-11.78-16.59a1.63 1.63 0 0 1-.13 1.39 1.61 1.61 0 0 1-2.19.54 63.71 63.71 0 0 0-8.44-4.28 1.6 1.6 0 0 1 1.22-3 67.71 67.71 0 0 1 8.87 4.49 1.64 1.64 0 0 1 .69.88zm47.73 130.34a1.7 1.7 0 0 1 .09.78c-.47 3.33-1.06 6.59-1.75 9.69a1.6 1.6 0 1 1-3.12-.7c.67-3 1.25-6.19 1.7-9.43a1.6 1.6 0 0 1 3.08-.34zm-42.08-95.34a1.59 1.59 0 0 1 0 1.21 82.57 82.57 0 0 1-4.54 8.8 1.6 1.6 0 1 1-2.74-1.64 79 79 0 0 0 4.36-8.46 1.6 1.6 0 0 1 3 .09zm37.78 114.27a1.6 1.6 0 0 1 0 1.06 78 78 0 0 1-3.68 9.2 1.59 1.59 0 1 1-2.88-1.37 76.62 76.62 0 0 0 3.53-8.83 1.6 1.6 0 0 1 2-1 1.57 1.57 0 0 1 1.05.96zm-61.3-156.68a1.57 1.57 0 0 1 .06.94 1.6 1.6 0 0 1-1.93 1.17 62.77 62.77 0 0 0-9.34-1.55 1.6 1.6 0 0 1-1.44-1.74 1.59 1.59 0 0 1 1.73-1.44 66.7 66.7 0 0 1 9.81 1.62 1.6 1.6 0 0 1 1.13 1.02zm13.53 59a1.59 1.59 0 0 1-.26 1.56 57.67 57.67 0 0 1-6.9 7.2 1.6 1.6 0 0 1-2.1-2.41 54.81 54.81 0 0 0 6.52-6.8 1.6 1.6 0 0 1 2.25-.23 1.57 1.57 0 0 1 .51.71zm-32.79-60.8a2 2 0 0 1 .1.48 1.61 1.61 0 0 1-1.52 1.68c-1.56.07-3.14.2-4.72.37s-3.2.42-4.71.7a1.6 1.6 0 1 1-.59-3.15c1.59-.29 3.26-.53 4.95-.72s3.29-.32 4.91-.39a1.59 1.59 0 0 1 1.6 1.06zm18.2 73.44a1.61 1.61 0 0 1-.7 1.94 45.85 45.85 0 0 1-6.86 3.25c-.77.29-1.57.56-2.35.8a1.6 1.6 0 0 1-.93-3.06c.72-.22 1.45-.47 2.17-.73a42.82 42.82 0 0 0 6.37-3 1.6 1.6 0 0 1 2.18.58c.07.08.1.17.14.25zm-37.2-69.76a1.59 1.59 0 0 1-.93 2.05 38.06 38.06 0 0 0-8.22 4.32 1.6 1.6 0 0 1-1.84-2.61 41 41 0 0 1 8.92-4.69 1.58 1.58 0 0 1 2.06.92zm18.77 75.2a1.78 1.78 0 0 1 .1.52 1.61 1.61 0 0 1-1.57 1.63 35.06 35.06 0 0 1-10.06-1.3 1.6 1.6 0 0 1 .87-3.08 31.82 31.82 0 0 0 9.13 1.19 1.59 1.59 0 0 1 1.55 1.07zm-34.33-64a1.6 1.6 0 0 1-.22 1.53 28.16 28.16 0 0 0-4.29 8.09 1.6 1.6 0 0 1-3-1 31.69 31.69 0 0 1 4.76-9 1.6 1.6 0 0 1 2.77.41zm15.86 58.9a1.63 1.63 0 0 1-.13 1.39 1.6 1.6 0 0 1-2.19.54 43.33 43.33 0 0 1-8-6.16 1.6 1.6 0 1 1 2.23-2.29 40.4 40.4 0 0 0 7.37 5.71 1.72 1.72 0 0 1 .74.83zm-22.13-40.84a1.67 1.67 0 0 1 .1.63 38.77 38.77 0 0 0 .73 9.28 1.6 1.6 0 1 1-3.14.62 43 43 0 0 1-.79-10 1.6 1.6 0 0 1 3.1-.49zm8.24 27.46a1.6 1.6 0 0 1-2.82 1.45 51.27 51.27 0 0 1-4.78-8.8 1.6 1.6 0 0 1 2.94-1.24 48.09 48.09 0 0 0 4.49 8.25 1.8 1.8 0 0 1 .18.36zM1653 748.07a1.6 1.6 0 0 1-2.34 1.91c-1.34-.82-2.71-1.61-4.07-2.35a1.6 1.6 0 0 1 1.52-2.81c1.42.77 2.84 1.59 4.23 2.44a1.63 1.63 0 0 1 .66.81z",
    transform: "translate(-185.15 -239.17)"
  }));
};

HeaderBg.defaultProps = {
  id: "f100923f-45c9-4a23-9c4d-76a170c1a177",
  'data-name': "Bg elements",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1615.05 1661.01"
};






const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];

const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;

const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`;

const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`;

const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`;

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);

const HomePage = () => {
  const logo = 'logo';
  const contact = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  const toContact = () => scrollToRef(contact);

  const [props, set] = Object(react_spring__WEBPACK_IMPORTED_MODULE_8__["useSpring"])(() => ({
    xy: [0, 0],
    config: {
      mass: 10,
      tension: 550,
      friction: 140
    }
  }));
  const data = [{
    service: 'Development',
    shortDesc: 'Lorem ipsum'
  }, {
    service: 'Design & Branding',
    shortDesc: 'Lorem ipsum'
  }, {
    service: 'Digital Marketing',
    shortDesc: ''
  }];
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_6__["default"].__hash}` + " " + 'home',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, __jsx("title", {
    className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_6__["default"].__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }, "Ermire"), __jsx("meta", {
    name: "title",
    content: "Ermire",
    className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_6__["default"].__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }), __jsx("meta", {
    name: "description",
    content: "Coming soon..",
    className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_6__["default"].__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }), __jsx("meta", {
    charSet: "utf-8",
    className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_6__["default"].__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  }), __jsx("meta", {
    "http-equiv": "X-UA-Compatible",
    content: "IE=edge",
    className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_6__["default"].__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 21
    }
  }), __jsx("meta", {
    name: "keywords",
    content: "Keywords",
    className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_6__["default"].__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }), __jsx("link", {
    rel: "manifest",
    href: "/manifest.json",
    className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_6__["default"].__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }), __jsx("link", {
    href: "/favicon.ico",
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_6__["default"].__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }), __jsx("link", {
    rel: "apple-touch-icon",
    href: "./static/e-logo.png",
    className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_6__["default"].__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }), __jsx("meta", {
    name: "theme-color",
    content: "#00008b",
    className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_6__["default"].__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }), __jsx("meta", {
    property: "og:description",
    content: "Coming soon..",
    className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_6__["default"].__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 21
    }
  }), __jsx("meta", {
    property: "og:image",
    content: "/static/layout/preview.png",
    className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_6__["default"].__hash}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  })), __jsx(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_2___default.a //fullpage options
  , {
    scrollingSpeed: 800
    /* Options here */
    ,
    licenseKey: '70C70063-9BAB4598-B5DB362F-5C9AD179',
    onLeave: (origin, destination, direction) => {
      const section = origin.item;
    },
    render: ({
      state,
      fullpageApi
    }) => {
      return __jsx(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_2___default.a.Wrapper, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 29
        }
      }, __jsx("section", {
        className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_6__["default"].__hash}` + " " + "section",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 33
        }
      }, __jsx("div", {
        className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_6__["default"].__hash}` + " " + 'col-1',
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 37
        }
      }, __jsx("div", {
        className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_6__["default"].__hash}` + " " + "scroll-nav",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 41
        }
      }, __jsx("p", {
        className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_6__["default"].__hash}`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 45
        }
      }, "scroll down"))), __jsx("section", {
        onMouseMove: ({
          clientX: x,
          clientY: y
        }) => set({
          xy: calc(x, y)
        }),
        className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_6__["default"].__hash}` + " " + 'header',
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 37
        }
      }, __jsx("section", {
        className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_6__["default"].__hash}` + " " + 'header__content',
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 41
        }
      }, __jsx("div", {
        className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_6__["default"].__hash}` + " " + 'header-title--cont',
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 45
        }
      }, __jsx("h2", {
        className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_6__["default"].__hash}` + " " + 'header-title',
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 49
        }
      }, "HIGH LEVEL OF CREATIVITY +TECHNOLOGY +SECURITY!"), __jsx("span", {
        className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_6__["default"].__hash}` + " " + 'divider',
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 49
        }
      }), __jsx("p", {
        className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_6__["default"].__hash}`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 49
        }
      }, "ERMIRE IS A HIGH-QUALIFIED TEAM OF TALENTED AND CREATIVE DEVELOPERS, DESIGNERS AND MARKETING EXPERTS. EVERY PROJECT IS A CHALLENGE TO MAKE BETTER WE'VE EVER DONE!"), __jsx("div", {
        "data-text": "ORDER NOW",
        onClick: () => fullpageApi.moveTo(3),
        className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_6__["default"].__hash}` + " " + 'header__order',
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 53
        }
      }, "ORDER NOW")), __jsx("div", {
        style: {
          width: "50%",
          paddingTop: '10rem',
          alignSelf: 'center'
        },
        onMouseMove: ({
          clientX: x,
          clientY: y
        }) => set({
          xy: calc(x, y)
        }),
        className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_6__["default"].__hash}`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 45
        }
      }, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_8__["animated"].div, {
        className: "",
        style: {
          transform: props.xy.interpolate(trans2)
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 49
        }
      }, __jsx(HeaderBg, {
        className: "posterBg",
        width: "100%",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 53
        }
      })), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_8__["animated"].div, {
        className: "header__poster",
        style: {
          transform: props.xy.interpolate(trans1)
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 49
        }
      }, __jsx(Header, {
        className: "poster",
        width: "100%",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 57
        }
      }))))), __jsx("div", {
        className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_6__["default"].__hash}` + " " + 'col-1',
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 37
        }
      })), __jsx("section", {
        className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_6__["default"].__hash}` + " " + "section",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 33
        }
      }, __jsx("div", {
        className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_6__["default"].__hash}` + " " + 'col-1',
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 37
        }
      }), __jsx("section", {
        className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_6__["default"].__hash}` + " " + 'overview',
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 37
        }
      }, __jsx("h2", {
        style: {
          gridColumn: 'span 12'
        },
        className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_6__["default"].__hash}`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 41
        }
      }, "What we do?"), data.map((item, index) => __jsx("div", {
        classname: "item",
        style: {
          gridColumn: 'span 4',
          gridRow: 'span 5',
          background: 'blue',
          animation: `animation: fade 3s .5s backwards cubic-bezier(0.2, 0.5, 0.3, 1);`
        },
        className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_6__["default"].__hash}`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 45
        }
      }, __jsx("h3", {
        className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_6__["default"].__hash}`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 49
        }
      }, item.service), __jsx("p", {
        className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_6__["default"].__hash}`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 49
        }
      }, item.shortDesc))))), __jsx("section", {
        ref: contact,
        className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_6__["default"].__hash}` + " " + "section section-c",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 33
        }
      }, __jsx("section", {
        className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_6__["default"].__hash}`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 37
        }
      }, __jsx("section", {
        className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_6__["default"].__hash}` + " " + "brief",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 41
        }
      }, __jsx("section", {
        className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_6__["default"].__hash}` + " " + "brief-block",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 45
        }
      }, __jsx("div", {
        className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_6__["default"].__hash}` + " " + "brief__title",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 49
        }
      }, __jsx("h1", {
        className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_6__["default"].__hash}`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 53
        }
      }, "Describe your order. And we'll make the best offer for You.")), __jsx(formik__WEBPACK_IMPORTED_MODULE_5__["Formik"], {
        initialValues: {
          name: '',
          email: '',
          phone: ''
        },
        validate: values => {
          const errors = {};

          if (!values.name || !values.email || !values.phone) {
            errors.name = 'Required';
            errors.email = 'Required';
            errors.phone = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }

          return errors;
        },
        onSubmit: async values => {
          await new Promise(resolve => setTimeout(resolve, 500));
          const req = await fetch(`http://localhost:3000/api/order-form`, {
            method: 'POST',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
          }).then(response => {
            return response.json();
          });
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 49
        }
      }, props => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset
        } = props;
        return __jsx("form", {
          onSubmit: handleSubmit,
          className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_6__["default"].__hash}` + " " + 'brief__form',
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 61
          }
        }, __jsx("input", {
          type: "name",
          name: "name",
          onChange: handleChange,
          onBlur: handleBlur,
          value: values.name,
          placeholder: "Name",
          className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_6__["default"].__hash}` + " " + 'brief__form__input',
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 65
          }
        }), errors.name && touched.name && errors.name, __jsx("div", {
          className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_6__["default"].__hash}` + " " + "flex",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 65
          }
        }, __jsx("input", {
          type: "email",
          name: "email",
          onChange: handleChange,
          onBlur: handleBlur,
          value: values.email,
          placeholder: "Email",
          className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_6__["default"].__hash}` + " " + 'brief__form__input',
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 69
          }
        }), errors.email && touched.email && errors.email, __jsx("input", {
          type: "tel",
          name: "phone",
          placeholder: "Phone",
          onChange: handleChange,
          onBlur: handleBlur,
          value: values.phone,
          className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_6__["default"].__hash}` + " " + 'brief__form__input',
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 193,
            columnNumber: 69
          }
        })), errors.phone && touched.phone && errors.phone, __jsx("textarea", {
          onChange: handleChange,
          name: "task",
          id: "",
          cols: "30",
          rows: "5",
          placeholder: "Project description(optional)",
          className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_6__["default"].__hash}` + " " + 'brief__form__input',
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 204,
            columnNumber: 65
          }
        }), __jsx("button", {
          type: "submit",
          disabled: isSubmitting,
          className: `jsx-${_style__WEBPACK_IMPORTED_MODULE_6__["default"].__hash}` + " " + 'brief__form__submit',
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 65
          }
        }, "Order"));
      }))))));
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: _style__WEBPACK_IMPORTED_MODULE_6__["default"].__hash,
    __self: undefined
  }, _style__WEBPACK_IMPORTED_MODULE_6__["default"])));
};

/***/ }),

/***/ "./src/containers/HomePage/style.js":
/*!******************************************!*\
  !*** ./src/containers/HomePage/style.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const posterBG = 'posterBg';
const chat = 'chat';
const chatLeft = 'chatLeft';
const poster = 'poster';
const sky = 'sky';
const tree = 'tree';
const opacity = 'opacity';
const fade = 'fade';
const style = new String(`.home.jsx-2916162408{margin:0;padding:0;grid-column:span 11;}.flex.jsx-2916162408{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;}.header.jsx-2916162408{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:100vh;width:100%;background:transparent;color:darkblue;-webkit-transition:ease-out .5s;transition:ease-out .5s;}.header__order.jsx-2916162408{position:relative;padding:2rem 1rem;color:white;width:33%;text-align:center;cursor:pointer;overflow:hidden;z-index:1;-webkit-transition:0.75s cubic-bezier(0.7,0.2,0.1,1);transition:0.75s cubic-bezier(0.7,0.2,0.1,1);}.header__order.jsx-2916162408:hover{color:transparent;}.header__order.jsx-2916162408:hover::after{-webkit-transform:translateX(-100%);-ms-transform:translateX(-100%);transform:translateX(-100%);-webkit-transition:0.75s cubic-bezier(0.7,0.2,0.1,1);transition:0.75s cubic-bezier(0.7,0.2,0.1,1);}.header__order.jsx-2916162408:hover::before{-webkit-transform:translateX(0%);-ms-transform:translateX(0%);transform:translateX(0%);-webkit-transition:0.75s cubic-bezier(0.7,0.2,0.1,1);transition:0.75s cubic-bezier(0.7,0.2,0.1,1);}.header__order.jsx-2916162408::after{content:'';position:absolute;width:100%;height:100%;top:0;left:0;background:darkblue;z-index:-1;-webkit-transform:translate(0);-ms-transform:translate(0);transform:translate(0);-webkit-transition:0.75s cubic-bezier(0.7,0.2,0.1,1);transition:0.75s cubic-bezier(0.7,0.2,0.1,1);}.header__order.jsx-2916162408::before{content:attr(data-text);position:absolute;color:darkblue;background:transparent;font-size:4rem;font-weight:900;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;vertical-align:center;top:1.5rem;left:0;z-index:1;-webkit-transform:translateX(-100%);-ms-transform:translateX(-100%);transform:translateX(-100%);-webkit-transition:0.75s cubic-bezier(0.7,0.2,0.1,1);transition:0.75s cubic-bezier(0.7,0.2,0.1,1);}.header__content.jsx-2916162408{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;}.header-title--cont.jsx-2916162408{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:50%;-webkit-transition:ease-out .5s;transition:ease-out .5s;color:black;}.header-title--cont.jsx-2916162408 p.jsx-2916162408{width:90%;line-height:2.8rem;font-size:2rem;margin:1rem 0;}.header-title--cont.jsx-2916162408 .divider.jsx-2916162408{display:block;height:.5rem;width:30%;background:darkblue;margin:.5rem 0;}.header-title.jsx-2916162408{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;width:90%;font-size:8rem;font-weight:600;position:relative;-webkit-transition:ease-out .5s;transition:ease-out .5s;margin:0;}.header__poster.jsx-2916162408{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;width:50%;height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.overview.jsx-2916162408{height:100vh;width:100%;background:#eee;display:grid;grid-template-columns:repeat(12,1fr);grid-template-rows:repeat(12,1fr);grid-column-gap:1em;grid-row-gap:1em;}.logo-container.jsx-2916162408{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-basis:content;-ms-flex-preferred-size:content;flex-basis:content;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.logo-container-inner.jsx-2916162408{margin:1rem;}.logo-desc.jsx-2916162408{margin:0;}h1.jsx-2916162408{margin:0;font-size:1.8rem;font-weight:600;}.fp-tableCell{display:-webkit-box !important;display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important;}.poster{-webkit-transition:cubic-bezier(0.2,0.5,0.75,1);transition:cubic-bezier(0.2,0.5,0.75,1);-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-animation:poster-jsx-2916162408 1s forwards cubic-bezier(0.7,0.2,0.1,1);animation:poster-jsx-2916162408 1s forwards cubic-bezier(0.7,0.2,0.1,1);}@-webkit-keyframes ${poster}-jsx-2916162408{from{opacity:0;-webkit-transform:translateY(10%);-ms-transform:translateY(10%);transform:translateY(10%);}to{opacity:1;-webkit-transform:translateY(0%);-ms-transform:translateY(0%);transform:translateY(0%);}}@keyframes ${poster}-jsx-2916162408{from{opacity:0;-webkit-transform:translateY(10%);-ms-transform:translateY(10%);transform:translateY(10%);}to{opacity:1;-webkit-transform:translateY(0%);-ms-transform:translateY(0%);transform:translateY(0%);}}.posterBg{position:absolute;top:20rem;left:-5rem;-webkit-transition:cubic-bezier(0.2,0.5,0.75,1);transition:cubic-bezier(0.2,0.5,0.75,1);-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-animation:poster-jsx-2916162408 1s forwards cubic-bezier(0.7,0.2,0.1,1);animation:poster-jsx-2916162408 1s forwards cubic-bezier(0.7,0.2,0.1,1);}@-webkit-keyframes ${poster}-jsx-2916162408{from{opacity:0;-webkit-transform:translateY(10%);-ms-transform:translateY(10%);transform:translateY(10%);}to{opacity:1;-webkit-transform:translateY(0%);-ms-transform:translateY(0%);transform:translateY(0%);}}@keyframes ${poster}-jsx-2916162408{from{opacity:0;-webkit-transform:translateY(10%);-ms-transform:translateY(10%);transform:translateY(10%);}to{opacity:1;-webkit-transform:translateY(0%);-ms-transform:translateY(0%);transform:translateY(0%);}}.chat{-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-backface-visibility:hidden;backface-visibility:hidden;}@-webkit-keyframes ${chat}-jsx-2916162408{from{opacity:0;-webkit-transform:translateX(25%) scale(0);-ms-transform:translateX(25%) scale(0);transform:translateX(25%) scale(0);}to{opacity:1;-webkit-transform:translateX(0%) scale(1);-ms-transform:translateX(0%) scale(1);transform:translateX(0%) scale(1);}}@keyframes ${chat}-jsx-2916162408{from{opacity:0;-webkit-transform:translateX(25%) scale(0);-ms-transform:translateX(25%) scale(0);transform:translateX(25%) scale(0);}to{opacity:1;-webkit-transform:translateX(0%) scale(1);-ms-transform:translateX(0%) scale(1);transform:translateX(0%) scale(1);}}@-webkit-keyframes ${chatLeft}-jsx-2916162408{from{opacity:0;-webkit-transform:translateX(-25%) scale(0);-ms-transform:translateX(-25%) scale(0);transform:translateX(-25%) scale(0);}to{opacity:1;-webkit-transform:translateX(0%) scale(1);-ms-transform:translateX(0%) scale(1);transform:translateX(0%) scale(1);}}@keyframes ${chatLeft}-jsx-2916162408{from{opacity:0;-webkit-transform:translateX(-25%) scale(0);-ms-transform:translateX(-25%) scale(0);transform:translateX(-25%) scale(0);}to{opacity:1;-webkit-transform:translateX(0%) scale(1);-ms-transform:translateX(0%) scale(1);transform:translateX(0%) scale(1);}}#a31b832d-1e0d-43ba-bec9-5cfdb815a07f{-webkit-filter:shadow(1rem 1rem 2rem rgba(0,0,0,0.5));filter:shadow(1rem 1rem 2rem rgba(0,0,0,0.5));-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-animation:chat-jsx-2916162408 0.75s 0.5s backwards cubic-bezier(0.2,0.5,0.75,1.5);animation:chat-jsx-2916162408 0.75s 0.5s backwards cubic-bezier(0.2,0.5,0.75,1.5);}#eaba0afd-ea5a-4b07-ba58-47cb2f088590{-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-animation:chatLeft-jsx-2916162408 0.75s 1s backwards cubic-bezier(0.2,0.5,0.75,1.5);animation:chatLeft-jsx-2916162408 0.75s 1s backwards cubic-bezier(0.2,0.5,0.75,1.5);}#e19c349d-f602-4dbb-bd7e-4a25eb582d83{-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-animation:chat-jsx-2916162408 0.75s 1.5s backwards cubic-bezier(0.2,0.5,0.75,1.5);animation:chat-jsx-2916162408 0.75s 1.5s backwards cubic-bezier(0.2,0.5,0.75,1.5);}#poster-bg{display:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-animation:posterBg-jsx-2916162408 0.5s backwards cubic-bezier(0.2,0.5,0.75,1);animation:posterBg-jsx-2916162408 0.5s backwards cubic-bezier(0.2,0.5,0.75,1);}@-webkit-keyframes ${posterBG}-jsx-2916162408{from{opacity:0;}to{opacity:1;}}@keyframes ${posterBG}-jsx-2916162408{from{opacity:0;}to{opacity:1;}}.order.jsx-2916162408{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.section-c.jsx-2916162408{background:darkblue;}.brief.jsx-2916162408{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:darkblue;width:100%;}.brief-block.jsx-2916162408{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:50%;}.brief__title.jsx-2916162408 h1.jsx-2916162408{font-size:5.4rem;font-weight:400;margin-bottom:2rem;}.brief__form.jsx-2916162408{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;}.brief__form__input.jsx-2916162408{margin-bottom:1rem;font-size:1.6rem;padding:1.5rem;border:none;outline:none;background:transparent;border-bottom:1px solid rgba(0,0,139,0.5);-webkit-transition:all .5s ease-out;transition:all .5s ease-out;resize:none;font-family:'canada-type-gibson',Monospaced,sans-serif;}.brief__form__input.jsx-2916162408:focus{border-bottom:1px solid darkblue;-webkit-transition:all .5s ease-out;transition:all .5s ease-out;}.brief__form__submit.jsx-2916162408{border:none;background:darkblue;color:white;padding:1rem;font-size:1.6rem;outline:none;mso-highlight:transparent;cursor:pointer;}.scroll-nav.jsx-2916162408{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:100vh;margin:0;-webkit-backface-visibility:hidden;backface-visibility:hidden;}.scroll-nav.jsx-2916162408 p.jsx-2916162408{position:relative;-webkit-writing-mode:vertical-lr;-ms-writing-mode:tb;writing-mode:vertical-lr;margin:0;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-animation:fade-jsx-2916162408 .5s 2s backwards ease-in-out;animation:fade-jsx-2916162408 .5s 2s backwards ease-in-out;}.scroll-nav.jsx-2916162408 p.jsx-2916162408::after{position:absolute;content:'';width:.2rem;height:40rem;background:darkblue;left:50%;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform:translate(-50%,1rem);-ms-transform:translate(-50%,1rem);transform:translate(-50%,1rem);-webkit-animation:scroll-jsx-2916162408 1.5s 2s infinite alternate backwards ease-in-out;animation:scroll-jsx-2916162408 1.5s 2s infinite alternate backwards ease-in-out;}@-webkit-keyframes scroll-jsx-2916162408{from{height:20rem;}to{height:40rem;}}@keyframes scroll-jsx-2916162408{from{height:20rem;}to{height:40rem;}}@-webkit-keyframes ${sky}-jsx-2916162408{from{-webkit-transform:translate(20%,-30%);-ms-transform:translate(20%,-30%);transform:translate(20%,-30%);}to{-webkit-transform:translate(0%,-30%);-ms-transform:translate(0%,-30%);transform:translate(0%,-30%);}}@keyframes ${sky}-jsx-2916162408{from{-webkit-transform:translate(20%,-30%);-ms-transform:translate(20%,-30%);transform:translate(20%,-30%);}to{-webkit-transform:translate(0%,-30%);-ms-transform:translate(0%,-30%);transform:translate(0%,-30%);}}@-webkit-keyframes opacity-jsx-2916162408{from{opacity:1;-webkit-transform:translateY(25%);-ms-transform:translateY(25%);transform:translateY(25%);}to{opacity:0;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}}@keyframes opacity-jsx-2916162408{from{opacity:1;-webkit-transform:translateY(25%);-ms-transform:translateY(25%);transform:translateY(25%);}to{opacity:0;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}}@-webkit-keyframes fade-jsx-2916162408{from{opacity:0;}to{opacity:1;}}@keyframes fade-jsx-2916162408{from{opacity:0;}to{opacity:1;}}.cls-1{-webkit-animation:sky-jsx-2916162408 5s .5s infinite alternate forwards ease-in-out;animation:sky-jsx-2916162408 5s .5s infinite alternate forwards ease-in-out;}.opacity.jsx-2916162408{opacity:1;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-animation:opacity-jsx-2916162408 0.75s backwards cubic-bezier(0.2,0.5,0.3,1);animation:opacity-jsx-2916162408 0.75s backwards cubic-bezier(0.2,0.5,0.3,1);}.fade.jsx-2916162408{opacity:1;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-animation:fade-jsx-2916162408 0.75s backwards cubic-bezier(0.2,0.5,0.3,1);animation:fade-jsx-2916162408 0.75s backwards cubic-bezier(0.2,0.5,0.3,1);}.active.jsx-2916162408 .overview.jsx-2916162408{opacity:1;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transition:0.5s cubic-bezier(0.2,0.5,0.3,1);transition:0.5s cubic-bezier(0.2,0.5,0.3,1);}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWZtZWRcXERlc2t0b3BcXGVybWlyZVxcc3JjXFxjb250YWluZXJzXFxIb21lUGFnZVxcc3R5bGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV2lCLEFBRVksQUFLVyxBQUtGLEFBVUUsQUFVRSxBQUVVLEFBR0gsQUFHZCxBQVdhLEFBZ0JiLEFBR0EsQUFPRCxBQUtJLEFBTUgsQUFVQSxBQU9GLEFBVUEsQUFPRCxBQUdILEFBR0EsQUFLZSxBQUdtQixBQU0vQixBQUdBLEFBSU0sQUFTTixBQUdBLEFBSVksQUFLWixBQUdBLEFBS0EsQUFHQSxBQUlxQyxBQU16QixBQUtBLEFBS1gsQUFNRCxBQUVBLEFBR08sQUFHQyxBQUdQLEFBS0UsQUFJSSxBQUlKLEFBSVEsQUFXZ0IsQUFHdkIsQUFVSCxBQU9PLEFBTUUsQUFZUCxBQUVBLEFBSWtCLEFBRUQsQUFJcEIsQUFHQSxBQUtBLEFBRUEsQUFHaUQsQUFHbkQsQUFLQSxBQUtBLFNBL1RBLEFBMEhBLEFBSU8sQ0FuRE0sQUFpRUssQUFHRCxBQWFDLEFBR0QsQUFTVSxBQUdELEFBS0UsQUFHRixBQXlCdkIsQUFFQSxBQXdGZSxBQUdGLEFBSWIsQUFFQSxBQU9jLEFBS0EsQUFLQSxDQTFSTCxDQWlGVCxBQWdJVyxDQWhKYixBQWdHZ0IsQUFrRlgsQUFFQSxDQTNNQyxHQWlKQyxDQXZOTCxBQVVPLEFBU0csQUFzSGIsQUFxSGlCLEFBTVosQ0E3UUssQUF3T0MsQ0FyQkEsSUFuS0MsQUF1RE4sRUF1QkEsQ0E5Q0YsQ0FtRUgsQ0E3R0ksQUFxQ0ksQUFtTUgsR0F2QkEsQ0F0QkssQUFrQmEsR0EvTnBCLEFBcU5LLENBeEpLLEVBakZILEFBb0pzQixDQTdHM0IsQUFpRUgsQ0F1S0ksQ0E5TkUsQUE2RUYsRUFsREMsQUE0S0QsSUFuT0wsR0FxTkksQ0FsTU4sQUF5TFksQ0F4SGdCLENBdUtkLEdBOU5HLEFBZ0NSLEFBdUtFLENBbk9ELEFBbUJULEFBbUNRLEtBK0pGLEVBak1PLE9Bd0NKLEFBb082QyxBQUtILEFBS2YsRUFoUWpDLEFBR1UsQUFrQkEsQUFVSixBQWlCRCxBQXVHQSxBQUtLLEFBUUEsQUFzQlAsQUFNRSxBQWlCTixDQTFFcUQsQ0FoTGpELEFBcU5VLElBekxSLEdBK05ZLENBaEhKLEFBMEJBLEFBS0EsQ0F0SlosQ0FxQkEsQ0E5QnFDLEFBeU50QixDQXRISCxFQTNCUSxDQWxGakIsQ0FkSSxBQXNGVixDQWdIUSxDQXdGTyxDQXBQUCxDQXJCZ0MsQUFhekIsQUE0TmhCLENBMUhpQixBQWdCQSxBQXFGTyxFQU5jLEFBbURoQixDQXJKSixBQWdCQSxBQTJCTCxBQStHSyxFQWpTVixBQTZGTCxBQTZMb0IsR0FyQkwsRUFoUGpCLElBNEJLLEVBdU1FLENBMUpFLEdBeEU2QixDQXVHekIsTUF0QkwsQUErRGlCLEFBUUEsR0E3QlYsQUFrQlcsQ0FxRmxCLEVBN0VtQixXQStEUCxHQWxJZixDQXVLbUIsQ0FqSFIsQUEyQjRDLEFBS0YsSUE1RFYsRUFsRW5DLEFBa0JJLEFBMkJDLEFBNEdsQixBQVFDLFFBNEVpRCxDQXJNNUMsQ0FpSEwsQ0FRQyxJQWJNLEFBeUNHLEFBU3VCLENBc0RFLEVBclR6QixPQWtDNkIsT0EwSXpCLENBckowQixBQW9COUIsRUFtS1osRUFuRWlELEtBdkhQLENBMUIxQyxHQW9OQyxPQXNCSSxDQTFPSixDQTZGVSxRQXhFNkIsRUFzTlUsV0EyRUUsTUFMRyxLQS9HQyxPQWZHLElBNEZBLENBL00xRCxNQWtCQSxJQWpCYyxLQTRMYixDQTFLSSxBQTBCRSxFQXRHTixHQW9PaUQsR0FuTVQsR0FVMUIsQ0E0TWxCLEdBdFBFLEFBNEVPLE1BMktTLEtBdFBKLEFBNFB3QixLQWhMM0IsSUE0Q3lDLGNBdkg5QyxBQTRFVyxDQXBCWixDQTJIeUQsSUFMRSxPQXRIMUQsRUF2RFMsVUFzSXFDLFNBOEdqQyxVQWpKTCxZQXZCWixLQXBDZSxJQW9DZCxNQTVFYSxZQXlDVixXQUNKLE9BQ0csQ0E2SHlELEVBNEZBLE9BeE52QyxnQ0F1RFIsZ0VBdEQ0QixrR0FBQyIsImZpbGUiOiJDOlxcVXNlcnNcXGFmbWVkXFxEZXNrdG9wXFxlcm1pcmVcXHNyY1xcY29udGFpbmVyc1xcSG9tZVBhZ2VcXHN0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2NzcydcclxuXHJcbmNvbnN0IHBvc3RlckJHID0gJ3Bvc3RlckJnJ1xyXG5jb25zdCBjaGF0PSAnY2hhdCdcclxuY29uc3QgY2hhdExlZnQ9ICdjaGF0TGVmdCdcclxuY29uc3QgcG9zdGVyID0gJ3Bvc3RlcidcclxuY29uc3Qgc2t5ID0gJ3NreSdcclxuY29uc3QgdHJlZSAgPSAndHJlZSdcclxuY29uc3Qgb3BhY2l0eSA9ICdvcGFjaXR5J1xyXG5jb25zdCBmYWRlID0gJ2ZhZGUnXHJcblxyXG5jb25zdCBzdHlsZSA9IGNzc2BcclxuICAgICAgICAgIC5ob21le1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiBzcGFuIDExO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAuZmxleHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhlYWRlcntcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQgOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgY29sb3I6IGRhcmtibHVlO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBlYXNlLW91dCAuNXM7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAmX19vcmRlcntcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMnJlbSAxcmVtO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICB3aWR0aDogMzMlOyBcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyOyBcclxuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjc1cyBjdWJpYy1iZXppZXIoMC43LCAwLjIsIDAuMSwgMSk7XHJcbiAgICAgICAgICAgICAgOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA6aG92ZXI6OmFmdGVye1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IC43NXMgY3ViaWMtYmV6aWVyKDAuNywgMC4yLCAwLjEsIDEpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA6aG92ZXI6OmJlZm9yZXtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuNzVzIGN1YmljLWJlemllcigwLjcsIDAuMiwgMC4xLCAxKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgJjo6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGRhcmtibHVlO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IC43NXMgY3ViaWMtYmV6aWVyKDAuNywgMC4yLCAwLjEsIDEpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICY6OmJlZm9yZXtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS10ZXh0KTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBkYXJrYmx1ZTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuNzVzIGN1YmljLWJlemllcigwLjcsIDAuMiwgMC4xLCAxKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgJl9fY29udGVudHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgJi10aXRsZS0tY29udHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBlYXNlLW91dCAuNXM7XHJcbiAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIuOHJlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMXJlbSAwO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAuZGl2aWRlcntcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAuNXJlbTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrYmx1ZTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogLjVyZW0gMDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICYtdGl0bGV7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDhyZW07IFxyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7IFxyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBlYXNlLW91dCAuNXM7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAmX19wb3N0ZXJ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLm92ZXJ2aWV3e1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTIsIDFmcik7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEyLCAxZnIpO1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbi1nYXA6IDFlbTtcclxuICAgICAgICAgICAgZ3JpZC1yb3ctZ2FwOiAxZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAubG9nby1jb250YWluZXJ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IGNvbnRlbnQ7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC5sb2dvLWNvbnRhaW5lci1pbm5lcntcclxuICAgICAgICAgICAgICBtYXJnaW46IDFyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC5sb2dvLWRlc2N7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGgxe1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgOmdsb2JhbCguZnAtdGFibGVDZWxsKXtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA6Z2xvYmFsKC5wb3N0ZXIpe1xyXG4gICAgICAgICAgICAgdHJhbnNpdGlvbjogY3ViaWMtYmV6aWVyKDAuMiwgMC41LCAwLjc1LCAxKTtcclxuICAgICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgIGFuaW1hdGlvbjogcG9zdGVyIDFzIGZvcndhcmRzIGN1YmljLWJlemllcigwLjcsIDAuMiwgMC4xLCAxKTtcclxuICAgICAgICAgICAgIEBrZXlmcmFtZXMgJHtwb3N0ZXJ9e1xyXG4gICAgICAgICAgICAgIGZyb217ICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAlKTtcclxuICAgICAgICAgICAgICB9IHRvIHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgOmdsb2JhbCgucG9zdGVyQmcpe1xyXG4gICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgdG9wOiAyMHJlbTsgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgbGVmdDogLTVyZW07XHJcbiAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjdWJpYy1iZXppZXIoMC4yLCAwLjUsIDAuNzUsIDEpO1xyXG4gICAgICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgICAgYW5pbWF0aW9uOiBwb3N0ZXIgMXMgZm9yd2FyZHMgY3ViaWMtYmV6aWVyKDAuNywgMC4yLCAwLjEsIDEpO1xyXG4gICAgICAgICAgICAgQGtleWZyYW1lcyAke3Bvc3Rlcn17XHJcbiAgICAgICAgICAgICAgZnJvbXsgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMCUpO1xyXG4gICAgICAgICAgICAgIH0gdG8ge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA6Z2xvYmFsKC5jaGF0KXtcclxuICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcclxuICAgICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgIC8vYW5pbWF0aW9uOiBjaGF0IDFzIC41cyBiYWNrd2FyZHMgY3ViaWMtYmV6aWVyKDAuMiwgMC41LCAwLjc1LCAxLjUpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIEBrZXlmcmFtZXMgJHtjaGF0fXtcclxuICAgICAgICAgICAgICBmcm9te1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjUlKSBzY2FsZSgwKTtcclxuICAgICAgICAgICAgICB9IHRvIHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpIHNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgQGtleWZyYW1lcyAke2NoYXRMZWZ0fXtcclxuICAgICAgICAgICAgICBmcm9te1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTI1JSkgc2NhbGUoMCk7XHJcbiAgICAgICAgICAgICAgfSB0byB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKSBzY2FsZSgxKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgOmdsb2JhbCgjYTMxYjgzMmQtMWUwZC00M2JhLWJlYzktNWNmZGI4MTVhMDdmKXtcclxuICAgICAgICAgICAgZmlsdGVyOiBzaGFkb3coMXJlbSAxcmVtIDJyZW0gcmdiYSgwLDAsMCwuNSkpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiBjaGF0IC43NXMgMC41cyBiYWNrd2FyZHMgY3ViaWMtYmV6aWVyKDAuMiwgMC41LCAwLjc1LCAxLjUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA6Z2xvYmFsKCNlYWJhMGFmZC1lYTVhLTRiMDctYmE1OC00N2NiMmYwODg1OTApe1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiBjaGF0TGVmdCAuNzVzIDFzIGJhY2t3YXJkcyBjdWJpYy1iZXppZXIoMC4yLCAwLjUsIDAuNzUsIDEuNSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDpnbG9iYWwoI2UxOWMzNDlkLWY2MDItNGRiYi1iZDdlLTRhMjVlYjU4MmQ4Myl7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcclxuICAgICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgICBhbmltYXRpb246IGNoYXQgLjc1cyAxLjVzIGJhY2t3YXJkcyBjdWJpYy1iZXppZXIoMC4yLCAwLjUsIDAuNzUsIDEuNSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDpnbG9iYWwoI3Bvc3Rlci1iZyl7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiBwb3N0ZXJCZyAuNXMgYmFja3dhcmRzIGN1YmljLWJlemllcigwLjIsIDAuNSwgMC43NSwgMSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBAa2V5ZnJhbWVzICR7cG9zdGVyQkd9e1xyXG4gICAgICAgICAgICAgIGZyb217XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgIH0gdG8ge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLm9yZGVye1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAuc2VjdGlvbi1je1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrYmx1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLmJyaWVme1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrYmx1ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICYtYmxvY2t7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX190aXRsZXtcclxuICAgICAgICAgICAgaDF7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA1LjRyZW07XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICZfX2Zvcm17XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgJl9faW5wdXR7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYShkYXJrYmx1ZSwgLjUpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLW91dDtcclxuICAgICAgICAgICAgICAgIHJlc2l6ZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnY2FuYWRhLXR5cGUtZ2lic29uJywgTW9ub3NwYWNlZCwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgIDpmb2N1c3tcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGRhcmtibHVlO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2Utb3V0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAmX19zdWJtaXR7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrYmx1ZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBtc28taGlnaGxpZ2h0OiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIC5zY3JvbGwtbmF2e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1scjtcclxuICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZSAuNXMgMnMgYmFja3dhcmRzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICAgICAgICAgICY6OmFmdGVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogLjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogZGFya2JsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAxcmVtICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IHNjcm9sbCAxLjVzIDJzIGluZmluaXRlIGFsdGVybmF0ZSBiYWNrd2FyZHMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBAa2V5ZnJhbWVzIHNjcm9sbHtcclxuICAgICAgICAgICAgICAgIGZyb217XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMjByZW07XHJcbiAgICAgICAgICAgICAgICB9dG97XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogNDByZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICBAa2V5ZnJhbWVzICR7c2t5fXtcclxuICAgICAgICAgICAgICAgIGZyb217XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDIwJSwgLTMwJSk7XHJcbiAgICAgICAgICAgICAgICB9dG97XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtMzAlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgQGtleWZyYW1lcyBvcGFjaXR5e1xyXG4gICAgICAgICAgICAgICAgZnJvbXtcclxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDI1JSk7XHJcbiAgICAgICAgICAgICAgICB9dG97XHJcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICBAa2V5ZnJhbWVzIGZhZGV7XHJcbiAgICAgICAgICAgICAgICBmcm9te1xyXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgfXRve1xyXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgOmdsb2JhbCguY2xzLTEpe1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBza3kgNXMgLjVzIGluZmluaXRlIGFsdGVybmF0ZSBmb3J3YXJkcyBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIC5vcGFjaXR5e1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogb3BhY2l0eSAuNzVzIGJhY2t3YXJkcyBjdWJpYy1iZXppZXIoMC4yLCAwLjUsIDAuMywgMSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIC5mYWRle1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZSAuNzVzIGJhY2t3YXJkcyBjdWJpYy1iZXppZXIoMC4yLCAwLjUsIDAuMywgMSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIC5hY3RpdmUgLm92ZXJ2aWV3e1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IC41cyBjdWJpYy1iZXppZXIoMC4yLCAwLjUsIDAuMywgMSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG5gO1xyXG5leHBvcnQgZGVmYXVsdCBzdHlsZVxyXG4iXX0= */
/*@ sourceURL=C:\\Users\\afmed\\Desktop\\ermire\\src\\containers\\HomePage\\style.js */`);
style.__hash = "2916162408";
/* harmony default export */ __webpack_exports__["default"] = (style);

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _containers_HomePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../containers/HomePage */ "./src/containers/HomePage/index.js");

/* harmony default export */ __webpack_exports__["default"] = (_containers_HomePage__WEBPACK_IMPORTED_MODULE_0__["HomePage"]);

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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWZtZWRcXERlc2t0b3BcXGVybWlyZVxcc3JjXFxzdHlsZXNcXHN0eWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHUSxBQUlZLEFBYUEsQUFNTyxBQUlDLEFBR0ksQUFJUCxBQVVLLEFBSUEsQUFHSCxBQUtpQixBQU9BLEFBT0EsQUFPQSxBQU9BLEFBT0EsQUFPQSxBQU9BLEFBT0EsQUFPQSxBQU9BLEFBT0EsQUFPQSxBQU9BLEFBT0EsQUFPQSxBQU9ZLFNBbktuQyxBQWFBLEtBaUJNLEFBaUJNLEVBNUJDLENBR0wsQUFrQkssQUFJQSxFQTNDSSxBQWFSLEVBWUUsU0FLSixHQXFCcWYsQUFPQSxBQU9BLEFBT0EsQUFPQSxBQU9BLEFBT0EsQUFPQSxBQU9BLEFBT0EsQUFPQSxBQU9BLEFBT0EsQUFPQSxBQU9BLEFBT0EsQ0E3R3BmLElBakNVLEFBMEJGLEFBR0YsSUFsQkYsRUF5SXdCLEVBaEs3QixDQTZCSyxHQWdCSCxZQVBRLE9BUm9DLGlDQWxCbEMsdUJBSUwsTUFmaUMsdURBQ3pDLGdCQUNNLHNCQUNNLEdBMkJELDZEQTNCRSxDQTRCUixxR0FBQywrSkFrQkosQUFPQSxBQU9BLEFBT0EsQUFPQSxBQU9BLEFBT0EsQUFPQSxBQU9BLEFBT0EsQUFPQSxBQU9BLEFBT0EsQUFPQSxBQU9BLEFBT0Esa0JBeEdBLEFBT0EsQUFPQSxBQU9BLEFBT0EsQUFPQSxBQU9BLEFBT0EsQUFPQSxBQU9BLEFBT0EsQUFPQSxBQU9BLEFBT0EsQUFPQSxBQU9BLGtCQXhHRixBQU9BLEFBT0EsQUFPQSxBQU9BLEFBT0EsQUFPQSxBQU9BLEFBT0EsQUFPQSxBQU9BLEFBT0EsQUFPQSxBQU9BLEFBT0EsQUFPQSxnQkF6R0MsQUFPQSxBQU9BLEFBT0EsQUFPQSxBQU9BLEFBT0EsQUFPQSxBQU9BLEFBT0EsQUFPQSxBQU9BLEFBT0EsQUFPQSxBQU9BLEFBT0EiLCJmaWxlIjoiQzpcXFVzZXJzXFxhZm1lZFxcRGVza3RvcFxcZXJtaXJlXFxzcmNcXHN0eWxlc1xcc3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2NzcydcclxuY29uc3QgbG9nbyA9ICdsb2dvJ1xyXG4gICAgY29uc3Qgc3R5bGUgPSBjc3NcclxuICAgICAgICBgXHJcbiAgICAqLFxyXG4gICAgOmdsb2JhbChodG1sKSwgXHJcbiAgICA6Z2xvYmFsKGJvZHkpIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7IC8qIGlPUyBTYWZhcmkgKi9cclxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICBmb250LWZhbWlseTogJ2NhbmFkYS10eXBlLWdpYnNvbicsIE1vbm9zcGFjZWQsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1vdXQ7XHJcbiAgICB9XHJcblxyXG5cclxuKixcclxuKjo6YWZ0ZXIsXHJcbio6OmJlZm9yZSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogaW5oZXJpdDtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2Utb3V0O1xyXG59XHJcblxyXG46Z2xvYmFsKGh0bWwpIHtcclxuICBmb250LXNpemU6IDYyLjUlO1xyXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG59XHJcblxyXG46Z2xvYmFsKGJvZHkpIHtcclxuIGZvbnQtc2l6ZTogMS42cmVtO1xyXG59XHJcblxyXG4gICAgOmdsb2JhbCguY29sLTEpe1xyXG4gICAgICB3aWR0aDogY2FsYygxMDB2dy8xMik7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3LzEyKTtcclxuICAgIH1cclxuXHJcbiAgICA6Z2xvYmFsKGgxKXtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgICAgICA6Z2xvYmFsKC5sb2dvKXtcclxuICAgICAgICAgICAgZmlsbDogZGFya2JsdWU7XHJcbiAgICAgICAgICAgIHN0cm9rZTogZGFya2JsdWU7XHJcbiAgICAgICAgICAgIHN0cm9rZS13aWR0aDogNHB4O1xyXG4gICAgICAgICAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xyXG4gICAgICAgICAgICBhbmltYXRpb246IGxvZ28gMS41cyAxcyBiYWNrd2FyZHMgY3ViaWMtYmV6aWVyKDAuMywgMCwgMC43NSwgMSk7XHJcbiAgICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBAa2V5ZnJhbWVzICR7bG9nb30ge1xyXG4gICAgICAgIDAle1xyXG4gICAgICAgICAgICBmaWxsOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogNjAwO1xyXG4gICAgICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogNjAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA4MCV7XHJcbiAgICAgICAgICAgIGZpbGw6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBzdHJva2UtZGFzaGFycmF5OiA2MDA7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgMTAwJXtcclxuICAgICAgICAgICAgZmlsbDogZGFya2JsdWU7XHJcbiAgICAgICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xyXG4gICAgICAgICAgICBzdHJva2U6IGRhcmtibHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcImNhbmFkYS10eXBlLWdpYnNvblwiO1xyXG4gICAgICAgIHNyYzogdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvMGQ4ZjRjLzAwMDAwMDAwMDAwMDAwMDAzYjliMzg4Mi8yNy9sP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uNyZ2PTNcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzBkOGY0Yy8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4ODIvMjcvZD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjcmdj0zXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzBkOGY0Yy8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4ODIvMjcvYT9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjcmdj0zXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xyXG4gICAgICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIH1cclxuXHJcbiAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJjYW5hZGEtdHlwZS1naWJzb25cIjtcclxuICAgICAgICBzcmM6IHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzA2MThkYi8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4ODMvMjcvbD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9aTcmdj0zXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi8wNjE4ZGIvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODgzLzI3L2Q/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPWk3JnY9M1wiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi8wNjE4ZGIvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODgzLzI3L2E/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPWk3JnY9M1wiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcclxuICAgICAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB9XHJcblxyXG4gICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiY2FuYWRhLXR5cGUtZ2lic29uXCI7XHJcbiAgICAgICAgc3JjOiB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi9iNjdjOTEvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODdkLzI3L2w/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPWk0JnY9M1wiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvYjY3YzkxLzAwMDAwMDAwMDAwMDAwMDAzYjliMzg3ZC8yNy9kP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1pNCZ2PTNcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvYjY3YzkxLzAwMDAwMDAwMDAwMDAwMDAzYjliMzg3ZC8yNy9hP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1pNCZ2PTNcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XHJcbiAgICAgICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG5cclxuICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcImNhbmFkYS10eXBlLWdpYnNvblwiO1xyXG4gICAgICAgIHNyYzogdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvNzU1N2M4LzAwMDAwMDAwMDAwMDAwMDAzYjliMzg3OC8yNy9sP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uMiZ2PTNcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzc1NTdjOC8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4NzgvMjcvZD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjImdj0zXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzc1NTdjOC8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4NzgvMjcvYT9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjImdj0zXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xyXG4gICAgICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIH1cclxuXHJcbiAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJjYW5hZGEtdHlwZS1naWJzb25cIjtcclxuICAgICAgICBzcmM6IHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzdmNzgxNy8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4NzkvMjcvbD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9aTImdj0zXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi83Zjc4MTcvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODc5LzI3L2Q/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPWkyJnY9M1wiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi83Zjc4MTcvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODc5LzI3L2E/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPWkyJnY9M1wiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcclxuICAgICAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICB9XHJcblxyXG4gICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiY2FuYWRhLXR5cGUtZ2lic29uXCI7XHJcbiAgICAgICAgc3JjOiB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi9lZjIxMjkvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODdjLzI3L2w/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW40JnY9M1wiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvZWYyMTI5LzAwMDAwMDAwMDAwMDAwMDAzYjliMzg3Yy8yNy9kP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uNCZ2PTNcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvZWYyMTI5LzAwMDAwMDAwMDAwMDAwMDAzYjliMzg3Yy8yNy9hP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uNCZ2PTNcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XHJcbiAgICAgICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG5cclxuICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcImNhbmFkYS10eXBlLWdpYnNvblwiO1xyXG4gICAgICAgIHNyYzogdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvNDAzOTExLzAwMDAwMDAwMDAwMDAwMDAzYjliMzg4MC8yNy9sP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uNiZ2PTNcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzQwMzkxMS8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4ODAvMjcvZD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjYmdj0zXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzQwMzkxMS8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4ODAvMjcvYT9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjYmdj0zXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xyXG4gICAgICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuXHJcbiAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJjYW5hZGEtdHlwZS1naWJzb25cIjtcclxuICAgICAgICBzcmM6IHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzI4NTM3Yy8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4ODEvMjcvbD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9aTYmdj0zXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi8yODUzN2MvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODgxLzI3L2Q/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPWk2JnY9M1wiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi8yODUzN2MvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODgxLzI3L2E/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPWk2JnY9M1wiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcclxuICAgICAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcblxyXG4gICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiY2FuYWRhLXR5cGUtZ2lic29uXCI7XHJcbiAgICAgICAgc3JjOiB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi9lMTgyMTcvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODc2LzI3L2w/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW4xJnY9M1wiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvZTE4MjE3LzAwMDAwMDAwMDAwMDAwMDAzYjliMzg3Ni8yNy9kP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uMSZ2PTNcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvZTE4MjE3LzAwMDAwMDAwMDAwMDAwMDAzYjliMzg3Ni8yNy9hP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uMSZ2PTNcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XHJcbiAgICAgICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgfVxyXG5cclxuICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcImNhbmFkYS10eXBlLWdpYnNvblwiO1xyXG4gICAgICAgIHNyYzogdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvOTdhMDY4LzAwMDAwMDAwMDAwMDAwMDAzYjliMzg3Ny8yNy9sP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1pMSZ2PTNcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzk3YTA2OC8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4NzcvMjcvZD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9aTEmdj0zXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzk3YTA2OC8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4NzcvMjcvYT9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9aTEmdj0zXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xyXG4gICAgICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIH1cclxuXHJcbiAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJjYW5hZGEtdHlwZS1naWJzb25cIjtcclxuICAgICAgICBzcmM6IHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmL2FhMWQ2NC8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4N2EvMjcvbD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjMmdj0zXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi9hYTFkNjQvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODdhLzI3L2Q/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW4zJnY9M1wiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi9hYTFkNjQvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODdhLzI3L2E/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW4zJnY9M1wiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcclxuICAgICAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB9XHJcblxyXG4gICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiY2FuYWRhLXR5cGUtZ2lic29uXCI7XHJcbiAgICAgICAgc3JjOiB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi8zMmM5YmEvMDAwMDAwMDAwMDAwMDAwMDNiOWIzZjAyLzI3L2w/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPWkzJnY9M1wiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvMzJjOWJhLzAwMDAwMDAwMDAwMDAwMDAzYjliM2YwMi8yNy9kP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1pMyZ2PTNcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvMzJjOWJhLzAwMDAwMDAwMDAwMDAwMDAzYjliM2YwMi8yNy9hP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1pMyZ2PTNcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XHJcbiAgICAgICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgfVxyXG5cclxuICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcImNhbmFkYS10eXBlLWdpYnNvblwiO1xyXG4gICAgICAgIHNyYzogdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvYWVlMGFhLzAwMDAwMDAwMDAwMDAwMDAzYjliM2YwMy8yNy9sP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uNSZ2PTNcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmL2FlZTBhYS8wMDAwMDAwMDAwMDAwMDAwM2I5YjNmMDMvMjcvZD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjUmdj0zXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmL2FlZTBhYS8wMDAwMDAwMDAwMDAwMDAwM2I5YjNmMDMvMjcvYT9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjUmdj0zXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xyXG4gICAgICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuXHJcbiAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJjYW5hZGEtdHlwZS1naWJzb25cIjtcclxuICAgICAgICBzcmM6IHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzVmZWFkOC8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4N2YvMjcvbD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9aTUmdj0zXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi81ZmVhZDgvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODdmLzI3L2Q/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPWk1JnY9M1wiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi81ZmVhZDgvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODdmLzI3L2E/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPWk1JnY9M1wiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcclxuICAgICAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcblxyXG4gICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiY2FuYWRhLXR5cGUtZ2lic29uXCI7XHJcbiAgICAgICAgc3JjOiB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi9mZDhmOTcvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODg0LzI3L2w/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW45JnY9M1wiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvZmQ4Zjk3LzAwMDAwMDAwMDAwMDAwMDAzYjliMzg4NC8yNy9kP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uOSZ2PTNcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvZmQ4Zjk3LzAwMDAwMDAwMDAwMDAwMDAzYjliMzg4NC8yNy9hP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uOSZ2PTNcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XHJcbiAgICAgICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgfVxyXG5cclxuICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcImNhbmFkYS10eXBlLWdpYnNvblwiO1xyXG4gICAgICAgIHNyYzogdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvMzUxM2ExLzAwMDAwMDAwMDAwMDAwMDAzYjliMzg4NS8yNy9sP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1pOSZ2PTNcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzM1MTNhMS8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4ODUvMjcvZD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9aTkmdj0zXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzM1MTNhMS8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4ODUvMjcvYT9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9aTkmdj0zXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xyXG4gICAgICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIH1cclxuXHJcbiAgICAudGstY2FuYWRhLXR5cGUtZ2lic29uIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJjYW5hZGEtdHlwZS1naWJzb25cIiwgc2Fucy1zZXJpZjtcclxuICAgIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0eWxlXHJcbiJdfQ== */
/*@ sourceURL=C:\\Users\\afmed\\Desktop\\ermire\\src\\styles\\styles.js */`);
style.__hash = "1187539045";
/* harmony default export */ __webpack_exports__["default"] = (style);

/***/ }),

/***/ 3:
/*!**********************************!*\
  !*** multi ./src/pages/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\afmed\Desktop\ermire\src\pages\index.js */"./src/pages/index.js");


/***/ }),

/***/ "@fullpage/react-fullpage":
/*!*******************************************!*\
  !*** external "@fullpage/react-fullpage" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fullpage/react-fullpage");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "gsap":
/*!***********************!*\
  !*** external "gsap" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("gsap");

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

/***/ "react-spring":
/*!*******************************!*\
  !*** external "react-spring" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-spring");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9taXR0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dC9Gb290ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0Zvb3Rlci9zdHlsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0hlYWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvSGVhZGVyL3N0eWxlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L3N0eWxlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05hdmlnYXRpb24vc3R5bGUuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL0hvbWVQYWdlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL0hvbWVQYWdlL3N0eWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZnVsbHBhZ2UvcmVhY3QtZnVsbHBhZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmb3JtaWtcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJnc2FwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1wYWdlLXRyYW5zaXRpb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXMtZXhhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtbWVzc2VuZ2VyLWN1c3RvbWVyLWNoYXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXNwcmluZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1qc3gvc3R5bGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiJdLCJuYW1lcyI6WyJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwiZXhwb3J0cyIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiX3JlYWN0IiwiX3VybCIsIl91dGlscyIsIl9yb3V0ZXIiLCJfcm91dGVyMiIsImlzTG9jYWwiLCJocmVmIiwidXJsIiwicGFyc2UiLCJvcmlnaW4iLCJnZXRMb2NhdGlvbk9yaWdpbiIsImhvc3QiLCJwcm90b2NvbCIsIm1lbW9pemVkRm9ybWF0VXJsIiwiZm9ybWF0RnVuYyIsImxhc3RIcmVmIiwibGFzdEFzIiwibGFzdFJlc3VsdCIsImFzIiwicmVzdWx0IiwiZm9ybWF0VXJsIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJvYnNlcnZlciIsImxpc3RlbmVycyIsIk1hcCIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwid2luZG93IiwicHJlZmV0Y2hlZCIsImdldE9ic2VydmVyIiwidW5kZWZpbmVkIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsImhhcyIsInRhcmdldCIsImNiIiwiZ2V0IiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsInVub2JzZXJ2ZSIsImRlbGV0ZSIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJlbCIsIm9ic2VydmUiLCJzZXQiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJMaW5rIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInAiLCJjbGVhblVwTGlzdGVuZXJzIiwiZm9ybWF0VXJscyIsImFzSHJlZiIsImFkZEJhc2VQYXRoIiwibGlua0NsaWNrZWQiLCJlIiwibm9kZU5hbWUiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJwYXRobmFtZSIsImxvY2F0aW9uIiwicmVzb2x2ZSIsInByZXZlbnREZWZhdWx0Iiwic2Nyb2xsIiwiaW5kZXhPZiIsInJlcGxhY2UiLCJzaGFsbG93IiwidGhlbiIsInN1Y2Nlc3MiLCJzY3JvbGxUbyIsImRvY3VtZW50IiwiYm9keSIsImZvY3VzIiwicHJlZmV0Y2giLCJ3YXJuIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJnZXRQYXRocyIsInBhcnNlZEhyZWYiLCJwYXJzZWRBcyIsInJlc29sdmVkSHJlZiIsImhhbmRsZVJlZiIsInJlZiIsInRhZ05hbWUiLCJpc1ByZWZldGNoZWQiLCJqb2luIiwib3B0aW9ucyIsInBhdGhzIiwiY2F0Y2giLCJyZW5kZXIiLCJjaGlsZHJlbiIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImN1cnJlbnQiLCJvbk1vdXNlRW50ZXIiLCJwcmlvcml0eSIsIm9uQ2xpY2siLCJkZWZhdWx0UHJldmVudGVkIiwicGFzc0hyZWYiLCJ0eXBlIiwicHJvY2VzcyIsImNsb25lRWxlbWVudCIsImV4ZWNPbmNlIiwiUHJvcFR5cGVzIiwiZXhhY3QiLCJwcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiYm9vbCIsImVsZW1lbnQiLCJwcm9wTmFtZSIsInZhbHVlIiwiX2RlZmF1bHQiLCJ1c2VSb3V0ZXIiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJjcmVhdGVSb3V0ZXIiLCJ3aXRoUm91dGVyIiwiUm91dGVyIiwiTmV4dFJvdXRlciIsIl9yb3V0ZXJDb250ZXh0IiwiX3dpdGhSb3V0ZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsImFyZ3VtZW50cyIsImV2ZW50Iiwib24iLCJldmVudEZpZWxkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiRXJyb3IiLCJ1c2VDb250ZXh0IiwiUm91dGVyQ29udGV4dCIsIl9sZW4iLCJsZW5ndGgiLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsImFzc2lnbiIsIkNvbXBvc2VkQ29tcG9uZW50IiwiV2l0aFJvdXRlcldyYXBwZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwibmFtZSIsImRpc3BsYXlOYW1lIiwibWl0dCIsImFsbCIsImNyZWF0ZSIsImhhbmRsZXIiLCJwdXNoIiwib2ZmIiwic3BsaWNlIiwiZW1pdCIsImV2dHMiLCJzbGljZSIsIm1hcCIsIl9faW1wb3J0RGVmYXVsdCIsIm1vZCIsInVybF8xIiwibWl0dF8xIiwidXRpbHNfMSIsImlzX2R5bmFtaWNfMSIsInJvdXRlX21hdGNoZXJfMSIsInJvdXRlX3JlZ2V4XzEiLCJiYXNlUGF0aCIsInBhdGgiLCJkZWxCYXNlUGF0aCIsInN1YnN0ciIsInRvUm91dGUiLCJwcmVwYXJlUm91dGUiLCJmZXRjaE5leHREYXRhIiwicXVlcnkiLCJpc1NlcnZlclJlbmRlciIsImF0dGVtcHRzIiwiZ2V0UmVzcG9uc2UiLCJmZXRjaCIsIl9fTkVYVF9EQVRBX18iLCJidWlsZElkIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJvayIsInN0YXR1cyIsImpzb24iLCJkYXRhIiwiY29kZSIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwic3Vic2NyaXB0aW9uIiwiaXNGYWxsYmFjayIsInNkYyIsIm9uUG9wU3RhdGUiLCJzdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiaXNTc3IiLCJhc1BhdGgiLCJfYnBzIiwiX2dldFN0YXRpY0RhdGEiLCJQcm9taXNlIiwiX2dldFNlcnZlckRhdGEiLCJyb3V0ZSIsImNvbXBvbmVudHMiLCJfX05fU1NHIiwiX19OX1NTUCIsImlzRHluYW1pY1JvdXRlIiwiYXV0b0V4cG9ydCIsInN1YiIsImNsYyIsIl93cmFwQXBwIiwiX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0IiwidXBkYXRlIiwibmV3RGF0YSIsIm5vdGlmeSIsInJlbG9hZCIsImJhY2siLCJoaXN0b3J5IiwiY2hhbmdlIiwibWV0aG9kIiwiX2FzIiwicmVqZWN0IiwiX2giLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsImFib3J0Q29tcG9uZW50TG9hZCIsIm9ubHlBSGFzaENoYW5nZSIsInNjcm9sbFRvSGFzaCIsInVybElzTmV3IiwiYXNQYXRobmFtZSIsInJvdXRlUmVnZXgiLCJnZXRSb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsImdldFJvdXRlTWF0Y2hlciIsIm1pc3NpbmdQYXJhbXMiLCJrZXlzIiwiZ3JvdXBzIiwiZmlsdGVyIiwicGFyYW0iLCJnZXRSb3V0ZUluZm8iLCJyb3V0ZUluZm8iLCJjYW5jZWxsZWQiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJjYWNoZWRSb3V0ZUluZm8iLCJoYW5kbGVFcnJvciIsImxvYWRFcnJvckZhaWwiLCJmZXRjaENvbXBvbmVudCIsInBhZ2UiLCJnaXBFcnIiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJfZ2V0RGF0YSIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNwbGl0IiwibmV3VXJsTm9IYXNoIiwibmV3SGFzaCIsImhhc2giLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwicHJlZmV0Y2hEYXRhIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwibG9hZFBhZ2UiLCJmbiIsImN0eCIsIkFwcFRyZWUiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiVEVTVF9ST1VURSIsInRlc3QiLCJyZSIsImV4ZWMiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJfIiwicGFyYW1zIiwic2x1Z05hbWUiLCJnIiwibSIsInBvcyIsInJlcGVhdCIsImVzY2FwZVJlZ2V4Iiwic3RyIiwibm9ybWFsaXplZFJvdXRlIiwiZXNjYXBlZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsIiQxIiwiaXNDYXRjaEFsbCIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwia2V5IiwiUmVnRXhwIiwibmFtZWRSZWdleCIsInVzZWQiLCJob3N0bmFtZSIsInBvcnQiLCJnZXREaXNwbGF5TmFtZSIsImlzUmVzU2VudCIsImZpbmlzaGVkIiwiaGVhZGVyc1NlbnQiLCJfYSIsInByb3RvdHlwZSIsInBhZ2VQcm9wcyIsInVybE9iamVjdEtleXMiLCJmb3JtYXQiLCJTUCIsIm1lYXN1cmUiLCJGb290ZXIiLCJzdHlsZSIsIkxvZ28iLCJIZWFkZXIiLCJsb2dvIiwiVElNRU9VVCIsIkxheW91dCIsImVudGVyIiwiZXhpdCIsIndpZHRoIiwic2t5IiwibGF5b3V0IiwiSG92ZXIiLCJOYXZpZ2F0aW9uIiwicm91dGVzIiwidGl0bGUiLCJtZW51U3RhdGUiLCJzZXRNZW51U3RhdGUiLCJ1c2VTdGF0ZSIsInNob3dNZW51QmciLCJoaWRlTWVudUJnIiwiaXRlbSIsImluZGV4IiwiaG92ZXIiLCJIZWFkZXJCZyIsImNhbGMiLCJ4IiwieSIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInRyYW5zMSIsInRyYW5zMiIsInRyYW5zMyIsInRyYW5zNCIsInNjcm9sbFRvUmVmIiwib2Zmc2V0VG9wIiwiSG9tZVBhZ2UiLCJjb250YWN0IiwidXNlUmVmIiwidG9Db250YWN0IiwidXNlU3ByaW5nIiwieHkiLCJjb25maWciLCJtYXNzIiwidGVuc2lvbiIsImZyaWN0aW9uIiwic2VydmljZSIsInNob3J0RGVzYyIsImRlc3RpbmF0aW9uIiwiZGlyZWN0aW9uIiwic2VjdGlvbiIsImZ1bGxwYWdlQXBpIiwiY2xpZW50WCIsImNsaWVudFkiLCJtb3ZlVG8iLCJwYWRkaW5nVG9wIiwiYWxpZ25TZWxmIiwidHJhbnNmb3JtIiwiaW50ZXJwb2xhdGUiLCJncmlkQ29sdW1uIiwiZ3JpZFJvdyIsImJhY2tncm91bmQiLCJhbmltYXRpb24iLCJlbWFpbCIsInBob25lIiwidmFsdWVzIiwiZXJyb3JzIiwic2V0VGltZW91dCIsInJlcSIsIm1vZGUiLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3BvbnNlIiwidG91Y2hlZCIsImRpcnR5IiwiaXNTdWJtaXR0aW5nIiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlQmx1ciIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZVJlc2V0IiwicG9zdGVyQkciLCJjaGF0IiwiY2hhdExlZnQiLCJwb3N0ZXIiLCJ0cmVlIiwib3BhY2l0eSIsImZhZGUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFD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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsSzs7Ozs7O0FBRW5CLE1BQU1DLFVBQVUsR0FBRyxNQUFNO0FBQzVCLFFBQU1DLE1BQU0sR0FBRyxDQUNYO0FBQ0k3SCxTQUFLLEVBQUUsR0FEWDtBQUVJOEgsU0FBSyxFQUFFO0FBRlgsR0FEVyxFQUtYO0FBQ0k5SCxTQUFLLEVBQUUsUUFEWDtBQUVJOEgsU0FBSyxFQUFFO0FBRlgsR0FMVyxFQVNYO0FBQ0k5SCxTQUFLLEVBQUUsV0FEWDtBQUVJOEgsU0FBSyxFQUFFO0FBRlgsR0FUVyxFQWFYO0FBQ0k5SCxTQUFLLEVBQUUsT0FEWDtBQUVJOEgsU0FBSyxFQUFFO0FBRlgsR0FiVyxFQWlCWDtBQUNJOUgsU0FBSyxFQUFFLFVBRFg7QUFFSThILFNBQUssRUFBRTtBQUZYLEdBakJXLEVBcUJYO0FBQ0k5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LE1BQU1oQyxJQUFJLEdBQUcsTUFBYjtBQUNJLE1BQU1ILEtBQUssa3JWQXFETUcsSUFyRE4sb01BcURNQSxJQXJETjs7MkVBQUEsQ0FBWDs7QUE2TVdILG9FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL01BLHFEOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGdDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF91cmw9cmVxdWlyZShcInVybFwiKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvdXRpbHNcIik7dmFyIF9yb3V0ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9yb3V0ZXJcIikpO3ZhciBfcm91dGVyMj1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIik7ZnVuY3Rpb24gaXNMb2NhbChocmVmKXt2YXIgdXJsPSgwLF91cmwucGFyc2UpKGhyZWYsZmFsc2UsdHJ1ZSk7dmFyIG9yaWdpbj0oMCxfdXJsLnBhcnNlKSgoMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCksZmFsc2UsdHJ1ZSk7cmV0dXJuIXVybC5ob3N0fHx1cmwucHJvdG9jb2w9PT1vcmlnaW4ucHJvdG9jb2wmJnVybC5ob3N0PT09b3JpZ2luLmhvc3Q7fWZ1bmN0aW9uIG1lbW9pemVkRm9ybWF0VXJsKGZvcm1hdEZ1bmMpe3ZhciBsYXN0SHJlZj1udWxsO3ZhciBsYXN0QXM9bnVsbDt2YXIgbGFzdFJlc3VsdD1udWxsO3JldHVybihocmVmLGFzKT0+e2lmKGxhc3RSZXN1bHQmJmhyZWY9PT1sYXN0SHJlZiYmYXM9PT1sYXN0QXMpe3JldHVybiBsYXN0UmVzdWx0O312YXIgcmVzdWx0PWZvcm1hdEZ1bmMoaHJlZixhcyk7bGFzdEhyZWY9aHJlZjtsYXN0QXM9YXM7bGFzdFJlc3VsdD1yZXN1bHQ7cmV0dXJuIHJlc3VsdDt9O31mdW5jdGlvbiBmb3JtYXRVcmwodXJsKXtyZXR1cm4gdXJsJiZ0eXBlb2YgdXJsPT09J29iamVjdCc/KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh1cmwpOnVybDt9dmFyIG9ic2VydmVyO3ZhciBsaXN0ZW5lcnM9bmV3IE1hcCgpO3ZhciBJbnRlcnNlY3Rpb25PYnNlcnZlcj10eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCc/d2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyOm51bGw7dmFyIHByZWZldGNoZWQ9e307ZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKXsvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuaWYob2JzZXJ2ZXIpe3JldHVybiBvYnNlcnZlcjt9Ly8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG5pZighSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpe3JldHVybiB1bmRlZmluZWQ7fXJldHVybiBvYnNlcnZlcj1uZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcz0+e2VudHJpZXMuZm9yRWFjaChlbnRyeT0+e2lmKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpe3JldHVybjt9dmFyIGNiPWxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KTtpZihlbnRyeS5pc0ludGVyc2VjdGluZ3x8ZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8+MCl7b2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7bGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpO2NiKCk7fX0pO30se3Jvb3RNYXJnaW46JzIwMHB4J30pO312YXIgbGlzdGVuVG9JbnRlcnNlY3Rpb25zPShlbCxjYik9Pnt2YXIgb2JzZXJ2ZXI9Z2V0T2JzZXJ2ZXIoKTtpZighb2JzZXJ2ZXIpe3JldHVybigpPT57fTt9b2JzZXJ2ZXIub2JzZXJ2ZShlbCk7bGlzdGVuZXJzLnNldChlbCxjYik7cmV0dXJuKCk9Pnt0cnl7b2JzZXJ2ZXIudW5vYnNlcnZlKGVsKTt9Y2F0Y2goZXJyKXtjb25zb2xlLmVycm9yKGVycik7fWxpc3RlbmVycy5kZWxldGUoZWwpO307fTtjbGFzcyBMaW5rIGV4dGVuZHMgX3JlYWN0LkNvbXBvbmVudHtjb25zdHJ1Y3Rvcihwcm9wcyl7c3VwZXIocHJvcHMpO3RoaXMucD12b2lkIDA7dGhpcy5jbGVhblVwTGlzdGVuZXJzPSgpPT57fTt0aGlzLmZvcm1hdFVybHM9bWVtb2l6ZWRGb3JtYXRVcmwoKGhyZWYsYXNIcmVmKT0+e3JldHVybntocmVmOigwLF9yb3V0ZXIyLmFkZEJhc2VQYXRoKShmb3JtYXRVcmwoaHJlZikpLGFzOmFzSHJlZj8oMCxfcm91dGVyMi5hZGRCYXNlUGF0aCkoZm9ybWF0VXJsKGFzSHJlZikpOmFzSHJlZn07fSk7dGhpcy5saW5rQ2xpY2tlZD1lPT57dmFye25vZGVOYW1lLHRhcmdldH09ZS5jdXJyZW50VGFyZ2V0O2lmKG5vZGVOYW1lPT09J0EnJiYodGFyZ2V0JiZ0YXJnZXQhPT0nX3NlbGYnfHxlLm1ldGFLZXl8fGUuY3RybEtleXx8ZS5zaGlmdEtleXx8ZS5uYXRpdmVFdmVudCYmZS5uYXRpdmVFdmVudC53aGljaD09PTIpKXsvLyBpZ25vcmUgY2xpY2sgZm9yIG5ldyB0YWIgLyBuZXcgd2luZG93IGJlaGF2aW9yXG5yZXR1cm47fXZhcntocmVmLGFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpO2lmKCFpc0xvY2FsKGhyZWYpKXsvLyBpZ25vcmUgY2xpY2sgaWYgaXQncyBvdXRzaWRlIG91ciBzY29wZSAoZS5nLiBodHRwczovL2dvb2dsZS5jb20pXG5yZXR1cm47fXZhcntwYXRobmFtZX09d2luZG93LmxvY2F0aW9uO2hyZWY9KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxocmVmKTthcz1hcz8oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLGFzKTpocmVmO2UucHJldmVudERlZmF1bHQoKTsvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbnZhcntzY3JvbGx9PXRoaXMucHJvcHM7aWYoc2Nyb2xsPT1udWxsKXtzY3JvbGw9YXMuaW5kZXhPZignIycpPDA7fS8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuX3JvdXRlci5kZWZhdWx0W3RoaXMucHJvcHMucmVwbGFjZT8ncmVwbGFjZSc6J3B1c2gnXShocmVmLGFzLHtzaGFsbG93OnRoaXMucHJvcHMuc2hhbGxvd30pLnRoZW4oc3VjY2Vzcz0+e2lmKCFzdWNjZXNzKXJldHVybjtpZihzY3JvbGwpe3dpbmRvdy5zY3JvbGxUbygwLDApO2RvY3VtZW50LmJvZHkuZm9jdXMoKTt9fSk7fTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYocHJvcHMucHJlZmV0Y2gpe2NvbnNvbGUud2FybignTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7fX10aGlzLnA9cHJvcHMucHJlZmV0Y2ghPT1mYWxzZTt9Y29tcG9uZW50V2lsbFVubW91bnQoKXt0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKTt9Z2V0UGF0aHMoKXt2YXJ7cGF0aG5hbWV9PXdpbmRvdy5sb2NhdGlvbjt2YXJ7aHJlZjpwYXJzZWRIcmVmLGFzOnBhcnNlZEFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpO3ZhciByZXNvbHZlZEhyZWY9KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxwYXJzZWRIcmVmKTtyZXR1cm5bcmVzb2x2ZWRIcmVmLHBhcnNlZEFzPygwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUscGFyc2VkQXMpOnJlc29sdmVkSHJlZl07fWhhbmRsZVJlZihyZWYpe2lmKHRoaXMucCYmSW50ZXJzZWN0aW9uT2JzZXJ2ZXImJnJlZiYmcmVmLnRhZ05hbWUpe3RoaXMuY2xlYW5VcExpc3RlbmVycygpO3ZhciBpc1ByZWZldGNoZWQ9cHJlZmV0Y2hlZFt0aGlzLmdldFBhdGhzKCkuam9pbigvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuJyUnKV07aWYoIWlzUHJlZmV0Y2hlZCl7dGhpcy5jbGVhblVwTGlzdGVuZXJzPWxpc3RlblRvSW50ZXJzZWN0aW9ucyhyZWYsKCk9Pnt0aGlzLnByZWZldGNoKCk7fSk7fX19Ly8gVGhlIGZ1bmN0aW9uIGlzIG1lbW9pemVkIHNvIHRoYXQgbm8gZXh0cmEgbGlmZWN5Y2xlcyBhcmUgbmVlZGVkXG4vLyBhcyBwZXIgaHR0cHM6Ly9yZWFjdGpzLm9yZy9ibG9nLzIwMTgvMDYvMDcveW91LXByb2JhYmx5LWRvbnQtbmVlZC1kZXJpdmVkLXN0YXRlLmh0bWxcbnByZWZldGNoKG9wdGlvbnMpe2lmKCF0aGlzLnB8fHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJylyZXR1cm47Ly8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxudmFyIHBhdGhzPXRoaXMuZ2V0UGF0aHMoKTsvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4vLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3Rcbi8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuX3JvdXRlci5kZWZhdWx0LnByZWZldGNoKHBhdGhzWy8qIGhyZWYgKi8wXSxwYXRoc1svKiBhc1BhdGggKi8xXSxvcHRpb25zKS5jYXRjaChlcnI9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Ly8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xudGhyb3cgZXJyO319KTtwcmVmZXRjaGVkW3BhdGhzLmpvaW4oLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiclJyldPXRydWU7fXJlbmRlcigpe3ZhcntjaGlsZHJlbn09dGhpcy5wcm9wczt2YXJ7aHJlZixhc309dGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZix0aGlzLnByb3BzLmFzKTsvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbmlmKHR5cGVvZiBjaGlsZHJlbj09PSdzdHJpbmcnKXtjaGlsZHJlbj0vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIixudWxsLGNoaWxkcmVuKTt9Ly8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG52YXIgY2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO3ZhciBwcm9wcz17cmVmOmVsPT57dGhpcy5oYW5kbGVSZWYoZWwpO2lmKGNoaWxkJiZ0eXBlb2YgY2hpbGQ9PT0nb2JqZWN0JyYmY2hpbGQucmVmKXtpZih0eXBlb2YgY2hpbGQucmVmPT09J2Z1bmN0aW9uJyljaGlsZC5yZWYoZWwpO2Vsc2UgaWYodHlwZW9mIGNoaWxkLnJlZj09PSdvYmplY3QnKXtjaGlsZC5yZWYuY3VycmVudD1lbDt9fX0sb25Nb3VzZUVudGVyOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcj09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKTt9dGhpcy5wcmVmZXRjaCh7cHJpb3JpdHk6dHJ1ZX0pO30sb25DbGljazplPT57aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25DbGljayhlKTt9aWYoIWUuZGVmYXVsdFByZXZlbnRlZCl7dGhpcy5saW5rQ2xpY2tlZChlKTt9fX07Ly8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4vLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbmlmKHRoaXMucHJvcHMucGFzc0hyZWZ8fGNoaWxkLnR5cGU9PT0nYScmJiEoJ2hyZWYnaW4gY2hpbGQucHJvcHMpKXtwcm9wcy5ocmVmPWFzfHxocmVmO30vLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4vLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkuXG5pZihwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKXt2YXIgcmV3cml0ZVVybEZvck5leHRFeHBvcnQ9cmVxdWlyZSgnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JykucmV3cml0ZVVybEZvck5leHRFeHBvcnQ7aWYocHJvcHMuaHJlZiYmdHlwZW9mIF9fTkVYVF9EQVRBX18hPT0ndW5kZWZpbmVkJyYmX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0KXtwcm9wcy5ocmVmPXJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHByb3BzLmhyZWYpO319cmV0dXJuIF9yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCxwcm9wcyk7fX1pZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe3ZhciB3YXJuPSgwLF91dGlscy5leGVjT25jZSkoY29uc29sZS5lcnJvcik7Ly8gVGhpcyBtb2R1bGUgZ2V0cyByZW1vdmVkIGJ5IHdlYnBhY2suSWdub3JlUGx1Z2luXG52YXIgUHJvcFR5cGVzPXJlcXVpcmUoJ3Byb3AtdHlwZXMnKTt2YXIgZXhhY3Q9cmVxdWlyZSgncHJvcC10eXBlcy1leGFjdCcpOy8vIEB0cy1pZ25vcmUgdGhlIHByb3BlcnR5IGlzIHN1cHBvcnRlZCwgd2hlbiBkZWNsYXJpbmcgaXQgb24gdGhlIGNsYXNzIGl0IG91dHB1dHMgYW4gZXh0cmEgYml0IG9mIGNvZGUgd2hpY2ggaXMgbm90IG5lZWRlZC5cbkxpbmsucHJvcFR5cGVzPWV4YWN0KHtocmVmOlByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsUHJvcFR5cGVzLm9iamVjdF0pLmlzUmVxdWlyZWQsYXM6UHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZyxQcm9wVHlwZXMub2JqZWN0XSkscHJlZmV0Y2g6UHJvcFR5cGVzLmJvb2wscmVwbGFjZTpQcm9wVHlwZXMuYm9vbCxzaGFsbG93OlByb3BUeXBlcy5ib29sLHBhc3NIcmVmOlByb3BUeXBlcy5ib29sLHNjcm9sbDpQcm9wVHlwZXMuYm9vbCxjaGlsZHJlbjpQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwocHJvcHMscHJvcE5hbWUpPT57dmFyIHZhbHVlPXByb3BzW3Byb3BOYW1lXTtpZih0eXBlb2YgdmFsdWU9PT0nc3RyaW5nJyl7d2FybihcIldhcm5pbmc6IFlvdSdyZSB1c2luZyBhIHN0cmluZyBkaXJlY3RseSBpbnNpZGUgPExpbms+LiBUaGlzIHVzYWdlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFBsZWFzZSBhZGQgYW4gPGE+IHRhZyBhcyBjaGlsZCBvZiA8TGluaz5cIik7fXJldHVybiBudWxsO31dKS5pc1JlcXVpcmVkfSk7fXZhciBfZGVmYXVsdD1MaW5rO2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VSb3V0ZXI9dXNlUm91dGVyO2V4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlPW1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtleHBvcnRzLmNyZWF0ZVJvdXRlcj1leHBvcnRzLndpdGhSb3V0ZXI9ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcjI9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtleHBvcnRzLlJvdXRlcj1fcm91dGVyMi5kZWZhdWx0O2V4cG9ydHMuTmV4dFJvdXRlcj1fcm91dGVyMi5OZXh0Um91dGVyO3ZhciBfcm91dGVyQ29udGV4dD1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0XCIpO3ZhciBfd2l0aFJvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dpdGgtcm91dGVyXCIpKTtleHBvcnRzLndpdGhSb3V0ZXI9X3dpdGhSb3V0ZXIuZGVmYXVsdDsvKiBnbG9iYWwgd2luZG93ICovdmFyIHNpbmdsZXRvblJvdXRlcj17cm91dGVyOm51bGwsLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbnJlYWR5Q2FsbGJhY2tzOltdLHJlYWR5KGNiKXtpZih0aGlzLnJvdXRlcilyZXR1cm4gY2IoKTtpZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpe3RoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7fX19Oy8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbnZhciB1cmxQcm9wZXJ0eUZpZWxkcz1bJ3BhdGhuYW1lJywncm91dGUnLCdxdWVyeScsJ2FzUGF0aCcsJ2NvbXBvbmVudHMnLCdpc0ZhbGxiYWNrJywnYmFzZVBhdGgnXTt2YXIgcm91dGVyRXZlbnRzPVsncm91dGVDaGFuZ2VTdGFydCcsJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywncm91dGVDaGFuZ2VFcnJvcicsJ2hhc2hDaGFuZ2VTdGFydCcsJ2hhc2hDaGFuZ2VDb21wbGV0ZSddO3ZhciBjb3JlTWV0aG9kRmllbGRzPVsncHVzaCcsJ3JlcGxhY2UnLCdyZWxvYWQnLCdiYWNrJywncHJlZmV0Y2gnLCdiZWZvcmVQb3BTdGF0ZSddOy8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsJ2V2ZW50cycse2dldCgpe3JldHVybiBfcm91dGVyMi5kZWZhdWx0LmV2ZW50czt9fSk7dXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4vLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbi8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsZmllbGQse2dldCgpe3ZhciByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF07fX0pO30pO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG47c2luZ2xldG9uUm91dGVyW2ZpZWxkXT1mdW5jdGlvbigpe3ZhciByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJndW1lbnRzKTt9O30pO3JvdXRlckV2ZW50cy5mb3JFYWNoKGV2ZW50PT57c2luZ2xldG9uUm91dGVyLnJlYWR5KCgpPT57X3JvdXRlcjIuZGVmYXVsdC5ldmVudHMub24oZXZlbnQsZnVuY3Rpb24oKXt2YXIgZXZlbnRGaWVsZD1cIm9uXCIrZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrZXZlbnQuc3Vic3RyaW5nKDEpO3ZhciBfc2luZ2xldG9uUm91dGVyPXNpbmdsZXRvblJvdXRlcjtpZihfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKXt0cnl7X3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmd1bWVudHMpO31jYXRjaChlcnIpey8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG5jb25zb2xlLmVycm9yKFwiRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6IFwiK2V2ZW50RmllbGQpOy8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG5jb25zb2xlLmVycm9yKGVyci5tZXNzYWdlK1wiXFxuXCIrZXJyLnN0YWNrKTt9fX0pO30pO30pO2Z1bmN0aW9uIGdldFJvdXRlcigpe2lmKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKXt2YXIgbWVzc2FnZT0nTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicrJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJzt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fXJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO30vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbnZhciBfZGVmYXVsdD1zaW5nbGV0b25Sb3V0ZXI7Ly8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtmdW5jdGlvbiB1c2VSb3V0ZXIoKXtyZXR1cm4gX3JlYWN0LmRlZmF1bHQudXNlQ29udGV4dChfcm91dGVyQ29udGV4dC5Sb3V0ZXJDb250ZXh0KTt9Ly8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbnZhciBjcmVhdGVSb3V0ZXI9ZnVuY3Rpb24gY3JlYXRlUm91dGVyKCl7Zm9yKHZhciBfbGVuPWFyZ3VtZW50cy5sZW5ndGgsYXJncz1uZXcgQXJyYXkoX2xlbiksX2tleT0wO19rZXk8X2xlbjtfa2V5Kyspe2FyZ3NbX2tleV09YXJndW1lbnRzW19rZXldO31zaW5nbGV0b25Sb3V0ZXIucm91dGVyPW5ldyBfcm91dGVyMi5kZWZhdWx0KC4uLmFyZ3MpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKGNiPT5jYigpKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3M9W107cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fTsvLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnRzLmNyZWF0ZVJvdXRlcj1jcmVhdGVSb3V0ZXI7ZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcil7dmFyIF9yb3V0ZXI9cm91dGVyO3ZhciBpbnN0YW5jZT17fTtmb3IodmFyIHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtpZih0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV09PT0nb2JqZWN0Jyl7aW5zdGFuY2VbcHJvcGVydHldPU9iamVjdC5hc3NpZ24oe30sX3JvdXRlcltwcm9wZXJ0eV0pOy8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG5jb250aW51ZTt9aW5zdGFuY2VbcHJvcGVydHldPV9yb3V0ZXJbcHJvcGVydHldO30vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5pbnN0YW5jZS5ldmVudHM9X3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57aW5zdGFuY2VbZmllbGRdPWZ1bmN0aW9uKCl7cmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3VtZW50cyk7fTt9KTtyZXR1cm4gaW5zdGFuY2U7fSIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9d2l0aFJvdXRlcjt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7ZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCl7ZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpe3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LE9iamVjdC5hc3NpZ24oe3JvdXRlcjooMCxfcm91dGVyLnVzZVJvdXRlcikoKX0scHJvcHMpKTt9V2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcy8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbjtXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3ZhciBuYW1lPUNvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lfHxDb21wb3NlZENvbXBvbmVudC5uYW1lfHwnVW5rbm93bic7V2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWU9XCJ3aXRoUm91dGVyKFwiK25hbWUrXCIpXCI7fXJldHVybiBXaXRoUm91dGVyV3JhcHBlcjt9IiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIG1pdHQoKSB7XG4gICAgY29uc3QgYWxsID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBvbih0eXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICA7XG4gICAgICAgICAgICAoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcik7XG4gICAgICAgIH0sXG4gICAgICAgIG9mZih0eXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgICAgICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZW1pdCh0eXBlLCAuLi5ldnRzKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICAoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIoLi4uZXZ0cyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9O1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gbWl0dDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdXJsXzEgPSByZXF1aXJlKFwidXJsXCIpO1xuY29uc3QgbWl0dF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jb25zdCBpc19keW5hbWljXzEgPSByZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO1xuY29uc3Qgcm91dGVfbWF0Y2hlcl8xID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtbWF0Y2hlclwiKTtcbmNvbnN0IHJvdXRlX3JlZ2V4XzEgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1yZWdleFwiKTtcbmNvbnN0IGJhc2VQYXRoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCB8fCAnJztcbmZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSAhPT0gMCA/IGJhc2VQYXRoICsgcGF0aCA6IHBhdGg7XG59XG5leHBvcnRzLmFkZEJhc2VQYXRoID0gYWRkQmFzZVBhdGg7XG5mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgPT09IDBcbiAgICAgICAgPyBwYXRoLnN1YnN0cihiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xuICAgICAgICA6IHBhdGg7XG59XG5leHBvcnRzLmRlbEJhc2VQYXRoID0gZGVsQmFzZVBhdGg7XG5mdW5jdGlvbiB0b1JvdXRlKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJztcbn1cbmNvbnN0IHByZXBhcmVSb3V0ZSA9IChwYXRoKSA9PiB0b1JvdXRlKCFwYXRoIHx8IHBhdGggPT09ICcvJyA/ICcvaW5kZXgnIDogcGF0aCk7XG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgaXNTZXJ2ZXJSZW5kZXIsIGNiKSB7XG4gICAgbGV0IGF0dGVtcHRzID0gaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMTtcbiAgICBmdW5jdGlvbiBnZXRSZXNwb25zZSgpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKFxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBfX05FWFRfREFUQV9fXG4gICAgICAgICAgICBgL19uZXh0L2RhdGEvJHtfX05FWFRfREFUQV9fLmJ1aWxkSWR9JHtkZWxCYXNlUGF0aChwYXRobmFtZSl9Lmpzb25gKSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9KSwge1xuICAgICAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgICAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgICAgICAvLyA+IG9wdGlvbi5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgICAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgICAgICBpZiAoLS1hdHRlbXB0cyA+IDAgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldFJlc3BvbnNlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICByZXR1cm4gY2IgPyBjYihkYXRhKSA6IGRhdGE7XG4gICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgICAgIC8vIGxvb3AuXG4gICAgICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGVyci5jb2RlID0gJ1BBR0VfTE9BRF9FUlJPUic7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xufVxuY2xhc3MgUm91dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihwYXRobmFtZSwgcXVlcnksIGFzLCB7IGluaXRpYWxQcm9wcywgcGFnZUxvYWRlciwgQXBwLCB3cmFwQXBwLCBDb21wb25lbnQsIGVyciwgc3Vic2NyaXB0aW9uLCBpc0ZhbGxiYWNrLCB9KSB7XG4gICAgICAgIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gICAgICAgIHRoaXMuc2RjID0ge307XG4gICAgICAgIHRoaXMub25Qb3BTdGF0ZSA9IChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWUuc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgICAgICAgICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgICAgICAgICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgICAgICAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgICAgICAgICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgICAgICAgICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAgICAgICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSwgdXRpbHNfMS5nZXRVUkwoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgICAgICAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICAgICAgICAgIGlmIChlLnN0YXRlICYmXG4gICAgICAgICAgICAgICAgdGhpcy5pc1NzciAmJlxuICAgICAgICAgICAgICAgIGUuc3RhdGUuYXMgPT09IHRoaXMuYXNQYXRoICYmXG4gICAgICAgICAgICAgICAgdXJsXzEucGFyc2UoZS5zdGF0ZS51cmwpLnBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgICAgICAgICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICAgICAgICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhlLnN0YXRlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gZS5zdGF0ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB1cmwgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBhcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdgcG9wc3RhdGVgIGV2ZW50IHRyaWdnZXJlZCBidXQgYGV2ZW50LnN0YXRlYCBkaWQgbm90IGhhdmUgYHVybGAgb3IgYGFzYCBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvcG9wc3RhdGUtc3RhdGUtZW1wdHknKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlcGxhY2UodXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2dldFN0YXRpY0RhdGEgPSAoYXNQYXRoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZSh1cmxfMS5wYXJzZShhc1BhdGgpLnBhdGhuYW1lKTtcbiAgICAgICAgICAgIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW3BhdGhuYW1lXVxuICAgICAgICAgICAgICAgID8gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW3BhdGhuYW1lXSlcbiAgICAgICAgICAgICAgICA6IGZldGNoTmV4dERhdGEocGF0aG5hbWUsIG51bGwsIHRoaXMuaXNTc3IsIGRhdGEgPT4gKHRoaXMuc2RjW3BhdGhuYW1lXSA9IGRhdGEpKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fZ2V0U2VydmVyRGF0YSA9IChhc1BhdGgpID0+IHtcbiAgICAgICAgICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdXJsXzEucGFyc2UoYXNQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgICAgIHJldHVybiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgdGhpcy5pc1Nzcik7XG4gICAgICAgIH07XG4gICAgICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgICAgICB0aGlzLnJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSk7XG4gICAgICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSB7fTtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgICAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgICAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHsgQ29tcG9uZW50OiBBcHAgfTtcbiAgICAgICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAgICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICAgICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzO1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAgICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICAgICAgdGhpcy5hc1BhdGggPVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgICAgICAgaXNfZHluYW1pY18xLmlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzO1xuICAgICAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGg7XG4gICAgICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwO1xuICAgICAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgICAgIHRoaXMuaXNTc3IgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrO1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAgICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAgICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSwgYXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBAZGVwcmVjYXRlZCBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBldmVuIHRob3VnaCBpdCdzIGEgcHJpdmF0ZSBtZXRob2QuXG4gICAgc3RhdGljIF9yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgICAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnQ7XG4gICAgICAgICAgICByZXR1cm4gcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB1cmw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlKHJvdXRlLCBtb2QpIHtcbiAgICAgICAgY29uc3QgQ29tcG9uZW50ID0gbW9kLmRlZmF1bHQgfHwgbW9kO1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXTtcbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCB1cGRhdGUgdW5hdmFpbGFibGUgcm91dGU6ICR7cm91dGV9YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZGF0YSksIHsgQ29tcG9uZW50LCBfX05fU1NHOiBtb2QuX19OX1NTRywgX19OX1NTUDogbW9kLl9fTl9TU1AgfSk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSBuZXdEYXRhO1xuICAgICAgICAvLyBwYWdlcy9fYXBwLmpzIHVwZGF0ZWRcbiAgICAgICAgaWYgKHJvdXRlID09PSAnL19hcHAnKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyb3V0ZSA9PT0gdGhpcy5yb3V0ZSkge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnkobmV3RGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVsb2FkKCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgICAqL1xuICAgIGJhY2soKSB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICAgKi9cbiAgICBwdXNoKHVybCwgYXMgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgICAqL1xuICAgIHJlcGxhY2UodXJsLCBhcyA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGNoYW5nZShtZXRob2QsIF91cmwsIF9hcywgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgICAgICAgICAgaWYgKHV0aWxzXzEuU1QpIHtcbiAgICAgICAgICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gICAgICAgICAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgICAgICAgICAgbGV0IHVybCA9IHR5cGVvZiBfdXJsID09PSAnb2JqZWN0JyA/IHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oX3VybCkgOiBfdXJsO1xuICAgICAgICAgICAgbGV0IGFzID0gdHlwZW9mIF9hcyA9PT0gJ29iamVjdCcgPyB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKF9hcykgOiBfYXM7XG4gICAgICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aCh1cmwpO1xuICAgICAgICAgICAgYXMgPSBhZGRCYXNlUGF0aChhcyk7XG4gICAgICAgICAgICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gICAgICAgICAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkgZm9yIHRoZSBTU1IgcGFnZS5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAgICAgICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnQ7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgICAgICAgICAgIGlmIChfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgYXMgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChhcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQoYXMpO1xuICAgICAgICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbiAgICAgICAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgICAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgICAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGFzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGFzKTtcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5LCBwcm90b2NvbCB9ID0gdXJsXzEucGFyc2UodXJsLCB0cnVlKTtcbiAgICAgICAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgICAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgICAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgICAgICAgIGlmICghdGhpcy51cmxJc05ldyhhcykpIHtcbiAgICAgICAgICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSk7XG4gICAgICAgICAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9ucztcbiAgICAgICAgICAgIGlmIChpc19keW5hbWljXzEuaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogYXNQYXRobmFtZSB9ID0gdXJsXzEucGFyc2UoYXMpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSByb3V0ZV9yZWdleF8xLmdldFJvdXRlUmVnZXgocm91dGUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByb3V0ZV9tYXRjaGVyXzEuZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO1xuICAgICAgICAgICAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihwYXJhbSA9PiAhcXVlcnlbcGFyYW1dKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QobmV3IEVycm9yKGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2ApKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpO1xuICAgICAgICAgICAgLy8gSWYgc2hhbGxvdyBpcyB0cnVlIGFuZCB0aGUgcm91dGUgZXhpc3RzIGluIHRoZSByb3V0ZXIgY2FjaGUgd2UgcmV1c2UgdGhlIHByZXZpb3VzIHJlc3VsdFxuICAgICAgICAgICAgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cpLnRoZW4ocm91dGVJbmZvID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGVycm9yIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXBwQ29tcCA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQ7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFyb3V0ZUluZm8uQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlSW5mbyk7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBhcyk7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9LCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgdXRpbHNfMS5nZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oe1xuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBhcyxcbiAgICAgICAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAgICAgJycsIGFzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICAvLyBJZiB0aGVyZSBpcyBhIHNoYWxsb3cgcm91dGUgdHJhbnNpdGlvbiBwb3NzaWJsZVxuICAgICAgICAvLyBJZiB0aGUgcm91dGUgaXMgYWxyZWFkeSByZW5kZXJlZCBvbiB0aGUgc2NyZWVuLlxuICAgICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY2FjaGVkUm91dGVJbmZvKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoYW5kbGVFcnJvciA9IChlcnIsIGxvYWRFcnJvckZhaWwpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyLmNvZGUgPT09ICdQQUdFX0xPQURfRVJST1InIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgICAgICAgICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAgICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgICAgICAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG4gICAgICAgICAgICAgICAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgICAgICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgICAgICAgICAgICAgICAgLy8gU28sIHdlIG5lZWQgdG8gbWFyayBpdCBhcyBhIGNhbmNlbGxlZCBlcnJvciBhbmQgc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICAgICAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50IH0gPSByZXM7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IHsgQ29tcG9uZW50LCBlcnIgfTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihwcm9wcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGdpcEVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gaGFuZGxlRXJyb3IoZXJyLCB0cnVlKSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FjaGVkUm91dGVJbmZvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoY2FjaGVkUm91dGVJbmZvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4ocmVzID0+IHJlc29sdmUoe1xuICAgICAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICAgIH0pLCByZWplY3QpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJvdXRlSW5mbykgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dldERhdGEoKCkgPT4gX19OX1NTR1xuICAgICAgICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShhcylcbiAgICAgICAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGFzKVxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgXG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgICAgICB9KSkudGhlbihwcm9wcyA9PiB7XG4gICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgICAgICByZXR1cm4gcm91dGVJbmZvO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goaGFuZGxlRXJyb3IpO1xuICAgIH1cbiAgICBzZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIGRhdGEpIHtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgIHRoaXMubm90aWZ5KGRhdGEpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAgICovXG4gICAgYmVmb3JlUG9wU3RhdGUoY2IpIHtcbiAgICAgICAgdGhpcy5fYnBzID0gY2I7XG4gICAgfVxuICAgIG9ubHlBSGFzaENoYW5nZShhcykge1xuICAgICAgICBpZiAoIXRoaXMuYXNQYXRoKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7XG4gICAgICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgICAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgICAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoO1xuICAgIH1cbiAgICBzY3JvbGxUb0hhc2goYXMpIHtcbiAgICAgICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICAgICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICAgICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO1xuICAgICAgICBpZiAoaWRFbCkge1xuICAgICAgICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgICAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICAgICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF07XG4gICAgICAgIGlmIChuYW1lRWwpIHtcbiAgICAgICAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVybElzTmV3KGFzUGF0aCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAgICovXG4gICAgcHJlZmV0Y2godXJsLCBhc1BhdGggPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSwgcHJvdG9jb2wgfSA9IHVybF8xLnBhcnNlKHVybCk7XG4gICAgICAgICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm91dGUgPSBkZWxCYXNlUGF0aCh0b1JvdXRlKHBhdGhuYW1lKSk7XG4gICAgICAgICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YSh1cmwsIGRlbEJhc2VQYXRoKGFzUGF0aCkpLFxuICAgICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICAgICAgICAgIF0pLnRoZW4oKCkgPT4gcmVzb2x2ZSgpLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGUpIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgcm91dGUgPSBkZWxCYXNlUGF0aChyb3V0ZSk7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7XG4gICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgKTtcbiAgICAgICAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnRSZXN1bHQ7XG4gICAgfVxuICAgIF9nZXREYXRhKGZuKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jbGMgPSBjYW5jZWw7XG4gICAgICAgIHJldHVybiBmbigpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKTtcbiAgICAgICAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eCkge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107XG4gICAgICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCk7XG4gICAgICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZTtcbiAgICAgICAgcmV0dXJuIHV0aWxzXzEubG9hZEdldEluaXRpYWxQcm9wcyhBcHAsIHtcbiAgICAgICAgICAgIEFwcFRyZWUsXG4gICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICAgICAgICBjdHgsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhYm9ydENvbXBvbmVudExvYWQoYXMpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICAgICAgICBjb25zdCBlID0gbmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKTtcbiAgICAgICAgICAgIGUuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGUsIGFzKTtcbiAgICAgICAgICAgIHRoaXMuY2xjKCk7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbm90aWZ5KGRhdGEpIHtcbiAgICAgICAgdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gUm91dGVyO1xuUm91dGVyLmV2ZW50cyA9IG1pdHRfMS5kZWZhdWx0KCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpLztcbmZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlKSB7XG4gICAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSk7XG59XG5leHBvcnRzLmlzRHluYW1pY1JvdXRlID0gaXNEeW5hbWljUm91dGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KSB7XG4gICAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4O1xuICAgIHJldHVybiAocGF0aG5hbWUpID0+IHtcbiAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZWNvZGUgPSAocGFyYW0pID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoXykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcignZmFpbGVkIHRvIGRlY29kZSBwYXJhbScpO1xuICAgICAgICAgICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcGFyYW1zID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdO1xuICAgICAgICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdO1xuICAgICAgICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICAgICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKGVudHJ5ID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogZGVjb2RlKG0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICB9O1xufVxuZXhwb3J0cy5nZXRSb3V0ZU1hdGNoZXIgPSBnZXRSb3V0ZU1hdGNoZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpO1xufVxuZnVuY3Rpb24gZ2V0Um91dGVSZWdleChub3JtYWxpemVkUm91dGUpIHtcbiAgICAvLyBFc2NhcGUgYWxsIGNoYXJhY3RlcnMgdGhhdCBjb3VsZCBiZSBjb25zaWRlcmVkIFJlZ0V4XG4gICAgY29uc3QgZXNjYXBlZFJvdXRlID0gZXNjYXBlUmVnZXgobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKTtcbiAgICBjb25zdCBncm91cHMgPSB7fTtcbiAgICBsZXQgZ3JvdXBJbmRleCA9IDE7XG4gICAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZywgKF8sICQxKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSk7XG4gICAgICAgIGdyb3Vwc1skMVxuICAgICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgICAgXSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdDogaXNDYXRjaEFsbCB9O1xuICAgICAgICByZXR1cm4gaXNDYXRjaEFsbCA/ICcvKC4rPyknIDogJy8oW14vXSs/KSc7XG4gICAgfSk7XG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlO1xuICAgIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAgIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZywgKF8sICQxKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpO1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gJDFcbiAgICAgICAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXlxcLnszfS8sICcnKTtcbiAgICAgICAgICAgIHJldHVybiBpc0NhdGNoQWxsXG4gICAgICAgICAgICAgICAgPyBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+Lis/KWBcbiAgICAgICAgICAgICAgICA6IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT5bXi9dKz8pYDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHsgcmU6IG5ldyBSZWdFeHAoJ14nICsgcGFyYW1ldGVyaXplZFJvdXRlICsgJyg/Oi8pPyQnLCAnaScpLCBncm91cHMgfSwgKG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlXG4gICAgICAgID8ge1xuICAgICAgICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgICAgICB9XG4gICAgICAgIDoge30pKTtcbn1cbmV4cG9ydHMuZ2V0Um91dGVSZWdleCA9IGdldFJvdXRlUmVnZXg7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHVybF8xID0gcmVxdWlyZShcInVybFwiKTtcbi8qKlxuICogVXRpbHNcbiAqL1xuZnVuY3Rpb24gZXhlY09uY2UoZm4pIHtcbiAgICBsZXQgdXNlZCA9IGZhbHNlO1xuICAgIGxldCByZXN1bHQ7XG4gICAgcmV0dXJuICgoLi4uYXJncykgPT4ge1xuICAgICAgICBpZiAoIXVzZWQpIHtcbiAgICAgICAgICAgIHVzZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbn1cbmV4cG9ydHMuZXhlY09uY2UgPSBleGVjT25jZTtcbmZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICAgIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb247XG4gICAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YDtcbn1cbmV4cG9ydHMuZ2V0TG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbjtcbmZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTtcbn1cbmV4cG9ydHMuZ2V0VVJMID0gZ2V0VVJMO1xuZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgICAgID8gQ29tcG9uZW50XG4gICAgICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJztcbn1cbmV4cG9ydHMuZ2V0RGlzcGxheU5hbWUgPSBnZXREaXNwbGF5TmFtZTtcbmZ1bmN0aW9uIGlzUmVzU2VudChyZXMpIHtcbiAgICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudDtcbn1cbmV4cG9ydHMuaXNSZXNTZW50ID0gaXNSZXNTZW50O1xuYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wcyhBcHAsIGN0eCkge1xuICAgIHZhciBfYTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoKF9hID0gQXBwLnByb3RvdHlwZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmdldEluaXRpYWxQcm9wcykge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYDtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gICAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcyk7XG4gICAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpO1xuICAgIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICAgICAgcmV0dXJuIHByb3BzO1xuICAgIH1cbiAgICBpZiAoIXByb3BzKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYDtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGAke2dldERpc3BsYXlOYW1lKEFwcCl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2ApO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wcztcbn1cbmV4cG9ydHMubG9hZEdldEluaXRpYWxQcm9wcyA9IGxvYWRHZXRJbml0aWFsUHJvcHM7XG5leHBvcnRzLnVybE9iamVjdEtleXMgPSBbXG4gICAgJ2F1dGgnLFxuICAgICdoYXNoJyxcbiAgICAnaG9zdCcsXG4gICAgJ2hvc3RuYW1lJyxcbiAgICAnaHJlZicsXG4gICAgJ3BhdGgnLFxuICAgICdwYXRobmFtZScsXG4gICAgJ3BvcnQnLFxuICAgICdwcm90b2NvbCcsXG4gICAgJ3F1ZXJ5JyxcbiAgICAnc2VhcmNoJyxcbiAgICAnc2xhc2hlcycsXG5dO1xuZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsLCBvcHRpb25zKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChleHBvcnRzLnVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVybF8xLmZvcm1hdCh1cmwsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5mb3JtYXRXaXRoVmFsaWRhdGlvbiA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uO1xuZXhwb3J0cy5TUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCc7XG5leHBvcnRzLlNUID0gZXhwb3J0cy5TUCAmJlxuICAgIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gICAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbic7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZSdcclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvb3Rlcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMVwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbFwiPlxyXG4gICAgICAgICAgICAgICAgPHA+U29jaWFsOjwvcD5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj48c3Bhbj5GYWNlYm9vazwvc3Bhbj48L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+PHNwYW4+TGlua2VkSW48L3NwYW4+PC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPjxzcGFuPlRlbGVncmFtPC9zcGFuPjwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29weVwiPiZjb3B5OzIwMjAgdmlraW5hcuKEojwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMVwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntzdHlsZX08L3N0eWxlPlxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXJcclxuIiwiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2NzcydcclxuXHJcbmNvbnN0IHN0eWxlID0gY3NzYFxyXG4gIGZvb3RlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7IFxyXG4gICAgYm90dG9tOiA0cmVtOyBcclxuICAgIGhlaWdodDogMTByZW07XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBcclxuICAgIC5mb290ZXJ7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zb2NpYWx7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhe1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBjb2xvcjogZGFya2JsdWU7XHJcbiAgICAgICAgICA6YmVmb3Jle1xyXG4gICAgICAgICAgICBjb250ZW50OiAnLyc7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAuNXJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdHlsZVxyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VSZWYsIHVzZUxheW91dEVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7UmVhY3RDb21wb25lbnQgYXMgTG9nb30gZnJvbSAnLi4vLi4vLi4vLi4vc3RhdGljL2xheW91dC9lLWxvZ28uc3ZnJ1xyXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZSdcclxuXHJcbmNvbnN0IEhlYWRlciA9IChwcm9wcywgcmVmKSA9PiB7XHJcbiAgICBjb25zdCBsb2dvID0gJ2xvZ28nXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nZmxleCc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ28tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExvZ28gY2xhc3NOYW1lPXtsb2dvfSB3aWR0aD0nMTAwJyBoZWlnaHQ9JzEwMCcvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXJfX2NvbnRhaW5lci0taW5uZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFUk1JUkVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdsb2dvLWRlc2MnPnZpa2luYXLihKI8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntzdHlsZX08L3N0eWxlPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xXCI+PC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcclxuIiwiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2NzcydcclxuXHJcbmNvbnN0IHN0eWxlID0gY3NzYFxyXG4gICAgICAgICAgLmhlYWRlcntcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgdG9wOiA0cmVtO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwcmVtO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kIDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiBkYXJrYmx1ZTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogZWFzZS1vdXQgLjVzO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgIC5mbGV4e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICZfX2NvbnRhaW5lcntcclxuICAgICAgICAgICAgICAmLS1pbm5lcntcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgZmxleC1iYXNpczogY29udGVudDtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMXJlbTsgXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICBoMXtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmxvZ28tY29udGFpbmVye1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0eWxlXHJcbiIsImltcG9ydCBSZWFjdCwge3VzZVJlZn0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBNZXNzZW5nZXJDdXN0b21lckNoYXQgZnJvbSAncmVhY3QtbWVzc2VuZ2VyLWN1c3RvbWVyLWNoYXQnXHJcblxyXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vLi4vc3R5bGVzL3N0eWxlcydcclxuaW1wb3J0IHtOYXZpZ2F0aW9ufSBmcm9tICcuLi9OYXZpZ2F0aW9uJ1xyXG5pbXBvcnQge2xheW91dH0gZnJvbSAnLi9zdHlsZSdcclxuaW1wb3J0IHtQYWdlVHJhbnNpdGlvbn0gZnJvbSBcIm5leHQtcGFnZS10cmFuc2l0aW9uc1wiO1xyXG5jb25zdCBUSU1FT1VUID0gMTAwMFxyXG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3RlcidcclxuXHJcbmNvbnN0IExheW91dCA9ICh7Y2hpbGRyZW59KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nTGF5b3V0Jz5cclxuICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICA8UGFnZVRyYW5zaXRpb25cclxuICAgICAgICAgICAgICAgIHRpbWVvdXQ9e1RJTUVPVVR9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWVzPVwicGFnZS10cmFuc2l0aW9uXCJcclxuICAgICAgICAgICAgICAgIGxvYWRpbmdEZWxheT17MTAwfVxyXG4gICAgICAgICAgICAgICAgbG9hZGluZ1RpbWVvdXQ9e3tcclxuICAgICAgICAgICAgICAgICAgICBlbnRlcjogVElNRU9VVCxcclxuICAgICAgICAgICAgICAgICAgICBleGl0OiAwLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGxvYWRpbmdDbGFzc05hbWVzPVwibG9hZGluZy1pbmRpY2F0b3JcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGUgPSB7e3dpZHRoOiAnMTAwJSd9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvUGFnZVRyYW5zaXRpb24+XHJcbiAgICAgICAgICAgIDxGb290ZXIvPlxyXG4gICAgICAgICAgICA8TmF2aWdhdGlvbi8+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2xheW91dH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57c3R5bGV9PC9zdHlsZT5cclxuICAgICAgICAgICAgPE1lc3NlbmdlckN1c3RvbWVyQ2hhdFxyXG4gICAgICAgICAgICAgICAgcGFnZUlkPVwiNjQ4OTUyMjkxODMxODUwXCJcclxuICAgICAgICAgICAgICAgIGFwcElkPVwiODIzMjQ0NDA4MTk3NDcyXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAucGFnZS10cmFuc2l0aW9uLWVudGVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDIwcHgsIDApIHNjYWxlKC45KTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgJHtUSU1FT1VUfW1zLCB0cmFuc2Zvcm0gJHtUSU1FT1VUfW1zICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wYWdlLXRyYW5zaXRpb24tZW50ZXItYWN0aXZlIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApIHNjYWxlKDEpO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAke1RJTUVPVVR9bXMsIHRyYW5zZm9ybSAke1RJTUVPVVR9bXMgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBhZ2UtdHJhbnNpdGlvbi1leGl0IHtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5wYWdlLXRyYW5zaXRpb24tZW50ZXItZG9uZXtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wYWdlLXRyYW5zaXRpb24tZXhpdC1hY3RpdmUge1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgJHtUSU1FT1VUfW1zO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubG9hZGluZy1pbmRpY2F0b3ItYXBwZWFyLFxyXG4gICAgICAgIC5sb2FkaW5nLWluZGljYXRvci1lbnRlciB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubG9hZGluZy1pbmRpY2F0b3ItYXBwZWFyLWFjdGl2ZSxcclxuICAgICAgICAubG9hZGluZy1pbmRpY2F0b3ItZW50ZXItYWN0aXZlIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5ICR7VElNRU9VVH1tcztcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcclxuIiwiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2NzcydcclxuXHJcbmNvbnN0IHNreSA9ICdza3knXHJcblxyXG5leHBvcnQgY29uc3QgbGF5b3V0ID0gY3NzYFxyXG4gIC5MYXlvdXR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjogZWFzZSAuNXM7XHJcbiAgIH1cclxuICAgXHJcbmBcclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7c3R5bGV9IGZyb20gJy4vc3R5bGUnXHJcbmltcG9ydCB7UmVhY3RDb21wb25lbnQgYXMgSG92ZXJ9IGZyb20gJy4vaG92ZXIuc3ZnJ1xyXG5cclxuZXhwb3J0IGNvbnN0IE5hdmlnYXRpb24gPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByb3V0ZTogJy8nLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0hvbWUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJvdXRlOiAnL2Fib3V0JyxcclxuICAgICAgICAgICAgdGl0bGU6ICdBYm91dCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcm91dGU6ICcvc2VydmljZXMnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1NlcnZpY2VzJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByb3V0ZTogJy4vaHViJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdIdWInXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJvdXRlOiAnL2FjYWRlbXknLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0FjYWRlbXknXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJvdXRlOiAnL2NvbnRhY3QnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0NvbnRhY3RzJ1xyXG4gICAgICAgIH1cclxuICAgIF1cclxuXHJcbiAgICBjb25zdCBbbWVudVN0YXRlLCBzZXRNZW51U3RhdGVdID0gdXNlU3RhdGUoJ2hpZGUnKVxyXG5cclxuICAgIGNvbnN0IHNob3dNZW51QmcgPSAoKSA9PntcclxuICAgICAgICBzZXRNZW51U3RhdGUoJ3Nob3cnKVxyXG4gICAgfVxyXG4gICAgY29uc3QgaGlkZU1lbnVCZyA9ICgpID0+e1xyXG4gICAgICAgIHNldE1lbnVTdGF0ZSgnaGlkZScpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT0nbmF2IG5hdi1tb2JpbGUnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG1lbnUtYmcgbWVudS1iZy0tJHttZW51U3RhdGV9YH0+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2BuYXZfX2hvdmVyIG5hdl9faG92ZXItLSR7bWVudVN0YXRlfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxIb3ZlciB3aWR0aD17JzEwMCUnfS8+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICB7cm91dGVzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8bGkgZGF0YS1yb3V0ZT17aXRlbS50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWYgPSB7aXRlbS5yb3V0ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBkYXRhLXJvdXRlPXtpdGVtLnRpdGxlfSAgb25Nb3VzZU92ZXI9e3Nob3dNZW51Qmd9IG9uTW91c2VPdXQ9e2hpZGVNZW51Qmd9IGNsYXNzTmFtZT1cImxpbmtcIiAga2V5ID0ge2luZGV4fT57aXRlbS50aXRsZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e3N0eWxlfTwvc3R5bGU+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG4iLCJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJ1xyXG5cclxuY29uc3QgaG92ZXIgPSAnaG92ZXInXHJcblxyXG5leHBvcnQgY29uc3Qgc3R5bGUgPSBjc3NgXHJcbi5uYXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogZGFya2JsdWU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggZGFya2JsdWU7XHJcbiAgICB3aWR0aDogY2FsYygxMDB2dy8xOCk7XHJcbiAgICBtaW4td2lkdGg6IGNhbGMoMTAwdncvMTgpO1xyXG4gICAgdHJhbnNpdGlvbjogY3ViaWMtYmV6aWVyKDAuMiwgMC41LCAwLjc1LCAxLjgpO1xyXG59XHJcblxyXG4gICAgOmdsb2JhbCgubmF2X19ob3Zlcil7XHJcbiAgICB3aWR0aDogNDUlO1xyXG4gICAgICAgICAgICAgdHJhbnNpdGlvbjogY3ViaWMtYmV6aWVyKDAuMiwgMC41LCAwLjc1LCAxKTtcclxuICAgICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XHJcbiAgICAgICAgICAgICBAa2V5ZnJhbWVzICR7aG92ZXJ9e1xyXG4gICAgICAgICAgICAgIGZyb217ICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgICAgICAgfSB0byB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSAgXHJcbiAgICBcclxuICAgIDpnbG9iYWwoLm5hdl9faG92ZXItLXNob3cpe1xyXG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcclxuICAgICAgYW5pbWF0aW9uOiBob3ZlciAuNXMgLjVzIGJvdGggZWFzZS1vdXQ7XHJcbiAgICB9XHJcblxyXG4ubmF2IHVsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5uYXYgdWwgbGl7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzExMTtcclxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC41cztcclxufVxyXG5cclxuLm1lbnUtYmd7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBcclxuICAmLS1zaG93e1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC41cyBjdWJpYy1iZXppZXIoMC42LDAuNCwwLjUsMSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gIH1cclxuICAmLS1oaWRle1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC41cyBjdWJpYy1iZXppZXIoMC42LDAuNCwwLjUsMSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgfVxyXG59XHJcblxyXG4ubGluayB7XHJcbiAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgcGFkZGluZzogMnJlbSA0LjVyZW07XHJcbiAgICAgIGNvbG9yOiBkYXJrYmx1ZTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIC41cyBjdWJpYy1iZXppZXIoMC42LCAwLCAwLjUsIDEpO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgIFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNHJlbTtcclxuICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cztcclxuICAgICAgfVxyXG5cclxuICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1yb3V0ZSk7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiBkYXJrYmx1ZTtcclxuICAgICAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDcwJTtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHJlbTtcclxuICAgICAgICB3cml0aW5nLW1vZGU6IGhvcml6b250YWwtdGI7XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmV2ZXJ0O1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSkgcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLW91dCAxcztcclxuICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMCUpIHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNzVzIGN1YmljLWJlemllcigwLjYsMC40LDAuNSwxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgJi5tZW51LWJne1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpe1xyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3QsIGNyZWF0ZVJlZiwgdXNlUmVmfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFJlYWN0RnVsbHBhZ2UgZnJvbSAnQGZ1bGxwYWdlL3JlYWN0LWZ1bGxwYWdlJztcclxuaW1wb3J0IHtUaW1lbGluZU1heH0gZnJvbSBcImdzYXBcIjtcclxuLy8gaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHtSZWFjdENvbXBvbmVudCBhcyBIZWFkZXJ9IGZyb20gJy4vcG9zdGVyLnN2ZydcclxuaW1wb3J0IHtSZWFjdENvbXBvbmVudCBhcyBIZWFkZXJCZ30gZnJvbSAnLi9wb3N0ZXJCZy5zdmcnXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxyXG5pbXBvcnQgeyBGb3JtaWsgfSBmcm9tICdmb3JtaWsnXHJcbmltcG9ydCBzdHlsZSBmcm9tICcuL3N0eWxlJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgeyB1c2VTcHJpbmcsIGFuaW1hdGVkIH0gZnJvbSAncmVhY3Qtc3ByaW5nJ1xyXG5cclxuY29uc3QgY2FsYyA9ICh4LCB5KSA9PiBbeCAtIHdpbmRvdy5pbm5lcldpZHRoIC8gMiwgeSAtIHdpbmRvdy5pbm5lckhlaWdodCAvIDJdXHJcbmNvbnN0IHRyYW5zMSA9ICh4LCB5KSA9PiBgdHJhbnNsYXRlM2QoJHt4IC8gMTB9cHgsJHt5IC8gMTB9cHgsMClgXHJcbmNvbnN0IHRyYW5zMiA9ICh4LCB5KSA9PiBgdHJhbnNsYXRlM2QoJHt4IC8gOCArIDM1fXB4LCR7eSAvIDggLSAyMzB9cHgsMClgXHJcbmNvbnN0IHRyYW5zMyA9ICh4LCB5KSA9PiBgdHJhbnNsYXRlM2QoJHt4IC8gNiAtIDI1MH1weCwke3kgLyA2IC0gMjAwfXB4LDApYFxyXG5jb25zdCB0cmFuczQgPSAoeCwgeSkgPT4gYHRyYW5zbGF0ZTNkKCR7eCAvIDMuNX1weCwke3kgLyAzLjV9cHgsMClgXHJcblxyXG5jb25zdCBzY3JvbGxUb1JlZiA9IChyZWYpID0+IHdpbmRvdy5zY3JvbGxUbygwLCByZWYuY3VycmVudC5vZmZzZXRUb3ApXHJcblxyXG5leHBvcnQgY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBsb2dvID0gJ2xvZ28nXHJcblxyXG4gICAgY29uc3QgY29udGFjdCA9IHVzZVJlZihudWxsKVxyXG4gICAgY29uc3QgdG9Db250YWN0ID0gKCkgPT4gc2Nyb2xsVG9SZWYoY29udGFjdClcclxuICAgIGNvbnN0IFtwcm9wcywgc2V0XSA9IHVzZVNwcmluZygoKSA9PiAoeyB4eTogWzAsIDBdLCBjb25maWc6IHsgbWFzczogMTAsIHRlbnNpb246IDU1MCwgZnJpY3Rpb246IDE0MCB9IH0pKVxyXG4gICAgY29uc3QgZGF0YSA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNlcnZpY2U6ICdEZXZlbG9wbWVudCcsXHJcbiAgICAgICAgICAgIHNob3J0RGVzYzogJ0xvcmVtIGlwc3VtJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzZXJ2aWNlOiAnRGVzaWduICYgQnJhbmRpbmcnLFxyXG4gICAgICAgICAgICBzaG9ydERlc2M6ICdMb3JlbSBpcHN1bScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNlcnZpY2U6ICdEaWdpdGFsIE1hcmtldGluZycsXHJcbiAgICAgICAgICAgIHNob3J0RGVzYzogJydcclxuICAgICAgICB9XHJcbiAgICBdXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naG9tZSc+XHJcbiAgICAgICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+RXJtaXJlPC90aXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPSd0aXRsZScgY29udGVudD0nRXJtaXJlJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9J0NvbWluZyBzb29uLi4nLz5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIGh0dHAtZXF1aXY9J1gtVUEtQ29tcGF0aWJsZScgY29udGVudD0nSUU9ZWRnZScvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9J2tleXdvcmRzJyBjb250ZW50PSdLZXl3b3JkcycvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cIm1hbmlmZXN0XCIgaHJlZj1cIi9tYW5pZmVzdC5qc29uXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9Jy9mYXZpY29uLmljbycgcmVsPSdpY29uJyB0eXBlPSdpbWFnZS9wbmcnIHNpemVzPSczMngzMicvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBocmVmPVwiLi9zdGF0aWMvZS1sb2dvLnBuZ1wiLz5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiIzAwMDA4YlwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD0nQ29taW5nIHNvb24uLicvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PScvc3RhdGljL2xheW91dC9wcmV2aWV3LnBuZycvPlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICAgICAgPFJlYWN0RnVsbHBhZ2VcclxuICAgICAgICAgICAgICAgICAgICAvL2Z1bGxwYWdlIG9wdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxpbmdTcGVlZCA9IHs4MDB9IC8qIE9wdGlvbnMgaGVyZSAqL1xyXG4gICAgICAgICAgICAgICAgICAgIGxpY2Vuc2VLZXkgPSB7JzcwQzcwMDYzLTlCQUI0NTk4LUI1REIzNjJGLTVDOUFEMTc5J31cclxuICAgICAgICAgICAgICAgICAgICBvbkxlYXZlPXsob3JpZ2luLCBkZXN0aW5hdGlvbiwgZGlyZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlY3Rpb24gPSBvcmlnaW4uaXRlbVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcj17KHsgc3RhdGUsIGZ1bGxwYWdlQXBpIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdEZ1bGxwYWdlLldyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvblwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC0xJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Nyb2xsLW5hdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnNjcm9sbCBkb3duPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2hlYWRlcicgb25Nb3VzZU1vdmU9eyh7Y2xpZW50WDogeCwgY2xpZW50WTogeX0pID0+IHNldCh7eHk6IGNhbGMoeCwgeSl9KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2hlYWRlcl9fY29udGVudCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hlYWRlci10aXRsZS0tY29udCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWUgPSAnaGVhZGVyLXRpdGxlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSElHSCBMRVZFTFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPRiBDUkVBVElWSVRZXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICtURUNITk9MT0dZXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICtTRUNVUklUWSFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdkaXZpZGVyJz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkVSTUlSRSBJUyBBIEhJR0gtUVVBTElGSUVEIFRFQU0gT0YgVEFMRU5URUQgQU5EIENSRUFUSVZFIERFVkVMT1BFUlMsIERFU0lHTkVSUyBBTkQgTUFSS0VUSU5HIEVYUEVSVFMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFVkVSWSBQUk9KRUNUIElTIEEgQ0hBTExFTkdFIFRPIE1BS0UgQkVUVEVSIFdFJ1ZFIEVWRVIgRE9ORSE8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8YSBocmVmPScjb3JkZXInPk9SREVSIE5PVzwvYT4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXJfX29yZGVyJyBkYXRhLXRleHQ9J09SREVSIE5PVycgb25DbGljaz17KCkgPT4gZnVsbHBhZ2VBcGkubW92ZVRvKDMpfT5PUkRFUiBOT1c8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiBcIjUwJVwiLCBwYWRkaW5nVG9wOiAnMTByZW0nLCBhbGlnblNlbGY6ICdjZW50ZXInfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VNb3ZlPXsoe2NsaWVudFg6IHgsIGNsaWVudFk6IHl9KSA9PiBzZXQoe3h5OiBjYWxjKHgsIHkpfSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZWQuZGl2IGNsYXNzTmFtZT1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t0cmFuc2Zvcm06IHByb3BzLnh5LmludGVycG9sYXRlKHRyYW5zMil9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXJCZyBjbGFzc05hbWU9J3Bvc3RlckJnJyB3aWR0aCA9JzEwMCUnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYW5pbWF0ZWQuZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZWQuZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fcG9zdGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3RyYW5zZm9ybTogcHJvcHMueHkuaW50ZXJwb2xhdGUodHJhbnMxKX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXIgY2xhc3NOYW1lPSdwb3N0ZXInIHdpZHRoID0nMTAwJScgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hbmltYXRlZC5kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC0xJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC0xJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nb3ZlcnZpZXcnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7Z3JpZENvbHVtbjogJ3NwYW4gMTInfX0+V2hhdCB3ZSBkbz88L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NuYW1lPSdpdGVtJyBzdHlsZT17e2dyaWRDb2x1bW46ICdzcGFuIDQnLCBncmlkUm93OiAnc3BhbiA1JywgYmFja2dyb3VuZDogJ2JsdWUnLCBhbmltYXRpb246IGBhbmltYXRpb246IGZhZGUgM3MgLjVzIGJhY2t3YXJkcyBjdWJpYy1iZXppZXIoMC4yLCAwLjUsIDAuMywgMSk7YH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e2l0ZW0uc2VydmljZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57aXRlbS5zaG9ydERlc2N9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvbiBzZWN0aW9uLWNcIiByZWY9e2NvbnRhY3R9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJyaWVmXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYnJpZWYtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmllZl9fdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5EZXNjcmliZSB5b3VyIG9yZGVyLiBBbmQgd2UnbGwgbWFrZSB0aGUgYmVzdCBvZmZlciBmb3IgWW91LjwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWlrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7IG5hbWU6ICcnLCBlbWFpbDogJycsIHBob25lOiAnJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU9e3ZhbHVlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3JzID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWx1ZXMubmFtZSB8fCAhdmFsdWVzLmVtYWlsIHx8ICF2YWx1ZXMucGhvbmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLm5hbWUgPSAnUmVxdWlyZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5lbWFpbCA9ICdSZXF1aXJlZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLnBob25lID0gJ1JlcXVpcmVkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICEvXltBLVowLTkuXyUrLV0rQFtBLVowLTkuLV0rXFwuW0EtWl17Mix9JC9pLnRlc3QodmFsdWVzLmVtYWlsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMuZW1haWwgPSAnSW52YWxpZCBlbWFpbCBhZGRyZXNzJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVycm9ycztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17YXN5bmMgdmFsdWVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgNTAwKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVxID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvb3JkZXItZm9ybWAsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU6ICdjb3JzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodmFsdWVzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNTdWJtaXR0aW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUJsdXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUmVzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ID0gcHJvcHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPSdicmllZl9fZm9ybScgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2JyaWVmX19mb3JtX19pbnB1dCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nTmFtZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLm5hbWUgJiYgdG91Y2hlZC5uYW1lICYmIGVycm9ycy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdicmllZl9fZm9ybV9faW5wdXQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbWFpbCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcnMuZW1haWwgJiYgdG91Y2hlZC5lbWFpbCAmJiBlcnJvcnMuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGhvbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nUGhvbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5waG9uZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdicmllZl9fZm9ybV9faW5wdXQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5waG9uZSAmJiB0b3VjaGVkLnBob25lICYmIGVycm9ycy5waG9uZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9J2JyaWVmX19mb3JtX19pbnB1dCcgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gbmFtZT1cInRhc2tcIiBpZD1cIlwiIGNvbHM9XCIzMFwiIHJvd3M9XCI1XCIgcGxhY2Vob2xkZXI9J1Byb2plY3QgZGVzY3JpcHRpb24ob3B0aW9uYWwpJz48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2JyaWVmX19mb3JtX19zdWJtaXQnIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPcmRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtaWs+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdEZ1bGxwYWdlLldyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PiB7c3R5bGV9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuXHJcbiIsImltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnXHJcblxyXG5jb25zdCBwb3N0ZXJCRyA9ICdwb3N0ZXJCZydcclxuY29uc3QgY2hhdD0gJ2NoYXQnXHJcbmNvbnN0IGNoYXRMZWZ0PSAnY2hhdExlZnQnXHJcbmNvbnN0IHBvc3RlciA9ICdwb3N0ZXInXHJcbmNvbnN0IHNreSA9ICdza3knXHJcbmNvbnN0IHRyZWUgID0gJ3RyZWUnXHJcbmNvbnN0IG9wYWNpdHkgPSAnb3BhY2l0eSdcclxuY29uc3QgZmFkZSA9ICdmYWRlJ1xyXG5cclxuY29uc3Qgc3R5bGUgPSBjc3NgXHJcbiAgICAgICAgICAuaG9tZXtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogc3BhbiAxMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLmZsZXh7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5oZWFkZXJ7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kIDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiBkYXJrYmx1ZTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogZWFzZS1vdXQgLjVzO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgJl9fb3JkZXJ7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDJyZW0gMXJlbTtcclxuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDMzJTsgXHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsgXHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IC43NXMgY3ViaWMtYmV6aWVyKDAuNywgMC4yLCAwLjEsIDEpO1xyXG4gICAgICAgICAgICAgIDpob3ZlcntcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgOmhvdmVyOjphZnRlcntcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuNzVzIGN1YmljLWJlemllcigwLjcsIDAuMiwgMC4xLCAxKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgOmhvdmVyOjpiZWZvcmV7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjc1cyBjdWJpYy1iZXppZXIoMC43LCAwLjIsIDAuMSwgMSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICY6OmFmdGVye1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrYmx1ZTtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuNzVzIGN1YmljLWJlemllcigwLjcsIDAuMiwgMC4xLCAxKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAmOjpiZWZvcmV7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBhdHRyKGRhdGEtdGV4dCk7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogZGFya2JsdWU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHRvcDogMS41cmVtO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjc1cyBjdWJpYy1iZXppZXIoMC43LCAwLjIsIDAuMSwgMSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICZfX2NvbnRlbnR7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICYtdGl0bGUtLWNvbnR7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogZWFzZS1vdXQgLjVzO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyLjhyZW07XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDFyZW0gMDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLmRpdmlkZXJ7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIGhlaWdodDogLjVyZW07XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogZGFya2JsdWU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IC41cmVtIDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAmLXRpdGxle1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA4cmVtOyBcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwOyBcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogZWFzZS1vdXQgLjVzO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgJl9fcG9zdGVye1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC5vdmVydmlld3tcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEyLCAxZnIpO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMiwgMWZyKTtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiAxZW07XHJcbiAgICAgICAgICAgIGdyaWQtcm93LWdhcDogMWVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgLmxvZ28tY29udGFpbmVye1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWJhc2lzOiBjb250ZW50O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAubG9nby1jb250YWluZXItaW5uZXJ7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAubG9nby1kZXNje1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoMXtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDpnbG9iYWwoLmZwLXRhYmxlQ2VsbCl7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgOmdsb2JhbCgucG9zdGVyKXtcclxuICAgICAgICAgICAgIHRyYW5zaXRpb246IGN1YmljLWJlemllcigwLjIsIDAuNSwgMC43NSwgMSk7XHJcbiAgICAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICAgICBhbmltYXRpb246IHBvc3RlciAxcyBmb3J3YXJkcyBjdWJpYy1iZXppZXIoMC43LCAwLjIsIDAuMSwgMSk7XHJcbiAgICAgICAgICAgICBAa2V5ZnJhbWVzICR7cG9zdGVyfXtcclxuICAgICAgICAgICAgICBmcm9teyAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwJSk7XHJcbiAgICAgICAgICAgICAgfSB0byB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDpnbG9iYWwoLnBvc3RlckJnKXtcclxuICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgIHRvcDogMjByZW07ICAgICAgICAgICBcclxuICAgICAgICAgICAgIGxlZnQ6IC01cmVtO1xyXG4gICAgICAgICAgICAgdHJhbnNpdGlvbjogY3ViaWMtYmV6aWVyKDAuMiwgMC41LCAwLjc1LCAxKTtcclxuICAgICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgIGFuaW1hdGlvbjogcG9zdGVyIDFzIGZvcndhcmRzIGN1YmljLWJlemllcigwLjcsIDAuMiwgMC4xLCAxKTtcclxuICAgICAgICAgICAgIEBrZXlmcmFtZXMgJHtwb3N0ZXJ9e1xyXG4gICAgICAgICAgICAgIGZyb217ICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAlKTtcclxuICAgICAgICAgICAgICB9IHRvIHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgOmdsb2JhbCguY2hhdCl7XHJcbiAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAvL2FuaW1hdGlvbjogY2hhdCAxcyAuNXMgYmFja3dhcmRzIGN1YmljLWJlemllcigwLjIsIDAuNSwgMC43NSwgMS41KTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBAa2V5ZnJhbWVzICR7Y2hhdH17XHJcbiAgICAgICAgICAgICAgZnJvbXtcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI1JSkgc2NhbGUoMCk7XHJcbiAgICAgICAgICAgICAgfSB0byB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKSBzY2FsZSgxKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIEBrZXlmcmFtZXMgJHtjaGF0TGVmdH17XHJcbiAgICAgICAgICAgICAgZnJvbXtcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yNSUpIHNjYWxlKDApO1xyXG4gICAgICAgICAgICAgIH0gdG8ge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSkgc2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDpnbG9iYWwoI2EzMWI4MzJkLTFlMGQtNDNiYS1iZWM5LTVjZmRiODE1YTA3Zil7XHJcbiAgICAgICAgICAgIGZpbHRlcjogc2hhZG93KDFyZW0gMXJlbSAycmVtIHJnYmEoMCwwLDAsLjUpKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xyXG4gICAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogY2hhdCAuNzVzIDAuNXMgYmFja3dhcmRzIGN1YmljLWJlemllcigwLjIsIDAuNSwgMC43NSwgMS41KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgOmdsb2JhbCgjZWFiYTBhZmQtZWE1YS00YjA3LWJhNTgtNDdjYjJmMDg4NTkwKXtcclxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xyXG4gICAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogY2hhdExlZnQgLjc1cyAxcyBiYWNrd2FyZHMgY3ViaWMtYmV6aWVyKDAuMiwgMC41LCAwLjc1LCAxLjUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA6Z2xvYmFsKCNlMTljMzQ5ZC1mNjAyLTRkYmItYmQ3ZS00YTI1ZWI1ODJkODMpe1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiBjaGF0IC43NXMgMS41cyBiYWNrd2FyZHMgY3ViaWMtYmV6aWVyKDAuMiwgMC41LCAwLjc1LCAxLjUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA6Z2xvYmFsKCNwb3N0ZXItYmcpe1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogcG9zdGVyQmcgLjVzIGJhY2t3YXJkcyBjdWJpYy1iZXppZXIoMC4yLCAwLjUsIDAuNzUsIDEpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgQGtleWZyYW1lcyAke3Bvc3RlckJHfXtcclxuICAgICAgICAgICAgICBmcm9te1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICB9IHRvIHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC5vcmRlcntcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLnNlY3Rpb24tY3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogZGFya2JsdWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC5icmllZntcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogZGFya2JsdWU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAmLWJsb2Nre1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJl9fdGl0bGV7XHJcbiAgICAgICAgICAgIGgxe1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogNS40cmVtO1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAmX19mb3Jte1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICZfX2lucHV0e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMS41cmVtO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoZGFya2JsdWUsIC41KTtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgICAgICByZXNpemU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ2NhbmFkYS10eXBlLWdpYnNvbicsIE1vbm9zcGFjZWQsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICA6Zm9jdXN7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBkYXJrYmx1ZTtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLW91dDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgJl9fc3VibWl0e1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogZGFya2JsdWU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgbXNvLWhpZ2hsaWdodDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9ICBcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAuc2Nyb2xsLW5hdntcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgIHdyaXRpbmctbW9kZTogdmVydGljYWwtbHI7XHJcbiAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IGZhZGUgLjVzIDJzIGJhY2t3YXJkcyBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgICAgICAgICAmOjphZnRlcntcclxuICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IC4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGRhcmtibHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMXJlbSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBzY3JvbGwgMS41cyAycyBpbmZpbml0ZSBhbHRlcm5hdGUgYmFja3dhcmRzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgQGtleWZyYW1lcyBzY3JvbGx7XHJcbiAgICAgICAgICAgICAgICBmcm9te1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcmVtO1xyXG4gICAgICAgICAgICAgICAgfXRve1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgQGtleWZyYW1lcyAke3NreX17XHJcbiAgICAgICAgICAgICAgICBmcm9te1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMCUsIC0zMCUpO1xyXG4gICAgICAgICAgICAgICAgfXRve1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTMwJSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIEBrZXlmcmFtZXMgb3BhY2l0eXtcclxuICAgICAgICAgICAgICAgIGZyb217XHJcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyNSUpO1xyXG4gICAgICAgICAgICAgICAgfXRve1xyXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgQGtleWZyYW1lcyBmYWRle1xyXG4gICAgICAgICAgICAgICAgZnJvbXtcclxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgIH10b3tcclxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDpnbG9iYWwoLmNscy0xKXtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogc2t5IDVzIC41cyBpbmZpbml0ZSBhbHRlcm5hdGUgZm9yd2FyZHMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAub3BhY2l0eXtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IG9wYWNpdHkgLjc1cyBiYWNrd2FyZHMgY3ViaWMtYmV6aWVyKDAuMiwgMC41LCAwLjMsIDEpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAuZmFkZXtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IGZhZGUgLjc1cyBiYWNrd2FyZHMgY3ViaWMtYmV6aWVyKDAuMiwgMC41LCAwLjMsIDEpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAuYWN0aXZlIC5vdmVydmlld3tcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuNXMgY3ViaWMtYmV6aWVyKDAuMiwgMC41LCAwLjMsIDEpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuYDtcclxuZXhwb3J0IGRlZmF1bHQgc3R5bGVcclxuIiwiaW1wb3J0IHsgSG9tZVBhZ2UgfSBmcm9tICcuLi9jb250YWluZXJzL0hvbWVQYWdlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2VcclxuIiwiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2NzcydcclxuY29uc3QgbG9nbyA9ICdsb2dvJ1xyXG4gICAgY29uc3Qgc3R5bGUgPSBjc3NcclxuICAgICAgICBgXHJcbiAgICAqLFxyXG4gICAgOmdsb2JhbChodG1sKSwgXHJcbiAgICA6Z2xvYmFsKGJvZHkpIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7IC8qIGlPUyBTYWZhcmkgKi9cclxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICBmb250LWZhbWlseTogJ2NhbmFkYS10eXBlLWdpYnNvbicsIE1vbm9zcGFjZWQsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1vdXQ7XHJcbiAgICB9XHJcblxyXG5cclxuKixcclxuKjo6YWZ0ZXIsXHJcbio6OmJlZm9yZSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogaW5oZXJpdDtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2Utb3V0O1xyXG59XHJcblxyXG46Z2xvYmFsKGh0bWwpIHtcclxuICBmb250LXNpemU6IDYyLjUlO1xyXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG59XHJcblxyXG46Z2xvYmFsKGJvZHkpIHtcclxuIGZvbnQtc2l6ZTogMS42cmVtO1xyXG59XHJcblxyXG4gICAgOmdsb2JhbCguY29sLTEpe1xyXG4gICAgICB3aWR0aDogY2FsYygxMDB2dy8xMik7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3LzEyKTtcclxuICAgIH1cclxuXHJcbiAgICA6Z2xvYmFsKGgxKXtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgICAgICA6Z2xvYmFsKC5sb2dvKXtcclxuICAgICAgICAgICAgZmlsbDogZGFya2JsdWU7XHJcbiAgICAgICAgICAgIHN0cm9rZTogZGFya2JsdWU7XHJcbiAgICAgICAgICAgIHN0cm9rZS13aWR0aDogNHB4O1xyXG4gICAgICAgICAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xyXG4gICAgICAgICAgICBhbmltYXRpb246IGxvZ28gMS41cyAxcyBiYWNrd2FyZHMgY3ViaWMtYmV6aWVyKDAuMywgMCwgMC43NSwgMSk7XHJcbiAgICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBAa2V5ZnJhbWVzICR7bG9nb30ge1xyXG4gICAgICAgIDAle1xyXG4gICAgICAgICAgICBmaWxsOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogNjAwO1xyXG4gICAgICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogNjAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA4MCV7XHJcbiAgICAgICAgICAgIGZpbGw6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBzdHJva2UtZGFzaGFycmF5OiA2MDA7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgMTAwJXtcclxuICAgICAgICAgICAgZmlsbDogZGFya2JsdWU7XHJcbiAgICAgICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xyXG4gICAgICAgICAgICBzdHJva2U6IGRhcmtibHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcImNhbmFkYS10eXBlLWdpYnNvblwiO1xyXG4gICAgICAgIHNyYzogdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvMGQ4ZjRjLzAwMDAwMDAwMDAwMDAwMDAzYjliMzg4Mi8yNy9sP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uNyZ2PTNcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzBkOGY0Yy8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4ODIvMjcvZD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjcmdj0zXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzBkOGY0Yy8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4ODIvMjcvYT9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjcmdj0zXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xyXG4gICAgICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIH1cclxuXHJcbiAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJjYW5hZGEtdHlwZS1naWJzb25cIjtcclxuICAgICAgICBzcmM6IHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzA2MThkYi8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4ODMvMjcvbD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9aTcmdj0zXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi8wNjE4ZGIvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODgzLzI3L2Q/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPWk3JnY9M1wiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi8wNjE4ZGIvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODgzLzI3L2E/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPWk3JnY9M1wiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcclxuICAgICAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB9XHJcblxyXG4gICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiY2FuYWRhLXR5cGUtZ2lic29uXCI7XHJcbiAgICAgICAgc3JjOiB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi9iNjdjOTEvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODdkLzI3L2w/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPWk0JnY9M1wiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvYjY3YzkxLzAwMDAwMDAwMDAwMDAwMDAzYjliMzg3ZC8yNy9kP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1pNCZ2PTNcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvYjY3YzkxLzAwMDAwMDAwMDAwMDAwMDAzYjliMzg3ZC8yNy9hP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1pNCZ2PTNcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XHJcbiAgICAgICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG5cclxuICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcImNhbmFkYS10eXBlLWdpYnNvblwiO1xyXG4gICAgICAgIHNyYzogdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvNzU1N2M4LzAwMDAwMDAwMDAwMDAwMDAzYjliMzg3OC8yNy9sP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uMiZ2PTNcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzc1NTdjOC8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4NzgvMjcvZD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjImdj0zXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzc1NTdjOC8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4NzgvMjcvYT9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjImdj0zXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xyXG4gICAgICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIH1cclxuXHJcbiAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJjYW5hZGEtdHlwZS1naWJzb25cIjtcclxuICAgICAgICBzcmM6IHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzdmNzgxNy8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4NzkvMjcvbD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9aTImdj0zXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi83Zjc4MTcvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODc5LzI3L2Q/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPWkyJnY9M1wiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi83Zjc4MTcvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODc5LzI3L2E/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPWkyJnY9M1wiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcclxuICAgICAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICB9XHJcblxyXG4gICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiY2FuYWRhLXR5cGUtZ2lic29uXCI7XHJcbiAgICAgICAgc3JjOiB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi9lZjIxMjkvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODdjLzI3L2w/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW40JnY9M1wiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvZWYyMTI5LzAwMDAwMDAwMDAwMDAwMDAzYjliMzg3Yy8yNy9kP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uNCZ2PTNcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvZWYyMTI5LzAwMDAwMDAwMDAwMDAwMDAzYjliMzg3Yy8yNy9hP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uNCZ2PTNcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XHJcbiAgICAgICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG5cclxuICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcImNhbmFkYS10eXBlLWdpYnNvblwiO1xyXG4gICAgICAgIHNyYzogdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvNDAzOTExLzAwMDAwMDAwMDAwMDAwMDAzYjliMzg4MC8yNy9sP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uNiZ2PTNcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzQwMzkxMS8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4ODAvMjcvZD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjYmdj0zXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzQwMzkxMS8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4ODAvMjcvYT9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjYmdj0zXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xyXG4gICAgICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuXHJcbiAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJjYW5hZGEtdHlwZS1naWJzb25cIjtcclxuICAgICAgICBzcmM6IHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzI4NTM3Yy8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4ODEvMjcvbD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9aTYmdj0zXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi8yODUzN2MvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODgxLzI3L2Q/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPWk2JnY9M1wiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi8yODUzN2MvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODgxLzI3L2E/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPWk2JnY9M1wiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcclxuICAgICAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcblxyXG4gICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiY2FuYWRhLXR5cGUtZ2lic29uXCI7XHJcbiAgICAgICAgc3JjOiB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi9lMTgyMTcvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODc2LzI3L2w/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW4xJnY9M1wiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvZTE4MjE3LzAwMDAwMDAwMDAwMDAwMDAzYjliMzg3Ni8yNy9kP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uMSZ2PTNcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvZTE4MjE3LzAwMDAwMDAwMDAwMDAwMDAzYjliMzg3Ni8yNy9hP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uMSZ2PTNcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XHJcbiAgICAgICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgfVxyXG5cclxuICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcImNhbmFkYS10eXBlLWdpYnNvblwiO1xyXG4gICAgICAgIHNyYzogdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvOTdhMDY4LzAwMDAwMDAwMDAwMDAwMDAzYjliMzg3Ny8yNy9sP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1pMSZ2PTNcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzk3YTA2OC8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4NzcvMjcvZD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9aTEmdj0zXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzk3YTA2OC8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4NzcvMjcvYT9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9aTEmdj0zXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xyXG4gICAgICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIH1cclxuXHJcbiAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJjYW5hZGEtdHlwZS1naWJzb25cIjtcclxuICAgICAgICBzcmM6IHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmL2FhMWQ2NC8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4N2EvMjcvbD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjMmdj0zXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi9hYTFkNjQvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODdhLzI3L2Q/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW4zJnY9M1wiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi9hYTFkNjQvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODdhLzI3L2E/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW4zJnY9M1wiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcclxuICAgICAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB9XHJcblxyXG4gICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiY2FuYWRhLXR5cGUtZ2lic29uXCI7XHJcbiAgICAgICAgc3JjOiB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi8zMmM5YmEvMDAwMDAwMDAwMDAwMDAwMDNiOWIzZjAyLzI3L2w/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPWkzJnY9M1wiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvMzJjOWJhLzAwMDAwMDAwMDAwMDAwMDAzYjliM2YwMi8yNy9kP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1pMyZ2PTNcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvMzJjOWJhLzAwMDAwMDAwMDAwMDAwMDAzYjliM2YwMi8yNy9hP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1pMyZ2PTNcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XHJcbiAgICAgICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgfVxyXG5cclxuICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcImNhbmFkYS10eXBlLWdpYnNvblwiO1xyXG4gICAgICAgIHNyYzogdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvYWVlMGFhLzAwMDAwMDAwMDAwMDAwMDAzYjliM2YwMy8yNy9sP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uNSZ2PTNcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmL2FlZTBhYS8wMDAwMDAwMDAwMDAwMDAwM2I5YjNmMDMvMjcvZD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjUmdj0zXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmL2FlZTBhYS8wMDAwMDAwMDAwMDAwMDAwM2I5YjNmMDMvMjcvYT9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9bjUmdj0zXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xyXG4gICAgICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuXHJcbiAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJjYW5hZGEtdHlwZS1naWJzb25cIjtcclxuICAgICAgICBzcmM6IHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzVmZWFkOC8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4N2YvMjcvbD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9aTUmdj0zXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi81ZmVhZDgvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODdmLzI3L2Q/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPWk1JnY9M1wiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi81ZmVhZDgvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODdmLzI3L2E/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPWk1JnY9M1wiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcclxuICAgICAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcblxyXG4gICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiY2FuYWRhLXR5cGUtZ2lic29uXCI7XHJcbiAgICAgICAgc3JjOiB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9hZi9mZDhmOTcvMDAwMDAwMDAwMDAwMDAwMDNiOWIzODg0LzI3L2w/cHJpbWVyPTdjZGNiNDRiZTRhN2RiODg3N2ZmYTVjMDAwN2I4ZGQ4NjViM2JiYzM4MzgzMWZlMmVhMTc3ZjYyMjU3YTkxOTEmZnZkPW45JnY9M1wiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvZmQ4Zjk3LzAwMDAwMDAwMDAwMDAwMDAzYjliMzg4NC8yNy9kP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uOSZ2PTNcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvZmQ4Zjk3LzAwMDAwMDAwMDAwMDAwMDAzYjliMzg4NC8yNy9hP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1uOSZ2PTNcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XHJcbiAgICAgICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgfVxyXG5cclxuICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcImNhbmFkYS10eXBlLWdpYnNvblwiO1xyXG4gICAgICAgIHNyYzogdXJsKFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvYWYvMzUxM2ExLzAwMDAwMDAwMDAwMDAwMDAzYjliMzg4NS8yNy9sP3ByaW1lcj03Y2RjYjQ0YmU0YTdkYjg4NzdmZmE1YzAwMDdiOGRkODY1YjNiYmMzODM4MzFmZTJlYTE3N2Y2MjI1N2E5MTkxJmZ2ZD1pOSZ2PTNcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzM1MTNhMS8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4ODUvMjcvZD9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9aTkmdj0zXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2FmLzM1MTNhMS8wMDAwMDAwMDAwMDAwMDAwM2I5YjM4ODUvMjcvYT9wcmltZXI9N2NkY2I0NGJlNGE3ZGI4ODc3ZmZhNWMwMDA3YjhkZDg2NWIzYmJjMzgzODMxZmUyZWExNzdmNjIyNTdhOTE5MSZmdmQ9aTkmdj0zXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xyXG4gICAgICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIH1cclxuXHJcbiAgICAudGstY2FuYWRhLXR5cGUtZ2lic29uIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJjYW5hZGEtdHlwZS1naWJzb25cIiwgc2Fucy1zZXJpZjtcclxuICAgIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0eWxlXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmdWxscGFnZS9yZWFjdC1mdWxscGFnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmb3JtaWtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3NhcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXBhZ2UtdHJhbnNpdGlvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlcy1leGFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1tZXNzZW5nZXItY3VzdG9tZXItY2hhdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zcHJpbmdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cmxcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==