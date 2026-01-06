/**
 * Checks if the provided value is of the type boolean.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-22
 *
 * @param   {unknown} value - The value to be checked.
 *
 * @returns {boolean}       - `true` if the value is a boolean, otherwise `false`.
 *
 * @example
 * // true
 * isBoolean(true);
 *
 * // true
 * isBoolean(false);
 *
 * // false
 * isBoolean(1);
 */
export function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean';
}

/**
 * Checks if the given value is an array of boolean values.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-06
 *
 * @param   {unknown} array - The value to be checked.
 *
 * @returns {boolean}       - Returns `true` if the value is an array of booleans, otherwise `false`.
 *
 * @example
 * // true
 * areBooleans([true, false]);
 *
 * // false
 * areBooleans([true, 0]);
 */
export function areBooleans(array: unknown): array is boolean[] {
  if (!Array.isArray(array)) {
    return false;
  }

  if (array.length === 0) {
    return false;
  }

  for (const item of array) {
    if (!isBoolean(item)) {
      return false;
    }
  }

  return true;
}