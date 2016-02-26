/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
define(["require","exports","../../Types","./ArrayEnumerator","./IndexEnumerator"],function(e,r,t,n,u){"use strict";function o(e){if(!e)return s;if(Array.isArray(e))return new n["default"](e);if(!t["default"].isPrimitive(e)){if(t["default"].isArrayLike(e))return new u["default"](function(){return{source:e,length:e.length,pointer:0,step:1}});if(i(e))return e.getEnumerator()}throw new Error("Unknown enumerable.")}function i(e){return t["default"].hasMemberOfType(e,"getEnumerator",t["default"].FUNCTION)}function f(e){return t["default"].hasMemberOfType(e,"moveNext",t["default"].FUNCTION)}function a(e,r){if(e){if(Array.isArray(e))return void e.forEach(r);if(i(e)&&(e=e.getEnumerator()),f(e))for(var t=0;e.moveNext()&&r(e.current,t++)!==!1;);}}var c=function(){function e(){}return Object.defineProperty(e.prototype,"current",{get:function(){return void 0},enumerable:!0,configurable:!0}),e.prototype.moveNext=function(){return!1},e.prototype.reset=function(){},e.prototype.dispose=function(){},e}(),s=new c;r.from=o,r.isEnumerable=i,r.isEnumerator=f,r.forEach=a});
//# sourceMappingURL=Enumerator.js.map
