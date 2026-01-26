// Import: local functions.
import {isFilledArray} from "./filledArray.js";

/**
 * Determines if the provided `value` is a floating-point number.
 * A floating-point number is a number that is not an integer and is finite.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown} value - The value to be checked if it is a floating-point number.
 *
 * @returns {boolean}       - `true` if the `value` is a floating-point number, `false` otherwise.
 *
 * @example
 * // true
 * isFloat(3.14);
 *
 * // true
 * isFloat(-0.1);
 *
 * // true
 * isFloat(1e-7);
 *
 * // false (input is an integer)
 * isFloat(42);
 *
 * // false (input is not a number)
 * isFloat("3.14");
 *
 * // false (input is NaN, not finite)
 * isFloat(NaN);
 */
function isFloat(value: unknown): value is number {
  return typeof value === 'number' && !Number.isInteger(value) && Number.isFinite(value);
}

/**
 * Determines if all elements in the given array are floats.
 * The `areFloats` function checks each item in the array to verify if it is a float.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown[]} array - The array to check for float elements.
 *
 * @returns {boolean}         - `true` if all elements are floats, `false` otherwise.
 *
 * @example
 * // true
 * areFloats([3.14, 2.71, 1.0]);
 *
 * // false (input contains an integer)
 * areFloats([3.14, 2]);
 *
 * // false (input contains a string)
 * areFloats([3.14, '2.71']);
 *
 * // false (input is not a filled array)
 * areFloats([]);
 */
function areFloats(array: unknown[]): array is number[] {
  if (!isFilledArray(array)) {
    return false;
  }

  for (const item of array) {
    if (!isFloat(item)) {
      return false;
    }
  }

  return true;
}

// Exports.
export {isFloat, areFloats};