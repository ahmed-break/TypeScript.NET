import { TaskHandlerBase } from "./TaskHandlerBase";
import { Func } from "../../FunctionTypes";
import { ITaskState } from "./ITaskState";
export declare class Task<T> extends TaskHandlerBase {
    private _result;
    constructor(valueFactory: Func<T>);
    protected _onExecute(): void;
    protected getResult(): T;
    protected getState(): ITaskState<T>;
    start(defer?: number): void;
    runSynchronously(): void;
    readonly state: ITaskState<T>;
    readonly result: T;
    readonly error: any;
    protected _onDispose(): void;
}
export default Task;
