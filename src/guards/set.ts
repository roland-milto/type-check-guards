// Import: local functions.
import {isFilledArray} from "./filledArray.js";

/**
 * Determines whether a given value is a `Set`.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown} value - The value to check.
 *
 * @returns {boolean}       - `true` if the value is a `Set`, otherwise `false`.
 *
 * @example
 * // true
 * isSet(new Set());
 *
 * // true
 * isSet(new Set([1, 2, 3]));
 *
 * // false (input is an array)
 * isSet([1, 2, 3]);
 *
 * // false (input is an object)
 * isSet({ key: 'value' });
 *
 * // false (input is a string)
 * isSet('Set');
 */
function isSet(value: unknown): value is Set<unknown> {
  return value instanceof Set;
}

/**
 * Determines if all elements within the provided array are `Set` instances.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown[]} array - The array to be checked for `Set` instances.
 *
 * @returns {boolean}         - `true` if all elements are `Set` instances, `false` otherwise.
 *
 * @example
 * // true
 * areSets([new Set(), new Set([1, 2]), new Set()]);
 *
 * // false (contains a non-Set element)
 * areSets([new Set(), {}, new Set([1, 2])]);
 *
 * // false (the array is empty)
 * areSets([]);
 */
function areSets(array: unknown[]): array is Set<unknown>[] {
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

// Exports.
export {isSet, areSets};