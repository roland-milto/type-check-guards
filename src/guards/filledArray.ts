/**
 * Determines whether the provided value is a non-empty array.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-07
 *
 * @param   {unknown} value - The value to check.
 *
 * @returns {boolean}       - Returns `true` if the value is an array with at least one element, otherwise `false`.
 *
 * @example
 * // true
 * isFilledArray([1])
 *
 * // false
 * isFilledArray([])
 *
 * // false
 * isFilledArray(42)
 */
export function isFilledArray(value: unknown): value is unknown[] {
  return Array.isArray(value) && value.length > 0;
}

/**
 * Checks if the provided value is an array where every element is a non-empty array.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-07
 *
 * @param   {unknown} array - The value to be checked.
 *
 * @returns {boolean}       - Returns `true` if the value is an array of non-empty arrays, otherwise `false`.
 *
 * @example
 * // true
 * areFilledArrays([[1], ["a"]])
 *
 * // false
 * areFilledArrays([[1], []])
 *
 * // false
 * areFilledArrays([])
 */
export function areFilledArrays(array: unknown): array is unknown[][] {
  if (!isFilledArray(array)) {
    return false;
  }

  for (const item of array) {
    if (!isFilledArray(item)) {
      return false;
    }
  }

  return true;
}