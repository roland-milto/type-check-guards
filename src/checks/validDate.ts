/**
 * Checks whether the provided value is a valid `Date` object.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-22
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
export function isValidDate(value: unknown): value is Date {
  return value instanceof Date && !isNaN(value.getTime());
}

/**
 * Determines if the provided value is an array of valid Date objects.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-06
 *
 * @param   {unknown} array - The value to be checked.
 *
 * @returns {boolean}       - Returns `true` if the value is an array of valid Date objects, otherwise `false`.
 *
 * @example
 * const dates = [new Date(), new Date("2025-12-22")];
 *
 * // true
 * areValidDates(dates);
 */
export function areValidDates(array: unknown): array is Date[] {
  if (!Array.isArray(array)) {
    return false;
  }

  if (array.length === 0) {
    return false;
  }

  for (const item of array) {
    if (!isValidDate(item)) {
      return false;
    }
  }

  return true;
}