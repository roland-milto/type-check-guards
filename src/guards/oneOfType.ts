// Import: interfaces and types.
import type {DataTypeAsString, DataTypeOf} from "../types/dataType.js";

// Import: local functions.
import {isOfType} from "./ofType.js";
import {isFilledArray} from "./filledArray.js";

/**
 * Determines if a given `value` matches one of the specified `types`.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown}            value - The value to be checked against the specified types.
 * @param   {DataTypeAsString[]} types - An array of type strings representing the potential types of the value.
 *
 * @returns {boolean}                  - `true` if the value matches one of the specified types; otherwise, `false`.
 *
 * @example
 * // true
 * isOneOfType(3, ['number']);
 *
 * // true
 * isOneOfType('hello', ['string']);
 *
 * // false (input is not of type 'boolean')
 * isOneOfType(3, ['boolean']);
 *
 * // false (input is not of type 'array')
 * isOneOfType('world', ['array']);
 */
function isOneOfType<const TTypes extends readonly DataTypeAsString[]>(value: unknown, types: TTypes): value is DataTypeOf<TTypes[number]> {
  for (const type of types) {
    if (isOfType(value, type)) {
      return true;
    }
  }

  return false;
}

/**
 * Determines if all elements in an `array` are of one of the specified types in the `types` array.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown[]}           array - An array of elements to verify against the provided types.
 * @param   {DataTypeAsString[]}  types - An array of strings representing the data types to check against.
 *
 * @returns {boolean}                   - `true` if every element in the `array` is of one of the specified `types`, otherwise `false`.
 *
 * @example
 * // true
 * areOneOfType([1, 2, 3], ["number"]);
 *
 * // true
 * areOneOfType(["a", "b", "c"], ["string"]);
 *
 * // true
 * areOneOfType([1, "a", true], ["number", "string", "boolean"]);
 *
 * // false (array is empty)
 * areOneOfType([], ["number"]);
 *
 * // false (one element is not a string or number)
 * areOneOfType([1, "a", {}], ["number", "string"]);
 *
 * // false (types array is empty)
 * areOneOfType([1, "a", {}], []);
 */
function areOneOfType<const TTypes extends readonly DataTypeAsString[]>(array: unknown[], types: TTypes): array is Array<DataTypeOf<TTypes[number]>> {
  if (!isFilledArray(array) || !isFilledArray(types)) {
    return false;
  }

  for (const item of array) {
    if (!isOneOfType(item, types)) {
      return false;
    }
  }

  return true;
}

// Exports.
export {isOneOfType, areOneOfType};