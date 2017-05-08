/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
!function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports);void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define(["require","exports","../Text/Utility","../Exceptions/InvalidOperationException","../Exceptions/ArgumentException","../Exceptions/ArgumentNullException","./Enumeration/EnumeratorBase","../../extends"],e)}(function(e,t){"use strict";function n(e,t){if(void 0===t&&(t="node"),null==e)throw new s.ArgumentNullException(t);if(e.next||e.previous)throw new o.InvalidOperationException("Cannot add a node to a LinkedNodeList that is already linked.")}Object.defineProperty(t,"__esModule",{value:!0});var r=e("../Text/Utility"),o=e("../Exceptions/InvalidOperationException"),i=e("../Exceptions/ArgumentException"),s=e("../Exceptions/ArgumentNullException"),u=e("./Enumeration/EnumeratorBase"),l=e("../../extends"),f=(l["default"],function(){function e(){this._first=null,this._last=null,this.unsafeCount=0,this._version=0}return e.prototype.assertVersion=function(e){if(e!==this._version)throw new o.InvalidOperationException("Collection was modified.");return!0},Object.defineProperty(e.prototype,"first",{get:function(){return this._first},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"last",{get:function(){return this._last},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"count",{get:function(){for(var e=this._first,t=0;e;)t++,e=e.next;return t},enumerable:!0,configurable:!0}),e.prototype.forEach=function(e,t){var n=this,r=null,o=n.first,i=n._version,s=0;do t||n.assertVersion(i),r=o,o=r&&r.next;while(r&&e(r,s++)!==!1);return s},e.prototype.map=function(e){if(!e)throw new s.ArgumentNullException("selector");var t=[];return this.forEach(function(n,r){t.push(e(n,r))}),t},e.prototype.clear=function(){var e,t=this,n=0,r=0;for(e=t._first,t._first=null;e;){n++;var o=e;e=e.next,o.next=null}for(e=t._last,t._last=null;e;){r++;var o=e;e=e.previous,o.previous=null}return n!==r&&console.warn("LinkedNodeList: Forward versus reverse count does not match when clearing. Forward: "+n+", Reverse: "+r),t._version++,t.unsafeCount=0,n},e.prototype.dispose=function(){this.clear()},e.prototype.contains=function(e){return this.indexOf(e)!=-1},e.prototype.getNodeAt=function(e){if(e<0)return null;for(var t=this._first,n=0;t&&n++<e;)t=t.next||null;return t},e.prototype.find=function(e){var t=null;return this.forEach(function(n,r){if(e(n,r))return t=n,!1}),t},e.prototype.indexOf=function(e){if(e&&(e.previous||e.next)){var t=0,n=void 0,r=this._first;do{if(n=r,n===e)return t;t++}while(r=n&&n.next)}return-1},e.prototype.removeFirst=function(){return!!this._first&&this.removeNode(this._first)},e.prototype.removeLast=function(){return!!this._last&&this.removeNode(this._last)},e.prototype.removeNode=function(e){if(null==e)throw new s.ArgumentNullException("node");var t=this,n=e.previous||null,o=e.next||null,u=!1,l=!1;if(n?n.next=o:t._first==e?t._first=o:u=!0,o?o.previous=n:t._last==e?t._last=n:l=!0,u!==l)throw new i.ArgumentException("node",r.format("Provided node is has no {0} reference but is not the {1} node!",u?"previous":"next",u?"first":"last"));var f=!u&&!l;return f&&(t._version++,t.unsafeCount--,e.previous=null,e.next=null),f},e.prototype.addNode=function(e){this.addNodeAfter(e)},e.prototype.addNodeBefore=function(e,t){void 0===t&&(t=null),n(e);var r=this;if(t||(t=r._first),t){var o=t.previous;e.previous=o,e.next=t,t.previous=e,o&&(o.next=e),t==r._first&&(r._first=e)}else r._first=r._last=e;r._version++,r.unsafeCount++},e.prototype.addNodeAfter=function(e,t){void 0===t&&(t=null),n(e);var r=this;if(t||(t=r._last),t){var o=t.next;e.next=o,e.previous=t,t.next=e,o&&(o.previous=e),t==r._last&&(r._last=e)}else r._first=r._last=e;r._version++,r.unsafeCount++},e.prototype.replace=function(e,t){if(null==e)throw new s.ArgumentNullException("node");if(e!=t){n(t,"replacement");var r=this;t.previous=e.previous,t.next=e.next,e.previous&&(e.previous.next=t),e.next&&(e.next.previous=t),e==r._first&&(r._first=t),e==r._last&&(r._last=t),r._version++}},e.valueEnumeratorFrom=function(e){if(!e)throw new s.ArgumentNullException("list");var t,n,r;return new u.EnumeratorBase(function(){t=null,n=e.first,r=e._version},function(o){return n?(e.assertVersion(r),t=n,n=t&&t.next,o.yieldReturn(t.value)):o.yieldBreak()})},e.copyValues=function(e,t,n){if(void 0===n&&(n=0),e&&e.first){if(!t)throw new s.ArgumentNullException("array");e.forEach(function(e,r){t[n+r]=e.value})}return t},e}());t.LinkedNodeList=f,t["default"]=f});
//# sourceMappingURL=LinkedNodeList.js.map