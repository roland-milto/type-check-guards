// Import: local functions.
import {isFilledArray} from "./filledArray.js";

/**
 * Determines if a given value is a valid number by checking its type and ensuring it's neither `NaN` nor infinite.
 * This function is useful for validating numerical input in different contexts.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown} value - The value to check.
 *
 * @returns {boolean}       - `true` if the value is a valid number; `false` otherwise.
 *
 * @example
 * // true
 * isNumber(42);
 *
 * // true
 * isNumber(3.14);
 *
 * // true
 * isNumber(-7);
 *
 * // false (input is not a number)
 * isNumber('42');
 *
 * // false (input is NaN)
 * isNumber(NaN);
 *
 * // false (input is infinite)
 * isNumber(Infinity);
 */
function isNumber(value: unknown): value is number {
  return typeof value === 'number' && !Number.isNaN(value) && Number.isFinite(value);
}

/**
 * Checks if all elements in a given array are numbers.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown[]} array - The array to be checked for number elements.
 *
 * @returns {boolean}         - `true` if all elements are numbers, otherwise `false`.
 *
 * @example
 * // true
 * areNumbers([1, 2, 3]);
 *
 * // true
 * areNumbers([10.5, -3, 0]);
 *
 * // false (input is not a number)
 * areNumbers([1, "two", 3]);
 *
 * // false (input is not a number)
 * areNumbers([]);
 *
 * // false (input is not a number)
 * areNumbers([undefined]);
 */
function areNumbers(array: unknown[]): array is number[] {
  if (!isFilledArray(array)) {
    return false;
  }

  for (const item of array) {
    if (!isNumber(item)) {
      return false;
    }
  }

  return true;
}

// Exports.
export {isNumber, areNumbers};