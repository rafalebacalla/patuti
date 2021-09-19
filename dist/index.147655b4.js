// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"4bw0B":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "e80cae8e147655b4";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"i87aF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _kaboom = require("./kaboom");
var _kaboomDefault = parcelHelpers.interopDefault(_kaboom);
var _mainScene = require("./scenes/main.scene");
var _mainSceneDefault = parcelHelpers.interopDefault(_mainScene);
var _patutiScene = require("./scenes/patuti.scene");
var _patutiSceneDefault = parcelHelpers.interopDefault(_patutiScene);
// k.loadRoot("https://imgur.com/");
// k.loadSprite("area", "PLsvqPC.png");
// k.loadSprite("idle", "Fmgkm0j.png");
_kaboomDefault.default.scene("main", _patutiSceneDefault.default);
_kaboomDefault.default.start('main');

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ixXZC","./kaboom":"5LAWF","./scenes/main.scene":"8pcnP","./scenes/patuti.scene":"i7gMP"}],"ixXZC":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"5LAWF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "k", ()=>k
);
var _kaboom = require("kaboom");
var _kaboomDefault = parcelHelpers.interopDefault(_kaboom);
const kaboomConf = {
    width: 340,
    height: 240,
    scale: 2,
    stretch: true,
    letterbox: true,
    font: "sinko",
    clearColor: [
        0,
        0,
        0,
        1
    ],
    global: true
};
const k = _kaboomDefault.default(kaboomConf);
exports.default = k;

},{"kaboom":"iEfyY","@parcel/transformer-js/src/esmodule-helpers.js":"ixXZC"}],"iEfyY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var Je = Object.defineProperty, Qt = Object.defineProperties;
var Jt = Object.getOwnPropertyDescriptors;
var et = Object.getOwnPropertySymbols;
var en = Object.prototype.hasOwnProperty, tn = Object.prototype.propertyIsEnumerable;
var tt = (t, e, o)=>e in t ? Je(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: o
    }) : t[e] = o
, le = (t, e)=>{
    for(var o in e || (e = {
    }))en.call(e, o) && tt(t, o, e[o]);
    if (et) for (var o of et(e))tn.call(e, o) && tt(t, o, e[o]);
    return t;
}, we = (t, e)=>Qt(t, Jt(e))
;
var r = (t, e)=>Je(t, "name", {
        value: e,
        configurable: !0
    })
;
var fe = (t, e)=>()=>(t && (e = t(t = 0)), e)
, nn = (t, e)=>()=>(e || t((e = {
            exports: {
            }
        }).exports, e), e.exports)
