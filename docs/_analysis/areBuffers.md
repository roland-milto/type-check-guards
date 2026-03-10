# Behavior of `areBuffers`

## Expected parameters

| Parameter | Data type | Description                                   |
|:----------|:----------|:----------------------------------------------|
| array     | buffer[]  | The array to be checked for buffer instances. |

Expected return type: `boolean`

## Specific tests

| Parameter <br> `array`                                                                      | Function <br> `areBuffers` | Description                                                                                                                                                                                              |
|:--------------------------------------------------------------------------------------------|:---------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `[{"type":"Buffer","data":[116,101,115,116]}]`                                              | true                       | Single Buffer. `buffer` expected for *array[0]*, but `uint8Array` given                                                                                                                                  |
| `[{"type":"Buffer","data":[116,101,115,116]},{"type":"Buffer","data":[49,50,51]}]`          | true                       | Multiple Buffers. `buffer` expected for *array[0]*, but `uint8Array` given. `buffer` expected for *array[1]*, but `uint8Array` given                                                                     |
| `[{"type":"Buffer","data":[]},{"type":"Buffer","data":[0]},{"type":"Buffer","data":[255]}]` | true                       | Buffers of different sizes. `buffer` expected for *array[0]*, but `uint8Array` given. `buffer` expected for *array[1]*, but `uint8Array` given. `buffer` expected for *array[2]*, but `uint8Array` given |
| `[]`                                                                                        | false                      | Empty array (not filled)                                                                                                                                                                                 |
| `[{"type":"Buffer","data":[116,101,115,116]},42]`                                           | false                      | Contains number. `buffer` expected for *array[0]*, but `uint8Array` given. `buffer` expected for *array[1]*, but `integer` given                                                                         |
| `[{"type":"Buffer","data":[116,101,115,116]},"x"]`                                          | false                      | Contains string. `buffer` expected for *array[0]*, but `uint8Array` given. `buffer` expected for *array[1]*, but `string` given                                                                          |
| `[{"type":"Buffer","data":[116,101,115,116]},{}]`                                           | false                      | Contains object. `buffer` expected for *array[0]*, but `uint8Array` given. `buffer` expected for *array[1]*, but `object` given                                                                          |
| `[{"type":"Buffer","data":[116,101,115,116]},{"0":1}]`                                      | false                      | Contains Uint8Array (not Buffer). `buffer` expected for *array[0]*, but `uint8Array` given. `buffer` expected for *array[1]*, but `uint8Array` given                                                     |
| `[{"type":"Buffer","data":[116,101,115,116]},null]`                                         | false                      | Contains null. `buffer` expected for *array[0]*, but `uint8Array` given. `buffer` expected for *array[1]*, but `null` given                                                                              |
| `[{"type":"Buffer","data":[116,101,115,116]},null]`                                         | false                      | Contains undefined. `buffer` expected for *array[0]*, but `uint8Array` given. `buffer` expected for *array[1]*, but `undefined` given                                                                    |

## Default tests

