// Import: Interfaces and DataTypes.
import type {DataTypes} from "../checks/types.js";

// Import: Self-created functions.
import {isNumber} from "../checks/isNumber.js";

/**
 * Determines the data type of the given value and returns it as a string.
 * These can be primitive DataTypes, objects, or specific object DataTypes like "date", "regexp", etc.
 *
 * @private
 * @see     Use this function only in the {@link $type}-function.
 *
 * @author  Roland Milto
 * @version 2025-12-10
 *
 * @param   {any}     value - The value whose data type is to be determined.
 *
 * @returns {string}        - The string representation of the data type in lower case.
 */
export function getTypeOf(value: unknown): DataTypes
{
	// Check strict null/undefined explicitly first (the fastest check).
	// “null” is an object, so it has to be checked first.
	if (value === null) {
		return "null";
	}

	if (value === undefined) {
		return "undefined";
	}

	// We have a smarter number-check.
	if (typeof value === "number") {
			return (isNumber(value)) ? "number" : "NaN";
	}

	// Arrays are objects in JS but usually handled as a specific type.
	if (Array.isArray(value)) {
		return "array";
	}

	// Check primitives (bigint, boolean, function, string, symbol etc.).
	const type: string = typeof value;
	if (type !== "object") {
		return type;
	}

	// Handle specific objects (Date, RegExp, Error, Map, Set, Promise, etc.).
	// The native toString returns formats like "[object Date]", "[object Error]".
	const rawType: string = Object.prototype.toString.call(value);

	// e. G.: [object Date] -> Date
	const specificType: string = rawType.slice(8, -1).toLowerCase();

	// Returns e.g. "date", "regexp", "error", "promise".
	return specificType as DataTypes;
}