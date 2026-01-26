// Import: local functions.
import {isFilledArray} from "./filledArray.js";

/**
 * Determines whether the provided value is strictly equal to `true`.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown} value - The value to check.
 *
 * @returns {boolean}       - Returns `true` if the value is strictly `true`, otherwise `false`.
 *
 * @example
 * // true
 * isTrue(true)
 *
 * // false
 * isTrue(1)
 *
 * // false
 * isTrue("true")
 */
function isTrue(value: unknown): value is true {
  return value === true;
}

/**
 * Determines if every element in an array is the boolean `true`.

 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26

 * @param   {unknown[]} array - The array to check for all `true` values.
 *
 * @returns {boolean}         - `true` if all elements are `true`; otherwise, `false`.

 * @example
 * // true
 * console.log(areTrue([true, true, true]));
 *
 * // false (contains a false)
 * console.log(areTrue([true, false, true]));
 *
 * // false (empty array)
 * console.log(areTrue([]));
 *
 * // false (contains a non-boolean)
 * console.log(areTrue([true, "string", true]));
 */
function areTrue(array: unknown[]): array is true[] {
  if (!isFilledArray(array)) {
    return false;
  }

  for (const item of array) {
    if (!isTrue(item)) {
      return false;
    }
  }

  return true;
}

// Exports.
export {isTrue, areTrue};