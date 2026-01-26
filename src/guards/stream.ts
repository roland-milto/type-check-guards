// Import: build-ins.
import type {Stream} from 'node:stream';

// Import: local functions.
import {isFilledArray} from "./filledArray.js";

/**
 * Determines whether the given `value` is a stream object,
 * which can be an instance of `Stream`, `ReadableStream`, or `WritableStream`.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown} value - The value to be checked.
 *
 * @returns {boolean}       - `true` if the `value` is a stream object, otherwise `false`.
 *
 * @example
 * import fs from "node:fs";
 *
 * const stream1 = fs.createReadStream("file1.txt");
 *
 * // true
 * isStream(stream1);
 *
 * // false (input is not a stream)
 * isStream({});
 *
 * // false (input is `null`)
 * isStream(null);
 *
 * // false (input is a string)
 * isStream('notAStream');
 */
function isStream(value: unknown): value is Stream | ReadableStream | WritableStream
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
 * Determines if all items in an `array` are `Stream` objects.
 * Returns `true` if the `array` is filled and every element is a Stream, otherwise returns `false`.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown[]} array - The array to be checked for Stream objects.
 *
 * @returns {boolean}         - `true` if all items in the `array` are `Stream` objects, `false` otherwise.
 *
 * @example
 * import fs from "node:fs";
 *
 * const stream1 = fs.createReadStream("file1.txt");
 * const stream2 = fs.createReadStream("file2.txt");
 *
 * // true
 * areStreams([stream1, stream2]);
 *
 * // true
 * areStreams([new Stream(), new Stream()]);
 *
 * // false (the array is not filled with Stream objects)
 * areStreams([new Stream(), {}]);
 *
 * // false (input is not an array)
 * areStreams("not an array");
 */
function areStreams(array: unknown[]): array is Array<Stream | ReadableStream | WritableStream> {
  if (!isFilledArray(array)) {
    return false;
  }

  for (const item of array) {
    if (!isStream(item)) {
      return false;
    }
  }

  return true;
}

// Exports.
export {isStream, areStreams};