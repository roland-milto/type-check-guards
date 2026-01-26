// Import: local functions.
import {isFilledArray} from "./filledArray.js";
import {isString} from "./string.js";

/**
 * Determines whether a given value is a valid JSON string.
 * The function checks if the `value` is a string and attempts to parse it as JSON, returning `true` if successful.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown} value - The value to be checked for valid JSON format.
 *
 * @returns {boolean}       - `true` if the `value` is a valid JSON string, otherwise `false`.
 *
 * @example
 *
 * // true
 * isJson('{"name":"Roland", "age": 35, "city": "Erndtebrück"}')
 *
 * // false
 * isJson('Hello, World!')
 *
 * // false
 * isJson(12345)
 *
 * // true
 * isJson('true')
 *
 * // false
 * isJson('[1, 2, 3, invalid]')
 */
function isJson(value: unknown): value is string {
  if (!isString(value)) {
    return false;
  }

  // Valid JSON must be a stringified object.
  try {
    JSON.parse(value);
    return true;
  } catch {
    return false;
  }
}

/**
 * Determines if all elements in the given array are JSON strings by checking each element.
 * The function returns `true` if every element is a valid JSON string, otherwise it returns `false`.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown[]} array - The array to be checked for JSON string elements.
 *
 * @returns {boolean}         - `true` if all elements are JSON strings, otherwise `false`.
 *
 * @example
 * // true
 * areJson(['{"a":1}', '{"b":2}']);
 *
 * // false
 * areJson(['{"a":1}', 123]);
 *
 * // false
 * areJson([]);
 */
function areJson(array: unknown[]): array is string[] {
  if (!isFilledArray(array)) {
    return false;
  }

  for (const item of array) {
    if (!isJson(item)) {
      return false;
    }
  }

  return true;
}

// Exports.
export {isJson, areJson};