;
function nt(t) {
    return t * Math.PI / 180;
}
function rt(t) {
    return t * 180 / Math.PI;
}
function ae(t, e, o) {
    return e > o ? ae(t, o, e) : Math.min(Math.max(t, e), o);
}
function De(t, e, o) {
    return t + (e - t) * o;
}
function ve(t, e, o, i, m) {
    return i + (t - e) / (o - e) * (m - i);
}
function st(t, e, o, i, m) {
    return ae(ve(t, e, o, i, m), i, m);
}
function f(...t) {
    if (t.length === 0) return f(0, 0);
    if (t.length === 1) {
        if (typeof t[0] == "number") return f(t[0], t[0]);
        if (Re(t[0])) return f(t[0].x, t[0].y);
        if (Array.isArray(t[0]) && t[0].length === 2) return f.apply(null, t[0]);
    }
    return {
        x: t[0],
        y: t[1],
        clone () {
            return f(this.x, this.y);
        },
        add (...e) {
            let o = f(...e);
            return f(this.x + o.x, this.y + o.y);
        },
        sub (...e) {
            let o = f(...e);
            return f(this.x - o.x, this.y - o.y);
        },
        scale (e) {
            return f(this.x * e, this.y * e);
        },
        dist (...e) {
            let o = f(...e);
            return Math.sqrt((this.x - o.x) * (this.x - o.x) + (this.y - o.y) * (this.y - o.y));
        },
        len () {
            return this.dist(f(0, 0));
        },
        unit () {
            return this.scale(1 / this.len());
        },
        normal () {
            return f(this.y, -this.x);
        },
        dot (...e) {
            let o = f(...e);
            return f(this.x * o.x, this.y * o.y);
        },
        angle (...e) {
            let o = f(...e);
            return Math.atan2(this.y - o.y, this.x - o.x);
        },
        lerp (e, o) {
            return f(De(this.x, e.x, o), De(this.y, e.y, o));
        },
        eq (e) {
            return this.x === e.x && this.y === e.y;
        },
        str () {
            return `(${this.x}, ${this.y})`;
        }
    };
}
function ot(t) {
    return f(Math.cos(t), Math.sin(t));
}
function Te(t, e, o) {
    return {
        x: t,
        y: e,
        z: o,
        xy () {
            return f(this.x, this.y);
        }
    };
}
function Re(t) {
    return t !== void 0 && t.x !== void 0 && t.y !== void 0;
}
function it(t) {
    return t !== void 0 && t.x !== void 0 && t.y !== void 0 && t.z !== void 0;
}
function ye(t) {
    return t !== void 0 && t.r !== void 0 && t.g !== void 0 && t.b !== void 0 && t.a !== void 0;
}
function at(t) {
    if (t !== void 0 && Array.isArray(t.m) && t.m.length === 16) return t;
}
function Ve(...t) {
    if (t.length === 0) return Y();
    if (t.length === 1) {
        if (ye(t[0])) return Y(t[0]);
        if (Array.isArray(t[0]) && t[0].length === 3) return Ve.apply(null, t[0]);
    }
    return Y(t[0], t[1], t[2], 1);
}
function Y(...t) {
    var e;
    if (t.length === 0) return Y(1, 1, 1, 1);
    if (t.length === 1) {
        if (ye(t[0])) return Y(t[0].r, t[0].g, t[0].b, t[0].a);
        if (Array.isArray(t[0]) && t[0].length === 4) return Y.apply(null, t[0]);
    }
    return {
        r: t[0],
        g: t[1],
        b: t[2],
        a: (e = t[3]) != null ? e : 1,
        clone () {
            return Y(this.r, this.g, this.b, this.a);
        },
        lighten (o) {
            return Y(this.r + o, this.g + o, this.b + o, this.a);
        },
        darken (o) {
            return this.lighten(-o);
        },
        invert () {
            return Y(1 - this.r, 1 - this.g, 1 - this.b, this.a);
        },
        isDark (o = 0.5) {
            return this.r + this.g + this.b < 3 * o;
        },
        isLight (o = 0.5) {
            return this.r + this.g + this.b > 3 * o;
        },
        eq (o) {
            return this.r === o.r && this.g === o.g && this.b === o.g && this.a === o.a;
        }
    };
}
function oe(t, e, o, i) {
    return {
        x: t,
        y: e,
        w: o,
        h: i,
        clone () {
            return oe(this.x, this.y, this.w, this.h);
        },
        eq (m) {
            return this.x === m.x && this.y === m.y && this.w === m.w && this.h === m.h;
        }
    };
}
function ee(t) {
    return {
        m: t ? [
            ...t
        ] : [
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
        ],
        clone () {
            return ee(this.m);
        },
        mult (e) {
            let o = [];
            for(let i = 0; i < 4; i++)for(let m = 0; m < 4; m++)o[i * 4 + m] = this.m[0 + m] * e.m[i * 4 + 0] + this.m[4 + m] * e.m[i * 4 + 1] + this.m[8 + m] * e.m[i * 4 + 2] + this.m[12 + m] * e.m[i * 4 + 3];
            return ee(o);
        },
        multVec4 (e) {
            return {
                x: e.x * this.m[0] + e.y * this.m[4] + e.z * this.m[8] + e.w * this.m[12],
                y: e.x * this.m[1] + e.y * this.m[5] + e.z * this.m[9] + e.w * this.m[13],
                z: e.x * this.m[2] + e.y * this.m[6] + e.z * this.m[10] + e.w * this.m[14],
                w: e.x * this.m[3] + e.y * this.m[7] + e.z * this.m[11] + e.w * this.m[15]
            };
        },
        multVec3 (e) {
            let o = this.multVec4({
                x: e.x,
                y: e.y,
                z: e.z,
                w: 1
            });
            return Te(o.x, o.y, o.z);
        },
        multVec2 (e) {
            return f(e.x * this.m[0] + e.y * this.m[4] + 0 * this.m[8] + 1 * this.m[12], e.x * this.m[1] + e.y * this.m[5] + 0 * this.m[9] + 1 * this.m[13]);
        },
        translate (e) {
            return this.mult(ee([
                1,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                1,
                0,
                e.x,
                e.y,
                0,
                1
            ]));
        },
        scale (e) {
            return this.mult(ee([
                e.x,
                0,
                0,
                0,
                0,
                e.y,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                1
            ]));
        },
        rotateX (e) {
            return this.mult(ee([
                1,
                0,
                0,
                0,
                0,
                Math.cos(e),
                -Math.sin(e),
                0,
                0,
                Math.sin(e),
                Math.cos(e),
                0,
                0,
                0,
                0,
                1
            ]));
        },
        rotateY (e) {
            return this.mult(ee([
                Math.cos(e),
                0,
                -Math.sin(e),
                0,
                0,
                1,
                0,
                0,
                Math.sin(e),
                0,
                Math.cos(e),
                0,
                0,
                0,
                0,
                1
            ]));
        },
        rotateZ (e) {
            return this.mult(ee([
                Math.cos(e),
                -Math.sin(e),
                0,
                0,
                Math.sin(e),
                Math.cos(e),
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                1
            ]));
        },
        invert () {
            let e = [], o = this.m[10] * this.m[15] - this.m[14] * this.m[11], i = this.m[9] * this.m[15] - this.m[13] * this.m[11], m = this.m[9] * this.m[14] - this.m[13] * this.m[10], v = this.m[8] * this.m[15] - this.m[12] * this.m[11], A = this.m[8] * this.m[14] - this.m[12] * this.m[10], R = this.m[8] * this.m[13] - this.m[12] * this.m[9], $ = this.m[6] * this.m[15] - this.m[14] * this.m[7], k = this.m[5] * this.m[15] - this.m[13] * this.m[7], I = this.m[5] * this.m[14] - this.m[13] * this.m[6], j = this.m[4] * this.m[15] - this.m[12] * this.m[7], T = this.m[4] * this.m[14] - this.m[12] * this.m[6], w = this.m[5] * this.m[15] - this.m[13] * this.m[7], S = this.m[4] * this.m[13] - this.m[12] * this.m[5], U = this.m[6] * this.m[11] - this.m[10] * this.m[7], B = this.m[5] * this.m[11] - this.m[9] * this.m[7], _ = this.m[5] * this.m[10] - this.m[9] * this.m[6], G = this.m[4] * this.m[11] - this.m[8] * this.m[7], y = this.m[4] * this.m[10] - this.m[8] * this.m[6], H = this.m[4] * this.m[9] - this.m[8] * this.m[5];
            e[0] = this.m[5] * o - this.m[6] * i + this.m[7] * m, e[4] = -(this.m[4] * o - this.m[6] * v + this.m[7] * A), e[8] = this.m[4] * i - this.m[5] * v + this.m[7] * R, e[12] = -(this.m[4] * m - this.m[5] * A + this.m[6] * R), e[1] = -(this.m[1] * o - this.m[2] * i + this.m[3] * m), e[5] = this.m[0] * o - this.m[2] * v + this.m[3] * A, e[9] = -(this.m[0] * i - this.m[1] * v + this.m[3] * R), e[13] = this.m[0] * m - this.m[1] * A + this.m[2] * R, e[2] = this.m[1] * $ - this.m[2] * k + this.m[3] * I, e[6] = -(this.m[0] * $ - this.m[2] * j + this.m[3] * T), e[10] = this.m[0] * w - this.m[1] * j + this.m[3] * S, e[14] = -(this.m[0] * I - this.m[1] * T + this.m[2] * S), e[3] = -(this.m[1] * U - this.m[2] * B + this.m[3] * _), e[7] = this.m[0] * U - this.m[2] * G + this.m[3] * y, e[11] = -(this.m[0] * B - this.m[1] * G + this.m[3] * H), e[15] = this.m[0] * _ - this.m[1] * y + this.m[2] * H;
            let M = this.m[0] * e[0] + this.m[1] * e[4] + this.m[2] * e[8] + this.m[3] * e[12];
            for(let q = 0; q < 4; q++)for(let J = 0; J < 4; J++)e[q * 4 + J] *= 1 / M;
            return ee(e);
        }
    };
}
function ut(t, e, o) {
    return t + (Math.sin(o) + 1) / 2 * (e - t);
}
function Xe(t) {
    return {
        seed: t,
        gen (...e) {
            if (e.length === 0) return this.seed = (rn * this.seed + sn) % ct, this.seed / ct;
            if (e.length === 1) {
                if (typeof e[0] == "number") return this.gen(0, e[0]);
                if (Re(e[0])) return this.gen(f(0, 0), e[0]);
                if (ye(e[0])) return this.gen(Y(0, 0, 0, 0), e[0]);
            } else if (e.length === 2) {
                if (typeof e[0] == "number" && typeof e[1] == "number") return this.gen() * (e[1] - e[0]) + e[0];
                if (Re(e[0]) && Re(e[1])) return f(this.gen(e[0].x, e[1].x), this.gen(e[0].y, e[1].y));
                if (ye(e[0]) && ye(e[1])) return Y(this.gen(e[0].r, e[1].r), this.gen(e[0].g, e[1].g), this.gen(e[0].b, e[1].b), this.gen(e[0].a, e[1].a));
            }
        }
    };
}
function ft(t) {
    dt.seed = t;
}
function Pe(...t) {
    return dt.gen(...t);
}
function ht(t) {
    return Pe() <= t;
}
function mt(t) {
    return t[Math.floor(Pe(t.length))];
}
function Ye(t, e) {
    return t.p2.x >= e.p1.x && t.p1.x <= e.p2.x && t.p2.y >= e.p1.y && t.p1.y <= e.p2.y;
}
function lt(t, e) {
    return t.p2.x > e.p1.x && t.p1.x < e.p2.x && t.p2.y > e.p1.y && t.p1.y < e.p2.y;
}
function pt(t, e) {
    return e.x >= t.p1.x && e.x <= t.p2.x && e.y >= t.p1.y && e.y < t.p2.y;
}
var rn, sn, ct, dt, xe = fe(()=>{
    r(nt, "deg2rad");
    r(rt, "rad2deg");
    r(ae, "clamp");
    r(De, "lerp");
    r(ve, "map");
    r(st, "mapc");
    r(f, "vec2");
    r(ot, "vec2FromAngle");
    r(Te, "vec3");
    r(Re, "isVec2");
    r(it, "isVec3");
    r(ye, "isColor");
    r(at, "isMat4");
    r(Ve, "rgb");
    r(Y, "rgba");
    r(oe, "quad");
    r(ee, "mat4");
    r(ut, "wave");
    rn = 1103515245, sn = 12345, ct = 2147483648, dt = Xe(Date.now());
    r(Xe, "makeRng");
    r(ft, "randSeed");
    r(Pe, "rand");
    r(ht, "chance");
    r(mt, "choose");
    r(Ye, "colRectRect");
    r(lt, "overlapRectRect");
    r(pt, "colRectPt");
});
function $e(t, e) {
    let o = typeof t, i = typeof e;
    if (o !== i) return !1;
    if (o === "object" && i === "object") {
        let m = Object.keys(t), v = Object.keys(e);
        if (m.length !== v.length) return !1;
        for (let A of m){
            let R = t[A], $ = e[A];
            if (!(typeof R == "function" && typeof $ == "function") && !$e(R, $)) return !1;
        }
        return !0;
    }
    return t === e;
}
var bt = fe(()=>{
    r($e, "deepEq");
});
function Le(t) {
    switch(t){
        case "topleft":
            return f(-1, -1);
        case "top":
            return f(0, -1);
        case "topright":
            return f(1, -1);
        case "left":
            return f(-1, 0);
        case "center":
            return f(0, 0);
        case "right":
            return f(1, 0);
        case "botleft":
            return f(-1, 1);
        case "bot":
            return f(0, 1);
        case "botright":
            return f(1, 1);
        default:
            return t;
    }
}
function xt(t, e) {
    let o = (()=>{
        switch(e.texFilter){
            case "linear":
                return t.LINEAR;
            case "nearest":
                return t.NEAREST;
            default:
                return t.NEAREST;
        }
    })(), i = (()=>{
        var K;
        let h = A(We, Ke), x = v(new ImageData(new Uint8ClampedArray([
            255,
            255,
            255,
            255
        ]), 1, 1)), b = (K = e.clearColor) != null ? K : Y(0, 0, 0, 1);
        t.clearColor(b.r, b.g, b.b, b.a), t.enable(t.BLEND), t.blendFuncSeparate(t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA);
        let L = t.createBuffer();
        t.bindBuffer(t.ARRAY_BUFFER, L), t.bufferData(t.ARRAY_BUFFER, Ne * 4, t.DYNAMIC_DRAW), t.bindBuffer(t.ARRAY_BUFFER, null);
        let z = t.createBuffer();
        t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, z), t.bufferData(t.ELEMENT_ARRAY_BUFFER, Ne * 2, t.DYNAMIC_DRAW), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, null);
        let V = v(new ImageData(new Uint8ClampedArray([
            128,
            128,
            128,
            255,
            190,
            190,
            190,
            255,
            190,
            190,
            190,
            255,
            128,
            128,
            128,
            255
        ]), 2, 2));
        return {
            drawCalls: 0,
            lastDrawCalls: 0,
            defProg: h,
            curProg: h,
            defTex: x,
            curTex: x,
            curUniform: {
            },
            vbuf: L,
            ibuf: z,
            vqueue: [],
            iqueue: [],
            transform: ee(),
            transformStack: [],
            clearColor: b,
            bgTex: V
        };
    })();
    I(), j();
    function m(h) {
        return Math.log(h) / Math.log(2) % 1 == 0;
    }
    r(m, "powerOfTwo");
    function v(h) {
        let x = t.createTexture();
        t.bindTexture(t.TEXTURE_2D, x), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, h), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, o), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, o);
        let b = (()=>m(h.width) && m(h.height) ? t.REPEAT : t.CLAMP_TO_EDGE
        )();
        return t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, b), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, b), t.bindTexture(t.TEXTURE_2D, null), {
            width: h.width,
            height: h.height,
            bind () {
                t.bindTexture(t.TEXTURE_2D, x);
            },
            unbind () {
                t.bindTexture(t.TEXTURE_2D, null);
            }
        };
    }
    r(v, "makeTex");
    function A(h = We, x = Ke) {
        let b, L = on.replace("{{user}}", h != null ? h : We), z = an.replace("{{user}}", x != null ? x : Ke), V = t.createShader(t.VERTEX_SHADER), K = t.createShader(t.FRAGMENT_SHADER);
        if (t.shaderSource(V, L), t.shaderSource(K, z), t.compileShader(V), t.compileShader(K), b = t.getShaderInfoLog(V)) throw new Error(b);
        if (b = t.getShaderInfoLog(K)) throw new Error(b);
        let C = t.createProgram();
        if (t.attachShader(C, V), t.attachShader(C, K), t.bindAttribLocation(C, 0, "a_pos"), t.bindAttribLocation(C, 1, "a_uv"), t.bindAttribLocation(C, 2, "a_color"), t.linkProgram(C), (b = t.getProgramInfoLog(C)) && b !== `\n`) throw new Error(b);
        return {
            bind () {
                t.useProgram(C);
            },
            unbind () {
                t.useProgram(null);
            },
            bindAttribs () {
                t.vertexAttribPointer(0, 3, t.FLOAT, !1, Ie * 4, 0), t.enableVertexAttribArray(0), t.vertexAttribPointer(1, 2, t.FLOAT, !1, Ie * 4, 12), t.enableVertexAttribArray(1), t.vertexAttribPointer(2, 4, t.FLOAT, !1, Ie * 4, 20), t.enableVertexAttribArray(2);
            },
            send (P) {
                this.bind();
                for(let X in P){
                    let F = P[X], Z = t.getUniformLocation(C, X);
                    typeof F == "number" ? t.uniform1f(Z, F) : at(F) ? t.uniformMatrix4fv(Z, !1, new Float32Array(F.m)) : ye(F) ? t.uniform4f(Z, F.r, F.g, F.b, F.a) : it(F) ? t.uniform3f(Z, F.x, F.y, F.z) : Re(F) && t.uniform2f(Z, F.x, F.y);
                }
                this.unbind();
            }
        };
    }
    r(A, "makeProgram");
    function R(h, x, b, L) {
        let z = h.width / x, V = h.height / b, K = 1 / z, C = 1 / V, P = {
        }, X = L.split("").entries();
        for (let [F, Z] of X)P[Z] = f(F % z * K, Math.floor(F / z) * C);
        return {
            tex: h,
            map: P,
            qw: K,
            qh: C
        };
    }
    r(R, "makeFont");
    function $(h, x, b = i.defTex, L = i.defProg, z = {
    }) {
        b = b != null ? b : i.defTex, L = L != null ? L : i.defProg, (b !== i.curTex || L !== i.curProg || !$e(i.curUniform, z) || i.vqueue.length + h.length * Ie > Ne || i.iqueue.length + x.length > Ne) && k(), i.curTex = b, i.curProg = L, i.curUniform = z;
        let V = x.map((C)=>C + i.vqueue.length / Ie
        ), K = h.map((C)=>{
            let P = w(i.transform.multVec2(C.pos.xy()));
            return [
                P.x,
                P.y,
                C.pos.z,
                C.uv.x,
                C.uv.y,
                C.color.r,
                C.color.g,
                C.color.b,
                C.color.a
            ];
        }).flat();
        V.forEach((C)=>i.iqueue.push(C)
        ), K.forEach((C)=>i.vqueue.push(C)
        );
    }
    r($, "drawRaw");
    function k() {
        !i.curTex || !i.curProg || i.vqueue.length === 0 || i.iqueue.length === 0 || (i.curProg.send(i.curUniform), t.bindBuffer(t.ARRAY_BUFFER, i.vbuf), t.bufferSubData(t.ARRAY_BUFFER, 0, new Float32Array(i.vqueue)), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, i.ibuf), t.bufferSubData(t.ELEMENT_ARRAY_BUFFER, 0, new Uint16Array(i.iqueue)), i.curProg.bind(), i.curProg.bindAttribs(), i.curTex.bind(), t.drawElements(t.TRIANGLES, i.iqueue.length, t.UNSIGNED_SHORT, 0), i.curTex.unbind(), i.curProg.unbind(), t.bindBuffer(t.ARRAY_BUFFER, null), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, null), i.iqueue = [], i.vqueue = [], i.drawCalls++);
    }
    r(k, "flush");
    function I() {
        t.clear(t.COLOR_BUFFER_BIT), e.clearColor || q({
            width: he(),
            height: pe(),
            quad: oe(0, 0, he() * be() / yt, pe() * be() / yt),
            tex: i.bgTex
        }), i.drawCalls = 0, i.transformStack = [], i.transform = ee();
    }
    r(I, "frameStart");
    function j() {
        k(), i.lastDrawCalls = i.drawCalls;
    }
    r(j, "frameEnd");
    function T() {
        return i.lastDrawCalls;
    }
    r(T, "drawCalls");
    function w(h) {
        return f(h.x / he() * 2 - 1, -h.y / pe() * 2 + 1);
    }
    r(w, "toNDC");
    function S(h) {
        i.transform = h.clone();
    }
    r(S, "pushMatrix");
    function U(h) {
        !h || h.x === 0 && h.y === 0 || (i.transform = i.transform.translate(h));
    }
    r(U, "pushTranslate");
    function B(h) {
        !h || h.x === 1 && h.y === 1 || (i.transform = i.transform.scale(h));
    }
    r(B, "pushScale");
    function _(h) {
        !h || (i.transform = i.transform.rotateX(h));
    }
    r(_, "pushRotateX");
    function G(h) {
        !h || (i.transform = i.transform.rotateY(h));
    }
    r(G, "pushRotateY");
    function y(h) {
        !h || (i.transform = i.transform.rotateZ(h));
    }
    r(y, "pushRotateZ");
    function H() {
        i.transformStack.push(i.transform.clone());
    }
    r(H, "pushTransform");
    function M() {
        i.transformStack.length > 0 && (i.transform = i.transformStack.pop());
    }
    r(M, "popTransform");
    function q(h = {
    }) {
        var Z, re;
        let x = h.width || 0, b = h.height || 0, L = h.pos || f(0, 0), V = Le(h.origin || He).dot(f(x, b).scale(-0.5)), K = f((Z = h.scale) != null ? Z : 1), C = h.rot || 0, P = h.quad || oe(0, 0, 1, 1), X = 1 - ((re = h.z) != null ? re : 0), F = h.color || Y(1, 1, 1, 1);
        H(), U(L), B(K), y(C), U(V), $([
            {
                pos: Te(-x / 2, b / 2, X),
                uv: f(P.x, P.y + P.h),
                color: F
            },
            {
                pos: Te(-x / 2, -b / 2, X),
                uv: f(P.x, P.y),
                color: F
            },
            {
                pos: Te(x / 2, -b / 2, X),
                uv: f(P.x + P.w, P.y),
                color: F
            },
            {
                pos: Te(x / 2, b / 2, X),
                uv: f(P.x + P.w, P.y + P.h),
                color: F
            }
        ], [
            0,
            1,
            3,
            1,
            2,
            3
        ], h.tex, h.prog, h.uniform), M();
    }
    r(q, "drawQuad");
    function J(h, x = {
    }) {
        var V;
        let b = (V = x.quad) != null ? V : oe(0, 0, 1, 1), L = h.width * b.w, z = h.height * b.h;
        q(we(le({
        }, x), {
            tex: h,
            quad: b,
            width: L,
            height: z
        }));
    }
    r(J, "drawTexture");
    function E(h, x, b, L = {
    }) {
        q(we(le({
        }, L), {
            pos: h,
            width: x,
            height: b
        }));
    }
    r(E, "drawRect");
    function O(h, x, b, L = {
    }) {
        let z = Le(L.origin || He).dot(f(x, b)).scale(0.5), V = h.add(f(-x / 2, -b / 2)).sub(z), K = h.add(f(-x / 2, b / 2)).sub(z), C = h.add(f(x / 2, b / 2)).sub(z), P = h.add(f(x / 2, -b / 2)).sub(z);
        te(V, K, L), te(K, C, L), te(C, P, L), te(P, V, L);
    }
    r(O, "drawRectStroke");
    function te(h, x, b = {
    }) {
        let L = b.width || 1, z = h.dist(x), V = Math.PI / 2 - h.angle(x);
        q(we(le({
        }, b), {
            pos: h.add(x).scale(0.5),
            width: L,
            height: z,
            rot: V,
            origin: "center"
        }));
    }
    r(te, "drawLine");
    function ne(h, x, b = {
    }) {
        let L = (h + "").split(""), z = x.qw * x.tex.width, V = x.qh * x.tex.height, K = b.size || V, C = f(K / V).dot(f(b.scale || 1)), P = C.x * z, X = C.y * V, F = 0, Z = X, re = 0, ge = [
            []
        ];
        for (let ie of L)(ie === `\n` || (b.width ? F + P > b.width : !1)) && (Z += X, F = 0, ge.push([])), ie !== `\n` && (ge[ge.length - 1].push(ie), F += P), re = Math.max(re, F);
        b.width && (re = b.width);
        let Fe = [], Ge = f(b.pos || 0), se = Le(b.origin || He).scale(0.5), me = -se.x * P - (se.x + 0.5) * (re - P), Ce = -se.y * X - (se.y + 0.5) * (Z - X);
        return ge.forEach((ie1, Ue)=>{
            let Me = (re - ie1.length * P) * (se.x + 0.5);
            ie1.forEach((Ae, Be)=>{
                let _e = x.map[Ae], je = Be * P, qe = Ue * X;
                _e && Fe.push({
                    tex: x.tex,
                    quad: oe(_e.x, _e.y, x.qw, x.qh),
                    ch: Ae,
                    pos: f(Ge.x + je + me + Me, Ge.y + qe + Ce),
                    color: b.color,
                    origin: b.origin,
                    scale: C,
                    z: b.z
                });
            });
        }), {
            width: re,
            height: Z,
            chars: Fe
        };
    }
    r(ne, "fmtText");
    function ue(h, x, b = {
    }) {
        ce(ne(h, x, b));
    }
    r(ue, "drawText");
    function ce(h) {
        for (let x of h.chars)q({
            tex: x.tex,
            width: x.tex.width * x.quad.w,
            height: x.tex.height * x.quad.h,
            pos: x.pos,
            scale: x.scale,
            color: x.color,
            quad: x.quad,
            origin: "center",
            z: x.z
        });
    }
    r(ce, "drawFmtText");
    function he() {
        return t.drawingBufferWidth / be();
    }
    r(he, "width");
    function pe() {
        return t.drawingBufferHeight / be();
    }
    r(pe, "height");
    function be() {
        var h;
        return (h = e.scale) != null ? h : 1;
    }
    r(be, "scale");
    function Ee() {
        return i.clearColor.clone();
    }
    return r(Ee, "clearColor"), {
        width: he,
        height: pe,
        scale: be,
        makeTex: v,
        makeProgram: A,
        makeFont: R,
        drawTexture: J,
        drawText: ue,
        drawFmtText: ce,
        drawRect: E,
        drawRectStroke: O,
        drawLine: te,
        fmtText: ne,
        frameStart: I,
        frameEnd: j,
        pushTransform: H,
        popTransform: M,
        pushMatrix: S,
        drawCalls: T,
        clearColor: Ee
    };
}
var He, Ie, Ne, yt, on, an, We, Ke, gt = fe(()=>{
    xe();
    bt();
    He = "topleft", Ie = 9, Ne = 65536, yt = 64, on = `\nattribute vec3 a_pos;\nattribute vec2 a_uv;\nattribute vec4 a_color;\n\nvarying vec3 v_pos;\nvarying vec2 v_uv;\nvarying vec4 v_color;\n\nvec4 def_vert() {\n	return vec4(a_pos, 1.0);\n}\n\n{{user}}\n\nvoid main() {\n	vec4 pos = vert(a_pos, a_uv, a_color);\n	v_pos = a_pos;\n	v_uv = a_uv;\n	v_color = a_color;\n	gl_Position = pos;\n}\n`, an = `\nprecision mediump float;\n\nvarying vec3 v_pos;\nvarying vec2 v_uv;\nvarying vec4 v_color;\n\nuniform sampler2D u_tex;\n\nvec4 def_frag() {\n	return v_color * texture2D(u_tex, v_uv);\n}\n\n{{user}}\n\nvoid main() {\n	gl_FragColor = frag(v_pos, v_uv, v_color, u_tex);\n	if (gl_FragColor.a == 0.0) {\n		discard;\n	}\n}\n`, We = `\nvec4 vert(vec3 pos, vec2 uv, vec4 color) {\n	return def_vert();\n}\n`, Ke = `\nvec4 frag(vec3 pos, vec2 uv, vec4 color, sampler2D tex) {\n	return def_frag();\n}\n`;
    r(Le, "originPt");
    r(xt, "gfxInit");
});
function wt(t) {
    return t === "pressed" || t === "rpressed" ? "down" : t === "released" ? "up" : t;
}
function vt(t = {
}) {
    var q, J;
    let e = {
        canvas: (q = t.canvas) != null ? q : (()=>{
            var O;
            let E = document.createElement("canvas");
            return ((O = t.root) != null ? O : document.body).appendChild(E), E;
        })(),
        keyStates: {
        },
        charInputted: [],
        mouseState: "up",
        mousePos: f(0, 0),
        time: 0,
        realTime: 0,
        skipTime: !1,
        dt: 0,
        scale: (J = t.scale) != null ? J : 1,
        isTouch: !1,
        loopID: null,
        stopped: !1,
        fps: 0,
        fpsBuf: [],
        fpsTimer: 0
    }, o = {
        ArrowLeft: "left",
        ArrowRight: "right",
        ArrowUp: "up",
        ArrowDown: "down",
        " ": "space"
    }, i = [
        "space",
        "left",
        "right",
        "up",
        "down",
        "tab",
        "f1",
        "f2",
        "f3",
        "f4",
        "f5",
        "f6",
        "f7",
        "f8",
        "f9",
        "f10",
        "f11"
    ];
    t.fullscreen ? (e.canvas.width = window.innerWidth, e.canvas.height = window.innerHeight) : (e.canvas.width = (t.width || 640) * e.scale, e.canvas.height = (t.height || 480) * e.scale);
    let m = [
        "outline: none",
        "cursor: default"
    ];
    t.crisp && (m.push("image-rendering: pixelated"), m.push("image-rendering: crisp-edges")), e.canvas.style = m.join(";"), e.canvas.setAttribute("tabindex", "0");
    let v = e.canvas.getContext("webgl", {
        antialias: !0,
        depth: !0,
        stencil: !0,
        alpha: !0,
        preserveDrawingBuffer: !0
    });
    e.isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0, e.canvas.addEventListener("mousemove", (E)=>{
        e.mousePos = f(E.offsetX, E.offsetY).scale(1 / e.scale);
    }), e.canvas.addEventListener("mousedown", ()=>{
        e.mouseState = "pressed";
    }), e.canvas.addEventListener("mouseup", ()=>{
        e.mouseState = "released";
    }), e.canvas.addEventListener("touchstart", (E)=>{
        let O = E.touches[0];
        e.mousePos = f(O.clientX, O.clientY).scale(1 / e.scale), e.mouseState = "pressed";
    }), e.canvas.addEventListener("touchmove", (E)=>{
        let O = E.touches[0];
        e.mousePos = f(O.clientX, O.clientY).scale(1 / e.scale);
    }), e.canvas.addEventListener("keydown", (E)=>{
        let O = o[E.key] || E.key.toLowerCase();
        i.includes(O) && E.preventDefault(), O.length === 1 && e.charInputted.push(O), O === "space" && e.charInputted.push(" "), E.repeat ? e.keyStates[O] = "rpressed" : e.keyStates[O] = "pressed";
    }), e.canvas.addEventListener("keyup", (E)=>{
        let O = o[E.key] || E.key.toLowerCase();
        e.keyStates[O] = "released";
    }), e.canvas.focus(), document.addEventListener("visibilitychange", ()=>{
        switch(document.visibilityState){
            case "visible":
                e.skipTime = !0;
                break;
            case "hidden":
                break;
        }
    });
    function A() {
        return e.mousePos.clone();
    }
    r(A, "mousePos");
    function R() {
        return e.mouseState === "pressed";
    }
    r(R, "mouseClicked");
    function $() {
        return e.mouseState === "pressed" || e.mouseState === "down";
    }
    r($, "mouseDown");
    function k() {
        return e.mouseState === "released";
    }
    r(k, "mouseReleased");
    function I(E) {
        return e.keyStates[E] === "pressed";
    }
    r(I, "keyPressed");
    function j(E) {
        return e.keyStates[E] === "pressed" || e.keyStates[E] === "rpressed";
    }
    r(j, "keyPressedRep");
    function T(E) {
        return e.keyStates[E] === "pressed" || e.keyStates[E] === "rpressed" || e.keyStates[E] === "down";
    }
    r(T, "keyDown");
    function w(E) {
        return e.keyStates[E] === "released";
    }
    r(w, "keyReleased");
    function S() {
        return [
            ...e.charInputted
        ];
    }
    r(S, "charInputted");
    function U() {
        return e.dt;
    }
    r(U, "dt");
    function B() {
        return e.time;
    }
    r(B, "time");
    function _() {
        return e.fps;
    }
    r(_, "fps");
    function G() {
        return e.canvas.toDataURL();
    }
    r(G, "screenshot");
    function y(E) {
        return E && (e.canvas.style.cursor = E != null ? E : "default"), e.canvas.style.cursor;
    }
    r(y, "cursor");
    function H(E) {
        let O = r((te)=>{
            let ne = te / 1000, ue = ne - e.realTime;
            e.realTime = ne, e.skipTime || (e.dt = ue, e.time += e.dt, e.fpsBuf.push(1 / e.dt), e.fpsTimer += e.dt, e.fpsTimer >= 1 && (e.fpsTimer = 0, e.fps = Math.round(e.fpsBuf.reduce((ce, he)=>ce + he
            ) / e.fpsBuf.length), e.fpsBuf = [])), e.skipTime = !1, E();
            for(let ce in e.keyStates)e.keyStates[ce] = wt(e.keyStates[ce]);
            e.mouseState = wt(e.mouseState), e.charInputted = [], e.stopped || (e.loopID = requestAnimationFrame(O));
        }, "frame");
        e.loopID = requestAnimationFrame(O);
    }
    r(H, "run");
    function M() {
        cancelAnimationFrame(e.loopID), e.stopped = !0;
    }
    return r(M, "quit"), {
        gl: v,
        mousePos: A,
        keyDown: T,
        keyPressed: I,
        keyPressedRep: j,
        keyReleased: w,
        mouseDown: $,
        mouseClicked: R,
        mouseReleased: k,
        charInputted: S,
        cursor: y,
        dt: U,
        time: B,
        fps: _,
        screenshot: G,
        run: H,
        quit: M
    };
}
var Rt = fe(()=>{
    xe();
    r(wt, "processBtnState");
    r(vt, "appInit");
});
function Et() {
    let t = (()=>{
        let m = new (window.AudioContext || window.webkitAudioContext), v = m.createGain(), A = v;
        return A.connect(m.destination), {
            ctx: m,
            gainNode: v,
            masterNode: A
        };
    })();
    function e(m) {
        return m !== void 0 && (t.gainNode.gain.value = ae(m, Tt, St)), t.gainNode.gain.value;
    }
    r(e, "volume");
    function o(m, v = {
        loop: !1,
        volume: 1,
        speed: 1,
        detune: 0,
        seek: 0
    }) {
        var w;
        let A = !1, R = t.ctx.createBufferSource();
        R.buffer = m, R.loop = !!v.loop;
        let $ = t.ctx.createGain();
        R.connect($), $.connect(t.masterNode);
        let k = (w = v.seek) != null ? w : 0;
        R.start(0, k);
        let I = t.ctx.currentTime - k, j = null, T = {
            stop () {
                A || (this.pause(), I = t.ctx.currentTime);
            },
            play (S) {
                if (!A) return;
                let U = R;
                R = t.ctx.createBufferSource(), R.buffer = U.buffer, R.loop = U.loop, R.playbackRate.value = U.playbackRate.value, R.detune && (R.detune.value = U.detune.value), R.connect($);
                let B = S != null ? S : this.time();
                R.start(0, B), I = t.ctx.currentTime - B, A = !1, j = null;
            },
            pause () {
                A || (R.stop(), A = !0, j = t.ctx.currentTime);
            },
            paused () {
                return A;
            },
            stopped () {
                return A;
            },
            speed (S) {
                return S !== void 0 && (R.playbackRate.value = ae(S, un, cn)), R.playbackRate.value;
            },
            detune (S) {
                return R.detune ? (S !== void 0 && (R.detune.value = ae(S, dn, fn)), R.detune.value) : 0;
            },
            volume (S) {
                return S !== void 0 && ($.gain.value = ae(S, Tt, St)), $.gain.value;
            },
            loop () {
                R.loop = !0;
            },
            unloop () {
                R.loop = !1;
            },
            duration () {
                return m.duration;
            },
            time () {
                return A ? j - I : t.ctx.currentTime - I;
            }
        };
        return T.speed(v.speed), T.detune(v.detune), T.volume(v.volume), T;
    }
    r(o, "play");
    function i() {
        return t.ctx;
    }
    return r(i, "ctx"), {
        ctx: i,
        volume: e,
        play: o
    };
}
var Tt, St, un, cn, dn, fn, Ct = fe(()=>{
    xe();
    Tt = 0, St = 3, un = 0, cn = 3, dn = -1200, fn = 1200;
    r(Et, "audioInit");
});
var At, _t = fe(()=>{
    At = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAvgAAAAICAYAAACML4vTAAAAAXNSR0IArs4c6QAABo1JREFUeJzdW9uO5SgMJKv9/1/OPnQnDabKVQb6zGgtjeYkvmJsYwh9tQLc931//7yu63retdba+/4hTZ6ZDMQ3wHVdPe1kXk/60He2D/J7HLMhGyOwHQKji/o/BYmv40DecRq+cfgr8l8dhBfRLPF3v6F9Cu/ObwFPYxRBFptE7mA/wQ2yWMwI/1r+y3Bq/h4H3TwJ3fl16xcz4UfQPB+oplF9QJ7id+SjMVjz/wf5e5rK+hKfB9+a86PsZTIm+7P6942jufsqSvg7/END5WSg6ojLt7uurcjL6v8pfQ4doinIL9v+f4HTMfQ3gopR5gOQ+6jviPj7EfLvqQGsQFiXb/B7KMBGc/rQ3x1ONuHmBmOQfd93XwDVguPI/3Uw/fc8Dz5s4/xMogU/xScNKILJb4W5Q/YyXtt+IWcyF+GzMajY7ehZbCK5vf2sGczmJ+J6O6J8pT8dB5HPwPU706/knsjfVRlxvhje0Zn5H+F/m/+kf6uA1oxqPVD1Jeqj+kHuRr5x0ZzzU8nJANrCalDS5A54xV9Ynyd+p/6bNXSiBfY5Dk1pkPyObzI0s10ceFr+3+FXsMq/qk+BM97TusU6bIvp+Flf1ufuy/OJBh817s/vlcKOaOHgRBOeyu0nppt4uIEA+gcboLLv96oIu18IFLhfSRooMh19hsvkKyNjkCo6R+fXC3ya/ddAdjrekxH2i8VmiH23oGTNYy+n2iBHyPhYjtWV8IJtyz38BW6a42JMKuJtn30IfgJT+PdkziayaP1W+OpX6J6HyJ+ac8MXaJEvNfnGGheVow34neAn/tag30aByRfI5PDBlZ9tzNghHuJDMnZpGO37rMam/L/Jj2w6wY/8TH1gPCNfQ3zxAJTZ3wPKkS9EIS9bm3OfbDonof9YWgw7gCJ0uqF+390/JIs1QZE+yhjkKOcifMKDdMX3kYbxKB3xn8fsNZEPPm2SBQ7KD/OkkgXZfYV/PV/U/+rok0IswDH+HDyCmAcuXs1LHP8gBzTyd487dIrgAPPfC489wK6K/GwjouYoo6nmZQXUHCtA9RThd+yX87fIn9X3T8Kkl2yC3zlS+NZK9XUClruFjU3093IcBFui8U79Zfg74Flj7dRHJJ/1Hq58xAs3JAdgNb9QDxHB9f8JfgSV+c96QaVnCcRhzx3+r+hXY9qtq1HmKy+up3Ft3T7BN06gWVDGZhI5JL4b6Mh9yolu5T6iukMN7M4KQqWZ/SKYP9+lYJyAOYtPveMy5IPdZja//XPVnkw+tBHdPe35w8kWs3UX+tjNrtggvpWvM3H8Lihi5f/dE1kVD068PL7O+Fc2z65eNseuDEfHKoxFpx4fjm9bS+LjFyEu4F8P4gras1geqq8QzK9wlJ3IWYJk3TtS8zbvV8MN2qGvaxQOXt3YafKe2NjN8U8A2hzGDQpdg37xqzurObB3dOY9uyYG8nG37pXjp9rg7wQm+v0A201GvGqUd4KfFlejgUobxCDjixAXod3NiWVfRaa6YsT0hitIWWAqXyr+JdhYBDJbSg32Y8fOFZvVDdziBq/cABPY8WEKpxf31fgnMM2xq681u9HYagAM/6mxDmM0eXaBNhCELgKt36Z+Vf9GYoDLrsg496TZ8yFg629dEL+D7sDq4FB8bIF7xTaxI2X8Q9dJWf7Y/ks2iPYGf2HsWf5HnOovUH2m4896Q9JDDs+rV7TduKs2+EcLNdnhvM/f+MqCEp8tO437h9C2YEP2nL7/5WR2G79sgYwGqo1ElJHu4F9msAkC84Lscxd4Bg5/ansGhVOAKf7MAuBu4NC8seJ1mQ0lku/okM090M/iS8HuAq/ivxJ/To1RMrDg/G8OTuVHub4e1j/wg9xBuF5fbPJVTlTsdOaPrmdiHVqK3UN/w+Xmz2r+K/mQf6G5RnauwDuHm80oGwCLkZMbHLYB/nkYm9Md/yF6NDa3SR9sNPM/0rD+cpgf8ws+qifOGN35XK2bHznBj3xWEKHTy+QT5HYiGJ83kW3lP5ZI4MTmKU1a9rcFbNyFT76OzVC+olP2tQYLEJNfGmO2iVs4AU/nd/PzejrHiM58z/BWvjnzs+J7QEvxzlcQgFupJxXfVuSjuFP11NFp4bI76IVnpZ/a7cxfRkNiIxtL9n41f1yayhrngmrG5LwYdWkp/x35h9Yg1WC6vlYNuStvKeZW+h9zfR/eIboHxD12Bml87PYgiCZZP5Z81fI5lrm5k0fxfWVj+x9lSgjp7YOOoAAAAABJRU5ErkJggg==";
});
function kt(t) {
    let e = new Image;
    return e.src = t, e.crossOrigin = "anonymous", new Promise((o, i)=>{
        e.onload = ()=>{
            o(e);
        }, e.onerror = ()=>{
            i(`failed to load ${t}`);
        };
    });
}
function Dt(t) {
    return t.startsWith("data:");
}
function Pt(t, e, o = {
}) {
    let i = {
        lastLoaderID: 0,
        loadRoot: "",
        loaders: {
        },
        sprites: {
        },
        sounds: {
        },
        fonts: {
        },
        shaders: {
        }
    };
    function m(T) {
        var S;
        let w = i.lastLoaderID;
        i.loaders[w] = !1, i.lastLoaderID++, T.catch((S = o.errHandler) != null ? S : console.error).finally(()=>{
            i.loaders[w] = !0;
        });
    }
    r(m, "addLoader");
    function v() {
        let T = 0, w = 0;
        for(let S in i.loaders)T += 1, i.loaders[S] && (w += 1);
        return w / T;
    }
    r(v, "loadProgress");
    function A(T) {
        return T && (i.loadRoot = T), i.loadRoot;
    }
    r(A, "loadRoot");
    function R(T, w, S, U, B = mn) {
        let _ = new Promise((G, y)=>{
            let H = Dt(w) ? w : i.loadRoot + w;
            kt(H).then((M)=>{
                let q = t.makeFont(t.makeTex(M), S, U, B);
                i.fonts[T] = q, G(q);
            }).catch(y);
        });
        return m(_), _;
    }
    r(R, "loadFont");
    function $(T, w, S = {
        sliceX: 1,
        sliceY: 1,
        anims: {
        }
    }) {
        function U(_, G, y = {
            sliceX: 1,
            sliceY: 1,
            gridWidth: 0,
            gridHeight: 0,
            anims: {
            }
        }) {
            let H = [], M = t.makeTex(G), q = y.sliceX || M.width / (y.gridWidth || M.width), J = y.sliceY || M.height / (y.gridHeight || M.height), E = 1 / q, O = 1 / J;
            for(let ne = 0; ne < J; ne++)for(let ue = 0; ue < q; ue++)H.push(oe(ue * E, ne * O, E, O));
            let te = {
                tex: M,
                frames: H,
                anims: y.anims || {
                }
            };
            return i.sprites[_] = te, te;
        }
        r(U, "loadRawSprite");
        let B = new Promise((_, G)=>{
            if (!w) return G(`expected sprite src for "${T}"`);
            if (typeof w == "string") {
                let y = Dt(w) ? w : i.loadRoot + w;
                kt(y).then((H)=>{
                    _(U(T, H, S));
                }).catch(G);
            } else _(U(T, w, S));
        });
        return m(B), B;
    }
    r($, "loadSprite");
    function k(T, w, S, U = !1) {
        function B(G, y, H) {
            let M = t.makeProgram(y, H);
            return i.shaders[G] = M, M;
        }
        r(B, "loadRawShader");
        let _ = new Promise((G, y)=>{
            if (!w && !S) return y("no shader");
            function H(M) {
                return M ? fetch(i.loadRoot + M).then((q)=>{
                    if (q.ok) return q.text();
                    throw new Error(`failed to load ${M}`);
                }).catch(y) : new Promise((q)=>q(null)
                );
            }
            if (r(H, "resolveUrl"), U) Promise.all([
                H(w),
                H(S)
            ]).then(([M, q])=>{
                G(B(T, M, q));
            }).catch(y);
            else try {
                G(B(T, w, S));
            } catch (M) {
                y(M);
            }
        });
        return m(_), _;
    }
    r(k, "loadShader");
    function I(T, w) {
        let S = i.loadRoot + w, U = new Promise((B, _)=>{
            if (!w) return _(`expected sound src for "${T}"`);
            typeof w == "string" && fetch(S).then((G)=>{
                if (G.ok) return G.arrayBuffer();
                throw new Error(`failed to load ${S}`);
            }).then((G)=>new Promise((y, H)=>{
                    e.ctx().decodeAudioData(G, y, H);
                })
            ).then((G)=>{
                i.sounds[T] = G, B(G);
            }).catch(_);
        });
        return m(U), U;
    }
    r(I, "loadSound");
    function j() {
        return i.fonts[Se];
    }
    return r(j, "defFont"), R(Se, At, 8, 8), {
        loadRoot: A,
        loadSprite: $,
        loadSound: I,
        loadFont: R,
        loadShader: k,
        loadProgress: v,
        addLoader: m,
        defFont: j,
        sprites: i.sprites,
        fonts: i.fonts,
        sounds: i.sounds,
        shaders: i.shaders
    };
}
var mn, Se, It = fe(()=>{
    xe();
    _t();
    mn = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~", Se = "unscii";
    r(kt, "loadImg");
    r(Dt, "isDataUrl");
    r(Pt, "assetsInit");
});
function Lt(t, e, o = {
    max: 8
}) {
    var k;
    let i = [], m = (k = o.max) != null ? k : 8;
    function v() {
        i.length > m && (i = i.slice(0, m));
        let I = f(0, t.height());
        i.forEach((j, T)=>{
            let w = ve(T, 0, m, 1, 0.5), S = ve(T, 0, m, 0.8, 0.2), U = (()=>{
                switch(j.type){
                    case "info":
                        return Y(1, 1, 1, w);
                    case "error":
                        return Y(1, 0, 0.5, w);
                }
            })(), B = t.fmtText(j.msg, e.defFont(), {
                pos: I,
                origin: "botleft",
                color: U,
                size: ln / t.scale(),
                width: t.width()
            });
            t.drawRect(I, B.width, B.height, {
                origin: "botleft",
                color: Y(0, 0, 0, S)
            }), t.drawFmtText(B), I.y -= B.height;
        });
    }
    r(v, "draw");
    function A(I) {
        console.error(I), i.unshift({
            type: "error",
            msg: I
        });
    }
    r(A, "error");
    function R(I) {
        i.unshift({
            type: "info",
            msg: I
        });
    }
    r(R, "info");
    function $() {
        i = [];
    }
    return r($, "clear"), {
        info: R,
        error: A,
        draw: v,
        clear: $
    };
}
var ln, Ft = fe(()=>{
    xe();
    ln = 16;
    r(Lt, "loggerInit");
});
function Gt(t) {
    let e = {
    }, o = [], i = null;
    function m() {
        return i !== null && i.readyState === 1;
    }
    r(m, "connected");
    function v() {
        let k = new WebSocket(t);
        return new Promise((I, j)=>{
            k.onopen = ()=>{
                I(k), i = k;
                for (let T of o)k.send(T);
            }, k.onerror = ()=>{
                j(`failed to connect to ${t}`);
            }, k.onmessage = (T)=>{
                let w = JSON.parse(T.data);
                if (e[w.type]) for (let S of e[w.type])S(w.data, w.id);
            };
        });
    }
    r(v, "connect");
    function A(k, I) {
        e[k] || (e[k] = []), e[k].push(I);
    }
    r(A, "recv");
    function R(k, I) {
        let j = JSON.stringify({
            type: k,
            data: I
        });
        i ? i.send(j) : o.push(j);
    }
    r(R, "send");
    function $() {
        i && i.close();
    }
    return r($, "close"), {
        connect: v,
        close: $,
        connected: m,
        recv: A,
        send: R
    };
}
var Mt = fe(()=>{
    r(Gt, "netInit");
});
var pn = nn((Un, qt)=>{
    xe();
    gt();
    Rt();
    Ct();
    It();
    Ft();
    Mt();
    qt.exports = (t = {
        width: 640,
        height: 480,
        scale: 1,
        fullscreen: !1,
        debug: !1,
        crisp: !1,
        canvas: null,
        connect: null,
        logMax: 8,
        root: document.body
    })=>{
        let e = vt({
            width: t.width,
            height: t.height,
            scale: t.scale,
            fullscreen: t.fullscreen,
            crisp: t.crisp,
            canvas: t.canvas,
            root: t.root
        }), o = xt(e.gl, {
            clearColor: t.clearColor ? Y(t.clearColor) : void 0,
            scale: t.scale,
            texFilter: t.texFilter
        }), i = Et(), m = Pt(o, i, {
            errHandler: (s)=>{
                v.error(s);
            }
        }), v = Lt(o, m, {
            max: t.logMax
        }), A = (()=>t.connect ? Gt(t.connect) : null
        )();
        function R(s, n) {
            if (!A) throw new Error("not connected to any websockets");
            A.recv(s, (a, d)=>{
                try {
                    n(a, d);
                } catch (u) {
                    v.error(u);
                }
            });
        }
        r(R, "recv");
        function $(s, n) {
            if (!A) throw new Error("not connected to any websockets");
            A.send(s, n);
        }
        r($, "send");
        function k() {
            return e.dt() * W.timeScale;
        }
        r(k, "dt");
        function I(s, n = {
        }) {
            let a = m.sounds[s];
            if (!a) throw new Error(`sound not found: "${s}"`);
            return i.play(a, n);
        }
        r(I, "play");
        function j(s) {
            var a;
            let n = y();
            return !((a = n.layers[s != null ? s : n.defLayer]) == null ? void 0 : a.noCam);
        }
        r(j, "isCamLayer");
        function T(s) {
            return j(s) ? y().cam.mpos : e.mousePos();
        }
        r(T, "mousePos");
        function w(s, n = {
        }) {
            var u;
            let a = (()=>typeof s == "string" ? m.sprites[s] : s
            )();
            if (!a) throw new Error(`sprite not found: "${s}"`);
            let d = a.frames[(u = n.frame) != null ? u : 0];
            o.drawTexture(a.tex, we(le({
            }, n), {
                quad: d
            }));
        }
        r(w, "drawSprite");
        function S(s, n = {
        }) {
            var u;
            let a = (u = n.font) != null ? u : Se, d = m.fonts[a];
            if (!d) throw new Error(`font not found: ${a}`);
            o.drawText(s, d, n);
        }
        r(S, "drawText");
        let U = 980, B = "topleft", _ = {
            loaded: !1,
            scenes: {
            },
            curScene: null,
            nextScene: null
        };
        function G(s, n) {
            _.scenes[s] = {
                init: n,
                initialized: !1,
                events: {
                    add: [],
                    update: [],
                    draw: [],
                    destroy: [],
                    keyDown: [],
                    keyPress: [],
                    keyPressRep: [],
                    keyRelease: [],
                    mouseClick: [],
                    mouseRelease: [],
                    mouseDown: [],
                    charInput: []
                },
                action: [],
                render: [],
                objs: new Map,
                lastObjID: 0,
                timers: {
                },
                lastTimerID: 0,
                cam: {
                    pos: f(o.width() / 2, o.height() / 2),
                    scale: f(1, 1),
                    angle: 0,
                    shake: 0,
                    mpos: f(0),
                    matrix: ee()
                },
                layers: {
                },
                defLayer: null,
                gravity: U,
                data: {
                }
            };
        }
        r(G, "scene");
        function y() {
            return _.scenes[_.curScene];
        }
        r(y, "curScene");
        function H() {
            return y().data;
        }
        r(H, "sceneData");
        function M() {
            X("`", ()=>{
                W.showLog = !W.showLog, v.info(`show log: ${W.showLog ? "on" : "off"}`);
            }), X("f1", ()=>{
                W.inspect = !W.inspect, v.info(`inspect: ${W.inspect ? "on" : "off"}`);
            }), X("f2", ()=>{
                W.clearLog();
            }), X("f8", ()=>{
                W.paused = !W.paused, v.info(`${W.paused ? "paused" : "unpaused"}`);
            }), X("f7", ()=>{
                W.timeScale = ae(W.timeScale - 0.2, 0, 2), v.info(`time scale: ${W.timeScale.toFixed(1)}`);
            }), X("f9", ()=>{
                W.timeScale = ae(W.timeScale + 0.2, 0, 2), v.info(`time scale: ${W.timeScale.toFixed(1)}`);
            }), X("f10", ()=>{
                W.stepFrame(), v.info("stepped frame");
            });
        }
        r(M, "regDebugInputs");
        function q(s, ...n) {
            _.nextScene = {
                name: s,
                args: [
                    ...n
                ]
            };
        }
        r(q, "go");
        function J(s, ...n) {
            E(s), _.curScene = s;
            let a = _.scenes[s];
            if (!a) throw new Error(`scene not found: '${s}'`);
            if (!a.initialized) {
                try {
                    a.init(...n);
                } catch (d) {
                    v.error(d.stack);
                }
                t.debug && M(), a.initialized = !0;
            }
        }
        r(J, "goSync");
        function E(s) {
            if (!_.scenes[s]) throw new Error(`scene not found: '${s}'`);
            G(s, _.scenes[s].init);
        }
        r(E, "reload");
        function O(s, n) {
            let a = y();
            !a || (s.forEach((d, u)=>{
                a.layers[d] = {
                    alpha: 1,
                    order: u + 1,
                    noCam: !1
                };
            }), n && (a.defLayer = n));
        }
        r(O, "layers");
        function te(...s) {
            let n = y().cam;
            return s.length > 0 && (n.pos = f(...s)), n.pos.clone();
        }
        r(te, "camPos");
        function ne(...s) {
            let n = y().cam;
            return s.length > 0 && (n.scale = f(...s)), n.scale.clone();
        }
        r(ne, "camScale");
        function ue(s) {
            let n = y().cam;
            return s !== void 0 && (n.angle = s), n.angle;
        }
        r(ue, "camRot");
        function ce(s) {
            let n = y().cam;
            n.shake = s;
        }
        r(ce, "camShake");
        function he(s) {
            let n = y();
            s.forEach((a)=>{
                n.layers[a] && (n.layers[a].noCam = !0);
            });
        }
        r(he, "camIgnore");
        function pe(s) {
            let n = {
                hidden: !1,
                paused: !1,
                _tags: [],
                _id: null,
                _events: {
                    add: [],
                    update: [],
                    draw: [],
                    destroy: [],
                    inspect: []
                },
                use (u) {
                    if (u === void 0) return;
                    let p = typeof u;
                    if (p === "string") {
                        this._tags.push(u);
                        return;
                    }
                    if (p !== "object") throw new Error(`invalid comp type: ${p}`);
                    if (Array.isArray(u)) {
                        for (let c of u)this.use(c);
                        return;
                    }
                    for(let c in u){
                        if (typeof u[c] == "function") {
                            this._events[c] ? this._events[c].push(u[c].bind(this)) : this[c] = u[c].bind(this);
                            continue;
                        }
                        this[c] = u[c];
                    }
                },
                exists () {
                    return this._id !== void 0;
                },
                is (u) {
                    if (u === "*") return !0;
                    if (Array.isArray(u)) {
                        for (let p of u)if (!this._tags.includes(p)) return !1;
                        return !0;
                    }
                    return this._tags.includes(u);
                },
                on (u, p) {
                    this._events[u] || (this._events[u] = []), this._events[u].push(p);
                },
                action (u) {
                    this.on("update", u);
                },
                trigger (u, ...p) {
                    if (this._events[u]) for (let g of this._events[u])g.call(this, ...p);
                    let l = y().events[u];
                    if (l) for (let g1 of l)this.is(g1.tag) && g1.cb(this, ...p);
                },
                rmTag (u) {
                    let p = this._tags.indexOf(u);
                    p > -1 && this._tags.splice(p, 1);
                }
            };
            n.use(s);
            let a = y(), d = a.lastObjID++;
            a.objs.set(d, n), n._id = d, n.trigger("add");
            for (let u of a.events.add)n.is(u.tag) && u.cb(n);
            return n;
        }
        r(pe, "add");
        function be(s) {
            if (!s.exists()) return;
            let n = y();
            n.objs.delete(s._id);
            let a = n.lastObjID++;
            return n.objs.set(a, s), s._id = a, s;
        }
        r(be, "readd");
        function Ee(s, n, a) {
            let d = y();
            d.events[s] || (d.events[s] = []), d.events[s].push({
                tag: n,
                cb: a
            });
        }
        r(Ee, "on");
        function h(s, n) {
            typeof s == "function" && n === void 0 ? y().action.push(s) : typeof s == "string" && Ee("update", s, n);
        }
        r(h, "action");
        function x(s, n) {
            typeof s == "function" && n === void 0 ? y().render.push(s) : typeof s == "string" && Ee("update", s, n);
        }
        r(x, "render");
        function b(s, n, a) {
            h(s, (d)=>{
                d._checkCollisions(n, (u)=>{
                    a(d, u);
                });
            });
        }
        r(b, "collides");
        function L(s, n, a) {
            h(s, (d)=>{
                d._checkOverlaps(n, (u)=>{
                    a(d, u);
                });
            });
        }
        r(L, "overlaps");
        function z(s, n) {
            h(s, (a)=>{
                a.isClicked() && n(a);
            });
        }
        r(z, "clicks");
        function V(s, n) {
            return new Promise((a)=>{
                let d = y();
                d.timers[d.lastTimerID++] = {
                    time: s,
                    cb: ()=>{
                        n && n(), a();
                    }
                };
            });
        }
        r(V, "wait");
        function K(s, n) {
            let a = !1, d = r(()=>{
                a || (n(), V(s, d));
            }, "newF");
            return d(), {
                stop () {
                    a = !0;
                }
            };
        }
        r(K, "loop");
        function C(s, n, a) {
            if (Array.isArray(n)) for (let d of n)C(s, d, a);
            else y().events[s].push({
                key: n,
                cb: a
            });
        }
        r(C, "pushKeyEvent");
        function P(s, n) {
            C("keyDown", s, n);
        }
        r(P, "keyDown");
        function X(s, n) {
            C("keyPress", s, n);
        }
        r(X, "keyPress");
        function F(s, n) {
            C("keyPressRep", s, n);
        }
        r(F, "keyPressRep");
        function Z(s, n) {
            C("keyRelease", s, n);
        }
        r(Z, "keyRelease");
        function re(s) {
            y().events.charInput.push({
                cb: s
            });
        }
        r(re, "charInput");
        function ge(s) {
            y().events.mouseDown.push({
                cb: s
            });
        }
        r(ge, "mouseDown");
        function Fe(s) {
            y().events.mouseClick.push({
                cb: s
            });
        }
        r(Fe, "mouseClick");
        function Ge(s) {
            y().events.mouseRelease.push({
                cb: s
            });
        }
        r(Ge, "mouseRelease");
        function se(s) {
            let n = y(), a = [
                ...n.objs.values()
            ].sort((d, u)=>{
                var l, g, D, N, Q, de;
                let p = (D = (g = n.layers[(l = d.layer) != null ? l : n.defLayer]) == null ? void 0 : g.order) != null ? D : 0, c = (de = (Q = n.layers[(N = u.layer) != null ? N : n.defLayer]) == null ? void 0 : Q.order) != null ? de : 0;
                return p - c;
            });
            return s ? a.filter((d)=>d.is(s)
            ) : a;
        }
        r(se, "get");
        function me(s, n) {
            typeof s == "function" && n === void 0 ? se().forEach(s) : typeof s == "string" && se(s).forEach(n);
        }
        r(me, "every");
        function Ce(s, n) {
            typeof s == "function" && n === void 0 ? se().reverse().forEach(s) : typeof s == "string" && se(s).reverse().forEach(n);
        }
        r(Ce, "revery");
        function ie(s) {
            if (!s.exists()) return;
            let n = y();
            !n || (s.trigger("destroy"), n.objs.delete(s._id), delete s._id);
        }
        r(ie, "destroy");
        function Ue(s) {
            me(s, (n)=>{
                ie(n);
            });
        }
        r(Ue, "destroyAll");
        function Me(s) {
            let n = y();
            return s !== void 0 && (n.gravity = s), n.gravity;
        }
        r(Me, "gravity");
        function Ae(s) {
            let n = y();
            if (!n) throw new Error(`scene not found: '${_.curScene}'`);
            let a = s || !W.paused;
            if (a) for(let c in n.timers){
                let l = n.timers[c];
                l.time -= k(), l.time <= 0 && (l.cb(), delete n.timers[c]);
            }
            if (Ce((c1)=>{
                !c1.paused && a && c1.trigger("update");
            }), a) for (let c1 of n.action)c1();
            let d = f(o.width(), o.height()), u = n.cam, p = ot(Pe(0, Math.PI * 2)).scale(u.shake);
            u.shake = De(u.shake, 0, 5 * k()), u.matrix = ee().translate(d.scale(0.5)).scale(u.scale).rotateZ(u.angle).translate(d.scale(-0.5)).translate(u.pos.scale(-1).add(d.scale(0.5)).add(p)), u.mpos = u.matrix.invert().multVec2(e.mousePos()), me((c2)=>{
                c2.hidden || (o.pushTransform(), j(c2.layer) && o.pushMatrix(u.matrix), c2.trigger("draw"), o.popTransform());
            });
            for (let c2 of n.render)c2();
        }
        r(Ae, "gameFrame");
        function Be() {
            let s = y();
            for (let n of s.events.charInput)e.charInputted().forEach(n.cb);
            for (let n1 of s.events.keyDown)e.keyDown(n1.key) && n1.cb();
            for (let n2 of s.events.keyPress)e.keyPressed(n2.key) && n2.cb();
            for (let n3 of s.events.keyPressRep)e.keyPressedRep(n3.key) && n3.cb();
            for (let n4 of s.events.keyRelease)e.keyReleased(n4.key) && n4.cb();
            for (let n5 of s.events.mouseDown)e.mouseDown() && n5.cb();
            for (let n6 of s.events.mouseClick)e.mouseClicked() && n6.cb();
            for (let n7 of s.events.mouseRelease)e.mouseReleased() && n7.cb();
        }
        r(Be, "handleEvents");
        function _e() {
            var c;
            let s = y(), n = null, a = m.defFont(), d = Y((c = t.inspectColor) != null ? c : [
                0,
                1,
                1,
                1
            ]);
            function u(l, g, D) {
                let N = f(4).scale(1 / D), Q = o.fmtText(g, a, {
                    size: 12 / D,
                    pos: l.add(f(N.x, N.y))
                });
                o.drawRect(l, Q.width + N.x * 2, Q.height + N.x * 2, {
                    color: Y(0, 0, 0, 1)
                }), o.drawFmtText(Q);
            }
            r(u, "drawInspectTxt");
            function p(l, g) {
                let D = j(l.layer), N = o.scale() * (D ? (s.cam.scale.x + s.cam.scale.y) / 2 : 1);
                D && (o.pushTransform(), o.pushMatrix(s.cam.matrix)), g(N), D && o.popTransform();
            }
            r(p, "drawObj"), Ce((l)=>{
                !l.area || l.hidden || p(l, (g)=>{
                    n || l.isHovered() && (n = l);
                    let D = (n === l ? 6 : 2) / g, N = l._worldArea(), Q = N.p2.x - N.p1.x, de = N.p2.y - N.p1.y;
                    o.drawRectStroke(N.p1, Q, de, {
                        width: D,
                        color: d
                    });
                });
            }), n && p(n, (l)=>{
                let g = T(n.layer), D = [];
                for (let N of n._tags)D.push(`"${N}"`);
                for (let N1 of n._events.inspect){
                    let Q = N1();
                    for(let de in Q)D.push(`${de}: ${Q[de]}`);
                }
                u(g, D.join(`\n`), l);
            }), u(f(0), e.fps() + "", o.scale());
        }
        r(_e, "drawInspect");
        function je(s, ...n) {
            e.run(()=>{
                if (o.frameStart(), _.loaded) {
                    try {
                        if (!y()) throw new Error(`scene not found: '${_.curScene}'`);
                        Be(), Ae(), W.inspect && _e();
                    } catch (a) {
                        v.error(a.stack), e.quit();
                    }
                    W.showLog && v.draw(), _.nextScene && (J.apply(null, [
                        _.nextScene.name,
                        ..._.nextScene.args
                    ]), _.nextScene = null);
                } else {
                    let a = m.loadProgress();
                    if (a === 1) _.loaded = !0, J(s, ...n), A && A.connect().catch(v.error);
                    else {
                        let d = o.width() / 2, u = 24 / o.scale(), p = f(o.width() / 2, o.height() / 2).sub(f(d / 2, u / 2));
                        o.drawRect(f(0), o.width(), o.height(), {
                            color: Ve(0, 0, 0)
                        }), o.drawRectStroke(p, d, u, {
                            width: 4 / o.scale()
                        }), o.drawRect(p, d * a, u);
                    }
                }
                o.frameEnd();
            });
        }
        r(je, "start");
        function qe(...s) {
            return {
                pos: f(...s),
                move (...n) {
                    let a = f(...n), d = a.x * k(), u = a.y * k();
                    this.pos.x += d, this.pos.y += u;
                },
                inspect () {
                    return {
                        pos: `(${~~this.pos.x}, ${~~this.pos.y})`
                    };
                }
            };
        }
        r(qe, "pos");
        function Ze(...s) {
            return s.length === 0 ? Ze(1) : {
                scale: f(...s),
                flipX (n) {
                    this.scale.x = Math.sign(n) * Math.abs(this.scale.x);
                },
                flipY (n) {
                    this.scale.y = Math.sign(n) * Math.abs(this.scale.y);
                }
            };
        }
        r(Ze, "scale");
        function Ot(s) {
            return {
                angle: s != null ? s : 0
            };
        }
        r(Ot, "rotate");
        function Vt(...s) {
            return {
                color: Y(...s)
            };
        }
        r(Vt, "color");
        function Nt(s) {
            return {
                origin: s
            };
        }
        r(Nt, "origin");
        function Ut(s) {
            return {
                layer: s,
                inspect () {
                    var a;
                    let n = y();
                    return {
                        layer: (a = this.layer) != null ? a : n.defLayer
                    };
                }
            };
        }
        r(Ut, "layer");
        function ze(s, n) {
            var d, u;
            let a = y();
            return ((d = s.layer) != null ? d : a.defLayer) === ((u = n.layer) != null ? u : a.defLayer);
        }
        r(ze, "isSameLayer");
        function Qe(s, n) {
            let a = {
            }, d = {
            };
            return {
                area: {
                    p1: s,
                    p2: n
                },
                areaWidth () {
                    let { p1: u , p2: p  } = this._worldArea();
                    return p.x - u.x;
                },
                areaHeight () {
                    let { p1: u , p2: p  } = this._worldArea();
                    return p.y - u.y;
                },
                isClicked () {
                    return e.mouseClicked() && this.isHovered();
                },
                isHovered () {
                    return this.hasPt(T(this.layer));
                },
                isCollided (u) {
                    if (!u.area || !ze(this, u)) return !1;
                    let p = this._worldArea(), c = u._worldArea();
                    return Ye(p, c);
                },
                isOverlapped (u) {
                    if (!u.area || !ze(this, u)) return !1;
                    let p = this._worldArea(), c = u._worldArea();
                    return lt(p, c);
                },
                clicks (u) {
                    this.action(()=>{
                        this.isClicked() && u();
                    });
                },
                hovers (u) {
                    this.action(()=>{
                        this.isHovered() && u();
                    });
                },
                collides (u, p) {
                    this.action(()=>{
                        this._checkCollisions(u, p);
                    });
                },
                overlaps (u, p) {
                    this.action(()=>{
                        this._checkOverlaps(u, p);
                    });
                },
                hasPt (u) {
                    let p = this._worldArea();
                    return pt({
                        p1: p.p1,
                        p2: p.p2
                    }, u);
                },
                resolve () {
                    let u = [];
                    return me((p)=>{
                        if (p === this || !p.solid || !p.area || !ze(this, p)) return;
                        let c = this._worldArea(), l = p._worldArea();
                        if (!Ye(c, l)) return;
                        let g = c.p2.x - l.p1.x, D = l.p2.x - c.p1.x, N = c.p2.y - l.p1.y, Q = l.p2.y - c.p1.y, de = Math.min(g, D, N, Q), Zt = (()=>{
                            switch(de){
                                case g:
                                    return this.pos.x -= g, "right";
                                case D:
                                    return this.pos.x += D, "left";
                                case N:
                                    return this.pos.y -= N, "bottom";
                                case Q:
                                    return this.pos.y += Q, "top";
                            }
                        })();
                        u.push({
                            obj: p,
                            side: Zt
                        });
                    }), u;
                },
                _checkCollisions (u, p) {
                    me(u, (c)=>{
                        this !== c && (a[c._id] || this.isCollided(c) && (p(c), a[c._id] = c));
                    });
                    for(let c in a){
                        let l = a[c];
                        this.isCollided(l) || delete a[c];
                    }
                },
                _checkOverlaps (u, p) {
                    me(u, (c)=>{
                        this !== c && (d[c._id] || this.isOverlapped(c) && (p(c), d[c._id] = c));
                    });
                    for(let c in d){
                        let l = d[c];
                        this.isOverlapped(l) || delete d[c];
                    }
                },
                _worldArea () {
                    let u = this.area, p = this.pos || f(0), c = this.scale || f(1), l = p.add(u.p1.dot(c)), g = p.add(u.p2.dot(c));
                    return {
                        p1: f(Math.min(l.x, g.x), Math.min(l.y, g.y)),
                        p2: f(Math.max(l.x, g.x), Math.max(l.y, g.y))
                    };
                }
            };
        }
        r(Qe, "area");
        function Oe(s, n, a) {
            let d = f(s, n), u = Le(a || B).dot(d).scale(-0.5);
            return Qe(u.sub(d.scale(0.5)), u.add(d.scale(0.5)));
        }
        r(Oe, "getAreaFromSize");
        function Bt(s, n = {
        }) {
            let a = m.sprites[s];
            if (!a) throw new Error(`sprite not found: "${s}"`);
            let d = le({
            }, a.frames[0]);
            n.quad && (d.x += n.quad.x * d.w, d.y += n.quad.y * d.h, d.w *= n.quad.w, d.h *= n.quad.h);
            let u = a.tex.width * d.w, p = a.tex.height * d.h, c = null;
            return {
                width: u,
                height: p,
                animSpeed: n.animSpeed || 0.1,
                frame: n.frame || 0,
                quad: n.quad || oe(0, 0, 1, 1),
                add () {
                    !this.area && !n.noArea && this.use(Oe(this.width, this.height, this.origin));
                },
                draw () {
                    let l = y(), g = a.frames[this.frame];
                    w(a, {
                        pos: this.pos,
                        scale: this.scale,
                        rot: this.angle,
                        color: this.color,
                        frame: this.frame,
                        origin: this.origin,
                        quad: this.quad,
                        prog: m.shaders[this.shader],
                        uniform: this.uniform
                    });
                },
                update () {
                    if (!c) return;
                    let l = a.anims[c.name];
                    c.timer += k(), c.timer >= this.animSpeed && (this.frame++, this.frame > l.to && (c.loop ? this.frame = l.from : (this.frame--, this.stop())), c && (c.timer -= this.animSpeed));
                },
                play (l, g = !0) {
                    let D = a.anims[l];
                    if (!D) throw new Error(`anim not found: ${l}`);
                    c && this.stop(), c = {
                        name: l,
                        loop: g,
                        timer: 0
                    }, this.frame = D.from, this.trigger("animPlay", l);
                },
                stop () {
                    if (!c) return;
                    let l = c.name;
                    c = null, this.trigger("animEnd", l);
                },
                changeSprite (l) {
                    if (a = m.sprites[l], !a) throw new Error(`sprite not found: "${l}"`);
                    let g = le({
                    }, a.frames[0]);
                    n.quad && (g.x += n.quad.x * g.w, g.y += n.quad.y * g.h, g.w *= n.quad.w, g.h *= n.quad.h), this.width = a.tex.width * g.w, this.height = a.tex.height * g.h, this.area && !n.noArea && this.use(Oe(this.width, this.height, this.origin)), c = null, this.frame = 0;
                },
                numFrames () {
                    return a.frames.length;
                },
                curAnim () {
                    return c == null ? void 0 : c.name;
                },
                inspect () {
                    let l = {
                    };
                    return c && (l.curAnim = `"${c.name}"`), l;
                }
            };
        }
        r(Bt, "sprite");
        function jt(s, n, a = {
        }) {
            return {
                text: s,
                textSize: n,
                font: a.font,
                width: 0,
                height: 0,
                add () {
                    var d, u, p;
                    if (!this.area && !a.noArea) {
                        let c = y(), l = m.fonts[(d = this.font) != null ? d : Se], g = o.fmtText(this.text + "", l, {
                            pos: this.pos,
                            scale: this.scale,
                            rot: this.angle,
                            size: this.textSize,
                            origin: this.origin,
                            color: this.color,
                            width: a.width
                        });
                        this.width = g.width / (((u = this.scale) == null ? void 0 : u.x) || 1), this.height = g.height / (((p = this.scale) == null ? void 0 : p.y) || 1), this.use(Oe(this.width, this.height, this.origin));
                    }
                },
                draw () {
                    var c;
                    let d = y(), u = m.fonts[(c = this.font) != null ? c : Se], p = o.fmtText(this.text + "", u, {
                        pos: this.pos,
                        scale: this.scale,
                        rot: this.angle,
                        size: this.textSize,
                        origin: this.origin,
                        color: this.color,
                        width: a.width
                    });
                    this.width = p.width, this.height = p.height, o.drawFmtText(p);
                }
            };
        }
        r(jt, "text");
        function zt(s, n, a = {
        }) {
            return {
                width: s,
                height: n,
                add () {
                    !this.area && !a.noArea && this.use(Oe(this.width, this.height, this.origin));
                },
                draw () {
                    let d = y();
                    o.drawRect(this.pos, this.width, this.height, {
                        scale: this.scale,
                        rot: this.angle,
                        color: this.color,
                        origin: this.origin,
                        prog: m.shaders[this.shader],
                        uniform: this.uniform
                    });
                }
            };
        }
        r(zt, "rect");
        function Xt() {
            return {
                solid: !0
            };
        }
        r(Xt, "solid");
        let Yt = 960, $t = 480;
        function Ht(s = {
        }) {
            var p, c;
            let n = 0, a = null, d = null, u = (p = s.maxVel) != null ? p : Yt;
            return {
                jumpForce: (c = s.jumpForce) != null ? c : $t,
                update () {
                    this.move(0, n);
                    let l = this.resolve(), g = !1;
                    if (a && (!a.exists() || !this.isCollided(a) ? (a = null, d = null, g = !0) : d && (this.pos = this.pos.add(a.pos.sub(d)), d = a.pos.clone())), !a) {
                        n = Math.min(n + Me() * k(), u);
                        for (let D of l)D.side === "bottom" && n > 0 ? (a = D.obj, n = 0, d = a.pos.clone(), g || this.trigger("grounded", a)) : D.side === "top" && n < 0 && (n = 0, this.trigger("headbump", D.obj));
                    }
                },
                curPlatform () {
                    return a;
                },
                grounded () {
                    return a !== null;
                },
                falling () {
                    return n > 0;
                },
                jump (l) {
                    a = null, n = -l || -this.jumpForce;
                }
            };
        }
        r(Ht, "body");
        function Wt(s, n = {
        }) {
            let a = m.shaders[s];
            return {
                shader: s,
                uniform: n
            };
        }
        r(Wt, "shader");
        let W = {
            paused: !1,
            inspect: !1,
            timeScale: 1,
            showLog: !0,
            fps: e.fps,
            objCount () {
                return y().objs.size;
            },
            stepFrame () {
                Ae(!0);
            },
            drawCalls: o.drawCalls,
            clearLog: v.clear,
            log: v.info,
            error: v.error
        };
        function Kt(s, n) {
            let a = [], d = f(n.pos || 0), u = 0, p = {
                getPos (...c) {
                    let l = f(...c);
                    return f(d.x + l.x * n.width, d.y + l.y * n.height);
                },
                spawn (c, l) {
                    let g = (()=>{
                        if (Array.isArray(c)) return c;
                        if (n[c]) {
                            if (typeof n[c] == "function") return n[c]();
                            if (Array.isArray(n[c])) return [
                                ...n[c]
                            ];
                        } else if (n.any) return n.any(c);
                    })();
                    if (!g) return;
                    g.push(qe(d.x + l.x * n.width, d.y + l.y * n.height));
                    let D = pe(g);
                    return a.push(D), D.use({
                        gridPos: l.clone(),
                        setGridPos (N) {
                            this.gridPos = N.clone(), this.pos = f(d.x + this.gridPos.x * n.width, d.y + this.gridPos.y * n.height);
                        },
                        moveLeft () {
                            this.setGridPos(this.gridPos.add(f(-1, 0)));
                        },
                        moveRight () {
                            this.setGridPos(this.gridPos.add(f(1, 0)));
                        },
                        moveUp () {
                            this.setGridPos(this.gridPos.add(f(0, -1)));
                        },
                        moveDown () {
                            this.setGridPos(this.gridPos.add(f(0, 1)));
                        }
                    }), D;
                },
                width () {
                    return u * n.width;
                },
                height () {
                    return s.length * n.height;
                },
                destroy () {
                    for (let c of a)ie(c);
                }
            };
            return s.forEach((c, l)=>{
                let g = c.split("");
                u = Math.max(g.length, u), g.forEach((D, N)=>{
                    p.spawn(D, f(N, l));
                });
            }), p;
        }
        r(Kt, "addLevel");
        let ke = {
            start: je,
            loadRoot: m.loadRoot,
            loadSprite: m.loadSprite,
            loadSound: m.loadSound,
            loadFont: m.loadFont,
            loadShader: m.loadShader,
            addLoader: m.addLoader,
            width: o.width,
            height: o.height,
            dt: k,
            time: e.time,
            screenshot: e.screenshot,
            scene: G,
            go: q,
            sceneData: H,
            layers: O,
            camPos: te,
            camScale: ne,
            camRot: ue,
            camShake: ce,
            camIgnore: he,
            gravity: Me,
            add: pe,
            readd: be,
            destroy: ie,
            destroyAll: Ue,
            get: se,
            every: me,
            revery: Ce,
            send: $,
            recv: R,
            pos: qe,
            scale: Ze,
            rotate: Ot,
            color: Vt,
            origin: Nt,
            layer: Ut,
            area: Qe,
            sprite: Bt,
            text: jt,
            rect: zt,
            solid: Xt,
            body: Ht,
            shader: Wt,
            on: Ee,
            action: h,
            render: x,
            collides: b,
            overlaps: L,
            clicks: z,
            keyDown: P,
            keyPress: X,
            keyPressRep: F,
            keyRelease: Z,
            charInput: re,
            mouseDown: ge,
            mouseClick: Fe,
            mouseRelease: Ge,
            mousePos: T,
            cursor: e.cursor,
            keyIsDown: e.keyDown,
            keyIsPressed: e.keyPressed,
            keyIsPressedRep: e.keyPressedRep,
            keyIsReleased: e.keyReleased,
            mouseIsDown: e.mouseDown,
            mouseIsClicked: e.mouseClicked,
            mouseIsReleased: e.mouseReleased,
            loop: K,
            wait: V,
            play: I,
            volume: i.volume,
            makeRng: Xe,
            rand: Pe,
            randSeed: ft,
            vec2: f,
            rgb: Ve,
            rgba: Y,
            quad: oe,
            choose: mt,
            chance: ht,
            lerp: De,
            map: ve,
            mapc: st,
            wave: ut,
            deg2rad: nt,
            rad2deg: rt,
            drawSprite: w,
            drawText: S,
            drawRect: o.drawRect,
            drawRectStroke: o.drawRectStroke,
            drawLine: o.drawLine,
            debug: W,
            addLevel: Kt
        };
        if (t.plugins) for (let s of t.plugins){
            let n = s(ke);
            for(let a in n)ke[a] = n[a];
        }
        if (t.global) for(let s1 in ke)window[s1] = ke[s1];
        return ke;
    };
});
exports.default = pn();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ixXZC"}],"8pcnP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _kaboom = require("../kaboom");
var _kaboomDefault = parcelHelpers.interopDefault(_kaboom);
exports.default = mainScene = ()=>{
    const { add  } = _kaboomDefault.default;
    add([
        _kaboomDefault.default.text("Patuti\nPress Space to Start", 16),
        _kaboomDefault.default.pos(_kaboomDefault.default.width() * 0.5, _kaboomDefault.default.height() * 0.5),
        _kaboomDefault.default.origin('center'),
        _kaboomDefault.default.color(1, 1, 1, 1), 
    ]);
};

},{"../kaboom":"5LAWF","@parcel/transformer-js/src/esmodule-helpers.js":"ixXZC"}],"i7gMP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _kaboom = require("../kaboom");
var _kaboomDefault = parcelHelpers.interopDefault(_kaboom);
var _movement = require("../core/movement");
var _movementDefault = parcelHelpers.interopDefault(_movement);
var _controls = require("../core/controls");
var _controlsDefault = parcelHelpers.interopDefault(_controls);
exports.default = patutiScene = ()=>{
    const { add , pos , rect , color , origin , collides , layers , solid , area  } = _kaboomDefault.default;
    // layers(['bg', 'area', 'player'])
    const player = add([
        pos(_kaboomDefault.default.width() * 0.5, _kaboomDefault.default.height() * 0.5),
        rect(16, 16),
        color(0, 1, 0, 1),
        origin('center'),
        area(),
        // body(),
        _movementDefault.default(),
        _controlsDefault.default(), 
    ]);
    const ground = add([
        pos(_kaboomDefault.default.width() * 0.5, _kaboomDefault.default.height() * 0.6),
        rect(64, 16),
        color(0, 1, 0, 1),
        origin('center'),
        area(), 
    ]);
// collides("player", "ground", () => {
//     console.log("collide");
// });
};

},{"../kaboom":"5LAWF","@parcel/transformer-js/src/esmodule-helpers.js":"ixXZC","../core/movement":"feEa5","../core/controls":"1LA4x"}],"feEa5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _kaboom = require("../kaboom");
var _kaboomDefault = parcelHelpers.interopDefault(_kaboom);
function movement() {
    const { vec2  } = _kaboomDefault.default;
    const direction = vec2(0, 0);
    const speed = 1;
    return {
        // add(){
        //     this.movement.right();
        // },
        update () {
            if (!this.pos) return;
            this.pos.x += direction.x * speed;
            this.pos.y += direction.y * speed;
        },
        movement: {
            left () {
                direction.x = -2;
                direction.y = 0;
            },
            right () {
                direction.x = 2;
                direction.y = 0;
            },
            stop () {
                direction.x = 0;
            }
        }
    };
}
exports.default = movement;

},{"../kaboom":"5LAWF","@parcel/transformer-js/src/esmodule-helpers.js":"ixXZC"}],"1LA4x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _kaboom = require("../kaboom");
var _kaboomDefault = parcelHelpers.interopDefault(_kaboom);
function controls() {
    const { keyPress , keyRelease  } = _kaboomDefault.default;
    return {
        add () {
            keyPress('left', ()=>{
                console.log("left is keydown");
                this.movement.left();
            // this.moveTo(100, 200);
            });
            keyRelease('left', ()=>{
                console.log("left is released");
                this.movement.stop();
            // this.moveTo(100, 200);
            });
            keyPress('right', ()=>{
                this.movement.right();
            // this.moveTo(200, 100);
            });
            keyRelease('right', ()=>{
                console.log("right is released");
                this.movement.stop();
            // this.moveTo(100, 200);
            });
            keyPress('up', ()=>{
                this.jump();
            });
            keyPress('down', ()=>{
            });
        }
    };
}
exports.default = controls;

},{"../kaboom":"5LAWF","@parcel/transformer-js/src/esmodule-helpers.js":"ixXZC"}]},["4bw0B","i87aF"], "i87aF", "parcelRequirea0f8")

//# sourceMappingURL=index.147655b4.js.map
