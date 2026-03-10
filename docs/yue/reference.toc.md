# 函數引用

## 函數：

| 函數：                                         | 說明                                                                                                   |
|---------------------------------------------|------------------------------------------------------------------------------------------------------|
| [areArrays](areArrays.md)                   | `areArrays` 用嚟判斷一個值係咪一個已填充嘅二維陣列，而且入面嘅項目全部都係陣列。                                                       |
| [areBigInts](areBigInts.md)                 | `areBigInts` 用嚟判斷一個值係咪非空陣列，而且只包含 `bigint` 值。                                                         |
| [areBinaries](areBinaries.md)               | 檢查提供嘅值係咪一個由有效二進制字串組成嘅非空陣列，並且只會喺所有項目都通過驗證時先回傳 `true`。                                                 |
| [areBooleans](areBooleans.md)               | `areBooleans` 會檢查指定嘅非空陣列係咪只包含 boolean 值；如果係就回傳 `true`，否則回傳 `false`。                                  |
| [areBuffers](areBuffers.md)                 | `areBuffers` 會檢查提供嘅值係咪一個非空、已填滿嘅陣列，而且每個元素都係 `Buffer`；符合就回傳 `true`，否則回傳 `false`。                       |
| [areDates](areDates.md)                     | `areDates` 用嚟判斷指定陣列係咪有內容，而且只包含 `Date` 物件；只有當所有元素都係有效日期先會回傳 `true`。                                   |
| [areDecimals](areDecimals.md)               | 檢查陣列入面所有元素係咪十進制數字，而且陣列係已填充，並回傳 `true` 或 `false`。                                                     |
| [areEqual](areEqual.md)                     | `areEqual` 會檢查陣列入面所有元素係咪都等於指定嘅預期值；只會喺非空陣列而且每個項目都匹配時回傳 `true`。                                        |
| [areErrors](areErrors.md)                   | 檢查一個陣列係咪非空，而且只包含 `Error` 物件，並回傳 `true` 或 `false`。                                                    |
| [areFalse](areFalse.md)                     | `areFalse` 會檢查提供嘅陣列入面係咪所有元素都嚴格係布林值 `false`。                                                          |
| [areFilledArrays](areFilledArrays.md)       | `areFilledArrays` 會檢查一個二維陣列係咪非空，並且所有子陣列都係非空。                                                         |
| [areFinite](areFinite.md)                   | `areFinite` 會檢查一個值係咪非空陣列，而且元素全部都係有限數字；符合就回傳 `true`，否則回傳 `false`。                                     |
| [areFloats](areFloats.md)                   | `areFloats` 會檢查指定陣列係咪有內容，而且所有元素都係浮點數。                                                                |
| [areHexadecimals](areHexadecimals.md)       | 檢查陣列入面所有元素係咪十六進制字串；只有喺非空陣列而且每個項目都有效嘅情況下先會回傳 `true`。                                                  |
| [areIndexesFound](areIndexesFound.md)       | `areIndexesFound` 會檢查一個值係咪非空陣列，而且入面嘅元素全部都係有效索引；符合就回傳 `true`，否則回傳 `false`。                            |
| [areIntegers](areIntegers.md)               | `areIntegers` 用嚟判斷指定陣列入面嘅所有元素係咪都係整數；如果係就回傳 `true`，否則回傳 `false`。                                      |
| [areJson](areJson.md)                       | 檢查一個陣列嘅所有元素係咪 JSON 字串；只有喺陣列有內容而且每一項都係有效 JSON 時先回傳 `true`，否則回傳 `false`。                               |
| [areMaps](areMaps.md)                       | `areMaps` 用嚟判斷一個指定陣列係咪非空，而且入面所有元素都係 `Map` 實例。                                                        |
| [areNaNs](areNaNs.md)                       | `areNaNs` 會檢查陣列入面係咪所有元素都係 `NaN`，只有喺每個元素都係 `NaN` 嘅情況下先回傳 `true`。                                      |
| [areNullOrUndefined](areNullOrUndefined.md) | 檢查指定陣列入面係咪所有元素都係 `null` 或 `undefined`。                                                               |
| [areNumbers](areNumbers.md)                 | `areNumbers` 會檢查一個值係咪非空陣列，而且所有元素都係數字。                                                                |
| [areNumerics](areNumerics.md)               | `areNumerics` 會檢查一個值係咪非空陣列，而且所有元素都係數值。                                                               |
| [areObjects](areObjects.md)                 | `areObjects` 會檢查提供嘅已填充陣列係咪只包含物件。                                                                     |
| [areOctals](areOctals.md)                   | `areOctals` 用嚟判斷提供嘅值係唔係由有效八進制字串組成嘅非空陣列。                                                              |
| [areOfType](areOfType.md)                   | 檢查指定 `array` 入面所有元素係咪都屬於指定嘅 `type`。                                                                  |
| [areOneOfType](areOneOfType.md)             | `areOneOfType` 會檢查一個非空陣列入面嘅所有元素，係咪屬於指定嘅其中一種執行時期型別。                                                   |
| [arePlainObjects](arePlainObjects.md)       | 檢查一個陣列嘅所有元素係咪純物件，只有當每個元素都符合先會回傳 `true`。                                                              |
| [arePrimitives](arePrimitives.md)           | `arePrimitives` 會評估一個提供嘅、非空陣列入面嘅所有元素係咪都屬於原始型別。                                                       |
| [arePromises](arePromises.md)               | `arePromises` 用嚟判斷一個陣列入面嘅所有元素係咪都係 `Promise` 實例。                                                      |
| [areRegExes](areRegExes.md)                 | `areRegExes` 會檢查一個值係咪一個已填滿嘅陣列，而且只包含 `RegExp` 物件。                                                     |
| [areSets](areSets.md)                       | 檢查指定嘅非空陣列係咪只包含 `Set` 實例；如果係就回傳 `true`，否則回傳 `false`。                                                  |
| [areStreams](areStreams.md)                 | `areStreams` 用嚟判斷一個值係咪一個有內容嘅陣列，而且入面每個元素都係 `Stream`。                                                  |
| [areStrings](areStrings.md)                 | `areStrings` 會檢查一個陣列係咪非空，而且所有元素都係字串；只有喺呢種情況先會回傳 `true`。                                              |
| [areSymbols](areSymbols.md)                 | 檢查輸入係咪一個已填充（非空）嘅陣列，而且元素全部都係 symbol，並回傳 `true` 或 `false`。                                             |
| [areTrue](areTrue.md)                       | 檢查一個非空陣列係咪只包含布林值 `true`。                                                                             |
| [areUndefined](areUndefined.md)             | `areUndefined` 會檢查傳入嘅陣列入面係咪每個元素都係 `undefined`。                                                       |
| [areValidDates](areValidDates.md)           | 判斷一個陣列係咪非空，而且完全由有效嘅 `Date` 物件組成。                                                                     |
| [areWeakMaps](areWeakMaps.md)               | `areWeakMaps` 會檢查一個值係咪非空陣列，而且每個元素都係 `WeakMap`；只會喺呢個情況先回傳 `true`，否則回傳 `false`。                        |
| [areWeakSets](areWeakSets.md)               | 檢查輸入係咪一個非空陣列，而且入面每個元素都係 `WeakSet`；只會喺呢種情況先回傳 `true`。                                                 |
| [getTypeOf](getTypeOf.md)                   | `getTypeOf` 會為指定值回傳詳細、易讀嘅型別標籤，包括更細分嘅數值型別同特定物件種類。                                                     |
| [isArray](isArray.md)                       | `isArray` 會檢查指定嘅值係咪陣列；如果係就回傳 `true`，否則回傳 `false`。                                                    |
| [isBigInt](isBigInt.md)                     | `isBigInt` 會檢查指定值係咪 `bigint` 型別；如果係 BigInt 原始值就回傳 `true`，否則回傳 `false`。                               |
| [isBinary](isBinary.md)                     | `isBinary` 用嚟判斷一個值係咪二進制字串（可選擇性帶 `0b`/`0B` 前綴），並回傳 `true` 或 `false`。                                  |
| [isBoolean](isBoolean.md)                   | 判斷指定嘅值係咪 `boolean`。                                                                                  |
| [isBuffer](isBuffer.md)                     | 檢查一個值係咪 Node.js `Buffer`，並回傳 `true` 或 `false`。                                                       |
| [isDate](isDate.md)                         | `isDate` 用嚟判斷提供嘅值係咪 `Date`；如果係 `Date` 實例就回傳 `true`，否則回傳 `false`。                                     |
| [isDecimal](isDecimal.md)                   | `isDecimal` 會檢查一個值係咪十進制字串表示法：冇前後空白，而且十進制格式有效。                                                        |
| [isEmpty](isEmpty.md)                       | 判斷指定值係咪空：對 `null`、`undefined`、空/只含空白嘅字串、空陣列、空 `Map`/`Set`，或者冇任何自有可枚舉屬性嘅物件，會回傳 `true`。                |
| [isError](isError.md)                       | 檢查指定嘅 `value` 係咪 `Error` 嘅實例。                                                                        |
| [isFalse](isFalse.md)                       | `isFalse` 會檢查指定值係咪同布林字面量 `false` 嚴格相等。                                                               |
| [isFilledArray](isFilledArray.md)           | 檢查 `value` 係咪一個最少有一個元素嘅陣列，並回傳 `true` 或 `false`。                                                      |
| [isFinite](isFinite.md)                     | 判斷指定嘅 `value` 係咪一個有限嘅 `number`。                                                                      |
| [isFloat](isFloat.md)                       | `isFloat` 用嚟判斷指定嘅 `value` 係咪有限嘅浮點數（即係唔係整數嘅 `number`）。                                                |
| [isHexadecimal](isHexadecimal.md)           | `isHexadecimal` 會檢查指定值係咪一個帶有必須 `0x`/`0X` 前綴嘅十六進制字串字面量。                                               |
| [isIndexFound](isIndexFound.md)             | `isIndexFound` 用嚟判斷指定值係咪非負整數，表示已經搵到一個索引。                                                             |
| [isInteger](isInteger.md)                   | 判斷指定嘅 `value` 係咪安全整數數字。                                                                              |
| [isMap](isMap.md)                           | 檢查指定嘅 `value` 係咪 `Map`；如果係就回傳 `true`，否則回傳 `false`。                                                   |
| [isNaN](isNaN.md)                           | 判斷提供嘅 `value` 係咪 `number` 類型嘅 `NaN`，而唔會轉換字串。                                                         |
| [isNull](isNull.md)                         | 判斷提供嘅 `value` 係咪 `null`。                                                                             |
| [isNullOrUndefined](isNullOrUndefined.md)   | 檢查指定嘅值係咪 `null` 或 `undefined`。                                                                       |
| [isNumber](isNumber.md)                     | `isNumber` 會檢查一個值係咪有限、非 `NaN` 嘅數字。                                                                   |
| [isNumeric](isNumeric.md)                   | `isNumeric` 會透過將解析出嚟嘅類型同 `NUMERIC_TYPES` 比對，去判斷指定嘅 `value` 係咪被視為數值。                                  |
| [isObject](isObject.md)                     | 判斷指定嘅 `value` 係咪 `object`（排除 `null`）。                                                                |
| [isOctal](isOctal.md)                       | 判斷一個值係咪有效嘅八進制字面量字串（例如 `0o755`）。                                                                      |
| [isOfType](isOfType.md)                     | 判斷指定嘅 `value` 係咪符合某個型別字串：原始型別用 `typeof`，複雜型別用後備機制處理。                                                 |
| [isOneOfType](isOneOfType.md)               | `isOneOfType` 用嚟判斷指定嘅 `value` 係咪至少符合其中一個提供嘅型別字串；如果搵到任何符合就回傳 `true`，否則回傳 `false`。                     |
| [isPlainObject](isPlainObject.md)           | 檢查指定嘅 `value` 係咪純物件；如果係就回傳 `true`，否則回傳 `false`。                                                      |
| [isPrimitive](isPrimitive.md)               | `isPrimitive` 用嚟判斷指定值係咪原始型別（`null`, `undefined`, `boolean`, `number`, `string`, `bigint`, `symbol`）。 |
| [isPromise](isPromise.md)                   | 判斷指定嘅值係咪 `Promise`。                                                                                  |
| [isRegEx](isRegEx.md)                       | 判斷提供嘅值係咪一個 `RegExp` 實例。                                                                              |
| [isSet](isSet.md)                           | 判斷指定嘅值係咪 `Set`。                                                                                      |
| [isStream](isStream.md)                     | `isStream` 會檢查指定嘅值係咪 stream 物件（Node.js 類 stream、`ReadableStream` 或 `WritableStream`）。                |
| [isString](isString.md)                     | `isString` 用嚟判斷畀定嘅值係咪字串。                                                                             |
| [isSymbol](isSymbol.md)                     | `isSymbol` 用嚟判斷指定值係咪 `symbol` 類型；如果係 symbol 就回傳 `true`，否則回傳 `false`。                                 |
| [isTrue](isTrue.md)                         | `isTrue` 用嚟判斷指定值係咪嚴格等於 `true`。                                                                       |
| [isUndefined](isUndefined.md)               | 檢查指定值係咪 `undefined`。                                                                                 |
| [isValidDate](isValidDate.md)               | `isValidDate` 會檢查指定嘅值係咪有效嘅 `Date` 物件，只有真正、非無效嘅日期先會回傳 `true`。                                         |
| [isWeakMap](isWeakMap.md)                   | 判斷指定嘅 `value` 係咪一個 `WeakMap` 實例。                                                                     |
| [isWeakSet](isWeakSet.md)                   | 判斷畀定嘅 `value` 係咪一個裝住物件嘅 `WeakSet`。                                                                   |

## 對比函數

| 函數： | 說明 |
|-----|----|
