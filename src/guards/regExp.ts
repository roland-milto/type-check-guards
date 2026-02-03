// Import: local functions.
import {isFilledArray} from "./filledArray.js";

/**
 * Determines if the provided `value` is an instance of `RegExp`.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown} value - The value to be checked.
 *
 * @returns {boolean}       - `true` if the `value` is a `RegExp`, otherwise `false`.
 *
 * @example
 * // true
 * console.log(isRegEx(/abc/));
 *
 * // true
 * console.log(isRegEx(new RegExp('abc')));
 *
 * // false (input is not a RegExp)
 * console.log(isRegEx('abc'));
 *
 * // false (input is not a RegExp)
 * console.log(isRegEx({}));
 *
 * // false (input is not a RegExp)
 * console.log(isRegEx(123));
 */
function isRegEx(value: unknown): value is RegExp {
  return value instanceof RegExp;
}

/**
 * Checks if the provided value is an array of regular expressions (RegExp).
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-07
 *
 * @param   {unknown} array - The value to be checked.
 *
 * @returns {boolean}       - Returns `true` if the value is an array where every element is a RegExp object,
 *                          otherwise returns `false`.
 *
 * @example
 * // true
 * areRegExes([/[a-z]/, /[0-9]/]);
 *
 * // false
 * areRegExes([/[a-z]/, ".*"]);
 */
function areRegExes(array: unknown[]): array is RegExp[] {
  if (!isFilledArray(array)) {
    return false;
  }

  for (const item of array) {
    if (!isRegEx(item)) {
      return false;
    }
  }

  return true;
}

// Exports.
export {isRegEx, isRegEx as isRegExp, areRegExes};