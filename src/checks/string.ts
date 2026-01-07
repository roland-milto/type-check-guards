// Import: Self-created functions.
import {isFilledArray} from "./filledArray.js";

/**
 * Determines if the provided value is a string.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-22
 *
 * @param   {unknown} value - The value to be checked.
 *
 * @returns {boolean}       - `true` if the value is a string, otherwise `false`.
 *
 * @example
 * // true
 * isString("Roland Milto");
 *
 * // false
 * isString(2026);
 */
export function isString(value: unknown): value is string {
  return typeof value === 'string';
}

/**
 * Determines if the provided value is an array where all elements are strings.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-07
 *
 * @param   {unknown} array - The value to be checked.
 *
 * @returns {boolean}       - `true` if the value is an array of strings, otherwise `false`.
 *
 * @example
 * // true
 * areStrings(["Roland", "Milto"]);
 *
 * // false
 * areStrings(["Code", 404]);
 */
export function areStrings(array: unknown): array is string[] {
  if (!isFilledArray(array)) {
    return false;
  }

  for (const item of array) {
    if (!isString(item)) {
      return false;
    }
  }

  return true;
}