!function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports);void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define(["require","exports","./Exceptions/ArgumentException","./Exceptions/ArgumentOutOfRangeException"],e)}(function(e,t){"use strict";function n(e){return Math.floor(e)}var r=e("./Exceptions/ArgumentException"),o=e("./Exceptions/ArgumentOutOfRangeException");t.Integer=n;var n;!function(e){function t(e){return Math.random()*e|0}function n(e){return c(e,"maxExclusive"),t(e)}function u(e){var t=0|e;return e===-1||t!==-1?t:null}function i(e){return typeof e===g&&isFinite(e)&&e===Math.floor(e)}function a(e){return e===(0|e)}function c(e,t){var n=i(e);if(!n)throw new r.ArgumentException(t||"n","Must be a integer.");return n}function f(e,t){var n=c(e,t)&&e>=0;if(!n)throw new o.ArgumentOutOfRangeException(t||"n",e,"Must be a valid integer greater than or equal to zero.");return n}function s(e,t){var n=c(e,t)&&e>0;if(!n)throw new o.ArgumentOutOfRangeException(t||"n",e,"Must be greater than zero.");return n}e.MAX_32_BIT=2147483647,e.random=n;var n;!function(e){function n(e,n){return c(e,"max"),0===e?0:(n&&(e+=e/Math.abs(e)),t(e))}function r(e,t,r){var o=[];o.length=e;for(var u=0;u<e;u++)o[u]=n(t,r);return o}function o(e,t,r){c(e,"min"),c(t,"max");var o=t-e;return 0===o?e:(r&&(o+=o/Math.abs(o)),e+n(o))}function u(e){return e&&e.length?e[t(e.length)]:void 0}e.next=n,e.set=r,e.nextInRange=o,e.select=u;var u;!function(t){function n(t){return e.select(t)}t.one=n}(u=e.select||(e.select={}))}(n=e.random||(e.random={})),e.as32Bit=u;var g="number";e.is=i,e.is32Bit=a,e.assert=c,e.assertZeroOrGreater=f,e.assertPositive=s}(n=t.Integer||(t.Integer={})),Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n});
//# sourceMappingURL=Integer.js.map