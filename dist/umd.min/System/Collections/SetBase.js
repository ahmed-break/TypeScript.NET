/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
var __extends=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)};!function(t){if("object"==typeof module&&"object"==typeof module.exports){var e=t(require,exports);void 0!==e&&(module.exports=e)}else"function"==typeof define&&define.amd&&define(["require","exports","./LinkedNodeList","../Exceptions/ArgumentNullException","./Enumeration/Enumerator","../Disposable/dispose","../Compare","./CollectionBase"],t)}(function(t,e){"use strict";var n=t("./LinkedNodeList"),o=t("../Exceptions/ArgumentNullException"),i=t("./Enumeration/Enumerator"),r=t("../Disposable/dispose"),s=t("../Compare"),u=t("./CollectionBase"),f="other",a=function(t){function e(e){t.call(this,null,s.areEqual),this._importEntries(e)}return __extends(e,t),e.prototype._getSet=function(){var t=this._set;return t||(this._set=t=new n["default"]),t},e.prototype.getCount=function(){return this._set?this._set.unsafeCount:0},e.prototype.exceptWith=function(t){var e=this;if(!t)throw new o["default"](f);i.forEach(t,function(t){e._removeInternal(t)&&e._incrementModified()}),e._signalModification()},e.prototype.intersectWith=function(t){if(!t)throw new o["default"](f);var n=this;if(t instanceof e){var i=n._set;i&&i.forEach(function(e){!t.contains(e.value)&&n._removeInternal(e.value)&&n._incrementModified()}),n._signalModification()}else r.using(n.newUsing(t),function(t){return n.intersectWith(t)})},e.prototype.isProperSubsetOf=function(t){var n=this;if(!t)throw new o["default"](f);return t instanceof e?t.isProperSupersetOf(this):r.using(this.newUsing(t),function(t){return t.isProperSupersetOf(n)})},e.prototype.isProperSupersetOf=function(t){var n=this;if(!t)throw new o["default"](f);var s,u=!0;return t instanceof e?(u=this.isSupersetOf(t),s=t.getCount()):r.using(this.newUsing(),function(e){i.forEach(t,function(t){return e.add(t),u=n.contains(t)}),s=e.getCount()}),u&&this.getCount()>s},e.prototype.isSubsetOf=function(t){var n=this;if(!t)throw new o["default"](f);return t instanceof e?t.isSupersetOf(this):r.using(this.newUsing(t),function(t){return t.isSupersetOf(n)})},e.prototype.isSupersetOf=function(t){var e=this;if(!t)throw new o["default"](f);var n=!0;return i.forEach(t,function(t){return n=e.contains(t)}),n},e.prototype.overlaps=function(t){var e=this;if(!t)throw new o["default"](f);var n=!1;return i.forEach(t,function(t){return!(n=e.contains(t))}),n},e.prototype.setEquals=function(t){if(!t)throw new o["default"](f);return this.getCount()==(t instanceof e?t.getCount():r.using(this.newUsing(t),function(t){return t.getCount()}))&&this.isSubsetOf(t)},e.prototype.symmetricExceptWith=function(t){if(!t)throw new o["default"](f);var n=this;t instanceof e?(i.forEach(t,function(t){n.contains(t)?n._removeInternal(t)&&n._incrementModified():n._addInternal(t)&&n._incrementModified()}),n._signalModification()):r.using(this.newUsing(t),function(t){return n.symmetricExceptWith(t)})},e.prototype.unionWith=function(t){this.importEntries(t)},e.prototype._clearInternal=function(){var t=this._set;return t?t.clear():0},e.prototype._onDispose=function(){t.prototype._onDispose.call(this),this._set=null},e.prototype.contains=function(t){return!(!this.getCount()||!this._getNode(t))},e.prototype.getEnumerator=function(){var t=this._set;return t&&this.getCount()?n["default"].valueEnumeratorFrom(t):i.empty},e.prototype.forEach=function(e,n){void 0===n&&(n=!1),n?t.prototype.forEach.call(this,e,n):this._set.forEach(function(t,n){return e(t.value,n)})},e}(u["default"]);Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=a});
//# sourceMappingURL=SetBase.js.map
