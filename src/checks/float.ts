/**
 * Determines whether the provided value is a floating-point number (decimal).
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-06
 *
 * @param   {unknown} value - The value to check for being a float.
 *
 * @returns {boolean}       - Returns `true` if the value is a finite float, otherwise `false`.
 *
 * @example
 * // true
 * isFloat(3.14)
 *
 * // false
 * isFloat(10)
 *
 * // false
 * isFloat("3.14")
 */
export function isFloat(value: unknown): value is number {
  return (
    typeof value === 'number' &&
    Number.isFinite(value) &&
    !Number.isInteger(value)
  );
}

/**
 * Checks if the provided value is an array of floating-point numbers.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-06
 *
 * @param   {unknown} array - The value to be checked.
 *
 * @returns {boolean}       - Returns `true` if the value is an array where all elements are floats, otherwise `false`.
 *
 * @example
 * // true
 * areFloats([1.1, 2.2, 3.3])
 *
 * // false
 * areFloats([1.5, 2.0])
 *
 * // false
 * areFloats([])
 */
export function areFloats(array: unknown): array is number[] {
  if (!Array.isArray(array)) {
    return false;
  }

  if (array.length === 0) {
    return false;
  }

  for (const item of array) {
    if (!isFloat(item)) {
      return false;
    }
  }

  return true;
}