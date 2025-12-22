/**
 * Determines whether the provided argument is a regular expression (RegExp) object.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-22
 *
 * @param   {unknown} value - The value to be checked.
 *
 * @returns {boolean}       - A isBoolean value indicating whether the input is a `RegExp` object.
 */
export function isRegEx(value: unknown): value is RegExp {
  return value instanceof RegExp;
}

/**
 * Checks if the provided value is an array of regular expressions (RegExp).
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-22
 *
 * @param   {unknown} array - The value to be checked.
 *
 * @returns {boolean}       - Returns `true` if the value is an array where every element is a RegExp object,
 *                          otherwise returns `false`.
 */
export function areRegExes(array: unknown): array is RegExp[] {
  if (!Array.isArray(array)) {
    return false;
  }

  for (const item of array) {
    if (!isRegEx(item)) {
      return false;
    }
  }

  return true;
}