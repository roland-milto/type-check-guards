// Import: local functions.
import {isFilledArray} from "./filledArray.js";

/**
 * Determines if a given value is a function. The `isFunction` method checks the type of the input value.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown}  value - The value to check.
 *
 * @returns {boolean}        - `true` if the value is a function; otherwise `false`.
 *
 * @example
 * // true
 * isFunction(function() {});
 *
 * // true
 * isFunction(() => {});
 *
 * // true
 * isFunction(async function() {});
 *
 * // false (input is not a function)
 * isFunction(42);
 *
 * // false (input is not a function)
 * isFunction('string');
 *
 * // false (input is not a function)
 * isFunction({});
 */
function isFunction(value: unknown): value is (...args: unknown[]) => unknown {
  return typeof value === 'function';
}

/**
 * Determines whether all elements in an array are functions.
 * The `areFunctions` function checks if the provided `array` is filled and then verifies each item to ensure it is a function.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown[]} array - The array to be checked for function elements.
 *
 * @returns {boolean}         - `true` if all elements in `array` are functions, otherwise `false`.
 *
 * @example
 * // true
 * areFunctions([function() {}, () => {}, Math.sin]);
 *
 * // false (contains number)
 * areFunctions([function() {}, 42, Math.cos]);
 *
 * // false (empty array)
 * areFunctions([]);
 */
function areFunctions(array: unknown[]): array is Function[] {
  if (!isFilledArray(array)) {
    return false;
  }

  for (const item of array) {
    if (!isFunction(item)) {
      return false;
    }
  }

  return true;
}

// Exports.
export {isFunction, areFunctions};