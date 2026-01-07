// Import: Interfaces and types.
import {DataTypes} from "./types.js";

// Import: Self-created functions.
import {getTypeOf} from "../utils//getTypeOf.js";
import {isFilledArray} from "./filledArray.js";

/**
 * Determines if the provided variable is of the specified data type.
 *
 * @author  Roland Milto
 * @version 2025-12-10
 *
 * @param   {any}       value - The variable to check.
 * @param   {DataTypes} type  - The name of the data type to compare against.
 *
 * @returns {boolean}         - Does the variable's type match the specified data type?
 *
 * @example
 * // true
 * isOfType("Roland Milto", "string");
 *
 * // true
 * isOfType([], "array");
 *
 * // false
 * isOfType(null, "undefined");
 */
export function isOfType(value: unknown, type: DataTypes): boolean
{
  // Handle null and undefined explicitly (very fast).
  if (type === "undefined") return value === undefined;
  if (type === "null") return value === null;

  // This avoids the overhead of function calls inside `getTypeOf` for common cases.
  if (type === "bigint" || type === "boolean" || type === "function" || type === "string" || type === "symbol") {
    return typeof value === type;
  }

  // Fallback to the robust check for complex types (array, date, regexp, object, etc.).
  return getTypeOf(value) === type;
}

/**
 * Checks if all elements in the provided array are of the specified type.
 *
 * @author  Roland Milto
 * @version 2026-01-07
 *
 * @param   {unknown[]} array - The array to be checked.
 * @param   {DataTypes} type  - The data type to validate against each element in the array.
 *
 * @returns {boolean}         - `true` if all elements in the array are of the specified type, otherwise `false`.
 *
 * @example
 * // true
 * areOfType(["ts", "js"], "string");
 *
 * // false
 * areOfType([1, "2"], "number");
 */
export function areOfType(array: unknown, type: DataTypes): boolean {
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