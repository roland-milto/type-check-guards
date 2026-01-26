// Import: local functions.
import {isFilledArray} from "./filledArray.js";

/**
 * Determines whether the provided value is of the `symbol` type.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown} value - The value to be checked.
 *
 * @returns {boolean}       - Returns `true` if the value is a symbol, otherwise `false`.
 *
 * @example
 * // true
 * isSymbol(Symbol("key"));
 *
 * // false
 * isSymbol("key");
 */
function isSymbol(value: unknown): value is symbol {
  return typeof value === 'symbol';
}

/**
 * Checks if all elements in the given array are symbols.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown[]} array - The array to be checked for symbol elements.
 *
 * @returns {boolean}         - `true` if all elements in the array are symbols, otherwise `false`.
 *
 * @example
 * // true
 * areSymbols([Symbol('a'), Symbol('b'), Symbol('c')]);
 *
 * // false (input is not an array with only symbols)
 * areSymbols(['a', 'b', 'c']);
 *
 * // false (one element is not a symbol)
 * areSymbols([Symbol('a'), 'b', Symbol('c')]);
 */
function areSymbols(array: unknown[]): array is symbol[] {
  if (!isFilledArray(array)) {
    return false;
  }

  for (const item of array) {
    if (!isSymbol(item)) {
      return false;
    }
  }

  return true;
}

// Exports.
export {isSymbol, areSymbols};