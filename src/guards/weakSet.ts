// Import: local functions.
import {isFilledArray} from "./filledArray.js";

/**
 * Determines whether the given `value` is a `WeakSet` of objects.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown} value - The value to be checked.
 *
 * @returns {boolean}       - `true` if `value` is a `WeakSet` of objects, `false` otherwise.
 *
 * @example
 * // true
 * console.log(isWeakSet(new WeakSet()));
 *
 * // false (input is not a WeakSet)
 * console.log(isWeakSet(new Set()));
 *
 * // false (input is not a WeakSet)
 * console.log(isWeakSet([]));
 *
 * // false (input is not a WeakSet)
 * console.log(isWeakSet({}));
 */
function isWeakSet(value: unknown): value is WeakSet<object> {
  return value instanceof WeakSet;
}

/**
 * Determines if the provided array consists entirely of `WeakSet` objects.
 * The function validates each item in the input to ensure it is a `WeakSet`.
 *
 * @autor   Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown[]} array - The array to be checked for `WeakSet` objects.
 *
 * @returns {boolean}         - `true` if all elements in the array are `WeakSet` objects; otherwise, `false`.
 *
 * @throws  {TypeError}       - If the input is not an array or is null.
 *
 * @example
 * // true
 * areWeakSets([new WeakSet(), new WeakSet()])
 *
 * // false (contains a non-WeakSet element)
 * areWeakSets([new WeakSet(), {}])
 *
 * // false (empty array)
 * areWeakSets([])
 *
 * // false (input is not an array)
 * areWeakSets(null)
 */
function areWeakSets(array: unknown[]): array is WeakSet<object>[] {
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

// Exports.
export {isWeakSet, areWeakSets};