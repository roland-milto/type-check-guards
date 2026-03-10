# 函数引用

## 函数：

| 函数：                                         | 说明                                                                                               |
|---------------------------------------------|--------------------------------------------------------------------------------------------------|
| [areArrays](areArrays.md)                   | `areArrays` 判断一个值是不是装满个二维数组，并且里向个每项侪系数组。                                                         |
| [areBigInts](areBigInts.md)                 | `areBigInts` 判断一个值是不是非空数组，而且里向只包含 `bigint` 值。                                                    |
| [areBinaries](areBinaries.md)               | 检查提供个值是不是由有效二进制字符串组成个非空数组，只有当所有条目都通过验证才返回 `true`。                                                |
| [areBooleans](areBooleans.md)               | `areBooleans` 用来检查给定个非空数组里向是不是只包含布尔值；如果是就返回 `true`，否则返回 `false`。                                 |
| [areBuffers](areBuffers.md)                 | `areBuffers` 检查提供个值是不是一个非空、填满个数组，而且里向每个元素侪是 `Buffer`；是个么返回 `true`，勿是个么返回 `false`。                |
| [areDates](areDates.md)                     | `areDates` 用来判断给定个数组是不是填满（弗是空）而且只包含 `Date` 对象；只有当所有元素侪是有效日期辰光才返回 `true`。                         |
| [areDecimals](areDecimals.md)               | 检查一个数组里向个所有元素是不是十进制数字，而且数组是填满个，返回 `true` 或 `false`。                                              |
| [areEqual](areEqual.md)                     | `areEqual` 用来检查数组里所有元素是不是都等于指定个预期值；只有对非空数组而且每一项都匹配个情况才会返回 `true`。                                |
| [areErrors](areErrors.md)                   | 检查一个数组是不是非空，而且只包含 `Error` 对象，返回 `true` 或 `false`。                                                |
| [areFalse](areFalse.md)                     | `areFalse` 检查传入个数组里向是不是所有元素都严格等于布尔值 `false`。                                                     |
| [areFilledArrays](areFilledArrays.md)       | `areFilledArrays` 用来检查一个二维数组是不是弗空，并且伊个所有子数组是不是都弗空。                                               |
| [areFinite](areFinite.md)                   | `areFinite` 用来检查一个值是不是非空数组，而且里向元素侪是有限数字；符合就返回 `true`，勿符合就返回 `false`。                             |
| [areFloats](areFloats.md)                   | `areFloats` 用来检查给定个数组是不是有内容，而且里向所有元素都是浮点数。                                                       |
| [areHexadecimals](areHexadecimals.md)       | 检查数组里向所有元素是不是十六进制字符串；只有对非空数组、并且每一项都有效个情况下才返回 `true`。                                             |
| [areIndexesFound](areIndexesFound.md)       | `areIndexesFound` 用来检查一个值是不是非空数组，而且里向个元素全是有效索引；符合就返回 `true`，勿符合就返回 `false`。                      |
| [areIntegers](areIntegers.md)               | `areIntegers` 用来判断给定数组里向个所有元素是不是整数：是就返回 `true`，勿是就返回 `false`。                                    |
| [areJson](areJson.md)                       | 检查一个数组里向所有元素是不是 JSON 字符串：只有数组有内容而且每一项都是有效 JSON 才返回 `true`；否则返回 `false`。                          |
| [areMaps](areMaps.md)                       | `areMaps` 用来判断给定个数组是不是非空，而且里向所有元素侪是 `Map` 实例。                                                    |
| [areNaNs](areNaNs.md)                       | `areNaNs` 用来检查数组里向是不是所有元素侪是 `NaN`，只有当每个元素侪是 `NaN` 个辰光才返回 `true`。                                 |
| [areNullOrUndefined](areNullOrUndefined.md) | 检查给定数组里向所有元素是不是侪是 `null` 或 `undefined`。                                                          |
| [areNumbers](areNumbers.md)                 | `areNumbers` 用来检查一个值是不是非空数组，而且里向所有元素都是数字。                                                        |
| [areNumerics](areNumerics.md)               | `areNumerics` 检查一个值是不是非空数组，而且里向所有元素都是数字。                                                         |
| [areObjects](areObjects.md)                 | `areObjects` 检查传进来个填满个数组里向是不是只包含对象。                                                              |
| [areOctals](areOctals.md)                   | `areOctals` 判断提供个值是不是由有效八进制字符串组成个非空数组。                                                           |
| [areOfType](areOfType.md)                   | 检查给定 `array` 里向所有元素是不是都属于指定 `type`。                                                              |
| [areOneOfType](areOneOfType.md)             | `areOneOfType` 检查一个非空数组里向所有元素是不是属于指定个运行时类型当中个某一种。                                                |
| [arePlainObjects](arePlainObjects.md)       | 检查一个数组里向所有元素是不是普通对象，只有每个元素侪符合条件辰返回 `true`。                                                       |
| [arePrimitives](arePrimitives.md)           | `arePrimitives` 用来判断提供个、非空数组里向所有元素是不是侪是原始类型。                                                     |
| [arePromises](arePromises.md)               | `arePromises` 用来判断一个数组里向个所有元素是不是侪是 `Promise` 实例。                                                 |
| [areRegExes](areRegExes.md)                 | `areRegExes` 检查一个值是不是装满个数组，并且只包含 `RegExp` 对象。                                                    |
| [areSets](areSets.md)                       | 检查给定个非空数组里向是不是全是 `Set` 实例；是个辰光返回 `true`，勿是个辰光返回 `false`。                                         |
| [areStreams](areStreams.md)                 | `areStreams` 用来判断一个值是不是已填充个数组，并且里向每个元素侪是 `Stream`。                                               |
| [areStrings](areStrings.md)                 | `areStrings` 检查一个数组是不是非空，并且里向所有元素侪是字符串；只有符合这两点才返回 `true`。                                        |
| [areSymbols](areSymbols.md)                 | 检查输入是不是一个装满个数组，且元素全是 symbol，返回 `true` 或 `false`。                                                 |
| [areTrue](areTrue.md)                       | 检查一个非空数组里向是不是只包含布尔值 `true`。                                                                      |
| [areUndefined](areUndefined.md)             | `areUndefined` 用来检查传入个数组里向每个元素是不是侪是 `undefined`。                                                 |
| [areValidDates](areValidDates.md)           | 判断一个数组是不是非空，而且全部由有效个 `Date` 对象组成。                                                                |
| [areWeakMaps](areWeakMaps.md)               | `areWeakMaps` 用来检查一个值是不是非空数组，而且数组里向每个元素都是 `WeakMap`；只有符合这个条件才返回 `true`，否则一律返回 `false`。           |
| [areWeakSets](areWeakSets.md)               | 检查输入是不是一个非空数组，并且里向每个元素侪是 `WeakSet`；只有符合辰光才返回 `true`。                                             |
| [getTypeOf](getTypeOf.md)                   | `getTypeOf` 会为给定个值返回详细、好读个类型标签，包含更细分个数字类型搭特定个对象种类。                                               |
| [isArray](isArray.md)                       | `isArray` 检查给定个值是不是数组；是就返回 `true`，勿是就返回 `false`。                                                 |
| [isBigInt](isBigInt.md)                     | `isBigInt` 用来检查给定个值是不是 `bigint` 类型：对 BigInt 原始值返回 `true`，否则返回 `false`。                           |
| [isBinary](isBinary.md)                     | `isBinary` 判断一个值是不是二进制字符串（可以带 `0b`/`0B` 前缀），并返回 `true` 或 `false`。                                |
| [isBoolean](isBoolean.md)                   | 判断给定个值是不是 `boolean`。                                                                             |
| [isBuffer](isBuffer.md)                     | 检查一个值是不是 Node.js 个 `Buffer`，并返回 `true` 或 `false`。                                                |
| [isDate](isDate.md)                         | `isDate` 用来判断传进来个值是不是 `Date`：碰着 `Date` 实例就返回 `true`，否则返回 `false`。                                |
| [isDecimal](isDecimal.md)                   | `isDecimal` 用来检查一个值是不是十进制字符串表示：前后勿带空白，并且十进制格式有效。                                                 |
| [isEmpty](isEmpty.md)                       | 判断给定个值是不是空：对 `null`、`undefined`、空/纯空白字符串、空数组、空 `Map`/`Set`，或者无自有可枚举属性个对象返回 `true`。               |
| [isError](isError.md)                       | 检查给定个 `value` 是否是 `Error` 个实例。                                                                   |
| [isFalse](isFalse.md)                       | `isFalse` 检查给定个值是不是同布尔字面量 `false` 严格相等。                                                          |
| [isFilledArray](isFilledArray.md)           | 检查 `value` 是不是一个至少有一个元素个数组，并返回 `true` 或 `false`。                                                 |
| [isFinite](isFinite.md)                     | 判断给定个 `value` 是不是有限个 `number`。                                                                   |
| [isFloat](isFloat.md)                       | `isFloat` 用来判断给定个 `value` 是不是有限个浮点数（一个不是整数个 `number`）。                                           |
| [isHexadecimal](isHexadecimal.md)           | `isHexadecimal` 检查给定个值是不是带强制 `0x`/`0X` 前缀个十六进制字符串字面量。                                            |
| [isIndexFound](isIndexFound.md)             | `isIndexFound` 用来判断给定个值是不是非负整数，从而表示索引已经寻着。                                                       |
| [isInteger](isInteger.md)                   | 判断给定个 `value` 是不是安全整数 number。                                                                    |
| [isMap](isMap.md)                           | 检查给定嘅 `value` 是不是 `Map`；如果是就返回 `true`，否则返回 `false`。                                              |
| [isNaN](isNaN.md)                           | 判断提供个 `value` 是弗是 `number` 类型个 `NaN`，并且弗会去转换字符串。                                                 |
| [isNull](isNull.md)                         | 判断提供个 `value` 是否为 `null`。                                                                        |
| [isNullOrUndefined](isNullOrUndefined.md)   | 检查给定个值是勿是 `null` 或 `undefined`。                                                                  |
| [isNumber](isNumber.md)                     | `isNumber` 检查一个值是不是有限、非 `NaN` 个数字。                                                               |
| [isNumeric](isNumeric.md)                   | `isNumeric` 通过把给定个 `value` 解析出类型，再拿去跟 `NUMERIC_TYPES` 对照，来判断伊算勿算数值。                              |
| [isObject](isObject.md)                     | 判断给定个 `value` 是不是 `object`（排除 `null`）。                                                           |
| [isOctal](isOctal.md)                       | 判断一个值是不是有效个八进制字面量字符串（比方讲 `0o755`）。                                                               |
| [isOfType](isOfType.md)                     | 判断给定个 `value` 是否匹配指定个类型字符串：基本类型用 `typeof`，复杂类型用兜底逻辑来判断。                                          |
| [isOneOfType](isOneOfType.md)               | `isOneOfType` 用来判断给定个 `value` 是否至少匹配提供个类型字符串里个一个；只要有匹配就返回 `true`，否则返回 `false`。                   |
| [isPlainObject](isPlainObject.md)           | 检查给定个 `value` 是不是普通对象；是就返回 `true`，勿是就返回 `false`。                                                 |
| [isPrimitive](isPrimitive.md)               | `isPrimitive` 用来判断给定个值是不是原始类型（`null`、`undefined`、`boolean`、`number`、`string`、`bigint`、`symbol`）。 |
| [isPromise](isPromise.md)                   | 判断给定个值是不是 `Promise`。                                                                             |
| [isRegEx](isRegEx.md)                       | 判断提供个值是不是一个 `RegExp` 实例。                                                                         |
| [isSet](isSet.md)                           | 判断给定个值是不是 `Set`。                                                                                 |
| [isStream](isStream.md)                     | `isStream` 用来检查给定个值是不是 stream 对象（Node.js 类 stream、`ReadableStream` 或 `WritableStream`）。          |
| [isString](isString.md)                     | `isString` 用来判断给定个值是不是字符串。                                                                       |
| [isSymbol](isSymbol.md)                     | `isSymbol` 用来判断给定个值是不是 `symbol` 类型：是 symbol 就返回 `true`，否则返回 `false`。                             |
| [isTrue](isTrue.md)                         | `isTrue` 判断给定个值是不是严格等于 `true`。                                                                   |
| [isUndefined](isUndefined.md)               | 检查给定个值是不是 `undefined`。                                                                           |
| [isValidDate](isValidDate.md)               | `isValidDate` 检查给定个值是不是一个有效个 `Date` 对象，只有对真正、弗是无效日期个情况才会返回 `true`。                               |
| [isWeakMap](isWeakMap.md)                   | 判断给定个 `value` 是勿是一个 `WeakMap` 实例。                                                                |
| [isWeakSet](isWeakSet.md)                   | 判断给定个 `value` 是不是对象个 `WeakSet`。                                                                  |

## 对比函数

| 函数： | 说明 |
|-----|----|
