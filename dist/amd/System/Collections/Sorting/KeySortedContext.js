/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
define(["require","exports","../../Compare","./SortContext","../../Functions","../../../extends"],function(e,t,r,o,n,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var c=i["default"],u=function(e){function t(t,o,n,i){void 0===n&&(n=1),void 0===i&&(i=r.compare);var c=e.call(this,t,i,n)||this;return c._keySelector=o,c}return c(t,e),t.prototype.compare=function(t,o){var i=this,c=i._keySelector;if(!c||c==n.Functions.Identity)return e.prototype.compare.call(this,t,o);var u=r.compare(c(t),c(o));return 0==u&&i._next?i._next.compare(t,o):i._order*u},t}(o.SortContext);t.KeySortedContext=u,t["default"]=u});
//# sourceMappingURL=KeySortedContext.js.map