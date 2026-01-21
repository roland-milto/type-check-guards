// Import: Self-created functions.
import {isFilledArray} from "./filledArray.js";
import {isString} from "./string.js";

// Regular expression for binary literals (optional 0b/0B prefix followed by 0-1).
const BINARY_LITERAL_REGEX = /^(?:0[bB])?[01]+$/;

/**
 * Determines if the given value is a binary string.
 * A binary string is a string optionally prefixed with `0b` or `0B`, followed by binary digits.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-21
 *
 * @param   {unknown} value   - The value to be checked.
 *
 * @returns {value is string} - Returns `true` if the value is a binary string, otherwise `false`.
 *
 * @example
 * // true (with prefix)
 * isBinary("0b1010");
 *
 * // true (without prefix)
 * isBinary("1010");
 *
 * // false (invalid characters)
 * isBinary("0b1020");
 *
 * // false (lenient behavior for non-string types)
 * isBinary(0b1010);
 *
 * // If you use the object 'BigInt': import from "@js-augment/bigint/register-global.mjs";
 * BigInt.isBinary(value);
 *
 * // If you use the object 'Number': import from "@js-augment/number/register-global.mjs";
 * Number.isBinary(value);
 */
export function isBinary(value: unknown): value is string {
  if (!isString(value) || value.length === 0) {
    return false;
  }

  // Reject leading/trailing whitespace without allocating via trim().
  const first: number = value.charCodeAt(0);
  const last: number = value.charCodeAt(value.length - 1);

  if (first <= 32 || last <= 32) {
    return false;
  }

  return BINARY_LITERAL_REGEX.test(value);
}

/**
 * Determines if the given value is an array of valid binary strings.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-21
 *
 * @param   {unknown} array     - The value to be checked.
 *
 * @returns {array is string[]} - Returns `true` if the value is a non-empty array of binary strings, otherwise `false`.
 *
 * @example
 * // true
 * areBinaries(["0b1010", "1101"]);
 *
 * // false (contains an invalid binary string)
 * areBinaries(["1010", "1020"]);
 *
 * // false (empty array or not an array)
 * areBinaries([]);
 */
export function areBinaries(array: unknown): array is string[] {
  if (!isFilledArray(array)) {
    return false;
  }

  for (const item of array) {
    if (!isBinary(item)) {
      return false;
    }
  }

  return true;
}