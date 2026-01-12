/**
 * A union type representing different classifications of numerical data types.
 *
 * - "bigint": Represents a numeric type for arbitrarily large integers.
 * - "float": Represents a numeric type for floating-point numbers.
 * - "integer": Represents a numeric type for whole numbers.
 * - "number": Represents a general numeric type that can include both integers and floating-point numbers.
 *
 * @author  Roland Milto (https://roland.milto.de)
 * @version 2026-01-12
 */
export type NumberType = "bigint" | "float" | "integer" | "number";