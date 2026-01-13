// Import: Self-created functions.
import {isFilledArray} from "./filledArray.js";

/**
 * Checks if the provided value is an instance of `Set`.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-13
 *
 * @param   {unknown}               value - The value to be checked.
 *
 * @returns {value is Set<unknown>}       - Returns `true` if the value is a Set, otherwise `false`.
 */
export function isSet(value: unknown): value is Set<unknown> {
  return value instanceof Set;
}

/**
 * Checks if the given value is an array where all elements are Sets.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-13
 *
 * @param   {unknown} array - The value to be checked.
 *
 * @returns {value is Set<unknown>[]} - Returns `true` if the value is an array and all its elements are Sets, otherwise `false`.
 */
export function areSets(array: unknown): array is Set<unknown>[] {
  if (!isFilledArray(array)) {
    return false;
  }

  for (const item of array) {
    if (!isSet(item)) {
      return false;
    }
  }

  return true;
}