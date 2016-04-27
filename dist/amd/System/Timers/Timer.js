/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
var __extends=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)};define(["require","exports","./../Observable/ObservableBase"],function(t,e,n){"use strict";var o=function(t){function e(e,n,o){if(void 0===n&&(n=1/0),void 0===o&&(o=e),t.call(this),this._interval=e,this._maxCount=n,this._initialDelay=o,this._count=0,null===e||void 0===e)throw"'interval' must be a valid number.";if(0>e)throw"'interval' cannot be negative."}return __extends(e,t),e.startNew=function(t,n,o){void 0===n&&(n=1/0),void 0===o&&(o=t);var i=new e(t,n,t);return i.start(),i},Object.defineProperty(e.prototype,"isRunning",{get:function(){return!!this._cancel},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"count",{get:function(){return this._count},enumerable:!0,configurable:!0}),e.prototype.start=function(){var t=this;if(!t._cancel&&t._count<t._maxCount)if(t._count||t._initialDelay==t._interval){var n=setInterval(e._onTick,t._interval,t);t._cancel=function(){clearInterval(n)}}else{var o=setTimeout(e._onTick,t._initialDelay,t,!0);t._cancel=function(){clearTimeout(o)}}},e.prototype.stop=function(){this.cancel()},e.prototype.reset=function(){this.stop(),this._count=0},e.prototype.cancel=function(){return this._cancel?(this._cancel(),this._cancel=null,!0):!1},e.prototype.dispose=function(){this.cancel(),t.prototype.dispose.call(this)},e._onTick=function(t,e){var n=t._count++,o=t._maxCount,i=t._count>=o;e&&(t.cancel(),t.start()),i&&t.stop(),o>n&&t._onNext(n),i&&t._onCompleted()},e}(n["default"]);Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=o});
//# sourceMappingURL=Timer.js.map
