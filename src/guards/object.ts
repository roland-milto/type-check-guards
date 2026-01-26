// Import: local functions.
import {isFilledArray} from "./filledArray.js";

/**
 * Determines whether a given `value` is an `object`.
 * A `null` value will result in `false` as it is not considered an object.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown} value - The value to be checked for being an `object`.
 *
 * @returns {boolean}       - `true` if `value` is an `object` and not `null`, otherwise `false`.
 *
 * @example
 * // true
 * isObject({});
 *
 * // true
 * isObject({a: 1});
 *
 * // true
 * isObject(new Date());
 *
 * // false (input is null)
 * isObject(null);
 *
 * // false (input is not an object)
 * isObject(42);
 *
 * // false (input is a string)
 * isObject("Hello");
 */
function isObject(value: unknown): value is object {
  return typeof value === 'object' && value !== null;
}

/**
 * The `areObjects` function checks whether each element in the provided array is an object.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown[]} array - The array to be checked for object elements.
 *
 * @returns {boolean}         - `true` if all elements are objects; otherwise `false`.
 *
 * @example
 * // true
 * areObjects([{}, {a: 1}, new Date()]);
 *
 * // false (contains a non-object)
 * areObjects([{}, 42, {a: 1}]);
 *
 * // false (input is not a filled array)
 * areObjects([]);
 *
 * // false (contains a non-object)
 * areObjects([new Map(), new Set(), 'string']);
 */
function areObjects(array: unknown[]): array is object[] {
  if (!isFilledArray(array)) {
    return false;
  }

  for (const item of array) {
    if (!isObject(item)) {
      return false;
    }
  }

  return true;
}

// Exports.
export {isObject, areObjects};