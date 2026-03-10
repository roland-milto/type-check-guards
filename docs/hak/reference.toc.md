# 函數引用

## 函数：

| 函数：                                         | 说明                                                                                                                                  |
|---------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| [areArrays](areArrays.md)                   | `areArrays` 判斷一個值係毋係有內容个二維陣列，而且其中个項目全部都係陣列。                                                                                         |
| [areBigInts](areBigInts.md)                 | `areBigInts` 判斷一個值係毋係一個非空陣列，而且入面淨係包含 `bigint` 值。                                                                                    |
| [areBinaries](areBinaries.md)               | 檢查提供个值係毋係一個毋係空个有效二進位字串陣列，只有當所有項目都通過驗證時正回傳 `true`。                                                                                   |
| [areBooleans](areBooleans.md)               | `areBooleans` 檢查一個指定个毋係空个陣列係毋係淨包含 boolean 值；係个話回傳 `true`，毋係个話回傳 `false`。                                                            |
| [areBuffers](areBuffers.md)                 | `areBuffers` 檢查提供个值係毋係一隻非空、填滿个陣列，而且內底逐隻元素都係 `Buffer`；係个話回傳 `true`，毋係就回傳 `false`。                                                    |
| [areDates](areDates.md)                     | `areDates` 判斷一個指定个陣列係毋係有填滿，且淨包含 `Date` 物件；只有當所有元素都係有效日期時正會回傳 `true`。                                                                |
| [areDecimals](areDecimals.md)               | 檢查陣列內底所有元素係毋係十進位數字，並且陣列係有填滿个，會回傳 `true` 或 `false`。                                                                                  |
| [areEqual](areEqual.md)                     | `areEqual` 會檢查一隻陣列內个所有元素係毋係都等於指定个預期值；淨係對非空陣列、而且每一項都相符个情況下回傳 `true`。                                                                 |
| [areErrors](areErrors.md)                   | 檢查一個陣列係毋係非空，並且淨包含 `Error` 物件，回傳 `true` 或 `false`。                                                                                   |
| [areFalse](areFalse.md)                     | `areFalse` 會檢查傳入个陣列內底係毋係全部元素都嚴格等於布林值 `false`。                                                                                       |
| [areFilledArrays](areFilledArrays.md)       | `areFilledArrays` 檢查一個二維陣列係毋係空个，並且佢个所有子陣列也都毋係空个。                                                                                    |
| [areFinite](areFinite.md)                   | `areFinite` 會檢查一個值係毋係毋係空个陣列，而且佢个元素全部都係有限个數字；若係就回傳 `true`，毋係就回傳 `false`。                                                             |
| [areFloats](areFloats.md)                   | `areFloats` 會檢查一個指定个陣列係毋係有內容，而且佢个所有元素都係浮點數。                                                                                         |
| [areHexadecimals](areHexadecimals.md)       | 檢查陣列裡背所有元素係毋係十六進制字串；淨係對非空陣列而且每一項都有效个情況下先回傳 `true`。                                                                                  |
| [areIndexesFound](areIndexesFound.md)       | `areIndexesFound` 會檢查一個值係毋係非空个陣列，且其中个元素全係有效个索引；若係就回傳 `true`，毋係就回傳 `false`。                                                          |
| [areIntegers](areIntegers.md)               | `areIntegers` 用來判斷一個指定陣列裡肚个所有元素係毋係整數；係就回傳 `true`，毋係就回傳 `false`。                                                                     |
| [areJson](areJson.md)                       | 檢查一個陣列个所有元素係毋係 JSON 字串；淨係當陣列有內容而且每一項都係有效 JSON 个時節正回傳 `true`，毋係就回傳 `false`。                                                          |
| [areMaps](areMaps.md)                       | `areMaps` 判斷一個指定个陣列係毋係非空，並且佢个全部元素都係 `Map` 實例。                                                                                       |
| [areNaNs](areNaNs.md)                       | `areNaNs` 會檢查陣列內底係毋係全部元素都係 `NaN`，淨係當每一個元素都係 `NaN` 正會回傳 `true`。                                                                      |
| [areNullOrUndefined](areNullOrUndefined.md) | 檢查指定个陣列入背所有元素係毋係都係 `null` 或 `undefined`。                                                                                            |
| [areNumbers](areNumbers.md)                 | `areNumbers` 檢查一個值係毋係無空个陣列，而且裡背所有元素都係數字。                                                                                            |
| [areNumerics](areNumerics.md)               | `areNumerics` 檢查一個值係毋係毋空个陣列，而且所有元素都係數字。                                                                                             |
| [areObjects](areObjects.md)                 | `areObjects` 檢查一個提供个有填滿陣列係毋係淨包含物件。                                                                                                  |
| [areOctals](areOctals.md)                   | `areOctals` 判斷提供个值係毋係一個毋會空、且內容都係有效八進位字串个陣列。                                                                                         |
| [areOfType](areOfType.md)                   | 檢查指定个 `array` 內所有元素係毋係指定个 `type`。                                                                                                   |
| [areOneOfType](areOneOfType.md)             | `areOneOfType` 會檢查一個非空陣列內个所有元素，係毋係屬於指定个其中一種執行期型別。                                                                                   |
| [arePlainObjects](arePlainObjects.md)       | 檢查陣列內底所有元素係毋係普通物件，淨係當每一個元素都符合時正回傳 `true`。                                                                                           |
| [arePrimitives](arePrimitives.md)           | `arePrimitives` 會評估：提供个、非空个陣列裡背，係毋係所有元素都係原始型別。                                                                                      |
| [arePromises](arePromises.md)               | `arePromises` 用來判斷一個陣列裡肚个所有元素係毋係都係 `Promise` 實例。                                                                                    |
| [areRegExes](areRegExes.md)                 | `areRegExes` 檢查一個值係毋係一個有內容个陣列，而且淨包含 `RegExp` 物件。                                                                                    |
| [areSets](areSets.md)                       | 檢查一個指定个非空陣列係毋係淨包含 `Set` 實例；係个話回傳 `true`，毋係就回傳 `false`。                                                                              |
| [areStreams](areStreams.md)                 | `areStreams` 判斷一個值係毋係一個有填滿个陣列，而且裡背每一個元素都係 `Stream`。                                                                                 |
| [areStrings](areStrings.md)                 | `areStrings` 會檢查一個陣列係毋係非空，且佢个全部元素都係字串；只有符合這兩項條件正會回傳 `true`。                                                                         |
| [areSymbols](areSymbols.md)                 | 檢查輸入係毋係一個有內容个陣列，而且元素全部都係 symbol，回傳 `true` 或 `false`。                                                                                |
| [areTrue](areTrue.md)                       | 檢查一個非空陣列係毋係淨係包含布林值 `true`。                                                                                                          |
| [areUndefined](areUndefined.md)             | `areUndefined` 檢查提供个陣列內底係毋係每一個元素都係 `undefined`。                                                                                     |
| [areValidDates](areValidDates.md)           | 判斷一個陣列係毋係非空，而且全部都係有效个 `Date` 物件。                                                                                                    |
| [areWeakMaps](areWeakMaps.md)               | `areWeakMaps` 會檢查一個值係毋係非空个陣列，而且陣列內底每一個元素都係 `WeakMap`；只有喺這種情況下回傳 `true`，其他情況都回傳 `false`。                                             |
| [areWeakSets](areWeakSets.md)               | 檢查輸入係毋係一個非空陣列，且每一個元素都係 `WeakSet`；只有符合這種情況正會回傳 `true`。                                                                               |
| [getTypeOf](getTypeOf.md)                   | `getTypeOf` 會對指定 ê 值轉還詳細、好讀 ê 類型標籤，包含更精細 ê 數字類型同特定 ê 物件種類。                                                                          |
| [isArray](isArray.md)                       | `isArray` kiem-cha chi̍t ê gîng-thi̍t value sī-m̄-sī array, sī ê chêng-hông thòi-chhut `true`, m̄-sī thì thòi-chhut `false`.        |
| [isBigInt](isBigInt.md)                     | `isBigInt` 會檢查指定个值係毋係 `bigint` 型別；BigInt 原始值會回傳 `true`，其他情況回傳 `false`。                                                              |
| [isBinary](isBinary.md)                     | `isBinary` 判斷一個值係毋係二進位字串（做得選擇性加 `0b`/`0B` 前綴），並回傳 `true` 或 `false`。                                                                 |
| [isBoolean](isBoolean.md)                   | 判斷一個指定个值係毋係 `boolean`。                                                                                                              |
| [isBuffer](isBuffer.md)                     | 檢查一個值係毋係 Node.js `Buffer`，並返回 `true` 或 `false`。                                                                                     |
| [isDate](isDate.md)                         | `isDate` 判斷提供个值係毋係 `Date`，對 `Date` 實例會回傳 `true`，其他情況回傳 `false`。                                                                     |
| [isDecimal](isDecimal.md)                   | `isDecimal` 檢查一個值係毋係十進位字串表示法：無前後空白，還過十進位格式有效。                                                                                       |
| [isEmpty](isEmpty.md)                       | 判斷一個指定个值係毋係空；對 `null`、`undefined`、空/淨空白字串、空 array、空 `Map`/`Set`，抑係無自家可列舉屬性个 object 會回傳 `true`。                                      |
| [isError](isError.md)                       | 檢查指定个 `value` 係毋係 `Error` 个實例。                                                                                                      |
| [isFalse](isFalse.md)                       | `isFalse` 檢查指定个值係毋係同布林字面值 `false` 嚴格相等。                                                                                             |
| [isFilledArray](isFilledArray.md)           | 檢查 `value` 係毋係一個至少有一個元素个陣列，回傳 `true` 或 `false`。                                                                                     |
| [isFinite](isFinite.md)                     | 判斷指定个 `value` 係毋係有限个 `number`。                                                                                                      |
| [isFloat](isFloat.md)                       | `isFloat` 用來判斷指定个 `value` 係毋係有限个浮點數（一个毋係整數个 `number`）。                                                                              |
| [isHexadecimal](isHexadecimal.md)           | `isHexadecimal` 檢查一隻指定个值係毋係有強制 `0x`/`0X` 前綴个十六進位字串字面量。                                                                              |
| [isIndexFound](isIndexFound.md)             | `isIndexFound` 判斷指定个值係毋係非負整數，用來表示索引有尋著。                                                                                             |
| [isInteger](isInteger.md)                   | 判斷指定个 `value` 係毋係安全整數 number。                                                                                                       |
| [isMap](isMap.md)                           | 检查所给个 `value` 系毋系 `Map`；系就返回 `true`，毋系就返回 `false`。                                                                                  |
| [isNaN](isNaN.md)                           | 判斷提供个 `value` 係毋係 `number` 類型个 `NaN`，毋會轉換字串。                                                                                        |
| [isNull](isNull.md)                         | 判斷提供个 `value` 係毋係 `null`。                                                                                                           |
| [isNullOrUndefined](isNullOrUndefined.md)   | 檢查指定个值係毋係 `null` 抑係 `undefined`。                                                                                                    |
| [isNumber](isNumber.md)                     | `isNumber` 檢查一個值係毋係有限、非 `NaN` 个數字。                                                                                                  |
| [isNumeric](isNumeric.md)                   | `isNumeric` 會判斷指定个 `value` 係毋係算做數字：透過檢查佢解析出來个型別有無落在 `NUMERIC_TYPES` 內底。                                                             |
| [isObject](isObject.md)                     | 判斷指定个 `value` 係毋係 `object`（排除 `null`）。                                                                                              |
| [isOctal](isOctal.md)                       | 判斷一個值係毋係有效个八進位字面量字串（例如 `0o755`）。                                                                                                    |
| [isOfType](isOfType.md)                     | 判斷指定个 `value` 係毋係符合某个型別字串：基本型別用 `typeof`，複雜型別用後備方式處理。                                                                               |
| [isOneOfType](isOneOfType.md)               | `isOneOfType` 會判斷指定个 `value` 係毋係至少符合提供个型別字串其中一個；若係有任何一個符合就回傳 `true`，無就回傳 `false`。                                                   |
| [isPlainObject](isPlainObject.md)           | Kiám-chha yit ê gîng-kiat ê `value` sî-m̄-sî chûn-sû object; sî ê sî-chûn trả về `true`, m̄-sî ê sî-chûn trả về `false`.            |
| [isPrimitive](isPrimitive.md)               | `isPrimitive` quyết-tēng yit ê giá-trị sî-m̄-sî primitive (`null`, `undefined`, `boolean`, `number`, `string`, `bigint`, `symbol`). |
| [isPromise](isPromise.md)                   | 判斷指定个值係毋係 `Promise`。                                                                                                                |
| [isRegEx](isRegEx.md)                       | 判斷提供个值係毋係一個 `RegExp` 實例。                                                                                                            |
| [isSet](isSet.md)                           | 判斷指定个值係毋係 `Set`。                                                                                                                    |
| [isStream](isStream.md)                     | `isStream` 會檢查指定个值係毋係串流物件（Node.js 類串流、`ReadableStream`，抑係 `WritableStream`）。                                                        |
| [isString](isString.md)                     | `isString` 用來判斷一個指定个值係毋係字串。                                                                                                         |
| [isSymbol](isSymbol.md)                     | `isSymbol` 用來判斷一個指定个值係毋係 `symbol` 型別；係 symbol 就回傳 `true`，毋係就回傳 `false`。                                                             |
| [isTrue](isTrue.md)                         | `isTrue` 判斷一個指定个值係毋係嚴格等於 `true`。                                                                                                    |
| [isUndefined](isUndefined.md)               | 檢查指定个值係毋係 `undefined`。                                                                                                              |
| [isValidDate](isValidDate.md)               | `isValidDate` 檢查指定个值係毋係有效个 `Date` 物件，淨對真正、無無效个日期回傳 `true`。                                                                          |
| [isWeakMap](isWeakMap.md)                   | 判斷指定个 `value` 係毋係一個 `WeakMap` 實例。                                                                                                   |
| [isWeakSet](isWeakSet.md)                   | 判斷所提供个 `value` 係毋係一個物件个 `WeakSet`。                                                                                                  |

## 對比函數

| 函数： | 说明 |
|-----|----|
