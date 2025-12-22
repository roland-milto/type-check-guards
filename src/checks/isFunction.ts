/**
 * Determines if the given argument is a function.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-22
 *
 * @param   {unknown} value - The value to test.
 *
 * @returns {boolean}       - A boolean indicating whether the argument is a function.
 */
export function isFunction(value: unknown): value is (...args: unknown[]) => unknown {
  return typeof value === 'function';
}