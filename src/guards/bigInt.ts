// Import: local functions.
import {isFilledArray} from "./filledArray.js";

/**
 * Checks if the given value is of type `bigint`.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown} value - The value to check.
 *
 * @returns {boolean}       - Returns `true` if the value is a `bigint`, otherwise `false`.
 *
 * @example
 * // true
 * isBigInt(10n);
 *
 * // false (regular numbers are not big integers)
 * isBigInt(10);
 *
 * // false (lenient behavior for non-bigint types)
 * isBigInt("10");
 *
 * // If you use the object 'BigInt': import from "@js-augment/bigint/register-global.mjs";
 * BigInt.isBigInt(value);
 *
 * // If you use the object 'Number': import from "@js-augment/number/register-global.mjs";
 * Number.isBigInt(value);
 */
function isBigInt(value: unknown): value is bigint {
  return typeof value === 'bigint';
}

/**
 * Determines whether the given value is an array consisting only of BigInt values.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown} array - The value to check.
 *
 * @returns {boolean}       - Returns `true` if the value is an array of BigInt values, otherwise `false`.
 *
 * @example
 * // true
 * areBigInts([10n, 20n]);
 *
 * // false (regular numbers are not big integers)
 * areBigInts([10n, 20]);
 *
 * // false (lenient behavior for non-bigint types)
 * areBigInts(["42", 1337]);
 */
function areBigInts(array: unknown[]): array is bigint[] {
  if (!isFilledArray(array)) {
    return false;
  }

  for (const item of array) {
    if (!isBigInt(item)) {
      return false;
    }
  }

  return true;
}

// Export.
export {isBigInt, areBigInts};