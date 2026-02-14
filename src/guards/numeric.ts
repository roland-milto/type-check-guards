// Import: local variables.
import {NUMERIC_TYPE_STRINGS} from "../constants/NUMERIC_TYPE_STRINGS.js";

// Import: local functions.
import {getTypeOf} from "../utils/getTypeOf.js";
import {isFilledArray} from "./filledArray.js";

// Precompute for performance (O(1) lookups).
const NUMERIC_TYPES = new Set<string>(NUMERIC_TYPE_STRINGS);

/**
 * Determines whether the provided `value` is a numeric type (e.g., `number`, `BigInt`, etc.).
 * The function relies on `getTypeOf` to evaluate the type of the `value` and checks membership in `NUMERIC_TYPES`.

 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-02-05

 * @param   {unknown}  value   - The value to check for numeric type.
 *
 * @returns {boolean}          - `true` if the value is numeric; otherwise `false`.

 * @example
 * // true
 * isNumeric(42);
 *
 * // true
 * isNumeric(BigInt(1000));
 *
 * // true
 * isNumeric(3.14);
 *
 * // true
 * isNumeric("123");
 *
 * // false (input is not a number or numeric type)
 * isNumeric(null);
 *
 * // false (input is not a number or numeric type)
 * isNumeric(undefined);
 */
function isNumeric(value: unknown): boolean {
  const type: string = getTypeOf(value);

  return NUMERIC_TYPES.has(type);
}

/**
 * Checks whether all elements in the provided array are numeric.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-02-05

 * @param   {unknown} array - The array to check for numeric elements.
 *
 * @returns {boolean}       - `true` if all elements in the array are numeric, otherwise `false`.

 * @example
 * // true
 * areNumerics([1, 2, 3]);
 *
 * // true
 * areNumerics([-3.14, 0, 42]);
 *
 * // false (input contains a string)
 * areNumerics([1, "two", 3]);
 *
 * // false (input is not an array)
 * areNumerics("string");
 *
 * // false (input is an empty array)
 * areNumerics([]);
 */
function areNumerics(array: unknown): boolean {
  if (!isFilledArray(array)) {
    return false;
  }

  for (let i: number = 0, l: number = array.length; i < l; i++) {
    if (!isNumeric(array[i])) {
      return false;
    }
  }

  return true;
}

// Exports.
export {isNumeric, areNumerics};