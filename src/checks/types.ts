/**
 * A type alias representing a collection of data DataTypes.
 *
 * This type includes both primitive data DataTypes and various non-primitive, built-in JavaScript object DataTypes.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-10
 */
export type DataTypes =
	| PrimitiveDataTypes
	| "buffer"
	| "function"
	| "date"
	| "error"
	| "generator"
	| "regexp"
	| "map"
	| "promise"
	| "set"
	| "stream"
	| "weakmap"
	| "weakset"
	| string; // Allow every string value as a custom data type.

/**
 * Represents a union of string corresponding to JavaScript's primitive and structural data DataTypes.
 *
 * This type can be used to define or validate values that represent the names of these data DataTypes.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-06-30
 */
export type PrimitiveDataTypes =
	| "array"
	| "bigint"
	| "boolean"
	| "null"
	| "number"
	| "object"
	| "string"
	| "symbol"
	| "undefined";