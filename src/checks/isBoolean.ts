/**
 * Checks if the provided value is of type boolean.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-22
 *
 * @param   {unknown} value - The value to be checked.
 *
 * @returns {boolean}       - `true` if the value is a boolean, otherwise `false`.
 */
export function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean';
}