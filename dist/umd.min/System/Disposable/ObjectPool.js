/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 * Based upon ObjectPool from Parallel Extension Extras and other ObjectPool implementations.
 * Uses .add(T) and .take():T
 */
var __extends=this&&this.__extends||function(e,t){function o(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)};!function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports);void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define(["require","exports","./dispose","./DisposableBase","../Threading/Tasks/TaskHandler","../Exceptions/ArgumentOutOfRangeException"],e)}(function(e,t){"use strict";var o=e("./dispose"),r=e("./DisposableBase"),n=e("../Threading/Tasks/TaskHandler"),i=e("../Exceptions/ArgumentOutOfRangeException"),s="ObjectPool",a="_maxSize",l=65536,u="Must be at valid number least 1.",p="Must be less than or equal to "+l+".",c=function(e){function t(t,o,r){if(e.call(this),this._maxSize=t,this._generator=o,this._recycler=r,this.autoClearTimeout=5e3,isNaN(t)||1>t)throw new i.ArgumentOutOfRangeException(a,t,u);if(t>l)throw new i.ArgumentOutOfRangeException(a,t,p);this._localAbsMaxSize=Math.min(2*t,l);var c=this;c._disposableObjectName=s,c._pool=[],c._trimmer=new n.TaskHandler(function(){return c._trim()});var _=function(){return c._clear()};c._flusher=new n.TaskHandler(_),c._autoFlusher=new n.TaskHandler(_)}return __extends(t,e),Object.defineProperty(t.prototype,"maxSize",{get:function(){return this._maxSize},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"count",{get:function(){var e=this._pool;return e?e.length:0},enumerable:!0,configurable:!0}),t.prototype._trim=function(){for(var e=this._pool;e.length>this._maxSize;)o.dispose.withoutException(e.pop())},t.prototype.trim=function(e){this.throwIfDisposed(),this._trimmer.start(e)},t.prototype._clear=function(){var e=this,t=e._pool;e._trimmer.cancel(),e._flusher.cancel(),e._autoFlusher.cancel(),o.dispose.these(t,!0),t.length=0},t.prototype.clear=function(e){this.throwIfDisposed(),this._flusher.start(e)},t.prototype.toArrayAndClear=function(){var e=this;e.throwIfDisposed(),e._trimmer.cancel(),e._flusher.cancel();var t=e._pool;return e._pool=[],t},t.prototype.dump=function(){return this.toArrayAndClear()},t.prototype._onDispose=function(){e.prototype._onDispose.call(this);var t=this;t._generator=null,t._recycler=null,o.dispose(t._trimmer,t._flusher,t._autoFlusher),t._trimmer=null,t._flusher=null,t._autoFlusher=null,t._pool.length=0,t._pool=null},t.prototype.extendAutoClear=function(){var e=this;e.throwIfDisposed();var t=e.autoClearTimeout;isFinite(t)&&!e._autoFlusher.isScheduled&&e._autoFlusher.start(t)},t.prototype.add=function(e){var t=this;if(t.throwIfDisposed(),t._pool.length>=t._localAbsMaxSize)o.dispose(e);else{t._recycler&&t._recycler(e),t._pool.push(e);var r=t._maxSize;l>r&&t._pool.length>r&&t._trimmer.start(500)}t.extendAutoClear()},t.prototype.take=function(){var e=this;e.throwIfDisposed();var t=e._pool.pop()||e._generator(),o=e._pool.length;return e._pool.length<=e._maxSize&&e._trimmer.cancel(),o&&e.extendAutoClear(),t},t}(r.DisposableBase);t.ObjectPool=c,Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=c});
//# sourceMappingURL=ObjectPool.js.map