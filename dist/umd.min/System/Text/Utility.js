!function(r){if("object"==typeof module&&"object"==typeof module.exports){var e=r(require,exports);void 0!==e&&(module.exports=e)}else"function"==typeof define&&define.amd&&define(["require","exports","../Types"],r)}(function(r,e){"use strict";function t(r){var e=0;if(0==r.length)return e;for(var t=0,n=r.length;t<n;t++){var i=r.charCodeAt(t);e=(e<<5)-e+i,e|=0}return e}function n(r,t){var n=e.EMPTY;if(!isNaN(t))for(var i=0;i<t;i++)n+=r;return n}function i(r,t){if(void 0===t&&(t=1),Array.isArray(r)){for(var i=e.EMPTY,a=0,o=r;a<o.length;a++){var f=o[a];i+=String.fromCharCode(f)}return i}return n(String.fromCharCode(r),t)}function a(r){return r.replace(/[-[\]\/{}()*+?.\\^$|]/g,"\\$&")}function o(r,t,n){if(t===e.EMPTY)return r;if(t){var i=a(Array.isArray(t)?t.join():t);return r.replace(new RegExp("^["+i+"]+|["+i+"]+$","g"+(n?"i":"")),e.EMPTY)}return r.replace(/^\s+|\s+$/g,e.EMPTY)}function f(r){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return u(r,e)}function u(r,e){var t=Array.isArray(e);return r.replace(/\{([^{}]*)}/g,function(r,n){var i=n;if(t){var a=parseInt(n);isNaN(a)||(i=a)}var o=e[i];switch(typeof o){case l.Type.STRING:case l.Type.NUMBER:case l.Type.BOOLEAN:return o;default:return o&&l.Type.hasMemberOfType(o,"toString",l.Type.FUNCTION)?o.toString():r}})}function s(r,e){return!(!l.Type.isString(r)||!e)&&(r===e||(e.length<r.length?null:void 0))}function p(r,e){var t=s(r,e);return l.Type.isBoolean(t)?t:0==r.indexOf(e)}function c(r,e){var t=s(r,e);return l.Type.isBoolean(t)?t:r.lastIndexOf(e)==r.length-e.length}var l=r("../Types");e.EMPTY="",e.getHashCode=t,e.repeat=n,e.fromChars=i,e.escapeRegExp=a,e.trim=o,e.format=f,e.supplant=u,e.startsWith=p,e.endsWith=c});
//# sourceMappingURL=Utility.js.map