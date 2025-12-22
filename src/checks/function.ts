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

/**
 * Checks if the provided value is an array of functions.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-22
 *
 * @param   {unknown} array - The value to check.
 *
 * @returns {boolean}       - `true` if the value is an array of functions, otherwise `false`.
 */
export function areFunctions(array: unknown): array is Function[] {
  if (!Array.isArray(array)) {
    return false;
  }

  for (const item of array) {
    if (!isFunction(item)) {
      return false;
    }
  }

  return true;
}