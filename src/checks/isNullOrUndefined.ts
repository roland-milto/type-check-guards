/**
 * Determines whether the given argument is either `null` or `undefined`.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-22
 *
 * @param   {unknown} value - The value to be checked for `null` or `undefined`.
 *
 * @return  {boolean}       - Returns `true` if the argument is `null` or `undefined`, otherwise `false`.
 */
export function isNullOrUndefined(value: unknown): value is null | undefined {
  return value === null || typeof value === 'undefined';
}