// Import: Self-created functions.
import {isFilledArray} from "./filledArray.js";

/**
 * Checks if the provided argument is `NaN` (and specifically of type number).
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-13
 *
 * @param   {unknown}         value - The value to be checked.
 *
 * @returns {value is number}       - Returns `true` if the argument is NaN; otherwise `false`.
 */
export function isNaN(value: unknown): value is number {
  return typeof value === 'number' && Number.isNaN(value);
}

/**
 * Checks if the given value is an array where all elements are NaN.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-13
 *
 * @param   {unknown} array - The value to be checked.
 *
 * @returns {boolean}       - Returns `true` if the value is an array and all its elements are NaN, otherwise `false`.
 */
export function areNaNs(array: unknown): array is number[] {
  if (!isFilledArray(array)) {
    return false;
  }

  for (const item of array) {
    if (!isNaN(item)) {
      return false;
    }
  }

  return true;
}