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