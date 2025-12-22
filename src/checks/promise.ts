/**
 * Checks if a given value is a `Promise`.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-22
 *
 * @param   {unknown} value - The value to check.
 *
 * @returns {boolean}       - Indicates whether the value is a `Promise`.
 */
export function isPromise(value: unknown): value is Promise<unknown> {
  return value instanceof Promise;
}

/**
 * Checks if the provided value is an array of Promises.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-22
 *
 * @param   {unknown} array - The value to check.
 *
 * @returns {boolean}       - Returns `true` if the value is an array of Promises, otherwise `false`.
 */
export function arePromises(array: unknown): array is Promise<unknown>[] {
  if (!Array.isArray(array)) {
    return false;
  }

  for (const item of array) {
    if (!isPromise(item)) {
      return false;
    }
  }

  return true;
}