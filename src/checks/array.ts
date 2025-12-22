/**
 * Determines whether the given value is an array.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-22
 *
 * @param   {any} value - The value to be checked.
 *
 * @returns {boolean}   - A boolean indicating whether the value is an array.
 */
export function isArray(value: unknown): value is unknown[] {
  return Array.isArray(value);
}

/**
 * Checks if the given value is a two-dimensional array, where both the value
 * itself and each of its elements are arrays.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-22
 *
 * @param   {unknown} array - The value to be checked.
 *
 * @returns {boolean}       - Returns `true` if the value is a two-dimensional array, otherwise `false`.
 */
export function areArrays(array: unknown): array is unknown[][] {
  if (!isArray(array)) {
    return false;
  }

  for (const item of array) {
    if (!Array.isArray(item)) {
      return false;
    }
  }

  return true;
}