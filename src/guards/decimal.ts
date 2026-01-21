// Import: Self-created functions.
import {isFilledArray} from "./filledArray.js";
import {isString} from "./string.js";

// Regular expression for decimal strings.
const DECIMAL_LITERAL_REGEX = /^[+-]?(?:\d+(?:\.\d*)?|\.\d+)$/;

/**
 * Checks whether the provided value is a decimal number in string representation.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-21
 *
 * @param   {unknown} value   - The value to be checked.
 *
 * @returns {value is string} - Returns `true` if the value is a decimal string, otherwise `false`.
 *
 * @example
 * // true
 * isDecimal("123.45");
 *
 * // true (negative and signed)
 * isDecimal("-123.45");
 *
 * // true (shorthand notation)
 * isDecimal(".5");
 *
 * // false (lenient behavior for non-string types)
 * isDecimal(123.45);
 *
 * // If you use the object 'Number': import from "@js-augment/number/register-global.mjs";
 * Number.isDecimal(value);
 */
export function isDecimal(value: unknown): value is string {
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
 * Determines if the given value is an array of valid decimal strings.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-21
 *
 * @param   {unknown} array     - The value to be checked.
 *
 * @returns {array is string[]} - Returns `true` if the value is a non-empty array of decimal strings, otherwise `false`.
 *
 * @example
 * // true
 * areDecimals(["123.45", "-0.5", ".123"]);
 *
 * // false (contains an invalid decimal string)
 * areDecimals(["123.45", "12a.5"]);
 *
 * // false (empty array or not an array)
 * areDecimals([]);
 */
export function areDecimals(array: unknown): array is string[] {
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