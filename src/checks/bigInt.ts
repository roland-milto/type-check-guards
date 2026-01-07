// Import: Self-created functions.
import {isFilledArray} from "./filledArray.js";

/**
 * Checks if the given value is of type `BigInt`.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-22
 *
 * @param   {any} value - The value to check.
 *
 * @returns {boolean}   - Returns `true` if the value is a `BigInt`, otherwise `false`.
 *
 * @example
 * // true
 * isBigInt(9007199254740991n);
 *
 * // false
 * isBigInt(42);
 */
export function isBigInt(value: unknown): value is bigint {
  return typeof value === 'bigint';
}

/**
 * Determines whether the given value is an array consisting only of BigInt values.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-07
 *
 * @param   {unknown} array - The value to check.
 *
 * @returns {boolean}       - Returns `true` if the value is an array of BigInt values, otherwise `false`.
 *
 * @example
 * // true
 * areBigInts([10n, 20n]);
 *
 * // false
 * areBigInts([10n, 20]);
 */
export function areBigInts(array: unknown): array is bigint[] {
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