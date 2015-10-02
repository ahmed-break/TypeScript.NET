/*
 * @author electricessence / https://github.com/electricessence/
 * Original: http://linqjs.codeplex.com/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
var __extends=this&&this.__extends||function(t,n){function e(){this.constructor=t}for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r]);t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)};define(["require","exports","../System/Compare","../System/Types","../System/Functions","../System/Collections/Array/Compare","../System/Collections/Array/Utility","../System/Collections/Enumeration/ArrayEnumerator","../System/Collections/Enumeration/Enumerator","../System/Collections/Enumeration/EnumeratorBase","../System/Collections/Dictionaries/Dictionary","../System/Collections/Queue","../System/Disposable/Utility","../System/Disposable/DisposableBase"],function(t,n,e,r,o,i,u,c,s,a,f,l,p,v){function y(t){return v.assertIsNotDisposed(t,"Enumerable was disposed.")}function d(t){return isNaN(t)?NaN:t}function h(t,n){if(typeof t===r.Number&&!isNaN(t)&&t!=(0|t))throw new Error("'"+n+"' must be an integer.");return!0}var m=p.dispose,w=p.using,g=s.from,N=s.forEach,E=function(t){function n(){t.apply(this,arguments)}return __extends(n,t),n.prototype.Greater=function(t,n){return t>n?t:n},n.prototype.Lesser=function(t,n){return n>t?t:n},n}(o),x=new E;Object.freeze(x);var D,I=0,R=-1,_=1;return function(t){"use strict";var n=function(t){function n(n,e){t.call(this,e),this._enumeratorFactory=n}return __extends(n,t),n.fromArray=function(t){return new o(t)},n.from=function(t){if("getEnumerator"in t)return t;if(t instanceof Array||typeof t===r.Object&&"length"in t)return new o(t);throw new Error("Unsupported enumerable.")},n.toArray=function(t){if(t instanceof Array)return t.slice();if(typeof t===r.Object&&"length"in t&&(t=new o(t)),t instanceof n)return t.toArray();if("getEnumerator"in t){var e=[];return N(t.getEnumerator(),function(t,n){e[n]=t}),e}throw new Error("Unsupported enumerable.")},n.prototype.getEnumerator=function(){return this.assertIsNotDisposed(),this._enumeratorFactory()},n.prototype._onDispose=function(){t.prototype._onDispose.call(this),this._enumeratorFactory=null},n.choice=function(t){return new n(function(){return new a(null,function(n){return n.yieldReturn(t[Math.random()*t.length|0])})})},n.cycle=function(t){return new n(function(){var n=I;return new a(function(){n=I},function(e){return n>=t.length&&(n=I),e.yieldReturn(t[n++])})})},n.empty=function(){return new n(function(){return new a(null,x.False)})},n.repeat=function(t,e){return void 0===e&&(e=1/0),isNaN(e)||0>=e?n.empty():new n(isFinite(e)&&h(e,"count")?function(){var n=0|e,r=I;return new a(function(){r=I},function(e){return r++<n&&e.yieldReturn(t)})}:function(){return new a(null,function(n){return n.yieldReturn(t)})})},n.repeatWithFinalize=function(t,e){return new n(function(){var n;return new a(function(){n=t()},function(t){return t.yieldReturn(n)},function(){e(n)})})},n.make=function(t){return n.repeat(t,_)},n.range=function(t,e,r){if(void 0===t&&(t=0),void 0===e&&(e=1/0),void 0===r&&(r=1),!isFinite(t))throw new Error("Must have a valid 'start' value.");if(isNaN(e)||0>=e)return n.empty();if(!isFinite(r))throw new Error("Must have a valid 'step' value.");return new n(isFinite(e)&&h(e,"count")?function(){var n,o=0|e,i=I;return new a(function(){i=I,n=t},function(t){var u=i++<o&&t.yieldReturn(n);return u&&e>i&&(n+=r),u})}:function(){var n;return new a(function(){n=t},function(t){var e=n;return n+=r,t.yieldReturn(e)})})},n.rangeDown=function(t,e,r){return void 0===t&&(t=0),void 0===e&&(e=1/0),void 0===r&&(r=1),r=-1*Math.abs(r),n.range(t,e,r)},n.toInfinity=function(t,e){return void 0===t&&(t=0),void 0===e&&(e=1),n.range(t,1/0,e)},n.toNegativeInfinity=function(t,e){return void 0===t&&(t=0),void 0===e&&(e=1),n.rangeDown(t,1/0,e)},n.rangeTo=function(t,e,r){if(void 0===t&&(t=0),void 0===e&&(e=1/0),void 0===r&&(r=1),!isFinite(t))throw new Error("Must have a valid 'start' value.");if(isNaN(e))throw new Error("Must have a valid 'to' value.");if(!isFinite(r))throw new Error("Must have a valid 'step' value.");return r=Math.abs(r),isFinite(e)?new n(function(){var n;return e>t?new a(function(){n=t},function(t){var o=e>=n&&t.yieldReturn(n);return o&&(n+=r),o}):new a(function(){n=t},function(t){var o=n>=e&&t.yieldReturn(n);return o&&(n-=r),o})}):n.range(t,1/0,e>t?+r:-r)},n.matches=function(t,e,o){void 0===o&&(o="");var i=typeof t;if(i!=r.String)throw new Error("Cannot exec RegExp matches of type '"+i+"'.");return e instanceof RegExp&&(o+=e.ignoreCase?"i":"",o+=e.multiline?"m":"",e=e.source),-1===o.indexOf("g")&&(o+="g"),new n(function(){var n;return new a(function(){n=new RegExp(e,o)},function(e){var r=n.exec(t);return null!==r?e.yieldReturn(r):!1})})},n.generate=function(t,e){return void 0===e&&(e=1/0),isNaN(e)||0>=e?n.empty():new n(isFinite(e)&&h(e,"count")?function(){var n=0|e,r=I;return new a(function(){r=I},function(e){var o=r++;return n>o&&e.yieldReturn(t(o))})}:function(){var n=I;return new a(function(){n=I},function(e){return e.yieldReturn(t(n++))})})},n.unfold=function(t,e,r){return void 0===r&&(r=!1),new n(function(){var n,o,i=I;return new a(function(){i=I,n=t,o=!r},function(t){var r=i++;return o?o=!1:n=e(n,r),t.yieldReturn(n)})})},n.defer=function(t){return new n(function(){var n;return new a(function(){n=t().getEnumerator()},function(t){return n.moveNext()&&t.yieldReturn(n.current)},function(){m(n)})})},n.forEach=function(t,n){t&&w(s.from(t),function(t){s.forEach(t,n)})},n.max=function(t){return t.takeUntil(function(t){return t==+(1/0)},!0).aggregate(x.Greater)},n.min=function(t){return t.takeUntil(function(t){return t==-(1/0)},!0).aggregate(x.Lesser)},n.prototype.assertIsNotDisposed=function(n){return void 0===n&&(n="Enumerable was disposed."),t.prototype.assertIsNotDisposed.call(this,n)},n.prototype.forEach=function(t){var n=this;n.assertIsNotDisposed();var e=I;w(n.getEnumerator(),function(r){for(;n.assertIsNotDisposed()&&r.moveNext()&&t(r.current,e++)!==!1;);})},n.prototype.toArray=function(t){var n=[];return t?this.where(t).toArray():(this.forEach(function(t,e){n[e]=t}),n)},n.prototype.asEnumerable=function(){var t=this;return new n(function(){return t.getEnumerator()})},n.prototype.toLookup=function(t,n,e){void 0===n&&(n=x.Identity),void 0===e&&(e=x.Identity);var r=new f(e);return this.forEach(function(e){var o=t(e),i=n(e),u=r.getValue(o);void 0!==u?u.push(i):r.addByKeyValue(o,[i])}),new D(r)},n.prototype.toMap=function(t,n){var e={};return this.forEach(function(r){e[t(r)]=n(r)}),e},n.prototype.toDictionary=function(t,n,e){void 0===e&&(e=x.Identity);var r=new f(e);return this.forEach(function(e){return r.addByKeyValue(t(e),n(e))}),r},n.prototype.toJoinedString=function(t,n){return void 0===t&&(t=""),void 0===n&&(n=x.Identity),this.select(n).toArray().join(t)},n.prototype.doAction=function(t){var e=this,r=!e.assertIsNotDisposed();return new n(function(){var n,o=I;return new a(function(){y(r),o=I,n=e.getEnumerator()},function(e){for(y(r);n.moveNext();){var i=t(n.current,o++);if(i===!1||0===i)return e.yieldBreak();if(2!==i)return e.yieldReturn(n.current)}return!1},function(){m(n)})},function(){r=!0})},n.prototype.force=function(t){void 0===t&&(t=0),this.assertIsNotDisposed(),this.doAction(function(n){return t})},n.prototype.skip=function(t){var e=this;if(e.assertIsNotDisposed(),!t||isNaN(t)||0>t)return e;if(!isFinite(t))return n.empty();h(t,"count");var r=0|t;return this.doAction(function(t,n){return r>n?2:1})},n.prototype.skipWhile=function(t){this.assertIsNotDisposed();var n=!0;return this.doAction(function(e,r){return n&&(n=t(e,r)),n?2:1})},n.prototype.take=function(t){if(!t||isNaN(t)||0>t)return n.empty();var e=this;if(e.assertIsNotDisposed(),!isFinite(t))return e;h(t,"count");var r=0|t;return e.doAction(function(t,n){return r>n})},n.prototype.takeWhile=function(t){return this.assertIsNotDisposed(),this.doAction(function(n,e){return t(n,e)?1:0})},n.prototype.takeUntil=function(t,n){if(this.assertIsNotDisposed(),!n)return this.doAction(function(n,e){return t(n,e)?0:1});var e=!1;return this.doAction(function(n,r){return e?0:(e=t(n,r),1)})},n.prototype.takeExceptLast=function(t){void 0===t&&(t=1);var e=this;if(!t||isNaN(t)||0>=t)return e;if(!isFinite(t))return n.empty();h(t,"count");var r=0|t;return new n(function(){var t,n;return new a(function(){t=e.getEnumerator(),n=new l},function(e){for(;t.moveNext();)if(n.enqueue(t.current),n.count>r)return e.yieldReturn(n.dequeue());return!1},function(){m(t,n)})})},n.prototype.takeFromLast=function(t){if(!t||isNaN(t)||0>=t)return n.empty();var e=this;return isFinite(t)?(h(t,"count"),e.reverse().take(0|t)):e.reverse()},n.prototype.traverseBreadthFirst=function(t,e){var r=this;return new n(function(){var o,i,u,c=I;return new a(function(){c=I,i=[],u=0,o=r.getEnumerator()},function(r){for(;;){if(o.moveNext())return i[u++]=o.current,r.yieldReturn(e(o.current,c));if(!u)return r.yieldBreak();var s=n.fromArray(i).selectMany(t);if(!s.any())return r.yieldBreak();c++,i=[],u=0,o.dispose(),o=s.getEnumerator()}},function(){m(o),i.length=0})})},n.prototype.traverseDepthFirst=function(t,e){var r=this;return new n(function(){var n,o,i=[];return new a(function(){n=r.getEnumerator(),o=0},function(r){for(;;){if(n.moveNext()){var u=e(n.current,o);return i[o++]=n,n=t(n.current).getEnumerator(),r.yieldReturn(u)}if(0==o)return!1;n.dispose(),n=i[--o],i.length=o}},function(){try{m(n)}finally{p.disposeThese(i)}})})},n.prototype.flatten=function(){var t=this;return new n(function(){var e,r=null;return new a(function(){e=t.getEnumerator()},function(t){for(;;){if(null!=r){if(r.moveNext())return t.yieldReturn(r.current);r=null}if(e.moveNext()){var o=e.current;if(o instanceof Array){r.dispose(),r=n.fromArray(o).selectMany(x.Identity).flatten().getEnumerator();continue}return t.yieldReturn(e.current)}return!1}},function(){m(e,r)})})},n.prototype.pairwise=function(t){var e=this;return new n(function(){var n;return new a(function(){n=e.getEnumerator(),n.moveNext()},function(e){var r=n.current;return n.moveNext()&&e.yieldReturn(t(r,n.current))},function(){m(n)})})},n.prototype.scan=function(t,e){var r=void 0!==e,o=this;return new n(function(){var n,i,u;return new a(function(){n=o.getEnumerator(),u=!0},function(o){return u?(u=!1,r?o.yieldReturn(i=e):n.moveNext()&&o.yieldReturn(i=n.current)):n.moveNext()?o.yieldReturn(i=t(i,n.current)):!1},function(){m(n)})})},n.prototype.select=function(t){var e=this,r=!e.assertIsNotDisposed();return t.length<2?new b(e,null,t):new n(function(){var n,o=I;return new a(function(){y(r),o=I,n=e.getEnumerator()},function(e){return y(r),n.moveNext()?e.yieldReturn(t(n.current,o++)):!1},function(){m(n)})},function(){r=!0})},n.prototype.selectMany=function(t,e){var r=this;return e||(e=function(t,n){return n}),new n(function(){var n,o,i=I;return new a(function(){n=r.getEnumerator(),o=void 0,i=I},function(r){if(void 0===o&&!n.moveNext())return!1;do{if(!o){var u=t(n.current,i++);if(!u)continue;o=s.from(u)}if(o.moveNext())return r.yieldReturn(e(n.current,o.current));o.dispose(),o=null}while(n.moveNext());return!1},function(){m(n,o),n=null,o=null})})},n.prototype.choose=function(t){var e=this,r=!e.assertIsNotDisposed();return new n(function(){var n,o=I;return new a(function(){y(r),o=I,n=e.getEnumerator()},function(e){for(y(r);n.moveNext();){var i=t(n.current,o++);if(null!==i&&void 0!==i)return e.yieldReturn(i)}return!1},function(){m(n)})},function(){r=!0})},n.prototype.where=function(t){var e=this,r=!e.assertIsNotDisposed();return t.length<2?new k(e,t):new n(function(){var n,o=I;return new a(function(){y(r),o=I,n=e.getEnumerator()},function(e){for(y(r);n.moveNext();)if(t(n.current,o++))return e.yieldReturn(n.current);return!1},function(){m(n)})},function(){r=!0})},n.prototype.ofType=function(t){var n;switch(t){case Number:n=r.Number;break;case String:n=r.String;break;case Boolean:n=r.Boolean;break;case Function:n=r.Function;break;default:n=null}return null===n?this.where(function(n){return n instanceof t}):this.where(function(t){return typeof t===n})},n.prototype.except=function(t,e){var r=this,o=!r.assertIsNotDisposed();return new n(function(){var i,u;return new a(function(){y(o),i=r.getEnumerator(),u=new f(e),t&&n.forEach(t,function(t){return u.addByKeyValue(t,!0)})},function(t){for(y(o);i.moveNext();){var n=i.current;if(!u.containsKey(n))return u.addByKeyValue(n,!0),t.yieldReturn(n)}return!1},function(){m(i),u.clear()})},function(){o=!0})},n.prototype.distinct=function(t){return this.except(null,t)},n.prototype.distinctUntilChanged=function(t){var e=this,r=!e.assertIsNotDisposed();return new n(function(){var n,o,i=!0;return new a(function(){y(r),n=e.getEnumerator()},function(e){for(y(r);n.moveNext();){var u=t(n.current);if(i)i=!1;else if(o===u)continue;return o=u,e.yieldReturn(n.current)}return!1},function(){m(n)})},function(){r=!0})},n.prototype.reverse=function(){var t=this,e=!t.assertIsNotDisposed();return new n(function(){var n,r=I;return new a(function(){y(e),n=t.toArray(),r=0|n.length},function(t){return r>I&&t.yieldReturn(n[--r])},function(){n.length=0})},function(){e=!0})},n.prototype.shuffle=function(){var t=this,e=!t.assertIsNotDisposed();return new n(function(){var n,r,o;return new a(function(){y(e),n=t.toArray(),r=o=n.length},function(t){if(!o)return t.yieldBreak();var e=Math.random()*o|0,r=n[e];return n[e]=n[--o],n[o]=null,o%32==0&&(n.length=o),t.yieldReturn(r)},function(){n.length=0})},function(){e=!0})},n.prototype.count=function(t){var n=this;n.assertIsNotDisposed();var e=I;return t?n.forEach(function(n,r){t(n,r)&&++e}):n.forEach(function(){++e}),e},n.prototype.all=function(t){var n=!0;return this.forEach(function(e){return t(e)?void 0:(n=!1,!1)}),n},n.prototype.every=function(t){return this.all(t)},n.prototype.any=function(t){var n=!1;return t?this.forEach(function(e){return n=t(e),!n}):this.forEach(function(){return n=!0,!1}),n},n.prototype.some=function(t){return this.any(t)},n.prototype.isEmpty=function(){return!this.any()},n.prototype.contains=function(t,n){return n?this.any(function(e){return n(e)===n(t)}):this.any(function(n){return n===t})},n.prototype.indexOf=function(t,n){var r=R;return n?this.forEach(function(o,i){return e.areEqual(n(o),n(t),!0)?(r=i,!1):void 0}):this.forEach(function(n,o){return e.areEqual(n,t,!0)?(r=o,!1):void 0}),r},n.prototype.lastIndexOf=function(t,n){var r=R;return n?this.forEach(function(o,i){e.areEqual(n(o),n(t),!0)&&(r=i)}):this.forEach(function(n,o){e.areEqual(n,t,!0)&&(r=o)}),r},n.prototype.defaultIfEmpty=function(t){void 0===t&&(t=null);var e=this,r=!e.assertIsNotDisposed();return new n(function(){var n,o;return new a(function(){o=!0,y(r),n=e.getEnumerator()},function(e){return y(r),n.moveNext()?(o=!1,e.yieldReturn(n.current)):o?(o=!1,e.yieldReturn(t)):!1},function(){m(n)})})},n.prototype.zip=function(t,e){var r=this;return new n(function(){var n,o,i=I;return new a(function(){i=I,n=r.getEnumerator(),o=g(t)},function(t){return n.moveNext()&&o.moveNext()&&t.yieldReturn(e(n.current,o.current,i++))},function(){m(n,o)})})},n.prototype.zipMultiple=function(t,e){var r=this;return t.length?new n(function(){var n,o,i,u=I;return new a(function(){n=new l(t),u=I,o=r.getEnumerator(),i=null},function(t){if(o.moveNext())for(;;){for(;!i;){if(!n.count)return t.yieldBreak();var r=n.dequeue();r&&(i=g(r))}if(i.moveNext())return t.yieldReturn(e(o.current,i.current,u++));i.dispose(),i=null}return t.yieldBreak()},function(){m(o,n)})}):n.empty()},n.prototype.join=function(t,e,r,o,i){void 0===i&&(i=x.Identity);var u=this;return new n(function(){var c,s,f=null,l=I;return new a(function(){c=u.getEnumerator(),s=n.from(t).toLookup(r,x.Identity,i)},function(t){for(;;){if(null!=f){var n=f[l++];if(void 0!==n)return t.yieldReturn(o(c.current,n));n=null,l=I}if(!c.moveNext())return t.yieldBreak();var r=e(c.current);f=s.get(r)}},function(){m(c)})})},n.prototype.groupJoin=function(t,e,r,o,i){void 0===i&&(i=x.Identity);var u=this;return new n(function(){var c,s=null;return new a(function(){c=u.getEnumerator(),s=n.from(t).toLookup(r,x.Identity,i)},function(t){return c.moveNext()&&t.yieldReturn(o(c.current,s.get(e(c.current))))},function(){m(c)})})},n.prototype.concatWith=function(t){var e=this;return new n(function(){var n,r;return new a(function(){n=e.getEnumerator()},function(e){if(null!=n){if(n.moveNext())return e.yieldReturn(n.current);r=g(t),n.dispose(),n=null}return r.moveNext()?e.yieldReturn(r.current):!1},function(){m(n,r)})})},n.prototype.merge=function(t){var e=this;return t.length?1==t.length?e.concatWith(t[0]):new n(function(){var n,r;return new a(function(){n=e.getEnumerator(),r=new l(t)},function(t){for(;;){for(;!n&&r.count;)n=g(r.dequeue());if(n&&n.moveNext())return t.yieldReturn(n.current);{if(!n)return t.yieldBreak();n.dispose(),n=null}}},function(){m(n,r)})}):e},n.prototype.concat=function(){for(var t=[],n=0;n<arguments.length;n++)t[n-0]=arguments[n];var e=this;return 0==t.length?e:1==t.length?e.concatWith(t[0]):e.merge(t)},n.prototype.insertAt=function(t,e){if(isNaN(t)||0>t||!isFinite(t))throw new Error("'index' is invalid or out of bounds.");h(t,"index");var r=0|t,o=this;return o.assertIsNotDisposed(),new n(function(){var t,n,i=I,u=!1;return new a(function(){i=I,t=o.getEnumerator(),n=g(e),u=!1},function(e){return i==r&&(u=!0,n.moveNext())?e.yieldReturn(n.current):t.moveNext()?(i++,e.yieldReturn(t.current)):!u&&n.moveNext()&&e.yieldReturn(n.current)},function(){m(t,n)})})},n.prototype.alternateMultiple=function(t){var e=this;return new n(function(){var r,o,i,u;return new a(function(){u=new c(n.toArray(t)),i=e.getEnumerator();var s=i.moveNext();o=s?1:0,s&&(r=i.current)},function(t){switch(o){case 0:return t.yieldBreak();case 2:if(u.moveNext())return t.yieldReturn(u.current);u.reset(),o=1}var n=r,e=i.moveNext();return o=e?2:0,e&&(r=i.current),t.yieldReturn(n)},function(){m(i,u)})})},n.prototype.alternateSingle=function(t){return this.alternateMultiple(n.make(t))},n.prototype.alternate=function(){for(var t=[],n=0;n<arguments.length;n++)t[n-0]=arguments[n];return this.alternateMultiple(t)},n.prototype.intersect=function(t,e){var r=this;return new n(function(){var o,i,u;return new a(function(){o=r.getEnumerator(),i=new f(e),u=new f(e),n.from(t).forEach(function(t){i.addByKeyValue(t,!0)})},function(t){for(;o.moveNext();){var n=o.current;if(!u.containsKey(n)&&i.containsKey(n))return u.addByKeyValue(n,!0),t.yieldReturn(n)}return t.yieldBreak()},function(){m(o)})})},n.prototype.sequenceEqual=function(t,r){return void 0===r&&(r=e.areEqual),w(this.getEnumerator(),function(e){return w(n.from(t).getEnumerator(),function(t){for(;e.moveNext();)if(!t.moveNext()||!r(e.current,t.current))return!1;return!t.moveNext()})})},n.prototype.union=function(t,e){void 0===e&&(e=x.Identity);var r=this;return new n(function(){var o,i,u;return new a(function(){o=r.getEnumerator(),u=new f(e)},function(e){var r;if(void 0===i){for(;o.moveNext();)if(r=o.current,!u.containsKey(r))return u.addByKeyValue(r,null),e.yieldReturn(r);i=n.from(t).getEnumerator()}for(;i.moveNext();)if(r=i.current,!u.containsKey(r))return u.addByKeyValue(r,null),e.yieldReturn(r);return!1},function(){m(o,i)})})},n.prototype.orderBy=function(t){return void 0===t&&(t=x.Identity),new A(this,t,!1)},n.prototype.orderByDescending=function(t){return void 0===t&&(t=x.Identity),new A(this,t,!0)},n.prototype.groupBy=function(t,e,r){void 0===e&&(e=x.Identity);var o=this;return new n(function(){return o.toLookup(t,e,r).getEnumerator()})},n.prototype.partitionBy=function(t,e,r,o){void 0===e&&(e=x.Identity),void 0===r&&(r=function(t,n){return new E(t,n)}),void 0===o&&(o=x.Identity);var i=this;return new n(function(){var n,u,c,s,f;return new a(function(){n=i.getEnumerator(),n.moveNext()?(u=t(n.current),c=o(u),s=[e(n.current)],f=1):s=null},function(i){if(!s)return i.yieldBreak();for(var a,l;(a=n.moveNext())&&(l=n.current,c===o(t(l)));)s[f++]=e(l);var p=r(u,s);return a?(l=n.current,u=t(l),c=o(u),s=[e(l)],f=1):s=null,i.yieldReturn(p)},function(){m(n),s=null})})},n.prototype.buffer=function(t){if(1>t||!isFinite(t))throw new Error("Invalid buffer size.");h(t,"size");var e,r=this;return new n(function(){var n;return new a(function(){n=r.getEnumerator()},function(r){var o=u.initialize(t);for(e=0;t>e&&n.moveNext;)o[e++]=n.current;return o.length=e,e&&r.yieldReturn(o)},function(){m(n)})})},n.prototype.aggregate=function(t,n){return this.scan(t,n).lastOrDefault()},n.prototype.average=function(t){void 0===t&&(t=d);var n=0,e=0,r=0;return this.forEach(function(o){var i=t(o);return isNaN(i)?(n=NaN,!1):(isFinite(i)?n+=i:e+=i>0?1:-1,void++r)}),e?e*(1/0):isNaN(n)||!r?NaN:n/r},n.prototype.max=function(){return this.aggregate(x.Greater)},n.prototype.min=function(){return this.aggregate(x.Lesser)},n.prototype.maxBy=function(t){return void 0===t&&(t=x.Identity),this.aggregate(function(n,e){return t(n)>t(e)?n:e})},n.prototype.minBy=function(t){return void 0===t&&(t=x.Identity),this.aggregate(function(n,e){return t(n)<t(e)?n:e})},n.prototype.sum=function(t){void 0===t&&(t=d);var n=0,e=0;return this.forEach(function(r){var o=t(r);return isNaN(o)?(n=NaN,!1):void(isFinite(o)?n+=o:e+=o>0?1:-1)}),isNaN(n)?NaN:e?e*(1/0):n},n.prototype.product=function(t){void 0===t&&(t=d);var n=1,e=!1;return this.forEach(function(r){e=!0;var o=t(r);return isNaN(o)?(n=NaN,!1):0==o?(n=0,!1):void(n*=o)}),e&&isNaN(n)?NaN:n},n.prototype.elementAt=function(t){if(isNaN(t)||0>t||!isFinite(t))throw new Error("'index' is invalid or out of bounds.");h(t,"index");var n=0|t,e=this;e.assertIsNotDisposed();var r=void 0,o=!1;if(e.forEach(function(t,e){return e==n?(r=t,o=!0,!1):void 0}),!o)throw new Error("index is less than 0 or greater than or equal to the number of elements in source.");return r},n.prototype.elementAtOrDefault=function(t,n){if(void 0===n&&(n=null),isNaN(t)||0>t||!isFinite(t))throw new Error("'index' is invalid or out of bounds.");h(t,"index");var e=0|t,r=this;r.assertIsNotDisposed();var o=void 0,i=!1;return r.forEach(function(t,n){return n==e?(o=t,i=!0,!1):void 0}),i?o:n},n.prototype.first=function(){var t=this;t.assertIsNotDisposed();var n=void 0,e=!1;if(t.forEach(function(t){return n=t,e=!0,!1}),!e)throw new Error("first:No element satisfies the condition.");return n},n.prototype.firstOrDefault=function(t){void 0===t&&(t=null);var n=this;n.assertIsNotDisposed();var e=void 0,r=!1;return n.forEach(function(t){return e=t,r=!0,!1}),r?e:t},n.prototype.last=function(){var t=this;t.assertIsNotDisposed();var n=void 0,e=!1;if(t.forEach(function(t){e=!0,n=t}),!e)throw new Error("last:No element satisfies the condition.");return n},n.prototype.lastOrDefault=function(t){void 0===t&&(t=null);var n=this;n.assertIsNotDisposed();var e=void 0,r=!1;return n.forEach(function(t){r=!0,e=t}),r?e:t},n.prototype.single=function(){var t=this;t.assertIsNotDisposed();var n=void 0,e=!1;if(t.forEach(function(t){if(e)throw new Error("single:sequence contains more than one element.");e=!0,n=t}),!e)throw new Error("single:No element satisfies the condition.");return n},n.prototype.singleOrDefault=function(t){void 0===t&&(t=null);var n=this;n.assertIsNotDisposed();var e=void 0,r=!1;return n.forEach(function(t){if(r)throw new Error("single:sequence contains more than one element.");r=!0,e=t}),r?e:t},n.prototype.share=function(){var t=this;t.assertIsNotDisposed();var e;return new n(function(){return new a(function(){e||(e=t.getEnumerator())},function(t){return e.moveNext()&&t.yieldReturn(e.current)})},function(){m(e)})},n.prototype.memoize=function(){var t,e,r=this,o=!r.assertIsNotDisposed();return new n(function(){var n=I;return new a(function(){y(o),e||(e=r.getEnumerator()),t||(t=[]),n=I},function(r){y(o);var i=n++;return i>=t.length?e.moveNext()?r.yieldReturn(t[i]=e.current):!1:r.yieldReturn(t[i])})},function(){o=!0,t&&(t.length=0),t=null,m(e),e=null})},n.prototype.catchError=function(t){var e=this,r=!e.assertIsNotDisposed();return new n(function(){var n;return new a(function(){try{y(r),n=e.getEnumerator()}catch(t){}},function(e){try{if(y(r),n.moveNext())return e.yieldReturn(n.current)}catch(o){t(o)}return!1},function(){m(n)})})},n.prototype.finallyAction=function(t){var e=this,r=!e.assertIsNotDisposed();return new n(function(){var n;return new a(function(){y(r),n=e.getEnumerator()},function(t){return y(r),n.moveNext()?t.yieldReturn(n.current):!1},function(){try{m(n)}finally{t()}})})},n}(v);t.Enumerable=n;var o=function(t){function r(n){var e=this;e._source=n,t.call(this,function(){return e.assertIsNotDisposed(),new c(function(){return e.assertIsNotDisposed("The underlying ArrayEnumerable was disposed."),e._source})})}return __extends(r,t),r.prototype._onDispose=function(){t.prototype._onDispose.call(this),this._source=null},Object.defineProperty(r.prototype,"source",{get:function(){return this._source},enumerable:!0,configurable:!0}),r.prototype.toArray=function(){var t=this.source;if(!t)return[];if(t instanceof Array)return t.slice();for(var n=t.length,e=new Array(n),r=I;n>r;++r)e[r]=t[r];return e},r.prototype.asEnumerable=function(){return new r(this._source)},r.prototype.forEach=function(t){var n=this;n.assertIsNotDisposed();var e=n._source;if(e)for(var r=I;r<e.length&&t(e[r],r)!==!1;++r);},r.prototype.any=function(n){var e=this;e.assertIsNotDisposed();var r=e._source,o=r?r.length:0;return o&&(!n||t.prototype.any.call(this,n))},r.prototype.count=function(n){var e=this;e.assertIsNotDisposed();var r=e._source,o=r?r.length:0;return o&&(n?t.prototype.count.call(this,n):o)},r.prototype.elementAt=function(n){var e=this;e.assertIsNotDisposed();var r=e._source;return n<r.length&&n>=0?r[n]:t.prototype.elementAt.call(this,n)},r.prototype.elementAtOrDefault=function(t,n){void 0===n&&(n=null);var e=this;e.assertIsNotDisposed();var r=e._source;return t<r.length&&t>=0?r[t]:n},r.prototype.first=function(){var n=this;n.assertIsNotDisposed();var e=n._source;return e&&e.length?e[0]:t.prototype.first.call(this)},r.prototype.firstOrDefault=function(t){void 0===t&&(t=null);var n=this;n.assertIsNotDisposed();var e=n._source;return e&&e.length?e[0]:t},r.prototype.last=function(){var n=this;n.assertIsNotDisposed();var e=n._source,r=e.length;return r?e[r-1]:t.prototype.last.call(this)},r.prototype.lastOrDefault=function(t){void 0===t&&(t=null);var n=this;n.assertIsNotDisposed();var e=n._source,r=e.length;return r?e[r-1]:t},r.prototype.skip=function(t){var e=this;return!t||0>t?e.asEnumerable():new n(function(){return new c(function(){return e._source},t)})},r.prototype.takeExceptLast=function(t){void 0===t&&(t=1);var n=this,e=n._source?n._source.length:0;return n.take(e-t)},r.prototype.takeFromLast=function(t){if(!t||0>t)return n.empty();var e=this,r=e._source?e._source.length:0;return e.skip(r-t)},r.prototype.reverse=function(){var t=this;return new n(function(){return new c(function(){return t._source},t._source?t._source.length-1:0,-1)})},r.prototype.memoize=function(){return new r(this._source)},r.prototype.sequenceEqual=function(n,o){return void 0===o&&(o=e.areEqual),n instanceof Array?i.areEqual(this.source,n,!0,o):n instanceof r?n.sequenceEqual(this.source,o):t.prototype.sequenceEqual.call(this,n,o)},r.prototype.toJoinedString=function(n,e){void 0===n&&(n=""),void 0===e&&(e=x.Identity);var r=this._source;return!e&&r instanceof Array?r.join(n):t.prototype.toJoinedString.call(this,n,e)},r}(n),E=function(t){function n(n,e){t.call(this,e),this._groupKey=n}return __extends(n,t),Object.defineProperty(n.prototype,"key",{get:function(){return this._groupKey},enumerable:!0,configurable:!0}),n}(o),D=function(){function t(t){this._dictionary=t}return Object.defineProperty(t.prototype,"count",{get:function(){return this._dictionary.count},enumerable:!0,configurable:!0}),t.prototype.get=function(t){return this._dictionary.getValue(t)},t.prototype.contains=function(t){return this._dictionary.containsKey(t)},t.prototype.getEnumerator=function(){var t,n=this;return new a(function(){t=n._dictionary.getEnumerator()},function(n){if(!t.moveNext())return!1;var e=t.current;return n.yieldReturn(new E(e.key,e.value))},function(){m(t)})},t}(),k=function(t){function n(n,e){t.call(this,null),this.prevSource=n,this.prevPredicate=e}return __extends(n,t),n.prototype.where=function(e){if(e.length>1)return t.prototype.where.call(this,e);var r=this.prevPredicate,o=function(t){return r(t)&&e(t)};return new n(this.prevSource,o)},n.prototype.select=function(n){return n.length>1?t.prototype.select.call(this,n):new b(this.prevSource,this.prevPredicate,n)},n.prototype.getEnumerator=function(){var t,n=this.prevPredicate,e=this.prevSource;return new a(function(){t=e.getEnumerator()},function(e){for(;t.moveNext();)if(n(t.current))return e.yieldReturn(t.current);return!1},function(){m(t)})},n.prototype._onDispose=function(){t.prototype._onDispose.call(this),this.prevPredicate=null,this.prevSource=null},n}(n),b=function(t){function n(n,e,r){t.call(this,null),this.prevSource=n,this.prevPredicate=e,this.prevSelector=r}return __extends(n,t),n.prototype.where=function(n){return n.length>1?t.prototype.where.call(this,n):new k(this,n)},n.prototype.select=function(e){if(e.length>1)return t.prototype.select.call(this,e);var r=this,o=r.prevSelector,i=function(t){return e(o(t))};return new n(r.prevSource,r.prevPredicate,i)},n.prototype.getEnumerator=function(){var t,n=this,e=n.prevPredicate,r=n.prevSource,o=n.prevSelector;return new a(function(){t=r.getEnumerator()},function(n){for(;t.moveNext();){var r=t.current;if(null==e||e(r))return n.yieldReturn(o(r))}return!1},function(){m(t)})},n.prototype._onDispose=function(){var n=this;t.prototype._onDispose.call(this),n.prevPredicate=null,n.prevSource=null,n.prevSelector=null},n}(n),A=function(t){function e(n,e,r,o){t.call(this,null),this.source=n,this.keySelector=e,this.descending=r,this.parent=o}return __extends(e,t),e.prototype.createOrderedEnumerable=function(t,n){return new e(this.source,t,n,this)},e.prototype.thenBy=function(t){return this.createOrderedEnumerable(t,!1)},e.prototype.thenByDescending=function(t){return this.createOrderedEnumerable(t,!0)},e.prototype.getEnumerator=function(){var t,e,r=this,o=I;return new a(function(){o=I,t=[],e=[],n.forEach(r.source,function(n,r){t[r]=n,e[r]=r});var i=S.create(r);i.generateKeys(t),e.sort(function(t,n){return i.compare(t,n)})},function(n){return o<e.length?n.yieldReturn(t[e[o++]]):!1},function(){t&&(t.length=0),t=null,e&&(e.length=0),e=null})},e.prototype._onDispose=function(){t.prototype._onDispose.call(this),this.source=null,this.keySelector=null,this.descending=null,this.parent=null},e}(n),S=function(){function t(t,n,e){this.keySelector=t,this.descending=n,this.child=e,this.keys=null}return t.create=function(n,e){void 0===e&&(e=null);var r=new t(n.keySelector,n.descending,e);return n.parent?t.create(n.parent,r):r},t.prototype.generateKeys=function(t){for(var n=this,e=0|t.length,r=n.keySelector,o=new Array(e),i=I;e>i;++i)o[i]=r(t[i]);n.keys=o,n.child&&n.child.generateKeys(t)},t.prototype.compare=function(t,n){var r=this,o=r.keys,i=e.compare(o[t],o[n]);if(0==i){var u=r.child;return u?u.compare(t,n):e.compare(t,n)}return r.descending?-i:i},t}()}(D||(D={})),D});
//# sourceMappingURL=Linq.js.map