// Import: local functions.
import {isFilledArray} from "./filledArray.js";

/**
 * Determines if the given `value` is a safe integer number.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown} value - The value to check for integer status.
 *
 * @returns {boolean}       - `true` if `value` is a safe integer, otherwise `false`.
 *
 * @example
 * // true
 * isInteger(5);
 *
 * // true
 * isInteger(-100);
 *
 * // false (input is a string)
 * isInteger("5");
 *
 * // false (input is a float)
 * isInteger(5.5);
 *
 * // false (input is not a safe integer)
 * isInteger(null);
 */
function isInteger(value: unknown): value is number {
  return typeof value === 'number' && Number.isSafeInteger(value);
}

/**
 * Determines if all elements in the given array are integers.
 * The function returns `true` if every element is an integer, and `false` otherwise.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown[]} array - The array to check for integer elements.
 *
 * @returns {boolean}         - `true` if all elements are integers, `false` otherwise.
 *
 * @example
 * // true
 * areIntegers([1, 2, 3]);
 *
 * // true
 * areIntegers([0, -10, 42]);
 *
 * // false (contains a noninteger string)
 * areIntegers([1, 2, '3']);
 */
function areIntegers(array: unknown[]): array is number[] {
  if (!isFilledArray(array)) {
    return false;
  }

  for (const item of array) {
    if (!isInteger(item)) {
      return false;
    }
  }

  return true;
}

// Exports.
export {isInteger, areIntegers};