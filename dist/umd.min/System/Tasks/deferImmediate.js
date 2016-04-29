/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 * Based on code from: https://github.com/kriskowal/q
 */
!function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports);void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define(["require","exports","../Types","../Collections/LinkedNodeList","../Collections/Queue"],e)}(function(e,t){"use strict";function o(){for(var e;e=p.first;){var t=e.task,o=e.domain;p.removeNode(e),o&&o.enter(),n(t,o)}for(var i;i=m.dequeue();)n(i);l=!1}function n(e,t){try{e()}catch(n){if(a)throw t&&t.exit(),setTimeout(o,0),t&&t.enter(),n;setTimeout(function(){throw n},0)}t&&t.exit()}function i(){l||(l=!0,u())}function s(e){var t=this,o={task:e,domain:a&&process.domain};return p.addNode(o),i(),{cancel:function(){return!!p.removeNode(o)},dispose:function(){t.cancel()}}}function r(e){m.enqueue(e),i()}var u,f=e("../Types"),c=e("../Collections/LinkedNodeList"),d=e("../Collections/Queue"),a=!1,l=!1,p=new c["default"],m=new d["default"];if(Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=s,t.runAfterDeferred=r,f["default"].isObject(process)&&"[object process]"===process.toString()&&process.nextTick)a=!0,u=function(){process.nextTick(o)};else if("function"==typeof setImmediate)u="undefined"!=typeof window?setImmediate.bind(window,o):function(){setImmediate(o)};else if("undefined"!=typeof MessageChannel){var v=new MessageChannel;v.port1.onmessage=function(){u=y,v.port1.onmessage=o,o()};var y=function(){v.port2.postMessage(0)};u=function(){setTimeout(o,0),y()}}else u=function(){setTimeout(o,0)}});
//# sourceMappingURL=deferImmediate.js.map