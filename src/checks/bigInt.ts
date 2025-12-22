/**
 * Checks if the given value is of type `BigInt`.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-22
 *
 * @param   {any} value - The value to check.
 *
 * @returns {boolean}   - Returns `true` if the value is a `BigInt`, otherwise `false`.
 */
export function isBigInt(value: unknown): value is bigint {
  return typeof value === 'bigint';
}

/**
 * Determines whether the given value is an array consisting only of BigInt values.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-22
 *
 * @param   {unknown} array - The value to check.
 *
 * @returns {boolean}       - Returns `true` if the value is an array of BigInt values, otherwise `false`.
 */
export function areBigInts(array: unknown): array is bigint[] {
  if (!Array.isArray(array)) {
    return false;
  }

  for (const item of array) {
    if (!isBigInt(item)) {
      return false;
    }
  }

  return true;
}