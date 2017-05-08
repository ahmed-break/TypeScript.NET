/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
!function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports);void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define(["require","exports","../../Types","../../Disposable/DisposableBase","../../Disposable/ObjectPool","./IteratorResult","../../../extends"],e)}(function(e,t){"use strict";function r(e){return n||(n=new o.ObjectPool(40,function(){return new l},function(e){return e.yieldBreak()})),e?void n.add(e):n.take()}Object.defineProperty(t,"__esModule",{value:!0});var n,i=e("../../Types"),s=e("../../Disposable/DisposableBase"),o=e("../../Disposable/ObjectPool"),a=e("./IteratorResult"),u=e("../../../extends"),p=u["default"],d=void 0,l=function(){function e(){this._current=d,this._index=NaN}return Object.defineProperty(e.prototype,"current",{get:function(){return this._current},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"index",{get:function(){return this._index},enumerable:!0,configurable:!0}),e.prototype.yieldReturn=function(e){return this._current=e,isNaN(this._index)?this._index=0:this._index++,!0},e.prototype.yieldBreak=function(){return this._current=d,this._index=NaN,!1},e.prototype.dispose=function(){this.yieldBreak()},e}(),c="EnumeratorBase",f=function(e){function t(t,r,n,s){var o=e.call(this)||this;return o._initializer=t,o._tryGetNext=r,o._disposableObjectName=c,o.reset(),i.Type.isBoolean(s)?o._isEndless=s:i.Type.isBoolean(n)&&(o._isEndless=n),i.Type.isFunction(n)&&(o._disposer=n),o}return p(t,e),Object.defineProperty(t.prototype,"current",{get:function(){var e=this._yielder;return e&&e.current},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"index",{get:function(){var e=this._yielder;return e?e.index:NaN},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isEndless",{get:function(){return this._isEndless},enumerable:!0,configurable:!0}),t.prototype.reset=function(){var e=this;e.throwIfDisposed();var t=e._yielder;e._yielder=null,e._state=0,t&&r(t)},t.prototype._assertBadState=function(){var e=this;switch(e._state){case 3:e.throwIfDisposed("This enumerator caused a fault and was disposed.");break;case 5:e.throwIfDisposed("This enumerator was manually disposed.")}},t.prototype.tryGetCurrent=function(e){return this._assertBadState(),1===this._state&&(e(this.current),!0)},Object.defineProperty(t.prototype,"canMoveNext",{get:function(){return this._state<2},enumerable:!0,configurable:!0}),t.prototype.moveNext=function(){var e=this;e._assertBadState();try{switch(e._state){case 0:e._yielder=e._yielder||r(),e._state=1;var t=e._initializer;t&&t();case 1:return!!e._tryGetNext(e._yielder)||(this.dispose(),e._state=2,!1);default:return!1}}catch(n){throw this.dispose(),e._state=3,n}},t.prototype.tryMoveNext=function(e){return!!this.moveNext()&&(e(this.current),!0)},t.prototype.nextValue=function(){return this.moveNext()?this.current:d},t.prototype.next=function(){return this.moveNext()?new a.IteratorResult(this.current,this.index):a.IteratorResult.Done},t.prototype.end=function(){this._ensureDisposeState(4)},t.prototype["return"]=function(e){var t=this;t._assertBadState();try{return e===d||2===t._state||4===t._state?a.IteratorResult.Done:new a.IteratorResult(e,d,(!0))}finally{t.end()}},t.prototype._ensureDisposeState=function(e){var t=this;t.wasDisposed||(t.dispose(),t._state=e)},t.prototype._onDispose=function(){var e=this;e._isEndless=!1;var t=e._disposer;e._initializer=null,e._disposer=null;var n=e._yielder;e._yielder=null,this._state=5,n&&r(n),t&&t()},t}(s.DisposableBase);t.EnumeratorBase=f,t["default"]=f});
//# sourceMappingURL=EnumeratorBase.js.map