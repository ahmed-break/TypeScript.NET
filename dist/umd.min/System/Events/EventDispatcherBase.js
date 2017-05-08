/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
!function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports);void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define(["require","exports","../Collections/Array/Utility","../Utility/shallowCopy","../Disposable/DisposableBase","../Disposable/dispose","./EventDispatcherEntry","../../extends"],e)}(function(e,t){"use strict";function i(){var e=this.params;e.dispatcher.removeEntry(this),e.dispatcher=null}Object.defineProperty(t,"__esModule",{value:!0});var r=e("../Collections/Array/Utility"),s=e("../Utility/shallowCopy"),n=e("../Disposable/DisposableBase"),o=e("../Disposable/dispose"),p=e("./EventDispatcherEntry"),a=e("../../extends"),c=a["default"],l="disposing",u="disposed",f="EventDispatcherBase",h=function(e){function t(){var t=e.call(this)||this;return t._isDisposing=!1,t._disposableObjectName=f,t}return c(t,e),t.prototype.addEventListener=function(e,t,r){void 0===r&&(r=0);var s=this._entries;s||(this._entries=s=[]),s.push(new p.EventDispatcherEntry(e,t,{priority:r||0,dispatcher:this},i))},t.prototype.removeEntry=function(e){return!!this._entries&&0!=r.remove(this._entries,e)},t.prototype.registerEventListener=function(e,t,i){void 0===i&&(i=0),this.hasEventListener(e,t)||this.addEventListener(e,t,i)},t.prototype.hasEventListener=function(e,t){var i=this._entries;return i&&i.some(function(i){return e==i.type&&(!t||t==i.listener)})},t.prototype.removeEventListener=function(e,t){o.dispose.these.noCopy(this._entries.filter(function(i){return i.matches(e,t)}))},t.prototype.dispatchEvent=function(e,t){var i=this,r=this,n=r._entries;if(!n||!n.length)return!1;var o;"string"==typeof e?(o=Event&&Object.create(Event)||{},t||(t={}),t.cancellable&&(o.cancellable=!0),o.target=r,o.type=e):o=e;var p=o.type,a=n.filter(function(e){return e.type==p});return!!a.length&&(a.sort(function(e,t){return(t.params?t.params.priority:0)-(e.params?e.params.priority:0)}),a.forEach(function(e){var t=Object.create(Event);s.shallowCopy(o,t),t.target=i,e.dispatch(t)}),!0)},Object.defineProperty(t,"DISPOSING",{get:function(){return l},enumerable:!0,configurable:!0}),Object.defineProperty(t,"DISPOSED",{get:function(){return u},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isDisposing",{get:function(){return this._isDisposing},enumerable:!0,configurable:!0}),t.prototype.dispose=function(){var t=this;if(!t.wasDisposed&&!t._isDisposing){t._isDisposing=!0,t.dispatchEvent(l),e.prototype.dispose.call(this),t.dispatchEvent(u);var i=t._entries;i&&(this._entries=null,i.forEach(function(e){return e.dispose()}))}},t}(n.DisposableBase);t["default"]=h});
//# sourceMappingURL=EventDispatcherBase.js.map