// Import: Self-created functions.
import {isFilledArray} from "./filledArray.js";

/**
 * Checks if the provided value is an instance of `WeakSet`.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-13
 *
 * @param   {unknown} value             - The value to be checked.
 *
 * @returns {value is WeakSet<object>}  - Returns `true` if the value is a WeakSet, otherwise `false`.
 */
export function isWeakSet(value: unknown): value is WeakSet<object> {
  return value instanceof WeakSet;
}

/**
 * Checks if the given value is a non-empty array where all elements are WeakSets.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-13
 *
 * @param   {unknown} array               - The value to be checked.
 *
 * @returns {value is WeakSet<object>[]}  - Returns `true` if the value is a filled array and all its elements are WeakSets, otherwise `false`.
 */
export function areWeakSets(array: unknown): array is WeakSet<object>[] {
  if (!isFilledArray(array)) {
    return false;
  }

  for (const item of array) {
    if (!isWeakSet(item)) {
      return false;
    }
  }

  return true;
}