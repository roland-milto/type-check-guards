/**
 * Determines if the provided value is a string.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-22
 *
 * @param   {unknown} value - The value to be checked.
 *
 * @returns {boolean}       - `true` if the value is a string, otherwise `false`.
 */
export function isString(value: unknown): value is string {
  return typeof value === 'string';
}