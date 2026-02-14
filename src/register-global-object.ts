// Import: local assertion function.
import * as guards from './index.js';

/**
 * Add here all new functions alphabetically that should be globally available.
 *
 * **IMPORTANT:**
 * Do NOT change `var` to `const` or `let` here!
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-02-05
 */
declare global {
  // Types
  type DataType = guards.DataType;
  type DataTypeAsString = guards.DataTypeAsString;
  type DataTypeOf<K extends DataTypeAsString> = guards.DataTypeOf<K>;
  type NonPrimitiveType = guards.NonPrimitiveType;
  type NonPrimitiveTypeAsString = guards.NonPrimitiveTypeAsString;
  type NonPrimitiveTypeOf<K extends NonPrimitiveTypeAsString> = guards.NonPrimitiveTypeOf<K>;
  type NumericType = guards.NumericType;
  type NumericTypeAsString = guards.NumericTypeAsString;
  type NumericTypeOf<K extends NumericTypeAsString> = guards.NumericTypeOf<K>;
  type PrimitiveType = guards.PrimitiveType;
  type PrimitiveTypeAsString = guards.PrimitiveTypeAsString;
  type PrimitiveTypeOf<K extends PrimitiveTypeAsString> = guards.PrimitiveTypeOf<K>;

  // Utility
  var getTypeOf: typeof guards.getTypeOf;

  // Type Guards
  var isArray: typeof guards.isArray;
  var areArrays: typeof guards.areArrays;
  var isBigInt: typeof guards.isBigInt;
  var areBigInts: typeof guards.areBigInts;
  var isBigInteger: typeof guards.isBigInt;
  var areBigIntegers: typeof guards.areBigInts;
  var isBinary: typeof guards.isBinary;
  var areBinaries: typeof guards.areBinaries;
  var isBool: typeof guards.isBoolean;
  var areBools: typeof guards.areBooleans;
  var isBoolean: typeof guards.isBoolean;
  var areBooleans: typeof guards.areBooleans;
  var isBuffer: typeof guards.isBuffer;
  var areBuffers: typeof guards.areBuffers;
  var isDate: typeof guards.isDate;
  var areDates: typeof guards.areDates;
  var isDecimal: typeof guards.isDecimal;
  var areDecimals: typeof guards.areDecimals;
  var isEmpty: typeof guards.isEmpty;
  var areEmpty: typeof guards.areEmpty;
  var isEnum: typeof guards.isEnumeration;
  var areEnums: typeof guards.areEnumerations;
  var isEnumeration: typeof guards.isEnumeration;
  var areEnumerations: typeof guards.areEnumerations;
  var isEnumObject: typeof guards.isEnumObject;
  var areEnumObjects: typeof guards.areEnumObjects;
  var isEnumerationObject: typeof guards.isEnumerationObject;
  var areEnumerationObjects: typeof guards.areEnumerationObjects;
  var isEqual: typeof guards.isEqual;
  var areEqual: typeof guards.areEqual;
  var isError: typeof guards.isError;
  var areErrors: typeof guards.areErrors;
  var isFalse: typeof guards.isFalse;
  var areFalse: typeof guards.areFalse;
  var isFilledArray: typeof guards.isFilledArray;
  var areFilledArrays: typeof guards.areFilledArrays;
  /** @ts-ignore - Overwrites the global isFinite */
  var isFinite: typeof guards.isFinite;
  var areFinite: typeof guards.areFinite;
  var isFloat: typeof guards.isFloat;
  var areFloats: typeof guards.areFloats;
  var isFunction: typeof guards.isFunction;
  var areFunctions: typeof guards.areFunctions;
  var isJson: typeof guards.isJson;
  var areJsons: typeof guards.areJson;
  var isHexadecimal: typeof guards.isHexadecimal;
  var areHexadecimals: typeof guards.areHexadecimals;
  var isIndexFound: typeof guards.isIndexFound;
  var areIndexesFound: typeof guards.areIndexesFound;
  var isInteger: typeof guards.isInteger;
  var areIntegers: typeof guards.areIntegers;
  var isMap: typeof guards.isMap;
  var areMaps: typeof guards.areMaps;
  /** @ts-ignore - Overwrites the global isNaN */
  var isNaN: typeof guards.isNaN;
  var areNaNs: typeof guards.areNaNs;
  var isNil: typeof guards.isNullOrUndefined;
  var areNils: typeof guards.areNullOrUndefined;
  var isNull: typeof guards.isNull;
  var areNull: typeof guards.areNull;
  var isNullOrUndefined: typeof guards.isNullOrUndefined;
  var areNullOrUndefined: typeof guards.areNullOrUndefined;
  var isNumber: typeof guards.isNumber;
  var areNumbers: typeof guards.areNumbers;
  var isNumeric: typeof guards.isNumeric;
  var areNumerics: typeof guards.areNumerics;
  var isObject: typeof guards.isObject;
  var areObjects: typeof guards.areObjects;
  var isOctal: typeof guards.isOctal;
  var areOctals: typeof guards.areOctals;
  var isOfType: typeof guards.isOfType;
  var areOfType: typeof guards.areOfType;
  var isOneOfType: typeof guards.isOneOfType;
  var areOneOfType: typeof guards.areOneOfType;
  var isPlainObject: typeof guards.isPlainObject;
  var arePlainObjects: typeof guards.arePlainObjects;
  var isPrimitive: typeof guards.isPrimitive;
  var arePrimitives: typeof guards.arePrimitives;
  var isPromise: typeof guards.isPromise;
  var arePromises: typeof guards.arePromises;
  var isRegEx: typeof guards.isRegEx;
  var isRegExp: typeof guards.isRegEx;
  var areRegExes: typeof guards.areRegExes;
  var isSet: typeof guards.isSet;
  var areSets: typeof guards.areSets;
  var isStream: typeof guards.isStream;
  var areStreams: typeof guards.areStreams;
  var isString: typeof guards.isString;
  var areStrings: typeof guards.areStrings;
  var isSymbol: typeof guards.isSymbol;
  var areSymbols: typeof guards.areSymbols;
  var isTrue: typeof guards.isTrue;
  var areTrue: typeof guards.areTrue;
  var isUndefined: typeof guards.isUndefined;
  var areUndefined: typeof guards.areUndefined;
  var isValidDate: typeof guards.isValidDate;
  var areValidDates: typeof guards.areValidDates;
  var isWeakMap: typeof guards.isWeakMap;
  var areWeakMaps: typeof guards.areWeakMaps;
  var isWeakSet: typeof guards.isWeakSet;
  var areWeakSets: typeof guards.areWeakSets;
}

/**
 * Registers all type guards globally.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2026-01-21
 */
for (const [name, func] of Object.entries(guards)) {
  if (typeof func === 'function') {
    (globalThis as any)[name] = func;
  }
}