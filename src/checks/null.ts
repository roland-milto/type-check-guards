/**
 * Determines whether the given argument is strictly equal to `null`.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-22
 *
 * @param   {unknown} arg - The value to be checked.
 *
 * @returns {boolean}     - Returns `true` if the argument is `null`; otherwise, returns `false`.
 *
 * @example
 * // true
 * isNull(null);
 *
 * // false
 * isNull(undefined);
 */
export function isNull(arg: unknown): arg is null {
  return arg === null;
}

/**
 * Checks if the provided value is an array where all elements are `null`.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-06
 *
 * @param   {unknown} array - The value to check.
 *
 * @returns {boolean}       - Returns `true` if the value is an array where all elements are `null`, otherwise `false`.
 *
 * @example
 * // true
 * areNull([null, null]);
 *
 * // false
 * areNull([null, 1]);
 */
export function areNull(array: unknown): array is null[] {
  if (!Array.isArray(array)) {
    return false;
  }

  if (array.length === 0) {
    return false;
  }

  for (const item of array) {
    if (!isNull(item)) {
      return false;
    }
  }

  return true;
}