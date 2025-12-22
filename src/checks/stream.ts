// Import: Build-ins.
import type {Stream} from 'node:stream';

/**
 * Determines if the given argument is either a Node.js Stream or a Web Stream.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-22
 *
 * @param   {unknown} value - The value to be checked.
 *
 * @returns {boolean}       - Returns `true` if the argument is a stream, otherwise `false`.
 */
export function isStream(value: unknown): value is Stream | ReadableStream | WritableStream
{
  return (value != null &&
          typeof value === 'object' &&
          typeof (value as any).pipe === 'function' &&
          typeof (value as any).on === 'function')
        ||
    (typeof ReadableStream !== 'undefined' &&
      value instanceof ReadableStream)
        ||
    (typeof WritableStream !== 'undefined' &&
      value instanceof WritableStream)
}

/**
 * Determines whether the given value is an array of Stream objects.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-22
 *
 * @param   {unknown} array - The value to be checked.
 *
 * @returns {boolean}       - Returns `true` if the value is an array where all elements are Stream objects, otherwise `false`.
 */
export function areStreams(array: unknown): array is Stream[] {
  if (!Array.isArray(array)) {
    return false;
  }

  for (const item of array) {
    if (!isStream(item)) {
      return false;
    }
  }

  return true;
}