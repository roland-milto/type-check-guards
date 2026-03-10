# 函数引用

## 函数：

| 函数：                                         | 说明                                                                                               |
|---------------------------------------------|--------------------------------------------------------------------------------------------------|
| [areArrays](areArrays.md)                   | `areArrays` 判断一个值系唔系一个已填充嘅二维数组，而且其中嘅项目全部都系数组。                                                    |
| [areBigInts](areBigInts.md)                 | `areBigInts` 用来判断一个值系唔系非空数组，而且数组入面全部都系 `bigint` 值。                                               |
| [areBinaries](areBinaries.md)               | 检查提供个值系勿系一个由有效二进制字符串组成个非空数组，只有当所有项目都通过验证时才返回 `true`。                                             |
| [areBooleans](areBooleans.md)               | `areBooleans` 用来检查给定嗰非空数组里向是不是全系布尔值；如果系就返回 `true`，否则返回 `false`。                                  |
| [areBuffers](areBuffers.md)                 | `areBuffers` 检查提供个值是不是一个非空、填满个数组，并且每个元素都是 `Buffer`；符合就返回 `true`，否则返回 `false`。                    |
| [areDates](areDates.md)                     | `areDates` 用来判断畀定嘅数组系咪有内容而且只包含 `Date` 对象；只有当所有元素都系有效日期时先返回 `true`。                               |
| [areDecimals](areDecimals.md)               | 檢查陣列入面所有元素係咪十進制數字，而且陣列係已填滿，並回傳 `true` 或 `false`。                                                 |
| [areEqual](areEqual.md)                     | `areEqual` 检查数组里所有元素是否都等于给定的预期值；只有在非空数组且每一项都匹配时才返回 `true`。                                       |
| [areErrors](areErrors.md)                   | 检查一个数组是否非空并且只包含 `Error` 对象，返回 `true` 或 `false`。                                                  |
| [areFalse](areFalse.md)                     | `areFalse` 用来检查传入数组入面嘅所有元素系咪都严格等于布尔值 `false`。                                                    |
| [areFilledArrays](areFilledArrays.md)       | `areFilledArrays` 用嚟检查一个二维数组系唔系空嘅，并且佢所有子数组都唔系空嘅。                                                 |
| [areFinite](areFinite.md)                   | `areFinite` 用来检查一个值系咪非空数组，而且数组元素全部都系有限数字；符合就返回 `true`，唔符合就返回 `false`。                            |
| [areFloats](areFloats.md)                   | `areFloats` 用来检查指定个数组是不是填满了，而且里向所有元素都系浮点数。                                                       |
| [areHexadecimals](areHexadecimals.md)       | 检查数组入面所有元素系咪十六进制字符串；只有喺非空数组而且每一项都有效嗰阵先返回 `true`。                                                 |
| [areIndexesFound](areIndexesFound.md)       | `areIndexesFound` 用来检查一个值系咪非空数组，并且数组里嘅元素全部都系有效索引；符合就返回 `true`，否则返回 `false`。                      |
| [areIntegers](areIntegers.md)               | `areIntegers` 用嚟判断畀定嘅数组入面系咪所有元素都系整数；如果系就返回 `true`，否则返回 `false`。                                  |
| [areJson](areJson.md)                       | 检查一个数组里向所有元素是不是 JSON 字符串：只有数组有内容并且每一项都是有效 JSON 个辰光才返回 `true`；否则返回 `false`。                       |
| [areMaps](areMaps.md)                       | `areMaps` 用来判断给定个数组是否非空，并且里头所有元素都是 `Map` 实例。                                                     |
| [areNaNs](areNaNs.md)                       | `areNaNs` 检查一个数组里向是不是所有元素都系 `NaN`，只有当每个元素都系 `NaN` 个辰光才返回 `true`。                                 |
| [areNullOrUndefined](areNullOrUndefined.md) | 检查给定数组里向所有元素是不是都系 `null` 或者 `undefined`。                                                         |
| [areNumbers](areNumbers.md)                 | `areNumbers` 检查一个值是不是非空数组，而且里向所有元素都是数字。                                                          |
| [areNumerics](areNumerics.md)               | `areNumerics` 检查一个值是不是非空数组，而且里向所有元素都系数字。                                                         |
| [areObjects](areObjects.md)                 | `areObjects` 检查提供个填满数组里向是不是只包含对象。                                                                |
| [areOctals](areOctals.md)                   | `areOctals` 用来判断提供个值系唔系一个由有效八进制字符串组成个非空数组。                                                       |
| [areOfType](areOfType.md)                   | 检查给定 `array` 里所有元素系咪都属于指定嘅 `type`。                                                               |
| [areOneOfType](areOneOfType.md)             | `areOneOfType` 用来检查一个非空数组里嘅所有元素，系咪都属于指定嘅运行时类型之一。                                                 |
| [arePlainObjects](arePlainObjects.md)       | 检查一个数组嘅所有元素系唔系普通对象，只有每个元素都符合先返回 `true`。                                                          |
| [arePrimitives](arePrimitives.md)           | `arePrimitives` 用来判断提供嗰个非空数组入面，系唔系所有元素都系原始类型。                                                    |
| [arePromises](arePromises.md)               | `arePromises` 用来判断一个数组入面嘅所有元素系咪都系 `Promise` 实例。                                                  |
| [areRegExes](areRegExes.md)                 | `areRegExes` 检查一个值是不是装满个数组，而且里头只包含 `RegExp` 对象。                                                  |
| [areSets](areSets.md)                       | 检查一个给定个非空数组里向是不是全是 `Set` 实例；如果是就返回 `true`，否则返回 `false`。                                          |
| [areStreams](areStreams.md)                 | `areStreams` 用来判断一个值系唔系装满咧个数组，并且里向每个元素都系 `Stream`。                                               |
| [areStrings](areStrings.md)                 | `areStrings` 检查一个数组是否非空并且所有元素都是字符串，只有在这种情况下才返回 `true`。                                           |
| [areSymbols](areSymbols.md)                 | 检查输入是不是一个已填充数组，而且里向元素全是 symbol，返回 `true` 或 `false`。                                              |
| [areTrue](areTrue.md)                       | 检查一个唔空嘅数组系咪只包含布尔值 `true`。                                                                        |
| [areUndefined](areUndefined.md)             | `areUndefined` 檢查傳入个陣列內底係毋係每一個元素攏是 `undefined`。                                                  |
| [areValidDates](areValidDates.md)           | 判断一个数组是不是弗空，而且全是有效个 `Date` 对象组成。                                                                 |
| [areWeakMaps](areWeakMaps.md)               | `areWeakMaps` 检查一个值是不是非空数组，并且数组里向每个元素都是 `WeakMap`；只有这种情况才返回 `true`，别个情况都返回 `false`。              |
| [areWeakSets](areWeakSets.md)               | 检查输入是不是一个非空数组，而且每个元素都是 `WeakSet`；只有满足这两条才返回 `true`。                                              |
| [getTypeOf](getTypeOf.md)                   | `getTypeOf` 会为给定个值返回一个详细、好读个类型标签，包括更细个数字类型跟特定个对象种类。                                              |
| [isArray](isArray.md)                       | `isArray` 检查给定个值系唔系数组；系就返回 `true`，唔系就返回 `false`。                                                 |
| [isBigInt](isBigInt.md)                     | `isBigInt` 检查给定个值是不是 `bigint` 类型；对 BigInt 原始值返回 `true`，否则返回 `false`。                             |
| [isBinary](isBinary.md)                     | `isBinary` 用嚟判断一个值系咪二进制字符串（可选带 `0b`/`0B` 前缀），并返回 `true` 或 `false`。                               |
| [isBoolean](isBoolean.md)                   | 判斷一個指定个值係毋係 `boolean`。                                                                           |
| [isBuffer](isBuffer.md)                     | 检查一个值系咪 Node.js `Buffer`，并返回 `true` 或 `false`。                                                   |
| [isDate](isDate.md)                         | `isDate` 用来判断传入个值是不是 `Date`，对 `Date` 实例返回 `true`，其他情况返回 `false`。                                 |
| [isDecimal](isDecimal.md)                   | `isDecimal` 用来检查一个值係咪十进制字符串表示：前后冇空白，而且十进制格式有效。                                                   |
| [isEmpty](isEmpty.md)                       | 判斷畀定嘅值係咪空：對 `null`、`undefined`、空/淨空白字串、空陣列、空 `Map`/`Set`，或者冇自有可枚舉屬性嘅物件會回傳 `true`。                |
| [isError](isError.md)                       | 检查给定个 `value` 是不是 `Error` 个实例。                                                                   |
| [isFalse](isFalse.md)                       | `isFalse` 检查给定个值是不是同布尔字面量 `false` 严格相等。                                                          |
| [isFilledArray](isFilledArray.md)           | 检查 `value` 係唔係一个至少有一个元素个数组，并返回 `true` 或 `false`。                                                 |
| [isFinite](isFinite.md)                     | 判断给定个 `value` 是勿是有限个 `number`。                                                                   |
| [isFloat](isFloat.md)                       | `isFloat` 用来判断给定个 `value` 是不是有限个浮点数（一个非整数个 `number`）。                                            |
| [isHexadecimal](isHexadecimal.md)           | `isHexadecimal` 检查给定个值系勿系带强制 `0x`/`0X` 前缀个十六进制字符串字面量。                                            |
| [isIndexFound](isIndexFound.md)             | `isIndexFound` 判断给定个值是不是非负整数，用来表示索引寻着咧。                                                          |
| [isInteger](isInteger.md)                   | 判斷畀定个 `value` 係咪安全整數數字。                                                                          |
| [isMap](isMap.md)                           | 检查给定嘅 `value` 系咪 `Map`；如果系就返回 `true`，否则返回 `false`。                                               |
| [isNaN](isNaN.md)                           | 判断提供个 `value` 是不是 `number` 类型个 `NaN`，毋会把字符串转换。                                                   |
| [isNull](isNull.md)                         | 判断提供个 `value` 是不是 `null`。                                                                        |
| [isNullOrUndefined](isNullOrUndefined.md)   | 检查给定个值系唔系 `null` 或者 `undefined`。                                                                 |
| [isNumber](isNumber.md)                     | `isNumber` 用来检查一个值是不是有限、非 `NaN` 嘞数字。                                                             |
| [isNumeric](isNumeric.md)                   | `isNumeric` 会通过把给定个 `value` 解析出类型，再同 `NUMERIC_TYPES` 对照，来判断伊是不是算数值。                              |
| [isObject](isObject.md)                     | 判断给定个 `value` 是不是 `object`（排除 `null`）。                                                           |
| [isOctal](isOctal.md)                       | 判斷一個值係毋係有效个八進制字面量字串（例如 `0o755`）。                                                                 |
| [isOfType](isOfType.md)                     | 判断指定个 `value` 是勿是符合某个类型字符串：基本类型用 `typeof`，复杂类型用后备逻辑处理。                                           |
| [isOneOfType](isOneOfType.md)               | `isOneOfType` 用来判断给定嘞 `value` 至少同提供嘞类型字符串里头一个匹配；要是有任意一个匹配就返回 `true`，要不就返回 `false`。               |
| [isPlainObject](isPlainObject.md)           | 检查给定个 `value` 是不是普通对象；是就返回 `true`，要不就返回 `false`。                                                 |
| [isPrimitive](isPrimitive.md)               | `isPrimitive` 用来判断给定个值是不是原始类型（`null`、`undefined`、`boolean`、`number`、`string`、`bigint`、`symbol`）。 |
| [isPromise](isPromise.md)                   | 判断给定个值是不是 `Promise`。                                                                             |
| [isRegEx](isRegEx.md)                       | 判断提供个值是不是一个 `RegExp` 实例。                                                                         |
| [isSet](isSet.md)                           | 判断给定个值是不是 `Set`。                                                                                 |
| [isStream](isStream.md)                     | `isStream` 會檢查指定个值係毋係 stream 物件（Node.js 類 stream、`ReadableStream`，抑係 `WritableStream`）。          |
| [isString](isString.md)                     | `isString` 用來判斷指定个值係毋係字串。                                                                        |
| [isSymbol](isSymbol.md)                     | `isSymbol` 用来判断给定个值係唔係 `symbol` 类型：係 symbol 就返回 `true`，唔係就返回 `false`。                            |
| [isTrue](isTrue.md)                         | `isTrue` 用来判断给定个值是否严格等于 `true`。                                                                  |
| [isUndefined](isUndefined.md)               | 检查给定个值是不是 `undefined`。                                                                           |
| [isValidDate](isValidDate.md)               | `isValidDate` 检查畀定嘅值系咪一个有效嘅 `Date` 对象，只有真实、唔无效嘅日期先返回 `true`。                                     |
| [isWeakMap](isWeakMap.md)                   | 判断给定个 `value` 是不是一个 `WeakMap` 实例。                                                                |
| [isWeakSet](isWeakSet.md)                   | 判断给定个 `value` 是不是对象个 `WeakSet`。                                                                  |

## 对比函数

| 函数： | 说明 |
|-----|----|
