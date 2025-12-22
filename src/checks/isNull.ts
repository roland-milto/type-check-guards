/**
 * Determines whether the given argument is strictly equal to `null`.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-22
 *
 * @param   {unknown} arg - The value to be checked.
 *
 * @returns {boolean}     - Returns `true` if the argument is `null`; otherwise, returns `false`.
 */
export function isNull(arg: unknown): arg is null {
  return arg === null;
}