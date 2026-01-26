// Import: local functions.
import {isFilledArray} from "./filledArray.js";

/**
 * Checks if the given `value` is an instance of `Map`.
 * Returns `true` if `value` is a `Map`, otherwise returns `false`.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown} value - The value to check.
 *
 * @returns {boolean}       - `true` if `value` is a `Map`, `false` otherwise.
 *
 * @example
 * // true
 * isMap(new Map());
 *
 * // true
 * isMap(new Map([['key', 'value']]));
 *
 * // false (input is not a Map)
 * isMap({});
 *
 * // false (input is not a Map)
 * isMap([]);
 *
 * // false (input is not a Map)
 * isMap(null);
 */
export function isMap(value: unknown): value is Map<unknown, unknown> {
  return value instanceof Map;
}

/**
 * Determines if all elements in the array are instances of `Map`.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown[]} array - The array to check.
 *
 * @returns {boolean}         - `true` if all elements are `Map` instances, otherwise `false`.
 *
 * @example
 * // true
 * areMaps([new Map(), new Map()]);
 *
 * // false (array is empty)
 * areMaps([]);
 *
 * // false (contains a non-map value)
 * areMaps([new Map(), {}]);
 */
export function areMaps(array: unknown[]): array is Map<unknown, unknown>[] {
  if (!isFilledArray(array)) {
    return false;
  }

  for (const item of array) {
    if (!isMap(item)) {
      return false;
    }
  }

  return true;
}