| Parameter <br> `array`         | Function <br> `areBuffers` | Description                                                                                           |
|:-------------------------------|:---------------------------|:------------------------------------------------------------------------------------------------------|
| ""                             | false                      | Empty string. `buffer[]` expected for *array*, but `string` given                                     |
| " "                            | false                      | Only space string. `buffer[]` expected for *array*, but `string` given                                |
| "\r"                           | false                      | Carriage return. `buffer[]` expected for *array*, but `string` given                                  |
| "integer"                      | false                      | Data type returned by `getTypeOf()`. `buffer[]` expected for *array*, but `string` given              |
| "Roland Milto"                 | false                      | Two word string. `buffer[]` expected for *array*, but `string` given                                  |
| "äöüß"                         | false                      | Non-ASCII (German umlauts). `buffer[]` expected for *array*, but `string` given                       |
| "你好"                           | false                      | Non-Latin characters. `buffer[]` expected for *array*, but `string` given                             |
| "🙂"                           | false                      | Emoji string. `buffer[]` expected for *array*, but `string` given                                     |
| 42                             | false                      | Positive number. `buffer[]` expected for *array*, but `integer` given                                 |
| -273                           | false                      | Negative number (0 Kelvin). `buffer[]` expected for *array*, but `integer` given                      |
| NaN                            | false                      | `NaN` (Not a Number). `buffer[]` expected for *array*, but `nan` given                                |
| Infinity                       | false                      | Positive Infinity. `buffer[]` expected for *array*, but `number` given                                |
| -Infinity                      | false                      | Negative Infinity. `buffer[]` expected for *array*, but `number` given                                |
| 0                              | false                      | BigInt zero `0n`. `buffer[]` expected for *array*, but `bigint` given                                 |
| 42                             | false                      | BigInt `42n`. `buffer[]` expected for *array*, but `bigint` given                                     |
| true                           | false                      | Boolean. `buffer[]` expected for *array*, but `boolean` given                                         |
| true                           | false                      | Boolean object `Boolean(true)`. `buffer[]` expected for *array*, but `boolean` given                  |
| null                           | false                      | Null. `buffer[]` expected for *array*, but `null` given                                               |
| undefined                      | false                      | Undefined. `buffer[]` expected for *array*, but `undefined` given                                     |
| Symbol()                       | false                      | Symbol. `buffer[]` expected for *array*, but `symbol` given                                           |
| /./                            | false                      | RegExp. `buffer[]` expected for *array*, but `regExp` given                                           |
| /^Roland$/i                    | false                      | RegExp with flags. `buffer[]` expected for *array*, but `regExp` given                                |
| `{}`                           | false                      | Empty plain object. `buffer[]` expected for *array*, but `object` given                               |
| `{"dev":"Roland Milto"}`       | false                      | Non-empty plain object. `buffer[]` expected for *array*, but `object` given                           |
| Date(2026-01-31T16:23:53.588Z) | false                      | `new Date()` object. `buffer[]` expected for *array*, but `date` given                                |
| Date(Invalid)                  | false                      | Invalid Date object. `buffer[]` expected for *array*, but `date` given                                |
| Error                          | false                      | `new Error()` object. `buffer[]` expected for *array*, but `error` given                              |
| new Map()                      | false                      | Empty map `new Map()`. `buffer[]` expected for *array*, but `map` given                               |
| new Set()                      | false                      | Empty set `new Set()`. `buffer[]` expected for *array*, but `set` given                               |
| new Map([["k", "v"]])          | false                      | Non-empty map `new Map([['k', 'v']])`. `buffer[]` expected for *array*, but `map` given               |
| new Set([1, 2, 3])             | false                      | Non-empty set `new Set([1, 2, 3])`. `buffer[]` expected for *array*, but `set` given                  |
| [Object: null prototype] {}    | false                      | Object without prototype (Object.create(null)). `buffer[]` expected for *array*, but `object` given   |
| `[]`                           | false                      | Empty array. `buffer[]` expected for *array*, but `array` given                                       |
| `[null]`                       | false                      | Array with `undefined` (but returning `[null]`). `buffer[]` expected for *array*, but `array` given   |
| `[null,null,null]`             | false                      | Sparse array (length 3, empty slots). `buffer[]` expected for *array*, but `array` given              |
| `[["nested"]]`                 | false                      | Nested array. `buffer[]` expected for *array*, but `array` given                                      |
| `["Birthday",18,8,1990]`       | false                      | Mixed array. `buffer[]` expected for *array*, but `array` given                                       |
| ()=>{}                         | false                      | Function `() => {}`. `buffer[]` expected for *array*, but `function` given                            |
| async()=>{}                    | false                      | Async function `async () => {}`. `buffer[]` expected for *array*, but `function` given                |
| function*(){yield 1;}          | false                      | Generator function `function* () { yield 1; }`. `buffer[]` expected for *array*, but `function` given |

<br>

---

<small>The file was generated on 31 January 2026 at 16:23:53 (UTC) with the use of *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** by *
*[Roland Milto](https://roland-milto.de/)**.</small>