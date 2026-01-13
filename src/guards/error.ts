// Import: Self-created functions.
import {isFilledArray} from "./filledArray.js";

/**
 * Checks if the provided value is an instance of `Error`.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-13
 *
 * @param   {unknown} value   - The value to be checked.
 *
 * @returns {value is Error}  - Returns `true` if the value is an Error object, otherwise `false`.
 */
export function isError(value: unknown): value is Error {
  return value instanceof Error;
}

/**
 * Checks if the given value is a non-empty array where all elements are Error objects.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-13
 *
 * @param   {unknown} array     - The value to be checked.
 *
 * @returns {value is Error[]}  - Returns `true` if the value is a filled array and all its elements are Errors, otherwise `false`.
 */
export function areErrors(array: unknown): array is Error[] {
  if (!isFilledArray(array)) {
    return false;
  }

  for (const item of array) {
    if (!isError(item)) {
      return false;
    }
  }

  return true;
}