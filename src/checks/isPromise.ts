/**
 * Checks if a given value is a `Promise`.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-22
 *
 * @param   {unknown} value - The value to check.
 *
 * @returns {boolean}       - Indicates whether the value is a .
 */
export function isPromise(value: unknown): value is Promise<unknown> {
  return value instanceof Promise;
}