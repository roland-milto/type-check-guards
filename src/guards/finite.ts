// Import: local functions.
import {isFilledArray} from "./filledArray.js";

/**
 * Determines if the provided `value` is a finite `number` using the built-in `Number.isFinite` method.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown} value - The value to check for finiteness.
 *
 * @returns {boolean}       - `true` if `value` is a finite `number`, otherwise `false`.
 *
 * @example
 * // true
 * isFinite(123);
 *
 * // true
 * isFinite(-123.45);
 *
 * // false (input is not a number)
 * isFinite('123');
 *
 * // false (input is not a number)
 * isFinite(Infinity);
 *
 * // false (input is not a number)
 * isFinite(NaN);
 */
function isFinite(value: unknown): value is number {
  return Number.isFinite(value);
}

/**
 * Determines if all elements in an array are finite numbers.
 * The function first checks if the array is non-empty, then iteratively checks each element for finiteness.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown[]} array - The array to be checked for finiteness of all its elements.
 *
 * @returns {boolean}         - `true` if the array is non-empty and all elements are finite numbers; `false` otherwise.
 *
 * @example
 * // true
 * areFinite([1, 2, 3]);
 *
 * // false (contains non-finite number)
 * areFinite([1, Infinity, 3]);
 *
 * // false (input is not a number)
 * areFinite([true, false, null]);
 */
function areFinite(array: unknown[]): array is number[] {
  if (!isFilledArray(array)) {
    return false;
  }

  for (const item of array) {
    if (!isFinite(item)) {
      return false;
    }
  }

  return true;
}

// Exports.
export {isFinite, areFinite};