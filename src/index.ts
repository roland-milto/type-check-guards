// Import: Interfaces and DataTypes.
import type {TypeMethods} from "./interfaces.js";

// Import: Self-created modules.
import {areArrays, isArray} from "./checks/array.js";
import {areBigInts, isBigInt} from "./checks/bigInt.js";
import {areBooleans, isBoolean} from "./checks/boolean.js";
import {areBuffers, isBuffer} from "./checks/buffer.js";
import {areDates, isDate} from "./checks/date.js";
import {areFinite, isFinite} from "./checks/finite.js";
import {areFunctions, isFunction} from "./checks/function.js";
import {areIntegers, isInteger} from "./checks/integer.js";
import {areNull, isNull} from "./checks/null.js";
import {areNullOrUndefined, isNullOrUndefined} from "./checks/nullOrUndefined.js";
import {areNumbers, isNumber} from "./checks/number.js";
import {areObjects, isObject} from "./checks/object.js";
import {areOfType, isOfType} from "./checks/ofType.js";
import {arePlainObjects, isPlainObject} from "./checks/plainObject.js";
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
 * * `isFunction`: Returns a boolean whether the value is a function.
 * * `isInteger`: Returns a boolean whether the value is an integer.
 * * `isNull`: Returns a boolean whether the value is null.
 * * `isNullOrUndefined`: Returns a boolean whether the value is null or undefined.
 * * `isNumber`: Returns a boolean whether the value is a number.
 * * `isObject`: Returns a boolean whether the value is an object.
 * * `isOfType`: Validates if the value matches a specified data type.
 * * `isPlainObject`: Returns a boolean whether the value is a plain object.
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
 * * `areFunctions`: Returns a boolean whether all elements in the array are functions.
 * * `areIntegers`: Returns a boolean whether all elements in the array are integers.
 * * `areNull`: Returns a boolean whether all elements in the array are null.
 * * `areNullOrUndefined`: Returns a boolean whether all elements in the array are null or undefined.
 * * `areNumbers`: Returns a boolean whether all elements in the array are numbers.
 * * `areObjects`: Returns a boolean whether all elements in the array are objects.
 * * `areOfType`: Returns a boolean whether all elements in the array match the specified data type.
 * * `arePlainObjects`: Returns a boolean whether all elements in the array are plain objects.
 * * `arePromises`: Returns a boolean whether all elements in the array are promises.
 * * `areRegExes`: Returns a boolean whether all elements in the array are regular expressions.
 * * `areStreams`: Returns a boolean whether all elements in the array are streams.
 * * `areStrings`: Returns a boolean whether all elements in the array are strings.
 * * `areSymbols`: Returns a boolean whether all elements in the array are symbols.
 * * `areUndefined`: Returns a boolean whether all elements in the array are undefined.
 * * `areValidDates`: Returns a boolean whether all elements in the array are valid dates.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-22
 */
