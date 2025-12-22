// Import: Interfaces and DataTypes.
import {DataTypes} from "./types.js";

// Import: Self-created modules.
import {getTypeOf} from "../utils//getTypeOf.js";

// Alias.
export const isType: (value: any, type: DataTypes) => boolean = isOfType;

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