define(["require","exports","../Compare","./LinkedNodeList","../Exceptions/InvalidOperationException","../Exceptions/ArgumentNullException","./CollectionBase","../../extends"],function(t,e,n,r,i,o,a,s){"use strict";function l(t,e){if(!t)return null;if(!e)throw new o.ArgumentNullException("list");var n=t.external;return n||(t.external=n=new v(e,t)),n||null}function u(t,e){if(!t)throw new o.ArgumentNullException("node");if(!e)throw new o.ArgumentNullException("list");if(t.list!=e)throw new i.InvalidOperationException("Provided node does not belong to this list.");var n=t._nodeInternal;if(!n)throw new i.InvalidOperationException("Provided node is not valid.");return n}function f(t){if(t){var e=t.external;e&&(e._list=p,e._nodeInternal=p),t.external=p}}var d=s["default"],p=void 0,h=function(){function t(t,e,n){this.value=t,this.previous=e,this.next=n}return t.prototype.assertDetached=function(){if(this.next||this.previous)throw new i.InvalidOperationException("Adding a node that is already placed.")},t}(),c=function(t){function e(e,i){void 0===i&&(i=n.areEqual),t.call(this,p,i),this._listInternal=new r.LinkedNodeList,this._importEntries(e)}return d(e,t),e.prototype.assertVersion=function(e){this._listInternal?this._listInternal.assertVersion(e):t.prototype.assertVersion.call(this,e)},e.prototype._onDispose=function(){t.prototype._onDispose.call(this);var e=this._listInternal;this._listInternal=null,e.dispose()},e.prototype.getCount=function(){var t=this._listInternal;return t?t.unsafeCount:0},e.prototype._addInternal=function(t){return this._listInternal.addNode(new h(t)),!0},e.prototype._removeInternal=function(t,e){void 0===e&&(e=1/0);var n=this,r=n._equalityComparer,i=n._listInternal,o=0;return i.forEach(function(i){return i&&r(t,i.value)&&n._removeNodeInternal(i)&&o++,o<e},!0),o},e.prototype._clearInternal=function(){var t=this._listInternal;return t.forEach(function(t){return f(t)}),t.clear()},e.prototype.forEach=function(e,n){return void 0===n&&(n=!1),this.throwIfDisposed(),n?t.prototype.forEach.call(this,e,n):this._listInternal.forEach(function(t,n){return e(t.value,n)})},e.prototype.getEnumerator=function(){return this.throwIfDisposed(),r.LinkedNodeList.valueEnumeratorFrom(this._listInternal)},e.prototype._findFirst=function(t){for(var e=this,n=e._equalityComparer,r=e._listInternal&&e._listInternal.first;r;){if(n(t,r.value))return r;r=r.next}return null},e.prototype._findLast=function(t){for(var e=this,n=e._equalityComparer,r=e._listInternal&&e._listInternal.last;r;){if(n(t,r.value))return r;r=r.previous}return null},e.prototype.removeOnce=function(t){return 0!==this.remove(t,1)},Object.defineProperty(e.prototype,"first",{get:function(){var t=this._listInternal;return t&&l(t.first,this)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"firstValue",{get:function(){var t=this._listInternal,e=t&&t.first;return e?e.value:p},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"last",{get:function(){var t=this._listInternal;return l(t.last,this)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"lastValue",{get:function(){var t=this._listInternal,e=t&&t.last;return e?e.value:p},enumerable:!0,configurable:!0}),e.prototype.getValueAt=function(t){var e=this._listInternal,n=e&&e.getNodeAt(t);return n?n.value:p},e.prototype.getNodeAt=function(t){var e=this._listInternal;return e&&l(e.getNodeAt(t),this)},e.prototype.find=function(t){var e=this._listInternal;return e&&l(this._findFirst(t),this)},e.prototype.findLast=function(t){var e=this._listInternal;return e&&l(this._findLast(t),this)},e.prototype.addFirst=function(t){this.assertModifiable(),this._listInternal.addNodeBefore(new h(t)),this._signalModification(!0)},e.prototype.addLast=function(t){this.add(t)},e.prototype._removeNodeInternal=function(t){var e=this;return!(!t||!e._listInternal.removeNode(t))&&(f(t),e._signalModification(!0),!0)},e.prototype.removeFirst=function(){var t=this;return t.assertModifiable(),t._removeNodeInternal(t._listInternal.first)},e.prototype.removeLast=function(){var t=this;return t.assertModifiable(),t._removeNodeInternal(t._listInternal.last)},e.prototype.removeAt=function(t){var e=this;return e.assertModifiable(),e._removeNodeInternal(e._listInternal.getNodeAt(t))},e.prototype.removeNode=function(t){var e=this;return e.assertModifiable(),e._removeNodeInternal(u(t,e))},e.prototype.addBefore=function(t,e){var n=this;n.assertModifiable(),n._listInternal.addNodeBefore(new h(e),u(t,n)),n._signalModification(!0)},e.prototype.addAfter=function(t,e){var n=this;n.assertModifiable(),n._listInternal.addNodeAfter(new h(e),u(t,n)),n._signalModification(!0)},e}(a.CollectionBase);e.LinkedList=c;var v=function(){function t(t,e){this._list=t,this._nodeInternal=e}return t.prototype.throwIfDetached=function(){if(!this._list)throw new Error("This node has been detached from its list and is no longer valid.")},Object.defineProperty(t.prototype,"list",{get:function(){return this._list},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"previous",{get:function(){return this.throwIfDetached(),l(this._nodeInternal.previous,this._list)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"next",{get:function(){return this.throwIfDetached(),l(this._nodeInternal.next,this._list)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"value",{get:function(){return this.throwIfDetached(),this._nodeInternal.value},set:function(t){this.throwIfDetached(),this._nodeInternal.value=t},enumerable:!0,configurable:!0}),t.prototype.addBefore=function(t){this.throwIfDetached(),this._list.addBefore(this,t)},t.prototype.addAfter=function(t){this.throwIfDetached(),this._list.addAfter(this,t)},t.prototype.remove=function(){var t=this,e=t._list;e&&e.removeNode(this),t._list=p,t._nodeInternal=p},t.prototype.dispose=function(){this.remove()},t}();Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=c});
//# sourceMappingURL=LinkedList.js.map