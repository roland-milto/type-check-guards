/**
 * @package     @type-check/guards
 * @description Provides high-performance, security-focused runtime type checks.
 * @author      Roland Milto (https://roland.milto.de/)
 * @license     GPL-3.0-or-later
 * @see         https://github.com/roland-milto/type-check-guards
 */

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
export type {NumericType} from "./types/numericType.js";
export type {NonPrimitive} from "./types/nonPrimitive.js";