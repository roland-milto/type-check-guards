// Import: Interfaces and types.
import type {Stream} from 'node:stream';
import type {DataTypes} from "./checks/types.js";

/**
 * Interface for returning the `type` object methods.
 *
 * @author  Roland Milto
 * @version 2025-12-22
 */
export interface TypeMethods
{
	/** Converts the type of the given value to a string. */
	toString(value: unknown): DataTypes;

	/** Checks whether the given value is an array. */
	isArray(value: unknown): value is Array<unknown>;

	/** Checks whether the given value is a bigint. */
	isBigInt(value: unknown): value is bigint;

	/** Checks whether the given value is a boolean. */
	isBoolean(value: unknown): value is boolean;

	/** Checks whether the given value is a buffer. */
	isBuffer(value: unknown): value is Buffer;

	/** Checks whether the given value is a date. */
	isDate(value: unknown): value is Date;

	/** Checks whether the given value is finite. */
	isFinite(value: unknown): value is number;

	/** Checks whether the given value is a function. */
	isFunction(value: unknown): value is Function;

	/** Checks whether the given value is an integer. */
	isInteger(value: unknown): value is number;

	/** Checks whether the given value is null. */
	isNull(value: unknown): value is null;

	/** Checks whether the given value is null or undefined. */
	isNullOrUndefined(value: unknown): value is null | undefined;

	/** Checks whether the given value is a number. */
	isNumber(value: unknown): value is number;

	/** Checks whether the given value is an object. */
	isObject(value: unknown): value is object;

	/** Checks whether the given value is of the specified type. */
	isOfType(value: unknown, type: DataTypes): boolean;

	/** Checks whether the given value is a plain object. */
	isPlainObject(value: unknown): value is object;

	/** Checks whether the given value is a promise. */
	isPromise(value: unknown): value is Promise<unknown>;

	/** Checks whether the given value is a regular expression. */
	isRegex(value: unknown): value is RegExp;

	/** Checks whether the given value is a stream. */
	isStream(value: unknown): value is Stream | ReadableStream | WritableStream;

	/** Checks whether the given value is a string. */
	isString(value: unknown): value is string;

	/** Checks whether the given value is a symbol. */
	isSymbol(value: unknown): value is symbol;

	/** Checks whether the given value is undefined. */
	isUndefined(value: unknown): value is undefined;

	/** Checks whether the given value is a valid date. */
	isValidDate(value: unknown): value is Date;
}