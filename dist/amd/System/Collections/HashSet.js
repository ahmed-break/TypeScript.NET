/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
define(["require","exports","../Types","./SetBase","../Exceptions/ArgumentNullException","../../extends"],function(e,t,r,n,o,i){"use strict";function s(e,t){if(void 0===t&&(t=1),e&&t)for(var r=0,n=Object.keys(e);r<n.length;r++){var o=n[r],i=e[o];delete e[o],s(i,t-1)}}Object.defineProperty(t,"__esModule",{value:!0});var a=i["default"],u=void 0,p=function(e){function t(t,n){var i=e.call(this)||this;if(r.Type.isFunction(t))i._keyGenerator=t;else{if(!n)throw new o.ArgumentNullException("keyGenerator");i._keyGenerator=n,i._importEntries(t)}return i}return a(t,e),t.prototype.newUsing=function(e){return new t(e,this._keyGenerator)},t.prototype._addInternal=function(e){var t=this,r=typeof e,n=t._registry,o=n&&n[r],i=t._keyGenerator(e);if(!o||o[i]===u){n||(t._registry=n={}),o||(n[r]=o={});var s={value:e};return t._getSet().addNode(s),o[i]=s,!0}return!1},t.prototype._clearInternal=function(){return s(this._registry,2),e.prototype._clearInternal.call(this)},t.prototype._onDispose=function(){e.prototype._onDispose.call(this),this._registry=null,this._keyGenerator=u},t.prototype._getNode=function(e){var t=this._registry,r=t&&t[typeof e];return r&&r[this._keyGenerator(e)]},t.prototype._removeInternal=function(e,t){if(void 0===t&&(t=1/0),0===t)return 0;var r=this._registry,n=r&&r[typeof e],o=n&&n[e];if(o){delete n[e];var i=this._set;if(i&&i.removeNode(o))return 1}return 0},t}(n.SetBase);t.HashSet=p,t["default"]=p});
//# sourceMappingURL=HashSet.js.map