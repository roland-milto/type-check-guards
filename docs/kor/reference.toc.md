# 함수 참조

## 함수

| 함수                                          | 설명                                                                                                                    |
|---------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| [areArrays](areArrays.md)                   | `areArrays`는 값이 항목이 모두 배열로 이루어진, 채워진 2차원 배열인지 여부를 판별합니다.                                                              |
| [areBigInts](areBigInts.md)                 | `areBigInts`는 어떤 값이 `bigint` 값만을 포함하는 비어 있지 않은 배열인지 판별합니다.                                                            |
| [areBinaries](areBinaries.md)               | 제공된 값이 유효한 이진 문자열로 이루어진 비어 있지 않은 배열인지 확인하고, 모든 항목이 검증을 통과할 때만 `true`를 반환합니다.                                          |
| [areBooleans](areBooleans.md)               | `areBooleans`는 주어진 비어 있지 않은 배열이 불리언 값만 포함하는지 확인하며, 그렇다면 `true`를 반환하고 그렇지 않으면 `false`를 반환합니다.                          |
| [areBuffers](areBuffers.md)                 | `areBuffers`는 제공된 값이 비어 있지 않고 요소가 채워진 배열이며 모든 요소가 `Buffer`인지 확인하고, 그렇다면 `true`를 반환하고 그렇지 않으면 `false`를 반환합니다.          |
| [areDates](areDates.md)                     | `areDates`는 주어진 배열이 채워져 있고 `Date` 객체만 포함하는지 판단하며, 모든 요소가 유효한 날짜일 때만 `true`를 반환합니다.                                    |
| [areDecimals](areDecimals.md)               | 배열의 모든 요소가 10진수 숫자인지, 그리고 배열이 채워져 있는지 확인하여 `true` 또는 `false`를 반환합니다.                                                  |
| [areEqual](areEqual.md)                     | `areEqual`은 배열의 모든 요소가 주어진 예상 값과 같은지 확인하며, 비어 있지 않은 배열에서 모든 항목이 일치하는 경우에만 `true`를 반환합니다.                              |
| [areErrors](areErrors.md)                   | 배열이 비어 있지 않고 `Error` 객체만 포함하는지 확인하여 `true` 또는 `false`를 반환합니다.                                                         |
| [areFalse](areFalse.md)                     | `areFalse`는 제공된 배열의 모든 요소가 불리언 `false`와 엄격하게 일치하는지 확인합니다.                                                             |
| [areFilledArrays](areFilledArrays.md)       | `areFilledArrays`는 2차원 배열이 비어 있지 않고 모든 하위 배열이 비어 있지 않은지 확인합니다.                                                        |
| [areFinite](areFinite.md)                   | `areFinite`는 값이 비어 있지 않은 배열이며 그 요소가 모두 유한한 숫자인지 확인하고, 그렇다면 `true`를, 그렇지 않으면 `false`를 반환합니다.                           |
| [areFloats](areFloats.md)                   | `areFloats`는 주어진 배열이 채워져 있고 모든 요소가 부동소수점 수인지 확인합니다.                                                                   |
| [areHexadecimals](areHexadecimals.md)       | 배열의 모든 요소가 16진수 문자열인지 확인하며, 비어 있지 않은 배열에서 모든 항목이 유효할 때만 `true`를 반환합니다.                                                |
| [areIndexesFound](areIndexesFound.md)       | `areIndexesFound`는 값이 비어 있지 않은 배열이며 그 요소들이 모두 유효한 인덱스인지 확인하고, 그렇다면 `true`를, 그렇지 않으면 `false`를 반환합니다.                   |
| [areIntegers](areIntegers.md)               | `areIntegers`는 주어진 배열의 모든 요소가 정수인지 판단하여, 모두 정수이면 `true`를 반환하고 그렇지 않으면 `false`를 반환합니다.                                 |
| [areJson](areJson.md)                       | 배열의 모든 요소가 JSON 문자열인지 확인하며, 배열이 채워져 있고 모든 항목이 유효한 JSON일 때만 `true`를 반환하고, 그렇지 않으면 `false`를 반환합니다.                      |
| [areMaps](areMaps.md)                       | `areMaps`는 주어진 배열이 비어 있지 않고 모든 요소가 `Map` 인스턴스인지 여부를 판단합니다.                                                            |
| [areNaNs](areNaNs.md)                       | `areNaNs`는 배열의 모든 요소가 `NaN`인지 확인하며, 모든 요소가 `NaN`일 때에만 `true`를 반환합니다.                                                  |
| [areNullOrUndefined](areNullOrUndefined.md) | 주어진 배열의 모든 요소가 `null` 또는 `undefined`인지 확인합니다.                                                                         |
| [areNumbers](areNumbers.md)                 | `areNumbers`는 값이 비어 있지 않은 배열이고 모든 요소가 숫자인지 확인합니다.                                                                     |
| [areNumerics](areNumerics.md)               | `areNumerics`는 값이 비어 있지 않은 배열이며 모든 요소가 숫자인지 확인합니다.                                                                    |
| [areObjects](areObjects.md)                 | `areObjects`는 제공된 채워진 배열이 객체만 포함하는지 확인합니다.                                                                            |
| [areOctals](areOctals.md)                   | `areOctals`는 제공된 값이 유효한 8진수 문자열로 이루어진 비어 있지 않은 배열인지 판별합니다.                                                            |
| [areOfType](areOfType.md)                   | 주어진 `array`의 모든 요소가 지정된 `type`인지 확인합니다.                                                                               |
| [areOneOfType](areOneOfType.md)             | `areOneOfType`는 비어 있지 않은 배열의 모든 요소가 지정된 런타임 타입 중 하나에 해당하는지 확인합니다.                                                     |
| [arePlainObjects](arePlainObjects.md)       | 배열의 모든 요소가 순수 객체인지 확인하며, 모든 요소가 조건을 만족할 때만 `true`를 반환합니다.                                                             |
| [arePrimitives](arePrimitives.md)           | `arePrimitives`는 제공된 비어 있지 않은 배열의 모든 요소가 원시 타입인지 평가합니다.                                                               |
| [arePromises](arePromises.md)               | `arePromises`는 배열의 모든 요소가 `Promise` 인스턴스인지 여부를 판별합니다.                                                                 |
| [areRegExes](areRegExes.md)                 | `areRegExes`는 값이 `RegExp` 객체만 포함하는 채워진 배열인지 확인합니다.                                                                    |
| [areSets](areSets.md)                       | 주어진 비어 있지 않은 배열이 `Set` 인스턴스만 포함하는지 확인하며, 그렇다면 `true`를 반환하고 그렇지 않으면 `false`를 반환합니다.                                    |
| [areStreams](areStreams.md)                 | `areStreams`는 값이 모든 요소가 `Stream`인 채워진 배열인지 여부를 판별합니다.                                                                 |
| [areStrings](areStrings.md)                 | `areStrings`는 배열이 비어 있지 않고 모든 요소가 문자열인지 확인하며, 그 경우에만 `true`를 반환합니다.                                                   |
| [areSymbols](areSymbols.md)                 | 입력이 요소가 채워진 배열이며 그 요소가 모두 심볼인지 확인하여 `true` 또는 `false`를 반환합니다.                                                         |
| [areTrue](areTrue.md)                       | 비어 있지 않은 배열이 불리언 `true` 값만 포함하는지 확인합니다.                                                                               |
| [areUndefined](areUndefined.md)             | `areUndefined`는 제공된 배열의 모든 요소가 `undefined`인지 확인합니다.                                                                   |
| [areValidDates](areValidDates.md)           | 배열이 비어 있지 않고 전부 유효한 `Date` 객체로만 구성되어 있는지 판단합니다.                                                                       |
| [areWeakMaps](areWeakMaps.md)               | `areWeakMaps`는 값이 비어 있지 않은 배열이며 모든 요소가 `WeakMap`인지 확인하고, 그 경우에만 `true`를 반환하며 그렇지 않으면 `false`를 반환합니다.                  |
| [areWeakSets](areWeakSets.md)               | 입력이 비어 있지 않은 배열이며 모든 요소가 `WeakSet`인 경우에만 `true`를 반환하는지 확인합니다.                                                         |
| [getTypeOf](getTypeOf.md)                   | `getTypeOf`는 정제된 숫자 타입과 특정 객체 종류를 포함하여, 주어진 값에 대한 상세하고 사람이 읽기 쉬운 타입 라벨을 반환합니다.                                        |
| [isArray](isArray.md)                       | `isArray`는 주어진 값이 배열인지 확인하고, 배열이면 `true`를 반환하며 그렇지 않으면 `false`를 반환합니다.                                                |
| [isBigInt](isBigInt.md)                     | `isBigInt`는 주어진 값이 `bigint` 타입인지 확인하며, BigInt 기본값에는 `true`를, 그 외에는 `false`를 반환합니다.                                    |
| [isBinary](isBinary.md)                     | `isBinary`는 값이 이진 문자열인지(`0b`/`0B` 접두사는 선택 사항) 판별하고 `true` 또는 `false`를 반환합니다.                                          |
| [isBoolean](isBoolean.md)                   | 주어진 값이 `boolean`인지 여부를 판별합니다.                                                                                         |
| [isBuffer](isBuffer.md)                     | 값이 Node.js `Buffer`인지 확인하고 `true` 또는 `false`를 반환합니다.                                                                  |
| [isDate](isDate.md)                         | `isDate`는 제공된 값이 `Date`인지 판단하며, `Date` 인스턴스에는 `true`를 반환하고 그렇지 않으면 `false`를 반환합니다.                                    |
| [isDecimal](isDecimal.md)                   | `isDecimal`은 값이 앞뒤 공백 없이 유효한 10진수 형식을 갖는 10진수 문자열 표현인지 확인합니다.                                                         |
| [isEmpty](isEmpty.md)                       | 주어진 값이 비어 있는지 여부를 판단하며, `null`, `undefined`, 빈/공백 문자열, 빈 배열, 빈 `Map`/`Set`, 또는 자체 열거 가능한 속성이 없는 객체에 대해 `true`를 반환합니다. |
| [isError](isError.md)                       | 주어진 `value`가 `Error`의 인스턴스인지 확인합니다.                                                                                   |
| [isFalse](isFalse.md)                       | `isFalse`는 주어진 값이 불리언 리터럴 `false`와 엄격하게 동일한지 확인합니다.                                                                   |
| [isFilledArray](isFilledArray.md)           | `value`가 최소 한 개의 요소를 가진 배열인지 확인하여 `true` 또는 `false`를 반환합니다.                                                           |
| [isFinite](isFinite.md)                     | 주어진 `value`가 유한한 `number`인지 여부를 판별합니다.                                                                                |
| [isFloat](isFloat.md)                       | `isFloat`는 주어진 `value`가 유한한 부동소수점 숫자(정수가 아닌 `number`)인지 여부를 판단합니다.                                                    |
| [isHexadecimal](isHexadecimal.md)           | `isHexadecimal`은 주어진 값이 필수 `0x`/`0X` 접두사를 가진 16진수 문자열 리터럴인지 확인합니다.                                                    |
| [isIndexFound](isIndexFound.md)             | `isIndexFound`는 주어진 값이 음수가 아닌 정수인지 판단하여, 인덱스가 발견되었음을 나타냅니다.                                                           |
| [isInteger](isInteger.md)                   | 주어진 `value`가 안전한 정수 숫자인지 여부를 판별합니다.                                                                                   |
| [isMap](isMap.md)                           | 주어진 `value`가 `Map`인지 확인하며, `Map`이면 `true`를 반환하고 그렇지 않으면 `false`를 반환합니다.                                               |
| [isNaN](isNaN.md)                           | 문자열을 변환하지 않고 제공된 `value`가 `number` 타입의 `NaN`인지 판별합니다.                                                                 |
| [isNull](isNull.md)                         | 제공된 `value`가 `null`인지 여부를 판별합니다.                                                                                      |
| [isNullOrUndefined](isNullOrUndefined.md)   | 주어진 값이 `null` 또는 `undefined`인지 확인합니다.                                                                                 |
| [isNumber](isNumber.md)                     | `isNumber`는 값이 유한한(non-`NaN`) 숫자인지 확인합니다.                                                                             |
| [isNumeric](isNumeric.md)                   | `isNumeric`은 주어진 `value`의 해석된 타입을 `NUMERIC_TYPES`와 대조하여 숫자로 간주되는지 판단합니다.                                              |
| [isObject](isObject.md)                     | 주어진 `value`가 `object`인지(`null` 제외) 판별합니다.                                                                             |
| [isOctal](isOctal.md)                       | 값이 유효한 8진수 리터럴 문자열인지(예: `0o755`) 판별합니다.                                                                               |
| [isOfType](isOfType.md)                     | 원시 타입에는 `typeof`를 사용하고, 복잡한 타입에는 폴백을 사용하여 주어진 `value`가 지정된 타입 문자열과 일치하는지 판단합니다.                                       |
| [isOneOfType](isOneOfType.md)               | `isOneOfType`은 주어진 `value`가 제공된 타입 문자열 중 최소 하나와 일치하는지 판단하며, 어떤 일치가 발견되면 `true`를, 그렇지 않으면 `false`를 반환합니다.              |
| [isPlainObject](isPlainObject.md)           | 주어진 `value`가 일반 객체인지 확인하고, 그렇다면 `true`를 반환하며 그렇지 않으면 `false`를 반환합니다.                                                  |
| [isPrimitive](isPrimitive.md)               | `isPrimitive`는 주어진 값이 원시 타입(`null`, `undefined`, `boolean`, `number`, `string`, `bigint`, `symbol`)인지 여부를 판별합니다.      |
| [isPromise](isPromise.md)                   | 주어진 값이 `Promise`인지 여부를 판별합니다.                                                                                         |
| [isRegEx](isRegEx.md)                       | 제공된 값이 `RegExp` 인스턴스인지 여부를 판별합니다.                                                                                     |
| [isSet](isSet.md)                           | 주어진 값이 `Set`인지 여부를 판별합니다.                                                                                             |
| [isStream](isStream.md)                     | `isStream`은 주어진 값이 스트림 객체(Node.js 스트림 유사 객체, `ReadableStream` 또는 `WritableStream`)인지 확인합니다.                           |
| [isString](isString.md)                     | `isString`은 주어진 값이 문자열인지 여부를 판별합니다.                                                                                   |
| [isSymbol](isSymbol.md)                     | `isSymbol`은 주어진 값이 `symbol` 타입인지 여부를 판단하며, 심볼이면 `true`를 반환하고 그렇지 않으면 `false`를 반환합니다.                                  |
| [isTrue](isTrue.md)                         | `isTrue`는 주어진 값이 `true`와 엄격하게 동일한지 여부를 판단합니다.                                                                         |
| [isUndefined](isUndefined.md)               | 주어진 값이 `undefined`인지 확인합니다.                                                                                           |
| [isValidDate](isValidDate.md)               | `isValidDate`는 주어진 값이 유효한 `Date` 객체인지 확인하며, 실제로 유효하고 무효하지 않은 날짜에 대해서만 `true`를 반환합니다.                                  |
| [isWeakMap](isWeakMap.md)                   | 주어진 `value`가 `WeakMap` 인스턴스인지 여부를 판별합니다.                                                                              |
| [isWeakSet](isWeakSet.md)                   | 주어진 `value`가 객체의 `WeakSet`인지 여부를 판별합니다.                                                                               |

## 비교한 함수

| 함수 | 설명 |
|----|----|
