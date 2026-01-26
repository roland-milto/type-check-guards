// Import: local functions.
import {isFilledArray} from "./filledArray.js";

/**
 * Checks if the provided `value` is a plain object.
 * A plain object is an object created by the Object constructor or with a `{}` literal.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown} value - The value to test for plain object status.
 *
 * @returns {boolean}       - `true` if `value` is a plain object, otherwise `false`.
 *
 * @example
 * // true
 * console.log(isPlainObject({}));
 *
 * // true
 * console.log(isPlainObject(new Object()));
 *
 * // false (input is not an object)
 * console.log(isPlainObject(null));
 *
 * // false (input is not an object)
 * console.log(isPlainObject([]));
 *
 * // false (input is not an object)
 * console.log(isPlainObject(() => {}));
 */
function isPlainObject(value: unknown): value is Record<string, unknown> {
  return Object.prototype.toString.call(value) === '[object Object]';
}

/**
 * Checks if all elements in the provided array are plain objects.
 * A plain object is an object that is created by the object literal
 * syntax or corresponds to `Object.create(null)`.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown[]} array - The array to be checked for plain object elements.
 *
 * @returns {boolean}         - `true` if all elements are plain objects, `false` otherwise.
 *
 * @example
 * // true
 * arePlainObjects([{a: 1}, {b: 2}]);
 *
 * // true
 * arePlainObjects([{}, {}]);
 *
 * // false (contains non-object element)
 * arePlainObjects([{a: 1}, 2]);
 */
function arePlainObjects(array: unknown[]): array is Record<string, unknown>[] {
  if (!isFilledArray(array)) {
    return false;
  }

  for (const item of array) {
    if (!isPlainObject(item)) {
      return false;
    }
  }

  return true;
}

// Exports.
export {isPlainObject, arePlainObjects};