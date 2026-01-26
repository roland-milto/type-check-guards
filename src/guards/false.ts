// Import: local functions.
import {isFilledArray} from "./filledArray.js";

/**
 * Checks if the provided value is strictly equal to the boolean literal `false`.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown}  value  - The value to be checked.
 *
 * @returns {boolean}         - `true` if the value is `false`; otherwise, `false`.
 *
 * @example
 * // true
 * console.log(isFalse(false));
 *
 * // false (input is not strictly false)
 * console.log(isFalse(true));
 *
 * // false (input is not strictly false)
 * console.log(isFalse(0));
 *
 * // false (input is not strictly false)
 * console.log(isFalse("false"));
 */
function isFalse(value: unknown): value is false {
  return value === false;
}

/**
 * Checks whether all elements in the provided array are strictly the boolean `false`.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown[]} array - The array to check, containing elements of any type.
 *
 * @returns {boolean}         - `true` if all elements are `false`; `false` otherwise.
 *
 * @example
 * // true
 * areFalse([false, false, false]);
 *
 * // false (contains `true`)
 * areFalse([false, true, false]);
 *
 * // false (contains a string)
 * areFalse([false, "false", false]);
 */
function areFalse(array: unknown[]): array is false[] {
  if (!isFilledArray(array)) {
    return false;
  }

  for (const item of array) {
    if (!isFalse(item)) {
      return false;
    }
  }

  return true;
}

// Exports.
export {isFalse, areFalse};