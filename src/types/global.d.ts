// Import: Type Guards.
import type * as guards from '../index.mjs';

/**
 * Add here all new functions alphabetically that should be globally available.
 *
 * **IMPORTANT:**
 * Do NOT change `var` to `const` or `let` here!
 */
declare global {
  // Types
  type DataType = guards.DataType;
  type NonPrimitive = guards.NonPrimitive;
  type NumericType = guards.NumericType;
  type Primitive = guards.Primitive;

  // Utility
  var getTypeOf: typeof guards.getTypeOf;

  // Type Guards
  var isArray: typeof guards.isArray;
  var areArrays: typeof guards.areArrays;
  var isBigInt: typeof guards.isBigInt;
  var areBigInts: typeof guards.areBigInts;
  var isBoolean: typeof guards.isBoolean;
  var areBooleans: typeof guards.areBooleans;
  var isBuffer: typeof guards.isBuffer;
  var areBuffers: typeof guards.areBuffers;
  var isDate: typeof guards.isDate;
  var areDates: typeof guards.areDates;
  var isEqual: typeof guards.isEqual;
  var areEqual: typeof guards.areEqual;
  var isError: typeof guards.isError;
  var areErrors: typeof guards.areErrors;
  var isFalse: typeof guards.isFalse;
  var areFalse: typeof guards.areFalse;
  var isFilledArray: typeof guards.isFilledArray;
  var areFilledArrays: typeof guards.areFilledArrays;
  var isFinite: typeof guards.isFinite;
  var areFinite: typeof guards.areFinite;
  var isFloat: typeof guards.isFloat;
  var areFloats: typeof guards.areFloats;
  var isFunction: typeof guards.isFunction;
  var areFunctions: typeof guards.areFunctions;
  var isInteger: typeof guards.isInteger;
  var areIntegers: typeof guards.areIntegers;
  var isMap: typeof guards.isMap;
  var areMaps: typeof guards.areMaps;
  var isNaN: typeof guards.isNaN;
  var areNaNs: typeof guards.areNaNs;
  var isNull: typeof guards.isNull;
  var areNull: typeof guards.areNull;
  var isNullOrUndefined: typeof guards.isNullOrUndefined;
  var areNullOrUndefined: typeof guards.areNullOrUndefined;
  var isNumber: typeof guards.isNumber;
  var areNumbers: typeof guards.areNumbers;
  var isObject: typeof guards.isObject;
  var areObjects: typeof guards.areObjects;
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

export {};