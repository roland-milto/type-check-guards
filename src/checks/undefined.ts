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

/**
 * Checks if the given value is an array where all elements are undefined.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-22
 *
 * @param   {unknown} array - The value to be checked.
 *
 * @returns {boolean}       - Returns `true` if the value is an array and all its elements are undefined, otherwise `false`.
 */
export function areUndefined(array: unknown): array is undefined[] {
  if (!Array.isArray(array)) {
    return false;
  }

  for (const item of array) {
    if (!isUndefined(item)) {
      return false;
    }
  }

  return true;
}