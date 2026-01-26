// Import: interfaces and types.
import type {PrimitiveType, PrimitiveTypeAsString, PrimitiveTypeOf} from "./primitive.js";
import type {NonPrimitiveType, NonPrimitiveTypeAsString, NonPrimitiveTypeOf} from "./nonPrimitive.js";

/**
 * Represents all supported runtime type identifiers.
 *
 * `DataType` is a union of string-literal type names that can be used to describe
 * or validate values at runtime (e.g., via `isOfType`, `isOneOfType`).
 *
 * It is composed of:
 * - {@link PrimitiveType} for primitive and numeric-special-case identifiers (e.g. `"string"`, `"number"`, `"nan"`),
 * - {@link NonPrimitiveType} for common non-primitive structures (e.g. `"array"`, `"date"`, `"map"`).
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @example
 * const t: DataType = "string";
 *
 * @example
 * // Typical usage with a runtime guard:
 * if (isOfType(value, "date")) {
 *   // value is a Date (depending on your guard/type-map setup)
 * }
 */
export type DataType = PrimitiveType | NonPrimitiveType;

/**
 * Represents all supported runtime type identifiers as string literals.
 *
 * `DataTypeAsString` is the union of all allowed type-name strings used by the runtime
 * type-checking utilities (e.g. `isOfType`, `isOneOfType`).
 *
 * It is composed of:
 * - {@link PrimitiveTypeAsString} for primitive and numeric-special-case identifiers
 *   (e.g. `"string"`, `"number"`, `"nan"`),
 * - {@link NonPrimitiveTypeAsString} for common non-primitive structures
 *   (e.g. `"array"`, `"date"`, `"map"`).
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @example
 * const typeName: DataTypeAsString = "array";
 */
export type DataTypeAsString = PrimitiveTypeAsString | NonPrimitiveTypeAsString;

/**
 * Resolves a runtime type identifier string `K` to its corresponding static TypeScript value type.
 *
 * This is a conditional mapping over {@link DataTypeAsString}:
 * - If `K` is a {@link PrimitiveTypeAsString}, the result is {@link PrimitiveTypeOf | PrimitiveTypeOf<K>}.
 * - If `K` is a {@link NonPrimitiveTypeAsString}, the result is {@link NonPrimitiveTypeOf | NonPrimitiveTypeOf<K>}.
 *
 * The type is distributive over unions, so:
 * `DataTypeOf<"string" | "date">` becomes `string | Date`.
 *
 * @author  GPT 5.2 (by Roland Milto)
 * @version 2026-01-26
 *
 * @typeParam K - A supported runtime type identifier (see {@link DataTypeAsString}).
 *
 * @example
 * type A = DataTypeOf<"string">; // string
 *
 * @example
 * type B = DataTypeOf<"array" | "date">; // unknown[] | Date
 */
export type DataTypeOf<K extends DataTypeAsString> =
  K extends PrimitiveTypeAsString
    ? PrimitiveTypeOf<K>
    : K extends NonPrimitiveTypeAsString
      ? NonPrimitiveTypeOf<K>
      : never;