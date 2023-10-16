(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod3) => function __require() {
    return mod3 || (0, cb[__getOwnPropNames(cb)[0]])((mod3 = { exports: {} }).exports, mod3), mod3.exports;
  };
  var __copyProps = (to, from2, except, desc) => {
    if (from2 && typeof from2 === "object" || typeof from2 === "function") {
      for (let key of __getOwnPropNames(from2))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from2[key], enumerable: !(desc = __getOwnPropDesc(from2, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod3, isNodeMode, target) => (target = mod3 != null ? __create(__getProtoOf(mod3)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod3 || !mod3.__esModule ? __defProp(target, "default", { value: mod3, enumerable: true }) : target,
    mod3
  ));

  // node_modules/react/cjs/react.production.min.js
  var require_react_production_min = __commonJS({
    "node_modules/react/cjs/react.production.min.js"(exports) {
      "use strict";
      var l2 = Symbol.for("react.element");
      var n = Symbol.for("react.portal");
      var p2 = Symbol.for("react.fragment");
      var q2 = Symbol.for("react.strict_mode");
      var r2 = Symbol.for("react.profiler");
      var t = Symbol.for("react.provider");
      var u2 = Symbol.for("react.context");
      var v2 = Symbol.for("react.forward_ref");
      var w = Symbol.for("react.suspense");
      var x2 = Symbol.for("react.memo");
      var y2 = Symbol.for("react.lazy");
      var z2 = Symbol.iterator;
      function A2(a2) {
        if (null === a2 || "object" !== typeof a2)
          return null;
        a2 = z2 && a2[z2] || a2["@@iterator"];
        return "function" === typeof a2 ? a2 : null;
      }
      var B2 = { isMounted: function() {
        return false;
      }, enqueueForceUpdate: function() {
      }, enqueueReplaceState: function() {
      }, enqueueSetState: function() {
      } };
      var C2 = Object.assign;
      var D2 = {};
      function E2(a2, b, e) {
        this.props = a2;
        this.context = b;
        this.refs = D2;
        this.updater = e || B2;
      }
      E2.prototype.isReactComponent = {};
      E2.prototype.setState = function(a2, b) {
        if ("object" !== typeof a2 && "function" !== typeof a2 && null != a2)
          throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, a2, b, "setState");
      };
      E2.prototype.forceUpdate = function(a2) {
        this.updater.enqueueForceUpdate(this, a2, "forceUpdate");
      };
      function F2() {
      }
      F2.prototype = E2.prototype;
      function G2(a2, b, e) {
        this.props = a2;
        this.context = b;
        this.refs = D2;
        this.updater = e || B2;
      }
      var H2 = G2.prototype = new F2();
      H2.constructor = G2;
      C2(H2, E2.prototype);
      H2.isPureReactComponent = true;
      var I2 = Array.isArray;
      var J2 = Object.prototype.hasOwnProperty;
      var K2 = { current: null };
      var L3 = { key: true, ref: true, __self: true, __source: true };
      function M2(a2, b, e) {
        var d, c2 = {}, k2 = null, h = null;
        if (null != b)
          for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k2 = "" + b.key), b)
            J2.call(b, d) && !L3.hasOwnProperty(d) && (c2[d] = b[d]);
        var g2 = arguments.length - 2;
        if (1 === g2)
          c2.children = e;
        else if (1 < g2) {
          for (var f2 = Array(g2), m = 0; m < g2; m++)
            f2[m] = arguments[m + 2];
          c2.children = f2;
        }
        if (a2 && a2.defaultProps)
          for (d in g2 = a2.defaultProps, g2)
            void 0 === c2[d] && (c2[d] = g2[d]);
        return { $$typeof: l2, type: a2, key: k2, ref: h, props: c2, _owner: K2.current };
      }
      function N2(a2, b) {
        return { $$typeof: l2, type: a2.type, key: b, ref: a2.ref, props: a2.props, _owner: a2._owner };
      }
      function O2(a2) {
        return "object" === typeof a2 && null !== a2 && a2.$$typeof === l2;
      }
      function escape(a2) {
        var b = { "=": "=0", ":": "=2" };
        return "$" + a2.replace(/[=:]/g, function(a3) {
          return b[a3];
        });
      }
      var P2 = /\/+/g;
      function Q2(a2, b) {
        return "object" === typeof a2 && null !== a2 && null != a2.key ? escape("" + a2.key) : b.toString(36);
      }
      function R2(a2, b, e, d, c2) {
        var k2 = typeof a2;
        if ("undefined" === k2 || "boolean" === k2)
          a2 = null;
        var h = false;
        if (null === a2)
          h = true;
        else
          switch (k2) {
            case "string":
            case "number":
              h = true;
              break;
            case "object":
              switch (a2.$$typeof) {
                case l2:
                case n:
                  h = true;
              }
          }
        if (h)
          return h = a2, c2 = c2(h), a2 = "" === d ? "." + Q2(h, 0) : d, I2(c2) ? (e = "", null != a2 && (e = a2.replace(P2, "$&/") + "/"), R2(c2, b, e, "", function(a3) {
            return a3;
          })) : null != c2 && (O2(c2) && (c2 = N2(c2, e + (!c2.key || h && h.key === c2.key ? "" : ("" + c2.key).replace(P2, "$&/") + "/") + a2)), b.push(c2)), 1;
        h = 0;
        d = "" === d ? "." : d + ":";
        if (I2(a2))
          for (var g2 = 0; g2 < a2.length; g2++) {
            k2 = a2[g2];
            var f2 = d + Q2(k2, g2);
            h += R2(k2, b, e, f2, c2);
          }
        else if (f2 = A2(a2), "function" === typeof f2)
          for (a2 = f2.call(a2), g2 = 0; !(k2 = a2.next()).done; )
            k2 = k2.value, f2 = d + Q2(k2, g2++), h += R2(k2, b, e, f2, c2);
        else if ("object" === k2)
          throw b = String(a2), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a2).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
        return h;
      }
      function S17(a2, b, e) {
        if (null == a2)
          return a2;
        var d = [], c2 = 0;
        R2(a2, d, "", "", function(a3) {
          return b.call(e, a3, c2++);
        });
        return d;
      }
      function T2(a2) {
        if (-1 === a2._status) {
          var b = a2._result;
          b = b();
          b.then(function(b2) {
            if (0 === a2._status || -1 === a2._status)
              a2._status = 1, a2._result = b2;
          }, function(b2) {
            if (0 === a2._status || -1 === a2._status)
              a2._status = 2, a2._result = b2;
          });
          -1 === a2._status && (a2._status = 0, a2._result = b);
        }
        if (1 === a2._status)
          return a2._result.default;
        throw a2._result;
      }
      var U2 = { current: null };
      var V2 = { transition: null };
      var W2 = { ReactCurrentDispatcher: U2, ReactCurrentBatchConfig: V2, ReactCurrentOwner: K2 };
      exports.Children = { map: S17, forEach: function(a2, b, e) {
        S17(a2, function() {
          b.apply(this, arguments);
        }, e);
      }, count: function(a2) {
        var b = 0;
        S17(a2, function() {
          b++;
        });
        return b;
      }, toArray: function(a2) {
        return S17(a2, function(a3) {
          return a3;
        }) || [];
      }, only: function(a2) {
        if (!O2(a2))
          throw Error("React.Children.only expected to receive a single React element child.");
        return a2;
      } };
      exports.Component = E2;
      exports.Fragment = p2;
      exports.Profiler = r2;
      exports.PureComponent = G2;
      exports.StrictMode = q2;
      exports.Suspense = w;
      exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W2;
      exports.cloneElement = function(a2, b, e) {
        if (null === a2 || void 0 === a2)
          throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a2 + ".");
        var d = C2({}, a2.props), c2 = a2.key, k2 = a2.ref, h = a2._owner;
        if (null != b) {
          void 0 !== b.ref && (k2 = b.ref, h = K2.current);
          void 0 !== b.key && (c2 = "" + b.key);
          if (a2.type && a2.type.defaultProps)
            var g2 = a2.type.defaultProps;
          for (f2 in b)
            J2.call(b, f2) && !L3.hasOwnProperty(f2) && (d[f2] = void 0 === b[f2] && void 0 !== g2 ? g2[f2] : b[f2]);
        }
        var f2 = arguments.length - 2;
        if (1 === f2)
          d.children = e;
        else if (1 < f2) {
          g2 = Array(f2);
          for (var m = 0; m < f2; m++)
            g2[m] = arguments[m + 2];
          d.children = g2;
        }
        return { $$typeof: l2, type: a2.type, key: c2, ref: k2, props: d, _owner: h };
      };
      exports.createContext = function(a2) {
        a2 = { $$typeof: u2, _currentValue: a2, _currentValue2: a2, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
        a2.Provider = { $$typeof: t, _context: a2 };
        return a2.Consumer = a2;
      };
      exports.createElement = M2;
      exports.createFactory = function(a2) {
        var b = M2.bind(null, a2);
        b.type = a2;
        return b;
      };
      exports.createRef = function() {
        return { current: null };
      };
      exports.forwardRef = function(a2) {
        return { $$typeof: v2, render: a2 };
      };
      exports.isValidElement = O2;
      exports.lazy = function(a2) {
        return { $$typeof: y2, _payload: { _status: -1, _result: a2 }, _init: T2 };
      };
      exports.memo = function(a2, b) {
        return { $$typeof: x2, type: a2, compare: void 0 === b ? null : b };
      };
      exports.startTransition = function(a2) {
        var b = V2.transition;
        V2.transition = {};
        try {
          a2();
        } finally {
          V2.transition = b;
        }
      };
      exports.unstable_act = function() {
        throw Error("act(...) is not supported in production builds of React.");
      };
      exports.useCallback = function(a2, b) {
        return U2.current.useCallback(a2, b);
      };
      exports.useContext = function(a2) {
        return U2.current.useContext(a2);
      };
      exports.useDebugValue = function() {
      };
      exports.useDeferredValue = function(a2) {
        return U2.current.useDeferredValue(a2);
      };
      exports.useEffect = function(a2, b) {
        return U2.current.useEffect(a2, b);
      };
      exports.useId = function() {
        return U2.current.useId();
      };
      exports.useImperativeHandle = function(a2, b, e) {
        return U2.current.useImperativeHandle(a2, b, e);
      };
      exports.useInsertionEffect = function(a2, b) {
        return U2.current.useInsertionEffect(a2, b);
      };
      exports.useLayoutEffect = function(a2, b) {
        return U2.current.useLayoutEffect(a2, b);
      };
      exports.useMemo = function(a2, b) {
        return U2.current.useMemo(a2, b);
      };
      exports.useReducer = function(a2, b, e) {
        return U2.current.useReducer(a2, b, e);
      };
      exports.useRef = function(a2) {
        return U2.current.useRef(a2);
      };
      exports.useState = function(a2) {
        return U2.current.useState(a2);
      };
      exports.useSyncExternalStore = function(a2, b, e) {
        return U2.current.useSyncExternalStore(a2, b, e);
      };
      exports.useTransition = function() {
        return U2.current.useTransition();
      };
      exports.version = "18.2.0";
    }
  });

  // node_modules/react/index.js
  var require_react = __commonJS({
    "node_modules/react/index.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_react_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // node_modules/scheduler/cjs/scheduler.production.min.js
  var require_scheduler_production_min = __commonJS({
    "node_modules/scheduler/cjs/scheduler.production.min.js"(exports) {
      "use strict";
      function f2(a2, b) {
        var c2 = a2.length;
        a2.push(b);
        a:
          for (; 0 < c2; ) {
            var d = c2 - 1 >>> 1, e = a2[d];
            if (0 < g2(e, b))
              a2[d] = b, a2[c2] = e, c2 = d;
            else
              break a;
          }
      }
      function h(a2) {
        return 0 === a2.length ? null : a2[0];
      }
      function k2(a2) {
        if (0 === a2.length)
          return null;
        var b = a2[0], c2 = a2.pop();
        if (c2 !== b) {
          a2[0] = c2;
          a:
            for (var d = 0, e = a2.length, w = e >>> 1; d < w; ) {
              var m = 2 * (d + 1) - 1, C2 = a2[m], n = m + 1, x2 = a2[n];
              if (0 > g2(C2, c2))
                n < e && 0 > g2(x2, C2) ? (a2[d] = x2, a2[n] = c2, d = n) : (a2[d] = C2, a2[m] = c2, d = m);
              else if (n < e && 0 > g2(x2, c2))
                a2[d] = x2, a2[n] = c2, d = n;
              else
                break a;
            }
        }
        return b;
      }
      function g2(a2, b) {
        var c2 = a2.sortIndex - b.sortIndex;
        return 0 !== c2 ? c2 : a2.id - b.id;
      }
      if ("object" === typeof performance && "function" === typeof performance.now) {
        l2 = performance;
        exports.unstable_now = function() {
          return l2.now();
        };
      } else {
        p2 = Date, q2 = p2.now();
        exports.unstable_now = function() {
          return p2.now() - q2;
        };
      }
      var l2;
      var p2;
      var q2;
      var r2 = [];
      var t = [];
      var u2 = 1;
      var v2 = null;
      var y2 = 3;
      var z2 = false;
      var A2 = false;
      var B2 = false;
      var D2 = "function" === typeof setTimeout ? setTimeout : null;
      var E2 = "function" === typeof clearTimeout ? clearTimeout : null;
      var F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
      "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function G2(a2) {
        for (var b = h(t); null !== b; ) {
          if (null === b.callback)
            k2(t);
          else if (b.startTime <= a2)
            k2(t), b.sortIndex = b.expirationTime, f2(r2, b);
          else
            break;
          b = h(t);
        }
      }
      function H2(a2) {
        B2 = false;
        G2(a2);
        if (!A2)
          if (null !== h(r2))
            A2 = true, I2(J2);
          else {
            var b = h(t);
            null !== b && K2(H2, b.startTime - a2);
          }
      }
      function J2(a2, b) {
        A2 = false;
        B2 && (B2 = false, E2(L3), L3 = -1);
        z2 = true;
        var c2 = y2;
        try {
          G2(b);
          for (v2 = h(r2); null !== v2 && (!(v2.expirationTime > b) || a2 && !M2()); ) {
            var d = v2.callback;
            if ("function" === typeof d) {
              v2.callback = null;
              y2 = v2.priorityLevel;
              var e = d(v2.expirationTime <= b);
              b = exports.unstable_now();
              "function" === typeof e ? v2.callback = e : v2 === h(r2) && k2(r2);
              G2(b);
            } else
              k2(r2);
            v2 = h(r2);
          }
          if (null !== v2)
            var w = true;
          else {
            var m = h(t);
            null !== m && K2(H2, m.startTime - b);
            w = false;
          }
          return w;
        } finally {
          v2 = null, y2 = c2, z2 = false;
        }
      }
      var N2 = false;
      var O2 = null;
      var L3 = -1;
      var P2 = 5;
      var Q2 = -1;
      function M2() {
        return exports.unstable_now() - Q2 < P2 ? false : true;
      }
      function R2() {
        if (null !== O2) {
          var a2 = exports.unstable_now();
          Q2 = a2;
          var b = true;
          try {
            b = O2(true, a2);
          } finally {
            b ? S17() : (N2 = false, O2 = null);
          }
        } else
          N2 = false;
      }
      var S17;
      if ("function" === typeof F2)
        S17 = function() {
          F2(R2);
        };
      else if ("undefined" !== typeof MessageChannel) {
        T2 = new MessageChannel(), U2 = T2.port2;
        T2.port1.onmessage = R2;
        S17 = function() {
          U2.postMessage(null);
        };
      } else
        S17 = function() {
          D2(R2, 0);
        };
      var T2;
      var U2;
      function I2(a2) {
        O2 = a2;
        N2 || (N2 = true, S17());
      }
      function K2(a2, b) {
        L3 = D2(function() {
          a2(exports.unstable_now());
        }, b);
      }
      exports.unstable_IdlePriority = 5;
      exports.unstable_ImmediatePriority = 1;
      exports.unstable_LowPriority = 4;
      exports.unstable_NormalPriority = 3;
      exports.unstable_Profiling = null;
      exports.unstable_UserBlockingPriority = 2;
      exports.unstable_cancelCallback = function(a2) {
        a2.callback = null;
      };
      exports.unstable_continueExecution = function() {
        A2 || z2 || (A2 = true, I2(J2));
      };
      exports.unstable_forceFrameRate = function(a2) {
        0 > a2 || 125 < a2 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a2 ? Math.floor(1e3 / a2) : 5;
      };
      exports.unstable_getCurrentPriorityLevel = function() {
        return y2;
      };
      exports.unstable_getFirstCallbackNode = function() {
        return h(r2);
      };
      exports.unstable_next = function(a2) {
        switch (y2) {
          case 1:
          case 2:
          case 3:
            var b = 3;
            break;
          default:
            b = y2;
        }
        var c2 = y2;
        y2 = b;
        try {
          return a2();
        } finally {
          y2 = c2;
        }
      };
      exports.unstable_pauseExecution = function() {
      };
      exports.unstable_requestPaint = function() {
      };
      exports.unstable_runWithPriority = function(a2, b) {
        switch (a2) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            a2 = 3;
        }
        var c2 = y2;
        y2 = a2;
        try {
          return b();
        } finally {
          y2 = c2;
        }
      };
      exports.unstable_scheduleCallback = function(a2, b, c2) {
        var d = exports.unstable_now();
        "object" === typeof c2 && null !== c2 ? (c2 = c2.delay, c2 = "number" === typeof c2 && 0 < c2 ? d + c2 : d) : c2 = d;
        switch (a2) {
          case 1:
            var e = -1;
            break;
          case 2:
            e = 250;
            break;
          case 5:
            e = 1073741823;
            break;
          case 4:
            e = 1e4;
            break;
          default:
            e = 5e3;
        }
        e = c2 + e;
        a2 = { id: u2++, callback: b, priorityLevel: a2, startTime: c2, expirationTime: e, sortIndex: -1 };
        c2 > d ? (a2.sortIndex = c2, f2(t, a2), null === h(r2) && a2 === h(t) && (B2 ? (E2(L3), L3 = -1) : B2 = true, K2(H2, c2 - d))) : (a2.sortIndex = e, f2(r2, a2), A2 || z2 || (A2 = true, I2(J2)));
        return a2;
      };
      exports.unstable_shouldYield = M2;
      exports.unstable_wrapCallback = function(a2) {
        var b = y2;
        return function() {
          var c2 = y2;
          y2 = b;
          try {
            return a2.apply(this, arguments);
          } finally {
            y2 = c2;
          }
        };
      };
    }
  });

  // node_modules/scheduler/index.js
  var require_scheduler = __commonJS({
    "node_modules/scheduler/index.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_scheduler_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // node_modules/react-dom/cjs/react-dom.production.min.js
  var require_react_dom_production_min = __commonJS({
    "node_modules/react-dom/cjs/react-dom.production.min.js"(exports) {
      "use strict";
      var aa = require_react();
      var ca = require_scheduler();
      function p2(a2) {
        for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a2, c2 = 1; c2 < arguments.length; c2++)
          b += "&args[]=" + encodeURIComponent(arguments[c2]);
        return "Minified React error #" + a2 + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      var da = /* @__PURE__ */ new Set();
      var ea = {};
      function fa(a2, b) {
        ha(a2, b);
        ha(a2 + "Capture", b);
      }
      function ha(a2, b) {
        ea[a2] = b;
        for (a2 = 0; a2 < b.length; a2++)
          da.add(b[a2]);
      }
      var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement);
      var ja = Object.prototype.hasOwnProperty;
      var ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
      var la = {};
      var ma = {};
      function oa(a2) {
        if (ja.call(ma, a2))
          return true;
        if (ja.call(la, a2))
          return false;
        if (ka.test(a2))
          return ma[a2] = true;
        la[a2] = true;
        return false;
      }
      function pa(a2, b, c2, d) {
        if (null !== c2 && 0 === c2.type)
          return false;
        switch (typeof b) {
          case "function":
          case "symbol":
            return true;
          case "boolean":
            if (d)
              return false;
            if (null !== c2)
              return !c2.acceptsBooleans;
            a2 = a2.toLowerCase().slice(0, 5);
            return "data-" !== a2 && "aria-" !== a2;
          default:
            return false;
        }
      }
      function qa(a2, b, c2, d) {
        if (null === b || "undefined" === typeof b || pa(a2, b, c2, d))
          return true;
        if (d)
          return false;
        if (null !== c2)
          switch (c2.type) {
            case 3:
              return !b;
            case 4:
              return false === b;
            case 5:
              return isNaN(b);
            case 6:
              return isNaN(b) || 1 > b;
          }
        return false;
      }
      function v2(a2, b, c2, d, e, f2, g2) {
        this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
        this.attributeName = d;
        this.attributeNamespace = e;
        this.mustUseProperty = c2;
        this.propertyName = a2;
        this.type = b;
        this.sanitizeURL = f2;
        this.removeEmptyString = g2;
      }
      var z2 = {};
      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a2) {
        z2[a2] = new v2(a2, 0, false, a2, null, false, false);
      });
      [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a2) {
        var b = a2[0];
        z2[b] = new v2(b, 1, false, a2[1], null, false, false);
      });
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a2) {
        z2[a2] = new v2(a2, 2, false, a2.toLowerCase(), null, false, false);
      });
      ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a2) {
        z2[a2] = new v2(a2, 2, false, a2, null, false, false);
      });
      "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a2) {
        z2[a2] = new v2(a2, 3, false, a2.toLowerCase(), null, false, false);
      });
      ["checked", "multiple", "muted", "selected"].forEach(function(a2) {
        z2[a2] = new v2(a2, 3, true, a2, null, false, false);
      });
      ["capture", "download"].forEach(function(a2) {
        z2[a2] = new v2(a2, 4, false, a2, null, false, false);
      });
      ["cols", "rows", "size", "span"].forEach(function(a2) {
        z2[a2] = new v2(a2, 6, false, a2, null, false, false);
      });
      ["rowSpan", "start"].forEach(function(a2) {
        z2[a2] = new v2(a2, 5, false, a2.toLowerCase(), null, false, false);
      });
      var ra = /[\-:]([a-z])/g;
      function sa(a2) {
        return a2[1].toUpperCase();
      }
      "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a2) {
        var b = a2.replace(
          ra,
          sa
        );
        z2[b] = new v2(b, 1, false, a2, null, false, false);
      });
      "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a2) {
        var b = a2.replace(ra, sa);
        z2[b] = new v2(b, 1, false, a2, "http://www.w3.org/1999/xlink", false, false);
      });
      ["xml:base", "xml:lang", "xml:space"].forEach(function(a2) {
        var b = a2.replace(ra, sa);
        z2[b] = new v2(b, 1, false, a2, "http://www.w3.org/XML/1998/namespace", false, false);
      });
      ["tabIndex", "crossOrigin"].forEach(function(a2) {
        z2[a2] = new v2(a2, 1, false, a2.toLowerCase(), null, false, false);
      });
      z2.xlinkHref = new v2("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
      ["src", "href", "action", "formAction"].forEach(function(a2) {
        z2[a2] = new v2(a2, 1, false, a2.toLowerCase(), null, true, true);
      });
      function ta(a2, b, c2, d) {
        var e = z2.hasOwnProperty(b) ? z2[b] : null;
        if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1])
          qa(b, c2, e, d) && (c2 = null), d || null === e ? oa(b) && (null === c2 ? a2.removeAttribute(b) : a2.setAttribute(b, "" + c2)) : e.mustUseProperty ? a2[e.propertyName] = null === c2 ? 3 === e.type ? false : "" : c2 : (b = e.attributeName, d = e.attributeNamespace, null === c2 ? a2.removeAttribute(b) : (e = e.type, c2 = 3 === e || 4 === e && true === c2 ? "" : "" + c2, d ? a2.setAttributeNS(d, b, c2) : a2.setAttribute(b, c2)));
      }
      var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      var va = Symbol.for("react.element");
      var wa = Symbol.for("react.portal");
      var ya = Symbol.for("react.fragment");
      var za = Symbol.for("react.strict_mode");
      var Aa = Symbol.for("react.profiler");
      var Ba = Symbol.for("react.provider");
      var Ca = Symbol.for("react.context");
      var Da = Symbol.for("react.forward_ref");
      var Ea = Symbol.for("react.suspense");
      var Fa = Symbol.for("react.suspense_list");
      var Ga = Symbol.for("react.memo");
      var Ha = Symbol.for("react.lazy");
      Symbol.for("react.scope");
      Symbol.for("react.debug_trace_mode");
      var Ia = Symbol.for("react.offscreen");
      Symbol.for("react.legacy_hidden");
      Symbol.for("react.cache");
      Symbol.for("react.tracing_marker");
      var Ja = Symbol.iterator;
      function Ka(a2) {
        if (null === a2 || "object" !== typeof a2)
          return null;
        a2 = Ja && a2[Ja] || a2["@@iterator"];
        return "function" === typeof a2 ? a2 : null;
      }
      var A2 = Object.assign;
      var La;
      function Ma(a2) {
        if (void 0 === La)
          try {
            throw Error();
          } catch (c2) {
            var b = c2.stack.trim().match(/\n( *(at )?)/);
            La = b && b[1] || "";
          }
        return "\n" + La + a2;
      }
      var Na = false;
      function Oa(a2, b) {
        if (!a2 || Na)
          return "";
        Na = true;
        var c2 = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          if (b)
            if (b = function() {
              throw Error();
            }, Object.defineProperty(b.prototype, "props", { set: function() {
              throw Error();
            } }), "object" === typeof Reflect && Reflect.construct) {
              try {
                Reflect.construct(b, []);
              } catch (l2) {
                var d = l2;
              }
              Reflect.construct(a2, [], b);
            } else {
              try {
                b.call();
              } catch (l2) {
                d = l2;
              }
              a2.call(b.prototype);
            }
          else {
            try {
              throw Error();
            } catch (l2) {
              d = l2;
            }
            a2();
          }
        } catch (l2) {
          if (l2 && d && "string" === typeof l2.stack) {
            for (var e = l2.stack.split("\n"), f2 = d.stack.split("\n"), g2 = e.length - 1, h = f2.length - 1; 1 <= g2 && 0 <= h && e[g2] !== f2[h]; )
              h--;
            for (; 1 <= g2 && 0 <= h; g2--, h--)
              if (e[g2] !== f2[h]) {
                if (1 !== g2 || 1 !== h) {
                  do
                    if (g2--, h--, 0 > h || e[g2] !== f2[h]) {
                      var k2 = "\n" + e[g2].replace(" at new ", " at ");
                      a2.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a2.displayName));
                      return k2;
                    }
                  while (1 <= g2 && 0 <= h);
                }
                break;
              }
          }
        } finally {
          Na = false, Error.prepareStackTrace = c2;
        }
        return (a2 = a2 ? a2.displayName || a2.name : "") ? Ma(a2) : "";
      }
      function Pa(a2) {
        switch (a2.tag) {
          case 5:
            return Ma(a2.type);
          case 16:
            return Ma("Lazy");
          case 13:
            return Ma("Suspense");
          case 19:
            return Ma("SuspenseList");
          case 0:
          case 2:
          case 15:
            return a2 = Oa(a2.type, false), a2;
          case 11:
            return a2 = Oa(a2.type.render, false), a2;
          case 1:
            return a2 = Oa(a2.type, true), a2;
          default:
            return "";
        }
      }
      function Qa(a2) {
        if (null == a2)
          return null;
        if ("function" === typeof a2)
          return a2.displayName || a2.name || null;
        if ("string" === typeof a2)
          return a2;
        switch (a2) {
          case ya:
            return "Fragment";
          case wa:
            return "Portal";
          case Aa:
            return "Profiler";
          case za:
            return "StrictMode";
          case Ea:
            return "Suspense";
          case Fa:
            return "SuspenseList";
        }
        if ("object" === typeof a2)
          switch (a2.$$typeof) {
            case Ca:
              return (a2.displayName || "Context") + ".Consumer";
            case Ba:
              return (a2._context.displayName || "Context") + ".Provider";
            case Da:
              var b = a2.render;
              a2 = a2.displayName;
              a2 || (a2 = b.displayName || b.name || "", a2 = "" !== a2 ? "ForwardRef(" + a2 + ")" : "ForwardRef");
              return a2;
            case Ga:
              return b = a2.displayName || null, null !== b ? b : Qa(a2.type) || "Memo";
            case Ha:
              b = a2._payload;
              a2 = a2._init;
              try {
                return Qa(a2(b));
              } catch (c2) {
              }
          }
        return null;
      }
      function Ra(a2) {
        var b = a2.type;
        switch (a2.tag) {
          case 24:
            return "Cache";
          case 9:
            return (b.displayName || "Context") + ".Consumer";
          case 10:
            return (b._context.displayName || "Context") + ".Provider";
          case 18:
            return "DehydratedFragment";
          case 11:
            return a2 = b.render, a2 = a2.displayName || a2.name || "", b.displayName || ("" !== a2 ? "ForwardRef(" + a2 + ")" : "ForwardRef");
          case 7:
            return "Fragment";
          case 5:
            return b;
          case 4:
            return "Portal";
          case 3:
            return "Root";
          case 6:
            return "Text";
          case 16:
            return Qa(b);
          case 8:
            return b === za ? "StrictMode" : "Mode";
          case 22:
            return "Offscreen";
          case 12:
            return "Profiler";
          case 21:
            return "Scope";
          case 13:
            return "Suspense";
          case 19:
            return "SuspenseList";
          case 25:
            return "TracingMarker";
          case 1:
          case 0:
          case 17:
          case 2:
          case 14:
          case 15:
            if ("function" === typeof b)
              return b.displayName || b.name || null;
            if ("string" === typeof b)
              return b;
        }
        return null;
      }
      function Sa(a2) {
        switch (typeof a2) {
          case "boolean":
          case "number":
          case "string":
          case "undefined":
            return a2;
          case "object":
            return a2;
          default:
            return "";
        }
      }
      function Ta(a2) {
        var b = a2.type;
        return (a2 = a2.nodeName) && "input" === a2.toLowerCase() && ("checkbox" === b || "radio" === b);
      }
      function Ua(a2) {
        var b = Ta(a2) ? "checked" : "value", c2 = Object.getOwnPropertyDescriptor(a2.constructor.prototype, b), d = "" + a2[b];
        if (!a2.hasOwnProperty(b) && "undefined" !== typeof c2 && "function" === typeof c2.get && "function" === typeof c2.set) {
          var e = c2.get, f2 = c2.set;
          Object.defineProperty(a2, b, { configurable: true, get: function() {
            return e.call(this);
          }, set: function(a3) {
            d = "" + a3;
            f2.call(this, a3);
          } });
          Object.defineProperty(a2, b, { enumerable: c2.enumerable });
          return { getValue: function() {
            return d;
          }, setValue: function(a3) {
            d = "" + a3;
          }, stopTracking: function() {
            a2._valueTracker = null;
            delete a2[b];
          } };
        }
      }
      function Va(a2) {
        a2._valueTracker || (a2._valueTracker = Ua(a2));
      }
      function Wa(a2) {
        if (!a2)
          return false;
        var b = a2._valueTracker;
        if (!b)
          return true;
        var c2 = b.getValue();
        var d = "";
        a2 && (d = Ta(a2) ? a2.checked ? "true" : "false" : a2.value);
        a2 = d;
        return a2 !== c2 ? (b.setValue(a2), true) : false;
      }
      function Xa(a2) {
        a2 = a2 || ("undefined" !== typeof document ? document : void 0);
        if ("undefined" === typeof a2)
          return null;
        try {
          return a2.activeElement || a2.body;
        } catch (b) {
          return a2.body;
        }
      }
      function Ya(a2, b) {
        var c2 = b.checked;
        return A2({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c2 ? c2 : a2._wrapperState.initialChecked });
      }
      function Za(a2, b) {
        var c2 = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
        c2 = Sa(null != b.value ? b.value : c2);
        a2._wrapperState = { initialChecked: d, initialValue: c2, controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value };
      }
      function ab(a2, b) {
        b = b.checked;
        null != b && ta(a2, "checked", b, false);
      }
      function bb(a2, b) {
        ab(a2, b);
        var c2 = Sa(b.value), d = b.type;
        if (null != c2)
          if ("number" === d) {
            if (0 === c2 && "" === a2.value || a2.value != c2)
              a2.value = "" + c2;
          } else
            a2.value !== "" + c2 && (a2.value = "" + c2);
        else if ("submit" === d || "reset" === d) {
          a2.removeAttribute("value");
          return;
        }
        b.hasOwnProperty("value") ? cb(a2, b.type, c2) : b.hasOwnProperty("defaultValue") && cb(a2, b.type, Sa(b.defaultValue));
        null == b.checked && null != b.defaultChecked && (a2.defaultChecked = !!b.defaultChecked);
      }
      function db(a2, b, c2) {
        if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
          var d = b.type;
          if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value))
            return;
          b = "" + a2._wrapperState.initialValue;
          c2 || b === a2.value || (a2.value = b);
          a2.defaultValue = b;
        }
        c2 = a2.name;
        "" !== c2 && (a2.name = "");
        a2.defaultChecked = !!a2._wrapperState.initialChecked;
        "" !== c2 && (a2.name = c2);
      }
      function cb(a2, b, c2) {
        if ("number" !== b || Xa(a2.ownerDocument) !== a2)
          null == c2 ? a2.defaultValue = "" + a2._wrapperState.initialValue : a2.defaultValue !== "" + c2 && (a2.defaultValue = "" + c2);
      }
      var eb = Array.isArray;
      function fb(a2, b, c2, d) {
        a2 = a2.options;
        if (b) {
          b = {};
          for (var e = 0; e < c2.length; e++)
            b["$" + c2[e]] = true;
          for (c2 = 0; c2 < a2.length; c2++)
            e = b.hasOwnProperty("$" + a2[c2].value), a2[c2].selected !== e && (a2[c2].selected = e), e && d && (a2[c2].defaultSelected = true);
        } else {
          c2 = "" + Sa(c2);
          b = null;
          for (e = 0; e < a2.length; e++) {
            if (a2[e].value === c2) {
              a2[e].selected = true;
              d && (a2[e].defaultSelected = true);
              return;
            }
            null !== b || a2[e].disabled || (b = a2[e]);
          }
          null !== b && (b.selected = true);
        }
      }
      function gb(a2, b) {
        if (null != b.dangerouslySetInnerHTML)
          throw Error(p2(91));
        return A2({}, b, { value: void 0, defaultValue: void 0, children: "" + a2._wrapperState.initialValue });
      }
      function hb(a2, b) {
        var c2 = b.value;
        if (null == c2) {
          c2 = b.children;
          b = b.defaultValue;
          if (null != c2) {
            if (null != b)
              throw Error(p2(92));
            if (eb(c2)) {
              if (1 < c2.length)
                throw Error(p2(93));
              c2 = c2[0];
            }
            b = c2;
          }
          null == b && (b = "");
          c2 = b;
        }
        a2._wrapperState = { initialValue: Sa(c2) };
      }
      function ib(a2, b) {
        var c2 = Sa(b.value), d = Sa(b.defaultValue);
        null != c2 && (c2 = "" + c2, c2 !== a2.value && (a2.value = c2), null == b.defaultValue && a2.defaultValue !== c2 && (a2.defaultValue = c2));
        null != d && (a2.defaultValue = "" + d);
      }
      function jb(a2) {
        var b = a2.textContent;
        b === a2._wrapperState.initialValue && "" !== b && null !== b && (a2.value = b);
      }
      function kb(a2) {
        switch (a2) {
          case "svg":
            return "http://www.w3.org/2000/svg";
          case "math":
            return "http://www.w3.org/1998/Math/MathML";
          default:
            return "http://www.w3.org/1999/xhtml";
        }
      }
      function lb(a2, b) {
        return null == a2 || "http://www.w3.org/1999/xhtml" === a2 ? kb(b) : "http://www.w3.org/2000/svg" === a2 && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a2;
      }
      var mb;
      var nb = function(a2) {
        return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c2, d, e) {
          MSApp.execUnsafeLocalFunction(function() {
            return a2(b, c2, d, e);
          });
        } : a2;
      }(function(a2, b) {
        if ("http://www.w3.org/2000/svg" !== a2.namespaceURI || "innerHTML" in a2)
          a2.innerHTML = b;
        else {
          mb = mb || document.createElement("div");
          mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
          for (b = mb.firstChild; a2.firstChild; )
            a2.removeChild(a2.firstChild);
          for (; b.firstChild; )
            a2.appendChild(b.firstChild);
        }
      });
      function ob(a2, b) {
        if (b) {
          var c2 = a2.firstChild;
          if (c2 && c2 === a2.lastChild && 3 === c2.nodeType) {
            c2.nodeValue = b;
            return;
          }
        }
        a2.textContent = b;
      }
      var pb = {
        animationIterationCount: true,
        aspectRatio: true,
        borderImageOutset: true,
        borderImageSlice: true,
        borderImageWidth: true,
        boxFlex: true,
        boxFlexGroup: true,
        boxOrdinalGroup: true,
        columnCount: true,
        columns: true,
        flex: true,
        flexGrow: true,
        flexPositive: true,
        flexShrink: true,
        flexNegative: true,
        flexOrder: true,
        gridArea: true,
        gridRow: true,
        gridRowEnd: true,
        gridRowSpan: true,
        gridRowStart: true,
        gridColumn: true,
        gridColumnEnd: true,
        gridColumnSpan: true,
        gridColumnStart: true,
        fontWeight: true,
        lineClamp: true,
        lineHeight: true,
        opacity: true,
        order: true,
        orphans: true,
        tabSize: true,
        widows: true,
        zIndex: true,
        zoom: true,
        fillOpacity: true,
        floodOpacity: true,
        stopOpacity: true,
        strokeDasharray: true,
        strokeDashoffset: true,
        strokeMiterlimit: true,
        strokeOpacity: true,
        strokeWidth: true
      };
      var qb = ["Webkit", "ms", "Moz", "O"];
      Object.keys(pb).forEach(function(a2) {
        qb.forEach(function(b) {
          b = b + a2.charAt(0).toUpperCase() + a2.substring(1);
          pb[b] = pb[a2];
        });
      });
      function rb(a2, b, c2) {
        return null == b || "boolean" === typeof b || "" === b ? "" : c2 || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a2) && pb[a2] ? ("" + b).trim() : b + "px";
      }
      function sb(a2, b) {
        a2 = a2.style;
        for (var c2 in b)
          if (b.hasOwnProperty(c2)) {
            var d = 0 === c2.indexOf("--"), e = rb(c2, b[c2], d);
            "float" === c2 && (c2 = "cssFloat");
            d ? a2.setProperty(c2, e) : a2[c2] = e;
          }
      }
      var tb = A2({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
      function ub(a2, b) {
        if (b) {
          if (tb[a2] && (null != b.children || null != b.dangerouslySetInnerHTML))
            throw Error(p2(137, a2));
          if (null != b.dangerouslySetInnerHTML) {
            if (null != b.children)
              throw Error(p2(60));
            if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML))
              throw Error(p2(61));
          }
          if (null != b.style && "object" !== typeof b.style)
            throw Error(p2(62));
        }
      }
      function vb(a2, b) {
        if (-1 === a2.indexOf("-"))
          return "string" === typeof b.is;
        switch (a2) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return false;
          default:
            return true;
        }
      }
      var wb = null;
      function xb(a2) {
        a2 = a2.target || a2.srcElement || window;
        a2.correspondingUseElement && (a2 = a2.correspondingUseElement);
        return 3 === a2.nodeType ? a2.parentNode : a2;
      }
      var yb = null;
      var zb = null;
      var Ab = null;
      function Bb(a2) {
        if (a2 = Cb(a2)) {
          if ("function" !== typeof yb)
            throw Error(p2(280));
          var b = a2.stateNode;
          b && (b = Db(b), yb(a2.stateNode, a2.type, b));
        }
      }
      function Eb(a2) {
        zb ? Ab ? Ab.push(a2) : Ab = [a2] : zb = a2;
      }
      function Fb() {
        if (zb) {
          var a2 = zb, b = Ab;
          Ab = zb = null;
          Bb(a2);
          if (b)
            for (a2 = 0; a2 < b.length; a2++)
              Bb(b[a2]);
        }
      }
      function Gb(a2, b) {
        return a2(b);
      }
      function Hb() {
      }
      var Ib = false;
      function Jb(a2, b, c2) {
        if (Ib)
          return a2(b, c2);
        Ib = true;
        try {
          return Gb(a2, b, c2);
        } finally {
          if (Ib = false, null !== zb || null !== Ab)
            Hb(), Fb();
        }
      }
      function Kb(a2, b) {
        var c2 = a2.stateNode;
        if (null === c2)
          return null;
        var d = Db(c2);
        if (null === d)
          return null;
        c2 = d[b];
        a:
          switch (b) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (d = !d.disabled) || (a2 = a2.type, d = !("button" === a2 || "input" === a2 || "select" === a2 || "textarea" === a2));
              a2 = !d;
              break a;
            default:
              a2 = false;
          }
        if (a2)
          return null;
        if (c2 && "function" !== typeof c2)
          throw Error(p2(231, b, typeof c2));
        return c2;
      }
      var Lb = false;
      if (ia)
        try {
          Mb = {};
          Object.defineProperty(Mb, "passive", { get: function() {
            Lb = true;
          } });
          window.addEventListener("test", Mb, Mb);
          window.removeEventListener("test", Mb, Mb);
        } catch (a2) {
          Lb = false;
        }
      var Mb;
      function Nb(a2, b, c2, d, e, f2, g2, h, k2) {
        var l2 = Array.prototype.slice.call(arguments, 3);
        try {
          b.apply(c2, l2);
        } catch (m) {
          this.onError(m);
        }
      }
      var Ob = false;
      var Pb = null;
      var Qb = false;
      var Rb = null;
      var Sb = { onError: function(a2) {
        Ob = true;
        Pb = a2;
      } };
      function Tb(a2, b, c2, d, e, f2, g2, h, k2) {
        Ob = false;
        Pb = null;
        Nb.apply(Sb, arguments);
      }
      function Ub(a2, b, c2, d, e, f2, g2, h, k2) {
        Tb.apply(this, arguments);
        if (Ob) {
          if (Ob) {
            var l2 = Pb;
            Ob = false;
            Pb = null;
          } else
            throw Error(p2(198));
          Qb || (Qb = true, Rb = l2);
        }
      }
      function Vb(a2) {
        var b = a2, c2 = a2;
        if (a2.alternate)
          for (; b.return; )
            b = b.return;
        else {
          a2 = b;
          do
            b = a2, 0 !== (b.flags & 4098) && (c2 = b.return), a2 = b.return;
          while (a2);
        }
        return 3 === b.tag ? c2 : null;
      }
      function Wb(a2) {
        if (13 === a2.tag) {
          var b = a2.memoizedState;
          null === b && (a2 = a2.alternate, null !== a2 && (b = a2.memoizedState));
          if (null !== b)
            return b.dehydrated;
        }
        return null;
      }
      function Xb(a2) {
        if (Vb(a2) !== a2)
          throw Error(p2(188));
      }
      function Yb(a2) {
        var b = a2.alternate;
        if (!b) {
          b = Vb(a2);
          if (null === b)
            throw Error(p2(188));
          return b !== a2 ? null : a2;
        }
        for (var c2 = a2, d = b; ; ) {
          var e = c2.return;
          if (null === e)
            break;
          var f2 = e.alternate;
          if (null === f2) {
            d = e.return;
            if (null !== d) {
              c2 = d;
              continue;
            }
            break;
          }
          if (e.child === f2.child) {
            for (f2 = e.child; f2; ) {
              if (f2 === c2)
                return Xb(e), a2;
              if (f2 === d)
                return Xb(e), b;
              f2 = f2.sibling;
            }
            throw Error(p2(188));
          }
          if (c2.return !== d.return)
            c2 = e, d = f2;
          else {
            for (var g2 = false, h = e.child; h; ) {
              if (h === c2) {
                g2 = true;
                c2 = e;
                d = f2;
                break;
              }
              if (h === d) {
                g2 = true;
                d = e;
                c2 = f2;
                break;
              }
              h = h.sibling;
            }
            if (!g2) {
              for (h = f2.child; h; ) {
                if (h === c2) {
                  g2 = true;
                  c2 = f2;
                  d = e;
                  break;
                }
                if (h === d) {
                  g2 = true;
                  d = f2;
                  c2 = e;
                  break;
                }
                h = h.sibling;
              }
              if (!g2)
                throw Error(p2(189));
            }
          }
          if (c2.alternate !== d)
            throw Error(p2(190));
        }
        if (3 !== c2.tag)
          throw Error(p2(188));
        return c2.stateNode.current === c2 ? a2 : b;
      }
      function Zb(a2) {
        a2 = Yb(a2);
        return null !== a2 ? $b(a2) : null;
      }
      function $b(a2) {
        if (5 === a2.tag || 6 === a2.tag)
          return a2;
        for (a2 = a2.child; null !== a2; ) {
          var b = $b(a2);
          if (null !== b)
            return b;
          a2 = a2.sibling;
        }
        return null;
      }
      var ac = ca.unstable_scheduleCallback;
      var bc = ca.unstable_cancelCallback;
      var cc = ca.unstable_shouldYield;
      var dc = ca.unstable_requestPaint;
      var B2 = ca.unstable_now;
      var ec = ca.unstable_getCurrentPriorityLevel;
      var fc = ca.unstable_ImmediatePriority;
      var gc = ca.unstable_UserBlockingPriority;
      var hc = ca.unstable_NormalPriority;
      var ic = ca.unstable_LowPriority;
      var jc = ca.unstable_IdlePriority;
      var kc = null;
      var lc = null;
      function mc(a2) {
        if (lc && "function" === typeof lc.onCommitFiberRoot)
          try {
            lc.onCommitFiberRoot(kc, a2, void 0, 128 === (a2.current.flags & 128));
          } catch (b) {
          }
      }
      var oc = Math.clz32 ? Math.clz32 : nc;
      var pc = Math.log;
      var qc = Math.LN2;
      function nc(a2) {
        a2 >>>= 0;
        return 0 === a2 ? 32 : 31 - (pc(a2) / qc | 0) | 0;
      }
      var rc = 64;
      var sc = 4194304;
      function tc(a2) {
        switch (a2 & -a2) {
          case 1:
            return 1;
          case 2:
            return 2;
          case 4:
            return 4;
          case 8:
            return 8;
          case 16:
            return 16;
          case 32:
            return 32;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return a2 & 4194240;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return a2 & 130023424;
          case 134217728:
            return 134217728;
          case 268435456:
            return 268435456;
          case 536870912:
            return 536870912;
          case 1073741824:
            return 1073741824;
          default:
            return a2;
        }
      }
      function uc(a2, b) {
        var c2 = a2.pendingLanes;
        if (0 === c2)
          return 0;
        var d = 0, e = a2.suspendedLanes, f2 = a2.pingedLanes, g2 = c2 & 268435455;
        if (0 !== g2) {
          var h = g2 & ~e;
          0 !== h ? d = tc(h) : (f2 &= g2, 0 !== f2 && (d = tc(f2)));
        } else
          g2 = c2 & ~e, 0 !== g2 ? d = tc(g2) : 0 !== f2 && (d = tc(f2));
        if (0 === d)
          return 0;
        if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f2 = b & -b, e >= f2 || 16 === e && 0 !== (f2 & 4194240)))
          return b;
        0 !== (d & 4) && (d |= c2 & 16);
        b = a2.entangledLanes;
        if (0 !== b)
          for (a2 = a2.entanglements, b &= d; 0 < b; )
            c2 = 31 - oc(b), e = 1 << c2, d |= a2[c2], b &= ~e;
        return d;
      }
      function vc(a2, b) {
        switch (a2) {
          case 1:
          case 2:
          case 4:
            return b + 250;
          case 8:
          case 16:
          case 32:
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return b + 5e3;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return -1;
          case 134217728:
          case 268435456:
          case 536870912:
          case 1073741824:
            return -1;
          default:
            return -1;
        }
      }
      function wc(a2, b) {
        for (var c2 = a2.suspendedLanes, d = a2.pingedLanes, e = a2.expirationTimes, f2 = a2.pendingLanes; 0 < f2; ) {
          var g2 = 31 - oc(f2), h = 1 << g2, k2 = e[g2];
          if (-1 === k2) {
            if (0 === (h & c2) || 0 !== (h & d))
              e[g2] = vc(h, b);
          } else
            k2 <= b && (a2.expiredLanes |= h);
          f2 &= ~h;
        }
      }
      function xc(a2) {
        a2 = a2.pendingLanes & -1073741825;
        return 0 !== a2 ? a2 : a2 & 1073741824 ? 1073741824 : 0;
      }
      function yc() {
        var a2 = rc;
        rc <<= 1;
        0 === (rc & 4194240) && (rc = 64);
        return a2;
      }
      function zc(a2) {
        for (var b = [], c2 = 0; 31 > c2; c2++)
          b.push(a2);
        return b;
      }
      function Ac(a2, b, c2) {
        a2.pendingLanes |= b;
        536870912 !== b && (a2.suspendedLanes = 0, a2.pingedLanes = 0);
        a2 = a2.eventTimes;
        b = 31 - oc(b);
        a2[b] = c2;
      }
      function Bc(a2, b) {
        var c2 = a2.pendingLanes & ~b;
        a2.pendingLanes = b;
        a2.suspendedLanes = 0;
        a2.pingedLanes = 0;
        a2.expiredLanes &= b;
        a2.mutableReadLanes &= b;
        a2.entangledLanes &= b;
        b = a2.entanglements;
        var d = a2.eventTimes;
        for (a2 = a2.expirationTimes; 0 < c2; ) {
          var e = 31 - oc(c2), f2 = 1 << e;
          b[e] = 0;
          d[e] = -1;
          a2[e] = -1;
          c2 &= ~f2;
        }
      }
      function Cc(a2, b) {
        var c2 = a2.entangledLanes |= b;
        for (a2 = a2.entanglements; c2; ) {
          var d = 31 - oc(c2), e = 1 << d;
          e & b | a2[d] & b && (a2[d] |= b);
          c2 &= ~e;
        }
      }
      var C2 = 0;
      function Dc(a2) {
        a2 &= -a2;
        return 1 < a2 ? 4 < a2 ? 0 !== (a2 & 268435455) ? 16 : 536870912 : 4 : 1;
      }
      var Ec;
      var Fc;
      var Gc;
      var Hc;
      var Ic;
      var Jc = false;
      var Kc = [];
      var Lc = null;
      var Mc = null;
      var Nc = null;
      var Oc = /* @__PURE__ */ new Map();
      var Pc = /* @__PURE__ */ new Map();
      var Qc = [];
      var Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
      function Sc(a2, b) {
        switch (a2) {
          case "focusin":
          case "focusout":
            Lc = null;
            break;
          case "dragenter":
          case "dragleave":
            Mc = null;
            break;
          case "mouseover":
          case "mouseout":
            Nc = null;
            break;
          case "pointerover":
          case "pointerout":
            Oc.delete(b.pointerId);
            break;
          case "gotpointercapture":
          case "lostpointercapture":
            Pc.delete(b.pointerId);
        }
      }
      function Tc(a2, b, c2, d, e, f2) {
        if (null === a2 || a2.nativeEvent !== f2)
          return a2 = { blockedOn: b, domEventName: c2, eventSystemFlags: d, nativeEvent: f2, targetContainers: [e] }, null !== b && (b = Cb(b), null !== b && Fc(b)), a2;
        a2.eventSystemFlags |= d;
        b = a2.targetContainers;
        null !== e && -1 === b.indexOf(e) && b.push(e);
        return a2;
      }
      function Uc(a2, b, c2, d, e) {
        switch (b) {
          case "focusin":
            return Lc = Tc(Lc, a2, b, c2, d, e), true;
          case "dragenter":
            return Mc = Tc(Mc, a2, b, c2, d, e), true;
          case "mouseover":
            return Nc = Tc(Nc, a2, b, c2, d, e), true;
          case "pointerover":
            var f2 = e.pointerId;
            Oc.set(f2, Tc(Oc.get(f2) || null, a2, b, c2, d, e));
            return true;
          case "gotpointercapture":
            return f2 = e.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a2, b, c2, d, e)), true;
        }
        return false;
      }
      function Vc(a2) {
        var b = Wc(a2.target);
        if (null !== b) {
          var c2 = Vb(b);
          if (null !== c2) {
            if (b = c2.tag, 13 === b) {
              if (b = Wb(c2), null !== b) {
                a2.blockedOn = b;
                Ic(a2.priority, function() {
                  Gc(c2);
                });
                return;
              }
            } else if (3 === b && c2.stateNode.current.memoizedState.isDehydrated) {
              a2.blockedOn = 3 === c2.tag ? c2.stateNode.containerInfo : null;
              return;
            }
          }
        }
        a2.blockedOn = null;
      }
      function Xc(a2) {
        if (null !== a2.blockedOn)
          return false;
        for (var b = a2.targetContainers; 0 < b.length; ) {
          var c2 = Yc(a2.domEventName, a2.eventSystemFlags, b[0], a2.nativeEvent);
          if (null === c2) {
            c2 = a2.nativeEvent;
            var d = new c2.constructor(c2.type, c2);
            wb = d;
            c2.target.dispatchEvent(d);
            wb = null;
          } else
            return b = Cb(c2), null !== b && Fc(b), a2.blockedOn = c2, false;
          b.shift();
        }
        return true;
      }
      function Zc(a2, b, c2) {
        Xc(a2) && c2.delete(b);
      }
      function $c() {
        Jc = false;
        null !== Lc && Xc(Lc) && (Lc = null);
        null !== Mc && Xc(Mc) && (Mc = null);
        null !== Nc && Xc(Nc) && (Nc = null);
        Oc.forEach(Zc);
        Pc.forEach(Zc);
      }
      function ad(a2, b) {
        a2.blockedOn === b && (a2.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
      }
      function bd(a2) {
        function b(b2) {
          return ad(b2, a2);
        }
        if (0 < Kc.length) {
          ad(Kc[0], a2);
          for (var c2 = 1; c2 < Kc.length; c2++) {
            var d = Kc[c2];
            d.blockedOn === a2 && (d.blockedOn = null);
          }
        }
        null !== Lc && ad(Lc, a2);
        null !== Mc && ad(Mc, a2);
        null !== Nc && ad(Nc, a2);
        Oc.forEach(b);
        Pc.forEach(b);
        for (c2 = 0; c2 < Qc.length; c2++)
          d = Qc[c2], d.blockedOn === a2 && (d.blockedOn = null);
        for (; 0 < Qc.length && (c2 = Qc[0], null === c2.blockedOn); )
          Vc(c2), null === c2.blockedOn && Qc.shift();
      }
      var cd = ua.ReactCurrentBatchConfig;
      var dd = true;
      function ed(a2, b, c2, d) {
        var e = C2, f2 = cd.transition;
        cd.transition = null;
        try {
          C2 = 1, fd(a2, b, c2, d);
        } finally {
          C2 = e, cd.transition = f2;
        }
      }
      function gd(a2, b, c2, d) {
        var e = C2, f2 = cd.transition;
        cd.transition = null;
        try {
          C2 = 4, fd(a2, b, c2, d);
        } finally {
          C2 = e, cd.transition = f2;
        }
      }
      function fd(a2, b, c2, d) {
        if (dd) {
          var e = Yc(a2, b, c2, d);
          if (null === e)
            hd(a2, b, d, id, c2), Sc(a2, d);
          else if (Uc(e, a2, b, c2, d))
            d.stopPropagation();
          else if (Sc(a2, d), b & 4 && -1 < Rc.indexOf(a2)) {
            for (; null !== e; ) {
              var f2 = Cb(e);
              null !== f2 && Ec(f2);
              f2 = Yc(a2, b, c2, d);
              null === f2 && hd(a2, b, d, id, c2);
              if (f2 === e)
                break;
              e = f2;
            }
            null !== e && d.stopPropagation();
          } else
            hd(a2, b, d, null, c2);
        }
      }
      var id = null;
      function Yc(a2, b, c2, d) {
        id = null;
        a2 = xb(d);
        a2 = Wc(a2);
        if (null !== a2)
          if (b = Vb(a2), null === b)
            a2 = null;
          else if (c2 = b.tag, 13 === c2) {
            a2 = Wb(b);
            if (null !== a2)
              return a2;
            a2 = null;
          } else if (3 === c2) {
            if (b.stateNode.current.memoizedState.isDehydrated)
              return 3 === b.tag ? b.stateNode.containerInfo : null;
            a2 = null;
          } else
            b !== a2 && (a2 = null);
        id = a2;
        return null;
      }
      function jd(a2) {
        switch (a2) {
          case "cancel":
          case "click":
          case "close":
          case "contextmenu":
          case "copy":
          case "cut":
          case "auxclick":
          case "dblclick":
          case "dragend":
          case "dragstart":
          case "drop":
          case "focusin":
          case "focusout":
          case "input":
          case "invalid":
          case "keydown":
          case "keypress":
          case "keyup":
          case "mousedown":
          case "mouseup":
          case "paste":
          case "pause":
          case "play":
          case "pointercancel":
          case "pointerdown":
          case "pointerup":
          case "ratechange":
          case "reset":
          case "resize":
          case "seeked":
          case "submit":
          case "touchcancel":
          case "touchend":
          case "touchstart":
          case "volumechange":
          case "change":
          case "selectionchange":
          case "textInput":
          case "compositionstart":
          case "compositionend":
          case "compositionupdate":
          case "beforeblur":
          case "afterblur":
          case "beforeinput":
          case "blur":
          case "fullscreenchange":
          case "focus":
          case "hashchange":
          case "popstate":
          case "select":
          case "selectstart":
            return 1;
          case "drag":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "mousemove":
          case "mouseout":
          case "mouseover":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "scroll":
          case "toggle":
          case "touchmove":
          case "wheel":
          case "mouseenter":
          case "mouseleave":
          case "pointerenter":
          case "pointerleave":
            return 4;
          case "message":
            switch (ec()) {
              case fc:
                return 1;
              case gc:
                return 4;
              case hc:
              case ic:
                return 16;
              case jc:
                return 536870912;
              default:
                return 16;
            }
          default:
            return 16;
        }
      }
      var kd = null;
      var ld = null;
      var md = null;
      function nd() {
        if (md)
          return md;
        var a2, b = ld, c2 = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f2 = e.length;
        for (a2 = 0; a2 < c2 && b[a2] === e[a2]; a2++)
          ;
        var g2 = c2 - a2;
        for (d = 1; d <= g2 && b[c2 - d] === e[f2 - d]; d++)
          ;
        return md = e.slice(a2, 1 < d ? 1 - d : void 0);
      }
      function od(a2) {
        var b = a2.keyCode;
        "charCode" in a2 ? (a2 = a2.charCode, 0 === a2 && 13 === b && (a2 = 13)) : a2 = b;
        10 === a2 && (a2 = 13);
        return 32 <= a2 || 13 === a2 ? a2 : 0;
      }
      function pd() {
        return true;
      }
      function qd() {
        return false;
      }
      function rd(a2) {
        function b(b2, d, e, f2, g2) {
          this._reactName = b2;
          this._targetInst = e;
          this.type = d;
          this.nativeEvent = f2;
          this.target = g2;
          this.currentTarget = null;
          for (var c2 in a2)
            a2.hasOwnProperty(c2) && (b2 = a2[c2], this[c2] = b2 ? b2(f2) : f2[c2]);
          this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd : qd;
          this.isPropagationStopped = qd;
          return this;
        }
        A2(b.prototype, { preventDefault: function() {
          this.defaultPrevented = true;
          var a3 = this.nativeEvent;
          a3 && (a3.preventDefault ? a3.preventDefault() : "unknown" !== typeof a3.returnValue && (a3.returnValue = false), this.isDefaultPrevented = pd);
        }, stopPropagation: function() {
          var a3 = this.nativeEvent;
          a3 && (a3.stopPropagation ? a3.stopPropagation() : "unknown" !== typeof a3.cancelBubble && (a3.cancelBubble = true), this.isPropagationStopped = pd);
        }, persist: function() {
        }, isPersistent: pd });
        return b;
      }
      var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a2) {
        return a2.timeStamp || Date.now();
      }, defaultPrevented: 0, isTrusted: 0 };
      var td = rd(sd);
      var ud = A2({}, sd, { view: 0, detail: 0 });
      var vd = rd(ud);
      var wd;
      var xd;
      var yd;
      var Ad = A2({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a2) {
        return void 0 === a2.relatedTarget ? a2.fromElement === a2.srcElement ? a2.toElement : a2.fromElement : a2.relatedTarget;
      }, movementX: function(a2) {
        if ("movementX" in a2)
          return a2.movementX;
        a2 !== yd && (yd && "mousemove" === a2.type ? (wd = a2.screenX - yd.screenX, xd = a2.screenY - yd.screenY) : xd = wd = 0, yd = a2);
        return wd;
      }, movementY: function(a2) {
        return "movementY" in a2 ? a2.movementY : xd;
      } });
      var Bd = rd(Ad);
      var Cd = A2({}, Ad, { dataTransfer: 0 });
      var Dd = rd(Cd);
      var Ed = A2({}, ud, { relatedTarget: 0 });
      var Fd = rd(Ed);
      var Gd = A2({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 });
      var Hd = rd(Gd);
      var Id = A2({}, sd, { clipboardData: function(a2) {
        return "clipboardData" in a2 ? a2.clipboardData : window.clipboardData;
      } });
      var Jd = rd(Id);
      var Kd = A2({}, sd, { data: 0 });
      var Ld = rd(Kd);
      var Md = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
      };
      var Nd = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
      };
      var Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
      function Pd(a2) {
        var b = this.nativeEvent;
        return b.getModifierState ? b.getModifierState(a2) : (a2 = Od[a2]) ? !!b[a2] : false;
      }
      function zd() {
        return Pd;
      }
      var Qd = A2({}, ud, { key: function(a2) {
        if (a2.key) {
          var b = Md[a2.key] || a2.key;
          if ("Unidentified" !== b)
            return b;
        }
        return "keypress" === a2.type ? (a2 = od(a2), 13 === a2 ? "Enter" : String.fromCharCode(a2)) : "keydown" === a2.type || "keyup" === a2.type ? Nd[a2.keyCode] || "Unidentified" : "";
      }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a2) {
        return "keypress" === a2.type ? od(a2) : 0;
      }, keyCode: function(a2) {
        return "keydown" === a2.type || "keyup" === a2.type ? a2.keyCode : 0;
      }, which: function(a2) {
        return "keypress" === a2.type ? od(a2) : "keydown" === a2.type || "keyup" === a2.type ? a2.keyCode : 0;
      } });
      var Rd = rd(Qd);
      var Sd = A2({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 });
      var Td = rd(Sd);
      var Ud = A2({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd });
      var Vd = rd(Ud);
      var Wd = A2({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 });
      var Xd = rd(Wd);
      var Yd = A2({}, Ad, {
        deltaX: function(a2) {
          return "deltaX" in a2 ? a2.deltaX : "wheelDeltaX" in a2 ? -a2.wheelDeltaX : 0;
        },
        deltaY: function(a2) {
          return "deltaY" in a2 ? a2.deltaY : "wheelDeltaY" in a2 ? -a2.wheelDeltaY : "wheelDelta" in a2 ? -a2.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0
      });
      var Zd = rd(Yd);
      var $d = [9, 13, 27, 32];
      var ae = ia && "CompositionEvent" in window;
      var be2 = null;
      ia && "documentMode" in document && (be2 = document.documentMode);
      var ce2 = ia && "TextEvent" in window && !be2;
      var de2 = ia && (!ae || be2 && 8 < be2 && 11 >= be2);
      var ee2 = String.fromCharCode(32);
      var fe2 = false;
      function ge2(a2, b) {
        switch (a2) {
          case "keyup":
            return -1 !== $d.indexOf(b.keyCode);
          case "keydown":
            return 229 !== b.keyCode;
          case "keypress":
          case "mousedown":
          case "focusout":
            return true;
          default:
            return false;
        }
      }
      function he2(a2) {
        a2 = a2.detail;
        return "object" === typeof a2 && "data" in a2 ? a2.data : null;
      }
      var ie = false;
      function je2(a2, b) {
        switch (a2) {
          case "compositionend":
            return he2(b);
          case "keypress":
            if (32 !== b.which)
              return null;
            fe2 = true;
            return ee2;
          case "textInput":
            return a2 = b.data, a2 === ee2 && fe2 ? null : a2;
          default:
            return null;
        }
      }
      function ke2(a2, b) {
        if (ie)
          return "compositionend" === a2 || !ae && ge2(a2, b) ? (a2 = nd(), md = ld = kd = null, ie = false, a2) : null;
        switch (a2) {
          case "paste":
            return null;
          case "keypress":
            if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
              if (b.char && 1 < b.char.length)
                return b.char;
              if (b.which)
                return String.fromCharCode(b.which);
            }
            return null;
          case "compositionend":
            return de2 && "ko" !== b.locale ? null : b.data;
          default:
            return null;
        }
      }
      var le2 = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
      function me2(a2) {
        var b = a2 && a2.nodeName && a2.nodeName.toLowerCase();
        return "input" === b ? !!le2[a2.type] : "textarea" === b ? true : false;
      }
      function ne2(a2, b, c2, d) {
        Eb(d);
        b = oe2(b, "onChange");
        0 < b.length && (c2 = new td("onChange", "change", null, c2, d), a2.push({ event: c2, listeners: b }));
      }
      var pe2 = null;
      var qe2 = null;
      function re2(a2) {
        se2(a2, 0);
      }
      function te2(a2) {
        var b = ue2(a2);
        if (Wa(b))
          return a2;
      }
      function ve2(a2, b) {
        if ("change" === a2)
          return b;
      }
      var we2 = false;
      if (ia) {
        if (ia) {
          ye2 = "oninput" in document;
          if (!ye2) {
            ze2 = document.createElement("div");
            ze2.setAttribute("oninput", "return;");
            ye2 = "function" === typeof ze2.oninput;
          }
          xe2 = ye2;
        } else
          xe2 = false;
        we2 = xe2 && (!document.documentMode || 9 < document.documentMode);
      }
      var xe2;
      var ye2;
      var ze2;
      function Ae2() {
        pe2 && (pe2.detachEvent("onpropertychange", Be2), qe2 = pe2 = null);
      }
      function Be2(a2) {
        if ("value" === a2.propertyName && te2(qe2)) {
          var b = [];
          ne2(b, qe2, a2, xb(a2));
          Jb(re2, b);
        }
      }
      function Ce2(a2, b, c2) {
        "focusin" === a2 ? (Ae2(), pe2 = b, qe2 = c2, pe2.attachEvent("onpropertychange", Be2)) : "focusout" === a2 && Ae2();
      }
      function De2(a2) {
        if ("selectionchange" === a2 || "keyup" === a2 || "keydown" === a2)
          return te2(qe2);
      }
      function Ee2(a2, b) {
        if ("click" === a2)
          return te2(b);
      }
      function Fe2(a2, b) {
        if ("input" === a2 || "change" === a2)
          return te2(b);
      }
      function Ge2(a2, b) {
        return a2 === b && (0 !== a2 || 1 / a2 === 1 / b) || a2 !== a2 && b !== b;
      }
      var He2 = "function" === typeof Object.is ? Object.is : Ge2;
      function Ie2(a2, b) {
        if (He2(a2, b))
          return true;
        if ("object" !== typeof a2 || null === a2 || "object" !== typeof b || null === b)
          return false;
        var c2 = Object.keys(a2), d = Object.keys(b);
        if (c2.length !== d.length)
          return false;
        for (d = 0; d < c2.length; d++) {
          var e = c2[d];
          if (!ja.call(b, e) || !He2(a2[e], b[e]))
            return false;
        }
        return true;
      }
      function Je(a2) {
        for (; a2 && a2.firstChild; )
          a2 = a2.firstChild;
        return a2;
      }
      function Ke(a2, b) {
        var c2 = Je(a2);
        a2 = 0;
        for (var d; c2; ) {
          if (3 === c2.nodeType) {
            d = a2 + c2.textContent.length;
            if (a2 <= b && d >= b)
              return { node: c2, offset: b - a2 };
            a2 = d;
          }
          a: {
            for (; c2; ) {
              if (c2.nextSibling) {
                c2 = c2.nextSibling;
                break a;
              }
              c2 = c2.parentNode;
            }
            c2 = void 0;
          }
          c2 = Je(c2);
        }
      }
      function Le2(a2, b) {
        return a2 && b ? a2 === b ? true : a2 && 3 === a2.nodeType ? false : b && 3 === b.nodeType ? Le2(a2, b.parentNode) : "contains" in a2 ? a2.contains(b) : a2.compareDocumentPosition ? !!(a2.compareDocumentPosition(b) & 16) : false : false;
      }
      function Me2() {
        for (var a2 = window, b = Xa(); b instanceof a2.HTMLIFrameElement; ) {
          try {
            var c2 = "string" === typeof b.contentWindow.location.href;
          } catch (d) {
            c2 = false;
          }
          if (c2)
            a2 = b.contentWindow;
          else
            break;
          b = Xa(a2.document);
        }
        return b;
      }
      function Ne2(a2) {
        var b = a2 && a2.nodeName && a2.nodeName.toLowerCase();
        return b && ("input" === b && ("text" === a2.type || "search" === a2.type || "tel" === a2.type || "url" === a2.type || "password" === a2.type) || "textarea" === b || "true" === a2.contentEditable);
      }
      function Oe2(a2) {
        var b = Me2(), c2 = a2.focusedElem, d = a2.selectionRange;
        if (b !== c2 && c2 && c2.ownerDocument && Le2(c2.ownerDocument.documentElement, c2)) {
          if (null !== d && Ne2(c2)) {
            if (b = d.start, a2 = d.end, void 0 === a2 && (a2 = b), "selectionStart" in c2)
              c2.selectionStart = b, c2.selectionEnd = Math.min(a2, c2.value.length);
            else if (a2 = (b = c2.ownerDocument || document) && b.defaultView || window, a2.getSelection) {
              a2 = a2.getSelection();
              var e = c2.textContent.length, f2 = Math.min(d.start, e);
              d = void 0 === d.end ? f2 : Math.min(d.end, e);
              !a2.extend && f2 > d && (e = d, d = f2, f2 = e);
              e = Ke(c2, f2);
              var g2 = Ke(
                c2,
                d
              );
              e && g2 && (1 !== a2.rangeCount || a2.anchorNode !== e.node || a2.anchorOffset !== e.offset || a2.focusNode !== g2.node || a2.focusOffset !== g2.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a2.removeAllRanges(), f2 > d ? (a2.addRange(b), a2.extend(g2.node, g2.offset)) : (b.setEnd(g2.node, g2.offset), a2.addRange(b)));
            }
          }
          b = [];
          for (a2 = c2; a2 = a2.parentNode; )
            1 === a2.nodeType && b.push({ element: a2, left: a2.scrollLeft, top: a2.scrollTop });
          "function" === typeof c2.focus && c2.focus();
          for (c2 = 0; c2 < b.length; c2++)
            a2 = b[c2], a2.element.scrollLeft = a2.left, a2.element.scrollTop = a2.top;
        }
      }
      var Pe2 = ia && "documentMode" in document && 11 >= document.documentMode;
      var Qe2 = null;
      var Re2 = null;
      var Se2 = null;
      var Te2 = false;
      function Ue2(a2, b, c2) {
        var d = c2.window === c2 ? c2.document : 9 === c2.nodeType ? c2 : c2.ownerDocument;
        Te2 || null == Qe2 || Qe2 !== Xa(d) || (d = Qe2, "selectionStart" in d && Ne2(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se2 && Ie2(Se2, d) || (Se2 = d, d = oe2(Re2, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c2), a2.push({ event: b, listeners: d }), b.target = Qe2)));
      }
      function Ve2(a2, b) {
        var c2 = {};
        c2[a2.toLowerCase()] = b.toLowerCase();
        c2["Webkit" + a2] = "webkit" + b;
        c2["Moz" + a2] = "moz" + b;
        return c2;
      }
      var We2 = { animationend: Ve2("Animation", "AnimationEnd"), animationiteration: Ve2("Animation", "AnimationIteration"), animationstart: Ve2("Animation", "AnimationStart"), transitionend: Ve2("Transition", "TransitionEnd") };
      var Xe = {};
      var Ye2 = {};
      ia && (Ye2 = document.createElement("div").style, "AnimationEvent" in window || (delete We2.animationend.animation, delete We2.animationiteration.animation, delete We2.animationstart.animation), "TransitionEvent" in window || delete We2.transitionend.transition);
      function Ze2(a2) {
        if (Xe[a2])
          return Xe[a2];
        if (!We2[a2])
          return a2;
        var b = We2[a2], c2;
        for (c2 in b)
          if (b.hasOwnProperty(c2) && c2 in Ye2)
            return Xe[a2] = b[c2];
        return a2;
      }
      var $e2 = Ze2("animationend");
      var af = Ze2("animationiteration");
      var bf = Ze2("animationstart");
      var cf = Ze2("transitionend");
      var df = /* @__PURE__ */ new Map();
      var ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
      function ff(a2, b) {
        df.set(a2, b);
        fa(b, [a2]);
      }
      for (gf = 0; gf < ef.length; gf++) {
        hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
        ff(jf, "on" + kf);
      }
      var hf;
      var jf;
      var kf;
      var gf;
      ff($e2, "onAnimationEnd");
      ff(af, "onAnimationIteration");
      ff(bf, "onAnimationStart");
      ff("dblclick", "onDoubleClick");
      ff("focusin", "onFocus");
      ff("focusout", "onBlur");
      ff(cf, "onTransitionEnd");
      ha("onMouseEnter", ["mouseout", "mouseover"]);
      ha("onMouseLeave", ["mouseout", "mouseover"]);
      ha("onPointerEnter", ["pointerout", "pointerover"]);
      ha("onPointerLeave", ["pointerout", "pointerover"]);
      fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
      fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
      fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
      fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
      fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
      fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
      var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
      var mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
      function nf(a2, b, c2) {
        var d = a2.type || "unknown-event";
        a2.currentTarget = c2;
        Ub(d, b, void 0, a2);
        a2.currentTarget = null;
      }
      function se2(a2, b) {
        b = 0 !== (b & 4);
        for (var c2 = 0; c2 < a2.length; c2++) {
          var d = a2[c2], e = d.event;
          d = d.listeners;
          a: {
            var f2 = void 0;
            if (b)
              for (var g2 = d.length - 1; 0 <= g2; g2--) {
                var h = d[g2], k2 = h.instance, l2 = h.currentTarget;
                h = h.listener;
                if (k2 !== f2 && e.isPropagationStopped())
                  break a;
                nf(e, h, l2);
                f2 = k2;
              }
            else
              for (g2 = 0; g2 < d.length; g2++) {
                h = d[g2];
                k2 = h.instance;
                l2 = h.currentTarget;
                h = h.listener;
                if (k2 !== f2 && e.isPropagationStopped())
                  break a;
                nf(e, h, l2);
                f2 = k2;
              }
          }
        }
        if (Qb)
          throw a2 = Rb, Qb = false, Rb = null, a2;
      }
      function D2(a2, b) {
        var c2 = b[of];
        void 0 === c2 && (c2 = b[of] = /* @__PURE__ */ new Set());
        var d = a2 + "__bubble";
        c2.has(d) || (pf(b, a2, 2, false), c2.add(d));
      }
      function qf(a2, b, c2) {
        var d = 0;
        b && (d |= 4);
        pf(c2, a2, d, b);
      }
      var rf = "_reactListening" + Math.random().toString(36).slice(2);
      function sf(a2) {
        if (!a2[rf]) {
          a2[rf] = true;
          da.forEach(function(b2) {
            "selectionchange" !== b2 && (mf.has(b2) || qf(b2, false, a2), qf(b2, true, a2));
          });
          var b = 9 === a2.nodeType ? a2 : a2.ownerDocument;
          null === b || b[rf] || (b[rf] = true, qf("selectionchange", false, b));
        }
      }
      function pf(a2, b, c2, d) {
        switch (jd(b)) {
          case 1:
            var e = ed;
            break;
          case 4:
            e = gd;
            break;
          default:
            e = fd;
        }
        c2 = e.bind(null, b, c2, a2);
        e = void 0;
        !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = true);
        d ? void 0 !== e ? a2.addEventListener(b, c2, { capture: true, passive: e }) : a2.addEventListener(b, c2, true) : void 0 !== e ? a2.addEventListener(b, c2, { passive: e }) : a2.addEventListener(b, c2, false);
      }
      function hd(a2, b, c2, d, e) {
        var f2 = d;
        if (0 === (b & 1) && 0 === (b & 2) && null !== d)
          a:
            for (; ; ) {
              if (null === d)
                return;
              var g2 = d.tag;
              if (3 === g2 || 4 === g2) {
                var h = d.stateNode.containerInfo;
                if (h === e || 8 === h.nodeType && h.parentNode === e)
                  break;
                if (4 === g2)
                  for (g2 = d.return; null !== g2; ) {
                    var k2 = g2.tag;
                    if (3 === k2 || 4 === k2) {
                      if (k2 = g2.stateNode.containerInfo, k2 === e || 8 === k2.nodeType && k2.parentNode === e)
                        return;
                    }
                    g2 = g2.return;
                  }
                for (; null !== h; ) {
                  g2 = Wc(h);
                  if (null === g2)
                    return;
                  k2 = g2.tag;
                  if (5 === k2 || 6 === k2) {
                    d = f2 = g2;
                    continue a;
                  }
                  h = h.parentNode;
                }
              }
              d = d.return;
            }
        Jb(function() {
          var d2 = f2, e2 = xb(c2), g3 = [];
          a: {
            var h2 = df.get(a2);
            if (void 0 !== h2) {
              var k3 = td, n = a2;
              switch (a2) {
                case "keypress":
                  if (0 === od(c2))
                    break a;
                case "keydown":
                case "keyup":
                  k3 = Rd;
                  break;
                case "focusin":
                  n = "focus";
                  k3 = Fd;
                  break;
                case "focusout":
                  n = "blur";
                  k3 = Fd;
                  break;
                case "beforeblur":
                case "afterblur":
                  k3 = Fd;
                  break;
                case "click":
                  if (2 === c2.button)
                    break a;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                  k3 = Bd;
                  break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                  k3 = Dd;
                  break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                  k3 = Vd;
                  break;
                case $e2:
                case af:
                case bf:
                  k3 = Hd;
                  break;
                case cf:
                  k3 = Xd;
                  break;
                case "scroll":
                  k3 = vd;
                  break;
                case "wheel":
                  k3 = Zd;
                  break;
                case "copy":
                case "cut":
                case "paste":
                  k3 = Jd;
                  break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                  k3 = Td;
              }
              var t = 0 !== (b & 4), J2 = !t && "scroll" === a2, x2 = t ? null !== h2 ? h2 + "Capture" : null : h2;
              t = [];
              for (var w = d2, u2; null !== w; ) {
                u2 = w;
                var F2 = u2.stateNode;
                5 === u2.tag && null !== F2 && (u2 = F2, null !== x2 && (F2 = Kb(w, x2), null != F2 && t.push(tf(w, F2, u2))));
                if (J2)
                  break;
                w = w.return;
              }
              0 < t.length && (h2 = new k3(h2, n, null, c2, e2), g3.push({ event: h2, listeners: t }));
            }
          }
          if (0 === (b & 7)) {
            a: {
              h2 = "mouseover" === a2 || "pointerover" === a2;
              k3 = "mouseout" === a2 || "pointerout" === a2;
              if (h2 && c2 !== wb && (n = c2.relatedTarget || c2.fromElement) && (Wc(n) || n[uf]))
                break a;
              if (k3 || h2) {
                h2 = e2.window === e2 ? e2 : (h2 = e2.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
                if (k3) {
                  if (n = c2.relatedTarget || c2.toElement, k3 = d2, n = n ? Wc(n) : null, null !== n && (J2 = Vb(n), n !== J2 || 5 !== n.tag && 6 !== n.tag))
                    n = null;
                } else
                  k3 = null, n = d2;
                if (k3 !== n) {
                  t = Bd;
                  F2 = "onMouseLeave";
                  x2 = "onMouseEnter";
                  w = "mouse";
                  if ("pointerout" === a2 || "pointerover" === a2)
                    t = Td, F2 = "onPointerLeave", x2 = "onPointerEnter", w = "pointer";
                  J2 = null == k3 ? h2 : ue2(k3);
                  u2 = null == n ? h2 : ue2(n);
                  h2 = new t(F2, w + "leave", k3, c2, e2);
                  h2.target = J2;
                  h2.relatedTarget = u2;
                  F2 = null;
                  Wc(e2) === d2 && (t = new t(x2, w + "enter", n, c2, e2), t.target = u2, t.relatedTarget = J2, F2 = t);
                  J2 = F2;
                  if (k3 && n)
                    b: {
                      t = k3;
                      x2 = n;
                      w = 0;
                      for (u2 = t; u2; u2 = vf(u2))
                        w++;
                      u2 = 0;
                      for (F2 = x2; F2; F2 = vf(F2))
                        u2++;
                      for (; 0 < w - u2; )
                        t = vf(t), w--;
                      for (; 0 < u2 - w; )
                        x2 = vf(x2), u2--;
                      for (; w--; ) {
                        if (t === x2 || null !== x2 && t === x2.alternate)
                          break b;
                        t = vf(t);
                        x2 = vf(x2);
                      }
                      t = null;
                    }
                  else
                    t = null;
                  null !== k3 && wf(g3, h2, k3, t, false);
                  null !== n && null !== J2 && wf(g3, J2, n, t, true);
                }
              }
            }
            a: {
              h2 = d2 ? ue2(d2) : window;
              k3 = h2.nodeName && h2.nodeName.toLowerCase();
              if ("select" === k3 || "input" === k3 && "file" === h2.type)
                var na = ve2;
              else if (me2(h2))
                if (we2)
                  na = Fe2;
                else {
                  na = De2;
                  var xa = Ce2;
                }
              else
                (k3 = h2.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h2.type || "radio" === h2.type) && (na = Ee2);
              if (na && (na = na(a2, d2))) {
                ne2(g3, na, c2, e2);
                break a;
              }
              xa && xa(a2, h2, d2);
              "focusout" === a2 && (xa = h2._wrapperState) && xa.controlled && "number" === h2.type && cb(h2, "number", h2.value);
            }
            xa = d2 ? ue2(d2) : window;
            switch (a2) {
              case "focusin":
                if (me2(xa) || "true" === xa.contentEditable)
                  Qe2 = xa, Re2 = d2, Se2 = null;
                break;
              case "focusout":
                Se2 = Re2 = Qe2 = null;
                break;
              case "mousedown":
                Te2 = true;
                break;
              case "contextmenu":
              case "mouseup":
              case "dragend":
                Te2 = false;
                Ue2(g3, c2, e2);
                break;
              case "selectionchange":
                if (Pe2)
                  break;
              case "keydown":
              case "keyup":
                Ue2(g3, c2, e2);
            }
            var $a;
            if (ae)
              b: {
                switch (a2) {
                  case "compositionstart":
                    var ba = "onCompositionStart";
                    break b;
                  case "compositionend":
                    ba = "onCompositionEnd";
                    break b;
                  case "compositionupdate":
                    ba = "onCompositionUpdate";
                    break b;
                }
                ba = void 0;
              }
            else
              ie ? ge2(a2, c2) && (ba = "onCompositionEnd") : "keydown" === a2 && 229 === c2.keyCode && (ba = "onCompositionStart");
            ba && (de2 && "ko" !== c2.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe2(d2, ba), 0 < xa.length && (ba = new Ld(ba, a2, null, c2, e2), g3.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he2(c2), null !== $a && (ba.data = $a))));
            if ($a = ce2 ? je2(a2, c2) : ke2(a2, c2))
              d2 = oe2(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c2, e2), g3.push({ event: e2, listeners: d2 }), e2.data = $a);
          }
          se2(g3, b);
        });
      }
      function tf(a2, b, c2) {
        return { instance: a2, listener: b, currentTarget: c2 };
      }
      function oe2(a2, b) {
        for (var c2 = b + "Capture", d = []; null !== a2; ) {
          var e = a2, f2 = e.stateNode;
          5 === e.tag && null !== f2 && (e = f2, f2 = Kb(a2, c2), null != f2 && d.unshift(tf(a2, f2, e)), f2 = Kb(a2, b), null != f2 && d.push(tf(a2, f2, e)));
          a2 = a2.return;
        }
        return d;
      }
      function vf(a2) {
        if (null === a2)
          return null;
        do
          a2 = a2.return;
        while (a2 && 5 !== a2.tag);
        return a2 ? a2 : null;
      }
      function wf(a2, b, c2, d, e) {
        for (var f2 = b._reactName, g2 = []; null !== c2 && c2 !== d; ) {
          var h = c2, k2 = h.alternate, l2 = h.stateNode;
          if (null !== k2 && k2 === d)
            break;
          5 === h.tag && null !== l2 && (h = l2, e ? (k2 = Kb(c2, f2), null != k2 && g2.unshift(tf(c2, k2, h))) : e || (k2 = Kb(c2, f2), null != k2 && g2.push(tf(c2, k2, h))));
          c2 = c2.return;
        }
        0 !== g2.length && a2.push({ event: b, listeners: g2 });
      }
      var xf = /\r\n?/g;
      var yf = /\u0000|\uFFFD/g;
      function zf(a2) {
        return ("string" === typeof a2 ? a2 : "" + a2).replace(xf, "\n").replace(yf, "");
      }
      function Af(a2, b, c2) {
        b = zf(b);
        if (zf(a2) !== b && c2)
          throw Error(p2(425));
      }
      function Bf() {
      }
      var Cf = null;
      var Df = null;
      function Ef(a2, b) {
        return "textarea" === a2 || "noscript" === a2 || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
      }
      var Ff = "function" === typeof setTimeout ? setTimeout : void 0;
      var Gf = "function" === typeof clearTimeout ? clearTimeout : void 0;
      var Hf = "function" === typeof Promise ? Promise : void 0;
      var Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a2) {
        return Hf.resolve(null).then(a2).catch(If);
      } : Ff;
      function If(a2) {
        setTimeout(function() {
          throw a2;
        });
      }
      function Kf(a2, b) {
        var c2 = b, d = 0;
        do {
          var e = c2.nextSibling;
          a2.removeChild(c2);
          if (e && 8 === e.nodeType)
            if (c2 = e.data, "/$" === c2) {
              if (0 === d) {
                a2.removeChild(e);
                bd(b);
                return;
              }
              d--;
            } else
              "$" !== c2 && "$?" !== c2 && "$!" !== c2 || d++;
          c2 = e;
        } while (c2);
        bd(b);
      }
      function Lf(a2) {
        for (; null != a2; a2 = a2.nextSibling) {
          var b = a2.nodeType;
          if (1 === b || 3 === b)
            break;
          if (8 === b) {
            b = a2.data;
            if ("$" === b || "$!" === b || "$?" === b)
              break;
            if ("/$" === b)
              return null;
          }
        }
        return a2;
      }
      function Mf(a2) {
        a2 = a2.previousSibling;
        for (var b = 0; a2; ) {
          if (8 === a2.nodeType) {
            var c2 = a2.data;
            if ("$" === c2 || "$!" === c2 || "$?" === c2) {
              if (0 === b)
                return a2;
              b--;
            } else
              "/$" === c2 && b++;
          }
          a2 = a2.previousSibling;
        }
        return null;
      }
      var Nf = Math.random().toString(36).slice(2);
      var Of = "__reactFiber$" + Nf;
      var Pf = "__reactProps$" + Nf;
      var uf = "__reactContainer$" + Nf;
      var of = "__reactEvents$" + Nf;
      var Qf = "__reactListeners$" + Nf;
      var Rf = "__reactHandles$" + Nf;
      function Wc(a2) {
        var b = a2[Of];
        if (b)
          return b;
        for (var c2 = a2.parentNode; c2; ) {
          if (b = c2[uf] || c2[Of]) {
            c2 = b.alternate;
            if (null !== b.child || null !== c2 && null !== c2.child)
              for (a2 = Mf(a2); null !== a2; ) {
                if (c2 = a2[Of])
                  return c2;
                a2 = Mf(a2);
              }
            return b;
          }
          a2 = c2;
          c2 = a2.parentNode;
        }
        return null;
      }
      function Cb(a2) {
        a2 = a2[Of] || a2[uf];
        return !a2 || 5 !== a2.tag && 6 !== a2.tag && 13 !== a2.tag && 3 !== a2.tag ? null : a2;
      }
      function ue2(a2) {
        if (5 === a2.tag || 6 === a2.tag)
          return a2.stateNode;
        throw Error(p2(33));
      }
      function Db(a2) {
        return a2[Pf] || null;
      }
      var Sf = [];
      var Tf = -1;
      function Uf(a2) {
        return { current: a2 };
      }
      function E2(a2) {
        0 > Tf || (a2.current = Sf[Tf], Sf[Tf] = null, Tf--);
      }
      function G2(a2, b) {
        Tf++;
        Sf[Tf] = a2.current;
        a2.current = b;
      }
      var Vf = {};
      var H2 = Uf(Vf);
      var Wf = Uf(false);
      var Xf = Vf;
      function Yf(a2, b) {
        var c2 = a2.type.contextTypes;
        if (!c2)
          return Vf;
        var d = a2.stateNode;
        if (d && d.__reactInternalMemoizedUnmaskedChildContext === b)
          return d.__reactInternalMemoizedMaskedChildContext;
        var e = {}, f2;
        for (f2 in c2)
          e[f2] = b[f2];
        d && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = b, a2.__reactInternalMemoizedMaskedChildContext = e);
        return e;
      }
      function Zf(a2) {
        a2 = a2.childContextTypes;
        return null !== a2 && void 0 !== a2;
      }
      function $f() {
        E2(Wf);
        E2(H2);
      }
      function ag(a2, b, c2) {
        if (H2.current !== Vf)
          throw Error(p2(168));
        G2(H2, b);
        G2(Wf, c2);
      }
      function bg(a2, b, c2) {
        var d = a2.stateNode;
        b = b.childContextTypes;
        if ("function" !== typeof d.getChildContext)
          return c2;
        d = d.getChildContext();
        for (var e in d)
          if (!(e in b))
            throw Error(p2(108, Ra(a2) || "Unknown", e));
        return A2({}, c2, d);
      }
      function cg(a2) {
        a2 = (a2 = a2.stateNode) && a2.__reactInternalMemoizedMergedChildContext || Vf;
        Xf = H2.current;
        G2(H2, a2);
        G2(Wf, Wf.current);
        return true;
      }
      function dg(a2, b, c2) {
        var d = a2.stateNode;
        if (!d)
          throw Error(p2(169));
        c2 ? (a2 = bg(a2, b, Xf), d.__reactInternalMemoizedMergedChildContext = a2, E2(Wf), E2(H2), G2(H2, a2)) : E2(Wf);
        G2(Wf, c2);
      }
      var eg = null;
      var fg = false;
      var gg = false;
      function hg(a2) {
        null === eg ? eg = [a2] : eg.push(a2);
      }
      function ig(a2) {
        fg = true;
        hg(a2);
      }
      function jg() {
        if (!gg && null !== eg) {
          gg = true;
          var a2 = 0, b = C2;
          try {
            var c2 = eg;
            for (C2 = 1; a2 < c2.length; a2++) {
              var d = c2[a2];
              do
                d = d(true);
              while (null !== d);
            }
            eg = null;
            fg = false;
          } catch (e) {
            throw null !== eg && (eg = eg.slice(a2 + 1)), ac(fc, jg), e;
          } finally {
            C2 = b, gg = false;
          }
        }
        return null;
      }
      var kg = [];
      var lg = 0;
      var mg = null;
      var ng = 0;
      var og = [];
      var pg = 0;
      var qg = null;
      var rg = 1;
      var sg = "";
      function tg(a2, b) {
        kg[lg++] = ng;
        kg[lg++] = mg;
        mg = a2;
        ng = b;
      }
      function ug(a2, b, c2) {
        og[pg++] = rg;
        og[pg++] = sg;
        og[pg++] = qg;
        qg = a2;
        var d = rg;
        a2 = sg;
        var e = 32 - oc(d) - 1;
        d &= ~(1 << e);
        c2 += 1;
        var f2 = 32 - oc(b) + e;
        if (30 < f2) {
          var g2 = e - e % 5;
          f2 = (d & (1 << g2) - 1).toString(32);
          d >>= g2;
          e -= g2;
          rg = 1 << 32 - oc(b) + e | c2 << e | d;
          sg = f2 + a2;
        } else
          rg = 1 << f2 | c2 << e | d, sg = a2;
      }
      function vg(a2) {
        null !== a2.return && (tg(a2, 1), ug(a2, 1, 0));
      }
      function wg(a2) {
        for (; a2 === mg; )
          mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
        for (; a2 === qg; )
          qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
      }
      var xg = null;
      var yg = null;
      var I2 = false;
      var zg = null;
      function Ag(a2, b) {
        var c2 = Bg(5, null, null, 0);
        c2.elementType = "DELETED";
        c2.stateNode = b;
        c2.return = a2;
        b = a2.deletions;
        null === b ? (a2.deletions = [c2], a2.flags |= 16) : b.push(c2);
      }
      function Cg(a2, b) {
        switch (a2.tag) {
          case 5:
            var c2 = a2.type;
            b = 1 !== b.nodeType || c2.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
            return null !== b ? (a2.stateNode = b, xg = a2, yg = Lf(b.firstChild), true) : false;
          case 6:
            return b = "" === a2.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a2.stateNode = b, xg = a2, yg = null, true) : false;
          case 13:
            return b = 8 !== b.nodeType ? null : b, null !== b ? (c2 = null !== qg ? { id: rg, overflow: sg } : null, a2.memoizedState = { dehydrated: b, treeContext: c2, retryLane: 1073741824 }, c2 = Bg(18, null, null, 0), c2.stateNode = b, c2.return = a2, a2.child = c2, xg = a2, yg = null, true) : false;
          default:
            return false;
        }
      }
      function Dg(a2) {
        return 0 !== (a2.mode & 1) && 0 === (a2.flags & 128);
      }
      function Eg(a2) {
        if (I2) {
          var b = yg;
          if (b) {
            var c2 = b;
            if (!Cg(a2, b)) {
              if (Dg(a2))
                throw Error(p2(418));
              b = Lf(c2.nextSibling);
              var d = xg;
              b && Cg(a2, b) ? Ag(d, c2) : (a2.flags = a2.flags & -4097 | 2, I2 = false, xg = a2);
            }
          } else {
            if (Dg(a2))
              throw Error(p2(418));
            a2.flags = a2.flags & -4097 | 2;
            I2 = false;
            xg = a2;
          }
        }
      }
      function Fg(a2) {
        for (a2 = a2.return; null !== a2 && 5 !== a2.tag && 3 !== a2.tag && 13 !== a2.tag; )
          a2 = a2.return;
        xg = a2;
      }
      function Gg(a2) {
        if (a2 !== xg)
          return false;
        if (!I2)
          return Fg(a2), I2 = true, false;
        var b;
        (b = 3 !== a2.tag) && !(b = 5 !== a2.tag) && (b = a2.type, b = "head" !== b && "body" !== b && !Ef(a2.type, a2.memoizedProps));
        if (b && (b = yg)) {
          if (Dg(a2))
            throw Hg(), Error(p2(418));
          for (; b; )
            Ag(a2, b), b = Lf(b.nextSibling);
        }
        Fg(a2);
        if (13 === a2.tag) {
          a2 = a2.memoizedState;
          a2 = null !== a2 ? a2.dehydrated : null;
          if (!a2)
            throw Error(p2(317));
          a: {
            a2 = a2.nextSibling;
            for (b = 0; a2; ) {
              if (8 === a2.nodeType) {
                var c2 = a2.data;
                if ("/$" === c2) {
                  if (0 === b) {
                    yg = Lf(a2.nextSibling);
                    break a;
                  }
                  b--;
                } else
                  "$" !== c2 && "$!" !== c2 && "$?" !== c2 || b++;
              }
              a2 = a2.nextSibling;
            }
            yg = null;
          }
        } else
          yg = xg ? Lf(a2.stateNode.nextSibling) : null;
        return true;
      }
      function Hg() {
        for (var a2 = yg; a2; )
          a2 = Lf(a2.nextSibling);
      }
      function Ig() {
        yg = xg = null;
        I2 = false;
      }
      function Jg(a2) {
        null === zg ? zg = [a2] : zg.push(a2);
      }
      var Kg = ua.ReactCurrentBatchConfig;
      function Lg(a2, b) {
        if (a2 && a2.defaultProps) {
          b = A2({}, b);
          a2 = a2.defaultProps;
          for (var c2 in a2)
            void 0 === b[c2] && (b[c2] = a2[c2]);
          return b;
        }
        return b;
      }
      var Mg = Uf(null);
      var Ng = null;
      var Og = null;
      var Pg = null;
      function Qg() {
        Pg = Og = Ng = null;
      }
      function Rg(a2) {
        var b = Mg.current;
        E2(Mg);
        a2._currentValue = b;
      }
      function Sg(a2, b, c2) {
        for (; null !== a2; ) {
          var d = a2.alternate;
          (a2.childLanes & b) !== b ? (a2.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
          if (a2 === c2)
            break;
          a2 = a2.return;
        }
      }
      function Tg(a2, b) {
        Ng = a2;
        Pg = Og = null;
        a2 = a2.dependencies;
        null !== a2 && null !== a2.firstContext && (0 !== (a2.lanes & b) && (Ug = true), a2.firstContext = null);
      }
      function Vg(a2) {
        var b = a2._currentValue;
        if (Pg !== a2)
          if (a2 = { context: a2, memoizedValue: b, next: null }, null === Og) {
            if (null === Ng)
              throw Error(p2(308));
            Og = a2;
            Ng.dependencies = { lanes: 0, firstContext: a2 };
          } else
            Og = Og.next = a2;
        return b;
      }
      var Wg = null;
      function Xg(a2) {
        null === Wg ? Wg = [a2] : Wg.push(a2);
      }
      function Yg(a2, b, c2, d) {
        var e = b.interleaved;
        null === e ? (c2.next = c2, Xg(b)) : (c2.next = e.next, e.next = c2);
        b.interleaved = c2;
        return Zg(a2, d);
      }
      function Zg(a2, b) {
        a2.lanes |= b;
        var c2 = a2.alternate;
        null !== c2 && (c2.lanes |= b);
        c2 = a2;
        for (a2 = a2.return; null !== a2; )
          a2.childLanes |= b, c2 = a2.alternate, null !== c2 && (c2.childLanes |= b), c2 = a2, a2 = a2.return;
        return 3 === c2.tag ? c2.stateNode : null;
      }
      var $g = false;
      function ah(a2) {
        a2.updateQueue = { baseState: a2.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
      }
      function bh(a2, b) {
        a2 = a2.updateQueue;
        b.updateQueue === a2 && (b.updateQueue = { baseState: a2.baseState, firstBaseUpdate: a2.firstBaseUpdate, lastBaseUpdate: a2.lastBaseUpdate, shared: a2.shared, effects: a2.effects });
      }
      function ch(a2, b) {
        return { eventTime: a2, lane: b, tag: 0, payload: null, callback: null, next: null };
      }
      function dh(a2, b, c2) {
        var d = a2.updateQueue;
        if (null === d)
          return null;
        d = d.shared;
        if (0 !== (K2 & 2)) {
          var e = d.pending;
          null === e ? b.next = b : (b.next = e.next, e.next = b);
          d.pending = b;
          return Zg(a2, c2);
        }
        e = d.interleaved;
        null === e ? (b.next = b, Xg(d)) : (b.next = e.next, e.next = b);
        d.interleaved = b;
        return Zg(a2, c2);
      }
      function eh(a2, b, c2) {
        b = b.updateQueue;
        if (null !== b && (b = b.shared, 0 !== (c2 & 4194240))) {
          var d = b.lanes;
          d &= a2.pendingLanes;
          c2 |= d;
          b.lanes = c2;
          Cc(a2, c2);
        }
      }
      function fh(a2, b) {
        var c2 = a2.updateQueue, d = a2.alternate;
        if (null !== d && (d = d.updateQueue, c2 === d)) {
          var e = null, f2 = null;
          c2 = c2.firstBaseUpdate;
          if (null !== c2) {
            do {
              var g2 = { eventTime: c2.eventTime, lane: c2.lane, tag: c2.tag, payload: c2.payload, callback: c2.callback, next: null };
              null === f2 ? e = f2 = g2 : f2 = f2.next = g2;
              c2 = c2.next;
            } while (null !== c2);
            null === f2 ? e = f2 = b : f2 = f2.next = b;
          } else
            e = f2 = b;
          c2 = { baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f2, shared: d.shared, effects: d.effects };
          a2.updateQueue = c2;
          return;
        }
        a2 = c2.lastBaseUpdate;
        null === a2 ? c2.firstBaseUpdate = b : a2.next = b;
        c2.lastBaseUpdate = b;
      }
      function gh(a2, b, c2, d) {
        var e = a2.updateQueue;
        $g = false;
        var f2 = e.firstBaseUpdate, g2 = e.lastBaseUpdate, h = e.shared.pending;
        if (null !== h) {
          e.shared.pending = null;
          var k2 = h, l2 = k2.next;
          k2.next = null;
          null === g2 ? f2 = l2 : g2.next = l2;
          g2 = k2;
          var m = a2.alternate;
          null !== m && (m = m.updateQueue, h = m.lastBaseUpdate, h !== g2 && (null === h ? m.firstBaseUpdate = l2 : h.next = l2, m.lastBaseUpdate = k2));
        }
        if (null !== f2) {
          var q2 = e.baseState;
          g2 = 0;
          m = l2 = k2 = null;
          h = f2;
          do {
            var r2 = h.lane, y2 = h.eventTime;
            if ((d & r2) === r2) {
              null !== m && (m = m.next = {
                eventTime: y2,
                lane: 0,
                tag: h.tag,
                payload: h.payload,
                callback: h.callback,
                next: null
              });
              a: {
                var n = a2, t = h;
                r2 = b;
                y2 = c2;
                switch (t.tag) {
                  case 1:
                    n = t.payload;
                    if ("function" === typeof n) {
                      q2 = n.call(y2, q2, r2);
                      break a;
                    }
                    q2 = n;
                    break a;
                  case 3:
                    n.flags = n.flags & -65537 | 128;
                  case 0:
                    n = t.payload;
                    r2 = "function" === typeof n ? n.call(y2, q2, r2) : n;
                    if (null === r2 || void 0 === r2)
                      break a;
                    q2 = A2({}, q2, r2);
                    break a;
                  case 2:
                    $g = true;
                }
              }
              null !== h.callback && 0 !== h.lane && (a2.flags |= 64, r2 = e.effects, null === r2 ? e.effects = [h] : r2.push(h));
            } else
              y2 = { eventTime: y2, lane: r2, tag: h.tag, payload: h.payload, callback: h.callback, next: null }, null === m ? (l2 = m = y2, k2 = q2) : m = m.next = y2, g2 |= r2;
            h = h.next;
            if (null === h)
              if (h = e.shared.pending, null === h)
                break;
              else
                r2 = h, h = r2.next, r2.next = null, e.lastBaseUpdate = r2, e.shared.pending = null;
          } while (1);
          null === m && (k2 = q2);
          e.baseState = k2;
          e.firstBaseUpdate = l2;
          e.lastBaseUpdate = m;
          b = e.shared.interleaved;
          if (null !== b) {
            e = b;
            do
              g2 |= e.lane, e = e.next;
            while (e !== b);
          } else
            null === f2 && (e.shared.lanes = 0);
          hh |= g2;
          a2.lanes = g2;
          a2.memoizedState = q2;
        }
      }
      function ih(a2, b, c2) {
        a2 = b.effects;
        b.effects = null;
        if (null !== a2)
          for (b = 0; b < a2.length; b++) {
            var d = a2[b], e = d.callback;
            if (null !== e) {
              d.callback = null;
              d = c2;
              if ("function" !== typeof e)
                throw Error(p2(191, e));
              e.call(d);
            }
          }
      }
      var jh = new aa.Component().refs;
      function kh(a2, b, c2, d) {
        b = a2.memoizedState;
        c2 = c2(d, b);
        c2 = null === c2 || void 0 === c2 ? b : A2({}, b, c2);
        a2.memoizedState = c2;
        0 === a2.lanes && (a2.updateQueue.baseState = c2);
      }
      var nh = { isMounted: function(a2) {
        return (a2 = a2._reactInternals) ? Vb(a2) === a2 : false;
      }, enqueueSetState: function(a2, b, c2) {
        a2 = a2._reactInternals;
        var d = L3(), e = lh(a2), f2 = ch(d, e);
        f2.payload = b;
        void 0 !== c2 && null !== c2 && (f2.callback = c2);
        b = dh(a2, f2, e);
        null !== b && (mh(b, a2, e, d), eh(b, a2, e));
      }, enqueueReplaceState: function(a2, b, c2) {
        a2 = a2._reactInternals;
        var d = L3(), e = lh(a2), f2 = ch(d, e);
        f2.tag = 1;
        f2.payload = b;
        void 0 !== c2 && null !== c2 && (f2.callback = c2);
        b = dh(a2, f2, e);
        null !== b && (mh(b, a2, e, d), eh(b, a2, e));
      }, enqueueForceUpdate: function(a2, b) {
        a2 = a2._reactInternals;
        var c2 = L3(), d = lh(a2), e = ch(c2, d);
        e.tag = 2;
        void 0 !== b && null !== b && (e.callback = b);
        b = dh(a2, e, d);
        null !== b && (mh(b, a2, d, c2), eh(b, a2, d));
      } };
      function oh(a2, b, c2, d, e, f2, g2) {
        a2 = a2.stateNode;
        return "function" === typeof a2.shouldComponentUpdate ? a2.shouldComponentUpdate(d, f2, g2) : b.prototype && b.prototype.isPureReactComponent ? !Ie2(c2, d) || !Ie2(e, f2) : true;
      }
      function ph(a2, b, c2) {
        var d = false, e = Vf;
        var f2 = b.contextType;
        "object" === typeof f2 && null !== f2 ? f2 = Vg(f2) : (e = Zf(b) ? Xf : H2.current, d = b.contextTypes, f2 = (d = null !== d && void 0 !== d) ? Yf(a2, e) : Vf);
        b = new b(c2, f2);
        a2.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
        b.updater = nh;
        a2.stateNode = b;
        b._reactInternals = a2;
        d && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = e, a2.__reactInternalMemoizedMaskedChildContext = f2);
        return b;
      }
      function qh(a2, b, c2, d) {
        a2 = b.state;
        "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c2, d);
        "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c2, d);
        b.state !== a2 && nh.enqueueReplaceState(b, b.state, null);
      }
      function rh(a2, b, c2, d) {
        var e = a2.stateNode;
        e.props = c2;
        e.state = a2.memoizedState;
        e.refs = jh;
        ah(a2);
        var f2 = b.contextType;
        "object" === typeof f2 && null !== f2 ? e.context = Vg(f2) : (f2 = Zf(b) ? Xf : H2.current, e.context = Yf(a2, f2));
        e.state = a2.memoizedState;
        f2 = b.getDerivedStateFromProps;
        "function" === typeof f2 && (kh(a2, b, f2, c2), e.state = a2.memoizedState);
        "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && nh.enqueueReplaceState(e, e.state, null), gh(a2, c2, e, d), e.state = a2.memoizedState);
        "function" === typeof e.componentDidMount && (a2.flags |= 4194308);
      }
      function sh(a2, b, c2) {
        a2 = c2.ref;
        if (null !== a2 && "function" !== typeof a2 && "object" !== typeof a2) {
          if (c2._owner) {
            c2 = c2._owner;
            if (c2) {
              if (1 !== c2.tag)
                throw Error(p2(309));
              var d = c2.stateNode;
            }
            if (!d)
              throw Error(p2(147, a2));
            var e = d, f2 = "" + a2;
            if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f2)
              return b.ref;
            b = function(a3) {
              var b2 = e.refs;
              b2 === jh && (b2 = e.refs = {});
              null === a3 ? delete b2[f2] : b2[f2] = a3;
            };
            b._stringRef = f2;
            return b;
          }
          if ("string" !== typeof a2)
            throw Error(p2(284));
          if (!c2._owner)
            throw Error(p2(290, a2));
        }
        return a2;
      }
      function th(a2, b) {
        a2 = Object.prototype.toString.call(b);
        throw Error(p2(31, "[object Object]" === a2 ? "object with keys {" + Object.keys(b).join(", ") + "}" : a2));
      }
      function uh(a2) {
        var b = a2._init;
        return b(a2._payload);
      }
      function vh(a2) {
        function b(b2, c3) {
          if (a2) {
            var d2 = b2.deletions;
            null === d2 ? (b2.deletions = [c3], b2.flags |= 16) : d2.push(c3);
          }
        }
        function c2(c3, d2) {
          if (!a2)
            return null;
          for (; null !== d2; )
            b(c3, d2), d2 = d2.sibling;
          return null;
        }
        function d(a3, b2) {
          for (a3 = /* @__PURE__ */ new Map(); null !== b2; )
            null !== b2.key ? a3.set(b2.key, b2) : a3.set(b2.index, b2), b2 = b2.sibling;
          return a3;
        }
        function e(a3, b2) {
          a3 = wh(a3, b2);
          a3.index = 0;
          a3.sibling = null;
          return a3;
        }
        function f2(b2, c3, d2) {
          b2.index = d2;
          if (!a2)
            return b2.flags |= 1048576, c3;
          d2 = b2.alternate;
          if (null !== d2)
            return d2 = d2.index, d2 < c3 ? (b2.flags |= 2, c3) : d2;
          b2.flags |= 2;
          return c3;
        }
        function g2(b2) {
          a2 && null === b2.alternate && (b2.flags |= 2);
          return b2;
        }
        function h(a3, b2, c3, d2) {
          if (null === b2 || 6 !== b2.tag)
            return b2 = xh(c3, a3.mode, d2), b2.return = a3, b2;
          b2 = e(b2, c3);
          b2.return = a3;
          return b2;
        }
        function k2(a3, b2, c3, d2) {
          var f3 = c3.type;
          if (f3 === ya)
            return m(a3, b2, c3.props.children, d2, c3.key);
          if (null !== b2 && (b2.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha && uh(f3) === b2.type))
            return d2 = e(b2, c3.props), d2.ref = sh(a3, b2, c3), d2.return = a3, d2;
          d2 = yh(c3.type, c3.key, c3.props, null, a3.mode, d2);
          d2.ref = sh(a3, b2, c3);
          d2.return = a3;
          return d2;
        }
        function l2(a3, b2, c3, d2) {
          if (null === b2 || 4 !== b2.tag || b2.stateNode.containerInfo !== c3.containerInfo || b2.stateNode.implementation !== c3.implementation)
            return b2 = zh(c3, a3.mode, d2), b2.return = a3, b2;
          b2 = e(b2, c3.children || []);
          b2.return = a3;
          return b2;
        }
        function m(a3, b2, c3, d2, f3) {
          if (null === b2 || 7 !== b2.tag)
            return b2 = Ah(c3, a3.mode, d2, f3), b2.return = a3, b2;
          b2 = e(b2, c3);
          b2.return = a3;
          return b2;
        }
        function q2(a3, b2, c3) {
          if ("string" === typeof b2 && "" !== b2 || "number" === typeof b2)
            return b2 = xh("" + b2, a3.mode, c3), b2.return = a3, b2;
          if ("object" === typeof b2 && null !== b2) {
            switch (b2.$$typeof) {
              case va:
                return c3 = yh(b2.type, b2.key, b2.props, null, a3.mode, c3), c3.ref = sh(a3, null, b2), c3.return = a3, c3;
              case wa:
                return b2 = zh(b2, a3.mode, c3), b2.return = a3, b2;
              case Ha:
                var d2 = b2._init;
                return q2(a3, d2(b2._payload), c3);
            }
            if (eb(b2) || Ka(b2))
              return b2 = Ah(b2, a3.mode, c3, null), b2.return = a3, b2;
            th(a3, b2);
          }
          return null;
        }
        function r2(a3, b2, c3, d2) {
          var e2 = null !== b2 ? b2.key : null;
          if ("string" === typeof c3 && "" !== c3 || "number" === typeof c3)
            return null !== e2 ? null : h(a3, b2, "" + c3, d2);
          if ("object" === typeof c3 && null !== c3) {
            switch (c3.$$typeof) {
              case va:
                return c3.key === e2 ? k2(a3, b2, c3, d2) : null;
              case wa:
                return c3.key === e2 ? l2(a3, b2, c3, d2) : null;
              case Ha:
                return e2 = c3._init, r2(
                  a3,
                  b2,
                  e2(c3._payload),
                  d2
                );
            }
            if (eb(c3) || Ka(c3))
              return null !== e2 ? null : m(a3, b2, c3, d2, null);
            th(a3, c3);
          }
          return null;
        }
        function y2(a3, b2, c3, d2, e2) {
          if ("string" === typeof d2 && "" !== d2 || "number" === typeof d2)
            return a3 = a3.get(c3) || null, h(b2, a3, "" + d2, e2);
          if ("object" === typeof d2 && null !== d2) {
            switch (d2.$$typeof) {
              case va:
                return a3 = a3.get(null === d2.key ? c3 : d2.key) || null, k2(b2, a3, d2, e2);
              case wa:
                return a3 = a3.get(null === d2.key ? c3 : d2.key) || null, l2(b2, a3, d2, e2);
              case Ha:
                var f3 = d2._init;
                return y2(a3, b2, c3, f3(d2._payload), e2);
            }
            if (eb(d2) || Ka(d2))
              return a3 = a3.get(c3) || null, m(b2, a3, d2, e2, null);
            th(b2, d2);
          }
          return null;
        }
        function n(e2, g3, h2, k3) {
          for (var l3 = null, m2 = null, u2 = g3, w = g3 = 0, x2 = null; null !== u2 && w < h2.length; w++) {
            u2.index > w ? (x2 = u2, u2 = null) : x2 = u2.sibling;
            var n2 = r2(e2, u2, h2[w], k3);
            if (null === n2) {
              null === u2 && (u2 = x2);
              break;
            }
            a2 && u2 && null === n2.alternate && b(e2, u2);
            g3 = f2(n2, g3, w);
            null === m2 ? l3 = n2 : m2.sibling = n2;
            m2 = n2;
            u2 = x2;
          }
          if (w === h2.length)
            return c2(e2, u2), I2 && tg(e2, w), l3;
          if (null === u2) {
            for (; w < h2.length; w++)
              u2 = q2(e2, h2[w], k3), null !== u2 && (g3 = f2(u2, g3, w), null === m2 ? l3 = u2 : m2.sibling = u2, m2 = u2);
            I2 && tg(e2, w);
            return l3;
          }
          for (u2 = d(e2, u2); w < h2.length; w++)
            x2 = y2(u2, e2, w, h2[w], k3), null !== x2 && (a2 && null !== x2.alternate && u2.delete(null === x2.key ? w : x2.key), g3 = f2(x2, g3, w), null === m2 ? l3 = x2 : m2.sibling = x2, m2 = x2);
          a2 && u2.forEach(function(a3) {
            return b(e2, a3);
          });
          I2 && tg(e2, w);
          return l3;
        }
        function t(e2, g3, h2, k3) {
          var l3 = Ka(h2);
          if ("function" !== typeof l3)
            throw Error(p2(150));
          h2 = l3.call(h2);
          if (null == h2)
            throw Error(p2(151));
          for (var u2 = l3 = null, m2 = g3, w = g3 = 0, x2 = null, n2 = h2.next(); null !== m2 && !n2.done; w++, n2 = h2.next()) {
            m2.index > w ? (x2 = m2, m2 = null) : x2 = m2.sibling;
            var t2 = r2(e2, m2, n2.value, k3);
            if (null === t2) {
              null === m2 && (m2 = x2);
              break;
            }
            a2 && m2 && null === t2.alternate && b(e2, m2);
            g3 = f2(t2, g3, w);
            null === u2 ? l3 = t2 : u2.sibling = t2;
            u2 = t2;
            m2 = x2;
          }
          if (n2.done)
            return c2(
              e2,
              m2
            ), I2 && tg(e2, w), l3;
          if (null === m2) {
            for (; !n2.done; w++, n2 = h2.next())
              n2 = q2(e2, n2.value, k3), null !== n2 && (g3 = f2(n2, g3, w), null === u2 ? l3 = n2 : u2.sibling = n2, u2 = n2);
            I2 && tg(e2, w);
            return l3;
          }
          for (m2 = d(e2, m2); !n2.done; w++, n2 = h2.next())
            n2 = y2(m2, e2, w, n2.value, k3), null !== n2 && (a2 && null !== n2.alternate && m2.delete(null === n2.key ? w : n2.key), g3 = f2(n2, g3, w), null === u2 ? l3 = n2 : u2.sibling = n2, u2 = n2);
          a2 && m2.forEach(function(a3) {
            return b(e2, a3);
          });
          I2 && tg(e2, w);
          return l3;
        }
        function J2(a3, d2, f3, h2) {
          "object" === typeof f3 && null !== f3 && f3.type === ya && null === f3.key && (f3 = f3.props.children);
          if ("object" === typeof f3 && null !== f3) {
            switch (f3.$$typeof) {
              case va:
                a: {
                  for (var k3 = f3.key, l3 = d2; null !== l3; ) {
                    if (l3.key === k3) {
                      k3 = f3.type;
                      if (k3 === ya) {
                        if (7 === l3.tag) {
                          c2(a3, l3.sibling);
                          d2 = e(l3, f3.props.children);
                          d2.return = a3;
                          a3 = d2;
                          break a;
                        }
                      } else if (l3.elementType === k3 || "object" === typeof k3 && null !== k3 && k3.$$typeof === Ha && uh(k3) === l3.type) {
                        c2(a3, l3.sibling);
                        d2 = e(l3, f3.props);
                        d2.ref = sh(a3, l3, f3);
                        d2.return = a3;
                        a3 = d2;
                        break a;
                      }
                      c2(a3, l3);
                      break;
                    } else
                      b(a3, l3);
                    l3 = l3.sibling;
                  }
                  f3.type === ya ? (d2 = Ah(f3.props.children, a3.mode, h2, f3.key), d2.return = a3, a3 = d2) : (h2 = yh(f3.type, f3.key, f3.props, null, a3.mode, h2), h2.ref = sh(a3, d2, f3), h2.return = a3, a3 = h2);
                }
                return g2(a3);
              case wa:
                a: {
                  for (l3 = f3.key; null !== d2; ) {
                    if (d2.key === l3)
                      if (4 === d2.tag && d2.stateNode.containerInfo === f3.containerInfo && d2.stateNode.implementation === f3.implementation) {
                        c2(a3, d2.sibling);
                        d2 = e(d2, f3.children || []);
                        d2.return = a3;
                        a3 = d2;
                        break a;
                      } else {
                        c2(a3, d2);
                        break;
                      }
                    else
                      b(a3, d2);
                    d2 = d2.sibling;
                  }
                  d2 = zh(f3, a3.mode, h2);
                  d2.return = a3;
                  a3 = d2;
                }
                return g2(a3);
              case Ha:
                return l3 = f3._init, J2(a3, d2, l3(f3._payload), h2);
            }
            if (eb(f3))
              return n(a3, d2, f3, h2);
            if (Ka(f3))
              return t(a3, d2, f3, h2);
            th(a3, f3);
          }
          return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d2 && 6 === d2.tag ? (c2(a3, d2.sibling), d2 = e(d2, f3), d2.return = a3, a3 = d2) : (c2(a3, d2), d2 = xh(f3, a3.mode, h2), d2.return = a3, a3 = d2), g2(a3)) : c2(a3, d2);
        }
        return J2;
      }
      var Bh = vh(true);
      var Ch = vh(false);
      var Dh = {};
      var Eh = Uf(Dh);
      var Fh = Uf(Dh);
      var Gh = Uf(Dh);
      function Hh(a2) {
        if (a2 === Dh)
          throw Error(p2(174));
        return a2;
      }
      function Ih(a2, b) {
        G2(Gh, b);
        G2(Fh, a2);
        G2(Eh, Dh);
        a2 = b.nodeType;
        switch (a2) {
          case 9:
          case 11:
            b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
            break;
          default:
            a2 = 8 === a2 ? b.parentNode : b, b = a2.namespaceURI || null, a2 = a2.tagName, b = lb(b, a2);
        }
        E2(Eh);
        G2(Eh, b);
      }
      function Jh() {
        E2(Eh);
        E2(Fh);
        E2(Gh);
      }
      function Kh(a2) {
        Hh(Gh.current);
        var b = Hh(Eh.current);
        var c2 = lb(b, a2.type);
        b !== c2 && (G2(Fh, a2), G2(Eh, c2));
      }
      function Lh(a2) {
        Fh.current === a2 && (E2(Eh), E2(Fh));
      }
      var M2 = Uf(0);
      function Mh(a2) {
        for (var b = a2; null !== b; ) {
          if (13 === b.tag) {
            var c2 = b.memoizedState;
            if (null !== c2 && (c2 = c2.dehydrated, null === c2 || "$?" === c2.data || "$!" === c2.data))
              return b;
          } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
            if (0 !== (b.flags & 128))
              return b;
          } else if (null !== b.child) {
            b.child.return = b;
            b = b.child;
            continue;
          }
          if (b === a2)
            break;
          for (; null === b.sibling; ) {
            if (null === b.return || b.return === a2)
              return null;
            b = b.return;
          }
          b.sibling.return = b.return;
          b = b.sibling;
        }
        return null;
      }
      var Nh = [];
      function Oh() {
        for (var a2 = 0; a2 < Nh.length; a2++)
          Nh[a2]._workInProgressVersionPrimary = null;
        Nh.length = 0;
      }
      var Ph = ua.ReactCurrentDispatcher;
      var Qh = ua.ReactCurrentBatchConfig;
      var Rh = 0;
      var N2 = null;
      var O2 = null;
      var P2 = null;
      var Sh = false;
      var Th = false;
      var Uh = 0;
      var Vh = 0;
      function Q2() {
        throw Error(p2(321));
      }
      function Wh(a2, b) {
        if (null === b)
          return false;
        for (var c2 = 0; c2 < b.length && c2 < a2.length; c2++)
          if (!He2(a2[c2], b[c2]))
            return false;
        return true;
      }
      function Xh(a2, b, c2, d, e, f2) {
        Rh = f2;
        N2 = b;
        b.memoizedState = null;
        b.updateQueue = null;
        b.lanes = 0;
        Ph.current = null === a2 || null === a2.memoizedState ? Yh : Zh;
        a2 = c2(d, e);
        if (Th) {
          f2 = 0;
          do {
            Th = false;
            Uh = 0;
            if (25 <= f2)
              throw Error(p2(301));
            f2 += 1;
            P2 = O2 = null;
            b.updateQueue = null;
            Ph.current = $h;
            a2 = c2(d, e);
          } while (Th);
        }
        Ph.current = ai;
        b = null !== O2 && null !== O2.next;
        Rh = 0;
        P2 = O2 = N2 = null;
        Sh = false;
        if (b)
          throw Error(p2(300));
        return a2;
      }
      function bi() {
        var a2 = 0 !== Uh;
        Uh = 0;
        return a2;
      }
      function ci() {
        var a2 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
        null === P2 ? N2.memoizedState = P2 = a2 : P2 = P2.next = a2;
        return P2;
      }
      function di() {
        if (null === O2) {
          var a2 = N2.alternate;
          a2 = null !== a2 ? a2.memoizedState : null;
        } else
          a2 = O2.next;
        var b = null === P2 ? N2.memoizedState : P2.next;
        if (null !== b)
          P2 = b, O2 = a2;
        else {
          if (null === a2)
            throw Error(p2(310));
          O2 = a2;
          a2 = { memoizedState: O2.memoizedState, baseState: O2.baseState, baseQueue: O2.baseQueue, queue: O2.queue, next: null };
          null === P2 ? N2.memoizedState = P2 = a2 : P2 = P2.next = a2;
        }
        return P2;
      }
      function ei(a2, b) {
        return "function" === typeof b ? b(a2) : b;
      }
      function fi(a2) {
        var b = di(), c2 = b.queue;
        if (null === c2)
          throw Error(p2(311));
        c2.lastRenderedReducer = a2;
        var d = O2, e = d.baseQueue, f2 = c2.pending;
        if (null !== f2) {
          if (null !== e) {
            var g2 = e.next;
            e.next = f2.next;
            f2.next = g2;
          }
          d.baseQueue = e = f2;
          c2.pending = null;
        }
        if (null !== e) {
          f2 = e.next;
          d = d.baseState;
          var h = g2 = null, k2 = null, l2 = f2;
          do {
            var m = l2.lane;
            if ((Rh & m) === m)
              null !== k2 && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d = l2.hasEagerState ? l2.eagerState : a2(d, l2.action);
            else {
              var q2 = {
                lane: m,
                action: l2.action,
                hasEagerState: l2.hasEagerState,
                eagerState: l2.eagerState,
                next: null
              };
              null === k2 ? (h = k2 = q2, g2 = d) : k2 = k2.next = q2;
              N2.lanes |= m;
              hh |= m;
            }
            l2 = l2.next;
          } while (null !== l2 && l2 !== f2);
          null === k2 ? g2 = d : k2.next = h;
          He2(d, b.memoizedState) || (Ug = true);
          b.memoizedState = d;
          b.baseState = g2;
          b.baseQueue = k2;
          c2.lastRenderedState = d;
        }
        a2 = c2.interleaved;
        if (null !== a2) {
          e = a2;
          do
            f2 = e.lane, N2.lanes |= f2, hh |= f2, e = e.next;
          while (e !== a2);
        } else
          null === e && (c2.lanes = 0);
        return [b.memoizedState, c2.dispatch];
      }
      function gi(a2) {
        var b = di(), c2 = b.queue;
        if (null === c2)
          throw Error(p2(311));
        c2.lastRenderedReducer = a2;
        var d = c2.dispatch, e = c2.pending, f2 = b.memoizedState;
        if (null !== e) {
          c2.pending = null;
          var g2 = e = e.next;
          do
            f2 = a2(f2, g2.action), g2 = g2.next;
          while (g2 !== e);
          He2(f2, b.memoizedState) || (Ug = true);
          b.memoizedState = f2;
          null === b.baseQueue && (b.baseState = f2);
          c2.lastRenderedState = f2;
        }
        return [f2, d];
      }
      function hi() {
      }
      function ii(a2, b) {
        var c2 = N2, d = di(), e = b(), f2 = !He2(d.memoizedState, e);
        f2 && (d.memoizedState = e, Ug = true);
        d = d.queue;
        ji(ki.bind(null, c2, d, a2), [a2]);
        if (d.getSnapshot !== b || f2 || null !== P2 && P2.memoizedState.tag & 1) {
          c2.flags |= 2048;
          li(9, mi.bind(null, c2, d, e, b), void 0, null);
          if (null === R2)
            throw Error(p2(349));
          0 !== (Rh & 30) || ni(c2, b, e);
        }
        return e;
      }
      function ni(a2, b, c2) {
        a2.flags |= 16384;
        a2 = { getSnapshot: b, value: c2 };
        b = N2.updateQueue;
        null === b ? (b = { lastEffect: null, stores: null }, N2.updateQueue = b, b.stores = [a2]) : (c2 = b.stores, null === c2 ? b.stores = [a2] : c2.push(a2));
      }
      function mi(a2, b, c2, d) {
        b.value = c2;
        b.getSnapshot = d;
        oi(b) && pi(a2);
      }
      function ki(a2, b, c2) {
        return c2(function() {
          oi(b) && pi(a2);
        });
      }
      function oi(a2) {
        var b = a2.getSnapshot;
        a2 = a2.value;
        try {
          var c2 = b();
          return !He2(a2, c2);
        } catch (d) {
          return true;
        }
      }
      function pi(a2) {
        var b = Zg(a2, 1);
        null !== b && mh(b, a2, 1, -1);
      }
      function qi(a2) {
        var b = ci();
        "function" === typeof a2 && (a2 = a2());
        b.memoizedState = b.baseState = a2;
        a2 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ei, lastRenderedState: a2 };
        b.queue = a2;
        a2 = a2.dispatch = ri.bind(null, N2, a2);
        return [b.memoizedState, a2];
      }
      function li(a2, b, c2, d) {
        a2 = { tag: a2, create: b, destroy: c2, deps: d, next: null };
        b = N2.updateQueue;
        null === b ? (b = { lastEffect: null, stores: null }, N2.updateQueue = b, b.lastEffect = a2.next = a2) : (c2 = b.lastEffect, null === c2 ? b.lastEffect = a2.next = a2 : (d = c2.next, c2.next = a2, a2.next = d, b.lastEffect = a2));
        return a2;
      }
      function si() {
        return di().memoizedState;
      }
      function ti(a2, b, c2, d) {
        var e = ci();
        N2.flags |= a2;
        e.memoizedState = li(1 | b, c2, void 0, void 0 === d ? null : d);
      }
      function ui(a2, b, c2, d) {
        var e = di();
        d = void 0 === d ? null : d;
        var f2 = void 0;
        if (null !== O2) {
          var g2 = O2.memoizedState;
          f2 = g2.destroy;
          if (null !== d && Wh(d, g2.deps)) {
            e.memoizedState = li(b, c2, f2, d);
            return;
          }
        }
        N2.flags |= a2;
        e.memoizedState = li(1 | b, c2, f2, d);
      }
      function vi(a2, b) {
        return ti(8390656, 8, a2, b);
      }
      function ji(a2, b) {
        return ui(2048, 8, a2, b);
      }
      function wi(a2, b) {
        return ui(4, 2, a2, b);
      }
      function xi(a2, b) {
        return ui(4, 4, a2, b);
      }
      function yi(a2, b) {
        if ("function" === typeof b)
          return a2 = a2(), b(a2), function() {
            b(null);
          };
        if (null !== b && void 0 !== b)
          return a2 = a2(), b.current = a2, function() {
            b.current = null;
          };
      }
      function zi(a2, b, c2) {
        c2 = null !== c2 && void 0 !== c2 ? c2.concat([a2]) : null;
        return ui(4, 4, yi.bind(null, b, a2), c2);
      }
      function Ai() {
      }
      function Bi(a2, b) {
        var c2 = di();
        b = void 0 === b ? null : b;
        var d = c2.memoizedState;
        if (null !== d && null !== b && Wh(b, d[1]))
          return d[0];
        c2.memoizedState = [a2, b];
        return a2;
      }
      function Ci(a2, b) {
        var c2 = di();
        b = void 0 === b ? null : b;
        var d = c2.memoizedState;
        if (null !== d && null !== b && Wh(b, d[1]))
          return d[0];
        a2 = a2();
        c2.memoizedState = [a2, b];
        return a2;
      }
      function Di(a2, b, c2) {
        if (0 === (Rh & 21))
          return a2.baseState && (a2.baseState = false, Ug = true), a2.memoizedState = c2;
        He2(c2, b) || (c2 = yc(), N2.lanes |= c2, hh |= c2, a2.baseState = true);
        return b;
      }
      function Ei(a2, b) {
        var c2 = C2;
        C2 = 0 !== c2 && 4 > c2 ? c2 : 4;
        a2(true);
        var d = Qh.transition;
        Qh.transition = {};
        try {
          a2(false), b();
        } finally {
          C2 = c2, Qh.transition = d;
        }
      }
      function Fi() {
        return di().memoizedState;
      }
      function Gi(a2, b, c2) {
        var d = lh(a2);
        c2 = { lane: d, action: c2, hasEagerState: false, eagerState: null, next: null };
        if (Hi(a2))
          Ii(b, c2);
        else if (c2 = Yg(a2, b, c2, d), null !== c2) {
          var e = L3();
          mh(c2, a2, d, e);
          Ji(c2, b, d);
        }
      }
      function ri(a2, b, c2) {
        var d = lh(a2), e = { lane: d, action: c2, hasEagerState: false, eagerState: null, next: null };
        if (Hi(a2))
          Ii(b, e);
        else {
          var f2 = a2.alternate;
          if (0 === a2.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b.lastRenderedReducer, null !== f2))
            try {
              var g2 = b.lastRenderedState, h = f2(g2, c2);
              e.hasEagerState = true;
              e.eagerState = h;
              if (He2(h, g2)) {
                var k2 = b.interleaved;
                null === k2 ? (e.next = e, Xg(b)) : (e.next = k2.next, k2.next = e);
                b.interleaved = e;
                return;
              }
            } catch (l2) {
            } finally {
            }
          c2 = Yg(a2, b, e, d);
          null !== c2 && (e = L3(), mh(c2, a2, d, e), Ji(c2, b, d));
        }
      }
      function Hi(a2) {
        var b = a2.alternate;
        return a2 === N2 || null !== b && b === N2;
      }
      function Ii(a2, b) {
        Th = Sh = true;
        var c2 = a2.pending;
        null === c2 ? b.next = b : (b.next = c2.next, c2.next = b);
        a2.pending = b;
      }
      function Ji(a2, b, c2) {
        if (0 !== (c2 & 4194240)) {
          var d = b.lanes;
          d &= a2.pendingLanes;
          c2 |= d;
          b.lanes = c2;
          Cc(a2, c2);
        }
      }
      var ai = { readContext: Vg, useCallback: Q2, useContext: Q2, useEffect: Q2, useImperativeHandle: Q2, useInsertionEffect: Q2, useLayoutEffect: Q2, useMemo: Q2, useReducer: Q2, useRef: Q2, useState: Q2, useDebugValue: Q2, useDeferredValue: Q2, useTransition: Q2, useMutableSource: Q2, useSyncExternalStore: Q2, useId: Q2, unstable_isNewReconciler: false };
      var Yh = { readContext: Vg, useCallback: function(a2, b) {
        ci().memoizedState = [a2, void 0 === b ? null : b];
        return a2;
      }, useContext: Vg, useEffect: vi, useImperativeHandle: function(a2, b, c2) {
        c2 = null !== c2 && void 0 !== c2 ? c2.concat([a2]) : null;
        return ti(
          4194308,
          4,
          yi.bind(null, b, a2),
          c2
        );
      }, useLayoutEffect: function(a2, b) {
        return ti(4194308, 4, a2, b);
      }, useInsertionEffect: function(a2, b) {
        return ti(4, 2, a2, b);
      }, useMemo: function(a2, b) {
        var c2 = ci();
        b = void 0 === b ? null : b;
        a2 = a2();
        c2.memoizedState = [a2, b];
        return a2;
      }, useReducer: function(a2, b, c2) {
        var d = ci();
        b = void 0 !== c2 ? c2(b) : b;
        d.memoizedState = d.baseState = b;
        a2 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a2, lastRenderedState: b };
        d.queue = a2;
        a2 = a2.dispatch = Gi.bind(null, N2, a2);
        return [d.memoizedState, a2];
      }, useRef: function(a2) {
        var b = ci();
        a2 = { current: a2 };
        return b.memoizedState = a2;
      }, useState: qi, useDebugValue: Ai, useDeferredValue: function(a2) {
        return ci().memoizedState = a2;
      }, useTransition: function() {
        var a2 = qi(false), b = a2[0];
        a2 = Ei.bind(null, a2[1]);
        ci().memoizedState = a2;
        return [b, a2];
      }, useMutableSource: function() {
      }, useSyncExternalStore: function(a2, b, c2) {
        var d = N2, e = ci();
        if (I2) {
          if (void 0 === c2)
            throw Error(p2(407));
          c2 = c2();
        } else {
          c2 = b();
          if (null === R2)
            throw Error(p2(349));
          0 !== (Rh & 30) || ni(d, b, c2);
        }
        e.memoizedState = c2;
        var f2 = { value: c2, getSnapshot: b };
        e.queue = f2;
        vi(ki.bind(
          null,
          d,
          f2,
          a2
        ), [a2]);
        d.flags |= 2048;
        li(9, mi.bind(null, d, f2, c2, b), void 0, null);
        return c2;
      }, useId: function() {
        var a2 = ci(), b = R2.identifierPrefix;
        if (I2) {
          var c2 = sg;
          var d = rg;
          c2 = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c2;
          b = ":" + b + "R" + c2;
          c2 = Uh++;
          0 < c2 && (b += "H" + c2.toString(32));
          b += ":";
        } else
          c2 = Vh++, b = ":" + b + "r" + c2.toString(32) + ":";
        return a2.memoizedState = b;
      }, unstable_isNewReconciler: false };
      var Zh = {
        readContext: Vg,
        useCallback: Bi,
        useContext: Vg,
        useEffect: ji,
        useImperativeHandle: zi,
        useInsertionEffect: wi,
        useLayoutEffect: xi,
        useMemo: Ci,
        useReducer: fi,
        useRef: si,
        useState: function() {
          return fi(ei);
        },
        useDebugValue: Ai,
        useDeferredValue: function(a2) {
          var b = di();
          return Di(b, O2.memoizedState, a2);
        },
        useTransition: function() {
          var a2 = fi(ei)[0], b = di().memoizedState;
          return [a2, b];
        },
        useMutableSource: hi,
        useSyncExternalStore: ii,
        useId: Fi,
        unstable_isNewReconciler: false
      };
      var $h = { readContext: Vg, useCallback: Bi, useContext: Vg, useEffect: ji, useImperativeHandle: zi, useInsertionEffect: wi, useLayoutEffect: xi, useMemo: Ci, useReducer: gi, useRef: si, useState: function() {
        return gi(ei);
      }, useDebugValue: Ai, useDeferredValue: function(a2) {
        var b = di();
        return null === O2 ? b.memoizedState = a2 : Di(b, O2.memoizedState, a2);
      }, useTransition: function() {
        var a2 = gi(ei)[0], b = di().memoizedState;
        return [a2, b];
      }, useMutableSource: hi, useSyncExternalStore: ii, useId: Fi, unstable_isNewReconciler: false };
      function Ki(a2, b) {
        try {
          var c2 = "", d = b;
          do
            c2 += Pa(d), d = d.return;
          while (d);
          var e = c2;
        } catch (f2) {
          e = "\nError generating stack: " + f2.message + "\n" + f2.stack;
        }
        return { value: a2, source: b, stack: e, digest: null };
      }
      function Li(a2, b, c2) {
        return { value: a2, source: null, stack: null != c2 ? c2 : null, digest: null != b ? b : null };
      }
      function Mi(a2, b) {
        try {
          console.error(b.value);
        } catch (c2) {
          setTimeout(function() {
            throw c2;
          });
        }
      }
      var Ni = "function" === typeof WeakMap ? WeakMap : Map;
      function Oi(a2, b, c2) {
        c2 = ch(-1, c2);
        c2.tag = 3;
        c2.payload = { element: null };
        var d = b.value;
        c2.callback = function() {
          Pi || (Pi = true, Qi = d);
          Mi(a2, b);
        };
        return c2;
      }
      function Ri(a2, b, c2) {
        c2 = ch(-1, c2);
        c2.tag = 3;
        var d = a2.type.getDerivedStateFromError;
        if ("function" === typeof d) {
          var e = b.value;
          c2.payload = function() {
            return d(e);
          };
          c2.callback = function() {
            Mi(a2, b);
          };
        }
        var f2 = a2.stateNode;
        null !== f2 && "function" === typeof f2.componentDidCatch && (c2.callback = function() {
          Mi(a2, b);
          "function" !== typeof d && (null === Si ? Si = /* @__PURE__ */ new Set([this]) : Si.add(this));
          var c3 = b.stack;
          this.componentDidCatch(b.value, { componentStack: null !== c3 ? c3 : "" });
        });
        return c2;
      }
      function Ti(a2, b, c2) {
        var d = a2.pingCache;
        if (null === d) {
          d = a2.pingCache = new Ni();
          var e = /* @__PURE__ */ new Set();
          d.set(b, e);
        } else
          e = d.get(b), void 0 === e && (e = /* @__PURE__ */ new Set(), d.set(b, e));
        e.has(c2) || (e.add(c2), a2 = Ui.bind(null, a2, b, c2), b.then(a2, a2));
      }
      function Vi(a2) {
        do {
          var b;
          if (b = 13 === a2.tag)
            b = a2.memoizedState, b = null !== b ? null !== b.dehydrated ? true : false : true;
          if (b)
            return a2;
          a2 = a2.return;
        } while (null !== a2);
        return null;
      }
      function Wi(a2, b, c2, d, e) {
        if (0 === (a2.mode & 1))
          return a2 === b ? a2.flags |= 65536 : (a2.flags |= 128, c2.flags |= 131072, c2.flags &= -52805, 1 === c2.tag && (null === c2.alternate ? c2.tag = 17 : (b = ch(-1, 1), b.tag = 2, dh(c2, b, 1))), c2.lanes |= 1), a2;
        a2.flags |= 65536;
        a2.lanes = e;
        return a2;
      }
      var Xi = ua.ReactCurrentOwner;
      var Ug = false;
      function Yi(a2, b, c2, d) {
        b.child = null === a2 ? Ch(b, null, c2, d) : Bh(b, a2.child, c2, d);
      }
      function Zi(a2, b, c2, d, e) {
        c2 = c2.render;
        var f2 = b.ref;
        Tg(b, e);
        d = Xh(a2, b, c2, d, f2, e);
        c2 = bi();
        if (null !== a2 && !Ug)
          return b.updateQueue = a2.updateQueue, b.flags &= -2053, a2.lanes &= ~e, $i(a2, b, e);
        I2 && c2 && vg(b);
        b.flags |= 1;
        Yi(a2, b, d, e);
        return b.child;
      }
      function aj(a2, b, c2, d, e) {
        if (null === a2) {
          var f2 = c2.type;
          if ("function" === typeof f2 && !bj(f2) && void 0 === f2.defaultProps && null === c2.compare && void 0 === c2.defaultProps)
            return b.tag = 15, b.type = f2, cj(a2, b, f2, d, e);
          a2 = yh(c2.type, null, d, b, b.mode, e);
          a2.ref = b.ref;
          a2.return = b;
          return b.child = a2;
        }
        f2 = a2.child;
        if (0 === (a2.lanes & e)) {
          var g2 = f2.memoizedProps;
          c2 = c2.compare;
          c2 = null !== c2 ? c2 : Ie2;
          if (c2(g2, d) && a2.ref === b.ref)
            return $i(a2, b, e);
        }
        b.flags |= 1;
        a2 = wh(f2, d);
        a2.ref = b.ref;
        a2.return = b;
        return b.child = a2;
      }
      function cj(a2, b, c2, d, e) {
        if (null !== a2) {
          var f2 = a2.memoizedProps;
          if (Ie2(f2, d) && a2.ref === b.ref)
            if (Ug = false, b.pendingProps = d = f2, 0 !== (a2.lanes & e))
              0 !== (a2.flags & 131072) && (Ug = true);
            else
              return b.lanes = a2.lanes, $i(a2, b, e);
        }
        return dj(a2, b, c2, d, e);
      }
      function ej(a2, b, c2) {
        var d = b.pendingProps, e = d.children, f2 = null !== a2 ? a2.memoizedState : null;
        if ("hidden" === d.mode)
          if (0 === (b.mode & 1))
            b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G2(fj, gj), gj |= c2;
          else {
            if (0 === (c2 & 1073741824))
              return a2 = null !== f2 ? f2.baseLanes | c2 : c2, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a2, cachePool: null, transitions: null }, b.updateQueue = null, G2(fj, gj), gj |= a2, null;
            b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
            d = null !== f2 ? f2.baseLanes : c2;
            G2(fj, gj);
            gj |= d;
          }
        else
          null !== f2 ? (d = f2.baseLanes | c2, b.memoizedState = null) : d = c2, G2(fj, gj), gj |= d;
        Yi(a2, b, e, c2);
        return b.child;
      }
      function hj(a2, b) {
        var c2 = b.ref;
        if (null === a2 && null !== c2 || null !== a2 && a2.ref !== c2)
          b.flags |= 512, b.flags |= 2097152;
      }
      function dj(a2, b, c2, d, e) {
        var f2 = Zf(c2) ? Xf : H2.current;
        f2 = Yf(b, f2);
        Tg(b, e);
        c2 = Xh(a2, b, c2, d, f2, e);
        d = bi();
        if (null !== a2 && !Ug)
          return b.updateQueue = a2.updateQueue, b.flags &= -2053, a2.lanes &= ~e, $i(a2, b, e);
        I2 && d && vg(b);
        b.flags |= 1;
        Yi(a2, b, c2, e);
        return b.child;
      }
      function ij(a2, b, c2, d, e) {
        if (Zf(c2)) {
          var f2 = true;
          cg(b);
        } else
          f2 = false;
        Tg(b, e);
        if (null === b.stateNode)
          jj(a2, b), ph(b, c2, d), rh(b, c2, d, e), d = true;
        else if (null === a2) {
          var g2 = b.stateNode, h = b.memoizedProps;
          g2.props = h;
          var k2 = g2.context, l2 = c2.contextType;
          "object" === typeof l2 && null !== l2 ? l2 = Vg(l2) : (l2 = Zf(c2) ? Xf : H2.current, l2 = Yf(b, l2));
          var m = c2.getDerivedStateFromProps, q2 = "function" === typeof m || "function" === typeof g2.getSnapshotBeforeUpdate;
          q2 || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h !== d || k2 !== l2) && qh(b, g2, d, l2);
          $g = false;
          var r2 = b.memoizedState;
          g2.state = r2;
          gh(b, d, g2, e);
          k2 = b.memoizedState;
          h !== d || r2 !== k2 || Wf.current || $g ? ("function" === typeof m && (kh(b, c2, m, d), k2 = b.memoizedState), (h = $g || oh(b, c2, h, d, r2, k2, l2)) ? (q2 || "function" !== typeof g2.UNSAFE_componentWillMount && "function" !== typeof g2.componentWillMount || ("function" === typeof g2.componentWillMount && g2.componentWillMount(), "function" === typeof g2.UNSAFE_componentWillMount && g2.UNSAFE_componentWillMount()), "function" === typeof g2.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g2.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k2), g2.props = d, g2.state = k2, g2.context = l2, d = h) : ("function" === typeof g2.componentDidMount && (b.flags |= 4194308), d = false);
        } else {
          g2 = b.stateNode;
          bh(a2, b);
          h = b.memoizedProps;
          l2 = b.type === b.elementType ? h : Lg(b.type, h);
          g2.props = l2;
          q2 = b.pendingProps;
          r2 = g2.context;
          k2 = c2.contextType;
          "object" === typeof k2 && null !== k2 ? k2 = Vg(k2) : (k2 = Zf(c2) ? Xf : H2.current, k2 = Yf(b, k2));
          var y2 = c2.getDerivedStateFromProps;
          (m = "function" === typeof y2 || "function" === typeof g2.getSnapshotBeforeUpdate) || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h !== q2 || r2 !== k2) && qh(b, g2, d, k2);
          $g = false;
          r2 = b.memoizedState;
          g2.state = r2;
          gh(b, d, g2, e);
          var n = b.memoizedState;
          h !== q2 || r2 !== n || Wf.current || $g ? ("function" === typeof y2 && (kh(b, c2, y2, d), n = b.memoizedState), (l2 = $g || oh(b, c2, l2, d, r2, n, k2) || false) ? (m || "function" !== typeof g2.UNSAFE_componentWillUpdate && "function" !== typeof g2.componentWillUpdate || ("function" === typeof g2.componentWillUpdate && g2.componentWillUpdate(d, n, k2), "function" === typeof g2.UNSAFE_componentWillUpdate && g2.UNSAFE_componentWillUpdate(d, n, k2)), "function" === typeof g2.componentDidUpdate && (b.flags |= 4), "function" === typeof g2.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g2.componentDidUpdate || h === a2.memoizedProps && r2 === a2.memoizedState || (b.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h === a2.memoizedProps && r2 === a2.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n), g2.props = d, g2.state = n, g2.context = k2, d = l2) : ("function" !== typeof g2.componentDidUpdate || h === a2.memoizedProps && r2 === a2.memoizedState || (b.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h === a2.memoizedProps && r2 === a2.memoizedState || (b.flags |= 1024), d = false);
        }
        return kj(a2, b, c2, d, f2, e);
      }
      function kj(a2, b, c2, d, e, f2) {
        hj(a2, b);
        var g2 = 0 !== (b.flags & 128);
        if (!d && !g2)
          return e && dg(b, c2, false), $i(a2, b, f2);
        d = b.stateNode;
        Xi.current = b;
        var h = g2 && "function" !== typeof c2.getDerivedStateFromError ? null : d.render();
        b.flags |= 1;
        null !== a2 && g2 ? (b.child = Bh(b, a2.child, null, f2), b.child = Bh(b, null, h, f2)) : Yi(a2, b, h, f2);
        b.memoizedState = d.state;
        e && dg(b, c2, true);
        return b.child;
      }
      function lj(a2) {
        var b = a2.stateNode;
        b.pendingContext ? ag(a2, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a2, b.context, false);
        Ih(a2, b.containerInfo);
      }
      function mj(a2, b, c2, d, e) {
        Ig();
        Jg(e);
        b.flags |= 256;
        Yi(a2, b, c2, d);
        return b.child;
      }
      var nj = { dehydrated: null, treeContext: null, retryLane: 0 };
      function oj(a2) {
        return { baseLanes: a2, cachePool: null, transitions: null };
      }
      function pj(a2, b, c2) {
        var d = b.pendingProps, e = M2.current, f2 = false, g2 = 0 !== (b.flags & 128), h;
        (h = g2) || (h = null !== a2 && null === a2.memoizedState ? false : 0 !== (e & 2));
        if (h)
          f2 = true, b.flags &= -129;
        else if (null === a2 || null !== a2.memoizedState)
          e |= 1;
        G2(M2, e & 1);
        if (null === a2) {
          Eg(b);
          a2 = b.memoizedState;
          if (null !== a2 && (a2 = a2.dehydrated, null !== a2))
            return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a2.data ? b.lanes = 8 : b.lanes = 1073741824, null;
          g2 = d.children;
          a2 = d.fallback;
          return f2 ? (d = b.mode, f2 = b.child, g2 = { mode: "hidden", children: g2 }, 0 === (d & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g2) : f2 = qj(g2, d, 0, null), a2 = Ah(a2, d, c2, null), f2.return = b, a2.return = b, f2.sibling = a2, b.child = f2, b.child.memoizedState = oj(c2), b.memoizedState = nj, a2) : rj(b, g2);
        }
        e = a2.memoizedState;
        if (null !== e && (h = e.dehydrated, null !== h))
          return sj(a2, b, g2, d, h, e, c2);
        if (f2) {
          f2 = d.fallback;
          g2 = b.mode;
          e = a2.child;
          h = e.sibling;
          var k2 = { mode: "hidden", children: d.children };
          0 === (g2 & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k2, b.deletions = null) : (d = wh(e, k2), d.subtreeFlags = e.subtreeFlags & 14680064);
          null !== h ? f2 = wh(h, f2) : (f2 = Ah(f2, g2, c2, null), f2.flags |= 2);
          f2.return = b;
          d.return = b;
          d.sibling = f2;
          b.child = d;
          d = f2;
          f2 = b.child;
          g2 = a2.child.memoizedState;
          g2 = null === g2 ? oj(c2) : { baseLanes: g2.baseLanes | c2, cachePool: null, transitions: g2.transitions };
          f2.memoizedState = g2;
          f2.childLanes = a2.childLanes & ~c2;
          b.memoizedState = nj;
          return d;
        }
        f2 = a2.child;
        a2 = f2.sibling;
        d = wh(f2, { mode: "visible", children: d.children });
        0 === (b.mode & 1) && (d.lanes = c2);
        d.return = b;
        d.sibling = null;
        null !== a2 && (c2 = b.deletions, null === c2 ? (b.deletions = [a2], b.flags |= 16) : c2.push(a2));
        b.child = d;
        b.memoizedState = null;
        return d;
      }
      function rj(a2, b) {
        b = qj({ mode: "visible", children: b }, a2.mode, 0, null);
        b.return = a2;
        return a2.child = b;
      }
      function tj(a2, b, c2, d) {
        null !== d && Jg(d);
        Bh(b, a2.child, null, c2);
        a2 = rj(b, b.pendingProps.children);
        a2.flags |= 2;
        b.memoizedState = null;
        return a2;
      }
      function sj(a2, b, c2, d, e, f2, g2) {
        if (c2) {
          if (b.flags & 256)
            return b.flags &= -257, d = Li(Error(p2(422))), tj(a2, b, g2, d);
          if (null !== b.memoizedState)
            return b.child = a2.child, b.flags |= 128, null;
          f2 = d.fallback;
          e = b.mode;
          d = qj({ mode: "visible", children: d.children }, e, 0, null);
          f2 = Ah(f2, e, g2, null);
          f2.flags |= 2;
          d.return = b;
          f2.return = b;
          d.sibling = f2;
          b.child = d;
          0 !== (b.mode & 1) && Bh(b, a2.child, null, g2);
          b.child.memoizedState = oj(g2);
          b.memoizedState = nj;
          return f2;
        }
        if (0 === (b.mode & 1))
          return tj(a2, b, g2, null);
        if ("$!" === e.data) {
          d = e.nextSibling && e.nextSibling.dataset;
          if (d)
            var h = d.dgst;
          d = h;
          f2 = Error(p2(419));
          d = Li(f2, d, void 0);
          return tj(a2, b, g2, d);
        }
        h = 0 !== (g2 & a2.childLanes);
        if (Ug || h) {
          d = R2;
          if (null !== d) {
            switch (g2 & -g2) {
              case 4:
                e = 2;
                break;
              case 16:
                e = 8;
                break;
              case 64:
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
              case 67108864:
                e = 32;
                break;
              case 536870912:
                e = 268435456;
                break;
              default:
                e = 0;
            }
            e = 0 !== (e & (d.suspendedLanes | g2)) ? 0 : e;
            0 !== e && e !== f2.retryLane && (f2.retryLane = e, Zg(a2, e), mh(d, a2, e, -1));
          }
          uj();
          d = Li(Error(p2(421)));
          return tj(a2, b, g2, d);
        }
        if ("$?" === e.data)
          return b.flags |= 128, b.child = a2.child, b = vj.bind(null, a2), e._reactRetry = b, null;
        a2 = f2.treeContext;
        yg = Lf(e.nextSibling);
        xg = b;
        I2 = true;
        zg = null;
        null !== a2 && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a2.id, sg = a2.overflow, qg = b);
        b = rj(b, d.children);
        b.flags |= 4096;
        return b;
      }
      function wj(a2, b, c2) {
        a2.lanes |= b;
        var d = a2.alternate;
        null !== d && (d.lanes |= b);
        Sg(a2.return, b, c2);
      }
      function xj(a2, b, c2, d, e) {
        var f2 = a2.memoizedState;
        null === f2 ? a2.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c2, tailMode: e } : (f2.isBackwards = b, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d, f2.tail = c2, f2.tailMode = e);
      }
      function yj(a2, b, c2) {
        var d = b.pendingProps, e = d.revealOrder, f2 = d.tail;
        Yi(a2, b, d.children, c2);
        d = M2.current;
        if (0 !== (d & 2))
          d = d & 1 | 2, b.flags |= 128;
        else {
          if (null !== a2 && 0 !== (a2.flags & 128))
            a:
              for (a2 = b.child; null !== a2; ) {
                if (13 === a2.tag)
                  null !== a2.memoizedState && wj(a2, c2, b);
                else if (19 === a2.tag)
                  wj(a2, c2, b);
                else if (null !== a2.child) {
                  a2.child.return = a2;
                  a2 = a2.child;
                  continue;
                }
                if (a2 === b)
                  break a;
                for (; null === a2.sibling; ) {
                  if (null === a2.return || a2.return === b)
                    break a;
                  a2 = a2.return;
                }
                a2.sibling.return = a2.return;
                a2 = a2.sibling;
              }
          d &= 1;
        }
        G2(M2, d);
        if (0 === (b.mode & 1))
          b.memoizedState = null;
        else
          switch (e) {
            case "forwards":
              c2 = b.child;
              for (e = null; null !== c2; )
                a2 = c2.alternate, null !== a2 && null === Mh(a2) && (e = c2), c2 = c2.sibling;
              c2 = e;
              null === c2 ? (e = b.child, b.child = null) : (e = c2.sibling, c2.sibling = null);
              xj(b, false, e, c2, f2);
              break;
            case "backwards":
              c2 = null;
              e = b.child;
              for (b.child = null; null !== e; ) {
                a2 = e.alternate;
                if (null !== a2 && null === Mh(a2)) {
                  b.child = e;
                  break;
                }
                a2 = e.sibling;
                e.sibling = c2;
                c2 = e;
                e = a2;
              }
              xj(b, true, c2, null, f2);
              break;
            case "together":
              xj(b, false, null, null, void 0);
              break;
            default:
              b.memoizedState = null;
          }
        return b.child;
      }
      function jj(a2, b) {
        0 === (b.mode & 1) && null !== a2 && (a2.alternate = null, b.alternate = null, b.flags |= 2);
      }
      function $i(a2, b, c2) {
        null !== a2 && (b.dependencies = a2.dependencies);
        hh |= b.lanes;
        if (0 === (c2 & b.childLanes))
          return null;
        if (null !== a2 && b.child !== a2.child)
          throw Error(p2(153));
        if (null !== b.child) {
          a2 = b.child;
          c2 = wh(a2, a2.pendingProps);
          b.child = c2;
          for (c2.return = b; null !== a2.sibling; )
            a2 = a2.sibling, c2 = c2.sibling = wh(a2, a2.pendingProps), c2.return = b;
          c2.sibling = null;
        }
        return b.child;
      }
      function zj(a2, b, c2) {
        switch (b.tag) {
          case 3:
            lj(b);
            Ig();
            break;
          case 5:
            Kh(b);
            break;
          case 1:
            Zf(b.type) && cg(b);
            break;
          case 4:
            Ih(b, b.stateNode.containerInfo);
            break;
          case 10:
            var d = b.type._context, e = b.memoizedProps.value;
            G2(Mg, d._currentValue);
            d._currentValue = e;
            break;
          case 13:
            d = b.memoizedState;
            if (null !== d) {
              if (null !== d.dehydrated)
                return G2(M2, M2.current & 1), b.flags |= 128, null;
              if (0 !== (c2 & b.child.childLanes))
                return pj(a2, b, c2);
              G2(M2, M2.current & 1);
              a2 = $i(a2, b, c2);
              return null !== a2 ? a2.sibling : null;
            }
            G2(M2, M2.current & 1);
            break;
          case 19:
            d = 0 !== (c2 & b.childLanes);
            if (0 !== (a2.flags & 128)) {
              if (d)
                return yj(a2, b, c2);
              b.flags |= 128;
            }
            e = b.memoizedState;
            null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
            G2(M2, M2.current);
            if (d)
              break;
            else
              return null;
          case 22:
          case 23:
            return b.lanes = 0, ej(a2, b, c2);
        }
        return $i(a2, b, c2);
      }
      var Aj;
      var Bj;
      var Cj;
      var Dj;
      Aj = function(a2, b) {
        for (var c2 = b.child; null !== c2; ) {
          if (5 === c2.tag || 6 === c2.tag)
            a2.appendChild(c2.stateNode);
          else if (4 !== c2.tag && null !== c2.child) {
            c2.child.return = c2;
            c2 = c2.child;
            continue;
          }
          if (c2 === b)
            break;
          for (; null === c2.sibling; ) {
            if (null === c2.return || c2.return === b)
              return;
            c2 = c2.return;
          }
          c2.sibling.return = c2.return;
          c2 = c2.sibling;
        }
      };
      Bj = function() {
      };
      Cj = function(a2, b, c2, d) {
        var e = a2.memoizedProps;
        if (e !== d) {
          a2 = b.stateNode;
          Hh(Eh.current);
          var f2 = null;
          switch (c2) {
            case "input":
              e = Ya(a2, e);
              d = Ya(a2, d);
              f2 = [];
              break;
            case "select":
              e = A2({}, e, { value: void 0 });
              d = A2({}, d, { value: void 0 });
              f2 = [];
              break;
            case "textarea":
              e = gb(a2, e);
              d = gb(a2, d);
              f2 = [];
              break;
            default:
              "function" !== typeof e.onClick && "function" === typeof d.onClick && (a2.onclick = Bf);
          }
          ub(c2, d);
          var g2;
          c2 = null;
          for (l2 in e)
            if (!d.hasOwnProperty(l2) && e.hasOwnProperty(l2) && null != e[l2])
              if ("style" === l2) {
                var h = e[l2];
                for (g2 in h)
                  h.hasOwnProperty(g2) && (c2 || (c2 = {}), c2[g2] = "");
              } else
                "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
          for (l2 in d) {
            var k2 = d[l2];
            h = null != e ? e[l2] : void 0;
            if (d.hasOwnProperty(l2) && k2 !== h && (null != k2 || null != h))
              if ("style" === l2)
                if (h) {
                  for (g2 in h)
                    !h.hasOwnProperty(g2) || k2 && k2.hasOwnProperty(g2) || (c2 || (c2 = {}), c2[g2] = "");
                  for (g2 in k2)
                    k2.hasOwnProperty(g2) && h[g2] !== k2[g2] && (c2 || (c2 = {}), c2[g2] = k2[g2]);
                } else
                  c2 || (f2 || (f2 = []), f2.push(
                    l2,
                    c2
                  )), c2 = k2;
              else
                "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h = h ? h.__html : void 0, null != k2 && h !== k2 && (f2 = f2 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && D2("scroll", a2), f2 || h === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
          }
          c2 && (f2 = f2 || []).push("style", c2);
          var l2 = f2;
          if (b.updateQueue = l2)
            b.flags |= 4;
        }
      };
      Dj = function(a2, b, c2, d) {
        c2 !== d && (b.flags |= 4);
      };
      function Ej(a2, b) {
        if (!I2)
          switch (a2.tailMode) {
            case "hidden":
              b = a2.tail;
              for (var c2 = null; null !== b; )
                null !== b.alternate && (c2 = b), b = b.sibling;
              null === c2 ? a2.tail = null : c2.sibling = null;
              break;
            case "collapsed":
              c2 = a2.tail;
              for (var d = null; null !== c2; )
                null !== c2.alternate && (d = c2), c2 = c2.sibling;
              null === d ? b || null === a2.tail ? a2.tail = null : a2.tail.sibling = null : d.sibling = null;
          }
      }
      function S17(a2) {
        var b = null !== a2.alternate && a2.alternate.child === a2.child, c2 = 0, d = 0;
        if (b)
          for (var e = a2.child; null !== e; )
            c2 |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a2, e = e.sibling;
        else
          for (e = a2.child; null !== e; )
            c2 |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a2, e = e.sibling;
        a2.subtreeFlags |= d;
        a2.childLanes = c2;
        return b;
      }
      function Fj(a2, b, c2) {
        var d = b.pendingProps;
        wg(b);
        switch (b.tag) {
          case 2:
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return S17(b), null;
          case 1:
            return Zf(b.type) && $f(), S17(b), null;
          case 3:
            d = b.stateNode;
            Jh();
            E2(Wf);
            E2(H2);
            Oh();
            d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
            if (null === a2 || null === a2.child)
              Gg(b) ? b.flags |= 4 : null === a2 || a2.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Gj(zg), zg = null));
            Bj(a2, b);
            S17(b);
            return null;
          case 5:
            Lh(b);
            var e = Hh(Gh.current);
            c2 = b.type;
            if (null !== a2 && null != b.stateNode)
              Cj(a2, b, c2, d, e), a2.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
            else {
              if (!d) {
                if (null === b.stateNode)
                  throw Error(p2(166));
                S17(b);
                return null;
              }
              a2 = Hh(Eh.current);
              if (Gg(b)) {
                d = b.stateNode;
                c2 = b.type;
                var f2 = b.memoizedProps;
                d[Of] = b;
                d[Pf] = f2;
                a2 = 0 !== (b.mode & 1);
                switch (c2) {
                  case "dialog":
                    D2("cancel", d);
                    D2("close", d);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    D2("load", d);
                    break;
                  case "video":
                  case "audio":
                    for (e = 0; e < lf.length; e++)
                      D2(lf[e], d);
                    break;
                  case "source":
                    D2("error", d);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    D2(
                      "error",
                      d
                    );
                    D2("load", d);
                    break;
                  case "details":
                    D2("toggle", d);
                    break;
                  case "input":
                    Za(d, f2);
                    D2("invalid", d);
                    break;
                  case "select":
                    d._wrapperState = { wasMultiple: !!f2.multiple };
                    D2("invalid", d);
                    break;
                  case "textarea":
                    hb(d, f2), D2("invalid", d);
                }
                ub(c2, f2);
                e = null;
                for (var g2 in f2)
                  if (f2.hasOwnProperty(g2)) {
                    var h = f2[g2];
                    "children" === g2 ? "string" === typeof h ? d.textContent !== h && (true !== f2.suppressHydrationWarning && Af(d.textContent, h, a2), e = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (true !== f2.suppressHydrationWarning && Af(
                      d.textContent,
                      h,
                      a2
                    ), e = ["children", "" + h]) : ea.hasOwnProperty(g2) && null != h && "onScroll" === g2 && D2("scroll", d);
                  }
                switch (c2) {
                  case "input":
                    Va(d);
                    db(d, f2, true);
                    break;
                  case "textarea":
                    Va(d);
                    jb(d);
                    break;
                  case "select":
                  case "option":
                    break;
                  default:
                    "function" === typeof f2.onClick && (d.onclick = Bf);
                }
                d = e;
                b.updateQueue = d;
                null !== d && (b.flags |= 4);
              } else {
                g2 = 9 === e.nodeType ? e : e.ownerDocument;
                "http://www.w3.org/1999/xhtml" === a2 && (a2 = kb(c2));
                "http://www.w3.org/1999/xhtml" === a2 ? "script" === c2 ? (a2 = g2.createElement("div"), a2.innerHTML = "<script><\/script>", a2 = a2.removeChild(a2.firstChild)) : "string" === typeof d.is ? a2 = g2.createElement(c2, { is: d.is }) : (a2 = g2.createElement(c2), "select" === c2 && (g2 = a2, d.multiple ? g2.multiple = true : d.size && (g2.size = d.size))) : a2 = g2.createElementNS(a2, c2);
                a2[Of] = b;
                a2[Pf] = d;
                Aj(a2, b, false, false);
                b.stateNode = a2;
                a: {
                  g2 = vb(c2, d);
                  switch (c2) {
                    case "dialog":
                      D2("cancel", a2);
                      D2("close", a2);
                      e = d;
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      D2("load", a2);
                      e = d;
                      break;
                    case "video":
                    case "audio":
                      for (e = 0; e < lf.length; e++)
                        D2(lf[e], a2);
                      e = d;
                      break;
                    case "source":
                      D2("error", a2);
                      e = d;
                      break;
                    case "img":
                    case "image":
                    case "link":
                      D2(
                        "error",
                        a2
                      );
                      D2("load", a2);
                      e = d;
                      break;
                    case "details":
                      D2("toggle", a2);
                      e = d;
                      break;
                    case "input":
                      Za(a2, d);
                      e = Ya(a2, d);
                      D2("invalid", a2);
                      break;
                    case "option":
                      e = d;
                      break;
                    case "select":
                      a2._wrapperState = { wasMultiple: !!d.multiple };
                      e = A2({}, d, { value: void 0 });
                      D2("invalid", a2);
                      break;
                    case "textarea":
                      hb(a2, d);
                      e = gb(a2, d);
                      D2("invalid", a2);
                      break;
                    default:
                      e = d;
                  }
                  ub(c2, e);
                  h = e;
                  for (f2 in h)
                    if (h.hasOwnProperty(f2)) {
                      var k2 = h[f2];
                      "style" === f2 ? sb(a2, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && nb(a2, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c2 || "" !== k2) && ob(a2, k2) : "number" === typeof k2 && ob(a2, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && D2("scroll", a2) : null != k2 && ta(a2, f2, k2, g2));
                    }
                  switch (c2) {
                    case "input":
                      Va(a2);
                      db(a2, d, false);
                      break;
                    case "textarea":
                      Va(a2);
                      jb(a2);
                      break;
                    case "option":
                      null != d.value && a2.setAttribute("value", "" + Sa(d.value));
                      break;
                    case "select":
                      a2.multiple = !!d.multiple;
                      f2 = d.value;
                      null != f2 ? fb(a2, !!d.multiple, f2, false) : null != d.defaultValue && fb(
                        a2,
                        !!d.multiple,
                        d.defaultValue,
                        true
                      );
                      break;
                    default:
                      "function" === typeof e.onClick && (a2.onclick = Bf);
                  }
                  switch (c2) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      d = !!d.autoFocus;
                      break a;
                    case "img":
                      d = true;
                      break a;
                    default:
                      d = false;
                  }
                }
                d && (b.flags |= 4);
              }
              null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
            }
            S17(b);
            return null;
          case 6:
            if (a2 && null != b.stateNode)
              Dj(a2, b, a2.memoizedProps, d);
            else {
              if ("string" !== typeof d && null === b.stateNode)
                throw Error(p2(166));
              c2 = Hh(Gh.current);
              Hh(Eh.current);
              if (Gg(b)) {
                d = b.stateNode;
                c2 = b.memoizedProps;
                d[Of] = b;
                if (f2 = d.nodeValue !== c2) {
                  if (a2 = xg, null !== a2)
                    switch (a2.tag) {
                      case 3:
                        Af(d.nodeValue, c2, 0 !== (a2.mode & 1));
                        break;
                      case 5:
                        true !== a2.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c2, 0 !== (a2.mode & 1));
                    }
                }
                f2 && (b.flags |= 4);
              } else
                d = (9 === c2.nodeType ? c2 : c2.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
            }
            S17(b);
            return null;
          case 13:
            E2(M2);
            d = b.memoizedState;
            if (null === a2 || null !== a2.memoizedState && null !== a2.memoizedState.dehydrated) {
              if (I2 && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128))
                Hg(), Ig(), b.flags |= 98560, f2 = false;
              else if (f2 = Gg(b), null !== d && null !== d.dehydrated) {
                if (null === a2) {
                  if (!f2)
                    throw Error(p2(318));
                  f2 = b.memoizedState;
                  f2 = null !== f2 ? f2.dehydrated : null;
                  if (!f2)
                    throw Error(p2(317));
                  f2[Of] = b;
                } else
                  Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
                S17(b);
                f2 = false;
              } else
                null !== zg && (Gj(zg), zg = null), f2 = true;
              if (!f2)
                return b.flags & 65536 ? b : null;
            }
            if (0 !== (b.flags & 128))
              return b.lanes = c2, b;
            d = null !== d;
            d !== (null !== a2 && null !== a2.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a2 || 0 !== (M2.current & 1) ? 0 === T2 && (T2 = 3) : uj()));
            null !== b.updateQueue && (b.flags |= 4);
            S17(b);
            return null;
          case 4:
            return Jh(), Bj(a2, b), null === a2 && sf(b.stateNode.containerInfo), S17(b), null;
          case 10:
            return Rg(b.type._context), S17(b), null;
          case 17:
            return Zf(b.type) && $f(), S17(b), null;
          case 19:
            E2(M2);
            f2 = b.memoizedState;
            if (null === f2)
              return S17(b), null;
            d = 0 !== (b.flags & 128);
            g2 = f2.rendering;
            if (null === g2)
              if (d)
                Ej(f2, false);
              else {
                if (0 !== T2 || null !== a2 && 0 !== (a2.flags & 128))
                  for (a2 = b.child; null !== a2; ) {
                    g2 = Mh(a2);
                    if (null !== g2) {
                      b.flags |= 128;
                      Ej(f2, false);
                      d = g2.updateQueue;
                      null !== d && (b.updateQueue = d, b.flags |= 4);
                      b.subtreeFlags = 0;
                      d = c2;
                      for (c2 = b.child; null !== c2; )
                        f2 = c2, a2 = d, f2.flags &= 14680066, g2 = f2.alternate, null === g2 ? (f2.childLanes = 0, f2.lanes = a2, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g2.childLanes, f2.lanes = g2.lanes, f2.child = g2.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g2.memoizedProps, f2.memoizedState = g2.memoizedState, f2.updateQueue = g2.updateQueue, f2.type = g2.type, a2 = g2.dependencies, f2.dependencies = null === a2 ? null : { lanes: a2.lanes, firstContext: a2.firstContext }), c2 = c2.sibling;
                      G2(M2, M2.current & 1 | 2);
                      return b.child;
                    }
                    a2 = a2.sibling;
                  }
                null !== f2.tail && B2() > Hj && (b.flags |= 128, d = true, Ej(f2, false), b.lanes = 4194304);
              }
            else {
              if (!d)
                if (a2 = Mh(g2), null !== a2) {
                  if (b.flags |= 128, d = true, c2 = a2.updateQueue, null !== c2 && (b.updateQueue = c2, b.flags |= 4), Ej(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g2.alternate && !I2)
                    return S17(b), null;
                } else
                  2 * B2() - f2.renderingStartTime > Hj && 1073741824 !== c2 && (b.flags |= 128, d = true, Ej(f2, false), b.lanes = 4194304);
              f2.isBackwards ? (g2.sibling = b.child, b.child = g2) : (c2 = f2.last, null !== c2 ? c2.sibling = g2 : b.child = g2, f2.last = g2);
            }
            if (null !== f2.tail)
              return b = f2.tail, f2.rendering = b, f2.tail = b.sibling, f2.renderingStartTime = B2(), b.sibling = null, c2 = M2.current, G2(M2, d ? c2 & 1 | 2 : c2 & 1), b;
            S17(b);
            return null;
          case 22:
          case 23:
            return Ij(), d = null !== b.memoizedState, null !== a2 && null !== a2.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (gj & 1073741824) && (S17(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S17(b), null;
          case 24:
            return null;
          case 25:
            return null;
        }
        throw Error(p2(156, b.tag));
      }
      function Jj(a2, b) {
        wg(b);
        switch (b.tag) {
          case 1:
            return Zf(b.type) && $f(), a2 = b.flags, a2 & 65536 ? (b.flags = a2 & -65537 | 128, b) : null;
          case 3:
            return Jh(), E2(Wf), E2(H2), Oh(), a2 = b.flags, 0 !== (a2 & 65536) && 0 === (a2 & 128) ? (b.flags = a2 & -65537 | 128, b) : null;
          case 5:
            return Lh(b), null;
          case 13:
            E2(M2);
            a2 = b.memoizedState;
            if (null !== a2 && null !== a2.dehydrated) {
              if (null === b.alternate)
                throw Error(p2(340));
              Ig();
            }
            a2 = b.flags;
            return a2 & 65536 ? (b.flags = a2 & -65537 | 128, b) : null;
          case 19:
            return E2(M2), null;
          case 4:
            return Jh(), null;
          case 10:
            return Rg(b.type._context), null;
          case 22:
          case 23:
            return Ij(), null;
          case 24:
            return null;
          default:
            return null;
        }
      }
      var Kj = false;
      var U2 = false;
      var Lj = "function" === typeof WeakSet ? WeakSet : Set;
      var V2 = null;
      function Mj(a2, b) {
        var c2 = a2.ref;
        if (null !== c2)
          if ("function" === typeof c2)
            try {
              c2(null);
            } catch (d) {
              W2(a2, b, d);
            }
          else
            c2.current = null;
      }
      function Nj(a2, b, c2) {
        try {
          c2();
        } catch (d) {
          W2(a2, b, d);
        }
      }
      var Oj = false;
      function Pj(a2, b) {
        Cf = dd;
        a2 = Me2();
        if (Ne2(a2)) {
          if ("selectionStart" in a2)
            var c2 = { start: a2.selectionStart, end: a2.selectionEnd };
          else
            a: {
              c2 = (c2 = a2.ownerDocument) && c2.defaultView || window;
              var d = c2.getSelection && c2.getSelection();
              if (d && 0 !== d.rangeCount) {
                c2 = d.anchorNode;
                var e = d.anchorOffset, f2 = d.focusNode;
                d = d.focusOffset;
                try {
                  c2.nodeType, f2.nodeType;
                } catch (F2) {
                  c2 = null;
                  break a;
                }
                var g2 = 0, h = -1, k2 = -1, l2 = 0, m = 0, q2 = a2, r2 = null;
                b:
                  for (; ; ) {
                    for (var y2; ; ) {
                      q2 !== c2 || 0 !== e && 3 !== q2.nodeType || (h = g2 + e);
                      q2 !== f2 || 0 !== d && 3 !== q2.nodeType || (k2 = g2 + d);
                      3 === q2.nodeType && (g2 += q2.nodeValue.length);
                      if (null === (y2 = q2.firstChild))
                        break;
                      r2 = q2;
                      q2 = y2;
                    }
                    for (; ; ) {
                      if (q2 === a2)
                        break b;
                      r2 === c2 && ++l2 === e && (h = g2);
                      r2 === f2 && ++m === d && (k2 = g2);
                      if (null !== (y2 = q2.nextSibling))
                        break;
                      q2 = r2;
                      r2 = q2.parentNode;
                    }
                    q2 = y2;
                  }
                c2 = -1 === h || -1 === k2 ? null : { start: h, end: k2 };
              } else
                c2 = null;
            }
          c2 = c2 || { start: 0, end: 0 };
        } else
          c2 = null;
        Df = { focusedElem: a2, selectionRange: c2 };
        dd = false;
        for (V2 = b; null !== V2; )
          if (b = V2, a2 = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a2)
            a2.return = b, V2 = a2;
          else
            for (; null !== V2; ) {
              b = V2;
              try {
                var n = b.alternate;
                if (0 !== (b.flags & 1024))
                  switch (b.tag) {
                    case 0:
                    case 11:
                    case 15:
                      break;
                    case 1:
                      if (null !== n) {
                        var t = n.memoizedProps, J2 = n.memoizedState, x2 = b.stateNode, w = x2.getSnapshotBeforeUpdate(b.elementType === b.type ? t : Lg(b.type, t), J2);
                        x2.__reactInternalSnapshotBeforeUpdate = w;
                      }
                      break;
                    case 3:
                      var u2 = b.stateNode.containerInfo;
                      1 === u2.nodeType ? u2.textContent = "" : 9 === u2.nodeType && u2.documentElement && u2.removeChild(u2.documentElement);
                      break;
                    case 5:
                    case 6:
                    case 4:
                    case 17:
                      break;
                    default:
                      throw Error(p2(163));
                  }
              } catch (F2) {
                W2(b, b.return, F2);
              }
              a2 = b.sibling;
              if (null !== a2) {
                a2.return = b.return;
                V2 = a2;
                break;
              }
              V2 = b.return;
            }
        n = Oj;
        Oj = false;
        return n;
      }
      function Qj(a2, b, c2) {
        var d = b.updateQueue;
        d = null !== d ? d.lastEffect : null;
        if (null !== d) {
          var e = d = d.next;
          do {
            if ((e.tag & a2) === a2) {
              var f2 = e.destroy;
              e.destroy = void 0;
              void 0 !== f2 && Nj(b, c2, f2);
            }
            e = e.next;
          } while (e !== d);
        }
      }
      function Rj(a2, b) {
        b = b.updateQueue;
        b = null !== b ? b.lastEffect : null;
        if (null !== b) {
          var c2 = b = b.next;
          do {
            if ((c2.tag & a2) === a2) {
              var d = c2.create;
              c2.destroy = d();
            }
            c2 = c2.next;
          } while (c2 !== b);
        }
      }
      function Sj(a2) {
        var b = a2.ref;
        if (null !== b) {
          var c2 = a2.stateNode;
          switch (a2.tag) {
            case 5:
              a2 = c2;
              break;
            default:
              a2 = c2;
          }
          "function" === typeof b ? b(a2) : b.current = a2;
        }
      }
      function Tj(a2) {
        var b = a2.alternate;
        null !== b && (a2.alternate = null, Tj(b));
        a2.child = null;
        a2.deletions = null;
        a2.sibling = null;
        5 === a2.tag && (b = a2.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
        a2.stateNode = null;
        a2.return = null;
        a2.dependencies = null;
        a2.memoizedProps = null;
        a2.memoizedState = null;
        a2.pendingProps = null;
        a2.stateNode = null;
        a2.updateQueue = null;
      }
      function Uj(a2) {
        return 5 === a2.tag || 3 === a2.tag || 4 === a2.tag;
      }
      function Vj(a2) {
        a:
          for (; ; ) {
            for (; null === a2.sibling; ) {
              if (null === a2.return || Uj(a2.return))
                return null;
              a2 = a2.return;
            }
            a2.sibling.return = a2.return;
            for (a2 = a2.sibling; 5 !== a2.tag && 6 !== a2.tag && 18 !== a2.tag; ) {
              if (a2.flags & 2)
                continue a;
              if (null === a2.child || 4 === a2.tag)
                continue a;
              else
                a2.child.return = a2, a2 = a2.child;
            }
            if (!(a2.flags & 2))
              return a2.stateNode;
          }
      }
      function Wj(a2, b, c2) {
        var d = a2.tag;
        if (5 === d || 6 === d)
          a2 = a2.stateNode, b ? 8 === c2.nodeType ? c2.parentNode.insertBefore(a2, b) : c2.insertBefore(a2, b) : (8 === c2.nodeType ? (b = c2.parentNode, b.insertBefore(a2, c2)) : (b = c2, b.appendChild(a2)), c2 = c2._reactRootContainer, null !== c2 && void 0 !== c2 || null !== b.onclick || (b.onclick = Bf));
        else if (4 !== d && (a2 = a2.child, null !== a2))
          for (Wj(a2, b, c2), a2 = a2.sibling; null !== a2; )
            Wj(a2, b, c2), a2 = a2.sibling;
      }
      function Xj(a2, b, c2) {
        var d = a2.tag;
        if (5 === d || 6 === d)
          a2 = a2.stateNode, b ? c2.insertBefore(a2, b) : c2.appendChild(a2);
        else if (4 !== d && (a2 = a2.child, null !== a2))
          for (Xj(a2, b, c2), a2 = a2.sibling; null !== a2; )
            Xj(a2, b, c2), a2 = a2.sibling;
      }
      var X2 = null;
      var Yj = false;
      function Zj(a2, b, c2) {
        for (c2 = c2.child; null !== c2; )
          ak(a2, b, c2), c2 = c2.sibling;
      }
      function ak(a2, b, c2) {
        if (lc && "function" === typeof lc.onCommitFiberUnmount)
          try {
            lc.onCommitFiberUnmount(kc, c2);
          } catch (h) {
          }
        switch (c2.tag) {
          case 5:
            U2 || Mj(c2, b);
          case 6:
            var d = X2, e = Yj;
            X2 = null;
            Zj(a2, b, c2);
            X2 = d;
            Yj = e;
            null !== X2 && (Yj ? (a2 = X2, c2 = c2.stateNode, 8 === a2.nodeType ? a2.parentNode.removeChild(c2) : a2.removeChild(c2)) : X2.removeChild(c2.stateNode));
            break;
          case 18:
            null !== X2 && (Yj ? (a2 = X2, c2 = c2.stateNode, 8 === a2.nodeType ? Kf(a2.parentNode, c2) : 1 === a2.nodeType && Kf(a2, c2), bd(a2)) : Kf(X2, c2.stateNode));
            break;
          case 4:
            d = X2;
            e = Yj;
            X2 = c2.stateNode.containerInfo;
            Yj = true;
            Zj(a2, b, c2);
            X2 = d;
            Yj = e;
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            if (!U2 && (d = c2.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
              e = d = d.next;
              do {
                var f2 = e, g2 = f2.destroy;
                f2 = f2.tag;
                void 0 !== g2 && (0 !== (f2 & 2) ? Nj(c2, b, g2) : 0 !== (f2 & 4) && Nj(c2, b, g2));
                e = e.next;
              } while (e !== d);
            }
            Zj(a2, b, c2);
            break;
          case 1:
            if (!U2 && (Mj(c2, b), d = c2.stateNode, "function" === typeof d.componentWillUnmount))
              try {
                d.props = c2.memoizedProps, d.state = c2.memoizedState, d.componentWillUnmount();
              } catch (h) {
                W2(c2, b, h);
              }
            Zj(a2, b, c2);
            break;
          case 21:
            Zj(a2, b, c2);
            break;
          case 22:
            c2.mode & 1 ? (U2 = (d = U2) || null !== c2.memoizedState, Zj(a2, b, c2), U2 = d) : Zj(a2, b, c2);
            break;
          default:
            Zj(a2, b, c2);
        }
      }
      function bk(a2) {
        var b = a2.updateQueue;
        if (null !== b) {
          a2.updateQueue = null;
          var c2 = a2.stateNode;
          null === c2 && (c2 = a2.stateNode = new Lj());
          b.forEach(function(b2) {
            var d = ck.bind(null, a2, b2);
            c2.has(b2) || (c2.add(b2), b2.then(d, d));
          });
        }
      }
      function dk(a2, b) {
        var c2 = b.deletions;
        if (null !== c2)
          for (var d = 0; d < c2.length; d++) {
            var e = c2[d];
            try {
              var f2 = a2, g2 = b, h = g2;
              a:
                for (; null !== h; ) {
                  switch (h.tag) {
                    case 5:
                      X2 = h.stateNode;
                      Yj = false;
                      break a;
                    case 3:
                      X2 = h.stateNode.containerInfo;
                      Yj = true;
                      break a;
                    case 4:
                      X2 = h.stateNode.containerInfo;
                      Yj = true;
                      break a;
                  }
                  h = h.return;
                }
              if (null === X2)
                throw Error(p2(160));
              ak(f2, g2, e);
              X2 = null;
              Yj = false;
              var k2 = e.alternate;
              null !== k2 && (k2.return = null);
              e.return = null;
            } catch (l2) {
              W2(e, b, l2);
            }
          }
        if (b.subtreeFlags & 12854)
          for (b = b.child; null !== b; )
            ek(b, a2), b = b.sibling;
      }
      function ek(a2, b) {
        var c2 = a2.alternate, d = a2.flags;
        switch (a2.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            dk(b, a2);
            fk(a2);
            if (d & 4) {
              try {
                Qj(3, a2, a2.return), Rj(3, a2);
              } catch (t) {
                W2(a2, a2.return, t);
              }
              try {
                Qj(5, a2, a2.return);
              } catch (t) {
                W2(a2, a2.return, t);
              }
            }
            break;
          case 1:
            dk(b, a2);
            fk(a2);
            d & 512 && null !== c2 && Mj(c2, c2.return);
            break;
          case 5:
            dk(b, a2);
            fk(a2);
            d & 512 && null !== c2 && Mj(c2, c2.return);
            if (a2.flags & 32) {
              var e = a2.stateNode;
              try {
                ob(e, "");
              } catch (t) {
                W2(a2, a2.return, t);
              }
            }
            if (d & 4 && (e = a2.stateNode, null != e)) {
              var f2 = a2.memoizedProps, g2 = null !== c2 ? c2.memoizedProps : f2, h = a2.type, k2 = a2.updateQueue;
              a2.updateQueue = null;
              if (null !== k2)
                try {
                  "input" === h && "radio" === f2.type && null != f2.name && ab(e, f2);
                  vb(h, g2);
                  var l2 = vb(h, f2);
                  for (g2 = 0; g2 < k2.length; g2 += 2) {
                    var m = k2[g2], q2 = k2[g2 + 1];
                    "style" === m ? sb(e, q2) : "dangerouslySetInnerHTML" === m ? nb(e, q2) : "children" === m ? ob(e, q2) : ta(e, m, q2, l2);
                  }
                  switch (h) {
                    case "input":
                      bb(e, f2);
                      break;
                    case "textarea":
                      ib(e, f2);
                      break;
                    case "select":
                      var r2 = e._wrapperState.wasMultiple;
                      e._wrapperState.wasMultiple = !!f2.multiple;
                      var y2 = f2.value;
                      null != y2 ? fb(e, !!f2.multiple, y2, false) : r2 !== !!f2.multiple && (null != f2.defaultValue ? fb(
                        e,
                        !!f2.multiple,
                        f2.defaultValue,
                        true
                      ) : fb(e, !!f2.multiple, f2.multiple ? [] : "", false));
                  }
                  e[Pf] = f2;
                } catch (t) {
                  W2(a2, a2.return, t);
                }
            }
            break;
          case 6:
            dk(b, a2);
            fk(a2);
            if (d & 4) {
              if (null === a2.stateNode)
                throw Error(p2(162));
              e = a2.stateNode;
              f2 = a2.memoizedProps;
              try {
                e.nodeValue = f2;
              } catch (t) {
                W2(a2, a2.return, t);
              }
            }
            break;
          case 3:
            dk(b, a2);
            fk(a2);
            if (d & 4 && null !== c2 && c2.memoizedState.isDehydrated)
              try {
                bd(b.containerInfo);
              } catch (t) {
                W2(a2, a2.return, t);
              }
            break;
          case 4:
            dk(b, a2);
            fk(a2);
            break;
          case 13:
            dk(b, a2);
            fk(a2);
            e = a2.child;
            e.flags & 8192 && (f2 = null !== e.memoizedState, e.stateNode.isHidden = f2, !f2 || null !== e.alternate && null !== e.alternate.memoizedState || (gk = B2()));
            d & 4 && bk(a2);
            break;
          case 22:
            m = null !== c2 && null !== c2.memoizedState;
            a2.mode & 1 ? (U2 = (l2 = U2) || m, dk(b, a2), U2 = l2) : dk(b, a2);
            fk(a2);
            if (d & 8192) {
              l2 = null !== a2.memoizedState;
              if ((a2.stateNode.isHidden = l2) && !m && 0 !== (a2.mode & 1))
                for (V2 = a2, m = a2.child; null !== m; ) {
                  for (q2 = V2 = m; null !== V2; ) {
                    r2 = V2;
                    y2 = r2.child;
                    switch (r2.tag) {
                      case 0:
                      case 11:
                      case 14:
                      case 15:
                        Qj(4, r2, r2.return);
                        break;
                      case 1:
                        Mj(r2, r2.return);
                        var n = r2.stateNode;
                        if ("function" === typeof n.componentWillUnmount) {
                          d = r2;
                          c2 = r2.return;
                          try {
                            b = d, n.props = b.memoizedProps, n.state = b.memoizedState, n.componentWillUnmount();
                          } catch (t) {
                            W2(d, c2, t);
                          }
                        }
                        break;
                      case 5:
                        Mj(r2, r2.return);
                        break;
                      case 22:
                        if (null !== r2.memoizedState) {
                          hk(q2);
                          continue;
                        }
                    }
                    null !== y2 ? (y2.return = r2, V2 = y2) : hk(q2);
                  }
                  m = m.sibling;
                }
              a:
                for (m = null, q2 = a2; ; ) {
                  if (5 === q2.tag) {
                    if (null === m) {
                      m = q2;
                      try {
                        e = q2.stateNode, l2 ? (f2 = e.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h = q2.stateNode, k2 = q2.memoizedProps.style, g2 = void 0 !== k2 && null !== k2 && k2.hasOwnProperty("display") ? k2.display : null, h.style.display = rb("display", g2));
                      } catch (t) {
                        W2(a2, a2.return, t);
                      }
                    }
                  } else if (6 === q2.tag) {
                    if (null === m)
                      try {
                        q2.stateNode.nodeValue = l2 ? "" : q2.memoizedProps;
                      } catch (t) {
                        W2(a2, a2.return, t);
                      }
                  } else if ((22 !== q2.tag && 23 !== q2.tag || null === q2.memoizedState || q2 === a2) && null !== q2.child) {
                    q2.child.return = q2;
                    q2 = q2.child;
                    continue;
                  }
                  if (q2 === a2)
                    break a;
                  for (; null === q2.sibling; ) {
                    if (null === q2.return || q2.return === a2)
                      break a;
                    m === q2 && (m = null);
                    q2 = q2.return;
                  }
                  m === q2 && (m = null);
                  q2.sibling.return = q2.return;
                  q2 = q2.sibling;
                }
            }
            break;
          case 19:
            dk(b, a2);
            fk(a2);
            d & 4 && bk(a2);
            break;
          case 21:
            break;
          default:
            dk(
              b,
              a2
            ), fk(a2);
        }
      }
      function fk(a2) {
        var b = a2.flags;
        if (b & 2) {
          try {
            a: {
              for (var c2 = a2.return; null !== c2; ) {
                if (Uj(c2)) {
                  var d = c2;
                  break a;
                }
                c2 = c2.return;
              }
              throw Error(p2(160));
            }
            switch (d.tag) {
              case 5:
                var e = d.stateNode;
                d.flags & 32 && (ob(e, ""), d.flags &= -33);
                var f2 = Vj(a2);
                Xj(a2, f2, e);
                break;
              case 3:
              case 4:
                var g2 = d.stateNode.containerInfo, h = Vj(a2);
                Wj(a2, h, g2);
                break;
              default:
                throw Error(p2(161));
            }
          } catch (k2) {
            W2(a2, a2.return, k2);
          }
          a2.flags &= -3;
        }
        b & 4096 && (a2.flags &= -4097);
      }
      function ik(a2, b, c2) {
        V2 = a2;
        jk(a2, b, c2);
      }
      function jk(a2, b, c2) {
        for (var d = 0 !== (a2.mode & 1); null !== V2; ) {
          var e = V2, f2 = e.child;
          if (22 === e.tag && d) {
            var g2 = null !== e.memoizedState || Kj;
            if (!g2) {
              var h = e.alternate, k2 = null !== h && null !== h.memoizedState || U2;
              h = Kj;
              var l2 = U2;
              Kj = g2;
              if ((U2 = k2) && !l2)
                for (V2 = e; null !== V2; )
                  g2 = V2, k2 = g2.child, 22 === g2.tag && null !== g2.memoizedState ? kk(e) : null !== k2 ? (k2.return = g2, V2 = k2) : kk(e);
              for (; null !== f2; )
                V2 = f2, jk(f2, b, c2), f2 = f2.sibling;
              V2 = e;
              Kj = h;
              U2 = l2;
            }
            lk(a2, b, c2);
          } else
            0 !== (e.subtreeFlags & 8772) && null !== f2 ? (f2.return = e, V2 = f2) : lk(a2, b, c2);
        }
      }
      function lk(a2) {
        for (; null !== V2; ) {
          var b = V2;
          if (0 !== (b.flags & 8772)) {
            var c2 = b.alternate;
            try {
              if (0 !== (b.flags & 8772))
                switch (b.tag) {
                  case 0:
                  case 11:
                  case 15:
                    U2 || Rj(5, b);
                    break;
                  case 1:
                    var d = b.stateNode;
                    if (b.flags & 4 && !U2)
                      if (null === c2)
                        d.componentDidMount();
                      else {
                        var e = b.elementType === b.type ? c2.memoizedProps : Lg(b.type, c2.memoizedProps);
                        d.componentDidUpdate(e, c2.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                      }
                    var f2 = b.updateQueue;
                    null !== f2 && ih(b, f2, d);
                    break;
                  case 3:
                    var g2 = b.updateQueue;
                    if (null !== g2) {
                      c2 = null;
                      if (null !== b.child)
                        switch (b.child.tag) {
                          case 5:
                            c2 = b.child.stateNode;
                            break;
                          case 1:
                            c2 = b.child.stateNode;
                        }
                      ih(b, g2, c2);
                    }
                    break;
                  case 5:
                    var h = b.stateNode;
                    if (null === c2 && b.flags & 4) {
                      c2 = h;
                      var k2 = b.memoizedProps;
                      switch (b.type) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                          k2.autoFocus && c2.focus();
                          break;
                        case "img":
                          k2.src && (c2.src = k2.src);
                      }
                    }
                    break;
                  case 6:
                    break;
                  case 4:
                    break;
                  case 12:
                    break;
                  case 13:
                    if (null === b.memoizedState) {
                      var l2 = b.alternate;
                      if (null !== l2) {
                        var m = l2.memoizedState;
                        if (null !== m) {
                          var q2 = m.dehydrated;
                          null !== q2 && bd(q2);
                        }
                      }
                    }
                    break;
                  case 19:
                  case 17:
                  case 21:
                  case 22:
                  case 23:
                  case 25:
                    break;
                  default:
                    throw Error(p2(163));
                }
              U2 || b.flags & 512 && Sj(b);
            } catch (r2) {
              W2(b, b.return, r2);
            }
          }
          if (b === a2) {
            V2 = null;
            break;
          }
          c2 = b.sibling;
          if (null !== c2) {
            c2.return = b.return;
            V2 = c2;
            break;
          }
          V2 = b.return;
        }
      }
      function hk(a2) {
        for (; null !== V2; ) {
          var b = V2;
          if (b === a2) {
            V2 = null;
            break;
          }
          var c2 = b.sibling;
          if (null !== c2) {
            c2.return = b.return;
            V2 = c2;
            break;
          }
          V2 = b.return;
        }
      }
      function kk(a2) {
        for (; null !== V2; ) {
          var b = V2;
          try {
            switch (b.tag) {
              case 0:
              case 11:
              case 15:
                var c2 = b.return;
                try {
                  Rj(4, b);
                } catch (k2) {
                  W2(b, c2, k2);
                }
                break;
              case 1:
                var d = b.stateNode;
                if ("function" === typeof d.componentDidMount) {
                  var e = b.return;
                  try {
                    d.componentDidMount();
                  } catch (k2) {
                    W2(b, e, k2);
                  }
                }
                var f2 = b.return;
                try {
                  Sj(b);
                } catch (k2) {
                  W2(b, f2, k2);
                }
                break;
              case 5:
                var g2 = b.return;
                try {
                  Sj(b);
                } catch (k2) {
                  W2(b, g2, k2);
                }
            }
          } catch (k2) {
            W2(b, b.return, k2);
          }
          if (b === a2) {
            V2 = null;
            break;
          }
          var h = b.sibling;
          if (null !== h) {
            h.return = b.return;
            V2 = h;
            break;
          }
          V2 = b.return;
        }
      }
      var mk = Math.ceil;
      var nk = ua.ReactCurrentDispatcher;
      var ok = ua.ReactCurrentOwner;
      var pk = ua.ReactCurrentBatchConfig;
      var K2 = 0;
      var R2 = null;
      var Y2 = null;
      var Z2 = 0;
      var gj = 0;
      var fj = Uf(0);
      var T2 = 0;
      var qk = null;
      var hh = 0;
      var rk = 0;
      var sk = 0;
      var tk = null;
      var uk = null;
      var gk = 0;
      var Hj = Infinity;
      var vk = null;
      var Pi = false;
      var Qi = null;
      var Si = null;
      var wk = false;
      var xk = null;
      var yk = 0;
      var zk = 0;
      var Ak = null;
      var Bk = -1;
      var Ck = 0;
      function L3() {
        return 0 !== (K2 & 6) ? B2() : -1 !== Bk ? Bk : Bk = B2();
      }
      function lh(a2) {
        if (0 === (a2.mode & 1))
          return 1;
        if (0 !== (K2 & 2) && 0 !== Z2)
          return Z2 & -Z2;
        if (null !== Kg.transition)
          return 0 === Ck && (Ck = yc()), Ck;
        a2 = C2;
        if (0 !== a2)
          return a2;
        a2 = window.event;
        a2 = void 0 === a2 ? 16 : jd(a2.type);
        return a2;
      }
      function mh(a2, b, c2, d) {
        if (50 < zk)
          throw zk = 0, Ak = null, Error(p2(185));
        Ac(a2, c2, d);
        if (0 === (K2 & 2) || a2 !== R2)
          a2 === R2 && (0 === (K2 & 2) && (rk |= c2), 4 === T2 && Dk(a2, Z2)), Ek(a2, d), 1 === c2 && 0 === K2 && 0 === (b.mode & 1) && (Hj = B2() + 500, fg && jg());
      }
      function Ek(a2, b) {
        var c2 = a2.callbackNode;
        wc(a2, b);
        var d = uc(a2, a2 === R2 ? Z2 : 0);
        if (0 === d)
          null !== c2 && bc(c2), a2.callbackNode = null, a2.callbackPriority = 0;
        else if (b = d & -d, a2.callbackPriority !== b) {
          null != c2 && bc(c2);
          if (1 === b)
            0 === a2.tag ? ig(Fk.bind(null, a2)) : hg(Fk.bind(null, a2)), Jf(function() {
              0 === (K2 & 6) && jg();
            }), c2 = null;
          else {
            switch (Dc(d)) {
              case 1:
                c2 = fc;
                break;
              case 4:
                c2 = gc;
                break;
              case 16:
                c2 = hc;
                break;
              case 536870912:
                c2 = jc;
                break;
              default:
                c2 = hc;
            }
            c2 = Gk(c2, Hk.bind(null, a2));
          }
          a2.callbackPriority = b;
          a2.callbackNode = c2;
        }
      }
      function Hk(a2, b) {
        Bk = -1;
        Ck = 0;
        if (0 !== (K2 & 6))
          throw Error(p2(327));
        var c2 = a2.callbackNode;
        if (Ik() && a2.callbackNode !== c2)
          return null;
        var d = uc(a2, a2 === R2 ? Z2 : 0);
        if (0 === d)
          return null;
        if (0 !== (d & 30) || 0 !== (d & a2.expiredLanes) || b)
          b = Jk(a2, d);
        else {
          b = d;
          var e = K2;
          K2 |= 2;
          var f2 = Kk();
          if (R2 !== a2 || Z2 !== b)
            vk = null, Hj = B2() + 500, Lk(a2, b);
          do
            try {
              Mk();
              break;
            } catch (h) {
              Nk(a2, h);
            }
          while (1);
          Qg();
          nk.current = f2;
          K2 = e;
          null !== Y2 ? b = 0 : (R2 = null, Z2 = 0, b = T2);
        }
        if (0 !== b) {
          2 === b && (e = xc(a2), 0 !== e && (d = e, b = Ok(a2, e)));
          if (1 === b)
            throw c2 = qk, Lk(a2, 0), Dk(a2, d), Ek(a2, B2()), c2;
          if (6 === b)
            Dk(a2, d);
          else {
            e = a2.current.alternate;
            if (0 === (d & 30) && !Pk(e) && (b = Jk(a2, d), 2 === b && (f2 = xc(a2), 0 !== f2 && (d = f2, b = Ok(a2, f2))), 1 === b))
              throw c2 = qk, Lk(a2, 0), Dk(a2, d), Ek(a2, B2()), c2;
            a2.finishedWork = e;
            a2.finishedLanes = d;
            switch (b) {
              case 0:
              case 1:
                throw Error(p2(345));
              case 2:
                Qk(a2, uk, vk);
                break;
              case 3:
                Dk(a2, d);
                if ((d & 130023424) === d && (b = gk + 500 - B2(), 10 < b)) {
                  if (0 !== uc(a2, 0))
                    break;
                  e = a2.suspendedLanes;
                  if ((e & d) !== d) {
                    L3();
                    a2.pingedLanes |= a2.suspendedLanes & e;
                    break;
                  }
                  a2.timeoutHandle = Ff(Qk.bind(null, a2, uk, vk), b);
                  break;
                }
                Qk(a2, uk, vk);
                break;
              case 4:
                Dk(a2, d);
                if ((d & 4194240) === d)
                  break;
                b = a2.eventTimes;
                for (e = -1; 0 < d; ) {
                  var g2 = 31 - oc(d);
                  f2 = 1 << g2;
                  g2 = b[g2];
                  g2 > e && (e = g2);
                  d &= ~f2;
                }
                d = e;
                d = B2() - d;
                d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * mk(d / 1960)) - d;
                if (10 < d) {
                  a2.timeoutHandle = Ff(Qk.bind(null, a2, uk, vk), d);
                  break;
                }
                Qk(a2, uk, vk);
                break;
              case 5:
                Qk(a2, uk, vk);
                break;
              default:
                throw Error(p2(329));
            }
          }
        }
        Ek(a2, B2());
        return a2.callbackNode === c2 ? Hk.bind(null, a2) : null;
      }
      function Ok(a2, b) {
        var c2 = tk;
        a2.current.memoizedState.isDehydrated && (Lk(a2, b).flags |= 256);
        a2 = Jk(a2, b);
        2 !== a2 && (b = uk, uk = c2, null !== b && Gj(b));
        return a2;
      }
      function Gj(a2) {
        null === uk ? uk = a2 : uk.push.apply(uk, a2);
      }
      function Pk(a2) {
        for (var b = a2; ; ) {
          if (b.flags & 16384) {
            var c2 = b.updateQueue;
            if (null !== c2 && (c2 = c2.stores, null !== c2))
              for (var d = 0; d < c2.length; d++) {
                var e = c2[d], f2 = e.getSnapshot;
                e = e.value;
                try {
                  if (!He2(f2(), e))
                    return false;
                } catch (g2) {
                  return false;
                }
              }
          }
          c2 = b.child;
          if (b.subtreeFlags & 16384 && null !== c2)
            c2.return = b, b = c2;
          else {
            if (b === a2)
              break;
            for (; null === b.sibling; ) {
              if (null === b.return || b.return === a2)
                return true;
              b = b.return;
            }
            b.sibling.return = b.return;
            b = b.sibling;
          }
        }
        return true;
      }
      function Dk(a2, b) {
        b &= ~sk;
        b &= ~rk;
        a2.suspendedLanes |= b;
        a2.pingedLanes &= ~b;
        for (a2 = a2.expirationTimes; 0 < b; ) {
          var c2 = 31 - oc(b), d = 1 << c2;
          a2[c2] = -1;
          b &= ~d;
        }
      }
      function Fk(a2) {
        if (0 !== (K2 & 6))
          throw Error(p2(327));
        Ik();
        var b = uc(a2, 0);
        if (0 === (b & 1))
          return Ek(a2, B2()), null;
        var c2 = Jk(a2, b);
        if (0 !== a2.tag && 2 === c2) {
          var d = xc(a2);
          0 !== d && (b = d, c2 = Ok(a2, d));
        }
        if (1 === c2)
          throw c2 = qk, Lk(a2, 0), Dk(a2, b), Ek(a2, B2()), c2;
        if (6 === c2)
          throw Error(p2(345));
        a2.finishedWork = a2.current.alternate;
        a2.finishedLanes = b;
        Qk(a2, uk, vk);
        Ek(a2, B2());
        return null;
      }
      function Rk(a2, b) {
        var c2 = K2;
        K2 |= 1;
        try {
          return a2(b);
        } finally {
          K2 = c2, 0 === K2 && (Hj = B2() + 500, fg && jg());
        }
      }
      function Sk(a2) {
        null !== xk && 0 === xk.tag && 0 === (K2 & 6) && Ik();
        var b = K2;
        K2 |= 1;
        var c2 = pk.transition, d = C2;
        try {
          if (pk.transition = null, C2 = 1, a2)
            return a2();
        } finally {
          C2 = d, pk.transition = c2, K2 = b, 0 === (K2 & 6) && jg();
        }
      }
      function Ij() {
        gj = fj.current;
        E2(fj);
      }
      function Lk(a2, b) {
        a2.finishedWork = null;
        a2.finishedLanes = 0;
        var c2 = a2.timeoutHandle;
        -1 !== c2 && (a2.timeoutHandle = -1, Gf(c2));
        if (null !== Y2)
          for (c2 = Y2.return; null !== c2; ) {
            var d = c2;
            wg(d);
            switch (d.tag) {
              case 1:
                d = d.type.childContextTypes;
                null !== d && void 0 !== d && $f();
                break;
              case 3:
                Jh();
                E2(Wf);
                E2(H2);
                Oh();
                break;
              case 5:
                Lh(d);
                break;
              case 4:
                Jh();
                break;
              case 13:
                E2(M2);
                break;
              case 19:
                E2(M2);
                break;
              case 10:
                Rg(d.type._context);
                break;
              case 22:
              case 23:
                Ij();
            }
            c2 = c2.return;
          }
        R2 = a2;
        Y2 = a2 = wh(a2.current, null);
        Z2 = gj = b;
        T2 = 0;
        qk = null;
        sk = rk = hh = 0;
        uk = tk = null;
        if (null !== Wg) {
          for (b = 0; b < Wg.length; b++)
            if (c2 = Wg[b], d = c2.interleaved, null !== d) {
              c2.interleaved = null;
              var e = d.next, f2 = c2.pending;
              if (null !== f2) {
                var g2 = f2.next;
                f2.next = e;
                d.next = g2;
              }
              c2.pending = d;
            }
          Wg = null;
        }
        return a2;
      }
      function Nk(a2, b) {
        do {
          var c2 = Y2;
          try {
            Qg();
            Ph.current = ai;
            if (Sh) {
              for (var d = N2.memoizedState; null !== d; ) {
                var e = d.queue;
                null !== e && (e.pending = null);
                d = d.next;
              }
              Sh = false;
            }
            Rh = 0;
            P2 = O2 = N2 = null;
            Th = false;
            Uh = 0;
            ok.current = null;
            if (null === c2 || null === c2.return) {
              T2 = 1;
              qk = b;
              Y2 = null;
              break;
            }
            a: {
              var f2 = a2, g2 = c2.return, h = c2, k2 = b;
              b = Z2;
              h.flags |= 32768;
              if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
                var l2 = k2, m = h, q2 = m.tag;
                if (0 === (m.mode & 1) && (0 === q2 || 11 === q2 || 15 === q2)) {
                  var r2 = m.alternate;
                  r2 ? (m.updateQueue = r2.updateQueue, m.memoizedState = r2.memoizedState, m.lanes = r2.lanes) : (m.updateQueue = null, m.memoizedState = null);
                }
                var y2 = Vi(g2);
                if (null !== y2) {
                  y2.flags &= -257;
                  Wi(y2, g2, h, f2, b);
                  y2.mode & 1 && Ti(f2, l2, b);
                  b = y2;
                  k2 = l2;
                  var n = b.updateQueue;
                  if (null === n) {
                    var t = /* @__PURE__ */ new Set();
                    t.add(k2);
                    b.updateQueue = t;
                  } else
                    n.add(k2);
                  break a;
                } else {
                  if (0 === (b & 1)) {
                    Ti(f2, l2, b);
                    uj();
                    break a;
                  }
                  k2 = Error(p2(426));
                }
              } else if (I2 && h.mode & 1) {
                var J2 = Vi(g2);
                if (null !== J2) {
                  0 === (J2.flags & 65536) && (J2.flags |= 256);
                  Wi(J2, g2, h, f2, b);
                  Jg(Ki(k2, h));
                  break a;
                }
              }
              f2 = k2 = Ki(k2, h);
              4 !== T2 && (T2 = 2);
              null === tk ? tk = [f2] : tk.push(f2);
              f2 = g2;
              do {
                switch (f2.tag) {
                  case 3:
                    f2.flags |= 65536;
                    b &= -b;
                    f2.lanes |= b;
                    var x2 = Oi(f2, k2, b);
                    fh(f2, x2);
                    break a;
                  case 1:
                    h = k2;
                    var w = f2.type, u2 = f2.stateNode;
                    if (0 === (f2.flags & 128) && ("function" === typeof w.getDerivedStateFromError || null !== u2 && "function" === typeof u2.componentDidCatch && (null === Si || !Si.has(u2)))) {
                      f2.flags |= 65536;
                      b &= -b;
                      f2.lanes |= b;
                      var F2 = Ri(f2, h, b);
                      fh(f2, F2);
                      break a;
                    }
                }
                f2 = f2.return;
              } while (null !== f2);
            }
            Tk(c2);
          } catch (na) {
            b = na;
            Y2 === c2 && null !== c2 && (Y2 = c2 = c2.return);
            continue;
          }
          break;
        } while (1);
      }
      function Kk() {
        var a2 = nk.current;
        nk.current = ai;
        return null === a2 ? ai : a2;
      }
      function uj() {
        if (0 === T2 || 3 === T2 || 2 === T2)
          T2 = 4;
        null === R2 || 0 === (hh & 268435455) && 0 === (rk & 268435455) || Dk(R2, Z2);
      }
      function Jk(a2, b) {
        var c2 = K2;
        K2 |= 2;
        var d = Kk();
        if (R2 !== a2 || Z2 !== b)
          vk = null, Lk(a2, b);
        do
          try {
            Uk();
            break;
          } catch (e) {
            Nk(a2, e);
          }
        while (1);
        Qg();
        K2 = c2;
        nk.current = d;
        if (null !== Y2)
          throw Error(p2(261));
        R2 = null;
        Z2 = 0;
        return T2;
      }
      function Uk() {
        for (; null !== Y2; )
          Vk(Y2);
      }
      function Mk() {
        for (; null !== Y2 && !cc(); )
          Vk(Y2);
      }
      function Vk(a2) {
        var b = Wk(a2.alternate, a2, gj);
        a2.memoizedProps = a2.pendingProps;
        null === b ? Tk(a2) : Y2 = b;
        ok.current = null;
      }
      function Tk(a2) {
        var b = a2;
        do {
          var c2 = b.alternate;
          a2 = b.return;
          if (0 === (b.flags & 32768)) {
            if (c2 = Fj(c2, b, gj), null !== c2) {
              Y2 = c2;
              return;
            }
          } else {
            c2 = Jj(c2, b);
            if (null !== c2) {
              c2.flags &= 32767;
              Y2 = c2;
              return;
            }
            if (null !== a2)
              a2.flags |= 32768, a2.subtreeFlags = 0, a2.deletions = null;
            else {
              T2 = 6;
              Y2 = null;
              return;
            }
          }
          b = b.sibling;
          if (null !== b) {
            Y2 = b;
            return;
          }
          Y2 = b = a2;
        } while (null !== b);
        0 === T2 && (T2 = 5);
      }
      function Qk(a2, b, c2) {
        var d = C2, e = pk.transition;
        try {
          pk.transition = null, C2 = 1, Xk(a2, b, c2, d);
        } finally {
          pk.transition = e, C2 = d;
        }
        return null;
      }
      function Xk(a2, b, c2, d) {
        do
          Ik();
        while (null !== xk);
        if (0 !== (K2 & 6))
          throw Error(p2(327));
        c2 = a2.finishedWork;
        var e = a2.finishedLanes;
        if (null === c2)
          return null;
        a2.finishedWork = null;
        a2.finishedLanes = 0;
        if (c2 === a2.current)
          throw Error(p2(177));
        a2.callbackNode = null;
        a2.callbackPriority = 0;
        var f2 = c2.lanes | c2.childLanes;
        Bc(a2, f2);
        a2 === R2 && (Y2 = R2 = null, Z2 = 0);
        0 === (c2.subtreeFlags & 2064) && 0 === (c2.flags & 2064) || wk || (wk = true, Gk(hc, function() {
          Ik();
          return null;
        }));
        f2 = 0 !== (c2.flags & 15990);
        if (0 !== (c2.subtreeFlags & 15990) || f2) {
          f2 = pk.transition;
          pk.transition = null;
          var g2 = C2;
          C2 = 1;
          var h = K2;
          K2 |= 4;
          ok.current = null;
          Pj(a2, c2);
          ek(c2, a2);
          Oe2(Df);
          dd = !!Cf;
          Df = Cf = null;
          a2.current = c2;
          ik(c2, a2, e);
          dc();
          K2 = h;
          C2 = g2;
          pk.transition = f2;
        } else
          a2.current = c2;
        wk && (wk = false, xk = a2, yk = e);
        f2 = a2.pendingLanes;
        0 === f2 && (Si = null);
        mc(c2.stateNode, d);
        Ek(a2, B2());
        if (null !== b)
          for (d = a2.onRecoverableError, c2 = 0; c2 < b.length; c2++)
            e = b[c2], d(e.value, { componentStack: e.stack, digest: e.digest });
        if (Pi)
          throw Pi = false, a2 = Qi, Qi = null, a2;
        0 !== (yk & 1) && 0 !== a2.tag && Ik();
        f2 = a2.pendingLanes;
        0 !== (f2 & 1) ? a2 === Ak ? zk++ : (zk = 0, Ak = a2) : zk = 0;
        jg();
        return null;
      }
      function Ik() {
        if (null !== xk) {
          var a2 = Dc(yk), b = pk.transition, c2 = C2;
          try {
            pk.transition = null;
            C2 = 16 > a2 ? 16 : a2;
            if (null === xk)
              var d = false;
            else {
              a2 = xk;
              xk = null;
              yk = 0;
              if (0 !== (K2 & 6))
                throw Error(p2(331));
              var e = K2;
              K2 |= 4;
              for (V2 = a2.current; null !== V2; ) {
                var f2 = V2, g2 = f2.child;
                if (0 !== (V2.flags & 16)) {
                  var h = f2.deletions;
                  if (null !== h) {
                    for (var k2 = 0; k2 < h.length; k2++) {
                      var l2 = h[k2];
                      for (V2 = l2; null !== V2; ) {
                        var m = V2;
                        switch (m.tag) {
                          case 0:
                          case 11:
                          case 15:
                            Qj(8, m, f2);
                        }
                        var q2 = m.child;
                        if (null !== q2)
                          q2.return = m, V2 = q2;
                        else
                          for (; null !== V2; ) {
                            m = V2;
                            var r2 = m.sibling, y2 = m.return;
                            Tj(m);
                            if (m === l2) {
                              V2 = null;
                              break;
                            }
                            if (null !== r2) {
                              r2.return = y2;
                              V2 = r2;
                              break;
                            }
                            V2 = y2;
                          }
                      }
                    }
                    var n = f2.alternate;
                    if (null !== n) {
                      var t = n.child;
                      if (null !== t) {
                        n.child = null;
                        do {
                          var J2 = t.sibling;
                          t.sibling = null;
                          t = J2;
                        } while (null !== t);
                      }
                    }
                    V2 = f2;
                  }
                }
                if (0 !== (f2.subtreeFlags & 2064) && null !== g2)
                  g2.return = f2, V2 = g2;
                else
                  b:
                    for (; null !== V2; ) {
                      f2 = V2;
                      if (0 !== (f2.flags & 2048))
                        switch (f2.tag) {
                          case 0:
                          case 11:
                          case 15:
                            Qj(9, f2, f2.return);
                        }
                      var x2 = f2.sibling;
                      if (null !== x2) {
                        x2.return = f2.return;
                        V2 = x2;
                        break b;
                      }
                      V2 = f2.return;
                    }
              }
              var w = a2.current;
              for (V2 = w; null !== V2; ) {
                g2 = V2;
                var u2 = g2.child;
                if (0 !== (g2.subtreeFlags & 2064) && null !== u2)
                  u2.return = g2, V2 = u2;
                else
                  b:
                    for (g2 = w; null !== V2; ) {
                      h = V2;
                      if (0 !== (h.flags & 2048))
                        try {
                          switch (h.tag) {
                            case 0:
                            case 11:
                            case 15:
                              Rj(9, h);
                          }
                        } catch (na) {
                          W2(h, h.return, na);
                        }
                      if (h === g2) {
                        V2 = null;
                        break b;
                      }
                      var F2 = h.sibling;
                      if (null !== F2) {
                        F2.return = h.return;
                        V2 = F2;
                        break b;
                      }
                      V2 = h.return;
                    }
              }
              K2 = e;
              jg();
              if (lc && "function" === typeof lc.onPostCommitFiberRoot)
                try {
                  lc.onPostCommitFiberRoot(kc, a2);
                } catch (na) {
                }
              d = true;
            }
            return d;
          } finally {
            C2 = c2, pk.transition = b;
          }
        }
        return false;
      }
      function Yk(a2, b, c2) {
        b = Ki(c2, b);
        b = Oi(a2, b, 1);
        a2 = dh(a2, b, 1);
        b = L3();
        null !== a2 && (Ac(a2, 1, b), Ek(a2, b));
      }
      function W2(a2, b, c2) {
        if (3 === a2.tag)
          Yk(a2, a2, c2);
        else
          for (; null !== b; ) {
            if (3 === b.tag) {
              Yk(b, a2, c2);
              break;
            } else if (1 === b.tag) {
              var d = b.stateNode;
              if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Si || !Si.has(d))) {
                a2 = Ki(c2, a2);
                a2 = Ri(b, a2, 1);
                b = dh(b, a2, 1);
                a2 = L3();
                null !== b && (Ac(b, 1, a2), Ek(b, a2));
                break;
              }
            }
            b = b.return;
          }
      }
      function Ui(a2, b, c2) {
        var d = a2.pingCache;
        null !== d && d.delete(b);
        b = L3();
        a2.pingedLanes |= a2.suspendedLanes & c2;
        R2 === a2 && (Z2 & c2) === c2 && (4 === T2 || 3 === T2 && (Z2 & 130023424) === Z2 && 500 > B2() - gk ? Lk(a2, 0) : sk |= c2);
        Ek(a2, b);
      }
      function Zk(a2, b) {
        0 === b && (0 === (a2.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
        var c2 = L3();
        a2 = Zg(a2, b);
        null !== a2 && (Ac(a2, b, c2), Ek(a2, c2));
      }
      function vj(a2) {
        var b = a2.memoizedState, c2 = 0;
        null !== b && (c2 = b.retryLane);
        Zk(a2, c2);
      }
      function ck(a2, b) {
        var c2 = 0;
        switch (a2.tag) {
          case 13:
            var d = a2.stateNode;
            var e = a2.memoizedState;
            null !== e && (c2 = e.retryLane);
            break;
          case 19:
            d = a2.stateNode;
            break;
          default:
            throw Error(p2(314));
        }
        null !== d && d.delete(b);
        Zk(a2, c2);
      }
      var Wk;
      Wk = function(a2, b, c2) {
        if (null !== a2)
          if (a2.memoizedProps !== b.pendingProps || Wf.current)
            Ug = true;
          else {
            if (0 === (a2.lanes & c2) && 0 === (b.flags & 128))
              return Ug = false, zj(a2, b, c2);
            Ug = 0 !== (a2.flags & 131072) ? true : false;
          }
        else
          Ug = false, I2 && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
        b.lanes = 0;
        switch (b.tag) {
          case 2:
            var d = b.type;
            jj(a2, b);
            a2 = b.pendingProps;
            var e = Yf(b, H2.current);
            Tg(b, c2);
            e = Xh(null, b, d, a2, e, c2);
            var f2 = bi();
            b.flags |= 1;
            "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f2 = true, cg(b)) : f2 = false, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, ah(b), e.updater = nh, b.stateNode = e, e._reactInternals = b, rh(b, d, a2, c2), b = kj(null, b, d, true, f2, c2)) : (b.tag = 0, I2 && f2 && vg(b), Yi(null, b, e, c2), b = b.child);
            return b;
          case 16:
            d = b.elementType;
            a: {
              jj(a2, b);
              a2 = b.pendingProps;
              e = d._init;
              d = e(d._payload);
              b.type = d;
              e = b.tag = $k(d);
              a2 = Lg(d, a2);
              switch (e) {
                case 0:
                  b = dj(null, b, d, a2, c2);
                  break a;
                case 1:
                  b = ij(null, b, d, a2, c2);
                  break a;
                case 11:
                  b = Zi(null, b, d, a2, c2);
                  break a;
                case 14:
                  b = aj(null, b, d, Lg(d.type, a2), c2);
                  break a;
              }
              throw Error(p2(
                306,
                d,
                ""
              ));
            }
            return b;
          case 0:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), dj(a2, b, d, e, c2);
          case 1:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), ij(a2, b, d, e, c2);
          case 3:
            a: {
              lj(b);
              if (null === a2)
                throw Error(p2(387));
              d = b.pendingProps;
              f2 = b.memoizedState;
              e = f2.element;
              bh(a2, b);
              gh(b, d, null, c2);
              var g2 = b.memoizedState;
              d = g2.element;
              if (f2.isDehydrated)
                if (f2 = { element: d, isDehydrated: false, cache: g2.cache, pendingSuspenseBoundaries: g2.pendingSuspenseBoundaries, transitions: g2.transitions }, b.updateQueue.baseState = f2, b.memoizedState = f2, b.flags & 256) {
                  e = Ki(Error(p2(423)), b);
                  b = mj(a2, b, d, c2, e);
                  break a;
                } else if (d !== e) {
                  e = Ki(Error(p2(424)), b);
                  b = mj(a2, b, d, c2, e);
                  break a;
                } else
                  for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I2 = true, zg = null, c2 = Ch(b, null, d, c2), b.child = c2; c2; )
                    c2.flags = c2.flags & -3 | 4096, c2 = c2.sibling;
              else {
                Ig();
                if (d === e) {
                  b = $i(a2, b, c2);
                  break a;
                }
                Yi(a2, b, d, c2);
              }
              b = b.child;
            }
            return b;
          case 5:
            return Kh(b), null === a2 && Eg(b), d = b.type, e = b.pendingProps, f2 = null !== a2 ? a2.memoizedProps : null, g2 = e.children, Ef(d, e) ? g2 = null : null !== f2 && Ef(d, f2) && (b.flags |= 32), hj(a2, b), Yi(a2, b, g2, c2), b.child;
          case 6:
            return null === a2 && Eg(b), null;
          case 13:
            return pj(a2, b, c2);
          case 4:
            return Ih(b, b.stateNode.containerInfo), d = b.pendingProps, null === a2 ? b.child = Bh(b, null, d, c2) : Yi(a2, b, d, c2), b.child;
          case 11:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), Zi(a2, b, d, e, c2);
          case 7:
            return Yi(a2, b, b.pendingProps, c2), b.child;
          case 8:
            return Yi(a2, b, b.pendingProps.children, c2), b.child;
          case 12:
            return Yi(a2, b, b.pendingProps.children, c2), b.child;
          case 10:
            a: {
              d = b.type._context;
              e = b.pendingProps;
              f2 = b.memoizedProps;
              g2 = e.value;
              G2(Mg, d._currentValue);
              d._currentValue = g2;
              if (null !== f2)
                if (He2(f2.value, g2)) {
                  if (f2.children === e.children && !Wf.current) {
                    b = $i(a2, b, c2);
                    break a;
                  }
                } else
                  for (f2 = b.child, null !== f2 && (f2.return = b); null !== f2; ) {
                    var h = f2.dependencies;
                    if (null !== h) {
                      g2 = f2.child;
                      for (var k2 = h.firstContext; null !== k2; ) {
                        if (k2.context === d) {
                          if (1 === f2.tag) {
                            k2 = ch(-1, c2 & -c2);
                            k2.tag = 2;
                            var l2 = f2.updateQueue;
                            if (null !== l2) {
                              l2 = l2.shared;
                              var m = l2.pending;
                              null === m ? k2.next = k2 : (k2.next = m.next, m.next = k2);
                              l2.pending = k2;
                            }
                          }
                          f2.lanes |= c2;
                          k2 = f2.alternate;
                          null !== k2 && (k2.lanes |= c2);
                          Sg(
                            f2.return,
                            c2,
                            b
                          );
                          h.lanes |= c2;
                          break;
                        }
                        k2 = k2.next;
                      }
                    } else if (10 === f2.tag)
                      g2 = f2.type === b.type ? null : f2.child;
                    else if (18 === f2.tag) {
                      g2 = f2.return;
                      if (null === g2)
                        throw Error(p2(341));
                      g2.lanes |= c2;
                      h = g2.alternate;
                      null !== h && (h.lanes |= c2);
                      Sg(g2, c2, b);
                      g2 = f2.sibling;
                    } else
                      g2 = f2.child;
                    if (null !== g2)
                      g2.return = f2;
                    else
                      for (g2 = f2; null !== g2; ) {
                        if (g2 === b) {
                          g2 = null;
                          break;
                        }
                        f2 = g2.sibling;
                        if (null !== f2) {
                          f2.return = g2.return;
                          g2 = f2;
                          break;
                        }
                        g2 = g2.return;
                      }
                    f2 = g2;
                  }
              Yi(a2, b, e.children, c2);
              b = b.child;
            }
            return b;
          case 9:
            return e = b.type, d = b.pendingProps.children, Tg(b, c2), e = Vg(e), d = d(e), b.flags |= 1, Yi(a2, b, d, c2), b.child;
          case 14:
            return d = b.type, e = Lg(d, b.pendingProps), e = Lg(d.type, e), aj(a2, b, d, e, c2);
          case 15:
            return cj(a2, b, b.type, b.pendingProps, c2);
          case 17:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), jj(a2, b), b.tag = 1, Zf(d) ? (a2 = true, cg(b)) : a2 = false, Tg(b, c2), ph(b, d, e), rh(b, d, e, c2), kj(null, b, d, true, a2, c2);
          case 19:
            return yj(a2, b, c2);
          case 22:
            return ej(a2, b, c2);
        }
        throw Error(p2(156, b.tag));
      };
      function Gk(a2, b) {
        return ac(a2, b);
      }
      function al(a2, b, c2, d) {
        this.tag = a2;
        this.key = c2;
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
        this.index = 0;
        this.ref = null;
        this.pendingProps = b;
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
        this.mode = d;
        this.subtreeFlags = this.flags = 0;
        this.deletions = null;
        this.childLanes = this.lanes = 0;
        this.alternate = null;
      }
      function Bg(a2, b, c2, d) {
        return new al(a2, b, c2, d);
      }
      function bj(a2) {
        a2 = a2.prototype;
        return !(!a2 || !a2.isReactComponent);
      }
      function $k(a2) {
        if ("function" === typeof a2)
          return bj(a2) ? 1 : 0;
        if (void 0 !== a2 && null !== a2) {
          a2 = a2.$$typeof;
          if (a2 === Da)
            return 11;
          if (a2 === Ga)
            return 14;
        }
        return 2;
      }
      function wh(a2, b) {
        var c2 = a2.alternate;
        null === c2 ? (c2 = Bg(a2.tag, b, a2.key, a2.mode), c2.elementType = a2.elementType, c2.type = a2.type, c2.stateNode = a2.stateNode, c2.alternate = a2, a2.alternate = c2) : (c2.pendingProps = b, c2.type = a2.type, c2.flags = 0, c2.subtreeFlags = 0, c2.deletions = null);
        c2.flags = a2.flags & 14680064;
        c2.childLanes = a2.childLanes;
        c2.lanes = a2.lanes;
        c2.child = a2.child;
        c2.memoizedProps = a2.memoizedProps;
        c2.memoizedState = a2.memoizedState;
        c2.updateQueue = a2.updateQueue;
        b = a2.dependencies;
        c2.dependencies = null === b ? null : { lanes: b.lanes, firstContext: b.firstContext };
        c2.sibling = a2.sibling;
        c2.index = a2.index;
        c2.ref = a2.ref;
        return c2;
      }
      function yh(a2, b, c2, d, e, f2) {
        var g2 = 2;
        d = a2;
        if ("function" === typeof a2)
          bj(a2) && (g2 = 1);
        else if ("string" === typeof a2)
          g2 = 5;
        else
          a:
            switch (a2) {
              case ya:
                return Ah(c2.children, e, f2, b);
              case za:
                g2 = 8;
                e |= 8;
                break;
              case Aa:
                return a2 = Bg(12, c2, b, e | 2), a2.elementType = Aa, a2.lanes = f2, a2;
              case Ea:
                return a2 = Bg(13, c2, b, e), a2.elementType = Ea, a2.lanes = f2, a2;
              case Fa:
                return a2 = Bg(19, c2, b, e), a2.elementType = Fa, a2.lanes = f2, a2;
              case Ia:
                return qj(c2, e, f2, b);
              default:
                if ("object" === typeof a2 && null !== a2)
                  switch (a2.$$typeof) {
                    case Ba:
                      g2 = 10;
                      break a;
                    case Ca:
                      g2 = 9;
                      break a;
                    case Da:
                      g2 = 11;
                      break a;
                    case Ga:
                      g2 = 14;
                      break a;
                    case Ha:
                      g2 = 16;
                      d = null;
                      break a;
                  }
                throw Error(p2(130, null == a2 ? a2 : typeof a2, ""));
            }
        b = Bg(g2, c2, b, e);
        b.elementType = a2;
        b.type = d;
        b.lanes = f2;
        return b;
      }
      function Ah(a2, b, c2, d) {
        a2 = Bg(7, a2, d, b);
        a2.lanes = c2;
        return a2;
      }
      function qj(a2, b, c2, d) {
        a2 = Bg(22, a2, d, b);
        a2.elementType = Ia;
        a2.lanes = c2;
        a2.stateNode = { isHidden: false };
        return a2;
      }
      function xh(a2, b, c2) {
        a2 = Bg(6, a2, null, b);
        a2.lanes = c2;
        return a2;
      }
      function zh(a2, b, c2) {
        b = Bg(4, null !== a2.children ? a2.children : [], a2.key, b);
        b.lanes = c2;
        b.stateNode = { containerInfo: a2.containerInfo, pendingChildren: null, implementation: a2.implementation };
        return b;
      }
      function bl(a2, b, c2, d, e) {
        this.tag = b;
        this.containerInfo = a2;
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
        this.timeoutHandle = -1;
        this.callbackNode = this.pendingContext = this.context = null;
        this.callbackPriority = 0;
        this.eventTimes = zc(0);
        this.expirationTimes = zc(-1);
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
        this.entanglements = zc(0);
        this.identifierPrefix = d;
        this.onRecoverableError = e;
        this.mutableSourceEagerHydrationData = null;
      }
      function cl(a2, b, c2, d, e, f2, g2, h, k2) {
        a2 = new bl(a2, b, c2, h, k2);
        1 === b ? (b = 1, true === f2 && (b |= 8)) : b = 0;
        f2 = Bg(3, null, null, b);
        a2.current = f2;
        f2.stateNode = a2;
        f2.memoizedState = { element: d, isDehydrated: c2, cache: null, transitions: null, pendingSuspenseBoundaries: null };
        ah(f2);
        return a2;
      }
      function dl(a2, b, c2) {
        var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return { $$typeof: wa, key: null == d ? null : "" + d, children: a2, containerInfo: b, implementation: c2 };
      }
      function el(a2) {
        if (!a2)
          return Vf;
        a2 = a2._reactInternals;
        a: {
          if (Vb(a2) !== a2 || 1 !== a2.tag)
            throw Error(p2(170));
          var b = a2;
          do {
            switch (b.tag) {
              case 3:
                b = b.stateNode.context;
                break a;
              case 1:
                if (Zf(b.type)) {
                  b = b.stateNode.__reactInternalMemoizedMergedChildContext;
                  break a;
                }
            }
            b = b.return;
          } while (null !== b);
          throw Error(p2(171));
        }
        if (1 === a2.tag) {
          var c2 = a2.type;
          if (Zf(c2))
            return bg(a2, c2, b);
        }
        return b;
      }
      function fl(a2, b, c2, d, e, f2, g2, h, k2) {
        a2 = cl(c2, d, true, a2, e, f2, g2, h, k2);
        a2.context = el(null);
        c2 = a2.current;
        d = L3();
        e = lh(c2);
        f2 = ch(d, e);
        f2.callback = void 0 !== b && null !== b ? b : null;
        dh(c2, f2, e);
        a2.current.lanes = e;
        Ac(a2, e, d);
        Ek(a2, d);
        return a2;
      }
      function gl(a2, b, c2, d) {
        var e = b.current, f2 = L3(), g2 = lh(e);
        c2 = el(c2);
        null === b.context ? b.context = c2 : b.pendingContext = c2;
        b = ch(f2, g2);
        b.payload = { element: a2 };
        d = void 0 === d ? null : d;
        null !== d && (b.callback = d);
        a2 = dh(e, b, g2);
        null !== a2 && (mh(a2, e, g2, f2), eh(a2, e, g2));
        return g2;
      }
      function hl(a2) {
        a2 = a2.current;
        if (!a2.child)
          return null;
        switch (a2.child.tag) {
          case 5:
            return a2.child.stateNode;
          default:
            return a2.child.stateNode;
        }
      }
      function il(a2, b) {
        a2 = a2.memoizedState;
        if (null !== a2 && null !== a2.dehydrated) {
          var c2 = a2.retryLane;
          a2.retryLane = 0 !== c2 && c2 < b ? c2 : b;
        }
      }
      function jl(a2, b) {
        il(a2, b);
        (a2 = a2.alternate) && il(a2, b);
      }
      function kl() {
        return null;
      }
      var ll = "function" === typeof reportError ? reportError : function(a2) {
        console.error(a2);
      };
      function ml(a2) {
        this._internalRoot = a2;
      }
      nl.prototype.render = ml.prototype.render = function(a2) {
        var b = this._internalRoot;
        if (null === b)
          throw Error(p2(409));
        gl(a2, b, null, null);
      };
      nl.prototype.unmount = ml.prototype.unmount = function() {
        var a2 = this._internalRoot;
        if (null !== a2) {
          this._internalRoot = null;
          var b = a2.containerInfo;
          Sk(function() {
            gl(null, a2, null, null);
          });
          b[uf] = null;
        }
      };
      function nl(a2) {
        this._internalRoot = a2;
      }
      nl.prototype.unstable_scheduleHydration = function(a2) {
        if (a2) {
          var b = Hc();
          a2 = { blockedOn: null, target: a2, priority: b };
          for (var c2 = 0; c2 < Qc.length && 0 !== b && b < Qc[c2].priority; c2++)
            ;
          Qc.splice(c2, 0, a2);
          0 === c2 && Vc(a2);
        }
      };
      function ol(a2) {
        return !(!a2 || 1 !== a2.nodeType && 9 !== a2.nodeType && 11 !== a2.nodeType);
      }
      function pl(a2) {
        return !(!a2 || 1 !== a2.nodeType && 9 !== a2.nodeType && 11 !== a2.nodeType && (8 !== a2.nodeType || " react-mount-point-unstable " !== a2.nodeValue));
      }
      function ql() {
      }
      function rl(a2, b, c2, d, e) {
        if (e) {
          if ("function" === typeof d) {
            var f2 = d;
            d = function() {
              var a3 = hl(g2);
              f2.call(a3);
            };
          }
          var g2 = fl(b, d, a2, 0, null, false, false, "", ql);
          a2._reactRootContainer = g2;
          a2[uf] = g2.current;
          sf(8 === a2.nodeType ? a2.parentNode : a2);
          Sk();
          return g2;
        }
        for (; e = a2.lastChild; )
          a2.removeChild(e);
        if ("function" === typeof d) {
          var h = d;
          d = function() {
            var a3 = hl(k2);
            h.call(a3);
          };
        }
        var k2 = cl(a2, 0, false, null, null, false, false, "", ql);
        a2._reactRootContainer = k2;
        a2[uf] = k2.current;
        sf(8 === a2.nodeType ? a2.parentNode : a2);
        Sk(function() {
          gl(b, k2, c2, d);
        });
        return k2;
      }
      function sl(a2, b, c2, d, e) {
        var f2 = c2._reactRootContainer;
        if (f2) {
          var g2 = f2;
          if ("function" === typeof e) {
            var h = e;
            e = function() {
              var a3 = hl(g2);
              h.call(a3);
            };
          }
          gl(b, g2, a2, e);
        } else
          g2 = rl(c2, b, a2, e, d);
        return hl(g2);
      }
      Ec = function(a2) {
        switch (a2.tag) {
          case 3:
            var b = a2.stateNode;
            if (b.current.memoizedState.isDehydrated) {
              var c2 = tc(b.pendingLanes);
              0 !== c2 && (Cc(b, c2 | 1), Ek(b, B2()), 0 === (K2 & 6) && (Hj = B2() + 500, jg()));
            }
            break;
          case 13:
            Sk(function() {
              var b2 = Zg(a2, 1);
              if (null !== b2) {
                var c3 = L3();
                mh(b2, a2, 1, c3);
              }
            }), jl(a2, 1);
        }
      };
      Fc = function(a2) {
        if (13 === a2.tag) {
          var b = Zg(a2, 134217728);
          if (null !== b) {
            var c2 = L3();
            mh(b, a2, 134217728, c2);
          }
          jl(a2, 134217728);
        }
      };
      Gc = function(a2) {
        if (13 === a2.tag) {
          var b = lh(a2), c2 = Zg(a2, b);
          if (null !== c2) {
            var d = L3();
            mh(c2, a2, b, d);
          }
          jl(a2, b);
        }
      };
      Hc = function() {
        return C2;
      };
      Ic = function(a2, b) {
        var c2 = C2;
        try {
          return C2 = a2, b();
        } finally {
          C2 = c2;
        }
      };
      yb = function(a2, b, c2) {
        switch (b) {
          case "input":
            bb(a2, c2);
            b = c2.name;
            if ("radio" === c2.type && null != b) {
              for (c2 = a2; c2.parentNode; )
                c2 = c2.parentNode;
              c2 = c2.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
              for (b = 0; b < c2.length; b++) {
                var d = c2[b];
                if (d !== a2 && d.form === a2.form) {
                  var e = Db(d);
                  if (!e)
                    throw Error(p2(90));
                  Wa(d);
                  bb(d, e);
                }
              }
            }
            break;
          case "textarea":
            ib(a2, c2);
            break;
          case "select":
            b = c2.value, null != b && fb(a2, !!c2.multiple, b, false);
        }
      };
      Gb = Rk;
      Hb = Sk;
      var tl = { usingClientEntryPoint: false, Events: [Cb, ue2, Db, Eb, Fb, Rk] };
      var ul = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" };
      var vl = { bundleType: ul.bundleType, version: ul.version, rendererPackageName: ul.rendererPackageName, rendererConfig: ul.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a2) {
        a2 = Zb(a2);
        return null === a2 ? null : a2.stateNode;
      }, findFiberByHostInstance: ul.findFiberByHostInstance || kl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
      if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
        wl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!wl.isDisabled && wl.supportsFiber)
          try {
            kc = wl.inject(vl), lc = wl;
          } catch (a2) {
          }
      }
      var wl;
      exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tl;
      exports.createPortal = function(a2, b) {
        var c2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!ol(b))
          throw Error(p2(200));
        return dl(a2, b, null, c2);
      };
      exports.createRoot = function(a2, b) {
        if (!ol(a2))
          throw Error(p2(299));
        var c2 = false, d = "", e = ll;
        null !== b && void 0 !== b && (true === b.unstable_strictMode && (c2 = true), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
        b = cl(a2, 1, false, null, null, c2, false, d, e);
        a2[uf] = b.current;
        sf(8 === a2.nodeType ? a2.parentNode : a2);
        return new ml(b);
      };
      exports.findDOMNode = function(a2) {
        if (null == a2)
          return null;
        if (1 === a2.nodeType)
          return a2;
        var b = a2._reactInternals;
        if (void 0 === b) {
          if ("function" === typeof a2.render)
            throw Error(p2(188));
          a2 = Object.keys(a2).join(",");
          throw Error(p2(268, a2));
        }
        a2 = Zb(b);
        a2 = null === a2 ? null : a2.stateNode;
        return a2;
      };
      exports.flushSync = function(a2) {
        return Sk(a2);
      };
      exports.hydrate = function(a2, b, c2) {
        if (!pl(b))
          throw Error(p2(200));
        return sl(null, a2, b, true, c2);
      };
      exports.hydrateRoot = function(a2, b, c2) {
        if (!ol(a2))
          throw Error(p2(405));
        var d = null != c2 && c2.hydratedSources || null, e = false, f2 = "", g2 = ll;
        null !== c2 && void 0 !== c2 && (true === c2.unstable_strictMode && (e = true), void 0 !== c2.identifierPrefix && (f2 = c2.identifierPrefix), void 0 !== c2.onRecoverableError && (g2 = c2.onRecoverableError));
        b = fl(b, null, a2, 1, null != c2 ? c2 : null, e, false, f2, g2);
        a2[uf] = b.current;
        sf(a2);
        if (d)
          for (a2 = 0; a2 < d.length; a2++)
            c2 = d[a2], e = c2._getVersion, e = e(c2._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c2, e] : b.mutableSourceEagerHydrationData.push(
              c2,
              e
            );
        return new nl(b);
      };
      exports.render = function(a2, b, c2) {
        if (!pl(b))
          throw Error(p2(200));
        return sl(null, a2, b, false, c2);
      };
      exports.unmountComponentAtNode = function(a2) {
        if (!pl(a2))
          throw Error(p2(40));
        return a2._reactRootContainer ? (Sk(function() {
          sl(null, null, a2, false, function() {
            a2._reactRootContainer = null;
            a2[uf] = null;
          });
        }), true) : false;
      };
      exports.unstable_batchedUpdates = Rk;
      exports.unstable_renderSubtreeIntoContainer = function(a2, b, c2, d) {
        if (!pl(c2))
          throw Error(p2(200));
        if (null == a2 || void 0 === a2._reactInternals)
          throw Error(p2(38));
        return sl(a2, b, c2, false, d);
      };
      exports.version = "18.2.0-next-9e3b772b8-20220608";
    }
  });

  // node_modules/react-dom/index.js
  var require_react_dom = __commonJS({
    "node_modules/react-dom/index.js"(exports, module) {
      "use strict";
      function checkDCE() {
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
          return;
        }
        if (false) {
          throw new Error("^_^");
        }
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
        } catch (err) {
          console.error(err);
        }
      }
      if (true) {
        checkDCE();
        module.exports = require_react_dom_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // node_modules/react-dom/client.js
  var require_client = __commonJS({
    "node_modules/react-dom/client.js"(exports) {
      "use strict";
      var m = require_react_dom();
      if (true) {
        exports.createRoot = m.createRoot;
        exports.hydrateRoot = m.hydrateRoot;
      } else {
        i2 = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        exports.createRoot = function(c2, o2) {
          i2.usingClientEntryPoint = true;
          try {
            return m.createRoot(c2, o2);
          } finally {
            i2.usingClientEntryPoint = false;
          }
        };
        exports.hydrateRoot = function(c2, h, o2) {
          i2.usingClientEntryPoint = true;
          try {
            return m.hydrateRoot(c2, h, o2);
          } finally {
            i2.usingClientEntryPoint = false;
          }
        };
      }
      var i2;
    }
  });

  // node_modules/react-fast-compare/index.js
  var require_react_fast_compare = __commonJS({
    "node_modules/react-fast-compare/index.js"(exports, module) {
      var hasElementType = typeof Element !== "undefined";
      var hasMap = typeof Map === "function";
      var hasSet = typeof Set === "function";
      var hasArrayBuffer = typeof ArrayBuffer === "function" && !!ArrayBuffer.isView;
      function equal(a2, b) {
        if (a2 === b)
          return true;
        if (a2 && b && typeof a2 == "object" && typeof b == "object") {
          if (a2.constructor !== b.constructor)
            return false;
          var length2, i2, keys;
          if (Array.isArray(a2)) {
            length2 = a2.length;
            if (length2 != b.length)
              return false;
            for (i2 = length2; i2-- !== 0; )
              if (!equal(a2[i2], b[i2]))
                return false;
            return true;
          }
          var it2;
          if (hasMap && a2 instanceof Map && b instanceof Map) {
            if (a2.size !== b.size)
              return false;
            it2 = a2.entries();
            while (!(i2 = it2.next()).done)
              if (!b.has(i2.value[0]))
                return false;
            it2 = a2.entries();
            while (!(i2 = it2.next()).done)
              if (!equal(i2.value[1], b.get(i2.value[0])))
                return false;
            return true;
          }
          if (hasSet && a2 instanceof Set && b instanceof Set) {
            if (a2.size !== b.size)
              return false;
            it2 = a2.entries();
            while (!(i2 = it2.next()).done)
              if (!b.has(i2.value[0]))
                return false;
            return true;
          }
          if (hasArrayBuffer && ArrayBuffer.isView(a2) && ArrayBuffer.isView(b)) {
            length2 = a2.length;
            if (length2 != b.length)
              return false;
            for (i2 = length2; i2-- !== 0; )
              if (a2[i2] !== b[i2])
                return false;
            return true;
          }
          if (a2.constructor === RegExp)
            return a2.source === b.source && a2.flags === b.flags;
          if (a2.valueOf !== Object.prototype.valueOf && typeof a2.valueOf === "function" && typeof b.valueOf === "function")
            return a2.valueOf() === b.valueOf();
          if (a2.toString !== Object.prototype.toString && typeof a2.toString === "function" && typeof b.toString === "function")
            return a2.toString() === b.toString();
          keys = Object.keys(a2);
          length2 = keys.length;
          if (length2 !== Object.keys(b).length)
            return false;
          for (i2 = length2; i2-- !== 0; )
            if (!Object.prototype.hasOwnProperty.call(b, keys[i2]))
              return false;
          if (hasElementType && a2 instanceof Element)
            return false;
          for (i2 = length2; i2-- !== 0; ) {
            if ((keys[i2] === "_owner" || keys[i2] === "__v" || keys[i2] === "__o") && a2.$$typeof) {
              continue;
            }
            if (!equal(a2[keys[i2]], b[keys[i2]]))
              return false;
          }
          return true;
        }
        return a2 !== a2 && b !== b;
      }
      module.exports = function isEqual2(a2, b) {
        try {
          return equal(a2, b);
        } catch (error) {
          if ((error.message || "").match(/stack|recursion/i)) {
            console.warn("react-fast-compare cannot handle circular refs");
            return false;
          }
          throw error;
        }
      };
    }
  });

  // node_modules/shallowequal/index.js
  var require_shallowequal = __commonJS({
    "node_modules/shallowequal/index.js"(exports, module) {
      module.exports = function shallowEqual(objA, objB, compare, compareContext) {
        var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
        if (ret !== void 0) {
          return !!ret;
        }
        if (objA === objB) {
          return true;
        }
        if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
          return false;
        }
        var keysA = Object.keys(objA);
        var keysB = Object.keys(objB);
        if (keysA.length !== keysB.length) {
          return false;
        }
        var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
        for (var idx = 0; idx < keysA.length; idx++) {
          var key = keysA[idx];
          if (!bHasOwnProperty(key)) {
            return false;
          }
          var valueA = objA[key];
          var valueB = objB[key];
          ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
          if (ret === false || ret === void 0 && valueA !== valueB) {
            return false;
          }
        }
        return true;
      };
    }
  });

  // node_modules/prop-types/lib/ReactPropTypesSecret.js
  var require_ReactPropTypesSecret = __commonJS({
    "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
      "use strict";
      var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      module.exports = ReactPropTypesSecret;
    }
  });

  // node_modules/prop-types/factoryWithThrowingShims.js
  var require_factoryWithThrowingShims = __commonJS({
    "node_modules/prop-types/factoryWithThrowingShims.js"(exports, module) {
      "use strict";
      var ReactPropTypesSecret = require_ReactPropTypesSecret();
      function emptyFunction() {
      }
      function emptyFunctionWithReset() {
      }
      emptyFunctionWithReset.resetWarningCache = emptyFunction;
      module.exports = function() {
        function shim(props, propName, componentName, location, propFullName, secret) {
          if (secret === ReactPropTypesSecret) {
            return;
          }
          var err = new Error(
            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
          );
          err.name = "Invariant Violation";
          throw err;
        }
        ;
        shim.isRequired = shim;
        function getShim() {
          return shim;
        }
        ;
        var ReactPropTypes = {
          array: shim,
          bigint: shim,
          bool: shim,
          func: shim,
          number: shim,
          object: shim,
          string: shim,
          symbol: shim,
          any: shim,
          arrayOf: getShim,
          element: shim,
          elementType: shim,
          instanceOf: getShim,
          node: shim,
          objectOf: getShim,
          oneOf: getShim,
          oneOfType: getShim,
          shape: getShim,
          exact: getShim,
          checkPropTypes: emptyFunctionWithReset,
          resetWarningCache: emptyFunction
        };
        ReactPropTypes.PropTypes = ReactPropTypes;
        return ReactPropTypes;
      };
    }
  });

  // node_modules/prop-types/index.js
  var require_prop_types = __commonJS({
    "node_modules/prop-types/index.js"(exports, module) {
      if (false) {
        ReactIs = null;
        throwOnDirectAccess = true;
        module.exports = null(ReactIs.isElement, throwOnDirectAccess);
      } else {
        module.exports = require_factoryWithThrowingShims()();
      }
      var ReactIs;
      var throwOnDirectAccess;
    }
  });

  // node_modules/clsx/dist/clsx.js
  var require_clsx = __commonJS({
    "node_modules/clsx/dist/clsx.js"(exports, module) {
      function e(r3) {
        var o2, t, f2 = "";
        if ("string" == typeof r3 || "number" == typeof r3)
          f2 += r3;
        else if ("object" == typeof r3)
          if (Array.isArray(r3))
            for (o2 = 0; o2 < r3.length; o2++)
              r3[o2] && (t = e(r3[o2])) && (f2 && (f2 += " "), f2 += t);
          else
            for (o2 in r3)
              r3[o2] && (f2 && (f2 += " "), f2 += o2);
        return f2;
      }
      function r2() {
        for (var r3, o2, t = 0, f2 = ""; t < arguments.length; )
          (r3 = arguments[t++]) && (o2 = e(r3)) && (f2 && (f2 += " "), f2 += o2);
        return f2;
      }
      module.exports = r2, module.exports.clsx = r2;
    }
  });

  // node_modules/react-draggable/build/cjs/utils/shims.js
  var require_shims = __commonJS({
    "node_modules/react-draggable/build/cjs/utils/shims.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.dontSetMe = dontSetMe;
      exports.findInArray = findInArray;
      exports.int = int2;
      exports.isFunction = isFunction2;
      exports.isNum = isNum;
      function findInArray(array, callback) {
        for (var i2 = 0, length2 = array.length; i2 < length2; i2++) {
          if (callback.apply(callback, [array[i2], i2, array]))
            return array[i2];
        }
      }
      function isFunction2(func) {
        return typeof func === "function" || Object.prototype.toString.call(func) === "[object Function]";
      }
      function isNum(num) {
        return typeof num === "number" && !isNaN(num);
      }
      function int2(a2) {
        return parseInt(a2, 10);
      }
      function dontSetMe(props, propName, componentName) {
        if (props[propName]) {
          return new Error("Invalid prop ".concat(propName, " passed to ").concat(componentName, " - do not set this, set it on the child."));
        }
      }
    }
  });

  // node_modules/react-draggable/build/cjs/utils/getPrefix.js
  var require_getPrefix = __commonJS({
    "node_modules/react-draggable/build/cjs/utils/getPrefix.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.browserPrefixToKey = browserPrefixToKey;
      exports.browserPrefixToStyle = browserPrefixToStyle;
      exports.default = void 0;
      exports.getPrefix = getPrefix;
      var prefixes = ["Moz", "Webkit", "O", "ms"];
      function getPrefix() {
        var _window$document, _window$document$docu;
        var prop = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
        if (typeof window === "undefined")
          return "";
        var style = (_window$document = window.document) === null || _window$document === void 0 ? void 0 : (_window$document$docu = _window$document.documentElement) === null || _window$document$docu === void 0 ? void 0 : _window$document$docu.style;
        if (!style)
          return "";
        if (prop in style)
          return "";
        for (var i2 = 0; i2 < prefixes.length; i2++) {
          if (browserPrefixToKey(prop, prefixes[i2]) in style)
            return prefixes[i2];
        }
        return "";
      }
      function browserPrefixToKey(prop, prefix2) {
        return prefix2 ? "".concat(prefix2).concat(kebabToTitleCase(prop)) : prop;
      }
      function browserPrefixToStyle(prop, prefix2) {
        return prefix2 ? "-".concat(prefix2.toLowerCase(), "-").concat(prop) : prop;
      }
      function kebabToTitleCase(str) {
        var out = "";
        var shouldCapitalize = true;
        for (var i2 = 0; i2 < str.length; i2++) {
          if (shouldCapitalize) {
            out += str[i2].toUpperCase();
            shouldCapitalize = false;
          } else if (str[i2] === "-") {
            shouldCapitalize = true;
          } else {
            out += str[i2];
          }
        }
        return out;
      }
      var _default = getPrefix();
      exports.default = _default;
    }
  });

  // node_modules/react-draggable/build/cjs/utils/domFns.js
  var require_domFns = __commonJS({
    "node_modules/react-draggable/build/cjs/utils/domFns.js"(exports) {
      "use strict";
      function _typeof(obj) {
        "@babel/helpers - typeof";
        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
          return typeof obj2;
        } : function(obj2) {
          return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        }, _typeof(obj);
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.addClassName = addClassName;
      exports.addEvent = addEvent;
      exports.addUserSelectStyles = addUserSelectStyles;
      exports.createCSSTransform = createCSSTransform;
      exports.createSVGTransform = createSVGTransform;
      exports.getTouch = getTouch;
      exports.getTouchIdentifier = getTouchIdentifier;
      exports.getTranslation = getTranslation;
      exports.innerHeight = innerHeight;
      exports.innerWidth = innerWidth;
      exports.matchesSelector = matchesSelector;
      exports.matchesSelectorAndParentsTo = matchesSelectorAndParentsTo;
      exports.offsetXYFromParent = offsetXYFromParent;
      exports.outerHeight = outerHeight;
      exports.outerWidth = outerWidth;
      exports.removeClassName = removeClassName;
      exports.removeEvent = removeEvent;
      exports.removeUserSelectStyles = removeUserSelectStyles;
      var _shims = require_shims();
      var _getPrefix = _interopRequireWildcard(require_getPrefix());
      function _getRequireWildcardCache(nodeInterop) {
        if (typeof WeakMap !== "function")
          return null;
        var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
        var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
        return (_getRequireWildcardCache = function _getRequireWildcardCache2(nodeInterop2) {
          return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
        })(nodeInterop);
      }
      function _interopRequireWildcard(obj, nodeInterop) {
        if (!nodeInterop && obj && obj.__esModule) {
          return obj;
        }
        if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
          return { default: obj };
        }
        var cache5 = _getRequireWildcardCache(nodeInterop);
        if (cache5 && cache5.has(obj)) {
          return cache5.get(obj);
        }
        var newObj = {};
        var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var key in obj) {
          if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
        newObj.default = obj;
        if (cache5) {
          cache5.set(obj, newObj);
        }
        return newObj;
      }
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          })), keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread(target) {
        for (var i2 = 1; i2 < arguments.length; i2++) {
          var source = null != arguments[i2] ? arguments[i2] : {};
          i2 % 2 ? ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
        return target;
      }
      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      var matchesSelectorFunc = "";
      function matchesSelector(el, selector) {
        if (!matchesSelectorFunc) {
          matchesSelectorFunc = (0, _shims.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(method) {
            return (0, _shims.isFunction)(el[method]);
          });
        }
        if (!(0, _shims.isFunction)(el[matchesSelectorFunc]))
          return false;
        return el[matchesSelectorFunc](selector);
      }
      function matchesSelectorAndParentsTo(el, selector, baseNode) {
        var node2 = el;
        do {
          if (matchesSelector(node2, selector))
            return true;
          if (node2 === baseNode)
            return false;
          node2 = node2.parentNode;
        } while (node2);
        return false;
      }
      function addEvent(el, event, handler, inputOptions) {
        if (!el)
          return;
        var options = _objectSpread({
          capture: true
        }, inputOptions);
        if (el.addEventListener) {
          el.addEventListener(event, handler, options);
        } else if (el.attachEvent) {
          el.attachEvent("on" + event, handler);
        } else {
          el["on" + event] = handler;
        }
      }
      function removeEvent(el, event, handler, inputOptions) {
        if (!el)
          return;
        var options = _objectSpread({
          capture: true
        }, inputOptions);
        if (el.removeEventListener) {
          el.removeEventListener(event, handler, options);
        } else if (el.detachEvent) {
          el.detachEvent("on" + event, handler);
        } else {
          el["on" + event] = null;
        }
      }
      function outerHeight(node2) {
        var height = node2.clientHeight;
        var computedStyle = node2.ownerDocument.defaultView.getComputedStyle(node2);
        height += (0, _shims.int)(computedStyle.borderTopWidth);
        height += (0, _shims.int)(computedStyle.borderBottomWidth);
        return height;
      }
      function outerWidth(node2) {
        var width = node2.clientWidth;
        var computedStyle = node2.ownerDocument.defaultView.getComputedStyle(node2);
        width += (0, _shims.int)(computedStyle.borderLeftWidth);
        width += (0, _shims.int)(computedStyle.borderRightWidth);
        return width;
      }
      function innerHeight(node2) {
        var height = node2.clientHeight;
        var computedStyle = node2.ownerDocument.defaultView.getComputedStyle(node2);
        height -= (0, _shims.int)(computedStyle.paddingTop);
        height -= (0, _shims.int)(computedStyle.paddingBottom);
        return height;
      }
      function innerWidth(node2) {
        var width = node2.clientWidth;
        var computedStyle = node2.ownerDocument.defaultView.getComputedStyle(node2);
        width -= (0, _shims.int)(computedStyle.paddingLeft);
        width -= (0, _shims.int)(computedStyle.paddingRight);
        return width;
      }
      function offsetXYFromParent(evt, offsetParent, scale2) {
        var isBody = offsetParent === offsetParent.ownerDocument.body;
        var offsetParentRect = isBody ? {
          left: 0,
          top: 0
        } : offsetParent.getBoundingClientRect();
        var x2 = (evt.clientX + offsetParent.scrollLeft - offsetParentRect.left) / scale2;
        var y2 = (evt.clientY + offsetParent.scrollTop - offsetParentRect.top) / scale2;
        return {
          x: x2,
          y: y2
        };
      }
      function createCSSTransform(controlPos, positionOffset) {
        var translation = getTranslation(controlPos, positionOffset, "px");
        return _defineProperty({}, (0, _getPrefix.browserPrefixToKey)("transform", _getPrefix.default), translation);
      }
      function createSVGTransform(controlPos, positionOffset) {
        var translation = getTranslation(controlPos, positionOffset, "");
        return translation;
      }
      function getTranslation(_ref2, positionOffset, unitSuffix) {
        var x2 = _ref2.x, y2 = _ref2.y;
        var translation = "translate(".concat(x2).concat(unitSuffix, ",").concat(y2).concat(unitSuffix, ")");
        if (positionOffset) {
          var defaultX = "".concat(typeof positionOffset.x === "string" ? positionOffset.x : positionOffset.x + unitSuffix);
          var defaultY = "".concat(typeof positionOffset.y === "string" ? positionOffset.y : positionOffset.y + unitSuffix);
          translation = "translate(".concat(defaultX, ", ").concat(defaultY, ")") + translation;
        }
        return translation;
      }
      function getTouch(e, identifier2) {
        return e.targetTouches && (0, _shims.findInArray)(e.targetTouches, function(t) {
          return identifier2 === t.identifier;
        }) || e.changedTouches && (0, _shims.findInArray)(e.changedTouches, function(t) {
          return identifier2 === t.identifier;
        });
      }
      function getTouchIdentifier(e) {
        if (e.targetTouches && e.targetTouches[0])
          return e.targetTouches[0].identifier;
        if (e.changedTouches && e.changedTouches[0])
          return e.changedTouches[0].identifier;
      }
      function addUserSelectStyles(doc) {
        if (!doc)
          return;
        var styleEl = doc.getElementById("react-draggable-style-el");
        if (!styleEl) {
          styleEl = doc.createElement("style");
          styleEl.type = "text/css";
          styleEl.id = "react-draggable-style-el";
          styleEl.innerHTML = ".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n";
          styleEl.innerHTML += ".react-draggable-transparent-selection *::selection {all: inherit;}\n";
          doc.getElementsByTagName("head")[0].appendChild(styleEl);
        }
        if (doc.body)
          addClassName(doc.body, "react-draggable-transparent-selection");
      }
      function removeUserSelectStyles(doc) {
        if (!doc)
          return;
        try {
          if (doc.body)
            removeClassName(doc.body, "react-draggable-transparent-selection");
          if (doc.selection) {
            doc.selection.empty();
          } else {
            var selection = (doc.defaultView || window).getSelection();
            if (selection && selection.type !== "Caret") {
              selection.removeAllRanges();
            }
          }
        } catch (e) {
        }
      }
      function addClassName(el, className) {
        if (el.classList) {
          el.classList.add(className);
        } else {
          if (!el.className.match(new RegExp("(?:^|\\s)".concat(className, "(?!\\S)")))) {
            el.className += " ".concat(className);
          }
        }
      }
      function removeClassName(el, className) {
        if (el.classList) {
          el.classList.remove(className);
        } else {
          el.className = el.className.replace(new RegExp("(?:^|\\s)".concat(className, "(?!\\S)"), "g"), "");
        }
      }
    }
  });

  // node_modules/react-draggable/build/cjs/utils/positionFns.js
  var require_positionFns = __commonJS({
    "node_modules/react-draggable/build/cjs/utils/positionFns.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.canDragX = canDragX;
      exports.canDragY = canDragY;
      exports.createCoreData = createCoreData;
      exports.createDraggableData = createDraggableData;
      exports.getBoundPosition = getBoundPosition;
      exports.getControlPosition = getControlPosition;
      exports.snapToGrid = snapToGrid;
      var _shims = require_shims();
      var _domFns = require_domFns();
      function getBoundPosition(draggable, x2, y2) {
        if (!draggable.props.bounds)
          return [x2, y2];
        var bounds = draggable.props.bounds;
        bounds = typeof bounds === "string" ? bounds : cloneBounds(bounds);
        var node2 = findDOMNode(draggable);
        if (typeof bounds === "string") {
          var ownerDocument = node2.ownerDocument;
          var ownerWindow = ownerDocument.defaultView;
          var boundNode;
          if (bounds === "parent") {
            boundNode = node2.parentNode;
          } else {
            boundNode = ownerDocument.querySelector(bounds);
          }
          if (!(boundNode instanceof ownerWindow.HTMLElement)) {
            throw new Error('Bounds selector "' + bounds + '" could not find an element.');
          }
          var boundNodeEl = boundNode;
          var nodeStyle = ownerWindow.getComputedStyle(node2);
          var boundNodeStyle = ownerWindow.getComputedStyle(boundNodeEl);
          bounds = {
            left: -node2.offsetLeft + (0, _shims.int)(boundNodeStyle.paddingLeft) + (0, _shims.int)(nodeStyle.marginLeft),
            top: -node2.offsetTop + (0, _shims.int)(boundNodeStyle.paddingTop) + (0, _shims.int)(nodeStyle.marginTop),
            right: (0, _domFns.innerWidth)(boundNodeEl) - (0, _domFns.outerWidth)(node2) - node2.offsetLeft + (0, _shims.int)(boundNodeStyle.paddingRight) - (0, _shims.int)(nodeStyle.marginRight),
            bottom: (0, _domFns.innerHeight)(boundNodeEl) - (0, _domFns.outerHeight)(node2) - node2.offsetTop + (0, _shims.int)(boundNodeStyle.paddingBottom) - (0, _shims.int)(nodeStyle.marginBottom)
          };
        }
        if ((0, _shims.isNum)(bounds.right))
          x2 = Math.min(x2, bounds.right);
        if ((0, _shims.isNum)(bounds.bottom))
          y2 = Math.min(y2, bounds.bottom);
        if ((0, _shims.isNum)(bounds.left))
          x2 = Math.max(x2, bounds.left);
        if ((0, _shims.isNum)(bounds.top))
          y2 = Math.max(y2, bounds.top);
        return [x2, y2];
      }
      function snapToGrid(grid, pendingX, pendingY) {
        var x2 = Math.round(pendingX / grid[0]) * grid[0];
        var y2 = Math.round(pendingY / grid[1]) * grid[1];
        return [x2, y2];
      }
      function canDragX(draggable) {
        return draggable.props.axis === "both" || draggable.props.axis === "x";
      }
      function canDragY(draggable) {
        return draggable.props.axis === "both" || draggable.props.axis === "y";
      }
      function getControlPosition(e, touchIdentifier, draggableCore) {
        var touchObj = typeof touchIdentifier === "number" ? (0, _domFns.getTouch)(e, touchIdentifier) : null;
        if (typeof touchIdentifier === "number" && !touchObj)
          return null;
        var node2 = findDOMNode(draggableCore);
        var offsetParent = draggableCore.props.offsetParent || node2.offsetParent || node2.ownerDocument.body;
        return (0, _domFns.offsetXYFromParent)(touchObj || e, offsetParent, draggableCore.props.scale);
      }
      function createCoreData(draggable, x2, y2) {
        var state = draggable.state;
        var isStart = !(0, _shims.isNum)(state.lastX);
        var node2 = findDOMNode(draggable);
        if (isStart) {
          return {
            node: node2,
            deltaX: 0,
            deltaY: 0,
            lastX: x2,
            lastY: y2,
            x: x2,
            y: y2
          };
        } else {
          return {
            node: node2,
            deltaX: x2 - state.lastX,
            deltaY: y2 - state.lastY,
            lastX: state.lastX,
            lastY: state.lastY,
            x: x2,
            y: y2
          };
        }
      }
      function createDraggableData(draggable, coreData) {
        var scale2 = draggable.props.scale;
        return {
          node: coreData.node,
          x: draggable.state.x + coreData.deltaX / scale2,
          y: draggable.state.y + coreData.deltaY / scale2,
          deltaX: coreData.deltaX / scale2,
          deltaY: coreData.deltaY / scale2,
          lastX: draggable.state.x,
          lastY: draggable.state.y
        };
      }
      function cloneBounds(bounds) {
        return {
          left: bounds.left,
          top: bounds.top,
          right: bounds.right,
          bottom: bounds.bottom
        };
      }
      function findDOMNode(draggable) {
        var node2 = draggable.findDOMNode();
        if (!node2) {
          throw new Error("<DraggableCore>: Unmounted during event!");
        }
        return node2;
      }
    }
  });

  // node_modules/react-draggable/build/cjs/utils/log.js
  var require_log = __commonJS({
    "node_modules/react-draggable/build/cjs/utils/log.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = log;
      function log() {
        var _console;
        if (void 0)
          (_console = console).log.apply(_console, arguments);
      }
    }
  });

  // node_modules/react-draggable/build/cjs/DraggableCore.js
  var require_DraggableCore = __commonJS({
    "node_modules/react-draggable/build/cjs/DraggableCore.js"(exports) {
      "use strict";
      function _typeof(obj) {
        "@babel/helpers - typeof";
        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
          return typeof obj2;
        } : function(obj2) {
          return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        }, _typeof(obj);
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var React25 = _interopRequireWildcard(require_react());
      var _propTypes = _interopRequireDefault(require_prop_types());
      var _reactDom = _interopRequireDefault(require_react_dom());
      var _domFns = require_domFns();
      var _positionFns = require_positionFns();
      var _shims = require_shims();
      var _log = _interopRequireDefault(require_log());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _getRequireWildcardCache(nodeInterop) {
        if (typeof WeakMap !== "function")
          return null;
        var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
        var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
        return (_getRequireWildcardCache = function _getRequireWildcardCache2(nodeInterop2) {
          return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
        })(nodeInterop);
      }
      function _interopRequireWildcard(obj, nodeInterop) {
        if (!nodeInterop && obj && obj.__esModule) {
          return obj;
        }
        if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
          return { default: obj };
        }
        var cache5 = _getRequireWildcardCache(nodeInterop);
        if (cache5 && cache5.has(obj)) {
          return cache5.get(obj);
        }
        var newObj = {};
        var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var key in obj) {
          if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
        newObj.default = obj;
        if (cache5) {
          cache5.set(obj, newObj);
        }
        return newObj;
      }
      function _slicedToArray(arr, i2) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i2) || _unsupportedIterableToArray(arr, i2) || _nonIterableRest();
      }
      function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _unsupportedIterableToArray(o2, minLen) {
        if (!o2)
          return;
        if (typeof o2 === "string")
          return _arrayLikeToArray(o2, minLen);
        var n = Object.prototype.toString.call(o2).slice(8, -1);
        if (n === "Object" && o2.constructor)
          n = o2.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(o2);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _arrayLikeToArray(o2, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) {
          arr2[i2] = arr[i2];
        }
        return arr2;
      }
      function _iterableToArrayLimit(arr, i2) {
        var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
        if (_i == null)
          return;
        var _arr = [];
        var _n = true;
        var _d = false;
        var _s, _e2;
        try {
          for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i2 && _arr.length === i2)
              break;
          }
        } catch (err) {
          _d = true;
          _e2 = err;
        } finally {
          try {
            if (!_n && _i["return"] != null)
              _i["return"]();
          } finally {
            if (_d)
              throw _e2;
          }
        }
        return _arr;
      }
      function _arrayWithHoles(arr) {
        if (Array.isArray(arr))
          return arr;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i2 = 0; i2 < props.length; i2++) {
          var descriptor = props[i2];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", { writable: false });
        return Constructor;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
        Object.defineProperty(subClass, "prototype", { writable: false });
        if (superClass)
          _setPrototypeOf(subClass, superClass);
      }
      function _setPrototypeOf(o2, p2) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o3, p3) {
          o3.__proto__ = p3;
          return o3;
        };
        return _setPrototypeOf(o2, p2);
      }
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var Super = _getPrototypeOf(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possibleConstructorReturn(this, result);
        };
      }
      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        } else if (call !== void 0) {
          throw new TypeError("Derived constructors may only return object or undefined");
        }
        return _assertThisInitialized(self);
      }
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _getPrototypeOf(o2) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o3) {
          return o3.__proto__ || Object.getPrototypeOf(o3);
        };
        return _getPrototypeOf(o2);
      }
      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      var eventsFor = {
        touch: {
          start: "touchstart",
          move: "touchmove",
          stop: "touchend"
        },
        mouse: {
          start: "mousedown",
          move: "mousemove",
          stop: "mouseup"
        }
      };
      var dragEventFor = eventsFor.mouse;
      var DraggableCore = /* @__PURE__ */ function(_React$Component) {
        _inherits(DraggableCore2, _React$Component);
        var _super = _createSuper(DraggableCore2);
        function DraggableCore2() {
          var _this;
          _classCallCheck(this, DraggableCore2);
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _super.call.apply(_super, [this].concat(args));
          _defineProperty(_assertThisInitialized(_this), "state", {
            dragging: false,
            // Used while dragging to determine deltas.
            lastX: NaN,
            lastY: NaN,
            touchIdentifier: null
          });
          _defineProperty(_assertThisInitialized(_this), "mounted", false);
          _defineProperty(_assertThisInitialized(_this), "handleDragStart", function(e) {
            _this.props.onMouseDown(e);
            if (!_this.props.allowAnyClick && typeof e.button === "number" && e.button !== 0)
              return false;
            var thisNode = _this.findDOMNode();
            if (!thisNode || !thisNode.ownerDocument || !thisNode.ownerDocument.body) {
              throw new Error("<DraggableCore> not mounted on DragStart!");
            }
            var ownerDocument = thisNode.ownerDocument;
            if (_this.props.disabled || !(e.target instanceof ownerDocument.defaultView.Node) || _this.props.handle && !(0, _domFns.matchesSelectorAndParentsTo)(e.target, _this.props.handle, thisNode) || _this.props.cancel && (0, _domFns.matchesSelectorAndParentsTo)(e.target, _this.props.cancel, thisNode)) {
              return;
            }
            if (e.type === "touchstart")
              e.preventDefault();
            var touchIdentifier = (0, _domFns.getTouchIdentifier)(e);
            _this.setState({
              touchIdentifier
            });
            var position2 = (0, _positionFns.getControlPosition)(e, touchIdentifier, _assertThisInitialized(_this));
            if (position2 == null)
              return;
            var x2 = position2.x, y2 = position2.y;
            var coreEvent = (0, _positionFns.createCoreData)(_assertThisInitialized(_this), x2, y2);
            (0, _log.default)("DraggableCore: handleDragStart: %j", coreEvent);
            (0, _log.default)("calling", _this.props.onStart);
            var shouldUpdate = _this.props.onStart(e, coreEvent);
            if (shouldUpdate === false || _this.mounted === false)
              return;
            if (_this.props.enableUserSelectHack)
              (0, _domFns.addUserSelectStyles)(ownerDocument);
            _this.setState({
              dragging: true,
              lastX: x2,
              lastY: y2
            });
            (0, _domFns.addEvent)(ownerDocument, dragEventFor.move, _this.handleDrag);
            (0, _domFns.addEvent)(ownerDocument, dragEventFor.stop, _this.handleDragStop);
          });
          _defineProperty(_assertThisInitialized(_this), "handleDrag", function(e) {
            var position2 = (0, _positionFns.getControlPosition)(e, _this.state.touchIdentifier, _assertThisInitialized(_this));
            if (position2 == null)
              return;
            var x2 = position2.x, y2 = position2.y;
            if (Array.isArray(_this.props.grid)) {
              var deltaX = x2 - _this.state.lastX, deltaY = y2 - _this.state.lastY;
              var _snapToGrid = (0, _positionFns.snapToGrid)(_this.props.grid, deltaX, deltaY);
              var _snapToGrid2 = _slicedToArray(_snapToGrid, 2);
              deltaX = _snapToGrid2[0];
              deltaY = _snapToGrid2[1];
              if (!deltaX && !deltaY)
                return;
              x2 = _this.state.lastX + deltaX, y2 = _this.state.lastY + deltaY;
            }
            var coreEvent = (0, _positionFns.createCoreData)(_assertThisInitialized(_this), x2, y2);
            (0, _log.default)("DraggableCore: handleDrag: %j", coreEvent);
            var shouldUpdate = _this.props.onDrag(e, coreEvent);
            if (shouldUpdate === false || _this.mounted === false) {
              try {
                _this.handleDragStop(new MouseEvent("mouseup"));
              } catch (err) {
                var event = document.createEvent("MouseEvents");
                event.initMouseEvent("mouseup", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                _this.handleDragStop(event);
              }
              return;
            }
            _this.setState({
              lastX: x2,
              lastY: y2
            });
          });
          _defineProperty(_assertThisInitialized(_this), "handleDragStop", function(e) {
            if (!_this.state.dragging)
              return;
            var position2 = (0, _positionFns.getControlPosition)(e, _this.state.touchIdentifier, _assertThisInitialized(_this));
            if (position2 == null)
              return;
            var x2 = position2.x, y2 = position2.y;
            if (Array.isArray(_this.props.grid)) {
              var deltaX = x2 - _this.state.lastX || 0;
              var deltaY = y2 - _this.state.lastY || 0;
              var _snapToGrid3 = (0, _positionFns.snapToGrid)(_this.props.grid, deltaX, deltaY);
              var _snapToGrid4 = _slicedToArray(_snapToGrid3, 2);
              deltaX = _snapToGrid4[0];
              deltaY = _snapToGrid4[1];
              x2 = _this.state.lastX + deltaX, y2 = _this.state.lastY + deltaY;
            }
            var coreEvent = (0, _positionFns.createCoreData)(_assertThisInitialized(_this), x2, y2);
            var shouldContinue = _this.props.onStop(e, coreEvent);
            if (shouldContinue === false || _this.mounted === false)
              return false;
            var thisNode = _this.findDOMNode();
            if (thisNode) {
              if (_this.props.enableUserSelectHack)
                (0, _domFns.removeUserSelectStyles)(thisNode.ownerDocument);
            }
            (0, _log.default)("DraggableCore: handleDragStop: %j", coreEvent);
            _this.setState({
              dragging: false,
              lastX: NaN,
              lastY: NaN
            });
            if (thisNode) {
              (0, _log.default)("DraggableCore: Removing handlers");
              (0, _domFns.removeEvent)(thisNode.ownerDocument, dragEventFor.move, _this.handleDrag);
              (0, _domFns.removeEvent)(thisNode.ownerDocument, dragEventFor.stop, _this.handleDragStop);
            }
          });
          _defineProperty(_assertThisInitialized(_this), "onMouseDown", function(e) {
            dragEventFor = eventsFor.mouse;
            return _this.handleDragStart(e);
          });
          _defineProperty(_assertThisInitialized(_this), "onMouseUp", function(e) {
            dragEventFor = eventsFor.mouse;
            return _this.handleDragStop(e);
          });
          _defineProperty(_assertThisInitialized(_this), "onTouchStart", function(e) {
            dragEventFor = eventsFor.touch;
            return _this.handleDragStart(e);
          });
          _defineProperty(_assertThisInitialized(_this), "onTouchEnd", function(e) {
            dragEventFor = eventsFor.touch;
            return _this.handleDragStop(e);
          });
          return _this;
        }
        _createClass(DraggableCore2, [{
          key: "componentDidMount",
          value: function componentDidMount() {
            this.mounted = true;
            var thisNode = this.findDOMNode();
            if (thisNode) {
              (0, _domFns.addEvent)(thisNode, eventsFor.touch.start, this.onTouchStart, {
                passive: false
              });
            }
          }
        }, {
          key: "componentWillUnmount",
          value: function componentWillUnmount() {
            this.mounted = false;
            var thisNode = this.findDOMNode();
            if (thisNode) {
              var ownerDocument = thisNode.ownerDocument;
              (0, _domFns.removeEvent)(ownerDocument, eventsFor.mouse.move, this.handleDrag);
              (0, _domFns.removeEvent)(ownerDocument, eventsFor.touch.move, this.handleDrag);
              (0, _domFns.removeEvent)(ownerDocument, eventsFor.mouse.stop, this.handleDragStop);
              (0, _domFns.removeEvent)(ownerDocument, eventsFor.touch.stop, this.handleDragStop);
              (0, _domFns.removeEvent)(thisNode, eventsFor.touch.start, this.onTouchStart, {
                passive: false
              });
              if (this.props.enableUserSelectHack)
                (0, _domFns.removeUserSelectStyles)(ownerDocument);
            }
          }
          // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
          // the underlying DOM node ourselves. See the README for more information.
        }, {
          key: "findDOMNode",
          value: function findDOMNode() {
            var _this$props, _this$props2, _this$props2$nodeRef;
            return (_this$props = this.props) !== null && _this$props !== void 0 && _this$props.nodeRef ? (_this$props2 = this.props) === null || _this$props2 === void 0 ? void 0 : (_this$props2$nodeRef = _this$props2.nodeRef) === null || _this$props2$nodeRef === void 0 ? void 0 : _this$props2$nodeRef.current : _reactDom.default.findDOMNode(this);
          }
        }, {
          key: "render",
          value: function render() {
            return /* @__PURE__ */ React25.cloneElement(React25.Children.only(this.props.children), {
              // Note: mouseMove handler is attached to document so it will still function
              // when the user drags quickly and leaves the bounds of the element.
              onMouseDown: this.onMouseDown,
              onMouseUp: this.onMouseUp,
              // onTouchStart is added on `componentDidMount` so they can be added with
              // {passive: false}, which allows it to cancel. See
              // https://developers.google.com/web/updates/2017/01/scrolling-intervention
              onTouchEnd: this.onTouchEnd
            });
          }
        }]);
        return DraggableCore2;
      }(React25.Component);
      exports.default = DraggableCore;
      _defineProperty(DraggableCore, "displayName", "DraggableCore");
      _defineProperty(DraggableCore, "propTypes", {
        /**
         * `allowAnyClick` allows dragging using any mouse button.
         * By default, we only accept the left button.
         *
         * Defaults to `false`.
         */
        allowAnyClick: _propTypes.default.bool,
        /**
         * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
         * with the exception of `onMouseDown`, will not fire.
         */
        disabled: _propTypes.default.bool,
        /**
         * By default, we add 'user-select:none' attributes to the document body
         * to prevent ugly text selection during drag. If this is causing problems
         * for your app, set this to `false`.
         */
        enableUserSelectHack: _propTypes.default.bool,
        /**
         * `offsetParent`, if set, uses the passed DOM node to compute drag offsets
         * instead of using the parent node.
         */
        offsetParent: function offsetParent(props, propName) {
          if (props[propName] && props[propName].nodeType !== 1) {
            throw new Error("Draggable's offsetParent must be a DOM Node.");
          }
        },
        /**
         * `grid` specifies the x and y that dragging should snap to.
         */
        grid: _propTypes.default.arrayOf(_propTypes.default.number),
        /**
         * `handle` specifies a selector to be used as the handle that initiates drag.
         *
         * Example:
         *
         * ```jsx
         *   let App = React.createClass({
         *       render: function () {
         *         return (
         *            <Draggable handle=".handle">
         *              <div>
         *                  <div className="handle">Click me to drag</div>
         *                  <div>This is some other content</div>
         *              </div>
         *           </Draggable>
         *         );
         *       }
         *   });
         * ```
         */
        handle: _propTypes.default.string,
        /**
         * `cancel` specifies a selector to be used to prevent drag initialization.
         *
         * Example:
         *
         * ```jsx
         *   let App = React.createClass({
         *       render: function () {
         *           return(
         *               <Draggable cancel=".cancel">
         *                   <div>
         *                     <div className="cancel">You can't drag from here</div>
         *                     <div>Dragging here works fine</div>
         *                   </div>
         *               </Draggable>
         *           );
         *       }
         *   });
         * ```
         */
        cancel: _propTypes.default.string,
        /* If running in React Strict mode, ReactDOM.findDOMNode() is deprecated.
         * Unfortunately, in order for <Draggable> to work properly, we need raw access
         * to the underlying DOM node. If you want to avoid the warning, pass a `nodeRef`
         * as in this example:
         *
         * function MyComponent() {
         *   const nodeRef = React.useRef(null);
         *   return (
         *     <Draggable nodeRef={nodeRef}>
         *       <div ref={nodeRef}>Example Target</div>
         *     </Draggable>
         *   );
         * }
         *
         * This can be used for arbitrarily nested components, so long as the ref ends up
         * pointing to the actual child DOM node and not a custom component.
         */
        nodeRef: _propTypes.default.object,
        /**
         * Called when dragging starts.
         * If this function returns the boolean false, dragging will be canceled.
         */
        onStart: _propTypes.default.func,
        /**
         * Called while dragging.
         * If this function returns the boolean false, dragging will be canceled.
         */
        onDrag: _propTypes.default.func,
        /**
         * Called when dragging stops.
         * If this function returns the boolean false, the drag will remain active.
         */
        onStop: _propTypes.default.func,
        /**
         * A workaround option which can be passed if onMouseDown needs to be accessed,
         * since it'll always be blocked (as there is internal use of onMouseDown)
         */
        onMouseDown: _propTypes.default.func,
        /**
         * `scale`, if set, applies scaling while dragging an element
         */
        scale: _propTypes.default.number,
        /**
         * These properties should be defined on the child, not here.
         */
        className: _shims.dontSetMe,
        style: _shims.dontSetMe,
        transform: _shims.dontSetMe
      });
      _defineProperty(DraggableCore, "defaultProps", {
        allowAnyClick: false,
        // by default only accept left click
        disabled: false,
        enableUserSelectHack: true,
        onStart: function onStart() {
        },
        onDrag: function onDrag() {
        },
        onStop: function onStop() {
        },
        onMouseDown: function onMouseDown() {
        },
        scale: 1
      });
    }
  });

  // node_modules/react-draggable/build/cjs/Draggable.js
  var require_Draggable = __commonJS({
    "node_modules/react-draggable/build/cjs/Draggable.js"(exports) {
      "use strict";
      function _typeof(obj) {
        "@babel/helpers - typeof";
        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
          return typeof obj2;
        } : function(obj2) {
          return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        }, _typeof(obj);
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "DraggableCore", {
        enumerable: true,
        get: function get8() {
          return _DraggableCore.default;
        }
      });
      exports.default = void 0;
      var React25 = _interopRequireWildcard(require_react());
      var _propTypes = _interopRequireDefault(require_prop_types());
      var _reactDom = _interopRequireDefault(require_react_dom());
      var _clsx2 = _interopRequireDefault(require_clsx());
      var _domFns = require_domFns();
      var _positionFns = require_positionFns();
      var _shims = require_shims();
      var _DraggableCore = _interopRequireDefault(require_DraggableCore());
      var _log = _interopRequireDefault(require_log());
      var _excluded = ["axis", "bounds", "children", "defaultPosition", "defaultClassName", "defaultClassNameDragging", "defaultClassNameDragged", "position", "positionOffset", "scale"];
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _getRequireWildcardCache(nodeInterop) {
        if (typeof WeakMap !== "function")
          return null;
        var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
        var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
        return (_getRequireWildcardCache = function _getRequireWildcardCache2(nodeInterop2) {
          return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
        })(nodeInterop);
      }
      function _interopRequireWildcard(obj, nodeInterop) {
        if (!nodeInterop && obj && obj.__esModule) {
          return obj;
        }
        if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
          return { default: obj };
        }
        var cache5 = _getRequireWildcardCache(nodeInterop);
        if (cache5 && cache5.has(obj)) {
          return cache5.get(obj);
        }
        var newObj = {};
        var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var key in obj) {
          if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
        newObj.default = obj;
        if (cache5) {
          cache5.set(obj, newObj);
        }
        return newObj;
      }
      function _extends() {
        _extends = Object.assign || function(target) {
          for (var i2 = 1; i2 < arguments.length; i2++) {
            var source = arguments[i2];
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        };
        return _extends.apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (source == null)
          return {};
        var target = _objectWithoutPropertiesLoose(source, excluded);
        var key, i2;
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
            key = sourceSymbolKeys[i2];
            if (excluded.indexOf(key) >= 0)
              continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key))
              continue;
            target[key] = source[key];
          }
        }
        return target;
      }
      function _objectWithoutPropertiesLoose(source, excluded) {
        if (source == null)
          return {};
        var target = {};
        var sourceKeys = Object.keys(source);
        var key, i2;
        for (i2 = 0; i2 < sourceKeys.length; i2++) {
          key = sourceKeys[i2];
          if (excluded.indexOf(key) >= 0)
            continue;
          target[key] = source[key];
        }
        return target;
      }
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          })), keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread(target) {
        for (var i2 = 1; i2 < arguments.length; i2++) {
          var source = null != arguments[i2] ? arguments[i2] : {};
          i2 % 2 ? ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
        return target;
      }
      function _slicedToArray(arr, i2) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i2) || _unsupportedIterableToArray(arr, i2) || _nonIterableRest();
      }
      function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _unsupportedIterableToArray(o2, minLen) {
        if (!o2)
          return;
        if (typeof o2 === "string")
          return _arrayLikeToArray(o2, minLen);
        var n = Object.prototype.toString.call(o2).slice(8, -1);
        if (n === "Object" && o2.constructor)
          n = o2.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(o2);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _arrayLikeToArray(o2, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) {
          arr2[i2] = arr[i2];
        }
        return arr2;
      }
      function _iterableToArrayLimit(arr, i2) {
        var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
        if (_i == null)
          return;
        var _arr = [];
        var _n = true;
        var _d = false;
        var _s, _e2;
        try {
          for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i2 && _arr.length === i2)
              break;
          }
        } catch (err) {
          _d = true;
          _e2 = err;
        } finally {
          try {
            if (!_n && _i["return"] != null)
              _i["return"]();
          } finally {
            if (_d)
              throw _e2;
          }
        }
        return _arr;
      }
      function _arrayWithHoles(arr) {
        if (Array.isArray(arr))
          return arr;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i2 = 0; i2 < props.length; i2++) {
          var descriptor = props[i2];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", { writable: false });
        return Constructor;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
        Object.defineProperty(subClass, "prototype", { writable: false });
        if (superClass)
          _setPrototypeOf(subClass, superClass);
      }
      function _setPrototypeOf(o2, p2) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o3, p3) {
          o3.__proto__ = p3;
          return o3;
        };
        return _setPrototypeOf(o2, p2);
      }
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var Super = _getPrototypeOf(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possibleConstructorReturn(this, result);
        };
      }
      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        } else if (call !== void 0) {
          throw new TypeError("Derived constructors may only return object or undefined");
        }
        return _assertThisInitialized(self);
      }
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _getPrototypeOf(o2) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o3) {
          return o3.__proto__ || Object.getPrototypeOf(o3);
        };
        return _getPrototypeOf(o2);
      }
      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      var Draggable2 = /* @__PURE__ */ function(_React$Component) {
        _inherits(Draggable3, _React$Component);
        var _super = _createSuper(Draggable3);
        function Draggable3(props) {
          var _this;
          _classCallCheck(this, Draggable3);
          _this = _super.call(this, props);
          _defineProperty(_assertThisInitialized(_this), "onDragStart", function(e, coreData) {
            (0, _log.default)("Draggable: onDragStart: %j", coreData);
            var shouldStart = _this.props.onStart(e, (0, _positionFns.createDraggableData)(_assertThisInitialized(_this), coreData));
            if (shouldStart === false)
              return false;
            _this.setState({
              dragging: true,
              dragged: true
            });
          });
          _defineProperty(_assertThisInitialized(_this), "onDrag", function(e, coreData) {
            if (!_this.state.dragging)
              return false;
            (0, _log.default)("Draggable: onDrag: %j", coreData);
            var uiData = (0, _positionFns.createDraggableData)(_assertThisInitialized(_this), coreData);
            var newState = {
              x: uiData.x,
              y: uiData.y
            };
            if (_this.props.bounds) {
              var x2 = newState.x, y2 = newState.y;
              newState.x += _this.state.slackX;
              newState.y += _this.state.slackY;
              var _getBoundPosition = (0, _positionFns.getBoundPosition)(_assertThisInitialized(_this), newState.x, newState.y), _getBoundPosition2 = _slicedToArray(_getBoundPosition, 2), newStateX = _getBoundPosition2[0], newStateY = _getBoundPosition2[1];
              newState.x = newStateX;
              newState.y = newStateY;
              newState.slackX = _this.state.slackX + (x2 - newState.x);
              newState.slackY = _this.state.slackY + (y2 - newState.y);
              uiData.x = newState.x;
              uiData.y = newState.y;
              uiData.deltaX = newState.x - _this.state.x;
              uiData.deltaY = newState.y - _this.state.y;
            }
            var shouldUpdate = _this.props.onDrag(e, uiData);
            if (shouldUpdate === false)
              return false;
            _this.setState(newState);
          });
          _defineProperty(_assertThisInitialized(_this), "onDragStop", function(e, coreData) {
            if (!_this.state.dragging)
              return false;
            var shouldContinue = _this.props.onStop(e, (0, _positionFns.createDraggableData)(_assertThisInitialized(_this), coreData));
            if (shouldContinue === false)
              return false;
            (0, _log.default)("Draggable: onDragStop: %j", coreData);
            var newState = {
              dragging: false,
              slackX: 0,
              slackY: 0
            };
            var controlled = Boolean(_this.props.position);
            if (controlled) {
              var _this$props$position = _this.props.position, x2 = _this$props$position.x, y2 = _this$props$position.y;
              newState.x = x2;
              newState.y = y2;
            }
            _this.setState(newState);
          });
          _this.state = {
            // Whether or not we are currently dragging.
            dragging: false,
            // Whether or not we have been dragged before.
            dragged: false,
            // Current transform x and y.
            x: props.position ? props.position.x : props.defaultPosition.x,
            y: props.position ? props.position.y : props.defaultPosition.y,
            prevPropsPosition: _objectSpread({}, props.position),
            // Used for compensating for out-of-bounds drags
            slackX: 0,
            slackY: 0,
            // Can only determine if SVG after mounting
            isElementSVG: false
          };
          if (props.position && !(props.onDrag || props.onStop)) {
            console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.");
          }
          return _this;
        }
        _createClass(Draggable3, [{
          key: "componentDidMount",
          value: function componentDidMount() {
            if (typeof window.SVGElement !== "undefined" && this.findDOMNode() instanceof window.SVGElement) {
              this.setState({
                isElementSVG: true
              });
            }
          }
        }, {
          key: "componentWillUnmount",
          value: function componentWillUnmount() {
            this.setState({
              dragging: false
            });
          }
          // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
          // the underlying DOM node ourselves. See the README for more information.
        }, {
          key: "findDOMNode",
          value: function findDOMNode() {
            var _this$props$nodeRef$c, _this$props, _this$props$nodeRef;
            return (_this$props$nodeRef$c = (_this$props = this.props) === null || _this$props === void 0 ? void 0 : (_this$props$nodeRef = _this$props.nodeRef) === null || _this$props$nodeRef === void 0 ? void 0 : _this$props$nodeRef.current) !== null && _this$props$nodeRef$c !== void 0 ? _this$props$nodeRef$c : _reactDom.default.findDOMNode(this);
          }
        }, {
          key: "render",
          value: function render() {
            var _clsx;
            var _this$props2 = this.props, axis = _this$props2.axis, bounds = _this$props2.bounds, children = _this$props2.children, defaultPosition = _this$props2.defaultPosition, defaultClassName = _this$props2.defaultClassName, defaultClassNameDragging = _this$props2.defaultClassNameDragging, defaultClassNameDragged = _this$props2.defaultClassNameDragged, position2 = _this$props2.position, positionOffset = _this$props2.positionOffset, scale2 = _this$props2.scale, draggableCoreProps = _objectWithoutProperties(_this$props2, _excluded);
            var style = {};
            var svgTransform = null;
            var controlled = Boolean(position2);
            var draggable = !controlled || this.state.dragging;
            var validPosition = position2 || defaultPosition;
            var transformOpts = {
              // Set left if horizontal drag is enabled
              x: (0, _positionFns.canDragX)(this) && draggable ? this.state.x : validPosition.x,
              // Set top if vertical drag is enabled
              y: (0, _positionFns.canDragY)(this) && draggable ? this.state.y : validPosition.y
            };
            if (this.state.isElementSVG) {
              svgTransform = (0, _domFns.createSVGTransform)(transformOpts, positionOffset);
            } else {
              style = (0, _domFns.createCSSTransform)(transformOpts, positionOffset);
            }
            var className = (0, _clsx2.default)(children.props.className || "", defaultClassName, (_clsx = {}, _defineProperty(_clsx, defaultClassNameDragging, this.state.dragging), _defineProperty(_clsx, defaultClassNameDragged, this.state.dragged), _clsx));
            return /* @__PURE__ */ React25.createElement(_DraggableCore.default, _extends({}, draggableCoreProps, {
              onStart: this.onDragStart,
              onDrag: this.onDrag,
              onStop: this.onDragStop
            }), /* @__PURE__ */ React25.cloneElement(React25.Children.only(children), {
              className,
              style: _objectSpread(_objectSpread({}, children.props.style), style),
              transform: svgTransform
            }));
          }
        }], [{
          key: "getDerivedStateFromProps",
          value: (
            // React 16.3+
            // Arity (props, state)
            function getDerivedStateFromProps(_ref, _ref2) {
              var position2 = _ref.position;
              var prevPropsPosition = _ref2.prevPropsPosition;
              if (position2 && (!prevPropsPosition || position2.x !== prevPropsPosition.x || position2.y !== prevPropsPosition.y)) {
                (0, _log.default)("Draggable: getDerivedStateFromProps %j", {
                  position: position2,
                  prevPropsPosition
                });
                return {
                  x: position2.x,
                  y: position2.y,
                  prevPropsPosition: _objectSpread({}, position2)
                };
              }
              return null;
            }
          )
        }]);
        return Draggable3;
      }(React25.Component);
      exports.default = Draggable2;
      _defineProperty(Draggable2, "displayName", "Draggable");
      _defineProperty(Draggable2, "propTypes", _objectSpread(_objectSpread({}, _DraggableCore.default.propTypes), {}, {
        /**
         * `axis` determines which axis the draggable can move.
         *
         *  Note that all callbacks will still return data as normal. This only
         *  controls flushing to the DOM.
         *
         * 'both' allows movement horizontally and vertically.
         * 'x' limits movement to horizontal axis.
         * 'y' limits movement to vertical axis.
         * 'none' limits all movement.
         *
         * Defaults to 'both'.
         */
        axis: _propTypes.default.oneOf(["both", "x", "y", "none"]),
        /**
         * `bounds` determines the range of movement available to the element.
         * Available values are:
         *
         * 'parent' restricts movement within the Draggable's parent node.
         *
         * Alternatively, pass an object with the following properties, all of which are optional:
         *
         * {left: LEFT_BOUND, right: RIGHT_BOUND, bottom: BOTTOM_BOUND, top: TOP_BOUND}
         *
         * All values are in px.
         *
         * Example:
         *
         * ```jsx
         *   let App = React.createClass({
         *       render: function () {
         *         return (
         *            <Draggable bounds={{right: 300, bottom: 300}}>
         *              <div>Content</div>
         *           </Draggable>
         *         );
         *       }
         *   });
         * ```
         */
        bounds: _propTypes.default.oneOfType([_propTypes.default.shape({
          left: _propTypes.default.number,
          right: _propTypes.default.number,
          top: _propTypes.default.number,
          bottom: _propTypes.default.number
        }), _propTypes.default.string, _propTypes.default.oneOf([false])]),
        defaultClassName: _propTypes.default.string,
        defaultClassNameDragging: _propTypes.default.string,
        defaultClassNameDragged: _propTypes.default.string,
        /**
         * `defaultPosition` specifies the x and y that the dragged item should start at
         *
         * Example:
         *
         * ```jsx
         *      let App = React.createClass({
         *          render: function () {
         *              return (
         *                  <Draggable defaultPosition={{x: 25, y: 25}}>
         *                      <div>I start with transformX: 25px and transformY: 25px;</div>
         *                  </Draggable>
         *              );
         *          }
         *      });
         * ```
         */
        defaultPosition: _propTypes.default.shape({
          x: _propTypes.default.number,
          y: _propTypes.default.number
        }),
        positionOffset: _propTypes.default.shape({
          x: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
          y: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
        }),
        /**
         * `position`, if present, defines the current position of the element.
         *
         *  This is similar to how form elements in React work - if no `position` is supplied, the component
         *  is uncontrolled.
         *
         * Example:
         *
         * ```jsx
         *      let App = React.createClass({
         *          render: function () {
         *              return (
         *                  <Draggable position={{x: 25, y: 25}}>
         *                      <div>I start with transformX: 25px and transformY: 25px;</div>
         *                  </Draggable>
         *              );
         *          }
         *      });
         * ```
         */
        position: _propTypes.default.shape({
          x: _propTypes.default.number,
          y: _propTypes.default.number
        }),
        /**
         * These properties should be defined on the child, not here.
         */
        className: _shims.dontSetMe,
        style: _shims.dontSetMe,
        transform: _shims.dontSetMe
      }));
      _defineProperty(Draggable2, "defaultProps", _objectSpread(_objectSpread({}, _DraggableCore.default.defaultProps), {}, {
        axis: "both",
        bounds: false,
        defaultClassName: "react-draggable",
        defaultClassNameDragging: "react-draggable-dragging",
        defaultClassNameDragged: "react-draggable-dragged",
        defaultPosition: {
          x: 0,
          y: 0
        },
        scale: 1
      }));
    }
  });

  // node_modules/react-draggable/build/cjs/cjs.js
  var require_cjs = __commonJS({
    "node_modules/react-draggable/build/cjs/cjs.js"(exports, module) {
      "use strict";
      var _require = require_Draggable();
      var Draggable2 = _require.default;
      var DraggableCore = _require.DraggableCore;
      module.exports = Draggable2;
      module.exports.default = Draggable2;
      module.exports.DraggableCore = DraggableCore;
    }
  });

  // src/frontend/index.jsx
  var import_react26 = __toESM(require_react());
  var import_client = __toESM(require_client());

  // src/frontend/context/StorageContext.jsx
  var import_react = __toESM(require_react());
  var import_react_fast_compare = __toESM(require_react_fast_compare());

  // src/constants.js
  var WIDTH = 800;
  var HEIGHT = 480;
  var CELL_WIDTH = 46;
  var PADDING = 4;
  var TRACK_HEIGHT = CELL_WIDTH + PADDING;
  var HEADER_HEIGHT = TRACK_HEIGHT + PADDING;
  var NUM_SWITCHES = 8;
  var NUM_STEPS = 16;
  var ROOT_NOTE = 36;
  var DEFAULT_VELOCITY = 127;
  var DEFAULT_SCALE = 1;
  var MAX_STEPS = 256;
  var MAX_NOTE = 127;
  var MAX_VELOCITY = 127;
  var MAX_PROBABILITY = 100;
  var MAX_CC = 127;
  var MIN_SCALE = 1 / 4;
  var MAX_SCALE = 16;
  var DEFAULT_PROBABILITY = 100;
  var TRIG_OPS = ["AND", "NOT"];
  var PAGE_DECR_SWITCH = 1;
  var PAGE_INCR_SWITCH = 3;
  var CC_EDIT_MODE_SWITCH = 1;
  var TRACK_MUTES_SWITCH = 11;
  var TRACK_CC_SWITCH = 13;
  var TRACK_SETTINGS_SWITCH = 15;
  var TRACK_SETTINGS_ENCODER_INDEX = 7;

  // src/event-emitter.js
  var EventEmitter = class {
    constructor() {
      this.events = {};
    }
    on = (key, fn) => {
      if (!this.events[key])
        this.events[key] = [];
      this.events[key].push(fn);
    };
    off = (key, fn) => {
      if (!this.events[key])
        return;
      this.events[key] = this.events[key].filter((e) => e !== fn);
    };
    emit = (key, ...data) => {
      if (!this.events[key])
        return;
      this.events[key].forEach((cb) => cb(...data));
    };
    removeListeners = () => {
      this.events = {};
    };
  };
  var event_emitter_default = new EventEmitter();

  // src/frontend/gpio.js
  var gpio = {};
  var initialized = false;
  var gpio_default = new Proxy(gpio, {
    get(obj, prop) {
      if (prop in event_emitter_default)
        return event_emitter_default[prop];
      return obj[prop];
    },
    set(obj, prop, value) {
      if (!initialized) {
        event_emitter_default.emit("*", true);
        initialized = true;
      }
      if (prop in obj && obj[prop] !== value) {
        const [type, index4, modifier] = prop.split(/_/g);
        const args = [int(index4), value, prop];
        const releasedArgs = [int(index4), value, prop.replace(/pressed/, "released")];
        event_emitter_default.emit(prop, ...args);
        if (!modifier) {
          event_emitter_default.emit(type, ...args);
        } else if (modifier === "pressed") {
          if (int(value) === 1) {
            event_emitter_default.emit(`${type}_released`, ...releasedArgs);
            event_emitter_default.emit(prop.replace(/pressed/, "released"), ...releasedArgs);
          } else {
            event_emitter_default.emit(`${type}_${modifier}`, ...args);
          }
        } else if (modifier) {
          event_emitter_default.emit(`${type}_${modifier}`, ...args);
        }
      }
      obj[prop] = value;
      return true;
    }
  });

  // src/utils.js
  var mod = (n, m) => (n % m + m) % m;
  var debounce = (fn, ms) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn.apply(void 0, args), ms);
    };
  };
  var clamp = (x2, min2, max2) => Math.min(Math.max(x2, min2), max2);
  var remap = (value, oldRange, newRange) => {
    var newValue = (value - oldRange[0]) * (newRange[1] - newRange[0]) / (oldRange[1] - oldRange[0]) + newRange[0];
    return clamp(newValue, newRange[0], newRange[1]);
  };
  var int = (x2) => parseInt(x2, 10);
  var ceil = Math.ceil;
  var floor = Math.floor;
  var abs = Math.abs;
  var min = Math.min;
  var max = Math.max;
  var isFunction = (x2) => x2 instanceof Function;
  var when = (...conditions) => (callback) => (...args) => {
    const shouldCallback = conditions.flat(Infinity).map((condition) => isFunction(condition) ? condition(args) : condition).every(Boolean);
    if (shouldCallback) {
      if (isFunction(callback))
        return callback(args);
      else if (callback)
        return callback;
      else
        return true;
    } else
      return false;
  };
  var firstArg = (args) => Array.isArray(args) ? args[0] : args;
  var sum = (arr) => arr.reduce((acc, curr) => acc + curr, 0);
  var getMaxSteps = (x2, y2 = NUM_STEPS) => x2 > y2 ? getMaxSteps(x2, y2 + NUM_STEPS) : y2;
  var generateTrigConditionsArray = (n = 8) => Array.from(
    { length: n },
    (_2, i2) => Array.from({ length: n - i2 }, (_3, j2) => [i2 + 1, i2 + 1 + j2])
  ).flat().sort((a2, b) => a2[1] - b[1]).slice(1);
  var trigConditionsArray = generateTrigConditionsArray();
  var omit = (obj, ...keys) => {
    if (!keys?.length)
      return obj;
    const excludeKeys = new Set(keys);
    const excludeFunctions = keys.includes(Function);
    return Object.fromEntries(
      Object.entries(obj).filter(
        ([key, value]) => !excludeKeys.has(key) && (excludeFunctions ? !isFunction(value) : true)
      )
    );
  };
  var ask = (question, callback) => {
    return confirm(question) && callback();
  };
  var getEncoder = (args, relative = true) => {
    const encoderIndex = int(firstArg(args));
    const encoderSuffix = relative ? "_relative" : "";
    return `encoder_${encoderIndex}${encoderSuffix}`;
  };
  var getEncoderValue = (args, relative = true) => {
    return gpio_default?.[getEncoder(args, relative)] || 0;
  };

  // src/frontend/context/StorageContext.jsx
  var initialStorageState = {
    storage: {},
    count: 0
  };
  var StorageContext = (0, import_react.createContext)(initialStorageState);
  var useStorageContext = () => (0, import_react.useContext)(StorageContext);
  var StorageContextProvider = ({ children }) => {
    const storageRef = (0, import_react.useRef)(window.storage || {});
    const [storage, setStorage] = (0, import_react.useState)(storageRef.current);
    const [count, setCount] = (0, import_react.useState)(0);
    (0, import_react.useEffect)(() => {
      if (!(0, import_react_fast_compare.default)(storageRef.current, storage)) {
        storageRef.current = storage;
        setCount((e) => e + 1);
        electron.setStorage(
          JSON.stringify(omit(storage, Function, "midiDeviceCharts"))
        );
      }
    }, [storage]);
    const value = (0, import_react.useMemo)(
      () => ({ storage: storageRef.current, setStorage }),
      [count]
    );
    return /* @__PURE__ */ import_react.default.createElement(StorageContext.Provider, { value }, children);
  };

  // src/frontend/context/StateContext.jsx
  var import_react3 = __toESM(require_react());

  // src/frontend/context/hooks.jsx
  var import_react2 = __toESM(require_react());
  var useIdleCallback = (callback, deps) => {
    const handle = (0, import_react2.useRef)(void 0);
    (0, import_react2.useEffect)(() => {
      if (!callback)
        return () => null;
      if (handle.current)
        cancelIdleCallback(handle.current);
      handle.current = requestIdleCallback(callback, { timeout: 1e3 });
      return () => {
        if (handle.current)
          cancelIdleCallback(handle.current);
      };
    }, deps);
  };
  var useGPIOEvents = (events, deps) => {
    (0, import_react2.useEffect)(
      () => {
        events.forEach(([event, callback]) => gpio_default.on(event, callback));
        return () => {
          events.forEach(([event, callback]) => gpio_default.off(event, callback));
        };
      },
      Array.isArray(deps) ? deps : events
    );
  };

  // src/frontend/context/StateContext.jsx
  var initialState = {
    currentProject: 0,
    currentTrack: 0,
    mutedTracks: [],
    step: 0,
    isPlaying: false
  };
  var StateContext = (0, import_react3.createContext)(initialState);
  var useStateContext = () => (0, import_react3.useContext)(StateContext);
  var StateContextProvider = ({ children }) => {
    const { storage, setStorage } = useStorageContext();
    const [currentProject, setCurrentProject] = (0, import_react3.useState)(
      storage?.currentProject || 0
    );
    const currentProjectState = (0, import_react3.useMemo)(
      () => storage?.projects?.[currentProject]?.state,
      [storage, currentProject]
    );
    const [currentTrack, setCurrentTrack] = (0, import_react3.useState)(
      currentProjectState?.currentTrack || 0
    );
    const [mutedTracks, setMutedTracks] = (0, import_react3.useState)(
      currentProjectState?.mutedTracks || []
    );
    const [step, setStep] = (0, import_react3.useState)(0);
    const [isPlaying, setIsPlaying] = (0, import_react3.useState)(false);
    const muteTrack = (trackId) => setMutedTracks((e) => [...new Set(e.concat(trackId))]);
    const unmuteTrack = (trackId) => setMutedTracks((e) => e.filter((e2) => e2 !== trackId));
    const resetStateContext = (state) => {
      setCurrentTrack((state || initialState).currentTrack);
      setStep((state || initialState).step);
      setMutedTracks((state || initialState).mutedTracks);
    };
    const value = (0, import_react3.useMemo)(() => {
      return {
        currentProject,
        setCurrentProject,
        currentTrack,
        setCurrentTrack,
        mutedTracks,
        setMutedTracks,
        step,
        setStep,
        isPlaying,
        setIsPlaying,
        muteTrack,
        unmuteTrack,
        resetStateContext
      };
    }, [currentProject, currentTrack, mutedTracks, step, isPlaying]);
    const storageValue = (0, import_react3.useMemo)(
      () => omit(value, Function, "currentProject", "step", "isPlaying"),
      [value]
    );
    useIdleCallback(() => {
      setStorage((e) => ({
        ...e,
        currentProject,
        projects: {
          ...e?.projects || {},
          [currentProject]: {
            ...e?.projects?.[currentProject] || {},
            state: storageValue
          }
        }
      }));
    }, [storageValue, currentProject]);
    return /* @__PURE__ */ import_react3.default.createElement(StateContext.Provider, { value }, children);
  };

  // src/frontend/context/MenuContext.jsx
  var import_react4 = __toESM(require_react());
  var trackSettingsMenuPages = {
    TRACK_SETTINGS: 0,
    TRACK_CONDITIONS: 1
  };
  var initialMenuState = {
    showSettingsMenu: false,
    showTrackMenu: false,
    showEnvelopeMenu: false,
    showTrackSettingsMenu: false,
    showTrackControlChangeMenu: false,
    trackSettingsMenuPage: trackSettingsMenuPages.TRACK_SETTINGS,
    hasOpenMenu: false,
    isTrackSettingsMenu: false
  };
  var MenuContext = (0, import_react4.createContext)(initialMenuState);
  var useMenuContext = () => (0, import_react4.useContext)(MenuContext);
  var MenuContextProvider = ({ children }) => {
    const { storage, setStorage } = useStorageContext();
    const { currentProject } = useStateContext();
    const currentProjectMenu = (0, import_react4.useMemo)(
      () => storage?.projects?.[currentProject]?.menu,
      [storage, currentProject]
    );
    const [showSettingsMenu, setShowSettingsMenu] = (0, import_react4.useState)(
      currentProjectMenu?.showSettingsMenu || false
    );
    const [showTrackMenu, setShowTrackMenu] = (0, import_react4.useState)(
      currentProjectMenu?.showTrackMenu || false
    );
    const [showEnvelopeMenu, setShowEnvelopeMenu] = (0, import_react4.useState)(
      currentProjectMenu?.showEnvelopeMenu || false
    );
    const [showTrackSettingsMenu, setShowTrackSettingsMenu] = (0, import_react4.useState)(
      currentProjectMenu?.showTrackSettingsMenu || false
    );
    const [showTrackControlChangeMenu, setShowTrackControlChangeMenu] = (0, import_react4.useState)(
      currentProjectMenu?.showTrackControlChangeMenu || false
    );
    const [trackSettingsMenuPage, setTrackSettingsMenuPage] = (0, import_react4.useState)(
      currentProjectMenu?.trackSettingsMenuPage || trackSettingsMenuPages.TRACK_SETTINGS
    );
    const hasOpenMenu = (0, import_react4.useMemo)(
      () => [showSettingsMenu, showTrackMenu, showEnvelopeMenu].some(Boolean),
      [showSettingsMenu, showTrackMenu, showEnvelopeMenu]
    );
    const resetMenuContext = (state) => {
      setShowSettingsMenu((state || initialMenuState).showSettingsMenu);
      setShowTrackMenu((state || initialMenuState).showTrackMenu);
      setShowEnvelopeMenu((state || initialMenuState).showEnvelopeMenu);
      setShowTrackSettingsMenu((state || initialMenuState).showTrackSettingsMenu);
      setShowTrackControlChangeMenu(
        (state || initialMenuState).showTrackControlChangeMenu
      );
      setTrackSettingsMenuPage((state || initialMenuState).trackSettingsMenuPage);
    };
    const updateTrackSettingsMenuPage = when(
      showTrackSettingsMenu,
      !showTrackControlChangeMenu
    )((args) => {
      const trackSettingsMenuPagesValues = Object.values(trackSettingsMenuPages);
      setTrackSettingsMenuPage(
        (e) => clamp(
          e + getEncoderValue(args),
          trackSettingsMenuPagesValues[0],
          trackSettingsMenuPagesValues.pop()
        )
      );
    });
    useGPIOEvents(
      [
        [
          `encoder_${TRACK_SETTINGS_ENCODER_INDEX}`,
          debounce(updateTrackSettingsMenuPage, 250)
        ]
      ],
      [showTrackSettingsMenu, showTrackControlChangeMenu]
    );
    (0, import_react4.useEffect)(() => {
      if (!hasOpenMenu)
        return () => null;
      electron.updateLeds(Array.from({ length: NUM_SWITCHES }).fill(0).join(""));
    }, [hasOpenMenu]);
    const value = (0, import_react4.useMemo)(() => {
      return {
        showSettingsMenu,
        setShowSettingsMenu,
        showTrackMenu,
        setShowTrackMenu,
        showEnvelopeMenu,
        setShowEnvelopeMenu,
        showTrackSettingsMenu,
        setShowTrackSettingsMenu,
        showTrackControlChangeMenu,
        setShowTrackControlChangeMenu,
        trackSettingsMenuPage,
        setTrackSettingsMenuPage,
        hasOpenMenu,
        resetMenuContext
      };
    }, [
      showSettingsMenu,
      showTrackMenu,
      showEnvelopeMenu,
      showTrackSettingsMenu,
      showTrackControlChangeMenu,
      trackSettingsMenuPage,
      hasOpenMenu
    ]);
    const storageValue = (0, import_react4.useMemo)(
      () => omit(
        value,
        Function,
        "showSettingsMenu",
        "showTrackMenu",
        "showEnvelopeMenu"
      ),
      [value]
    );
    useIdleCallback(() => {
      setStorage((e) => ({
        ...e,
        projects: {
          ...e?.projects || {},
          [currentProject]: {
            ...e?.projects?.[currentProject] || {},
            menu: storageValue
          }
        }
      }));
    }, [storageValue, currentProject]);
    return /* @__PURE__ */ import_react4.default.createElement(MenuContext.Provider, { value }, children);
  };

  // src/frontend/context/TracksContext.jsx
  var import_react6 = __toESM(require_react());

  // src/frontend/context/TrackContext.jsx
  var import_react5 = __toESM(require_react());

  // src/frontend/conditions.js
  var isIndex = (index4) => (args) => int(index4) === int(firstArg(args));
  var isRegularSwitch = (args) => firstArg(args) % 2 === 0;
  var isEncoderSwitch = (args) => firstArg(args) % 2 === 1;
  var isSwitchPressed = (args) => args[1] === 0;

  // src/frontend/context/TrackContext.jsx
  var initialTrackState = {
    id: void 0,
    deviceId: void 0,
    isCurrentTrack: false,
    isMuted: false,
    // track settings page 0
    rootNote: ROOT_NOTE,
    velocity: DEFAULT_VELOCITY,
    probability: DEFAULT_PROBABILITY,
    steps: NUM_STEPS,
    scale: DEFAULT_SCALE,
    // track settings page 1
    isFollowActive: false,
    bank: 0,
    pressedTrig: void 0,
    isEditingControlChangeParams: false,
    trigs: Array.from({ length: NUM_STEPS }).fill(0),
    trigsVelocity: Array.from({ length: NUM_STEPS }).fill(0),
    trigsProbability: Array.from({ length: NUM_STEPS }).fill(0),
    notes: Array.from({ length: NUM_STEPS }).fill(0),
    trackControlChangeValues: Array.from({ length: NUM_SWITCHES }).fill(0),
    controlChangeValues: {},
    controlChangeParams: {},
    trigOp: void 0
  };
  var TrackContext = (0, import_react5.createContext)(initialTrackState);
  var useTrackContext = () => (0, import_react5.useContext)(TrackContext);
  var TrackContextProvider = ({ children, ...props }) => {
    const { storage } = useStorageContext();
    const { currentProject, currentTrack, step, mutedTracks } = useStateContext();
    const {
      showTrackSettingsMenu,
      setShowTrackSettingsMenu,
      showTrackControlChangeMenu,
      setShowTrackControlChangeMenu,
      trackSettingsMenuPage,
      hasOpenMenu
    } = useMenuContext();
    const { setCurrentTracks, isMuteMode } = useTracksContext();
    const switchTimeoutId = (0, import_react5.useRef)(void 0);
    const currentSwitch = (0, import_react5.useRef)(void 0);
    const skipTrigUpdate = (0, import_react5.useRef)(false);
    const editControlChangeParams = (0, import_react5.useRef)(false);
    const [id, setId] = (0, import_react5.useState)(int(props?.id));
    const [deviceId, setDeviceId] = (0, import_react5.useState)(props?.deviceId);
    const [isCurrentTrack, setIsCurrentTrack] = (0, import_react5.useState)(false);
    const [isMuted, setIsMuted] = (0, import_react5.useState)(mutedTracks.includes(id));
    const [rootNote, setRootNote] = (0, import_react5.useState)(int(props?.rootNote) || ROOT_NOTE);
    const [velocity, setVelocity] = (0, import_react5.useState)(
      int(props?.velocity) || DEFAULT_VELOCITY
    );
    const [steps, setSteps] = (0, import_react5.useState)(int(props?.steps) || NUM_STEPS);
    const [probability, setProbability] = (0, import_react5.useState)(
      int(props?.probability) || DEFAULT_PROBABILITY
    );
    const [scale2, setScale] = (0, import_react5.useState)(int(props?.scale) || DEFAULT_SCALE);
    const [isFollowActive, setIsFollowActive] = (0, import_react5.useState)(false);
    const [bank, setBank] = (0, import_react5.useState)(int(props?.bank) || 0);
    const [pressedTrig, setPressedTrig] = (0, import_react5.useState)(void 0);
    const [isEditingControlChangeParams, setIsEditingControlChangeParams] = (0, import_react5.useState)(false);
    const [trigOp, setTrigOp] = (0, import_react5.useState)(props?.trigOp || TRIG_OPS[0]);
    const [trigs, setTrigs] = (0, import_react5.useState)(
      props?.trigs || Array.from({ length: steps }).fill(0)
    );
    const [trigsVelocity, setTrigsVelocity] = (0, import_react5.useState)(
      props?.trigsVelocity || Array.from({ length: steps }).fill(0)
    );
    const [trigsProbability, setTrigsProbability] = (0, import_react5.useState)(
      props?.trigsProbability || Array.from({ length: steps }).fill(0)
    );
    const [notes, setNotes] = (0, import_react5.useState)(
      props?.notes || Array.from({ length: steps }).fill(0)
    );
    const [trackControlChangeValues, setTrackControlChangeValues] = (0, import_react5.useState)(
      props?.trackControlChangeValues || Array.from({ length: NUM_SWITCHES }).fill(0)
    );
    const [controlChangeValues, setControlChangeValues] = (0, import_react5.useState)(
      props?.controlChangeValues || {}
    );
    const [controlChangeParams, setControlChangeParams] = (0, import_react5.useState)(
      props?.controlChangeParams || {}
    );
    const { device } = (0, import_react5.useMemo)(
      () => (storage?.midiDeviceCharts || []).find(
        ({ device: device2 }) => device2?.id === deviceId
      ) || {},
      [deviceId, storage]
    );
    const currentPage = (0, import_react5.useMemo)(
      () => getMaxSteps(step * 4 % steps) / NUM_STEPS - 1,
      [step, steps]
    );
    const bankSteps = (0, import_react5.useMemo)(
      () => min(abs(bank * NUM_SWITCHES - steps), NUM_SWITCHES),
      [bank, steps]
    );
    const rootNoteInstrument = (0, import_react5.useMemo)(() => {
      let numInstrumentNotes;
      const instrumentMap = device?.midi?.notes?.find((e) => {
        const instrumentNotes2 = (e || []).slice(1);
        const hasRootNote = instrumentNotes2.includes(rootNote);
        if (!hasRootNote)
          return;
        numInstrumentNotes = instrumentNotes2.length;
        return hasRootNote;
      });
      if (!numInstrumentNotes || !instrumentMap?.length)
        return;
      return `${instrumentMap[0]}${numInstrumentNotes > 1 ? "+" : ""}`;
    }, [device, rootNote]);
    const instrumentNotes = (0, import_react5.useMemo)(
      () => (device?.midi?.notes || []).reduce(
        (acc, [instrument, ...rest]) => acc.concat(rest.map((e) => [instrument, e])),
        []
      ),
      [device]
    );
    const instrumentControlChangeNames = (0, import_react5.useMemo)(
      () => (device?.midi?.cc || []).reduce(
        (acc, [name, param]) => ({ ...acc, [param]: name }),
        {}
      ),
      [device]
    );
    const currentProbability = (0, import_react5.useMemo)(() => {
      const value2 = trigsProbability?.[pressedTrig];
      return pressedTrig !== void 0 && Boolean(trigs[pressedTrig]) ? value2 > MAX_PROBABILITY ? trigConditionsArray[clamp(
        value2 - MAX_PROBABILITY - 1,
        0,
        trigConditionsArray.length - 1
      )] : value2 : probability;
    }, [pressedTrig, trigs, trigsProbability, probability]);
    const getTrigIndex = (0, import_react5.useCallback)(
      (args) => int(firstArg(args)) / 2 + NUM_SWITCHES * bank,
      [bank]
    );
    const updateLeds = (0, import_react5.useCallback)(
      (input, bankMode = true) => {
        const updatedLeds = Array.from({ length: NUM_SWITCHES }).fill(0);
        const offset = bankMode ? bank : currentPage;
        const slicedTrigs = input.slice(
          offset * NUM_SWITCHES,
          NUM_SWITCHES + offset * NUM_SWITCHES
        );
        const ledValues = updatedLeds.map((e, i2) => (i2 < slicedTrigs.length ? slicedTrigs[i2] : e) ? 1 : 0).join("");
        electron.updateLeds(ledValues);
      },
      [bank, currentPage]
    );
    (0, import_react5.useEffect)(() => {
      setIsCurrentTrack(currentTrack === id);
    }, [id, currentTrack]);
    (0, import_react5.useEffect)(() => {
      setIsMuted(mutedTracks.includes(id));
    }, [id, mutedTracks]);
    (0, import_react5.useEffect)(() => {
      if (!isCurrentTrack)
        return () => null;
      const updateTrigs = when(
        isRegularSwitch,
        !isMuteMode
      )(
        (args) => !skipTrigUpdate.current && getTrigIndex(args) < steps && setTrigs((prevTrigs) => {
          const updatedTrigs = prevTrigs.slice();
          const index4 = getTrigIndex(args);
          updatedTrigs[index4] = updatedTrigs[index4] ? 0 : 1;
          setRootNote((prevRootNote) => {
            setNotes((e) => {
              const updatedNotes = e.slice();
              updatedNotes[index4] = updatedTrigs[index4] ? prevRootNote : 0;
              return updatedNotes;
            });
            return prevRootNote;
          });
          setVelocity((prevVelocity) => {
            setTrigsVelocity((e) => {
              const updatedTrigsVelocity = e.slice();
              updatedTrigsVelocity[index4] = updatedTrigs[index4] ? prevVelocity : 0;
              return updatedTrigsVelocity;
            });
            return prevVelocity;
          });
          setProbability((prevProbability) => {
            setTrigsProbability((e) => {
              const updatedTrigsProbability = e.slice();
              updatedTrigsProbability[index4] = updatedTrigs[index4] ? prevProbability : 0;
              return updatedTrigsProbability;
            });
            return prevProbability;
          });
          updateLeds(updatedTrigs);
          return updatedTrigs;
        })
      );
      const handleRegularSwitchLongPress = when(
        isRegularSwitch,
        !isMuteMode
      )((args) => {
        currentSwitch.current = firstArg(args);
        const isPressed = isSwitchPressed(args);
        if (isPressed) {
          switchTimeoutId.current = setTimeout(() => {
            if (currentSwitch.current !== firstArg(args))
              return;
            setPressedTrig(getTrigIndex(args));
            skipTrigUpdate.current = true;
            const index4 = getTrigIndex(currentSwitch.current);
            electron.log(`LONG PRESS: ${currentSwitch.current} ${index4}`);
          }, 400);
        } else if (switchTimeoutId.current) {
          clearTimeout(switchTimeoutId.current);
        }
        if (!isPressed) {
          setPressedTrig(void 0);
          currentSwitch.current = false;
          skipTrigUpdate.current = false;
          editControlChangeParams.current = false;
        }
      });
      const updateBank = when(
        isEncoderSwitch,
        !showTrackControlChangeMenu,
        !isMuteMode
      )((args) => {
        if (isIndex(PAGE_DECR_SWITCH)(args)) {
          setBank((e) => Math.max(0, e - 1));
        }
        if (isIndex(PAGE_INCR_SWITCH)(args)) {
          setBank((e) => Math.min(e + 1, ceil(steps / NUM_SWITCHES) - 1));
        }
      });
      const toggleTrackSettingsMenu = when()(() => {
        setShowTrackSettingsMenu((e) => !e);
      });
      const toggleControlChangeMenu = when()(() => {
        setShowTrackControlChangeMenu((e) => !e);
      });
      const updateControlChangeValues = when(showTrackControlChangeMenu)(
        (args) => {
          const switchIndex = getTrigIndex(currentSwitch.current);
          const encoderIndex = int(firstArg(args));
          const editCCParams = editControlChangeParams.current === true;
          const instrumentCCParams = (device?.midi?.cc || []).map(([_2, e]) => e);
          setControlChangeParams((prevControlChangeParams) => ({
            ...prevControlChangeParams,
            ...editCCParams && device && {
              [encoderIndex]: instrumentCCParams[mod(
                abs(
                  instrumentCCParams.indexOf(
                    prevControlChangeParams?.[encoderIndex]
                  )
                ) + getEncoderValue(args) || 0,
                instrumentCCParams.length
              )] || instrumentCCParams[0]
            },
            ...editCCParams && !device && {
              [encoderIndex]: clamp(
                prevControlChangeParams?.[encoderIndex] + getEncoderValue(args) || 0,
                0,
                MAX_CC
              )
            }
          }));
          if (!Number.isInteger(currentSwitch.current))
            return;
          setControlChangeValues((prevControlChangeValues) => {
            const hasPressedTrig = Boolean(trigs[switchIndex]);
            const hasCCParam = controlChangeParams?.[encoderIndex] > 0;
            const value2 = prevControlChangeValues?.[switchIndex]?.[encoderIndex] || trackControlChangeValues?.[encoderIndex] || 0;
            return {
              ...prevControlChangeValues,
              ...hasPressedTrig && hasCCParam && {
                [switchIndex]: {
                  ...prevControlChangeValues?.[switchIndex] || {},
                  [encoderIndex]: !editCCParams ? clamp(value2 + getEncoderValue(args) || 0, 0, MAX_CC) : value2 || 0
                }
              }
            };
          });
        }
      );
      const updateControlChangeEditMode = when(
        showTrackControlChangeMenu,
        isEncoderSwitch,
        isIndex(CC_EDIT_MODE_SWITCH),
        !isMuteMode
      )(() => {
        setIsEditingControlChangeParams((e) => {
          editControlChangeParams.current = !e;
          return editControlChangeParams.current;
        });
      });
      const updateTrackControlChangeValues = when(showTrackControlChangeMenu)(
        (args) => {
          if (Number.isInteger(currentSwitch.current))
            return;
          const encoderIndex = int(firstArg(args));
          const editCCParams = editControlChangeParams.current === true;
          const hasCCParam = controlChangeParams?.[encoderIndex] > 0;
          if (editCCParams || !hasCCParam)
            return;
          setTrackControlChangeValues((e) => {
            const updatedTrackControlChangeValues = e.slice();
            updatedTrackControlChangeValues[encoderIndex] = clamp(
              e?.[encoderIndex] + getEncoderValue(args) || 0,
              0,
              MAX_CC
            );
            return updatedTrackControlChangeValues;
          });
        }
      );
      const updateRootNote = when(
        showTrackSettingsMenu,
        !showTrackControlChangeMenu,
        trackSettingsMenuPage === trackSettingsMenuPages.TRACK_SETTINGS
      )((args) => {
        const switchIndex = getTrigIndex(currentSwitch.current);
        const isPressed = Number.isInteger(currentSwitch.current);
        const hasPressedTrig = Boolean(trigs[switchIndex]);
        if (isPressed) {
          if (!hasPressedTrig)
            return;
          setNotes((e) => {
            const updatedNotes = e.slice();
            updatedNotes[switchIndex] = clamp(
              updatedNotes[switchIndex] + getEncoderValue(args) || 0,
              0,
              MAX_NOTE
            );
            return updatedNotes;
          });
        } else {
          setRootNote((e) => clamp(e + getEncoderValue(args), 0, MAX_NOTE));
        }
      });
      const updateVelocity = when(
        showTrackSettingsMenu,
        !showTrackControlChangeMenu,
        trackSettingsMenuPage === trackSettingsMenuPages.TRACK_SETTINGS
      )((args) => {
        const switchIndex = getTrigIndex(currentSwitch.current);
        const isPressed = Number.isInteger(currentSwitch.current);
        const hasPressedTrig = Boolean(trigs[switchIndex]);
        if (isPressed) {
          if (!hasPressedTrig)
            return;
          setTrigsVelocity((e) => {
            const updatedTrigsVelocity = e.slice();
            updatedTrigsVelocity[switchIndex] = clamp(
              updatedTrigsVelocity[switchIndex] + getEncoderValue(args) || 0,
              0,
              MAX_VELOCITY
            );
            return updatedTrigsVelocity;
          });
        } else {
          setVelocity((e) => clamp(e + getEncoderValue(args), 0, MAX_CC));
        }
      });
      const updateProbability = when(
        showTrackSettingsMenu,
        !showTrackControlChangeMenu,
        trackSettingsMenuPage === trackSettingsMenuPages.TRACK_SETTINGS
      )((args) => {
        const switchIndex = getTrigIndex(currentSwitch.current);
        const isPressed = Number.isInteger(currentSwitch.current);
        const hasPressedTrig = Boolean(trigs[switchIndex]);
        if (isPressed) {
          if (!hasPressedTrig)
            return;
          setTrigsProbability((e) => {
            const updatedTrigsProbability = e.slice();
            updatedTrigsProbability[switchIndex] = clamp(
              updatedTrigsProbability[switchIndex] + getEncoderValue(args) || 0,
              0,
              MAX_PROBABILITY + trigConditionsArray.length + 1
            );
            return updatedTrigsProbability;
          });
        } else {
          setProbability(
            (e) => clamp(e + getEncoderValue(args), 0, MAX_PROBABILITY)
          );
        }
      });
      const updateSteps = when(
        showTrackSettingsMenu,
        !showTrackControlChangeMenu,
        trackSettingsMenuPage === trackSettingsMenuPages.TRACK_SETTINGS
      )((args) => {
        const createEmptyTrigs = (length2, e) => Array.from({ length: length2 }).fill(e);
        const getTrig = (e) => (v2, i2) => i2 < e.length ? e[i2] : v2;
        setSteps((s2) => {
          const updatedSteps = clamp(s2 + getEncoderValue(args), 0, MAX_STEPS);
          const emptyTrigs = createEmptyTrigs(updatedSteps, 0);
          setTrigs((e) => emptyTrigs.map(getTrig(e)));
          setTrigsVelocity((e) => emptyTrigs.map(getTrig(e)));
          setTrigsProbability((e) => emptyTrigs.map(getTrig(e)));
          setNotes((e) => emptyTrigs.map(getTrig(e)));
          setBank((e) => Math.min(e, ceil(updatedSteps / NUM_SWITCHES) - 1));
          return updatedSteps;
        });
      });
      const updateScale = when(
        showTrackSettingsMenu,
        !showTrackControlChangeMenu,
        trackSettingsMenuPage === trackSettingsMenuPages.TRACK_SETTINGS
      )((args) => {
        setScale((e) => {
          const updatedScale = e + getEncoderValue(args) >= 1 ? floor(e + getEncoderValue(args)) : e + getEncoderValue(args) / 4;
          return clamp(
            updatedScale >= 1 ? floor(updatedScale) : updatedScale,
            MIN_SCALE,
            MAX_SCALE
          );
        });
      });
      const updateIsFollowActive = when(
        showTrackSettingsMenu,
        !showTrackControlChangeMenu,
        trackSettingsMenuPage === trackSettingsMenuPages.TRACK_CONDITIONS
      )((args) => {
        setIsFollowActive(getEncoderValue(args) === 1);
      });
      const events = [
        ["switch_released", updateTrigs],
        ["switch_pressed", updateControlChangeEditMode],
        ["switch_pressed", handleRegularSwitchLongPress],
        ["switch_released", handleRegularSwitchLongPress],
        [`switch_${PAGE_DECR_SWITCH}_released`, updateBank],
        [`switch_${PAGE_INCR_SWITCH}_released`, updateBank],
        [`switch_${TRACK_CC_SWITCH}_released`, toggleControlChangeMenu],
        [`switch_${TRACK_SETTINGS_SWITCH}_released`, toggleTrackSettingsMenu],
        ["encoder", updateControlChangeValues],
        ["encoder", updateTrackControlChangeValues],
        // track settings page 0
        ["encoder_0", updateRootNote],
        ["encoder_1", updateVelocity],
        ["encoder_2", updateProbability],
        ["encoder_3", updateSteps],
        ["encoder_4", updateScale],
        // track settings page 1
        ["encoder_6", updateIsFollowActive]
      ];
      events.forEach(([event, callback]) => gpio_default.on(event, callback));
      return () => {
        events.forEach(([event, callback]) => gpio_default.off(event, callback));
      };
    }, [
      device,
      isCurrentTrack,
      steps,
      trigs,
      showTrackSettingsMenu,
      showTrackControlChangeMenu,
      isMuteMode,
      trackSettingsMenuPage,
      getTrigIndex
    ]);
    (0, import_react5.useEffect)(() => {
      if (isEditingControlChangeParams)
        return () => null;
      const controlChangeSequences = Object.entries(controlChangeParams).map(([button, control]) => ({
        control,
        values: Array.from({ length: steps }).fill(trackControlChangeValues[int(button)] || 0).map(
          (e, i2) => button in (controlChangeValues?.[i2] || {}) ? controlChangeValues[i2][button] : e
        )
      })).map(({ control, values }) => `${control}:${values.join(",")}`).join("|").trim();
      const currentTrigOp = max(0, TRIG_OPS.indexOf(trigOp));
      const trigConditions = trigsProbability.map(
        (e) => e > MAX_PROBABILITY ? [currentTrigOp].concat(
          trigConditionsArray[clamp(
            e - MAX_PROBABILITY - 1,
            0,
            trigConditionsArray.length - 1
          )]
        ) : [currentTrigOp, 1, 1]
      ).map((e) => e.join(":")).join(",").trim();
      const sequence = [
        currentProject,
        id,
        device?.midi?.config?.channel || 0,
        isMuted ? 1 : 0,
        trigs.join(""),
        trigsVelocity.map((e) => e || velocity).join(","),
        trigsProbability.map((e) => remap(e, [0, MAX_PROBABILITY], [0, 1])).map((e) => clamp(e, 0, 1) || probability).join(","),
        notes.map((e) => e || rootNote).join(","),
        controlChangeSequences || 0,
        scale2 || 1,
        trigConditions || 0
      ].join(" ");
      electron.updateSequence(sequence);
    }, [
      currentProject,
      id,
      device,
      isMuted,
      isCurrentTrack,
      rootNote,
      velocity,
      probability,
      steps,
      scale2,
      trigs,
      notes,
      trigsVelocity,
      trigsProbability,
      bank,
      currentTrack,
      trackControlChangeValues,
      controlChangeParams,
      controlChangeValues,
      isEditingControlChangeParams,
      trigOp
    ]);
    (0, import_react5.useEffect)(() => {
      if (!isCurrentTrack || isMuteMode || hasOpenMenu)
        return () => null;
      updateLeds(trigs, !isFollowActive);
    }, [
      isCurrentTrack,
      isMuteMode,
      hasOpenMenu,
      trigs,
      isFollowActive,
      updateLeds
    ]);
    const value = (0, import_react5.useMemo)(() => {
      return {
        id,
        setId,
        deviceId,
        setDeviceId,
        isCurrentTrack,
        setIsCurrentTrack,
        isMuted,
        setIsMuted,
        isFollowActive,
        setIsFollowActive,
        rootNote,
        setRootNote,
        velocity,
        setVelocity,
        probability,
        setProbability,
        steps,
        setSteps,
        scale: scale2,
        setScale,
        bank,
        setBank,
        pressedTrig,
        isEditingControlChangeParams,
        device,
        currentPage,
        bankSteps,
        rootNoteInstrument,
        instrumentNotes,
        instrumentControlChangeNames,
        currentProbability,
        trigs,
        setTrigs,
        trigsVelocity,
        setTrigsVelocity,
        trigsProbability,
        setTrigsProbability,
        notes,
        setNotes,
        trigOp,
        setTrigOp,
        trackControlChangeValues,
        controlChangeValues,
        controlChangeParams
      };
    }, [
      id,
      deviceId,
      isCurrentTrack,
      isMuted,
      isFollowActive,
      rootNote,
      velocity,
      probability,
      steps,
      scale2,
      bank,
      pressedTrig,
      isEditingControlChangeParams,
      device,
      currentPage,
      bankSteps,
      rootNoteInstrument,
      instrumentNotes,
      instrumentControlChangeNames,
      currentProbability,
      trigs,
      trigsVelocity,
      trigsProbability,
      notes,
      trackControlChangeValues,
      controlChangeValues,
      controlChangeParams,
      trigOp
    ]);
    const storageValue = (0, import_react5.useMemo)(
      () => omit(
        value,
        Function,
        "currentPage",
        "device",
        "rootNoteInstrument",
        "instrumentNotes",
        "instrumentControlChangeNames",
        "currentProbability"
      ),
      [value]
    );
    useIdleCallback(() => {
      setCurrentTracks((e) => ({ ...e, [storageValue.id]: storageValue }));
    }, [storageValue]);
    return /* @__PURE__ */ import_react5.default.createElement(TrackContext.Provider, { value }, children);
  };

  // src/frontend/context/TracksContext.jsx
  var initialTracksState = {
    currentTracks: {},
    isMuteMode: false
  };
  var TracksContext = (0, import_react6.createContext)(initialTracksState);
  var useTracksContext = () => (0, import_react6.useContext)(TracksContext);
  var TracksContextProvider = ({ children }) => {
    const { storage, setStorage } = useStorageContext();
    const { currentProject, mutedTracks, setMutedTracks } = useStateContext();
    const { showTrackSettingsMenu, showTrackControlChangeMenu } = useMenuContext();
    const currentProjectTracks = (0, import_react6.useMemo)(
      () => storage?.projects?.[currentProject]?.tracks,
      [storage, currentProject]
    );
    const [currentTracks, setCurrentTracks] = (0, import_react6.useState)(
      currentProjectTracks?.currentTracks || {}
    );
    const [isMuteMode, setIsMuteMode] = (0, import_react6.useState)(
      currentProjectTracks?.isMuteMode || false
    );
    const numCurrentTracks = Object.values(currentTracks).length;
    const addTrack = (track) => setCurrentTracks((e) => ({
      ...e,
      [track.id]: { ...initialTrackState, ...track }
    }));
    const removeTrack = (id) => setCurrentTracks((e) => omit(e, id));
    const resetTracksContext = (state) => {
      setCurrentTracks((state || initialTracksState).currentTracks);
    };
    const toggleIsMuteMode = when()(() => setIsMuteMode((e) => !e));
    const updateMutedTracks = when(
      isRegularSwitch,
      isMuteMode
    )((args) => {
      const switchIndex = int(firstArg(args)) / 2;
      setMutedTracks(
        (e) => e.includes(switchIndex) ? e.filter((v2) => v2 !== switchIndex) : [...new Set(e.concat(switchIndex))]
      );
    });
    useGPIOEvents(
      [[`switch_${TRACK_MUTES_SWITCH}_released`, toggleIsMuteMode]],
      [showTrackSettingsMenu, showTrackControlChangeMenu]
    );
    useGPIOEvents([["switch_released", updateMutedTracks]], [isMuteMode]);
    (0, import_react6.useEffect)(() => {
      if (!isMuteMode)
        return () => null;
      const updatedLeds = Array.from({ length: NUM_SWITCHES }).fill(0).map((e, i2) => i2 >= numCurrentTracks || mutedTracks.includes(i2) ? e : 1).join("");
      electron.updateLeds(updatedLeds);
    }, [isMuteMode, mutedTracks, numCurrentTracks]);
    const value = (0, import_react6.useMemo)(() => {
      return {
        currentTracks,
        setCurrentTracks,
        isMuteMode,
        setIsMuteMode,
        addTrack,
        removeTrack,
        resetTracksContext
      };
    }, [currentTracks, isMuteMode]);
    const storageValue = (0, import_react6.useMemo)(
      () => omit(value, Function, "isMuteMode"),
      [value]
    );
    useIdleCallback(() => {
      setStorage((e) => ({
        ...e,
        projects: {
          ...e?.projects || {},
          [currentProject]: {
            ...e?.projects?.[currentProject] || {},
            tracks: storageValue
          }
        }
      }));
    }, [storageValue, currentProject]);
    return /* @__PURE__ */ import_react6.default.createElement(TracksContext.Provider, { value }, children);
  };

  // node_modules/tslib/tslib.es6.mjs
  var __assign = function() {
    __assign = Object.assign || function __assign3(t) {
      for (var s2, i2 = 1, n = arguments.length; i2 < n; i2++) {
        s2 = arguments[i2];
        for (var p2 in s2)
          if (Object.prototype.hasOwnProperty.call(s2, p2))
            t[p2] = s2[p2];
      }
      return t;
    };
    return __assign.apply(this, arguments);
  };
  function __spreadArray(to, from2, pack) {
    if (pack || arguments.length === 2)
      for (var i2 = 0, l2 = from2.length, ar; i2 < l2; i2++) {
        if (ar || !(i2 in from2)) {
          if (!ar)
            ar = Array.prototype.slice.call(from2, 0, i2);
          ar[i2] = from2[i2];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from2));
  }

  // node_modules/styled-components/dist/styled-components.browser.esm.js
  var import_react7 = __toESM(require_react());
  var import_shallowequal = __toESM(require_shallowequal());

  // node_modules/stylis/src/Enum.js
  var MS = "-ms-";
  var MOZ = "-moz-";
  var WEBKIT = "-webkit-";
  var COMMENT = "comm";
  var RULESET = "rule";
  var DECLARATION = "decl";
  var IMPORT = "@import";
  var KEYFRAMES = "@keyframes";
  var LAYER = "@layer";

  // node_modules/stylis/src/Utility.js
  var abs2 = Math.abs;
  var from = String.fromCharCode;
  var assign = Object.assign;
  function hash(value, length2) {
    return charat(value, 0) ^ 45 ? (((length2 << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
  }
  function trim(value) {
    return value.trim();
  }
  function match(value, pattern) {
    return (value = pattern.exec(value)) ? value[0] : value;
  }
  function replace(value, pattern, replacement) {
    return value.replace(pattern, replacement);
  }
  function indexof(value, search) {
    return value.indexOf(search);
  }
  function charat(value, index4) {
    return value.charCodeAt(index4) | 0;
  }
  function substr(value, begin, end) {
    return value.slice(begin, end);
  }
  function strlen(value) {
    return value.length;
  }
  function sizeof(value) {
    return value.length;
  }
  function append(value, array) {
    return array.push(value), value;
  }
  function combine(array, callback) {
    return array.map(callback).join("");
  }
  function filter(array, pattern) {
    return array.filter(function(value) {
      return !match(value, pattern);
    });
  }

  // node_modules/stylis/src/Tokenizer.js
  var line = 1;
  var column = 1;
  var length = 0;
  var position = 0;
  var character = 0;
  var characters = "";
  function node(value, root, parent, type, props, children, length2, siblings) {
    return { value, root, parent, type, props, children, line, column, length: length2, return: "", siblings };
  }
  function copy(root, props) {
    return assign(node("", null, null, "", null, null, 0, root.siblings), root, { length: -root.length }, props);
  }
  function lift(root) {
    while (root.root)
      root = copy(root.root, { children: [root] });
    append(root, root.siblings);
  }
  function char() {
    return character;
  }
  function prev() {
    character = position > 0 ? charat(characters, --position) : 0;
    if (column--, character === 10)
      column = 1, line--;
    return character;
  }
  function next() {
    character = position < length ? charat(characters, position++) : 0;
    if (column++, character === 10)
      column = 1, line++;
    return character;
  }
  function peek() {
    return charat(characters, position);
  }
  function caret() {
    return position;
  }
  function slice(begin, end) {
    return substr(characters, begin, end);
  }
  function token(type) {
    switch (type) {
      case 0:
      case 9:
      case 10:
      case 13:
      case 32:
        return 5;
      case 33:
      case 43:
      case 44:
      case 47:
      case 62:
      case 64:
      case 126:
      case 59:
      case 123:
      case 125:
        return 4;
      case 58:
        return 3;
      case 34:
      case 39:
      case 40:
      case 91:
        return 2;
      case 41:
      case 93:
        return 1;
    }
    return 0;
  }
  function alloc(value) {
    return line = column = 1, length = strlen(characters = value), position = 0, [];
  }
  function dealloc(value) {
    return characters = "", value;
  }
  function delimit(type) {
    return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
  }
  function whitespace(type) {
    while (character = peek())
      if (character < 33)
        next();
      else
        break;
    return token(type) > 2 || token(character) > 3 ? "" : " ";
  }
  function escaping(index4, count) {
    while (--count && next())
      if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
        break;
    return slice(index4, caret() + (count < 6 && peek() == 32 && next() == 32));
  }
  function delimiter(type) {
    while (next())
      switch (character) {
        case type:
          return position;
        case 34:
        case 39:
          if (type !== 34 && type !== 39)
            delimiter(character);
          break;
        case 40:
          if (type === 41)
            delimiter(type);
          break;
        case 92:
          next();
          break;
      }
    return position;
  }
  function commenter(type, index4) {
    while (next())
      if (type + character === 47 + 10)
        break;
      else if (type + character === 42 + 42 && peek() === 47)
        break;
    return "/*" + slice(index4, position - 1) + "*" + from(type === 47 ? type : next());
  }
  function identifier(index4) {
    while (!token(peek()))
      next();
    return slice(index4, position);
  }

  // node_modules/stylis/src/Parser.js
  function compile(value) {
    return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
  }
  function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
    var index4 = 0;
    var offset = 0;
    var length2 = pseudo;
    var atrule = 0;
    var property = 0;
    var previous = 0;
    var variable = 1;
    var scanning = 1;
    var ampersand = 1;
    var character2 = 0;
    var type = "";
    var props = rules;
    var children = rulesets;
    var reference = rule;
    var characters2 = type;
    while (scanning)
      switch (previous = character2, character2 = next()) {
        case 40:
          if (previous != 108 && charat(characters2, length2 - 1) == 58) {
            if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f") != -1)
              ampersand = -1;
            break;
          }
        case 34:
        case 39:
        case 91:
          characters2 += delimit(character2);
          break;
        case 9:
        case 10:
        case 13:
        case 32:
          characters2 += whitespace(previous);
          break;
        case 92:
          characters2 += escaping(caret() - 1, 7);
          continue;
        case 47:
          switch (peek()) {
            case 42:
            case 47:
              append(comment(commenter(next(), caret()), root, parent, declarations), declarations);
              break;
            default:
              characters2 += "/";
          }
          break;
        case 123 * variable:
          points[index4++] = strlen(characters2) * ampersand;
        case 125 * variable:
        case 59:
        case 0:
          switch (character2) {
            case 0:
            case 125:
              scanning = 0;
            case 59 + offset:
              if (ampersand == -1)
                characters2 = replace(characters2, /\f/g, "");
              if (property > 0 && strlen(characters2) - length2)
                append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1, declarations) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2, declarations), declarations);
              break;
            case 59:
              characters2 += ";";
            default:
              append(reference = ruleset(characters2, root, parent, index4, offset, rules, points, type, props = [], children = [], length2, rulesets), rulesets);
              if (character2 === 123)
                if (offset === 0)
                  parse(characters2, root, reference, reference, props, rulesets, length2, points, children);
                else
                  switch (atrule === 99 && charat(characters2, 3) === 110 ? 100 : atrule) {
                    case 100:
                    case 108:
                    case 109:
                    case 115:
                      parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length2, children), children), rules, children, length2, points, rule ? props : children);
                      break;
                    default:
                      parse(characters2, reference, reference, reference, [""], children, 0, points, children);
                  }
          }
          index4 = offset = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
          break;
        case 58:
          length2 = 1 + strlen(characters2), property = previous;
        default:
          if (variable < 1) {
            if (character2 == 123)
              --variable;
            else if (character2 == 125 && variable++ == 0 && prev() == 125)
              continue;
          }
          switch (characters2 += from(character2), character2 * variable) {
            case 38:
              ampersand = offset > 0 ? 1 : (characters2 += "\f", -1);
              break;
            case 44:
              points[index4++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
              break;
            case 64:
              if (peek() === 45)
                characters2 += delimit(next());
              atrule = peek(), offset = length2 = strlen(type = characters2 += identifier(caret())), character2++;
              break;
            case 45:
              if (previous === 45 && strlen(characters2) == 2)
                variable = 0;
          }
      }
    return rulesets;
  }
  function ruleset(value, root, parent, index4, offset, rules, points, type, props, children, length2, siblings) {
    var post = offset - 1;
    var rule = offset === 0 ? rules : [""];
    var size = sizeof(rule);
    for (var i2 = 0, j2 = 0, k2 = 0; i2 < index4; ++i2)
      for (var x2 = 0, y2 = substr(value, post + 1, post = abs2(j2 = points[i2])), z2 = value; x2 < size; ++x2)
        if (z2 = trim(j2 > 0 ? rule[x2] + " " + y2 : replace(y2, /&\f/g, rule[x2])))
          props[k2++] = z2;
    return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length2, siblings);
  }
  function comment(value, root, parent, siblings) {
    return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0, siblings);
  }
  function declaration(value, root, parent, length2, siblings) {
    return node(value, root, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2, siblings);
  }

  // node_modules/stylis/src/Prefixer.js
  function prefix(value, length2, children) {
    switch (hash(value, length2)) {
      case 5103:
        return WEBKIT + "print-" + value + value;
      case 5737:
      case 4201:
      case 3177:
      case 3433:
      case 1641:
      case 4457:
      case 2921:
      case 5572:
      case 6356:
      case 5844:
      case 3191:
      case 6645:
      case 3005:
      case 6391:
      case 5879:
      case 5623:
      case 6135:
      case 4599:
      case 4855:
      case 4215:
      case 6389:
      case 5109:
      case 5365:
      case 5621:
      case 3829:
        return WEBKIT + value + value;
      case 4789:
        return MOZ + value + value;
      case 5349:
      case 4246:
      case 4810:
      case 6968:
      case 2756:
        return WEBKIT + value + MOZ + value + MS + value + value;
      case 5936:
        switch (charat(value, length2 + 11)) {
          case 114:
            return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
          case 108:
            return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
          case 45:
            return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
        }
      case 6828:
      case 4268:
      case 2903:
        return WEBKIT + value + MS + value + value;
      case 6165:
        return WEBKIT + value + MS + "flex-" + value + value;
      case 5187:
        return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
      case 5443:
        return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/g, "") + (!match(value, /flex-|baseline/) ? MS + "grid-row-" + replace(value, /flex-|-self/g, "") : "") + value;
      case 4675:
        return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/g, "") + value;
      case 5548:
        return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
      case 5292:
        return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
      case 6060:
        return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
      case 4554:
        return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
      case 6187:
        return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
      case 5495:
      case 3959:
        return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
      case 4968:
        return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + value + value;
      case 4200:
        if (!match(value, /flex-|baseline/))
          return MS + "grid-column-align" + substr(value, length2) + value;
        break;
      case 2592:
      case 3360:
        return MS + replace(value, "template-", "") + value;
      case 4384:
      case 3616:
        if (children && children.some(function(element, index4) {
          return length2 = index4, match(element.props, /grid-\w+-end/);
        })) {
          return ~indexof(value + (children = children[length2].value), "span") ? value : MS + replace(value, "-start", "") + value + MS + "grid-row-span:" + (~indexof(children, "span") ? match(children, /\d+/) : +match(children, /\d+/) - +match(value, /\d+/)) + ";";
        }
        return MS + replace(value, "-start", "") + value;
      case 4896:
      case 4128:
        return children && children.some(function(element) {
          return match(element.props, /grid-\w+-start/);
        }) ? value : MS + replace(replace(value, "-end", "-span"), "span ", "") + value;
      case 4095:
      case 3583:
      case 4068:
      case 2532:
        return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
      case 8116:
      case 7059:
      case 5753:
      case 5535:
      case 5445:
      case 5701:
      case 4933:
      case 4677:
      case 5533:
      case 5789:
      case 5021:
      case 4765:
        if (strlen(value) - 1 - length2 > 6)
          switch (charat(value, length2 + 1)) {
            case 109:
              if (charat(value, length2 + 4) !== 45)
                break;
            case 102:
              return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length2 + 3) == 108 ? "$3" : "$2-$3")) + value;
            case 115:
              return ~indexof(value, "stretch") ? prefix(replace(value, "stretch", "fill-available"), length2, children) + value : value;
          }
        break;
      case 5152:
      case 5920:
        return replace(value, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(_2, a2, b, c2, d, e, f2) {
          return MS + a2 + ":" + b + f2 + (c2 ? MS + a2 + "-span:" + (d ? e : +e - +b) + f2 : "") + value;
        });
      case 4949:
        if (charat(value, length2 + 6) === 121)
          return replace(value, ":", ":" + WEBKIT) + value;
        break;
      case 6444:
        switch (charat(value, charat(value, 14) === 45 ? 18 : 11)) {
          case 120:
            return replace(value, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
          case 100:
            return replace(value, ":", ":" + MS) + value;
        }
        break;
      case 5719:
      case 2647:
      case 2135:
      case 3927:
      case 2391:
        return replace(value, "scroll-", "scroll-snap-") + value;
    }
    return value;
  }

  // node_modules/stylis/src/Serializer.js
  function serialize(children, callback) {
    var output = "";
    for (var i2 = 0; i2 < children.length; i2++)
      output += callback(children[i2], i2, children, callback) || "";
    return output;
  }
  function stringify(element, index4, children, callback) {
    switch (element.type) {
      case LAYER:
        if (element.children.length)
          break;
      case IMPORT:
      case DECLARATION:
        return element.return = element.return || element.value;
      case COMMENT:
        return "";
      case KEYFRAMES:
        return element.return = element.value + "{" + serialize(element.children, callback) + "}";
      case RULESET:
        if (!strlen(element.value = element.props.join(",")))
          return "";
    }
    return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
  }

  // node_modules/stylis/src/Middleware.js
  function middleware(collection) {
    var length2 = sizeof(collection);
    return function(element, index4, children, callback) {
      var output = "";
      for (var i2 = 0; i2 < length2; i2++)
        output += collection[i2](element, index4, children, callback) || "";
      return output;
    };
  }
  function rulesheet(callback) {
    return function(element) {
      if (!element.root) {
        if (element = element.return)
          callback(element);
      }
    };
  }
  function prefixer(element, index4, children, callback) {
    if (element.length > -1) {
      if (!element.return)
        switch (element.type) {
          case DECLARATION:
            element.return = prefix(element.value, element.length, children);
            return;
          case KEYFRAMES:
            return serialize([copy(element, { value: replace(element.value, "@", "@" + WEBKIT) })], callback);
          case RULESET:
            if (element.length)
              return combine(children = element.props, function(value) {
                switch (match(value, callback = /(::plac\w+|:read-\w+)/)) {
                  case ":read-only":
                  case ":read-write":
                    lift(copy(element, { props: [replace(value, /:(read-\w+)/, ":" + MOZ + "$1")] }));
                    lift(copy(element, { props: [value] }));
                    assign(element, { props: filter(children, callback) });
                    break;
                  case "::placeholder":
                    lift(copy(element, { props: [replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")] }));
                    lift(copy(element, { props: [replace(value, /:(plac\w+)/, ":" + MOZ + "$1")] }));
                    lift(copy(element, { props: [replace(value, /:(plac\w+)/, MS + "input-$1")] }));
                    lift(copy(element, { props: [value] }));
                    assign(element, { props: filter(children, callback) });
                    break;
                }
                return "";
              });
        }
    }
  }

  // node_modules/@emotion/unitless/dist/emotion-unitless.esm.js
  var unitlessKeys = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    // SVG-related properties
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
  };

  // node_modules/styled-components/dist/styled-components.browser.esm.js
  var f = "undefined" != typeof process && void 0 !== process.env && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled";
  var y = "undefined" != typeof window && "HTMLElement" in window;
  var v = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== process.env && void 0 !== process.env.REACT_APP_SC_DISABLE_SPEEDY && "" !== process.env.REACT_APP_SC_DISABLE_SPEEDY ? "false" !== process.env.REACT_APP_SC_DISABLE_SPEEDY && process.env.REACT_APP_SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== process.env && void 0 !== process.env.SC_DISABLE_SPEEDY && "" !== process.env.SC_DISABLE_SPEEDY ? "false" !== process.env.SC_DISABLE_SPEEDY && process.env.SC_DISABLE_SPEEDY : false);
  var g = {};
  var E = Object.freeze([]);
  var N = Object.freeze({});
  function P(e, t, n) {
    return void 0 === n && (n = N), e.theme !== n.theme && e.theme || t || n.theme;
  }
  var _ = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]);
  var C = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g;
  var I = /(^-|-$)/g;
  function A(e) {
    return e.replace(C, "-").replace(I, "");
  }
  var O = /(a)(d)/gi;
  var D = function(e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
  function R(e) {
    var t, n = "";
    for (t = Math.abs(e); t > 52; t = t / 52 | 0)
      n = D(t % 52) + n;
    return (D(t % 52) + n).replace(O, "$1-$2");
  }
  var T;
  var k = function(e, t) {
    for (var n = t.length; n; )
      e = 33 * e ^ t.charCodeAt(--n);
    return e;
  };
  var j = function(e) {
    return k(5381, e);
  };
  function x(e) {
    return R(j(e) >>> 0);
  }
  function V(e) {
    return e.displayName || e.name || "Component";
  }
  function M(e) {
    return "string" == typeof e && true;
  }
  var F = "function" == typeof Symbol && Symbol.for;
  var $ = F ? Symbol.for("react.memo") : 60115;
  var z = F ? Symbol.for("react.forward_ref") : 60112;
  var B = { childContextTypes: true, contextType: true, contextTypes: true, defaultProps: true, displayName: true, getDefaultProps: true, getDerivedStateFromError: true, getDerivedStateFromProps: true, mixins: true, propTypes: true, type: true };
  var L = { name: true, length: true, prototype: true, caller: true, callee: true, arguments: true, arity: true };
  var G = { $$typeof: true, compare: true, defaultProps: true, displayName: true, propTypes: true, type: true };
  var Y = ((T = {})[z] = { $$typeof: true, render: true, defaultProps: true, displayName: true, propTypes: true }, T[$] = G, T);
  function W(e) {
    return ("type" in (t = e) && t.type.$$typeof) === $ ? G : "$$typeof" in e ? Y[e.$$typeof] : B;
    var t;
  }
  var q = Object.defineProperty;
  var H = Object.getOwnPropertyNames;
  var U = Object.getOwnPropertySymbols;
  var J = Object.getOwnPropertyDescriptor;
  var X = Object.getPrototypeOf;
  var Z = Object.prototype;
  function K(e, t, n) {
    if ("string" != typeof t) {
      if (Z) {
        var o2 = X(t);
        o2 && o2 !== Z && K(e, o2, n);
      }
      var r2 = H(t);
      U && (r2 = r2.concat(U(t)));
      for (var s2 = W(e), i2 = W(t), a2 = 0; a2 < r2.length; ++a2) {
        var c2 = r2[a2];
        if (!(c2 in L || n && n[c2] || i2 && c2 in i2 || s2 && c2 in s2)) {
          var l2 = J(t, c2);
          try {
            q(e, c2, l2);
          } catch (e2) {
          }
        }
      }
    }
    return e;
  }
  function Q(e) {
    return "function" == typeof e;
  }
  function ee(e) {
    return "object" == typeof e && "styledComponentId" in e;
  }
  function te(e, t) {
    return e && t ? "".concat(e, " ").concat(t) : e || t || "";
  }
  function ne(e, t) {
    if (0 === e.length)
      return "";
    for (var n = e[0], o2 = 1; o2 < e.length; o2++)
      n += t ? t + e[o2] : e[o2];
    return n;
  }
  function oe(e) {
    return null !== e && "object" == typeof e && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
  }
  function re(e, t, n) {
    if (void 0 === n && (n = false), !n && !oe(e) && !Array.isArray(e))
      return t;
    if (Array.isArray(t))
      for (var o2 = 0; o2 < t.length; o2++)
        e[o2] = re(e[o2], t[o2]);
    else if (oe(t))
      for (var o2 in t)
        e[o2] = re(e[o2], t[o2]);
    return e;
  }
  function se(e, t) {
    Object.defineProperty(e, "toString", { value: t });
  }
  function ce(t) {
    for (var n = [], o2 = 1; o2 < arguments.length; o2++)
      n[o2 - 1] = arguments[o2];
    return true ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t, " for more information.").concat(n.length > 0 ? " Args: ".concat(n.join(", ")) : "")) : new Error(ae.apply(void 0, __spreadArray([ie[t]], n, false)).trim());
  }
  var le = function() {
    function e(e2) {
      this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e2;
    }
    return e.prototype.indexOfGroup = function(e2) {
      for (var t = 0, n = 0; n < e2; n++)
        t += this.groupSizes[n];
      return t;
    }, e.prototype.insertRules = function(e2, t) {
      if (e2 >= this.groupSizes.length) {
        for (var n = this.groupSizes, o2 = n.length, r2 = o2; e2 >= r2; )
          if ((r2 <<= 1) < 0)
            throw ce(16, "".concat(e2));
        this.groupSizes = new Uint32Array(r2), this.groupSizes.set(n), this.length = r2;
        for (var s2 = o2; s2 < r2; s2++)
          this.groupSizes[s2] = 0;
      }
      for (var i2 = this.indexOfGroup(e2 + 1), a2 = (s2 = 0, t.length); s2 < a2; s2++)
        this.tag.insertRule(i2, t[s2]) && (this.groupSizes[e2]++, i2++);
    }, e.prototype.clearGroup = function(e2) {
      if (e2 < this.length) {
        var t = this.groupSizes[e2], n = this.indexOfGroup(e2), o2 = n + t;
        this.groupSizes[e2] = 0;
        for (var r2 = n; r2 < o2; r2++)
          this.tag.deleteRule(n);
      }
    }, e.prototype.getGroup = function(e2) {
      var t = "";
      if (e2 >= this.length || 0 === this.groupSizes[e2])
        return t;
      for (var n = this.groupSizes[e2], o2 = this.indexOfGroup(e2), r2 = o2 + n, s2 = o2; s2 < r2; s2++)
        t += "".concat(this.tag.getRule(s2)).concat("/*!sc*/\n");
      return t;
    }, e;
  }();
  var ue = /* @__PURE__ */ new Map();
  var pe = /* @__PURE__ */ new Map();
  var de = 1;
  var he = function(e) {
    if (ue.has(e))
      return ue.get(e);
    for (; pe.has(de); )
      de++;
    var t = de++;
    if (false)
      throw ce(16, "".concat(t));
    return ue.set(e, t), pe.set(t, e), t;
  };
  var fe = function(e, t) {
    ue.set(e, t), pe.set(t, e);
  };
  var me = "style[".concat(f, "][").concat("data-styled-version", '="').concat("6.0.1", '"]');
  var ye = new RegExp("^".concat(f, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'));
  var ve = function(e, t, n) {
    for (var o2, r2 = n.split(","), s2 = 0, i2 = r2.length; s2 < i2; s2++)
      (o2 = r2[s2]) && e.registerName(t, o2);
  };
  var ge = function(e, t) {
    for (var n, o2 = (null !== (n = t.textContent) && void 0 !== n ? n : "").split("/*!sc*/\n"), r2 = [], s2 = 0, i2 = o2.length; s2 < i2; s2++) {
      var a2 = o2[s2].trim();
      if (a2) {
        var c2 = a2.match(ye);
        if (c2) {
          var l2 = 0 | parseInt(c2[1], 10), u2 = c2[2];
          0 !== l2 && (fe(u2, l2), ve(e, u2, c2[3]), e.getTag().insertRules(l2, r2)), r2.length = 0;
        } else
          r2.push(a2);
      }
    }
  };
  function Se() {
    return "undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : null;
  }
  var we = function(e) {
    var t = document.head, n = e || t, o2 = document.createElement("style"), r2 = function(e2) {
      return Array.from(e2.querySelectorAll("style[".concat(f, "]"))).at(-1);
    }(n), s2 = void 0 !== r2 ? r2.nextSibling : null;
    o2.setAttribute(f, "active"), o2.setAttribute("data-styled-version", "6.0.1");
    var i2 = Se();
    return i2 && o2.setAttribute("nonce", i2), n.insertBefore(o2, s2), o2;
  };
  var be = function() {
    function e(e2) {
      this.element = we(e2), this.element.appendChild(document.createTextNode("")), this.sheet = function(e3) {
        if (e3.sheet)
          return e3.sheet;
        for (var t = document.styleSheets, n = 0, o2 = t.length; n < o2; n++) {
          var r2 = t[n];
          if (r2.ownerNode === e3)
            return r2;
        }
        throw ce(17);
      }(this.element), this.length = 0;
    }
    return e.prototype.insertRule = function(e2, t) {
      try {
        return this.sheet.insertRule(t, e2), this.length++, true;
      } catch (e3) {
        return false;
      }
    }, e.prototype.deleteRule = function(e2) {
      this.sheet.deleteRule(e2), this.length--;
    }, e.prototype.getRule = function(e2) {
      var t = this.sheet.cssRules[e2];
      return t && t.cssText ? t.cssText : "";
    }, e;
  }();
  var Ee = function() {
    function e(e2) {
      this.element = we(e2), this.nodes = this.element.childNodes, this.length = 0;
    }
    return e.prototype.insertRule = function(e2, t) {
      if (e2 <= this.length && e2 >= 0) {
        var n = document.createTextNode(t);
        return this.element.insertBefore(n, this.nodes[e2] || null), this.length++, true;
      }
      return false;
    }, e.prototype.deleteRule = function(e2) {
      this.element.removeChild(this.nodes[e2]), this.length--;
    }, e.prototype.getRule = function(e2) {
      return e2 < this.length ? this.nodes[e2].textContent : "";
    }, e;
  }();
  var Ne = function() {
    function e(e2) {
      this.rules = [], this.length = 0;
    }
    return e.prototype.insertRule = function(e2, t) {
      return e2 <= this.length && (this.rules.splice(e2, 0, t), this.length++, true);
    }, e.prototype.deleteRule = function(e2) {
      this.rules.splice(e2, 1), this.length--;
    }, e.prototype.getRule = function(e2) {
      return e2 < this.length ? this.rules[e2] : "";
    }, e;
  }();
  var Pe = y;
  var _e = { isServer: !y, useCSSOMInjection: !v };
  var Ce = function() {
    function e(e2, n, o2) {
      void 0 === e2 && (e2 = N), void 0 === n && (n = {});
      var r2 = this;
      this.options = __assign(__assign({}, _e), e2), this.gs = n, this.names = new Map(o2), this.server = !!e2.isServer, !this.server && y && Pe && (Pe = false, function(e3) {
        for (var t = document.querySelectorAll(me), n2 = 0, o3 = t.length; n2 < o3; n2++) {
          var r3 = t[n2];
          r3 && "active" !== r3.getAttribute(f) && (ge(e3, r3), r3.parentNode && r3.parentNode.removeChild(r3));
        }
      }(this)), se(this, function() {
        return function(e3) {
          for (var t = e3.getTag(), n2 = t.length, o3 = "", r3 = function(n3) {
            var r4 = function(e4) {
              return pe.get(e4);
            }(n3);
            if (void 0 === r4)
              return "continue";
            var s3 = e3.names.get(r4), i2 = t.getGroup(n3);
            if (void 0 === s3 || 0 === i2.length)
              return "continue";
            var a2 = "".concat(f, ".g").concat(n3, '[id="').concat(r4, '"]'), c2 = "";
            void 0 !== s3 && s3.forEach(function(e4) {
              e4.length > 0 && (c2 += "".concat(e4, ","));
            }), o3 += "".concat(i2).concat(a2, '{content:"').concat(c2, '"}').concat("/*!sc*/\n");
          }, s2 = 0; s2 < n2; s2++)
            r3(s2);
          return o3;
        }(r2);
      });
    }
    return e.registerId = function(e2) {
      return he(e2);
    }, e.prototype.reconstructWithOptions = function(n, o2) {
      return void 0 === o2 && (o2 = true), new e(__assign(__assign({}, this.options), n), this.gs, o2 && this.names || void 0);
    }, e.prototype.allocateGSInstance = function(e2) {
      return this.gs[e2] = (this.gs[e2] || 0) + 1;
    }, e.prototype.getTag = function() {
      return this.tag || (this.tag = (e2 = function(e3) {
        var t = e3.useCSSOMInjection, n = e3.target;
        return e3.isServer ? new Ne(n) : t ? new be(n) : new Ee(n);
      }(this.options), new le(e2)));
      var e2;
    }, e.prototype.hasNameForId = function(e2, t) {
      return this.names.has(e2) && this.names.get(e2).has(t);
    }, e.prototype.registerName = function(e2, t) {
      if (he(e2), this.names.has(e2))
        this.names.get(e2).add(t);
      else {
        var n = /* @__PURE__ */ new Set();
        n.add(t), this.names.set(e2, n);
      }
    }, e.prototype.insertRules = function(e2, t, n) {
      this.registerName(e2, t), this.getTag().insertRules(he(e2), n);
    }, e.prototype.clearNames = function(e2) {
      this.names.has(e2) && this.names.get(e2).clear();
    }, e.prototype.clearRules = function(e2) {
      this.getTag().clearGroup(he(e2)), this.clearNames(e2);
    }, e.prototype.clearTag = function() {
      this.tag = void 0;
    }, e;
  }();
  var Ie = /&/g;
  var Ae = /^\s*\/\/.*$/gm;
  function Oe(e, t) {
    return e.map(function(e2) {
      return "rule" === e2.type && (e2.value = "".concat(t, " ").concat(e2.value), e2.value = e2.value.replaceAll(",", ",".concat(t, " ")), e2.props = e2.props.map(function(e3) {
        return "".concat(t, " ").concat(e3);
      })), Array.isArray(e2.children) && "@keyframes" !== e2.type && (e2.children = Oe(e2.children, t)), e2;
    });
  }
  function De(e) {
    var t, n, o2, r2 = void 0 === e ? N : e, s2 = r2.options, i2 = void 0 === s2 ? N : s2, a2 = r2.plugins, c2 = void 0 === a2 ? E : a2, l2 = function(e2, o3, r3) {
      return r3 === n || r3.startsWith(n) && r3.endsWith(n) && r3.replaceAll(n, "").length > 0 ? ".".concat(t) : e2;
    }, u2 = c2.slice();
    u2.push(function(e2) {
      e2.type === RULESET && e2.value.includes("&") && (e2.props[0] = e2.props[0].replace(Ie, n).replace(o2, l2));
    }), i2.prefix && u2.push(prefixer), u2.push(stringify);
    var p2 = function(e2, r3, s3, a3) {
      void 0 === r3 && (r3 = ""), void 0 === s3 && (s3 = ""), void 0 === a3 && (a3 = "&"), t = a3, n = r3, o2 = new RegExp("\\".concat(n, "\\b"), "g");
      var c3 = e2.replace(Ae, ""), l3 = compile(s3 || r3 ? "".concat(s3, " ").concat(r3, " { ").concat(c3, " }") : c3);
      i2.namespace && (l3 = Oe(l3, i2.namespace));
      var p3 = [];
      return serialize(l3, middleware(u2.concat(rulesheet(function(e3) {
        return p3.push(e3);
      })))), p3;
    };
    return p2.hash = c2.length ? c2.reduce(function(e2, t2) {
      return t2.name || ce(15), k(e2, t2.name);
    }, 5381).toString() : "", p2;
  }
  var Re = new Ce();
  var Te = De();
  var ke = import_react7.default.createContext({ shouldForwardProp: void 0, styleSheet: Re, stylis: Te });
  var je = ke.Consumer;
  var xe = import_react7.default.createContext(void 0);
  function Ve() {
    return (0, import_react7.useContext)(ke);
  }
  function Me(e) {
    var t = (0, import_react7.useState)(e.stylisPlugins), n = t[0], r2 = t[1], c2 = Ve().styleSheet, l2 = (0, import_react7.useMemo)(function() {
      var t2 = c2;
      return e.sheet ? t2 = e.sheet : e.target && (t2 = t2.reconstructWithOptions({ target: e.target }, false)), e.disableCSSOMInjection && (t2 = t2.reconstructWithOptions({ useCSSOMInjection: false })), t2;
    }, [e.disableCSSOMInjection, e.sheet, e.target, c2]), u2 = (0, import_react7.useMemo)(function() {
      return De({ options: { namespace: e.namespace, prefix: e.enableVendorPrefixes }, plugins: n });
    }, [e.enableVendorPrefixes, e.namespace, n]);
    return (0, import_react7.useEffect)(function() {
      (0, import_shallowequal.default)(n, e.stylisPlugins) || r2(e.stylisPlugins);
    }, [e.stylisPlugins]), import_react7.default.createElement(ke.Provider, { value: { shouldForwardProp: e.shouldForwardProp, styleSheet: l2, stylis: u2 } }, import_react7.default.createElement(xe.Provider, { value: u2 }, e.children));
  }
  var Fe = function() {
    function e(e2, t) {
      var n = this;
      this.inject = function(e3, t2) {
        void 0 === t2 && (t2 = Te);
        var o2 = n.name + t2.hash;
        e3.hasNameForId(n.id, o2) || e3.insertRules(n.id, o2, t2(n.rules, o2, "@keyframes"));
      }, this.name = e2, this.id = "sc-keyframes-".concat(e2), this.rules = t, se(this, function() {
        throw ce(12, String(n.name));
      });
    }
    return e.prototype.getName = function(e2) {
      return void 0 === e2 && (e2 = Te), this.name + e2.hash;
    }, e;
  }();
  var $e = function(e) {
    return e >= "A" && e <= "Z";
  };
  function ze(e) {
    for (var t = "", n = 0; n < e.length; n++) {
      var o2 = e[n];
      if (1 === n && "-" === o2 && "-" === e[0])
        return e;
      $e(o2) ? t += "-" + o2.toLowerCase() : t += o2;
    }
    return t.startsWith("ms-") ? "-" + t : t;
  }
  var Be = function(e) {
    return null == e || false === e || "" === e;
  };
  var Le = function(t) {
    var n, o2, r2 = [];
    for (var s2 in t) {
      var i2 = t[s2];
      t.hasOwnProperty(s2) && !Be(i2) && (Array.isArray(i2) && i2.isCss || Q(i2) ? r2.push("".concat(ze(s2), ":"), i2, ";") : oe(i2) ? r2.push.apply(r2, __spreadArray(__spreadArray(["".concat(s2, " {")], Le(i2), false), ["}"], false)) : r2.push("".concat(ze(s2), ": ").concat((n = s2, null == (o2 = i2) || "boolean" == typeof o2 || "" === o2 ? "" : "number" != typeof o2 || 0 === o2 || n in unitlessKeys || n.startsWith("--") ? String(o2).trim() : "".concat(o2, "px")), ";")));
    }
    return r2;
  };
  function Ge(e, t, n, o2) {
    if (Be(e))
      return [];
    if (ee(e))
      return [".".concat(e.styledComponentId)];
    if (Q(e)) {
      if (!Q(s2 = e) || s2.prototype && s2.prototype.isReactComponent || !t)
        return [e];
      var r2 = e(t);
      return true, Ge(r2, t, n, o2);
    }
    var s2;
    return e instanceof Fe ? n ? (e.inject(n, o2), [e.getName(o2)]) : [e] : oe(e) ? Le(e) : Array.isArray(e) ? e.flatMap(function(e2) {
      return Ge(e2, t, n, o2);
    }) : [e.toString()];
  }
  function Ye(e) {
    for (var t = 0; t < e.length; t += 1) {
      var n = e[t];
      if (Q(n) && !ee(n))
        return false;
    }
    return true;
  }
  var We = j("6.0.1");
  var qe = function() {
    function e(e2, t, n) {
      this.rules = e2, this.staticRulesId = "", this.isStatic = (void 0 === n || n.isStatic) && Ye(e2), this.componentId = t, this.baseHash = k(We, t), this.baseStyle = n, Ce.registerId(t);
    }
    return e.prototype.generateAndInjectStyles = function(e2, t, n) {
      var o2 = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e2, t, n) : "";
      if (this.isStatic && !n.hash)
        if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId))
          o2 = te(o2, this.staticRulesId);
        else {
          var r2 = ne(Ge(this.rules, e2, t, n)), s2 = R(k(this.baseHash, r2) >>> 0);
          if (!t.hasNameForId(this.componentId, s2)) {
            var i2 = n(r2, ".".concat(s2), void 0, this.componentId);
            t.insertRules(this.componentId, s2, i2);
          }
          o2 = te(o2, s2), this.staticRulesId = s2;
        }
      else {
        for (var a2 = k(this.baseHash, n.hash), c2 = "", l2 = 0; l2 < this.rules.length; l2++) {
          var u2 = this.rules[l2];
          if ("string" == typeof u2)
            c2 += u2, false;
          else if (u2) {
            var p2 = ne(Ge(u2, e2, t, n));
            a2 = k(a2, p2), c2 += p2;
          }
        }
        if (c2) {
          var d = R(a2 >>> 0);
          t.hasNameForId(this.componentId, d) || t.insertRules(this.componentId, d, n(c2, ".".concat(d), void 0, this.componentId)), o2 = te(o2, d);
        }
      }
      return o2;
    }, e;
  }();
  var He = import_react7.default.createContext(void 0);
  var Ue = He.Consumer;
  var Ze = {};
  function Qe(e, r2, s2) {
    var i2 = ee(e), a2 = e, c2 = !M(e), p2 = r2.attrs, d = void 0 === p2 ? E : p2, h = r2.componentId, f2 = void 0 === h ? function(e2, t) {
      var n = "string" != typeof e2 ? "sc" : A(e2);
      Ze[n] = (Ze[n] || 0) + 1;
      var o2 = "".concat(n, "-").concat(x("6.0.1" + n + Ze[n]));
      return t ? "".concat(t, "-").concat(o2) : o2;
    }(r2.displayName, r2.parentComponentId) : h, m = r2.displayName, y2 = void 0 === m ? function(e2) {
      return M(e2) ? "styled.".concat(e2) : "Styled(".concat(V(e2), ")");
    }(e) : m, v2 = r2.displayName && r2.componentId ? "".concat(A(r2.displayName), "-").concat(r2.componentId) : r2.componentId || f2, g2 = i2 && a2.attrs ? a2.attrs.concat(d).filter(Boolean) : d, S17 = r2.shouldForwardProp;
    if (i2 && a2.shouldForwardProp) {
      var w = a2.shouldForwardProp;
      if (r2.shouldForwardProp) {
        var C2 = r2.shouldForwardProp;
        S17 = function(e2, t) {
          return w(e2, t) && C2(e2, t);
        };
      } else
        S17 = w;
    }
    var I2 = new qe(s2, v2, i2 ? a2.componentStyle : void 0), O2 = I2.isStatic && 0 === d.length;
    function D2(e2, r3) {
      return function(e3, r4, s3, i3) {
        var a3 = e3.attrs, c3 = e3.componentStyle, p3 = e3.defaultProps, d2 = e3.foldedComponentIds, h2 = e3.styledComponentId, f3 = e3.target, m2 = import_react7.default.useContext(He), y3 = Ve(), v3 = e3.shouldForwardProp || y3.shouldForwardProp;
        var g3 = function(e4, n, o2) {
          for (var r5, s4 = __assign(__assign({}, n), { className: void 0, theme: o2 }), i4 = 0; i4 < e4.length; i4 += 1) {
            var a4 = Q(r5 = e4[i4]) ? r5(s4) : r5;
            for (var c4 in a4)
              s4[c4] = "className" === c4 ? te(s4[c4], a4[c4]) : "style" === c4 ? __assign(__assign({}, s4[c4]), a4[c4]) : a4[c4];
          }
          return n.className && (s4.className = te(s4.className, n.className)), s4;
        }(a3, r4, P(r4, m2, p3) || N), S18 = g3.as || f3, w2 = {};
        for (var b in g3)
          void 0 === g3[b] || "$" === b[0] || "as" === b || "theme" === b || ("forwardedAs" === b ? w2.as = g3.forwardedAs : v3 && !v3(b, S18) || (w2[b] = g3[b], v3 || true));
        var E2 = function(e4, t) {
          var n = Ve(), o2 = e4.generateAndInjectStyles(t, n.styleSheet, n.stylis);
          return false, o2;
        }(c3, g3);
        var C3 = te(d2, h2);
        return E2 && (C3 += " " + E2), g3.className && (C3 += " " + g3.className), w2[M(S18) && !_.has(S18) ? "class" : "className"] = C3, w2.ref = s3, (0, import_react7.createElement)(S18, w2);
      }(R2, e2, r3, O2);
    }
    D2.displayName = y2;
    var R2 = import_react7.default.forwardRef(D2);
    return R2.attrs = g2, R2.componentStyle = I2, R2.displayName = y2, R2.shouldForwardProp = S17, R2.foldedComponentIds = i2 ? te(a2.foldedComponentIds, a2.styledComponentId) : "", R2.styledComponentId = v2, R2.target = i2 ? a2.target : e, Object.defineProperty(R2, "defaultProps", { get: function() {
      return this._foldedDefaultProps;
    }, set: function(e2) {
      this._foldedDefaultProps = i2 ? function(e3) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        for (var o2 = 0, r3 = t; o2 < r3.length; o2++)
          re(e3, r3[o2], true);
        return e3;
      }({}, a2.defaultProps, e2) : e2;
    } }), false, se(R2, function() {
      return ".".concat(R2.styledComponentId);
    }), c2 && K(R2, e, { attrs: true, componentStyle: true, displayName: true, foldedComponentIds: true, shouldForwardProp: true, styledComponentId: true, target: true }), R2;
  }
  function et(e, t) {
    for (var n = [e[0]], o2 = 0, r2 = t.length; o2 < r2; o2 += 1)
      n.push(t[o2], e[o2 + 1]);
    return n;
  }
  var tt = function(e) {
    return Object.assign(e, { isCss: true });
  };
  function nt(t) {
    for (var n = [], o2 = 1; o2 < arguments.length; o2++)
      n[o2 - 1] = arguments[o2];
    if (Q(t) || oe(t)) {
      var r2 = t;
      return tt(Ge(et(E, __spreadArray([r2], n, true))));
    }
    var s2 = t;
    return 0 === n.length && 1 === s2.length && "string" == typeof s2[0] ? Ge(s2) : tt(Ge(et(s2, n)));
  }
  function ot(n, o2, r2) {
    if (void 0 === r2 && (r2 = N), !o2)
      throw ce(1, o2);
    var s2 = function(t) {
      for (var s3 = [], i2 = 1; i2 < arguments.length; i2++)
        s3[i2 - 1] = arguments[i2];
      return n(o2, r2, nt.apply(void 0, __spreadArray([t], s3, false)));
    };
    return s2.attrs = function(e) {
      return ot(n, o2, __assign(__assign({}, r2), { attrs: Array.prototype.concat(r2.attrs, e).filter(Boolean) }));
    }, s2.withConfig = function(e) {
      return ot(n, o2, __assign(__assign({}, r2), e));
    }, s2;
  }
  var rt = function(e) {
    return ot(Qe, e);
  };
  var st = rt;
  _.forEach(function(e) {
    st[e] = rt(e);
  });
  var it = function() {
    function e(e2, t) {
      this.rules = e2, this.componentId = t, this.isStatic = Ye(e2), Ce.registerId(this.componentId + 1);
    }
    return e.prototype.createStyles = function(e2, t, n, o2) {
      var r2 = o2(ne(Ge(this.rules, t, n, o2)), ""), s2 = this.componentId + e2;
      n.insertRules(s2, s2, r2);
    }, e.prototype.removeStyles = function(e2, t) {
      t.clearRules(this.componentId + e2);
    }, e.prototype.renderStyles = function(e2, t, n, o2) {
      e2 > 2 && Ce.registerId(this.componentId + e2), this.removeStyles(e2, n), this.createStyles(e2, t, n, o2);
    }, e;
  }();
  function at(n) {
    for (var r2 = [], s2 = 1; s2 < arguments.length; s2++)
      r2[s2 - 1] = arguments[s2];
    var i2 = nt.apply(void 0, __spreadArray([n], r2, false)), a2 = "sc-global-".concat(x(JSON.stringify(i2))), c2 = new it(i2, a2);
    var l2 = function(e) {
      var t = Ve(), n2 = import_react7.default.useContext(He), r3 = import_react7.default.useRef(t.styleSheet.allocateGSInstance(a2)).current;
      return false, false, t.styleSheet.server && u2(r3, e, t.styleSheet, n2, t.stylis), (import_react7.default.useInsertionEffect || import_react7.default.useLayoutEffect)(function() {
        if (!t.styleSheet.server)
          return u2(r3, e, t.styleSheet, n2, t.stylis), function() {
            return c2.removeStyles(r3, t.styleSheet);
          };
      }, [r3, e, t.styleSheet, n2, t.stylis]), null;
    };
    function u2(e, n2, o2, r3, s3) {
      if (c2.isStatic)
        c2.renderStyles(e, g, o2, s3);
      else {
        var i3 = __assign(__assign({}, n2), { theme: P(n2, r3, l2.defaultProps) });
        c2.renderStyles(e, i3, o2, s3);
      }
    }
    return import_react7.default.memo(l2);
  }
  var ut = function() {
    function e() {
      var e2 = this;
      this._emitSheetCSS = function() {
        var t = e2.instance.toString(), n = Se(), o2 = ne([n && 'nonce="'.concat(n, '"'), "".concat(f, '="true"'), "".concat("data-styled-version", '="').concat("6.0.1", '"')].filter(Boolean), " ");
        return "<style ".concat(o2, ">").concat(t, "</style>");
      }, this.getStyleTags = function() {
        if (e2.sealed)
          throw ce(2);
        return e2._emitSheetCSS();
      }, this.getStyleElement = function() {
        var n;
        if (e2.sealed)
          throw ce(2);
        var r2 = ((n = {})[f] = "", n["data-styled-version"] = "6.0.1", n.dangerouslySetInnerHTML = { __html: e2.instance.toString() }, n), s2 = Se();
        return s2 && (r2.nonce = s2), [import_react7.default.createElement("style", __assign({}, r2, { key: "sc-0-0" }))];
      }, this.seal = function() {
        e2.sealed = true;
      }, this.instance = new Ce({ isServer: true }), this.sealed = false;
    }
    return e.prototype.collectStyles = function(e2) {
      if (this.sealed)
        throw ce(2);
      return import_react7.default.createElement(Me, { sheet: this.instance }, e2);
    }, e.prototype.interleaveWithNodeStream = function(e2) {
      throw ce(3);
    }, e;
  }();
  var dt = "__sc-".concat(f, "__");

  // src/frontend/layouts/GlobalStyle.jsx
  var GlobalStyle_default = at`
  @font-face {
    font-family: 'MartianMono';
    src: url('../assets/MartianMono.woff2') format('woff2'),
      url('../assets/MartianMono.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video, select {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    font-family: 'MartianMono';
    vertical-align: baseline;
    box-sizing: border-box;
    word-spacing: -${PADDING * 2}px;

    .sm {
      font-size: 1.25rem;
    }
    .md {
      font-size: 1.5rem;
    }
    .lg {
      font-size: 1.75rem;
    }
    .xl {
      font-size: 2rem;
    }
  }

  p {
    user-select: none;
  }

  b {
    font-weight: bold;
  }

  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  html, body {
    margin: 0;
    padding: 0;
    width: 800px;
    height: 480px;
    overflow-x: hidden;
  }
  
  #app {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .hidden {
    visibility: hidden;
    pointer-events: none;
  }

  #canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    outline: none;
  }
`;

  // src/frontend/layouts/App.jsx
  var import_react25 = __toESM(require_react());

  // node_modules/react-icons/lib/esm/iconBase.js
  var import_react9 = __toESM(require_react());

  // node_modules/react-icons/lib/esm/iconContext.js
  var import_react8 = __toESM(require_react());
  var DefaultContext = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0
  };
  var IconContext = import_react8.default.createContext && import_react8.default.createContext(DefaultContext);

  // node_modules/react-icons/lib/esm/iconBase.js
  var __assign2 = function() {
    __assign2 = Object.assign || function(t) {
      for (var s2, i2 = 1, n = arguments.length; i2 < n; i2++) {
        s2 = arguments[i2];
        for (var p2 in s2)
          if (Object.prototype.hasOwnProperty.call(s2, p2))
            t[p2] = s2[p2];
      }
      return t;
    };
    return __assign2.apply(this, arguments);
  };
  var __rest = function(s2, e) {
    var t = {};
    for (var p2 in s2)
      if (Object.prototype.hasOwnProperty.call(s2, p2) && e.indexOf(p2) < 0)
        t[p2] = s2[p2];
    if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
        if (e.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]))
          t[p2[i2]] = s2[p2[i2]];
      }
    return t;
  };
  function Tree2Element(tree) {
    return tree && tree.map(function(node2, i2) {
      return import_react9.default.createElement(node2.tag, __assign2({
        key: i2
      }, node2.attr), Tree2Element(node2.child));
    });
  }
  function GenIcon(data) {
    return function(props) {
      return import_react9.default.createElement(IconBase, __assign2({
        attr: __assign2({}, data.attr)
      }, props), Tree2Element(data.child));
    };
  }
  function IconBase(props) {
    var elem = function(conf) {
      var attr = props.attr, size = props.size, title = props.title, svgProps = __rest(props, ["attr", "size", "title"]);
      var computedSize = size || conf.size || "1em";
      var className;
      if (conf.className)
        className = conf.className;
      if (props.className)
        className = (className ? className + " " : "") + props.className;
      return import_react9.default.createElement("svg", __assign2({
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0"
      }, conf.attr, attr, svgProps, {
        className,
        style: __assign2(__assign2({
          color: props.color || conf.color
        }, conf.style), props.style),
        height: computedSize,
        width: computedSize,
        xmlns: "http://www.w3.org/2000/svg"
      }), title && import_react9.default.createElement("title", null, title), props.children);
    };
    return IconContext !== void 0 ? import_react9.default.createElement(IconContext.Consumer, null, function(conf) {
      return elem(conf);
    }) : elem(DefaultContext);
  }

  // src/frontend/layouts/App.jsx
  var import_react_draggable = __toESM(require_cjs());

  // src/frontend/state.js
  var State = class {
    FPS = 0;
    GPIO_KEYS = [];
    CURRENT_TRACK = 0;
    PATTERN_BANK = "A";
    PATTERN_INDEX = 0;
    PLAYING = false;
    BPM = 140;
    BEAT = 0;
    BEAT_PULSE = 0;
    STEP = 0;
    STATE_CHANGED = 0;
    LAST_UPDATE = performance.now();
    LAST_LED_VALUES = void 0;
    LONG_PRESS = 0;
    LONG_PRESS_INDEX = void 0;
    LONG_PRESS_TYPE = void 0;
    LONG_PRESS_ACTIVE = false;
  };
  var state_default = new State();

  // src/frontend/layouts/SettingsMenu.jsx
  var import_react10 = __toESM(require_react());

  // src/frontend/layouts/menuStyle.js
  var defaultMenuStyle = nt`
  position: fixed;
  top: 54px;
  padding: ${PADDING * 2}px;
  background-color: dimgray;
  min-height: ${HEIGHT - HEADER_HEIGHT}px;
  max-height: ${HEIGHT - HEADER_HEIGHT}px;
  min-width: ${WIDTH}px;
  max-width: ${WIDTH}px;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`;

  // src/frontend/layouts/SettingsMenu.jsx
  var S = {
    Wrapper: st.div`
    ${defaultMenuStyle}

    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    > p {
      color: white;
      margin-top: ${PADDING * 2}px;
    }
  `,
    InnerWrapper: st.div`
    justify-self: flex-start;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: ${TRACK_HEIGHT / 2}px;
    width: 100%;

    > p {
      color: white;
      margin-top: ${PADDING * 2}px;
    }

    > div {
      display: flex;
      gap: ${PADDING}px;
    }
  `,
    ProjectSelect: st.select`
    padding: ${PADDING}px ${PADDING * 2}px;
    margin-top: ${PADDING * 2}px;
    background-color: lightgray;
    font-size: 1.5rem;
    user-select: none;
    outline: none;
    border: 0;

    &:focus {
      background-color: white;
    }
  `,
    Button: st.button`
    font-size: 1.5rem;
    padding: ${PADDING * 2}px;
    margin-top: ${PADDING * 2}px;
  `
  };
  var SettingsMenu = ({ ...props }) => {
    const { storage } = useStorageContext();
    const { currentProject, setCurrentProject, resetStateContext } = useStateContext();
    const { resetMenuContext } = useMenuContext();
    const { resetTracksContext } = useTracksContext();
    const [selectedProject, setSelectedProject] = (0, import_react10.useState)(false);
    const projectsKeys = Object.keys(storage?.projects || {});
    const newProjectIndex = int(projectsKeys.slice().pop()) + 1;
    const divider = /* @__PURE__ */ import_react10.default.createElement(import_react10.default.Fragment, null, "\xA0\xA0-\xA0\xA0");
    const saveProject = () => {
      if (selectedProject === "new") {
        setCurrentProject(newProjectIndex);
        setSelectedProject(false);
        electron.log(`saving new project ${newProjectIndex}`);
        return;
      }
      if (isNaN(int(selectedProject))) {
        electron.log(`saving existing project ${currentProject}`);
        return;
      }
      electron.log(`overwriting existing project ${selectedProject}`);
    };
    const createProject = () => {
      electron.log(`creating new project ${newProjectIndex}`);
      setCurrentProject(newProjectIndex);
      setSelectedProject(false);
      resetStateContext();
      resetMenuContext();
      resetTracksContext();
    };
    const loadProject = () => {
      const projectIndex = int(selectedProject);
      const project = storage?.projects?.[projectIndex];
      electron.log(`loading project ${projectIndex}`);
      setCurrentProject(projectIndex);
      setSelectedProject(false);
      resetStateContext(project?.state);
      resetMenuContext(project?.menu);
      resetTracksContext(project?.tracks);
    };
    return /* @__PURE__ */ import_react10.default.createElement(S.Wrapper, { ...props }, /* @__PURE__ */ import_react10.default.createElement("p", { className: "xl" }, "SETTINGS"), /* @__PURE__ */ import_react10.default.createElement(S.InnerWrapper, null, /* @__PURE__ */ import_react10.default.createElement("p", { className: "lg" }, "PROJECT"), /* @__PURE__ */ import_react10.default.createElement("p", { className: "sm" }, /* @__PURE__ */ import_react10.default.createElement("span", null, "CURRENT: ", /* @__PURE__ */ import_react10.default.createElement("b", null, currentProject)), selectedProject ? /* @__PURE__ */ import_react10.default.createElement("span", null, divider, "SELECTED: ", /* @__PURE__ */ import_react10.default.createElement("b", null, selectedProject)) : null), /* @__PURE__ */ import_react10.default.createElement(
      S.ProjectSelect,
      {
        onClick: () => null,
        onChange: ({ target }) => setSelectedProject(target.value)
      },
      (projectsKeys || []).map((e, i2) => /* @__PURE__ */ import_react10.default.createElement(
        "option",
        {
          key: `${e}-${i2}`,
          value: int(e),
          selected: !isNaN(int(selectedProject)) ? i2 === int(selectedProject) : i2 === int(currentProject)
        },
        "Project ",
        e
      )),
      /* @__PURE__ */ import_react10.default.createElement("option", { value: "new" }, "Project ", newProjectIndex, " (new)")
    ), /* @__PURE__ */ import_react10.default.createElement("div", null, /* @__PURE__ */ import_react10.default.createElement(S.Button, { onClick: () => ask("sure?", () => saveProject()) }, /* @__PURE__ */ import_react10.default.createElement("p", null, isNaN(int(selectedProject)) || int(currentProject) === int(selectedProject) ? "Save" : "Overwrite", " ", "project")), selectedProject === "new" ? /* @__PURE__ */ import_react10.default.createElement(S.Button, { onClick: () => ask("sure?", () => createProject()) }, /* @__PURE__ */ import_react10.default.createElement("p", null, "Create project")) : /* @__PURE__ */ import_react10.default.createElement(
      S.Button,
      {
        onClick: () => ask("sure?", () => loadProject()),
        disabled: isNaN(int(selectedProject)) || int(currentProject) === int(selectedProject)
      },
      /* @__PURE__ */ import_react10.default.createElement("p", null, "Load project")
    ))), /* @__PURE__ */ import_react10.default.createElement(S.InnerWrapper, null, /* @__PURE__ */ import_react10.default.createElement("p", { className: "lg" }, "GLOBAL"), /* @__PURE__ */ import_react10.default.createElement(S.Button, { onClick: () => electron.reloadWindow() }, /* @__PURE__ */ import_react10.default.createElement("p", null, "Reload page")), /* @__PURE__ */ import_react10.default.createElement(S.Button, { onClick: () => confirm("sure?") && electron.rebootRpi() }, /* @__PURE__ */ import_react10.default.createElement("p", null, "Reboot Raspberry Pi")), /* @__PURE__ */ import_react10.default.createElement(S.Button, { onClick: () => confirm("sure?") && electron.shutdownRpi() }, /* @__PURE__ */ import_react10.default.createElement("p", null, "Shutdown Raspberry Pi")), /* @__PURE__ */ import_react10.default.createElement(S.Button, { onClick: () => confirm("sure?") && electron.clearStorage() }, /* @__PURE__ */ import_react10.default.createElement("p", null, "Clear storage"))));
  };
  var SettingsMenu_default = SettingsMenu;

  // src/frontend/layouts/EnvelopeMenu.jsx
  var import_react11 = __toESM(require_react());
  var S2 = {
    Wrapper: st.div`
    ${defaultMenuStyle}

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `,
    Button: st.button`
    padding: 10px;
    margin-bottom: ${CELL_WIDTH}px;
    font-size: 1.5rem;
  `
  };
  var EnvelopeMenu = ({ ...props }) => {
    return /* @__PURE__ */ import_react11.default.createElement(S2.Wrapper, { ...props }, /* @__PURE__ */ import_react11.default.createElement(S2.Button, null, /* @__PURE__ */ import_react11.default.createElement("p", null, "Create envelope")));
  };
  var EnvelopeMenu_default = EnvelopeMenu;

  // src/frontend/components/Header.jsx
  var import_react15 = __toESM(require_react());

  // node_modules/react-icons/io5/index.esm.js
  function IoAddSharp(props) {
    return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M256 112v288m144-144H112" } }] })(props);
  }
  function IoClose(props) {
    return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" } }] })(props);
  }
  function IoGrid(props) {
    return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M204 240H68a36 36 0 01-36-36V68a36 36 0 0136-36h136a36 36 0 0136 36v136a36 36 0 01-36 36zm240 0H308a36 36 0 01-36-36V68a36 36 0 0136-36h136a36 36 0 0136 36v136a36 36 0 01-36 36zM204 480H68a36 36 0 01-36-36V308a36 36 0 0136-36h136a36 36 0 0136 36v136a36 36 0 01-36 36zm240 0H308a36 36 0 01-36-36V308a36 36 0 0136-36h136a36 36 0 0136 36v136a36 36 0 01-36 36z" } }] })(props);
  }
  function IoPulseSharp(props) {
    return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M426 266a54.07 54.07 0 00-49.3 32h-24.84l-27-81a22 22 0 00-42 .92l-37.2 130.2-48-281.74a22 22 0 00-43-1.72L94.82 298H32v44h80a22 22 0 0021.34-16.66L171.69 172l46.61 273.62A22 22 0 00238.76 464H240a22 22 0 0021.15-16l44.47-149.62 9.51 28.62A22 22 0 00336 342h40.7a54 54 0 1049.3-76z" } }] })(props);
  }
  function IoRemoveSharp(props) {
    return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeLinejoin": "round", "strokeWidth": "32", "d": "M400 256H112" } }] })(props);
  }
  function IoSettingsSharp(props) {
    return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 176a80 80 0 1080 80 80.24 80.24 0 00-80-80zm172.72 80a165.53 165.53 0 01-1.64 22.34l48.69 38.12a11.59 11.59 0 012.63 14.78l-46.06 79.52a11.64 11.64 0 01-14.14 4.93l-57.25-23a176.56 176.56 0 01-38.82 22.67l-8.56 60.78a11.93 11.93 0 01-11.51 9.86h-92.12a12 12 0 01-11.51-9.53l-8.56-60.78A169.3 169.3 0 01151.05 393L93.8 416a11.64 11.64 0 01-14.14-4.92L33.6 331.57a11.59 11.59 0 012.63-14.78l48.69-38.12A174.58 174.58 0 0183.28 256a165.53 165.53 0 011.64-22.34l-48.69-38.12a11.59 11.59 0 01-2.63-14.78l46.06-79.52a11.64 11.64 0 0114.14-4.93l57.25 23a176.56 176.56 0 0138.82-22.67l8.56-60.78A11.93 11.93 0 01209.94 26h92.12a12 12 0 0111.51 9.53l8.56 60.78A169.3 169.3 0 01361 119l57.2-23a11.64 11.64 0 0114.14 4.92l46.06 79.52a11.59 11.59 0 01-2.63 14.78l-48.69 38.12a174.58 174.58 0 011.64 22.66z" } }] })(props);
  }
  function IoVolumeHighSharp(props) {
    return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeLinecap": "square", "strokeMiterlimit": "10", "strokeWidth": "32", "d": "M320 320c9.74-19.38 16-40.84 16-64 0-23.48-6-44.42-16-64m48 176c19.48-33.92 32-64.06 32-112s-12-77.74-32-112m48 272c30-46 48-91.43 48-160s-18-113-48-160" } }, { "tag": "path", "attr": { "d": "M125.65 176.1H32v159.8h93.65L256 440V72L125.65 176.1z" } }] })(props);
  }

  // src/frontend/components/FPS.jsx
  var import_react12 = __toESM(require_react());
  var S3 = {
    Wrapper: st.div`
    grid-area: fps;
    justify-self: flex-start;
    color: gray;
    margin-top: ${PADDING / 2}px;
  `
  };
  var FPS = () => {
    const samples = (0, import_react12.useRef)(Array.from({ length: 8 }).fill(0));
    const i2 = (0, import_react12.useRef)(0);
    samples.current[i2.current++ % samples.current.length] = int(state_default.FPS);
    const average = sum(samples.current) / samples.current.length;
    return /* @__PURE__ */ import_react12.default.createElement(S3.Wrapper, null, /* @__PURE__ */ import_react12.default.createElement("p", { className: "sm" }, "FPS:", average.toFixed(1)));
  };
  var FPS_default = FPS;

  // src/frontend/components/BPM.jsx
  var import_react14 = __toESM(require_react());

  // src/frontend/components/StyledText.jsx
  var import_react13 = __toESM(require_react());
  var S4 = {
    Span: st.span``,
    B: st.b``
  };
  var StyledText = ({ children, p: p2, bold, ...props }) => {
    let Element2 = S4.Span;
    if (bold)
      Element2 = S4.B;
    if (p2 && bold) {
      return /* @__PURE__ */ import_react13.default.createElement(S4.Span, { ...props }, /* @__PURE__ */ import_react13.default.createElement(S4.B, null, children));
    }
    return /* @__PURE__ */ import_react13.default.createElement(Element2, { ...props }, children);
  };
  var StyledText_default = StyledText;

  // src/frontend/components/BPM.jsx
  var S5 = {
    Wrapper: st.div`
    grid-area: bpm;
    justify-self: flex-start;
    color: gray;
  `
  };
  var BPM = () => {
    const { isPlaying } = useStateContext();
    return /* @__PURE__ */ import_react14.default.createElement(S5.Wrapper, null, /* @__PURE__ */ import_react14.default.createElement("p", { className: "sm" }, "BPM:", /* @__PURE__ */ import_react14.default.createElement(StyledText_default, { style: isPlaying ? { color: "black" } : {}, bold: true }, state_default.BPM)));
  };
  var BPM_default = BPM;

  // src/frontend/components/Header.jsx
  var S6 = {
    Wrapper: st.div`
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    min-height: ${CELL_WIDTH}px;
    display: grid;
    align-items: center;
    padding: ${PADDING}px;
    box-sizing: border-box;
    background-color: lightgray;
    border-bottom: ${1}px solid black;

    grid-template: 'nav pattern bpm fps track-nav';
    grid-template-columns: ${TRACK_HEIGHT}px ${TRACK_HEIGHT * 2}px ${TRACK_HEIGHT}px 1fr;

    .react-icon {
      margin-right: ${PADDING * 2}px;
    }
  `,
    StatsWrapper: st.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    > div {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      margin-left: ${PADDING * 4}px;
    }
  `,
    Nav: st.div`
    grid-area: nav;
    display: flex;
    width: 50vw;

    ${({ $showSettingsMenu }) => $showSettingsMenu && nt`
        width: 100vw;
        justify-content: space-between;
      `}
  `,
    TrackNav: st.div`
    grid-area: track-nav;
    justify-self: flex-end;
    display: flex;
    align-items: center;

    p {
      display: inline-block;
      margin-right: ${PADDING * 4}px;
      color: gray;
    }
  `
  };
  var Header = () => {
    const { currentProject, currentTrack } = useStateContext();
    const { isMuteMode } = useTracksContext();
    const {
      showSettingsMenu,
      setShowSettingsMenu,
      showTrackMenu,
      setShowTrackMenu,
      showEnvelopeMenu,
      setShowEnvelopeMenu,
      showTrackSettingsMenu,
      setShowTrackSettingsMenu
    } = useMenuContext();
    const SettingsMenuIcon = (0, import_react15.useMemo)(
      () => showSettingsMenu ? IoClose : IoGrid,
      [showSettingsMenu]
    );
    return /* @__PURE__ */ import_react15.default.createElement(S6.Wrapper, null, /* @__PURE__ */ import_react15.default.createElement(S6.Nav, { $showSettingsMenu: showSettingsMenu }, /* @__PURE__ */ import_react15.default.createElement(
      SettingsMenuIcon,
      {
        style: { scale: showSettingsMenu ? "1.25" : "0.85" },
        onClick: () => setShowSettingsMenu((e) => !e)
      }
    ), showSettingsMenu && /* @__PURE__ */ import_react15.default.createElement(
      IoSettingsSharp,
      {
        style: { scale: "0.9" },
        onClick: () => electron.openDevtools()
      }
    )), /* @__PURE__ */ import_react15.default.createElement(S6.StatsWrapper, null, !showSettingsMenu && /* @__PURE__ */ import_react15.default.createElement(import_react15.default.Fragment, null, /* @__PURE__ */ import_react15.default.createElement("p", { className: "lg", style: { gridArea: "pattern" } }, "P:", currentProject), /* @__PURE__ */ import_react15.default.createElement("div", null, /* @__PURE__ */ import_react15.default.createElement(BPM_default, null), /* @__PURE__ */ import_react15.default.createElement(FPS_default, null)))), /* @__PURE__ */ import_react15.default.createElement(S6.TrackNav, { className: showSettingsMenu && "hidden" }, isMuteMode && /* @__PURE__ */ import_react15.default.createElement(IoVolumeHighSharp, { style: { scale: "0.85" } }), /* @__PURE__ */ import_react15.default.createElement("p", { className: "lg" }, "T:", currentTrack), /* @__PURE__ */ import_react15.default.createElement(
      IoPulseSharp,
      {
        style: { marginRight: `${PADDING * 2}px`, transform: "scale(-1,1)" },
        onClick: () => setShowEnvelopeMenu((e) => !e)
      }
    ), /* @__PURE__ */ import_react15.default.createElement(
      IoSettingsSharp,
      {
        style: { scale: "0.9" },
        onClick: () => setShowTrackMenu((e) => !e)
      }
    )));
  };
  var Header_default = Header;

  // src/frontend/layouts/TrackMenu.jsx
  var import_react17 = __toESM(require_react());

  // src/frontend/components/ControlSetting.jsx
  var import_react16 = __toESM(require_react());
  var S7 = {
    Wrapper: st.div`
    width: 50%;
    height: ${CELL_WIDTH}px;
    margin: ${PADDING * 3}px 0;
  `,
    InnerWrapper: st.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: lightslategray;
    padding: ${PADDING}px;
    margin: ${PADDING * 2}px;

    > p {
      margin-left: ${PADDING * 4}px;
    }

    > div {
      display: flex;
      align-items: center;
      margin-right: ${PADDING * 2}px;

      p {
        margin: 0 ${PADDING * 2}px;
      }
    }
  `
  };
  var ControlSetting = ({ name, value = 0, handleControlChange }) => {
    const [controlValue, setControlValue] = (0, import_react16.useState)(value);
    const handleClick = (x2) => {
      setControlValue((prevControlValue) => {
        const newValue = prevControlValue + x2;
        handleControlChange(name, newValue);
        return newValue;
      });
    };
    return /* @__PURE__ */ import_react16.default.createElement(S7.Wrapper, null, /* @__PURE__ */ import_react16.default.createElement(S7.InnerWrapper, null, /* @__PURE__ */ import_react16.default.createElement("p", { className: "md" }, name), /* @__PURE__ */ import_react16.default.createElement("div", null, /* @__PURE__ */ import_react16.default.createElement(IoRemoveSharp, { onClick: () => handleClick(-1) }), /* @__PURE__ */ import_react16.default.createElement("p", { className: "md" }, controlValue), /* @__PURE__ */ import_react16.default.createElement(IoAddSharp, { onClick: () => handleClick(1) }))));
  };
  var ControlSetting_default = ControlSetting;

  // src/frontend/layouts/TrackMenu.jsx
  var S8 = {
    Wrapper: st.div`
    ${defaultMenuStyle}

    p {
      color: white;
      margin: ${PADDING * 2}px;
      margin-bottom: 0;
    }
  `,
    ControlSettingWrapper: st.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  `
  };
  var TrackMenu = ({ ...props }) => {
    const [controlState, setControlState] = (0, import_react17.useState)({});
    const handleControlChange = (name, value) => {
      setControlState((prevControlState) => ({
        ...prevControlState,
        [name]: value
      }));
    };
    const controlProps = { handleControlChange };
    return /* @__PURE__ */ import_react17.default.createElement(S8.Wrapper, { ...props }, /* @__PURE__ */ import_react17.default.createElement("p", { className: "lg" }, "TRACK SETTINGS"), /* @__PURE__ */ import_react17.default.createElement(S8.ControlSettingWrapper, null, /* @__PURE__ */ import_react17.default.createElement(ControlSetting_default, { name: "steps", ...controlProps }), /* @__PURE__ */ import_react17.default.createElement(ControlSetting_default, { name: "rootNote", ...controlProps }), /* @__PURE__ */ import_react17.default.createElement(ControlSetting_default, { name: "length", ...controlProps }), /* @__PURE__ */ import_react17.default.createElement(ControlSetting_default, { name: "channel", ...controlProps })), /* @__PURE__ */ import_react17.default.createElement("pre", null, JSON.stringify(controlState, null, 2)));
  };
  var TrackMenu_default = TrackMenu;

  // src/frontend/components/Tracks.jsx
  var import_react24 = __toESM(require_react());

  // src/frontend/components/Track.jsx
  var import_react22 = __toESM(require_react());

  // src/frontend/components/TrackHeader.jsx
  var import_react18 = __toESM(require_react());
  var S9 = {
    Wrapper: st.div`
    background-color: lightgray;
    border-top: 3px solid black;
    border-bottom: ${({ $hasOpenTrackMenus }) => $hasOpenTrackMenus ? "3px dotted black" : "0px ridge red"};

    p {
      display: inline-block;
      padding: ${PADDING}px ${PADDING * 2}px;
    }

    p:not(:first-of-type) {
      border-left: 3px dotted black;
    }
  `
  };
  var TrackHeader = ({ isNewTrack }) => {
    const { showTrackSettingsMenu, showTrackControlChangeMenu } = useMenuContext();
    const {
      id,
      device,
      rootNoteInstrument,
      steps,
      isMuted,
      isCurrentTrack,
      currentPage
    } = useTrackContext();
    (0, import_react18.useEffect)(() => {
    }, [rootNoteInstrument]);
    if (isNewTrack) {
      return /* @__PURE__ */ import_react18.default.createElement(S9.Wrapper, { $isNewTrack: isNewTrack }, /* @__PURE__ */ import_react18.default.createElement("p", { className: "sm" }, "CREATE NEW TRACK"));
    }
    return /* @__PURE__ */ import_react18.default.createElement(
      S9.Wrapper,
      {
        $isCurrentTrack: isCurrentTrack,
        $hasOpenTrackMenus: showTrackSettingsMenu || showTrackControlChangeMenu
      },
      /* @__PURE__ */ import_react18.default.createElement("p", { className: "sm" }, "T:", /* @__PURE__ */ import_react18.default.createElement(StyledText_default, { bold: true }, id)),
      rootNoteInstrument && /* @__PURE__ */ import_react18.default.createElement("p", { className: "sm" }, /* @__PURE__ */ import_react18.default.createElement(StyledText_default, null, device.short), "\xA0", /* @__PURE__ */ import_react18.default.createElement(StyledText_default, { bold: true }, rootNoteInstrument)),
      /* @__PURE__ */ import_react18.default.createElement("p", { className: "sm" }, /* @__PURE__ */ import_react18.default.createElement(StyledText_default, { bold: true }, steps, ":"), getMaxSteps(steps)),
      isMuted && /* @__PURE__ */ import_react18.default.createElement("p", { className: "sm" }, /* @__PURE__ */ import_react18.default.createElement(StyledText_default, { bold: true }, "MUTED"))
    );
  };
  var TrackHeader_default = TrackHeader;

  // src/frontend/components/TrackSettingsMenu.jsx
  var import_react19 = __toESM(require_react());

  // node_modules/@tonaljs/core/dist/index.mjs
  var fillStr = (s2, n) => Array(Math.abs(n) + 1).join(s2);
  function deprecate(original, alternative, fn) {
    return function(...args) {
      console.warn(`${original} is deprecated. Use ${alternative}.`);
      return fn.apply(this, args);
    };
  }
  function isNamed(src) {
    return src !== null && typeof src === "object" && typeof src.name === "string" ? true : false;
  }
  function isPitch(pitch) {
    return pitch !== null && typeof pitch === "object" && typeof pitch.step === "number" && typeof pitch.alt === "number" ? true : false;
  }
  var FIFTHS = [0, 2, 4, -1, 1, 3, 5];
  var STEPS_TO_OCTS = FIFTHS.map(
    (fifths) => Math.floor(fifths * 7 / 12)
  );
  function encode(pitch) {
    const { step, alt, oct, dir = 1 } = pitch;
    const f2 = FIFTHS[step] + 7 * alt;
    if (oct === void 0) {
      return [dir * f2];
    }
    const o2 = oct - STEPS_TO_OCTS[step] - 4 * alt;
    return [dir * f2, dir * o2];
  }
  var FIFTHS_TO_STEPS = [3, 0, 4, 1, 5, 2, 6];
  function decode(coord) {
    const [f2, o2, dir] = coord;
    const step = FIFTHS_TO_STEPS[unaltered(f2)];
    const alt = Math.floor((f2 + 1) / 7);
    if (o2 === void 0) {
      return { step, alt, dir };
    }
    const oct = o2 + 4 * alt + STEPS_TO_OCTS[step];
    return { step, alt, oct, dir };
  }
  function unaltered(f2) {
    const i2 = (f2 + 1) % 7;
    return i2 < 0 ? 7 + i2 : i2;
  }
  var NoNote = { empty: true, name: "", pc: "", acc: "" };
  var cache = /* @__PURE__ */ new Map();
  var stepToLetter = (step) => "CDEFGAB".charAt(step);
  var altToAcc = (alt) => alt < 0 ? fillStr("b", -alt) : fillStr("#", alt);
  var accToAlt = (acc) => acc[0] === "b" ? -acc.length : acc.length;
  function note(src) {
    const stringSrc = JSON.stringify(src);
    const cached = cache.get(stringSrc);
    if (cached) {
      return cached;
    }
    const value = typeof src === "string" ? parse2(src) : isPitch(src) ? note(pitchName(src)) : isNamed(src) ? note(src.name) : NoNote;
    cache.set(stringSrc, value);
    return value;
  }
  var REGEX = /^([a-gA-G]?)(#{1,}|b{1,}|x{1,}|)(-?\d*)\s*(.*)$/;
  function tokenizeNote(str) {
    const m = REGEX.exec(str);
    return [m[1].toUpperCase(), m[2].replace(/x/g, "##"), m[3], m[4]];
  }
  function coordToNote(noteCoord) {
    return note(decode(noteCoord));
  }
  var mod2 = (n, m) => (n % m + m) % m;
  var SEMI = [0, 2, 4, 5, 7, 9, 11];
  function parse2(noteName) {
    const tokens = tokenizeNote(noteName);
    if (tokens[0] === "" || tokens[3] !== "") {
      return NoNote;
    }
    const letter = tokens[0];
    const acc = tokens[1];
    const octStr = tokens[2];
    const step = (letter.charCodeAt(0) + 3) % 7;
    const alt = accToAlt(acc);
    const oct = octStr.length ? +octStr : void 0;
    const coord = encode({ step, alt, oct });
    const name = letter + acc + octStr;
    const pc = letter + acc;
    const chroma3 = (SEMI[step] + alt + 120) % 12;
    const height = oct === void 0 ? mod2(SEMI[step] + alt, 12) - 12 * 99 : SEMI[step] + alt + 12 * (oct + 1);
    const midi = height >= 0 && height <= 127 ? height : null;
    const freq = oct === void 0 ? null : Math.pow(2, (height - 69) / 12) * 440;
    return {
      empty: false,
      acc,
      alt,
      chroma: chroma3,
      coord,
      freq,
      height,
      letter,
      midi,
      name,
      oct,
      pc,
      step
    };
  }
  function pitchName(props) {
    const { step, alt, oct } = props;
    const letter = stepToLetter(step);
    if (!letter) {
      return "";
    }
    const pc = letter + altToAcc(alt);
    return oct || oct === 0 ? pc + oct : pc;
  }
  var NoInterval = { empty: true, name: "", acc: "" };
  var INTERVAL_TONAL_REGEX = "([-+]?\\d+)(d{1,4}|m|M|P|A{1,4})";
  var INTERVAL_SHORTHAND_REGEX = "(AA|A|P|M|m|d|dd)([-+]?\\d+)";
  var REGEX2 = new RegExp(
    "^" + INTERVAL_TONAL_REGEX + "|" + INTERVAL_SHORTHAND_REGEX + "$"
  );
  function tokenizeInterval(str) {
    const m = REGEX2.exec(`${str}`);
    if (m === null) {
      return ["", ""];
    }
    return m[1] ? [m[1], m[2]] : [m[4], m[3]];
  }
  var cache2 = {};
  function interval(src) {
    return typeof src === "string" ? cache2[src] || (cache2[src] = parse22(src)) : isPitch(src) ? interval(pitchName2(src)) : isNamed(src) ? interval(src.name) : NoInterval;
  }
  var SIZES = [0, 2, 4, 5, 7, 9, 11];
  var TYPES = "PMMPPMM";
  function parse22(str) {
    const tokens = tokenizeInterval(str);
    if (tokens[0] === "") {
      return NoInterval;
    }
    const num = +tokens[0];
    const q2 = tokens[1];
    const step = (Math.abs(num) - 1) % 7;
    const t = TYPES[step];
    if (t === "M" && q2 === "P") {
      return NoInterval;
    }
    const type = t === "M" ? "majorable" : "perfectable";
    const name = "" + num + q2;
    const dir = num < 0 ? -1 : 1;
    const simple = num === 8 || num === -8 ? num : dir * (step + 1);
    const alt = qToAlt(type, q2);
    const oct = Math.floor((Math.abs(num) - 1) / 7);
    const semitones = dir * (SIZES[step] + alt + 12 * oct);
    const chroma3 = (dir * (SIZES[step] + alt) % 12 + 12) % 12;
    const coord = encode({ step, alt, oct, dir });
    return {
      empty: false,
      name,
      num,
      q: q2,
      step,
      alt,
      dir,
      type,
      simple,
      semitones,
      chroma: chroma3,
      coord,
      oct
    };
  }
  function coordToInterval(coord, forceDescending) {
    const [f2, o2 = 0] = coord;
    const isDescending = f2 * 7 + o2 * 12 < 0;
    const ivl = forceDescending || isDescending ? [-f2, -o2, -1] : [f2, o2, 1];
    return interval(decode(ivl));
  }
  function qToAlt(type, q2) {
    return q2 === "M" && type === "majorable" || q2 === "P" && type === "perfectable" ? 0 : q2 === "m" && type === "majorable" ? -1 : /^A+$/.test(q2) ? q2.length : /^d+$/.test(q2) ? -1 * (type === "perfectable" ? q2.length : q2.length + 1) : 0;
  }
  function pitchName2(props) {
    const { step, alt, oct = 0, dir } = props;
    if (!dir) {
      return "";
    }
    const calcNum = step + 1 + 7 * oct;
    const num = calcNum === 0 ? step + 1 : calcNum;
    const d = dir < 0 ? "-" : "";
    const type = TYPES[step] === "M" ? "majorable" : "perfectable";
    const name = d + num + altToQ(type, alt);
    return name;
  }
  function altToQ(type, alt) {
    if (alt === 0) {
      return type === "majorable" ? "M" : "P";
    } else if (alt === -1 && type === "majorable") {
      return "m";
    } else if (alt > 0) {
      return fillStr("A", alt);
    } else {
      return fillStr("d", type === "perfectable" ? alt : alt + 1);
    }
  }
  function transpose(noteName, intervalName) {
    const note2 = note(noteName);
    const intervalCoord = Array.isArray(intervalName) ? intervalName : interval(intervalName).coord;
    if (note2.empty || !intervalCoord || intervalCoord.length < 2) {
      return "";
    }
    const noteCoord = note2.coord;
    const tr = noteCoord.length === 1 ? [noteCoord[0] + intervalCoord[0]] : [noteCoord[0] + intervalCoord[0], noteCoord[1] + intervalCoord[1]];
    return coordToNote(tr).name;
  }
  function distance(fromNote, toNote) {
    const from2 = note(fromNote);
    const to = note(toNote);
    if (from2.empty || to.empty) {
      return "";
    }
    const fcoord = from2.coord;
    const tcoord = to.coord;
    const fifths = tcoord[0] - fcoord[0];
    const octs = fcoord.length === 2 && tcoord.length === 2 ? tcoord[1] - fcoord[1] : -Math.floor(fifths * 7 / 12);
    const forceDescending = to.height === from2.height && to.midi !== null && from2.midi !== null && from2.step > to.step;
    return coordToInterval([fifths, octs], forceDescending).name;
  }

  // node_modules/@tonaljs/array/dist/index.mjs
  var isArray = Array.isArray;

  // node_modules/@tonaljs/collection/dist/index.mjs
  function rotate(times, arr) {
    const len = arr.length;
    const n = (times % len + len) % len;
    return arr.slice(n, len).concat(arr.slice(0, n));
  }

  // node_modules/@tonaljs/pcset/dist/index.mjs
  var EmptyPcset = {
    empty: true,
    name: "",
    setNum: 0,
    chroma: "000000000000",
    normalized: "000000000000",
    intervals: []
  };
  var setNumToChroma = (num2) => Number(num2).toString(2);
  var chromaToNumber = (chroma22) => parseInt(chroma22, 2);
  var REGEX3 = /^[01]{12}$/;
  function isChroma(set) {
    return REGEX3.test(set);
  }
  var isPcsetNum = (set) => typeof set === "number" && set >= 0 && set <= 4095;
  var isPcset = (set) => set && isChroma(set.chroma);
  var cache3 = { [EmptyPcset.chroma]: EmptyPcset };
  function get(src) {
    const chroma22 = isChroma(src) ? src : isPcsetNum(src) ? setNumToChroma(src) : Array.isArray(src) ? listToChroma(src) : isPcset(src) ? src.chroma : EmptyPcset.chroma;
    return cache3[chroma22] = cache3[chroma22] || chromaToPcset(chroma22);
  }
  var pcset = deprecate("Pcset.pcset", "Pcset.get", get);
  var IVLS = [
    "1P",
    "2m",
    "2M",
    "3m",
    "3M",
    "4P",
    "5d",
    "5P",
    "6m",
    "6M",
    "7m",
    "7M"
  ];
  function chromaToIntervals(chroma22) {
    const intervals2 = [];
    for (let i2 = 0; i2 < 12; i2++) {
      if (chroma22.charAt(i2) === "1")
        intervals2.push(IVLS[i2]);
    }
    return intervals2;
  }
  function chromaRotations(chroma22) {
    const binary = chroma22.split("");
    return binary.map((_2, i2) => rotate(i2, binary).join(""));
  }
  function chromaToPcset(chroma22) {
    const setNum = chromaToNumber(chroma22);
    const normalizedNum = chromaRotations(chroma22).map(chromaToNumber).filter((n) => n >= 2048).sort()[0];
    const normalized = setNumToChroma(normalizedNum);
    const intervals2 = chromaToIntervals(chroma22);
    return {
      empty: false,
      name: "",
      setNum,
      chroma: chroma22,
      normalized,
      intervals: intervals2
    };
  }
  function listToChroma(set) {
    if (set.length === 0) {
      return EmptyPcset.chroma;
    }
    let pitch;
    const binary = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i2 = 0; i2 < set.length; i2++) {
      pitch = note(set[i2]);
      if (pitch.empty)
        pitch = interval(set[i2]);
      if (!pitch.empty)
        binary[pitch.chroma] = 1;
    }
    return binary.join("");
  }

  // node_modules/@tonaljs/chord-type/dist/index.mjs
  var CHORDS = [
    // ==Major==
    ["1P 3M 5P", "major", "M ^  maj"],
    ["1P 3M 5P 7M", "major seventh", "maj7 \u0394 ma7 M7 Maj7 ^7"],
    ["1P 3M 5P 7M 9M", "major ninth", "maj9 \u03949 ^9"],
    ["1P 3M 5P 7M 9M 13M", "major thirteenth", "maj13 Maj13 ^13"],
    ["1P 3M 5P 6M", "sixth", "6 add6 add13 M6"],
    ["1P 3M 5P 6M 9M", "sixth added ninth", "6add9 6/9 69 M69"],
    ["1P 3M 6m 7M", "major seventh flat sixth", "M7b6 ^7b6"],
    [
      "1P 3M 5P 7M 11A",
      "major seventh sharp eleventh",
      "maj#4 \u0394#4 \u0394#11 M7#11 ^7#11 maj7#11"
    ],
    // ==Minor==
    // '''Normal'''
    ["1P 3m 5P", "minor", "m min -"],
    ["1P 3m 5P 7m", "minor seventh", "m7 min7 mi7 -7"],
    [
      "1P 3m 5P 7M",
      "minor/major seventh",
      "m/ma7 m/maj7 mM7 mMaj7 m/M7 -\u03947 m\u0394 -^7"
    ],
    ["1P 3m 5P 6M", "minor sixth", "m6 -6"],
    ["1P 3m 5P 7m 9M", "minor ninth", "m9 -9"],
    ["1P 3m 5P 7M 9M", "minor/major ninth", "mM9 mMaj9 -^9"],
    ["1P 3m 5P 7m 9M 11P", "minor eleventh", "m11 -11"],
    ["1P 3m 5P 7m 9M 13M", "minor thirteenth", "m13 -13"],
    // '''Diminished'''
    ["1P 3m 5d", "diminished", "dim \xB0 o"],
    ["1P 3m 5d 7d", "diminished seventh", "dim7 \xB07 o7"],
    ["1P 3m 5d 7m", "half-diminished", "m7b5 \xF8 -7b5 h7 h"],
    // ==Dominant/Seventh==
    // '''Normal'''
    ["1P 3M 5P 7m", "dominant seventh", "7 dom"],
    ["1P 3M 5P 7m 9M", "dominant ninth", "9"],
    ["1P 3M 5P 7m 9M 13M", "dominant thirteenth", "13"],
    ["1P 3M 5P 7m 11A", "lydian dominant seventh", "7#11 7#4"],
    // '''Altered'''
    ["1P 3M 5P 7m 9m", "dominant flat ninth", "7b9"],
    ["1P 3M 5P 7m 9A", "dominant sharp ninth", "7#9"],
    ["1P 3M 7m 9m", "altered", "alt7"],
    // '''Suspended'''
    ["1P 4P 5P", "suspended fourth", "sus4 sus"],
    ["1P 2M 5P", "suspended second", "sus2"],
    ["1P 4P 5P 7m", "suspended fourth seventh", "7sus4 7sus"],
    ["1P 5P 7m 9M 11P", "eleventh", "11"],
    [
      "1P 4P 5P 7m 9m",
      "suspended fourth flat ninth",
      "b9sus phryg 7b9sus 7b9sus4"
    ],
    // ==Other==
    ["1P 5P", "fifth", "5"],
    ["1P 3M 5A", "augmented", "aug + +5 ^#5"],
    ["1P 3m 5A", "minor augmented", "m#5 -#5 m+"],
    ["1P 3M 5A 7M", "augmented seventh", "maj7#5 maj7+5 +maj7 ^7#5"],
    [
      "1P 3M 5P 7M 9M 11A",
      "major sharp eleventh (lydian)",
      "maj9#11 \u03949#11 ^9#11"
    ],
    // ==Legacy==
    ["1P 2M 4P 5P", "", "sus24 sus4add9"],
    ["1P 3M 5A 7M 9M", "", "maj9#5 Maj9#5"],
    ["1P 3M 5A 7m", "", "7#5 +7 7+ 7aug aug7"],
    ["1P 3M 5A 7m 9A", "", "7#5#9 7#9#5 7alt"],
    ["1P 3M 5A 7m 9M", "", "9#5 9+"],
    ["1P 3M 5A 7m 9M 11A", "", "9#5#11"],
    ["1P 3M 5A 7m 9m", "", "7#5b9 7b9#5"],
    ["1P 3M 5A 7m 9m 11A", "", "7#5b9#11"],
    ["1P 3M 5A 9A", "", "+add#9"],
    ["1P 3M 5A 9M", "", "M#5add9 +add9"],
    ["1P 3M 5P 6M 11A", "", "M6#11 M6b5 6#11 6b5"],
    ["1P 3M 5P 6M 7M 9M", "", "M7add13"],
    ["1P 3M 5P 6M 9M 11A", "", "69#11"],
    ["1P 3m 5P 6M 9M", "", "m69 -69"],
    ["1P 3M 5P 6m 7m", "", "7b6"],
    ["1P 3M 5P 7M 9A 11A", "", "maj7#9#11"],
    ["1P 3M 5P 7M 9M 11A 13M", "", "M13#11 maj13#11 M13+4 M13#4"],
    ["1P 3M 5P 7M 9m", "", "M7b9"],
    ["1P 3M 5P 7m 11A 13m", "", "7#11b13 7b5b13"],
    ["1P 3M 5P 7m 13M", "", "7add6 67 7add13"],
    ["1P 3M 5P 7m 9A 11A", "", "7#9#11 7b5#9 7#9b5"],
    ["1P 3M 5P 7m 9A 11A 13M", "", "13#9#11"],
    ["1P 3M 5P 7m 9A 11A 13m", "", "7#9#11b13"],
    ["1P 3M 5P 7m 9A 13M", "", "13#9"],
    ["1P 3M 5P 7m 9A 13m", "", "7#9b13"],
    ["1P 3M 5P 7m 9M 11A", "", "9#11 9+4 9#4"],
    ["1P 3M 5P 7m 9M 11A 13M", "", "13#11 13+4 13#4"],
    ["1P 3M 5P 7m 9M 11A 13m", "", "9#11b13 9b5b13"],
    ["1P 3M 5P 7m 9m 11A", "", "7b9#11 7b5b9 7b9b5"],
    ["1P 3M 5P 7m 9m 11A 13M", "", "13b9#11"],
    ["1P 3M 5P 7m 9m 11A 13m", "", "7b9b13#11 7b9#11b13 7b5b9b13"],
    ["1P 3M 5P 7m 9m 13M", "", "13b9"],
    ["1P 3M 5P 7m 9m 13m", "", "7b9b13"],
    ["1P 3M 5P 7m 9m 9A", "", "7b9#9"],
    ["1P 3M 5P 9M", "", "Madd9 2 add9 add2"],
    ["1P 3M 5P 9m", "", "Maddb9"],
    ["1P 3M 5d", "", "Mb5"],
    ["1P 3M 5d 6M 7m 9M", "", "13b5"],
    ["1P 3M 5d 7M", "", "M7b5"],
    ["1P 3M 5d 7M 9M", "", "M9b5"],
    ["1P 3M 5d 7m", "", "7b5"],
    ["1P 3M 5d 7m 9M", "", "9b5"],
    ["1P 3M 7m", "", "7no5"],
    ["1P 3M 7m 13m", "", "7b13"],
    ["1P 3M 7m 9M", "", "9no5"],
    ["1P 3M 7m 9M 13M", "", "13no5"],
    ["1P 3M 7m 9M 13m", "", "9b13"],
    ["1P 3m 4P 5P", "", "madd4"],
    ["1P 3m 5P 6m 7M", "", "mMaj7b6"],
    ["1P 3m 5P 6m 7M 9M", "", "mMaj9b6"],
    ["1P 3m 5P 7m 11P", "", "m7add11 m7add4"],
    ["1P 3m 5P 9M", "", "madd9"],
    ["1P 3m 5d 6M 7M", "", "o7M7"],
    ["1P 3m 5d 7M", "", "oM7"],
    ["1P 3m 6m 7M", "", "mb6M7"],
    ["1P 3m 6m 7m", "", "m7#5"],
    ["1P 3m 6m 7m 9M", "", "m9#5"],
    ["1P 3m 5A 7m 9M 11P", "", "m11A"],
    ["1P 3m 6m 9m", "", "mb6b9"],
    ["1P 2M 3m 5d 7m", "", "m9b5"],
    ["1P 4P 5A 7M", "", "M7#5sus4"],
    ["1P 4P 5A 7M 9M", "", "M9#5sus4"],
    ["1P 4P 5A 7m", "", "7#5sus4"],
    ["1P 4P 5P 7M", "", "M7sus4"],
    ["1P 4P 5P 7M 9M", "", "M9sus4"],
    ["1P 4P 5P 7m 9M", "", "9sus4 9sus"],
    ["1P 4P 5P 7m 9M 13M", "", "13sus4 13sus"],
    ["1P 4P 5P 7m 9m 13m", "", "7sus4b9b13 7b9b13sus4"],
    ["1P 4P 7m 10m", "", "4 quartal"],
    ["1P 5P 7m 9m 11P", "", "11b9"]
  ];
  var data_default = CHORDS;
  var NoChordType = {
    ...EmptyPcset,
    name: "",
    quality: "Unknown",
    intervals: [],
    aliases: []
  };
  var dictionary = [];
  var index = {};
  function get2(type) {
    return index[type] || NoChordType;
  }
  var chordType = deprecate("ChordType.chordType", "ChordType.get", get2);
  function all() {
    return dictionary.slice();
  }
  var entries = deprecate("ChordType.entries", "ChordType.all", all);
  function add(intervals, aliases, fullName) {
    const quality = getQuality(intervals);
    const chord2 = {
      ...get(intervals),
      name: fullName || "",
      quality,
      intervals,
      aliases
    };
    dictionary.push(chord2);
    if (chord2.name) {
      index[chord2.name] = chord2;
    }
    index[chord2.setNum] = chord2;
    index[chord2.chroma] = chord2;
    chord2.aliases.forEach((alias) => addAlias(chord2, alias));
  }
  function addAlias(chord2, alias) {
    index[alias] = chord2;
  }
  function getQuality(intervals) {
    const has = (interval2) => intervals.indexOf(interval2) !== -1;
    return has("5A") ? "Augmented" : has("3M") ? "Major" : has("5d") ? "Diminished" : has("3m") ? "Minor" : "Unknown";
  }
  data_default.forEach(
    ([ivls, fullName, names2]) => add(ivls.split(" "), names2.split(" "), fullName)
  );
  dictionary.sort((a2, b) => a2.setNum - b.setNum);

  // node_modules/@tonaljs/chord-detect/dist/index.mjs
  var BITMASK = {
    // 3m 000100000000
    // 3M 000010000000
    anyThirds: 384,
    // 5P 000000010000
    perfectFifth: 16,
    // 5d 000000100000
    // 5A 000000001000
    nonPerfectFifths: 40,
    anySeventh: 3
  };
  var testChromaNumber = (bitmask) => (chromaNumber) => Boolean(chromaNumber & bitmask);
  var hasAnyThird = testChromaNumber(BITMASK.anyThirds);
  var hasPerfectFifth = testChromaNumber(BITMASK.perfectFifth);
  var hasAnySeventh = testChromaNumber(BITMASK.anySeventh);
  var hasNonPerfectFifth = testChromaNumber(BITMASK.nonPerfectFifths);

  // node_modules/@tonaljs/scale-type/dist/index.mjs
  var SCALES = [
    ["1P 2M 3M 5P 6M", "major pentatonic", "pentatonic"],
    ["1P 2M 3M 4P 5P 6M 7M", "major", "ionian"],
    ["1P 2M 3m 4P 5P 6m 7m", "minor", "aeolian"],
    ["1P 2M 3m 3M 5P 6M", "major blues"],
    ["1P 3m 4P 5d 5P 7m", "minor blues", "blues"],
    ["1P 2M 3m 4P 5P 6M 7M", "melodic minor"],
    ["1P 2M 3m 4P 5P 6m 7M", "harmonic minor"],
    ["1P 2M 3M 4P 5P 6M 7m 7M", "bebop"],
    ["1P 2M 3m 4P 5d 6m 6M 7M", "diminished", "whole-half diminished"],
    ["1P 2M 3m 4P 5P 6M 7m", "dorian"],
    ["1P 2M 3M 4A 5P 6M 7M", "lydian"],
    ["1P 2M 3M 4P 5P 6M 7m", "mixolydian", "dominant"],
    ["1P 2m 3m 4P 5P 6m 7m", "phrygian"],
    ["1P 2m 3m 4P 5d 6m 7m", "locrian"],
    ["1P 3M 4P 5P 7M", "ionian pentatonic"],
    ["1P 3M 4P 5P 7m", "mixolydian pentatonic", "indian"],
    ["1P 2M 4P 5P 6M", "ritusen"],
    ["1P 2M 4P 5P 7m", "egyptian"],
    ["1P 3M 4P 5d 7m", "neopolitan major pentatonic"],
    ["1P 3m 4P 5P 6m", "vietnamese 1"],
    ["1P 2m 3m 5P 6m", "pelog"],
    ["1P 2m 4P 5P 6m", "kumoijoshi"],
    ["1P 2M 3m 5P 6m", "hirajoshi"],
    ["1P 2m 4P 5d 7m", "iwato"],
    ["1P 2m 4P 5P 7m", "in-sen"],
    ["1P 3M 4A 5P 7M", "lydian pentatonic", "chinese"],
    ["1P 3m 4P 6m 7m", "malkos raga"],
    ["1P 3m 4P 5d 7m", "locrian pentatonic", "minor seven flat five pentatonic"],
    ["1P 3m 4P 5P 7m", "minor pentatonic", "vietnamese 2"],
    ["1P 3m 4P 5P 6M", "minor six pentatonic"],
    ["1P 2M 3m 5P 6M", "flat three pentatonic", "kumoi"],
    ["1P 2M 3M 5P 6m", "flat six pentatonic"],
    ["1P 2m 3M 5P 6M", "scriabin"],
    ["1P 3M 5d 6m 7m", "whole tone pentatonic"],
    ["1P 3M 4A 5A 7M", "lydian #5P pentatonic"],
    ["1P 3M 4A 5P 7m", "lydian dominant pentatonic"],
    ["1P 3m 4P 5P 7M", "minor #7M pentatonic"],
    ["1P 3m 4d 5d 7m", "super locrian pentatonic"],
    ["1P 2M 3m 4P 5P 7M", "minor hexatonic"],
    ["1P 2A 3M 5P 5A 7M", "augmented"],
    ["1P 2M 4P 5P 6M 7m", "piongio"],
    ["1P 2m 3M 4A 6M 7m", "prometheus neopolitan"],
    ["1P 2M 3M 4A 6M 7m", "prometheus"],
    ["1P 2m 3M 5d 6m 7m", "mystery #1"],
    ["1P 2m 3M 4P 5A 6M", "six tone symmetric"],
    ["1P 2M 3M 4A 5A 6A", "whole tone", "messiaen's mode #1"],
    ["1P 2m 4P 4A 5P 7M", "messiaen's mode #5"],
    ["1P 2M 3M 4P 5d 6m 7m", "locrian major", "arabian"],
    ["1P 2m 3M 4A 5P 6m 7M", "double harmonic lydian"],
    [
      "1P 2m 2A 3M 4A 6m 7m",
      "altered",
      "super locrian",
      "diminished whole tone",
      "pomeroy"
    ],
    ["1P 2M 3m 4P 5d 6m 7m", "locrian #2", "half-diminished", "aeolian b5"],
    [
      "1P 2M 3M 4P 5P 6m 7m",
      "mixolydian b6",
      "melodic minor fifth mode",
      "hindu"
    ],
    ["1P 2M 3M 4A 5P 6M 7m", "lydian dominant", "lydian b7", "overtone"],
    ["1P 2M 3M 4A 5A 6M 7M", "lydian augmented"],
    [
      "1P 2m 3m 4P 5P 6M 7m",
      "dorian b2",
      "phrygian #6",
      "melodic minor second mode"
    ],
    [
      "1P 2m 3m 4d 5d 6m 7d",
      "ultralocrian",
      "superlocrian bb7",
      "superlocrian diminished"
    ],
    ["1P 2m 3m 4P 5d 6M 7m", "locrian 6", "locrian natural 6", "locrian sharp 6"],
    ["1P 2A 3M 4P 5P 5A 7M", "augmented heptatonic"],
    [
      "1P 2M 3m 4A 5P 6M 7m",
      "dorian #4",
      "ukrainian dorian",
      "romanian minor",
      "altered dorian"
    ],
    ["1P 2M 3m 4A 5P 6M 7M", "lydian diminished"],
    ["1P 2M 3M 4A 5A 7m 7M", "leading whole tone"],
    ["1P 2M 3M 4A 5P 6m 7m", "lydian minor"],
    ["1P 2m 3M 4P 5P 6m 7m", "phrygian dominant", "spanish", "phrygian major"],
    ["1P 2m 3m 4P 5P 6m 7M", "balinese"],
    ["1P 2m 3m 4P 5P 6M 7M", "neopolitan major"],
    ["1P 2M 3M 4P 5P 6m 7M", "harmonic major"],
    ["1P 2m 3M 4P 5P 6m 7M", "double harmonic major", "gypsy"],
    ["1P 2M 3m 4A 5P 6m 7M", "hungarian minor"],
    ["1P 2A 3M 4A 5P 6M 7m", "hungarian major"],
    ["1P 2m 3M 4P 5d 6M 7m", "oriental"],
    ["1P 2m 3m 3M 4A 5P 7m", "flamenco"],
    ["1P 2m 3m 4A 5P 6m 7M", "todi raga"],
    ["1P 2m 3M 4P 5d 6m 7M", "persian"],
    ["1P 2m 3M 5d 6m 7m 7M", "enigmatic"],
    [
      "1P 2M 3M 4P 5A 6M 7M",
      "major augmented",
      "major #5",
      "ionian augmented",
      "ionian #5"
    ],
    ["1P 2A 3M 4A 5P 6M 7M", "lydian #9"],
    ["1P 2m 2M 4P 4A 5P 6m 7M", "messiaen's mode #4"],
    ["1P 2m 3M 4P 4A 5P 6m 7M", "purvi raga"],
    ["1P 2m 3m 3M 4P 5P 6m 7m", "spanish heptatonic"],
    ["1P 2M 3m 3M 4P 5P 6M 7m", "bebop minor"],
    ["1P 2M 3M 4P 5P 5A 6M 7M", "bebop major"],
    ["1P 2m 3m 4P 5d 5P 6m 7m", "bebop locrian"],
    ["1P 2M 3m 4P 5P 6m 7m 7M", "minor bebop"],
    ["1P 2M 3M 4P 5d 5P 6M 7M", "ichikosucho"],
    ["1P 2M 3m 4P 5P 6m 6M 7M", "minor six diminished"],
    [
      "1P 2m 3m 3M 4A 5P 6M 7m",
      "half-whole diminished",
      "dominant diminished",
      "messiaen's mode #2"
    ],
    ["1P 3m 3M 4P 5P 6M 7m 7M", "kafi raga"],
    ["1P 2M 3M 4P 4A 5A 6A 7M", "messiaen's mode #6"],
    ["1P 2M 3m 3M 4P 5d 5P 6M 7m", "composite blues"],
    ["1P 2M 3m 3M 4A 5P 6m 7m 7M", "messiaen's mode #3"],
    ["1P 2m 2M 3m 4P 4A 5P 6m 6M 7M", "messiaen's mode #7"],
    ["1P 2m 2M 3m 3M 4P 5d 5P 6m 6M 7m 7M", "chromatic"]
  ];
  var data_default2 = SCALES;
  var NoScaleType = {
    ...EmptyPcset,
    intervals: [],
    aliases: []
  };
  var dictionary2 = [];
  var index2 = {};
  function get3(type) {
    return index2[type] || NoScaleType;
  }
  var scaleType = deprecate(
    "ScaleDictionary.scaleType",
    "ScaleType.get",
    get3
  );
  function all2() {
    return dictionary2.slice();
  }
  var entries2 = deprecate(
    "ScaleDictionary.entries",
    "ScaleType.all",
    all2
  );
  function add2(intervals, name, aliases = []) {
    const scale2 = { ...get(intervals), name, intervals, aliases };
    dictionary2.push(scale2);
    index2[scale2.name] = scale2;
    index2[scale2.setNum] = scale2;
    index2[scale2.chroma] = scale2;
    scale2.aliases.forEach((alias) => addAlias2(scale2, alias));
    return scale2;
  }
  function addAlias2(scale2, alias) {
    index2[alias] = scale2;
  }
  data_default2.forEach(
    ([ivls, name, ...aliases]) => add2(ivls.split(" "), name, aliases)
  );

  // node_modules/@tonaljs/chord/dist/index.mjs
  var NoChord = {
    empty: true,
    name: "",
    symbol: "",
    root: "",
    rootDegree: 0,
    type: "",
    tonic: null,
    setNum: NaN,
    quality: "Unknown",
    chroma: "",
    normalized: "",
    aliases: [],
    notes: [],
    intervals: []
  };
  function tokenize2(name) {
    const [letter, acc, oct, type] = tokenizeNote(name);
    if (letter === "") {
      return ["", name];
    }
    if (letter === "A" && type === "ug") {
      return ["", "aug"];
    }
    return [letter + acc, oct + type];
  }
  function get4(src) {
    if (src === "") {
      return NoChord;
    }
    if (Array.isArray(src) && src.length === 2) {
      return getChord(src[1], src[0]);
    } else {
      const [tonic, type] = tokenize2(src);
      const chord2 = getChord(type, tonic);
      return chord2.empty ? getChord(src) : chord2;
    }
  }
  function getChord(typeName, optionalTonic, optionalRoot) {
    const type = get2(typeName);
    const tonic = note(optionalTonic || "");
    const root = note(optionalRoot || "");
    if (type.empty || optionalTonic && tonic.empty || optionalRoot && root.empty) {
      return NoChord;
    }
    const rootInterval = distance(tonic.pc, root.pc);
    const rootDegree = type.intervals.indexOf(rootInterval) + 1;
    if (!root.empty && !rootDegree) {
      return NoChord;
    }
    const intervals = Array.from(type.intervals);
    for (let i2 = 1; i2 < rootDegree; i2++) {
      const num = intervals[0][0];
      const quality = intervals[0][1];
      const newNum = parseInt(num, 10) + 7;
      intervals.push(`${newNum}${quality}`);
      intervals.shift();
    }
    const notes = tonic.empty ? [] : intervals.map((i2) => transpose(tonic, i2));
    typeName = type.aliases.indexOf(typeName) !== -1 ? typeName : type.aliases[0];
    const symbol = `${tonic.empty ? "" : tonic.pc}${typeName}${root.empty || rootDegree <= 1 ? "" : "/" + root.pc}`;
    const name = `${optionalTonic ? tonic.pc + " " : ""}${type.name}${rootDegree > 1 && optionalRoot ? " over " + root.pc : ""}`;
    return {
      ...type,
      name,
      symbol,
      type: type.name,
      root: root.name,
      intervals,
      rootDegree,
      tonic: tonic.name,
      notes
    };
  }
  var chord = deprecate("Chord.chord", "Chord.get", get4);

  // node_modules/@tonaljs/duration-value/dist/index.mjs
  var DATA = [
    [
      0.125,
      "dl",
      ["large", "duplex longa", "maxima", "octuple", "octuple whole"]
    ],
    [0.25, "l", ["long", "longa"]],
    [0.5, "d", ["double whole", "double", "breve"]],
    [1, "w", ["whole", "semibreve"]],
    [2, "h", ["half", "minim"]],
    [4, "q", ["quarter", "crotchet"]],
    [8, "e", ["eighth", "quaver"]],
    [16, "s", ["sixteenth", "semiquaver"]],
    [32, "t", ["thirty-second", "demisemiquaver"]],
    [64, "sf", ["sixty-fourth", "hemidemisemiquaver"]],
    [128, "h", ["hundred twenty-eighth"]],
    [256, "th", ["two hundred fifty-sixth"]]
  ];
  var data_default3 = DATA;
  var VALUES = [];
  data_default3.forEach(
    ([denominator, shorthand, names2]) => add3(denominator, shorthand, names2)
  );
  function add3(denominator, shorthand, names2) {
    VALUES.push({
      empty: false,
      dots: "",
      name: "",
      value: 1 / denominator,
      fraction: denominator < 1 ? [1 / denominator, 1] : [1, denominator],
      shorthand,
      names: names2
    });
  }

  // node_modules/@tonaljs/interval/dist/index.mjs
  var IQ = "P m M m M P d P m M m M".split(" ");
  var add4 = combinator((a2, b) => [a2[0] + b[0], a2[1] + b[1]]);
  var substract = combinator((a2, b) => [a2[0] - b[0], a2[1] - b[1]]);
  function combinator(fn) {
    return (a2, b) => {
      const coordA = interval(a2).coord;
      const coordB = interval(b).coord;
      if (coordA && coordB) {
        const coord = fn(coordA, coordB);
        return coordToInterval(coord).name;
      }
    };
  }

  // node_modules/@tonaljs/midi/dist/index.mjs
  function isMidi(arg) {
    return +arg >= 0 && +arg <= 127;
  }
  function toMidi(note2) {
    if (isMidi(note2)) {
      return +note2;
    }
    const n = note(note2);
    return n.empty ? null : n.midi;
  }
  function midiToFreq(midi, tuning = 440) {
    return Math.pow(2, (midi - 69) / 12) * tuning;
  }
  var L2 = Math.log(2);
  var L440 = Math.log(440);
  function freqToMidi(freq) {
    const v2 = 12 * (Math.log(freq) - L440) / L2 + 69;
    return Math.round(v2 * 100) / 100;
  }
  var SHARPS = "C C# D D# E F F# G G# A A# B".split(" ");
  var FLATS = "C Db D Eb E F Gb G Ab A Bb B".split(" ");
  function midiToNoteName(midi, options = {}) {
    if (isNaN(midi) || midi === -Infinity || midi === Infinity)
      return "";
    midi = Math.round(midi);
    const pcs = options.sharps === true ? SHARPS : FLATS;
    const pc = pcs[midi % 12];
    if (options.pitchClass) {
      return pc;
    }
    const o2 = Math.floor(midi / 12) - 1;
    return pc + o2;
  }
  function chroma(midi) {
    return midi % 12;
  }
  function pcsetFromChroma(chroma22) {
    return chroma22.split("").reduce((pcset22, val, index4) => {
      if (index4 < 12 && val === "1")
        pcset22.push(index4);
      return pcset22;
    }, []);
  }
  function pcsetFromMidi(midi) {
    return midi.map(chroma).sort((a2, b) => a2 - b).filter((n, i2, a2) => i2 === 0 || n !== a2[i2 - 1]);
  }
  function pcset2(notes) {
    return Array.isArray(notes) ? pcsetFromMidi(notes) : pcsetFromChroma(notes);
  }
  function pcsetNearest(notes) {
    const set = pcset2(notes);
    return (midi) => {
      const ch = chroma(midi);
      for (let i2 = 0; i2 < 12; i2++) {
        if (set.includes(ch + i2))
          return midi + i2;
        if (set.includes(ch - i2))
          return midi - i2;
      }
      return void 0;
    };
  }
  function pcsetSteps(notes, tonic) {
    const set = pcset2(notes);
    const len = set.length;
    return (step) => {
      const index4 = step < 0 ? (len - -step % len) % len : step % len;
      const octaves = Math.floor(step / len);
      return set[index4] + octaves * 12 + tonic;
    };
  }
  function pcsetDegrees(notes, tonic) {
    const steps = pcsetSteps(notes, tonic);
    return (degree) => {
      if (degree === 0)
        return void 0;
      return steps(degree > 0 ? degree - 1 : degree);
    };
  }
  var midi_default = {
    chroma,
    freqToMidi,
    isMidi,
    midiToFreq,
    midiToNoteName,
    pcsetNearest,
    pcset: pcset2,
    pcsetDegrees,
    pcsetSteps,
    toMidi
  };

  // node_modules/@tonaljs/roman-numeral/dist/index.mjs
  var NoRomanNumeral = { empty: true, name: "", chordType: "" };
  var cache4 = {};
  function get5(src) {
    return typeof src === "string" ? cache4[src] || (cache4[src] = parse3(src)) : typeof src === "number" ? get5(NAMES[src] || "") : isPitch(src) ? fromPitch(src) : isNamed(src) ? get5(src.name) : NoRomanNumeral;
  }
  var romanNumeral = deprecate(
    "RomanNumeral.romanNumeral",
    "RomanNumeral.get",
    get5
  );
  function fromPitch(pitch) {
    return get5(altToAcc(pitch.alt) + NAMES[pitch.step]);
  }
  var REGEX4 = /^(#{1,}|b{1,}|x{1,}|)(IV|I{1,3}|VI{0,2}|iv|i{1,3}|vi{0,2})([^IViv]*)$/;
  function tokenize3(str) {
    return REGEX4.exec(str) || ["", "", "", ""];
  }
  var ROMANS = "I II III IV V VI VII";
  var NAMES = ROMANS.split(" ");
  var NAMES_MINOR = ROMANS.toLowerCase().split(" ");
  function parse3(src) {
    const [name, acc, roman, chordType2] = tokenize3(src);
    if (!roman) {
      return NoRomanNumeral;
    }
    const upperRoman = roman.toUpperCase();
    const step = NAMES.indexOf(upperRoman);
    const alt = accToAlt(acc);
    const dir = 1;
    return {
      empty: false,
      name,
      roman,
      interval: interval({ step, alt, dir }).name,
      acc,
      chordType: chordType2,
      alt,
      step,
      major: roman === upperRoman,
      oct: 0,
      dir
    };
  }

  // node_modules/@tonaljs/key/dist/index.mjs
  var Empty = Object.freeze([]);
  var NoKey = {
    type: "major",
    tonic: "",
    alteration: 0,
    keySignature: ""
  };
  var NoKeyScale = {
    tonic: "",
    grades: Empty,
    intervals: Empty,
    scale: Empty,
    triads: Empty,
    chords: Empty,
    chordsHarmonicFunction: Empty,
    chordScales: Empty
  };
  var NoMajorKey = {
    ...NoKey,
    ...NoKeyScale,
    type: "major",
    minorRelative: "",
    scale: Empty,
    secondaryDominants: Empty,
    secondaryDominantsMinorRelative: Empty,
    substituteDominants: Empty,
    substituteDominantsMinorRelative: Empty
  };
  var NoMinorKey = {
    ...NoKey,
    type: "minor",
    relativeMajor: "",
    natural: NoKeyScale,
    harmonic: NoKeyScale,
    melodic: NoKeyScale
  };
  var mapScaleToType = (scale2, list, sep = "") => list.map((type, i2) => `${scale2[i2]}${sep}${type}`);
  function keyScale(grades, triads2, chords2, harmonicFunctions, chordScales) {
    return (tonic) => {
      const intervals = grades.map((gr) => get5(gr).interval || "");
      const scale2 = intervals.map((interval2) => transpose(tonic, interval2));
      return {
        tonic,
        grades,
        intervals,
        scale: scale2,
        triads: mapScaleToType(scale2, triads2),
        chords: mapScaleToType(scale2, chords2),
        chordsHarmonicFunction: harmonicFunctions.slice(),
        chordScales: mapScaleToType(scale2, chordScales, " ")
      };
    };
  }
  var MajorScale = keyScale(
    "I II III IV V VI VII".split(" "),
    " m m   m dim".split(" "),
    "maj7 m7 m7 maj7 7 m7 m7b5".split(" "),
    "T SD T SD D T D".split(" "),
    "major,dorian,phrygian,lydian,mixolydian,minor,locrian".split(",")
  );
  var NaturalScale = keyScale(
    "I II bIII IV V bVI bVII".split(" "),
    "m dim  m m  ".split(" "),
    "m7 m7b5 maj7 m7 m7 maj7 7".split(" "),
    "T SD T SD D SD SD".split(" "),
    "minor,locrian,major,dorian,phrygian,lydian,mixolydian".split(",")
  );
  var HarmonicScale = keyScale(
    "I II bIII IV V bVI VII".split(" "),
    "m dim aug m   dim".split(" "),
    "mMaj7 m7b5 +maj7 m7 7 maj7 o7".split(" "),
    "T SD T SD D SD D".split(" "),
    "harmonic minor,locrian 6,major augmented,lydian diminished,phrygian dominant,lydian #9,ultralocrian".split(
      ","
    )
  );
  var MelodicScale = keyScale(
    "I II bIII IV V VI VII".split(" "),
    "m m aug   dim dim".split(" "),
    "m6 m7 +maj7 7 7 m7b5 m7b5".split(" "),
    "T SD T SD D  ".split(" "),
    "melodic minor,dorian b2,lydian augmented,lydian dominant,mixolydian b6,locrian #2,altered".split(
      ","
    )
  );

  // node_modules/@tonaljs/mode/dist/index.mjs
  var MODES = [
    [0, 2773, 0, "ionian", "", "Maj7", "major"],
    [1, 2902, 2, "dorian", "m", "m7"],
    [2, 3418, 4, "phrygian", "m", "m7"],
    [3, 2741, -1, "lydian", "", "Maj7"],
    [4, 2774, 1, "mixolydian", "", "7"],
    [5, 2906, 3, "aeolian", "m", "m7", "minor"],
    [6, 3434, 5, "locrian", "dim", "m7b5"]
  ];
  var NoMode = {
    ...EmptyPcset,
    name: "",
    alt: 0,
    modeNum: NaN,
    triad: "",
    seventh: "",
    aliases: []
  };
  var modes2 = MODES.map(toMode);
  var index3 = {};
  modes2.forEach((mode2) => {
    index3[mode2.name] = mode2;
    mode2.aliases.forEach((alias) => {
      index3[alias] = mode2;
    });
  });
  function get6(name) {
    return typeof name === "string" ? index3[name.toLowerCase()] || NoMode : name && name.name ? get6(name.name) : NoMode;
  }
  var mode = deprecate("Mode.mode", "Mode.get", get6);
  function all3() {
    return modes2.slice();
  }
  var entries3 = deprecate("Mode.mode", "Mode.all", all3);
  function toMode(mode2) {
    const [modeNum, setNum, alt, name, triad, seventh, alias] = mode2;
    const aliases = alias ? [alias] : [];
    const chroma3 = Number(setNum).toString(2);
    const intervals = get3(name).intervals;
    return {
      empty: false,
      intervals,
      modeNum,
      chroma: chroma3,
      normalized: chroma3,
      name,
      setNum,
      alt,
      triad,
      seventh,
      aliases
    };
  }
  function chords(chords2) {
    return (modeName, tonic) => {
      const mode2 = get6(modeName);
      if (mode2.empty)
        return [];
      const triads2 = rotate(mode2.modeNum, chords2);
      const tonics = mode2.intervals.map((i2) => transpose(tonic, i2));
      return triads2.map((triad, i2) => tonics[i2] + triad);
    };
  }
  var triads = chords(MODES.map((x2) => x2[4]));
  var seventhChords = chords(MODES.map((x2) => x2[5]));

  // node_modules/@tonaljs/scale/dist/index.mjs
  var NoScale = {
    empty: true,
    name: "",
    type: "",
    tonic: null,
    setNum: NaN,
    chroma: "",
    normalized: "",
    aliases: [],
    notes: [],
    intervals: []
  };
  function tokenize4(name) {
    if (typeof name !== "string") {
      return ["", ""];
    }
    const i2 = name.indexOf(" ");
    const tonic = note(name.substring(0, i2));
    if (tonic.empty) {
      const n = note(name);
      return n.empty ? ["", name] : [n.name, ""];
    }
    const type = name.substring(tonic.name.length + 1);
    return [tonic.name, type.length ? type : ""];
  }
  function get7(src) {
    const tokens = Array.isArray(src) ? src : tokenize4(src);
    const tonic = note(tokens[0]).name;
    const st2 = get3(tokens[1]);
    if (st2.empty) {
      return NoScale;
    }
    const type = st2.name;
    const notes = tonic ? st2.intervals.map((i2) => transpose(tonic, i2)) : [];
    const name = tonic ? tonic + " " + type : type;
    return { ...st2, name, type, tonic, notes };
  }
  var scale = deprecate("Scale.scale", "Scale.get", get7);

  // src/frontend/components/TrackSettingsMenu.jsx
  var { midiToNoteName: midiToNoteName2 } = midi_default;
  var S10 = {
    Wrapper: st.div`
    position: relative;
    background-color: lightgray;
    height: ${({ $isOpen }) => $isOpen ? `${TRACK_HEIGHT * 1.5}px` : "0px"};
    transition: height 50ms ease;
    overflow: hidden;
  `,
    InnerWrapper: st.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
  `,
    Item: st.div`
    display: inline-flex;
    flex-direction: column;
    background-color: lightgray;
    width: ${({ $width }) => `${(CELL_WIDTH + PADDING) * $width}px`};
    height: 100%;
    border-right: 3px dotted black;
    filter: ${({ $dim }) => $dim ? "opacity(0.25)" : "initial"};

    p {
      display: inline-block;
      padding: ${PADDING * 1.5}px ${PADDING}px;
      padding-bottom: ${PADDING}px;
      color: gray;
    }

    > div {
      position: relative;
      padding: ${PADDING}px ${PADDING}px;
    }

    select {
      padding: ${PADDING / 2}px 0;
      margin-top: ${PADDING / 2}px;
      margin-left: ${PADDING}px;
      margin-right: ${PADDING}px;
      background-color: lightgray;
      font-size: 1.5rem;
      user-select: none;
      outline: none;
      border: 0;

      &:focus {
        background-color: white;
      }

      &.under {
        position: absolute;
        top: 0px;
        left: 0;
        right: 0;
      }
    }
  `
  };
  var TrackSettingsMenu = () => {
    const { storage } = useStorageContext();
    const { muteTrack, unmuteTrack } = useStateContext();
    const {
      showTrackSettingsMenu,
      setShowTrackSettingsMenu,
      showTrackControlChangeMenu,
      trackSettingsMenuPage,
      setTrackSettingsMenuPage
    } = useMenuContext();
    const {
      id,
      device,
      deviceId,
      setDeviceId,
      instrumentNotes,
      rootNote,
      setRootNote,
      velocity,
      probability,
      currentProbability,
      steps,
      scale: scale2,
      trigs,
      notes,
      setNotes,
      trigsVelocity,
      trigsProbability,
      isFollowActive,
      isCurrentTrack,
      isMuted,
      pressedTrig,
      trigOp,
      setTrigOp
    } = useTrackContext();
    const [showInstrumentNoteSelect, setShowInstrumentNoteSelect] = (0, import_react19.useState)(false);
    const hasPressedTrig = (0, import_react19.useMemo)(
      () => Boolean(trigs[pressedTrig]),
      [pressedTrig, trigs]
    );
    const currentNote = (0, import_react19.useMemo)(
      () => pressedTrig !== void 0 && hasPressedTrig ? notes[pressedTrig] : rootNote,
      [pressedTrig, hasPressedTrig, notes, rootNote]
    );
    const rootNoteName = (0, import_react19.useMemo)(
      () => midiToNoteName2(currentNote, {
        pitchClass: true,
        sharps: true
      }),
      [currentNote]
    );
    const currentVelocity = (0, import_react19.useMemo)(
      () => pressedTrig !== void 0 && hasPressedTrig ? trigsVelocity[pressedTrig] : velocity,
      [pressedTrig, hasPressedTrig, trigsVelocity, velocity]
    );
    const currentPageItem = (0, import_react19.useMemo)(
      () => /* @__PURE__ */ import_react19.default.createElement(S10.Item, { $width: 2, $dim: hasPressedTrig }, /* @__PURE__ */ import_react19.default.createElement("p", null, "PAGE"), /* @__PURE__ */ import_react19.default.createElement("div", null, /* @__PURE__ */ import_react19.default.createElement(StyledText_default, { className: "lg", bold: true }, trackSettingsMenuPage + 1), "/", /* @__PURE__ */ import_react19.default.createElement(StyledText_default, { className: "md", bold: false }, Object.values(trackSettingsMenuPages).length))),
      [trackSettingsMenuPage, pressedTrig]
    );
    const currentTrackSettingsMenuPage = {
      [trackSettingsMenuPages.TRACK_SETTINGS]: /* @__PURE__ */ import_react19.default.createElement(import_react19.default.Fragment, null, /* @__PURE__ */ import_react19.default.createElement(
        S10.Item,
        {
          $width: 2,
          $hasHiddenSelect: true,
          $dim: hasPressedTrig && showTrackControlChangeMenu
        },
        /* @__PURE__ */ import_react19.default.createElement("p", null, "ROOT"),
        /* @__PURE__ */ import_react19.default.createElement("div", null, /* @__PURE__ */ import_react19.default.createElement(StyledText_default, { className: "lg", bold: true }, currentNote), /* @__PURE__ */ import_react19.default.createElement(
          StyledText_default,
          {
            className: "md",
            style: { marginLeft: `${PADDING}px`, color: "gray" },
            bold: false
          },
          rootNoteName
        ), device && /* @__PURE__ */ import_react19.default.createElement(
          "select",
          {
            className: "under",
            style: { opacity: showInstrumentNoteSelect ? "1" : "0" },
            onClick: () => setShowInstrumentNoteSelect((e) => !e),
            onChange: ({ target }) => {
              setRootNote(() => {
                const updatedRootNote = int(target?.value) || ROOT_NOTE;
                setNotes((n) => n.map(() => updatedRootNote));
                return updatedRootNote;
              });
              target?.blur();
              setTimeout(() => setShowInstrumentNoteSelect(false), 100);
            }
          },
          (instrumentNotes || []).map(([instrument, note2], i2) => /* @__PURE__ */ import_react19.default.createElement("option", { key: `${instrument}-${note2}-${i2}`, value: note2 }, instrument, " ", note2))
        ))
      ), /* @__PURE__ */ import_react19.default.createElement(S10.Item, { $width: 2, $dim: hasPressedTrig && showTrackControlChangeMenu }, /* @__PURE__ */ import_react19.default.createElement("p", null, "VELOCITY"), /* @__PURE__ */ import_react19.default.createElement("div", null, /* @__PURE__ */ import_react19.default.createElement(StyledText_default, { className: "lg", bold: true }, currentVelocity))), /* @__PURE__ */ import_react19.default.createElement(S10.Item, { $width: 2, $dim: hasPressedTrig && showTrackControlChangeMenu }, /* @__PURE__ */ import_react19.default.createElement("p", null, "PROB"), /* @__PURE__ */ import_react19.default.createElement("div", null, Array.isArray(currentProbability) ? /* @__PURE__ */ import_react19.default.createElement(import_react19.default.Fragment, null, /* @__PURE__ */ import_react19.default.createElement(StyledText_default, { className: "lg", style: { display: "inline" }, bold: true }, currentProbability[0]), /* @__PURE__ */ import_react19.default.createElement(
        StyledText_default,
        {
          className: "lg",
          style: {
            display: "inline",
            marginLeft: `${-PADDING / 2}px`,
            color: "gray"
          },
          bold: true
        },
        ":"
      ), /* @__PURE__ */ import_react19.default.createElement(StyledText_default, { className: "lg", style: { display: "inline" }, bold: true }, currentProbability[1])) : /* @__PURE__ */ import_react19.default.createElement(import_react19.default.Fragment, null, /* @__PURE__ */ import_react19.default.createElement(StyledText_default, { className: "lg", bold: true }, currentProbability), /* @__PURE__ */ import_react19.default.createElement(StyledText_default, { className: "md", bold: false }, "%")))), /* @__PURE__ */ import_react19.default.createElement(S10.Item, { $width: 2, $dim: hasPressedTrig }, /* @__PURE__ */ import_react19.default.createElement("p", null, "LENGTH"), /* @__PURE__ */ import_react19.default.createElement("div", null, /* @__PURE__ */ import_react19.default.createElement(StyledText_default, { className: "lg", style: { display: "inline" }, bold: true }, steps), "/", /* @__PURE__ */ import_react19.default.createElement(
        StyledText_default,
        {
          className: "md",
          style: {
            display: "inline",
            marginLeft: `${-PADDING / 2}px`,
            color: "gray"
          }
        },
        getMaxSteps(steps)
      ))), /* @__PURE__ */ import_react19.default.createElement(S10.Item, { $width: 2, $dim: hasPressedTrig }, /* @__PURE__ */ import_react19.default.createElement("p", null, "SCALE"), /* @__PURE__ */ import_react19.default.createElement("div", null, /* @__PURE__ */ import_react19.default.createElement(StyledText_default, { className: "lg", bold: true }, scale2 < 1 ? scale2.toLocaleString().slice(1, 5) : scale2), /* @__PURE__ */ import_react19.default.createElement(StyledText_default, { className: "md", bold: false }, "X"))), /* @__PURE__ */ import_react19.default.createElement(S10.Item, { $width: 4, $dim: hasPressedTrig }, /* @__PURE__ */ import_react19.default.createElement("p", null, "MIDI MAP"), /* @__PURE__ */ import_react19.default.createElement(
        "select",
        {
          name: "devices",
          onChange: (e) => {
            setDeviceId(e.target.value);
            e?.target?.blur();
          }
        },
        /* @__PURE__ */ import_react19.default.createElement("option", { value: "" }, "default"),
        (storage?.midiDeviceCharts || []).map(({ device: device2 }) => /* @__PURE__ */ import_react19.default.createElement(
          "option",
          {
            key: device2.id,
            value: device2.id,
            selected: deviceId === device2.id
          },
          device2.name
        ))
      )), currentPageItem),
      [trackSettingsMenuPages.TRACK_CONDITIONS]: /* @__PURE__ */ import_react19.default.createElement(import_react19.default.Fragment, null, /* @__PURE__ */ import_react19.default.createElement(
        S10.Item,
        {
          $width: 2,
          onClick: () => isMuted ? unmuteTrack(id) : muteTrack(id),
          $dim: hasPressedTrig
        },
        /* @__PURE__ */ import_react19.default.createElement("p", null, "MUTE"),
        /* @__PURE__ */ import_react19.default.createElement("div", null, /* @__PURE__ */ import_react19.default.createElement(StyledText_default, { className: "lg", bold: isMuted }, !isMuted ? "OFF" : "ON"))
      ), /* @__PURE__ */ import_react19.default.createElement(S10.Item, { $width: 2, $dim: hasPressedTrig }, /* @__PURE__ */ import_react19.default.createElement("p", null, "TRIG OP"), /* @__PURE__ */ import_react19.default.createElement(
        "select",
        {
          name: "trigOps",
          onChange: (e) => {
            setTrigOp(e.target.value);
            e?.target?.blur();
          }
        },
        TRIG_OPS.map((e) => /* @__PURE__ */ import_react19.default.createElement("option", { key: `trigOp-${e}`, value: e, selected: trigOp === e }, e))
      )), /* @__PURE__ */ import_react19.default.createElement(S10.Item, { $width: 2, $dim: hasPressedTrig }, /* @__PURE__ */ import_react19.default.createElement("p", null, "LOOP"), /* @__PURE__ */ import_react19.default.createElement("div", null, /* @__PURE__ */ import_react19.default.createElement(StyledText_default, { className: "lg", bold: true }, "\u221E"))), /* @__PURE__ */ import_react19.default.createElement(S10.Item, { $width: 2, $dim: hasPressedTrig }, "4"), /* @__PURE__ */ import_react19.default.createElement(S10.Item, { $width: 2, $dim: hasPressedTrig }, "5"), /* @__PURE__ */ import_react19.default.createElement(S10.Item, { $width: 2, $dim: hasPressedTrig }, "6"), /* @__PURE__ */ import_react19.default.createElement(S10.Item, { $width: 2, $dim: hasPressedTrig }, /* @__PURE__ */ import_react19.default.createElement("p", null, "FOLLOW"), /* @__PURE__ */ import_react19.default.createElement("div", null, /* @__PURE__ */ import_react19.default.createElement(StyledText_default, { className: "lg", bold: isFollowActive }, !isFollowActive ? "OFF" : "ON"))), currentPageItem)
    }[trackSettingsMenuPage];
    return /* @__PURE__ */ import_react19.default.createElement(
      S10.Wrapper,
      {
        $isOpen: isCurrentTrack && showTrackSettingsMenu,
        $hasOpenTrackMenus: showTrackControlChangeMenu
      },
      /* @__PURE__ */ import_react19.default.createElement(S10.InnerWrapper, null, currentTrackSettingsMenuPage)
    );
  };
  var TrackSettingsMenu_default = TrackSettingsMenu;

  // src/frontend/components/TrackControlChangeMenu.jsx
  var import_react21 = __toESM(require_react());

  // src/frontend/components/Encoder.jsx
  var import_react20 = __toESM(require_react());
  var S11 = {
    Wrapper: st.div`
    pointer-events: none;
    
    svg {
      margin-top: 25px;
      width: 100px;
      height: 100px;
      display: block;
      scale: 0.72;
      clip-path: polygon(0 0, 100% 0, 100% 82%, 0 82%);
    }

    path {
      stroke-linecap: round;
      stroke-width: 8;

      &.grey {
        stroke: transparent;
      }

      &.black {
        stroke: rgba(0, 0, 0, 20%);
        stroke-dasharray: calc(40 * 3.142 * 1.85);
        stroke-dashoffset: 230;
      }
    }
  `
  };
  var Encoder = ({ value = 0 }) => {
    return /* @__PURE__ */ import_react20.default.createElement(S11.Wrapper, { className: "encoder" }, /* @__PURE__ */ import_react20.default.createElement("svg", { viewbox: "0 0 100 100" }, /* @__PURE__ */ import_react20.default.createElement(
      "path",
      {
        class: "grey",
        d: "M40,90 A40,40 0 1,1 60,90",
        style: { fill: "none" }
      }
    ), /* @__PURE__ */ import_react20.default.createElement(
      "path",
      {
        class: "black",
        d: "M40,90 A40,40 0 1,1 60,90",
        style: { fill: "none", strokeDashoffset: remap(value, [100, 0], [20, 210]) }
      }
    )));
  };
  var Encoder_default = Encoder;

  // src/frontend/components/TrackControlChangeMenu.jsx
  var S12 = {
    Wrapper: st.div`
    position: relative;
    background-color: lightgray;
    height: ${({ $isOpen }) => $isOpen ? `${TRACK_HEIGHT * 1.5}px` : "0px"};
    transition: height 50ms ease;
    overflow: hidden;
  `,
    InnerWrapper: st.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
  `,
    Item: st.div`
    position: relative;
    display: inline;
    background-color: ${({ $inactive }) => $inactive ? "#B7BBC0" : "lightgray"};
    width: ${({ $width }) => `${(CELL_WIDTH + PADDING) * $width}px`};
    height: 100%;
    border-right: 3px dotted black;

    p {
      display: inline-block;
      padding: ${PADDING * 1.5}px ${PADDING}px;
      padding-bottom: ${PADDING}px;
    }

    > span {
      position: absolute;
    }

    > div {
      height: 100%;
      padding: ${PADDING * 2}px ${PADDING}px;
      display: flex;
      justify-content: center;
      align-items: center;

      .encoder,
      .trigConditionValue {
        position: absolute;
        margin: 0 auto;
        // margin-left: -${TRACK_HEIGHT / 2}px;
      }

      .trigConditionValue {
        margin-top: ${TRACK_HEIGHT / 2}px;
      }
    }
  `
  };
  var TrackControlChangeMenu = () => {
    const { showTrackSettingsMenu, showTrackControlChangeMenu } = useMenuContext();
    const {
      isCurrentTrack,
      trigs,
      pressedTrig,
      trackControlChangeValues,
      controlChangeValues,
      controlChangeParams,
      isEditingControlChangeParams,
      instrumentControlChangeNames,
      deviceId
    } = useTrackContext();
    const currentControlChangeParams = (0, import_react21.useMemo)(
      () => Array.from({ length: NUM_SWITCHES }).map(
        (_2, i2) => i2 in controlChangeParams ? controlChangeParams[i2] : null
      ),
      [controlChangeParams]
    );
    const handleItemClick = (0, import_react21.useCallback)((e) => {
      electron.log(`cc item click ${e?.target?.innerHTML}`);
    }, []);
    return /* @__PURE__ */ import_react21.default.createElement(
      S12.Wrapper,
      {
        $isOpen: isCurrentTrack && showTrackControlChangeMenu,
        $hasOpenTrackMenus: showTrackSettingsMenu
      },
      /* @__PURE__ */ import_react21.default.createElement(S12.InnerWrapper, null, currentControlChangeParams.map((e, i2) => {
        const value = i2 in (controlChangeValues?.[pressedTrig] || {}) ? controlChangeValues?.[pressedTrig]?.[i2] : (pressedTrig === void 0 || !Boolean(trigs[pressedTrig])) && e && trackControlChangeValues[i2] > 0 ? trackControlChangeValues[i2] : null;
        return /* @__PURE__ */ import_react21.default.createElement(S12.Item, { $width: 2, $inactive: !e, onClick: handleItemClick }, isEditingControlChangeParams && /* @__PURE__ */ import_react21.default.createElement(
          "p",
          {
            style: {
              color: isEditingControlChangeParams ? "black" : "gray"
            }
          },
          /* @__PURE__ */ import_react21.default.createElement(
            StyledText_default,
            {
              bold: isEditingControlChangeParams,
              style: { color: "gray" }
            },
            "CC:"
          ),
          /* @__PURE__ */ import_react21.default.createElement(StyledText_default, { bold: true }, e ? e : "-")
        ), /* @__PURE__ */ import_react21.default.createElement(
          StyledText_default,
          {
            p: true,
            style: { display: "block", padding: `${PADDING}px` }
          },
          e && deviceId && e in instrumentControlChangeNames ? instrumentControlChangeNames[e] : "-"
        ), !isEditingControlChangeParams && /* @__PURE__ */ import_react21.default.createElement("div", null, /* @__PURE__ */ import_react21.default.createElement(
          StyledText_default,
          {
            className: "lg trigConditionValue",
            style: {
              color: isEditingControlChangeParams ? "gray" : "initial"
            },
            bold: true
          },
          value
        ), value && /* @__PURE__ */ import_react21.default.createElement(Encoder_default, { value: remap(value, [0, MAX_CC], [0, 100]) })));
      }))
    );
  };
  var TrackControlChangeMenu_default = TrackControlChangeMenu;

  // src/frontend/components/Track.jsx
  var S13 = {
    Wrapper: st.div`
    background-color: slategray;
  `,
    TrackMenusWrapper: st.div`
    > div:not(:last-of-type) {
      border-bottom: ${({ $isCurrentTrack, $showTrackSettingsMenu }) => $isCurrentTrack && $showTrackSettingsMenu ? "3px" : "0px"}
        dotted
        ${({ $isCurrentTrack }) => $isCurrentTrack ? "black" : "transparent"};
    }
    > div:last-of-type {
      border-bottom: ${({ $isCurrentTrack }) => $isCurrentTrack ? "3px" : "0px"}
        ridge
        ${({ $isCurrentTrack }) => $isCurrentTrack ? "red" : "transparent"};
    }
  `,
    Track: st.div`
    filter: ${({ $isMuted }) => $isMuted ? "grayscale(0.85) brightness(0.75) opacity(0.33)" : "grayscale(0) brightness(1) opacity(1)"};
    background-color: slategray;
    width: 100%;
    height: ${TRACK_HEIGHT}px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;
    border-bottom: ${({ $isMuted }) => $isMuted ? `${PADDING}px solid pink` : "none"};

    &::after {
      position: absolute;
      content: '';
      display: ${({ $isCurrentTrack }) => $isCurrentTrack ? "block" : "none"};
      background-color: ${({ $bank }) => $bank === void 0 ? "transparent" : "blue"};
      opacity: 0.33;
      top: 0;
      left: ${({ $bank }) => $bank === 0 ? "0%" : "50%"};
      width: ${({ $bankSteps }) => $bankSteps === 0 ? `${TRACK_HEIGHT * NUM_SWITCHES}px` : `${TRACK_HEIGHT * $bankSteps}px`};
      height: 100%;
    }
  `,
    Text: st.div`
    position: relative;
    display: inline-block;
    color: white;
    transform: translateY(var(--translateText));
  `,
    Step: st.div`
    align-self: flex-end;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: ${({ $isPressedTrig }) => $isPressedTrig ? "center" : "flex-end"};
    justify-content: ${({ $isPressedTrig }) => $isPressedTrig ? "center" : "initial"};
    background-color: ${({ $isActive }) => $isActive === 1 ? "red" : "lightgray"};
    opacity: ${({ $isActive }) => $isActive === 1 ? "1" : "0.5"};
    border: ${({ $isPlaying }) => $isPlaying ? "2px solid black" : "0px solid transparent"};
    z-index: 2;

    min-width: ${CELL_WIDTH}px;
    min-height: 0px;
    max-height: ${CELL_WIDTH}px;
    height: var(--height);
    box-sizing: border-box;
    padding: ${PADDING}px;
    margin: 0 2px;

    &::before {
      position: absolute;
      content: '';
      opacity: 0.33;
      display: ${({ $isPressedTrig }) => $isPressedTrig ? "block" : "none"};
      background-color: slategray;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  `,
    MidiStep: st.div`
    align-self: flex-end;
    position: relative;
    display: inline-block;
    background-color: ${({ $isActive }) => $isActive === 1 ? "green" : "lightgray"};
    opacity: ${({ $isActive }) => $isActive === 1 ? "1" : "0.5"};
    border: ${({ $isPlaying }) => $isPlaying ? "1px solid black" : "1px solid transparent"};
    z-index: 2;

    min-width: ${CELL_WIDTH}px;
    min-height: 0px;
    max-height: ${CELL_WIDTH}px;
    height: var(--height);
    box-sizing: border-box;
    padding: ${PADDING}px;
    margin: 0 2px;
  `
  };
  var Track = () => {
    const trackRef = (0, import_react22.useRef)(null);
    const { step, currentTrack, setCurrentTrack } = useStateContext();
    const { showTrackSettingsMenu } = useMenuContext();
    const {
      id,
      isCurrentTrack,
      isMuted,
      isFollowActive,
      steps,
      scale: scale2,
      bank,
      pressedTrig,
      currentPage,
      bankSteps,
      trigs,
      trigsVelocity
    } = useTrackContext();
    (0, import_react22.useEffect)(() => {
      if (showTrackSettingsMenu && isCurrentTrack && trackRef.current) {
        trackRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        });
      }
    }, [showTrackSettingsMenu, isCurrentTrack]);
    const handleClick = () => {
      if (currentTrack === id)
        return;
      setCurrentTrack(id);
    };
    const getTrigs = (t) => {
      const offset = getMaxSteps((bank + 1) * NUM_SWITCHES, 16) / 16 - 1;
      return isFollowActive ? t.slice(currentPage * NUM_STEPS, NUM_STEPS + currentPage * NUM_STEPS) : t.slice(offset * NUM_STEPS, NUM_STEPS + offset * NUM_STEPS);
    };
    return /* @__PURE__ */ import_react22.default.createElement(S13.Wrapper, { ref: trackRef, onClick: handleClick, "data-track": id }, /* @__PURE__ */ import_react22.default.createElement(TrackHeader_default, null), /* @__PURE__ */ import_react22.default.createElement(
      S13.TrackMenusWrapper,
      {
        $isCurrentTrack: isCurrentTrack,
        $showTrackSettingsMenu: showTrackSettingsMenu
      },
      /* @__PURE__ */ import_react22.default.createElement(TrackSettingsMenu_default, null),
      /* @__PURE__ */ import_react22.default.createElement(TrackControlChangeMenu_default, null)
    ), /* @__PURE__ */ import_react22.default.createElement(
      S13.Track,
      {
        $isCurrentTrack: isCurrentTrack,
        $isMuted: isMuted,
        $bank: bank % 2,
        $bankSteps: bankSteps
      },
      steps && getTrigs(trigs).map((e, i2) => {
        const index4 = isFollowActive ? i2 + currentPage * NUM_STEPS : i2;
        const height = e ? int(remap(trigsVelocity[index4], [0, 127], [0, CELL_WIDTH])) : CELL_WIDTH;
        return /* @__PURE__ */ import_react22.default.createElement(
          S13.Step,
          {
            style: {
              "--height": `${height}px`
            },
            key: `step-${index4}`,
            $isActive: e,
            $isPlaying: step * (4 * scale2) % steps === index4,
            $isMuted: isMuted,
            $isPressedTrig: Boolean(e) && pressedTrig === index4
          },
          Boolean(e) && pressedTrig === index4 && /* @__PURE__ */ import_react22.default.createElement(S13.Text, { className: "lg", style: { color: "black" } }, "X")
        );
      })
    ));
  };
  var Track_default = Track;

  // src/frontend/components/NewTrack.jsx
  var import_react23 = __toESM(require_react());
  var S14 = {
    Wrapper: st.div``,
    Controls: st.div`
    display: flex;
    justify-content: center;
  `
  };
  var NewTrack = () => {
    const { storage } = useStorageContext();
    const { currentTrack, setCurrentTrack } = useStateContext();
    const { currentTracks, addTrack, removeTrack } = useTracksContext();
    const currentTracksKeys = (0, import_react23.useMemo)(
      () => Object.keys(currentTracks),
      [currentTracks]
    );
    const handleRemoveTrack = () => {
      if (!currentTracksKeys.length)
        return;
      const keys = currentTracksKeys.slice();
      const lastIndex = keys.pop();
      const lastTrackIndex = keys.pop();
      removeTrack(lastIndex);
      if (int(lastIndex) === int(currentTrack)) {
        setCurrentTrack(int(lastTrackIndex));
      }
    };
    const handleAddTrack = () => {
      const lastIndex = currentTracksKeys.slice().pop();
      const nextIndex = isNaN(lastIndex) ? 0 : int(lastIndex) + 1;
      const deviceId = currentTracks?.[lastIndex]?.deviceId;
      addTrack({
        id: nextIndex,
        ...!isNaN(lastIndex) && {
          deviceId,
          rootNote: (storage?.midiDeviceCharts || []).find(
            ({ device }) => device?.id === deviceId
          )?.device?.midi?.config?.rootNote || ROOT_NOTE
        }
      });
      setCurrentTrack(nextIndex);
    };
    return /* @__PURE__ */ import_react23.default.createElement(S14.Wrapper, null, /* @__PURE__ */ import_react23.default.createElement(TrackHeader_default, { isNewTrack: true }), /* @__PURE__ */ import_react23.default.createElement(S14.Controls, null, /* @__PURE__ */ import_react23.default.createElement(IoRemoveSharp, { onClick: handleRemoveTrack }), /* @__PURE__ */ import_react23.default.createElement(IoAddSharp, { onClick: handleAddTrack })));
  };
  var NewTrack_default = NewTrack;

  // src/frontend/components/Tracks.jsx
  var S15 = {
    Wrapper: st.div`
    position: fixed;
    top: 54px;
    min-height: ${HEIGHT - HEADER_HEIGHT}px;
    max-height: ${HEIGHT - HEADER_HEIGHT}px;
    min-width: ${WIDTH}px;
    max-width: ${WIDTH}px;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    padding-bottom: ${HEIGHT - HEADER_HEIGHT * 3}px;
  `
  };
  var Tracks = ({ children, ...props }) => {
    const { currentProject } = useStateContext();
    const { currentTracks } = useTracksContext();
    const tracks = (0, import_react24.useMemo)(
      () => Object.values(currentTracks).map((track, i2) => /* @__PURE__ */ import_react24.default.createElement(
        TrackContextProvider,
        {
          key: `${currentProject}-${track.id}-${i2}`,
          ...track
        },
        /* @__PURE__ */ import_react24.default.createElement(Track_default, null)
      )),
      [currentProject, currentTracks]
    );
    (0, import_react24.useEffect)(() => {
      const canvas = document.getElementById("canvas");
      const ctx = canvas.getContext("2d");
      let id;
      const update = () => {
        id = requestAnimationFrame(update);
      };
      return () => cancelAnimationFrame(id);
    }, []);
    return /* @__PURE__ */ import_react24.default.createElement(S15.Wrapper, { ...props }, tracks, /* @__PURE__ */ import_react24.default.createElement(NewTrack_default, null));
  };
  var Tracks_default = Tracks;

  // src/frontend/layouts/App.jsx
  var S16 = {
    Wrapper: st.div`
    position: absolute;
    width: 100%;
    height: 100%;
    max-width: ${WIDTH}px;
    max-height: ${HEIGHT}px;
    background-color: lightgray;
    overflow: hidden;
  `
  };
  var App = () => {
    const { setStep, setIsPlaying } = useStateContext();
    const { showSettingsMenu, showTrackMenu, showEnvelopeMenu, hasOpenMenu } = useMenuContext();
    (0, import_react25.useEffect)(() => {
      let id;
      let lastUpdate = performance.now();
      let fps = 0;
      const update = () => {
        let delta = (performance.now() - lastUpdate) / 1e3;
        lastUpdate = performance.now();
        fps = 1 / delta;
        state_default.FPS = fps.toFixed();
        state_default.BEAT_PULSE = state_default.PLAYING && state_default.STEP * 4 % 4 === 0 ? 255 : clamp(state_default.BEAT_PULSE - 30, 0, 255);
        const keys = ["bpm", "gpio_keys", "state_changed", ...state_default.GPIO_KEYS];
        electron.getState(keys);
        id = requestAnimationFrame(update);
      };
      id = requestAnimationFrame(update);
      return () => cancelAnimationFrame(id);
    }, []);
    (0, import_react25.useEffect)(() => {
      electron.onStateUpdate((_2, data) => {
        const now = performance.now();
        Object.entries(data).forEach(([key, value]) => {
          if (key === "bpm") {
            const bpm = parseFloat(value);
            if (isNaN(bpm) || now - state_default.LAST_UPDATE < 1e3)
              return;
            state_default.LAST_UPDATE = now;
            value = bpm;
          }
          if (["gpio_keys", "state_changed"].includes(key)) {
            value = JSON.parse(value);
          }
          if (state_default.GPIO_KEYS.includes(key)) {
            gpio_default[key] = parseFloat(value);
          } else {
            state_default[key.toUpperCase()] = value;
          }
        });
      });
      electron.onMidiStart(() => {
        state_default.PLAYING = true;
        state_default.BEAT = 0;
        state_default.BEAT_PULSE = 255;
        setIsPlaying(true);
      });
      electron.onMidiStop(() => {
        state_default.PLAYING = false;
        state_default.STEP = 0;
        setIsPlaying(false);
      });
      electron.onMidiStep((_2, data) => {
        state_default.STEP = parseFloat(data);
        setStep(state_default.STEP);
      });
    }, []);
    return /* @__PURE__ */ import_react25.default.createElement(
      IconContext.Provider,
      {
        value: {
          color: "black",
          size: `${CELL_WIDTH}px`,
          className: "react-icon"
        }
      },
      /* @__PURE__ */ import_react25.default.createElement(S16.Wrapper, null, /* @__PURE__ */ import_react25.default.createElement(Header_default, null), /* @__PURE__ */ import_react25.default.createElement(SettingsMenu_default, { className: !showSettingsMenu && "hidden" }), /* @__PURE__ */ import_react25.default.createElement(TrackMenu_default, { className: !showTrackMenu ? "hidden" : "" }), /* @__PURE__ */ import_react25.default.createElement(EnvelopeMenu_default, { className: !showEnvelopeMenu && "hidden" }), /* @__PURE__ */ import_react25.default.createElement(Tracks_default, { className: hasOpenMenu && "hidden" }))
    );
  };
  var App_default = App;

  // src/frontend/index.jsx
  window["electron"] = new Proxy(window?.["electronAPI"] || {}, {
    get(obj, prop) {
      return prop in obj ? obj[prop] : () => {
      };
    }
  });
  electron.onWindowReload(() => window.location.reload());
  window.addEventListener("error", (e) => electron.setError(e));
  document.addEventListener(
    "DOMContentLoaded",
    () => (0, import_client.createRoot)(document.getElementById("app")).render(
      /* @__PURE__ */ import_react26.default.createElement(StorageContextProvider, null, /* @__PURE__ */ import_react26.default.createElement(StateContextProvider, null, /* @__PURE__ */ import_react26.default.createElement(MenuContextProvider, null, /* @__PURE__ */ import_react26.default.createElement(TracksContextProvider, null, /* @__PURE__ */ import_react26.default.createElement(GlobalStyle_default, null), /* @__PURE__ */ import_react26.default.createElement(App_default, null)))))
    )
  );
})();
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=index.js.map
