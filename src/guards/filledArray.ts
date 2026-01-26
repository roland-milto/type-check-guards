/**
 * Checks if the provided `value` is a non-empty array.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown[]} value - The value to check if it is a non-empty array.
 *
 * @returns {boolean}         - `true` if `value` is a non-empty array, otherwise `false`.
 *
 * @example
 * // true
 * isFilledArray([1, 2, 3]);
 *
 * // true
 * isFilledArray(['a']);
 *
 * // false (not an array)
 * isFilledArray('not an array');
 *
 * // false (empty array)
 * isFilledArray([]);
 */
function isFilledArray(value: unknown): value is readonly unknown[] {
  return Array.isArray(value) && value.length > 0;
}

/**
 * Checks if a two-dimensional array and all of its subarrays are non-empty.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown[][]} array - The two-dimensional array to check.
 *
 * @returns {boolean}           - `true` if both the main array and all subarrays are filled; otherwise `false`.
 *
 * @example
 *
 * // true
 * areFilledArrays([[1]]);
 *
 * // true
 * areFilledArrays([['a', 'b'], [1, 2, 3]]);
 *
 * // true
 * areFilledArrays([[{}, []], ['string']]);
 *
 * // false
 * areFilledArrays([[]]);
 *
 * // false
 * areFilledArrays([[], [1, 2, 3]]);
 *
 * // false
 * areFilledArrays([]);
 */
function areFilledArrays(array: readonly unknown[]): array is Array<unknown>[] {
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

// Exports.
export {isFilledArray, areFilledArrays};