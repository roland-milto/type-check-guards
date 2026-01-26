// Import: local functions.
import {isFilledArray} from "./filledArray.js";

/**
 * Checks if the provided `value` is an instance of `Error`.
 *
 * @author   Roland Milto (https://roland.milto.de/)
 * @version  2026-01-26
 *
 * @param    {unknown} value - The value to check against the `Error` type.
 *
 * @returns  {boolean}       - `true` if the `value` is an `Error`; otherwise, `false`.
 *
 * @example
 * // true
 * isError(new Error());
 *
 * // false (input is not an Error)
 * isError("This is a string");
 *
 * // false (input is undefined)
 * isError(undefined);
 *
 * // false (input is a number)
 * isError(42);
 */
function isError(value: unknown): value is Error {
  return value instanceof Error;
}

/**
 * Checks if the given array consists entirely of `Error` objects.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown[]} array - The array to check for `Error` objects.
 *
 * @returns {boolean}         - `true` if all items in the array are `Error` objects; `false` otherwise.
 *
 * @example
 * // true
 * areErrors([new Error("error1"), new Error("error2")]);
 *
 * // false (the array contains a non-error item)
 * areErrors([new Error("error1"), "not an error"]);
 *
 * // false (empty array)
 * areErrors([]);
 *
 * // false (the array contains an undefined value)
 * areErrors([undefined]);
 */
function areErrors(array: unknown[]): array is Error[] {
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

// Exports.
export {isError, areErrors};