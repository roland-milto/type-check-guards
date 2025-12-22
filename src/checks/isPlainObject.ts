/**
 * Determines whether the provided value is a plain object.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-22
 *
 * @param   {unknown} value - The value to check.
 * @returns {boolean}       - Returns `true` if the value is a plain object, otherwise `false`.
 */
export function isPlainObject(value: unknown): value is Record<string, unknown> {
  return Object.prototype.toString.call(value) === '[object Object]';
}