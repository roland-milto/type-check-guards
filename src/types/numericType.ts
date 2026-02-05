// Import: local variables.
import {NUMERIC_TYPE_STRINGS} from "../constants/NUMERIC_TYPE_STRINGS.js";

/**
 * The `NumericTypeAsString` type represents a string from the `NUMERIC_TYPE_STRINGS` array.
 *
 * It allows for representing numeric types as strings in a type-safe manner derived from a predefined list.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-29
 *
 * @example
 * // true
 * const example1: NumericTypeAsString = "integer";
 *
 * // true
 * const example2: NumericTypeAsString = "float";
 *
 * // false (error; not part of NUMERIC_TYPE_STRINGS)
 * const example3: NumericTypeAsString = "string";
 */
type NumericTypeAsString = (typeof NUMERIC_TYPE_STRINGS)[number];

/**
 * The `_NumericType` type defines a TypeScript record where keys are strings representing numeric types,
 * `NumericTypeAsString`, and the associated values are numbers.
 * This type ensures a structured way to map different string representations of numeric types to corresponding numeric values.
 *
 * The functionality is typically used to handle flexible number type representations in typing-safe environments.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-29
 */
type _NumericType = Record<NumericTypeAsString, number>;

/**
 * The `NumericType` type represents a mapping from string representations of numeric types to their corresponding
 * internal numeric type definitions (real types). It is providing type safety and clarity when handling numeric data types.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-29
 *
 * @example
 * // true
 * const numType: NumericType = 45;
 *
 * // false (error; string given)
 * const numType: NumericType = "integer";
 */
type NumericType = _NumericType[NumericTypeAsString];

/**
 * Represents a type mapping from a string representation of numeric types
 * to their corresponding actual numeric types.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-29
 *
 * @template K - The string representation of the numeric type.
 *
 * @example
 * // NumericTypeOf<"float"> is number
 *
 * // true (successfully maps "integer" to a number type)
 * const intType: NumericTypeOf<'int'> = 123;
 *
 * // true (successfully maps "float" to a number type)
 * const floatType: NumericTypeOf<'float'> = 123.45;
 *
 * // false (GenericType does not map to a number type)
 * const stringType: NumericTypeOf<'unknown'> = "string"; // Type error
 *
 * // false (input "currency" is not a known numeric type)
 * const price: NumericTypeOf<'currency'> = 9.99; // Type error
 *
 * // true (representing the result of a math operation)
 * const result: NumericTypeOf<'float'> = 3.14 * 2;
 */
type NumericTypeOf<K extends NumericTypeAsString> = _NumericType[K];

// Export types.
export type {NumericTypeAsString, NumericType, NumericTypeOf};