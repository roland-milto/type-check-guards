// Import: Self-created functions.
import {isOfType} from "./isOfType.js";

/**
 * Determines whether the provided value is a Date object.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-22
 *
 * @param   {unknown} value - The value to check.
 *
 * @returns {value is Date} - `true` if the value is a `Date` object, otherwise `false`.
 */
export function isDate(value: unknown): value is Date {
  return isOfType(value, "date");
}