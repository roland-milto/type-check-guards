/**
 * Determines whether the provided value is a plain object.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-22
 *
 * @param   {unknown} value - The value to check.
 * @returns {boolean}       - Returns `true` if the value is a plain object, otherwise `false`.
 */
export function isPlainObject(value: unknown): value is Record<string, unknown> {
  return Object.prototype.toString.call(value) === '[object Object]';
}

/**
 * Checks if the provided value is an array where all elements are plain objects.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-22
 *
 * @param   {unknown} array - The value to be checked.
 *
 * @returns {boolean}       - Returns `true` if the value is an array of plain objects, otherwise `false`.
 */
export function arePlainObjects(array: unknown): array is Record<string, unknown>[] {
  if (!Array.isArray(array)) {
    return false;
  }

  for (const item of array) {
    if (!isPlainObject(item)) {
      return false;
    }
  }

  return true;
}