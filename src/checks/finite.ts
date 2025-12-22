/**
 * Determines whether the provided value is a finite number.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-22
 *
 * @param   {unknown} value - The value to check for finiteness.
 *
 * @returns {boolean}       - Returns `true` if the value is a finite number; otherwise, `false`.
 */
export function isFinite(value: unknown): value is number {
  return Number.isFinite(value);
}

/**
 * Determines whether the given value is an array of finite numbers.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-22
 *
 * @param   {unknown} array - The value to check.
 *
 * @returns {boolean}       - Returns `true` if the value is an array where all elements are finite numbers, otherwise `false`.
 */
export function areFinite(array: unknown): array is number[] {
  if (!Array.isArray(array)) {
    return false;
  }

  for (const item of array) {
    if (!isFinite(item)) {
      return false;
    }
  }

  return true;
}