/**
 * Determines if the provided value is an object.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-22
 *
 * @param   {unknown} value - The value to be checked.
 *
 * @returns {boolean}       - Returns `true` if the value is an object and not null; otherwise, `false`.
 */
export function isObject(value: unknown): value is object {
  return typeof value === 'object' && value !== null;
}

/**
 * Determines whether the provided value is an array consisting entirely of objects.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-22
 *
 * @param   {unknown} array - The value to be checked.
 *
 * @returns {boolean}       - Returns `true` if the value is an array of objects, otherwise `false`.
 */
export function areObjects(array: unknown): array is object[] {
  if (!Array.isArray(array)) {
    return false;
  }

  for (const item of array) {
    if (!isObject(item)) {
      return false;
    }
  }

  return true;
}