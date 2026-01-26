// Import: local functions.
import {isFilledArray} from "./filledArray.js";
import {isString} from "./string.js";

// Regular expression for decimal strings.
const DECIMAL_LITERAL_REGEX = /^[+-]?(?:\d+(?:\.\d*)?|\.\d+)$/;

/**
 * Determines whether a given value is a decimal string representation, ensuring no leading or trailing whitespace
 * and validating it against a predefined regex pattern.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown} value - The value to check for a decimal string format.
 *
 * @returns {boolean}       - `true` if the value is a valid decimal string, otherwise `false`.
 *
 * @example
 * // If you use the object 'Number': import from "@js-augment/number/register-global.mjs";
 * Number.isDecimal(value);
 *
 * // true
 * isDecimal("123.45")
 *
 * // true
 * isDecimal("0.99")
 *
 * // true
 * isDecimal("-42.0")
 *
 * // false (value is not a string)
 * isDecimal(123.45)
 *
 * // false (leading whitespace)
 * isDecimal(" 123.45")
 *
 * // false (trailing whitespace)
 * isDecimal("123.45 ")
 */
function isDecimal(value: unknown): value is string {
  if (!isString(value)) {
    return false;
  }

  // Reject leading/trailing whitespace without allocating via trim().
  const first: number = value.charCodeAt(0);
  const last: number = value.charCodeAt(value.length - 1);

  if (first <= 32 || last <= 32) {
    return false;
  }

  return DECIMAL_LITERAL_REGEX.test(value);
}

/**
 * Checks whether all elements in an array are decimal numbers.
 * The `areDecimals` function also verifies that the array is filled.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown[]} array - The array to be checked.
 *
 * @returns {boolean}         - `true` if all elements are decimals and the array is filled; `false` otherwise.
 *
 * @example
 * // If you use the object 'Numbers': import from "@js-augment/numbers/register-global.mjs";
 * Numbers.areDecimals(value);
 *
 * // true
 * areDecimals(['1.0', '2.5', '3.14']);
 *
 * // false (input is not a decimal)
 * areDecimals(['1.0', 'abc', '3.14']);
 *
 * // false (input is not a filled array)
 * areDecimals([]);
 */
function areDecimals(array: unknown[]): array is string[] {
  if (!isFilledArray(array)) {
    return false;
  }

  for (const item of array) {
    if (!isDecimal(item)) {
      return false;
    }
  }

  return true;
}

// Export.
export {isDecimal, areDecimals};