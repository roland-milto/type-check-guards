// Import: Self-created functions.
import {isOfType} from "./ofType.js";

/**
 * Determines whether the provided value is a Date object.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-22
 *
 * @param   {unknown} value - The value to check.
 *
 * @returns {value is Date} - `true` if the value is a `Date` object, otherwise `false`.
 */
export function isDate(value: unknown): value is Date {
  return isOfType(value, "date");
}

/**
 * Checks if the given value is an array where all elements are instances of Date.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-22
 *
 * @param   {unknown} array - The value to be checked.
 *
 * @returns {boolean}       - Returns `true` if the value is an array of Date instances, otherwise `false`.
 */
export function areDates(array: unknown): array is Date[] {
  if (!Array.isArray(array)) {
    return false;
  }

  for (const item of array) {
    if (!isDate(item)) {
      return false;
    }
  }

  return true;
}