/**
 * Determines whether the provided argument is a regular expression (RegExp) object.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-22
 *
 * @param   {unknown} value - The value to be checked.
 *
 * @returns {boolean}       - A boolean value indicating whether the input is a `RegExp` object.
 */
export function isRegex(value: unknown): value is RegExp {
  return value instanceof RegExp;
}