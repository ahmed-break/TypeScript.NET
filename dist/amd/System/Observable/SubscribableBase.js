/*!
 * @author electricessence / https://github.com/electricessence/
 * Based upon .NET source.
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 * Source: http://referencesource.microsoft.com/#mscorlib/system/IObserver.cs
 */
define(["require","exports","../Collections/LinkedNodeList","../Disposable/dispose","./Subscription","../Disposable/DisposableBase","../../extends"],function(s,e,i,r,t,n,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var u=o["default"],p="SubscribableBase",a=function(s){function e(){var e=s.call(this)||this;return e._disposableObjectName=p,e}return u(e,s),e.prototype._getSubscribers=function(){var s=this.__subscriptions;return s?s.map(function(s){return s&&s.value&&s.value.subscriber}):null},e.prototype._findEntryNode=function(s){var e=this.__subscriptions;return e&&e.find(function(e){return!!e.value&&e.value.subscriber===s})},e.prototype.subscribe=function(s){var e=this;e.throwIfDisposed();var r=e._findEntryNode(s);if(r)return r.value;var n=e.__subscriptions;n||(e.__subscriptions=n=new i.LinkedNodeList);var o=new t.Subscription(e,s);return n.addNode({value:o}),o},e.prototype.unsubscribe=function(s){var e=this,i=e._findEntryNode(s);if(i){var r=i.value;e.__subscriptions.removeNode(i),r&&r.dispose()}},e.prototype._unsubscribeAll=function(s){void 0===s&&(s=!1);var e=this,i=e.__subscriptions;if(!i)return null;var t=i.map(function(s){return s.value}),n=s?t.map(function(s){return s.subscriber}):null;return i.clear(),r.dispose.these.noCopy(t),n},e.prototype.unsubscribeAll=function(){this._unsubscribeAll()},e.prototype._onDispose=function(){s.prototype._onDispose.call(this),this._unsubscribeAll();var e=this.__subscriptions;this.__subscriptions=null,e&&e.dispose()},e}(n.DisposableBase);e.SubscribableBase=a,e["default"]=a});
//# sourceMappingURL=SubscribableBase.js.map