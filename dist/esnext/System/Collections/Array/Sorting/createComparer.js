/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
import isTrueNaN from "../../../Reflection/isTrueNaN";
import compare from "../../../Comparison/compare";
function ensureArray(value) {
    return (value) instanceof (Array)
        ? value
        : [value];
}
/**
 * A factory function that creates a comparer to be used in multi-dimensional sorting.
 *
 * <h4>Example</h4>
 * ```typescript
 * var myArray = [{a:1:b:2},{a:3,b:4},{a:1,b:3}];
 *
 * // First sort by a, then by b.
 * myArray.sort(
 *   createComparer(
 *     (e)=> [e.a, e.b],
 *     [Order.Ascending, Order.Descending]
 *   )
 * );
 *
 * // result: [{a:1,b:3},{a:1:b:2},{a:3,b:4}]
 * ```
 *
 * @param selector
 * @param order
 * @param equivalentToNaN
 * @returns {(a:TSource, b:TSource)=>CompareResult}
 */
export default function createComparer(selector, order, equivalentToNaN) {
    if (order === void 0) { order = 1 /* Ascending */; }
    if (equivalentToNaN === void 0) { equivalentToNaN = NaN; }
    var nanHasEquivalent = !isTrueNaN(equivalentToNaN);
    return function (a, b) {
        // Use an array always to ensure a single code path.
        var aValue = ensureArray(selector(a));
        var bValue = ensureArray(selector(b));
        var len = Math.min(aValue.length, bValue.length);
        var oArray = (order) instanceof (Array) ? order : null;
        for (var i = 0; i < len; i++) {
            var vA = aValue[i], vB = bValue[i];
            var o = oArray
                ? (i < oArray.length ? oArray[i] : 1 /* Ascending */)
                : order;
            if (nanHasEquivalent) {
                if (isTrueNaN(vA))
                    vA = equivalentToNaN;
                if (isTrueNaN(vB))
                    vB = equivalentToNaN;
            }
            var r = compare(vA, vB);
            if (r !== 0 /* Equal */)
                return o * r;
        }
        return 0;
    };
}
//# sourceMappingURL=createComparer.js.map