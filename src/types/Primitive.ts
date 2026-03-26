/**
 * The `_Primitive` type defines basic primitive data types in JavaScript,
 * including some refined types such as `float`, `integer`, and `nan`.
 *
 * This type serves as a comprehensive mapping for JavaScript's primitive values and variations thereof.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 */
type _Primitive =
  {
    bigint: bigint;
    boolean: boolean;
    null: null;
    number: number;
    string: string;
    symbol: symbol;
    undefined: undefined;

    // Refinements.
    float: number;
    integer: number;
    nan: number;
  }

// Export types.
export type PrimitiveTypeAsString = keyof _Primitive;
export type PrimitiveType = _Primitive[PrimitiveTypeAsString];
export type PrimitiveTypeOf<K extends PrimitiveTypeAsString> = _Primitive[K]; // PrimitiveTypeOf<"float"> is number