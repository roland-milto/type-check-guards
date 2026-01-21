/**
 * @package     @type-check/guards
 * @see         https://github.com/roland-milto/type-check-guards
 * @author      Roland Milto (https://roland.milto.de/)
 */

// Export: Self-created functions.
export {getTypeOf} from "./utils/getTypeOf.js";
export {areArrays, isArray} from "./guards/array.js";
export {areBigInts, isBigInt} from "./guards/bigInt.js";
export {areBinaries, isBinary} from "./guards/binary.js";
export {areBooleans, isBoolean} from "./guards/boolean.js";
export {areBuffers, isBuffer} from "./guards/buffer.js";
export {areDates, isDate} from "./guards/date.js";
export {areDecimals, isDecimal} from "./guards/decimal.js";
export {areEqual, isEqual} from "./guards/equal.js";
export {areErrors, isError} from "./guards/error.js";
export {areFalse, isFalse} from "./guards/false.js";
export {areFilledArrays, isFilledArray} from "./guards/filledArray.js";
export {areFinite, isFinite} from "./guards/finite.js";
export {areFloats, isFloat} from "./guards/float.js";
export {areFunctions, isFunction} from "./guards/function.js";
export {areHexadecimals, isHexadecimal} from "./guards/hexadecimal.js";
export {areIntegers, isInteger} from "./guards/integer.js";
export {areMaps, isMap} from "./guards/map.js";
export {areNaNs, isNaN} from "./guards/nan.js";
export {areNull, isNull} from "./guards/null.js";
export {areNullOrUndefined, isNullOrUndefined} from "./guards/nullOrUndefined.js";
export {areNumbers, isNumber} from "./guards/number.js";
export {areObjects, isObject} from "./guards/object.js";
export {areOctals, isOctal} from "./guards/octal.js";
export {areOfType, isOfType} from "./guards/ofType.js";
export {areOneOfType, isOneOfType} from "./guards/oneOfType.js";
export {arePlainObjects, isPlainObject} from "./guards/plainObject.js";
export {arePrimitives, isPrimitive} from "./guards/primitive.js";
export {arePromises, isPromise} from "./guards/promise.js";
export {areRegExes, isRegEx} from "./guards/regExp.js";
export {areSets, isSet} from "./guards/set.js";
export {areStreams, isStream} from "./guards/stream.js";
export {areStrings, isString} from "./guards/string.js";
export {areSymbols, isSymbol} from "./guards/symbol.js";
export {areTrue, isTrue} from "./guards/true.js";
export {areUndefined, isUndefined} from "./guards/undefined.js";
export {areValidDates, isValidDate} from "./guards/validDate.js";
export {areWeakMaps, isWeakMap} from "./guards/weakMap.js";
export {areWeakSets, isWeakSet} from "./guards/weakSet.js";

// Export: Interfaces and types:
export type {DataType} from "./types/dataType.js";
export type {Primitive} from "./types/primitive.js";
export type {NumericType} from "./types/numericType.js";
export type {NonPrimitive} from "./types/nonPrimitive.js";