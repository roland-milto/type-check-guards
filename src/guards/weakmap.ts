// Import: Self-created functions.
import {isFilledArray} from "./filledArray.js";

/**
 * Checks if the provided value is an instance of `WeakMap`.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-13
 *
 * @param   {unknown} value                     - The value to be checked.
 *
 * @returns {value is WeakMap<object, unknown>} - Returns `true` if the value is a WeakMap, otherwise `false`.
 */
export function isWeakMap(value: unknown): value is WeakMap<object, unknown> {
  return value instanceof WeakMap;
}

/**
 * Checks if the given value is a non-empty array where all elements are WeakMaps.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-13
 *
 * @param   {unknown} array                       - The value to be checked.
 *
 * @returns {value is WeakMap<object, unknown>[]} - Returns `true` if the value is a filled array and all its elements are WeakMaps, otherwise `false`.
 */
export function areWeakMaps(array: unknown): array is WeakMap<object, unknown>[] {
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