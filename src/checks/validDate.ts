/**
 * Checks whether the provided value is a valid `Date` object.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-22
 *
 * @param   {unknown} value - The value to be checked.
 *
 * @returns {boolean}       - Returns `true` if the value is a valid Date object, otherwise `false`.
 */
export function isValidDate(value: unknown): value is Date {
  return value instanceof Date && !isNaN(value.getTime());
}

/**
 * Determines if the provided value is an array of valid Date objects.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-22
 *
 * @param   {unknown} array - The value to be checked.
 *
 * @returns {boolean}       - Returns `true` if the value is an array of valid Date objects, otherwise `false`.
 */
export function areValidDates(array: unknown): array is Date[] {
  if (!Array.isArray(array)) {
    return false;
  }

  for (const item of array) {
    if (!isValidDate(item)) {
      return false;
    }
  }

  return true;
}