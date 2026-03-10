# 函数引用

## 函数：

| 函数：                                         | 说明                                                                                              |
|---------------------------------------------|-------------------------------------------------------------------------------------------------|
| [areArrays](areArrays.md)                   | `areArrays` 用于判断某个值是否为已填充的二维数组，且其各项都为数组。                                                        |
| [areBigInts](areBigInts.md)                 | `areBigInts` 用于判断某个值是否为仅包含 `bigint` 值的非空数组。                                                     |
| [areBinaries](areBinaries.md)               | 检查所提供的值是否为由有效二进制字符串组成的非空数组，并且仅当所有项都通过验证时才返回 `true`。                                             |
| [areBooleans](areBooleans.md)               | `areBooleans` 用于检查给定的非空数组是否只包含布尔值；若是则返回 `true`，否则返回 `false`。                                    |
| [areBuffers](areBuffers.md)                 | `areBuffers` 用于检查所提供的值是否为非空、已填充的数组，且其中每个元素都是 `Buffer`；若是则返回 `true`，否则返回 `false`。                |
| [areDates](areDates.md)                     | `areDates` 用于判断给定数组是否已填充且仅包含 `Date` 对象，只有当所有元素都是有效日期时才返回 `true`。                                |
| [areDecimals](areDecimals.md)               | 检查数组中的所有元素是否为十进制数字且数组已填充，并返回 `true` 或 `false`。                                                  |
| [areEqual](areEqual.md)                     | `areEqual` 用于检查数组中的所有元素是否都等于给定的期望值；仅当数组非空且每一项都匹配时才返回 `true`。                                    |
| [areErrors](areErrors.md)                   | 检查数组是否非空且仅包含 `Error` 对象，并返回 `true` 或 `false`。                                                   |
| [areFalse](areFalse.md)                     | `areFalse` 用于检查所提供数组中的所有元素是否都严格等于布尔值 `false`。                                                   |
| [areFilledArrays](areFilledArrays.md)       | `areFilledArrays` 用于检查一个二维数组是否非空，并且其所有子数组都非空。                                                   |
| [areFinite](areFinite.md)                   | `areFinite` 用于检查某个值是否为非空数组，且其元素全部为有限数字；若是则返回 `true`，否则返回 `false`。                               |
| [areFloats](areFloats.md)                   | `areFloats` 用于检查给定数组是否已填充且其所有元素都是浮点数。                                                           |
| [areHexadecimals](areHexadecimals.md)       | 检查数组中的所有元素是否为十六进制字符串，仅在数组非空且每一项都有效时返回 `true`。                                                   |
| [areIndexesFound](areIndexesFound.md)       | `areIndexesFound` 用于检查某个值是否为非空数组，且其元素全部都是有效索引；满足条件则返回 `true`，否则返回 `false`。                      |
| [areIntegers](areIntegers.md)               | `areIntegers` 用于判断给定数组中的所有元素是否都是整数；如果是则返回 `true`，否则返回 `false`。                                  |
| [areJson](areJson.md)                       | 检查数组的所有元素是否都是 JSON 字符串；仅当数组非空且每一项都是有效 JSON 时返回 `true`；否则返回 `false`。                             |
| [areMaps](areMaps.md)                       | `areMaps` 用于判断给定数组是否为非空，并且其所有元素都是 `Map` 实例。                                                     |
| [areNaNs](areNaNs.md)                       | `areNaNs` 用于检查数组中的所有元素是否都是 `NaN`，并且仅当每个元素都是 `NaN` 时才返回 `true`。                                  |
| [areNullOrUndefined](areNullOrUndefined.md) | 检查给定数组中的所有元素是否都是 `null` 或 `undefined`。                                                          |
| [areNumbers](areNumbers.md)                 | `areNumbers` 用于检查某个值是否为非空数组，且所有元素都是数字。                                                          |
| [areNumerics](areNumerics.md)               | `areNumerics` 用于检查某个值是否为非空数组，且所有元素都是数值。                                                         |
| [areObjects](areObjects.md)                 | `areObjects` 检查所提供的已填充数组是否只包含对象。                                                                |
| [areOctals](areOctals.md)                   | `areOctals` 用于判断所提供的值是否为由有效八进制字符串组成的非空数组。                                                       |
| [areOfType](areOfType.md)                   | 检查给定 `array` 中的所有元素是否都是指定的 `type`。                                                              |
| [areOneOfType](areOneOfType.md)             | `areOneOfType` 用于检查非空数组中的所有元素是否都属于指定的运行时类型之一。                                                   |
| [arePlainObjects](arePlainObjects.md)       | 检查数组的所有元素是否都是纯对象，仅当每个元素都符合条件时才返回 `true`。                                                        |
| [arePrimitives](arePrimitives.md)           | `arePrimitives` 用于评估在提供的非空数组中，是否所有元素都是原始类型。                                                     |
| [arePromises](arePromises.md)               | `arePromises` 用于判断数组中的所有元素是否都是 `Promise` 实例。                                                    |
| [areRegExes](areRegExes.md)                 | `areRegExes` 用于检查某个值是否为一个已填充的数组，且仅包含 `RegExp` 对象。                                               |
| [areSets](areSets.md)                       | 检查给定的非空数组是否仅包含 `Set` 实例；若是则返回 `true`，否则返回 `false`。                                              |
| [areStreams](areStreams.md)                 | `areStreams` 用于判断某个值是否为一个已填充的数组，并且其中每个元素都是 `Stream`。                                            |
| [areStrings](areStrings.md)                 | `areStrings` 用于检查一个数组是否为非空且其所有元素都是字符串；仅在这种情况下返回 `true`。                                         |
| [areSymbols](areSymbols.md)                 | 检查输入是否为一个已填充数组且其元素全部为 symbol，并返回 `true` 或 `false`。                                              |
| [areTrue](areTrue.md)                       | 检查一个非空数组是否只包含布尔值 `true`。                                                                        |
| [areUndefined](areUndefined.md)             | `areUndefined` 用于检查所提供数组中的每个元素是否都是 `undefined`。                                                 |
| [areValidDates](areValidDates.md)           | 判断一个数组是否为非空且完全由有效的 `Date` 对象组成。                                                                 |
| [areWeakMaps](areWeakMaps.md)               | `areWeakMaps` 用于检查某个值是否为非空数组，且其中每个元素都是 `WeakMap`；仅在满足该条件时返回 `true`，否则返回 `false`。                |
| [areWeakSets](areWeakSets.md)               | 检查输入是否为非空数组且每个元素都是 `WeakSet`，仅在这种情况下返回 `true`。                                                  |
| [getTypeOf](getTypeOf.md)                   | `getTypeOf` 为给定值返回详细、便于阅读的类型标签，包括细化的数值类型和特定的对象种类。                                               |
| [isArray](isArray.md)                       | `isArray` 用于检查给定值是否为数组；如果是则返回 `true`，否则返回 `false`。                                              |
| [isBigInt](isBigInt.md)                     | `isBigInt` 用于检查给定值是否为 `bigint` 类型：对 BigInt 原始值返回 `true`，否则返回 `false`。                           |
| [isBinary](isBinary.md)                     | `isBinary` 用于判断一个值是否为二进制字符串（可选带 `0b`/`0B` 前缀），并返回 `true` 或 `false`。                             |
| [isBoolean](isBoolean.md)                   | 判断给定值是否为 `boolean`。                                                                             |
| [isBuffer](isBuffer.md)                     | 检查一个值是否为 Node.js `Buffer` 并返回 `true` 或 `false`。                                                 |
| [isDate](isDate.md)                         | `isDate` 用于判断提供的值是否为 `Date`：对 `Date` 实例返回 `true`，否则返回 `false`。                                  |
| [isDecimal](isDecimal.md)                   | `isDecimal` 用于检查某个值是否为十进制字符串表示：不包含前后空白，并且具有有效的十进制格式。                                            |
| [isEmpty](isEmpty.md)                       | 判断给定值是否为空：对 `null`、`undefined`、空字符串/仅空白字符串、空数组、空 `Map`/`Set`，或没有自有可枚举属性的对象返回 `true`。            |
| [isError](isError.md)                       | 检查给定的 `value` 是否为 `Error` 的实例。                                                                  |
| [isFalse](isFalse.md)                       | `isFalse` 检查给定值是否与布尔字面量 `false` 严格相等。                                                           |
| [isFilledArray](isFilledArray.md)           | 检查 `value` 是否为至少包含一个元素的数组，并返回 `true` 或 `false`。                                                 |
| [isFinite](isFinite.md)                     | 判断给定的 `value` 是否为有限的 `number`。                                                                  |
| [isFloat](isFloat.md)                       | `isFloat` 用于判断给定的 `value` 是否为有限的浮点数（不是整数的 `number`）。                                            |
| [isHexadecimal](isHexadecimal.md)           | `isHexadecimal` 用于检查给定值是否为带有强制 `0x`/`0X` 前缀的十六进制字符串字面量。                                         |
| [isIndexFound](isIndexFound.md)             | `isIndexFound` 用于判断给定值是否为非负整数，从而表示已找到索引。                                                        |
| [isInteger](isInteger.md)                   | 判断给定的 `value` 是否为安全整数数字。                                                                        |
| [isMap](isMap.md)                           | 检查给定的 `value` 是否为 `Map`；如果是则返回 `true`，否则返回 `false`。                                             |
| [isNaN](isNaN.md)                           | 在不转换字符串的情况下，判断提供的 `value` 是否为 `number` 类型的 `NaN`。                                               |
| [isNull](isNull.md)                         | 确定提供的 `value` 是否为 `null`。                                                                       |
| [isNullOrUndefined](isNullOrUndefined.md)   | 检查给定值是否为 `null` 或 `undefined`。                                                                  |
| [isNumber](isNumber.md)                     | `isNumber` 用于检查某个值是否为有限且非 `NaN` 的数字。                                                            |
| [isNumeric](isNumeric.md)                   | `isNumeric` 通过将给定 `value` 的解析类型与 `NUMERIC_TYPES` 进行对比，来判断其是否被视为数值。                              |
| [isObject](isObject.md)                     | 判断给定的 `value` 是否为 `object`（不包括 `null`）。                                                         |
| [isOctal](isOctal.md)                       | 判断一个值是否为有效的八进制字面量字符串（例如 `0o755`）。                                                               |
| [isOfType](isOfType.md)                     | 判断给定的 `value` 是否匹配指定的类型字符串：对原始类型使用 `typeof`，对复杂类型使用回退方案。                                        |
| [isOneOfType](isOneOfType.md)               | `isOneOfType` 用于判断给定的 `value` 是否至少匹配所提供的某一个类型字符串；如果找到任意匹配则返回 `true`，否则返回 `false`。               |
| [isPlainObject](isPlainObject.md)           | 检查给定的 `value` 是否为纯对象；如果是则返回 `true`，否则返回 `false`。                                                |
| [isPrimitive](isPrimitive.md)               | `isPrimitive` 用于判断给定值是否为原始类型（`null`、`undefined`、`boolean`、`number`、`string`、`bigint`、`symbol`）。 |
| [isPromise](isPromise.md)                   | 判断给定值是否为 `Promise`。                                                                             |
| [isRegEx](isRegEx.md)                       | 判断提供的值是否为 `RegExp` 实例。                                                                          |
| [isSet](isSet.md)                           | 判断给定的值是否为 `Set`。                                                                                |
| [isStream](isStream.md)                     | `isStream` 用于检查给定值是否为流对象（Node.js 类流、`ReadableStream` 或 `WritableStream`）。                       |
| [isString](isString.md)                     | `isString` 用于判断给定值是否为字符串。                                                                       |
| [isSymbol](isSymbol.md)                     | `isSymbol` 用于判断给定值是否为 `symbol` 类型：对于 symbol 返回 `true`，否则返回 `false`。                             |
| [isTrue](isTrue.md)                         | `isTrue` 用于判断给定值是否与 `true` 严格相等。                                                                |
| [isUndefined](isUndefined.md)               | 检查给定值是否为 `undefined`。                                                                           |
| [isValidDate](isValidDate.md)               | `isValidDate` 用于检查给定值是否为有效的 `Date` 对象，并且仅对真实且非无效的日期返回 `true`。                                   |
| [isWeakMap](isWeakMap.md)                   | 判断给定的 `value` 是否为 `WeakMap` 实例。                                                                 |
| [isWeakSet](isWeakSet.md)                   | 判断给定的 `value` 是否为对象的 `WeakSet`。                                                                 |

## 对比函数

| 函数： | 说明 |
|-----|----|
