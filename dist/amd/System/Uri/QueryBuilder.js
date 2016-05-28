/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
var __extends=this&&this.__extends||function(t,e){function r(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)};define(["require","exports","../Types","../Collections/Dictionaries/OrderedStringKeyDictionary","../Collections/Enumeration/Enumerator","./QueryParams"],function(t,e,r,i,n,o){"use strict";var s=function(t){function e(e,r){void 0===r&&(r=!0),t.call(this),this.importQuery(e,r)}return __extends(e,t),e.init=function(t,r){return void 0===r&&(r=!0),new e(t,r)},e.prototype.importQuery=function(t,e){return void 0===e&&(e=!0),r.Type.isString(t)?this.importFromString(t,e):n.isEnumerableOrArrayLike(t)?this.importEntries(t):this.importMap(t),this},e.prototype.importFromString=function(t,e,r){void 0===e&&(e=!0),void 0===r&&(r=!0);var i=this;return o.parse(t,function(t,e){if(i.containsKey(t)){var r=i.getValue(t);Array.isArray(r)?r.push(e):i.setValue(t,[r,e])}else i.setValue(t,e)},e,r),this},e.prototype.encode=function(t){return o.encode(this,t)},e.prototype.toString=function(){return this.encode()},e}(i.OrderedStringKeyDictionary);e.QueryBuilder=s,Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=s});
//# sourceMappingURL=QueryBuilder.js.map