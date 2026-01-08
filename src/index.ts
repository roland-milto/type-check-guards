// Import: Interfaces and DataTypes.
import type {TypeGuards} from "./types/typeGuards.js";

// Import: Self-created modules.
import {areArrays, isArray} from "./checks/array.js";
import {areBigInts, isBigInt} from "./checks/bigInt.js";
import {areBooleans, isBoolean} from "./checks/boolean.js";
import {areBuffers, isBuffer} from "./checks/buffer.js";
import {areDates, isDate} from "./checks/date.js";
import {areFalse, isFalse} from "./checks/false.js";
import {areFilledArrays, isFilledArray} from "./checks/filledArray.js";
import {areFinite, isFinite} from "./checks/finite.js";
import {areFloats, isFloat} from "./checks/float.js";
import {areFunctions, isFunction} from "./checks/function.js";
import {areIntegers, isInteger} from "./checks/integer.js";
import {areNull, isNull} from "./checks/null.js";
import {areNullOrUndefined, isNullOrUndefined} from "./checks/nullOrUndefined.js";
import {areNumbers, isNumber} from "./checks/number.js";
import {areObjects, isObject} from "./checks/object.js";
import {areOfType, isOfType} from "./checks/ofType.js";
import {areOneOfType, isOneOfType} from "./checks/oneOfType.js";
import {arePlainObjects, isPlainObject} from "./checks/plainObject.js";
import {arePrimitives, isPrimitive} from "./checks/primitive.js";
import {arePromises, isPromise} from "./checks/promise.js";
import {areRegExes, isRegEx} from "./checks/regEx.js";
import {areStreams, isStream} from "./checks/stream.js";
import {areStrings, isString} from "./checks/string.js";
import {areSymbols, isSymbol} from "./checks/symbol.js";
import {areTrue, isTrue} from "./checks/true.js";
import {areUndefined, isUndefined} from "./checks/undefined.js";
import {areValidDates, isValidDate} from "./checks/validDate.js";
import {getTypeOf} from "./utils/getTypeOf.js";

/**
 * Utility object that provides type-related operations.
 *
 * Methods:
 * * `getTypeOf`: Converts the value's type to its string representation.
 * * `isArray`: Returns a boolean whether the value is an array.
 * * `isBigInt`: Returns a boolean whether the value is a BigInt.
 * * `isBoolean`: Returns a boolean whether the value is a boolean.
 * * `isBuffer`: Returns a boolean whether the value is a buffer.
 * * `isDate`: Returns a boolean whether the value is a date.
 * * `isFinite`: Returns a boolean whether the value is finite.
 * * `isFloat`: Returns a boolean whether the value is a float.
 * * `isFunction`: Returns a boolean whether the value is a function.
 * * `isInteger`: Returns a boolean whether the value is an integer.
 * * `isNull`: Returns a boolean whether the value is null.
 * * `isNullOrUndefined`: Returns a boolean whether the value is null or undefined.
 * * `isNumber`: Returns a boolean whether the value is a number.
 * * `isObject`: Returns a boolean whether the value is an object.
 * * `isOfType`: Validates if the value matches a specified data type.
 * * `isOneOfType`: Validates if the value matches at least one of the specified data types.
 * * `isPlainObject`: Returns a boolean whether the value is a plain object.
 * * `isPrimitive`: Returns a boolean whether the value is a primitive.
 * * `isPromise`: Returns a boolean whether the value is a promise.
 * * `isRegEx`: Returns a boolean whether the value is a regular expression.
 * * `isStream`: Returns a boolean whether the value is a stream.
 * * `isString`: Returns a boolean whether the value is a string.
 * * `isSymbol`: Returns a boolean whether the value is a symbol.
 * * `isUndefined`: Returns a boolean whether the value is undefined.
 * * `isValidDate`: Returns a boolean whether the value is a valid date.
 *
 * Array methods:
 * * `areArrays`: Returns a boolean whether all elements in the array are arrays.
 * * `areBigInts`: Returns a boolean whether all elements in the array are BigInts.
 * * `areBooleans`: Returns a boolean whether all elements in the array are booleans.
 * * `areBuffers`: Returns a boolean whether all elements in the array are buffers.
 * * `areDates`: Returns a boolean whether all elements in the array are dates.
 * * `areFinite`: Returns a boolean whether all elements in the array are finite.
 * * `areFloats`: Returns a boolean whether all elements in the array are floats.
 * * `areFunctions`: Returns a boolean whether all elements in the array are functions.
 * * `areIntegers`: Returns a boolean whether all elements in the array are integers.
 * * `areNull`: Returns a boolean whether all elements in the array are null.
 * * `areNullOrUndefined`: Returns a boolean whether all elements in the array are null or undefined.
 * * `areNumbers`: Returns a boolean whether all elements in the array are numbers.
 * * `areObjects`: Returns a boolean whether all elements in the array are objects.
 * * `areOfType`: Returns a boolean whether all elements in the array match the specified data type.
 * * `areOneOfType`: Returns a boolean whether all elements in the array match at least one of the specified data types.
 * * `arePlainObjects`: Returns a boolean whether all elements in the array are plain objects.
 * * `arePrimitives`: Returns a boolean whether all elements in the array are primitives.
 * * `arePromises`: Returns a boolean whether all elements in the array are promises.
 * * `areRegExes`: Returns a boolean whether all elements in the array are regular expressions.
 * * `areStreams`: Returns a boolean whether all elements in the array are streams.
 * * `areStrings`: Returns a boolean whether all elements in the array are strings.
 * * `areSymbols`: Returns a boolean whether all elements in the array are symbols.
 * * `areUndefined`: Returns a boolean whether all elements in the array are undefined.
 * * `areValidDates`: Returns a boolean whether all elements in the array are valid dates.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-06
 */
