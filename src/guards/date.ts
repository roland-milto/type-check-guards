// Import: local functions.
import {isOfType} from "./ofType.js";
import {isFilledArray} from "./filledArray.js";

/**
 * Determines if the provided `value` is of type `Date`.
 * This function checks if the given input strictly matches the `Date` type.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown} value - The value to be checked for `Date` type.
 *
 * @returns {boolean}       - `true` if the `value` is a `Date`, otherwise `false`.
 *
 * @example
 * // true
 * const result1 = isDate(new Date());
 *
 * // false (input is a string)
 * const result2 = isDate("1990-08-18");
 *
 * // false (input is an object)
 * const result3 = isDate({ year: 1990 });
 */
function isDate(value: unknown): value is Date {
  return isOfType(value, "date");
}

/**
 * Determines if the given array consists solely of `Date` objects.
 * The function checks if the array is filled and subsequently verifies each element to confirm that it is a `Date` object.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown[]} array - The array to be checked for `Date` objects.
 *
 * @returns {boolean}         - `true` if every element in the array is a `Date` object, otherwise `false`.
 *
 * @example
 * // true
 * areDates([new Date(), new Date('2021-01-01')]);
 *
 * // false (array is empty)
 * areDates([]);
 *
 * // false (contains non-date objects)
 * areDates([new Date(), 'not a date']);
 */
function areDates(array: unknown[]): array is Date[] {
  if (!isFilledArray(array)) {
    return false;
  }

  for (const item of array) {
    if (!isDate(item)) {
      return false;
    }
  }

  return true;
}

// Exports.
export {isDate, areDates};