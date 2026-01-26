// Import: local functions.
import {isFilledArray} from "./filledArray.js";

/**
 * Determines if the `value` is strictly equal to the `expected` value, returning `true` if they are identical.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @template T                  - The type of the value to compare.
 * @param   {unknown} value     - The value to compare.
 * @param   {T}       expected  - The value to compare against.
 *
 * @returns {boolean}           - `true` if `value` is strictly equal to `expected`, otherwise `false`.
 *
 * @example
 * // true
 * isEqual(5, 5);
 *
 * // true
 * isEqual('text', 'text');
 *
 * // false (different types)
 * isEqual(5, '5');
 *
 * // false (different values)
 * isEqual(true, false);
 *
 * // false (different objects)
 * isEqual({a:1}, {a:1});
 */
function isEqual<T>(value: unknown, expected: T): value is T {
  return value === expected;
}

/**
 * Determines if every element in the `value` array is equal to the `expected` element.
 * The function returns `true` if all elements match; otherwise, it returns `false`.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @template T                    - The type of the array elements.
 * @param   {unknown[]} value     - The array to be checked.
 * @param   {T}         expected  - The element to compare each array item against.
 *
 * @returns {boolean}           - `true` if all elements are equal to `expected`; otherwise, `false`.
 *
 * @example
 * // true
 * areEqual([1, 1, 1], 1);
 *
 * // true
 * areEqual(['test', 'test'], 'test');
 *
 * // false (not all elements are equal to 2)
 * areEqual([2, 3, 2], 2);
 *
 * // false (input is not a filled array)
 * areEqual([], 5);
 *
 */
function areEqual<T>(value: unknown[], expected: T): value is T[] {
  if (!isFilledArray(value)) {
    return false;
  }

  for (const item of value) {
    if (!isEqual(item, expected)) {
      return false;
    }
  }

  return true;
}

// Exports.
export {isEqual, areEqual};