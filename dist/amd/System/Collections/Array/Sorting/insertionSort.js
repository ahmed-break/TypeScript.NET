/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
define(["require","exports","../../../Exceptions/ArgumentNullException"],function(e,r,t){"use strict";function n(e){if(!e)throw new t.ArgumentNullException("target");for(var r=e.length,n=1;n<r;n++)for(var o=n,i=void 0;o>0&&e[i=o-1]>e[o];){var u=e[o];e[o]=e[i],e[i]=u,o--}return e}Object.defineProperty(r,"__esModule",{value:!0}),r.insertionSort=n});
//# sourceMappingURL=insertionSort.js.map