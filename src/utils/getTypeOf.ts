// Import: interfaces and types.
import type {DataTypeAsString} from "../types/dataType.js";

// Import: local functions.
import {isBinary} from "../guards/binary.js";
import {isDecimal} from "../guards/decimal.js";
import {isFloat} from "../guards/float.js";
import {isHexadecimal} from "../guards/hexadecimal.js";
import {isInteger} from "../guards/integer.js";
import {isOctal} from "../guards/octal.js";

/**
 * Returns the data type of the given `value` as a string, detailing specific numeric and object types.
 * For a certain number of types or specific objects, it provides more granulated type information like "integer", "float", "date", or "array".
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 *
 * @param   {unknown} value             - The value for which to determine the data type.
 *
 * @returns {DataTypeAsString | string} - The string representation of the data type.
 *
 * @example
 * // "integer"
 * getTypeOf(42);
 *
 * // "string"
 * getTypeOf("Roland Milto");
 *
 * // "null"
 * getTypeOf(null);
 *
 * // "float"
 * getTypeOf(3.14);
 *
 * // "decimal"
 * getTypeOf("3.14");
 */
function getTypeOf(value: unknown): DataTypeAsString | string
{
	// Check strict null/undefined explicitly first (the fastest check).
	// “null” is an object, so it has to be checked first.
	if (value === null) {
		return "null";
	}

	if (value === undefined) {
		return "undefined";
	}

	// We have a smarter number-check with subtypes.
	if (typeof value === "number") {
		/**
		 * Do not(!) use JavaScripts isNaN for number type checking, because:
		 * isNaN(true); // false
		 * isNaN(null); // false
		 * isNaN(37); // false
		 */
		if (isNaN(value)) {
			return "nan";
		}

		if (isInteger(value)) {
			return "integer";
		}

		if (isFloat(value)) {
			return "float";
		}

		return "number";
	}

	// Some numbers can only be strings.
	if (typeof value === "string") {
		if (isBinary(value)) {
			return "binary";
		}

		if (isDecimal(value)) {
			return "decimal";
		}

		if (isHexadecimal(value)) {
			return "hexadecimal";
		}

		if (isOctal(value)) {
			return "octal";
		}

		// Not a number, so it must be a string.
		return "string";
	}

	// Arrays are objects in JS but usually handled as a specific type.
	if (Array.isArray(value)) {
		return "array";
	}

	// Check primitives (bigint, boolean, function, symbol etc.).
	const type: string = typeof value;
	if (type !== "object") {
		return type;
	}

	// Enumerations. // @todo implement
	/*
	if (isEnumeration(value)) {
		return "enum";
	}

	if (isEnumerationObject(value)) {
		return "enumobject";
	}
	 */

	// Handle specific objects (Date, RegExp, Error, Map, Set, Promise, etc.).
	// The native toString returns formats like "[object Date]", "[object Error]".
	const rawType: string = Object.prototype.toString.call(value);

	// Extracts the type name and changes to lower case, e.g., "[object BigInt]" -> "BigInt" -> "bigint".
	const typeName: string = rawType.slice(8, -1).toLowerCase();

	// Returns e.g. "bigint", "date", "regexp", "error", "promise", "weakmap", "weakset".
	return typeName as DataTypeAsString;
}

// Export.
export {getTypeOf};