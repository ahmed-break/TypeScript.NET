/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
var __extends=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)};!function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports);void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define(["require","exports","../Types","../Exceptions/ArgumentException","./SetBase"],e)}(function(e,t){"use strict";function r(e,t){if(void 0===t&&(t=1),e&&t)for(var o=0,n=Object.keys(e);o<n.length;o++){var i=n[o],s=e[i];delete e[i],r(s,t-1)}}var o=e("../Types"),n=e("../Exceptions/ArgumentException"),i=e("./SetBase"),s=function(e){function t(){e.apply(this,arguments)}return __extends(t,e),t.prototype.newUsing=function(e){return new t(e)},t.prototype._addInternal=function(e){var t=this;if(!t.contains(e)){var r=typeof e;if(!o["default"].isPrimitive(r))throw new n["default"]("item","A Set can only index primitives.  Complex objects require a HashSet.");var i=t._registry,s=i&&i[r];i||(t._registry=i={}),s||(i[r]=s={});var p={value:e};return t._getSet().addNode(p),s[e]=p,!0}return!1},t.prototype._clearInternal=function(){return r(this._registry,2),e.prototype._clearInternal.call(this)},t.prototype._onDispose=function(){e.prototype._onDispose.call(this),this._registry=null},t.prototype._getNode=function(e){var t=this._registry,r=t&&t[typeof e];return r&&r[e]},t.prototype._removeInternal=function(e,t){if(void 0===t&&(t=1/0),0===t)return 0;var r=this._registry,o=r&&r[typeof e],n=o&&o[e];if(n){delete o[e];var i=this._set;if(i&&i.removeNode(n))return 1}return 0},t}(i["default"]);Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=s});
//# sourceMappingURL=Set.js.map