export const type: Readonly<TypeGuards> = Object.freeze(
{
  getTypeOf,
  isArray, areArrays,
  isBigInt, areBigInts,
  isBoolean, areBooleans,
  isBuffer, areBuffers,
  isDate, areDates,
  isFalse, areFalse,
  isFilledArray, areFilledArrays,
  isFinite, areFinite,
  isFloat, areFloats,
  isFunction, areFunctions,
  isInteger, areIntegers,
  isNull, areNull,
  isNullOrUndefined, areNullOrUndefined,
  isNumber, areNumbers,
  isObject, areObjects,
  isOfType, areOfType,
  isOneOfType, areOneOfType,
  isPlainObject, arePlainObjects,
  isPrimitive, arePrimitives,
  isPromise, arePromises,
  isRegEx, areRegExes,
  isStream, areStreams,
  isString, areStrings,
  isSymbol, areSymbols,
  isTrue, areTrue,
  isUndefined, areUndefined,
  isValidDate, areValidDates
});

// Export: Type guards single exports for tree shaking.
export {
  getTypeOf,
  isArray, areArrays,
  isBigInt, areBigInts,
  isBoolean, areBooleans,
  isBuffer, areBuffers,
  isDate, areDates,
  isFalse, areFalse,
  isFilledArray, areFilledArrays,
  isFinite, areFinite,
  isFloat, areFloats,
  isFunction, areFunctions,
  isInteger, areIntegers,
  isNull, areNull,
  isNullOrUndefined, areNullOrUndefined,
  isNumber, areNumbers,
  isObject, areObjects,
  isOfType, areOfType,
  isOneOfType, areOneOfType,
  isPlainObject, arePlainObjects,
  isPrimitive, arePrimitives,
  isPromise, arePromises,
  isRegEx, areRegExes,
  isStream, areStreams,
  isString, areStrings,
  isSymbol, areSymbols,
  isTrue, areTrue,
  isUndefined, areUndefined,
  isValidDate, areValidDates
};

// Export: Interfaces and types:
export type {DataType} from "./types/dataType.js";
export type {Primitive} from "./types/primitive.js";
export type {NonPrimitives} from "./types/nonPrimitives.js";