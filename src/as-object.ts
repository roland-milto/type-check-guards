// Import: Interfaces and DataTypes.
import type {TypeGuards} from "./types/typeGuards.js";

// Import: All exported guards and utilities from the main entry point.
import * as guards from "./index.js";

/**
 * Utility object that provides all type-related operations in a single namespace.
 *
 * This is exported as a separate module entry point to allow users to
 * import the entire library as a single object:
 * `import { type } from '@type-check/guards/as-object';`
 *
 * Methods:
 * * `getTypeOf`: Converts the value's type to its string representation.
 * * `isArray`: Returns a boolean whether the value is an array.
 * * `isBigInt`: Returns a boolean whether the value is a BigInt.
 * * `isBinary`: Returns a boolean whether the value is a binary.
 * * `isBoolean`: Returns a boolean whether the value is a boolean.
 * * `isBuffer`: Returns a boolean whether the value is a buffer.
 * * `isDate`: Returns a boolean whether the value is a date.
 * * `isDecimal`: Returns a boolean whether the value is a decimal.
 * * `isEqual`: Returns a boolean whether the values are equal.
 * * `isError`: Returns a boolean whether the value is an error.
 * * `isFinite`: Returns a boolean whether the value is finite.
 * * `isFloat`: Returns a boolean whether the value is a float.
 * * `isFunction`: Returns a boolean whether the value is a function.
 * * `isHexadecimal`: Returns a boolean whether the value is a hexadecimal.
 * * `isInteger`: Returns a boolean whether the value is an integer.
 * * `isMap`: Returns a boolean whether the value is a map.
 * * `isNaN`: Returns a boolean whether the value is NaN.
 * * `isNull`: Returns a boolean whether the value is null.
 * * `isNullOrUndefined`: Returns a boolean whether the value is null or undefined.
 * * `isNumber`: Returns a boolean whether the value is a number.
 * * `isObject`: Returns a boolean whether the value is an object.
 * * `isOctal`: Returns a boolean whether the value is an octal.
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
 * * `areBinaries`: Returns a boolean whether all elements in the array are binaries.
 * * `areBooleans`: Returns a boolean whether all elements in the array are booleans.
 * * `areBuffers`: Returns a boolean whether all elements in the array are buffers.
 * * `areDates`: Returns a boolean whether all elements in the array are dates.
 * * `areDecimals`: Returns a boolean whether all elements in the array are decimals.
 * * `areEqual`: Returns a boolean whether all elements in the array are equal.
 * * `areErrors`: Returns a boolean whether all elements in the array are errors.
 * * `areFinite`: Returns a boolean whether all elements in the array are finite.
 * * `areFloats`: Returns a boolean whether all elements in the array are floats.
 * * `areFunctions`: Returns a boolean whether all elements in the array are functions.
 * * `areHexadecimals`: Returns a boolean whether all elements in the array are hexadecimals.
 * * `areIntegers`: Returns a boolean whether all elements in the array are integers.
 * * `areMaps`: Returns a boolean whether all elements in the array are maps.
 * * `areNaNs`: Returns a boolean whether all elements in the array are NaNs.
 * * `areNull`: Returns a boolean whether all elements in the array are null.
 * * `areNullOrUndefined`: Returns a boolean whether all elements in the array are null or undefined.
 * * `areNumbers`: Returns a boolean whether all elements in the array are numbers.
 * * `areObjects`: Returns a boolean whether all elements in the array are objects.
 * * `areOctals`: Returns a boolean whether all elements in the array are octal.
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
 * @version 2026-01-21
 */
export const type: Readonly<TypeGuards> = Object.freeze({
  ...guards
}) as Readonly<TypeGuards>;