// Import: interfaces and types.
import type {PrimitiveType} from "../types/primitive.js";

// Import: local functions.
import {isFilledArray} from "./filledArray.js";

/**
 * Determines whether the given `value` is a primitive type.
 * A primitive type includes `null`, `undefined`, `boolean`, `number`, `string`, `bigint`, `symbol`.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown} value - The value to check for primitive type.
 *
 * @returns {boolean}       - `true` if the `value` is a primitive, otherwise `false`.
 *
 * @example
 * // true
 * isPrimitive(null);
 *
 * // true
 * isPrimitive(42);
 *
 * // true
 * isPrimitive('hello');
 *
 * // false (input is an object)
 * isPrimitive({});
 *
 * // false (input is a function)
 * isPrimitive(function() {});
 */
function isPrimitive(value: unknown): value is PrimitiveType {
  return (
    value === null ||
    (typeof value !== 'object' && typeof value !== 'function')
  );
}

/**
 * Evaluates whether all elements within the given array are primitive types.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown[]} array - The array to be checked for elements of primitive type.
 *
 * @returns {boolean}         - `true` if all elements are primitive types, otherwise `false`.
 *
 * @example
 * // true
 * arePrimitives([1, 'string', true]);
 *
 * // true
 * arePrimitives([null, undefined, Symbol()]);
 *
 * // false (contains an object)
 * arePrimitives([1, {}, false]);
 */
function arePrimitives(array: unknown[]): array is PrimitiveType[] {
  if (!isFilledArray(array)) {
    return false;
  }

  for (const item of array) {
    if (!isPrimitive(item)) {
      return false;
    }
  }

  return true;
}

// Exports.
export {isPrimitive, arePrimitives};