// Import: Self-created functions.
import {isFilledArray} from "./filledArray.js";

/**
 * Determines if the provided value is an object.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-22
 *
 * @param   {unknown} value - The value to be checked.
 *
 * @returns {boolean}       - Returns `true` if the value is an object and not null; otherwise, `false`.
 *
 * @example
 * // true
 * isObject({ a: 1 });
 *
 * // false
 * isObject(null);
 *
 * // true
 * isObject([]);
 */
export function isObject(value: unknown): value is object {
  return typeof value === 'object' && value !== null;
}

/**
 * Determines whether the provided value is an array consisting entirely of objects.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-07
 *
 * @param   {unknown} array - The value to be checked.
 *
 * @returns {boolean}       - Returns `true` if the value is an array of objects, otherwise `false`.
 *
 * @example
 * // true
 * areObjects([{}, { id: 1 }]);
 *
 * // false
 * areObjects([{}, null]);
 */
export function areObjects(array: unknown): array is object[] {
  if (!isFilledArray(array)) {
    return false;
  }

  for (const item of array) {
    if (!isObject(item)) {
      return false;
    }
  }

  return true;
}