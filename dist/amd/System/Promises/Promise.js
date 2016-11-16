/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 * Although most of the following code is written from scratch, it is
 * heavily influenced by Q (https://github.com/kriskowal/q) and uses some of Q's spec.
 */
define(["require","exports","../Types","../Threading/deferImmediate","../Disposable/DisposableBase","../Exceptions/InvalidOperationException","../Exceptions/ArgumentException","../Exceptions/ArgumentNullException","../Disposable/ObjectPool","../Collections/Set","../Threading/defer","../Disposable/ObjectDisposedException","../../extends"],function(t,e,n,r,i,o,s,u,l,a,c,f,h){"use strict";function p(t){return n["default"].hasMemberOfType(t,D,n["default"].FUNCTION)}function d(t,e,n){var r=e?e(t):t;return r&&p(r)?T.wrap(r):n(r)}function w(t,e,n){try{var r=n?n(e):e;return t&&t.resolve(r),null}catch(i){return t&&t.reject(i),i}}function v(t,e,n,r){try{var i=r?r(n):n;t&&t(i)}catch(o){e&&e(o)}}function y(t,e,n){t instanceof E?t.thenThis(e,n):t.then(e,n)}function g(t,e,n){return t instanceof E?t.thenSynchronous(e,n):t.then(e,n)}function _(){return new f.ObjectDisposedException("Promise","An underlying promise-result was disposed.")}var m=h["default"],b=void 0,j=null,I="Promise",S=I+"State",D="then",A="target",P=function(t){function e(e,n,r){t.call(this),this._state=e,this._result=n,this._error=r,this._disposableObjectName=S}return m(e,t),e.prototype._onDispose=function(){this._state=b,this._result=b,this._error=b},e.prototype.getState=function(){return this._state},Object.defineProperty(e.prototype,"state",{get:function(){return this._state},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isPending",{get:function(){return this.getState()===T.State.Pending},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isSettled",{get:function(){return this.getState()!=T.State.Pending},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isFulfilled",{get:function(){return this.getState()===T.State.Fulfilled},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isRejected",{get:function(){return this.getState()===T.State.Rejected},enumerable:!0,configurable:!0}),e.prototype.getResult=function(){return this._result},Object.defineProperty(e.prototype,"result",{get:function(){return this.throwIfDisposed(),this.getResult()},enumerable:!0,configurable:!0}),e.prototype.getError=function(){return this._error},Object.defineProperty(e.prototype,"error",{get:function(){return this.throwIfDisposed(),this.getError()},enumerable:!0,configurable:!0}),e}(i.DisposableBase);e.PromiseState=P;var E=function(t){function e(){t.call(this,T.State.Pending),this._disposableObjectName=I}return m(e,t),e.prototype.then=function(t,e){var n=this;return this.throwIfDisposed(),new T(function(r,i){n.thenThis(function(e){return v(r,i,e,t)},function(t){return e?v(r,i,t,e):i(t)})})},e.prototype.thenAllowFatal=function(t,e){var n=this;return this.throwIfDisposed(),new T(function(r,i){n.thenThis(function(e){return r(t?t(e):e)},function(t){return i(e?e(t):t)})})},e.prototype.done=function(t,e){var n=this;c.defer(function(){return n.thenThis(t,e)})},e.prototype.delayFromNow=function(t){var e=this;return void 0===t&&(t=0),this.throwIfDisposed(),new T(function(n,r){c.defer(function(){e.thenThis(function(t){return n(t)},function(t){return r(t)})},t)},(!0))},e.prototype.delayAfterResolve=function(t){var e=this;return void 0===t&&(t=0),this.throwIfDisposed(),this.isSettled?this.delayFromNow(t):new T(function(n,r){e.thenThis(function(e){return c.defer(function(){return n(e)},t)},function(e){return c.defer(function(){return r(e)},t)})},(!0))},e.prototype["catch"]=function(t){return this.then(b,t)},e.prototype.catchAllowFatal=function(t){return this.thenAllowFatal(b,t)},e.prototype["finally"]=function(t){return this.then(t,t)},e.prototype.finallyAllowFatal=function(t){return this.thenAllowFatal(t,t)},e.prototype.finallyThis=function(t,e){this.throwIfDisposed();var n=e?t:function(){return r.deferImmediate(t)};return this.thenThis(n,n),this},e}(P);e.PromiseBase=E;var x=function(t){function e(){t.apply(this,arguments)}return m(e,t),e.prototype.thenSynchronous=function(t,e){this.throwIfDisposed();try{switch(this.state){case T.State.Fulfilled:return t?d(this._result,t,T.resolve):this;case T.State.Rejected:return e?d(this._error,e,T.resolve):this}}catch(n){return new R(n)}throw new Error("Invalid state for a resolved promise.")},e.prototype.thenThis=function(t,e){switch(this.throwIfDisposed(),this.state){case T.State.Fulfilled:t&&t(this._result);break;case T.State.Rejected:e&&e(this._error)}return this},e}(E);e.Resolvable=x;var F=function(t){function e(e,n,r){t.call(this),this._result=n,this._error=r,this._state=e}return m(e,t),e}(x);e.Resolved=F;var O=function(t){function e(e){t.call(this,T.State.Fulfilled,e)}return m(e,t),e}(F);e.Fulfilled=O;var R=function(t){function e(e){t.call(this,T.State.Rejected,b,e)}return m(e,t),e}(F);e.Rejected=R;var C=function(t){function e(e){var n=this;if(t.call(this),this._target=e,!e)throw new u.ArgumentNullException(A);if(!p(e))throw new s.ArgumentException(A,"Must be a promise-like object.");e.then(function(t){n._state=T.State.Fulfilled,n._result=t,n._error=b,n._target=b},function(t){n._state=T.State.Rejected,n._error=t,n._target=b})}return m(e,t),e.prototype.thenSynchronous=function(e,n){this.throwIfDisposed();var r=this._target;return r?new T(function(t,i){y(r,function(n){return v(t,i,n,e)},function(e){return n?v(t,null,e,n):i(e)})},(!0)):t.prototype.thenSynchronous.call(this,e,n)},e.prototype.thenThis=function(e,n){this.throwIfDisposed();var r=this._target;return r?(y(r,e,n),this):t.prototype.thenThis.call(this,e,n)},e.prototype._onDispose=function(){t.prototype._onDispose.call(this),this._target=b},e}(x),T=function(t){function e(e,n){void 0===n&&(n=!1),t.call(this),e&&this.resolveUsing(e,n)}return m(e,t),e.prototype.thenSynchronous=function(n,r){if(this.throwIfDisposed(),this._state)return t.prototype.thenSynchronous.call(this,n,r);var i=new e;return(this._waiting||(this._waiting=[])).push(M.PromiseCallbacks.init(n,r,i)),i},e.prototype.thenThis=function(e,n){return this.throwIfDisposed(),this._state?t.prototype.thenThis.call(this,e,n):((this._waiting||(this._waiting=[])).push(M.PromiseCallbacks.init(e,n)),this)},e.prototype._onDispose=function(){t.prototype._onDispose.call(this),this._resolvedCalled=b},e.prototype.resolveUsing=function(t,n){var i=this;if(void 0===n&&(n=!1),!t)throw new u.ArgumentNullException("resolver");if(this._resolvedCalled)throw new o.InvalidOperationException(".resolve() already called.");if(this.state)throw new o.InvalidOperationException("Already resolved: "+e.State[this.state]);this._resolvedCalled=!0;var s=0,l=function(t){s?console.warn(s==-1?"Rejection called multiple times":"Rejection called after fulfilled."):(s=-1,i._resolvedCalled=!1,i.reject(t))},a=function(t){s?console.warn(1==s?"Fulfill called multiple times":"Fulfill called after rejection."):(s=1,i._resolvedCalled=!1,i.resolve(t))};n?t(a,l):r.deferImmediate(function(){return t(a,l)})},e.prototype._emitDisposalRejection=function(t){var e=t.wasDisposed;return e&&this._rejectInternal(_()),e},e.prototype._resolveInternal=function(t){var n=this;if(!this.wasDisposed){for(;t instanceof E;){var r=t;if(this._emitDisposalRejection(r))return;switch(r.state){case e.State.Pending:return void r.thenSynchronous(function(t){return n._resolveInternal(t)},function(t){return n._rejectInternal(t)});case e.State.Rejected:return void this._rejectInternal(r.error);case e.State.Fulfilled:t=r.result}}if(p(t))t.then(function(t){return n._resolveInternal(t)},function(t){return n._rejectInternal(t)});else{this._state=e.State.Fulfilled,this._result=t,this._error=b;var i=this._waiting;if(i){this._waiting=b;for(var o=0,s=i;o<s.length;o++){var u=s[o],l=u.onFulfilled,a=u.promise;M.PromiseCallbacks.recycle(u),w(a,t,l)}i.length=0}}}},e.prototype._rejectInternal=function(t){if(!this.wasDisposed){this._state=e.State.Rejected,this._error=t;var n=this._waiting;if(n){this._waiting=null;for(var r=0,i=n;r<i.length;r++){var o=i[r],s=o.onRejected,u=o.promise;M.PromiseCallbacks.recycle(o),s?w(u,t,s):u&&u.reject(t)}n.length=0}}},e.prototype.resolve=function(t,n){if(void 0===n&&(n=!1),this.throwIfDisposed(),t==this)throw new o.InvalidOperationException("Cannot resolve a promise as itself.");if(this._state){if(!n||this._state==e.State.Fulfilled&&this._result===t)return;throw new o.InvalidOperationException("Changing the fulfilled state/value of a promise is not supported.")}if(this._resolvedCalled){if(n)throw new o.InvalidOperationException(".resolve() already called.")}else this._resolveInternal(t)},e.prototype.reject=function(t,n){if(void 0===n&&(n=!1),this.throwIfDisposed(),this._state){if(!n||this._state==e.State.Rejected&&this._error===t)return;throw new o.InvalidOperationException("Changing the rejected state/value of a promise is not supported.")}if(this._resolvedCalled){if(n)throw new o.InvalidOperationException(".resolve() already called.")}else this._rejectInternal(t)},e}(x);e.Promise=T;var N=function(t){function e(){t.apply(this,arguments)}return m(e,t),e.prototype.map=function(t){var n=this;return this.throwIfDisposed(),new e(function(e){n.thenThis(function(n){return e(n.map(t))})},(!0))},e.prototype.reduce=function(t,e){return this.thenSynchronous(function(n){return n.reduce(t,e)})},e.fulfilled=function(t){return new e(function(e){return t},(!0))},e}(T);e.ArrayPromise=N;var k="PromiseCollection",B=function(t){function e(e){t.call(this),this._disposableObjectName=k,this._source=e&&e.slice()||[]}return m(e,t),e.prototype._onDispose=function(){t.prototype._onDispose.call(this),this._source.length=0,this._source=null},Object.defineProperty(e.prototype,"promises",{get:function(){return this.throwIfDisposed(),this._source.slice()},enumerable:!0,configurable:!0}),e.prototype.all=function(){return this.throwIfDisposed(),T.all(this._source)},e.prototype.race=function(){return this.throwIfDisposed(),T.race(this._source)},e.prototype.waitAll=function(){return this.throwIfDisposed(),T.waitAll(this._source)},e.prototype.map=function(t){var e=this;return this.throwIfDisposed(),new N(function(n){e.all().thenThis(function(e){return n(e.map(t))})},(!0))},e.prototype.pipe=function(t){return this.throwIfDisposed(),new e(this._source.map(function(e){return g(e,t)}))},e.prototype.reduce=function(t,e){return this.throwIfDisposed(),T.wrap(this._source.reduce(function(e,n,r,i){return g(e,function(e){return g(n,function(n){return t(e,n,r,i)})})},p(e)?e:new O(e)))},e}(i.DisposableBase);e.PromiseCollection=B;var M;!function(t){var e;!function(t){function e(){return o||(o=new l.ObjectPool(40,n,function(t){t.onFulfilled=j,t.onRejected=j,t.promise=j}))}function n(){return{onFulfilled:j,onRejected:j,promise:j}}function r(t,n,r){var i=e().take();return i.onFulfilled=t,i.onRejected=n,i.promise=r,i}function i(t){e().add(t)}var o;t.init=r,t.recycle=i}(e=t.PromiseCallbacks||(t.PromiseCallbacks={}))}(M||(M={}));var T;!function(t){function e(e){return new t(e)}function n(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(!t&&!e.length)throw new u.ArgumentNullException("promises");return new B((Array.isArray(t)?t:[t]).concat(e))}function r(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(!t&&!e.length)throw new u.ArgumentNullException("promises");var r=(Array.isArray(t)?t:[t]).concat(e);return!r.length||r.every(function(t){return!t})?new N(function(t){return t(r)},(!0)):new N(function(t,e){var n=[],i=r.length;n.length=i;for(var o=new a.Set(r.map(function(t,e){return e})),s=function(){e=b,t=b,r.length=0,r=b,o.dispose(),o=b},u=function(){var e=t;e&&!o.count&&(s(),e(n))},l=function(e,r){t&&(n[r]=e,o.remove(r),u())},c=function(t){var n=e;n&&(s(),n(t))},f=function(t){var e=r[t];e?e.then(function(e){return l(e,t)},c):o.remove(t),u()},h=0;o&&h<i;h++)f(h)})}function i(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(!t&&!e.length)throw new u.ArgumentNullException("promises");var r=(Array.isArray(t)?t:[t]).concat(e);return!r.length||r.every(function(t){return!t})?new N(function(t){return t(r)},(!0)):new N(function(t,e){for(var n=r.length,i=new a.Set(r.map(function(t,e){return e})),o=function(){e=j,t=j,i.dispose(),i=j},s=function(){var e=t;e&&!i.count&&(o(),e(r))},u=function(t){i&&(i.remove(t),s())},l=function(t){var e=r[t];e?e.then(function(e){return u(t)},function(e){return u(t)}):u(t)},c=0;i&&c<n;c++)l(c)})}function o(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var i=e&&(Array.isArray(e)?e:[e]).concat(n);if(!i||!i.length||!(i=i.filter(function(t){return null!=t})).length)throw new s.ArgumentException("Nothing to wait for.");var o=i.length;if(1==o)return w(i[0]);for(var u=0;u<o;u++){var l=i[u];if(l instanceof E&&l.isSettled)return l}return new t(function(t,e){for(var n=function(){e=j,t=j,i.length=0,i=j},r=function(t,e){t&&(n(),t(e))},o=function(e){return r(t,e)},s=function(t){return r(e,t)},u=0,l=i;u<l.length;u++){var a=l[u];if(!t)break;a.then(o,s)}})}function l(t){return p(t)?w(t):new O(t)}function c(e,n){return void 0===n&&(n=!1),new t(e,n)}function f(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(!t&&!e.length)throw new u.ArgumentNullException("resolutions");return new B((Array.isArray(t)?t:[t]).concat(e).map(function(t){return l(t)}))}function h(e,n){return new B(e.map(function(e){return new t(function(t,r){try{t(n(e))}catch(i){r(i)}})}))}function d(t){return new R(t)}function w(t){if(!t)throw new u.ArgumentNullException(A);return p(t)?t instanceof E?t:new C(t):new O(t)}function v(t){if(!t)throw new u.ArgumentNullException(D);return new C({then:t})}!function(t){t[t.Pending=0]="Pending",t[t.Fulfilled=1]="Fulfilled",t[t.Rejected=-1]="Rejected"}(t.State||(t.State={}));var y=t.State;Object.freeze(y),t.factory=e,t.group=n,t.all=r,t.waitAll=i,t.race=o,t.resolve=l,t.using=c,t.resolveAll=f,t.map=h,t.reject=d,t.wrap=w,t.createFrom=v}(T=e.Promise||(e.Promise={})),Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=T});
//# sourceMappingURL=Promise.js.map