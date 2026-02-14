/**
 * @package     @type-check/guards
 * @see         https://github.com/roland-milto/type-check-guards
 * @author      Roland Milto (https://roland.milto.de/)
 */

// Export: local functions.
export {getTypeOf} from "./utils/getTypeOf.js";
export {areArrays, isArray} from "./guards/array.js";
export {areBigIntegers, areBigInts, isBigInteger, isBigInt} from "./guards/bigInt.js";
export {areBinaries, isBinary} from "./guards/binary.js";
export {areBooleans, areBools, isBoolean, isBool} from "./guards/boolean.js";
export {areBuffers, isBuffer} from "./guards/buffer.js";
export {areDates, isDate} from "./guards/date.js";
export {areDecimals, isDecimal} from "./guards/decimal.js";
export {areEnumerationObjects, areEnumObjects, isEnumerationObject, isEnumObject} from "./guards/enumObject.js";
export {areEnumerations, areEnums, isEnumeration, isEnum} from "./guards/enumeration.js";
export {areEmpty, isEmpty} from "./guards/empty.js";
export {areEqual, isEqual} from "./guards/equal.js";
export {areErrors, isError} from "./guards/error.js";
export {areFalse, isFalse} from "./guards/false.js";
export {areFilledArrays, isFilledArray} from "./guards/filledArray.js";
export {areFinite, isFinite} from "./guards/finite.js";
export {areFloats, isFloat} from "./guards/float.js";
export {areFunctions, isFunction} from "./guards/function.js";
export {areHexadecimals, isHexadecimal} from "./guards/hexadecimal.js";
export {areIndexesFound, isIndexFound} from "./guards/indexFound.js";
export {areIntegers, isInteger} from "./guards/integer.js";
export {areJson, isJson} from "./guards/json.js";
export {areMaps, isMap} from "./guards/map.js";
export {areNaNs, isNaN} from "./guards/nan.js";
export {areNull, isNull} from "./guards/null.js";
export {areNullOrUndefined, areNils, isNullOrUndefined, isNil} from "./guards/nullOrUndefined.js";
export {areNumbers, isNumber} from "./guards/number.js";
export {areNumerics, isNumeric} from "./guards/numeric.js";
export {areObjects, isObject} from "./guards/object.js";
export {areOctals, isOctal} from "./guards/octal.js";
export {areOfType, isOfType} from "./guards/ofType.js";
export {areOneOfType, isOneOfType} from "./guards/oneOfType.js";
export {arePlainObjects, isPlainObject} from "./guards/plainObject.js";
export {arePrimitives, isPrimitive} from "./guards/primitive.js";
export {arePromises, isPromise} from "./guards/promise.js";
export {areRegExes, isRegEx, isRegExp} from "./guards/regExp.js";
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
export type {DataType, DataTypeAsString, DataTypeOf} from "./types/dataType.js";
export type {PrimitiveType, PrimitiveTypeAsString, PrimitiveTypeOf} from "./types/primitive.js";
export type {NumericType, NumericTypeAsString, NumericTypeOf} from "./types/numericType.js";
export type {NonPrimitiveType, NonPrimitiveTypeAsString, NonPrimitiveTypeOf} from "./types/nonPrimitive.js";