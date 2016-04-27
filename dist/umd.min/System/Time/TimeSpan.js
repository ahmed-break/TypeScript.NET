/*!
 * @author electricessence / https://github.com/electricessence/
 * Originally based upon .NET source but with many additions and improvements.
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
var __extends=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)};!function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports);void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define(["require","exports","../Types","./TimeUnit","./ClockTime","./TimeQuantity"],e)}(function(e,t){"use strict";var n=e("../Types"),i=e("./TimeUnit"),o=e("./ClockTime"),r=e("./TimeQuantity"),u=function(e){function t(t,n){void 0===n&&(n=i["default"].Milliseconds);var o=i["default"].toMilliseconds(t,n);e.call(this,o);var r=this;r.ticks=1e4*o,r.milliseconds=o,r.seconds=o/1e3,r.minutes=o/6e4,r.hours=o/36e5,r.days=o/864e5}return __extends(t,e),Object.defineProperty(t.prototype,"total",{get:function(){return this},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"time",{get:function(){var e=this,t=e._time;return t||(e._time=t=new o["default"](e.getTotalMilliseconds())),t},enumerable:!0,configurable:!0}),t.prototype.add=function(e){if(n["default"].isNumber(e))throw new Error("Use .addUnit(value:number,units:TimeUnit) to add a numerical value amount.  Default units are milliseconds.\n.add only supports quantifiable time values (ITimeTotal).");return new t(this.getTotalMilliseconds()+e.total.milliseconds)},t.prototype.addUnit=function(e,n){return void 0===n&&(n=i["default"].Milliseconds),new t(this.getTotalMilliseconds()+i["default"].toMilliseconds(e,n))},t.from=function(e,n){return new t(e,n)},t.fromDays=function(e){return new t(e,i["default"].Days)},t.fromHours=function(e){return new t(e,i["default"].Hours)},t.fromMinutes=function(e){return new t(e,i["default"].Minutes)},t.fromSeconds=function(e){return new t(e,i["default"].Seconds)},t.fromMilliseconds=function(e){return new t(e,i["default"].Milliseconds)},t.fromTicks=function(e){return new t(e,i["default"].Ticks)},Object.defineProperty(t,"zero",{get:function(){return s||(s=new t(0))},enumerable:!0,configurable:!0}),t}(r["default"]);Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=u;var s});
//# sourceMappingURL=TimeSpan.js.map
