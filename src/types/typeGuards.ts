// Import: interfaces and types.
import type {Stream} from 'node:stream';
import type {PrimitiveType} from "./primitive.js";
import type {DataTypeAsString, DataTypeOf} from "./dataType.js";

/**
 * Interface for returning the `type` object methods.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-26
 */
export interface TypeGuards
{
	/** Converts the type of the given value to a string. */
	getTypeOf(value: unknown): DataTypeAsString | string;

	/** Checks whether the given value is an array. */
	isArray(value: unknown): value is Array<unknown>;

	areArrays(array: unknown[]): array is Array<unknown>[];

	/** Checks whether the given value is a bigint. */
	isBigInt(value: unknown): value is bigint;
	areBigInts(array: unknown): array is bigint[];

	/** Checks whether the given value is a boolean. */
	isBoolean(value: unknown): value is boolean;
	areBooleans(array: unknown): array is boolean[];

	/** Checks whether the given value is a buffer. */
	isBuffer(value: unknown): value is Buffer;
	areBuffers(array: unknown): array is Buffer[];

	/** Checks whether the given value is a date. */
	isDate(value: unknown): value is Date;
	areDates(array: unknown): array is Date[];

	/** Checks whether the given value is strictly equal to the expected value. */
	isEqual<T>(value: unknown, expected: T): value is T;
	areEqual<T>(array: unknown, expected: T): array is T[];

	/** Checks whether the given value is an error. */
	isError(value: unknown): value is Error;
	areErrors(array: unknown): array is Error[];

	/** Checks whether the given value is false. */
	isFalse(value: unknown): value is false;
	areFalse(array: unknown): array is false[];

	/** Checks whether the given value is a filled array. */
	isFilledArray(value: readonly unknown[]): value is readonly unknown[];

	areFilledArrays(array: readonly unknown[][]): array is readonly unknown[][];

	/** Checks whether the given value is finite. */
	isFinite(value: unknown): value is number;
	areFinite(array: unknown): array is number[];

	/** Checks whether the given value is a float. */
	isFloat(value: unknown): value is number;
	areFloats(array: unknown): array is number[];

	/** Checks whether the given value is a function. */
	isFunction(value: unknown): value is Function;
	areFunctions(array: unknown): array is Function[];

	/** Checks whether the given index is valid. */
	isIndexFound(index: number): index is number;

	areIndexesFound(array: number[]): array is number[];

	/** Checks whether the given value is an integer. */
	isInteger(value: unknown): value is number;
	areIntegers(array: unknown): array is number[];

	/** Checks whether the given value is a JSON string. */
	isJson(value: unknown): value is string;

	areJson(array: unknown): array is string[];

	/** Checks whether the given value is a map. */
	isMap(value: unknown): value is Map<unknown, unknown>;
	areMaps(array: unknown): array is Map<unknown, unknown>[];

	/** Checks whether the given value is NaN. */
	isNaN(value: unknown): value is number;
	areNaNs(array: unknown): array is number[];

	/** Checks whether the given value is null. */
	isNull(value: unknown): value is null;
	areNull(array: unknown): array is null[];

	/** Checks whether the given value is null or undefined. */
	isNullOrUndefined(value: unknown): value is null | undefined;
	areNullOrUndefined(array: unknown): array is (null | undefined)[];

	/** Checks whether the given value is a number. */
	isNumber(value: unknown): value is number;
	areNumbers(array: unknown): array is number[];

	/** Checks whether the given value is an object. */
	isObject(value: unknown): value is object;
	areObjects(array: unknown): array is object[];

	/** Checks whether the given value is of the specified type. */
	isOfType<T extends DataTypeAsString>(value: unknown, type: T): value is DataTypeOf<T>;

	areOfType<T extends DataTypeAsString>(array: unknown[], type: T): array is Array<DataTypeOf<T>>;

	/** Checks whether the given value is one of the specified types. */
	isOneOfType<const TTypes extends readonly DataTypeAsString[]>(value: unknown, types: TTypes): value is DataTypeOf<TTypes[number]>;

	areOneOfType<const TTypes extends readonly DataTypeAsString[]>(array: unknown[], types: TTypes): array is Array<DataTypeOf<TTypes[number]>>;

	/** Checks whether the given value is a plain object. */
	isPlainObject(value: unknown): value is object;
	arePlainObjects(array: unknown): array is object[];

	/** Checks whether the given value is a primitive. */
	isPrimitive(value: unknown): value is PrimitiveType;

	arePrimitives(array: unknown): array is PrimitiveType[];

	/** Checks whether the given value is a promise. */
	isPromise(value: unknown): value is Promise<unknown>;
	arePromises(array: unknown): array is Promise<unknown>[];

	/** Checks whether the given value is a regular expression. */
	isRegEx(value: unknown): value is RegExp;

	isRegExp(value: unknown): value is RegExp;
	areRegExes(array: unknown): array is RegExp[];

	/** Checks whether the given value is a set. */
	isSet(value: unknown): value is Set<unknown>;
	areSets(array: unknown): array is Set<unknown>[];

	/** Checks whether the given value is a stream. */
	isStream(value: unknown): value is Stream | ReadableStream | WritableStream;

	areStreams(array: unknown): array is Array<Stream | ReadableStream | WritableStream>;

	/** Checks whether the given value is a string. */
	isString(value: unknown): value is string;
	areStrings(array: unknown): array is string[];

	/** Checks whether the given value is a symbol. */
	isSymbol(value: unknown): value is symbol;
	areSymbols(array: unknown): array is symbol[];

	/** Checks whether the given value is true. */
	isTrue(value: unknown): value is true;
	areTrue(array: unknown): array is true[];

	/** Checks whether the given value is undefined. */
	isUndefined(value: unknown): value is undefined;
	areUndefined(array: unknown): array is undefined[];

	/** Checks whether the given value is a valid date. */
	isValidDate(value: unknown): value is Date;
	areValidDates(array: unknown): array is Date[];

	/** Checks whether the given value is a valid WeakMap. */
	isWeakMap(value: unknown): value is WeakMap<object, unknown>;
	areWeakMaps(array: unknown): array is WeakMap<object, unknown>[];

	/** Checks whether the given value is a valid WeakSet. */
	isWeakSet(value: unknown): value is WeakSet<object>;
	areWeakSets(array: unknown): array is WeakSet<object>[];
}