// Import: local functions.
import {isFilledArray} from "./filledArray.js";

/**
 * Determines if the provided `value` is a `WeakMap` instance.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown} value - The value to check.
 *
 * @returns {boolean}       - `true` if the `value` is a `WeakMap`; otherwise `false`.
 *
 * @example
 * // true
 * isWeakMap(new WeakMap());
 *
 * // false (input is not a WeakMap)
 * isWeakMap(new Map());
 *
 * // false (input is a plain object)
 * isWeakMap({});
 *
 * // false (input is a number)
 * isWeakMap(42);
 */
function isWeakMap(value: unknown): value is WeakMap<object, unknown> {
  return value instanceof WeakMap;
}

/**
 * Determines if all elements in a given array are instances of `WeakMap`.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown[]} array - The array to check for `WeakMap` instances.
 *
 * @returns {boolean}         - `true` if all elements are `WeakMap` instances, otherwise `false`.
 *
 * @example
 * // true
 * areWeakMaps([new WeakMap(), new WeakMap()]);
 *
 * // false (array contains a non-WeakMap item)
 * areWeakMaps([new WeakMap(), {}]);
 *
 * // false (input is an empty array)
 * areWeakMaps([]);
 */
function areWeakMaps(array: unknown[]): array is WeakMap<object, unknown>[] {
  if (!isFilledArray(array)) {
    return false;
  }

  for (const item of array) {
    if (!isWeakMap(item)) {
      return false;
    }
  }

  return true;
}

// Exports.
export {isWeakMap, areWeakMaps};