/**
 * Determines whether the provided argument is a valid number.
 *

 *
 * @param   {unknown} value - The value to be checked.
 *
 * @returns {boolean}       - A isBoolean indicating whether the given argument is a finite number and not NaN.
 */
export function isNumber(value: unknown): value is number {
  return typeof value === 'number' && !Number.isNaN(value) && Number.isFinite(value);
}

/**
 * Checks if the given value is an array of numbers.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-22
 *
 * @param   {unknown} array - The value to check.
 *
 * @returns {boolean}       - Returns `true` if the value is an array of numbers, otherwise `false`.
 */
export function areNumbers(array: unknown): array is number[] {
  if (!Array.isArray(array)) {
    return false;
  }

  for (const item of array) {
    if (!isNumber(item)) {
      return false;
    }
  }

  return true;
}