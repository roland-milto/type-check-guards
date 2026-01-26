// Import: interfaces and types.
import type {DataTypeAsString} from "../types/dataType.js";

// Import: local functions.
import {getTypeOf} from "../utils/getTypeOf.js";
import {isFilledArray} from "./filledArray.js";

/**
 * Determines if a given `value` is of the specified `type`.
 * Uses both, direct `typeof` checks and a fallback for complex types.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @template T - extends DataTypeAsString
 * @param   {unknown} value - The value to test against the `type`.
 * @param   {T}       type  - The string representation of the type to check against.
 *
 * @returns {boolean}       - `true` if `value` is of the specified `type`; otherwise, `false`.
 *
 * @example
 * // true
 * isOfType(123, "number");
 *
 * // true
 * isOfType("hello", "string");
 *
 * // true
 * isOfType(null, "null");
 *
 * // false (input is not a boolean)
 * isOfType(123, "boolean");
 *
 * // false (input is not a symbol)
 * isOfType({}, "symbol");
 */
function isOfType<T extends DataTypeAsString>(value: unknown, type: T): value is DataTypeOf<T>
{
  // Handle null and undefined explicitly (very fast).
  if (type === "undefined") return value === undefined;
  if (type === "null") return value === null;

  // This avoids the overhead of function calls inside `getTypeOf` for common cases.
  if (type === "bigint" || type === "boolean" || type === "function" || type === "number" || type === "string" || type === "symbol") {
    return typeof value === type;
  }

  // Fallback to the robust check for complex types (array, date, float, regexp, object, etc.).
  return getTypeOf(value) === type;
}

/**
 * Checks whether all elements in the given `array` are of the specified `type`.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @template T - extends DataTypeAsString
 * @param   {unknown[]}                   array - The array to check.
 * @param   {T extends DataTypeAsString}  type  - The type to check against each element in the array.
 *
 * @returns {array is Array<DataTypeOf<T>>}     - `true` if all elements are of the specified type, `false` otherwise.
 *
 * @example
 * // true
 * areOfType([1, 2, 3], 'number');
 *
 * // true
 * areOfType(['a', 'b', 'c'], 'string');
 *
 * // false (not all elements are numbers)
 * areOfType([1, '2', 3], 'number');
 */
function areOfType<T extends DataTypeAsString>(array: unknown[], type: T): array is Array<DataTypeOf<T>> {
  if (!isFilledArray(array)) {
    return false;
  }

  for (const item of array) {
    if (!isOfType(item, type)) {
      return false;
    }
  }

  return true;
}

// Exports.
export {isOfType, areOfType};