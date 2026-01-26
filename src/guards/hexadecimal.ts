// Import: local functions.
import {isFilledArray} from "./filledArray.js";
import {isString} from "./string.js";

// Regular expression for hexadecimal literals.
const HEX_LITERAL_REGEX = /^[+-]?0[xX][0-9a-fA-F]+$/;

/**
 * Checks if the given value is a hexadecimal string.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown} value - The value to be checked.
 *
 * @returns {boolean}       - Returns `true` if the value is a hexadecimal string, otherwise `false`.
 *
 * @example
 * // If you use the object 'BigInt': import from "@js-augment/bigint/register-global.mjs";
 * BigInt.isHexadecimal(value);
 *
 * // If you use the object 'Number': import from "@js-augment/number/register-global.mjs";
 * Number.isHexadecimal(value);
 *
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
 */
function isHexadecimal(value: unknown): value is string {
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
 * The `areHexadecimals` function checks whether all elements in the given array are valid hexadecimal strings.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown[]} array - The array to be checked for hexadecimal string elements.
 *
 * @returns {boolean}         - `true` if every element in the array is a hexadecimal string, otherwise `false`.
 *
 * @example
 * // If you use the object 'BigInts': import from "@js-augment/bigints/register-global.mjs";
 * BigInts.areHexadecimals(value);
 *
 * // If you use the object 'Numbers': import from "@js-augment/numbers/register-global.mjs";
 * Numbers.areHexadecimals(value);
 *
 * // true
 * areHexadecimals(['1A', '3F', 'B2']);
 *
 * // false (non-hexadecimal string presents)
 * areHexadecimals(['1A', '3G', 'B2']);
 *
 * // false (contains a non-string element)
 * areHexadecimals([10, '3F', 'B2']);
 *
 * // false (an empty array is not valid)
 * areHexadecimals([]);
 */
function areHexadecimals(array: unknown[]): array is string[] {
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

// Export.
export {isHexadecimal, areHexadecimals};