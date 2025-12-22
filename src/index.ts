// Import: Interfaces and DataTypes.
import type {DataTypes} from "./checks/types.js";
import type {TypeMethods} from "./interfaces.js";

// Import: Self-created modules.
import {isArray} from "./checks/isArray.js";
import {isBigInt} from "./checks/isBigInt.js";
import {isBoolean} from "./checks/isBoolean.js";
import {isBuffer} from "./checks/isBuffer.js";
import {isDate} from "./checks/isDate.js";
import {isFinite} from "./checks/isFinite.js";
import {isFunction} from "./checks/isFunction.js";
import {isInteger} from "./checks/isInteger.js";
import {isNull} from "./checks/isNull.js";
import {isNullOrUndefined} from "./checks/isNullOrUndefined.js";
import {isNumber} from "./checks/isNumber.js";
import {isObject} from "./checks/isObject.js";
import {isOfType} from "./checks/isOfType.js";
import {isPlainObject} from "./checks/isPlainObject.js";
import {isPromise} from "./checks/isPromise.js";
import {isRegex} from "./checks/isRegex.js";
import {isStream} from "./checks/isStream.js";
import {isString} from "./checks/isString.js";
import {isSymbol} from "./checks/isSymbol.js";
import {isUndefined} from "./checks/isUndefined.js";
import {isValidDate} from "./checks/isValidDate.js";
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
 * * `isRegex`: Returns a boolean whether the value is a regular expression.
 * * `isStream`: Returns a boolean whether the value is a stream.
 * * `isString`: Returns a boolean whether the value is a string.
 * * `isSymbol`: Returns a boolean whether the value is a symbol.
 * * `isUndefined`: Returns a boolean whether the value is undefined.
 * * `isValidDate`: Returns a boolean whether the value is a valid date.
 *
 * @author  Roland Milto
 * @version 2025-12-22
 */
export const type: Readonly<TypeMethods> = Object.freeze(
{
  /**
   * @param {unknown} value - The parameter to convert to a string.
   *
   * @example
   * // Returns “string”:
   * type.toString("Roland Milto");
   */
  getTypeOf: (value: unknown): DataTypes => {
    return getTypeOf(value);
  },

  /**
   * @example
   * // Returns "true":
   * type.isArray([1, 2, 3]);
   *
   * // Returns "false":
   * type.isArray(5);
   */
  isArray,

  /**
   * @example
   * // Returns "true":
   * type.isBigInt(123n);
   *
   * // Returns "false":
   * type.isBigInt(123);
   */
  isBigInt,

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

  /**
   * @example
   * // Returns "true":
   * type.isBuffer(Buffer.from("abc"));
   *
   * // Returns "false":
   * type.isBuffer("abc");
   */
  isBuffer,

  /**
   * @example
   * // Returns "true":
   * type.isDate(new Date());
   *
   * // Returns "false":
   * type.isDate("2025-12-22");
   */
  isDate,

  /**
   * @example
   * // Returns "true":
   * type.isFinite(123);
   *
   * // Returns "false":
   * type.isFinite(Infinity);
   */
  isFinite,

  /**
   * @example
   * // Returns "true":
   * type.isFunction(() => {});
   *
   * // Returns "false":
   * type.isFunction(123);
   */
  isFunction,

  /**
   * @example
   * // Returns "true":
   * type.isInteger(123);
   *
   * // Returns "false":
   * type.isInteger(123.45);
   */
  isInteger,

  /**
   * @example
   * // Returns "true":
   * type.isNull(null);
   *
   * // Returns "false":
   * type.isNull(undefined);
   */
  isNull,

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

  /**
   * @example
   * // Returns "true":
   * type.isNumber(2);
   *
   * // Returns “false”:
   * type.isNumber("2");
   */
  isNumber,

  /**
   * @example
   * // Returns "true":
   * type.isObject({ name: "Roland Milto" });
   *
   * // Returns “false”:
   * type.isObject(5);
   */
  isObject,

  /**
   * @example
   * // Returns "true":
   * type.isOfType("hello", "string");
   *
   * // Returns "false":
   * type.isOfType(123, "string");
   */
  isOfType,

  /**
   * @example
   * // Returns "true":
   * type.isPlainObject({ a: 1 });
   *
   * // Returns "false":
   * type.isPlainObject(new Date());
   */
  isPlainObject,

  /**
   * @example
   * // Returns "true":
   * type.isPromise(Promise.resolve(123));
   *
   * // Returns "false":
   * type.isPromise(123);
   */
  isPromise,

  /**
   * @example
   * // Returns "true":
   * type.isRegex(/abc/);
   *
   * // Returns "false":
   * type.isRegex("abc");
   */
  isRegex,

  /**
   * @example
   * // Returns "true":
   * type.isStream(fs.createReadStream("file.txt"));
   *
   * // Returns "false":
   * type.isStream({});
   */
  isStream,

  /**
   * @example
   * // Returns "true":
   * type.isString("Roland Milto");
   *
   * // Returns “false”:
   * type.isString(5);
   */
  isString,

  /**
   * @example
   * // Returns "true":
   * type.isSymbol(Symbol("id"));
   *
   * // Returns "false":
   * type.isSymbol("id");
   */
  isSymbol,

  /**
   * @example
   * // Returns "true":
   * type.isUndefined(undefined);
   *
   * // Returns "false":
   * type.isUndefined(null);
   */
  isUndefined,

  /**
   * @example
   * // Returns "true":
   * type.isValidDate(new Date());
   *
   * // Returns "false":
   * type.isValidDate(new Date("invalid"));
   */
  isValidDate
});

// Simple exports.
export {getTypeOf} from './utils/getTypeOf.js';
export {isArray} from './checks/isArray.js';
export {isBigInt} from './checks/isBigInt.js';
export {isBoolean} from './checks/isBoolean.js';
export {isBuffer} from './checks/isBuffer.js';
export {isDate} from './checks/isDate.js';
export {isFinite} from './checks/isFinite.js';
export {isFunction} from './checks/isFunction.js';
export {isInteger} from './checks/isInteger.js';
export {isNull} from './checks/isNull.js';
export {isNullOrUndefined} from './checks/isNullOrUndefined.js';
export {isNumber} from './checks/isNumber.js';
export {isObject} from './checks/isObject.js';
export {isOfType} from './checks/isOfType.js';
export {isPromise} from './checks/isPromise.js';
export {isPlainObject} from './checks/isPlainObject.js';
export {isRegex} from './checks/isRegex.js';
export {isStream} from './checks/isStream.js';
export {isString} from './checks/isString.js';
export {isSymbol} from './checks/isSymbol.js';
export {isUndefined} from './checks/isUndefined.js';
export {isValidDate} from './checks/isValidDate.js';