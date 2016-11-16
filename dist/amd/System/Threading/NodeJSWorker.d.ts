import { WorkerLike } from "./WorkerType";
import { ObservableBase } from "../Observable/ObservableBase";
export declare class NodeJSWorker extends ObservableBase<any> implements WorkerLike {
    private _process;
    onmessage: (message: {
        data: any;
    }) => void;
    onerror: (error: any) => void;
    constructor(url: string);
    protected _onNext(data: any): void;
    protected _onError(error: any): void;
    protected _onDispose(): void;
    postMessage(obj: any): void;
    terminate(): void;
}
export default NodeJSWorker;
