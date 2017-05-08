/*!
 * @author Sebastian Belmar / https://github.com/sebabelmar/
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 * https://en.wikipedia.org/wiki/Merge_sort
 */
define(["require","exports","../../../Exceptions/ArgumentNullException","../Utility"],function(e,t,r,n){"use strict";function i(e){if(!e)throw new r.ArgumentNullException("target");var t=e.length;return t<2?e:o(e,0,t,n.initialize(t))}function o(e,t,r,n){if(r-t>1){var i=Math.floor((t+r)/2);o(e,t,i,n),o(e,i,r,n);for(var u=0,f=e.length;u<f;u++)n[u]=e[u];for(var l=t,a=t,c=i;a<i&&c<r;)e[l++]=n[a]>n[c]?n[c++]:n[a++];for(;a<i;)e[l++]=n[a++]}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.mergeSort=i});
//# sourceMappingURL=mergeSort.js.map