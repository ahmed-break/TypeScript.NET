import { IIterator } from "./IIterator";
import { SimpleEnumerableBase } from "./SimpleEnumerableBase";
export declare class IteratorEnumerator<T> extends SimpleEnumerableBase<T> {
    private _iterator;
    private _isEndless;
    constructor(_iterator: IIterator<T>, _isEndless?: boolean);
    protected _canMoveNext(): boolean;
    moveNext(value?: any): boolean;
    dispose(): void;
    protected getIsEndless(): boolean;
}
export default IteratorEnumerator;
