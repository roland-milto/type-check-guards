// Import: Interfaces and types.
import type {DataType} from "../types/dataType.js";

// Import: Self-created functions.
import {isOfType} from "./ofType.js";
import {isFilledArray} from "./filledArray.js";

/**
 * Checks if the provided value matches at least one of the specified data types.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-07
 *
 * @param   {unknown}     value - The variable to check.
 * @param   {DataType[]} types - An array of data types to compare against.
 *
 * @returns {boolean}           - Returns `true` if the value's type matches any of the specified types, otherwise `false`.
 *
 * @example
 * // true
 * isOneOfType("Roland", ["string", "number"])
 *
 * // false
 * isOneOfType(42, ["string", "boolean"])
 */
export function isOneOfType(value: unknown, types: DataType[]): boolean {
  for (const type of types) {
    if (isOfType(value, type)) {
      return true;
    }
  }

  return false;
}

/**
 * Checks if every element in the provided array matches at least one of the specified data types.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-07
 *
 * @param   {unknown}     array - The array to be checked.
 * @param   {DataType[]} types - An array of allowed data types.
 *
 * @returns {boolean}           - Returns `true` if all elements match at least one specified type, otherwise `false`.
 *
 * @example
 * // true
 * areOneOfType(["ts", 42], ["string", "number"])
 *
 * // false
 * areOneOfType(["ts", null], ["string", "number"])
 */
export function areOneOfType(array: unknown, types: DataType[]): boolean {
  if (!isFilledArray(array)) {
    return false;
  }

  for (const item of array) {
    if (!isOneOfType(item, types)) {
      return false;
    }
  }

  return true;
}