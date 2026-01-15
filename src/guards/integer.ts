// Import: Self-created functions.
import {isFilledArray} from "./filledArray.js";

/**
 * Checks if the given value is a safe integer (maximum 9.007.199.254.740.991).
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-22
 *
 * @param   {unknown} value - The value to check.
 *
 * @returns {boolean}       - Returns `true` if the value is a safe integer, otherwise `false`.
 *
 *  @example
 *  isInteger(5) // true
 *  isInteger(5.1) // false
 *  isInteger("5") // false
 */
export function isInteger(value: unknown): value is number {
  return typeof value === 'number' && Number.isSafeInteger(value);
}

/**
 * Checks if the provided value is an array of safe integers.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-07
 *
 * @param   {unknown} array - The value to be checked.
 *
 * @returns {boolean}       - Returns `true` if the value is an array where all elements are safe integers, otherwise `false`.
 *
 * @example
 * isInteger([5, 1337]) // true
 * isInteger([3.14, 5.1]) // false
 * isInteger(["5", 5]) // false
 */
export function areIntegers(array: unknown): array is number[] {
  if (!isFilledArray(array)) {
    return false;
  }

  for (const item of array) {
    if (!isInteger(item)) {
      return false;
    }
  }

  return true;
}