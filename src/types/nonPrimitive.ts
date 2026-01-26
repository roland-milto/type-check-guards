/**
 * The `_NonPrimitive` type defines a structured collection of non-primitive data types including arrays,
 * buffers, dates, errors, functions, objects, maps, promises, regexes, sets, streams, weak maps, and weak sets.
 *
 * It represents various data handling structures used in JavaScript and Node.js environments.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 */
type _NonPrimitive =
  {
    array: unknown[];
    buffer: Buffer;
    date: Date;
    error: Error;
    function: (...args: unknown[]) => unknown;
    object: Record<PropertyKey, unknown>;
    map: Map<unknown, unknown>;
    promise: Promise<unknown>;
    regexp: RegExp;
    set: Set<unknown>;
    stream: import("node:stream").Readable;
    weakmap: WeakMap<object, unknown>;
    weakset: WeakSet<object>;
  };

// Export types.
export type NonPrimitiveTypeAsString = keyof _NonPrimitive;
export type NonPrimitiveType = _NonPrimitive[NonPrimitiveTypeAsString];
export type NonPrimitiveTypeOf<K extends NonPrimitiveTypeAsString> = _NonPrimitive[K]; // NonPrimitiveTypeOf<"date"> is Date