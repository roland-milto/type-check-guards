# Behavior of `areBigInts`

## Expected parameters

| Parameter | Data type | Description         |
|:----------|:----------|:--------------------|
| array     | bigint[]  | The value to check. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `array` | Function <br> `areBigInts` | Description                                                                        |
|:-----------------------|:---------------------------|:-----------------------------------------------------------------------------------|
| `[Unserializable]`     | true                       | Single BigInt                                                                      |
| `[Unserializable]`     | true                       | Multiple BigInts                                                                   |
| `[Unserializable]`     | true                       | Mixed BigInts (zero/negative/positive)                                             |
| `[]`                   | false                      | Empty array (not filled)                                                           |
| `[Unserializable]`     | false                      | Contains number. `bigint` expected for *array[1]*, but `integer` given             |
| `[Unserializable]`     | false                      | Contains string. `bigint` expected for *array[1]*, but `decimal` given             |
| `[Unserializable]`     | false                      | Contains boxed BigInt object. `bigint` expected for *array[1]*, but `bigInt` given |
| `[Unserializable]`     | false                      | Contains null. `bigint` expected for *array[1]*, but `null` given                  |
| `[Unserializable]`     | false                      | Contains undefined. `bigint` expected for *array[1]*, but `undefined` given        |

## Default tests

| Parameter <br> `array`         | Function <br> `areBigInts` | Description                                                                                           |
|:-------------------------------|:---------------------------|:------------------------------------------------------------------------------------------------------|
| ""                             | false                      | Empty string. `bigint[]` expected for *array*, but `string` given                                     |
| " "                            | false                      | Only space string. `bigint[]` expected for *array*, but `string` given                                |
| "\r"                           | false                      | Carriage return. `bigint[]` expected for *array*, but `string` given                                  |
| "integer"                      | false                      | Data type returned by `getTypeOf()`. `bigint[]` expected for *array*, but `string` given              |
| "Roland Milto"                 | false                      | Two word string. `bigint[]` expected for *array*, but `string` given                                  |
| "äöüß"                         | false                      | Non-ASCII (German umlauts). `bigint[]` expected for *array*, but `string` given                       |
| "你好"                           | false                      | Non-Latin characters. `bigint[]` expected for *array*, but `string` given                             |
| "🙂"                           | false                      | Emoji string. `bigint[]` expected for *array*, but `string` given                                     |
| 42                             | false                      | Positive number. `bigint[]` expected for *array*, but `integer` given                                 |
| -273                           | false                      | Negative number (0 Kelvin). `bigint[]` expected for *array*, but `integer` given                      |
| NaN                            | false                      | `NaN` (Not a Number). `bigint[]` expected for *array*, but `nan` given                                |
| Infinity                       | false                      | Positive Infinity. `bigint[]` expected for *array*, but `number` given                                |
| -Infinity                      | false                      | Negative Infinity. `bigint[]` expected for *array*, but `number` given                                |
| 0                              | false                      | BigInt zero `0n`. `bigint[]` expected for *array*, but `bigint` given                                 |
| 42                             | false                      | BigInt `42n`. `bigint[]` expected for *array*, but `bigint` given                                     |
| true                           | false                      | Boolean. `bigint[]` expected for *array*, but `boolean` given                                         |
| true                           | false                      | Boolean object `Boolean(true)`. `bigint[]` expected for *array*, but `boolean` given                  |
| null                           | false                      | Null. `bigint[]` expected for *array*, but `null` given                                               |
| undefined                      | false                      | Undefined. `bigint[]` expected for *array*, but `undefined` given                                     |
| Symbol()                       | false                      | Symbol. `bigint[]` expected for *array*, but `symbol` given                                           |
| /./                            | false                      | RegExp. `bigint[]` expected for *array*, but `regExp` given                                           |
| /^Roland$/i                    | false                      | RegExp with flags. `bigint[]` expected for *array*, but `regExp` given                                |
| `{}`                           | false                      | Empty plain object. `bigint[]` expected for *array*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | false                      | Non-empty plain object. `bigint[]` expected for *array*, but `object` given                           |
| Date(2026-01-31T23:24:56.027Z) | false                      | `new Date()` object. `bigint[]` expected for *array*, but `date` given                                |
| Date(Invalid)                  | false                      | Invalid Date object. `bigint[]` expected for *array*, but `date` given                                |
| Error                          | false                      | `new Error()` object. `bigint[]` expected for *array*, but `error` given                              |
| new Map()                      | false                      | Empty map `new Map()`. `bigint[]` expected for *array*, but `map` given                               |
| new Set()                      | false                      | Empty set `new Set()`. `bigint[]` expected for *array*, but `set` given                               |
| new Map([["k", "v"]])          | false                      | Non-empty map `new Map([['k', 'v']])`. `bigint[]` expected for *array*, but `map` given               |
| new Set([1, 2, 3])             | false                      | Non-empty set `new Set([1, 2, 3])`. `bigint[]` expected for *array*, but `set` given                  |
| [Object: null prototype] {}    | false                      | Object without prototype (Object.create(null)). `bigint[]` expected for *array*, but `object` given   |
| `[]`                           | false                      | Empty array. `bigint[]` expected for *array*, but `array` given                                       |
| `[null]`                       | false                      | Array with `undefined` (but returning `[null]`). `bigint[]` expected for *array*, but `array` given   |
| `[null,null,null]`             | false                      | Sparse array (length 3, empty slots). `bigint[]` expected for *array*, but `array` given              |
| `[["nested"]]`                 | false                      | Nested array. `bigint[]` expected for *array*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | false                      | Mixed array. `bigint[]` expected for *array*, but `array` given                                       |
| ()=>{}                         | false                      | Function `() => {}`. `bigint[]` expected for *array*, but `function` given                            |
| async()=>{}                    | false                      | Async function `async () => {}`. `bigint[]` expected for *array*, but `function` given                |
| function*(){yield 1;}          | false                      | Generator function `function* () { yield 1; }`. `bigint[]` expected for *array*, but `function` given |

<br>

---

<small>The file was generated on 31 January 2026 at 23:24:56 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>