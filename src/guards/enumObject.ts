// Import: Interfaces and types.
import type {EnumLike} from "../types/enumLike.js";

// Import: local functions.
import {isFilledArray} from "./filledArray.js";
import {isObject} from "./object.js";
import {isString} from "./string.js";
import {isNumber} from "./number.js";
import {isArray} from "./array.js";
import {isNull} from "./null.js";

/**
 * Determines if the given `value` is an object that matches the structure of an enum-like object.
 * An enum-like object has its own string or number properties and contains at least one such property.

 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-02-05

 * @param   {unknown} value - The value to be checked for enum-like structure.
 * @returns {boolean}       - `true` if the `value` is an enum-like object, `false` otherwise.
 * @throws  {TypeError}     - If `value` parameter is invalid or causes type coercion issues during execution.
 *
 * @example
 * // true (valid enum-like object).
 * isEnumObject({ KEY1: "value1", KEY2: 123 });
 *
 * // false (non-enum object values).
 * isEnumObject(["value1", 5]);
 */
function isEnumObject(value: unknown): value is EnumLike {
  // Fast checks
  if (isNull(value)) return false;
  if (isArray(value)) return false;
  if (!isObject(value)) return false;

  // No Object.values(...) allocation: use properties directly.
  let hasAny: boolean = false;
  for (const key in value as Record<string, unknown>) {
    // Optional: only "own" properties (it's safer).
    if (!Object.prototype.hasOwnProperty.call(value, key)) {
      continue;
    }

    hasAny = true;
    const v: unknown = (value as Record<string, unknown>)[key];

    if (!isString(v) && !isNumber(v)) {
      return false;
    }
  }

  return hasAny;
}

/**
 * Checks if the provided array consists entirely of "enum-like" objects.
 * An "enum-like" object is typically assessed based on specific criteria defined in the `isEnumObject` function.
 * Returns `true` only if all elements in the array meet the enum-like structure and constraints.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-02-05
 *
 * @param   {unknown[]} array - The array to validate as containing only "enum-like" objects.
 *
 * @returns {boolean}         - `true` if all elements of the array are "enum-like"; otherwise `false`.
 *
 * @example
 * // true (valid enum-like array)
 * const validArray = [{KEY_ONE: 1}, {KEY_TWO: 2}];
 * areEnumObjects(validArray);
 *
 * // false (contains number 42, which is not enum-like)
 * const mixedArray = [{KEY_ONE: 1}, 42, {KEY_THREE: 3}];
 * areEnumObjects(mixedArray);
 *
 *
 * // false (the array is empty/ not filled)
 * const emptyArray = [];
 * areEnumObjects(emptyArray);
 */
function areEnumObjects(array: unknown[]): array is EnumLike[] {
  if (!isFilledArray(array)) return false;

  for (let i: number = 0; i < array.length; i++) {
    if (!isEnumObject(array[i])) {
      return false;
    }
  }
  return true;
}

// Export with aliases.
export {isEnumObject, isEnumObject as isEnumerationObject, areEnumObjects, areEnumObjects as areEnumerationObjects};