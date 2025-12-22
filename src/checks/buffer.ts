/**
 * Determines whether the given value is a Node.js-Buffer.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-22
 *
 * @param   {unknown} value - The value to check.
 *
 * @returns {boolean}       - `true` if the value is a Buffer, otherwise `false`.
 */
export function isBuffer(value: unknown): value is Buffer {
  return typeof Buffer !== 'undefined' && Buffer.isBuffer(value);
}

/**
 * Checks if the given value is an array consisting entirely of Buffer objects.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-22
 *
 * @param   {unknown} array - The value to be checked.
 *
 * @returns {boolean}       - Returns `true` if the value is an array of Buffer objects, otherwise `false`.
 */
export function areBuffers(array: unknown): array is Buffer[] {
  if (!Array.isArray(array)) {
    return false;
  }

  for (const item of array) {
    if (!isBuffer(item)) {
      return false;
    }
  }

  return true;
}