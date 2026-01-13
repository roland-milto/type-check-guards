/**
 * Represents a union type of string literals defining commonly recognized non-primitive data structures
 * and types in JavaScript.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-13
 */
export type NonPrimitive =
  | "array"
  | "buffer"
  | "date"
  | "error"
  | "function"
  | "object"
  | "map"
  | "promise"
  | "regexp"
  | "set"
  | "stream"
  | "weakmap"
  | "weakset";