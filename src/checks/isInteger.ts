/**
 * Checks if the given value is an integer.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-22
 *
 * @param   {unknown} value - The value to check.
 *
 * @returns {boolean}       - Returns `true` if the value is an integer, otherwise `false`.
 */
export function isInteger(value: unknown): value is number {
  return typeof value === 'number' && Number.isInteger(value);
}