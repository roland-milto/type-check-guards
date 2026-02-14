// Import: local functions.
import {isMap} from "./map.js";
import {isSet} from "./set.js";
import {isArray} from "./array.js";
import {isString} from "./string.js";
import {isFilledArray} from "./filledArray.js";
import {isNullOrUndefined} from "./nullOrUndefined.js";

/**
 * Determines whether a given value is empty. A value is considered empty if it is `null`, `undefined`,
 * an empty string, array, `Map`, `Set`, or an object with no own enumerable properties.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-02-05
 *
 * @param   {unknown} value - The value to check for emptiness.
 *
 * @returns {boolean}       - `true` if the value is empty, otherwise `false`.
 *
 * @example
 * // true
 * isEmpty(null);
 *
 * // true
 * isEmpty("");
 *
 * // true
 * isEmpty([]);
 *
 * // true
 * isEmpty(new Map());
 *
 * // true
 * isEmpty(new Set());
 *
 * // true
 * isEmpty({});
 *
 * // false
 * isEmpty("Hello");
 *
 * // false
 * isEmpty([1, 2, 3]);
 *
 * // false
 * isEmpty({ name: "Roland", age: 35 });
 *
 * // false (the object has properties)
 * isEmpty({ a: undefined });
 */
function isEmpty(value: unknown): boolean {
  // Check for null or undefined.
  if (isNullOrUndefined(value)) {
    return true;
  }

  if (isString(value)) {
    return value.trim().length === 0;
  }

  if (isArray(value)) {
    return value.length === 0;
  }

  // Handle Map/Set without allocations
  if (isMap(value) || isSet(value)) {
    return value.size === 0;
  }

  if (typeof value === "object") {
    // Empty object: no own enumerable keys
    // (fast early-exit loop; no Object.keys allocation)
    for (const key in value as Record<string, unknown>) {
      if (Object.prototype.hasOwnProperty.call(value, key)) {
        return false;
      }
    }

    return true;
  }

  return false;
}

/**
 * Checks if all elements in the provided array are considered empty.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-02-05
 *
 * @param   {unknown} array - The input value to check for emptiness, expected to be an array.
 *
 * @returns {boolean}       - `true` if the input is a valid array and all its elements are empty; otherwise `false`.
 *
 * @example
 * // true
 * areEmpty([]);
 *
 * // true
 * areEmpty([null, '', undefined]);
 *
 * // false (the array contains non-empty elements)
 * areEmpty([42, 'Roland', {}]);
 *
 * // false (input is not a valid array)
 * areEmpty('not an array');
 */
function areEmpty(array: unknown[]): array is unknown[] {
  if (!isFilledArray(array)) {
    return false;
  }

  for (const item of array) {
    if (!isEmpty(item)) {
      return false;
    }
  }

  return true;
}

// Exports.
export {isEmpty, areEmpty};