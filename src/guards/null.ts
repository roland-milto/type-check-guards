// Import: local functions.
import {isFilledArray} from "./filledArray.js";

/**
 * Determines whether the provided `value` is `null`.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown} value - The value to check for `null`.
 *
 * @returns {boolean}       - `true` if `value` is `null`, otherwise `false`.
 *
 * @example
 * // true
 * isNull(null);
 *
 * // false
 * isNull(undefined);
 *
 * // false
 * isNull(0);
 *
 * // false
 * isNull("");
 *
 * // false
 * isNull({});
 */
function isNull(value: unknown): value is null {
  return value === null;
}

/**
 * Checks whether all elements in the given `array` are `null`.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown[]} array - The input array to check for `null` elements.
 *
 * @returns {boolean}         - `true` if all elements in the array are `null`, `false` otherwise.
 *
 * @example
 * // true
 * areNull([null, null]);
 *
 * // false
 * areNull([null, 1, null]);
 *
 * // false
 * areNull(123);
 *
 * // false
 * areNull([]);
 */
function areNull(array: unknown[]): array is null[] {
  if (!isFilledArray(array)) {
    return false;
  }

  for (const item of array) {
    if (!isNull(item)) {
      return false;
    }
  }

  return true;
}

// Export.
export {isNull, areNull};