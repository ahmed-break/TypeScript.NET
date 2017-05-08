/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
define(["require","exports","./TaskHandlerBase","../../Exceptions/ArgumentNullException","../../../extends"],function(e,t,n,o,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i["default"],s=function(e){function t(t){var n=e.call(this)||this;if(n._action=t,!t)throw new o.ArgumentNullException("action");return n}return r(t,e),t.prototype._onExecute=function(){this._action()},t.prototype._onDispose=function(){e.prototype._onDispose.call(this),this._action=null},t}(n.TaskHandlerBase);t.TaskHandler=s,t["default"]=s});
//# sourceMappingURL=TaskHandler.js.map