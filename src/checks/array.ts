// Import: Self-created functions.
import {isFilledArray} from "./filledArray.js";

/**
 * Determines whether the given value is an array.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-22
 *
 * @param   {unknown} value - The value to be checked.
 *
 * @returns {boolean}       - A boolean indicating whether the value is an array.
 *
 * @example
 * // true
 * isArray([1, 2, 3]);
 *
 * // false
 * isArray({});
 */
export function isArray(value: unknown): value is unknown[] {
  return Array.isArray(value);
}

/**
 * Checks if the given value is a two-dimensional array, where both the value
 * itself and each of its elements are arrays.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-08
 *
 * @param   {unknown} array - The value to be checked.
 *
 * @returns {boolean}       - Returns `true` if the value is a two-dimensional array, otherwise `false`.
 *
 * @example
 * // true
 * areArrays([[1, 2], [3, 4]]);
 *
 * // false
 * areArrays([1, 2, 3]);
 */
export function areArrays(array: unknown): array is unknown[][] {
  if (!isFilledArray(array)) {
    return false;
  }

  for (const item of array) {
    if (!isArray(item)) {
      return false;
    }
  }

  return true;
}