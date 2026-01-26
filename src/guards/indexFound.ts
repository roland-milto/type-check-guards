// Import: local functions.
import {isFilledArray} from "./filledArray.js";
import {isInteger} from "./integer.js";

/**
 * Determines if a given `value` is a non-negative integer, which signifies that an "index" is found.
 * This is a type guard that returns `true` if `value` is a valid index, otherwise `false`.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown} value - The value to check for being a non-negative integer.
 *
 * @returns {boolean}       - `true` if the `value` is a non-negative integer; otherwise, `false`.
 *
 * @example
 * // true
 * isIndexFound(3);
 *
 * // true
 * isIndexFound(0);
 *
 * // false
 * isIndexFound(-1);
 *
 * // false
 * isIndexFound("5");
 *
 * // false
 * isIndexFound(null);
 */
function isIndexFound(value: unknown): value is number {
  return isInteger(value) && value >= 0;
}

/**
 * Determines if all elements in the provided `array` are indexes, returning `true` if they are and `false` otherwise.
 * The function assumes that the `array` is already validated to be filled before checking each element.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown[]} array - The array to be checked for index compliance.
 *
 * @returns {boolean}         - `true` if all elements in `array` are valid indexes, otherwise `false`.
 *
 * @example
 * // true
 * console.log(areIndexesFound([0, 1, 2]));
 *
 * // true
 * console.log(areIndexesFound([5, 6, 10]));
 *
 * // true
 * console.log(areIndexesFound([100]));
 *
 * // false
 * console.log(areIndexesFound([0, 'a', 2]));
 *
 * // false
 * console.log(areIndexesFound([]));
 *
 * // false
 * console.log(areIndexesFound([null, 1]));
 */
function areIndexesFound(array: unknown[]): array is number[] {
  if (!isFilledArray(array)) {
    return false;
  }

  for (const item of array) {
    if (!isIndexFound(item)) {
      return false;
    }
  }

  return true;
}

// Export.
export {isIndexFound, areIndexesFound};