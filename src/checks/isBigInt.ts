/**
 * Checks if the given value is of type bigint.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-22
 *
 * @param   {any} value - The value to check.
 *
 * @returns {boolean}   - Returns `true` if the value is a bigint, otherwise `false`.
 */
export function isBigInt(value: any): value is bigint {
  return typeof value === 'bigint';
}