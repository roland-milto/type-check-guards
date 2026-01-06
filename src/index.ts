// Import: Interfaces and DataTypes.
import type {TypeMethods} from "./interfaces.js";

// Import: Self-created modules.
import {areArrays, isArray} from "./checks/array.js";
import {areBigInts, isBigInt} from "./checks/bigInt.js";
import {areBooleans, isBoolean} from "./checks/boolean.js";
import {areBuffers, isBuffer} from "./checks/buffer.js";
import {areDates, isDate} from "./checks/date.js";
import {areFinite, isFinite} from "./checks/finite.js";
import {areFloats, isFloat} from "./checks/float.js";
import {areFunctions, isFunction} from "./checks/function.js";
import {areIntegers, isInteger} from "./checks/integer.js";
import {areNull, isNull} from "./checks/null.js";
import {areNullOrUndefined, isNullOrUndefined} from "./checks/nullOrUndefined.js";
import {areNumbers, isNumber} from "./checks/number.js";
import {areObjects, isObject} from "./checks/object.js";
import {areOfType, isOfType} from "./checks/ofType.js";
import {arePlainObjects, isPlainObject} from "./checks/plainObject.js";
import {arePrimitives, isPrimitive} from "./checks/primitive.js";
import {arePromises, isPromise} from "./checks/promise.js";
import {areRegExes, isRegEx} from "./checks/regEx.js";
import {areStreams, isStream} from "./checks/stream.js";
import {areStrings, isString} from "./checks/string.js";
import {areSymbols, isSymbol} from "./checks/symbol.js";
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
export const type: Readonly<TypeMethods> = Object.freeze(
{
  getTypeOf,
  isArray,
  areArrays,
  isBigInt,
  areBigInts,
  isBoolean,
  areBooleans,
  isBuffer,
  areBuffers,
  isDate,
  areDates,
  isFinite,
  areFinite,
  isFloat,
  areFloats,
  isFunction,
  areFunctions,
  isInteger,
  areIntegers,
  isNull,
  areNull,
  isNullOrUndefined,
  areNullOrUndefined,
  isNumber,
  areNumbers,
  isObject,
  areObjects,
  isOfType,
  areOfType,
  isPlainObject,
  arePlainObjects,
  isPrimitive,
  arePrimitives,
  isPromise,
  arePromises,
  isRegEx,
  areRegExes,
  isStream,
  areStreams,
  isString,
  areStrings,
  isSymbol,
  areSymbols,
  isUndefined,
  areUndefined,
  isValidDate,
  areValidDates
});

// Single exports for tree shaking.
export {getTypeOf} from './utils/getTypeOf.js';
export {areArrays, isArray} from './checks/array.js';
export {areBigInts, isBigInt} from './checks/bigInt.js';
export {areBooleans, isBoolean} from './checks/boolean.js';
export {areBuffers, isBuffer} from './checks/buffer.js';
export {areDates, isDate} from './checks/date.js';
export {areFinite, isFinite} from './checks/finite.js';
export {areFloats, isFloat} from './checks/float.js';
export {areFunctions, isFunction} from './checks/function.js';
export {areIntegers, isInteger} from './checks/integer.js';
export {areNull, isNull} from './checks/null.js';
export {areNullOrUndefined, isNullOrUndefined} from './checks/nullOrUndefined.js';
export {areNumbers, isNumber} from './checks/number.js';
export {areObjects, isObject} from './checks/object.js';
export {areOfType, isOfType} from './checks/ofType.js';
export {arePrimitives, isPrimitive} from './checks/primitive.js';
export {arePromises, isPromise} from './checks/promise.js';
export {arePlainObjects, isPlainObject} from './checks/plainObject.js';
export {areRegExes, isRegEx} from './checks/regEx.js';
export {areStreams, isStream} from './checks/stream.js';
export {areStrings, isString} from './checks/string.js';
export {areSymbols, isSymbol} from './checks/symbol.js';
export {areUndefined, isUndefined} from './checks/undefined.js';
export {areValidDates, isValidDate} from './checks/validDate.js';