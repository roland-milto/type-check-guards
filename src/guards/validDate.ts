// Import: local functions.
import {isFilledArray} from "./filledArray.js";

/**
 * Checks whether the provided value is a valid `Date` object.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown} value - The value to be checked.
 *
 * @returns {boolean}       - Returns `true` if the value is a valid Date object, otherwise `false`.
 *
 * @example
 * // true
 * isValidDate(new Date());
 *
 * // false
 * isValidDate(new Date("invalid"));
 *
 * // false (must be a Date-object)
 * isValidDate("2025-12-22");
 */
function isValidDate(value: unknown): value is Date {
  return value instanceof Date && !isNaN(value.getTime());
}

/**
 * Determines if an array consists entirely of valid `Date` objects.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown[]} array - The array to check, potentially containing `Date` objects.
 *
 * @returns {boolean}         - `true` if all elements are valid `Date` objects, otherwise `false`.
 *
 * @example
 * // true
 * areValidDates([new Date(), new Date('2025-12-17')]);
 *
 * // false (contains a non-date object)
 * areValidDates([new Date(), 'not a date']);
 *
 * // false (empty array)
 * areValidDates([]);
 *
 * // false (contains an invalid date)
 * areValidDates([new Date('invalid date')]);
 */
function areValidDates(array: unknown[]): array is Date[] {
  if (!isFilledArray(array)) {
    return false;
  }

  for (const item of array) {
    if (!isValidDate(item)) {
      return false;
    }
  }

  return true;
}

// Exports.
export {isValidDate, areValidDates};