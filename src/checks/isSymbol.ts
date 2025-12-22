/**
 * Determines whether the provided value is of the `symbol` type.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-22
 *
 * @param   {unknown} value - The value to be checked.
 *
 * @returns {boolean}       - Returns `true` if the value is a symbol, otherwise `false`.
 */
export function isSymbol(value: unknown): value is symbol {
  return typeof value === 'symbol';
}