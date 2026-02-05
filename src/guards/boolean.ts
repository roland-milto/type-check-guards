// Import: local functions.
import {isFilledArray} from "./filledArray.js";

/**
 * Determines if a given value is of type `boolean`.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown} value - The value to be checked.
 *
 * @returns {boolean}       - `true` if the value is a `boolean`, otherwise `false`.
 *
 * @example
 * // true
 * isBoolean(true);
 *
 * // true
 * isBoolean(false);
 *
 * // false (input is not a boolean)
 * isBoolean('true');
 *
 * // false (input is not a boolean)
 * isBoolean(1);
 *
 * // false (input is not a boolean)
 * isBoolean(null);
 */
function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean';
}

/**
 * Checks if all elements in the given `array` are booleans.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown[]} array - The array to be checked for boolean elements.
 *
 * @returns {boolean}         - `true` if all elements in the array are booleans; otherwise, `false`.
 *
 * @example
 * // true
 * areBooleans([true, false, true]);
 *
 * // true
 * areBooleans([true, false]);
 *
 * // false (contains a number)
 * areBooleans([true, 1, false]);
 *
 * // false (empty array)
 * areBooleans([]);
 *
 * // false (contains a string)
 * areBooleans([true, 'false']);
 */
function areBooleans(array: unknown[]): array is boolean[] {
  if (!isFilledArray(array)) {
    return false;
  }

  for (const item of array) {
    if (!isBoolean(item)) {
      return false;
    }
  }

  return true;
}

// Exports.
export {isBoolean, isBoolean as isBool, areBooleans, areBooleans as areBools};