// Import: local functions.
import {isFilledArray} from "./filledArray.js";

/**
 * Determines if the provided value is an array using the `Array.isArray` method.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown} value - The value to be checked.
 *
 * @returns {boolean}       - `true` if the value is an array, `false` otherwise.
 *
 * @example
 * // true
 * isArray([]);
 *
 * // true
 * isArray([1, 2, 3]);
 *
 * // false
 * isArray({});
 *
 * // false
 * isArray('string');
 *
 * // false
 * isArray(123);
 */
function isArray(value: unknown): value is Array<unknown> {
  return Array.isArray(value);
}

/**
 * Determines if the given input is a two-dimensional array where each element is an array.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown[][]} array - The input to be checked.
 *
 * @returns {boolean}           - `true` if the input is a two-dimensional array with arrays as elements, `false` otherwise.
 *
 * @example
 * // true
 * areArrays([[1, 2], [3, 4]]);
 *
 * // true
 * areArrays([['a'], ['b', 'c']]);
 *
 * // false
 * areArrays([1, [2, 3]]);
 *
 * // false
 * areArrays([[1, 2], 'not an array']);
 *
 * // false
 * areArrays('not an array');
 */
function areArrays(array: unknown[][]): array is Array<unknown>[] {
  if (!isFilledArray(array)) {
    return false;
  }

  for (const item of array) {
    if (!isArray(item)) {
      return false;
    }
  }

  return true;
}

// Exports.
export {isArray, areArrays};