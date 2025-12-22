/**
 * Determines if the provided value is an object.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-22
 *
 * @param   {unknown} value - The value to be checked.
 *
 * @returns {boolean}       - Returns `true` if the value is an object and not null; otherwise, `false`.
 */
export function isObject(value: unknown): value is object {
  return typeof value === 'object' && value !== null;
}