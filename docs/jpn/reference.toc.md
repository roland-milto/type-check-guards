# 関数参照

## 関数

| 関数                                          | 説明                                                                                                              |
|---------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| [areArrays](areArrays.md)                   | `areArrays` は、値が要素がすべて配列で構成された、要素が入っている二次元配列かどうかを判定します。                                                         |
| [areBigInts](areBigInts.md)                 | `areBigInts` は、値が `bigint` 値のみを含む空でない配列であるかどうかを判定します。                                                           |
| [areBinaries](areBinaries.md)               | 指定された値が有効なバイナリ文字列の空でない配列であるかを確認し、すべての項目が検証に合格した場合にのみ `true` を返します。                                              |
| [areBooleans](areBooleans.md)               | `areBooleans` は、与えられた空でない配列がブール値のみを含むかどうかを確認し、含む場合は `true`、そうでない場合は `false` を返します。                              |
| [areBuffers](areBuffers.md)                 | `areBuffers` は、提供された値が空でない要素が埋まった配列であり、各要素がすべて `Buffer` であるかを確認し、該当する場合は `true`、それ以外は `false` を返します。            |
| [areDates](areDates.md)                     | `areDates` は、与えられた配列が空でなく、かつ `Date` オブジェクトのみを含むかどうかを判定し、すべての要素が有効な日付である場合にのみ `true` を返します。                      |
| [areDecimals](areDecimals.md)               | 配列内のすべての要素が10進数であり、かつ配列に要素が入っているかどうかを確認し、`true` または `false` を返します。                                              |
| [areEqual](areEqual.md)                     | `areEqual` は、配列内のすべての要素が指定された期待値と等しいかどうかを確認し、すべての項目が一致する非空配列の場合にのみ `true` を返します。                                |
| [areErrors](areErrors.md)                   | 配列が空でなく、`Error` オブジェクトのみを含むかどうかを確認し、`true` または `false` を返します。                                                   |
| [areFalse](areFalse.md)                     | `areFalse` は、渡された配列内のすべての要素が厳密に boolean の `false` であるかどうかをチェックします。                                              |
| [areFilledArrays](areFilledArrays.md)       | `areFilledArrays` は、二次元配列が空でなく、かつそのすべてのサブ配列が空でないかどうかをチェックします。                                                   |
| [areFinite](areFinite.md)                   | `areFinite` は、値が空でない配列であり、その要素がすべて有限数であるかどうかをチェックし、そうであれば `true` を、そうでなければ `false` を返します。                       |
| [areFloats](areFloats.md)                   | `areFloats` は、指定された配列が空でなく、かつその要素がすべて浮動小数点数であるかどうかを確認します。                                                       |
| [areHexadecimals](areHexadecimals.md)       | 配列内のすべての要素が16進数文字列であるかを確認し、空でない配列で全項目が有効な場合にのみ `true` を返します。                                                    |
| [areIndexesFound](areIndexesFound.md)       | `areIndexesFound` は、値が空でない配列であり、その要素がすべて有効なインデックスかどうかを確認し、該当する場合は `true`、そうでない場合は `false` を返します。                |
| [areIntegers](areIntegers.md)               | `areIntegers` は、指定された配列のすべての要素が整数かどうかを判定し、整数であれば `true`、そうでなければ `false` を返します。                                  |
| [areJson](areJson.md)                       | 配列のすべての要素が JSON 文字列であるかを確認し、配列に要素が入っていて各項目がすべて有効な JSON の場合にのみ `true` を返し、それ以外は `false` を返します。                   |
| [areMaps](areMaps.md)                       | `areMaps` は、指定された配列が空でなく、かつその要素がすべて `Map` インスタンスであるかどうかを判定します。                                                  |
| [areNaNs](areNaNs.md)                       | `areNaNs` は配列内のすべての要素が `NaN` かどうかを確認し、すべての要素が `NaN` の場合にのみ `true` を返します。                                        |
| [areNullOrUndefined](areNullOrUndefined.md) | 指定された配列のすべての要素が `null` または `undefined` であるかどうかを確認します。                                                           |
| [areNumbers](areNumbers.md)                 | `areNumbers` は、値が空でない配列であり、すべての要素が数値であるかどうかをチェックします。                                                            |
| [areNumerics](areNumerics.md)               | `areNumerics` は、値が空でない配列であり、すべての要素が数値かどうかを確認します。                                                                |
| [areObjects](areObjects.md)                 | `areObjects` は、提供された要素の入った配列にオブジェクトのみが含まれているかどうかを確認します。                                                         |
| [areOctals](areOctals.md)                   | `areOctals` は、提供された値が有効な8進数文字列の空でない配列であるかどうかを判定します。                                                             |
| [areOfType](areOfType.md)                   | 指定された `array` のすべての要素が、指定された `type` であるかどうかを確認します。                                                              |
| [areOneOfType](areOneOfType.md)             | `areOneOfType` は、空でない配列のすべての要素が指定された実行時型のいずれかであるかどうかをチェックします。                                                   |
| [arePlainObjects](arePlainObjects.md)       | 配列のすべての要素がプレーンオブジェクトかどうかを確認し、すべての要素が条件を満たす場合にのみ `true` を返します。                                                   |
| [arePrimitives](arePrimitives.md)           | `arePrimitives` は、提供された空でない配列のすべての要素がプリミティブ型であるかどうかを評価します。                                                      |
| [arePromises](arePromises.md)               | `arePromises` は、配列内のすべての要素が `Promise` インスタンスであるかどうかを判定します。                                                      |
| [areRegExes](areRegExes.md)                 | `areRegExes` は、値が `RegExp` オブジェクトのみを含む、要素が入った配列かどうかをチェックします。                                                    |
| [areSets](areSets.md)                       | 指定された空でない配列が `Set` インスタンスのみを含むかどうかを確認し、含む場合は `true`、それ以外は `false` を返します。                                        |
| [areStreams](areStreams.md)                 | `areStreams` は、値がすべての要素が `Stream` である要素数1以上の配列かどうかを判定します。                                                       |
| [areStrings](areStrings.md)                 | `areStrings` は、配列が空でなく、かつ全要素が文字列であるかを確認し、その場合にのみ `true` を返します。                                                  |
| [areSymbols](areSymbols.md)                 | 入力が要素が埋まった配列であり、その要素がすべてシンボルかどうかを確認し、`true` または `false` を返します。                                                  |
| [areTrue](areTrue.md)                       | 空でない配列がブール値の `true` のみを含むかどうかを確認します。                                                                            |
| [areUndefined](areUndefined.md)             | `areUndefined` は、渡された配列のすべての要素が `undefined` であるかどうかを確認します。                                                      |
| [areValidDates](areValidDates.md)           | 配列が空でなく、かつ有効な `Date` オブジェクトのみで構成されているかを判定します。                                                                   |
| [areWeakMaps](areWeakMaps.md)               | `areWeakMaps` は、値が空ではない配列であり、かつ各要素がすべて `WeakMap` であるかどうかを確認し、その場合にのみ `true` を返し、それ以外は `false` を返します。            |
| [areWeakSets](areWeakSets.md)               | 入力が空でない配列で、かつ各要素がすべて `WeakSet` の場合にのみ `true` を返すかどうかを確認します。                                                     |
| [getTypeOf](getTypeOf.md)                   | `getTypeOf` は、洗練された数値型や特定のオブジェクト種別を含め、与えられた値に対して詳細で人間が読みやすい型ラベルを返します。                                           |
| [isArray](isArray.md)                       | `isArray` は指定された値が配列かどうかを確認し、配列であれば `true`、そうでなければ `false` を返します。                                               |
| [isBigInt](isBigInt.md)                     | `isBigInt` は、与えられた値が `bigint` 型かどうかをチェックし、BigInt プリミティブであれば `true`、それ以外は `false` を返します。                         |
| [isBinary](isBinary.md)                     | `isBinary` は、値が（任意で `0b`/`0B` が付いた）2進文字列かどうかを判定し、`true` または `false` を返します。                                      |
| [isBoolean](isBoolean.md)                   | 指定された値が `boolean` かどうかを判定します。                                                                                   |
| [isBuffer](isBuffer.md)                     | 値が Node.js の `Buffer` かどうかを確認し、`true` または `false` を返します。                                                        |
| [isDate](isDate.md)                         | `isDate` は、渡された値が `Date` かどうかを判定し、`Date` インスタンスであれば `true`、それ以外は `false` を返します。                                 |
| [isDecimal](isDecimal.md)                   | `isDecimal` は、値が先頭/末尾に空白を含まず、有効な小数形式で表現された小数文字列かどうかを確認します。                                                      |
| [isEmpty](isEmpty.md)                       | 指定された値が空かどうかを判定し、`null`、`undefined`、空/空白のみの文字列、空の配列、空の `Map`/`Set`、または自身の列挙可能プロパティを持たないオブジェクトに対して `true` を返します。 |
| [isError](isError.md)                       | 指定された `value` が `Error` のインスタンスかどうかをチェックします。                                                                    |
| [isFalse](isFalse.md)                       | `isFalse` は、与えられた値がブールリテラル `false` と厳密に等しいかどうかをチェックします。                                                         |
| [isFilledArray](isFilledArray.md)           | `value` が少なくとも 1 要素を持つ配列かどうかを確認し、`true` または `false` を返します。                                                      |
| [isFinite](isFinite.md)                     | 指定された `value` が有限の `number` であるかどうかを判定します。                                                                      |
| [isFloat](isFloat.md)                       | `isFloat` は、与えられた `value` が有限の浮動小数点数（整数ではない `number`）かどうかを判定します。                                                |
| [isHexadecimal](isHexadecimal.md)           | `isHexadecimal` は、与えられた値が必須の `0x`/`0X` プレフィックスを持つ16進文字列リテラルかどうかをチェックします。                                        |
| [isIndexFound](isIndexFound.md)             | `isIndexFound` は、与えられた値が非負の整数であるかどうかを判定し、インデックスが見つかったことを示します。                                                   |
| [isInteger](isInteger.md)                   | 指定された `value` が安全な整数の数値かどうかを判定します。                                                                              |
| [isMap](isMap.md)                           | 指定された `value` が `Map` かどうかをチェックし、`Map` であれば `true`、そうでなければ `false` を返します。                                       |
| [isNaN](isNaN.md)                           | 文字列を変換せずに、提供された `value` が `number` 型の `NaN` かどうかを判定します。                                                         |
| [isNull](isNull.md)                         | 提供された `value` が `null` であるかどうかを判定します。                                                                           |
| [isNullOrUndefined](isNullOrUndefined.md)   | 指定された値が `null` または `undefined` かどうかをチェックします。                                                                    |
| [isNumber](isNumber.md)                     | `isNumber`は、値が有限で`NaN`ではない数値かどうかをチェックします。                                                                       |
| [isNumeric](isNumeric.md)                   | `isNumeric` は、与えられた `value` の解決された型を `NUMERIC_TYPES` と照合することで、その値が数値として扱われるかどうかを判定します。                          |
| [isObject](isObject.md)                     | 指定された `value` が `object`（`null` を除く）かどうかを判定します。                                                                 |
| [isOctal](isOctal.md)                       | 値が有効な8進リテラル文字列（例: `0o755`）かどうかを判定します。                                                                           |
| [isOfType](isOfType.md)                     | プリミティブには `typeof` を使用し、複雑な型にはフォールバックを用いて、指定された型文字列に与えられた `value` が一致するかどうかを判定します。                               |
| [isOneOfType](isOneOfType.md)               | `isOneOfType`は、与えられた`value`が提供された型文字列のうち少なくとも1つに一致するかどうかを判定し、いずれかの一致が見つかれば`true`を返し、そうでなければ`false`を返します。        |
| [isPlainObject](isPlainObject.md)           | 指定された `value` がプレーンオブジェクトかどうかを判定し、そうであれば `true`、そうでなければ `false` を返します。                                          |
| [isPrimitive](isPrimitive.md)               | `isPrimitive` は、指定された値がプリミティブ（`null`、`undefined`、`boolean`、`number`、`string`、`bigint`、`symbol`）かどうかを判定します。      |
| [isPromise](isPromise.md)                   | 指定された値が `Promise` かどうかを判定します。                                                                                   |
| [isRegEx](isRegEx.md)                       | 提供された値が `RegExp` インスタンスかどうかを判定します。                                                                              |
| [isSet](isSet.md)                           | 指定された値が `Set` かどうかを判定します。                                                                                       |
| [isStream](isStream.md)                     | `isStream` は、指定された値がストリームオブジェクト（Node.js のストリーム風、`ReadableStream`、または `WritableStream`）かどうかを確認します。               |
| [isString](isString.md)                     | `isString` は、指定された値が文字列かどうかを判定します。                                                                              |
| [isSymbol](isSymbol.md)                     | `isSymbol` は、指定された値が `symbol` 型かどうかを判定し、シンボルであれば `true`、それ以外は `false` を返します。                                    |
| [isTrue](isTrue.md)                         | `isTrue` は、与えられた値が `true` と厳密に等しいかどうかを判定します。                                                                    |
| [isUndefined](isUndefined.md)               | 指定された値が `undefined` かどうかをチェックします。                                                                               |
| [isValidDate](isValidDate.md)               | `isValidDate` は、与えられた値が有効な `Date` オブジェクトかどうかを確認し、実在する無効ではない日付に対してのみ `true` を返します。                               |
| [isWeakMap](isWeakMap.md)                   | 指定された `value` が `WeakMap` インスタンスかどうかを判定します。                                                                     |
| [isWeakSet](isWeakSet.md)                   | 指定された `value` がオブジェクトの `WeakSet` であるかどうかを判定します。                                                                 |

## 比較した関数

| 関数 | 説明 |
|----|----|
