// Import: local functions.
import {isFilledArray} from "./filledArray.js";

/**
 * Determines whether the provided `value` is a `NaN` of type `number`.
 * Strings will be **NOT** converted to numbers before checking for `NaN`.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown} value - The value to be checked if it is a `NaN` of type `number`.
 *
 * @returns {boolean}       - `true` if the `value` is a `NaN`, otherwise `false`.
 *
 * @example
 * // true
 * isNaN(NaN);
 *
 * // false (input is not a number)
 * isNaN('NaN');
 *
 * // false (input is `number` but not `NaN`)
 * isNaN(123);
 */
function isNaN(value: unknown): value is number {
  return typeof value === 'number' && Number.isNaN(value);
}

/**
 * Determines if all elements in the provided array are `NaN` values.
 * Strings will be **NOT** converted to numbers before checking for `NaN`.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown[]} array - The array to check for `NaN` values.
 *
 * @returns {boolean}         - `true` if all elements are `NaN`, otherwise `false`.
 *
 * @example
 * // true
 * areNaNs([NaN, NaN, NaN]);
 *
 * // false (contains a number)
 * areNaNs([NaN, 1, NaN]);
 *
 * // false (contains a string)
 * areNaNs([NaN, "NaN", NaN]);
 *
 * // false (contains null)
 * areNaNs([NaN, null, NaN]);
 */
function areNaNs(array: unknown[]): array is number[] {
  if (!isFilledArray(array)) {
    return false;
  }

  for (const item of array) {
    if (!isNaN(item)) {
      return false;
    }
  }

  return true;
}

// Exports.
export {isNaN, areNaNs};