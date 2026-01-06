/**
 * Determines whether the provided argument is a valid number.
 *
 @author  Roland Milto (https://roland.milto.de/)
 @version 2025-12-22
 *
 * @param   {unknown} value - The value to be checked.
 *
 * @returns {boolean}       - A isBoolean indicating whether the given argument is a finite number and not NaN.
 *
 * @example
 * // true
 * isNumber(123);
 *
 * // false
 * isNumber(NaN);
 *
 * // false
 * isNumber(Infinity);
 *
 * // false
 * isNumber("123");
 */
export function isNumber(value: unknown): value is number {
  return typeof value === 'number' && !Number.isNaN(value) && Number.isFinite(value);
}

/**
 * Checks if the given value is an array of numbers.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-06
 *
 * @param   {unknown} array - The value to check.
 *
 * @returns {boolean}       - Returns `true` if the value is an array of numbers, otherwise `false`.
 *
 * @example
 * // true
 * areNumbers([1.1, 2.2, 3.3]);
 *
 * // false
 * areNumbers([1, NaN]);
 *
 * // false
 * areNumbers([1, "2"]);
 */
export function areNumbers(array: unknown): array is number[] {
  if (!Array.isArray(array)) {
    return false;
  }

  if (array.length === 0) {
    return false;
  }

  for (const item of array) {
    if (!isNumber(item)) {
      return false;
    }
  }

  return true;
}