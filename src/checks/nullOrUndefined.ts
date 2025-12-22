/**
 * Determines whether the given argument is either .
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-22
 *
 * @param   {unknown} value - The value to be checked for `null` or `undefined`.
 *
 * @return  {boolean}       - Returns `true` if the argument is `null` or `undefined`, otherwise `false`.
 */
export function isNullOrUndefined(value: unknown): value is null | undefined {
  return value === null || typeof value === 'undefined';
}

/**
 * Checks if all elements in the given array are either `null` or `undefined`.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-22
 *
 * @param   {unknown} array - The input value to be checked, expected to be an array.
 *
 * @returns {boolean}       - Returns `true` if all elements in the array are `null` or `undefined`, otherwise `false`.
 */
export function areNullOrUndefined(array: unknown): array is (null | undefined)[] {
  if (!Array.isArray(array)) {
    return false;
  }

  for (const item of array) {
    if (!isNullOrUndefined(item)) {
      return false;
    }
  }

  return true;
}