/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
System.register(["./Integer", "./Collections/Array/initialize", "./Collections/Array/shuffle"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Integer_1, initialize_1, shuffle_1, assert, Random;
    return {
        setters: [
            function (Integer_1_1) {
                Integer_1 = Integer_1_1;
            },
            function (initialize_1_1) {
                initialize_1 = initialize_1_1;
            },
            function (shuffle_1_1) {
                shuffle_1 = shuffle_1_1;
            }
        ],
        execute: function () {/*!
             * @author electricessence / https://github.com/electricessence/
             * Licensing: MIT
             */
            assert = Integer_1.Integer.assert;
            (function (Random) {
                function r(maxExclusive) {
                    return Math.floor(Math.random() * maxExclusive);
                }
                function nr(boundary, inclusive) {
                    var a = Math.abs(boundary);
                    if (a === 0 || a === 1 && !inclusive)
                        return 0;
                    if (inclusive)
                        boundary += boundary / a;
                    return r(boundary);
                }
                function arrayCopy(source) {
                    var len = source.length;
                    var result = initialize_1.initialize(len);
                    for (var i = 0; i < len; i++) {
                        result[i] = source[i];
                    }
                    return result;
                }
                /**
                 * Returns a random integer from 0 to the maxExclusive.
                 * Negative numbers are allowed.
                 *
                 * @param maxExclusive
                 * @returns {number}
                 */
                function integer(maxExclusive) {
                    return next(maxExclusive);
                }
                Random.integer = integer;
                /**
                 * Returns a random integer from 0 to the boundary.
                 * Return value will be less than the boundary unless inclusive is set to true.
                 * Negative numbers are allowed.
                 *
                 * @param boundary
                 * @param inclusive
                 * @returns {number}
                 */
                function next(boundary, inclusive) {
                    assert(boundary, 'boundary');
                    return nr(boundary, inclusive);
                }
                Random.next = next;
                (function (next) {
                    function integer(boundary, inclusive) {
                        return Random.next(boundary, inclusive);
                    }
                    next.integer = integer;
                    function float(boundary) {
                        if (boundary === void 0) { boundary = Number.MAX_VALUE; }
                        if (isNaN(boundary))
                            throw "'boundary' is not a number.";
                        return Math.random() * boundary;
                    }
                    next.float = float;
                    function inRange(min, max, inclusive) {
                        assert(min, 'min');
                        assert(max, 'max');
                        var range = max - min;
                        if (range === 0)
                            return min;
                        if (inclusive)
                            range += range / Math.abs(range);
                        return min + r(range);
                    }
                    next.inRange = inRange;
                })(next = Random.next || (Random.next = {}));
                /**
                 * Returns an array of random integers.
                 * @param count
                 * @param boundary
                 * @param inclusive
                 * @returns {number[]}
                 */
                function integers(count, boundary, inclusive) {
                    assert(count);
                    var s = [];
                    s.length = count;
                    for (var i = 0; i < count; i++) {
                        s[i] = nr(boundary, inclusive);
                    }
                    return s;
                }
                Random.integers = integers;
                /**
                 * Shuffles an array.
                 * @param target
                 * @returns {T}
                 */
                function shuffle(target) {
                    return shuffle_1.shuffle(target);
                }
                Random.shuffle = shuffle;
                /**
                 * Creates a copy of an array-like  and returns it shuffled.
                 * @param source
                 * @returns {T[]}
                 */
                function copy(source) {
                    return shuffle_1.shuffle(arrayCopy(source));
                }
                Random.copy = copy;
                /**
                 * Returns a distinct random set from the source array up to the maxCount or the full length of the array.
                 * @param source
                 * @param maxCount
                 * @returns {any}
                 */
                function select(source, maxCount) {
                    if (maxCount !== Infinity)
                        Integer_1.Integer.assertZeroOrGreater(maxCount);
                    switch (maxCount) {
                        case 0:
                            return [];
                        case 1:
                            return [select.one(source, true)];
                        default:
                            var result = shuffle_1.shuffle(arrayCopy(source));
                            if (maxCount < result.length)
                                result.length = maxCount;
                            return result;
                    }
                }
                Random.select = select;
                (function (select) {
                    function one(source, throwIfEmpty) {
                        if (source && source.length)
                            return source[r(source.length)];
                        if (throwIfEmpty)
                            throw "Cannot select from an empty set.";
                    }
                    select.one = one;
                })(select = Random.select || (Random.select = {}));
            })(Random || (Random = {}));
            exports_1("Random", Random);
        }
    };
});
//# sourceMappingURL=Random.js.map