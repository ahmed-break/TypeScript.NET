!function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports);void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define(["require","exports","./Enumeration/Enumerator","../Compare","../Exceptions/ArgumentNullException","../Exceptions/InvalidOperationException","../Disposable/DisposableBase","../../extends","../Environment"],e)}(function(require,exports){"use strict";var Enumerator_1=require("./Enumeration/Enumerator"),Compare_1=require("../Compare"),ArgumentNullException_1=require("../Exceptions/ArgumentNullException"),InvalidOperationException_1=require("../Exceptions/InvalidOperationException"),DisposableBase_1=require("../Disposable/DisposableBase"),extends_1=require("../../extends"),Environment_1=require("../Environment"),__extends=extends_1["default"],NAME="CollectionBase",CMDC="Cannot modify a disposed collection.",CMRO="Cannot modify a read-only collection.",LINQ_PATH="../../System.Linq/Linq",CollectionBase=function(_super){function CollectionBase(e,t){void 0===t&&(t=Compare_1.areEqual),_super.call(this),this._equalityComparer=t;var i=this;i._disposableObjectName=NAME,i._importEntries(e),i._updateRecursion=0,i._modifiedCount=0,i._version=0}return __extends(CollectionBase,_super),Object.defineProperty(CollectionBase.prototype,"count",{get:function(){return this.getCount()},enumerable:!0,configurable:!0}),CollectionBase.prototype.getIsReadOnly=function(){return!1},Object.defineProperty(CollectionBase.prototype,"isReadOnly",{get:function(){return this.getIsReadOnly()},enumerable:!0,configurable:!0}),CollectionBase.prototype.assertModifiable=function(){if(this.throwIfDisposed(CMDC),this.getIsReadOnly())throw new InvalidOperationException_1.InvalidOperationException(CMRO)},CollectionBase.prototype.assertVersion=function(e){if(e!==this._version)throw new InvalidOperationException_1.InvalidOperationException("Collection was modified.")},CollectionBase.prototype._onModified=function(){},CollectionBase.prototype._signalModification=function(e){var t=this;if(e&&t._modifiedCount++,t._modifiedCount&&!this._updateRecursion){t._modifiedCount=0,t._version++;try{t._onModified()}catch(i){console.error(i)}return!0}return!1},CollectionBase.prototype._incrementModified=function(){this._modifiedCount++},Object.defineProperty(CollectionBase.prototype,"isUpdating",{get:function(){return 0!=this._updateRecursion},enumerable:!0,configurable:!0}),CollectionBase.prototype.handleUpdate=function(e){if(!e)return!1;var t=this;t.assertModifiable(),t._updateRecursion++;var i=!1;try{(i=e())&&t._modifiedCount++}finally{t._updateRecursion--}return t._signalModification(),i},CollectionBase.prototype.add=function(e){var t=this;t.assertModifiable(),t._updateRecursion++;try{t._addInternal(e)&&t._modifiedCount++}finally{t._updateRecursion--}t._signalModification()},CollectionBase.prototype.remove=function(e,t){void 0===t&&(t=1/0);var i=this;i.assertModifiable(),i._updateRecursion++;var o;try{(o=i._removeInternal(e,t))&&i._modifiedCount++}finally{i._updateRecursion--}return i._signalModification(),o},CollectionBase.prototype.clear=function(){var e=this;e.assertModifiable(),e._updateRecursion++;var t;try{(t=e._clearInternal())&&e._modifiedCount++}finally{e._updateRecursion--}return e._signalModification(),t},CollectionBase.prototype._onDispose=function(){_super.prototype._onDispose.call(this),this._clearInternal(),this._version=0,this._updateRecursion=0,this._modifiedCount=0;var e=this._linq;this._linq=void 0,e&&e.dispose()},CollectionBase.prototype._importEntries=function(e){var t=this,i=0;if(e)if(Array.isArray(e))for(var o=0,n=e;o<n.length;o++){var r=n[o];this._addInternal(r)&&i++}else Enumerator_1.forEach(e,function(e){t._addInternal(e)&&i++});return i},CollectionBase.prototype.importEntries=function(e){var t=this;if(!e)return 0;t.assertModifiable(),t._updateRecursion++;var i;try{(i=t._importEntries(e))&&t._modifiedCount++}finally{t._updateRecursion--}return t._signalModification(),i},CollectionBase.prototype.contains=function(e){if(!this.getCount())return!1;var t=!1,i=this._equalityComparer;return this.forEach(function(o){return!(t=i(e,o))}),t},CollectionBase.prototype.forEach=function(e,t){if(this.wasDisposed)return 0;if(!t)return Enumerator_1.forEach(this.getEnumerator(),e);var i=this.toArray();try{return Enumerator_1.forEach(i,e)}finally{i.length=0}},CollectionBase.prototype.copyTo=function(e,t){if(void 0===t&&(t=0),!e)throw new ArgumentNullException_1.ArgumentNullException("target");var i=this.getCount();if(i){var o=i+t;e.length<o&&(e.length=o);for(var n=this.getEnumerator();n.moveNext();)e[t++]=n.current}return e},CollectionBase.prototype.toArray=function(){var e=this.getCount();return e?this.copyTo(e>65536?new Array(e):[]):[]},Object.defineProperty(CollectionBase.prototype,"linq",{get:function(){this.throwIfDisposed();var e=this._linq;if(!e){if(!Environment_1.isNodeJS||!Environment_1.isCommonJS)throw"using .linq to load and initialize a ILinqEnumerable is currently only supported within a NodeJS environment.\nImport System.Linq/Linq and use Enumerable.from(e) instead.\nOr use .linqAsync(callback) for AMD/RequireJS.";if(this._linq=e=eval("require")(LINQ_PATH)["default"].from(this),!e)throw"There was a problem importing System.Linq/Linq"}return e},enumerable:!0,configurable:!0}),CollectionBase.prototype.linqAsync=function(callback){var _this=this;this.throwIfDisposed();var e=this._linq;if(!e)if(Environment_1.isRequireJS)eval("require")([LINQ_PATH],function(t){if(e=_this._linq,e||(_this._linq=e=t["default"].from(_this)),!e)throw"There was a problem importing System.Linq/Linq";callback&&callback(e),callback=void 0});else{if(!Environment_1.isNodeJS||!Environment_1.isCommonJS)throw"Cannot find a compatible loader for importing System.Linq/Linq";e=this.linq}return e&&callback&&callback(e),e},CollectionBase}(DisposableBase_1.DisposableBase);exports.CollectionBase=CollectionBase});
//# sourceMappingURL=CollectionBase.js.map