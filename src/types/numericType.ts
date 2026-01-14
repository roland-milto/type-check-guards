/**
 * A union type representing different classifications of numerical data types.
 *
 * - "bigInt": Represents a numeric type for arbitrarily large integers.
 * - "binary" for binary numeral systems (base-2)
 * - "decimal": Represents a numeric type for decimal numeral systems (base-10)
 * - "float": Represents a numeric type for floating-point numbers.
 * - "hexadecimal": Represents a numeric type for hexadecimal numeral systems (base-16)
 * - "integer": Represents a numeric type for whole numbers.
 * - "number": Represents a general numeric type that can include both integers and floating-point numbers.
 * - "octal": Represents a numeric type for octal numeral systems (base-8)
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-13
 */
export type NumericType =
  | "bigInt"
  | "binary"
  | "decimal"
  | "float"
  | "hexadecimal"
  | "integer"
  | "number"
  | "octal"
  ;