/**
 * Represents a union of string corresponding to JavaScript's primitive and structural data DataTypes.
 *
 * This type can be used to define or validate values that represent the names of these data DataTypes.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-08
 */
export type Primitive =
  | "bigint"
  | "boolean"
  | "float"
  | "integer"
  | "nan"
  | "null"
  | "number"
  | "string"
  | "symbol"
  | "undefined";