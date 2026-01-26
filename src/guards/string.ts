// Import: local functions.
import {isFilledArray} from "./filledArray.js";

/**
 * Determines whether a given value is a string.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown} value - The value to be tested for string type.
 *
 * @returns {boolean}       - `true` if the `value` is a string; otherwise, `false`.
 *
 * @example
 * // true
 * isString("Hello World");
 *
 * // true
 * isString("");
 *
 * // false (input is not a string)
 * isString(123);
 *
 * // false (input is not a string)
 * isString({ key: "value" });
 *
 * // false (input is not a string)
 * isString(null);
 */
function isString(value: unknown): value is string {
  return typeof value === 'string';
}

/**
 * The `areStrings` function checks if all elements in the given array are strings.
 * It returns `true` only if every item in the array is a string and the array is not empty.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown[]} array - The array to check, containing elements of unknown types.
 *
 * @returns {boolean}         - `true` if every element in the array is a string and the array is filled; otherwise, `false`.
 *
 * @example
 * // true
 * areStrings(["hello", "world"]);
 *
 * // false (contains a non-string item)
 * areStrings(["hello", 42]);
 *
 * // false (empty array)
 * areStrings([]);
 *
 * // false (contains a non-string item)
 * areStrings([{}, "text"]);
 */
function areStrings(array: unknown[]): array is string[] {
  if (!isFilledArray(array)) {
    return false;
  }

  for (const item of array) {
    if (!isString(item)) {
      return false;
    }
  }

  return true;
}

// Exports.
export {isString, areStrings};