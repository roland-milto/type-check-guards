// Import: Self-created functions.
import {isFilledArray} from "./filledArray.js";

/**
 * Determines whether the provided value is strictly equal to `true`.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-07
 *
 * @param   {unknown} value - The value to check.
 *
 * @returns {boolean}       - Returns `true` if the value is strictly `true`, otherwise `false`.
 *
 * @example
 * // true
 * isTrue(true)
 *
 * // false
 * isTrue(1)
 *
 * // false
 * isTrue("true")
 */
export function isTrue(value: unknown): value is true {
  return value === true;
}

/**
 * Checks if the provided value is an array where every element is strictly `true`.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-07
 *
 * @param   {unknown} array - The value to be checked.
 *
 * @returns {boolean}       - Returns `true` if the value is an array of `true` values, otherwise `false`.
 *
 * @example
 * // true
 * areTrue([true, true])
 *
 * // false
 * areTrue([true, false])
 *
 * // false
 * areTrue([])
 */
export function areTrue(array: unknown): array is true[] {
  if (!isFilledArray(array)) {
    return false;
  }

  for (const item of array) {
    if (!isTrue(item)) {
      return false;
    }
  }

  return true;
}