import { Type } from "../Types";
import { DisposableBase } from "../Disposable/DisposableBase";
import { ArgumentNullException } from "../Exceptions/ArgumentNullException";
import { ArgumentException } from "../Exceptions/ArgumentException";
import { areEquivalent } from "../Compare";
import __extendsImport from "../../extends";
const __extends = __extendsImport;
const NAME = "EventDispatcherEntry";
export class EventDispatcherEntry extends DisposableBase {
    constructor(type, listener, params, finalizer) {
        super(finalizer);
        this.type = type;
        this.listener = listener;
        this.params = params;
        if (!listener)
            throw new ArgumentNullException('listener');
        if (Type.isObject(listener) && !Type.hasMemberOfType(listener, "handleEvent", Type.FUNCTION))
            throw new ArgumentException('listener', "is invalid type.  Must be a function or an object with 'handleEvent'.");
        const _ = this;
        _.type = type;
        _.listener = listener;
        _.params = params;
        _._disposableObjectName = NAME;
    }
    _onDispose() {
        super._onDispose();
        this.listener = null;
    }
    dispatch(e) {
        const _ = this;
        if (_.wasDisposed)
            return false;
        const l = _.listener, d = l && e.type == _.type;
        if (d) {
            if (Type.isFunction(l))
                _.listener(e);
            else
                l.handleEvent(e);
        }
        return d;
    }
    matches(type, listener) {
        const _ = this;
        return _.type == type
            && _.listener == listener;
    }
    equals(other) {
        const _ = this;
        return _.matches(other.type, other.listener)
            && areEquivalent(_.params, other.params, false);
    }
}
export default EventDispatcherEntry;
//# sourceMappingURL=EventDispatcherEntry.js.map