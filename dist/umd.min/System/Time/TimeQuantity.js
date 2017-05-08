/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
!function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports);void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define(["require","exports","../Compare","./TimeUnit","../Lazy"],e)}(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e("../Compare"),i=e("./TimeUnit"),n=e("../Lazy"),r=function(){function e(e){void 0===e&&(e=0),this._quantity=e,this._resetTotal()}return e.prototype.getTotalMilliseconds=function(){return this._quantity},Object.defineProperty(e.prototype,"direction",{get:function(){return o.compare(this.getTotalMilliseconds(),0)},enumerable:!0,configurable:!0}),e.prototype.equals=function(e){return o.areEqual(this.getTotalMilliseconds(),e&&e.total&&e.total.milliseconds)},e.prototype.compareTo=function(e){return o.compare(this.getTotalMilliseconds(),e&&e.total&&e.total.milliseconds)},e.prototype._resetTotal=function(){var e=this,t=this._total;t&&!t.isValueCreated||(this._total=n.Lazy.create(function(){var t=e.getTotalMilliseconds();return Object.freeze({ticks:1e4*t,milliseconds:t,seconds:t/1e3,minutes:t/6e4,hours:t/36e5,days:t/864e5})}))},Object.defineProperty(e.prototype,"total",{get:function(){return this._total.value},enumerable:!0,configurable:!0}),e.prototype.getTotal=function(e){return i.TimeUnit.fromMilliseconds(this.getTotalMilliseconds(),e)},e}();t.TimeQuantity=r,t["default"]=r});
//# sourceMappingURL=TimeQuantity.js.map