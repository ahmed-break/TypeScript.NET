!function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports);void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define(["require","exports","../Types","../Collections/Dictionaries/OrderedStringKeyDictionary","../Collections/Enumeration/Enumerator","./QueryParams","../../extends"],e)}(function(e,t){"use strict";var r=e("../Types"),i=e("../Collections/Dictionaries/OrderedStringKeyDictionary"),o=e("../Collections/Enumeration/Enumerator"),n=e("./QueryParams"),u=e("../../extends"),s=u["default"],a=function(e){function t(t,r){void 0===r&&(r=!0),e.call(this),this.importQuery(t,r)}return s(t,e),t.init=function(e,r){return void 0===r&&(r=!0),new t(e,r)},t.prototype.importQuery=function(e,t){return void 0===t&&(t=!0),r.Type.isString(e)?this.importFromString(e,t):o.isEnumerableOrArrayLike(e)?this.importEntries(e):this.importMap(e),this},t.prototype.importFromString=function(e,t,r){void 0===t&&(t=!0),void 0===r&&(r=!0);var i=this;return n.parse(e,function(e,t){if(i.containsKey(e)){var r=i.getValue(e);Array.isArray(r)?r.push(t):i.setValue(e,[r,t])}else i.setValue(e,t)},t,r),this},t.prototype.encode=function(e){return n.encode(this,e)},t.prototype.toString=function(){return this.encode()},t}(i.OrderedStringKeyDictionary);t.QueryBuilder=a,Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a});
//# sourceMappingURL=QueryBuilder.js.map