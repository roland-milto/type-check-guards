// Import: Interfaces and DataTypes.
import type {TypeGuards} from "./types/typeGuards.js";

// Import: Self-created functions.
import {getTypeOf} from "./utils/getTypeOf.js";
import {areArrays, isArray} from "./guards/array.js";
import {areBigInts, isBigInt} from "./guards/bigInt.js";
import {areBooleans, isBoolean} from "./guards/boolean.js";
import {areBuffers, isBuffer} from "./guards/buffer.js";
import {areDates, isDate} from "./guards/date.js";
import {areEqual, isEqual} from "./guards/equal.js";
import {areErrors, isError} from "./guards/error.js";
import {areFalse, isFalse} from "./guards/false.js";
import {areFilledArrays, isFilledArray} from "./guards/filledArray.js";
import {areFinite, isFinite} from "./guards/finite.js";
import {areFloats, isFloat} from "./guards/float.js";
import {areFunctions, isFunction} from "./guards/function.js";
import {areIntegers, isInteger} from "./guards/integer.js";
import {areMaps, isMap} from "./guards/map.js";
import {areNaNs, isNaN} from "./guards/nan.js";
import {areNull, isNull} from "./guards/null.js";
import {areNullOrUndefined, isNullOrUndefined} from "./guards/nullOrUndefined.js";
import {areNumbers, isNumber} from "./guards/number.js";
import {areObjects, isObject} from "./guards/object.js";
import {areOfType, isOfType} from "./guards/ofType.js";
import {areOneOfType, isOneOfType} from "./guards/oneOfType.js";
import {arePlainObjects, isPlainObject} from "./guards/plainObject.js";
import {arePrimitives, isPrimitive} from "./guards/primitive.js";
import {arePromises, isPromise} from "./guards/promise.js";
import {areRegExes, isRegEx} from "./guards/regExp.js";
import {areSets, isSet} from "./guards/set.js";
import {areStreams, isStream} from "./guards/stream.js";
import {areStrings, isString} from "./guards/string.js";
import {areSymbols, isSymbol} from "./guards/symbol.js";
import {areTrue, isTrue} from "./guards/true.js";
import {areUndefined, isUndefined} from "./guards/undefined.js";
import {areValidDates, isValidDate} from "./guards/validDate.js";
import {areWeakMaps, isWeakMap} from "./guards/weakMap.js";
import {areWeakSets, isWeakSet} from "./guards/weakSet.js";

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
 * * `isEqual`: Returns a boolean whether the values are equal.
 * * `isError`: Returns a boolean whether the value is an error.
 * * `isFinite`: Returns a boolean whether the value is finite.
 * * `isFloat`: Returns a boolean whether the value is a float.
 * * `isFunction`: Returns a boolean whether the value is a function.
 * * `isInteger`: Returns a boolean whether the value is an integer.
 * * `isMap`: Returns a boolean whether the value is a map.
 * * `isNaN`: Returns a boolean whether the value is NaN.
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
 * * `isSet`: Returns a boolean whether the value is a set.
 * * `isStream`: Returns a boolean whether the value is a stream.
 * * `isString`: Returns a boolean whether the value is a string.
 * * `isSymbol`: Returns a boolean whether the value is a symbol.
 * * `isUndefined`: Returns a boolean whether the value is undefined.
 * * `isValidDate`: Returns a boolean whether the value is a valid date.
 * * `isWeakMap`: Returns a boolean whether the value is a weak map.
 * * `isWeakSet`: Returns a boolean whether the value is a weak set.
 *
 * Array methods:
 * * `areArrays`: Returns a boolean whether all elements in the array are arrays.
 * * `areBigInts`: Returns a boolean whether all elements in the array are BigInts.
 * * `areBooleans`: Returns a boolean whether all elements in the array are booleans.
 * * `areBuffers`: Returns a boolean whether all elements in the array are buffers.
 * * `areDates`: Returns a boolean whether all elements in the array are dates.
 * * `areEqual`: Returns a boolean whether all elements in the array are equal.
 * * `areErrors`: Returns a boolean whether all elements in the array are errors.
 * * `areFinite`: Returns a boolean whether all elements in the array are finite.
 * * `areFloats`: Returns a boolean whether all elements in the array are floats.
 * * `areFunctions`: Returns a boolean whether all elements in the array are functions.
 * * `areIntegers`: Returns a boolean whether all elements in the array are integers.
 * * `areMaps`: Returns a boolean whether all elements in the array are maps.
 * * `areNaNs`: Returns a boolean whether all elements in the array are NaNs.
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
 * * `areSets`: Returns a boolean whether all elements in the array are sets.
 * * `areStreams`: Returns a boolean whether all elements in the array are streams.
 * * `areStrings`: Returns a boolean whether all elements in the array are strings.
 * * `areSymbols`: Returns a boolean whether all elements in the array are symbols.
 * * `areUndefined`: Returns a boolean whether all elements in the array are undefined.
 * * `areValidDates`: Returns a boolean whether all elements in the array are valid dates.
 * * `areWeakMaps`: Returns a boolean whether all elements in the array are weak maps.
 * * `areWeakSets`: Returns a boolean whether all elements in the array are weak sets.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-13
 */
export const type: Readonly<TypeGuards> = Object.freeze(
{
  getTypeOf,
  isArray, areArrays,
  isBigInt, areBigInts,
  isBoolean, areBooleans,
  isBuffer, areBuffers,
  isDate, areDates,
  isEqual, areEqual,
  isError, areErrors,
  isFalse, areFalse,
  isFilledArray, areFilledArrays,
  isFinite, areFinite,
  isFloat, areFloats,
  isFunction, areFunctions,
  isInteger, areIntegers,
  isMap, areMaps,
  isNaN, areNaNs,
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
  isSet, areSets,
  isStream, areStreams,
  isString, areStrings,
  isSymbol, areSymbols,
  isTrue, areTrue,
  isUndefined, areUndefined,
  isValidDate, areValidDates,
  isWeakMap, areWeakMaps,
  isWeakSet, areWeakSets
});

// Export: Type guards single exports for tree shaking.
export {
  getTypeOf,
  isArray, areArrays,
  isBigInt, areBigInts,
  isBoolean, areBooleans,
  isBuffer, areBuffers,
  isDate, areDates,
  isEqual, areEqual,
  isError, areErrors,
  isFalse, areFalse,
  isFilledArray, areFilledArrays,
  isFinite, areFinite,
  isFloat, areFloats,
  isFunction, areFunctions,
  isInteger, areIntegers,
  isMap, areMaps,
  isNaN, areNaNs,
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
  isSet, areSets,
  isStream, areStreams,
  isString, areStrings,
  isSymbol, areSymbols,
  isTrue, areTrue,
  isUndefined, areUndefined,
  isValidDate, areValidDates,
  isWeakMap, areWeakMaps,
  isWeakSet, areWeakSets
};

// Export: Interfaces and types:
export type {DataType} from "./types/dataType.js";
export type {Primitive} from "./types/primitive.js";
export type {NumberType} from "./types/numberType.js";
export type {NonPrimitive} from "./types/nonPrimitive.js";