export const type: Readonly<TypeMethods> = Object.freeze(
{
  /**
   * @param {unknown} value - The parameter to convert to a string.
   *
   * @example
   * // Returns “string”:
   * type.getTypeOf("Roland Milto");
   */
  getTypeOf,

  /**
   * @example
   * // Returns "true":
   * type.isArray([1, 2, 3]);
   * type.areArrays([1, 2, 3], [true, false], ["Roland", "Milto"]);
   *
   * // Returns "false":
   * type.isArray(5);
   */
  isArray,
  areArrays,

  /**
   * @example
   * // Returns "true":
   * type.isBigInt(123n);
   *
   * // Returns "false":
   * type.isBigInt(123);
   */
  isBigInt,
  areBigInts,

  /**
   * @example
   * // Returns "true":
   * type.isBoolean(true);
   * type.isBoolean(false);
   *
   * // Returns "false":
   * type.isBoolean(0);
   * type.isBoolean("true");
   */
  isBoolean,
  areBooleans,

  /**
   * @example
   * // Returns "true":
   * type.isBuffer(Buffer.from("abc"));
   *
   * // Returns "false":
   * type.isBuffer("abc");
   */
  isBuffer,
  areBuffers,

  /**
   * @example
   * // Returns "true":
   * type.isDate(new Date());
   *
   * // Returns "false":
   * type.isDate("2025-12-22");
   */
  isDate,
  areDates,

  /**
   * @example
   * // Returns "true":
   * type.isFinite(123);
   *
   * // Returns "false":
   * type.isFinite(Infinity);
   */
  isFinite,
  areFinite,

  /**
   * @example
   * // Returns "true":
   * type.isFunction(() => {});
   *
   * // Returns "false":
   * type.isFunction(123);
   */
  isFunction,
  areFunctions,

  /**
   * @example
   * // Returns "true":
   * type.isInteger(123);
   *
   * // Returns "false":
   * type.isInteger(123.45);
   */
  isInteger,
  areIntegers,

  /**
   * @example
   * // Returns "true":
   * type.isNull(null);
   *
   * // Returns "false":
   * type.isNull(undefined);
   */
  isNull,
  areNull,

  /**
   * @example
   * // Returns "true":
   * type.isNullOrUndefined(null);
   * type.isNullOrUndefined(undefined);
   *
   * // Returns "false":
   * type.isNullOrUndefined("Roland Milto");
   */
  isNullOrUndefined,
  areNullOrUndefined,

  /**
   * @example
   * // Returns "true":
   * type.isNumber(2);
   *
   * // Returns “false”:
   * type.isNumber("2");
   */
  isNumber,
  areNumbers,

  /**
   * @example
   * // Returns "true":
   * type.isObject({ name: "Roland Milto" });
   *
   * // Returns “false”:
   * type.isObject(5);
   */
  isObject,
  areObjects,

  /**
   * @example
   * // Returns "true":
   * type.isOfType("hello", "string");
   *
   * // Returns "false":
   * type.isOfType(123, "string");
   */
  isOfType,
  areOfType,

  /**
   * @example
   * // Returns "true":
   * type.isPlainObject({ a: 1 });
   *
   * // Returns "false":
   * type.isPlainObject(new Date());
   */
  isPlainObject,
  arePlainObjects,

  /**
   * @example
   * // Returns "true":
   * type.isPromise(Promise.resolve(123));
   *
   * // Returns "false":
   * type.isPromise(123);
   */
  isPromise,
  arePromises,

  /**
   * @example
   * // Returns "true":
   * type.isRegEx(/abc/);
   *
   * // Returns "false":
   * type.isRegEx("abc");
   */
  isRegEx,
  areRegExes,

  /**
   * @example
   * // Returns "true":
   * type.isStream(fs.createReadStream("file.txt"));
   *
   * // Returns "false":
   * type.isStream({});
   */
  isStream,
  areStreams,

  /**
   * @example
   * // Returns "true":
   * type.isString("Roland Milto");
   *
   * // Returns “false”:
   * type.isString(5);
   */
  isString,
  areStrings,

  /**
   * @example
   * // Returns "true":
   * type.isSymbol(Symbol("id"));
   *
   * // Returns "false":
   * type.isSymbol("id");
   */
  isSymbol,
  areSymbols,

  /**
   * @example
   * // Returns "true":
   * type.isUndefined(undefined);
   *
   * // Returns "false":
   * type.isUndefined(null);
   */
  isUndefined,
  areUndefined,

  /**
   * @example
   * // Returns "true":
   * type.isValidDate(new Date());
   *
   * // Returns "false":
   * type.isValidDate(new Date("invalid"));
   */
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
export {areFunctions, isFunction} from './checks/function.js';
export {areIntegers, isInteger} from './checks/integer.js';
export {areNull, isNull} from './checks/null.js';
export {areNullOrUndefined, isNullOrUndefined} from './checks/nullOrUndefined.js';
export {areNumbers, isNumber} from './checks/number.js';
export {areObjects, isObject} from './checks/object.js';
export {areOfType, isOfType} from './checks/ofType.js';
export {arePromises, isPromise} from './checks/promise.js';
export {arePlainObjects, isPlainObject} from './checks/plainObject.js';
export {areRegExes, isRegEx} from './checks/regEx.js';
export {areStreams, isStream} from './checks/stream.js';
export {areStrings, isString} from './checks/string.js';
export {areSymbols, isSymbol} from './checks/symbol.js';
export {areUndefined, isUndefined} from './checks/undefined.js';
export {areValidDates, isValidDate} from './checks/validDate.js';