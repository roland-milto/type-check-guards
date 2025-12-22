/**
 * Determines whether the given value is an array.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-22
 *
 * @param   {any} value - The value to be checked.
 *
 * @returns {boolean}   - A boolean indicating whether the value is an array.
 */
export function isArray(value: any): value is any[] {
  return Array.isArray(value);
}