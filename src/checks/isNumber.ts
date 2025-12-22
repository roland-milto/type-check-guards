/**
 * Determines whether the provided argument is a valid number.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-22
 *
 * @param   {unknown} value - The value to be checked.
 *
 * @returns {boolean}       - A boolean indicating whether the given argument is a finite number and not NaN.
 */
export function isNumber(value: unknown): value is number {
  return typeof value === 'number' && !Number.isNaN(value) && Number.isFinite(value);
}