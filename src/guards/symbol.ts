// Import: Self-created functions.
import {isFilledArray} from "./filledArray.js";

/**
 * Determines whether the provided value is of the `symbol` type.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-22
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
export function isSymbol(value: unknown): value is symbol {
  return typeof value === 'symbol';
}

/**
 * Checks if the given value is an array consisting only of symbols.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-07
 *
 * @param   {unknown} array - The value to be checked.
 *
 * @returns {boolean}       - Returns `true` if the value is an array of symbols, otherwise `false`.
 *
 * @example
 * const keys = [Symbol("a"), Symbol("b")];
 *
 * // true
 * areSymbols(keys);
 */
export function areSymbols(array: unknown): array is symbol[] {
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