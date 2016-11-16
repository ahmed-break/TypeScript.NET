!function(t){if("object"==typeof module&&"object"==typeof module.exports){var e=t(require,exports);void 0!==e&&(module.exports=e)}else"function"==typeof define&&define.amd&&define(["require","exports","../Compare","./LinkedNodeList","../Exceptions/InvalidOperationException","../Exceptions/ArgumentNullException","./CollectionBase","../../extends"],t)}(function(t,e){"use strict";function n(t,e){if(!t)return null;if(!e)throw new l.ArgumentNullException("list");var n=t.external;return n||(t.external=n=new v(e,t)),n||null}function r(t,e){if(!t)throw new l.ArgumentNullException("node");if(!e)throw new l.ArgumentNullException("list");if(t.list!=e)throw new a.InvalidOperationException("Provided node does not belong to this list.");var n=t._nodeInternal;if(!n)throw new a.InvalidOperationException("Provided node is not valid.");return n}function i(t){if(t){var e=t.external;e&&(e._list=p,e._nodeInternal=p),t.external=p}}var o=t("../Compare"),s=t("./LinkedNodeList"),a=t("../Exceptions/InvalidOperationException"),l=t("../Exceptions/ArgumentNullException"),u=t("./CollectionBase"),d=t("../../extends"),f=d["default"],p=void 0,c=function(){function t(t,e,n){this.value=t,this.previous=e,this.next=n}return t.prototype.assertDetached=function(){if(this.next||this.previous)throw new a.InvalidOperationException("Adding a node that is already placed.")},t}(),h=function(t){function e(e,n){void 0===n&&(n=o.areEqual),t.call(this,p,n),this._listInternal=new s.LinkedNodeList,this._importEntries(e)}return f(e,t),e.prototype.assertVersion=function(e){this._listInternal?this._listInternal.assertVersion(e):t.prototype.assertVersion.call(this,e)},e.prototype._onDispose=function(){t.prototype._onDispose.call(this);var e=this._listInternal;this._listInternal=null,e.dispose()},e.prototype.getCount=function(){var t=this._listInternal;return t?t.unsafeCount:0},e.prototype._addInternal=function(t){return this._listInternal.addNode(new c(t)),!0},e.prototype._removeInternal=function(t,e){void 0===e&&(e=1/0);var n=this,r=n._equalityComparer,i=n._listInternal,o=0;return i.forEach(function(i){return i&&r(t,i.value)&&n._removeNodeInternal(i)&&o++,o<e},!0),o},e.prototype._clearInternal=function(){var t=this._listInternal;return t.forEach(function(t){return i(t)}),t.clear()},e.prototype.forEach=function(e,n){return void 0===n&&(n=!1),this.throwIfDisposed(),n?t.prototype.forEach.call(this,e,n):this._listInternal.forEach(function(t,n){return e(t.value,n)})},e.prototype.getEnumerator=function(){return this.throwIfDisposed(),s.LinkedNodeList.valueEnumeratorFrom(this._listInternal)},e.prototype._findFirst=function(t){for(var e=this,n=e._equalityComparer,r=e._listInternal&&e._listInternal.first;r;){if(n(t,r.value))return r;r=r.next}return null},e.prototype._findLast=function(t){for(var e=this,n=e._equalityComparer,r=e._listInternal&&e._listInternal.last;r;){if(n(t,r.value))return r;r=r.previous}return null},e.prototype.removeOnce=function(t){return 0!==this.remove(t,1)},Object.defineProperty(e.prototype,"first",{get:function(){var t=this._listInternal;return t&&n(t.first,this)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"firstValue",{get:function(){var t=this._listInternal,e=t&&t.first;return e?e.value:p},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"last",{get:function(){var t=this._listInternal;return n(t.last,this)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"lastValue",{get:function(){var t=this._listInternal,e=t&&t.last;return e?e.value:p},enumerable:!0,configurable:!0}),e.prototype.getValueAt=function(t){var e=this._listInternal,n=e&&e.getNodeAt(t);return n?n.value:p},e.prototype.getNodeAt=function(t){var e=this._listInternal;return e&&n(e.getNodeAt(t),this)},e.prototype.find=function(t){var e=this._listInternal;return e&&n(this._findFirst(t),this)},e.prototype.findLast=function(t){var e=this._listInternal;return e&&n(this._findLast(t),this)},e.prototype.addFirst=function(t){this.assertModifiable(),this._listInternal.addNodeBefore(new c(t)),this._signalModification(!0)},e.prototype.addLast=function(t){this.add(t)},e.prototype._removeNodeInternal=function(t){var e=this;return!(!t||!e._listInternal.removeNode(t))&&(i(t),e._signalModification(!0),!0)},e.prototype.removeFirst=function(){var t=this;return t.assertModifiable(),t._removeNodeInternal(t._listInternal.first)},e.prototype.removeLast=function(){var t=this;return t.assertModifiable(),t._removeNodeInternal(t._listInternal.last)},e.prototype.removeAt=function(t){var e=this;return e.assertModifiable(),e._removeNodeInternal(e._listInternal.getNodeAt(t))},e.prototype.removeNode=function(t){var e=this;return e.assertModifiable(),e._removeNodeInternal(r(t,e))},e.prototype.addBefore=function(t,e){var n=this;n.assertModifiable(),n._listInternal.addNodeBefore(new c(e),r(t,n)),n._signalModification(!0)},e.prototype.addAfter=function(t,e){var n=this;n.assertModifiable(),n._listInternal.addNodeAfter(new c(e),r(t,n)),n._signalModification(!0)},e}(u.CollectionBase);e.LinkedList=h;var v=function(){function t(t,e){this._list=t,this._nodeInternal=e}return t.prototype.throwIfDetached=function(){if(!this._list)throw new Error("This node has been detached from its list and is no longer valid.")},Object.defineProperty(t.prototype,"list",{get:function(){return this._list},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"previous",{get:function(){return this.throwIfDetached(),n(this._nodeInternal.previous,this._list)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"next",{get:function(){return this.throwIfDetached(),n(this._nodeInternal.next,this._list)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"value",{get:function(){return this.throwIfDetached(),this._nodeInternal.value},set:function(t){this.throwIfDetached(),this._nodeInternal.value=t},enumerable:!0,configurable:!0}),t.prototype.addBefore=function(t){this.throwIfDetached(),this._list.addBefore(this,t)},t.prototype.addAfter=function(t){this.throwIfDetached(),this._list.addAfter(this,t)},t.prototype.remove=function(){var t=this,e=t._list;e&&e.removeNode(this),t._list=p,t._nodeInternal=p},t.prototype.dispose=function(){this.remove()},t}();Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=h});
//# sourceMappingURL=LinkedList.js.map