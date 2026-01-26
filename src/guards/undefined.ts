// Import: local functions.
import {isFilledArray} from "./filledArray.js";

/**
 * Checks if the provided argument is `undefined`.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown} value - The value to be checked.
 *
 * @returns {boolean}       - Returns `true` if the argument is undefined; otherwise `false`.
 *
 * @example
 * let x;
 *
 * // true
 * isUndefined(x);
 *
 * // true
 * isUndefined(undefined);
 *
 * // false
 * isUndefined(null);
 */
function isUndefined(value: unknown): value is undefined {
  return typeof value === 'undefined';
}

/**
 * Determines whether all elements in a given array are `undefined`.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown[]} array - The array to check for `undefined` elements.
 *
 * @returns {boolean}         - `true` if every element in the array is `undefined`, `false` otherwise.
 *
 * @example
 *
 * // true
 * areUndefined([undefined, undefined]);
 *
 * // false (contains a non-undefined value)
 * areUndefined([undefined, null]);
 *
 * // false (not all elements are undefined)
 * areUndefined([undefined, 0, undefined]);
 */
function areUndefined(array: unknown[]): array is undefined[] {
  if (!isFilledArray(array)) {
    return false;
  }

  for (const item of array) {
    if (!isUndefined(item)) {
      return false;
    }
  }

  return true;
}

// Exports.
export {isUndefined, areUndefined};