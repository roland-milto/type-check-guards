// Import: local functions.
import {isFilledArray} from "./filledArray.js";

/**
 * Determines if a given value is a `Buffer` object by checking its type.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown} value - The value to be tested.
 *
 * @returns {boolean}       - `true` if the value is a `Buffer`; otherwise `false`.
 *
 * @example
 *
 * // true
 * isBuffer(Buffer.from('hello'));
 *
 * // false (input is not a Buffer)
 * isBuffer('hello');
 *
 * // false (input is not a Buffer)
 * isBuffer({});
 *
 * // false (input is not a Buffer)
 * isBuffer(null);
 */
function isBuffer(value: unknown): value is Buffer {
  return typeof Buffer !== 'undefined' && Buffer.isBuffer(value);
}

/**
 * Determines if all elements in the given array are instances of `Buffer`.
 * This function first checks if the array is a non-empty filled array and then verifies each element.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown[]} array - The array to be checked for buffer instances.
 *
 * @returns {boolean}         - `true` if all elements are `Buffer` instances; otherwise, `false`.
 *
 * @example
 * // true
 * areBuffers([Buffer.from('test'), Buffer.from('123')]);
 *
 * // false (array contains a number)
 * areBuffers([Buffer.from('test'), 42]);
 *
 * // false (not a filled array)
 * areBuffers([]);
 */
function areBuffers(array: unknown[]): array is Buffer[] {
  if (!isFilledArray(array)) {
    return false;
  }

  for (const item of array) {
    if (!isBuffer(item)) {
      return false;
    }
  }

  return true;
}

// Exports.
export {isBuffer, areBuffers};