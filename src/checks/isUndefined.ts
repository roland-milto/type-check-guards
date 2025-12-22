/**
 * Checks if the provided argument is `undefined`.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-22
 *
 * @param   {unknown} value - The value to be checked.
 *
 * @returns {boolean}       - Returns `true` if the argument is undefined; otherwise `false`.
 */
export function isUndefined(value: unknown): value is undefined {
  return typeof value === 'undefined';
}