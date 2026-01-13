// Import: Self-created functions.
import {isFilledArray} from "./filledArray.js";

/**
 * Determines whether the given value is strictly equal to the expected value.
 *
 * @param   {unknown} value     - The value to compare.
 * @param   {unknown} expected  - The expected value for comparison.
 *
 * @returns {boolean}           - Returns `true` if the value is strictly equal to the expected value, otherwise `false`.
 */
export function isEqual<T>(value: unknown, expected: T): value is T {
  return value === expected;
}

/**
 * Determines whether all elements in the given array are strictly equal to the expected value.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-13
 *
 * @param   {unknown} value       - The value to be checked (expected to be an array).
 * @param   {unknown} expected    - The expected value for comparison.
 *
 * @returns {value is unknown[]}  - Returns `true` if the value is an array and all its elements
 *                                are strictly equal to the expected value, otherwise `false`.
 */
export function areEqual<T>(value: unknown, expected: T): value is T[] {
  if (!isFilledArray(value)) {
    return false;
  }

  for (const item of value) {
    if (!isEqual(item, expected)) {
      return false;
    }
  }

  return true;
}