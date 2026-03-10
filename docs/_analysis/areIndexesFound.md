# Behavior of `areIndexesFound`

## Expected parameters

| Parameter | Data type | Description                                   |
|:----------|:----------|:----------------------------------------------|
| array     | integer[] | The array to be checked for index compliance. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `array` | Function <br> `areIndexesFound` | Description                                                                            |
|:-----------------------|:--------------------------------|:---------------------------------------------------------------------------------------|
| `[0]`                  | true                            | Single index (found)                                                                   |
| `[0,1,2]`              | true                            | Multiple indexes (found)                                                               |
| `[5,6,10]`             | true                            | Indexes (found)                                                                        |
| `[100]`                | true                            | Single large-ish index (found)                                                         |
| `[0,9007199254740991]` | true                            | Includes MAX_SAFE_INTEGER (found)                                                      |
| `[]`                   | false                           | Empty array (not filled)                                                               |
| `[0,-1,2]`             | false                           | Contains -1 (not found)                                                                |
| `[0,0.5,2]`            | false                           | Contains float (not integer). `integer` expected for *array[1]*, but `float` given     |
| `[0,"NaN",2]`          | false                           | Contains NaN (not integer). `integer` expected for *array[1]*, but `nan` given         |
| `[0,"Infinity",2]`     | false                           | Contains Infinity (not integer). `integer` expected for *array[1]*, but `number` given |
| `[0,"a",2]`            | false                           | Contains string. `integer` expected for *array[1]*, but `string` given                 |
| `[null,1]`             | false                           | Contains null. `integer` expected for *array[0]*, but `null` given                     |
| `[null,1]`             | false                           | Contains undefined. `integer` expected for *array[0]*, but `undefined` given           |
| `[0,2]`                | false                           | Contains boxed Number object. `integer` expected for *array[1]*, but `number` given    |

## Default tests

| Parameter <br> `array`         | Function <br> `areIndexesFound` | Description                                                                                            |
|:-------------------------------|:--------------------------------|:-------------------------------------------------------------------------------------------------------|
| ""                             | false                           | Empty string. `integer[]` expected for *array*, but `string` given                                     |
| " "                            | false                           | Only space string. `integer[]` expected for *array*, but `string` given                                |
| "\r"                           | false                           | Carriage return. `integer[]` expected for *array*, but `string` given                                  |
| "integer"                      | false                           | Data type returned by `getTypeOf()`. `integer[]` expected for *array*, but `string` given              |
| "Roland Milto"                 | false                           | Two word string. `integer[]` expected for *array*, but `string` given                                  |
| "äöüß"                         | false                           | Non-ASCII (German umlauts). `integer[]` expected for *array*, but `string` given                       |
| "你好"                           | false                           | Non-Latin characters. `integer[]` expected for *array*, but `string` given                             |
| "🙂"                           | false                           | Emoji string. `integer[]` expected for *array*, but `string` given                                     |
| 42                             | false                           | Positive number. `integer[]` expected for *array*, but `integer` given                                 |
| -273                           | false                           | Negative number (0 Kelvin). `integer[]` expected for *array*, but `integer` given                      |
| NaN                            | false                           | `NaN` (Not a Number). `integer[]` expected for *array*, but `nan` given                                |
| Infinity                       | false                           | Positive Infinity. `integer[]` expected for *array*, but `number` given                                |
| -Infinity                      | false                           | Negative Infinity. `integer[]` expected for *array*, but `number` given                                |
| 0                              | false                           | BigInt zero `0n`. `integer[]` expected for *array*, but `bigint` given                                 |
| 42                             | false                           | BigInt `42n`. `integer[]` expected for *array*, but `bigint` given                                     |
| true                           | false                           | Boolean. `integer[]` expected for *array*, but `boolean` given                                         |
| true                           | false                           | Boolean object `Boolean(true)`. `integer[]` expected for *array*, but `boolean` given                  |
| null                           | false                           | Null. `integer[]` expected for *array*, but `null` given                                               |
| undefined                      | false                           | Undefined. `integer[]` expected for *array*, but `undefined` given                                     |
| Symbol()                       | false                           | Symbol. `integer[]` expected for *array*, but `symbol` given                                           |
| /./                            | false                           | RegExp. `integer[]` expected for *array*, but `regExp` given                                           |
| /^Roland$/i                    | false                           | RegExp with flags. `integer[]` expected for *array*, but `regExp` given                                |
| `{}`                           | false                           | Empty plain object. `integer[]` expected for *array*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | false                           | Non-empty plain object. `integer[]` expected for *array*, but `object` given                           |
| Date(2026-01-31T01:03:37.711Z) | false                           | `new Date()` object. `integer[]` expected for *array*, but `date` given                                |
| Date(Invalid)                  | false                           | Invalid Date object. `integer[]` expected for *array*, but `date` given                                |
| Error                          | false                           | `new Error()` object. `integer[]` expected for *array*, but `error` given                              |
| new Map()                      | false                           | Empty map `new Map()`. `integer[]` expected for *array*, but `map` given                               |
| new Set()                      | false                           | Empty set `new Set()`. `integer[]` expected for *array*, but `set` given                               |
| new Map([["k", "v"]])          | false                           | Non-empty map `new Map([['k', 'v']])`. `integer[]` expected for *array*, but `map` given               |
| new Set([1, 2, 3])             | false                           | Non-empty set `new Set([1, 2, 3])`. `integer[]` expected for *array*, but `set` given                  |
| [Object: null prototype] {}    | false                           | Object without prototype (Object.create(null)). `integer[]` expected for *array*, but `object` given   |
| `[]`                           | false                           | Empty array. `integer[]` expected for *array*, but `array` given                                       |
| `[null]`                       | false                           | Array with `undefined` (but returning `[null]`). `integer[]` expected for *array*, but `array` given   |
| `[null,null,null]`             | false                           | Sparse array (length 3, empty slots). `integer[]` expected for *array*, but `array` given              |
| `[["nested"]]`                 | false                           | Nested array. `integer[]` expected for *array*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | false                           | Mixed array. `integer[]` expected for *array*, but `array` given                                       |
| ()=>{}                         | false                           | Function `() => {}`. `integer[]` expected for *array*, but `function` given                            |
| async()=>{}                    | false                           | Async function `async () => {}`. `integer[]` expected for *array*, but `function` given                |
| function*(){yield 1;}          | false                           | Generator function `function* () { yield 1; }`. `integer[]` expected for *array*, but `function` given |

<br>

---

<small>The file was generated on 31 January 2026 at 01:03:37 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>