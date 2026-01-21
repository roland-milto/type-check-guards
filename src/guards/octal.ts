// Import: Self-created functions.
import {isFilledArray} from "./filledArray.js";
import {isString} from "./string.js";

// Regular expression for octal literals.
const OCTAL_LITERAL_REGEX = /^[+-]?0[oO][0-7]+$/;

/**
 * Determines if the given value is a valid octal string.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-21
 *
 * @param   {unknown} value   - The value to be checked.
 *
 * @returns {value is string} - Returns `true` if the value is an octal string, otherwise `false`.
 *
 * @example
 * // true
 * isOctal("0o123");
 *
 * // true (case-insensitive and signed)
 * isOctal("+0O755");
 *
 * // false (contains invalid digit '8')
 * isOctal("0o128");
 *
 * // false (lenient behavior for non-string types)
 * isOctal(0o123);
 *
 * // If you use the object 'BigInt': import from "@js-augment/bigint/register-global.mjs";
 * BigInt.isOctal(value);
 *
 * // If you use the object 'Number': import from "@js-augment/number/register-global.mjs";
 * Number.isOctal(value);
 */
export function isOctal(value: unknown): value is string {
  if (!isString(value) || value.length === 0) {
    return false;
  }

  // Reject leading/trailing whitespace without allocating via trim().
  const first: number = value.charCodeAt(0);
  const last: number = value.charCodeAt(value.length - 1);

  if (first <= 32 || last <= 32) {
    return false;
  }

  return OCTAL_LITERAL_REGEX.test(value);
}

/**
 * Determines if the given value is an array of valid octal strings.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-21
 *
 * @param   {unknown} array     - The value to be checked.
 *
 * @returns {array is string[]} - Returns `true` if the value is a non-empty array of octal strings, otherwise `false`.
 *
 * @example
 * // true
 * areOctals(["0o123", "+0O755"]);
 *
 * // false (contains an invalid octal string)
 * areOctals(["0o123", "0o128"]);
 *
 * // false (empty array or not an array)
 * areOctals([]);
 */
export function areOctals(array: unknown): array is string[] {
  if (!isFilledArray(array)) {
    return false;
  }

  for (const item of array) {
    if (!isOctal(item)) {
      return false;
    }
  }

  return true;
}