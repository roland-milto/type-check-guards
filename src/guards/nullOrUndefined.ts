// Import: local functions.
import {isFilledArray} from "./filledArray.js";

/**
 * The `isNullOrUndefined` function checks whether a given value is either `null` or `undefined`.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown} value - The value to be checked for `null` or `undefined`.
 *
 * @returns {boolean}       - `true` if the value is `null` or `undefined`, otherwise `false`.
 *
 * @example
 * // true
 * isNullOrUndefined(null);
 *
 * // true
 * isNullOrUndefined(undefined);
 *
 * // false (value is a non-null object)
 * isNullOrUndefined({});
 *
 * // false (value is a number)
 * isNullOrUndefined(0);
 *
 * // false (value is a string)
 * isNullOrUndefined("text");
 */
function isNullOrUndefined(value: unknown): value is null | undefined {
  return value === null || typeof value === "undefined";
}

/**
 * Checks whether all elements in the given array are `null` or `undefined`.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown[]} array - The array to check.
 *
 * @returns {boolean}         - `true` if all elements are `null` or `undefined`, otherwise `false`.
 *
 * @example
 * // true
 * const allNull = areNullOrUndefined([null, undefined, null]);
 *
 * // false (contains a string)
 * const hasString = areNullOrUndefined([null, undefined, 'string']);
 *
 * // false (array is empty)
 * const emptyArray = areNullOrUndefined([]);
 */
function areNullOrUndefined(array: unknown[]): array is (null | undefined)[] {
  if (!isFilledArray(array)) {
    return false;
  }

  for (const item of array) {
    if (!isNullOrUndefined(item)) {
      return false;
    }
  }

  return true;
}

// Exports.
export {isNullOrUndefined, isNullOrUndefined as isNil, areNullOrUndefined, areNullOrUndefined as areNils};