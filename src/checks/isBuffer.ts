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