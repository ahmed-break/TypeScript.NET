/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */

import {Type} from "../Types";
import {DisposableBase} from "../Disposable/DisposableBase";
import {ArgumentNullException} from "../Exceptions/ArgumentNullException";
import {ArgumentException} from "../Exceptions/ArgumentException";
import {areEquivalent} from "../Compare";
import {IEventListener} from "./IEventListener";
import {IEquatable} from "../IEquatable";
import __extendsImport from "../../extends";
import {Closure} from "../FunctionTypes";
// noinspection JSUnusedLocalSymbols
const __extends = __extendsImport;

const NAME = "EventDispatcherEntry";
export class EventDispatcherEntry<TParams>
extends DisposableBase implements IEquatable<EventDispatcherEntry<TParams>>
{

	constructor(
		public type:string,
		public listener:IEventListener,
		public params?:TParams,
		finalizer?:Closure)//, useWeakReference: boolean = false)
	{
		super(finalizer);

		if(!listener)
			throw new ArgumentNullException('listener');
		if(Type.isObject(listener) && !Type.hasMemberOfType(listener, "handleEvent", Type.FUNCTION))
			throw new ArgumentException('listener', "is invalid type.  Must be a function or an object with 'handleEvent'.");

		const _ = this;
		_.type = type;
		_.listener = listener;
		_.params = params;
		_._disposableObjectName = NAME;
	}

	protected _onDispose():void
	{
		super._onDispose();
		this.listener = <any>null;
	}

	/**
	 * Safely dispatches an event if entry is not disposed and type matches.
	 * @param e
	 * @returns {IEventListener|boolean}
	 */
	dispatch(e:Event):boolean
	{
		const _ = this;
		if(_.wasDisposed) return false;

		const l = _.listener, d = l && e.type==_.type;
		if(d)
		{
			if(Type.isFunction(l))
				(<any>_).listener(e); // Use 'this' to ensure call reference.
			else
				(<EventListenerObject>l).handleEvent(e);
		}
		return d;
	}

	/**
	 * Compares type and listener object only.
	 * @param type
	 * @param listener
	 * @returns {boolean}
	 */
	matches(type:string, listener:IEventListener):boolean
	{
		const _ = this;
		return _.type==type
			&& _.listener==listener;
	}

	/**
	 * Compares type, listener, and priority.
	 * @param other
	 * @returns {boolean}
	 */
	equals(other:EventDispatcherEntry<TParams>):boolean
	{
		const _ = this;
		return _.matches(other.type, other.listener)
			&& areEquivalent(_.params, other.params, false);
	}
}

export default EventDispatcherEntry;