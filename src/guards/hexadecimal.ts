// Import: Self-created functions.
import {isFilledArray} from "./filledArray.js";
import {isString} from "./string.js";

// Regular expression for hexadecimal literals.
const HEX_LITERAL_REGEX = /^[+-]?0[xX][0-9a-fA-F]+$/;

/**
 * Checks if the given value is a hexadecimal string.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-15
 *
 * @param   {unknown} value   - The value to be checked.
 *
 * @returns {value is string} - Returns `true` if the value is a hexadecimal string, otherwise `false`.
 *
 * @example
 * // true (with prefix)
 * isHexadecimal("0x1A2B");
 *
 * // true (case-insensitive and signed)
 * isHexadecimal("-0Xff");
 *
 * // false (prefix '0x' is mandatory, according to regex)
 * isHexadecimal("1A2B");
 *
 * // false (lenient behavior for non-string types)
 * isHexadecimal(0x1A2B);
 *
 * // If you use the object 'BigInt': import from "@js-augment/bigint/register-global.mjs";
 * BigInt.isHexadecimal(value);
 *
 * // If you use the object 'Number': import from "@js-augment/number/register-global.mjs";
 * Number.isHexadecimal(value);
 */
export function isHexadecimal(value: unknown): value is string {
  if (!isString(value)) {
    return false;
  }

  // Reject leading/trailing whitespace without allocating via trim().
  const first: number = value.charCodeAt(0);
  const last: number = value.charCodeAt(value.length - 1);

  if (first <= 32 || last <= 32) {
    return false;
  }

  return HEX_LITERAL_REGEX.test(value);
}

/**
 * Determines if the given value is an array of valid hexadecimal strings.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-21
 *
 * @param   {unknown} array     - The value to be checked.
 *
 * @returns {array is string[]} - Returns `true` if the value is a non-empty array of hexadecimal strings, otherwise `false`.
 *
 * @example
 * // true
 * areHexadecimals(["0x1A2B", "-0Xff"]);
 *
 * // false (contains an invalid hexadecimal string)
 * areHexadecimals(["0x1A2B", "0xG1"]);
 *
 * // false (empty array or not an array)
 * areHexadecimals([]);
 */
export function areHexadecimals(array: unknown): array is string[] {
  if (!isFilledArray(array)) {
    return false;
  }

  for (const item of array) {
    if (!isHexadecimal(item)) {
      return false;
    }
  }

  return true;
}