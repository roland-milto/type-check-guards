/**
 * Determines whether the provided value is a finite number.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-22
 *
 * @param   {unknown} value - The value to check for finiteness.
 *
 * @returns {boolean}       - Returns `true` if the value is a finite number; otherwise, `false`.
 */
export function isFinite(value: unknown): value is number {
  return Number.isFinite(value);
}