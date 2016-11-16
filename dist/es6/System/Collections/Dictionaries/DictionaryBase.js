import { areEqual } from "../../Compare";
import { forEach } from "../Enumeration/Enumerator";
import { CollectionBase } from "../CollectionBase";
import { EnumeratorBase } from "../Enumeration/EnumeratorBase";
import { ArgumentNullException } from "../../Exceptions/ArgumentNullException";
import { InvalidOperationException } from "../../Exceptions/InvalidOperationException";
import { extractKeyValue } from "../../KeyValueExtract";
import __extendsImport from "../../../extends";
import { KeyNotFoundException } from "../KeyNotFoundException";
const __extends = __extendsImport;
const VOID0 = void 0;
export class DictionaryBase extends CollectionBase {
    constructor(source) {
        super(source);
    }
    _onValueModified(key, value, old) {
    }
    _addInternal(item) {
        if (!item)
            throw new ArgumentNullException('item', 'Dictionaries must use a valid key/value pair. \'' + item + '\' is not allowed.');
        return extractKeyValue(item, (key, value) => this.addByKeyValue(key, value));
    }
    _clearInternal() {
        const _ = this;
        let count = 0;
        for (let key of _.keys) {
            if (_.removeByKey(key))
                count++;
        }
        return count;
    }
    contains(item) {
        if (!item || !this.getCount())
            return false;
        return extractKeyValue(item, (key, value) => {
            let v = this.getValue(key);
            return areEqual(value, v);
        });
    }
    _removeInternal(item) {
        if (!item)
            return 0;
        return extractKeyValue(item, (key, value) => {
            let v = this.getValue(key);
            return (areEqual(value, v) && this.removeByKey(key))
                ? 1 : 0;
        });
    }
    get keys() { return this.getKeys(); }
    get values() { return this.getValues(); }
    addByKeyValue(key, value) {
        if (value === VOID0)
            throw new InvalidOperationException("Cannot add 'undefined' as a value.");
        const _ = this;
        if (_.containsKey(key)) {
            const ex = new InvalidOperationException("Adding a key/value when the key already exists.");
            ex.data['key'] = key;
            ex.data['value'] = value;
            throw ex;
        }
        return _.setValue(key, value);
    }
    getAssuredValue(key) {
        const value = this.getValue(key);
        if (value === VOID0)
            throw new KeyNotFoundException(`Key '${key}' not found.`);
        return value;
    }
    tryGetValue(key, out) {
        const value = this.getValue(key);
        if (value !== VOID0) {
            out(value);
            return true;
        }
        return false;
    }
    setValue(key, value) {
        const _ = this;
        _.assertModifiable();
        let changed = false;
        const old = _.getValue(key);
        if (!areEqual(value, old) && _._setValueInternal(key, value)) {
            changed = true;
            _._onValueModified(key, value, old);
        }
        _._signalModification(changed);
        return changed;
    }
    containsKey(key) {
        return !!this._getEntry(key);
    }
    containsValue(value) {
        const e = this.getEnumerator();
        while (e.moveNext()) {
            if (areEqual(e.current, value, true)) {
                e.dispose();
                return true;
            }
        }
        return false;
    }
    removeByKey(key) {
        return this.setValue(key, VOID0);
    }
    removeByValue(value) {
        const _ = this;
        let count = 0;
        for (let key of _.getKeys()) {
            if (areEqual(_.getValue(key), value, true)) {
                _.removeByKey(key);
                count++;
            }
        }
        return count;
    }
    importEntries(pairs) {
        return super.importEntries(pairs);
    }
    _importEntries(pairs) {
        const _ = this;
        if (!pairs)
            return 0;
        let changed = 0;
        forEach(pairs, pair => extractKeyValue(pair, (key, value) => {
            if (_._setValueInternal(key, value))
                changed++;
        }));
        return changed;
    }
    getEnumerator() {
        const _ = this;
        _.throwIfDisposed();
        let ver, keys, len, index = 0;
        return new EnumeratorBase(() => {
            _.throwIfDisposed();
            ver = _._version;
            keys = _.getKeys();
            len = keys.length;
        }, (yielder) => {
            _.throwIfDisposed();
            _.assertVersion(ver);
            while (index < len) {
                const key = keys[index++], value = _.getValue(key);
                if (value !== VOID0)
                    return yielder.yieldReturn({ key: key, value: value });
            }
            return yielder.yieldBreak();
        });
    }
}
export default DictionaryBase;
//# sourceMappingURL=DictionaryBase.js.map