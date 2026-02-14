/**
 * A mapping representing different classifications of numerical data types.
 *
 * - "bigint": Represents a numeric type for arbitrarily large integers.
 * - "binary" for binary numeral systems (base-2)
 * - "decimal": Represents a numeric type for decimal numeral systems (base-10)
 * - "float": Represents a numeric type for floating-point numbers.
 * - "hexadecimal": Represents a numeric type for hexadecimal numeral systems (base-16)
 * - "integer": Represents a numeric type for whole numbers.
 * - "nan": Represents a numeric type for Not-a-Number (NaN) values.
 * - "number": Represents a general numeric type that can include both integers and floating-point numbers.
 * - "numeric": Represents a general numeric type that can include any numeric type, excluding NaN values.
 * - "octal": Represents a numeric type for octal numeral systems (base-8)
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-02-05
 */
const NUMERIC_TYPE_STRINGS = [
  "bigint",
  "binary",
  "decimal",
  "float",
  "hexadecimal",
  "integer",
  "nan",
  "number",
  "numeric",
  "octal",
] as const;

// Export constant.
export {NUMERIC_TYPE_STRINGS};