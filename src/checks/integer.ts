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

/**
 * Checks if the provided value is an array of integers.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-22
 *
 * @param   {unknown} array - The value to be checked.
 *
 * @returns {boolean}       - Returns `true` if the value is an array where all elements are integers, otherwise `false`.
 */
export function areIntegers(array: unknown): array is number[] {
  if (!Array.isArray(array)) {
    return false;
  }

  for (const item of array) {
    if (!isInteger(item)) {
      return false;
    }
  }

  return true;
}