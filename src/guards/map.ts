// Import: Self-created functions.
import {isFilledArray} from "./filledArray.js";

/**
 * Checks if the provided value is an instance of `Map`.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-13
 *
 * @param   {unknown} value                   - The value to be checked.
 *
 * @returns {value is Map<unknown, unknown>}  - Returns `true` if the value is a Map, otherwise `false`.
 */
export function isMap(value: unknown): value is Map<unknown, unknown> {
  return value instanceof Map;
}

/**
 * Checks if the given value is an array where all elements are Maps.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-13
 *
 * @param   {unknown} array                     - The value to be checked.
 *
 * @returns {value is Map<unknown, unknown>[]}  - Returns `true` if the value is an array and all its elements are Maps, otherwise `false`.
 */
export function areMaps(array: unknown): array is Map<unknown, unknown>[] {
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