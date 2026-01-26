// Import: local functions.
import {isFilledArray} from "./filledArray.js";

/**
 * Determines whether a given value is a `Promise`.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown} value - The value to be checked.
 *
 * @returns {boolean}       - `true` if the value is a `Promise`, otherwise `false`.
 *
 * @example
 * // true
 * isPromise(new Promise((resolve, reject) => {}));
 *
 * // true
 * const promise = Promise.resolve();
 * isPromise(promise);
 *
 * // false (input is not a Promise)
 * isPromise({ then: function() {} });
 *
 * // false (input is not a Promise)
 * isPromise(123);
 *
 * // false (input is not a Promise)
 * isPromise(null);
 */
function isPromise(value: unknown): value is Promise<unknown> {
  return value instanceof Promise;
}

/**
 * Determines whether all elements in an array are `Promise` instances.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown[]} array - The array to check for Promise instances.
 *
 * @returns {boolean}         - `true` if all elements are `Promise` instances, otherwise `false`.
 *
 * @example
 * // true
 * arePromises([Promise.resolve(1), new Promise(() => {})]);
 *
 * // false (input is not a promise)
 * arePromises([Promise.resolve(1), 123]);
 *
 * // false (the array is not filled)
 * arePromises([]);
 */
function arePromises(array: unknown[]): array is Promise<unknown>[] {
  if (!isFilledArray(array)) {
    return false;
  }

  for (const item of array) {
    if (!isPromise(item)) {
      return false;
    }
  }

  return true;
}

// Exports.
export {isPromise, arePromises};