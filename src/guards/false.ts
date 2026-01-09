// Import: Self-created functions.
import {isFilledArray} from "./filledArray.js";

/**
 * Determines whether the provided value is strictly equal to `false`.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-07
 *
 * @param   {unknown} value - The value to check.
 *
 * @returns {boolean}       - Returns `true` if the value is strictly `false`, otherwise `false`.
 *
 * @example
 * // true
 * isFalse(false)
 *
 * // false
 * isFalse(0)
 *
 * // false
 * isFalse("")
 */
export function isFalse(value: unknown): value is false {
  return value === false;
}

/**
 * Checks if the provided value is an array where every element is strictly `false`.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-07
 *
 * @param   {unknown} array - The value to be checked.
 *
 * @returns {boolean}       - Returns `true` if the value is an array of `false` values, otherwise `false`.
 *
 * @example
 * // true
 * areFalse([false, false])
 *
 * // false
 * areFalse([false, true])
 *
 * // false
 * areFalse([])
 */
export function areFalse(array: unknown): array is false[] {
  if (!isFilledArray(array)) {
    return false;
  }

  for (const item of array) {
    if (!isFalse(item)) {
      return false;
    }
  }

  return true;
}