/**
 * Determines if the given argument is a function.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-22
 *
 * @param   {unknown} value - The value to test.
 *
 * @returns {boolean}       - A boolean indicating whether the argument is a function.
 *
 * @example
 * // true
 * isFunction(() => console.log("Hi"));
 *
 * // false
 * isFunction("keine Funktion");
 */
export function isFunction(value: unknown): value is (...args: unknown[]) => unknown {
  return typeof value === 'function';
}

/**
 * Checks if the provided value is an array of functions.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-06
 *
 * @param   {unknown} array - The value to check.
 *
 * @returns {boolean}       - `true` if the value is an array of functions, otherwise `false`.
 *
 * @example
 * const tasks = [() => 1, () => 2];
 *
 * // true
 * areFunctions(tasks);
 */
export function areFunctions(array: unknown): array is Function[] {
  if (!Array.isArray(array)) {
    return false;
  }

  if (array.length === 0) {
    return false;
  }

  for (const item of array) {
    if (!isFunction(item)) {
      return false;
    }
  }

  return true;
}