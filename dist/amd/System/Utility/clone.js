/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
define(["require","exports","../Types","../Collections/Array/copy"],function(e,r,i,t){"use strict";function n(e,r){if(void 0===r&&(r=0),r<0)return e;if(!i.Type.isObject(e))return e;if(i.Type.isArrayLike(e)){var f=t.copy(e);if(r>0)for(var o=e.length,u=0;u<o;u++)f[u]=n(f[u],r-1);return f}var f={};if(r>0)for(var a in e)f[a]=n(e[a],r-1);return f}Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=n});
//# sourceMappingURL=clone.js.map